import { SurveyJSON5 } from "../src/json5";

export default QUnit.module("JSON5Tests");

QUnit.test("Simple test", function(assert) {
  var json5 = new SurveyJSON5(1);
  var obj = json5.parse(
    "{ questions: [{ type: 'text', name: 'temp', size: 20 }]}"
  );
  assert.equal(obj.questions.length, 1, "parsed correctly");
  assert.equal(obj["pos"].start, 0, "add 'pos' property");
});
QUnit.test("parse only part of the string", function(assert) {
  var json5 = new SurveyJSON5(1);
  var obj = json5.parse(
    "0123456789{ questions: [{ type: 'text', name: 'temp', size: 20 }]}0123456789",
    null,
    10,
    66
  );
  assert.equal(obj.questions.length, 1, "parsed correctly");
  assert.equal(obj["pos"].start, 10, "add 'pos' property");
});
QUnit.test("Full information about positions", function(assert) {
  var json5 = new SurveyJSON5(2);
  var obj = json5.parse(
    "{ questions: [{ type: 'text', name: 'temp', size: 20 }]}"
  );
  var qPos = obj["pos"]["questions"];
  assert.equal(qPos.start, 2, "start question property");
  assert.equal(qPos.valueStart, 12, "start question property value");
  assert.equal(qPos.end, 54, "end question property");
});

QUnit.test("Full information about positions - several properties", function(
  assert
) {
  var json5 = new SurveyJSON5(2);
  var obj = json5.parse("{ type: 'text', name: 'temp', size: 20 }");
  var pos = obj["pos"]["type"];
  assert.equal(pos.start, 2, "start question property for 'type'");
  assert.equal(pos.valueStart, 7, "start question property value for 'type'");
  assert.equal(pos.valueEnd, 13, "end question property value for 'type'");
  assert.equal(pos.end, 14, "end question property for 'type'");

  pos = obj["pos"]["name"];
  assert.equal(pos.start, 14, "start question property for 'name'");
  assert.equal(pos.valueStart, 21, "start question property value for 'name'");
  assert.equal(pos.valueEnd, 27, "end question property value for 'name'");
  assert.equal(pos.end, 27, "end question property for 'name'");

  pos = obj["pos"]["size"];
  assert.equal(pos.start, 28, "start question property for 'size'");
  assert.equal(pos.valueStart, 35, "start question property value for 'size'");
  assert.equal(pos.valueEnd, 37, "end question property value for 'size'");
  assert.equal(pos.end, 37, "end question property for 'size'");
});
QUnit.test("Full information about positions - array", function(assert) {
  var json5 = new SurveyJSON5(2);
  var obj = json5.parse("{ choices:[0, 1]}");
  var pos = obj["pos"]["choices"];
  assert.equal(pos.start, 2, "start question property");
  assert.equal(pos.valueStart, 10, "start question property value");
  assert.equal(pos.end, 15, "end question property for");
});
QUnit.test("Empty Json test", function(assert) {
  var json5 = new SurveyJSON5(1);
  var obj = json5.parse("{ }  ");
  assert.equal(obj["pos"].start, 0, "start 'pos' position");
  assert.equal(obj["pos"].end, 2, "end 'pos' position");
});
QUnit.test("One property Json test", function(assert) {
  var json5 = new SurveyJSON5(1);
  var obj = json5.parse("{ v:1 }  ");
  assert.equal(obj["pos"].start, 0, "start 'pos' position");
  assert.equal(obj["pos"].end, 6, "end 'pos' position");
});
