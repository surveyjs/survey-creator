import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { SurveyPropertyConditionEditor } from "./propertyConditionEditor";
import { SurveyPropertyDefaultValueEditor } from "./propertyDefaultValueEditor";

interface Element {
  text?: string;
  name?: string;
  page?: Survey.Page;
  question?: Survey.Question;
}

export class SurveyPropertyTriggersEditor extends SurveyPropertyItemsEditor {
  koElements: any;
  koQuestions: any;
  koPages: any;
  public koSelected: any;
  public koTriggers: any;
  public availableTriggers: Array<string> = [];
  private triggerClasses: Array<Survey.JsonMetadataClass> = [];
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    this.onDeleteClick = function() {
      if (self.readOnly()) return;
      self.koItems.remove(self.koSelected());
    };
    this.onAddClick = function(item) {
      self.addItem(item.value);
    };
    this.koSelected = ko.observable(null);
    this.koSelected.subscribe(function(newValue) {
      if (!!newValue) {
        newValue.beforeShow();
      }
    });
    this.koPages = ko.observableArray();
    this.koQuestions = ko.observableArray();
    this.koElements = ko.observableArray();
    this.triggerClasses = Survey.Serializer.getChildrenClasses(
      "surveytrigger",
      true
    );
    this.availableTriggers = this.getAvailableTriggers();
    this.koTriggers = ko.observableArray(this.getLocalizedTriggers());
  }
  public get editorType(): string {
    return "triggers";
  }
  protected onValueChanged() {
    if (this.editingObject) {
      var allQuestions = (<Survey.Survey>this.editingObject).getAllQuestions();
      this.koPages(this.getElements((<Survey.Survey>this.editingObject).pages));
      this.koQuestions(this.getElements(allQuestions));
      this.koElements(this.getElements(this.getAllElements()));
    }
    super.onValueChanged();
    if (this.koSelected) {
      this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
    }
  }
  //TODO this code should be in the library
  private getAllElements(): Array<any> {
    var res = [];
    var pages = (<Survey.Survey>this.editingObject).pages;
    for (var i = 0; i < pages.length; i++) {
      this.addElemenetsIntoList(pages[i], res);
    }
    return res;
  }
  private addElemenetsIntoList(element: any, list: Array<any>) {
    var elements = element.getElementsInDesign(false);
    if (!elements) return;
    for (var i = 0; i < elements.length; i++) {
      list.push(elements[i]);
      this.addElemenetsIntoList(<Survey.SurveyElement>elements[i], list);
    }
  }
  private addItem(triggerType: string) {
    var trigger = Survey.Serializer.createClass(triggerType);
    var triggerItem = this.createPropertyTrigger(trigger);
    this.koItems.push(triggerItem);
    this.koSelected(triggerItem);
  }
  protected createEditorItem(item: any) {
    var jsonObj = new Survey.JsonObject();
    var trigger = Survey.Serializer.createClass(item.getType());
    jsonObj.toObject(item, trigger);
    return this.createPropertyTrigger(<Survey.SurveyTrigger>trigger);
  }
  protected createItemFromEditorItem(editorItem: any) {
    var editorTrigger = <SurveyPropertyTrigger>editorItem;
    return editorTrigger.createTrigger();
  }
  private getLocalizedTriggers(): Array<any> {
    var res = [];
    for (var i = 0; i < this.availableTriggers.length; i++) {
      var name = this.availableTriggers[i];
      res.push({ value: name, text: editorLocalization.getTriggerName(name) });
    }
    return res;
  }
  private getAvailableTriggers(): Array<string> {
    var result = [];
    for (var i = 0; i < this.triggerClasses.length; i++) {
      var name = this.triggerClasses[i].name;
      if (name == "visibletrigger") continue;
      result.push(name);
    }
    return result;
  }
  private getElements(items: Array<any>): Array<string> {
    var elements = [];
    var options = <any>this.options;

    items.forEach(item => {
      var element: Element = {};

      element.name = item.name;
      element.text = item.name;

      if (
        this.options &&
        this.options.showTitlesInExpressions &&
        item["title"]
      ) {
        element.text = item.title;
      }

      if (item.isPage) {
        element.page = item;
      } else {
        element.question = item;
      }

      elements.push(element);
    });

    options &&
      options.onConditionQuestionsGetListCallback(
        this.editablePropertyName,
        this,
        options,
        elements
      );

    return elements;
  }
  private createPropertyTrigger(
    trigger: Survey.SurveyTrigger
  ): SurveyPropertyTrigger {
    var triggerItem = null;
    trigger["survey"] = this.object;
    if (trigger.getType() == "visibletrigger") {
      triggerItem = new SurveyPropertyVisibleTrigger(
        <Survey.SurveyTriggerVisible>trigger,
        this.koPages,
        this.koElements,
        this.options
      );
    }
    if (trigger.getType() == "setvaluetrigger") {
      triggerItem = new SurveyPropertySetValueTrigger(
        <Survey.SurveyTriggerSetValue>trigger,
        this.koQuestions,
        this.editingObject,
        this.options
      );
    }
    if (trigger.getType() == "copyvaluetrigger") {
      triggerItem = new SurveyPropertyCopyValueTrigger(
        trigger,
        this.koQuestions,
        this.options
      );
    }
    if (trigger.getType() == "skiptrigger") {
      triggerItem = new SurveyPropertySkipTrigger(
        trigger,
        this.koQuestions,
        this.options
      );
    }
    if (trigger.getType() == "runexpressiontrigger") {
      triggerItem = new SurveyPropertyRunExpressionTrigger(
        trigger,
        this.koQuestions,
        this.options
      );
    }
    if (!triggerItem) {
      triggerItem = new SurveyPropertyTrigger(trigger, this.options);
    }
    return triggerItem;
  }
}
export class SurveyPropertyTrigger {
  private triggerType: string;
  availableOperators = [];
  options: any;
  koName: any;
  koOperator: any;
  koValue: any;
  koType: any;
  koText: any;
  koIsValid: any;
  koRequireValue: any;
  conditionEditor: SurveyPropertyConditionEditor = null;

