import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";

export class CreatorPresetPropertyGrid extends CreatorPresetBase {
  public getPath(): string { return "propertyGrid"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    if(this.json["definition"]) {
      creator.setPropertyGridDefinition(this.json["definition"]);
    }
  }
}
