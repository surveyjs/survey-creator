import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { editorLocalization } from "../editorLocalization";
import { setTimeout } from "timers";
export interface ISurveyObjectEditorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  showApplyButtonInEditors: boolean;
  useTabsInElementEditor: boolean;
  showObjectTitles: boolean;
  showTitlesInExpressions: boolean;
  onItemValueAddedCallback(
    propertyName: string,
    itemValue: Survey.ItemValue,
    itemValues: Array<Survey.ItemValue>
  );
  onMatrixDropdownColumnAddedCallback(
    matrix: Survey.Question,
    column: Survey.MatrixDropdownColumn,
    columns: Array<Survey.MatrixDropdownColumn>
  );
  onSetPropertyEditorOptionsCallback(
    propertyName: string,
    obj: Survey.Base,
    editorOptions: any
  );
  onGetErrorTextOnValidationCallback(
    propertyName: string,
    obj: Survey.Base,
    value: any
  ): string;
  onValueChangingCallback(options: any);
  onPropertyEditorObjectSetCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase
  );
  onPropertyEditorKeyDownCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    event: KeyboardEvent
  );
  onPropertyEditorModalShowDescriptionCallback(
    propertyName: string,
    obj: Survey.Base
  ): any;
  onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string;
  onConditionValueSurveyCreatedCallBack(
    valueQuestionName: string,
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    survey: Survey.Survey
  );
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    list: any[]
  );
}

export class SurveyPropertyEditorBase implements Survey.ILocalizableOwner {
  private editingValue_: any = null;
  private isApplyinNewValue: boolean = false;
  private objectValue: any;
  private valueUpdatingCounter: number = 0;
  private optionsValue: ISurveyObjectEditorOptions = null;
  private property_: Survey.JsonObjectProperty;
  private isRequriedValue: boolean = false;
  private titleValue: string;
  private isCustomDisplayName: boolean = false;
  private displayNameValue: string;
  public koValue: any;
  public koText: any;
  public koIsDefault: any;
  public koHasError: any;
  public koErrorText: any;
  public koDisplayError: any;
  public isTabProperty: boolean = false;
  public isInplaceProperty: boolean = false;
  public onChanged: (newValue: any) => any;
  public onGetLocale: () => string;
  public onValueUpdated: (newValue: any) => any;
  public setup() {}
  public beforeShow() {}
  constructor(property: Survey.JsonObjectProperty) {
    this.property_ = property;
    var self = this;
    this.koValue = ko.observable();
    this.koValue.subscribe(function(newValue) {
      self.onkoValueChanged(newValue);
    });
    this.koText = ko.computed(() => {
      return self.getValueText(self.koValue());
    });
    this.koIsDefault = ko.computed(function() {
      return self.property
        ? self.property.isDefaultValue(self.koValue())
        : false;
    });
    this.koHasError = ko.observable(false);
    this.koErrorText = ko.observable("");
    this.koDisplayError = ko.computed(function() {
      return self.koHasError() && !!self.koErrorText();
    });
    this.setIsRequired();
    this.setTitleAndDisplayName();
  }
  public get editorType(): string {
    throw "editorType is not defined";
  }
  public get editorTypeTemplate(): string {
    return this.editorType;
  }
  public get property(): Survey.JsonObjectProperty {
    return this.property_;
  }
  public get defaultValue(): any {
    return this.property.defaultValue;
  }
  public get editablePropertyName(): string {
    return this.property ? this.property.name : "";
  }
  public get readOnly() {
    return this.property ? this.property.readOnly : false;
  }
  public get alwaysShowEditor(): boolean {
    return false;
  }
  public get title(): string {
    return this.titleValue;
  }
  public get isDiplayNameVisible() {
    return (
      (!this.isTabProperty || !this.isModal) &&
      !this.isInplaceProperty &&
      this.displayName !== "."
    );
  }
  public get displayName(): string {
    return this.displayNameValue;
  }
  public set displayName(val: string) {
    this.isCustomDisplayName = true;
    this.displayNameValue = val;
  }
  public get showDisplayNameOnTop(): boolean {
    return this.isDiplayNameVisible && this.canShowDisplayNameOnTop;
  }
  public get canShowDisplayNameOnTop(): boolean {
    return true;
  }
  public get contentTemplateName(): string {
    var res = "propertyeditor";
    if (this.isModal) {
      res += "-modalcontent";
    } else {
      res += "-" + this.editorTypeTemplate;
    }
    return res;
  }
  public get isModal(): boolean {
    return false;
  }

  public get object(): any {
    return this.objectValue;
  }
  public set object(value: any) {
    this.objectValue = value;
    if (typeof value.registerFunctionOnPropertyValueChanged === "function") {
      value.registerFunctionOnPropertyValueChanged(
        this.property.name,
        () => this.updateValue(),
        this.property.name
      );
    }
    this.setIsRequired();
    this.setTitleAndDisplayName();
    this.setObject(this.object);
    this.updateValue();
    if (this.options && this.property) {
      this.options.onPropertyEditorObjectSetCallback(
        this.property.name,
        this.object,
        this
      );
    }
  }

