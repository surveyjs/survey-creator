import { StylesManager, settings } from "survey-core";
import { Survey } from "survey-knockout-ui";
import { SurveyCreator } from "../src/entries";
// We need import something from the component source code in order the component to be registered in KnockoutJS
import { TabDesignerViewModel } from "@survey/creator";

import "../node_modules/survey-core/modern.css";
StylesManager.applyTheme("modern");
settings.lazyRowsRendering = true;

import surveyJSON from "./sample-survey.json";

export default {
  title: "Creator design surface content",
  "ko-components": [SurveyCreator, TabDesignerViewModel],
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
  creator.JSON = surveyJSON;
  return {
    template: '<svc-tab-designer params="creator: creator"></svc-tab-designer>',
    context: {
      creator,
    },
  };
};
