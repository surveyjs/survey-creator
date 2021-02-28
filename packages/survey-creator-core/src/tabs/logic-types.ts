import {
  SurveyModel,
  Base,
  HtmlConditionItem,
  SurveyTrigger,
  Serializer,
} from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { ExpressionToDisplayText } from "../expressionToDisplayText";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../settings";

export function getLogicString(name: string) {
  return editorLocalization.getString("ed.lg." + name);
}

export interface ISurveyLogicType {
  name: string;
  baseClass: string;
  propertyName: string;
  showInUI?: boolean;
  showIf?: (survey: SurveyModel) => boolean;
  createNewElement?: (survey: SurveyModel) => Base;
  //saveElement?: (survey: SurveyModel, action: SurveyLogicAction) => void;
  isUniqueItem?: boolean;
  questionNames?: Array<string>;
  getDisplayText?: (
    element: Base,
    formatStr: string,
    lt: SurveyLogicType
  ) => string;
  getDisplayTextName?: (element: Base) => string;
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
  ) {}
  public get name(): string {
    return this.logicType.name;
  }
  public get baseClass(): string {
    return this.logicType.baseClass;
  }
  public get propertyName(): string {
    return this.logicType.propertyName;
  }
  public get visible(): boolean {
    if (!this.showInUI) return false;
    if (!!this.logicType.showIf) return this.logicType.showIf(this.survey);
    return true;
  }
  public get showTitlesInExpression(): boolean {
    return !!this.options && this.options.showTitlesInExpressions;
  }
  public get showInUI(): boolean {
    return this.logicType.showInUI !== false;
  }
  private canCreateNewElement(): boolean {
    return !!this.logicType.createNewElement || this.isTrigger;
  }
  private get isTrigger(): boolean {
    return !!this.baseClass && this.baseClass.indexOf("trigger") > -1;
  }
  public createNewElement(survey: SurveyModel): Base {
    if (!!this.logicType.createNewElement)
      return this.logicType.createNewElement(survey);
    if (this.isTrigger) return this.createTriggerElement(survey);
    return null;
  }
  /*
    public saveElement(action: SurveyLogicAction): void {
      if (!!this.logicType.saveElement) {
        this.logicType.saveElement(this.survey, action);
      }
      if (this.isTrigger) {
        this.saveTriggerElement(action);
      }
    }
    */
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
  public getDisplayText(element: Base): string {
    var str = getLogicString(this.name + "Text");
    if (!!this.logicType.getDisplayText)
      return this.logicType.getDisplayText(element, str, this);
    var name = "";
    if (!!this.logicType.getDisplayTextName) {
      name = this.logicType.getDisplayTextName(element);
    } else {
      if (!!element && !!element["name"]) {
        name = element["name"];
      }
    }
    if (!!name) {
      return str["format"](this.formatElName(name));
    }
    return str;
  }
  public formatElName(name: string): string {
    if (this.showTitlesInExpression && !!this.survey) {
      var question = this.survey.getQuestionByName(name);
      if (!!question && !!question.title) {
        name = question.title;
      }
    }
    return "{" + name + "}";
  }
  public formatExpression(expression: string): string {
    return SurveyLogicType.expressionToDisplayText(
      this.survey,
      this.options,
      expression
    );
  }
  private createTriggerElement(survey: SurveyModel): Base {
    var res = <SurveyTrigger>Serializer.createClass(this.baseClass);
    res["survey"] = survey;
    res.setOwner(survey);
    return res;
  }
  /*
    private saveTriggerElement(action: SurveyLogicAction) {
      if (!!action.templateObject.editableObject) {
        var edObj = action.templateObject.editableObject;
        edObj.applyAll(["expression"]);
      } else {
        var trigger = <SurveyTrigger>action.element;
        var survey = this.survey;
        if (this.isNewTrigger(trigger) && !!trigger.expression) {
          survey.triggers.push(trigger);
        }
      }
    }
    */
  private isNewTrigger(element: Base): boolean {
    var trigger = <SurveyTrigger>element;
    var survey = this.survey;
    return !!survey && survey.triggers.indexOf(trigger) < 0;
  }
}

export class SurveyLogicTypes {
  public static visibleActions: Array<string> = [];
  public static types = [
    {
      name: "page_visibility",
      baseClass: "page",
      propertyName: "visibleIf",
      showIf: function (survey: SurveyModel) {
        return survey.pages.length > 1;
      },
    },
    {
      name: "panel_visibility",
      baseClass: "panel",
      propertyName: "visibleIf",
      showIf: function (survey: SurveyModel) {
        return survey.getAllPanels().length > 0;
      },
    },
    {
      name: "panel_enable",
      baseClass: "panel",
      propertyName: "enableIf",
      showIf: function (survey: SurveyModel) {
        return survey.getAllPanels().length > 0;
      },
    },
    {
      name: "question_visibility",
      baseClass: "question",
      propertyName: "visibleIf",
      showIf: function (survey: SurveyModel) {
        return survey.getAllQuestions().length > 0;
      },
    },
    {
      name: "question_enable",
      baseClass: "question",
      propertyName: "enableIf",
      showIf: function (survey: SurveyModel) {
        return survey.getAllQuestions().length > 0;
      },
    },
    {
      name: "question_require",
      baseClass: "question",
      propertyName: "requiredIf",
      showIf: function (survey: SurveyModel) {
        return survey.getAllQuestions().length > 0;
      },
    },
    {
      name: "expression_expression",
      baseClass: "expression",
      propertyName: "expression",
      showInUI: false,
    },
    {
      name: "matrixdropdowncolumn_visibleIf",
      baseClass: "matrixdropdowncolumn",
      propertyName: "visibleIf",
      showInUI: false,
    },
    {
      name: "matrixdropdowncolumn_enableIf",
      baseClass: "matrixdropdowncolumn",
      propertyName: "enableIf",
      showInUI: false,
    },
    {
      name: "matrixdropdowncolumn_requiredIf",
      baseClass: "matrixdropdowncolumn",
      propertyName: "requiredIf",
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
    },
    {
      name: "trigger_setvalue",
      baseClass: "setvaluetrigger",
      propertyName: "expression",
      questionNames: ["setToName"],
      getDisplayText: function (
        element: Base,
        formatStr: string,
        lt: SurveyLogicType
      ): string {
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
      getDisplayTextName: function (element: Base): string {
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
      templateName: "svd-property-editor-html",
      createNewElement: function (survey: SurveyModel) {
        return new HtmlConditionItem();
      },
      createTemplateObject: function (element: Base) {
        var item = <HtmlConditionItem>element;
        return {
          //TODO
          //koValue: ko.observable(item.html),
          readOnly: false,
          koAfterRender: function () {},
        };
      },
      /*TODO
      saveElement: function (survey: SurveyModel, action: SurveyLogicAction) {
        var item = <HtmlConditionItem>action.element;
        //TODO
        //item.html = action.templateObject.koValue();
        if (survey.completedHtmlOnCondition.indexOf(item) < 0) {
          survey.completedHtmlOnCondition.push(item);
        }
      },
      */
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
