import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { surveyLocalization } from "survey-core";

export class CreatorPresetLanguages extends CreatorPresetBase {
  public getPath(): string { return "languages"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    const locale = this.json?.creator || "";
    //const defaultLocale = this.json?.defaultSurveyLocale || "";
    const supportedLocales = this.json?.surveyLocales || [];
    const useEnglishNames = this.json?.useEnglishNames;
    creator.locale = locale;
    //creator.survey.locale = defaultLocale;
    surveyLocalization.supportedLocales = supportedLocales;
    surveyLocalization.showNamesInEnglish = useEnglishNames === true;
  }
}