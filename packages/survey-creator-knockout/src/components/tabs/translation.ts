import * as ko from "knockout";
import { SurveyCreator } from "../../creator";
import { Translation, getLocString, ICreatorPlugin } from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
import { Base } from "survey-core";
import "./translation.scss";
var templateHtml = require("./translation.html");
var groupTemplateHtml = require("./translation-group.html");

export class TranslationModel {
  public koTranslation: ko.Observable<Translation>;
  constructor(private creator: SurveyCreator) {
    this.koTranslation = ko.observable<Translation>(null);
  }

  public get translation(): Translation {
    return this.koTranslation();
  }
  public activate(): void {
    this.koTranslation(
      new Translation(this.creator.survey, this.creator, (obj: Base) => {
        new ImplementorBase(obj);
      })
    );
    this.translation.readOnly = this.creator.readOnly;
    this.translation.importFinishedCallback = function () {
      this.creator.onTranslationImported.fire(self, {});
    };
    this.translation.availableTranlationsChangedCallback = () => {
      this.creator.setModified({ type: "TRANSLATIONS_CHANGED" });
    };
    this.translation.tranlationChangedCallback = (
      locale: string,
      name: string,
      value: string,
      context: any
    ) => {
      this.creator.setModified({
        type: "TRANSLATIONS_CHANGED",
        locale,
        name,
        value,
        context,
      });
    };
  }
  public deactivate(): boolean {
    this.koTranslation(null);
    return true;
  }
}

export class TabTranslationPlugin implements ICreatorPlugin {
  public model: TranslationModel;
  constructor(private creator: SurveyCreator) {
    this.model = new TranslationModel(creator);
    creator.tabs.push({
      id: "translation",
      title: getLocString("ed.translation"),
      component: "survey-translation",
      data: this,
      action: () => {
        creator.makeNewViewActive("translation");
        this.activate();
      },
      active: () => creator.viewType === "translation",
    });
    creator.plugins["translation"] = this;
  }
  public activate(): void {
    this.model.activate();
  }
}

ko.components.register("survey-translation", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabTranslationPlugin = params.data;
      return plugin.model;
    },
  },
  template: templateHtml,
});
ko.components.register("svd-translation-group", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.model;
      return model;
    },
  },
  template: groupTemplateHtml,
});
