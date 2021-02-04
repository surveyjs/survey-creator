import * as ko from "knockout";
import {
  Base,
  JsonObjectProperty,
  Serializer,
  Question,
  PanelModelBase,
  SurveyModel,
  FunctionFactory,
  Helpers,
  settings,
  QuestionMatrixDynamicModel,
} from "survey-knockout";
import {
  SurveyQuestionEditorTabDefinition,
  SurveyQuestionProperties,
} from "@survey/creator/questionEditors/questionEditor";
import { EditableObject } from "@survey/creator/propertyEditors/editableObject";
import { editorLocalization } from "@survey/creator/editorLocalization";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions,
} from "@survey/creator/settings";

function propertyVisibleIf(params: any): boolean {
  if (!this.survey.editingObj) return false;
  return this.question.property.visibleIf(this.survey.editingObj);
}

FunctionFactory.Instance.register("propertyVisibleIf", propertyVisibleIf);

export interface IPropertyEditorSetup {
  editSurvey: SurveyModel;
  apply();
}

export abstract class PropertyEditorSetupValue implements IPropertyEditorSetup {
  private editSurveyValue: SurveyModel;
  constructor(
    protected options: ISurveyCreatorOptions = null,
    doSetup: boolean = true
  ) {
    if (!this.options) {
      this.options = new EmptySurveyCreatorOptions();
    }
    if (doSetup) {
      this.setupSurvey();
    }
  }
  protected setupSurvey() {
    this.editSurveyValue = this.createSurvey();
  }
  public get editSurvey(): SurveyModel {
    return this.editSurveyValue;
  }
  protected createSurvey(): SurveyModel {
    var json = this.getSurveyJSON();
    json.showNavigationButtons = false;
    json.showPageTitles = false;
    json.showQuestionNumbers = "off";
    json.textUpdateMode = "onTyping";
    json.requiredText = "";
    return this.options.createSurvey(json, this.getSurveyCreationReason());
  }
  protected abstract getSurveyJSON(): any;
  protected abstract getSurveyCreationReason(): string;
  public abstract apply();
}

export interface IPropertyGridEditor {
  fit(prop: JsonObjectProperty): boolean;
  isDefault?: () => boolean;
  getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any;
  onCreated?: (obj: Base, question: Question, prop: JsonObjectProperty) => void;
  onAfterRenderQuestion?: (
    obj: Base,
    prop: JsonObjectProperty,
    evtOptions: any
  ) => void;
  createPropertyEditorSetup?: (
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ) => IPropertyEditorSetup;
  isPropertyEditorSetupEnabled?: (
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ) => boolean;
  clearPropertyValue?: (
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ) => void;

  onAddIntoPropertyValue?: (
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ) => void;
  onMatrixCellCreated?: (obj: Base, options: any) => void;
  onMatrixCellValueChanged?: (obj: Base, options: any) => void;
}

export var PropertyGridEditorCollection = {
  editors: new Array<IPropertyGridEditor>(),
  fitHash: {},
  clearHash(): void {
    this.fitHash = {};
  },
  register(editor: IPropertyGridEditor) {
    this.editors.push(editor);
  },
  getEditor(prop: JsonObjectProperty): IPropertyGridEditor {
    if (!prop) return null;
    var fitEd = this.fitHash[prop.id];
    if (!!fitEd) return fitEd;
    let ed = this.isEditorFit(prop);
    return !!ed ? ed : this.isEditorFit(prop, true);
  },
  isEditorFit(
    prop: JsonObjectProperty,
    asDefault: boolean = false
  ): IPropertyGridEditor {
    for (var i = this.editors.length - 1; i >= 0; i--) {
      let ed = this.editors[i];
      if (
        (!asDefault && ed.fit(prop)) ||
        (asDefault && ed.isDefault && ed.isDefault())
      ) {
        this.fitHash[prop.id] = ed;
        return ed;
      }
    }
    return null;
  },
  getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    var res = this.getEditor(prop);
    return !!res ? res.getJSON(obj, prop, options) : null;
  },
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty): any {
    var res = this.getEditor(prop);
    if (!!res && !!res.onCreated) {
      res.onCreated(obj, question, prop);
    }
  },
  onAfterRenderQuestion(obj: Base, prop: JsonObjectProperty, evtOptions: any) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onAfterRenderQuestion) {
      res.onAfterRenderQuestion(obj, prop, evtOptions);
    }
  },
  onMatrixCellCreated(obj: Base, prop: JsonObjectProperty, options: any) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onMatrixCellCreated) {
      res.onMatrixCellCreated(obj, options);
    }
  },
  onMatrixCellValueChanged(obj: Base, prop: JsonObjectProperty, options: any) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onMatrixCellCreated) {
      res.onMatrixCellValueChanged(obj, options);
    }
  },
};

