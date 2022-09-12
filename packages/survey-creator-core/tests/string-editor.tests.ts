import { StringEditorViewModelBase } from "../src/components/string-editor";
import { SurveyModel, LocalizableString, Serializer, QuestionMatrixDropdownModel, QuestionSelectBase, ItemValue, QuestionDropdownModel, QuestionRadiogroupModel, QuestionPanelDynamicModel, sanitizeEditableContent } from "survey-core";
import { CreatorTester } from "./creator-tester";

jest.mock("survey-core", () => ({
  ...jest["requireActual"]("survey-core"),
  sanitizeEditableContent: jest.fn(),
}));
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

  creator.onGetPropertyReadOnly.add(function (editor, options) {
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

  function checkItemEdit() {
    const q0 = <QuestionDropdownModel>survey.getQuestionByName("q0");
    const q1 = <QuestionDropdownModel>survey.getQuestionByName("q1");
    const q2 = <QuestionDropdownModel>survey.getQuestionByName("q2");
    var seQ0ch0 = new StringEditorViewModelBase(q0.choices[0].locText, creator);
    var seQ0ch1 = new StringEditorViewModelBase(q0.choices[1].locText, creator);
    var seQ1ch0 = new StringEditorViewModelBase(q1.choices[0].locText, creator);
    var seQ1ch1 = new StringEditorViewModelBase(q1.choices[1].locText, creator);
    var seQ2ch0 = new StringEditorViewModelBase(q2.choices[0].locText, creator);
    var seQ2ch1 = new StringEditorViewModelBase(q2.choices[1].locText, creator);
    return [
      seQ0ch0.contentEditable,
      seQ0ch1.contentEditable,
      seQ1ch0.contentEditable,
      seQ1ch1.contentEditable,
      seQ2ch0.contentEditable,
      seQ2ch1.contentEditable
    ];
  }
  let creator = new CreatorTester();
  const survey: SurveyModel = new SurveyModel({
    pages: [
      {
        elements: [
          {
            type: "dropdown",
            name: "q0",
            choices: ["Item 1", "Item 2"],
          },
          {
            type: "dropdown",
            name: "q1",
            choices: ["Item 1", "Item 2"],
          },
          {
            type: "imagepicker",
            name: "q2",
            choices: ["Item 1", "Item 2"],
          }
        ]
      }
    ]
  });

  expect(checkItemEdit()).toEqual([true, true, true, true, true, true]);

  Serializer.getProperty("itemvalue", "text").readOnly = true;
  expect(checkItemEdit()).toEqual([false, false, false, false, false, false]);
  Serializer.getProperty("itemvalue", "text").readOnly = false;

  Serializer.getProperty("dropdown", "choices").readOnly = true;
  expect(checkItemEdit()).toEqual([false, false, false, false, true, true]);
  Serializer.getProperty("dropdown", "choices").readOnly = false;

  creator.onGetPropertyReadOnly.add(function (editor, options) {
    if (options.obj.getType() === "dropdown" && options.propertyName == "choices")
      options.readOnly = true;
  });
  expect(checkItemEdit()).toEqual([false, false, false, false, true, true]);

  creator.onGetPropertyReadOnly.add(function (editor, options) {
    if (options.obj.typeName === "itemvalue" && options.parentObj && options.parentObj.name == "q0" && options.parentObj.choices.indexOf(options.obj) == 0)
      options.readOnly = false;
  });
  expect(checkItemEdit()).toEqual([false, false, false, false, true, true]);
  creator.onGetPropertyReadOnly.clear();

  creator.onGetPropertyReadOnly.add(function (editor, options) {
    if (options.obj.typeName === "itemvalue" && options.parentObj && options.parentObj.name == "q0" && options.parentObj.choices.indexOf(options.obj) == 0)
      options.readOnly = true;
  });
  expect(checkItemEdit()).toEqual([false, true, true, true, true, true]);
  creator.onGetPropertyReadOnly.clear();

  creator.onElementAllowOperations.add(function (editor, options) {
    if (options.obj.name === "q1")
      options.allowEdit = false;
  });
  expect(checkItemEdit()).toEqual([true, true, false, false, true, true]);

  creator.onCollectionItemAllowOperations.add(function (editor, options) {
    if (options.obj.name == "q0" && options.collection.indexOf(options.item) == 0)
      options.allowEdit = false;
    if (options.obj.name == "q1" && options.collection.indexOf(options.item) == 1)
      options.allowEdit = true;
  });
  expect(checkItemEdit()).toEqual([false, true, false, false, true, true]);
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
  itemValue = <ItemValue>(<QuestionMatrixDropdownModel>creator.survey.getQuestionByName("mxDDQ")).renderedTable.rows[1].cells[1].question.choices[0];
  expect(itemValue.locText.renderAs).toEqual(LocalizableString.defaultRenderer);

  itemValue = <ItemValue>(<QuestionMatrixDropdownModel>creator.survey.getQuestionByName("mxDynQ")).renderedTable.rows[1].cells[1].question.choices[0];
  expect(itemValue.locText.renderAs).toEqual(LocalizableString.defaultRenderer);
  const singleQ = <QuestionRadiogroupModel>creator.survey.getQuestionByName("singleQ");
  itemValue = <ItemValue>(singleQ.choices[0]);
  expect(itemValue.locText.renderAs).toEqual("editableStringRendererName");
  const panelQ = <QuestionRadiogroupModel>creator.survey.getQuestionByName("panelQ");
  itemValue = panelQ.choices[0];
  expect(itemValue.locText.renderAs).toEqual("editableStringRendererName");
  const panDynQ = <QuestionPanelDynamicModel>creator.survey.getQuestionByName("panDynQ");
  const panDynQ1 = <QuestionRadiogroupModel>panDynQ.template.getQuestionByName("panDynQ1");
  itemValue = panDynQ1.choices[0];
  expect(itemValue.locText.renderAs).toEqual("editableStringRendererName");
});

