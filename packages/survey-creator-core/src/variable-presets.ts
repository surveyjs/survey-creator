import { Base, ISurveyVariablePreset, property } from "survey-core";
import { SurveyCreatorModel } from "./creator-base";
import { VariablePresetsEditor } from "./variable-presets-editor";

// The Preview tab's state over the host application's variables (issue #7982). The container and
// the survey-core companion over it live on the creator model (creator.variablePresets and
// creator.variablePresetsModel) because the condition editor reads the definition too; what only
// Preview needs - which preset is being run, and the editing of presets - lives here, on the
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
  // The three gates a host sets on this object rather than in the creator options: the option
  // `variablePresets` is core's ISurveyVariablePresets, shared verbatim with the tester and the
  // linter, and a permission is a Creator concern that must not enter the host's document. They
  // are the defaults the per-preset event receives; a host that needs nothing finer never
  // subscribes to it.
  @property({ defaultValue: true }) allowEdit: boolean;
  @property({ defaultValue: true }) allowAdd: boolean;
  @property({ defaultValue: true }) allowDelete: boolean;
  // The or of the three, not the and: "your own presets, but the shipped ones are fixed" is a real
  // configuration once the per-preset event narrows allowEdit. creator.readOnly overrides all of
  // them, and without a definition there is no form to show at all.
  public get canEdit(): boolean {
    if (!this.creator || this.creator.readOnly) return false;
    if (!this.creator.variablePresetsModel.hasDefinition) return false;
    return this.allowEdit || this.allowAdd || this.allowDelete;
  }
  // The only place creator.onVariablePresetEditing is raised: the editor asks this and never fires
  // the event itself, so that there is one way to make the call.
  public getPresetOperations(preset: ISurveyVariablePreset): { allowEdit: boolean, allowDelete: boolean } {
    const res = { allowEdit: this.allowEdit, allowDelete: this.allowDelete };
    if (!this.creator) return res;
    const options = { preset: preset, allowEdit: res.allowEdit, allowDelete: res.allowDelete };
    this.creator.onVariablePresetEditing.fire(this.creator, options);
    res.allowEdit = options.allowEdit;
    res.allowDelete = options.allowDelete;
    return res;
  }
  // Public so that a host can put the editor behind its own button. Without a definition there is
  // nothing to build a form from - the read-only JSON view in the Preview toolbar is the honest
  // answer there - and with one the dialog opens even when nothing may be changed: it is then
  // shown in display mode throughout, which is still the structured view and not raw JSON.
  public showEditor(): void {
    if (!this.creator || !this.creator.variablePresetsModel.hasDefinition) return;
    new VariablePresetsEditor(this.creator, this).showDialog();
  }
  // The only writer of the container in the whole repository; everything else reads it.
  public setPresets(presets: Array<ISurveyVariablePreset>, activeName?: string): void {
    const container = this.creator?.variablePresets;
    // There is always a container to write into when the editor could open: the editor needs a
    // definition and a definition lives in the container. A missing one is a no-op, never a new
    // container - the creator holds the host's object and must not invent one.
    if (!container) return;
    // In place, on the host's own object: a host that persists it in onVariablePresetsChanged
    // serializes that same object, and a host that kept its own pointer would silently break if
    // this replaced the container. The definition is never touched.
    container.presets = presets;
    // No companion reset. SurveyVariablePresets reads source.presets on every call, so the new list
    // is visible at once, and re-assigning creator.variablePresets - whose setter does reset - would
    // only throw the definition model away and rebuild it for nothing.
    const name = !!activeName && !!this.creator.variablePresetsModel.getPreset(activeName) ? activeName : "";
    // Written directly rather than through the setter: that one raises "select", and an edit is one
    // event and not two.
    this.setPropertyValue("active", name);
    this.raiseChanged("edit");
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