export class PropertyJSONGenerator {
  private parentProperty: JsonObjectProperty;
  private parentObj: Base;
  constructor(
    public obj: Base,
    private options: ISurveyCreatorOptions = null,
    parentQuestion: Question = null
  ) {
    if (!!parentQuestion) {
      if (!this.options) this.options = parentQuestion.options;
      this.parentProperty = parentQuestion.property;
      this.parentObj = parentQuestion.obj;
    }
  }
  public toJSON(isNested: boolean = false): any {
    return this.createJSON(isNested);
  }
  public createColumnsJSON(className: string, names: Array<string>): any {
    var res: Array<any> = [];
    for (var i = 0; i < names.length; i++) {
      var columnJSON = this.getColumnPropertyJSON(className, names[i]);
      if (!!columnJSON) {
        res.push(columnJSON);
      }
    }
    return res;
  }
  public setupObjPanel(panel: PanelModelBase, isNestedObj: boolean = false) {
    panel.fromJSON(this.toJSON(isNestedObj));
    this.onQuestionsCreated(panel);
  }
  private onQuestionsCreated(panel: PanelModelBase) {
    var properties = Serializer.getPropertiesByObj(this.obj);
    var props: any = {};
    for (var i = 0; i < properties.length; i++) {
      props[properties[i].name] = properties[i];
    }
    var questions = panel.questions;
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var prop = props[q.name];
      q.property = prop;
      q.obj = this.obj;
      q.options = this.options;
      var eventVisibility = this.getVisibilityOnEvent(prop);
      q.readOnly = this.isPropertyReadOnly(prop);
      q.visible = q.visible && eventVisibility;
      if (!!prop.visibleIf) {
        q.visibleIf = eventVisibility ? "propertyVisibleIf() = true" : "";
      }
      var helpText = this.getPropertyHelpText(q, prop);
      if (!!helpText) {
        q.description = helpText;
      }
      PropertyGridEditorCollection.onCreated(this.obj, q, prop);
    }
  }
  private getVisibilityOnEvent(
    prop: JsonObjectProperty,
    showMode: string = ""
  ): boolean {
    return this.options.onCanShowPropertyCallback(
      this.obj,
      <any>prop,
      showMode,
      this.parentObj,
      <any>this.parentProperty
    );
  }
  private isPropertyReadOnly(prop: JsonObjectProperty): boolean {
    return prop.readOnly;
    /*
    if (this.parentReadOnly) return true;
    var res = this.property ? this.property.readOnly : false;
    if (!!this.options && !!this.property && !!this.object) {
      res = this.options.onIsEditorReadOnlyCallback(this.object, this, res);
    }
    return res;
    */
  }

  private createJSON(isNestedObj: boolean): any {
    var properties = new SurveyQuestionProperties(this.obj);
    var tabs = properties.getTabs();
    var panels: any = {};
    for (var i = 0; i < tabs.length; i++) {
      panels[tabs[i].name] = this.createPanelProps(tabs[i], i == 0);
    }
    var json: any = {
      elements: [],
    };
    for (var key in panels) {
      if (key == "general" && isNestedObj) {
        var els = panels[key].elements;
        for (var i = 0; i < els.length; i++) {
          json.elements.push(els[i]);
        }
      } else {
        json.elements.push(panels[key]);
      }
    }
    return json;
  }
  private createPanelProps(
    tab: SurveyQuestionEditorTabDefinition,
    isFirst: boolean
  ): any {
    var panel = this.createPanelJSON(tab.name, tab.title, isFirst);
    for (var i = 0; i < tab.properties.length; i++) {
      var propDef = tab.properties[i];
      var propJSON = this.createQuestionJSON(
        <any>propDef.property,
        propDef.title
      );
      if (!propJSON) continue;
      panel.elements.push(propJSON);
    }
    return panel;
  }
  private createPanelJSON(
    category: string,
    title: string,
    isFirstPanel: boolean
  ): any {
    return {
      type: "panel",
      name: category,
      title: this.getPanelTitle(category, title),
      state: isFirstPanel ? "expanded" : "collapsed",
      elements: [],
    };
  }
  private createQuestionJSON(
    prop: JsonObjectProperty,
    title: string,
    isColumn: boolean = false
  ): any {
    var isVisible = this.isPropertyVisible(prop, isColumn ? "list" : "");
    if (!isVisible && isColumn) return null;
    var json = PropertyGridEditorCollection.getJSON(
      this.obj,
      prop,
      this.options
    );
    if (!json) return null;
    json.name = prop.name;
    json.visible = prop.visible;
    json.isReadOnly = prop.readOnly;
    json.isRequired = prop.isRequired;
    json.title = this.getQuestionTitle(prop, title);
    return json;
  }
  private getColumnPropertyJSON(className: string, propName: string): any {
    if (!className) return null;
    var prop = Serializer.findProperty(className, propName);
    if (!prop) return null;
    var json = this.createQuestionJSON(prop, "", true);
    if (!json) return null;
    json.name = prop.name;
    json.title = this.getQuestionTitle(prop, "");
    if (prop.isUnique) {
      json.isUnique = prop.isUnique;
    }
    if (!!json.type) {
      json.cellType = json.type;
      delete json.type;
    }
    if (!!json.isReadOnly) {
      json.readOnly = json.isReadOnly;
      delete json.isReadOnly;
    }
    return json;
  }
  private isPropertyVisible(
    prop: JsonObjectProperty,
    showMode: string
  ): boolean {
    if (!prop.visible) return false;
    return !showMode || !prop.showMode || showMode == prop.showMode;
  }
  private getPanelTitle(name: string, title: string): string {
    if (!!title) return title;
    return editorLocalization.getString("pe.tabs." + name);
  }
  private getQuestionTitle(prop: JsonObjectProperty, title: string): string {
    if (!!prop.displayName) return prop.displayName;
    if (!!title && title !== prop.name) return title;
    return editorLocalization.getPropertyNameInEditor(prop.name);
  }
  protected getPropertyHelpLocName(
    obj: Base,
    prop: JsonObjectProperty
  ): string {
    var classNames = this.getHelpPropertyClassNames(obj, prop);
    for (var i = 0; i < classNames.length; i++) {
      let locName = "pehelp." + classNames[i] + "_" + prop.name;
      if (this.hasLocString(locName)) return locName;
    }
    let locName = "pehelp." + prop.name;
    return this.hasLocString(locName) ? locName : "";
  }
  private getHelpPropertyClassNames(
    obj: Base,
    prop: JsonObjectProperty
  ): Array<string> {
    if (!obj) return [];
    var type = obj.getType();
    var res = [];
    var typeInfo = Serializer.findClass(type);
    while (!!typeInfo) {
      res.push(typeInfo.name);
      if (typeInfo.find(prop.name)) return res;
      typeInfo = !!typeInfo.parentName
        ? Serializer.findClass(typeInfo.parentName)
        : null;
    }
    return res;
  }
  private getPropertyHelpText(obj: Base, prop: JsonObjectProperty): string {
    var locName = this.getPropertyHelpLocName(obj, prop);
    return this.hasLocString(locName)
      ? editorLocalization.getString(locName)
      : "";
  }
  private hasLocString(name: string) {
    return editorLocalization.hasString(name);
  }
}

