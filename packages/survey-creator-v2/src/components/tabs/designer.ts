import * as ko from "knockout";
import { getNodesFromKoComponentInfo } from "src/utils/utils";
import { Survey } from "survey-knockout";
import { SurveyCreator } from "../../creator";
import { ElementWrapperFactory } from "../../element-wrapper-factory";

import "./designer.scss";
const template = require("./designer.html");
// import template from "./designer.html";

export class TabDesignerViewModel {
  private _survey: Survey;
  private _surveySubscription: ko.Computed;
  public _newPage = ko.observable();
  public creator: SurveyCreator;

  private createNewPage() {
    let newPage = this.creator.survey.createNewPage("");
    newPage.setSurveyImpl(this.creator.survey);
    this.creator.setNewNames(<any>newPage);
    newPage.onFirstRendering();
    newPage.updateCustomWidgets();
    newPage.setWasShown(true);
    newPage["_addToSurvey"] = () => {
      newPage["_addToSurvey"] = undefined;
      this.survey.addPage(newPage);
      this.createNewPage();
    }
    this._newPage(newPage);
  }

  constructor(creator: SurveyCreator, survey: Survey) {
    this.creator = creator;
    this._survey = survey;
    this._surveySubscription = ko.computed(() => {
      new ElementWrapperFactory(this.survey, this.creator);
    });
    this.createNewPage();
  }
  get survey() {
    return ko.unwrap(this._survey);
  }
  get newPage() {
    return this._newPage();
  }
  get showNewPage() {
    const pages = this.survey.pages;
    return pages.length === 0 || pages[pages.length-1].rows.length > 0;
  }
  dispose() {
    this._surveySubscription.dispose();
  }
}

ko.components.register("svc-tab-designer", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new TabDesignerViewModel(params.creator, params.survey);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
