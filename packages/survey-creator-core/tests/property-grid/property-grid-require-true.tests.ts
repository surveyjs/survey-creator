import { MatrixDropdownColumn, PanelModel, QuestionBooleanModel, QuestionMatrixDynamicModel, QuestionTextModel, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { CreatorTester } from "../creator-tester";
import { UIPreset } from "../../src/ui-presets-creator/presets";
import { Advanced, Basic } from "../../src/ui-presets";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { TranslationGroup, TranslationItem } from "../../src/components/tabs/translation-base";

const requireTrueText = "You must select Yes to continue.";

// Names of the editors in the panel that holds isRequired, without the helper elements the grid adds
// for an overriding property ("isRequired_overridingProperty").
function getGeneralNames(survey: SurveyModel): Array<string> {
  const panel = <PanelModel>survey.getQuestionByName("isRequired").parent;
  return panel.elements.map(el => el.name).filter(name => name.indexOf("_overridingProperty") < 0);
}
function expectRequireTrueAfterIsRequired(names: Array<string>): void {
  const index = names.indexOf("isRequired");
  expect(index).toBeGreaterThan(-1);
  expect(names[index + 1]).toBe("requireTrue");
}
// requireTrueErrorText sits in the Validation category, right after requiredErrorText.
function expectErrorTextInValidation(survey: SurveyModel): void {
  const editor = survey.getQuestionByName("requireTrueErrorText");
  expect(!!editor, "requireTrueErrorText editor").toBe(true);
  expect(editor.title).toBe("Error message when Yes is required");
  const panel = <PanelModel>editor.parent;
  expect(panel.name).toBe("validation");
  const names = panel.elements.map(el => el.name);
  expect(names.indexOf("requireTrueErrorText")).toBe(names.indexOf("requiredErrorText") + 1);
}

describe("boolean requireTrue in the property grid, library#12241", () => {
  test("the editor follows isRequired, has its title and no description", () => {
    const question = new QuestionBooleanModel("q1");
    const propertyGrid = new PropertyGridModelTester(question);
    expectRequireTrueAfterIsRequired(getGeneralNames(propertyGrid.survey));
    const editor = propertyGrid.survey.getQuestionByName("requireTrue");
    expect(editor.title).toBe("Require a positive answer");
    expect(editor.description).toBeFalsy();
  });
  test("the editor is visible on a question that is not required", () => {
    const question = new QuestionBooleanModel("q1");
    const propertyGrid = new PropertyGridModelTester(question);
    const editor = propertyGrid.survey.getQuestionByName("requireTrue");
    expect(question.isRequired).toBe(false);
    expect(editor.isVisible, "not required").toBe(true);
    editor.value = true;
    expect(question.requireTrue).toBe(true);
    propertyGrid.survey.getQuestionByName("isRequired").value = true;
    expect(editor.isVisible, "isRequired").toBe(true);
    propertyGrid.survey.getQuestionByName("isRequired").value = false;
    expect(editor.isVisible, "isRequired is off").toBe(true);
  });
  test("requireTrueErrorText of a boolean question: in Validation after requiredErrorText, edits the question", () => {
    const question = new QuestionBooleanModel("q1");
    const propertyGrid = new PropertyGridModelTester(question);
    expectErrorTextInValidation(propertyGrid.survey);
    propertyGrid.survey.getQuestionByName("requireTrueErrorText").value = "Agree first";
    expect(question.requireTrueErrorText).toBe("Agree first");
  });
  test("a text question has neither editor", () => {
    const propertyGrid = new PropertyGridModelTester(new QuestionTextModel("q1"));
    expect(!!propertyGrid.survey.getQuestionByName("requireTrue")).toBe(false);
    expect(!!propertyGrid.survey.getQuestionByName("requireTrueErrorText")).toBe(false);
    expect(!!propertyGrid.survey.getQuestionByName("requiredErrorText")).toBe(true);
  });
  test("a boolean matrix column gets both editors, a text column does not", () => {
    const matrix = new QuestionMatrixDynamicModel("m1");
    const boolColumn = matrix.addColumn("c1");
    boolColumn.cellType = "boolean";
    const textColumn = matrix.addColumn("c2");
    textColumn.cellType = "text";
    let propertyGrid = new PropertyGridModelTester(boolColumn);
    expectRequireTrueAfterIsRequired(getGeneralNames(propertyGrid.survey));
    const editor = propertyGrid.survey.getQuestionByName("requireTrue");
    expect(editor.isVisible, "not required").toBe(true);
    editor.value = true;
    expect((<any>boolColumn).requireTrue).toBe(true);
    expectErrorTextInValidation(propertyGrid.survey);
    propertyGrid.survey.getQuestionByName("requireTrueErrorText").value = "Agree first";
    expect((<any>boolColumn).requireTrueErrorText).toBe("Agree first");
    propertyGrid = new PropertyGridModelTester(textColumn);
    expect(!!propertyGrid.survey.getQuestionByName("requireTrue")).toBe(false);
    expect(!!propertyGrid.survey.getQuestionByName("requireTrueErrorText")).toBe(false);
  });
  test("a column with no cellType in a boolean matrix gets both editors too", () => {
    const matrix = new QuestionMatrixDynamicModel("m1");
    matrix.cellType = "boolean";
    const column = <MatrixDropdownColumn>matrix.addColumn("c1");
    const propertyGrid = new PropertyGridModelTester(column);
    expectRequireTrueAfterIsRequired(getGeneralNames(propertyGrid.survey));
    expectErrorTextInValidation(propertyGrid.survey);
    propertyGrid.survey.getQuestionByName("requireTrueErrorText").value = "Agree first";
    expect((<any>column).requireTrueErrorText).toBe("Agree first");
  });
  test("translation tab: requireTrueErrorText shows the survey-core default", () => {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "boolean", name: "q1", requireTrue: true }] };
    const tabTranslation = new TabTranslationPlugin(creator);
    tabTranslation.activate();
    const translation = tabTranslation.model;
    translation.showAllStrings = true;
    translation.reset();
    const findItem = (group: TranslationGroup): TranslationItem => {
      const own = group.locItems.filter(item => item.name === "requireTrueErrorText" && item.context.name === "q1")[0];
      if (!!own) return own;
      for (const child of group.groups) {
        const res = findItem(child);
        if (!!res) return res;
      }
      return undefined;
    };
    const item = findItem(translation.root);
    expect(!!item, "requireTrueErrorText translation item").toBe(true);
    expect(item.getLocalizationText("")).toBe(requireTrueText);
    expect(item.getSourceText("")).toBe(requireTrueText);
    expect(item.getPlaceholder("", true)).toBe(requireTrueText);
  });
  [{ name: "basic", preset: Basic }, { name: "advanced", preset: Advanced }].forEach(item => {
    test("the " + item.name + " preset shows requireTrue after isRequired and hides both error texts", () => {
      const creator = new CreatorTester();
      new UIPreset(item.preset as any).apply(creator);
      creator.JSON = { elements: [{ type: "boolean", name: "q1" }] };
      creator.selectElement(creator.survey.getQuestionByName("q1"));
      expectRequireTrueAfterIsRequired(getGeneralNames(creator.propertyGrid));
      expect(creator.propertyGrid.getQuestionByName("requireTrue").isVisible).toBe(true);
      // the preset hides requiredErrorText, so it hides requireTrueErrorText too
      expect(!!creator.propertyGrid.getQuestionByName("requiredErrorText")).toBe(false);
      expect(!!creator.propertyGrid.getQuestionByName("requireTrueErrorText")).toBe(false);
    });
  });
  test("the advanced preset shows requireTrue after isRequired for a boolean column and hides both error texts", () => {
    const creator = new CreatorTester();
    new UIPreset(Advanced as any).apply(creator);
    creator.JSON = { elements: [{ type: "matrixdynamic", name: "m1", columns: [{ name: "c1", cellType: "boolean" }] }] };
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("m1");
    creator.selectElement(matrix.columns[0]);
    expectRequireTrueAfterIsRequired(getGeneralNames(creator.propertyGrid));
    expect(!!creator.propertyGrid.getQuestionByName("requiredErrorText")).toBe(false);
    expect(!!creator.propertyGrid.getQuestionByName("requireTrueErrorText")).toBe(false);
  });
});
