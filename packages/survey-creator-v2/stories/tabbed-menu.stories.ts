import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

// We need import something from the component source code in order the component to be registered in KnockoutJS
import { TabbedMenuViewModel, TabbedMenuItemViewModel } from "../src/entries";

export default {
  title: "Tabbed Menu",
  decorators: [withKnobs],
  "ko-components": [TabbedMenuItemViewModel, TabbedMenuViewModel], // Fake component usage in order for component to be actually imported
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=254%3A86",
    },
  },
};

export const TabbedMenuItem = () => {
  return {
    template:
      '<svc-tabbed-menu-item params="item: item"></svc-tabbed-menu-item>',
    context: {
      item: {
        title: text("Title", "Menu Item"),
        active: boolean("Selected", false),
        action: () => {
          alert("action");
        },
      },
    },
  };
};

export const TabbedMenuItemSelected = () => {
  return {
    template:
      '<svc-tabbed-menu-item params="item: item"></svc-tabbed-menu-item>',
    context: {
      item: {
        title: text("Title", "Menu Item"),
        active: boolean("Selected", true),
        action: () => {
          alert("action");
        },
      },
    },
  };
};

export const TabbedMenuItemDisabled = () => {
  return {
    template:
      '<svc-tabbed-menu-item params="item: item"></svc-tabbed-menu-item>',
    context: {
      item: {
        title: text("Title", "Disabled Menu Item"),
        disabled: boolean("Disabled", true),
        action: () => {
          alert("action");
        },
      },
    },
  };
};

export const TabbedMenu = () => {
  return {
    template: '<svc-tabbed-menu params="items: items"></svc-tabbed-menu>',
    context: {
      items: [
        {
          title: "Menu Item 1",
        },
        {
          title: "Menu Item 2",
        },
      ],
    },
  };
};
