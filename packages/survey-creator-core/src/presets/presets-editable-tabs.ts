import { Helpers, ItemValue, QuestionMatrixDynamicModel, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { SurveyCreatorModel } from "survey-creator-core";
import { PresetItemValue, QuestionPresetRankingModel } from "./preset-question-ranking";
import { CreatorPresetEditableList } from "./presets-editable-list";

export class CreatorPresetEditableTabs extends CreatorPresetEditableList {
  private createItemsMatrixJSON(props: any): any {
    const defaultJSON = {
      type: "matrixdynamic",
      name: "items",
      titleLocation: "hidden",
      allowRowReorder: true,
      cellType: "text",
      showHeader: false,
      rowCount: 0,
      allowAddRows: false,
      addRowButtonLocation: "top",
      addRowText: "Add Custom Item",
      "noRowsText": "There are no items",
      columns: [
        {
          "name": "name",
          visible: false
        },
        {
          "name": "title"
        },
        { name: "isDefault", type: "boolean", defaultValue: false, visible: false }
      ],
      detailPanelMode: "underRow",
      detailElements: [
        { type: "text", name: "name", title: "Name", isUnique: true, isRequired: true },
        { type: "text", name: "iconName", title: "Icon name" }
      ]
    };
    return { ...defaultJSON, ...props };
  }

  public createMainPageCore(): any {
    return {
      title: "Set Up the Tabs",
      navigationTitle: "Tabs",
      elements: [
        this.createItemsMatrixJSON({
          name: this.nameItems
        }),
        this.createItemsMatrixJSON({
          startWithNewLine: false,
          name: this.nameMatrix,
          "descriptionLocation": "underInput",
        }),
        {
          type: "panel",
          name: "panel_tabs_controls",
          elements: [
            {
              type: "dropdown",
              name: this.nameActiveTab,
              title: "Default tab",
              startWithNewLine: false
            }
          ]
        }
      ]
    };
  }
  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel): any {
    let items = model.getValue(this.nameItems);
    if (!Array.isArray(items)) return undefined;
    let activeTabChoices = items.map(i => new ItemValue(i.name, i.title));
    if (Helpers.isArraysEqual(activeTabChoices, creator.getTabNames(), false)) {
      activeTabChoices = undefined;
    }
    let activeTab = model.getValue(this.nameActiveTab);
    if (!activeTabChoices && activeTab === creator.activeTab) {
      activeTab = undefined;
    }
    if (!activeTabChoices && !activeTab) return undefined;
    const val: any = { };
    if (!!activeTabChoices) {
      val.items = activeTabChoices;
    }
    if (!!activeTab) {
      val.activeTab = activeTab;
    }
    return val;
  }

  private getQuestionItems(model: SurveyModel): QuestionMatrixDynamicModel {
    return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameItems);
  }

  public onMatrixRowRemoving(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (options.question.name === this.nameMatrix) {
      this.restoreItems(this.getQuestionItems(model), options.question);
    }
    super.onMatrixRowRemoving(model, creator, options);
  }

  protected isItemsMatrix(question: QuestionMatrixDynamicModel): boolean {
    return question.name === this.nameItems || super.isItemsMatrix(question);
  }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {
    (<QuestionPresetRankingModel>model.getQuestionByName(this.nameItems)).updateModifiedText(locStrs);
  }
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    this.setupPageQuestions(model, creatorSetup.creator);
  }
  private getDefaulTabs(creator: SurveyCreatorModel) {
    return creator.tabbedMenu.actions.map(a => ({ name: a.id, title: a.title, iconName: a.iconName }));
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || {};
    let items = json["items"] || [];
    if (items.length === 0) {
      items = this.getDefaulTabs(creator);
    }
    model.setValue(this.nameItems, items);
    model.setValue(this.nameActiveTab, json["activeTab"] || creator.activeTab);
  }
  protected onLocaleChangedCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.setupPageQuestions(model, creator);
    this.setupQuestionsValueCore(model, json, creator);
  }
  protected setupPageQuestions(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.defaultItems = this.getDefaulTabs(creator);
    const activeQ = model.getQuestionByName(this.nameActiveTab);
    activeQ.choices = this.defaultItems.map(t => new ItemValue(t.name, t.title));
  }
  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {
    if (name === this.nameItems) {
      const val = model.getValue(name) || [];
      model.getQuestionByName(this.nameActiveTab).visible = val.length > 1;
      model.getQuestionByName(this.nameItems).visible = val.length > 1;
    }
  }
  private get nameItems() { return this.path + "_items"; }
  private get nameActiveTab() { return this.path + "_activeTab"; }
}