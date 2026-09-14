import { SurveyCreatorModel } from "../../creator-base";
import { PreviewViewModel } from "./preview";
import { VariablePresetsManager } from "../../variable-presets";
import "./test.scss";

export class TestSurveyTabViewModel extends PreviewViewModel {
  constructor(surveyProvider: SurveyCreatorModel, startThemeClasses: any, variablePresets?: VariablePresetsManager) {
    super(surveyProvider, startThemeClasses, variablePresets);
  }

  protected getTabName(): string {
    return "preview";
  }
  protected getShowResults() {
    return this.surveyProvider.previewShowResults && !this.isRunning && !this.isMobileView;
  }
}
