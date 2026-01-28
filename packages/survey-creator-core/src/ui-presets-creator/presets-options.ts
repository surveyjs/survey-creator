import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { surveyLocalization } from "survey-core";

export class CreatorPresetOptions extends CreatorPresetBase {
  public getPath(): string { return "options"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    const options = this.json || {};
    Object.keys(options).forEach(o => {
      creator[o] = options[o];
    });
  }
}