import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyConditionEditor } from "./propertyEditors/propertyConditionEditor";

export interface ISurveyLogicType {
  name: string;
  baseClass: string;
  propertyName: string;
  showIf?: (survey: Survey.SurveyModel) => boolean;
}

export class SurveyLogicType {
  constructor(
    private logicType: ISurveyLogicType,
    public survey: Survey.SurveyModel
  ) {}
  public get name(): string {
    return this.logicType.name;
  }
  public get text(): string {
    return this.name;
  }
  public get baseClass(): string {
    return this.logicType.baseClass;
  }
  public get propertyName(): string {
    return this.logicType.propertyName;
  }
  public get visible(): boolean {
    return !this.logicType.showIf || this.logicType.showIf(this.survey);
  }
}

export class SurveyLogicOperation {
  constructor(
    public logicType: ISurveyLogicType,
    public element: Survey.Base
  ) {}
  public get text(): string {
    return (
      this.logicType + (!!this.element ? " - " + this.element["name"] : "")
    );
  }
}

export class SurveyLogicItem {
  public koOperations: any;
  constructor(public expression: string = "") {
    this.koOperations = ko.observableArray();
  }
  public get operations(): Array<SurveyLogicOperation> {
    return this.koOperations();
  }
  public addOperation(lt: SurveyLogicType, element: Survey.Base = null) {
    var op = new SurveyLogicOperation(lt, element);
    this.koOperations.push(op);
  }
}

export class SurveyLogic {
  public static types = [
    {
      name: "page_visibility",
      baseClass: "page",
      propertyName: "visibleIf",
      showIf: function(survey: Survey.SurveyModel) {
        return survey.pages.length > 1;
      }
    },
    {
      name: "question_visibility",
      baseClass: "question",
      propertyName: "visibleIf",
      showIf: function(survey: Survey.SurveyModel) {
        return survey.getAllQuestions().length > 0;
      }
    },
    {
      name: "panel_visibility",
      baseClass: "panel",
      propertyName: "visibleIf",
      showIf: function(survey: Survey.SurveyModel) {
        return survey.getAllPanels().length > 0;
      }
    }
  ];
  public koItems: any;
  public koLogicTypes: any;
  public koMode: any;
  public koAddNew: any;
  public koAddNewItem: any;
  public koEditableItem: any;
  public expressionEditor: SurveyPropertyConditionEditor;

  constructor(public survey: Survey.SurveyModel) {
    this.createExpressionPropertyEditor();
    this.koItems = ko.observableArray();
    this.koLogicTypes = ko.observableArray();
    this.koMode = ko.observable("view");
    var self = this;
    this.koMode.subscribe(function(newValue) {
      if (newValue == "new") {
        self.koEditableItem(new SurveyLogicItem());
      }
    });
    this.koAddNew = function() {
      self.mode = "new";
    };
    this.koAddNewItem = function(logicType: SurveyLogicType) {
      self.addNewOperation(logicType);
    };
    this.koEditableItem = ko.observable(null);
    this.update();
  }
  private getExpressionProperty(): Survey.JsonObjectProperty {
    var property = Survey.Serializer.findProperty("survey", "hiddenLogic");
    if (!!property) return property;
    Survey.Serializer.addProperty("survey", {
      name: "hiddenLogic:condition",
      visible: false,
      isSerializable: false
    });
    return Survey.Serializer.findProperty("survey", "hiddenLogic");
  }
  private createExpressionPropertyEditor() {
    this.expressionEditor = new SurveyPropertyConditionEditor(
      this.getExpressionProperty()
    );
    this.expressionEditor.object = this.survey;
  }
  public getTypeByName(name: string): SurveyLogicType {
    for (var i = 0; i < this.logicTypes.length; i++) {
      if (this.logicTypes[i].name == name) return this.logicTypes[i];
    }
    return null;
  }
  public update(survey: Survey.SurveyModel = null) {
    if (!!survey) {
      this.survey = survey;
    }
    this.koLogicTypes(this.createLogicTypes());
    this.koItems(this.buildItems());
    this.mode = this.items.length > 0 ? "view" : "new";
    this.koEditableItem(null);
    this.expressionEditor.object = this.survey;
    this.expressionEditor.beforeShow();
  }
  public get items(): Array<SurveyLogicItem> {
    return this.koItems();
  }
  public get logicTypes(): Array<SurveyLogicType> {
    return this.koLogicTypes();
  }
  public get editableItem(): SurveyLogicItem {
    return this.koEditableItem();
  }

  /**
   * There are 3 modes: view, new, edit
   */
  public get mode() {
    return this.koMode();
  }
  public set mode(val: string) {
    if (val !== "view" && val !== "new" && val !== "edit") return;
    this.koMode(val);
  }
  public addNewOperation(logicType: SurveyLogicType) {
    this.koEditableItem(new SurveyLogicItem());
    this.mode = "new";
  }
  protected buildItems(): Array<SurveyLogicItem> {
    var res = [];
    var elements = this.getAllElements();
    for (var i = 0; i < elements.length; i++) {
      this.buildItemsByElement(elements[i], res);
    }
    return res;
  }
  protected getAllElements(): Array<Survey.Base> {
    var res = [];
    this.AddElements(this.survey.pages, res);
    this.AddElements(this.survey.getAllQuestions(), res);
    this.AddElements(this.survey.getAllPanels(), res);
    return res;
  }
  private AddElements(src: Array<any>, dest: Array<any>) {
    for (var i = 0; i < src.length; i++) {
      dest.push(src[i]);
    }
  }
  private buildItemsByElement(
    element: Survey.Base,
    dest: Array<SurveyLogicItem>
  ) {
    var types = this.getElementAllTypes(element);
    for (var i = 0; i < this.logicTypes.length; i++) {
      var lt = this.logicTypes[i];
      var expression = element[lt.propertyName];
      if (
        types.indexOf(lt.baseClass) > -1 &&
        !Survey.Helpers.isValueEmpty(expression)
      ) {
        var item = new SurveyLogicItem(expression);
        item.addOperation(lt, element);
        dest.push(item);
      }
    }
  }
  private getElementAllTypes(element: Survey.Base) {
    var types = [];
    var type = element.getType();
    types.push(type);
    while (!!type && type != "base") {
      var cl = Survey.Serializer.findClass(type);
      if (!cl) break;
      type = cl.parentName;
      if (!!type) {
        types.push(type);
      }
    }
    return types;
  }
  protected createLogicTypes(): Array<SurveyLogicType> {
    var res = [];
    for (var i = 0; i < SurveyLogic.types.length; i++) {
      res.push(new SurveyLogicType(SurveyLogic.types[i], this.survey));
    }
    return res;
  }
}
