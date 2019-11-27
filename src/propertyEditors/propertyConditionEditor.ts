import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyTextEditor } from "./propertyModalEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { EditableObject } from "./editableObject";
import { ExpressionToDisplayText } from "../expressionToDisplayText";
import * as editorLocalization from "../editorLocalization";

export class SurveyPropertyConditionEditor extends SurveyPropertyTextEditor {
  public showHelpText: boolean = true;
  koIsConditionValid: any;
  koConditionQuestions: any;
  koConditionQuestion: any;
  koVisibleOperators: any;
  koConditionOperator: any;
  koButtonReplaceText: any;
  koRequireConditionValue: any;
  koHasValueSurvey: any;
  koValueSurvey: any;
  koBuildType: any;
  koConditionDisplayText: any;
  koHasConditionAppliedValue: any;
  koDummy: any;
  koIsTextConditionValid: any;
  koIsCompactMode: any;
  private addConditionQuestionsHash = {};
  private static emptySurvey = undefined;
  constructor(
    property: Survey.JsonObjectProperty,
    private _type: string = "condition",
    public syntaxCheckMethodName: string = "createCondition"
  ) {
    super(property);
    if (!SurveyPropertyConditionEditor.emptySurvey) {
      SurveyPropertyConditionEditor.emptySurvey =
        !!this.options && this.options.createSurvey({}, "conditionEditor");
    }
    this.koBuildType = ko.observable("view");
    this.koConditionDisplayText = ko.computed(function() {
      if (!!this.koTextValue()) return this.getConditionDisplayText();
      return this.getLocString("pe.expressionIsEmpty");
    }, this);
    this.koIsCompactMode = ko.observable(true);
    this.koConditionQuestions = ko.observableArray();
    this.koConditionQuestion = ko.observable("");
    this.koConditionOperator = ko.observable("");
    this.koVisibleOperators = ko.computed(function() {
      return this.getVisibleOperators(this.koConditionQuestion());
    }, this);
    this.koHasValueSurvey = ko.observable(false);
    this.koValueSurvey = ko.observable(
      SurveyPropertyConditionEditor.emptySurvey
    );
    this.koIsTextConditionValid = ko.observable(true);
    var self = this;
    this.koConditionQuestion.subscribe(function(newValue) {
      self.onQuestionOrOperatorChanged(
        newValue,
        self.koConditionOperator(),
        false
      );
    });
    this.koConditionOperator.subscribe(function(newValue) {
      self.onQuestionOrOperatorChanged(
        self.koConditionQuestion(),
        newValue,
        true
      );
    });
    this.koDummy = ko.observable(0);
    this.koIsConditionValid = ko.computed(function() {
      this.koDummy();
      return this.canAddCondition(
        this.koConditionQuestion(),
        this.koConditionOperator()
      );
    }, this);
    this.koHasConditionAppliedValue = ko.observable(false);
    this.koButtonReplaceText = ko.computed(function() {
      var name = this.koHasConditionAppliedValue()
        ? "pe.conditionButtonReplace"
        : "pe.conditionButtonApply";
      return this.getLocString(name);
    }, this);
    this.koRequireConditionValue = ko.computed(function() {
      return self.canShowValueByOperator(self.koConditionOperator());
    }, this);
    this.resetConditionBuilder();
  }
  private get canUpdateAutomatically(): boolean {
    return !this.koHasConditionAppliedValue();
  }

