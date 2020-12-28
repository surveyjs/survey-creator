import { FastEntryEditor } from "../../src/property-grid/fast-entry";
import {
  JsonObject,
  QuestionMatrixDynamicModel,
  QuestionRadiogroupModel,
  QuestionSelectBase,
  SurveyModel,
} from "survey-knockout";

// function createOriginalElement() {
//   var originalElement = new QuestionRadiogroupModel("originalElement");
//   originalElement.choices = [1, 2, 3];
//   return originalElement;
// }

// function createPropertyEditorElement(originalElement: QuestionSelectBase) {
//   var choices = originalElement.choices;

//   var survey = new SurveyModel({
//     pages: [
//       {
//         name: "page1",
//         elements: [
//           {
//             type: "matrixdynamic",
//             name: "peElement",
//             rowCount: 0,
//             columns: [
//               {
//                 name: "value",
//                 cellType: "text",
//               },
//               {
//                 name: "text",
//                 cellType: "text",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   });
//   var peElement = survey.getQuestionByName("peElement");

//   choices.forEach((choice) => {
//     peElement.addRow();
//     var row = peElement.visibleRows[peElement.visibleRows.length - 1];
//     row.value = {
//       value: choice.value,
//       text: choice.text,
//     };
//   });

//   return peElement;
// }

// test("Create survey with editingObj", () => {
//   var originalElement = createOriginalElement();
//   var propertyEditorElement = createPropertyEditorElement(originalElement);

//   var fastEntryTitleActionModel = new FastEntryTitleActionModel(
//     originalElement,
//     propertyEditorElement
//   );
//   var text, value;

//   var value = fastEntryTitleActionModel.getValue();
//   var text = fastEntryTitleActionModel.getTextValue();

//   var question = new QuestionTextModel("q1");
//   var propertyGrid = new PropertyGridModelTester(question);
//   expect(propertyGrid.survey.getValue("name")).toEqual("q1");
//   var nameQuestion = propertyGrid.survey.getQuestionByName("name");
//   expect(nameQuestion).toBeTruthy();
//   expect(nameQuestion.title).toEqual("Name");
//   nameQuestion.value = "q2";
//   expect(question.name).toEqual("q2");
// });

test("Create survey with editingObj", () => {
  var originalElement = new QuestionRadiogroupModel("originalElement");
  originalElement.choices = [1, 2, 3];

  var fastEntryEditor = new FastEntryEditor(originalElement.choices);
  expect(fastEntryEditor.survey.comment.value).toEqual("1\n2\n3");
  fastEntryEditor.survey.comment.value = ("1|item1\n2\n3\n4|item4");
  fastEntryEditor.apply();
  expect(originalElement.choices).toHaveLength(4);
  expect(originalElement.choices[0].text).toEqual("item1");
  expect(originalElement.choices[3].value).toEqual(4);
  expect(originalElement.choices[3].text).toEqual("item4");
});
