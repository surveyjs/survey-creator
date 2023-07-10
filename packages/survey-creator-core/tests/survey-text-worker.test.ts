import { SurveyTextWorker } from "../src/textWorker";

function createTextWorker(json: any): SurveyTextWorker {
  return new SurveyTextWorker(JSON.stringify(json, null, 3));
}

test("SurveyTextWorker, incorrect property name pos", () => {
  SurveyTextWorker.newLineChar = "\n";
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
});
test("SurveyTextWorker, show duplication name errors", () => {
  SurveyTextWorker.newLineChar = "\n";
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
});
