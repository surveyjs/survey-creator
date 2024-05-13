import { QuestionTextModel, QuestionDropdownModel, QuestionMatrixDynamicModel, QuestionMatrixDropdownModel, Helpers, Serializer } from "survey-core";
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
test("Update propertyGridDefintion", () => {
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question, undefined, defaultProperties);
  let survey = propertyGrid.survey;
  let panels = survey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("logic");
  expect(panels[0].elements).toHaveLength(3);
  expect(panels[1].elements).toHaveLength(2);
  const newProps = Helpers.getUnbindValue(defaultProperties);
  const props = newProps.classes.question.properties;
  props?.push("description");
  propertyGrid.setPropertyGridDefinition(newProps);
  survey = propertyGrid.survey;
  panels = survey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("logic");
  expect(panels[0].elements).toHaveLength(4);
  expect(panels[1].elements).toHaveLength(2);
});
const defaultProperties2 : ISurveyPropertyGridDefinition = {
  autoGenerateProperties: false,
  classes: {
    question: {
      properties: [
        { name: "name", index: 5 },
        { name: "title", index: 3 },
        { name: "indent", index: 1 },
        { name: "visibleIf", tab: "logic" },
        { name: "enableIf", tab: "logic" },
      ],
      tabs: [
        { name: "logic", index: 15 }
      ]
    },
    selectbase: {
      properties: [
        { name: "hideIfChoicesEmpty", index: 2 },
        { name: "choicesMin", tab: "choices" }
      ],
      tabs: [
        { name: "choices", index: 5 }
      ]
    },
    dropdown: {
      properties: [
        { name: "allowClear", index: 4 }
      ],
    },
    "matrixdropdowncolumn@default": {
      properties: [
        "name", "title", "cellType"
      ]
    },
    "matrixdropdowncolumn@selectbase": {
      properties: [
        { name: "choices", tab: "choices" },
        { name: "choicesFromQuestion", tab: "choices" }
      ],
      tabs: [
        { name: "choices", index: 5 }
      ]
    },
    "matrixdropdowncolumn@checkbox": {
      properties: [
        { name: "showSelectAllItem", tab: "choices" }
      ],
    },
  }
};
test("Add support for property info index", () => {
  const question = new QuestionDropdownModel("q1");
  const propertyGrid = new PropertyGridModelTester(question, undefined, defaultProperties2);
  const survey = propertyGrid.survey;
  const panels = survey.getAllPanels();
  expect(panels).toHaveLength(3);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("choices");
  expect(panels[2].name).toBe("logic");

  const generalQuestions = panels[0].elements;
  expect(generalQuestions).toHaveLength(5);
  expect(generalQuestions[0].name).toBe("indent");
  expect(generalQuestions[1].name).toBe("hideIfChoicesEmpty");
  expect(generalQuestions[2].name).toBe("title");
  expect(generalQuestions[3].name).toBe("allowClear");
  expect(generalQuestions[4].name).toBe("name");
});
test("Support matrixdropdowncolumn@selectbase", () => {
  const matrix = new QuestionMatrixDynamicModel("q1");
  const column = matrix.addColumn("col1");
  column.cellType = "checkbox";
  const propertyGrid = new PropertyGridModelTester(column, undefined, defaultProperties2);
  const survey = propertyGrid.survey;
  const panels = survey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("choices");

  const generalQuestions = panels[0].elements;
  expect(generalQuestions).toHaveLength(3);
  expect(generalQuestions[0].name).toBe("name");
  expect(generalQuestions[1].name).toBe("title");
  expect(generalQuestions[2].name).toBe("cellType");
  const choicesQuestions = panels[1].elements;
  expect(choicesQuestions).toHaveLength(3);
  expect(choicesQuestions[0].name).toBe("choices");
  expect(choicesQuestions[1].name).toBe("choicesFromQuestion");
  expect(choicesQuestions[2].name).toBe("showSelectAllItem");
});