import { Base, property, ListModel, Action, ComputedUpdater } from "survey-core";
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
export abstract class JsonEditorBaseModel extends Base {
  public isJSONChanged: boolean = false;
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
  public onPluginActivate(): void {
    this.text = this.creator.text;
    this.onEditorActivated();
    this.isJSONChanged = false;
  }
  protected onTextChanged(): void {
    if (this.jsonEditorChangedTimeoutId !== -1) {
      clearTimeout(this.jsonEditorChangedTimeoutId);
    }
    if (this.isProcessingImmediately) {
      this.jsonEditorChangedTimeoutId = -1;
    } else {
      const self: JsonEditorBaseModel = this;
      const window = DomWindowHelper.getWindow();
      if (!!window) {
        this.jsonEditorChangedTimeoutId = window.setTimeout(() => {
          self.jsonEditorChangedTimeoutId = -1;
          self.processErrors(self.text);
        }, JsonEditorBaseModel.updateTextTimeout);
      }
    }
  }

  private errorListValue: ListModel;
  public get errorList(): ListModel {
    if (!this.errorListValue) {
      this.errorListValue = new ListModel({
        items: [],
        onSelectionChanged: (action: Action) => {
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
    const actions = this.createErrorActions(errors);
    // setItems unconditionally: skipping it on an empty list leaves the previous entries in it
    this.errorList.setItems(actions);
    this.hasErrors = actions.length > 0;
  }
  protected gotoError(at: number, row: number, column: number): void { }
  private errorActionCounter: number = 1;
  private createErrorActions(errors: Array<SurveyTextWorkerError>): Array<Action> {
    const res = [];
    errors.forEach(error => {
      const isFinding = error instanceof SurveyTextWorkerLinterFinding;
      const line = error.rowAt > -1
        ? (<any>getLinterString("lineNumber"))["format"](error.rowAt + 1)
        : "";
      let title = error.text;
      if (title.length > maxErrorLength + 3) {
        title = title.substring(0, maxErrorLength) + "...";
      }
      title = line + title;
      // a finding is shown by its own severity; a JSON error is an error by nature
      const kind = isFinding
        ? getFindingSeverityKind((<SurveyTextWorkerLinterFinding>error).severity)
        : "error";
      res.push(new Action({
        id: (isFinding ? "linterfinding_" : "error_") + this.errorActionCounter++,
        component: "json-error-item",
        title: title,
        tooltip: error.text,
        iconName: kind === "error" ? "icon-error" : "icon-warning-24x24",
        iconSize: "auto",
        // the base item already carries the alert colours an error needs
        css: kind === "warning" ? "svc-json-errors__item--warning" : undefined,
        data: {
          error: error,
          showFixButton: error.isFixable,
          fixError: () => this.applyFix(error),
          fixButtonIcon: "icon-fix",
          fixButtonTitle: getFixTitle(error)
        }
      }));
    });
    return res;
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
  private cancelScheduledProcessing(): void {
    if (this.jsonEditorChangedTimeoutId !== -1) {
      clearTimeout(this.jsonEditorChangedTimeoutId);
      this.jsonEditorChangedTimeoutId = -1;
    }
  }
  public processErrors(text: string): void {
    this.errorActionCounter = 1;
    const textWorker: SurveyTextWorker = this.createTextWorker();
    // the check list localizes the findings before the error list shows them
    this.linter.update(textWorker);
    this.setErrors(textWorker.errors);
  }
  // undefined: the text does not parse, and nothing may override that. false: a finding at
  // "error" severity, which onActiveTabChanging may still allow. true: warnings at most.
  public allowingDeactivate(): boolean {
    const textWorker: SurveyTextWorker = this.createTextWorker();
    if (!textWorker.isJsonCorrect) return undefined;
    return !textWorker.isJsonHasErrors;
  }
  private lastTextWorker: SurveyTextWorker;
  private lastTextWorkerText: string;
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
    this.lastTextWorker = undefined;
    this.lastTextWorkerText = undefined;
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
  public activate(): void {
    this.model = this.createModel(this.creator);
  }
  public deactivate(): boolean {
    if (this.model) {
      if (!this.model.readOnly && this.model.isJSONChanged) {
        this.creator.selectedElement = undefined;
        this.creator.changeText(this.model.text, false, true);
        this.creator.selectedElement = this.creator.survey;
        this.creator.setModified({ type: "JSON_EDITOR" });
      }
      this.model.dispose();
      this.model = undefined;
    }
    return true;
  }
  public defaultAllowingDeactivate(): boolean {
    if (!this.model) return true;
    return this.model.allowingDeactivate();
  }
  protected abstract createModel(
    creator: SurveyCreatorModel
  ): JsonEditorBaseModel;
}
