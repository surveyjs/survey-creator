// import { document } from "global";
import { text, boolean } from "@storybook/addon-knobs";

// We need import something from the component source code in order the component to be registered in KnockoutJS
import { TextEditorViewModel } from "../src/components/property-editors/text-editor/text-editor";

export default {
  title: "Text Editor",
  "ko-components": [TextEditorViewModel], // Fake component usage in order for component to be actually imported
  parameters: {
    jest: [],
    actions: {},
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=268%3A68242",
    },
  },
};

export const Empty = () => {
  return {
    template:
      '<div style="width:503px"><svc-text-editor params="model: model"></svc-text-editor></div>',
    context: {
      model: { koDisplayError: () => {} },
    },
  };
};

export const WithPlaceholderText = () => {
  return {
    template:
      '<div style="width:503px"><svc-text-editor params="model: model"></svc-text-editor></div>',
    context: {
      model: {
        koDisplayError: () => {},
        defaultValue: text("Placeholder Text", "Question Title"),
      },
    },
  };
};

export const Filled = () => {
  return {
    template:
      '<div style="width:503px"><svc-text-editor params="model: model"></svc-text-editor></div>',
    context: {
      model: {
        koDisplayError: () => {},
        koValue: text("Value", "Question 2"),
      },
    },
  };
};

export const Disabled = () => {
  return {
    template:
      '<div style="width:503px"><svc-text-editor params="model: model"></svc-text-editor></div>',
    context: {
      model: {
        koDisplayError: () => {},
        koValue: text("Value", "Question 2"),
        readOnly: boolean("Disabled", true),
      },
    },
  };
};

export const WithLabel = () => {
  return {
    template:
      '<div style="width:503px"><svc-text-editor params="model: model"></svc-text-editor></div>',
    context: {
      model: {
        koDisplayError: () => {},
        displayName: text("Label", "Question Title"),
        showDisplayNameOnTop: boolean("Show Label", true),
      },
    },
  };
};
