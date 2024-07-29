import { ICreatorPreset, CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";

export class CreatorPresetPropertyGridDefinition extends CreatorPresetBase {
  public getPath(): string { return "definition"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    creator.setPropertyGridDefinition(this.json);
  }
}

export class CreatorPresetPropertyGrid extends CreatorPresetBase {
  public getPath(): string { return "propertyGrid"; }
  protected createPresets(): Array<ICreatorPreset> {
    return [new CreatorPresetPropertyGridDefinition()];
  }
}
