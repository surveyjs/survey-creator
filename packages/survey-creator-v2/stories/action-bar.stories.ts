// import { document } from "global";
import { boolean, text } from "@storybook/addon-knobs";

import * as ko from "knockout";

// We need import something from the component source code in order the component to be registered in KnockoutJS
import { ActionBarViewModel, ActionBarItemViewModel, ActionBarSeparatorViewModel } from "../src/entries";

export default {
  title: "Action Bar",
  "ko-components": [ActionBarViewModel, ActionBarItemViewModel, ActionBarSeparatorViewModel], // Fake component usage in order for component to be actually imported
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
    template: '<svc-action-bar-item params="item: item"></svc-action-bar-item>',
    context: {
      item: {
        title: text("Title", "Menu Button"),
        action: function () {
          alert("!!");
        },
        icon: text("Icon", "icon-preview"),
        showTitle: boolean("Show title", false),
      },
    },
  };
};

export const ActionBarItem = () => {
  return {
    template: '<svc-action-bar-item params="item: item"></svc-action-bar-item>',
    context: {
      item: {
        title: text("Title", "Menu Button"),
        action: function () {
          alert("!!");
        },
        icon: text("Icon", "icon-preview"),
      },
    },
  };
};

export const DisabledActionBarItem = () => {
  return {
    template: '<svc-action-bar-item params="item: item"></svc-action-bar-item>',
    context: {
      item: {
        title: text("Title", "Menu Button Disabled"),
        action: function () {
          alert("!!");
        },
        icon: text("Icon", "icon-preview"),
        enabled: boolean("Enabled", false),
      },
    },
  };
};

export const ActiveActionBarItem = () => {
  return {
    template: '<svc-action-bar-item params="item: item"></svc-action-bar-item>',
    context: {
      item: {
        title: text("Title", "Menu Button Active"),
        action: function () {},
        icon: text("Icon", "icon-preview"),
        isActive: boolean("Active", true),
      },
    },
  };
};

export const Desktop = () => {
  return {
    template: '<svc-action-bar params="items: items"></svc-action-bar>',
    context: {
      items: [
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
      ],
    },
  };
};
