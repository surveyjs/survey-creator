import "./test.scss";
import {  SurveyModel } from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import { TestSurveyTabViewModel } from "./test";

export class TabTestPlugin implements ICreatorPlugin {
  public model: TestSurveyTabViewModel;
  constructor(private creator: CreatorBase<SurveyModel>) {
    creator.addPluginTab("test", this, getLocString("ed.testSurvey"));
  }
  public activate(): void {
    this.model = new TestSurveyTabViewModel(this.creator);
    this.model.onSurveyCreatedCallback = (survey) => {
      this.creator["onTestSurveyCreated"] &&
        this.creator["onTestSurveyCreated"].fire(self, { survey: survey });
    };
    this.update();
  }
  public update(): void {
    if (!this.model) return;
    const options = {
      showPagesInTestSurveyTab: this.creator.showPagesInTestSurveyTab,
      showDefaultLanguageInTestSurveyTab:
        this.creator.showDefaultLanguageInTestSurveyTab,
      showInvisibleElementsInTestSurveyTab:
        this.creator.showInvisibleElementsInTestSurveyTab,
      showSimulatorInTestSurveyTab: this.creator.showSimulatorInTestSurveyTab
    };
    this.model.initialize(this.creator.JSON, options);
    this.model.show();
  }
  public deactivate(): boolean {
    this.model.onSurveyCreatedCallback = undefined;
    this.model = undefined;
    return true;
  }
}
