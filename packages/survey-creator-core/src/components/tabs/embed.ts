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
    FunctionFactory.Instance.register("scriptsMarkup", (params: any) => {
      //change to string interpolation
      let result: string = "<!-- Your platform (" + params[0] + ") scripts -->\n\n";
      if (params[1] !== "bootstrap") {
          result += '<link href="https://unpkg.com/survey-' + params[0] + '@' + Version + '/' + (params[1] === "modern" ? "modern" : "survey") + '.css" type="text/css" rel="stylesheet"/>';
      }
      return result + '\n<script src="https://unpkg.com/survey-' + params[0] + '@' + Version + '/survey.' + params[0] + '.min.js"></script>';
    });
    FunctionFactory.Instance.register("htmlMarkup", (params: any) => {
      switch(params[0]) { 
        case "angular": return "<ng-app></ng-app>";
        case "vue": return '<div id="surveyContainer"><survey' + (params[1] === "window" ? "-window" : "") + ' :survey=\"survey\"/></div>';
        default: return '<div id="surveyContainer"></div>';
      };
    });
    FunctionFactory.Instance.register("javascriptMarkup", (params: any) => {
      let framework = params[0];
      let theme = params[1];
      let show = params[2];
      let result = 'Survey.StylesManager.applyTheme("' + theme + '");\n\n';
      result += "var surveyJSON = ";
      result += JSON.stringify(creator.JSON) + ";\n\n";
      result += "function sendDataToServer(survey) {\n";
      result += "    //send Ajax request to your web server\n";
      result += '    alert("The results are: " + JSON.stringify(survey.data));';
      result += "\n}\n\n";
      if (framework === "angular") {
          result += `@Component({\n    selector: "ng-app",\n    template: '<div id="surveyElement"></div>'\n})`;
          result += '\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n        Survey.Survey' + (show === "window" ? "Window" : "") + 'NG.render("surveyElement", { model: survey });\n    }\n}';
      }
      if (framework === "jquery") {
        result += "var survey = new Survey.Model(surveyJSON);\n";
        result += `$("#surveyContainer").Survey${show === "window" ? "Window" : ""}({\n    model: survey,\n    onComplete: sendDataToServer\n});`;
      }
      if (framework === "knockout") {
        result += `var survey = new Survey.Model${show === "window" ? "Window" : ""}(surveyJSON${show === "page" ? ', "surveyContainer"' : ""});\n`;
        result += show === "window" ? "survey.show();\n" : "";
        result += "survey.onComplete.add(sendDataToServer);";
      }
      if (framework === "react") {
        result += `ReactDOM.render(<Survey.Survey${show === "window" ? "Window" : ""} json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));`
      }
      if (framework === "vue") {
        result += 'var survey = new Survey.Model(surveyJSON);\nsurvey.onComplete.add(sendDataToServer);\nnew Vue({ el: "#surveyContainer", data: { survey: survey } });';
      }
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
    this.model.init(this.creator);
  }
  public deactivate(): boolean {
    return true;
  }
}