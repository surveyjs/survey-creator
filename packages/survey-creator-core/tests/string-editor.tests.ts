import { StringEditorConnector, StringItemsNavigatorBase, StringEditorViewModelBase } from "../src/components/string-editor";
import { SurveyModel, LocalizableString, Serializer, QuestionMatrixDropdownModel, QuestionSelectBase, ItemValue, QuestionDropdownModel, QuestionRadiogroupModel, QuestionPanelDynamicModel, sanitizeEditableContent, settings, QuestionRatingModel, QuestionMultipleTextModel, QuestionMatrixModel, QuestionCheckboxModel, QuestionTextModel, QuestionMatrixDynamicModel, QuestionImagePickerModel } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { ItemValueWrapperViewModel } from "../src/components/item-value";
import { QuestionRatingAdornerViewModel } from "../src/components/question-rating";
import { QuestionAdornerViewModel } from "../src/components/question";

settings.supportCreatorV2 = true;

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
  expect(stringEditorSurveyTitle.className("")).toEqual("svc-string-editor svc-string-editor--multiline");

  const locStrQuestion: LocalizableString = new LocalizableString(survey.getQuestionByName("q"), false, "description");
  var stringEditorQuestion = new StringEditorViewModelBase(locStrQuestion, creator);

  expect(stringEditorQuestion.className("")).toEqual("svc-string-editor svc-string-editor--hidden svc-string-editor--multiline");
  expect(stringEditorQuestion.className("desc")).toEqual("svc-string-editor svc-string-editor--multiline");
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
  expect(stringEditorQuestion1Description.className("desc")).toEqual("svc-string-editor svc-string-editor--multiline");
  var stringEditorQuestion2Description = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q2"), false, "description"), creator);
  expect(stringEditorQuestion2Description.contentEditable).toEqual(false);
  expect(stringEditorQuestion2Description.className("desc")).toEqual("svc-string-editor svc-string-editor--readonly svc-string-editor--multiline");
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
  seChoice.onBlur({ target: { innerText: "newItem", innerHTML: "newItem", setAttribute: () => { }, removeAttribute: () => { } } });
  expect(itemValue.locText.text).toEqual("newItem");
  expect(itemValue.value).toEqual("item1");
  expect(itemValue.text).toEqual("newItem");

  var otherItem;
  const q1 = <QuestionRadiogroupModel>creator.survey.getQuestionByName("q0");
  otherItem = q1.otherItem;
  var seChoiceOther = new StringEditorViewModelBase(otherItem.locText, creator);
  expect(otherItem.text).toEqual("Other (describe)");
  seChoiceOther.onBlur({ target: { innerText: "Other changed", innerHTML: "Other changed", setAttribute: () => { }, removeAttribute: () => { } } });
  expect(otherItem.locText.text).toEqual("Other changed");
  expect(q0.otherText).toEqual("Other changed");

  creator.inplaceEditForValues = true;
  seChoice.onBlur({ target: { innerText: "newItemValue", innerHTML: "newItemValue", setAttribute: () => { }, removeAttribute: () => { } } });
  expect(itemValue.locText.text).toEqual("newItem");
  expect(itemValue.value).toEqual("newItemValue");
  expect(itemValue.text).toEqual("newItem");
});
test("Test string editor inplaceEditForValues + сorrect non-unique value", (): any => {
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
              "item2",
              "newItem"
            ]
          }
        ]
      }
    ]
  };
  creator.inplaceEditForValues = true;
  const q = <QuestionRadiogroupModel>creator.survey.getQuestionByName("q0");
  const itemValue = q.choices[2];
  var seChoice = new StringEditorViewModelBase(itemValue.locText, creator);
  expect(itemValue.text).toEqual("newItem");
  seChoice.onBlur({ target: { innerText: "item1", innerHTML: "item1", setAttribute: () => { }, removeAttribute: () => { } } });
  expect(itemValue.value).toEqual("item3");
  expect(itemValue.text).toEqual("item3");
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
  expect(sanitizeEditableContent).toBeCalledTimes(0); // no sanitizer calls according new new approach

  stringEditorSurveyTitle.onCompositionStart({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onInput({ target: null });
  stringEditorSurveyTitle.onCompositionEnd({ target: null });
  expect(sanitizeEditableContent).toBeCalledTimes(0); // no sanitizer calls according new new approach
});

