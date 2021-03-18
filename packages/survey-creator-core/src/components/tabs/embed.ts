import { Base, SurveyModel, FunctionFactory, Version, property } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import { json } from "./embed-json";
import "./embed.scss";

export class EmbedModel extends Base {
  @property() public survey: SurveyModel;
  constructor() {
    super();
  }
  public init(creator: CreatorBase<SurveyModel>): void {
    FunctionFactory.Instance.register("surveyjsEmbedScriptsMarkup", (params: [string, string]) => {
      const [framework, theme]: [string, string] = params;
      let result: string = `<!-- Your platform (${framework}) scripts -->\n\n`;
      if (theme !== "bootstrap") {
          result += `<link href="https://unpkg.com/survey-${framework}@${Version}/${theme === "modern" ? "modern" : "survey"}.css" type="text/css" rel="stylesheet"/>`;
      }
      return result + `\n<script src="https://unpkg.com/survey-${framework}@${Version}/survey.${framework}.min.js"></script>`;
    });
    FunctionFactory.Instance.register("surveyjsEmbedHtmlMarkup", (params: [string, string]) => {
      const [framework, show]: [string, string] = params;
      switch(framework) { 
        case "angular": return "<ng-app></ng-app>";
        case "vue": return `<div id="surveyContainer"><survey${show === "window" ? "-window" : ""} :survey=\"survey\"/></div>`;
        default: return '<div id="surveyContainer"></div>';
      };
    });
    FunctionFactory.Instance.register("surveyjsEmbedJavascriptMarkup", (params: [string, string, string]) => {
      const [framework, theme, show]: [string, string, string] = params;
      let result: string = `Survey.StylesManager.applyTheme("${theme}");\n\n`;
      result += `var surveyJSON = ${JSON.stringify(creator.JSON)};\n\n`;
      result += 'function sendDataToServer(survey) {\n    //send Ajax request to your web server\n    alert("The results are: " + JSON.stringify(survey.data));\n}\n\n';
      const window: string = show === "window" ? "Window" : "";
      switch(framework) { 
        case "angular":
          result += `@Component({\n    selector: "ng-app",\n    template: '<div id="surveyElement"></div>'\n})`;
          result += `\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n        Survey.Survey${window}NG.render("surveyElement", { model: survey });\n    }\n}`;
          break;
        case "jquery":
          result += "var survey = new Survey.Model(surveyJSON);\n";
          result += `$("#surveyContainer").Survey${window}({\n    model: survey,\n    onComplete: sendDataToServer\n});`;
          break;
        case "knockout":
          result += `var survey = new Survey.Model${window}(surveyJSON${show === "page" ? ', "surveyContainer"' : ""});\n`;
          result += show === "window" ? "survey.show();\n" : "";
          result += "survey.onComplete.add(sendDataToServer);";
          break;
        case "react":
          result += `ReactDOM.render(<Survey.Survey${window} json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));`
          break;
        case "vue":
          result += 'var survey = new Survey.Model(surveyJSON);\nsurvey.onComplete.add(sendDataToServer);\nnew Vue({ el: "#surveyContainer", data: { survey: survey } });';
          break;
      };
      return result;
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
  constructor(private creator: CreatorBase<SurveyModel>) {
    this.model = new EmbedModel();
    creator.tabs.push({
      id: "embed",
      title: getLocString("ed.embedSurvey"),
      component: "svc-tab-embed",
      data: this,
      action: () => {
        creator.makeNewViewActive("embed");
        this.activate();
      },
      active: () => creator.viewType === "embed",
    });
    creator.plugins["embed"] = this;
  }
  public activate(): void {
    this.model.init(this.creator);
  }
  public deactivate(): boolean {
    return true;
  }
}