test("Test string editor inplaceEditForValues", (): any => {
  let creator = new CreatorTester();
  creator.JSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "radiogroup",
            "name": "q0",
            "choices": [
              "item1",
              "item2"
            ]
          }
        ]
      }
    ]
  };

  var itemValue;
  const q0 = <QuestionRadiogroupModel>creator.survey.getQuestionByName("q0");
  itemValue = q0.choices[0];
  var seChoice = new StringEditorViewModelBase(itemValue.locText, creator);
  expect(itemValue.text).toEqual("item1");
  seChoice.onBlur({ target: { innerText: "newItem", innerHTML: "newItem" } });
  expect(itemValue.locText.text).toEqual("newItem");
  expect(itemValue.value).toEqual("item1");
  expect(itemValue.text).toEqual("newItem");

  creator.inplaceEditForValues = true;
  seChoice.onBlur({ target: { innerText: "newItemValue", innerHTML: "newItemValue" } });
  expect(itemValue.locText.text).toEqual("newItem");
  expect(itemValue.value).toEqual("newItemValue");
  expect(itemValue.text).toEqual("newItem");
});
test("Test string editor onHtmlToMarkdown event", (): any => {
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
  const q = <QuestionRadiogroupModel>creator.survey.getQuestionByName("q");
  const locStrSurvey: LocalizableString = new LocalizableString(survey, false, "description");
  var stringEditorSurveyTitle = new StringEditorViewModelBase(locStrSurvey, creator);
  expect(stringEditorSurveyTitle.editAsText).toEqual(true);
  creator.onHtmlToMarkdown.add((survey, options) => {
    options.text = options.html.replace(/\$/g, "*");
  });
  stringEditorSurveyTitle = new StringEditorViewModelBase(locStrSurvey, creator);
  expect(stringEditorSurveyTitle.editAsText).toEqual(false);
});
test("Sanitizing in compostion input", (): any => {
  let creator = new CreatorTester();
  const survey: SurveyModel = new SurveyModel({});
  const locStrSurvey: LocalizableString = new LocalizableString(survey, false, "title");
  var stringEditorSurveyTitle = new StringEditorViewModelBase(locStrSurvey, creator);

  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  expect(sanitizeEditableContent).toBeCalledTimes(4);

  stringEditorSurveyTitle.onCompositionStart({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onCompositionEnd({ target: null });
  expect(sanitizeEditableContent).toBeCalledTimes(5);
});