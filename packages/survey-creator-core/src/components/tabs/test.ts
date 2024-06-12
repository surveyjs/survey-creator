import { SurveyCreatorModel } from "../../creator-base";
import { PreviewViewModel } from "./preview";
require("./test.scss");

export class TestSurveyTabViewModel extends PreviewViewModel {
  constructor(surveyProvider: SurveyCreatorModel, startThemeClasses: any) {
    super(surveyProvider, startThemeClasses);
  }

  protected getTabName(): string {
    return "test";
  }
  protected getShowResults() {
    return this.surveyProvider.previewShowResults && !this.isRunning && !this.isMobileView;
  }
}
