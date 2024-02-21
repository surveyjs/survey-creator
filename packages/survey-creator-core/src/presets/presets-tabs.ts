import { Question, ComponentCollection } from "survey-core";
import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";

const comp_json = {
  name: "editpreset_tabs",
  showInToolbox: false,
  internal: true,
  elementsJSON: [
    {
      name: "items",
      type: "ranking",
      selectToRankEnabled: true,
      minSelectedChoices: 1,
      selectToRankAreasLayout: "vertical"
    },
    {
      name: "activeTab",
      type: "dropdown",
      choicesFromQuestion: "items",
      choicesFromQuestionMode: "selected",
    }
  ]
};

export class CreatorPresetTabs extends CreatorPresetBase {
  public getPath(): string { return "tabs"; }
  getEditableQuestionJson(): any {
    if (!ComponentCollection.Instance.getCustomQuestionByName(comp_json.name)) {
      ComponentCollection.Instance.add(comp_json as any);
    }
    return { type: comp_json.name };
  }
  setupEditableQuestion(question: Question, creator: SurveyCreatorModel): void {
    const itemsQuestion = question.contentPanel.getQuestionByName("items");
    if (itemsQuestion) {
      itemsQuestion.choices = creator.getAvailableTabNames();
    }
  }
  setupEditableQuestionValue(question: Question, creator: SurveyCreatorModel): void {
    const itemsQuestion = question.contentPanel.getQuestionByName("items");
    if (itemsQuestion && itemsQuestion.isEmpty()) {
      itemsQuestion.value = creator.getTabNames();
    }
  }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    if (this.json["items"]) {
      this.applyTabs(creator, this.json["items"]);
    }
    const tab = this.json.activeTab;
    if (tab) {
      creator.activeTab = tab === "preview" ? "test" : tab;
    }
  }
  private applyTabs(creator: SurveyCreatorModel, items: Array<string>): void {
    if (!Array.isArray(items)) return;
    creator.setTabs(items);
  }
}