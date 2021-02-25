// import { document } from "global";
import { text, boolean, button } from "@storybook/addon-knobs";
import { ListModel } from "survey-core";
// We need import something from the component source code in order the component to be registered in KnockoutJS
import { SvgBundleViewModel } from "../src/svgbundle";

export default {
  title: "List",
  "ko-components": [SvgBundleViewModel], // Fake component usage in order for component to be actually imported
  parameters: {
    jest: [],
    actions: {},
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=2018%3A15610",
    },
  },
};

export const Ordinary = () => {
  return {
    template:
      '<div style="width: 250px" data-bind="component: { name: \'sv-list\', params: $data}"></div>',
    context: new ListModel(
      [
        { id: "q1", title: "Question 1" },
        { id: "q2", title: "Question 2" },
        { id: "q3", title: "Question 3" },
      ],
      () => {
        alert("!");
      },
      false
    ),
  };
};

export const WithDisabledItem = () => {
  return {
    template:
      '<div style="width: 250px" data-bind="component: { name: \'sv-list\', params: $data}"></div>',
    context: new ListModel(
      [
        { id: "q1", title: "Question 1" },
        { id: "q2", title: "Question 2" },
        {
          id: "q3",
          title: "Question 3",
          enabled: false,
        },
      ],
      () => {
        alert("!");
      },
      false
    ),
  };
};

export const WithSelection = () => {
  return {
    template:
      '<div style="width: 250px" data-bind="component: { name: \'sv-list\', params: $data}"></div>',
    context: new ListModel(
      [
        { id: "q1", title: "Question 1" },
        { id: "q2", title: "Question 2" },
        { id: "q3", title: "Question 3" },
      ],
      () => {
        alert("!");
      },
      boolean("Allow selection", true)
    ),
  };
};

export const WithIcons = () => {
  return {
    template:
      '<div style="width: 250px" data-bind="component: { name: \'sv-list\', params: $data}"></div>',
    context: new ListModel(
      [
        { id: "q1", title: "Question 1", iconName: "icon-matrix" },
        { id: "q2", title: "Question 2", iconName: "icon-expression" },
        { id: "q3", title: "Question 3", iconName: "icon-imagepicker" },
      ],
      () => {
        alert("!");
      },
      false
    ),
  };
};