test("Maxlen check", (): any => {
  Serializer.findProperty("survey", "title").maxLength = 12;
  let creator = new CreatorTester();
  const survey: SurveyModel = new SurveyModel({});
  const locStrSurvey: LocalizableString = new LocalizableString(survey, false, "title");
  var stringEditorSurveyTitle = new StringEditorViewModelBase(locStrSurvey, creator);

  var target = { innerText: "very long title" };
  stringEditorSurveyTitle.onInput({ target: target });
  expect(target.innerText).toEqual("very long ti");
  Serializer.findProperty("survey", "title").maxLength = -1;
});

test("StringEditorConnector activate test", (): any => {
  let creator = new CreatorTester();
  const survey: SurveyModel = new SurveyModel({});
  const locStrSurvey: LocalizableString = new LocalizableString(survey, false, "title");
  var connector = StringEditorConnector.get(locStrSurvey);
  var activated = false;
  connector.onDoActivate.add(() => {
    activated = true;
  });
  connector.activateEditor();
  expect(activated).toBeTruthy();
});

test("StringEditorConnector for selectbase questions", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1", choices: ["item1", "item2"] }
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as QuestionRadiogroupModel;
  creator.selectElement(question);
  creator.maximumChoicesCount = 3;

  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  var connectorTitle = StringEditorConnector.get(question.locTitle);
  var connectorItem1 = StringEditorConnector.get(question.choices[0].locText);
  var connectorItem2 = StringEditorConnector.get(question.choices[1].locText);
  var activeLocString;
  connectorTitle.onDoActivate.add(sender => activeLocString = sender);
  connectorItem1.onDoActivate.add(sender => activeLocString = sender);
  connectorItem2.onDoActivate.add(sender => activeLocString = sender);

  connectorTitle.onEditComplete.fire(null, {});
  expect(activeLocString).toEqual(question.choices[0].locText);
  connectorItem1.onEditComplete.fire(null, {});
  expect(activeLocString).toEqual(question.choices[1].locText);
  connectorItem2.onEditComplete.fire(null, {});
  expect(question.choices.map(c => c.value)).toEqual(["item1", "item2", "item3"]);
  var connectorItem3 = StringEditorConnector.get(question.choices[2].locText);
  connectorItem3.onDoActivate.add(sender => activeLocString = sender);
  connectorItem3.onEditComplete.fire(null, {});
  expect(question.choices.map(c => c.value)).toEqual(["item1", "item2", "item3"]);

  connectorItem2.onBackspaceEmptyString.fire(null, {});
  expect(question.choices.map(c => c.value)).toEqual(["item1", "item3"]);
  expect(activeLocString).toEqual(question.choices[0].locText);

  connectorItem1.onBackspaceEmptyString.fire(null, {});
  expect(question.choices.map(c => c.value)).toEqual(["item3"]);
  expect(activeLocString).toEqual(question.choices[0].locText);

  connectorItem3.onBackspaceEmptyString.fire(null, {});
  expect(question.choices.map(c => c.value)).toEqual([]);
});
test("StringEditorConnector for new choice, Bug#4292", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1", choices: [{ value: "01", text: "item1" }, { value: "02", text: "item2" }] }
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as QuestionRadiogroupModel;
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const connectorNewItem = StringEditorConnector.get(question.choices[1].locText);
  let eventValue, eventText;
  let eventCounter = 0;
  creator.onItemValueAdded.add((sender, options) => {
    eventCounter++;
    eventValue = options.newItem.value;
    eventText = options.newItem.text;
  });

  connectorNewItem.onEditComplete.fire(null, {});
  expect(question.choices).toHaveLength(3);
  const newItem = question.choices[2];
  expect(newItem.value).toBe("03");
  expect(newItem.text).toBe("item3");
  expect(eventCounter).toBe(1);
  expect(eventValue).toBe("03");
  expect(eventText).toBe("item3");
});

