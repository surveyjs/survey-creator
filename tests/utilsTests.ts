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
});