export class PropertyGridModel {
  private surveyValue: SurveyModel;
  private objValue: Base;
  private optionsValue: ISurveyCreatorOptions;
  public objValueChangedCallback: () => void;
  constructor(
    obj: Base = null,
    options: ISurveyCreatorOptions = new EmptySurveyCreatorOptions()
  ) {
    this.options = options;
    this.obj = obj;
  }
  public get obj() {
    return this.objValue;
  }
  public set obj(value: Base) {
    if (this.objValue != value) {
      this.objValue = value;
      var json = this.getSurveyJSON();
      if (this.options.readOnly) {
        json.mode = "display";
      }
      this.surveyValue = this.createSurvey(json);
      var page = this.surveyValue.createNewPage("p1");
      new PropertyJSONGenerator(this.obj, this.options).setupObjPanel(page);
      this.survey.addPage(page);
      this.survey.checkErrorsMode = "onValueChanging";
      this.survey.onValueChanged.add((sender, options) => {
        this.onValueChanged(options);
      });
      this.survey.onValueChanging.add((sender, options) => {
        this.onValueChanging(options);
      });
      this.survey.onValidateQuestion.add((sender, options) => {
        this.onValidateQuestion(options);
      });
      this.survey.onGetQuestionTitleActions.add((sender, options) => {
        this.onGetQuestionTitleActions(options);
      });
      this.survey.onMatrixCellCreated.add((sender, options) => {
        this.onMatrixCellCreated(options);
      });
      this.survey.onMatrixCellValueChanging.add((sender, options) => {
        this.onMatrixCellValueChanging(options);
      });
      this.survey.onMatrixCellValidate.add((sender, options) => {
        this.onMatrixCellValidate(options);
      });
      this.survey.onMatrixCellValueChanged.add((sender, options) => {
        this.onMatrixCellValueChanged(options);
      });
      this.survey.onMatrixAllowRemoveRow.add((sender, options) => {
        options.allow = this.onMatrixAllowRemoveRow(options);
      });
      this.survey.onMatrixRowAdded.add((sender, options) => {
        this.onMatrixRowAdded(options);
      });
      this.survey.onAfterRenderQuestion.add((sender, options) => {
        this.onAfterRenderQuestion(options);
      });
      this.survey.editingObj = value;
      if (this.objValueChangedCallback) {
        this.objValueChangedCallback();
      }
    }
  }
  public get options(): ISurveyCreatorOptions {
    return this.optionsValue;
  }
  public set options(val: ISurveyCreatorOptions) {
    this.optionsValue = !!val ? val : new EmptySurveyCreatorOptions();
  }
  public get survey() {
    return this.surveyValue;
  }
  protected createSurvey(json: any): SurveyModel {
    return this.options.createSurvey(json, "property-grid");
  }
  protected getSurveyJSON(): any {
    return {
      showNavigationButtons: "none",
    };
  }
  private onValidateQuestion(options: any) {
    var q = options.question;
    if (!q || !q.property) return;
    if (q.isRequired && Helpers.isValueEmpty(options.value)) {
      options.error = editorLocalization.getString("pe.propertyIsEmpty");
      return;
    }
    options.error = this.options.onGetErrorTextOnValidationCallback(
      q.property.name,
      <any>this.obj,
      options.value
    );
  }
  private onValueChanging(options: any) {
    var q = options.question;
    if (!q || !q.property) return;
    var changingOptions = {
      obj: this.obj,
      propertyName: q.property.name,
      value: options.oldValue,
      newValue: options.value,
      doValidation: false,
    };
    this.options.onValueChangingCallback(changingOptions);
    options.value = changingOptions.newValue;
  }
  private onValueChanged(options: any) {
    var q = options.question;
    if (!q || !q.property) return;
    this.options.onPropertyValueChanged(q.property, this.obj, options.value);
  }

