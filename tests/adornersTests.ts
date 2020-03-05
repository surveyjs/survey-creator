import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { applyAdornerClass } from "../src/surveyjsObjects";
import { titleAdorner, TitleInplaceEditor } from "../src/adorners/title-editor";
import { createAddItemHandler } from "../src/adorners/item-editor";
import {
  questionActionsAdorner,
  panelActionsAdorner
} from "../src/adorners/question-actions";
import { SurveyCreator } from "../src/editor";

export default QUnit.module("Adorners Tests");

QUnit.test("adorners getMarkerClass test", function(assert) {
  var classes = "sv_p_title";
  var adornerClass = "title_editable";

  assert.equal(
    applyAdornerClass(classes, adornerClass),
    "sv_p_title title_editable"
  );
  assert.equal(applyAdornerClass(null, adornerClass), "title_editable");
  assert.equal(applyAdornerClass(classes, null), "sv_p_title");
});

QUnit.test(
  "Serialize custom properties - https://surveyjs.answerdesk.io/ticket/details/T875",
  function(assert) {
    Survey.Serializer.addProperty("itemvalue", "guid");
    var question = new Survey.QuestionCheckboxModel("q1");
    var addItemHandler = createAddItemHandler(
      question,
      itemValue => (itemValue["guid"] = "some guid")
    );

    addItemHandler();
    var jsonObj = new Survey.JsonObject();
    var originalJson = {
      name: "q1",
      choices: [{ value: "item1", guid: "some guid" }]
    };
    var json = jsonObj.toJsonObject(question);
    assert.deepEqual(
      json,
      originalJson,
      "Custom property has serialized correctly"
    );
    Survey.Serializer.removeProperty("itemvalue", "guid");
  }
);

QUnit.test(
  "On property changing event for adorners - https://surveyjs.answerdesk.io/ticket/details/T1245 - Adjusting property value in event onPropertyValueChanging",
  function(assert) {
    var done = assert.async();
    var adorner = titleAdorner.getElementName;
    var editor = new SurveyCreator();
    var item = new Survey.ItemValue("1");
    ko.components.get("title-editor", (component: any) => {
      var titleEditorViewModel = component.createViewModel(
        { model: item, name: "value", editor: editor },
        { element: {} }
      );
      var callCounter = 0;
      editor.onPropertyValueChanging.add(() => {
        callCounter++;
      });

      titleEditorViewModel.editingName("2");
      titleEditorViewModel.postEdit();
      assert.equal(callCounter, 1, "It should be called only one time");
      done();
    });
  }
);

QUnit.test("titleAdorner.pageTitleEditable", function(assert) {
  var pageMock = {
    getType: () => "page"
  };
  assert.ok(titleAdorner.pageTitleEditable);
  assert.equal(
    titleAdorner.getMarkerClass(pageMock),
    "title_editable",
    "Allow to edit page title"
  );
  titleAdorner.pageTitleEditable = false;
  assert.equal(
    titleAdorner.getMarkerClass(pageMock),
    "",
    "Disable edit page title"
  );
});

QUnit.test(
  "panelActionsAdorner.getMarkerClass - T3379 - Custom adorner rendering bug",
  function(assert) {
    var pageMock = {
      parent: true,
      isPanel: true,
      getType: () => "page"
    };
    var panelMock = {
      parent: true,
      isPanel: true,
      getType: () => "panel"
    };
    assert.equal(
      panelActionsAdorner.getMarkerClass(pageMock),
      "",
      "Don't inject into page"
    );
    assert.equal(
      panelActionsAdorner.getMarkerClass(panelMock),
      "panel_actions",
      "Inject into panel"
    );
  }
);

QUnit.test(
  "questionActionsAdorner.getMarkerClass - T3379 - Custom adorner rendering bug",
  function(assert) {
    var pageMock = {
      parent: true,
      isPanel: false,
      isPage: true,
      getType: () => "page"
    };
    var panelMock = {
      parent: true,
      isPanel: true,
      isPage: false,
      getType: () => "panel"
    };
    var questionMock = {
      parent: true,
      isPanel: false,
      isPage: false,
      getType: () => "question"
    };
    assert.equal(
      questionActionsAdorner.getMarkerClass(pageMock),
      "",
      "Don't inject into page"
    );
    assert.equal(
      questionActionsAdorner.getMarkerClass(panelMock),
      "",
      "Don't inject into panel"
    );
    assert.equal(
      questionActionsAdorner.getMarkerClass(questionMock),
      "question_actions",
      "Inject into question"
    );
  }
);

QUnit.test("TitleInplaceEditor error property", function(assert) {
  var model = new TitleInplaceEditor({}, "test", null, "");
  model.valueChanged = newValue => (newValue === "test1" ? "error" : "");
  assert.equal(model.error(), "", "No errors initial");
  model.editingName("test");
  model.postEdit();
  assert.equal(model.error(), "", "No errors first change");
  model.editingName("test1");
  model.postEdit();
  assert.equal(model.error(), "error", "Errors");
  model.editingName("test");
  model.postEdit();
  assert.equal(model.error(), "", "No errors revert back");
});
