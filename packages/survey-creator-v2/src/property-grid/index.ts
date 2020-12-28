import * as ko from "knockout";
import {
  Base,
  JsonObjectProperty,
  Serializer,
  Question,
  MatrixDropdownRowModelBase,
  QuestionMatrixDynamicModel,
  PanelModel,
  PanelModelBase,
  SurveyModel,
  Survey,
  FunctionFactory,
  ItemValue,
  Helpers,
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
import { SurveyHelper } from "@survey/creator/surveyHelper";


export class ObjectFactoryCreator {
  public static instance = new ObjectFactoryCreator();
  public static createSurvey() { ObjectFactoryCreator.instance.createSurvey(); }
  public createSurvey() { return new SurveyModel();
  }
} 
ObjectFactoryCreator.createSurvey();

export class ObjectFactoryCreatorKO extends ObjectFactoryCreator {
  public createSurvey() { return new SurveyModel();
  }
} 

ObjectFactoryCreator.instance = new ObjectFactoryCreatorKO();


function propertyVisibleIf(params: any): boolean {
  if (!this.survey.editingObj) return false;
  return this.question.property.visibleIf(this.survey.editingObj);
}

FunctionFactory.Instance.register("propertyVisibleIf", propertyVisibleIf);

export interface IPropertyGridEditor {
  fit(prop: JsonObjectProperty): boolean;
  getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any;
  onCreated?: (obj: Base, question: Question, prop: JsonObjectProperty) => void;
  onGetQuestionTitleActions?: (obj: Base, options: any) => void;
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
    //TODO replace with prop.id should use name due two versions of survey-knockout
    var key = prop.name + prop.id.toString();
    var fitEd = this.fitHash[key];
    if (!!fitEd) return fitEd;
    for (var i = this.editors.length - 1; i >= 0; i--) {
      if (this.editors[i].fit(prop)) {
        this.fitHash[key] = this.editors[i];
        return this.editors[i];
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
  onGetQuestionTitleActions(obj: Base, prop: JsonObjectProperty, options: any) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onGetQuestionTitleActions) {
      res.onGetQuestionTitleActions(obj, options);
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
      q.visible = q.visible && eventVisibility;
      if (!!prop.visibleIf) {
        q.visibleIf = eventVisibility ? "propertyVisibleIf() = true" : "";
      }
      PropertyGridEditorCollection.onCreated(this.obj, q, prop);
    }
  }
  private getVisibilityOnEvent(
    prop: JsonObjectProperty,
    showMode: string = ""
  ): boolean {
    if (!this.options) return true;
    return this.options.onCanShowPropertyCallback(
      this.obj,
      <any>prop,
      showMode,
      this.parentObj,
      <any>this.parentProperty
    );
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
      if (propDef.name == tab.name) {
        propJSON.title = " ";
      }
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
    json.title = this.getQuestionTitle(prop.name, title);
    return json;
  }
  private getColumnPropertyJSON(className: string, propName: string): any {
    var prop = Serializer.findProperty(className, propName);
    if (!prop) return null;
    var json = this.createQuestionJSON(prop, "", true);
    if (!json) return null;
    if (!this.getVisibilityOnEvent(prop, "list")) return null;
    json.name = prop.name;
    json.title = editorLocalization.getPropertyName(prop.name);
    if (!!json.type) {
      json.cellType = json.type;
      delete json.type;
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
  private getQuestionTitle(name: string, title: string): string {
    if (!!title && title !== name) return title;
    return editorLocalization.getPropertyNameInEditor(name);
  }
}

export class PropertyGridModel {
  private surveyValue: SurveyModel;
  private objValue: Base;
  private optionsValue: ISurveyCreatorOptions;
  public objValueChangedCallback: () => void;
  constructor(obj: Base = null, options: ISurveyCreatorOptions = null) {
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
      this.survey.onMatrixCellValueChanged.add((sender, options) => {
        this.onMatrixCellValueChanged(options);
      });
      this.survey.onMatrixAllowRemoveRow.add((sender, options) => {
        options.allow = this.onMatrixAllowRemoveRow(options);
      });
      this.survey.onMatrixRowAdded.add((sender, options) => {
        this.onMatrixRowAdded(options);
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
    return new SurveyModel(json);
  }
  protected getSurveyJSON(): any {
    return {
      showNavigationButtons: "none",
    };
  }
  private onValidateQuestion(options: any) {
    var q = options.question;
    if (!q || !q.property) return;
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
    PropertyGridEditorCollection.onGetQuestionTitleActions(
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
  private onMatrixCellValueChanged(options: any) {
    if (this.isCellCreating) return;
    PropertyGridEditorCollection.onMatrixCellValueChanged(
      this.obj,
      options.question.property,
      options
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
    return { type: "text", inputType: "number" };
  }
}
export class PropertyGridEditorText extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "text";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return { type: "comment", textUpdateMode: "onTyping" };
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
        if (!!text && text != jsonItem.value) {
          jsonItem.text = text;
        }
      }
      choices.push(jsonItem);
    }
    return choices;
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
      choices: this.getChoices(obj, prop),
    };
  }
  private getChoices(obj: Base, prop: JsonObjectProperty): Array<any> {
    var survey = EditableObject.getSurvey(obj);
    if (!survey) return [];
    var questions = survey.getAllQuestions();
    if (!questions) questions = [];
    var showTitles = false; //TODO !!this.options && this.options.showTitlesInExpressions;
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
  protected getItemValue(question: Question): any {
    return question.name;
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
PropertyGridEditorCollection.register(new PropertyGridEditorDropdown());
PropertyGridEditorCollection.register(new PropertyGridEditorQuestion());
PropertyGridEditorCollection.register(new PropertyGridEditorQuestionValue());

export class PropertyGrid extends PropertyGridModel {
  public koSurvey: ko.Observable<SurveyModel> = ko.observable();

  constructor(obj: Base) {
    super(obj);
    this.koSurvey(this.survey);
    this.objValueChangedCallback = () => {
      this.koSurvey(this.survey);
    };
  }

  protected createSurvey(json: any): SurveyModel {
    return new Survey(json);
  }
}
