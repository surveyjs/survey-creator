import { Question, SurveyModel } from "survey-core";
import { CreatorPresetBase, CreatorPresetEditableBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";

export class CreatorPresetEditableTabs extends CreatorPresetEditableBase {
  public createMainPageCore(): any {
    const nameShow = this.nameShow;
    const visibleIf = this.getBoolVisibleIf(nameShow);
    return {
      elements: [
        {
          type: "boolean",
          name: nameShow,
        },
        {
          name: this.nameItems,
          type: "ranking",
          selectToRankEnabled: true,
          minSelectedChoices: 1,
          selectToRankAreasLayout: "vertical",
          visibleIf: visibleIf
        },
        {
          name: this.nameActiveTab,
          type: "dropdown",
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
  protected setupQuestionsCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    const q = model.getQuestionByName(this.nameItems);
    if (q) {
      q.choices = creator.getAvailableTabNames();
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

export class CreatorPresetTabs extends CreatorPresetBase {
  public getPath(): string { return "tabs"; }
  public createEditable(): CreatorPresetEditableBase { return new CreatorPresetEditableTabs(this); }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    this.applyTabs(creator, this.json["items"]);
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