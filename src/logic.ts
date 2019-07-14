import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyConditionEditor } from "./propertyEditors/propertyConditionEditor";

export interface ISurveyLogicType {
  name: string;
  baseClass: string;
  propertyName: string;
  templateName?: string;
  elements?: (survey: Survey.SurveyModel) => Array<any>;
  showIf?: (survey: Survey.SurveyModel) => boolean;
}

export class SurveyLogicType {
  private elementsValue: Array<any>;
  constructor(
    private logicType: ISurveyLogicType,
    public survey: Survey.SurveyModel
  ) {
    this.update();
  }
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
  public get templateName(): string {
    return !!this.logicType.templateName
      ? this.logicType.templateName
      : "surveylogic_selectelement";
  }
  public get elements(): Array<any> {
    return !!this.elementsValue ? this.elementsValue : [];
  }
  public update() {
    this.elementsValue = !!this.logicType.elements
      ? this.logicType.elements(this.survey)
      : null;
  }
  public get visible(): boolean {
    if (!!this.logicType.showIf) return this.logicType.showIf(this.survey);
    if (!!this.elementsValue) return this.elementsValue.length > 0;
    return true;
  }
}

export class SurveyLogicOperation {
  public koElements: any;
  public koElement: any;
  constructor(public logicType: SurveyLogicType, element: Survey.Base) {
    this.koElements = ko.observableArray(this.logicType.elements);
    this.koElement = ko.observable(element);
    this.anotherOperationAdded(this);
  }
  public get template(): string {
    return this.logicType.templateName;
  }
  public get element(): Survey.Base {
    return this.koElement();
  }
  public set element(val: Survey.Base) {
    this.koElement(val);
  }
  public apply(expression: string) {
    if (!this.element) return;
    this.element[this.logicType.propertyName] = expression;
  }
  public update() {
    this.koElements(this.logicType.elements);
  }
  public anotherOperationAdded(op: SurveyLogicOperation) {
    if (!op.element || op.logicType !== this.logicType) return;
    if (this.koElements.indexOf(op.element) < 0) {
      this.koElements.push(op.element);
    }
  }
  public equals(op: SurveyLogicOperation): boolean {
    return this.logicType === op.logicType && this.element === op.element;
  }
  public get text(): string {
    return (
      this.logicType.text + (!!this.element ? " - " + this.element["name"] : "")
    );
  }
}

export class SurveyLogicItem {
  private removedOperations: Array<SurveyLogicOperation>;
  public koOperations: any;
  constructor(public expression: string = "") {
    this.removedOperations = [];
    this.koOperations = ko.observableArray();
  }
  public get operations(): Array<SurveyLogicOperation> {
    return this.koOperations();
  }
  public addOperation(lt: SurveyLogicType, element: Survey.Base = null) {
    var ops = this.operations;
    var op = new SurveyLogicOperation(lt, element);
    for (var i = 0; i < ops.length; i++) {
      ops[i].anotherOperationAdded(op);
      op.anotherOperationAdded(ops[i]);
    }
    this.koOperations.push(op);
  }
  public removeOperation(op: SurveyLogicOperation) {
    this.removedOperations.push(op);
    var index = this.koOperations().indexOf(op);
    if (index > -1) {
      this.koOperations.splice(index, 1);
    }
  }
  public update() {
    var ops = this.operations;
    for (var i = 0; i < ops.length; i++) {
      ops[i].update();
      for (var j = 0; j < ops.length; j++) {
        ops[i].anotherOperationAdded(ops[j]);
      }
    }
  }
  public apply(expression: string) {
    this.removeSameOperations();
    for (var i = 0; i < this.removedOperations.length; i++) {
      this.removedOperations[i].apply("");
    }
    this.removedOperations = [];
    this.expression = expression;
    var ops = this.operations;
    for (var i = 0; i < ops.length; i++) {
      ops[i].apply(expression);
    }
  }
  private removeSameOperations() {
    var ops = this.operations;
    for (var i = ops.length - 1; i >= 0; i--) {
      for (var j = i - 1; j >= 0; j--) {
        if (ops[i].equals(ops[j])) {
          this.removeOperation(ops[i]);
          break;
        }
      }
    }
  }
}

