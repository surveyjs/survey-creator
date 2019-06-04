import * as Survey from "survey-knockout";
import {
  SurveyQuestionProperties,
  SurveyQuestionEditor,
  SurveyQuestionEditorTab
} from "../src/questionEditors/questionEditor";
import { SurveyQuestionEditorProperties } from "../src/questionEditors/questionEditorProperties";
import { SurveyQuestionEditorDefinition } from "../src/questionEditors/questionEditorDefinition";
import { SurveyCreator } from "../src/editor";
import { assertRegExpLiteral } from "babel-types";

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
    "itemvalue[]",
    "create correct property editor"
  );
  assert.equal(
    tab.properties.rows[0].properties[0].editor.editingValue.length,
    1,
    "set value to property editor correctly (length)"
  );
  assert.equal(
    tab.properties.rows[0].properties[0].editor.editingValue[0].value,
    "item1",
    "set value to property editor correctly (value)"
  );
  assert.equal(
    tab.properties.rows[0].properties[0].editor.editingValue[0].text,
    "item1",
    "set value to property editor correctly (text)"
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
  var visibleIfTab = <SurveyQuestionEditorTab>(
    editor.koTabs()[editor.koTabs().length - 2]
  );
  visibleIfTab.properties.rows[0].properties[0].editor["koValue"]("false");
  editor.apply();
  assert.equal(changeCounter, 1, "changed one time");
  assert.equal(dropdownQuestion.name, "newName", "name assign correct");
  assert.equal(dropdownQuestion.title, "new title", "title assign correct");
  assert.equal(dropdownQuestion.visibleIf, "false", "visibleIf assign correct");
});

QUnit.test("Question Editor preserve title on tab changed", function(assert) {
  var dropdownQuestion = new Survey.QuestionDropdown("q1");
  var editor = new SurveyQuestionEditor(dropdownQuestion, null);
  var generalTab = <SurveyQuestionEditorTab>editor.koTabs()[0];
  generalTab.properties.rows[1].properties[0].editor.koValue("new title");
  editor.koActiveTab("choices");
  editor.koActiveTab("general");

  assert.equal(
    generalTab.properties.rows[1].properties[0].editor.koValue(),
    "new title",
    "entered title is ok"
  );
});

