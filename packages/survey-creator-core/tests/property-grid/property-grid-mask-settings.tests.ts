import { QuestionTextModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";

export * from "../../src/property-grid/maskSettings";

test("Mask settings updated if change mask type", () => {
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const masksettingsQuestion = (propertyGrid.survey.getQuestionByName("maskSettings"));
  expect(masksettingsQuestion).toBeTruthy();

  const panel = masksettingsQuestion.contentPanel;
  expect(panel.elements.map(e => e.name)).toStrictEqual(["saveMaskedValue", "preview"]);

  question.maskType = "datetime";
  expect(panel.elements.map(e => e.name)).toStrictEqual(["pattern", "min", "max", "saveMaskedValue", "preview"]);

  question.maskType = "currency";
  expect(panel.elements.map(e => e.name)).toStrictEqual([
    "prefix",
    "suffix",
    "min",
    "max",
    "precision",
    "decimalSeparator",
    "thousandsSeparator",
    "allowNegativeValues",
    "saveMaskedValue",
    "preview"]);

  question.maskType = "none";
  expect(panel.elements.map(e => e.name)).toStrictEqual(["saveMaskedValue", "preview"]);
});

test("Mask settings DateTime Min/max input types", () => {
  const question = new QuestionTextModel("q1");
  question.fromJSON({
    "maskType": "datetime",
    "maskSettings": {
      "pattern": "mm/dd/yyyy HH:MM"
    }
  });

  const propertyGrid = new PropertyGridModelTester(question);
  const masksettingsQuestion = (propertyGrid.survey.getQuestionByName("maskSettings"));
  expect(masksettingsQuestion).toBeTruthy();

  const panel = masksettingsQuestion.contentPanel;
  const patternQuestion = panel.getQuestionByName("pattern");
  const minQuestion = panel.getQuestionByName("min");
  const maxQuestion = panel.getQuestionByName("max");
  expect(patternQuestion.value).toBe("mm/dd/yyyy HH:MM");
  expect(minQuestion.inputType).toBe("datetime-local");
  expect(maxQuestion.inputType).toBe("datetime-local");

  patternQuestion.value = "mm/dd/yyyy";
  expect(minQuestion.inputType).toBe("date");
  expect(maxQuestion.inputType).toBe("date");

  patternQuestion.value = "HH:MM";
  expect(minQuestion.inputType).toBe("time");
  expect(maxQuestion.inputType).toBe("time");

  patternQuestion.value = "hh:MM tt";
  expect(minQuestion.inputType).toBe("time");
  expect(maxQuestion.inputType).toBe("time");
});
