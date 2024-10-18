import { ITheme } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { PreviewViewModel } from "./preview";

export class ThemeTabViewModel extends PreviewViewModel {
  constructor(surveyProvider: SurveyCreatorModel, startThemeClasses: any) {
    super(surveyProvider, startThemeClasses);
  }
  public get currentTheme(): ITheme {
    return this.surveyProvider.theme;
  }
  public get currentThemeCssVariables(): { [index: string]: string } {
    return this.currentTheme.cssVariables || {};
  }
  protected getTabName(): string { return "theme"; }
}