import ko from "knockout";

import { getNextValue } from "../src/utils/utils";
import { DesignerContainerViewModel } from "../src/utils/designer-container";
import { ButtonViewModel } from "../src/utils/button";

export default QUnit.module("UtilsTests");

QUnit.test("getNextValue", function (assert) {
  var prefix = "item";
  assert.equal(getNextValue(prefix, ["item4", "item5", "item3"]), "item6");
  assert.equal(
    getNextValue(prefix, ["item1", "item5", "itemzzz", "zzz", 1]),
    2
  );
  assert.equal(getNextValue(prefix, ["item1", "item2", "item3"]), "item4");
  assert.equal(
    getNextValue(prefix, ["item1", "item2", "item3", "item4", "item4"]),
    "item5"
  );
  assert.equal(getNextValue(prefix, []), "item1");
  assert.equal(
    getNextValue(prefix, ["Column 1", "Column 3", "Column 2"]),
    "Column 4"
  );
  assert.equal(getNextValue(prefix, ["1", "3", "4"]), "5");
  assert.equal(getNextValue(prefix, [1, 3, 4]), 5);
  assert.equal(getNextValue(prefix, ["yes"]), "no");
  assert.equal(getNextValue(prefix, ["No"]), "Yes");
  assert.equal(getNextValue(prefix, ["TRUE"]), "FALSE");
  assert.equal(
    getNextValue(prefix, [
      "12345671234567890",
      "12345671234567891",
      "12345671234567892",
    ]),
    "12345671234567893"
  );
  assert.equal(getNextValue(prefix, ["1 day", "2 days", "3 days"]), "4 days");
  assert.equal(getNextValue(prefix, ["a01"]), "a02");
  assert.equal(getNextValue(prefix, ["a01", "a02"]), "a03");
  assert.equal(getNextValue(prefix, ["aaa1bbb2ccc3"]), "aaa1bbb2ccc4");
});

QUnit.test("DesignerContainerViewModel changed unsubscribe", function (assert) {
  var changed = ko.observable(0);
  var dcm = new DesignerContainerViewModel(
    { changed: changed, tabs: ko.observableArray() },
    { element: { offsetWidth: 0, style: {} } }
  );
  assert.ok(dcm.isOpen(), "open");
  dcm.dispose();
  changed(1);
  assert.ok(dcm.isOpen(), "still open");
});

QUnit.test("DesignerContainerViewModel default icons", function (assert) {
  var dcm = new DesignerContainerViewModel(
    { tabs: ko.observableArray() },
    { element: { offsetWidth: 0, style: {} } }
  );
  assert.ok(dcm.iconLeftOpen, "icon-left-open");
  assert.ok(dcm.iconLeftClose, "icon-left-close");
  assert.ok(dcm.iconRightOpen, "icon-right-open");
  assert.ok(dcm.iconRightClose, "icon-right-close");
});

QUnit.test("ButtonViewModel", function (assert) {
  let counter = 0;
  const action = {
    id: "custom-preview",
    enabled: ko.observable(true),
    title: "Survey Preview",
    action: function() {
      counter++;
    }
  }
  const button = new ButtonViewModel(action);
  assert.ok(button.showTitle);
  assert.equal(counter, 0);
  assert.notOk(button.disabled);
  button.action(button);
  assert.equal(counter, 1);

  action.enabled(false);
  assert.ok(button.disabled);
  button.action(button);
  assert.equal(counter, 1);
});
