import { SurveyTextWorker } from "../src/textWorker";

function createTextWorker(json: any): SurveyTextWorker {
  return new SurveyTextWorker(JSON.stringify(json, null, 3));
}

test("SurveyTextWorker, incorrect property name pos", () => {
  const textWorker = createTextWorker({
    elements: [
      {
        type: "text", name: "q1"
      },
      {
        type: "text",
        incorrectProp: "abc",
        name: "q2"
      },
      {
        type: "text", name: "q3"
      }
    ]
  });
  expect(textWorker.errors).toHaveLength(1);
  const error = textWorker.errors[0];
  const propNamePos = 126;
  expect(error.at).toBe(propNamePos);
  expect(textWorker.text.substring(propNamePos, propNamePos + 5)).toBe("incor");
  expect(error.rowAt).toBe(8);
  expect(error.columnAt).toBe(10);
  expect(error.isFixable).toBeFalsy();
});
test("SurveyTextWorker, show duplication name errors", () => {
  const textWorker = createTextWorker({
    pages: [{
      name: "page1",
      elements: [
        {
          type: "text", name: "q1"
        },
        {
          type: "text",
          name: "page1"
        },
        {
          type: "text", "name": "q1"
        }
      ] }
    ]
  });
  expect(textWorker.errors).toHaveLength(2);
  const error1 = textWorker.errors[0];
  const propNamePos1 = 221;
  expect(error1.at).toBe(propNamePos1);
  expect(textWorker.text.substring(propNamePos1, propNamePos1 + 7)).toBe("\"name\":");
  expect(error1.rowAt).toBe(11);
  expect(error1.columnAt).toBe(15);
  const error2 = textWorker.errors[1];
  const propNamePos2 = 312;
  expect(error2.at).toBe(propNamePos2);
  expect(textWorker.text.substring(propNamePos2, propNamePos2 + 7)).toBe("\"name\":");
  expect(error2.rowAt).toBe(15);
  expect(error2.columnAt).toBe(15);

  expect(error2.isFixable).toBeTruthy();
  const newJson2 = JSON.parse(error2.fixError(textWorker.text));
  expect(newJson2.pages[0].elements[2]).toEqual({
    type: "text",
    name: "question1"
  });
  expect(error1.isFixable).toBeTruthy();
  const newJson1 = JSON.parse(error1.fixError(textWorker.text));
  expect(newJson1.pages[0].elements[1]).toEqual({
    type: "text",
    name: "question1"
  });
});
test("SurveyTextWorker, required properties", () => {
  const textWorker = createTextWorker({
    pages: [{
      name: "page1",
      elements: [
        {
          type: "text"
        }
      ] }
    ]
  });
  expect(textWorker.errors).toHaveLength(1);
  const error = textWorker.errors[0];
  const propNamePos = 85;
  expect(error.at).toBe(propNamePos);
  expect(error.isFixable).toBeTruthy();
  const oldLines = textWorker.text.split("\n");
  textWorker.text = error.fixError(textWorker.text);
  const newJson = JSON.parse(textWorker.text);
  expect(newJson.pages[0].elements[0]).toEqual({
    type: "text",
    name: "question1"
  });
  const lines = textWorker.text.split("\n");
  expect(lines.length).toBe(oldLines.length + 1);
  const indent1 = lines[5].split(" ").length - 1;
  const indent2 = lines[6].split(" ").length - 1;
  expect(indent2).toBe(indent1 + 3);
});
