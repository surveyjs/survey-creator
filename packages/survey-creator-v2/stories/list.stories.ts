// import { document } from "global";
import { text, boolean, button } from "@storybook/addon-knobs";
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
      '<div style="width: 250px"><sv-list params="onItemSelect: onItemSelect, items: items"></sv-list></div>',
    context: {
      name: "sv-list",
      onItemSelect: () => {
        alert("!");
      },
      items: [
        { title: "Question 1" },
        { title: "Question 2" },
        {
          title: "Question 3",
        },
      ],
    },
  };
};

export const WithDisabledItem = () => {
  return {
    template:
      '<div style="width: 250px"><sv-list params="onItemSelect: onItemSelect, items: items"></sv-list></div>',
    context: {
      name: "sv-list",
      onItemSelect: () => {
        alert("!");
      },
      items: [
        { title: "Question 1" },
        { title: "Question 2" },
        {
          title: "Question 3",
          isEnabled: false,
        },
      ],
    },
  };
};

export const WithSelection = () => {
  return {
    template:
      '<div style="width: 250px"><sv-list params="onItemSelect: onItemSelect, items: items, allowSelection: allowSelection"></sv-list></div>',
    context: {
      name: "sv-list",
      allowSelection: boolean("Allow selection", true),
      onItemSelect: () => {
        alert("!");
      },
      items: [
        { title: "Question 1" },
        { title: "Question 2" },
        {
          title: "Question 3",
        },
      ],
    },
  };
};

export const WithIcons = () => {
  return {
    template:
      '<div style="width: 250px"><sv-list params="onItemSelect: onItemSelect, items: items"></sv-list></div>',
    context: {
      name: "sv-list",
      title: text("Title", "Show menu"),
      onItemSelect: () => {
        alert("!");
      },
      items: [
        { title: "Question 1", iconName: "icon-matrix" },
        { title: "Question 2", iconName: "icon-expression" },
        {
          title: "Question 3",
          iconName: "icon-imagepicker",
        },
      ],
    },
  };
};
