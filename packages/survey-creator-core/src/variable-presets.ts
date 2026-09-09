import { Base } from "survey-core";
import { SurveyCreatorModel } from "./creator-base";

// The Preview tab's state over the host application's variables (issue #7982). The container and
// the survey-core companion over it live on the creator model (creator.variablePresets and
// creator.variablePresetsModel) because the condition editor reads the definition too; what only
// Preview needs - which preset is being run, and later the editing of presets - lives here, on the
// Preview plugin, so that the creator model carries the read side of the feature and nothing else.
export class VariablePresetsManager extends Base {
  constructor(private creator: SurveyCreatorModel) {
    super();
  }
  // The name of the preset Preview runs with, "" when none is chosen. There is no implicit first
  // preset: a survey that behaves differently with no variables at all is exactly what a Creator
  // user needs to be able to test. A name the container no longer has reads back as "": a host
  // that replaces the container is not asked to re-point the selection, and Preview must never
  // announce a preset that resolves to no values at all.
  public get active(): string {
    const name = this.getPropertyValue("active", "");
    if (!name || !this.creator) return "";
    return !!this.creator.variablePresetsModel.getPreset(name) ? name : "";
  }
  public set active(val: string) {
    val = val || "";
    if (this.getPropertyValue("active", "") === val) return;
    this.setPropertyValue("active", val);
    this.raiseChanged("select");
  }
  // The active preset's values as the host wrote them: no copy and no conversion. Every consumer
  // copies before it hands them to a survey.
  public get activeVariables(): { [name: string]: any } {
    if (!this.creator) return {};
    return this.creator.variablePresetsModel.getPreset(this.active)?.variables || {};
  }
  private raiseChanged(reason: string): void {
    if (!this.creator) return;
    this.creator.onVariablePresetsChanged.fire(this.creator, {
      reason: reason,
      variablePresets: this.creator.variablePresets,
      active: this.active
    });
  }
  public dispose(): void {
    this.creator = undefined;
    super.dispose();
  }
}
