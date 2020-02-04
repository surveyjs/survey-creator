import * as Survey from "survey-knockout";
import {
  SurveyQuestionProperties,
  SurveyQuestionEditor,
  SurveyQuestionEditorTab,
  SurveyElementEditorContentNoCategries
} from "../src/questionEditors/questionEditor";
import { SurveyQuestionEditorDefinition } from "../src/questionEditors/questionEditorDefinition";
import { SurveyCreator } from "../src/editor";
import { SurveyDropdownPropertyEditor } from "../src/propertyEditors/propertyEditorFactory";
import { SurveyPropertyMultipleValuesEditor } from "../src/propertyEditors/propertyMultipleValuesEditor";
import { EditorOptionsTests } from "./editorOptionsTests";
import { defaultStrings, editorLocalization } from "../src/editorLocalization";

export default QUnit.module("QuestionEditorsTests");

function createSurveyQuestionEditorTab(
  obj: any,
  properties: Array<string>,
  options: any = null
): SurveyQuestionEditorTab {
  var props = Survey.Serializer.getPropertiesByObj(obj);
  var jsonProperties = [];
  for (var i = 0; i < props.length; i++) {
    if (properties.indexOf(props[i].name) > -1) {
      jsonProperties.push(props[i]);
    }
  }
  return new SurveyQuestionEditorTab(obj, jsonProperties, "", options);
}

QUnit.test("Create correct question editor property tab ", function(assert) {
  var dropdownQuestion = new Survey.QuestionDropdown("q1");
  dropdownQuestion.choices = ["item1"];
  dropdownQuestion.visibleIf = "true";
  var tab = createSurveyQuestionEditorTab(dropdownQuestion, ["choices"]);
  assert.equal(
    tab.htmlTemplate,
    "questioneditortab",
    "itemvalues template should be created"
  );
  assert.equal(
    tab.editorProperties[0].editor.editorType,
    "itemvalue[]",
    "create correct property editor"
  );
  assert.equal(
    tab.editorProperties[0].editor.koValue().length,
    1,
    "set value to property editor correctly (length)"
  );
  assert.equal(
    tab.editorProperties[0].editor.koValue()[0].value,
    "item1",
    "set value to property editor correctly (value)"
  );
  assert.equal(
    tab.editorProperties[0].editor.koValue()[0].text,
    "item1",
    "set value to property editor correctly (text)"
  );
  tab = createSurveyQuestionEditorTab(dropdownQuestion, ["visibleIf"]);
  assert.equal(
    tab.editorProperties[0].editor.koValue(),
    dropdownQuestion.visibleIf,
    "set value of 'visibleIf' to property editor correctly"
  );
});

QUnit.test("Question Editor apply/reset/onChanged", function(assert) {
  var dropdownQuestion = new Survey.QuestionDropdown("q1");
  dropdownQuestion.visibleIf = "true";
  var changeCounter = 0;
  var editor = new SurveyQuestionEditor(dropdownQuestion);
  editor.onChanged = function() {
    changeCounter++;
  };
  var generalTab = <SurveyQuestionEditorTab>editor.koTabs()[0];
  assert.equal(
    generalTab.editorProperties[0].editor.koValue(),
    "q1",
    "name set correct"
  );
  assert.equal(
    generalTab.editorProperties[1].editor.koValue(),
    "",
    "title set correct"
  );
  editor.getPropertyEditorByName("name").editor.koValue("newName");
  editor.getPropertyEditorByName("title").editor.koValue("new title");
  editor.getPropertyEditorByName("visibleIf").editor.koValue("false");
  assert.ok(editor.apply(), "Applied correctly");
  assert.equal(changeCounter, 1, "changed one time");
  assert.equal(dropdownQuestion.name, "newName", "name assign correct");
  assert.equal(dropdownQuestion.title, "new title", "title assign correct");
  assert.equal(dropdownQuestion.visibleIf, "false", "visibleIf assign correct");
});

