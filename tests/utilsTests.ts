import { getNextValue } from "../src/utils/utils";

export default QUnit.module("UtilsTests");

QUnit.test("getNextValue", function(assert) {
  var values: any = ["item1", "item5", "itemzzz", "zzz", 1];
  var prefix = "item";
  var result = null;
  result = getNextValue(prefix, values);
  assert.equal(result, "item6");
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
  assert.equal(getNextValue(prefix, ["yes"]), "no");
  assert.equal(getNextValue(prefix, ["No"]), "Yes");
  assert.equal(getNextValue(prefix, ["TRUE"]), "FALSE");
});
