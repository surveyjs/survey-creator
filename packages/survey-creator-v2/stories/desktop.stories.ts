import { Survey, StylesManager, settings } from "survey-knockout";
import { SurveyCreator, CreatorViewModel } from "../src/entries";
import * as ko from "knockout";

import "../node_modules/survey-knockout/modern.css";
StylesManager.applyTheme("modern");
settings.lazyRowsRendering = true;

import surveyJSON from "./sample-survey.json";

export default {
  title: "Creator / Desktop or Landscape Tablet",
  "ko-components": [SurveyCreator, CreatorViewModel], // Fake component usage in order for component to be actually imported
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
  creator.toolbarItems.push(
    ...(<any>[
      {
        icon: "icon-undo",
        action: () => {},
        title: "Undo",
        showTitle: false,
      },
      {
        icon: "icon-redo",
        action: () => {},
        title: "Redo",
        showTitle: false,
      },
      { component: "svc-action-bar-separator" },
      {
        icon: "icon-settings",
        action: function () {
          this.isActive(!this.isActive());
        },
        isActive: ko.observable(false),
        title: "Settings",
        showTitle: false,
      },
      {
        icon: "icon-clear",
        action: function () {
          this.isActive(!this.isActive());
        },
        isActive: ko.observable(false),
        title: "Clear",
        showTitle: false,
      },
      {
        icon: "icon-search",
        action: function () {
          this.isActive(!this.isActive());
        },
        isActive: ko.observable(false),
        title: "Search",
        showTitle: false,
      },
      {
        component: "svc-action-bar-separator",
      },
      {
        icon: "icon-preview",
        action: function () {
          this.isActive(!this.isActive());
        },
        isActive: ko.observable(false),
        title: "Preview",
        innerCss: "svc-action-bar-item--secondary",
      },
    ])
  );

  creator.tabs.push(
    ...(<any>[
      { title: "Designer" },
      { title: "Survey Logic" },
      { title: "JSON Editor" },
      { title: "Embed Survey" },
      { title: "Translation" },
    ])
  );

  return {
    template: '<survey-creator params="creator: creator"></survey-creator>',
    context: {
      creator,
    },
  };
};
