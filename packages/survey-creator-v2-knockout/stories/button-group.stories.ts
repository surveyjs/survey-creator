// import { document } from "global";
import { text, boolean } from "@storybook/addon-knobs";
import * as ko from "knockout";
// We need import something from the component source code in order the component to be registered in KnockoutJS
import {
  ButtonGroupViewModel,
  ButtonGroupItemViewModel,
  SvgBundleViewModel,
} from "../src/entries";

export default {
  title: "Button Group",
  "ko-components": [ButtonGroupViewModel, ButtonGroupItemViewModel, SvgBundleViewModel], // Fake component usage in order for component to be actually imported
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

export const TwoButtons = () => {
  return {
    template:
      '<div style="width:480px"><svc-button-group params="model: model"></svc-button-group></div>',
    context: {
      model: {
        value: ko.observable(""),
        choices: [
          { title: "Left", value: "Left" },
          { title: "Right", value: "Right" },
        ],
      },
    },
  };
};

export const SelectedItem = () => {
  return {
    template:
      '<div style="width:480px"><svc-button-group params="model: model"></svc-button-group></div>',
    context: {
      model: {
        value: ko.observable(text("Value", "Right")),
        choices: [
          { title: "Left", value: "Left" },
          { title: "Right", value: "Right" },
        ],
      },
    },
  };
};

export const DisabledItem = () => {
  return {
    template:
      '<div style="width:480px"><svc-button-group params="model: model"></svc-button-group></div>',
    context: {
      model: {
        value: ko.observable(""),
        choices: [
          { title: "Left", value: "Left" },
          {
            title: "Right",
            value: "Right",
            disabled: boolean("Disabled", true),
          },
        ],
      },
    },
  };
};

export const ThreeButtons = () => {
  return {
    template:
      '<div style="width:480px"><svc-button-group params="model: model"></svc-button-group></div>',
    context: {
      model: {
        value: ko.observable(text("Value", "Right")),
        choices: [
          { title: "Left", value: "Left" },
          { title: "Center", value: "Center" },
          { title: "Right", value: "Right" },
        ],
      },
    },
  };
};

export const FourButtons = () => {
  return {
    template:
      '<div style="width:480px"><svc-button-group params="model: model"></svc-button-group></div>',
    context: {
      model: {
        value: ko.observable(text("Value", "Contain")),
        choices: [
          { title: "None", value: "None" },
          { title: "Contain", value: "Contain" },
          { title: "Cover", value: "Cover" },
          { title: "Fill", value: "Fill" },
        ],
      },
    },
  };
};

export const WithIcons = () => {
  return {
    template:
      '<div style="width:480px"><svc-button-group params="model: model"></svc-button-group></div>',
    context: {
      model: {
        value: ko.observable(""),
        choices: [
          { iconName: "icon-radiogroup", value: "radio" },
          { iconName: "icon-rating", value: "rating" },
          { iconName: "icon-image", value: "image" },
          { iconName: "icon-comment", value: "comment" },
        ],
      },
    },
  };
};

export const WithIconsSelectedItem = () => {
  return {
    template:
      '<div style="width:480px"><svc-button-group params="model: model"></svc-button-group></div>',
    context: {
      model: {
        value: ko.observable("rating"),
        choices: [
          { iconName: "icon-radiogroup", value: "radio" },
          { iconName: "icon-rating", value: "rating" },
          { iconName: "icon-image", value: "image" },
          { iconName: "icon-comment", value: "comment" },
        ],
      },
    },
  };
};

export const WithIconsDisabledItem = () => {
  return {
    template:
      '<div style="width:480px"><svc-button-group params="model: model"></svc-button-group></div>',
    context: {
      model: {
        value: ko.observable(""),
        choices: [
          { iconName: "icon-radiogroup", value: "radio" },
          {
            iconName: "icon-rating",
            value: "rating",
            disabled: boolean("Disabled", true),
          },
          { iconName: "icon-image", value: "image" },
          { iconName: "icon-comment", value: "comment" },
        ],
      },
    },
  };
};

export const WithLabel = () => {
  return {
    template:
      '<div style="width:480px"><svc-button-group params="model: model"></svc-button-group></div>',
    context: {
      model: {
        label: text("Label", "Logo fit"),
        value: ko.observable(text("Value", "Contain")),
        choices: [
          { title: "None", value: "None" },
          { title: "Contain", value: "Contain" },
          { title: "Cover", value: "Cover" },
          { title: "Fill", value: "Fill" },
        ],
      },
    },
  };
};