export class SurveyLogic {
  private static getAvaiableElements(
    elements: Array<any>,
    propName: string
  ): Array<any> {
    var res = [];
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      if (!el[propName]) {
        res.push(el);
      }
    }
    return res;
  }
  public static types = [
    {
      name: "page_visibility",
      baseClass: "page",
      propertyName: "visibleIf",
      elements: function(survey: Survey.SurveyModel) {
        return SurveyLogic.getAvaiableElements(survey.pages, "visibleIf");
      },
      showIf: function(survey: Survey.SurveyModel) {
        return this.elements(survey).length > 1;
      }
    },
    {
      name: "question_visibility",
      baseClass: "question",
      propertyName: "visibleIf",
      elements: function(survey: Survey.SurveyModel) {
        return SurveyLogic.getAvaiableElements(
          survey.getAllQuestions(),
          "visibleIf"
        );
      }
    },
    {
      name: "panel_visibility",
      baseClass: "panel",
      propertyName: "visibleIf",
      elements: function(survey: Survey.SurveyModel) {
        return SurveyLogic.getAvaiableElements(
          survey.getAllPanels(),
          "visibleIf"
        );
      }
    }
  ];
  public koItems: any;
  public koLogicTypes: any;
  public koMode: any;
  public koAddNew: any;
  public koEditItem: any;
  public koRemoveItem: any;
  public koShowView: any;
  public koSaveEditableItem: any;
  public koAddNewOperation: any;
  public koRemoveOperation: any;
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
    this.koEditItem = function(item: SurveyLogicItem) {
      self.editItem(item);
    };
    this.koRemoveItem = function(item: SurveyLogicItem) {
      self.removeItem(item);
    };
    this.koShowView = function() {
      self.mode = "view";
    };
    this.koSaveEditableItem = function() {
      self.saveEditableItem();
    };
    this.koAddNewOperation = function(logicType: SurveyLogicType) {
      self.addNewOperation(logicType);
    };
    this.koRemoveOperation = function(op: SurveyLogicOperation) {
      self.removeOperation(op);
    };
    this.koEditableItem = ko.observable(null);
    this.update();
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
  public saveEditableItem() {
    if (!this.editableItem) return;
    this.expressionEditor.apply();
    this.editableItem.apply(this.expressionEditor.editingValue);
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
    if (this.mode == val) return;
    if (val == "new" || val == "edit") {
      this.updateLogicTypes();
    }
    this.koMode(val);
  }
  public editItem(item: SurveyLogicItem) {
    this.koEditableItem(item);
    this.expressionEditor.editingValue = item.expression;
    this.mode = "edit";
    item.update();
  }
  public removeItem(item: SurveyLogicItem) {
    item.apply("");
    var index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
  public addNewOperation(logicType: SurveyLogicType) {
    this.editableItem.addOperation(logicType);
  }
  public removeOperation(op: SurveyLogicOperation) {
    this.editableItem.removeOperation(op);
  }
  protected buildItems(): Array<SurveyLogicItem> {
    var res = [];
    var hash = {};
    var elements = this.getAllElements();
    for (var i = 0; i < elements.length; i++) {
      this.buildItemsByElement(elements[i], res, hash);
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
  private updateLogicTypes() {
    var lts = this.logicTypes;
    for (var i = 0; i < lts.length; i++) {
      lts[i].update();
    }
  }
  private AddElements(src: Array<any>, dest: Array<any>) {
    for (var i = 0; i < src.length; i++) {
      dest.push(src[i]);
    }
  }
  private buildItemsByElement(
    element: Survey.Base,
    dest: Array<SurveyLogicItem>,
    hash: Survey.HashTable<SurveyLogicItem>
  ) {
    var types = this.getElementAllTypes(element);
    for (var i = 0; i < this.logicTypes.length; i++) {
      var lt = this.logicTypes[i];
      var expression = element[lt.propertyName];
      if (
        types.indexOf(lt.baseClass) > -1 &&
        !Survey.Helpers.isValueEmpty(expression)
      ) {
        var key = this.getExpressionHashKey(expression);
        var item = hash[key];
        if (!item) {
          item = new SurveyLogicItem(expression);
          hash[key] = item;
          dest.push(item);
        }
        item.addOperation(lt, element);
      }
    }
  }
  private getExpressionHashKey(expression: string): string {
    return expression.replace(" ", "").toLowerCase();
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
}
