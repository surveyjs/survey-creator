// import { document } from "global";
import { boolean, text } from "@storybook/addon-knobs";
import * as ko from "knockout";
import { SvgBundleViewModel } from "@survey/creator";

// We need import something from the component source code in order the component to be registered in KnockoutJS

export default {
  title: "Action Bar",
  "ko-components": [SvgBundleViewModel], // Fake component usage in order for component to be actually imported
  parameters: {
    jest: [],
    actions: {},
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=254%3A101",
    },
  },
};

export const ActionBarItemWithoutTitle = () => {
  return {
    template: '<sv-action-bar-item params="item: item"></sv-action-bar-item>',
    context: {
      item: {
        title: text("Title", "Menu Button"),
        action: function () {
          alert("!!");
        },
        iconName: text("Icon", "icon-preview"),
        showTitle: boolean("Show title", false),
      },
    },
  };
};

export const ActionBarItem = () => {
  return {
    template: '<sv-action-bar-item params="item: item"></sv-action-bar-item>',
    context: {
      item: {
        title: text("Title", "Menu Button"),
        action: function () {
          alert("!!");
        },
        iconName: text("Icon", "icon-preview"),
      },
    },
  };
};

export const DisabledActionBarItem = () => {
  return {
    template: '<sv-action-bar-item params="item: item"></sv-action-bar-item>',
    context: {
      item: {
        title: text("Title", "Menu Button Disabled"),
        action: function () {
          alert("!!");
        },
        iconName: text("Icon", "icon-preview"),
        enabled: boolean("Enabled", false),
      },
    },
  };
};

export const ActiveActionBarItem = () => {
  return {
    template: '<sv-action-bar-item params="item: item"></sv-action-bar-item>',
    context: {
      item: {
        title: text("Title", "Menu Button Active"),
        action: function () {},
        iconName: text("Icon", "icon-preview"),
        isActive: boolean("Active", true),
      },
    },
  };
};

export const Desktop = () => {
  return {
    template: '<sv-action-bar params="items: items"></sv-action-bar>',
    context: {
      items: [
        {
          iconName: "icon-undo",
          action: () => {},
          title: "Undo",
          showTitle: false,
        },
        {
          iconName: "icon-redo",
          action: () => {},
          title: "Redo",
          showTitle: false,
        },
        { component: "sv-action-bar-separator" },
        {
          iconName: "icon-settings",
          action: function () {
            this.isActive(!this.isActive());
          },
          isActive: ko.observable(false),
          title: "Settings",
          showTitle: false,
        },
        {
          iconName: "icon-clear",
          action: function () {
            this.isActive(!this.isActive());
          },
          isActive: ko.observable(false),
          title: "Clear",
          showTitle: false,
        },
        {
          iconName: "icon-search",
          action: function () {
            this.isActive(!this.isActive());
          },
          isActive: ko.observable(false),
          title: "Search",
          showTitle: false,
        },
        {
          component: "sv-action-bar-separator",
        },
        {
          iconName: "icon-preview",
          action: function () {
            this.isActive(!this.isActive());
          },
          isActive: ko.observable(false),
          title: "Preview",
          innerCss: "sv-action-bar-item--secondary",
        },
      ],
    },
  };
};
