import {
  SurveyModel,
  Base,
  ItemValue,
  SurveyTrigger,
  Serializer,
  Helpers,
  Question,
  QuestionMatrixDropdownModelBase,
  SurveyElement,
  QuestionPanelDynamicModel
} from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { ExpressionToDisplayText } from "../../expressionToDisplayText";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { wrapTextByCurlyBraces } from "../../utils/creator-utils";

export function getLogicString(name: string) {
  return editorLocalization.getString("ed.lg." + name);
}

export interface ISurveyLogicType {
  name: string;
  baseClass: string;
  incorrectClasses?: Array<string>;
  propertyName: string;
  dynamicPropertyName?: string;
  dependedOnPropertyName?: string;
  isInvisible?: boolean;
  showInUI?: boolean;
  showIf?: (survey: SurveyModel) => boolean;
  getCollection?: (survey: SurveyModel) => Array<Base>;
  isUniqueItem?: boolean;
  questionNames?: Array<string>;
  getDisplayText?: (
    element: Base,
    formatStr: string,
    lt: SurveyLogicType
  ) => string;
  getElementName?: (element: Base) => string;
  getSelectorChoices?: (survey: SurveyModel, context: Question) => Array<SurveyElement<any>>;
  supportContext?: (question: Base) => boolean;
  getParentElement?(element: Base): Base;
  remove?: (element: Base) => void;
}

export class SurveyLogicType {
  public static expressionToDisplayText(
    survey: SurveyModel,
    options: ISurveyCreatorOptions,
    expression: string
  ): string {
    return new ExpressionToDisplayText(survey, options).toDisplayText(
      expression
    );
  }
  constructor(
    private logicType: ISurveyLogicType,
    public survey: SurveyModel,
    public options: ISurveyCreatorOptions = null
  ) {
    this.mergeWithBaseClass();
  }
  private mergeWithBaseClass() {
    if (!this.logicType.baseClass) return;
    const baseClass = SurveyLogicTypes.baseTypes[this.logicType.baseClass];
    if (!baseClass) return;
    for (var key in baseClass) {
      if (!this.logicType[key]) {
        this.logicType[key] = baseClass[key];
      }
    }
  }
  public hasNeededTypes(types: Array<string>): boolean {
    if (types.indexOf(this.baseClass) < 0) return false;
    const inCls = this.logicType.incorrectClasses;
    if (Array.isArray(inCls)) {
      for (let i = 0; i < inCls.length; i ++) {
        if (types.indexOf(inCls[i]) > -1) return false;
      }
    }
    return true;
  }
  public get name(): string {
    return this.logicType.name;
  }
  public get baseClass(): string {
    return this.logicType.baseClass;
  }
  public get propertyName(): string {
    return this.logicType.propertyName;
  }
  public get hasVisibleElements(): boolean {
    return this.logicType.isInvisible !== true;
  }
  public get dynamicPropertyName(): string {
    return this.logicType.dynamicPropertyName;
  }
  public get dependedOnPropertyName(): string {
    return this.logicType.dependedOnPropertyName;
  }
  public get visible(): boolean {
    if (!this.showInUI) return false;
    if (!!this.logicType.showIf) return this.logicType.showIf(this.survey);
    return true;
  }
  public get showTitlesInExpression(): boolean {
    return !!this.options && this.options.useElementTitles;
  }
  public createNewObj(srcObj: Base): Base {
    const obj = <Base>Serializer.createClass(this.baseClass);
    if (!!srcObj) {
      obj.fromJSON(srcObj.toJSON());
    }
    //TODO
    obj["survey"] = this.survey;
    if ((<any>obj).setOwner) {
      (<any>obj).setOwner(this.survey);
    }
    //Do not fire notification about changes to our creator.survey model
    if (obj instanceof ItemValue || obj instanceof SurveyTrigger) {
      obj["isGhost"] = true;
    }
    return obj;
  }
  public cloneElement(el: Base): Base {
    if (this.isTrigger) return this.createNewObj(el);
    return el;
  }
  public areElementsEqual(el1: Base, el2: Base): boolean {
    if (el1 === el2) return true;
    if (!this.isTrigger || el1.getType() !== el2.getType()) return false;
    return Helpers.isTwoValueEquals(el1.toJSON(), el2.toJSON());
  }
  public saveNewElement(el: Base): void {
    var collection: Array<Base> = !!this.logicType.getCollection
      ? this.logicType.getCollection(this.survey)
      : null;
    if (!collection && this.isTrigger) {
      collection = this.survey.triggers;
    }
    if (!!collection && collection.indexOf(el) < 0) {
      collection.push(el);
    }
  }
  public get showInUI(): boolean {
    return this.logicType.showInUI !== false;
  }
  public get isUniqueItem(): boolean {
    return this.logicType.isUniqueItem === true;
  }
  public get questionNames(): Array<string> {
    return this.logicType.questionNames;
  }
  public get displayName(): string {
    return getLogicString(this.name + "Name");
  }
  public get description(): string {
    return getLogicString(this.name + "Description");
  }
  public getParentElement(element: Base): Base {
    return !!this.logicType.getParentElement ? this.logicType.getParentElement(element) : null;
  }
  public get hasSelectorChoices(): boolean {
    return !!this.logicType.getSelectorChoices;
  }
  public getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>> {
    if (!this.hasSelectorChoices) return null;
    return this.logicType.getSelectorChoices(survey, context);
  }
  public getDisplayText(element: Base): string {
    var str = getLogicString(this.name + "Text");
    if (!!this.logicType.getDisplayText)
      return this.logicType.getDisplayText(element, str, this);
    if (!!this.logicType.getElementName) {
      element = this.getElementByName(this.logicType.getElementName(element));
    }
    const name = this.getElementDisplayName(element);
    if (!!name) {
      const parentElement = this.getParentElement(element);
      const parentName = this.getElementDisplayName(parentElement);
      return str["format"](name, parentName);
    }
    return str;
  }
  public remove(el: Base): void {
    const f = this.logicType.remove;
    f && f(el);
  }
  private getElementDisplayName(element: Base): string {
    if (!element) return "";
    let res = "";
    if (this.showTitlesInExpression) {
      res = element["title"];
    }
    if (!res) {
      res = element["name"] || "";
    }
    return wrapTextByCurlyBraces(res);
  }
  private getElementByName(name: string): Base {
    if (!this.survey) return null;
    const question = this.survey.getQuestionByName(name);
    if (!!question) return question;
    return this.survey.getPageByName(name);
  }
  public formatElName(name: string): string {
    const el = this.getElementByName(name);
    return this.getElementDisplayName(el);
  }
  public formatExpression(expression: string): string {
    return SurveyLogicType.expressionToDisplayText(
      this.survey,
      this.options,
      expression
    );
  }
  public supportContext(context: Base): boolean {
    if (!this.logicType.supportContext) return false;
    return this.logicType.supportContext(context);
  }
  public get isTrigger(): boolean {
    return !!this.baseClass && this.baseClass.indexOf("trigger") > -1;
  }
}

