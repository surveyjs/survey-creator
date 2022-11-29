import {
  Base,
  SurveyModel,
  FunctionFactory,
  Version,
  settings,
  property
} from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { json } from "./embed-json";
require("./embed.scss");

export class EmbedModel extends Base {
  @property() survey: SurveyModel;
  constructor(creator: CreatorBase) {
    super();
    FunctionFactory.Instance.register(
      "surveyjsEmbedScriptsMarkup",
      (params: [string, string]) => {
        const [framework, theme]: [string, string] = params;
        let result: string = "";
        if(framework ==="jquery") {
          result = "<script src=\"https://unpkg.com/jquery\"></script>";
        } else {
          result = `<!-- Your platform (${framework}) scripts -->`;
        }
        result +="\n\n";
        if (theme !== "bootstrap") {
          result += `<link href="https://unpkg.com/survey-${framework}@${Version}/${
            ["defaultV2", "modern"].indexOf(theme) > -1 ? theme : "survey"
          }.css" type="text/css" rel="stylesheet"/>`;
        }
        return (
          result +
          `\n<script src="https://unpkg.com/survey-${framework}@${Version}/survey.${framework !== "knockout" ? framework : "ko"}.min.js"></script>`
        );
      }
    );
    FunctionFactory.Instance.register(
      "surveyjsEmbedHtmlMarkup",
      (params: [string, string]) => {
        const [framework, show]: [string, string] = params;
        switch (framework) {
          case "angular":
            return "<ng-app></ng-app>";
          case "vue":
            return `<div id="surveyContainer"><survey${
              show === "window" ? "-window" : ""
            } :survey=\"survey\"/></div>`;
          default:
            return '<div id="surveyContainer"></div>';
        }
      }
    );
    FunctionFactory.Instance.register(
      "surveyjsEmbedJavascriptMarkup",
      (params: [string, string, string]) => {
        const [framework, theme, show]: [string, string, string] = params;
        let result: string = `Survey.StylesManager.applyTheme("${theme}");\n\n`;
        result += `var surveyJSON = ${JSON.stringify(creator.JSON)};\n\n`;
        result +=
          'function sendDataToServer(survey) {\n    //send Ajax request to your web server\n    alert("The results are: " + JSON.stringify(survey.data));\n}\n\n';
        const window: string = show === "window" ? "Window" : "";
        switch (framework) {
          case "angular":
            result += "@Component({\n    selector: \"ng-app\",\n    template: '<div id=\"surveyElement\"></div>'\n})";
            result += `\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n        Survey.Survey${window}NG.render("surveyElement", { model: survey });\n    }\n}`;
            break;
          case "jquery":
            result += "var survey = new Survey.Model(surveyJSON);\n";
            result += `$("#surveyContainer").Survey${window}({\n    model: survey,\n    onComplete: sendDataToServer\n});`;
            break;
          case "knockout":
            result += `var survey = new Survey.Survey${window}(surveyJSON);\n`;
            result += show === "window" ? "survey.show();\n" : "";
            result += "survey.onComplete.add(sendDataToServer);\n";
            result += show !== "window" ? "survey.render(\"surveyContainer\");" : "";
            break;
          case "react":
            result += `ReactDOM.render(<Survey.Survey${window} json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));`;
            break;
          case "vue":
            result +=
              'var survey = new Survey.Model(surveyJSON);\nsurvey.onComplete.add(sendDataToServer);\nnew Vue({ el: "#surveyContainer", data: { survey: survey } });';
            break;
        }
        return result;
      }
    );
    this.survey = creator.createSurvey(json, "embed");
    this.survey.css = propertyGridCss;
    settings.readOnlyCommentRenderMode = "default";
    this.survey.onUpdateQuestionCssClasses.add((_, options) => {
      if (options.question.getType() === "comment") {
        options.cssClasses.title = "sv-question-embed__title";
      }
    });
  }
}

export class TabEmbedPlugin implements ICreatorPlugin {
  public model: EmbedModel;
  constructor(private creator: CreatorBase) {
    creator.addPluginTab("embed", this, "ed.embedSurvey");
  }
  public activate(): void {
    this.model = new EmbedModel(this.creator);
  }
  public deactivate(): boolean {
    this.model = undefined;
    return true;
  }
}
