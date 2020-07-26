import { getNextValue } from "../src/utils/utils";
import { DesignerContainerViewModel } from "../src/utils/designer-container";
import ko from "knockout";

export default QUnit.module("UtilsTests");

QUnit.test("getNextValue", function(assert) {
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
});

QUnit.test("DesignerContainerViewModel changed unsubscribe", function(assert) {
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

QUnit.test("DesignerContainerViewModel default icons", function(assert) {
  var dcm = new DesignerContainerViewModel(
    { tabs: ko.observableArray() },
    { element: { offsetWidth: 0, style: {} } }
  );
  assert.ok(dcm.iconLeftOpen, "icon-left-open");
  assert.ok(dcm.iconLeftClose, "icon-left-close");
  assert.ok(dcm.iconRightOpen, "icon-right-open");
  assert.ok(dcm.iconRightClose, "icon-right-close");
});