test("StringEditorConnector for multiple text questions", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "multipletext", name: "q1", "items": [{ "name": "text1" }, { "name": "text2" }] }
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as QuestionMultipleTextModel;
  creator.selectElement(question);

  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  var connectorTitle = StringEditorConnector.get(question.locTitle);
  var connectorItem1 = StringEditorConnector.get(question.items[0].locTitle);
  var connectorItem2 = StringEditorConnector.get(question.items[1].locTitle);
  var activeLocString;
  connectorTitle.onDoActivate.add(sender => activeLocString = sender);
  connectorItem1.onDoActivate.add(sender => activeLocString = sender);
  connectorItem2.onDoActivate.add(sender => activeLocString = sender);

  connectorTitle.onEditComplete.fire(null, {});
  expect(activeLocString).toEqual(question.items[0].locTitle);
  connectorItem1.onEditComplete.fire(null, {});
  expect(activeLocString).toEqual(question.items[1].locTitle);
  connectorItem2.onEditComplete.fire(null, {});
  expect(question.items.map(c => c.name)).toEqual(["text1", "text2", "text3"]);
  var connectorItem3 = StringEditorConnector.get(question.items[2].locTitle);
  connectorItem3.onDoActivate.add(sender => activeLocString = sender);

  connectorItem2.onBackspaceEmptyString.fire(null, {});
  expect(question.items.map(c => c.name)).toEqual(["text1", "text3"]);
  expect(activeLocString).toEqual(question.items[0].locTitle);

  connectorItem1.onBackspaceEmptyString.fire(null, {});
  expect(question.items.map(c => c.name)).toEqual(["text3"]);
  expect(activeLocString).toEqual(question.items[0].locTitle);

  connectorItem3.onBackspaceEmptyString.fire(null, {});
  expect(question.items.map(c => c.name)).toEqual([]);
});

