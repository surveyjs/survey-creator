import {
  SurveyModel,
  Serializer,
  ConditionsParser,
  QuestionPanelDynamicModel,
  Operand,
  UnaryOperand,
  BinaryOperand,
  Variable,
  Const,
  ArrayOperand,
  ItemValue,
  PanelModel,
  Helpers,
  Base,
  JsonObject,
  Question,
  QuestionCommentModel,
  IActionBarItem
} from "survey-core";
import { ISurveyCreatorOptions, settings } from "../settings";
import { editorLocalization } from "../editorLocalization";
import { SurveyHelper } from "../surveyHelper";
import { PropertyEditorSetupValue } from "./index";

export class ConditionEditorItem {
  public conjunction: string = "and";
  public questionName: string;
  public operator: string = "equal";
  public value: any;
}
export class SurveyConditionEditorItem extends ConditionEditorItem {
  public constructor(public survey: SurveyModel) {
    super();
  }
  public getOperatorText(): string {
    var op = this.operator;
    if (op == "equal") return "=";
    if (op == "notequal") return "<>";
    if (op == "greater") return ">";
    if (op == "less") return "<";
    if (op == "greaterorequal") return ">=";
    if (op == "lessorequal") return "<=";
    return op;
  }
  public getValueText(): string {
    var val = this.value;
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
  public get isValueRequired(): boolean {
    return this.operator !== "empty" && this.operator !== "notempty";
  }
  public get isReady(): boolean {
    return (
      !!this.questionName &&
      (!this.isValueRequired || !Helpers.isValueEmpty(this.value))
    );
  }
  public toExpression(): string {
    var text =
      "{" + this.getQuestionValueByName() + "} " + this.getOperatorText();
    if (this.isValueRequired) {
      text += " " + this.getValueText();
    }
    return text;
  }
  private getQuestionValueByName(): string {
    var question = this.survey.getQuestionByName(this.questionName);
    if (
      question &&
      question.name != question.getValueName() &&
      this.questionName != question.getValueName()
    ) {
      return this.questionName.replace(question.name, question.getValueName());
    }
    return this.questionName;
  }
  private valToText(val: any): string {
    if (val == "true" || val == "false") return val;
    if (this.isNumeric(val)) return val;
    if (val[0] == "[") return val.replace(/(?!^)(['])(?!$)/g, "\\$1");
    if (!this.isQuote(val[0])) val = "'" + val;
    if (!this.isQuote(val[val.length - 1])) val = val + "'";
    return val.replace(/(?!^)(['"])(?!$)/g, "\\$1");
  }
  private isNumeric(val: any): boolean {
    if (
      typeof val === "string" &&
      val.length > 1 &&
      val[0] === "0" &&
      val[1] !== "x"
    )
      return false;
    return !isNaN(val);
  }
  private isQuote(ch: string): boolean {
    return ch == "'" || ch == '"';
  }
}

export class ConditionEditorItemsBuilder {
  public constructor(private hasValue: (name: string) => boolean = null) {}
  public build(text: string): Array<ConditionEditorItem> {
    if (!text) return [];
    var operand = null;
    operand = new ConditionsParser().parseExpression(text);
    if (!operand) return [];
    return this.buildEditorItems(operand);
  }
  private buildEditorItems(operand: Operand): Array<ConditionEditorItem> {
    var res = [];
    if (!this.buildEditorItemsCore(operand, res, "")) {
      res = [];
    }
    return res;
  }
  private buildEditorItemsCore(
    operand: Operand,
    res: Array<ConditionEditorItem>,
    parentConjunction: string
  ): boolean {
    if (operand.getType() == "unary")
      return this.buildEditorItemsAddUnaryOperand(<UnaryOperand>operand, res);
    if (operand.getType() !== "binary") return false;
    var op = <BinaryOperand>operand;
    if (op.isArithmetic && !op.isConjunction) return false;
    if (op.isConjunction)
      return this.buildEditorItemsAddConjunction(op, res, parentConjunction);
    return this.buildEditorItemsAddBinaryOperand(op, res);
  }
  private buildEditorItemsAddConjunction(
    op: BinaryOperand,
    res: Array<ConditionEditorItem>,
    parentConjunction: string
  ): boolean {
    var conjunction = op.conjunction;
    if (
      conjunction == "or" &&
      !!parentConjunction &&
      parentConjunction != conjunction
    )
      return false;
    if (!this.buildEditorItemsCore(op.leftOperand, res, conjunction))
      return false;
    var conjunctionIndex = res.length;
    if (!this.buildEditorItemsCore(op.rightOperand, res, conjunction))
      return false;
    res[conjunctionIndex].conjunction = op.conjunction;
    return true;
  }
  private buildEditorItemsAddBinaryOperand(
    op: BinaryOperand,
    res: Array<ConditionEditorItem>
  ): boolean {
    var variableOperand = <Variable>this.getOperandByType(op, "variable");
    var arrayValue = this.getArrayValueFromOperand(op);
    var constOperand = !arrayValue
      ? <Const>this.getOperandByType(op, "const")
      : null;
    if (
      !variableOperand ||
      (!constOperand && !arrayValue && this.canShowValueByOperator(op.operator))
    )
      return false;
    if (!this.isVariableInSurvey(variableOperand.variable)) return false;
    var item = new ConditionEditorItem();
    item.questionName = variableOperand.variable;
    item.operator =
      op.leftOperand !== variableOperand
        ? this.getOppositeOperator(op.operator)
        : op.operator;
    if (!!arrayValue) {
      item.value = arrayValue;
    }
    if (!!constOperand) {
      item.value = constOperand.correctValue;
    }
    res.push(item);
    return true;
  }
  private isVariableInSurvey(variable: string): boolean {
    return !!this.hasValue ? this.hasValue(variable) : true;
  }
  private getArrayValueFromOperand(op: BinaryOperand): Array<any> {
    var arrayOperand = <ArrayOperand>this.getOperandByType(op, "array");
    if (!arrayOperand || !arrayOperand.values) return null;
    var valuesOperand = arrayOperand.values;
    if (!Array.isArray(valuesOperand) || valuesOperand.length == 0) return null;
    var res = [];
    for (var i = 0; i < valuesOperand.length; i++) {
      var opConst = valuesOperand[i];
      if (!opConst) continue;
      if (opConst.getType() != "const") return null;
      res.push((<Const>opConst).correctValue);
    }
    if (res.length == 0) return null;
    return res;
  }
  private buildEditorItemsAddUnaryOperand(
    op: UnaryOperand,
    res: Array<ConditionEditorItem>
  ): boolean {
    var operator = op.operator;
    if (operator !== "empty" && operator != "notempty") return false;
    var operand = op.expression;
    if (operand == null || operand.getType() != "variable") return false;
    var questionName = (<Variable>operand).variable;
    if (!this.isVariableInSurvey(questionName)) return false;
    var item = new ConditionEditorItem();
    item.questionName = questionName;
    item.operator = operator;
    res.push(item);
    return true;
  }
  private getOppositeOperator(operator: string): string {
    if (operator == "less") return "greater";
    if (operator == "greater") return "less";
    if (operator == "lessorequal") return "greaterorequal";
    if (operator == "greaterorequal") return "lessorequal";
    return operator;
  }
  private getOperandByType(op: BinaryOperand, opType: string): Operand {
    if (!op.rightOperand) return null;
    if (
      op.leftOperand.getType() !== opType &&
      op.rightOperand.getType() !== opType
    )
      return null;
    if (
      op.leftOperand.getType() == opType &&
      op.rightOperand.getType() == opType
    )
      return null;
    return op.leftOperand.getType() == opType
      ? op.leftOperand
      : op.rightOperand;
  }
  private canShowValueByOperator(operator: string) {
    return operator != "empty" && operator != "notempty";
  }
}

export class ConditionEditor extends PropertyEditorSetupValue {
  public static canParseExpression(text: string): boolean {
    if (!text) return true;
    return !!new ConditionsParser().parseExpression(text);
  }
  public static canBuildExpression(text: string): boolean {
    if (!text) return true;
    if (!ConditionEditor.canParseExpression(text)) return false;
    return new ConditionEditorItemsBuilder().build(text).length > 0;
  }
  private objectValue: Base;
  private surveyValue: SurveyModel;
  private panelValue: QuestionPanelDynamicModel;
  private textEditorValue: QuestionCommentModel;
  private addConditionQuestionsHash = {};
  private isModalValue: boolean = true;
  public allConditionQuestions: Array<ItemValue>;

  constructor(
    survey: SurveyModel,
    object: Base = null,
    options: ISurveyCreatorOptions = null,
    private propertyName = ""
  ) {
    super(options);
    this.surveyValue = survey;
    this.objectValue = object;
    this.panelValue = <QuestionPanelDynamicModel>(
      this.editSurvey.getQuestionByName("panel")
    );
    this.textEditorValue = <QuestionCommentModel>(
      this.editSurvey.getQuestionByName("textEditor")
    );
    if (!!this.options.maxLogicItemsInCondition) {
      this.panel.maxPanelCount = this.options.maxLogicItemsInCondition;
    }
    this.allConditionQuestions = this.createAllConditionQuestions();
    this.editSurvey.onValueChanged.add((sender, options) => {
      if (options.name === "textEditor") {
        this.textEditorValueChanged();
      }
    });
    this.editSurvey.onDynamicPanelAdded.add((sender, options) => {
      this.onPanelAdded();
    });
    this.editSurvey.onDynamicPanelRemoved.add((sender, options) => {
      if (options.question.panelCount == 0) {
        options.question.addPanel();
      }
    });
    this.editSurvey.onDynamicPanelItemValueChanged.add((sender, options) => {
      this.onPanelValueChanged(options.panel, options.name);
    });
    this.editSurvey.onGetQuestionTitleActions.add((sender, options) => {
      this.onGetQuestionTitleActions(options);
    });
    this.text =
      !!this.object && this.propertyName ? this.object[this.propertyName] : "";
  }
  public get title(): string {
    return this.panel.title;
  }
  public set title(val: string) {
    this.panel.title = val;
    this.textEditor.title = val;
  }
  public get isModal(): boolean {
    return this.isModalValue;
  }
  public set isModal(val: boolean) {
    if (val === this.isModalValue) return;
    this.isModalValue = val;
    this.panel.titleLocation = val ? "hidden" : "default";
  }
  protected getSurveyJSON(): any {
    return {
      elements: [
        {
          type: "paneldynamic",
          titleLocation: "hidden",
          name: "panel",
          panelRemoveButtonLocation: "right",
          panelAddText: editorLocalization.getString("pe.addCondition"),
          templateElements: [
            {
              name: "conjunction",
              type: "dropdown",
              titleLocation: "hidden",
              showOptionsCaption: false,
              visibleIf: "{panelIndex} > 0",
              choices: ["and", "or"]
            },
            {
              name: "questionName",
              type: "dropdown",
              titleLocation: "hidden",
              startWithNewLine: false,
              isRequired: true
            },
            {
              name: "operator",
              type: "dropdown",
              titleLocation: "hidden",
              startWithNewLine: false,
              showOptionsCaption: false,
              isRequired: true,
              enableIf: "{panel.questionName} notempty"
            },
            {
              name: "questionValue",
              type: "text",
              visible: false
            }
          ]
        },
        {
          type: "comment",
          name: "textEditor",
          textUpdateMode: "onTyping",
          visible: false
        }
      ]
    };
  }
  /*  
  protected createSurvey(): SurveyModel {
    var res = super.createSurvey();
    res.onUpdateQuestionCssClasses.add((sender: SurveyModel, options: any) => {
      if (options.question.name !== "panel") return;
      options.cssClasses.iconRemove = "svc-creator-condition__editor-remove";
    });
    return res;
  }
*/
  protected getSurveyCreationReason(): string {
    return "condition-builder";
  }

  public get text(): string {
    return this.getText();
  }
  public set text(val: string) {
    if (!this.isModal && !ConditionEditor.canBuildExpression(val)) {
      this.panel.panelCount = 0;
      this.showTextEditor(val);
    } else {
      this.textEditor.value = val;
      this.showBuilder();
    }
  }
  private processText(val: string) {
    this.panel.panelCount = 0;
    var items = new ConditionEditorItemsBuilder().build(val);
    this.buildPanels(items);
  }
  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public get object(): Base {
    return this.objectValue;
  }
  public get panel(): QuestionPanelDynamicModel {
    return this.panelValue;
  }
  public get textEditor(): QuestionCommentModel {
    return this.textEditorValue;
  }
  public get isReady(): boolean {
    if (this.textEditor.visible) {
      return ConditionEditor.canParseExpression(this.textEditor.value);
    }
    for (var i = 0; i < this.panel.panels.length; i++) {
      if (!this.createEditorItemFromPanel(this.panel.panels[i]).isReady)
        return false;
    }
    return true;
  }
  public apply(): boolean {
    if (!this.isReady) return false;
    if (!this.object || !this.propertyName) return;
    this.object[this.propertyName] = this.text;
    return true;
  }
  private buildPanels(items: Array<ConditionEditorItem>) {
    this.panel.panelCount = items.length;
    for (var i = 0; i < items.length; i++) {
      this.setItemToPanel(items[i], this.panel.panels[i]);
    }
    if (this.panel.panelCount == 0) {
      this.panel.addPanel();
    }
  }
  private isSettingPanelValues = false;
  private setItemToPanel(item: ConditionEditorItem, panel: PanelModel) {
    this.isSettingPanelValues = true;
    panel.getQuestionByName("conjunction").value = item.conjunction;
    panel.getQuestionByName("operator").choices = this.getOperators();
    panel.getQuestionByName("operator").value = item.operator;
    panel.getQuestionByName("questionName").choices =
      this.allConditionQuestions;
    if (!!this.getConditionQuestion(item.questionName)) {
      panel.getQuestionByName("questionName").value = item.questionName;
    }
    if (!!panel.getQuestionByName("questionValue")) {
      panel.getQuestionByName("questionValue").value = item.value;
    }
    this.isSettingPanelValues = false;
  }
  private getText(): string {
    if (this.textEditor.visible) return this.textEditor.value;
    var res = "";
    var items = [];
    for (var i = 0; i < this.panel.panels.length; i++) {
      items.push(this.createEditorItemFromPanel(this.panel.panels[i]));
    }
    for (var i = 0; i < items.length; i++) {
      if (!items[i].isReady) return "";
      if (!!res) {
        res += " " + items[i].conjunction + " ";
      }
      res += items[i].toExpression();
    }
    return res;
  }
  private createEditorItemFromPanel(
    panel: PanelModel
  ): SurveyConditionEditorItem {
    var item = new SurveyConditionEditorItem(this.survey);
    item.conjunction = panel.getQuestionByName("conjunction").value;
    item.questionName = panel.getQuestionByName("questionName").value;
    item.operator = panel.getQuestionByName("operator").value;
    if (!!panel.getQuestionByName("questionValue")) {
      item.value = panel.getQuestionByName("questionValue").value;
    }
    return item;
  }
  private createAllConditionQuestions(): Array<ItemValue> {
    if (!this.survey) return [];
    var res = [];
    var questions = this.survey.getAllQuestions();
    if (questions.length > 0) {
      for (var i = 0; i < questions.length; i++) {
        if (this.object == questions[i]) continue;
        questions[i].addConditionObjectsByContext(res, this.object);
      }
      this.options.onConditionQuestionsGetListCallback(
        this.propertyName,
        <any>this.object,
        this,
        res
      );
      for (var i = 0; i < res.length; i++) {
        res[i].value = res[i].name;
        let question = !!res[i].question ? res[i].question : res[i];
        if (!this.options.showTitlesInExpressions) {
          let name = res[i].name;
          let valueName = question.valueName;
          if (!!valueName && name.indexOf(valueName) == 0) {
            name = name.replace(valueName, question.name);
          }
          res[i].text = this.options.getObjectDisplayName(
            question,
            "condition",
            name
          );
        }
        this.addConditionQuestionsHash[res[i].name] = question;
      }
    }
    this.addValuesIntoConditionQuestions(this.survey.calculatedValues, res);
    this.addValuesIntoConditionQuestions(this.survey.getVariableNames(), res);
    return res;
  }
  private addValuesIntoConditionQuestions(values: Array<any>, res: Array<any>) {
    for (var i = 0; i < values.length; i++) {
      let name = !!values[i].name ? values[i].name : values[i];
      this.addConditionQuestionsHash[name] = this.getCalculatedValueQuestion();
      res.push({
        value: name,
        text: name,
        question: this.getCalculatedValueQuestion()
      });
    }
  }
  private calculatedValueQuestion: Question = null;
  private getCalculatedValueQuestion(): Question {
    if (!this.calculatedValueQuestion) {
      this.calculatedValueQuestion = Serializer.createClass("text");
      this.calculatedValueQuestion.name = "question";
    }
    return this.calculatedValueQuestion;
  }
  private getOperators(): Array<ItemValue> {
    var res = [];
    var ops = settings.operators;
    for (var name in ops) {
      res.push(new ItemValue(name, editorLocalization.getString("op." + name)));
    }
    return res;
  }
  private rebuildQuestionValue(panel: PanelModel) {
    if (!!panel.getQuestionByName("questionValue")) {
      panel.getQuestionByName("questionValue").clearValue();
    }
    var json = this.getQuestionConditionJson(
      panel.getQuestionByName("questionName").value,
      panel.getQuestionByName("operator").value
    );
    if (!json) {
      json = {
        type: "text"
      };
    }
    json.isRequired = true;
    SurveyHelper.updateQuestionJson(json);
    json.enableIf =
      "{panel.questionName} notempty and {panel.operator} != 'empty' and {panel.operator} != 'notempty'";
    var newQuestion = Serializer.createClass(json.type);
    delete json.type;
    new JsonObject().toObject(json, newQuestion);
    if (!newQuestion) {
      newQuestion = Serializer.createClass("text", json);
    }
    var oldQuestion = panel.getQuestionByName("questionValue");
    if (!!oldQuestion) {
      panel.removeElement(oldQuestion);
    }
    if (this.canShowQuestionValue(panel)) {
      newQuestion.name = "questionValue";
      newQuestion.title = editorLocalization.getString(
        "pe.conditionValueQuestionTitle"
      );
      newQuestion.description = "";
      newQuestion.titleLocation = "default";
      newQuestion.hasComment = false;
      if (this.isKeepQuestonValueOnSameLine(newQuestion.getType())) {
        newQuestion.titleLocation = "hidden";
        newQuestion.startWithNewLine = false;
      }
      panel.addElement(newQuestion);
    }
  }
  rebuildQuestionValueOnOperandChanging(panel: PanelModel) {
    var json = this.getQuestionConditionJson(
      panel.getQuestionByName("questionName").value,
      panel.getQuestionByName("operator").value
    );
    var question = panel.getQuestionByName("questionValue");
    if (!!question && question.isReadOnly) {
      question.clearValue();
    }
    if (!question || (!!json && json.type == question.getType())) return;
    this.rebuildQuestionValue(panel);
  }
  private isKeepQuestonValueOnSameLine(questionType: string): boolean {
    return this.isClassContains(
      questionType,
      ["text", "dropdown", "boolean"],
      []
    );
  }
  private canShowQuestionValue(panel: PanelModel): boolean {
    var questionOperator = panel.getQuestionByName("operator");
    if (!questionOperator) return false;
    this.updateOperatorEnables(panel);
    var choices = questionOperator.choices;
    for (var i = 0; i < choices.length; i++) {
      if (!choices[i].isEnabled) continue;
      var val = choices[i].value;
      if (val !== "empty" && val != "notempty") return true;
    }
    return false;
  }
  private getConditionQuestion(name: string): Question {
    return <Question>this.addConditionQuestionsHash[name];
  }
  private getQuestionConditionJson(
    questionName: string,
    operator: string
  ): any {
    var path = "";
    var question = this.getConditionQuestion(questionName);
    if (!question) return null;
    if (questionName.indexOf(question.getValueName()) == 0) {
      path = questionName.substr(question.getValueName().length);
    }
    if (questionName.indexOf("row.") == 0) {
      path = questionName.substr("row.".length);
    }
    if (!path) {
      path = questionName;
    }
    if (!!path && path[0] == ".") {
      path = path.substr(1);
    }
    var json =
      question && question.getConditionJson
        ? question.getConditionJson(operator, path)
        : null;
    if (!!json && json.type == "radiogroup") {
      json.type = "dropdown";
    }
    if (!!json && json.type == "expression") {
      json.type = "text";
    }
    if (!!json && operator == "anyof") {
      if (!this.isClassContains(json.type, ["checkbox"], [])) {
        json.type = "checkbox";
      }
    }
    return !!json ? json : null;
  }
  private updateOperatorEnables(panel: PanelModel) {
    var questionName = panel.getQuestionByName("questionName");
    if (!questionName) return;
    var json = this.getQuestionConditionJson(questionName.value, "equal");
    var qType = !!json ? json.type : null;
    var questionOperator = panel.getQuestionByName("operator");
    if (!questionOperator) return;
    var choices = questionOperator.choices;
    var isCurrentOperatorEnabled = true;
    var op = questionOperator.value;
    for (var i = 0; i < choices.length; i++) {
      choices[i].setIsEnabled(
        this.isOperatorEnabled(qType, settings.operators[choices[i].value])
      );
      if (choices[i].value == op) {
        isCurrentOperatorEnabled = choices[i].isEnabled;
      }
    }
    if (!isCurrentOperatorEnabled) {
      questionOperator.value = this.getFirstEnabledOperator(choices);
    }
  }
  private updateQuestionsWidth(panel: PanelModel) {
    var paddingRight = "20px";
    var valueQuestion = panel.getQuestionByName("questionValue");
    var conjunctionQuestion = panel.getQuestionByName("conjunction");
    var nameQuestion = panel.getQuestionByName("questionName");
    var operatorQuestion = panel.getQuestionByName("operator");
    var isValueSameLine = !!valueQuestion && !valueQuestion.startWithNewLine;
    var isFirst = !conjunctionQuestion || !conjunctionQuestion.isVisible;
    if (!isFirst) {
      conjunctionQuestion.minWidth = "50px";
      conjunctionQuestion.width = "15%";
      conjunctionQuestion.paddingRight = paddingRight;
    }

    nameQuestion.minWidth = "50px";
    nameQuestion.width = isFirst ? "40%" : "25%";
    nameQuestion.paddingRight = paddingRight;

    operatorQuestion.minWidth = "50px";
    operatorQuestion.width = isValueSameLine ? "25%" : "60%";
    operatorQuestion.paddingRight = paddingRight;

    if (!!valueQuestion) {
      valueQuestion.minWidth = "50px";
      valueQuestion.width = isValueSameLine ? "35%" : "";
      valueQuestion.paddingRight = paddingRight;
    }
  }
  private getFirstEnabledOperator(choices: Array<ItemValue>): string {
    for (var i = 0; i < choices.length; i++) {
      if (choices[i].isEnabled) {
        return choices[i].value;
      }
    }
    return "equal";
  }
  private isOperatorEnabled(
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
    var classInfo = Serializer.findClass(qType);
    while (!!classInfo) {
      if (contains.indexOf(classInfo.name) > -1) return true;
      if (notContains.indexOf(classInfo.name) > -1) return false;
      classInfo = !!classInfo.parentName
        ? Serializer.findClass(classInfo.parentName)
        : null;
    }
    return contains.length == 0;
  }
  private onPanelAdded() {
    this.setItemToPanel(
      new ConditionEditorItem(),
      this.panel.panels[this.panel.panels.length - 1]
    );
  }
  private onPanelValueChanged(panel: PanelModel, name: string) {
    if (name == "questionName") {
      this.rebuildQuestionValue(panel);
      if (!this.isSettingPanelValues) {
        panel.getQuestionByName("operator").value = "equal";
      }
    }
    if (name == "operator") {
      this.rebuildQuestionValueOnOperandChanging(panel);
    }
    this.updateOperatorEnables(panel);
    this.updateQuestionsWidth(panel);
  }
  private showBuilderAction: IActionBarItem;
  private onGetQuestionTitleActions(options: any) {
    options.titleActions = [];
    if (
      this.isModal ||
      !this.options.allowEditExpressionsInTextEditor ||
      !options.question.parent.isPage
    )
      return;
    var isBuildQuestion = options.question === this.panel;
    var showBuilder = {
      id: "condition-buid",
      title: editorLocalization.getString("pe.buildExpression"),
      active: isBuildQuestion,
      enabled: isBuildQuestion || ConditionEditor.canBuildExpression(this.text),
      action: !isBuildQuestion
        ? () => {
            this.showBuilder();
          }
        : undefined
    };
    if (!isBuildQuestion) {
      this.showBuilderAction = showBuilder;
    }
    options.titleActions = [
      showBuilder,
      {
        id: "condition-edit",
        title: editorLocalization.getString("pe.editExpression"),
        active: !isBuildQuestion,
        action: isBuildQuestion
          ? () => {
              this.showTextEditor(this.text);
            }
          : undefined
      }
    ];
  }
  private isSettingTextEditorValue: boolean;
  private showTextEditor(expression: string) {
    this.panel.visible = false;
    this.isSettingTextEditorValue = true;
    this.textEditor.value = expression;
    this.isSettingTextEditorValue = false;
    this.textEditor.visible = true;
  }
  private showBuilder() {
    if (!this.isModal && !this.canShowBuilder) return;
    this.textEditor.visible = false;
    this.processText(this.textEditor.value);
    this.panel.visible = true;
  }
  private textEditorValueChanged() {
    if (this.isSettingTextEditorValue || !this.showBuilderAction) return;
    this.showBuilderAction.enabled = this.canShowBuilder;
  }
  private get canShowBuilder(): boolean {
    return ConditionEditor.canBuildExpression(this.textEditor.value);
  }
}
