import { Base, SurveyModel, Action, ComputedUpdater, CurrentPageChangedEvent, PageVisibleChangedEvent, QuestionDropdownModel, ActionContainer } from "survey-core";
import { ICreatorPlugin, SurveyCreatorModel } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";

export class TabPresetsPlugin implements ICreatorPlugin {
  public model: CreatorPresetEditorModel | undefined;
  public static iconName = "icon-settings";
  constructor(private creator: SurveyCreatorModel) {
    creator.addTab({ name: "presets", plugin: this, iconName: TabPresetsPlugin.iconName });
  }

  public activate(): void {
    this.model = new CreatorPresetEditorModel();
  }

  public deactivate(): boolean {
    if (this.model) {
      this.model.dispose();
    }
    this.model = undefined;
    return true;
  }
}