test("StringEditorConnector for matrix questions (columns)", (): any => {
  const creator = new CreatorTester();
  creator.maximumColumnsCount = 3;
  creator.JSON = {
    elements: [
      { type: "matrix", name: "q1", columns: ["Column 1", "Column 2"], rows: ["Row 1", "Row 2"] },
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as any;
  creator.selectElement(question);

  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  var connectorTitle = StringEditorConnector.get(question.locTitle);
  var connectorItem1 = StringEditorConnector.get(question.columns[0].locText);
  var connectorItem2 = StringEditorConnector.get(question.columns[1].locText);
  var activeLocString;
  connectorTitle.onDoActivate.add(sender => activeLocString = sender);
  connectorItem1.onDoActivate.add(sender => activeLocString = sender);
  connectorItem2.onDoActivate.add(sender => activeLocString = sender);

  connectorTitle.onEditComplete.fire(null, {});
  expect(activeLocString).toEqual(question.columns[0].locText);
  connectorItem1.onEditComplete.fire(null, {});
  expect(activeLocString).toEqual(question.columns[1].locText);
  connectorItem2.onEditComplete.fire(null, {});
  expect(question.columns.map(c => c.value)).toEqual(["Column 1", "Column 2", "Column 3"]);
  var connectorItem3 = StringEditorConnector.get(question.columns[2].locText);
  connectorItem3.onDoActivate.add(sender => activeLocString = sender);

  connectorItem3.onEditComplete.fire(null, {});
  expect(question.columns.map(c => c.value)).toEqual(["Column 1", "Column 2", "Column 3"]);

  connectorItem2.onBackspaceEmptyString.fire(null, {});
  expect(question.columns.map(c => c.value)).toEqual(["Column 1", "Column 3"]);
  expect(activeLocString).toEqual(question.columns[0].locText);

  connectorItem1.onBackspaceEmptyString.fire(null, {});
  expect(question.columns.map(c => c.value)).toEqual(["Column 3"]);
  expect(activeLocString).toEqual(question.columns[0].locText);

  connectorItem3.onBackspaceEmptyString.fire(null, {});
  expect(question.columns.map(c => c.value)).toEqual([]);
});

test("StringEditorConnector for matrixdropdown questions (columns)", (): any => {
  const creator = new CreatorTester();
  creator.maximumColumnsCount = 3;
  creator.JSON = {
    elements: [
      { type: "matrixdropdown", name: "q2", columns: [{ name: "Column 1" }, { name: "Column 2" }], rows: ["Row 1", "Row 2"] },
      { type: "matrixdynamic", name: "q3", columns: [{ name: "Column 1" }, { name: "Column 2" }], rows: ["Row 1", "Row 2"] }
    ]
  };
  const allQuestions = creator.survey.getAllQuestions();

  for (var i = 0; i < allQuestions.length; i++) {
    const question = allQuestions[i] as any;
    var locStringProperty = (i == 0) ? "locText" : "locTitle";
    creator.selectElement(question);

    const questionAdorner = new QuestionAdornerViewModel(
      creator,
      question,
      <any>undefined
    );
    var connectorTitle = StringEditorConnector.get(question.locTitle);
    var connectorItem1 = StringEditorConnector.get(question.columns[0].locTitle);
    var connectorItem2 = StringEditorConnector.get(question.columns[1].locTitle);
    var activeLocString;
    connectorTitle.onDoActivate.add(sender => activeLocString = sender);
    connectorItem1.onDoActivate.add(sender => activeLocString = sender);
    connectorItem2.onDoActivate.add(sender => activeLocString = sender);

    connectorTitle.onEditComplete.fire(null, {});
    expect(activeLocString).toEqual(question.columns[0].locTitle);
    connectorItem1.onEditComplete.fire(null, {});
    expect(activeLocString).toEqual(question.columns[1].locTitle);
    connectorItem2.onEditComplete.fire(null, {});
    expect(question.columns.map(c => c.value)).toEqual(["Column 1", "Column 2", "Column 3"]);
    var connectorItem3 = StringEditorConnector.get(question.columns[2].locTitle);
    connectorItem3.onDoActivate.add(sender => activeLocString = sender);
    connectorItem3.onEditComplete.fire(null, {});
    expect(question.columns.map(c => c.value)).toEqual(["Column 1", "Column 2", "Column 3"]);

    connectorItem2.onBackspaceEmptyString.fire(null, {});
    expect(question.columns.map(c => c.value)).toEqual(["Column 1", "Column 3"]);
    expect(activeLocString).toEqual(question.columns[0].locTitle);

    connectorItem1.onBackspaceEmptyString.fire(null, {});
    expect(question.columns.map(c => c.value)).toEqual(["Column 3"]);
    expect(activeLocString).toEqual(question.columns[0].locTitle);

    connectorItem3.onBackspaceEmptyString.fire(null, {});
    expect(question.columns.map(c => c.value)).toEqual([]);
  }
});

test("StringEditorConnector for matrix questions (rows)", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "matrix", name: "q1", columns: ["Column 1", "Column 2"], rows: ["Row 1", "Row 2"] },
      { type: "matrixdropdown", name: "q1", columns: [{ name: "Column 1" }, { name: "Column 2" }], rows: ["Row 1", "Row 2"] },
    ]
  };
  const allQuestions = creator.survey.getAllQuestions();

  for (var i = 0; i < allQuestions.length; i++) {
    const question = allQuestions[i] as any;
    creator.selectElement(question);
    creator.maximumRowsCount = 3;

    const questionAdorner = new QuestionAdornerViewModel(
      creator,
      question,
      <any>undefined
    );
    var connectorTitle = StringEditorConnector.get(question.locTitle);
    var connectorItem1 = StringEditorConnector.get(question.rows[0].locText);
    var connectorItem2 = StringEditorConnector.get(question.rows[1].locText);
    var activeLocString;
    connectorTitle.onDoActivate.add(sender => activeLocString = sender);
    connectorItem1.onDoActivate.add(sender => activeLocString = sender);
    connectorItem2.onDoActivate.add(sender => activeLocString = sender);

    connectorItem1.onEditComplete.fire(null, {});
    expect(activeLocString).toEqual(question.rows[1].locText);
    connectorItem2.onEditComplete.fire(null, {});
    expect(question.rows.map(c => c.value)).toEqual(["Row 1", "Row 2", "Row 3"]);
    var connectorItem3 = StringEditorConnector.get(question.rows[2].locText);
    connectorItem3.onDoActivate.add(sender => activeLocString = sender);
    connectorItem3.onEditComplete.fire(null, {});
    expect(question.rows.map(c => c.value)).toEqual(["Row 1", "Row 2", "Row 3"]);

    connectorItem2.onBackspaceEmptyString.fire(null, {});
    expect(question.rows.map(c => c.value)).toEqual(["Row 1", "Row 3"]);
    expect(activeLocString).toEqual(question.rows[0].locText);

    connectorItem1.onBackspaceEmptyString.fire(null, {});
    expect(question.rows.map(c => c.value)).toEqual(["Row 3"]);
    expect(activeLocString).toEqual(question.rows[0].locText);

    connectorItem3.onBackspaceEmptyString.fire(null, {});
    expect(question.rows.map(c => c.value)).toEqual([]);
  }
});

