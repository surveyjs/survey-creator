import { StringEditorViewModelBase } from "../src/components/string-editor";
import { SurveyModel, LocalizableString, Serializer, QuestionMatrixDropdownModel, QuestionSelectBase, ItemValue } from "survey-core";
import { CreatorTester } from "./creator-tester";
test("Test css", (): any => {
  let creator = new CreatorTester();
  const survey: SurveyModel = new SurveyModel({
    pages: [
      {
        elements: [
          { name: "q", type: "text" }
        ]
      }
    ]
  });
  const locStrSurvey: LocalizableString = new LocalizableString(survey, false, "description");
  var stringEditorSurveyTitle = new StringEditorViewModelBase(locStrSurvey, creator);
  expect(stringEditorSurveyTitle.className("")).toEqual("svc-string-editor");

  const locStrQuestion: LocalizableString = new LocalizableString(survey.getQuestionByName("q"), false, "description");
  var stringEditorQuestion = new StringEditorViewModelBase(locStrQuestion, creator);

  expect(stringEditorQuestion.className("")).toEqual("svc-string-editor svc-string-editor--hidden");
  expect(stringEditorQuestion.className("desc")).toEqual("svc-string-editor");
});
test("Test string editor content editable", (): any => {
  let creator = new CreatorTester();
  const survey: SurveyModel = new SurveyModel({
    pages: [
      {
        elements: [
          { name: "q1", type: "text" },
          { name: "q2", type: "comment" },
          { name: "q3", type: "text" }
        ]
      }
    ]
  });

  Serializer.getProperty(
    "comment",
    "description"
  ).readOnly = true;

  creator.onGetPropertyReadOnly.add(function(editor, options) {
    var obj = options.obj;
    if (!obj || !obj.page) return;

    //you may check obj.getType();
    if (obj.name === "q3") {
      options.readOnly = true;
    }
  });

  var stringEditorQuestion1Description = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q1"), false, "description"), creator);
  expect(stringEditorQuestion1Description.contentEditable).toEqual(true);
  expect(stringEditorQuestion1Description.className("desc")).toEqual("svc-string-editor");
  var stringEditorQuestion2Description = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q2"), false, "description"), creator);
  expect(stringEditorQuestion2Description.contentEditable).toEqual(false);
  expect(stringEditorQuestion2Description.className("desc")).toEqual("svc-string-editor svc-string-editor--readonly");
  var stringEditorQuestion3Description = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q3"), false, "description"), creator);
  expect(stringEditorQuestion3Description.contentEditable).toEqual(false);
});

test("Test string editor select questions items readonly", (): any => {
  let creator = new CreatorTester();
  const survey: SurveyModel = new SurveyModel({
    pages: [
      {
        elements: [
          {
            type: "dropdown",
            name: "q1",
            choices: ["Item 1"],
          },
          {
            type: "dropdown",
            name: "q2",
            choices: ["Item 1"],
          },
          {
            type: "imagepicker",
            name: "q3",
            choices: ["Item 1", "Item 2"],
          }
        ]
      }
    ]
  });

  Serializer.getProperty(
    "comment",
    "description"
  ).readOnly = true;

  creator.onGetPropertyReadOnly.add(function(editor, options) {
    var obj = options.obj;
    if (!obj) return;

    //you may check obj.getType();
    if (obj.getType() === "itemvalue") {
      if(options.parentObj && options.parentObj.name == "q2")
        options.readOnly = true;
    }
    if (obj.getType() === "imageitemvalue") {
      if(options.parentObj && options.parentObj.name == "q3")
        var index = options.parentObj.choices.indexOf(options.obj);
      if(index == 1)
        options.readOnly = true;
    }
  });

  var stringEditorQuestion1Description = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q1").choices[0], false, "text"), creator);
  expect(stringEditorQuestion1Description.contentEditable).toEqual(true);
  var stringEditorQuestion2Description = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q2").choices[0], false, "text"), creator);
  expect(stringEditorQuestion2Description.contentEditable).toEqual(false);
  var stringEditorQuestion3Description = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q3").choices[0], false, "text"), creator);
  expect(stringEditorQuestion3Description.contentEditable).toEqual(true);
  var stringEditorQuestion3Item2 = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q3").choices[1], false, "text"), creator);
  expect(stringEditorQuestion3Item2.contentEditable).toEqual(false);
});

test("Test string editor content editable for matrix and panels", (): any => {
  let creator = new CreatorTester();
  creator.JSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "radiogroup",
            "name": "singleQ",
            "choices": [
              "item1",
              "item2"
            ]
          },
          {
            "type": "matrixdynamic",
            "name": "mxDynQ",
            "columns": [
              {
                "name": "Column 1"
              },
              {
                "name": "Column 2"
              }
            ],

            "choices": [
              1,
              2
            ],
            "cellType": "radiogroup"
          },
          {
            "type": "matrixdropdown",
            "name": "mxDDQ",
            "columns": [
              {
                "name": "Column 1"
              },
              {
                "name": "Column 2"
              }
            ],
            "choices": [
              1,
              2
            ],
            "cellType": "radiogroup",
            "rows": [
              "Row 1",
              "Row 2"
            ]
          },
          {
            "type": "panel",
            "name": "panel1",
            "elements": [
              {
                "type": "radiogroup",
                "name": "panelQ",
                "choices": [
                  "item1",
                  "item2"
                ]
              }
            ]
          },
          {
            "type": "paneldynamic",
            "name": "panDynQ",
            "templateElements": [
              {
                "type": "radiogroup",
                "name": "panDynQ1",
                "choices": [
                  {
                    "value": "item1",
                    "text": "item1"
                  },
                  {
                    "value": "item2",
                    "text": "item2"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  var itemValue;
  itemValue = <ItemValue> (<QuestionMatrixDropdownModel>creator.survey.getQuestionByName("mxDDQ")).renderedTable.rows[1].cells[1].question.choices[0];
  expect(itemValue.locText.renderAs).toEqual(LocalizableString.defaultRenderer);

  itemValue = <ItemValue> (<QuestionMatrixDropdownModel>creator.survey.getQuestionByName("mxDynQ")).renderedTable.rows[1].cells[1].question.choices[0];
  expect(itemValue.locText.renderAs).toEqual(LocalizableString.defaultRenderer);

  itemValue = <ItemValue> (creator.survey.getQuestionByName("singleQ").choices[0]);
  expect(itemValue.locText.renderAs).toEqual("editableStringRendererName");
  itemValue = <ItemValue> (creator.survey.getQuestionByName("panelQ").choices[0]);
  expect(itemValue.locText.renderAs).toEqual("editableStringRendererName");
  itemValue = <ItemValue> (creator.survey.getQuestionByName("panDynQ").template.getQuestionByName("panDynQ1").choices[0]);
  expect(itemValue.locText.renderAs).toEqual("editableStringRendererName");
});