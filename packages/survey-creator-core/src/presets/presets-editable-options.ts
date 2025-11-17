import { Serializer, ItemValue, QuestionCheckboxModel, surveyLocalization, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase } from "./presets-editable-base";
import { getLocString, editorLocalization, SurveyCreatorModel } from "survey-creator-core";

export class CreatorPresetEditableOptions extends CreatorPresetEditableBase {
  private createElements() {
    return [
      { type: "panel", title: "Logic", name: "logic", elements: [
        { name: "pageEditMode", type: "dropdown", choices: [
          { value: "standard", text: "Standard" },
          { value: "single", text: "Single" },
          { value: "bypage", text: "By Page" }
        ] },
        { name: "showSurveyHeader", type: "boolean" },
        { name: "showHeaderInEmptySurvey", type: "boolean" },
        { name: "useElementTitles", type: "boolean" },
        { name: "allowZoom", type: "boolean" },
        { name: "allowDragPages", type: "boolean" },
        { name: "collapseOnDrag", type: "boolean" },
        { name: "expandCollapseButtonVisibility", type: "dropdown", choices: [
          { value: "never", text: "Never" },
          { value: "onhover", text: "On Hover" },
          { value: "always", text: "Always" }
        ] },
        { name: "collapseQuestions", type: "boolean" },
        { name: "collapsePanels", type: "boolean" },
        { name: "collapsePages", type: "boolean" },
        { name: "maxRows", type: "text", inputType: "number" },
        { name: "maxColumns", type: "text", inputType: "number" },
        { name: "inplaceEditChoiceValues", type: "boolean" },
        { name: "minChoices", type: "text", inputType: "number" },
        { name: "maxChoices", type: "text", inputType: "number" },
        { name: "maxVisibleChoices", type: "text", inputType: "number" },
        { name: "maxRateValues", type: "text", inputType: "number" },
        { name: "forbiddenNestedElements", type: "text" },
        { name: "maxPanelNestingLevel", type: "text", inputType: "number" }
      ] },
      { type: "panel", title: "Preview", name: "preview", elements: [
        { name: "previewAllowSimulateDevice", type: "boolean" },
        { name: "previewDevice", type: "dropdown", choices: [
          { value: "desktop", text: "Desktop" },
          { value: "iPhoneSE", text: "iPhone SE" },
          { value: "iPhone15", text: "iPhone 15" },
          { value: "iPhone15Plus", text: "iPhone 15 Plus" },
          { value: "iPad", text: "iPad" },
          { value: "iPadMini", text: "iPad Mini" },
          { value: "androidPhone", text: "Android Phone" },
          { value: "androidTablet", text: "Android Tablet" },
          { value: "microsoftSurface", text: "Microsoft Surface" }
        ] },
        { name: "previewOrientation", type: "dropdown", choices: [
          { value: "landscape", text: "Landscape" },
          { value: "portrait", text: "Portrait" }
        ] },
        { name: "previewAllowSelectLanguage", type: "boolean" },
        { name: "previewAllowSelectPage", type: "boolean" },
        { name: "previewAllowHiddenElements", type: "boolean" },
      ] },
      { type: "panel", title: "Translations", name: "translations", elements: [
        { name: "logicAllowTextEditExpressions", type: "boolean" },
        { name: "logicMaxItemsInCondition", type: "text", inputType: "number" }
      ]
      }
    ];
  }

  private optionsList: string[] = [];
  private addPathToName(optionName: string): string {
    return this.fullPath + "_" + optionName;
  }
  private patchElements(elements: any[]): any[] {
    this.optionsList = [];
    return elements.map(element => {
      if (element.type === "panel") {
        element.state = "expanded";
        this.patchElements(element.elements);
      } else {
        this.optionsList.push(element.name);
      }
      if (element.type === "boolean") {
        element.renderAs = "checkbox";
        element.useTitleAsLabel = true;
      }
      element.title = element.name;
      element.name = this.addPathToName(element.name);
      return element;
    });
  }
  public createMainPageCore(): any {
    return {
      title: getLocString("presets.options.title"),
      description: getLocString("presets.options.description"),
      navigationTitle: getLocString("presets.options.navigationTitle"),
      elements: this.patchElements(this.createElements())
    };
  }

  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel, defaultJson: any): any {
    const json: any = {};
    this.optionsList.forEach(option => {
      const question = model.getQuestionByName(this.addPathToName(option));
      if (!!question) {
        json[option] = question.value;
      }
    });
    return json;
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.optionsList.forEach(option => model.getQuestionByName(this.addPathToName(option)).value =
    (json ? json[option] : creator[option]));
  }

  public get questionNames() {
    return this.optionsList.map(option => this.addPathToName(option));
  }
}