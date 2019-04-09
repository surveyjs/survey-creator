import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { applyAdornerClass } from "../src/surveyjsObjects";
import { titleAdorner } from "../src/adorners/title-editor";
import { createAddItemHandler } from "../src/adorners/item-editor";
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
    Survey.JsonObject.metaData.addProperty("itemvalue", "guid");
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
    Survey.JsonObject.metaData.removeProperty("itemvalue", "guid");
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
