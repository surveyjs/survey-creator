import {
  PanelModel,
  SurveyModel,
  QuestionHtmlModel,
  ElementFactory,
  QuestionTextModel,
  Serializer,
  QuestionRadiogroupModel,
  QuestionMatrixDropdownModel,
  QuestionMatrixDynamicModel,
} from "survey-core";
import { CreatorBase, ICreatorOptions } from "../src/creator-base";
import { editorLocalization } from "../src/editorLocalization";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions,
} from "../src/settings";

export class CreatorTester extends CreatorBase<SurveyModel> {
  constructor(options: ICreatorOptions = {}) {
    super(options);
  }
  protected createSurveyCore(json: any = {}): SurveyModel {
    return new SurveyModel(json);
  }
  public get selectedElementName(): string {
    if (!this.selectedElement) return "";
    var name = this.selectedElement["name"];
    if (!!name) return name;
    return this.selectedElement.getType();
  }
}

test("options.questionTypes", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }],
  };
  expect(creator.selectedElementName).toEqual("survey");
  expect(creator.isElementSelected(creator.survey)).toBeTruthy();
  var question = creator.survey.getAllQuestions()[0];
  creator.selectElement(question);
  expect(creator.selectedElementName).toEqual("q1");
  expect(creator.isElementSelected(question)).toBeTruthy();
  expect(creator.isElementSelected(creator.survey)).toBeFalsy();
});
