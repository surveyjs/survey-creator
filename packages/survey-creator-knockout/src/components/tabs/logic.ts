import * as ko from "knockout";
import { SurveyCreator } from "../../creator";
import { SurveyLogicUI, getLocString, ICreatorPlugin } from "@survey/creator";
import {} from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
import "./logic.scss";
var templateHtml = require("./logic.html");

export class LogicModel {
  public koLogic: ko.Observable<SurveyLogicUI>;
  constructor(private creator: SurveyCreator) {
    this.koLogic = ko.observable(null);
  }
  public get translation(): SurveyLogicUI {
    return this.koLogic();
  }
  public activate(): void {
    var logic = new SurveyLogicUI(this.creator.survey, this.creator);
    new ImplementorBase(logic);
    this.koLogic(logic);
  }
  public deactivate(): boolean {
    this.koLogic(null);
    return true;
  }
}

export class TabLogicPlugin implements ICreatorPlugin {
  public model: LogicModel;
  constructor(private creator: SurveyCreator) {
    this.model = new LogicModel(creator);
    creator.tabs.push({
      id: "logic",
      title: getLocString("ed.logic"),
      component: "survey-logic",
      data: this,
      action: () => {
        creator.makeNewViewActive("logic");
        this.activate();
      },
      active: () => creator.viewType === "logic",
    });
    creator.plugins["logic"] = this;
  }
  public activate(): void {
    this.model.activate();
  }
}

ko.components.register("survey-logic", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabLogicPlugin = params.data;
      return plugin.model;
    },
  },
  template: templateHtml,
});