QUnit.test("Question Editor name is not changed", function(assert) {
  var creator = new SurveyCreator();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  var question = creator.survey.getQuestionByName("q1");
  var editor = new SurveyQuestionEditor(question, null, creator);
  assert.ok(editor.apply(), "Applied correctly, nothing was changed");
});

QUnit.test("Question Editor preserve title on tab changed", function(assert) {
  var dropdownQuestion = new Survey.QuestionDropdown("q1");
  var editor = new SurveyQuestionEditor(dropdownQuestion);
  var generalTab = <SurveyQuestionEditorTab>editor.koTabs()[0];
  generalTab.editorProperties[1].editor.koValue("new title");
  editor.koActiveTab("choices");
  editor.koActiveTab("general");

  assert.equal(
    generalTab.editorProperties[1].editor.koValue(),
    "new title",
    "entered title is ok"
  );
});

QUnit.test("Create correct Question Editor by question type", function(assert) {
  var radioGroupQuestion = new Survey.QuestionRadiogroup("q1");
  var editor = new SurveyQuestionEditor(radioGroupQuestion);
  assert.equal(editor.koTabs().length, 7, "There are 7 tabs");
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
      { name: "general", visible: false },
      { name: "logic", visible: false },
      { name: "others", visible: false }
    ]
  };
  var htmlQuestion = new Survey.QuestionHtml("q1");
  var editor = new SurveyQuestionEditor(htmlQuestion);
  assert.equal(editor.koTabs().length, 1, "There is one visible tab");
  assert.equal(
    editor.koTabs()[0].name,
    "layout",
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
  var options = new EditorOptionsTests();
  options.onCanShowPropertyCallback = onCanShowPropertyCallback;
  var editor = new SurveyQuestionEditor(radioGroupQuestion, null, options);
  assert.ok(editor.koTabs().length > 4, "There are more than 4 tabs");
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
    "logic",
    "The name of the second tab is 'logic'"
  );
  var generalTab = <SurveyQuestionEditorTab>editor.koTabs()[0];
  var hasFound = false;
  var props = generalTab.editorProperties;
  for (var i = 0; i < props.length; i++) {
    if (props[i].property.name == "startWithNewLine") {
      hasFound = true;
      break;
    }
  }
  assert.equal(hasFound, false, "We have made 'startWithNewLine' invisible");
});

QUnit.test("Create  general properties", function(assert) {
  var question = new Survey.QuestionText("q1");
  var tab = createSurveyQuestionEditorTab(question, [
    "name",
    "visible",
    "dummy"
  ]);
  assert.equal(tab.editorProperties.length, 2, "There are two properties");
  assert.equal(
    tab.editorProperties[0].property.name,
    "name",
    "The first property created correctly"
  );
  assert.equal(
    tab.editorProperties[1].property.name,
    "visible",
    "The second property created correctly"
  );
});

QUnit.test("Get tabs", function(assert) {
  SurveyQuestionEditorDefinition.definition["@testClass"] = {
    properties: [
      "name",
      "title",
      { name: "titleLocation", tab: "tab1" },
      { name: "visibleIf", tab: "tab2" }
    ],
    tabs: [
      { name: "tab1", title: "Title 1" },
      { name: "tab2", title: "Title 2" }
    ]
  };

  var tabs = new SurveyQuestionProperties(
    new Survey.Question("q1"),
    null,
    "@testClass"
  ).getTabs();
  assert.equal(tabs.length, 3, "There are three tabs");
  assert.equal(tabs[0].name, "general", "The first tab is 'general'");
  assert.equal(tabs[1].title, "Title 1", "Tab 1 Title");
  assert.equal(tabs[2].title, "Title 2", "Tab 2 Title");
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
  Survey.Serializer.addClass(
    "@testClass",
    ["name:string", "prop1", "prop2", "prop11", "prop21", "car"],
    () => {
      return { getType: () => "@testClass" };
    }
  );

  var question = { getType: () => "@testClass" };
  var editor = new SurveyQuestionEditor(<any>question);

  var generalTab = <SurveyQuestionEditorTab>editor.koTabs()[0];
  assert.equal(editor.koTabs().length, 3, "There are three tabs");
  assert.equal(generalTab.title, "General", "General Title");
  assert.equal(editor.koTabs()[1].title, "Title 1", "Tab 2 Title");
  assert.equal(editor.koTabs()[2].title, "Title 2", "Tab 3 Title");

  assert.equal(
    generalTab.editorProperties.length,
    2,
    "General tab should have 2 rows"
  );
});

