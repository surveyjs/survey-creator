import { Base, property, ListModel, Action, ActionContainer, ComputedUpdater } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { SurveyTextWorker, SurveyTextWorkerError, SurveyTextWorkerLinterFinding } from "../../textWorker";
import {
  getCreatorLintOptions, getFindingSeverityKind, getFixTitle, getLinterString, JsonEditorLinterModel,
} from "./json-editor-linter";
import { saveToFileHandler } from "../../utils/html-element-utils";
import { getLocString } from "../../editorLocalization";
import { settings } from "../../creator-settings";
import { DomWindowHelper } from "survey-core";
import { CreatorDomHelper } from "../../dom-helper";

const maxErrorLength = 150;
export interface IJsonEditorState {
  creatorText: string;
  data: any;
}
export abstract class JsonEditorBaseModel extends Base {
  public isJSONChanged: boolean = false;
  private isApplying: boolean = false;
  public isProcessingImmediately: boolean = false;
  private static updateTextTimeout: number = 1000;
  private jsonEditorChangedTimeoutId: number = -1;
  @property() hasErrors: boolean;

  private linterValue: JsonEditorLinterModel;
  public get linter(): JsonEditorLinterModel {
    if (!this.linterValue) {
      this.linterValue = new JsonEditorLinterModel();
    }
    return this.linterValue;
  }

  constructor(protected creator: SurveyCreatorModel) {
    super();
  }
  public get text(): string {
    return this.getText();
  }
  public set text(val: string) {
    this.setText(val);
  }
  protected abstract getText(): string;
  protected abstract setText(val: string): void;
  protected onEditorActivated(): void { }
  public editorState: IJsonEditorState;
  public saveEditorState(): IJsonEditorState {
    const data = this.getEditorStateData();
    return data ? { creatorText: this.creator.text, data: data } : undefined;
  }
  protected getEditorStateData(): any {
    return undefined;
  }
  protected restoreEditorView(data: any): void { }
  public onPluginActivate(): void {
    const text = this.creator.text;
    const state = this.editorState;
    this.editorState = undefined;
    if (!!state && state.creatorText === text) {
      this.restoreEditorView(state.data);
      this.processErrors(this.text);
    } else {
      this.text = text;
    }
    this.onEditorActivated();
    this.isJSONChanged = false;
  }
  protected onTextChanged(): void {
    this.cancelScheduledProcessing();
    // setText has validated the text already, synchronously
    const needProcessErrors = !this.isProcessingImmediately;
    // with auto-save on, the pause after a keystroke applies the text the way a property change
    // in the designer does - otherwise the text waits for a read, a save or the tab switch
    if (!needProcessErrors && !this.creator.autoSaveEnabled) return;
    const self: JsonEditorBaseModel = this;
    const window = DomWindowHelper.getWindow();
    if (!window) return;
    this.jsonEditorChangedTimeoutId = window.setTimeout(() => {
      self.jsonEditorChangedTimeoutId = -1;
      if (needProcessErrors) {
        self.processErrors(self.text);
      }
      if (self.creator.autoSaveEnabled) {
        self.applyChanges();
      }
    }, JsonEditorBaseModel.updateTextTimeout);
  }
  private cancelScheduledProcessing(): void {
    if (this.jsonEditorChangedTimeoutId !== -1) {
      clearTimeout(this.jsonEditorChangedTimeoutId);
      this.jsonEditorChangedTimeoutId = -1;
    }
  }

  private errorListValue: ListModel;
  public get errorList(): ListModel {
    if (!this.errorListValue) {
      this.errorListValue = new ListModel({
        items: [],
        onSelectionChanged: (action: Action) => {
          if (this.isErrorTextSelected()) return;
          const error: SurveyTextWorkerError = action.data.error;
          if (!!error)this.gotoError(error.at, error.rowAt, error.columnAt);
        },
        allowSelection: false,
        searchEnabled: false
      });
      this.errorListValue.cssClasses = {
        item: "svc-json-errors__item",
        itemBody: "svc-json-error",
        itemsContainer: "svc-json-errors"
      };
      this.errorListValue.hasVerticalScroller = true;
    }
    return this.errorListValue;
  }