QUnit.test("Create correct Question Editor by question type", function(assert) {
  var radioGroupQuestion = new Survey.QuestionRadiogroup("q1");
  var editor = new SurveyQuestionEditor(radioGroupQuestion, null);
  assert.equal(editor.koTabs().length, 5, "There are 5 tabs");
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
  assert.equal(editor.koTabs().length, 4, "There are 4 tabs");
  assert.equal(
    editor.koTabs()[1].name,
    "choices",
    "The name of the second tab is 'choices'"
  );
  assert.equal(
    editor.koTabs()[2].name,
    "choicesByUrl",
    "The name of the second tab is 'choicesByUrl'"
  );
  assert.equal(
    editor.koTabs()[3].name,
    "enableIf",
    "The name of the second tab is 'enableIf'"
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
      return { getType: () => "@testClass" };
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

QUnit.test("General properties, work without apply", function(assert) {
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
  assert.equal(question.name, "q2", "question.name is 'q2'");
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
  var baseProperties = SurveyQuestionEditorDefinition.getProperties("question");
  var properties = SurveyQuestionEditorDefinition.getProperties("rating");
  assert.equal(
    properties.length,
    baseProperties.length + 5,
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
  assert.equal(tabs.length, 3, "Rating has three tabs");
  assert.equal(tabs[0].name, "rateValues", "The first tab");
  assert.equal(tabs[1].name, "visibleIf", "The last tab");
  assert.equal(tabs[2].name, "enableIf", "The last tab");
});

QUnit.test("Question editor: custom errors", function(assert) {
  var question = new Survey.QuestionText("q1");
  var editor = new SurveyCreator();
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
  var editor = new SurveyCreator();
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
QUnit.test("Question editor: custom errors on unique itemvalues", function(
  assert
) {
  var question = new Survey.QuestionCheckbox("question");
  var editor = new SurveyCreator();
  editor.onPropertyValidationCustomError.add(function(editor, options) {
    if (options.propertyName !== "choices") return;
    var items = options.value;
    if (!items || !Array.isArray(items)) return;
    var hash = {};
    for (var i = 0; i < items.length; i++) {
      var val = !!items[i].value ? items[i].value : items[i];
      if (!val) continue;
      if (hash[val]) {
        options.error =
          "The value '" + val + "' is not unique. Please correct it";
        return;
      }
      hash[val] = 1;
    }
  });
  question.choices = ["item1", "item2", "item2"];
  var properties = new SurveyQuestionEditorProperties(
    question,
    ["choices"],
    null,
    editor
  );
  assert.equal(
    properties.hasError(),
    true,
    "error message should be triggered"
  );
  question.choices = ["item1", "item2", "item3"];
  assert.equal(
    properties.hasError(),
    false,
    "error message should not be triggered"
  );
});

QUnit.test("Question editor: required field errors", function(assert) {
  var question = new Survey.QuestionText("name");
  var editor = new SurveyCreator();
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
  var editor = new SurveyCreator();
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
  Survey.JsonObject.metaData.removeProperty("question", "targetEntity");
  Survey.JsonObject.metaData.removeProperty("question", "targetField");
});

QUnit.test("Question editor: depended property, choices", function(assert) {
  Survey.JsonObject.metaData.addProperty("question", { name: "targetEntity" });
  Survey.JsonObject.metaData.addProperty("question", {
    name: "targetField",
    choices: function(obj: any) {
      var entity = !!obj ? obj.getEditingPropertyValue("targetEntity") : null;
      if (!entity) return [];
      return [entity + " 1", entity + " 2"];
    }
  });
  var question = new Survey.QuestionText("q1");
  var editor = new SurveyCreator();
  editor.onPropertyEditorObjectAssign.add(function(editor, options) {
    if (options.propertyName != "targetField") return;
    if (options.obj) {
      options.obj.targetFieldEditor = options.editor;
    }
  });
  editor.onPropertyValueChanging.add(function(editor, options) {
    if (options.propertyName != "targetEntity") return;
    if (options.obj && options.obj.targetFieldEditor) {
      options.obj.targetFieldEditor.updateChoices();
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
  var choices = targetEditor["koChoices"]();
  assert.deepEqual(choices.length, 2, "The choices has two items");
  assert.deepEqual(choices[0].value, "item 1", "The first item value");
  assert.deepEqual(choices[1].value, "item 2", "The second item value");

  Survey.JsonObject.metaData.removeProperty("question", "targetEntity");
  Survey.JsonObject.metaData.removeProperty("question", "targetField");
});
QUnit.test("Question editor: change editor.readOnly", function(assert) {
  var question = new Survey.QuestionText("q2");
  var editor = new SurveyCreator();
  editor.onGetPropertyReadOnly.add(function(editor, options) {
    if (options.propertyName != "name") return;
    options.readOnly = options.obj.name == "q1";
  });
  var properties = new SurveyQuestionEditorProperties(
    question,
    ["name"],
    null,
    editor
  );
  var questionEditor = properties.rows[0].properties[0].editor;
  assert.equal(
    questionEditor.readOnly(),
    false,
    "The question 'q2' is not readOnly"
  );
  question.name = "q1";
  questionEditor.object = question;
  assert.equal(
    questionEditor.readOnly(),
    true,
    "The question 'q1' is readOnly"
  );
});

class SurveyQuestionEditorTester extends Survey.Base {
  constructor() {
    super();
  }
  public getType() {
    return "classTester";
  }
  public html: string;
  public name: string;
}
Survey.JsonObject.metaData.addClass(
  "classTester",
  ["name", "html:html"],
  function() {
    return new SurveyQuestionEditorTester();
  },
  "base"
);

QUnit.test("Question editor: build properties on fly", function(assert) {
  var obj = new SurveyQuestionEditorTester();
  var elementEditor = new SurveyQuestionEditor(obj, null, null, null);
  assert.equal(elementEditor.koTabs().length, 1, "There are one tab");
  var tab = elementEditor.koTabs()[0];
  assert.equal(
    tab.properties.rows.length,
    2,
    "There are two rows, two properties"
  );
  var propertyEditor = elementEditor.getPropertyEditorByName("html");
  assert.ok(propertyEditor, "Find the property");
});

QUnit.test("Question editor: change copied object", function(assert) {
  var survey = new Survey.Survey({ locale: "de", title: "Survey" });
  var editor = new SurveyQuestionEditor(survey, null, null, null);
  assert.ok(editor.editableObj, "copiedObj exists");
  assert.equal(editor.editableObj.locale, "de", "localed copied correctly");
  var propLocale = editor.getPropertyEditorByName("locale");
  propLocale.editor.koValue("fr");
  assert.equal(
    editor.editableObj.locale,
    "fr",
    "Locale set into editable survey"
  );
});
