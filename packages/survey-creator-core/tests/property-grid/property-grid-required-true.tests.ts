import { MatrixDropdownColumn, PanelModel, QuestionBooleanModel, QuestionMatrixDynamicModel, QuestionTextModel, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { CreatorTester } from "../creator-tester";
import { UIPreset } from "../../src/ui-presets-creator/presets";
import { Advanced, Basic } from "../../src/ui-presets";

// Names of the editors in the panel that holds isRequired, without the helper elements the grid adds
// for an overriding property ("isRequired_overridingProperty").
function getGeneralNames(survey: SurveyModel): Array<string> {
  const panel = <PanelModel>survey.getQuestionByName("isRequired").parent;
  return panel.elements.map(el => el.name).filter(name => name.indexOf("_overridingProperty") < 0);
}
function expectRequiredTrueAfterIsRequired(names: Array<string>): void {
  const index = names.indexOf("isRequired");
  expect(index).toBeGreaterThan(-1);
  expect(names[index + 1]).toBe("requiredTrue");
}

describe("boolean requiredTrue in the property grid, library#12241", () => {
  test("the editor follows isRequired and shows its title and help text", () => {
    const question = new QuestionBooleanModel("q1");
    const propertyGrid = new PropertyGridModelTester(question);
    expectRequiredTrueAfterIsRequired(getGeneralNames(propertyGrid.survey));
    const editor = propertyGrid.survey.getQuestionByName("requiredTrue");
    expect(editor.title).toBe("Accept only a positive answer");
    expect(editor.description).toBe("Select to treat a negative answer as unanswered, so respondents must select \"Yes\" (or check the checkbox) to proceed. For example, use it to require consent to terms and conditions. Applies only when the question is required.");
  });
  test("the editor is visible only while the question can be required", () => {
    const question = new QuestionBooleanModel("q1");
    const propertyGrid = new PropertyGridModelTester(question);
    const editor = propertyGrid.survey.getQuestionByName("requiredTrue");
    expect(editor.isVisible, "not required").toBe(false);
    propertyGrid.survey.getQuestionByName("isRequired").value = true;
    expect(editor.isVisible, "isRequired").toBe(true);
    editor.value = true;
    expect(question.requiredTrue).toBe(true);
    propertyGrid.survey.getQuestionByName("isRequired").value = false;
    expect(editor.isVisible, "isRequired is off").toBe(false);
    question.requiredIf = "{q2} = 1";
    expect(editor.isVisible, "requiredIf").toBe(true);
  });
  test("a non-boolean question has no requiredTrue editor", () => {
    const propertyGrid = new PropertyGridModelTester(new QuestionTextModel("q1"));
    expect(propertyGrid.survey.getQuestionByName("requiredTrue")).toBeFalsy();
  });
  test("a boolean matrix column gets the editor after isRequired, a text column does not", () => {
    const matrix = new QuestionMatrixDynamicModel("m1");
    const boolColumn = matrix.addColumn("c1");
    boolColumn.cellType = "boolean";
    const textColumn = matrix.addColumn("c2");
    textColumn.cellType = "text";
    let propertyGrid = new PropertyGridModelTester(boolColumn);
    expectRequiredTrueAfterIsRequired(getGeneralNames(propertyGrid.survey));
    const editor = propertyGrid.survey.getQuestionByName("requiredTrue");
    expect(editor.isVisible, "not required").toBe(false);
    boolColumn.isRequired = true;
    expect(editor.isVisible, "isRequired").toBe(true);
    editor.value = true;
    expect((<any>boolColumn).requiredTrue).toBe(true);
    propertyGrid = new PropertyGridModelTester(textColumn);
    expect(propertyGrid.survey.getQuestionByName("requiredTrue")).toBeFalsy();
  });
  test("a column with no cellType in a boolean matrix gets the editor too", () => {
    const matrix = new QuestionMatrixDynamicModel("m1");
    matrix.cellType = "boolean";
    const column = <MatrixDropdownColumn>matrix.addColumn("c1");
    const propertyGrid = new PropertyGridModelTester(column);
    expectRequiredTrueAfterIsRequired(getGeneralNames(propertyGrid.survey));
  });
  [{ name: "basic", preset: Basic }, { name: "advanced", preset: Advanced }].forEach(item => {
    test("the " + item.name + " preset shows the editor after isRequired", () => {
      const creator = new CreatorTester();
      new UIPreset(item.preset as any).apply(creator);
      creator.JSON = { elements: [{ type: "boolean", name: "q1", isRequired: true }] };
      creator.selectElement(creator.survey.getQuestionByName("q1"));
      expectRequiredTrueAfterIsRequired(getGeneralNames(creator.propertyGrid));
      expect(creator.propertyGrid.getQuestionByName("requiredTrue").isVisible).toBe(true);
    });
  });
  test("the advanced preset shows the editor after isRequired for a boolean column", () => {
    const creator = new CreatorTester();
    new UIPreset(Advanced as any).apply(creator);
    creator.JSON = { elements: [{ type: "matrixdynamic", name: "m1", columns: [{ name: "c1", cellType: "boolean" }] }] };
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("m1");
    creator.selectElement(matrix.columns[0]);
    expectRequiredTrueAfterIsRequired(getGeneralNames(creator.propertyGrid));
  });
});
