import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { editorLocalization } from "@survey/creator/editorLocalization";
import { EditableObject } from "./editableObject";
import {
  getFirstNonTextElement,
  getNodesFromKoComponentInfo,
} from "../utils/utils";

export interface ISurveyObjectEditorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  showApplyButtonInEditors: boolean;
  useTabsInElementEditor: boolean;
  readOnly: boolean;
  getObjectDisplayName(obj: Survey.Base): string;
  showTitlesInExpressions: boolean;
  allowEditExpressionsInTextEditor: boolean;
  onCanShowPropertyCallback(
    object: any,
    property: Survey.JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: Survey.JsonObjectProperty
  ): boolean;
  onCanDeleteItemCallback(
    object: any,
    item: Survey.Base,
    allowDelete: boolean
  ): boolean;
  onCollectionItemDeletingCallback(
    obj: Survey.Base,
    property: Survey.JsonObjectProperty,
    collection: Array<Survey.Base>,
    item: Survey.Base
  ): boolean;

  onIsEditorReadOnlyCallback(
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    readOnly: boolean
  ): boolean;
  onItemValueAddedCallback(
    obj: Survey.Base,
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
  onPropertyValueChanged(
    property: Survey.JsonObjectProperty,
    obj: any,
    newValue: any
  );
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
  startUndoRedoTransaction();
  stopUndoRedoTransaction();
  createSurvey(
    json: any,
    reason: string,
    surveyType?: new (json: any) => Survey.Survey
  );
}

export class SurveyPropertyEditorBase implements Survey.ILocalizableOwner {
  private objectValue: any;
  private valueUpdatingCounter: number = 0;
  private optionsValue: ISurveyObjectEditorOptions = null;
  private property_: Survey.JsonObjectProperty;
  private isRequiredValue: boolean = false;
  private titleValue: string;
  private showDisplayNameValue: boolean = true;
  private _displayNameValue = ko.observable<string>();
  private get displayNameValue() {
    return this._displayNameValue();
  }
  private set displayNameValue(val) {
    this._displayNameValue(val);
  }
  public koValue = ko.observable<any>();
  public koText: any;
  public koIsDefault: any;
  public koHasError: any;
  public koErrorText: any;
  public koDisplayError: any;
  public isInplaceProperty: boolean = false;
  public readOnly: any;
  public koMaxLength: any;
  public koMaxValue: any;
  public koMinValue: any;
  public onChanged: (newValue: any) => any;
  public onGetLocale: () => string;
  public onValueUpdated: (newValue: any) => any;
  public setup() {}
  public beforeShow() {}
  constructor(property: Survey.JsonObjectProperty) {
    this.property_ = property;
    var self = this;
    this.koValue.subscribe(function (newValue) {
      self.onkoValueChanged(newValue);
    });
    this.koText = ko.computed(() => {
      return self.getValueText(self.koValue());
    });
    this.koIsDefault = ko.computed(function () {
      return self.property
        ? self.property.isDefaultValue(self.koValue())
        : false;
    });
    this.koHasError = ko.observable(false);
    this.koErrorText = ko.observable("");
    this.koDisplayError = ko.computed(function () {
      return self.koHasError() && !!self.koErrorText();
    });
    this.koMaxLength = ko.computed(function () {
      return !!self.property &&
        !!self.property["maxLength"] &&
        self.property["maxLength"] > 0
        ? self.property["maxLength"]
        : 524288;
    });
    this.koMaxValue = ko.computed(function () {
      return !!self.property && !self.isValueEmpty(self.property.maxValue)
        ? self.property.maxValue
        : "";
    });
    this.koMinValue = ko.computed(function () {
      return !!self.property && !self.isValueEmpty(self.property.minValue)
        ? self.property.minValue
        : "";
    });
    this.setIsRequired();
    this.setTitleAndDisplayName();
    this.readOnly = ko.observable(this.getReadOnly());
  }
  public get editingValue() {
    return this.koValue();
  }
  public set editingValue(newValue) {
    this.koValue(newValue);
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
  private getReadOnly(): boolean {
    var res = this.property ? this.property.readOnly : false;
    if (!!this.options && !!this.property && !!this.object) {
      res = this.options.onIsEditorReadOnlyCallback(this.object, this, res);
    }
    return res;
  }
  public get title(): string {
    return this.titleValue;
  }

  private isInPropertyGridValue: boolean = false;

  public get isInPropertyGrid(): boolean {
    return this.isInPropertyGridValue;
  }
  public set isInPropertyGrid(val: boolean) {
    if (val === this.isInPropertyGridValue) return;
    this.isInPropertyGridValue = val;
    this.setTitleAndDisplayName();
  }
  public get isDiplayNameVisible() {
    return (
      this.showDisplayName &&
      !this.isInPropertyGrid &&
      !this.isShowingModal() &&
      !this.isInplaceProperty &&
      this.displayName !== "." &&
      !!this.displayName
    );
  }
  protected isShowingModal(): boolean {
    return false;
  }
  public get displayName(): string {
    return this.displayNameValue;
  }
  public get showDisplayName(): boolean {
    return this.showDisplayNameValue;
  }
  public set showDisplayName(val: boolean) {
    this.showDisplayNameValue = val;
  }
  public get showDisplayNameOnTop(): boolean {
    return this.isDiplayNameVisible && this.canShowDisplayNameOnTop;
  }
  public get canShowDisplayNameOnTop(): boolean {
    return true;
  }
  public get contentTemplateName(): string {
    //todo, will conflict at merge
    const editorType = this.isModal ? "modal-content" : this.editorTypeTemplate;
    if (editorType == "dropdown") {
      return "svc-" + editorType + "-editor";
    } else {
      return "svc-text-editor";
    }
  }
  protected get isModal(): boolean {
    return false;
  }
  public get originalObject(): any {
    return EditableObject.getOriginalObject(this.object);
  }
  public get object(): any {
    return this.objectValue;
  }
  public set object(value: any) {
    this.setObjectCore(value);
  }
  public get originalValue(): any {
    return this.getOriginalValue();
  }
  protected getOriginalValue(): any {
    return !!this.objectValue ? this.objectValue[this.property.name] : null;
  }
  protected setObjectCore(value: any) {
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
      this.readOnly(this.getReadOnly());
    }
  }

