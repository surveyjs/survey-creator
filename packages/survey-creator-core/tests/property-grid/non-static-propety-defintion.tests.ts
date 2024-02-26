import { QuestionTextModel, QuestionDropdownModel, QuestionMatrixDynamicModel, QuestionMatrixDropdownModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { ISurveyPropertyGridDefinition } from "../../src/question-editor/definition";

const defaultProperties : ISurveyPropertyGridDefinition = {
  autoGenerateProperties: false,
  classes: {
    question: {
      properties: [
        "name",
        "title",
        "indent",
        { name: "visibleIf", tab: "logic" },
        { name: "enableIf", tab: "logic" },
      ],
      tabs: [
        { name: "logic", index: 15 }
      ]
    },
    selectbase: {
      tabs: [
        { name: "choices", index: 5 }
      ]
    },
    matrixdropdownbase: {
      tabs: [
        { name: "columns", index: 10 }
      ]
    },
    itemvalue: {
      properties: ["text", "value"]
    },
    "itemvalue[]@choices": {
      properties: ["text", "value", "visibleIf"],
      tabs: [{ name: "general" }]
    },
    matrixdropdowncolumn: {
      properties: ["title", "name"]
    }
  }
};

test("Show values in defintion only", () => {
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question, undefined, defaultProperties);
  const survey = propertyGrid.survey;
  const panels = survey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("logic");
  expect(panels[0].elements).toHaveLength(3);
  expect(panels[1].elements).toHaveLength(2);
});
test("Check choices matrix", () => {
  const question = new QuestionDropdownModel("q1");
  const propertyGrid = new PropertyGridModelTester(question, undefined, defaultProperties);
  const survey = propertyGrid.survey;
  const panels = survey.getAllPanels();
  expect(panels).toHaveLength(3);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("choices");
  expect(panels[2].name).toBe("logic");
  const choicesMatrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("choices");
  expect(choicesMatrix.columns).toHaveLength(2);
  expect(choicesMatrix.columns[0].name).toBe("value");
  expect(choicesMatrix.columns[1].name).toBe("text");
});
test("Check columns matrix", () => {
  const question = new QuestionMatrixDropdownModel("q1");
  const propertyGrid = new PropertyGridModelTester(question, undefined, defaultProperties);
  const survey = propertyGrid.survey;
  const panels = survey.getAllPanels();
  expect(panels).toHaveLength(3);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("columns");
  expect(panels[2].name).toBe("logic");
  const choicesMatrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("columns");
  expect(choicesMatrix.columns).toHaveLength(2);
  expect(choicesMatrix.columns[0].name).toBe("title");
  expect(choicesMatrix.columns[1].name).toBe("name");
});