function hasMatrixColumns(survey: SurveyModel): boolean {
  const questions = survey.getAllQuestions();
  for (var i = 0; i < questions.length; i++) {
    const q = questions[i];
    if (q instanceof QuestionMatrixDropdownModelBase) {
      if ((<QuestionMatrixDropdownModelBase>q).columns.length > 0) return true;
    }
  }
  return false;
}
function removeElement(items: Array<any>, element: any): void {
  const index = items.indexOf(element);
  if (index > -1) {
    items.splice(index, 1);
  }
}

export class SurveyLogicTypes {
  public static baseTypes = {
    panel: {
      showIf: function (survey: SurveyModel): boolean {
        return survey.getAllPanels().length > 0;
      },
      getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>> {
        return <any>survey.getAllPanels();
      }
    },
    question: {
      showIf: function (survey: SurveyModel): boolean {
        return survey.getAllQuestions().length > 0;
      },
      supportContext(context: Base): boolean {
        return Array.isArray(context["templateElements"]) ||
        (Array.isArray(context["detailElements"]) && context["detailElements"].length > 0);
      },
      getParentElement(element: Base): Base {
        return !!element ? (<Question>element).parentQuestion : null;
      },
      getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>> {
        const res = new Array<SurveyElement<any>>();
        const questions = survey.getAllQuestions();
        const addElement = function(el: any) {
          res.push(el);
          if (el.isPanel) {
            el.elements.forEach(child => addElement(child));
          }
        };
        for (var i = 0; i < questions.length; i++) {
          const q = questions[i];
          if (!context) {
            res.push(q);
          }
          if (q instanceof QuestionPanelDynamicModel && (!context || context === q)) {
            q.templateElements.forEach(el => addElement(el));
          }
          if (q instanceof QuestionMatrixDropdownModelBase && (!context || context === q)) {
            q.detailElements.forEach(el => addElement(el));
          }
        }
        return res;
      }
    },
    matrixdropdowncolumn: {
      showIf: function (survey: SurveyModel): boolean {
        return hasMatrixColumns(survey);
      },
      supportContext(context: Base): boolean {
        return Array.isArray(context["columns"]);
      },
      getParentElement(element: Base): Base {
        return !!element ? (<any>element).colOwner : null;
      },
      getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>> {
        const res = [];
        const questions = survey.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
          const question = questions[i];
          if (question instanceof QuestionMatrixDropdownModelBase &&
            (!context || context === question)) {
            const columns = (<QuestionMatrixDropdownModelBase>question).columns;
            for (var j = 0; j < columns.length; j++) {
              res.push(columns[j]);
            }
          }
        }
        return res;
      }
    }
  };
  public static types: Array<ISurveyLogicType> = [
    {
      name: "page_visibility",
      baseClass: "page",
      propertyName: "visibleIf",
      showIf: function (survey: SurveyModel): boolean {
        return survey.pages.length > 1;
      },
      getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>> {
        return survey.pages;
      }
    },
    {
      name: "page_enable",
      baseClass: "page",
      propertyName: "enableIf",
      showIf: function (survey: SurveyModel): boolean {
        return survey.pages.length > 1;
      },
      getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>> {
        return survey.pages;
      }
    },
    {
      name: "page_require",
      baseClass: "page",
      propertyName: "requiredIf",
      showIf: function (survey: SurveyModel): boolean {
        return survey.pages.length > 1;
      },
      getSelectorChoices(survey: SurveyModel, context: Question): Array<SurveyElement<any>> {
        return survey.pages;
      }
    },
    {
      name: "panel_visibility",
      baseClass: "panel",
      incorrectClasses: ["page"],
      propertyName: "visibleIf",
    },
    {
      name: "panel_enable",
      baseClass: "panel",
      incorrectClasses: ["page"],
      propertyName: "enableIf",
    },
    {
      name: "panel_require",
      baseClass: "panel",
      incorrectClasses: ["page"],
      propertyName: "requiredIf",
    },
    {
      name: "question_visibility",
      baseClass: "question",
      propertyName: "visibleIf",
    },
    {
      name: "question_enable",
      baseClass: "question",
      propertyName: "enableIf",
    },
    {
      name: "question_require",
      baseClass: "question",
      propertyName: "requiredIf",
    },
    {
      name: "question_resetValue",
      baseClass: "question",
      propertyName: "resetValueIf",
    },
    {
      name: "question_setValue",
      baseClass: "question",
      propertyName: "setValueIf",
      getDisplayText: (element: Base, formatStr: string, lt: SurveyLogicType): string => {
        return getDisplayTextForSetValueIf(element, formatStr, lt);
      },
      remove: (element: Base) => {
        (<any>element).setValueExpression = "";
      }
    },
    {
      name: "question_setValueExpression",
      baseClass: "question",
      propertyName: "setValueExpression",
      showInUI: false,
    },
    {
      name: "question_defaultValueExpression",
      baseClass: "question",
      propertyName: "defaultValueExpression",
      showInUI: false,
    },
    {
      name: "column_visibility",
      baseClass: "matrixdropdowncolumn",
      propertyName: "visibleIf",
    },
    {
      name: "column_enable",
      baseClass: "matrixdropdowncolumn",
      propertyName: "enableIf",
    },
    {
      name: "column_require",
      baseClass: "matrixdropdowncolumn",
      propertyName: "requiredIf",
    },
    {
      name: "column_resetValue",
      baseClass: "matrixdropdowncolumn",
      propertyName: "resetValueIf",
    },
    {
      name: "column_setValue",
      baseClass: "matrixdropdowncolumn",
      propertyName: "setValueIf",
      getDisplayText: (element: Base, formatStr: string, lt: SurveyLogicType): string => {
        return getDisplayTextForSetValueIf(element, formatStr, lt);
      }
    },
    {
      name: "column_setValueExpression",
      baseClass: "matrixdropdowncolumn",
      propertyName: "setValueExpression",
      showInUI: false,
    },
    {
      name: "expression_expression",
      baseClass: "expression",
      propertyName: "expression",
      showInUI: false,
    },
    {
      name: "matrixdropdowncolumn_totalExpression",
      baseClass: "matrixdropdowncolumn",
      propertyName: "totalExpression",
      showInUI: false,
    },
    {
      name: "trigger_complete",
      baseClass: "completetrigger",
      propertyName: "expression",
      isUniqueItem: true,
      isInvisible: true
    },
    {
      name: "trigger_setvalue",
      baseClass: "setvaluetrigger",
      propertyName: "expression",
      dynamicPropertyName: "setValue",
      dependedOnPropertyName: "setToName",
      questionNames: ["setToName"],
      getDisplayText: function (
        element: Base,
        formatStr: string,
        lt: SurveyLogicType
      ): string {
        if (Helpers.isValueEmpty(element["setValue"])) {
          formatStr = getLogicString("trigger_setvalueEmptyText");
        }
        return formatStr["format"](
          lt.formatElName(element["setToName"]),
          element["setValue"]
        );
      },
    },
    {
      name: "trigger_copyvalue",
      baseClass: "copyvaluetrigger",
      propertyName: "expression",
      questionNames: ["setToName", "fromName"],
      getDisplayText: function (
        element: Base,
        formatStr: string,
        lt: SurveyLogicType
      ): string {
        return formatStr["format"](
          lt.formatElName(element["setToName"]),
          lt.formatElName(element["fromName"])
        );
      },
    },
    {
      name: "trigger_skip",
      baseClass: "skiptrigger",
      propertyName: "expression",
      questionNames: ["gotoName"],
      isUniqueItem: true,
      getElementName: function (element: Base): string {
        return element["gotoName"];
      },
    },
    {
      name: "trigger_runExpression",
      baseClass: "runexpressiontrigger",
      propertyName: "expression",
      questionNames: ["setToName"],
      getDisplayText: function (
        element: Base,
        formatStr: string,
        lt: SurveyLogicType
      ): string {
        var res = getLogicString("trigger_runExpressionText1");
        res = res["format"](lt.formatExpression(element["runExpression"]));
        var setToName = element["setToName"];
        if (!!setToName) {
          var str = getLogicString("trigger_runExpressionText2");
          res += str["format"](lt.formatElName(element["setToName"]));
        }
        return res;
      },
    },
    {
      name: "completedHtmlOnCondition",
      baseClass: "htmlconditionitem",
      propertyName: "expression",
      isUniqueItem: true,
      getCollection: (survey: SurveyModel): Array<Base> => {
        return survey.completedHtmlOnCondition;
      },
      remove: (element: Base): void => {
        const survey: any = element.getSurvey();
        if (!!survey) {
          removeElement(survey.completedHtmlOnCondition, element);
        }
      }
    },
    {
      name: "trigger_runExpression_Expression",
      baseClass: "runexpressiontrigger",
      propertyName: "runExpression",
      showInUI: false,
    },
    {
      name: "question_expressionValidator",
      baseClass: "expressionvalidator",
      propertyName: "expression",
      showInUI: false,
    },
    {
      name: "matrix_rowsVisibleIf",
      baseClass: "matrix",
      propertyName: "rowsVisibleIf",
      showInUI: false,
    },
    {
      name: "matrix_columnsVisibleIf",
      baseClass: "matrix",
      propertyName: "columnsVisibleIf",
      showInUI: false,
    },
    {
      name: "matrixdropdown_rowsVisibleIf",
      baseClass: "matrixdropdown",
      propertyName: "rowsVisibleIf",
      showInUI: false,
    },
    {
      name: "select_choicesVisibleIf",
      baseClass: "selectbase",
      propertyName: "choicesVisibleIf",
      showInUI: false,
    },
    {
      name: "select_choicesEnableIf",
      baseClass: "selectbase",
      propertyName: "choicesEnableIf",
      showInUI: false,
    },
    {
      name: "itemvalue_visibleIf",
      baseClass: "itemvalue",
      propertyName: "visibleIf",
      showInUI: false,
    },
    {
      name: "itemvalue_enableIf",
      baseClass: "itemvalue",
      propertyName: "enableIf",
      showInUI: false,
    },
    {
      name: "calculatedValue",
      baseClass: "calculatedvalue",
      propertyName: "expression",
      showInUI: false,
    },
  ];
}
function getDisplayTextForSetValueIf(element: Base, formatStr: string, lt: SurveyLogicType): string {
  const name = lt.formatElName(element["name"]);
  let exp = element["setValueExpression"];
  if (!exp) {
    return getLogicString("trigger_setvalueEmptyText")["format"](name);
  }
  return formatStr["format"](name, exp);
}
