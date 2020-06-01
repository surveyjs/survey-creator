import * as ko from "knockout";

export class Commands {
  constructor(private creator) {}

  private commands: {
    [index: string]: {
      name?: string;
      hotKey?: { ctrlKey: boolean; keyCode: number };
      toolbar?: any;
    };
  } = {
    pageSelector: {
      toolbar: {
        id: "svd-toolbar-page-selector",
        component: "svd-page-selector",
        visible: this.creator.showPageSelectorInToolbar,
        enabled: true,
        data: this.creator,
      },
    },
    undo: {
      name: "undo",
      hotKey: {
        ctrlKey: true,
        keyCode: 90,
      },
      toolbar: {
        id: "svd-undo",
        icon: "icon-actionundo",
        visible: this.creator.koIsShowDesigner,
        enabled: this.creator.koCanUndo,
        title: this.creator.getLocString("ed.undo"),
        tooltip: this.creator.getLocString("ed.undoTooltip"),
      },
    },
    redo: {
      name: "redo",
      hotKey: {
        ctrlKey: true,
        keyCode: 89,
      },
      toolbar: {
        id: "svd-redo",
        icon: "icon-actionredo",
        visible: this.creator.koIsShowDesigner,
        enabled: this.creator.koCanRedo,
        title: this.creator.getLocString("ed.redo"),
        tooltip: this.creator.getLocString("ed.redoTooltip"),
      },
    },
    surveySettings: {
      toolbar: {
        id: "svd-survey-settings",
        icon: "icon-actionsettings",
        visible: this.creator.koIsShowDesigner,
        enabled: true,
        action: () => {
          this.creator.selectedElement = this.creator.survey;
          this.creator.showQuestionEditor(this.creator.survey);
        },
        title: this.creator.getLocString("ed.settings"),
        tooltip: this.creator.getLocString("ed.settingsTooltip"),
      },
    },
    toolbarOptions: {
      toolbar: {
        id: "svd-options",
        visible: ko.computed(
          () => this.creator.koIsShowDesigner() && this.creator.koShowOptions()
        ),
        title: this.creator.getLocString("ed.options"),
        template: "svd-toolbar-options",
        items: ko.observableArray([
          {
            id: "svd-valid-json",
            visible: true,
            css: ko.computed(() =>
              this.creator.koGenerateValidJSON() ? "active" : ""
            ),
            action: this.creator.generateValidJSONClick,
            title: this.creator.getLocString("ed.generateValidJSON"),
          },
          {
            id: "svd-readable-json",
            visible: true,
            css: ko.computed(() =>
              !this.creator.koGenerateValidJSON() ? "active" : ""
            ),
            action: this.creator.generateReadableJSONClick,
            title: this.creator.getLocString("ed.generateReadableJSON"),
          },
        ]),
      },
    },
    surveyTest: {
      toolbar: {
        id: "svd-test",
        visible: ko.computed(() => this.creator.koViewType() === "test"),
        title: ko.computed(
          () =>
            this.creator.getLocString("ed.testSurveyWidth") +
            " " +
            this.creator.koTestSurveyWidth()
        ),
        template: "svd-toolbar-options",
        items: ko.observableArray([
          {
            id: "svd-100-json",
            visible: true,
            action: () => this.creator.koTestSurveyWidth("100%"),
            title: "100%",
          },
          {
            id: "svd-1200px-json",
            visible: true,
            action: () => this.creator.koTestSurveyWidth("1200px"),
            title: "1200px",
          },
          {
            id: "svd-1000px-json",
            visible: true,
            action: () => this.creator.koTestSurveyWidth("1000px"),
            title: "1000px",
          },
          {
            id: "svd-800px-json",
            visible: true,
            action: () => this.creator.koTestSurveyWidth("800px"),
            title: "800px",
          },
          {
            id: "svd-600px-json",
            visible: true,
            action: () => this.creator.koTestSurveyWidth("600px"),
            title: "600px",
          },
          {
            id: "svd-400px-json",
            visible: true,
            action: () => this.creator.koTestSurveyWidth("400px"),
            title: "400px",
          },
        ]),
      },
    },
    save: {
      toolbar: {
        id: "svd-save",
        visible: this.creator.koShowSaveButton,
        action: this.creator.saveButtonClick,
        innerCss: "svd_save_btn",
        title: this.creator.getLocString("ed.saveSurvey"),
        tooltip: this.creator.getLocString("ed.saveSurveyTooltip"),
      },
    },
    state: <any>{
      toolbar: {
        id: "svd-state",
        visible: this.creator.koShowState,
        css: "svd_state",
        innerCss: ko.computed(() => "icon-" + this.creator.koState()),
        title: ko.computed(() =>
          this.creator.getLocString("ed." + this.creator.koState())
        ),
        template: "svd-toolbar-state",
      },
    },
  };

  public getCommands() {
    return this.commands;
  }
}
