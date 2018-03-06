import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  SurveyQuestionProperties,
  SurveyQuestionEditor,
  SurveyQuestionEditorTab
} from "../src/questionEditors/questionEditor";
import {
  SurveyQuestionEditorProperties,
  SurveyQuestionEditorRow,
  SurveyQuestionEditorProperty
} from "../src/questionEditors/questionEditorProperties";
import { SurveyQuestionEditorDefinition } from "../src/questionEditors/questionEditorDefinition";
import { SurveyEditor } from "../src/editor";

export default QUnit.module("QuestionEditorsTests");

QUnit.test("Create correct question editor property tab ", function(assert) {
  var dropdownQuestion = new Survey.QuestionDropdown("q1");
  dropdownQuestion.choices = ["item1"];
  dropdownQuestion.visibleIf = "true";
  var properties = new SurveyQuestionProperties(dropdownQuestion, null);

  var property = properties.getProperty("choices");
  var tab = new SurveyQuestionEditorTab(
    dropdownQuestion,
    new SurveyQuestionEditorProperties(dropdownQuestion, [property]),
    "general"
  );
  assert.equal(
    tab.htmlTemplate,
    "questioneditortab",
    "itemvalues template should be created"
  );
  assert.equal(
    tab.properties.rows[0].properties[0].editor.editorType,
    "itemvalues",
    "create correct property editor"
  );
  assert.deepEqual(
    tab.properties.rows[0].properties[0].editor.editingValue,
    ["item1"],
    "set value to property editor correctly"
  );

  property = properties.getProperty("visibleIf");
  tab = new SurveyQuestionEditorTab(
    dropdownQuestion,
    new SurveyQuestionEditorProperties(dropdownQuestion, [property]),
    "general"
  );
  assert.equal(
    tab.properties.rows[0].properties[0].editor.editingValue,
    dropdownQuestion.visibleIf,
    "set value of 'visibleIf' to property editor correctly"
  );
});

QUnit.test("Question Editor apply/reset/onChanged", function(assert) {
  var dropdownQuestion = new Survey.QuestionDropdown("q1");
  dropdownQuestion.visibleIf = "true";
  var changeCounter = 0;
  var editor = new SurveyQuestionEditor(dropdownQuestion, null);
  editor.onChanged = function() {
    changeCounter++;
  };
  var generalTab = <SurveyQuestionEditorTab>editor.koTabs()[0];
  assert.equal(
    generalTab.properties.rows[0].properties[0].editor.koValue(),
    "q1",
    "name set correct"
  );
  assert.equal(
    generalTab.properties.rows[1].properties[0].editor.koValue(),
    "",
    "title set correct"
  );
  generalTab.properties.rows[0].properties[0].editor.koValue("newName");
  generalTab.properties.rows[1].properties[0].editor.koValue("new title");
  var visibleIfTab = <SurveyQuestionEditorTab>editor.koTabs()[
    editor.koTabs().length - 1
  ];
  visibleIfTab.properties.rows[0].properties[0].editor["koValue"]("false");
  editor.apply();
  assert.equal(changeCounter, 1, "changed one time");
  assert.equal(dropdownQuestion.name, "newName", "name assign correct");
  assert.equal(dropdownQuestion.title, "new title", "title assign correct");
  assert.equal(dropdownQuestion.visibleIf, "false", "visibleIf assign correct");
});

QUnit.test("Create correct Question Editor by question type", function(assert) {
  var radioGroupQuestion = new Survey.QuestionRadiogroup("q1");
  var editor = new SurveyQuestionEditor(radioGroupQuestion, null);
  assert.equal(editor.koTabs().length, 4, "There are 4 tabs");
  assert.equal(
    editor.koTabs()[1].name,
    "choices",
    "The name of the second tab is 'choices'"
  );
});

