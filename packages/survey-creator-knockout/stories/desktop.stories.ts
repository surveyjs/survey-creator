import { StylesManager, settings } from "survey-core";
import {
  SurveyCreator,
  CreatorViewModel,
  DropdownEditorViewModel
} from "../src/entries";
import { PropertyGridModel } from "survey-creator-core";

import "../node_modules/survey-core/defaultV2.css";
settings.lazyRowsRendering = true;

import surveyJSON from "./sample-survey.json";

export default {
  title: "Creator / Desktop or Landscape Tablet",
  "ko-components": [
    SurveyCreator,
    CreatorViewModel,
    DropdownEditorViewModel,
    PropertyGridModel,
  ], // Fake component usage in order for component to be actually imported
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=606%3A1473",
    },
  },
};

export const Default = () => {
  const creator: SurveyCreator = new SurveyCreator({
    showEmbeddedSurveyTab: true,
  });
  (<any>creator).JSON = surveyJSON;
  return {
    template: '<survey-creator params="creator: creator"></survey-creator>',
    context: {
      creator,
    },
  };
};
