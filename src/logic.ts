import * as ko from "knockout";
import * as Survey from "survey-knockout";

export interface ISurveyLogicType {
  name: string;
  baseClass: string;
  propertyName: string;
  showIf?: (survey: Survey.SurveyModel) => boolean;
}

export class SurveyLogicType {
  constructor(
    public logicType: ISurveyLogicType,
    public survey: Survey.SurveyModel
  ) {}
  public get name(): string {
    return this.logicType.name;
  }
  public get visible(): boolean {
    return !this.logicType.showIf || this.logicType.showIf(this.survey);
  }
}

export class SurveyLogicItem {
  constructor(public logicType: ISurveyLogicType) {}
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
  public items: any;
  public logicTypes: Array<SurveyLogicType>;
  constructor(public survey: Survey.SurveyModel) {
    this.logicTypes = this.createLogicTypes();
    this.items = ko.observableArray();
    this.buildItems();
  }
  public getTypeByName(name: string): SurveyLogicType {
    for (var i = 0; i < this.logicTypes.length; i++) {
      if (this.logicTypes[i].name == name) return this.logicTypes[i];
    }
    return null;
  }
  public update() {}
  protected buildItems() {}
  protected createLogicTypes(): Array<SurveyLogicType> {
    var res = [];
    for (var i = 0; i < SurveyLogic.types.length; i++) {
      res.push(new SurveyLogicType(SurveyLogic.types[i], this.survey));
    }
    return res;
  }
}
