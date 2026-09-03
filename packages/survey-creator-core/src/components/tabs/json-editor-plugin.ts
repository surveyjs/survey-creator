import { Base, property, ListModel, Action, ComputedUpdater } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { SurveyTextWorker, SurveyTextWorkerError, SurveyTextWorkerLinterFinding } from "../../textWorker";
import { ComponentContainerModel } from "../component-container/component-container";
import { SidebarPageModel } from "../side-bar/side-bar-page-model";
import { getFindingSeverityKind, getLinterString, JsonEditorLinterModel } from "./json-editor-linter";
import { saveToFileHandler } from "../../utils/html-element-utils";
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
      this.linterValue = new JsonEditorLinterModel(this.creator,
        (at: number, row: number, column: number) => this.gotoError(at, row, column));
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

  protected setErrors(errors: Array<SurveyTextWorkerError>,
    findings?: Array<SurveyTextWorkerLinterFinding>): void {
    const actions = this.createErrorActions(errors);
    // the linter warnings follow the syntax and schema errors, and never replace them
    if (Array.isArray(findings)) {
      this.createErrorActions(findings).forEach(action => actions.push(action));
    }
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
      // a finding is shown by its own severity, the way the check list shows it: the two lists
      // sit on one screen, and an error that reads as a warning in one of them reads as two
      // different verdicts on one defect. A JSON error is an error by nature.
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
          fixError: () => {
            this.text = error.fixError(this.text);
          },
          fixButtonIcon: "icon-fix",
          //todo
          fixButtonTitle: "Fix error"
        }
      }));
    });
    return res;
  }
  public processErrors(text: string): void {
    this.errorActionCounter = 1;
    const textWorker: SurveyTextWorker = this.createTextWorker();
    let findings: Array<SurveyTextWorkerLinterFinding> = undefined;
    if (this.creator.showLinterPanel) {
      // only on valid JSON: while the text does not parse there is no model to analyse, and the
      // panel keeps its previous result
      if (textWorker.isJsonCorrect) {
        this.linter.run(textWorker);
        // the linter sorts by JSON path, the error list reads top to bottom: a path sort puts
        // "elements[10]" before "elements[3]", so the lines would jump around
        findings = this.linter.findings.slice().sort((el1, el2) => {
          if (el1.at === el2.at) return 0;
          if (el1.at < 0) return 1;
          if (el2.at < 0) return -1;
          return el1.at < el2.at ? -1 : 1;
        });
      } else {
        // the panel keeps its last result, but the error list does not: the positions of those
        // findings belong to the text they were computed from
        this.linter.setWaitingForValidJson();
      }
    }
    this.setErrors(textWorker.errors, findings);
  }
  public allowingDeactivate(): boolean {
    const textWorker: SurveyTextWorker = this.createTextWorker();
    if (!textWorker.isJsonCorrect) return undefined;
    return !textWorker.isJsonHasErrors;
  }
  private createTextWorker(): SurveyTextWorker {
    return new SurveyTextWorker(this.text, {
      validatePropertyValues: this.creator.validateJsonPropertyValues
    });
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

  private linterPage: SidebarPageModel;

  constructor(private creator: SurveyCreatorModel) {
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
    this.linterPage = creator.sidebar.addPage("linter", "svc-component-container");
    this.linterPage.locTitleName = "linter.panelTitle";
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
    if (this.creator.showLinterPanel) {
      // the list is built by the model, the page only hosts it
      this.linterPage.componentData = new ComponentContainerModel({
        elements: [{ componentName: "sv-list", componentData: { model: this.model.linter.checkList } }]
      });
      this.creator.sidebar.activePage = this.linterPage.id;
      this.linterPage.visible = true;
    }
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
    this.linterPage.visible = false;
    this.linterPage.componentData = undefined;
    this.creator.sidebar.header.reset();
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
