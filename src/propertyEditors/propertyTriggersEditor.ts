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
import { SurveyElementSelector } from "../entries";

interface Element {
  text?: string;
  name?: string;
  page?: Survey.Page;
  question?: Survey.Question;
}

export class SurveyPropertyTriggersEditor extends SurveyPropertyItemsEditor {
  public static createTriggerEditor(
    survey: Survey.SurveyModel,
    trigger: Survey.SurveyTrigger,
    options: any
  ): SurveyPropertyTrigger {
    trigger["survey"] = survey;
    if (trigger.getType() == "setvaluetrigger")
      return new SurveyPropertySetValueTrigger(
        survey,
        <Survey.SurveyTriggerSetValue>trigger,
        options
      );
    if (trigger.getType() == "copyvaluetrigger")
      return new SurveyPropertyCopyValueTrigger(survey, trigger, options);
    if (trigger.getType() == "skiptrigger")
      return new SurveyPropertySkipTrigger(survey, trigger, options);
    if (trigger.getType() == "runexpressiontrigger")
      return new SurveyPropertyRunExpressionTrigger(survey, trigger, options);
    return new SurveyPropertyTrigger(survey, trigger, options);
  }

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
    var survey = !!this.object ? this.object : this.editingObject;
    trigger["survey"] = survey;
    if (trigger.getType() == "visibletrigger") {
      return new SurveyPropertyVisibleTrigger(
        survey,
        <Survey.SurveyTriggerVisible>trigger,
        this.options,
        this.koPages,
        this.koElements
      );
    }
    return SurveyPropertyTriggersEditor.createTriggerEditor(
      survey,
      trigger,
      this.options
    );
  }
}
export class SurveyPropertyTrigger {
  private triggerType: string;
  koType: any;
  koText: any;
  koIsValid: any;
  conditionEditor: SurveyPropertyConditionEditor = null;

  constructor(
    public survey: Survey.SurveyModel,
    public trigger: Survey.SurveyTrigger,
    public options?: any
  ) {
    this.triggerType = trigger.getType();
    this.koType = ko.observable(this.triggerType);
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
    this.koIsValid = ko.computed(() => {
      var text = self.conditionEditor.koTextValue();
      return !!text;
    });
    this.koText = ko.computed(() => {
      return self.getText();
    });
  }
  public beforeShow() {
    this.conditionEditor.beforeShow();
  }
  public hasError(): boolean {
    return false;
  }
  public createTrigger(): Survey.SurveyTrigger {
    var trigger = <Survey.SurveyTrigger>(
      Survey.Serializer.createClass(this.triggerType)
    );
    trigger["expression"] = this.conditionEditor.koTextValue();
    this.applyProperties(trigger);
    return trigger;
  }
  public applyProperties(trigger: Survey.SurveyTrigger) {}
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
  protected createElementSelector(koValue: any): SurveyElementSelector {
    var res = new SurveyElementSelector(
      this.survey,
      "question",
      !!this.options && this.options.showTitlesInExpressions
    );
    res.value = koValue();
    res.onValueChangedCallback = function(newValue: string) {
      koValue(newValue);
    };
    return res;
  }
}