QUnit.test("Hide a tab if it's visible attribute set to false", function(
  assert
) {
  var savedDefinition = JSON.stringify(
    SurveyQuestionEditorDefinition.definition.html
  );
  SurveyQuestionEditorDefinition.definition.html = {
    tabs: [
      { name: "html" },
      { name: "general", visible: false },
      { name: "visibleIf", visible: false }
    ]
  };
  var htmlQuestion = new Survey.QuestionHtml("q1");
  var editor = new SurveyQuestionEditor(htmlQuestion, null);
  assert.equal(editor.koTabs().length, 1, "There is one visible tab");
  assert.equal(
    editor.koTabs()[0].name,
    "html",
    "The name of the visible tab is 'html'"
  );
  SurveyQuestionEditorDefinition.definition.html = JSON.parse(savedDefinition);
});

QUnit.test("Hide visibleIf tab and startWithNewLine", function(assert) {
  var radioGroupQuestion = new Survey.QuestionRadiogroup("q1");
  var onCanShowPropertyCallback = function(
    object: any,
    property: Survey.JsonObjectProperty
  ) {
    return property.name != "visibleIf" && property.name != "startWithNewLine";
  };
  var editor = new SurveyQuestionEditor(
    radioGroupQuestion,
    onCanShowPropertyCallback
  );
  assert.equal(editor.koTabs().length, 3, "There are 3 tabs");
  assert.equal(
    editor.koTabs()[1].name,
    "choices",
    "The name of the second tab is 'choices'"
  );
  var generalTab = <SurveyQuestionEditorTab>editor.koTabs()[0];
  var hasFound = false;
  var prop = generalTab.properties;
  for (var i = 0; i < prop.rows.length; i++) {
    var row = prop.rows[i];
    for (var j = 0; j < row.properties.length; j++) {
      if (row.properties[j].property.name == "startWithNewLine") {
        hasFound = true;
        break;
      }
    }
  }
  assert.equal(hasFound, false, "We have made 'startWithNewLine' invisible");
});

QUnit.test("Create  general properties", function(assert) {
  var question = new Survey.QuestionText("q1");
  var properties = new SurveyQuestionEditorProperties(question, [
    { name: "name" },
    "visible",
    "dummy"
  ]);
  assert.equal(properties.rows.length, 2, "There are two rows");
  assert.equal(
    properties.rows[0].properties[0].property.name,
    "name",
    "The first property created correctly"
  );
  assert.equal(
    properties.rows[1].properties[0].property.name,
    "visible",
    "The second property created correctly"
  );
});

QUnit.test("General properties different categories", function(assert) {
  var question = new Survey.QuestionText("q1");
  var properties = new SurveyQuestionEditorProperties(question, [
    { name: "name", category: "1", title: "MyName" },
    { name: "visible" },
    { name: "title", category: "1" }
  ]);
  assert.equal(properties.rows.length, 2, "There are two rows");
  assert.equal(properties.rows[0].properties.length, 2, "There are two rows");
  assert.equal(
    properties.rows[0].properties[0].property.name,
    "name",
    "The first property in row is name"
  );
  assert.equal(
    properties.rows[0].properties[1].property.name,
    "title",
    "The second property in row is title"
  );
  assert.equal(
    properties.rows[0].properties[0].editor.displayName,
    "MyName",
    "Title property was set correctly"
  );
});

QUnit.test("Get tabs", function(assert) {
  SurveyQuestionEditorDefinition.definition["@testClass"] = {
    properties: [
      "name",
      "car",
      { name: "prop1", tab: "tab1" },
      { name: "prop2", tab: "tab2" }
    ],
    tabs: [
      { name: "tab1", title: "Title 1" },
      { name: "tab2", title: "Title 2" }
    ]
  };

  var tabs = SurveyQuestionEditorDefinition.getTabs("@testClass");

  assert.equal(tabs.length, 2, "There are three tabs");
  assert.equal(tabs[0].title, "Title 1", "Tab 1 Title");
  assert.equal(tabs[1].title, "Title 2", "Tab 2 Title");
});

