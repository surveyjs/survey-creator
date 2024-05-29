import { ItemValue, Question, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase } from "./presets-editable-base";
import { SurveyCreatorModel } from "../../creator-base";
import { editorLocalization } from "../../editorLocalization";
import { PresetItemValue, QuestionPresetRankingModel } from "./preset-question-ranking";

export class CreatorPresetEditableTabs extends CreatorPresetEditableBase {
  public createMainPageCore(): any {
    const nameShow = this.nameShow;
    const visibleIf = this.getBoolVisibleIf(nameShow);
    return {
      title: "Tabs customization",
      elements: [
        {
          type: "boolean",
          name: nameShow,
          title: "Do you want to setup Creator tabs?",
        },
        {
          type: "presetranking",
          name: this.nameItems,
          title: "Please order the Creator tabs",
          selectToRankEnabled: true,
          minSelectedChoices: 1,
          selectToRankAreasLayout: "vertical",
          visibleIf: visibleIf
        },
        {
          type: "dropdown",
          name: this.nameActiveTab,
          title: "Select the default active tab (the first tab is active if this field is empty)",
          choicesFromQuestion: this.nameItems,
          choicesFromQuestionMode: "selected",
          visibleIf: visibleIf
        }
      ]
    };
  }
  protected getJsonValueCore(model: SurveyModel): any {
    if(!model.getValue(this.nameShow)) return undefined;
    const items = model.getValue(this.nameItems);
    if(!Array.isArray(items)) return undefined;
    const val: any = { items: items };
    const activeTab = model.getValue(this.nameActiveTab);
    if(activeTab) {
      val.activeTab = activeTab;
    }
    return val;
  }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {
    const question = <QuestionPresetRankingModel>model.getQuestionByName(this.nameItems);
    if(!question.isVisible) return;
    question.choices.forEach(item => {
      <PresetItemValue>(item).updateModifiedText(locStrs);
    });
  }
  protected setupQuestionsCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    const q = model.getQuestionByName(this.nameItems);
    if (q) {
      creator.getAvailableTabNames().forEach(tab => {
        const item = new PresetItemValue(tab);
        item.locTitle.localizationName = "tabs." + tab;
        q.choices.push(item);
      });
    }
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || {};
    const items = json["items"] || [];
    model.setValue(this.nameShow, items.length > 0);
    model.setValue(this.nameItems, items.length > 0 ? items : creator.getTabNames());
    model.setValue(this.nameActiveTab, json["activeTab"] || creator.activeTab);
  }
  private get nameShow() { return this.path + "_show"; }
  private get nameItems() { return this.path + "_items"; }
  private get nameActiveTab() { return this.path + "_activeTab"; }
}