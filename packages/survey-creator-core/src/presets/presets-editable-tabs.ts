import { Helpers, ItemValue, QuestionMatrixDynamicModel, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { SurveyCreatorModel, editorLocalization, getLocString } from "survey-creator-core";
import { CreatorPresetEditableList } from "./presets-editable-list";

export class CreatorPresetEditableTabs extends CreatorPresetEditableList {
  private createItemsMatrixJSON(props: any): any {
    const defaultJSON = {
      type: "matrixdynamic",
      name: "items",
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
        }
      ],
      detailPanelMode: "underRow",
      detailElements: [
        { type: "text", name: "name", title: getLocString("presets.tabs.name"), isUnique: true, isRequired: true, readOnly: true, visible: false },
        { type: "text", name: "title", title: getLocString("presets.tabs.titleField"), visible: false },
        { type: "dropdown", name: "iconName", title: getLocString("presets.tabs.iconName"), itemComponent: "svc-presets-icon-item", "allowCustomChoices": true, choices: this.iconList, visible: false }
      ]
    };
    return { ...defaultJSON, ...props };
  }
  public createMainPageCore(): any {
    return {
      title: getLocString("presets.tabs.title"),
      description: getLocString("presets.tabs.description"),
      navigationTitle: getLocString("presets.tabs.navigationTitle"),
      elements: [
        {
          type: "panel",
          name: this.mainPanelName,
          elements: [
            this.createItemsMatrixJSON({
              title: getLocString("presets.tabs.items"),
              noRowsText: getLocString("presets.tabs.noItemsText"),
              name: this.nameItems
            }),
            this.createItemsMatrixJSON({
              startWithNewLine: false,
              title: getLocString("presets.tabs.hiddenItems"),
              noRowsText: getLocString("presets.tabs.noHiddenItemsText"),
              name: this.nameMatrix,
              descriptionLocation: "underInput",
            }),
          ]
        },
        {
          type: "panel",
          name: "panel_tabs_controls",
          elements: [
            {
              type: "dropdown",
              name: this.nameActiveTab,
              allowClear: false,
              title: getLocString("presets.tabs.defaultTab")
            }
          ]
        },
        {
          type: "panel",
          title: " ",
          name: this.navigationPanelName,
          elements: [
            {
              type: "html",
              html: "&nbsp"
            }
          ]
        }
      ]
    };
  }

  public get questionNames() {
    return [this.nameItems, this.nameActiveTab];
  }

  private filterTabs(tabs: any) {
    return tabs.filter(t => t.name != "presets");
  }
  protected hasIcon(name: string) { return true; }
  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel, defaultJson: any): any {
    let items = model.getQuestionByName(this.nameItems).value;
    if (!Array.isArray(items)) return undefined;
    const creatorDefaultTabs = this.filterTabs(defaultJson?.items || creator.getTabs());
    const creatorAvailableTabs = this.filterTabs(creator.getAvailableTabs());
    let activeTabChoices = items.map(i => ({ name: i.name, iconName: i.iconName }));
    activeTabChoices.forEach(i => {
      if (!i.iconName || i.iconName == creatorAvailableTabs.filter(t => t.name == i.name)[0]?.iconName) {
        delete i.iconName;
      }
    });
    if (Helpers.isArraysEqual(activeTabChoices, creatorDefaultTabs, false)) {
      activeTabChoices = undefined;
    }
    let activeTab = model.getValue(this.nameActiveTab);
    if (!activeTabChoices && activeTab === (defaultJson?.activeTab || creator.activeTab)) {
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

  protected getDefaultJsonValueCore(creator: SurveyCreatorModel): any {
    return {
      activeTab: creator.activeTab,
      items: this.filterTabs(creator.getTabs()).map(i => ({ name: i.name })),
    };
  }

  private getQuestionItems(model: SurveyModel): QuestionMatrixDynamicModel {
    return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameItems);
  }

  public onMatrixRowRemoving(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (options.question.name === this.nameMatrix) {
      this.restoreItems(this.getQuestionItems(model), options.question, options.rowIndex);
    }
    super.onMatrixRowRemoving(model, creator, options);
  }

  protected isItemsMatrix(name: string): boolean {
    return name === this.nameItems || super.isItemsMatrix(name);
  }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {
    const rows = this.getQuestionItems(model).visibleRows;
    rows.forEach(r => {
      CreatorPresetEditableBase.updateModifiedText(locStrs, r.getValue("title"), "tabs." + r.getValue("name"));
    });
  }
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    this.setupPageQuestions(model, creatorSetup.creator);
  }

  private getAllTabs(creator: SurveyCreatorModel) {
    return this.filterTabs(creator.getAvailableTabs().map(t => ({ name: t.name, title: editorLocalization.getString("tabs." + t.name), iconName: t.iconName })));
  }

  protected setupOnCurrentPageCore(model: SurveyModel, creator: SurveyCreatorModel, active: boolean): void {
    creator.tabs.forEach(i => i.enabled = active);
  }

  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || {};
    let items = (json["items"] || []).map(i => typeof i === "string" ? { name: i } : i);
    const tabNames = creator.initialTabs();
    const allTabs = this.getAllTabs(creator);
    const defaultItems = allTabs.filter(t => tabNames.indexOf(t.name) >= 0);
    if (items.length === 0) {
      items = defaultItems;
    } else {
      for (let i = 0; i < items.length; i++) {
        const defaultItem = defaultItems.filter(di => di.name == items[i].name)[0];
        if (defaultItem) {
          items[i] = { ...defaultItem, ...items[i] };
        }
      }
    }
    const itemNames = items.map(i => i.name);
    const hiddenItems = allTabs.filter(t => itemNames.indexOf(t.name) < 0);
    model.setValue(this.nameItems, items);
    model.setValue(this.nameMatrix, hiddenItems);
    model.setValue(this.nameActiveTab, json["activeTab"] || creator.activeTab);
    model.getQuestionByName(this.nameActiveTab).choices = items.map(v => new ItemValue(v.name, v.title));
  }
  protected onLocaleChangedCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.setupPageQuestions(model, creator);
    this.setupQuestionsValueCore(model, json, creator);
  }
  protected setupPageQuestions(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.defaultItems = this.getAllTabs(creator);
    const activeQ = model.getQuestionByName(this.nameActiveTab);
    activeQ.choices = this.defaultItems.map(t => new ItemValue(t.name, t.title));
  }
  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {
    super.updateOnValueChangedCore(model, name);
    if (name === this.nameItems) {
      const val = model.getValue(name) || [];
      const activeTabQuestion = model.getQuestionByName(this.nameActiveTab);
      activeTabQuestion.choices = val.map(v => new ItemValue(v.name, v.title));
      if (!activeTabQuestion.selectedItem) {
        activeTabQuestion.selectItem(activeTabQuestion.choices[0]);
      }
    }
  }
  private get nameActiveTab() { return this.path + "_activeTab"; }
}