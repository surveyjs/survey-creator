import { Base, property, ListModel, Action } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { SurveyTextWorker, SurveyTextWorkerError } from "../../textWorker";

const maxErrorLength = 150;
export abstract class JsonEditorBaseModel extends Base {
  public isJSONChanged: boolean = false;
  public isProcessingImmediately: boolean = false;
  private static updateTextTimeout: number = 1000;
  private jsonEditorChangedTimeoutId: number = -1;
  @property() hasErrors: boolean;

  constructor(protected creator: CreatorBase) {
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
      if(!!window) {
        this.jsonEditorChangedTimeoutId = window.setTimeout(() => {
          self.jsonEditorChangedTimeoutId = -1;
          self.processErrors(self.text);
        }, JsonEditorBaseModel.updateTextTimeout);
      }
    }
  }

  private errorListValue: ListModel;
  public get errorList(): ListModel {
    if(!this.errorListValue) {
      this.errorListValue = new ListModel([], (action: Action) => {
        const error: SurveyTextWorkerError = action.data.error;
        if(!!error) this.gotoError(error.at, error.rowAt, error.columnAt);
      }, false);
      this.errorListValue.searchEnabled = false;
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
    if(hasErrors) {
      const actions = [];
      this.createErrorActions(errors).forEach(action => actions.push(action));
      this.errorList.setItems(actions);
    }
    this.hasErrors = hasErrors;
  }
  protected gotoError(at: number, row: number, column: number): void {}
  private createErrorActions(errors: Array<SurveyTextWorkerError>): Array<Action> {
    const res = [];
    let counter = 1;
    errors.forEach(error => {
      const line = error.rowAt > -1 ? "Line: " + (error.rowAt + 1) + ". " : "";
      let title = error.text;
      if(title.length > maxErrorLength + 3) {
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
        iconSize: 16,
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
  public model: JsonEditorBaseModel;
  constructor(private creator: CreatorBase) { }
  public activate(): void {
    this.model = this.createModel(this.creator);
  }
  public deactivate(): boolean {
    if (this.model) {
      const textWorker: SurveyTextWorker = new SurveyTextWorker(this.model.text);
      if (!textWorker.isJsonCorrect) {
        return false;
      }
      if (!this.model.readOnly && this.model.isJSONChanged) {
        this.creator.selectedElement = undefined;
        this.creator.text = this.model.text;
        this.creator.selectedElement = this.creator.survey;
        this.creator.setModified({ type: "JSON_EDITOR" });
      }
      this.model = undefined;
    }
    return true;
  }
  public defaultAllowingDeactivate(): boolean {
    if(!this.model) return true;
    const textWorker: SurveyTextWorker = new SurveyTextWorker(this.model.text);
    if(!textWorker.isJsonCorrect) return undefined;
    return !textWorker.isJsonHasErrors;
  }
  protected abstract createModel(
    creator: CreatorBase
  ): JsonEditorBaseModel;
}
