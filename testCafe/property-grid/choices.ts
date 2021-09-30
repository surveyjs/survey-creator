import { url, setJSON, getJSON } from "../helper";
import { Selector } from "testcafe";
const title = "Property Grid";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Rename choice", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "question1",
            "title": "question1",
            "choices": [
              "item1",
              "item2",
              "item3"
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const expectedNewChoiceName = "newItem1";
  const question1 = Selector("[name=\"question1\"]");
  const choicesTab = Selector("h4").withExactText("Choices");
  const item1PGEditorInput = Selector("[name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0).find("td").nth(1).find("input");

  await t
    .click(question1)
    .click(choicesTab)

    .typeText(item1PGEditorInput, expectedNewChoiceName, { replace: true })
    .pressKey("enter");

  const resultJson = await getJSON();
  await t
    .expect(resultJson.pages[0].elements[0].choices[0]).eql(expectedNewChoiceName);
});