import { Helpers, ItemValue, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { SurveyCreatorModel } from "survey-creator-core";
import { PresetItemValue, QuestionPresetRankingModel } from "./preset-question-ranking";

export class CreatorPresetEditableTabs extends CreatorPresetEditableBase {
  public createMainPageCore(): any {
    const namesChoicesVisibleIf = "{" + this.allItems + "} contains {item}";
    return {
      title: "Tabs customization",
      elements: [
        { type: "panel", name: "tabs_main_panel",
          description: "Configure tabs on the Creator page. Select the tabs you want to show. Set up their order, and choose the one that will be active by default at the beginning of work.",
          elements: [
            {
              type: "checkbox",
              title: "Selected tabs",
              name: this.allItems
            },
            {
              type: "presetranking",
              name: this.nameItems,
              choicesVisibleIf: namesChoicesVisibleIf,
              title: "Tab's order",
              startWithNewLine: false
            },
            {
              type: "radiogroup",
              name: this.nameActiveTab,
              choicesVisibleIf: namesChoicesVisibleIf,
              title: "Default tab",
              startWithNewLine: false
            }
          ]
        }
      ] };
  }
  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel): any {
    let items = model.getValue(this.nameItems);
    if(!Array.isArray(items)) return undefined;
    items = [].concat(items);
    if(Helpers.isArraysEqual(items, creator.getTabNames(), false)) {
      items = undefined;
    }
    let activeTab = model.getValue(this.nameActiveTab);
    if(!items && activeTab === creator.activeTab) {
      activeTab = undefined;
    }
    if(!items && !activeTab) return undefined;
    const val: any = { };
    if(!!items) {
      val.items = items;
    }
    if(!!activeTab) {
      val.activeTab = activeTab;
    }
    return val;
  }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {
    (<QuestionPresetRankingModel>model.getQuestionByName(this.nameItems)).updateModifiedText(locStrs);
  }
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    const tabs = creatorSetup.creator.getAvailableTabNames();
    const presetItems: Array<PresetItemValue> = [];
    const allQ = model.getQuestionByName(this.allItems);
    const activeQ = model.getQuestionByName(this.nameActiveTab);
    const selectedQ = model.getQuestionByName(this.nameItems);
    selectedQ.alwaysHasValue = true;
    tabs.forEach(tab => {
      const item = new PresetItemValue(tab);
      item.locText.localizationName = "tabs." + tab;
      presetItems.push(item);
    });
    presetItems.forEach(item => {
      const checkItem = new ItemValue(item.value);
      checkItem.locText.sharedData = item.locText;
      item.locText.onStringChanged.add((sender, options) => {
        checkItem.locText.strChanged();
      });
      allQ.choices.push(checkItem);
      activeQ.choices.push(checkItem);
      selectedQ.choices.push(item);
    });
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || {};
    let items = json["items"] || [];
    if(items.length === 0) {
      items = creator.getTabNames();
    }
    model.setValue(this.allItems, items);
    model.setValue(this.nameItems, items);
    model.setValue(this.nameActiveTab, json["activeTab"] || creator.activeTab);
  }
  private get allItems() { return this.path + "_allItems"; }
  private get nameItems() { return this.path + "_items"; }
  private get nameActiveTab() { return this.path + "_activeTab"; }
}