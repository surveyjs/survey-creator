import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { surveyLocalization } from "survey-core";

export class CreatorPresetLanguages extends CreatorPresetBase {
  public getPath(): string { return "languages"; }
  protected applyEmptyJson(): boolean { return true; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    const locale = this.json?.creator || "";
    const supportedLocales = this.json?.surveyLocales || [];
    const useEnglishNames = this.json?.useEnglishNames;
    creator.locale = locale;
    surveyLocalization.supportedLocales = supportedLocales;
    surveyLocalization.showNamesInEnglish = useEnglishNames === true;
  }
}