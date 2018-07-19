import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { applyAdornerClass } from "../src/surveyjsObjects";
import { titleAdorner } from "../src/adorners/title-editor";
import { createAddItemHandler } from "../src/adorners/item-editor";

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