  private onGetQuestionTitleActions(options) {
    var question = options.question;
    var property = question.property;
    var editor = PropertyGridEditorCollection.getEditor(property);
    if (!editor) return;
    var actions = [];
    var enabled = !question.isReadOnly;
    if (!!editor.clearPropertyValue) {
      actions.push(
        this.createClearValueAction(editor, property, question, enabled)
      );
    }
    if (!!editor.createPropertyEditorSetup) {
      if (enabled) {
        enabled =
          !editor.isPropertyEditorSetupEnabled ||
          editor.isPropertyEditorSetupEnabled(
            this.obj,
            property,
            options.question,
            this.options
          );
      }
      actions.push(
        this.createEditorSetupAction(editor, property, question, enabled)
      );
    }
    if (actions.length > 0) {
      options.titleActions = actions;
    }
  }
  private createClearValueAction(
    editor: IPropertyGridEditor,
    property: JsonObjectProperty,
    question: Question,
    enabled: boolean
  ): any {
    return {
      title: "",
      id: "property-grid-clear",
      icon: "icon-property_grid_clear",
      iconName: "icon-property_grid_clear",
      enabled: enabled,
      action: () => {
        editor.clearPropertyValue(this.obj, property, question, this.options);
      },
    };
  }
  private showModalPropertyEditor(
    editor: IPropertyGridEditor,
    property: JsonObjectProperty,
    question: Question
  ) {
    const surveyPropertyEditor = editor.createPropertyEditorSetup(
      this.obj,
      property,
      question,
      this.options
    );

    settings.showModal(
      "survey",
      { survey: surveyPropertyEditor.editSurvey },
      () => surveyPropertyEditor.apply()
    );
  }

  private createEditorSetupAction(
    editor: IPropertyGridEditor,
    property: JsonObjectProperty,
    question: Question,
    enabled: boolean
  ): any {
    var setupAction = {
      title: "",
      id: "property-grid-setup",
      css: "sv-action--first sv-action-bar-item--secondary",
      icon: "icon-property_grid_modal",
      iconName: "icon-property_grid_modal",
      enabled: enabled,
      action: () => {
        this.showModalPropertyEditor(editor, property, question);
      },
    };
    return setupAction;
  }