  public getValueText(value: any): string {
    return value;
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
        this.originalObject,
        this.koValue()
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
    return this.isRequiredValue;
  }
  protected setIsRequired() {
    this.isRequiredValue = !!this.property ? this.property.isRequired : false;
  }
  protected setTitleAndDisplayName() {
    this.displayNameValue = this.property ? this.property.name : "";
    this.titleValue = "";
    if (!this.property) return;
    var locName = this.property.name;
    if (!!this.property.displayName) {
      this.displayNameValue = this.property.displayName;
    } else {
      this.displayNameValue = this.isInPropertyGridValue
        ? editorLocalization.getPropertyName(locName)
        : editorLocalization.getPropertyNameInEditor(locName);
    }
    var title = editorLocalization.getPropertyTitle(locName);
    this.titleValue = title;
  }
  public apply(): boolean {
    if (this.hasError()) return false;
    this.performApply();
    return true;
  }
  protected performApply() {}
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
  protected createEditorOptions(): any {
    return {};
  }
  protected onSetEditorOptions(editorOptions: any) {}
  protected onValueChanged() {}
  protected getCorrectedValue(value: any): any {
    if (!this.property) return value;
    if (!this.isValueEmpty(this.property.minValue)) {
      if (value < this.property.minValue) return this.property.minValue;
    }
    if (!this.isValueEmpty(this.property.maxValue)) {
      if (value > this.property.maxValue) return this.property.maxValue;
    }
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
  public updateValue() {
    this.beginValueUpdating();
    this.koValue(this.getValue());
    this.koErrorText("");
    this.onValueChanged();
    if (this.onValueUpdated) this.onValueUpdated(this.koValue());
    this.endValueUpdating();
  }
  public updatePropertyValue(newValue: any) {
    this.object[this.property.name] = newValue;
    if (newValue != this.object[this.property.name]) {
      this.updateValue();
    }
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
    var copiedValue = Survey.Helpers.getUnbindValue(newValue);
    newValue = this.getCorrectedValue(newValue);
    if (this.options && this.property && this.object) {
      var options = {
        propertyName: this.property.name,
        obj: this.object,
        value: this.getValue(),
        newValue: newValue,
        doValidation: false,
      };
      this.options.onValueChangingCallback(options);
      newValue = options.newValue;
    }
    if (
      !this.isValueEmpty(newValue) &&
      !Survey.Helpers.isTwoValueEquals(newValue, copiedValue)
    ) {
      this.koValue(newValue);
    }
    this.onValueChanged();
    this.iskoValueChanging = false;
    if (this.hasError()) return;

    if (this.property && this.object && this.getValue() == newValue) return;
    if (this.onChanged != null) this.onChanged(newValue);
  }
  protected isValueEmpty(val): boolean {
    return Survey.Helpers.isValueEmpty(val);
  }
  public updateDynamicProperties() {
    if (
      !this.property ||
      !this.object ||
      !this.property["onPropertyEditorUpdate"]
    )
      return;
    this.property["onPropertyEditorUpdate"](this.object, this);
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
  private element = undefined;
  koAfterRender = (componentInfo: any) => {
    const elements = getNodesFromKoComponentInfo(componentInfo);
    this.element = getFirstNonTextElement(elements);
    if (!!this.element) {
      ko.utils.domNodeDisposal.addDisposeCallback(this.element, () => {
        this.element = undefined;
      });
    }
  };
  focus() {
    if (this.element && typeof this.element.focus === "function") {
      // var focusable = this.element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      this.element.focus();
    }
  }
  public onInputKeydown(model, event) {
    if (event.ctrlKey && (event.keyCode == 90 || event.keyCode == 89)) {
      event.stopPropagation();
    }
    return true;
  }
}