QUnit.test("Dynamically generated tabs", function(assert) {
  SurveyQuestionEditorDefinition.definition["@testClass"] = {
    properties: [
      "name",
      "car",
      { name: "prop1", tab: "tab1" },
      { name: "prop2", tab: "tab2" },
      { name: "prop11", tab: "tab1" },
      { name: "prop21", tab: "tab2" }
    ],
    tabs: [
      { name: "tab1", title: "Title 1" },
      { name: "tab2", title: "Title 2" }
    ]
  };
  Survey.JsonObject.metaData.addClass(
    "@testClass",
    ["name:string", "prop1", "prop2", "prop11", "prop21", "car"],
    () => {
      return {};
    }
  );

  var question = { getType: () => "@testClass" };
  var editor = new SurveyQuestionEditor(<any>question, null);

  var generalTab = <SurveyQuestionEditorTab>editor.koTabs()[0];
  assert.equal(editor.koTabs().length, 3, "There are three tabs");
  assert.equal(generalTab.title, "General", "Tab 1 Title");
  assert.equal(editor.koTabs()[1].title, "Title 1", "Tab 2 Title");
  assert.equal(editor.koTabs()[2].title, "Title 2", "Tab 3 Title");

  assert.equal(
    generalTab.properties.rows.length,
    2,
    "General tab should have 2 rows"
  );
});

QUnit.test("General properties, editor type", function(assert) {
  var question = new Survey.QuestionText("q1");
  var properties = new SurveyQuestionEditorProperties(question, [
    "name",
    "visible",
    "title"
  ]);
  assert.equal(
    properties.rows[0].properties[0].objectProperty.editorType,
    "string",
    "Name property has text edit type"
  );
  assert.equal(
    properties.rows[1].properties[0].objectProperty.editorType,
    "boolean",
    "visible property has check edit type"
  );
  assert.equal(
    properties.rows[2].properties[0].objectProperty.editorType,
    "text",
    "title property has textarea edit type"
  );
});

QUnit.test("General properties, apply/reset", function(assert) {
  var question = new Survey.QuestionText("q1");
  var properties = new SurveyQuestionEditorProperties(question, [
    "name",
    "visible",
    "title"
  ]);
  assert.equal(
    properties.rows[0].properties[0].editor.koValue(),
    "q1",
    "Initially it is q1"
  );
  properties.rows[0].properties[0].editor.koValue("q2");
  properties.apply();
  assert.equal(question.name, "q2", "question.name is 'q2'");
  properties.rows[0].properties[0].editor.koValue("q3");
  properties.reset();
  assert.equal(
    properties.rows[0].properties[0].editor.koValue(),
    "q2",
    "reset to q2"
  );
});

QUnit.test("General properties, has errors", function(assert) {
  var question = new Survey.QuestionText("q1");
  var properties = new SurveyQuestionEditorProperties(question, [
    { name: "name" },
    "visible",
    "dummy"
  ]);
  var prop = properties.rows[0].properties[0];
  assert.equal(prop.hasError(), false, "There is no error");
  prop.editor.koValue("");
  assert.equal(prop.hasError(), true, "There is an error");
  prop.editor.koValue("q2");
  assert.equal(prop.hasError(), false, "There is no error");
});

QUnit.test("Question editor definition: getProperties", function(assert) {
  var baseProperties = SurveyQuestionEditorDefinition.getProperties(
    "questionbase"
  );
  var properties = SurveyQuestionEditorDefinition.getProperties("rating");
  assert.equal(
    properties.length,
    baseProperties.length + 2,
    "Rating adds two properties"
  );
  assert.equal(properties[0], "name", "The first rating property");
  assert.equal(
    properties[properties.length - 1],
    "maxRateDescription",
    "The last rating property"
  );
});

QUnit.test("Question editor definition: getTabs", function(assert) {
  var tabs = SurveyQuestionEditorDefinition.getTabs("rating");
  assert.equal(tabs.length, 2, "Rating has two tabs");
  assert.equal(tabs[0].name, "rateValues", "The first tab");
  assert.equal(tabs[1].name, "visibleIf", "The last tab");
});