  protected setErrors(errors: Array<SurveyTextWorkerError>): void {
    this.disposeErrorActions();
    const actions = this.createErrorActions(errors);
    // setItems unconditionally: skipping it on an empty list leaves the previous entries in it
    this.errorList.setItems(actions);
    this.hasErrors = actions.length > 0;
  }
  private disposeErrorActions(): void {
    if (!this.errorListValue) return;
    this.errorListValue.actions.forEach(item => {
      const bar: ActionContainer = item.data && item.data.actions;
      if (!!bar) bar.dispose();
    });
  }
  protected gotoError(at: number, row: number, column: number): void { }
  private errorActionCounter: number = 1;
  private createErrorActions(errors: Array<SurveyTextWorkerError>): Array<Action> {
    const res = [];
    errors.forEach(error => {
      const isFinding = error instanceof SurveyTextWorkerLinterFinding;
      const title = this.getErrorItemTitle(error, true);
      const copyText = this.getErrorItemTitle(error, false);
      // a finding is shown by its own severity; a JSON error is an error by nature
      const kind = isFinding
        ? getFindingSeverityKind((<SurveyTextWorkerLinterFinding>error).severity)
        : "error";
      res.push(new Action({
        id: (isFinding ? "linterfinding_" : "error_") + this.errorActionCounter++,
        component: "json-error-item",
        title: title,
        iconName: kind === "error" ? "icon-error" : "icon-warning-24x24",
        iconSize: "auto",
        // the base item already carries the alert colours an error needs
        css: kind === "warning" ? "svc-json-errors__item--warning" : undefined,
        data: {
          error: error,
          actions: this.createErrorItemActions(error, copyText),
          showFixButton: error.isFixable,
          fixError: () => this.applyFix(error),
          fixButtonTitle: getFixTitle(error)
        }
      }));
    });
    return res;
  }
  private createErrorItemActions(error: SurveyTextWorkerError, copyText: string): ActionContainer {
    const items: Array<Action> = [];
    items.push(new Action({
      id: "copy",
      iconName: "icon-copy-16x16",
      iconSize: 16,
      showTitle: false,
      locTitleName: "ed.surveyJsonCopyButton",
      locTooltipName: "ed.surveyJsonCopyButton",
      action: () => this.copyErrorText(copyText)
    }));
    if (error.isFixable) {
      const fixTitle = getFixTitle(error);
      items.push(new Action({
        id: "fix",
        iconName: "icon-fix",
        iconSize: 24,
        showTitle: false,
        title: fixTitle,
        innerCss: "svc-json-error__fix-button",
        action: () => this.applyFix(error)
      }));
    }
    const container = new ActionContainer();
    container.containerCss = "svc-json-error__actions";
    container.setActionsAppearance({ style: "neutral", size: "xx-small", mode: "tertiary-muted-surface" });
    container.setItems(items);
    return container;
  }
  private getErrorItemTitle(error: SurveyTextWorkerError, truncate: boolean): string {
    const line = error.rowAt > -1
      ? (<any>getLinterString("lineNumber"))["format"](error.rowAt + 1)
      : "";
    let title = error.text || "";
    if (truncate && title.length > maxErrorLength + 3) {
      title = title.substring(0, maxErrorLength) + "...";
    }
    return line + title;
  }
  // A selection inside the message means the user is about to copy it. The same click would
  // otherwise move the caret and take the selection with it.
  private isErrorTextSelected(): boolean {
    const selection = DomWindowHelper.getSelection();
    if (!selection || selection.isCollapsed) return false;
    if (!selection.toString()) return false;
    const node = selection.anchorNode;
    if (!node) return false;
    const element = node.nodeType === 1 ? <Element><any>node : node.parentElement;
    if (!element || typeof element.closest !== "function") return false;
    return !!element.closest(".svc-json-error__title");
  }
  private copyErrorText(text: string): void {
    const win = DomWindowHelper.getWindow();
    const clipboard = win && win.navigator && win.navigator.clipboard;
    if (!clipboard || typeof clipboard.writeText !== "function") return;
    clipboard.writeText(text);
  }
  // The list is rebuilt a second after the last keystroke, so a button may still describe the text
  // as it was before the keystroke, and its error was positioned in that text. The fix is taken
  // from the worker of the current text: the very same error while the text has not moved on,
  // otherwise the finding of the same rule at the same path. When the current text has nothing
  // fixable there any more, the list is brought up to date and nothing else happens.
  private applyFix(error: SurveyTextWorkerError): void {
    const text = this.text;
    const textWorker = this.createTextWorker();
    const current = textWorker.errors.indexOf(error) > -1 ? error : this.findSameFinding(textWorker, error);
    if (!current || !current.isFixable) {
      this.cancelScheduledProcessing();
      this.processErrors(text);
      return;
    }
    const fixed = current.fixError(text);
    if (fixed !== text) {
      this.text = fixed;
    }
  }
  private findSameFinding(textWorker: SurveyTextWorker, error: SurveyTextWorkerError): SurveyTextWorkerError {
    if (!(error instanceof SurveyTextWorkerLinterFinding)) return undefined;
    const finding = <SurveyTextWorkerLinterFinding>error;
    return textWorker.errors.filter(item => item instanceof SurveyTextWorkerLinterFinding && item.isFixable &&
      item.ruleId === finding.ruleId && item.reason === finding.reason &&
      item.finding.path === finding.finding.path)[0];
  }
  public processErrors(text: string): void {
    this.errorActionCounter = 1;
    const textWorker: SurveyTextWorker = this.createTextWorker();
    // the check list localizes the findings before the error list shows them
    this.linter.update(textWorker);
    this.setErrors(textWorker.errors);
    this.errorsTextWorker = textWorker;
  }
  // true: nothing to apply, or applied. false: the text does not parse or has a blocking error,
  // and the survey is left as it is. Leaving the tab passes ignoreBlockingErrors: the host may
  // have allowed leaving with errors through onActiveTabChanging.
  public applyChanges(ignoreBlockingErrors: boolean = false): boolean {
    if (this.readOnly || !this.isJSONChanged) return true;
    // a handler of an event the apply itself raises may read creator.JSON, which applies this
    // very tab again: the apply already under way answers for it
    if (this.isApplying) return true;
    if (!ignoreBlockingErrors && this.allowingDeactivate() !== true) return false;
    this.isApplying = true;
    try {
      this.creator.selectedElement = undefined;
      this.creator.changeText(this.text, false, true);
      this.creator.selectedElement = this.creator.survey;
      // reset before setModified: with an auto-save delay of 0 the save runs synchronously, and
      // the save path applies the active tab again - the flag must already say there is nothing
      // left to apply
      this.isJSONChanged = false;
      this.creator.setModified({ type: "JSON_EDITOR" });
    } finally {
      this.isApplying = false;
    }
    return true;
  }
  // undefined: the text does not parse, and nothing may override that. false: a finding at
  // "error" severity, which onActiveTabChanging may still allow. true: warnings at most.
  // A plain check: creator.JSON, creator.text and save() ask it through applyChanges, and a read
  // must neither touch the error list nor cut the pause short.
  public allowingDeactivate(): boolean {
    const textWorker: SurveyTextWorker = this.createTextWorker();
    if (!textWorker.isJsonCorrect) return undefined;
    return !textWorker.isJsonHasErrors;
  }
  // The list is rebuilt a second after the last keystroke: a tab switch refused within that second
  // shows the errors it refuses for now. The worker is the one allowingDeactivate has just built,
  // so this does not lint again. A pending auto-save apply is cancelled with the timer; it would
  // be refused the same way.
  public updateOutdatedErrors(): void {
    if (this.errorsTextWorker === this.createTextWorker()) return;
    this.cancelScheduledProcessing();
    this.processErrors(this.text);
  }
  private lastTextWorker: SurveyTextWorker;
  private lastTextWorkerText: string;
  private errorsTextWorker: SurveyTextWorker;
  // One worker per text: allowingDeactivate asks right after processErrors has linted the same
  // text, and a lint pass over a large survey is not free
  private createTextWorker(): SurveyTextWorker {
    const text = this.text;
    if (!this.lastTextWorker || this.lastTextWorkerText !== text) {
      this.lastTextWorker = new SurveyTextWorker(text, { lintOptions: getCreatorLintOptions(this.creator) });
      this.lastTextWorkerText = text;
    }
    return this.lastTextWorker;
  }
  public dispose(): void {
    // the model is disposed as the tab closes: a pause it was waiting out has nothing to apply to
    this.cancelScheduledProcessing();
    this.disposeErrorActions();
    this.lastTextWorker = undefined;
    this.lastTextWorkerText = undefined;
    this.errorsTextWorker = undefined;
    super.dispose();
  }
  public get readOnly(): boolean {
    return this.creator.readOnly;
  }
}

