import { Base, property, ListModel, Action, ComputedUpdater } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { SurveyTextWorker, SurveyTextWorkerError } from "../../textWorker";
import { saveToFileHandler } from "../../utils/html-element-utils";
import { settings } from "../../creator-settings";

const maxErrorLength = 150;
export abstract class JsonEditorBaseModel extends Base {
  public isJSONChanged: boolean = false;
  public isProcessingImmediately: boolean = false;
  private static updateTextTimeout: number = 1000;
  private jsonEditorChangedTimeoutId: number = -1;
  @property() hasErrors: boolean;

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
    let hasErrors = errors.length > 0;
    if (hasErrors) {
      const actions = [];
      this.createErrorActions(errors).forEach(action => actions.push(action));
      this.errorList.setItems(actions);
    }
    this.hasErrors = hasErrors;
  }
  protected gotoError(at: number, row: number, column: number): void { }
  private createErrorActions(errors: Array<SurveyTextWorkerError>): Array<Action> {
    const res = [];
    let counter = 1;
    errors.forEach(error => {
      const line = error.rowAt > -1 ? "Line: " + (error.rowAt + 1) + ". " : "";
      let title = error.text;
      if (title.length > maxErrorLength + 3) {
        title = title.substring(0, maxErrorLength) + "...";
      }
      title = line + title;
      const at = error.at;
      res.push(new Action({
        id: "error_" + counter++,
        component: "json-error-item",
        title: title,
        tooltip: error.text,
        iconName: "icon-error",
        iconSize: "auto",
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
    const textWorker: SurveyTextWorker = new SurveyTextWorker(text);
    this.setErrors(textWorker.errors);
  }
  public get readOnly(): boolean {
    return this.creator.readOnly;
  }
}

export abstract class TabJsonEditorBasePlugin implements ICreatorPlugin {
  private inputFileElement: HTMLInputElement;
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
        if (!document) return;
        if (!this.inputFileElement) {
          this.inputFileElement = document.createElement("input");
          this.inputFileElement.type = "file";
          this.inputFileElement.style.display = "none";
          this.inputFileElement.onchange = () => {
            if (this.inputFileElement.files.length < 1) return;
            this.importFromFile(this.inputFileElement.files[0]);
            this.inputFileElement.value = "";
          };
        }
        this.inputFileElement.click();
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
    const textWorker: SurveyTextWorker = new SurveyTextWorker(this.model.text);
    if (!textWorker.isJsonCorrect) return undefined;
    return !textWorker.isJsonHasErrors;
  }
  protected abstract createModel(
    creator: SurveyCreatorModel
  ): JsonEditorBaseModel;
}