export class SurveyPropertyVisibleTrigger extends SurveyPropertyTrigger {
  public pages: SurveyPropertyTriggerObjects;
  public questions: SurveyPropertyTriggerObjects;
  constructor(
    public valueSurvey: Survey.SurveyModel,
    public trigger: Survey.SurveyTriggerVisible,
    public options: any,
    koPages: any,
    koQuestions: any
  ) {
    super(valueSurvey, trigger, options);
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
  public applyProperties(trigger: Survey.SurveyTrigger) {
    super.applyProperties(trigger);
    var tr = <Survey.SurveyTriggerVisible>trigger;
    tr.pages = this.pages.koChoosen().map(o => o.name);
    tr.questions = this.questions.koChoosen().map(o => o.name);
  }
}

export class SurveyPropertySetValueTrigger extends SurveyPropertyTrigger {
  private static emptySurvey = undefined;
  setToNameSelector: SurveyElementSelector;
  kosetToName: any;
  kosetValue: any;
  koisVariable: any;
  koSurvey: any;
  koHasSurvey: any;
  valueSurvey: Survey.Survey;
  constructor(
    public survey: Survey.SurveyModel,
    public trigger: Survey.SurveyTriggerSetValue,
    public options: any
  ) {
    super(survey, trigger, options);
    if (!SurveyPropertySetValueTrigger.emptySurvey) {
      SurveyPropertySetValueTrigger.emptySurvey =
        !!options && options.createSurvey({}, "triggersEditor");
    }
    this.koSurvey = ko.observable(SurveyPropertySetValueTrigger.emptySurvey);
    this.koHasSurvey = ko.observable(false);
    this.kosetToName = ko.observable(trigger.setToName);
    this.kosetValue = ko.observable(trigger.setValue);
    this.koisVariable = ko.observable(trigger.isVariable);
    this.setToNameSelector = this.createElementSelector(this.kosetToName);
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
  public hasError(): boolean {
    return this.setToNameSelector.hasError();
  }
  public applyProperties(trigger: Survey.SurveyTrigger) {
    super.applyProperties(trigger);
    var tr = <Survey.SurveyTriggerSetValue>trigger;
    tr.setToName = this.kosetToName();
    tr.setValue = this.kosetValue();
    tr.isVariable = this.koisVariable();
  }
  private buildSurvey() {
    var question =
      !this.koisVariable() && !!this.kosetToName()
        ? this.survey.getQuestionByName(this.kosetToName())
        : null;
    if (!question) {
      this.valueSurvey = null;
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
    this.valueSurvey = SurveyPropertyDefaultValueEditor.createSurveyFromJsonQuestion(
      qJson,
      this.options
    );
    this.valueSurvey.setValue("question", this.kosetValue());
    var self = this;
    this.valueSurvey.onValueChanged.add(function(sender, options) {
      self.kosetValue(options.value);
    });
    this.koSurvey(this.valueSurvey);
    this.koHasSurvey(true);
  }
}
export class SurveyPropertyCopyValueTrigger extends SurveyPropertyTrigger {
  setToNameSelector: SurveyElementSelector;
  fromNameSelector: SurveyElementSelector;
  kosetToName: any;
  kofromName: any;
  constructor(
    public survey: Survey.SurveyModel,
    public trigger: Survey.SurveyTrigger,
    options?: any
  ) {
    super(survey, trigger, options);
    this.kosetToName = ko.observable(trigger["setToName"]);
    this.kofromName = ko.observable(trigger["fromName"]);
    this.setToNameSelector = this.createElementSelector(this.kosetToName);
    this.fromNameSelector = this.createElementSelector(this.kofromName);
  }
  public hasError(): boolean {
    var a = this.setToNameSelector.hasError();
    var b = this.fromNameSelector.hasError();
    return a || b;
  }
  public applyProperties(trigger: Survey.SurveyTrigger) {
    super.applyProperties(trigger);
    var tr = <Survey.SurveyTriggerCopyValue>trigger;
    tr.setToName = this.kosetToName();
    tr.fromName = this.kofromName();
  }
}
export class SurveyPropertySkipTrigger extends SurveyPropertyTrigger {
  koQuestions: any;
  koGotoName: any;
  gotoNameSelector: SurveyElementSelector;
  constructor(
    public survey: Survey.SurveyModel,
    public trigger: Survey.SurveyTrigger,
    options?: any
  ) {
    super(survey, trigger, options);
    this.koGotoName = ko.observable(trigger["gotoName"]);
    this.gotoNameSelector = this.createElementSelector(this.koGotoName);
  }
  public hasError(): boolean {
    return this.gotoNameSelector.hasError();
  }
  public applyProperties(trigger: Survey.SurveyTrigger) {
    super.applyProperties(trigger);
    trigger["gotoName"] = this.koGotoName();
  }
}
export class SurveyPropertyRunExpressionTrigger extends SurveyPropertyTrigger {
  setToNameSelector: SurveyElementSelector;
  kosetToName: any;
  korunExpression: any;
  public koErrorText: any;
  public koDisplayError: any;

  constructor(
    public survey: Survey.SurveyModel,
    public trigger: Survey.SurveyTrigger,
    options?: any
  ) {
    super(survey, trigger, options);
    this.kosetToName = ko.observable(trigger["setToName"]);
    this.korunExpression = ko.observable(trigger["runExpression"]);
    this.setToNameSelector = this.createElementSelector(this.kosetToName);
    this.koErrorText = ko.observable("");
    var self = this;
    this.koDisplayError = ko.computed(function() {
      return !!self.koErrorText();
    });
  }
  public hasError(): boolean {
    var text = !this.korunExpression()
      ? editorLocalization.getString("pe.triggerRunExpressionEmpty")
      : "";
    this.koErrorText(text);
    return !!text;
  }
  public applyProperties(trigger: Survey.SurveyTrigger) {
    super.applyProperties(trigger);
    trigger["setToName"] = this.kosetToName();
    trigger["runExpression"] = this.korunExpression();
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
