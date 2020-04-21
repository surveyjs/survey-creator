import * as ko from "knockout";
import {
  registerAdorner,
  SurveyForDesigner,
  ISurveyObjectMenuItem,
} from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-knockout";

import "./title-actions.scss";
var templateHtml = require("html-loader?interpolate!val-loader!./title-actions.html");

export class TitleActionsViewModel {
  constructor(
    public survey: SurveyForDesigner,
    protected input: HTMLInputElement,
    protected rootElement
  ) {
    this.actions.push({
      name: "editelement",
      visible: ko.computed(() => survey.koShowHeader()),
      text: ko.computed(() =>
        this.getLocString(
          survey.isLogoImageChoosen ? "pe.changeLogo" : "pe.addLogo"
        )
      ),
      hasTitle: true,
      onClick: () => {
        if (!window["FileReader"]) return;
        this.input.value = "";
        this.input.onchange = () => {
          this.uploadFiles();
        };
        this.input.click();
      },
    });
    this.actions.push(<any>{
      name: "setLogoPosition",
      text: this.getLocString("pe.logoPosition"),
      visible: ko.computed(
        () => survey.koShowHeader() && survey.isLogoImageChoosen
      ),
      value: ko.computed(() => survey.logoPosition),
      template: "choice-action",
      choices: [
        { value: "none", text: this.getLocString("pe.logoPositions.none") },
        { value: "left", text: this.getLocString("pe.logoPositions.left") },
        { value: "right", text: this.getLocString("pe.logoPositions.right") },
        { value: "top", text: this.getLocString("pe.logoPositions.top") },
        { value: "bottom", text: this.getLocString("pe.logoPositions.bottom") },
      ],
      onClick: (data, event) => {
        var newValue = event.target.value;
        survey.logoPosition = newValue;
        if (newValue === "none") {
          survey.logo = undefined;
        }
      },
    });
    if (survey.getEditor().allowControlSurveyTitleVisibility) {
      this.actions.push(<any>{
        visible: ko.computed(() => survey.koShowHeader()),
        template: "action-separator",
      });
      this.actions.push(<any>{
        name: "showSurveyTitle",
        visible: true,
        text: this.getLocString("pe.showTitle"),
        className: "svda-title-action__show-hide",
        icon: ko.computed(() => {
          if (!survey.koShowHeader()) {
            return "icon-arrow_down_10x10";
          }
          return "icon-arrow_up_10x10";
        }),
        onClick: () => {
          survey.koShowHeader(!survey.koShowHeader());
        },
      });
    }
    ko.computed(() => {
      var headerContainer: HTMLDivElement = this.rootElement.parentElement
        .parentElement;
      if (survey.koShowHeader()) {
        headerContainer.classList.remove("svd_survey_header--hidden");
      } else {
        headerContainer.classList.add("svd_survey_header--hidden");
      }
    });
  }

  uploadFiles() {
    if (!this.input || !this.input.files || this.input.files.length < 1) return;
    let files = [];
    for (let i = 0; i < this.input.files.length; i++) {
      files.push(this.input.files[i]);
    }
    if (!files[0]) return;
    this.survey.getEditor().uploadFiles(files, (_, link) => {
      this.survey.logo = link;
      if (this.survey.logoPosition === "none") {
        this.survey.logoPosition = "left";
      }
    });
  }

  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  public getStyle(model: ISurveyObjectMenuItem) {
    return ko.unwrap((<any>model).className) || "";
  }

  public getIcon(model: ISurveyObjectMenuItem) {
    if (!!model.icon) {
      return ko.unwrap(<any>model.icon);
    }
    return "icon-action" + model.name;
  }

  actions = ko.observableArray<ISurveyObjectMenuItem>();
}

ko.components.register("title-actions", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new TitleActionsViewModel(
        params.survey,
        params.input,
        componentInfo.element
      );
      return model;
    },
  },
  template: templateHtml,
});
