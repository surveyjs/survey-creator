import { Base, SurveyModel, FunctionFactory, property } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import { json } from "./embed-json";
import "./embed.scss";

export class EmbedModel extends Base {
  @property() survey: SurveyModel;
  constructor(creator: CreatorBase<SurveyModel>) {
    super();
    FunctionFactory.Instance.register("htmlMarkup", (params: any) => {
      switch(params[0]) { 
        case "angular": return "<ng-app></ng-app>";
        case "vue": return '<div id="surveyElement"><survey :survey=\"survey\"/></div>';
        default: return '<div id="surveyContainer"></div>';
      };
    });
    this.survey = creator.createSurvey(json, "embed");
    this.survey.onUpdateQuestionCssClasses.add(((_, options) => {
      if (options.question.getType() === "comment") {
        options.cssClasses.title = "sv-question-embed__title";
      }
  }));
  }
}

export class TabEmbedPlugin implements ICreatorPlugin {
  public model: EmbedModel;
  constructor(creator: CreatorBase<SurveyModel>) {
    this.model = new EmbedModel(creator);
    creator.tabs.push({
      id: "embed-new",
      title: getLocString("ed.embedSurvey"),
      component: "svc-tab-embed-new",
      data: this,
      action: () => {
        creator.makeNewViewActive("embed-new");
        this.activate();
      },
      active: () => creator.viewType === "embed-new",
    });
    creator.plugins["embed-new"] = this;
  }
  public activate(): void {
  }
  public deactivate(): boolean {
    return true;
  }
}