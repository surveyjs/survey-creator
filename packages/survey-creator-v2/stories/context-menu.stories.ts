// import { document } from "global";
import { text, boolean } from "@storybook/addon-knobs";
import * as ko from "knockout";

// We need import something from the component source code in order the component to be registered in KnockoutJS
import { ListViewModel } from "../src/entries";

export default {
  title: "Popup Modal",
  "ko-components": [ListViewModel], // Fake component usage in order for component to be actually imported
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

export const ContextMenuOrdinary = () => {
  var isVisible = ko.observable(false);

  var action = () => {
    isVisible(!isVisible());
  };

  const listModel = {
    onItemSelect: () => {
      isVisible(false);
    },
    items: [
      { title: "Question 1", isEnabled: true },
      { title: "Question 2", isEnabled: true },
      { title: "Question 3", isEnabled: true },
    ],
  };

  return {
    template: `<div style="margin-left: 200px; margin-top: 200px; width: max-content; position: relative">
        <svc-button params="title: title, action: action">
        </svc-button>
        <sv-popup params="contentComponentName: name, contentComponentData: model,
          isVisible: isVisible, verticalPosition: verticalPosition, horizontalPosition: horizontalPosition">
        </sv-popup>
      </div>`,
    context: {
      name: "svc-list",
      title: text("Title", "Show menu"),
      action: action,
      model: listModel,
      isVisible: isVisible,
      verticalPosition: text("Vertical position", "bottom"),
      horizontalPosition: text("Horizontal position", "right"),
    },
  };
};

export const ContextMenuWithPointer = () => {
  var isVisible = ko.observable(false);

  var action = () => {
    isVisible(!isVisible());
  };

  const listModel = {
    onItemSelect: () => {
      isVisible(false);
    },
    items: [
      { title: "Question 1", isEnabled: true },
      { title: "Question 2", isEnabled: true },
      { title: "Question 3", isEnabled: true },
    ],
  };

  return {
    template: `<div style="margin-left: 200px; margin-top: 200px; width: max-content; position: relative">
        <svc-button params="title: title, action: action">
        </svc-button>
        <sv-popup params="contentComponentName: name, contentComponentData: model,
          isVisible: isVisible, verticalPosition: verticalPosition,
          horizontalPosition: horizontalPosition, showPointer: showPointer">
        </sv-popup>
      </div>`,
    context: {
      name: "svc-list",
      title: text("Title", "Show menu"),
      action: action,
      model: listModel,
      isVisible: isVisible,
      verticalPosition: text("Vertical position", "middle"),
      horizontalPosition: text("Horizontal position", "right"),
      showPointer: boolean("Show pointer", true),
    },
  };
};

export const FastEntry = () => {
  var koIsVisible = ko.observable(false);
  var koValue = ko.observable("default");
  var koValueTextarea = ko.observable(koValue());

  class TextareaComponentViewModel {
    constructor(
      public koValueTextarea: ko.Observable<string> = ko.observable(""),
      targetElement: HTMLElement
    ) {}
  }

  ko.components.register("textarea-component", {
    viewModel: {
      createViewModel: (params: any, componentInfo: any) => {
        return new TextareaComponentViewModel(
          params.koValueTextarea,
          componentInfo.element.parentElement
        );
      },
    },
    template: `       
      <div><textarea data-bind="value: koValueTextarea"></textarea></div>
    `,
  });

  return {
    template: `
      <div style="margin-left: 200px; margin-top: 200px; width: max-content; position: relative">
        <div style="margin-bottom: 30px;">
          The value of property editor is: <b><span data-bind="text: koValue"></span></b>
        </div>
        <svc-button params="title: title, action: function(){koIsVisible(true);}">
        </svc-button>
        
        <sv-popup params="contentComponentName: name, contentComponentData: {koValueTextarea: koValueTextarea }, isVisible: koIsVisible, isModal: true, onCancel: function(){koValueTextarea(koValue())}, onApply: function(){koValue(koValueTextarea())}">
        </sv-popup>
      </div>
    `,
    context: {
      name: "textarea-component",
      title: text("Title", "Fast Entry"),
      koIsVisible: koIsVisible,
      koValue: koValue,
      koValueTextarea: koValueTextarea,
    },
  };
};
