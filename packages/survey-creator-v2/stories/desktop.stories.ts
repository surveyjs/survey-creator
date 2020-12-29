import { Survey, StylesManager, settings } from "survey-knockout";
import { SurveyCreator, CreatorViewModel, DropdownEditorViewModel, PluginModel } from "../src/entries";
import * as ko from "knockout";

import "../node_modules/survey-knockout/modern.css";
StylesManager.applyTheme("modern");
settings.lazyRowsRendering = true;

import surveyJSON from "./sample-survey.json";

export default {
  title: "Creator / Desktop or Landscape Tablet",
  "ko-components": [SurveyCreator, CreatorViewModel, DropdownEditorViewModel, PluginModel], // Fake component usage in order for component to be actually imported
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=606%3A1473",
    },
  },
};

export const Default = () => {
  let creator = new SurveyCreator({showEmbededSurveyTab: true});
  let plugin = new PluginModel(creator);

  creator.setSurvey(new Survey(surveyJSON));
  return {
    template: '<survey-creator params="creator: creator"></survey-creator>',
    context: {
      creator,
    },
  };
};
