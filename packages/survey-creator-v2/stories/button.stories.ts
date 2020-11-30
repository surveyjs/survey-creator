// import { document } from "global";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { useEffect } from "@storybook/client-api";

// We need import something from the component source code in order the component to be registered in KnockoutJS
import { ButtonViewModel } from "../src/components/button";

export default {
  title: "Button",
  "ko-components": ButtonViewModel, // Fake component usage in order for component to be actually imported
  parameters: {
    jest: ["button.spec.ts"],
    actions: {
      argTypesRegex: "^on.*",
      handles: ["click"],
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=248%3A57419",
    },
  },
};

export const Ordinary = () => {
  return {
    template: '<svc-button params="action: action, title: title"></svc-button>',
    context: {
      title: text("Title", "Button"),
      action: function () {
        alert("!");
      },
    },
  };
};

Ordinary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=248%3A57419",
  },
};

export const Disabled = () => {
  return {
    template:
      '<svc-button params="action: action, title: title, disabled: disabled"></svc-button>',
    context: {
      title: text("Title", "Button"),
      disabled: boolean("Disabled", true),
      action: function () {
        alert("!");
      },
    },
  };
};

export const ActionButton = () => {
  return {
    template:
      '<svc-button params="action: action, title: title, css: css"></svc-button>',
    context: {
      title: text("Title", "Add a Question"),
      css: text("css", "svc-button svc-button--action"),
      action: function () {
        alert("!");
      },
    },
  };
};

export const DisabledActionButton = () => {
  return {
    template:
      '<svc-button params="action: action, title: title, disabled: disabled, css: css"></svc-button>',
    context: {
      title: text("Title", "Add a Question"),
      css: text("css", "svc-button svc-button--action"),
      disabled: boolean("Disabled", true),
      action: function () {
        alert("!");
      },
    },
  };
};