  private onAfterRenderQuestion(options: any) {
    PropertyGridEditorCollection.onAfterRenderQuestion(
      this.obj,
      options.question.property,
      options
    );
  }
  private isCellCreating = false;
  private onMatrixCellCreated(options: any) {
    this.isCellCreating = true;
    PropertyGridEditorCollection.onMatrixCellCreated(
      this.obj,
      options.question.property,
      options
    );
    this.isCellCreating = false;
  }
  private onMatrixCellValueChanging(options: any) {
    if (this.isCellCreating) return;
    var changingOptions = {
      obj: options.row.editingObj,
      propertyName: options.columnName,
      value: options.oldValue,
      newValue: options.value,
      doValidation: false,
    };
    this.options.onValueChangingCallback(changingOptions);
    options.value = changingOptions.newValue;
  }
  private onMatrixCellValidate(options: any) {
    if (this.isCellCreating) return;
    var matrix = <QuestionMatrixDynamicModel>options.question;
    var column = matrix.getColumnByName(options.columnName);
    if (!!column && column.isRequired && Helpers.isValueEmpty(options.value)) {
      options.error = editorLocalization.getString("pe.propertyIsEmpty");
      return;
    }
    options.error = this.options.onGetErrorTextOnValidationCallback(
      options.columnName,
      <any>options.row.editingObj,
      options.value
    );
  }
  private onMatrixCellValueChanged(options: any) {
    if (this.isCellCreating) return;
    PropertyGridEditorCollection.onMatrixCellValueChanged(
      this.obj,
      options.question.property,
      options
    );
    var rowObj = options.row.editingObj;
    if (!rowObj) return;
    var prop = Serializer.findProperty(rowObj.getType(), options.columnName);
    this.options.onPropertyValueChanged(
      <any>prop,
      options.row.editingObj,
      options.value
    );
  }
  private onMatrixAllowRemoveRow(options: any): boolean {
    var res = this.options.onCollectionItemDeletingCallback(
      <any>this.obj,
      options.question.property,
      options.question.value,
      options.row.editingObj
    );
    return this.options.onCanDeleteItemCallback(
      <any>this.obj,
      options.row.editingObj,
      res
    );
  }
  private onMatrixRowAdded(options: any) {
    var item = options.row.editingObj;
    if (Serializer.isDescendantOf(item.getType(), "itemvalue")) {
      this.options.onItemValueAddedCallback(
        <any>this.obj,
        options.question.property.name,
        options.row.editingObj,
        options.question.value
      );
    }
    if (Serializer.isDescendantOf(item.getType(), "matrixdropdowncolumn")) {
      this.options.onMatrixDropdownColumnAddedCallback(
        <any>this.obj,
        options.row.editingObj,
        options.question.value
      );
    }
  }
}

export abstract class PropertyGridEditor implements IPropertyGridEditor {
  constructor() {}
  public abstract fit(prop: JsonObjectProperty): boolean;
  public abstract getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any;
}

export class PropertyGridEditorBoolean extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "boolean" || prop.type == "switch";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return { type: "boolean", default: false };
  }
}
export class PropertyGridEditorString extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "string";
  }
  public isDefault() {
    return true;
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return { type: "text" };
  }
}
export class PropertyGridEditorNumber extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "number";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    var res: any = { type: "text", inputType: "number" };
    if (prop.minValue !== undefined) {
      res.min = prop.minValue;
    }
    if (prop.maxValue !== undefined) {
      res.max = prop.maxValue;
    }
    return res;
  }
}
export class PropertyGridEditorText extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "text";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return { type: "comment", textUpdateMode: "onTyping" };
  }
}
export class PropertyGridEditorHtml extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "html";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return { type: "comment" };
  }
}
export class PropertyGridEditorColor extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "color";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return { type: "text", inputType: "color" };
  }
}
export class PropertyGridEditorStringArray extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "string[]";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return { type: "comment" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      if (!Array.isArray(val)) return "";
      return val.join("\n");
    };
    question.valueToDataCallback = function (val: any): any {
      if (!val) return [];
      if (Array.isArray(val) && !val["split"]) return val;
      return val.split("\n");
    };
  }
}
export class PropertyGridEditorDropdown extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.hasChoices;
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "dropdown",
      showOptionsCaption: false,
      choices: this.getChoices(obj, prop),
    };
  }
  private getLocalizedText(prop: JsonObjectProperty, value: string): string {
    if (prop.name === "locale") {
      let text = editorLocalization.getLocaleName(value);
      if (text) return text;
    }
    if (prop.name === "cellType") {
      let text = editorLocalization.getString("qt." + value);
      if (text) return text;
    }
    if (value === null) return null;
    return editorLocalization.getPropertyValue(value);
  }
  private getChoices(obj: Base, prop: JsonObjectProperty): Array<any> {
    var propChoices = prop.getChoices(obj);
    var choices = [];
    for (var i = 0; i < propChoices.length; i++) {
      var item = propChoices[i];
      var jsonItem: any = { value: !!item.value ? item.value : item };
      var text = !!item.text ? item.text : "";
      if (!text) {
        text = this.getLocalizedText(prop, jsonItem.value);
      }
      if (!!text && text != jsonItem.value) {
        jsonItem.text = text;
      }
      choices.push(jsonItem);
    }
    return choices;
  }
}