QUnit.test("General properties, editor type", function(assert) {
  var question = new Survey.QuestionText("q1");
  var tab = createSurveyQuestionEditorTab(question, [
    "name",
    "visible",
    "title"
  ]);
  assert.equal(
    tab.editorProperties[0].editorType,
    "string",
    "Name property has text edit type"
  );
  assert.equal(
    tab.editorProperties[1].editorType,
    "boolean",
    "visible property has check edit type"
  );
  assert.equal(
    tab.editorProperties[2].editorType,
    "text",
    "title property has textarea edit type"
  );
});

QUnit.test("General properties, work without apply", function(assert) {
  var question = new Survey.QuestionText("q1");
  var tab = createSurveyQuestionEditorTab(question, [
    "name",
    "visible",
    "title"
  ]);
  assert.equal(
    tab.editorProperties[0].editor.koValue(),
    "q1",
    "Initially it is q1"
  );
  tab.editorProperties[0].editor.koValue("q2");
  assert.equal(question.name, "q2", "question.name is 'q2'");
});

QUnit.test("General properties, has errors", function(assert) {
  var question = new Survey.QuestionText("q1");
  var tab = createSurveyQuestionEditorTab(question, [
    "name",
    "visible",
    "dummy"
  ]);
  var prop = tab.editorProperties[0];
  assert.equal(prop.hasError(), false, "There is no error");
  prop.editor.koValue("");
  assert.equal(prop.hasError(), true, "There is an error");
  prop.editor.koValue("q2");
  assert.equal(prop.hasError(), false, "There is no error");
});

QUnit.test("Question editor definition: getProperties", function(assert) {
  var baseProperties = new SurveyQuestionProperties(
    new Survey.Question("q1")
  ).getTabs()[0].properties;
  var properties = new SurveyQuestionProperties(
    new Survey.QuestionRatingModel("q2")
  ).getTabs()[0].properties;
  assert.ok(
    properties.length > baseProperties.length,
    "Rating adds several properties"
  );
  assert.equal(properties[0].name, "name", "The first rating property");
  assert.ok(
    new SurveyQuestionProperties(
      new Survey.QuestionRatingModel("q2")
    ).getProperty("maxRateDescription"),
    "maxRateDescription property is here"
  );
});

QUnit.test("Question editor definition: getTabs", function(assert) {
  var ratingQuestion = new Survey.QuestionRatingModel("q1");
  var properties = new SurveyQuestionProperties(ratingQuestion, null);
  var tabs = properties.getTabs();
  assert.ok(tabs.length > 4, "Rating has more then 4 tabs");
  assert.equal(tabs[0].name, "general", "The first tab");
  assert.equal(tabs[0].index, -1, "The general tab index");
  assert.equal(tabs[1].name, "rateValues", "The second tab");
  assert.equal(tabs[1].index, 10, "The rateValues tab rateValues");
  assert.equal(tabs[2].name, "logic", "The third tab");
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
  var tab = createSurveyQuestionEditorTab(question, ["name", "title"], editor);
  assert.equal(
    tab.hasError(),
    true,
    "title should contains name, but it is empty"
  );
  var titleEditor = tab.editorProperties[1].editor;
  titleEditor.koValue("q");
  assert.equal(
    tab.hasError(),
    true,
    "title should contains name, but it equals 'q'"
  );
  titleEditor.koValue("!q1!");
  assert.equal(tab.hasError(), false, "There is no error now");
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
  var tab = createSurveyQuestionEditorTab(question, ["name"], editor);
  assert.equal(tab.hasError(), true, "error message should be triggered");
  var nameEditor = tab.editorProperties[0].editor;
  nameEditor.koValue("validName");
  assert.equal(tab.hasError(), false, "There is no error now");

  nameEditor.koValue("");
  assert.equal(
    tab.hasError(),
    true,
    "Validator still checks that property is not empty"
  );
  assert.ok(nameEditor.koErrorText(), "Required error text is show");
  nameEditor.koValue("correctName");
  assert.equal(tab.hasError(), false, "There is no errors");
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
  var tab = createSurveyQuestionEditorTab(question, ["choices"], editor);
  assert.equal(tab.hasError(), true, "error message should be triggered");
  question.choices = ["item1", "item2", "item3"];
  assert.equal(tab.hasError(), false, "error message should not be triggered");
});

