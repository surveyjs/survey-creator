import { Serializer, ItemValue, QuestionCheckboxModel, surveyLocalization, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase } from "./presets-editable-base";
import { getLocString, editorLocalization, SurveyCreatorModel } from "survey-creator-core";

export class CreatorPresetEditableOptions extends CreatorPresetEditableBase {
  private options = [{
    category: "cat1",
    title: "Category 1",
    items: ["addNewQuestionLast",
      "allowDragPages",
      "allowModifyPages",
      "allowZoom",
      "autoSaveEnabled",
      "clearTranslationsOnSourceTextChange",
      "collapseOnDrag",
      "collapsePages",
      "collapsePanels",
      "collapseQuestions",
      "expandCollapseButtonVisibility",
      "forbiddenNestedElements",
      "generateValidJSON",
      "isRTL"],
  }, {
    category: "cat2",
    title: "Category 2",
    items: ["logicAllowTextEditExpressions",
      "logicMaxItemsInCondition",
      "maxChoices",
      "maxColumns",
      "maxPanelNestingLevel",
      "maxRateValues",
      "maxRows",
      "maxVisibleChoices",
      "minChoices",
      "pageEditMode",
      "previewAllowHiddenElements",
      "previewAllowSelectLanguage",
      "previewAllowSelectPage",
      "previewAllowSimulateDevices",
      "previewDevice",
      "previewOrientation",
      "propertyGridNavigationMode",
      "questionTypes"],
  }, {
    category: "cat3",
    title: "Category 3",
    items: ["readOnly",
      "showCreatorThemeSettings",
      "showDesignerTab",
      "showErrorOnFailedSave",
      "showHeaderInEmptySurvey",
      "showJSONEditorTab",
      "showLogicTab",
      "showPreviewTab",
      "showSurveyHeader",
      "showThemeTab",
      "showTranslationTab",
      "useElementTitles"]
  }];
  private createQuestionForOption(item: string) {
    return { name: item, type: "text", titleLocation: "left" };
  }
  private createElements() {
    return this.options.map(c => ({ type: "panel", title: c.title, name: c.category, elements: c.items.map(i => this.createQuestionForOption(i)) }));
  }
  public createMainPageCore(): any {
    return {
      title: getLocString("presets.options.title"),
      description: getLocString("presets.options.description"),
      navigationTitle: getLocString("presets.options.navigationTitle"),
      elements: this.createElements()
    };
  }

  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel, defaultJson: any): any {
    return {};
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.options.forEach(c => c.items.forEach(optionName => {
      model.getQuestionByName(optionName).value = creator[optionName];
    }));
  }

  public get questionNames() {
    return [];
  }
}