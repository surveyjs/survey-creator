import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

// We need import something from the component source code in order the component to be registered in KnockoutJS
import {
  PageNavigatorViewModel,
  PageNavigatorItemViewModel,
  SvgBundleViewModel,
} from "../src/entries";

const template =
  '<div style="width: 200px; display: flex; flex-direction: row-reverse;"><svc-page-navigator params="items: items"></svc-page-navigator></div>';
const itemTemplate =
  '<div style="width: 200px; display: flex; flex-direction: row-reverse;"><svc-page-navigator-item params="item: item"></svc-page-navigator-item></div>';

export default {
  title: "Page Navigator",
  decorators: [withKnobs],
  "ko-components": [
    PageNavigatorItemViewModel,
    PageNavigatorViewModel,
    SvgBundleViewModel,
  ], // Fake component usage in order for component to be actually imported
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=2018%3A37335",
    },
  },
};

export const PageNavigatorItem = () => {
  return {
    template: itemTemplate,
    context: {
      item: {
        title: text("Title", "Page 1"),
        selected: boolean("Selected", false),
        action: () => {
          alert("action");
        },
      },
    },
  };
};

export const PageNavigatorItemSelected = () => {
  return {
    template: itemTemplate,
    context: {
      item: {
        title: text("Title", "Page 1"),
        selected: boolean("Selected", true),
        action: () => {
          alert("action");
        },
      },
    },
  };
};

export const PageNavigatorItemDisabled = () => {
  return {
    template: itemTemplate,
    context: {
      item: {
        title: text("Title", "Disabled Page"),
        disabled: boolean("Disabled", true),
        action: () => {
          alert("action");
        },
      },
    },
  };
};

export const PageNavigator = () => {
  return {
    template: template,
    context: {
      items: [
        {
          title: "Page 1",
        },
        {
          title: "Page 2",
        },
      ],
    },
  };
};