test("StringEditorConnector for matrix - onItemValueAdded event", (): any => {
  const creator = new CreatorTester();

  var log = "";

  creator.onItemValueAdded.add((sender, options) => {
    log += (options.obj as QuestionMatrixModel).name + ":" + options.itemValues.map(c => c.title).join(",") + "+" + options.newItem.title;
  });
  creator.JSON = {
    elements: [
      { type: "matrix", name: "q1", columns: ["Column 1", "Column 2"], rows: ["Row 1", "Row 2"] },
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as any;
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  var connectorItemC1 = StringEditorConnector.get(question.columns[0].locText);
  var connectorItemC2 = StringEditorConnector.get(question.columns[1].locText);
  var connectorItemR1 = StringEditorConnector.get(question.rows[0].locText);
  var connectorItemR2 = StringEditorConnector.get(question.rows[1].locText);

  connectorItemC1.onEditComplete.fire(null, {});
  expect(log).toEqual("");
  connectorItemC2.onEditComplete.fire(null, {});
  expect(log).toEqual("q1:Column 1,Column 2,Column 3+Column 3");

  log = "";

  connectorItemR1.onEditComplete.fire(null, {});
  expect(log).toEqual("");
  connectorItemR2.onEditComplete.fire(null, {});
  expect(log).toEqual("q1:Row 1,Row 2,Row 3+Row 3");
});

test("StringEditorConnector for matrix - onMatrixColumnAdded event", (): any => {
  const creator = new CreatorTester();

  var log = "";

  creator.onMatrixColumnAdded.add((sender, options) => {
    log += options.matrix.name + ":" + options.columns.map(c => c.name).join(",") + "+" + options.newColumn.title;
  });
  creator.JSON = {
    elements: [
      { type: "matrixdropdown", name: "q1", columns: [{ name: "Column 1" }, { name: "Column 2" }], rows: ["Row 1", "Row 2"] },
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as any;
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  var connectorItemC1 = StringEditorConnector.get(question.columns[0].locTitle);
  var connectorItemC2 = StringEditorConnector.get(question.columns[1].locTitle);

  connectorItemC1.onEditComplete.fire(null, {});
  expect(log).toEqual("");
  connectorItemC2.onEditComplete.fire(null, {});
  expect(log).toEqual("q1:Column 1,Column 2,Column 3+Column 3");
});

test("StringEditor on property value changing", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", title: "q", name: "q1", choices: ["item1", "item2"] }
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as QuestionRadiogroupModel;
  var stringEditorQuestion = new StringEditorViewModelBase(question.locTitle, creator);
  var eventRaised = 0;
  creator.onPropertyValueChanging.add((sender, options) => {
    if (!!options.value && options.propertyName === "title" && options.obj == question) {
      eventRaised++;
      if (options.newValue == "a") {
        options.newValue = "b";
      }
    }
  });
  var event = { target: { innerText: "a", setAttribute: () => { }, removeAttribute: () => { } } };
  stringEditorQuestion.onBlur(event);
  expect(eventRaised).toEqual(1);
  expect(question.locTitle.text).toEqual("b");

  var event = { target: { innerText: "c", setAttribute: () => { }, removeAttribute: () => { } } };
  stringEditorQuestion.onBlur(event);
  expect(eventRaised).toEqual(2);
  expect(question.locTitle.text).toEqual("c");
});

test("StringEditor Shift+Tab Safari - https://github.com/surveyjs/survey-creator/issues/3568", () => {
  const creator = new CreatorTester();
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

  var attrTest, valueTest;
  var event = {
    target: {
      parentElement: { click: () => { } },
      innerText: "a", setAttribute: (attr, val) => {
        attrTest = attr;
        valueTest = val;
      }, removeAttribute: (attr, val) => { attrTest = attr; }
    }
  };
  stringEditorSurveyTitle.onFocus(event);
  expect(attrTest).toEqual("tabindex");
  expect(valueTest).toEqual(-1);
  attrTest = null;
  stringEditorSurveyTitle.onBlur(event);
  expect(attrTest).toEqual("tabindex");
});

test("StringEditor onGetPropertyReadOnly for radio/checkbox - https://github.com/surveyjs/survey-creator/issues/3658", () => {
  const creator = new CreatorTester();
  const survey: SurveyModel = new SurveyModel({
    pages: [
      {
        elements: [
          { name: "q", type: "checkbox", choices: [1, 2, 3], hasOther: true }
        ]
      }
    ]
  });

  const question = survey.getQuestionByName("q") as QuestionCheckboxModel;
  const locStrOtherItem: LocalizableString = question.otherItem.locText;
  var stringEditorSurveyTitle = new StringEditorViewModelBase(locStrOtherItem, creator);

  creator.onGetPropertyReadOnly.add((sender, options) => {
    if (options.property.name === "otherText" && options.obj.getType() === "checkbox") {
      options.readOnly = true;
    }
  });

  expect(stringEditorSurveyTitle.contentEditable).toBeFalsy();
});

test("StringEditor multiline paste for selectbase questions", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1", choices: ["item1", "item2", "item3"] },
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as QuestionRadiogroupModel;
  creator.selectElement(question);

  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  var connectorItem2 = StringEditorConnector.get(question.choices[1].locText);

  connectorItem2.onTextChanging.fire(null, { value: "\na\nb\r\nc\n" });
  expect(question.choices.map(c => c.text)).toEqual(["item1", "a", "b", "c", "item3"]);
  expect(question.choices.map(c => c.value)).toEqual(["item1", "item4", "item5", "item6", "item3"]);
});

test("StringEditor multiline paste with tabs and empty lines for selectbase questions", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1", choices: ["item1", "item2", "item3"] },
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as QuestionRadiogroupModel;
  creator.selectElement(question);

  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  var connectorItem2 = StringEditorConnector.get(question.choices[1].locText);

  connectorItem2.onTextChanging.fire(null, { value: "\n\t\t\n\ta\t\nb\r\n\n" });
  expect(question.choices.map(c => c.text)).toEqual(["item1", "a", "b", "item3"]);
});

test("StringEditor multiline paste for selectbase questions - inplaceEditForValues", (): any => {
  const creator = new CreatorTester();
  creator.inplaceEditForValues = true;
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1", choices: ["item1", "item2", "item3"] },
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as QuestionRadiogroupModel;
  creator.selectElement(question);

  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  var connectorItem2 = StringEditorConnector.get(question.choices[1].locText);

  connectorItem2.onTextChanging.fire(null, { value: "\na\nb\r\nc\n" });
  expect(question.choices.map(c => c.text)).toEqual(["item1", "a", "b", "c", "item3"]);
  expect(question.choices.map(c => c.value)).toEqual(["item1", "a", "b", "c", "item3"]);
});

test("StringEditor multiline paste for multipletext questions", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "multipletext", name: "q1", "items": [{ "name": "text1" }, { "name": "text2" }] }
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as QuestionMultipleTextModel;
  creator.selectElement(question);

  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  var connectorItem2 = StringEditorConnector.get(question.items[1].locTitle);

  connectorItem2.onTextChanging.fire(null, { value: "a\nb\r\nc" });
  expect(question.items.map(c => c.name)).toEqual(["text1", "a", "b", "c"]);
});

