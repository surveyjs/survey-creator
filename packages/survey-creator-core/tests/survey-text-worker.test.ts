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
