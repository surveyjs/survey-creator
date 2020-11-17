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
  var isVisible = ko.observable(false);

  var action = () => {
    isVisible(!isVisible());
  };

  const listModel = {
    onItemSelect: () => {
      isVisible(false);
    },
    items: [
      { text: "Question 1", isEnabled: true },
      { text: "Question 2", isEnabled: true },
      { text: "Question 3", isEnabled: true },
    ],
  };

  return {
    template:
      '<div style="margin-left: 200px; margin-top: 200px; width:503px; position: relative"><svc-button params="action: action"></svc-button><svc-modal style="width: 150px; height:56px; top:0" params= "name: name, data: model, isVisible: isVisible, verticalPosition: verticalPosition, horizontalPosition: horizontalPosition"></svc-modal></div>',
    context: {
      name: "svc-list",
      title: text("Title", "Button"),
      action: action,
      model: { model: listModel },
      isVisible: isVisible,
      verticalPosition: text("Vertical position", "top"),
      horizontalPosition: text("Horizontal position", "right"),
    },
  };
};

export const WithPointer = () => {
  var isVisible = ko.observable(false);

  var action = () => {
    isVisible(!isVisible());
  };

  const listModel = {
    onItemSelect: () => {
      isVisible(false);
    },
    items: [
      { text: "Question 1", isEnabled: true },
      { text: "Question 2", isEnabled: true },
      { text: "Question 3", isEnabled: true },
    ],
  };

  return {
    template:
      '<div style="margin-left: 200px; margin-top: 200px; width:503px; position: relative"><svc-button params="action: action"></svc-button><svc-modal style="width: 150px; height:56px; top:0" params= "name: name, data: model, isVisible: isVisible, verticalPosition: verticalPosition, horizontalPosition: horizontalPosition, showPointer: showPointer"></svc-modal></div>',
    context: {
      name: "svc-list",
      title: text("Title", "Button"),
      action: action,
      model: { model: listModel },
      isVisible: isVisible,
      verticalPosition: text("Vertical position", "middle"),
      horizontalPosition: text("Horizontal position", "right"),
      showPointer: boolean("Show pointer", true),
    },
  };
};

export const WithIcons = () => {
  var isVisible = ko.observable(false);

  var action = () => {
    isVisible(!isVisible());
  };

  const listModel = {
    onItemSelect: () => {
      isVisible(false);
    },
    items: [
      { text: "Question 1", isEnabled: true, icon: "icon-matrix" },
      { text: "Question 2", isEnabled: true, icon: "icon-expression" },
      { text: "Question 3", isEnabled: true, icon: "icon-imagepicker" },
    ],
  };

  return {
    template:
      '<div style="margin-left: 200px; margin-top: 200px; width:503px; position: relative"><svc-button params="action: action"></svc-button><svc-modal style="width: 160px; height:56px; top:0" params= "name: name, data: model, isVisible: isVisible, verticalPosition: verticalPosition, horizontalPosition: horizontalPosition, showPointer: showPointer"></svc-modal></div>',
    context: {
      name: "svc-list",
      title: text("Title", "Button"),
      action: action,
      model: { model: listModel },
      isVisible: isVisible,
      verticalPosition: text("Vertical position", "middle"),
      horizontalPosition: text("Horizontal position", "right"),
      showPointer: boolean("Show pointer", false),
    },
  };
};
