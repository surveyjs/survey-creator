import { Survey, StylesManager, settings } from "survey-knockout";
import { SurveyCreator } from "../src/entries";
// We need import something from the component source code in order the component to be registered in KnockoutJS
import { ContentViewModel } from "../src/components/content";

import "../node_modules/survey-knockout/modern.css";
StylesManager.applyTheme("modern");
settings.lazyRowsRendering = true;

import surveyJSON from "./sample-survey.json";

export default {
  title: "Creator design surface content",
  "ko-components": ContentViewModel,
  SurveyCreator, // Fake component usage in order for component to be actually imported
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=606%3A1473",
    },
  },
};

export const Default = () => {
  let creator = new SurveyCreator({});
  creator.survey = <any>new Survey(surveyJSON);
  return {
    template: '<svc-content params="creator: creator, survey: creator.survey"></svc-content>',
    context: {
      creator,
    },
  };
};
