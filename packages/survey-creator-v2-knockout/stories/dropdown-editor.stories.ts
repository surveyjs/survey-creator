// import { document } from "global";
import { text, boolean } from "@storybook/addon-knobs";
import * as ko from "knockout";

// We need import something from the component source code in order the component to be registered in KnockoutJS
import { DropdownEditorViewModel } from "../src/entries";

export default {
  title: "Dropdown Editor",
  "ko-components": [DropdownEditorViewModel], // Fake component usage in order for component to be actually imported
  parameters: {
    jest: [],
    actions: {},
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=266%3A7192",
    },
  },
};

export const Empty = () => {
  return {
    template:
      '<div style="width:503px"><svc-dropdown-editor params="model: model"></svc-dropdown-editor></div>',
    context: {
      model: {
        koValue: ko.observable(""),
        koChoices: [
          { value: "Question 1" },
          { value: "Question 2" },
          { value: "Question 3" },
        ],
      },
    },
  };
};
export const WithPlaceholder = () => {
  return {
    template:
      '<div style="width:503px"><svc-dropdown-editor params="model: model"></svc-dropdown-editor></div>',
    context: {
      model: {
        koValue: ko.observable(""),
        optionsCaption: text("Placeholder Text", "Placeholder Text"),
        koChoices: [
          { value: "Question 1" },
          { value: "Question 2" },
          { value: "Question 3" },
        ],
      },
    },
  };
};

export const Filled = () => {
  return {
    template:
      '<div style="width:503px"><svc-dropdown-editor params="model: model"></svc-dropdown-editor></div>',
    context: {
      model: {
        koValue: ko.observable(text("Value", "Question 1")),
        koChoices: [
          { value: "Question 1" },
          { value: "Question 2" },
          { value: "Question 3" },
        ],
      },
    },
  };
};

export const Disabled = () => {
  return {
    template:
      '<div style="width:503px"><svc-dropdown-editor params="model: model"></svc-dropdown-editor></div>',
    context: {
      model: {
        koValue: ko.observable(text("Value", "Question 1")),
        readOnly: boolean("Disabled", true),
        koChoices: [
          { value: "Question 1" },
          { value: "Question 2" },
          { value: "Question 3" },
        ],
      },
    },
  };
};

export const WithLabel = () => {
  return {
    template:
      '<div style="width:503px"><svc-dropdown-editor params="model: model"></svc-dropdown-editor></div>',
    context: {
      model: {
        koValue: ko.observable(""),
        showDisplayNameOnTop: boolean("Show label", true),
        displayName: text("Label", "Question"),
        koChoices: [
          { value: "Question 1" },
          { value: "Question 2" },
          { value: "Question 3" },
        ],
      },
    },
  };
};

export const WithDisabledItem = () => {
  return {
    template:
      '<div style="width:503px"><svc-dropdown-editor params="model: model"></svc-dropdown-editor></div>',
    context: {
      model: {
        koValue: ko.observable(""),
        koChoices: [
          { value: "Question 1" },
          { value: "Question 2", disabled: true },
          { value: "Question 3" },
        ],
      },
    },
  };
};