QUnit.test("Question editor: required field errors", function(assert) {
  var question = new Survey.QuestionText("name");
  var editor = new SurveyCreator();
  var tab = createSurveyQuestionEditorTab(question, ["name"], editor);
  var nameEditor = tab.editorProperties[0].editor;
  assert.equal(tab.hasError(), false, "there is no errors");
  assert.notOk(nameEditor.koErrorText(), "Error text is empty");
  nameEditor.koValue("");
  assert.equal(tab.hasError(), true, "Property is empty");
  assert.ok(nameEditor.koErrorText(), "Required error text is show");
  nameEditor.koValue("correctName");
  assert.equal(tab.hasError(), false, "There is no errors");
  assert.notOk(nameEditor.koErrorText(), "Required error text is gone");
});
QUnit.test("Question editor: on property value changing", function(assert) {
  Survey.Serializer.addProperty("question", { name: "targetEntity" });
  Survey.Serializer.addProperty("question", {
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
      choices.push(options.newValue + " 1");
      choices.push(options.newValue + " 2");
      options.obj.targetFieldEditor.koChoices(choices);
    }
  });
  var tab = createSurveyQuestionEditorTab(
    question,
    ["targetEntity", "targetField"],
    editor
  );
  var entityEditor = tab.editorProperties[0].editor;
  var targetEditor = tab.editorProperties[1].editor;

  assert.deepEqual(targetEditor["koChoices"](), [], "The choices is empty");
  entityEditor.koValue("item");
  assert.deepEqual(
    targetEditor["koChoices"](),
    ["item 1", "item 2"],
    "The choices has two items"
  );
  Survey.Serializer.removeProperty("question", "targetEntity");
  Survey.Serializer.removeProperty("question", "targetField");
});

QUnit.test("Question editor: depended property, choices", function(assert) {
  Survey.Serializer.addProperty("question", { name: "targetEntity" });
  Survey.Serializer.addProperty("question", {
    name: "targetField",
    dependsOn: ["targetEntity"],
    choices: function(obj: any) {
      var entity = !!obj ? obj["targetEntity"] : null;
      if (!entity) return [];
      return [entity + " 1", entity + " 2"];
    }
  });
  var question = new Survey.QuestionText("q1");
  var editor = new SurveyElementEditorContentNoCategries(question);
  var entityEditor = editor.getPropertyEditorByName("targetEntity").editor;
  var targetEditor = editor.getPropertyEditorByName("targetField").editor;

  assert.deepEqual(targetEditor["koChoices"](), [], "The choices is empty");
  entityEditor.koValue("item");
  var choices = targetEditor["koChoices"]();
  assert.deepEqual(choices.length, 2, "The choices has two items");
  assert.deepEqual(choices[0].value, "item 1", "The first item value");
  assert.deepEqual(choices[1].value, "item 2", "The second item value");

  Survey.Serializer.removeProperty("question", "targetEntity");
  Survey.Serializer.removeProperty("question", "targetField");
});