  constructor(public trigger: Survey.SurveyTrigger, options?: any) {
    this.availableOperators = SurveyPropertyEditorFactory.getOperators();
    this.triggerType = trigger.getType();
    this.koType = ko.observable(this.triggerType);
    this.koName = ko.observable(trigger.name);
    this.koOperator = ko.observable(trigger.operator);
    this.koValue = ko.observable(trigger.value);
    var expressionProperty = Survey.Serializer.findProperty(
      "trigger",
      "expression"
    );
    this.conditionEditor = new SurveyPropertyConditionEditor(
      expressionProperty
    );
    this.conditionEditor.options = options;
    this.conditionEditor.showHelpText = false;
    if (!this.trigger.expression) {
      this.trigger.expression = this.trigger.buildExpression();
    }
    this.conditionEditor.object = this.trigger;
    var self = this;
    this.koRequireValue = ko.computed(() => {
      return self.koOperator() != "empty" && self.koOperator() != "notempty";
    });
    this.koIsValid = ko.computed(() => {
      var text = self.conditionEditor.koTextValue();
      return !!text;
    });
    this.koText = ko.computed(() => {
      self.koName();
      self.koOperator();
      self.koValue();
      return self.getText();
    });
  }
  public beforeShow() {
    this.conditionEditor.beforeShow();
  }
  public createTrigger(): Survey.SurveyTrigger {
    var trigger = <Survey.SurveyTrigger>(
      Survey.Serializer.createClass(this.triggerType)
    );
    trigger["expression"] = this.conditionEditor.koTextValue();
    return trigger;
  }
  private getText(): string {
    if (!this.koIsValid())
      return editorLocalization.getString("pe.triggerNotSet");
    var res = this.conditionEditor.koTextValue();
    if (!res) return "";
    return editorLocalization.getString("pe.triggerRunIf") + ": " + res;
  }
  public get setToNameOptions(): string {
    return editorLocalization.getString("pe.conditionSelectQuestion");
  }
}

export class SurveyPropertyVisibleTrigger extends SurveyPropertyTrigger {
  public pages: SurveyPropertyTriggerObjects;
  public questions: SurveyPropertyTriggerObjects;
  constructor(
    public trigger: Survey.SurveyTriggerVisible,
    koPages: any,
    koQuestions: any,
    options?: any
  ) {
    super(trigger, options);
    this.pages = new SurveyPropertyTriggerObjects(
      editorLocalization.getString("pe.triggerMakePagesVisible"),
      koPages(),
      trigger.pages
    );
    this.questions = new SurveyPropertyTriggerObjects(
      editorLocalization.getString("pe.triggerMakeQuestionsVisible"),
      koQuestions(),
      trigger.questions
    );
  }
  public createTrigger(): Survey.SurveyTrigger {
    var trigger = <Survey.SurveyTriggerVisible>super.createTrigger();
    trigger.pages = this.pages.koChoosen().map(o => o.name);
    trigger.questions = this.questions.koChoosen().map(o => o.name);
    return trigger;
  }
}