  public getValueText(value: any): string {
    return value;
  }
  public get editingValue(): any {
    return this.editingValue_;
  }
  public set editingValue(value: any) {
    value = this.getCorrectedValue(value);
    this.setValueCore(value);
    this.onValueChanged();
  }
  public hasError(): boolean {
    this.koHasError(this.checkForErrors());
    return this.koHasError();
  }
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  public hasLocString(name: string) {
    return editorLocalization.hasString(name);
  }
  protected get isCurrentValueEmpty() {
    return this.isValueEmpty(this.koValue());
  }
  protected checkForErrors(): boolean {
    var errorText = "";
    if (this.isRequired || this.checkForItemValue()) {
      var er = this.isCurrentValueEmpty;
      if (er) {
        errorText = this.getLocString("pe.propertyIsEmpty");
      }
    }
    if (
      !errorText &&
      this.property &&
      this.options &&
      this.options.onGetErrorTextOnValidationCallback
    ) {
      errorText = this.options.onGetErrorTextOnValidationCallback(
        this.property.name,
        this.object,
        this.editingValue
      );
    }
    this.koErrorText(errorText);
    return errorText !== "";
  }
  private checkForItemValue() {
    //TODO Problem is in 882ca3ac commit. ItemValue without value should be invalid. Need to better fix for the problem.
    return (
      this.property &&
      this.property.name === "value" &&
      this.objectValue &&
      typeof this.objectValue.getType === "function" &&
      this.objectValue.getType() === "itemvalue"
    );
  }
  public get isRequired(): boolean {
    return this.isRequriedValue;
  }
  protected setIsRequired() {
    this.isRequriedValue = !!this.property ? this.property.isRequired : false;
  }
  protected setTitleAndDisplayName() {
    if (this.isCustomDisplayName) return;
    this.displayNameValue = this.property ? this.property.name : "";
    this.titleValue = "";
    if (!this.property) return;
    var locName = this.property.name;
    this.displayNameValue = editorLocalization.getPropertyName(locName);
    var title = editorLocalization.getPropertyTitle(locName);
    this.titleValue = title;
  }
  protected onBeforeApply() {}
  public apply(): boolean {
    this.onBeforeApply();
    if (this.hasError()) return false;
    this.isApplyinNewValue = true;
    this.koValue(this.editingValue);
    this.isApplyinNewValue = false;
    return true;
  }
  public get locale(): string {
    if (this.onGetLocale) return this.onGetLocale();
    return "";
  }
  public getLocale() {
    return this.locale;
  }
  public getMarkdownHtml(text: string): string {
    return text;
  }
  public getProcessedText(text: string): string {
    return text;
  }
  public get options(): ISurveyObjectEditorOptions {
    return this.optionsValue;
  }
  public set options(value: ISurveyObjectEditorOptions) {
    this.optionsValue = value;
    this.onOptionsChanged();
  }
  protected onOptionsChanged() {}
  protected setValueCore(value: any) {
    this.editingValue_ = value;
  }
  public setObject(value: any) {
    if (this.options) {
      var editorOptions = this.createEditorOptions();
      this.options.onSetPropertyEditorOptionsCallback(
        this.editablePropertyName,
        value,
        editorOptions
      );
      this.onSetEditorOptions(editorOptions);
    }
  }
  public activate() {}

  protected createEditorOptions(): any {
    return {};
  }
  protected onSetEditorOptions(editorOptions: any) {}
  protected onValueChanged() {}
  protected getCorrectedValue(value: any): any {
    return value;
  }
  protected beginValueUpdating() {
    this.valueUpdatingCounter++;
  }
  protected endValueUpdating() {
    if (this.valueUpdatingCounter > 0) {
      this.valueUpdatingCounter--;
    }
  }
  protected updateValue() {
    this.beginValueUpdating();
    this.koValue(this.getValue());
    this.editingValue = this.koValue();
    if (this.onValueUpdated) this.onValueUpdated(this.editingValue);
    this.endValueUpdating();
  }
  protected getValue(): any {
    return this.property && this.object
      ? this.property.getPropertyValue(this.object)
      : null;
  }
  private iskoValueChanging: boolean = false;
  private onkoValueChanged(newValue: any) {
    if (this.valueUpdatingCounter > 0 || this.iskoValueChanging) return;
    this.iskoValueChanging = true;
    newValue = this.getCorrectedValue(newValue);
    if (this.options && this.property && this.object) {
      var options = {
        propertyName: this.property.name,
        obj: this.object,
        value: newValue,
        newValue: null,
        doValidation: false
      };
      this.options.onValueChangingCallback(options);
      if (!this.isValueEmpty(options.newValue)) {
        newValue = options.newValue;
        this.koValue(newValue);
      }
      if (options.doValidation) {
        this.hasError();
      }
    }
    if (!this.isApplyinNewValue) {
      this.editingValue = newValue;
    }
    this.iskoValueChanging = false;

    if (this.property && this.object && this.getValue() == newValue) return;
    if (this.onChanged != null) this.onChanged(newValue);
  }
  private isValueEmpty(val): boolean {
    return Survey.Helpers.isValueEmpty(val);
  }
  public keyDownHandler(property, event) {
    var surveyEditor: ISurveyObjectEditorOptions = property.editor.options;
    if (!!surveyEditor) {
      surveyEditor.onPropertyEditorKeyDownCallback(
        property.property.name,
        property.obj,
        property.editor,
        event
      );
    }
    return true;
  }
}