export class PropertyGridEditorSet extends PropertyGridEditorDropdown {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "set";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    var json = super.getJSON(obj, prop, options);
    var hasTagbox = !!Serializer.findClass("tagbox");
    json.type = hasTagbox ? "tagbox" : "checkbox";
    json.hasSelectAll = !hasTagbox;
    return json;
  }
}
export class PropertyGridEditorQuestion extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "question";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "dropdown",
      optionsCaption: editorLocalization.getString(
        "pe.conditionSelectQuestion"
      ),
      choices: this.getChoices(obj, prop, options),
    };
  }
  private getChoices(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): Array<any> {
    //TODO doesn't compile because of two library instances
    var survey: any = EditableObject.getSurvey(obj);
    if (!survey) return [];
    var questions = this.getQuestions(survey, obj);
    if (!questions) questions = [];
    var showTitles = !!options && options.showTitlesInExpressions;
    var qItems = questions.map((q) => {
      let text = showTitles ? (<any>q).locTitle.renderedHtml : q.name;
      let value = this.getItemValue(<any>q);
      return { value: value, text: text };
    });
    qItems.sort((el1, el2) => {
      return el1.text.localeCompare(el2.text);
    });

    return qItems;
  }

  protected getQuestions(survey: SurveyModel, obj: Base): Array<Question> {
    return survey.getAllQuestions();
  }

  protected getItemValue(question: Question): any {
    return question.name;
  }
}

export class PropertyGridEditorQuestionSelectBase extends PropertyGridEditorQuestion {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "question_selectbase";
  }

  protected getQuestions(survey: SurveyModel, obj: Base): Array<Question> {
    let questions = super.getQuestions(survey, obj);
    let res = [];
    for (let i = 0; i < questions.length; i++) {
      if (questions[i] === obj) continue;
      if (Serializer.isDescendantOf(questions[i].getType(), "selectbase")) {
        res.push(questions[i]);
      }
    }
    return res;
  }
}

export class PropertyGridEditorQuestionValue extends PropertyGridEditorQuestion {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "questionvalue";
  }
  protected getItemValue(question: Question): any {
    return question.getValueName();
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorBoolean());
PropertyGridEditorCollection.register(new PropertyGridEditorString());
PropertyGridEditorCollection.register(new PropertyGridEditorNumber());
PropertyGridEditorCollection.register(new PropertyGridEditorColor());
PropertyGridEditorCollection.register(new PropertyGridEditorText());
PropertyGridEditorCollection.register(new PropertyGridEditorHtml());
PropertyGridEditorCollection.register(new PropertyGridEditorDropdown());
PropertyGridEditorCollection.register(new PropertyGridEditorSet());
PropertyGridEditorCollection.register(new PropertyGridEditorStringArray());
PropertyGridEditorCollection.register(new PropertyGridEditorQuestion());
PropertyGridEditorCollection.register(new PropertyGridEditorQuestionValue());
PropertyGridEditorCollection.register(
  new PropertyGridEditorQuestionSelectBase()
);

export class PropertyGrid extends PropertyGridModel {
  public koSurvey: ko.Observable<SurveyModel> = ko.observable();

  constructor(obj: Base, options: ISurveyCreatorOptions) {
    super(obj, options);
    this.koSurvey(this.survey);
    this.objValueChangedCallback = () => {
      this.koSurvey(this.survey);
    };
  }
}
