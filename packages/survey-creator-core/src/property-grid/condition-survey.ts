import {
  SurveyModel, Serializer, ConditionsParser, QuestionPanelDynamicModel, ItemValue,
  PanelModel, Helpers, Base, JsonObject, Question, QuestionCommentModel, FunctionFactory, QuestionDropdownModel, surveyLocalization,
  settings as surveyCoreSettings,
  ConditionEditorItem, SurveyConditionEditorItem, ConditionEditorItemsBuilder,
  isConditionOperatorEnabled, isQuestionTypeInList, isQuestionClassContains, getConditionOperatorNames, getConditionDefaultOperator
} from "survey-core";
import { ISurveyCreatorOptions, settings } from "../creator-settings";
import { editorLocalization, applyCreatorUiLocaleToPopup } from "../editorLocalization";
import { SurveyHelper } from "../survey-helper";
import { PropertyEditorSetupValue } from "./index";
import { assignDefaultClasses } from "../utils/creator-utils";
import { logicCss } from "../components/tabs/logic-theme";
import { getLogicString } from "../components/tabs/logic-types";
import { CreatorBase } from "../creator-base";

// survey-core doesn't add the "-unwrapped" postfix (settings.expressionVariables.unwrapPostfix) into
// question names any more - the plain {name} resolves to the unwrapped value. The postfix is still
// supported in existing expressions, so the editor has to find a question by the postfixed name.
function removeUnwrapPostfix(name: string): string {
  const postfix = surveyCoreSettings.expressionVariables.unwrapPostfix;
  if (!name || !postfix) return name;
  const index = name.indexOf(postfix);
  if (index < 0) return name;
  const nextCh = name[index + postfix.length];
  if (nextCh !== undefined && nextCh !== "." && nextCh !== "[") return name;
  return name.substring(0, index) + name.substring(index + postfix.length);
}
// The rows of a condition, their text and the parsing of text into them live in survey-core now, shared
// with the Filter Control. Re-exported here for the code that imports them from this module.
export { ConditionEditorItem, SurveyConditionEditorItem, ConditionEditorItemsBuilder };

function questionValueVisibleIf(params: any): boolean {
  if (params.length !== 2) return false;
  if (Helpers.isValueEmpty(params[0]) || !params[1]) return false;
  return params[1] !== "empty" && params[1] !== "notempty";
}

FunctionFactory.Instance.register("questionValueVisibleIf", questionValueVisibleIf);

export class ConditionEditor extends PropertyEditorSetupValue {
  public static canParseExpression(text: string): boolean {
    return ConditionEditorItemsBuilder.canParseExpression(text);
  }
  public static canBuildExpression(text: string): boolean {
    return ConditionEditorItemsBuilder.canBuildExpression(text);
  }
  public static isOperatorEnabled(qType: string, operatorTypes: Array<string>): boolean {
    return isQuestionTypeInList(qType, operatorTypes);
  }
  public static isClassContains(qType: string, contains: Array<string>, notContains: Array<string>): boolean {
    return isQuestionClassContains(qType, contains, notContains);
  }
  private objectValue: Base;
  private surveyValue: SurveyModel;
  private contextValue: Question;
  private panelValue: QuestionPanelDynamicModel;
  private textEditorValue: QuestionCommentModel;
  private addConditionQuestionsHash = {};
  private isModalValue: boolean = true;
  public allConditionQuestions: Array<ItemValue>;
  public onContextChanged: (context: Question) => void;