test("StringEditor multiline paste for matrix questions", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "matrixdropdown", name: "q1", columns: [{ name: "Column 1" }, { name: "Column 2" }], rows: ["Row 1", "Row 2"] },
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as QuestionMatrixDropdownModel;
  creator.selectElement(question);

  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  var connectorItemCol = StringEditorConnector.get(question.columns[1].locTitle);
  var connectorItemRow = StringEditorConnector.get(question.rows[0].locText);

  connectorItemCol.onTextChanging.fire(null, { value: "a\nb\r\nc" });
  expect(question.columns.map(c => c.title)).toEqual(["Column 1", "a", "b", "c"]);

  connectorItemRow.onTextChanging.fire(null, { value: "a\nb\r\nc" });
  expect(question.rows.map(c => c.text)).toEqual(["a", "b", "c", "Row 2"]);
});

test("StringEditor Navigator - supported types", (): any => {
  expect(StringItemsNavigatorBase.setQuestion(<any>{ element: new QuestionTextModel("q") })).toBeFalsy();
  expect(StringItemsNavigatorBase.setQuestion(<any>{ element: new QuestionMultipleTextModel("q") })).toBeTruthy();
  expect(StringItemsNavigatorBase.setQuestion(<any>{ element: new QuestionMatrixDropdownModel("q") })).toBeTruthy();
  expect(StringItemsNavigatorBase.setQuestion(<any>{ element: new QuestionMatrixDynamicModel("q") })).toBeTruthy();
  expect(StringItemsNavigatorBase.setQuestion(<any>{ element: new QuestionMatrixModel("q") })).toBeTruthy();
  expect(StringItemsNavigatorBase.setQuestion(<any>{ element: new QuestionRadiogroupModel("q") })).toBeTruthy();
  expect(StringItemsNavigatorBase.setQuestion(<any>{ element: new QuestionImagePickerModel("q") })).toBeFalsy();
});
test("Test string editor inplaceEditForValues without Creator", (): any => {
  const survey = new SurveyModel({
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
  });

  var itemValue;
  const q0 = <QuestionRadiogroupModel>survey.getQuestionByName("q0");
  itemValue = q0.choices[0];
  var seChoice = new StringEditorViewModelBase(itemValue.locText);
  expect(itemValue.text).toEqual("item1");
  expect(seChoice.contentEditable).toBeTruthy();
  seChoice.onBlur({ target: { innerText: "newItem", innerHTML: "newItem", setAttribute: () => { }, removeAttribute: () => { } } });
  expect(itemValue.locText.text).toEqual("newItem");
  expect(itemValue.value).toEqual("item1");
  expect(itemValue.text).toEqual("newItem");

  var otherItem;
  const q1 = <QuestionRadiogroupModel>survey.getQuestionByName("q0");
  otherItem = q1.otherItem;
  var seChoiceOther = new StringEditorViewModelBase(otherItem.locText);
  expect(otherItem.text).toEqual("Other (describe)");
  seChoiceOther.onBlur({ target: { innerText: "Other changed", innerHTML: "Other changed", setAttribute: () => { }, removeAttribute: () => { } } });
  expect(otherItem.locText.text).toEqual("Other changed");
  expect(q0.otherText).toEqual("Other changed");
});