export class SurveyPropertySetValueTrigger extends SurveyPropertyTrigger {
  private static emptySurvey = undefined;
  koQuestions: any;
  kosetToName: any;
  kosetValue: any;
  koisVariable: any;
  koSurvey: any;
  koHasSurvey: any;
  survey: Survey.Survey;
  constructor(
    public trigger: Survey.SurveyTriggerSetValue,
    koQuestions: any,
    public triggerSurvey: Survey.Survey,
    options?: ISurveyObjectEditorOptions
  ) {
    super(trigger, options);
    if (!SurveyPropertySetValueTrigger.emptySurvey) {
      SurveyPropertySetValueTrigger.emptySurvey =
        !!options && options.createSurvey({}, "triggersEditor");
    }
    this.koQuestions = koQuestions;
    this.koSurvey = ko.observable(SurveyPropertySetValueTrigger.emptySurvey);
    this.koHasSurvey = ko.observable(false);
    this.kosetToName = ko.observable(trigger.setToName);
    this.kosetValue = ko.observable(trigger.setValue);
    this.koisVariable = ko.observable(trigger.isVariable);
    var self = this;
    this.kosetToName.subscribe(function(newValue) {
      if (!self.koisVariable()) {
        self.kosetValue(null);
      }
      self.buildSurvey();
    });
    this.koisVariable.subscribe(function(newValue) {
      self.kosetToName("");
      self.kosetValue(null);
      self.buildSurvey();
    });
    this.buildSurvey();
  }
  public createTrigger(): Survey.SurveyTrigger {
    var trigger = <Survey.SurveyTriggerSetValue>super.createTrigger();
    trigger.setToName = this.kosetToName();
    trigger.setValue = this.kosetValue();
    trigger.isVariable = this.koisVariable();
    return trigger;
  }
  private buildSurvey() {
    var question =
      !this.koisVariable() && !!this.kosetToName()
        ? this.triggerSurvey.getQuestionByName(this.kosetToName())
        : null;
    if (!question) {
      this.survey = null;
      this.koHasSurvey(false);
      this.koSurvey(SurveyPropertySetValueTrigger.emptySurvey);
      return;
    }
    var qJson = SurveyPropertyDefaultValueEditor.createJsonFromQuestion(
      question,
      false
    );
    qJson.titleLocation = "top";
    qJson.title = editorLocalization.getString("pe.triggerSetValue");
    this.survey = SurveyPropertyDefaultValueEditor.createSurveyFromJsonQuestion(
      qJson,
      this.options
    );
    this.survey.setValue("question", this.kosetValue());
    var self = this;
    this.survey.onValueChanged.add(function(sender, options) {
      self.kosetValue(options.value);
    });
    this.koSurvey(this.survey);
    this.koHasSurvey(true);
  }
}
export class SurveyPropertyCopyValueTrigger extends SurveyPropertyTrigger {
  koQuestions: any;
  kosetToName: any;
  kofromName: any;
  constructor(
    public trigger: Survey.SurveyTrigger,
    koQuestions: any,
    options?: any
  ) {
    super(trigger, options);
    this.koQuestions = koQuestions;
    this.kosetToName = ko.observable(trigger["setToName"]);
    this.kofromName = ko.observable(trigger["fromName"]);
  }
  public createTrigger(): Survey.SurveyTrigger {
    var trigger = super.createTrigger();
    trigger["setToName"] = this.kosetToName();
    trigger["fromName"] = this.kofromName();
    return trigger;
  }
}
export class SurveyPropertySkipTrigger extends SurveyPropertyTrigger {
  koQuestions: any;
  koGotoName: any;
  constructor(
    public trigger: Survey.SurveyTrigger,
    koQuestions: any,
    options?: any
  ) {
    super(trigger, options);
    this.koQuestions = koQuestions;
    this.koGotoName = ko.observable(trigger["gotoName"]);
  }
  public createTrigger(): Survey.SurveyTrigger {
    var trigger = super.createTrigger();
    trigger["gotoName"] = this.koGotoName();
    return trigger;
  }
}
export class SurveyPropertyRunExpressionTrigger extends SurveyPropertyTrigger {
  koQuestions: any;
  kosetToName: any;
  korunExpression: any;
  constructor(
    public trigger: Survey.SurveyTrigger,
    koQuestions: any,
    options?: any
  ) {
    super(trigger, options);
    this.koQuestions = koQuestions;
    this.kosetToName = ko.observable(trigger["setToName"]);
    this.korunExpression = ko.observable(trigger["runExpression"]);
  }
  public createTrigger(): Survey.SurveyTrigger {
    var trigger = super.createTrigger();
    trigger["setToName"] = this.kosetToName();
    trigger["runExpression"] = this.korunExpression();
    return trigger;
  }
}

export class SurveyPropertyTriggerObjects {
  koObjects = ko.observableArray<Element>();
  koChoosen = ko.observableArray<Element>();
  koSelected = ko.observable<Element>();
  koChoosenSelected = ko.observable<Element>();
  public onDeleteClick: any;
  public onAddClick: any;
  constructor(
    public title: string,
    allObjects: Array<Element>,
    choosenObjects: Array<string>
  ) {
    allObjects.forEach(obj => {
      if (choosenObjects.indexOf(obj.name) !== -1) {
        this.koChoosen.push(obj);
      } else {
        this.koObjects.push(obj);
      }
    });
  }
  private deleteItem = () => {
    this.changeItems(this.koChoosenSelected(), this.koChoosen, this.koObjects);
  };
  private addItem = () => {
    this.changeItems(this.koSelected(), this.koObjects, this.koChoosen);
  };
  private changeItems(
    item: Element,
    removedFrom: KnockoutObservableArray<Element>,
    addTo: KnockoutObservableArray<Element>
  ) {
    if (!item) return;
    removedFrom.remove(item);
    addTo.push(item);
    removedFrom.sort();
    addTo.sort();
  }
}

SurveyPropertyEditorFactory.registerEditor("triggers", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyTriggersEditor(property);
});