QUnit.test("Question editor: custom errors", function(assert) {
  var question = new Survey.QuestionText("q1");
  var editor = new SurveyEditor();
  editor.onPropertyValidationCustomError.add(function(editor, options) {
    if (options.propertyName != "title") return;
    if (!options.value) {
      options.error = "The value can't be empty";
      return;
    }
    if (options.value.indexOf(question.name) < 0) {
      options.error = "The value should contain the name property";
    }
  });
  var properties = new SurveyQuestionEditorProperties(
    question,
    ["name", "title"],
    null,
    editor
  );
  assert.equal(
    properties.hasError(),
    true,
    "title should contains name, but it is empty"
  );
  var titleEditor = properties.rows[1].properties[0].editor;
  titleEditor.koValue("q");
  assert.equal(
    properties.hasError(),
    true,
    "title should contains name, but it equals 'q'"
  );
  titleEditor.koValue("!q1!");
  assert.equal(properties.hasError(), false, "There is no error now");
});

QUnit.test("Question editor: custom errors on required field", function(
  assert
) {
  var question = new Survey.QuestionText("invalidName");
  var editor = new SurveyEditor();
  editor.onPropertyValidationCustomError.add(function(editor, options) {
    if (options.propertyName != "name") return;
    if (options.value == "invalidName") {
      options.error = "I'm sorry you can not use that name";
      return;
    }
  });
  var properties = new SurveyQuestionEditorProperties(
    question,
    ["name"],
    null,
    editor
  );
  assert.equal(
    properties.hasError(),
    true,
    "error message should be triggered"
  );
  var nameEditor = properties.rows[0].properties[0].editor;
  nameEditor.koValue("validName");
  assert.equal(properties.hasError(), false, "There is no error now");

  nameEditor.koValue("");
  assert.equal(
    properties.hasError(),
    true,
    "Validator still checks that property is not empty"
  );
  assert.ok(nameEditor.koErrorText(), "Required error text is show");
  nameEditor.koValue("correctName");
  assert.equal(properties.hasError(), false, "There is no errors");
  assert.notOk(nameEditor.koErrorText(), "Required error text is gone");
});
QUnit.test("Question editor: required field errors", function(assert) {
  var question = new Survey.QuestionText("name");
  var editor = new SurveyEditor();
  var properties = new SurveyQuestionEditorProperties(
    question,
    ["name"],
    null,
    editor
  );
  var nameEditor = properties.rows[0].properties[0].editor;
  assert.equal(properties.hasError(), false, "there is no errors");
  assert.notOk(nameEditor.koErrorText(), "Error text is empty");
  nameEditor.koValue("");
  assert.equal(properties.hasError(), true, "Property is empty");
  assert.ok(nameEditor.koErrorText(), "Required error text is show");
  nameEditor.koValue("correctName");
  assert.equal(properties.hasError(), false, "There is no errors");
  assert.notOk(nameEditor.koErrorText(), "Required error text is gone");
});
QUnit.test("Question editor: on property value changing", function(assert) {
  Survey.JsonObject.metaData.addProperty("question", { name: "targetEntity" });
  Survey.JsonObject.metaData.addProperty("question", {
    name: "targetField",
    choices: []
  });
  var question = new Survey.QuestionText("q1");
  var editor = new SurveyEditor();
  editor.onPropertyEditorObjectAssign.add(function(editor, options) {
    if (options.propertyName != "targetField") return;
    if (options.obj) {
      options.obj.targetFieldEditor = options.editor;
    }
  });
  editor.onPropertyValueChanging.add(function(editor, options) {
    if (options.propertyName != "targetEntity") return;
    if (options.obj && options.obj.targetFieldEditor) {
      var choices = [];
      choices.push(options.value + " 1");
      choices.push(options.value + " 2");
      options.obj.targetFieldEditor.koChoices(choices);
    }
  });
  var properties = new SurveyQuestionEditorProperties(
    question,
    ["targetEntity", "targetField"],
    null,
    editor
  );
  var entityEditor = properties.rows[0].properties[0].editor;
  var targetEditor = properties.rows[1].properties[0].editor;

  assert.deepEqual(targetEditor["koChoices"](), [], "The choices is empty");
  entityEditor.koValue("item");
  assert.deepEqual(
    targetEditor["koChoices"](),
    ["item 1", "item 2"],
    "The choices has two items"
  );
});
