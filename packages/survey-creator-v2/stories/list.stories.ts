// import { document } from "global";
import { text, boolean, button } from "@storybook/addon-knobs";
import * as ko from "knockout";

// We need import something from the component source code in order the component to be registered in KnockoutJS
import { ListViewModel } from "../src/entries";
import { ModalViewModel } from "../src/components/modal";

export default {
  title: "List",
  "ko-components": [ListViewModel, ModalViewModel], // Fake component usage in order for component to be actually imported
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
      '<div style="width: 250px"><svc-list params="onItemSelect: onItemSelect, items: items"></svc-list></div>',
    context: {
      name: "svc-list",
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
      '<div style="width: 250px"><svc-list params="onItemSelect: onItemSelect, items: items"></svc-list></div>',
    context: {
      name: "svc-list",
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
      '<div style="width: 250px"><svc-list params="onItemSelect: onItemSelect, items: items, allowSelection: allowSelection"></svc-list></div>',
    context: {
      name: "svc-list",
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
      '<div style="width: 250px"><svc-list params="onItemSelect: onItemSelect, items: items"></svc-list></div>',
    context: {
      name: "svc-list",
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