QUnit.test(
  "Support old property grid: show localized display text from p.propertyName.title",
  function(assert) {
    Survey.Serializer.addProperty("question", "customProp");
    defaultStrings.p["customProp"] = {
      name: "MyCustomProp",
      title: "Custom Prop Ttile"
    };
    assert.equal(
      editorLocalization.getPropertyName("customProp"),
      "MyCustomProp",
      "Get correct display Name localization"
    );
    assert.equal(
      editorLocalization.getPropertyTitle("customProp"),
      "Custom Prop Ttile",
      "Get correct title localization"
    );
    assert.equal(
      editorLocalization.getPropertyNameInEditor("customProp"),
      "MyCustomProp",
      "Custom Prop Name in Editor"
    );
    var question = new Survey.QuestionText("q1");
    var editor = new SurveyElementEditorContentNoCategries(question);
    var customProp = editor.getPropertyEditorByName("customProp");
    assert.equal(
      customProp.displayName,
      "MyCustomProp",
      "Use localized property name"
    );
    assert.equal(
      customProp.title,
      "Custom Prop Ttile",
      "Use localized property title"
    );
    Survey.Serializer.removeProperty("question", "customProp");
  }
);

QUnit.test("Question editor: change editor.readOnly", function(assert) {
  var question = new Survey.QuestionText("q2");
  var editor = new SurveyCreator();
  editor.onGetPropertyReadOnly.add(function(editor, options) {
    if (options.propertyName != "name") return;
    options.readOnly = options.obj.name == "q1";
  });
  var tab = createSurveyQuestionEditorTab(question, ["name"], editor);
  var questionEditor = tab.editorProperties[0].editor;
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
Survey.Serializer.addClass(
  "classTester",
  ["name", "html:html"],
  function() {
    return new SurveyQuestionEditorTester();
  },
  "base"
);

QUnit.test("Question editor: build properties on fly", function(assert) {
  var obj = new SurveyQuestionEditorTester();
  var elementEditor = new SurveyQuestionEditor(obj);
  assert.equal(elementEditor.koTabs().length, 1, "There are one tab");
  var tab = elementEditor.koTabs()[0];
  assert.equal(tab.editorProperties.length, 2, "There are two properties");
  var propertyEditor = elementEditor.getPropertyEditorByName("html");
  assert.ok(propertyEditor, "Find the property");
});

QUnit.test("Question editor: change copied object", function(assert) {
  var survey = new Survey.Survey({ locale: "de", title: "Survey" });
  var editor = new SurveyQuestionEditor(survey);
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
QUnit.test("Use localized text for dropdown property editor", function(assert) {
  var survey = new Survey.Survey();
  var propLocale = new SurveyDropdownPropertyEditor(
    Survey.Serializer.findProperty("survey", "locale")
  );
  propLocale.object = survey;
  var choices = propLocale.koChoices();
  var item = null;
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].value == "en") {
      item = choices[i];
      break;
    }
  }
  assert.ok(item, "English locale is found");
  assert.equal(item.text, "english", "Use text");
});
QUnit.test(
  "Question editor: copied object should have parent property, bug: https://surveyjs.answerdesk.io/ticket/details/T2531",
  function(assert) {
    var survey = new Survey.Survey();
    var page = survey.addNewPage("page1");
    var panel = page.addNewPanel("panel1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = panel.addNewQuestion("text", "q2");
    var editor = new SurveyQuestionEditor(q1);
    assert.equal(
      editor.editableObj.parent.name,
      "page1",
      "copied object has page as parent"
    );
    editor = new SurveyQuestionEditor(q2);
    assert.equal(
      editor.editableObj.parent.name,
      "panel1",
      "copied object has panel as parent"
    );
  }
);
QUnit.test("DependedOn properties, koVisible", function(assert) {
  Survey.Serializer.addProperty("text", {
    name: "customProp1",
    dependsOn: ["inputType"],
    visibleIf: function(obj) {
      return obj.inputType == "date";
    }
  });
  var savedDefinition = JSON.stringify(
    SurveyQuestionEditorDefinition.definition.text
  );
  SurveyQuestionEditorDefinition.definition.text.properties.push("customProp1");

  var question = new Survey.QuestionText("q1");

  var editor = new SurveyQuestionEditor(question);
  var tab = editor.koTabs()[0];
  var prop1 = tab.getPropertyEditorByName("inputType");
  var prop2 = tab.getPropertyEditorByName("customProp1");

  assert.equal(prop2.name, "customProp1", "The property name is correct");
  assert.equal(prop2.koVisible(), false, "It is invisible by default");
  prop1.koValue("date");
  assert.equal(prop2.koVisible(), true, "It visible now");
  prop1.koValue("range");
  assert.equal(prop2.koVisible(), false, "It is invisible again");

  SurveyQuestionEditorDefinition.definition.text = JSON.parse(savedDefinition);
  Survey.Serializer.removeProperty("text", "customProp1");
});

QUnit.test("DependedOn properties, dynamic choices", function(assert) {
  Survey.Serializer.addProperty("text", { name: "targetEntity" });
  Survey.Serializer.addProperty("text", {
    name: "targetField",
    dependsOn: "targetEntity",
    choices: function(obj) {
      return getChoicesByEntity(obj);
    }
  });
  function getChoicesByEntity(obj: any): Array<any> {
    var entity = !!obj ? obj["targetEntity"] : null;
    var choices = [];
    if (!entity) return choices;
    choices.push({ value: null });
    choices.push({ value: entity + " 1", text: entity + " 1" });
    choices.push({ value: entity + " 2", text: entity + " 2" });
    return choices;
  }
  var editorDefinition = SurveyQuestionEditorDefinition.definition.text;
  var savedDefinition = JSON.stringify(editorDefinition);
  editorDefinition.properties.push("targetEntity");
  editorDefinition.properties.push("targetField");

  var question = new Survey.QuestionText("q1");

  var editor = new SurveyQuestionEditor(question);
  var tab = editor.koTabs()[0];
  var entityProp = tab.getPropertyEditorByName("targetEntity");
  var fieldProp = tab.getPropertyEditorByName("targetField");
  var fieldPropEditor = <SurveyDropdownPropertyEditor>fieldProp.editor;

  assert.equal(fieldPropEditor.koChoices().length, 0, "It is empty by default");
  entityProp.koValue("Account");
  assert.equal(
    fieldPropEditor.koChoices().length,
    3,
    "Choices updated immediately"
  );

  SurveyQuestionEditorDefinition.definition.text = JSON.parse(savedDefinition);
  Survey.Serializer.removeProperty("text", "targetEntity");
  Survey.Serializer.removeProperty("text", "targetField");
});

QUnit.test("DependedOn properties + multiple, dynamic choices", function(
  assert
) {
  Survey.Serializer.addProperty("text", { name: "targetEntity" });
  Survey.Serializer.addProperty("text", {
    name: "targetField:multiplevalues",
    dependsOn: "targetEntity",
    choices: function(obj) {
      return getChoicesByEntity(obj);
    }
  });
  function getChoicesByEntity(obj: any): Array<any> {
    var entity = !!obj ? obj["targetEntity"] : null;
    var choices = [];
    if (!entity) return choices;
    choices.push({ value: null });
    choices.push({ value: entity + " 1", text: entity + " 1" });
    choices.push({ value: entity + " 2", text: entity + " 2" });
    return choices;
  }
  var editorDefinition = SurveyQuestionEditorDefinition.definition.text;
  var savedDefinition = JSON.stringify(editorDefinition);
  editorDefinition.properties.push("targetEntity");
  editorDefinition.properties.push("targetField");

  var question = new Survey.QuestionText("q1");

  var editor = new SurveyQuestionEditor(question);
  var tab = editor.koTabs()[0];
  var entityProp = tab.getPropertyEditorByName("targetEntity");
  var fieldProp = tab.getPropertyEditorByName("targetField");
  var fieldPropEditor = <SurveyPropertyMultipleValuesEditor>fieldProp.editor;

  assert.equal(fieldPropEditor.items.length, 0, "It is empty by default");
  entityProp.koValue("Account");
  assert.equal(fieldPropEditor.items.length, 3, "Choices updated immediately");

  SurveyQuestionEditorDefinition.definition.text = JSON.parse(savedDefinition);
  Survey.Serializer.removeProperty("text", "targetEntity");
  Survey.Serializer.removeProperty("text", "targetField");
});

QUnit.test(
  "Survey Editor cancel, Bug#T2809 (customer marked it as private)",
  function(assert) {
    var survey = new Survey.SurveyModel({});
    var editor = new SurveyQuestionEditor(survey);
    var propertyEditor = editor.getPropertyEditorByName("maxTimeToFinish");
    propertyEditor.editor.koValue(5);
    propertyEditor.editor.apply();
    assert.equal(
      editor.editableObj["maxTimeToFinish"],
      5,
      "Editable obj is set"
    );
    assert.equal(editor.obj["maxTimeToFinish"], 0, "obj is not set");
    editor.reset();
    assert.equal(survey["maxTimeToFinish"], 0, "survey is not set");
  }
);

QUnit.test("Add property into existing cagetory", function(assert) {
  Survey.Serializer.addProperty("question", {
    name: "name2",
    category: "general",
    visibleIndex: 1
  });
  Survey.Serializer.addProperty("question", {
    name: "visibleIf2",
    category: "logic",
    visibleIndex: 10
  });
  Survey.Serializer.addProperty("question", {
    name: "enableIf2",
    category: "logic"
  });
  var creator = new SurveyCreator();
  var question = creator.survey.currentPage.addNewQuestion("text", "question1");
  var editor = new SurveyQuestionEditor(question);
  var generalTab = editor.getTabByName("general");
  assert.ok(
    generalTab.getPropertyEditorByName("name2"),
    "property editor for name2 is here"
  );
  assert.equal(
    generalTab.editorProperties[1].name,
    "name2",
    "Property inserted into general correctly"
  );
  var logicTab = editor.getTabByName("logic");
  var logicPropCount = logicTab.editorProperties.length;
  assert.equal(
    logicTab.editorProperties[logicPropCount - 2].name,
    "enableIf2",
    "Property inserted into logic correctly"
  );
  assert.equal(
    logicTab.editorProperties[logicPropCount - 1].name,
    "visibleIf2",
    "Property added into logic correctly"
  );
  Survey.Serializer.removeProperty("question", "name2");
  Survey.Serializer.removeProperty("question", "visibleIf2");
  Survey.Serializer.removeProperty("question", "enableIf2");
});

QUnit.test("Add property into new cagetory", function(assert) {
  Survey.Serializer.addProperty("question", {
    name: "name2",
    category: "newcategory"
  });
  Survey.Serializer.addProperty("question", {
    name: "name3",
    category: "newcategory",
    categoryIndex: 150
  });
  var creator = new SurveyCreator();
  var question = creator.survey.currentPage.addNewQuestion("text", "question1");
  var editor = new SurveyQuestionEditor(question);
  var newTab = editor.getTabByName("newcategory");
  assert.ok(newTab, "newcategory is here");
  assert.ok(
    newTab.getPropertyEditorByName("name2"),
    "property editor for name2 is here"
  );
  assert.equal(
    newTab.editorProperties[0].name,
    "name2",
    "First property added into newcategory correctly"
  );
  assert.equal(
    newTab.editorProperties[1].name,
    "name3",
    "Second property added into newcategory correctly"
  );
  assert.equal(
    editor.koTabs()[2].name,
    "newcategory",
    "Insert category as first"
  );
  Survey.Serializer.removeProperty("question", "name2");
  Survey.Serializer.removeProperty("question", "name3");
});