  public doBuildClick() {
    this.koHasConditionAppliedValue(!!this.koValue());
    this.koBuildType("visual");
  }
  public doEditClick() {
    this.koBuildType("text");
  }
  public doFromTextToViewClick() {
    if (!this.doApplyText()) {
      this.doResetText();
    }
    this.koBuildType("view");
  }
  public doApplyText(): boolean {
    if (!this.koIsTextConditionValid()) return false;
    this.koValue(this.koTextValue());
    return true;
  }
  public doResetText() {
    this.koTextValue(this.koValue());
  }
  public get buttonBuildText(): string {
    return this.getLocString("pe.buildExpression");
  }
  public get buttonEditText(): string {
    return this.getLocString("pe.editExpression");
  }
  public get buttonTextApplyText(): string {
    return this.getLocString("pe.expressionTextApply");
  }
  public get buttonTextResetText(): string {
    return this.getLocString("pe.expressionTextReset");
  }
  public beforeShow() {
    super.beforeShow();
    this.koHasConditionAppliedValue(!!this.koValue());
    this.koConditionQuestion("");
    this.addConditionQuestionsHash = {};
    this.koConditionQuestions(this.allConditionQuestions);
  }
  protected beforeShowModal() {
    super.beforeShowModal();
    this.koIsCompactMode(false);
  }
  public get isCompactMode(): boolean {
    return this.koIsCompactMode();
  }
  public set isCompactMode(val: boolean) {
    this.koIsCompactMode(val);
  }
  public get editorType(): string {
    return this._type;
  }
  public get availableQuestions(): any[] {
    var survey = this.getSurvey();
    return !!survey ? survey.getAllQuestions() : [];
  }
  public get isAddConditionValueEmpty() {
    return (
      !this.koValueSurvey() ||
      this.koValueSurvey()
        .getAllQuestions()[0]
        .isEmpty()
    );
  }
  public get conditionValue(): any {
    if (!this.koValueSurvey()) return null;
    return this.koValueSurvey().getValue("question");
  }
  public set conditionValue(val: any) {
    if (!this.koValueSurvey()) return;
    this.koValueSurvey().setValue("question", val);
  }
  protected getSurvey(): Survey.SurveyModel {
    if (this.object instanceof Survey.SurveyModel) {
      return this.getOrigionalSurvey(this.object);
    }
    if (
      this.object instanceof Survey.MatrixDropdownColumn &&
      !!this.object.colOwner
    )
      return this.object.colOwner["survey"];
    if (!!this.object && !!this.object.survey)
      return this.getOrigionalSurvey(this.object.survey);
    return null;
  }
  private getOrigionalSurvey(survey: Survey.SurveyModel): Survey.SurveyModel {
    return EditableObject.getOrigionalSurvey(survey);
  }
  public get allConditionQuestions(): any[] {
    var res = this.getConditionQuetions();
    res.sort(function(a, b) {
      return a.text.localeCompare(b.text);
    });
    return res;
  }
  public get isExpressionValid(): boolean {
    var text = this.koTextValue();
    if (!text) return false;
    var runner = new Survey.ConditionRunner(text);
    return runner.canRun();
  }
  private getConditionQuetions(): any[] {
    if (!this.object) return [];
    var res = [];
    var questions = this.availableQuestions;
    if (questions.length > 0) {
      for (var i = 0; i < questions.length; i++) {
        if (this.object == questions[i]) continue;
        questions[i].addConditionObjectsByContext(res, this.object);
      }
      this.addConditionQuestionsHash = {};
      for (var i = 0; i < res.length; i++) {
        if (!this.options || !this.options.showTitlesInExpressions) {
          res[i].text = res[i].name;
        }
        this.addConditionQuestionsHash[res[i].name] = res[i].question;
      }
    }
    this.addCalculatedValues(res);
    !!this.options &&
      this.options.onConditionQuestionsGetListCallback(
        this.editablePropertyName,
        this.object,
        this,
        res
      );
    return res;
  }
  private getVisibleOperators(questionName: string): Array<any> {
    var res = [];
    var json = this.getQuestionConditionJson(questionName, "equal");
    var qType = !!json ? json.type : null;
    var operators = SurveyPropertyEditorFactory.getOperators();
    for (var i = 0; i < operators.length; i++) {
      if (this.isOperatorVisible(qType, operators[i].types)) {
        res.push(operators[i]);
      }
    }
    return res;
  }
  private isOperatorVisible(
    qType: string,
    operatorTypes: Array<string>
  ): boolean {
    if (!qType) return true;
    if (!operatorTypes || operatorTypes.length == 0) return true;
    var contains = [];
    var notContains = [];
    for (var i = 0; i < operatorTypes.length; i++) {
      let name = operatorTypes[i];
      if (name[0] == "!") {
        notContains.push(name.substr(1));
      } else {
        contains.push(name);
      }
    }
    return this.isClassContains(qType, contains, notContains);
  }
  private isClassContains(
    qType: string,
    contains: Array<string>,
    notContains: Array<string>
  ): boolean {
    var classInfo = Survey.Serializer.findClass(qType);
    while (!!classInfo) {
      if (contains.indexOf(classInfo.name) > -1) return true;
      if (notContains.indexOf(classInfo.name) > -1) return false;
      classInfo = !!classInfo.parentName
        ? Survey.Serializer.findClass(classInfo.parentName)
        : null;
    }
    return contains.length == 0;
  }
  private canAddCondition(questionName: string, operator: string): boolean {
    return (
      questionName != "" &&
      questionName != undefined &&
      operator != "" &&
      (!this.canShowValueByOperator(operator) || !this.isAddConditionValueEmpty)
    );
  }
  private addCalculatedValues(res: Array<any>) {
    var survey = this.getSurvey();
    if (!survey) return;
    var values = survey.calculatedValues;
    for (var i = 0; i < values.length; i++) {
      var name = values[i].name;
      res.push({ name: name, text: name, question: null });
    }
  }
  private onQuestionOrOperatorChanged(
    questionName: string,
    operator: string,
    isOperatorChanged: boolean
  ) {
    if (
      !this.canShowValueByOperator(operator) ||
      !questionName ||
      !this.getSurvey()
    ) {
      this.conditionValue = null;
      this.koHasValueSurvey(false);
      this.updateValueAutomatically(questionName, operator);
      return;
    }
    var json = this.getQuestionConditionJson(questionName, operator, true);
    this.koHasValueSurvey(!!json && !!json.type);
    var useOldValueSurvey =
      isOperatorChanged &&
      this.koHasValueSurvey() &&
      !!this.koValueSurvey() &&
      this.koValueSurvey()
        .getQuestionByName("question")
        .getType() == json.type;
    if (!useOldValueSurvey && this.koHasValueSurvey()) {
      this.koValueSurvey(this.createValueSurvey(json, questionName));
    }
    this.updateValueAutomatically(questionName, operator);
    if (!isOperatorChanged) {
      this.koConditionOperator("equal");
    }
  }
  private updateValueAutomatically(questionName: string, operator: string) {
    if (!this.canUpdateAutomatically) return;
    this.setValueFromBuilder(this.builtConditionText(questionName, operator));
  }
  private setValueFromBuilder(val: string) {
    this.koTextValue(val);
    if (this.koIsCompactMode()) {
      this.koValue(val);
    }
  }
  private deleteConditionProperties(json: any) {
    delete json["visible"];
    delete json["visibleIf"];
    delete json["enable"];
    delete json["enableIf"];
    delete json["valueName"];
  }
  private createValueSurvey(qjson: any, questionName: string): Survey.Survey {
    qjson.name = "question";
    qjson.title = editorLocalization.editorLocalization.getString(
      "pe.conditionValueQuestionTitle"
    );
    this.deleteConditionProperties(qjson);
    if (!!qjson.choices) {
      for (var i = 0; i < qjson.choices.length; i++) {
        this.deleteConditionProperties(qjson.choices[i]);
      }
    }
    var json = {
      questions: [],
      showNavigationButtons: false,
      showQuestionNumbers: "off",
      textUpdateMode: "onTyping"
    };
    json.questions.push(qjson);
    var survey = !!this.options
      ? this.options.createSurvey(json, "conditionEditor")
      : new Survey.Survey(json);
    var self = this;
    survey.onValueChanged.add(function(survey, options) {
      self.koDummy(self.koDummy() + 1);
      self.updateValueAutomatically(
        self.koConditionQuestion(),
        self.koConditionOperator()
      );
    });
    if (this.options) {
      var propName = !!this.property ? this.property.name : "";
      this.options.onConditionValueSurveyCreatedCallBack(
        questionName,
        propName,
        this.object,
        this,
        survey
      );
    }
    return survey;
  }
  private getQuestionByName(questionName: string): Survey.Question {
    if (!this.getSurvey()) return null;
    return this.addConditionQuestionsHash[questionName];
  }
  private getQuestionValueByName(questionName: string): string {
    var question = this.getQuestionByName(questionName);
    if (question && question.name != question.getValueName())
      return questionName.replace(question.name, question.getValueName());
    return questionName;
  }
  private getQuestionConditionJson(
    questionName: string,
    operator: string,
    convertOnAnyOf: boolean = false
  ): any {
    var path = "";
    var question = this.getQuestionByName(questionName);
    if (!question) return null;
    var path = questionName.substr(question.name.length);
    if (!!path && path[0] == ".") {
      path = path.substr(1);
    }
    var json =
      question && question.getConditionJson
        ? question.getConditionJson(operator, path)
        : null;
    if (!!json && operator == "anyof" && convertOnAnyOf) {
      if (!this.isClassContains(json.type, ["checkbox"], [])) {
        json.type = "checkbox";
      }
    }
    return !!json ? json : null;
  }
  private canShowValueByOperator(operator: string) {
    return operator != "empty" && operator != "notempty";
  }
  public get hasAceEditor(): boolean {
    return (
      typeof ace !== "undefined" &&
      typeof ace.require("ace/ext/language_tools") !== "undefined"
    );
  }
  public get addConditionQuestionOptions(): string {
    return editorLocalization.editorLocalization.getString(
      "pe.conditionSelectQuestion"
    );
  }
  public replaceCondition() {
    this.addConditionCore("");
  }
  public addCondition(conType: string = "and") {
    this.addConditionCore(conType);
  }
  public clearCondition() {
    this.setValueFromBuilder("");
    this.resetConditionBuilder();
    this.koHasConditionAppliedValue(false);
  }
  public get conditionButtonAddAsAnd(): string {
    return this.getLocString("pe.conditionButtonAddAsAnd");
  }
  public get conditionButtonAddAsOr(): string {
    return this.getLocString("pe.conditionButtonAddAsOr");
  }
  public get conditionButtonClear(): string {
    return this.getLocString("pe.conditionButtonClear");
  }
  private addConditionCore(conditionType: string) {
    if (!this.koIsConditionValid()) return;
    this.koHasConditionAppliedValue(true);
    var text = "";
    if (!!conditionType && !!this.koTextValue()) {
      text = this.koTextValue() + " " + conditionType + " ";
    }
    text += this.builtConditionText(
      this.koConditionQuestion(),
      this.koConditionOperator()
    );
    this.setValueFromBuilder(text);
    this.resetConditionBuilder();
  }
  private builtConditionText(questionName: string, operator: string): string {
    if (!this.canAddCondition(questionName, operator)) return "";
    var text =
      "{" +
      this.getQuestionValueByName(questionName) +
      "} " +
      this.getAddConditionOperator(operator);
    if (this.canShowValueByOperator(operator)) {
      text += " " + this.getAddConditionValue();
    }
    return text;
  }
  protected onBeforeApply() {
    if (!this.koTextValue() && this.koIsConditionValid()) {
      this.replaceCondition();
    }
    super.onBeforeApply();
  }
  private getAddConditionOperator(operator: string = null): string {
    var op = !!operator ? operator : this.koConditionOperator();
    if (op == "equal") return "=";
    if (op == "notequal") return "<>";
    if (op == "greater") return ">";
    if (op == "less") return "<";
    if (op == "greaterorequal") return ">=";
    if (op == "lessorequal") return "<=";
    return op;
  }
  private getAddConditionValue(): string {
    var val = this.conditionValue;
    if (!val) return val;
    if (!Array.isArray(val)) return this.valToText(val);
    var res = "[";
    for (var i = 0; i < val.length; i++) {
      res += this.valToText(val[i]);
      if (i < val.length - 1) res += ", ";
    }
    res += "]";
    return res;
  }
  private valToText(val: any): string {
    if (val == "true" || val == "false") return val;
    if (!isNaN(val)) return val;
    if (val[0] == "[") return val.replace(/(?!^)(['])(?!$)/g, "\\$1");
    if (!this.isQuote(val[0])) val = "'" + val;
    if (!this.isQuote(val[val.length - 1])) val = val + "'";
    return val.replace(/(?!^)(['"])(?!$)/g, "\\$1");
  }
  private isQuote(ch: string): boolean {
    return ch == "'" || ch == '"';
  }
  protected onkoTextValueChanged(newValue) {
    if (!newValue) {
      this.koIsTextConditionValid(true);
    } else {
      var conditionParser: any = new Survey.ConditionsParser();
      this.koIsTextConditionValid(!!conditionParser.parseExpression(newValue));
    }
  }
  private resetConditionBuilder() {
    this.koConditionQuestion("");
    this.koConditionOperator("equal");
    this.conditionValue = null;
  }
  private getConditionDisplayText(): string {
    return new ExpressionToDisplayText(
      this.getSurvey(),
      this.options
    ).toDisplayText(this.koTextValue());
  }
}

SurveyPropertyEditorFactory.registerEditor("condition", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyConditionEditor(
    property,
    "condition",
    "createCondition"
  );
});
SurveyPropertyEditorFactory.registerEditor("expression", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyConditionEditor(
    property,
    "expression",
    "parseExpression"
  );
});

SurveyPropertyEditorFactory.registerTypeForCellEditing("expression", "string");
SurveyPropertyEditorFactory.registerTypeForCellEditing("condition", "string");

var operations = [
  {
    value: "and",
    title: "logical 'and' operator"
  },
  {
    value: "&&",
    title: "logical 'and' operator"
  },
  {
    value: "or",
    title: "logical 'or' operator"
  },
  {
    value: "||",
    title: "logical 'or' operator"
  },
  {
    value: "empty",
    title: "returns true if the left operand is empty	{questionName} empty"
  },
  {
    value: "notempty",
    title:
      "returns true if the left operand is not empty	{questionName} notempty"
  },
  {
    value: "=",
    title:
      "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124"
  },
  {
    value: "==",
    title:
      "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124"
  },
  {
    value: "equal",
    title:
      "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124"
  },
  {
    value: "<>",
    title:
      "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124"
  },
  {
    value: "!=",
    title:
      "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124"
  },
  {
    value: "notequal",
    title:
      "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124"
  },
  {
    value: ">",
    title:
      "returns true if the left operand greater then the second operand	{questionName} > 2, {questionName} greater 'a'"
  },
  {
    value: "greater",
    title:
      "returns true if the left operand greater then the second operand	{questionName} > 2, {questionName} greater 'a'"
  },
  {
    value: "<",
    title:
      "returns true if the left operand less then the second operand	{questionName} < 2, {questionName} less 'a'"
  },
  {
    value: "less",
    title:
      "returns true if the left operand less then the second operand	{questionName} < 2, {questionName} less 'a'"
  },
  {
    value: ">=",
    title:
      "returns true if the left operand equal or greater then the second operand	{questionName} >= 2, {questionName} greaterorequal 'a'"
  },
  {
    value: "greaterorequal",
    title:
      "returns true if the left operand equal or greater then the second operand	{questionName} >= 2, {questionName} greaterorequal 'a'"
  },
  {
    value: "<=",
    title:
      "returns true if the left operand equal or less then the second operand	{questionName} <= 2, {questionName} lessorequal 'a'"
  },
  {
    value: "lessorequal",
    title:
      "returns true if the left operand equal or less then the second operand	{questionName} <= 2, {questionName} lessorequal 'a'"
  },
  {
    value: "contains",
    title:
      "return true if the left operand is an array and it contains a value of the second operand	{questionName} contains 'a'"
  },
  {
    value: "notcontains",
    title:
      "return true if the left operand is an array and it does not contain a value of the second operand"
  },
  {
    value: "anyof",
    title:
      "return true if the left operand is an array and it contains any value of the second array operand"
  },
  {
    value: "allof",
    title:
      "return true if the left operand is an array and it contains all values of the second array operand"
  }
];

const createAnnotations = (
  condition: string,
  syntaxCheckMethodName: string
): AceAjax.Annotation[] => {
  condition = condition || "";
  var annotations = new Array<AceAjax.Annotation>();
  var conditionParser: any = new Survey.ConditionsParser();
  conditionParser[syntaxCheckMethodName](condition);
  if (!!condition && conditionParser.error) {
    var toErrorSubstring = condition.substring(0, conditionParser.error.at);
    var column = toErrorSubstring.length - toErrorSubstring.lastIndexOf("\n");
    var annotation: AceAjax.Annotation = {
      row: condition.match(/\n/g) ? condition.match(/\n/g).length : 0,
      column: column,
      text: conditionParser.error.code + " (" + column + ")",
      type: "error"
    };
    annotations.push(annotation);
  }
  return annotations;
};

var ID_REGEXP = /[a-zA-Z_0-9{\*\/\<\>\=\!\$\.\-\u00A2-\uFFFF]/;

export function doGetCompletions(
  prevIdentifier: string,
  prefix: string,
  config: { question: Survey.Question; questions: Survey.Question[] },
  completer = null
) {
  var completions = [];
  var currentQuestion: Survey.Question = config.question;
  var usableQuestions = (config.questions || []).filter(
    q => q !== currentQuestion
  );
  if (
    !!usableQuestions ||
    currentQuestion instanceof Survey.MatrixDropdownColumn ||
    currentQuestion.data instanceof Survey.QuestionPanelDynamicItem
  ) {
    if (
      prevIdentifier === "row" &&
      currentQuestion instanceof Survey.MatrixDropdownColumn
    ) {
      completions = currentQuestion.colOwner["columns"]
        .filter(e => e.name !== currentQuestion.name)
        .map(column => {
          return {
            name: "",
            value: "{row." + column.name + "}",
            some: "",
            meta: column.title,
            identifierRegex: ID_REGEXP
          };
        });
    } else if (
      prevIdentifier === "panel" &&
      currentQuestion.data instanceof Survey.QuestionPanelDynamicItem
    ) {
      var panel: Survey.PanelModel = currentQuestion.data.panel;
      completions = panel.elements
        .filter(e => e.name !== currentQuestion.name)
        .map(element => {
          return {
            name: "",
            value: "{panel." + element.name + "}",
            some: "",
            meta: element.name,
            identifierRegex: ID_REGEXP
          };
        });
    } else {
      var operationsFiltered = operations.filter(
        op => !prefix || op.value.indexOf(prefix) !== -1
      );
      var questionsFiltered = usableQuestions.filter(
        op => !prefix || op.name.indexOf(prefix) !== -1
      );
      if (currentQuestion instanceof Survey.MatrixDropdownColumn) {
        completions.push({
          name: "",
          value: "{row.",
          some: "",
          meta: editorLocalization.editorLocalization.getString(
            editorLocalization.defaultStrings.pe.aceEditorRowTitle
          ),
          identifierRegex: ID_REGEXP
        });
      } else if (
        !!currentQuestion &&
        currentQuestion.data instanceof Survey.QuestionPanelDynamicItem
      ) {
        completions.push({
          name: "",
          value: "{panel.",
          some: "",
          meta: editorLocalization.editorLocalization.getString(
            editorLocalization.defaultStrings.pe.aceEditorPanelTitle
          ),
          identifierRegex: ID_REGEXP
        });
      }
      completions = completions
        .concat(
          questionsFiltered.map(q => {
            return {
              completer: completer,
              name: "",
              value: "{" + q.name + "}",
              some: "",
              meta: q.title,
              identifierRegex: ID_REGEXP
            };
          })
        )
        .concat(
          operationsFiltered.map(op => {
            return {
              name: "",
              value: op.value,
              some: "",
              meta: op.title,
              identifierRegex: ID_REGEXP
            };
          })
        );
    }
  }
  return completions;
}

export function insertMatch(editor, data) {
  if (editor.completer.completions.filterText) {
    var allRanges = editor.selection.getAllRanges();
    for (
      var rangeIndex = 0, range;
      (range = allRanges[rangeIndex]);
      rangeIndex++
    ) {
      range.start.column -= editor.completer.completions.filterText.length;
      var rangeText = editor.session.getTextRange(range);
      if (rangeText.indexOf("{") !== 0) {
        var extRange = range.clone();
        extRange.start.column--;
        if (editor.session.getTextRange(extRange).indexOf("{") === 0) {
          range = extRange;
        }
      }
      editor.session.remove(range);
    }
  }
  editor.execCommand("insertstring", data.value || data);
}

ko.bindingHandlers.aceEditor = {
  init: function(element, options) {
    var configs = options();
    var langTools = ace.require("ace/ext/language_tools");
    var langUtils = ace.require("ace/autocomplete/util");
    var editor = ace.edit(element);
    var objectEditor: SurveyPropertyConditionEditor = configs.editor;
    var isUpdating = false;

    editor.setOption("useWorker", false);

    editor.getSession().on("change", function() {
      var errors = createAnnotations(
        editor.getValue(),
        objectEditor.syntaxCheckMethodName
      );
      isUpdating = true;
      objectEditor.koTextValue(editor.getValue());
      isUpdating = false;
      //   objectEditor.koHasError(errors.length > 0);
      //   if (errors.length > 0) {
      //     objectEditor.koErrorText(errors[0].text);
      //   }
      editor.getSession().setAnnotations(errors);
    });
    editor.on("focus", function() {
      editor.setReadOnly(objectEditor.readOnly());
    });
    var updateCallback = () => {
      if (!isUpdating) {
        editor.setValue(objectEditor.koTextValue() || "");
      }
    };
    var valueSubscription = objectEditor.koTextValue.subscribe(updateCallback);
    updateCallback();

    var completer = {
      identifierRegexps: [ID_REGEXP],
      insertMatch: insertMatch,
      getCompletions: (editor, session, pos, prefix, callback) => {
        var prevIdentifier = langUtils.retrievePrecedingIdentifier(
          session.getLine(pos.row),
          pos.column - 1
        );
        var completions = doGetCompletions(
          prevIdentifier,
          prefix,
          configs,
          completer
        );
        callback(null, completions);
      },
      getDocTooltip: function(item) {
        item.docHTML =
          "<div style='max-width: 300px; white-space: normal;'>" +
          item.meta +
          "</div>";
      }
    };
    langTools.setCompleters([completer]);
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true
    });

    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
      editor.destroy();
      valueSubscription.dispose();
    });

    editor.focus();
  }
};
