import * as ko from "knockout";
import { SurveyModel } from "survey-core";
//import { ImplementorBase } from "survey-knockout-ui";
//import { TabEmbedPlugin } from "@survey/creator";
import { ICreatorPlugin, CreatorBase, getLocString } from "@survey/creator";
const template: any = require("./embed-new.html");
// import template from "./json-editor-textarea.html";

export class TabEmbedPlugin implements ICreatorPlugin {
  constructor(creator: CreatorBase<SurveyModel>) {
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

ko.components.register("svc-tab-embed-new", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      //const plugin: TabEmbedPlugin = params.data;
      //new ImplementorBase(plugin.model);
      //return plugin.model;
    }
  },
  template: template
});