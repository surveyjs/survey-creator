import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { applyAdornerClass } from "../src/surveyjsObjects";
import { titleAdorner } from "../src/adorners/title-editor";

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