  constructor(
    survey: SurveyModel,
    object: Base = null,
    options: ISurveyCreatorOptions = null,
    private propertyName = ""
  ) {
    super(options);
    this.surveyValue = survey;
    this.objectValue = object;
    this.editSurvey.locale = survey.locale;
    this.editSurvey.onPopupVisibleChanged.add((_, options) => {
      applyCreatorUiLocaleToPopup(options.popup, this.options as any);
    });
    this.panelValue = <QuestionPanelDynamicModel>(this.editSurvey.getQuestionByName("panel"));
    this.textEditorValue = <QuestionCommentModel>(this.editSurvey.getQuestionByName("textEditor"));
    if (!!this.options.logicMaxItemsInCondition) {
      this.panel.maxPanelCount = this.options.logicMaxItemsInCondition;
    }
    this.allConditionQuestions = this.createAllConditionQuestions();
    this.editSurvey.onValueChanged.add((sender, options) => {
      this.onValueChanged(options);
    });
    this.editSurvey.onDynamicPanelAdded.add((sender, options) => {
      this.onPanelAdded();
    });
    this.editSurvey.onDynamicPanelRemoved.add((sender, options) => {
      if (options.question.panelCount == 0) {
        options.question.addPanel();
      }
      if (this.panel.panelCount > 0)
        this.panel.panels[0].getQuestionByName("questionName").titleLocation = "left";
    });
    this.editSurvey.onDynamicPanelValueChanged.add((sender, options) => {
      this.onPanelValueChanged(options.panel, options.name);
    });
    this.editSurvey.css = logicCss;
    this.editSurvey.onUpdateQuestionCssClasses.add((sender, options) => {
      this.onUpdateQuestionCssClasses(options);
    });
    this.text = !!this.object && this.propertyName ? this.object[this.propertyName] : "";
    this.updatePlaceholderVisibileIf();
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
    this.updatePlaceholderVisibileIf();
  }
  protected updatePlaceholderVisibileIf() {
    if (!!this.panel) {
      let expression = "";
      //todo remove placeholder to V2 version
      if (this.isModal && !(this.options as CreatorBase)["animationEnabled"]) {
        expression = "{panel.questionName} empty and {panelIndex} == 0";
      }
      this.panel.template.getQuestionByName("placeholder").visibleIf = expression;
    }
  }
  protected getSurveyJSON(): any {
    return {
      elements: [
        {
          type: "paneldynamic",
          titleLocation: "hidden",
          name: "panel",
          removePanelButtonLocation: "right",
          addPanelText: editorLocalization.getString("pe.addCondition"),
          minPanelCount: 1,
          maxPanelCount: 1,
          startWithNewLine: false,
          templateElements: [
            {
              name: "conjunction",
              type: "dropdown",
              renderAs: "logicoperator",
              titleLocation: "hidden",
              allowClear: false,
              visibleIf: "{panelIndex} > 0",
              choices: [
                { value: "and", text: editorLocalization.getString("pe.and") },
                { value: "or", text: editorLocalization.getString("pe.or") }
              ]
            },
            {
              name: "questionName",
              type: "dropdown",
              renderAs: "logicoperator",
              title: editorLocalization.getString("pe.if"),
              titleLocation: "left",
              placeholder: surveyLocalization.getString("placeholder", editorLocalization.locale),
              allowClear: false,
              startWithNewLine: false,
              isRequired: true
            },
            {
              name: "operator",
              type: "dropdown",
              renderAs: "logicoperator",
              titleLocation: "hidden",
              startWithNewLine: false,
              allowClear: false,
              isRequired: true,
              enableIf: "{panel.questionName} notempty"
            },
            {
              name: "removeAction",
              type: "linkvalue",
              titleLocation: "hidden",
              visible: false,
              startWithNewLine: false,
              showValueInLink: false,
              allowClear: false,
              showClear: false,
              iconName: "icon-delete_24x24"
            },
            {
              name: "questionValue",
              type: "text",
              visible: false
            },
            {
              name: "placeholder",
              type: "html",
              visible: false,
              html: `<div class='svc-logic-placeholder'><span class="svc-logic-placeholder__text">${editorLocalization.getString("pe.emptyLogicPopupMessage")}<span></div>`
            }
          ]
        },
        {
          type: "comment",
          titleLocation: "hidden",
          name: "textEditor",
          textUpdateMode: "onTyping",
          placeholder: editorLocalization.getString("pe.emptyExpressionPlaceHolder"),
          visible: false
        }
      ]
    };
  }
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
      this.showBuilder(val);
    }
  }
  public isModified(prevText: string): boolean {
    if (this.textEditor.visible) return prevText != this.text;
    const items = this.getEditorItems();
    const prevOp = !!prevText ? new ConditionsParser().parseExpression(prevText) : null;
    if (!prevOp) return !(items.length == 1 && !items[0].questionName);
    if (!this.isReady) return true;
    const curOp = new ConditionsParser().parseExpression(this.text);
    return !prevOp.isEqual(curOp);
  }
  public get context(): Question {
    return this.contextValue;
  }
  public set context(val: Question) {
    if (val === this.context) return;
    this.contextValue = val;
    this.updateNamesOnContextChanged();
    if (this.onContextChanged) {
      this.onContextChanged(val);
    }
  }
  private processText(val: string) {
    this.panel.panelCount = 0;
    const items = new ConditionEditorItemsBuilder().build(val);
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
    for (let i = 0; i < this.panel.panels.length; i++) {
      if (!this.createEditorItemFromPanel(this.panel.panels[i]).isReady)
        return false;
    }
    return true;
  }
  public errorText: string;
  public isEmpty(): boolean {
    if (this.panel.panels.length === 0) return true;
    if (this.panel.panels.length > 1) return false;
    const item = this.createEditorItemFromPanel(this.panel.panels[0]);
    return !item.questionName;
  }
  public hasErrorInUI(): boolean {
    const creator = (<any>this.survey).creator;
    if (!this.isReady) {
      this.hasErrors();
      this.errorText = getLogicString("expressionInvalid");
      !!creator &&
        creator.notify(this.errorText, "error");
      return true;
    }
    return false;
  }

  public apply(): boolean {
    if (this.hasErrorInUI()) {
      return false;
    }
    if (!this.object || !this.propertyName) return;
    this.object[this.propertyName] = this.text;
    return true;
  }
  public setIsFastEntry(showTextEdit: boolean): void {
    if (showTextEdit) {
      this.showTextEditor(this.text);
    } else {
      if (!this.panel.visible) {
        this.showBuilder(this.text);
      }
    }
  }
  private buildPanels(items: Array<ConditionEditorItem>) {
    this.panel.panelCount = items.length;
    for (let i = 0; i < items.length; i++) {
      this.setItemToPanel(items[i], this.panel.panels[i]);
    }
    if (this.panel.panelCount == 0) {
      this.panel.addPanel();
    }
  }
  private isSettingPanelValues = false;
  private getIsOperatorEnabled(qName: string, qType: string, op: string, condQuestion: Question, isContainer: boolean): boolean {
    if (isContainer) return op === "empty" || op === "notempty";
    let isOperatorEnabled = isConditionOperatorEnabled(qType, op);
    return !!condQuestion ? this.options.isConditionOperatorEnabled(qName, condQuestion, op, isOperatorEnabled) : isOperatorEnabled;
  }
  private isContainerQuestion(questionName: string): boolean {
    if (!settings.logic.includeComplexQuestions || !questionName) return false;
    for (let key in this.addConditionQuestionsHash) {
      if (key.indexOf(questionName + ".") === 0 || key.indexOf(questionName + "[") === 0) return true;
    }
    return false;
  }
  private setupConditionOperator(item: ConditionEditorItem, panel: PanelModel) {
    const questionOperator = <QuestionDropdownModel>panel.getQuestionByName("operator");
    questionOperator.choices = this.getOperators();
    questionOperator.value = item.operator;
    questionOperator.onOpened.add((_, opt) => {
      this.updateConditionChoices(panel, opt.choices);
    });
  }
  private updateConditionChoices(panel: PanelModel, choices: Array<ItemValue>, questionOperator?: Question): void {
    let isCurrentOperatorEnabled = true;
    const op = questionOperator?.value;
    const questionName = panel.getQuestionByName("questionName").value;
    const json = this.getQuestionConditionJson(questionName);
    const qType = !!json ? json.type : null;
    const isContainer = this.isContainerQuestion(questionName);
    const condQuestion = this.getConditionQuestion(questionName);
    choices.forEach((choice) => {
      const isOperatorEnabled = this.getIsOperatorEnabled(questionName, qType, choice.value, condQuestion, isContainer);
      choice.setIsEnabled(isOperatorEnabled);
      choice.setIsVisible(isOperatorEnabled);
      if (!!questionOperator && choice.value == op) {
        isCurrentOperatorEnabled = isOperatorEnabled;
      }
    });
    if (!isCurrentOperatorEnabled) {
      questionOperator.value = this.getFirstEnabledOperator(choices);
    }
  }
  private setupConditionQuestionName(item: ConditionEditorItem, panel: PanelModel) {
    const panelQuestionName = <QuestionDropdownModel>panel.getQuestionByName("questionName");
    panelQuestionName.choices = this.getConditionQuestions();
    panelQuestionName.titleLocation = this.panel.panels.indexOf(panel) == 0 ? "left" : "hidden";
    const questionName = this.getQuestionNameToPanel(item.questionName);
    if (!!this.getConditionQuestion(questionName)) {
      panelQuestionName.value = questionName;
    }
  }
  private setupRemoveQuestion(panel: PanelModel) {
    const dynamicPanel: QuestionPanelDynamicModel = <QuestionPanelDynamicModel>(panel.getQuestionByName("removeAction").parentQuestion);
    const removeQuestionQuestion: any = panel.getQuestionByName("removeAction");
    removeQuestionQuestion.linkClickCallback = () => {
      if (!!dynamicPanel) {
        dynamicPanel.removePanelUI(panel);
      }
    };
    removeQuestionQuestion.linkSetButtonCssClasses = "svc-logic-condition-remove svc-icon-remove";
    removeQuestionQuestion.linkValueText = "";
  }
  private setItemToPanel(item: ConditionEditorItem, panel: PanelModel) {
    this.isSettingPanelValues = true;
    panel.getQuestionByName("conjunction").value = item.conjunction;
    this.setupConditionOperator(item, panel);
    this.setupConditionQuestionName(item, panel);
    if (!!panel.getQuestionByName("questionValue")) {
      panel.getQuestionByName("questionValue").value = item.value;
      this.updateSurveyVariable(item);
    }
    this.setupRemoveQuestion(panel);
    this.isSettingPanelValues = false;
  }
  private updateSurveyVariable(item: ConditionEditorItem): void {
    this.editSurvey.setVariable(item.questionName, item.value);
  }
  private getConditionQuestions(): Array<ItemValue> {
    if (!this.context) return this.allConditionQuestions;
    const res = [];
    for (var i = 0; i < this.allConditionQuestions.length; i++) {
      const item: any = this.allConditionQuestions[i];
      if (!item.context || item.context === this.context) {
        res.push(item);
      }
    }
    return res;
  }
  private getText(): string {
    if (this.textEditor.visible) return this.textEditor.value;
    return ConditionEditorItemsBuilder.itemsToExpression(this.getEditorItems());
  }
  private getEditorItems(): Array<SurveyConditionEditorItem> {
    const res = [];
    for (let i = 0; i < this.panel.panels.length; i++) {
      res.push(this.createEditorItemFromPanel(this.panel.panels[i]));
    }
    return res;
  }
  private createEditorItemFromPanel(panel: PanelModel): SurveyConditionEditorItem {
    const item = new SurveyConditionEditorItem(this.survey);
    item.conjunction = panel.getQuestionByName("conjunction").value;
    item.questionName = this.getQuestionNameFromPanel(panel.getQuestionByName("questionName").value);
    item.operator = panel.getQuestionByName("operator").value;
    if (!!panel.getQuestionByName("questionValue")) {
      item.value = panel.getQuestionByName("questionValue").value;
      this.updateSurveyVariable(item);
    }
    return item;
  }
  private getQuestionNameFromPanel(name: string): string {
    if (!this.context || !name) return name;
    const prefix = this.context.getValueName() + ".";
    return name.replace(prefix, "");
  }
  private getContextIndexInfo(name: string, prefix: string = ""): { index: number, name: string } {
    return SurveyHelper.getQuestionContextIndexInfo(name, prefix);
  }
  private getQuestionNameToPanel(name: string): string {
    if (!this.context || !name) return name;
    const indexInfo = this.getContextIndexInfo(name);
    if (!indexInfo || indexInfo.index !== 0) return name;
    return this.context.getValueName() + "." + name;
  }
  private getContextFromPanels(): Question {
    if (!!this.object) return null;
    for (var i = 0; i < this.panel.panels.length; i++) {
      const questionName = this.panel.panels[i].getQuestionByName("questionName").value;
      const context = this.getContextByQuestionName(questionName);
      if (!!context) return context;
    }
    return null;
  }
  private updateNamesOnContextChanged() {
    for (var i = 0; i < this.panel.panels.length; i++) {
      this.panel.panels[i].getQuestionByName("questionName").choices = this.getConditionQuestions();
    }
  }
  private getContextByQuestionName(name: string): Question {
    if (!name) return null;
    const indexInfo = this.getContextIndexInfo(name, ".");
    if (!indexInfo) return null;
    name = name.substring(0, indexInfo.index);
    return <Question>this.survey.getQuestionByValueName(name);
  }
  private getConditionQuestionText(question: Question, name: string): string {
    return this.options.getObjectDisplayName(question, "condition-editor", "condition", name);
  }
  private createAllConditionQuestions(): Array<ItemValue> {
    if (!this.survey) return [];
    const res = [];
    const questions = this.survey.getAllQuestions();
    const contextObject = this.getContextObject();
    let sortOrder = settings.logic.questionSortOrder;
    if (questions.length > 0) {
      for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        if (contextObject === question && !this.isItemValueObject) continue;
        const context = contextObject ? contextObject : (!this.context || this.context === question);
        if (settings.logic.includeComplexQuestions && question.isContainer) {
          res.push({ question: question, name: question.name, text: question.title });
        }
        question.addConditionObjectsByContext(res, context);
      }
      this.mergeSelectBasedQuestions(res);
      this.removeEntriesByValueName(res);
    }

    const variableNames = this.getVariableNames();
    this.addSurveyCalculatedValues(variableNames);
    sortOrder = this.options.onConditionQuestionsGetListCallback(this.propertyName, <any>this.object, this, res, variableNames);

    for (let i = 0; i < res.length; i++) {
      res[i].value = res[i].name;
      let question = !!res[i].question ? res[i].question : res[i];
      let text = res[i].text;
      //An item is a path to a question ("matrix.row1.col1"), not the question itself, so the default
      //text cannot be derived from the question. Both the name and the title path are built already
      if (!this.options.useElementTitles) {
        text = res[i].name;
        let valueName = question.valueName;
        if (!!valueName && text.indexOf(valueName) == 0) {
          text = text.replace(valueName, question.name);
        }
      }
      res[i].text = this.getConditionQuestionText(question, text);
      const hashKey = res[i].name;
      if (!this.addConditionQuestionsHash[hashKey] || question.name === hashKey) {
        this.addConditionQuestionsHash[hashKey] = question;
      }
    }

    this.addValuesIntoConditionQuestions(variableNames, res);
    if (sortOrder === "asc") {
      SurveyHelper.sortItems(res);
    }
    return res;
  }
  private getContextObject(): Base {
    if (this.isItemValueObject) {
      const res: any = (<ItemValue>this.object).locOwner;
      if (!!res && res.getType) {
        if (!!res.locOwner && res.locOwner.isDescendantOf("matrixdropdowncolumn"))
          return res.locOwner;
        return res;
      }
    }
    return this.object;
  }
  private get isItemValueObject(): boolean {
    return this.object && this.object.isDescendantOf("itemvalue");
  }
  // The design survey never runs a preset, so the variables a host injects at runtime (issue #7982)
  // are not on it: they come from the creator's container. The definition names them; a container
  // with presets and no definition still tells which names the host uses - the keys of every
  // preset - so those are the fallback. Whichever preset Preview runs, and whether any does, the
  // designer sees the same set: a rule is written against a variable, not against a value.
  // The survey's own variables come first, in the lower-cased spelling setVariable gives them, and
  // a container name that only differs by case is the same variable and is not listed twice.
  private getVariableNames(): Array<string> {
    const res = this.survey.getVariableNames();
    const model = this.options?.variablePresetsModel;
    if (!model) return res;
    let names: Array<string> = model.getVariableNames();
    if (names.length === 0 && !model.hasDefinition) {
      names = [];
      model.getPresetNames().forEach(presetName => {
        const variables = model.getPreset(presetName)?.variables;
        if (!variables) return;
        Object.keys(variables).forEach(name => {
          if (names.indexOf(name) < 0) names.push(name);
        });
      });
    }
    const known = res.map(name => name.toLowerCase());
    names.forEach(name => {
      const key = name.toLowerCase();
      if (known.indexOf(key) >= 0) return;
      known.push(key);
      res.push(name);
    });
    return res;
  }
  private addValuesIntoConditionQuestions(values: Array<any>, res: Array<any>) {
    for (let i = 0; i < values.length; i++) {
      let name = !!values[i].name ? values[i].name : values[i];
      // A host variable the definition describes is edited with the definition's own question - a
      // dropdown with its choices, a number box with its range - rather than the plain text box a
      // calculated value gets: the definition is where the host said what values the variable takes.
      const question = this.getHostVariableQuestion(name) || this.getCalculatedValueQuestion();
      this.addConditionQuestionsHash[name] = question;
      res.push({
        value: name,
        text: name,
        question: question
      });
    }
  }
  private getHostVariableQuestion(name: string): Question {
    return this.options?.variablePresetsModel?.getVariableQuestion(name);
  }
  // The value editor of a variable has no title: the row already names it, and a calculated value
  // has no title to show anyway. It is the same rule for a host variable - its definition question
  // has a title, but the row names the variable and the value box needs no second heading.
  private isVariableQuestion(question: Question): boolean {
    if (!question) return false;
    if (question === this.calculatedValueQuestion) return true;
    return this.getHostVariableQuestion(question.getValueName()) === question;
  }
  private addSurveyCalculatedValues(names: Array<any>) {
    this.survey.calculatedValues.forEach(item => {
      const index = names.indexOf(item.name.toLowerCase());
      if (index > -1) {
        names.splice(index, 1);
      }
      names.push(item.name);
    });
  }
  private mergeSelectBasedQuestions(res: Array<any>): void {
    const selectBaseHash = {};
    for (let i = 0; i < res.length; i++) {
      if (res[i].context) continue;
      const q: Question = res[i].question;
      if (q.isDescendantOf("selectbase")) {
        const valueName = q.getFilteredName();
        let qs = selectBaseHash[valueName];
        if (!selectBaseHash[valueName]) {
          qs = [];
          selectBaseHash[valueName] = qs;
        }
        if (qs.length === 0 || qs[0].getType() === q.getType()) {
          qs.push(q);
        }
      }
    }
    for (const valueName in selectBaseHash) {
      const qs = selectBaseHash[valueName];
      if (qs.length < 2) continue;
      this.replaceQuestions(res, qs);
    }
  }
  private removeEntriesByValueName(res: Array<any>): void {
    const nameHash: any = {};
    for (let i = 0; i < res.length; i++) {
      const q: Question = res[i].question;
      if (q && !q.valueName) {
        nameHash[res[i].name] = q;
      }
    }
    for (let i = res.length - 1; i >= 0; i--) {
      const q: Question = res[i].question;
      const nameQuestion = nameHash[res[i].name];
      if (q && !!q.valueName && !!nameQuestion && q.parentQuestion === nameQuestion.parentQuestion) {
        res.splice(i, 1);
      }
    }
  }
  private replaceQuestions(res: Array<any>, arr: Array<Question>): void {
    const json = arr[0].toJSON();
    json.type = arr[0].getType();
    if (!json.choices) {
      json.choices = [];
    }
    for (let i = 1; i < arr.length; i++) {
      this.mergeSelectBasedTwoQuestions(arr[0], arr[i], json);
    }
    const question = Serializer.createClass(json.type, json);
    for (let i = 0; i < arr.length; i++) {
      this.mergeChoices(question, arr[i]);
    }
    for (let i = res.length - 1; i >= 0; i--) {
      const item = res[i];
      const index = arr.indexOf(item.question);
      if (index > 0) {
        res.splice(i, 1);
      } else if (index === 0) {
        item.question = question;
      }
    }
  }
  private mergeSelectBasedTwoQuestions(q1: Question, q2: Question, json: any): void {
    const js = q2.toJSON();
    for (let key in js) {
      if (Helpers.isValueEmpty(json[key])) {
        json[key] = js[key];
      }
    }
  }
  private mergeChoices(q1: Question, q2: Question): void {
    for (let i = 0; i < q2.choices.length; i++) {
      const choice = q2.choices[i];
      if (!ItemValue.getItemByValue(q1.choices, choice.value)) {
        q1.choices.push(new ItemValue(choice.value, choice.text));
      }
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
    return getConditionOperatorNames().map((name: string): ItemValue => new ItemValue(name, editorLocalization.getString("op." + name)));
  }
  private rebuildQuestionValue(panel: PanelModel) {
    if (!!panel.getQuestionByName("questionValue")) {
      panel.getQuestionByName("questionValue").clearValue();
    }
    const qName = panel.getQuestionByName("questionName").value;
    let json = this.getQuestionConditionJson(qName,
      panel.getQuestionByName("operator").value
    );
    if (!json) {
      json = {
        type: "text"
      };
    }
    json.isRequired = true;
    SurveyHelper.updateQuestionJson(json);
    json.enableIf = "{panel.questionName} notempty and {panel.operator} != 'empty' and {panel.operator} != 'notempty'";
    let newQuestion = Serializer.createClass(json.type);
    delete json.type;
    new JsonObject().toObject(json, newQuestion);
    if (!newQuestion) {
      newQuestion = Serializer.createClass("text", json);
    }
    const oldQuestion = panel.getQuestionByName("questionValue");
    if (!!oldQuestion) {
      panel.removeElement(oldQuestion);
    }
    if (this.canShowQuestionValue(panel)) {
      const title = newQuestion.title;
      const question = this.getConditionQuestion(qName);
      newQuestion.name = "questionValue";
      newQuestion.visibleIf = "questionValueVisibleIf({panel.questionName}, {panel.operator})";
      newQuestion.title = title;
      newQuestion.description = "";
      if (this.isVariableQuestion(question)) {
        newQuestion.titleLocation = "hidden";
        if (!!newQuestion.getPropertyByName("placeholder")) {
          newQuestion.placeholder = editorLocalization.getString("ed.lg.calculatedValuePlaceholder");
        }
      } else {
        newQuestion.titleLocation = "top";
      }
      newQuestion.showCommentArea = false;
      if (newQuestion.showOtherItem) {
        if (question && question.getStoreOthersAsComment && question.getStoreOthersAsComment()) {
          const other = newQuestion.otherItem;
          newQuestion.choices.push(new ItemValue(other.value, other.title));
          other.value = "#" + other.value + "#";
          newQuestion.showOtherItem = false;
        }
      }
      panel.addElement(newQuestion);
    }
  }
  rebuildQuestionValueOnOperandChanging(panel: PanelModel): void {
    const json = this.getQuestionConditionJson(
      panel.getQuestionByName("questionName").value,
      panel.getQuestionByName("operator").value
    );
    const question = panel.getQuestionByName("questionValue");
    if (!!question && (question.isReadOnly || !question.isVisible)) {
      question.clearValue();
    }
    if (!question || (!!json && json.type == question.getType())) return;
    this.rebuildQuestionValue(panel);
  }
  private canShowQuestionValue(panel: PanelModel): boolean {
    const questionOperator = <QuestionDropdownModel>panel.getQuestionByName("operator");
    if (!questionOperator) return false;
    this.updateOperatorEnables(panel);
    const choices = questionOperator.choices;
    for (let i = 0; i < choices.length; i++) {
      if (!choices[i].isEnabled) continue;
      const val = choices[i].value;
      if (val !== "empty" && val != "notempty") return true;
    }
    return false;
  }
  private getConditionQuestion(name: string): Question {
    const question = <Question>this.addConditionQuestionsHash[name] || <Question>this.addConditionQuestionsHash[removeUnwrapPostfix(name)];
    if (question && question.name !== name) {
      const directQuestion = <Question>this.survey.getQuestionByName(name);
      if (directQuestion) return directQuestion;
    }
    return question;
  }
  private getQuestionConditionJson(questionName: string, operator?: string): any {
    let path = "";
    const question = this.getConditionQuestion(questionName);
    if (!question) return null;
    if (!operator) {
      operator = this.getDefaultOperatorByQuestion(question);
    }
    if (questionName.indexOf(question.getValueName()) == 0) {
      path = questionName.substring(question.getValueName().length);
    }
    const indexInfo = this.getContextIndexInfo(questionName);
    if (!!indexInfo && indexInfo.index == 0) {
      path = questionName.substring(indexInfo.name.length);
    }
    if (!path) {
      path = questionName;
    }
    if (!!path && path[0] == ".") {
      path = path.substring(1);
    }
    const json = question && question.getConditionJson ? question.getConditionJson(operator, path) : null;
    if (!json) return null;
    if (!!json.choicesFromQuestion) {
      this.updateChoicesFromQuestion(json);
    }
    if (json.type == "expression") {
      json.type = "text";
    }
    if (operator == "anyof" || operator == "noneof") {
      if (!ConditionEditor.isClassContains(json.type, ["checkbox"], [])) {
        json.type = "checkbox";
      }
    }
    this.deleteCommentProperties(json);
    return json;
  }
  private deleteCommentProperties(json: any): void {
    delete json.showCommentArea;
    if (Array.isArray(json.choices)) {
      json.choices.forEach(choice => {
        if (!!choice && typeof choice === "object") {
          delete choice.showCommentArea;
        }
      });
    }
  }
  private updateChoicesFromQuestion(json: any): void {
    const question = this.getConditionQuestion(json.choicesFromQuestion);
    if (!question) return;
    delete json.choicesFromQuestion;
    const questionJSON = question.toJSON();
    if (!!questionJSON.choices) {
      json.choices = questionJSON.choices;
    }
    if (!!questionJSON.choicesByUrl) {
      json.choicesByUrl = questionJSON.choicesByUrl;
    }
  }
  private updateOperatorEnables(panel: PanelModel) {
    const questionOperator = <QuestionDropdownModel>panel.getQuestionByName("operator");
    if (!questionOperator) return;
    this.updateConditionChoices(panel, questionOperator.choices, questionOperator);
  }
  private updateQuestionsWidth(panel: PanelModel) {
    const valueQuestion = panel.getQuestionByName("questionValue");
    const conjunctionQuestion = panel.getQuestionByName("conjunction");
    const nameQuestion = panel.getQuestionByName("questionName");
    const operatorQuestion = panel.getQuestionByName("operator");
    const isValueSameLine = !!valueQuestion && !valueQuestion.startWithNewLine;
    const isFirst = !conjunctionQuestion || !conjunctionQuestion.isVisible;
    if (!isFirst) {
      conjunctionQuestion.minWidth = "50px";
      conjunctionQuestion.width = "15%";
    }

    nameQuestion.minWidth = "50px";
    nameQuestion.width = isFirst ? "40%" : "25%";

    operatorQuestion.minWidth = "50px";
    operatorQuestion.width = isValueSameLine ? "25%" : "60%";

    if (!!valueQuestion) {
      valueQuestion.minWidth = "50px";
      valueQuestion.width = isValueSameLine ? "35%" : "";
    }
  }
  private get defaultOperator(): string { return getConditionDefaultOperator(); }
  private getDefaultOperatorByQuestionName(questionName: string): string {
    return this.getDefaultOperatorByQuestion(this.getConditionQuestion(questionName));
  }
  private getDefaultOperatorByQuestion(question: Question): string {
    return getConditionDefaultOperator(!!question ? question.getType() : undefined);
  }
  private getFirstEnabledOperator(choices: Array<ItemValue>): string {
    for (let i = 0; i < choices.length; i++) {
      if (choices[i].isEnabled) {
        return choices[i].value;
      }
    }
    return this.defaultOperator;
  }
  private onPanelAdded() {
    this.setItemToPanel(
      new ConditionEditorItem(),
      this.panel.panels[this.panel.panels.length - 1]
    );
  }
  private onPanelValueChanged(panel: PanelModel, name: string) {
    if (name == "questionName") {
      this.context = this.getContextFromPanels();
      this.rebuildQuestionValue(panel);
      if (!this.isSettingPanelValues) {
        panel.getQuestionByName("operator").value = this.getDefaultOperatorByQuestionName(panel.getQuestionByName("questionName").value);
      }
    }
    if (name == "operator") {
      this.rebuildQuestionValueOnOperandChanging(panel);
    }
    this.updateOperatorEnables(panel);
    this.updateQuestionsWidth(panel);
  }
  private onUpdateQuestionCssClasses(options: any) {
    const cssClasses = options.cssClasses;
    const question = options.question;
    if (question.getType() !== "paneldynamic") {
      cssClasses.answered = "svc-logic-question--answered";
    }
    if (question.name === "textEditor") {
      cssClasses.root += " svc-logic-question-text-editor";
    }
    if (question.name === "conjunction") {
      question.allowRootStyle = false;
      cssClasses.control += " svc-logic-operator svc-logic-operator--conjunction ";
    }
    if (question.name === "questionName") {
      question.allowRootStyle = false;
      cssClasses.control += " svc-logic-operator svc-logic-operator--question";
      cssClasses.error.root = "svc-logic-operator__error";
      cssClasses.onError = "svc-logic-operator--error";
    }
    if (question.name === "operator") {
      question.allowRootStyle = false;
      cssClasses.control += " svc-logic-operator svc-logic-operator--operator";
    }
    if (question.name === "removeAction") {
      question.allowRootStyle = false;
      cssClasses.mainRoot += " svc-logic-condition-remove-question";
    }
    if (question.name === "questionValue" || question.isContentElement) {
      assignDefaultClasses(cssClasses, question.getType());
      cssClasses.mainRoot += " svc-logic-question-value sd-element--with-frame sd-question--with-frame";
      cssClasses.error.root = "svc-logic-operator__error";
      cssClasses.errorsContainer = "";
      cssClasses.errorsContainerTop = "";
      cssClasses.errorsContainerBottom = "";
      if (question.getType() == "boolean" || question.getType() == "rating") {
        cssClasses.root = (cssClasses.root as string).replace("sd-scrollable-container", "");
      }
    }
    if (question.name === "panel") {
      cssClasses.root += " svc-logic-paneldynamic";
      cssClasses.buttonAdd += " svc-logic-operator--operator";
      cssClasses.iconRemove = "svc-icon-remove";
      cssClasses.buttonRemove = "svc-logic-paneldynamic__button svc-logic-paneldynamic__remove-btn";
      cssClasses.buttonRemoveRight = "svc-logic-paneldynamic__remove-btn--right";
      cssClasses.buttonRemoveText = "svc-logic-paneldynamic__button-remove-text";
    }
  }
  private onValueChanged(options: any) {
    if (options.question.name === "panel" && options.value.length > 0) {
      const maxLogicItems = this.options.logicMaxItemsInCondition > 0 ? this.options.logicMaxItemsInCondition : 100;
      options.question.maxPanelCount = options.value.length === 1 && !options.value[0].questionName ? 1 : maxLogicItems;
      this.panel.panels.forEach(panel => {
        panel.getQuestionByName("removeAction").visible = options.value.length !== 1;
      });
    }
    this.title = this.isReady ? this.text : editorLocalization.getString("pe.ruleIsNotSet");
  }
  private showTextEditor(expression: string) {
    this.panel.visible = false;
    this.textEditor.value = expression;
    this.textEditor.visible = true;
  }
  private showBuilder(expression: string) {
    if (!this.isModal && !this.getCanShowBuilder(expression)) return;
    this.textEditor.visible = false;
    this.processText(expression);
    this.panel.visible = true;
  }
  private getCanShowBuilder(expression: string): boolean {
    return ConditionEditor.canBuildExpression(expression);
  }
}