export abstract class TabJsonEditorBasePlugin implements ICreatorPlugin {
  private importAction: Action;
  private exportAction: Action;
  private copyAction: Action;

  public static iconName = "icon-codeeditor-24x24";

  constructor(private creator: SurveyCreatorModel) {
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }

  public saveToFileHandler = saveToFileHandler;

  public exportToFile(fileName: string) {
    if (this.model) {
      const jsonBlob = new Blob([this.model.text], { type: "application/json" });
      this.saveToFileHandler(fileName, jsonBlob);
    }
  }
  public importFromFile(file: File, callback?: (json: string) => void) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const surveyJSONText = fileReader.result as string;
      if (this.model) {
        this.model.text = surveyJSONText;
        this.model.isJSONChanged = true;
      }
      callback && callback(surveyJSONText);
    };
    fileReader.readAsText(file);
  }
  public copyToClipboard() {
    if (this.model) {
      navigator.clipboard.writeText(this.model.text);
    }
  }

  protected createActions(): Array<Action> {
    const items: Array<Action> = [];

    this.importAction = new Action({
      id: "svc-json-import",
      iconName: "icon-load",
      iconSize: "auto",
      locTitleName: "ed.surveyJsonImportButton",
      locTooltipName: "ed.surveyJsonImportButton",
      visible: <any>new ComputedUpdater<boolean>(() => { return this.creator.activeTab === "json"; }),
      mode: "small",
      component: "sv-action-bar-item",
      needSeparator: true,
      action: () => {
        CreatorDomHelper.openFileDialog((file: File) => this.importFromFile(file));
      }
    });
    items.push(this.importAction);

    this.exportAction = new Action({
      id: "svc-json-export",
      iconName: "icon-download",
      iconSize: "auto",
      locTitleName: "ed.surveyJsonExportButton",
      locTooltipName: "ed.surveyJsonExportButton",
      visible: <any>new ComputedUpdater<boolean>(() => { return this.creator.activeTab === "json"; }),
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.exportToFile(settings.jsonEditor.exportFileName);
      }
    });
    items.push(this.exportAction);

    this.copyAction = new Action({
      id: "svc-json-copy",
      iconName: "icon-copy",
      iconSize: "auto",
      locTitleName: "ed.surveyJsonCopyButton",
      locTooltipName: "ed.surveyJsonCopyButton",
      visible: <any>new ComputedUpdater<boolean>(() => { return this.creator.activeTab === "json"; }),
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.copyToClipboard();
      }
    });
    items.push(this.copyAction);

    return items;
  }

  public model: JsonEditorBaseModel;
  private editorState: IJsonEditorState;
  public activate(): void {
    this.model = this.createModel(this.creator);
    this.model.editorState = this.editorState;
    this.editorState = undefined;
  }
  public deactivate(): boolean {
    if (this.model) {
      this.model.applyChanges(true);
      // text the survey refused to take is not kept: the tab opens with the survey's text again
      this.editorState = this.model.isJSONChanged ? undefined : this.model.saveEditorState();
      this.model.dispose();
      this.model = undefined;
    }
    return true;
  }
  public dispose(): void {
    if (this.editorState) {
      this.disposeEditorState(this.editorState.data);
      this.editorState = undefined;
    }
  }
  protected disposeEditorState(data: any): void { }
  public applyPendingChanges(): boolean {
    return !this.model || this.model.applyChanges();
  }
  // only a tab switch asks this: the refusal is where the user waits for the errors
  public defaultAllowingDeactivate(): boolean {
    if (!this.model) return true;
    const res = this.model.allowingDeactivate();
    if (res !== true) {
      this.model.updateOutdatedErrors();
    }
    return res;
  }
  protected abstract createModel(
    creator: SurveyCreatorModel
  ): JsonEditorBaseModel;
}
