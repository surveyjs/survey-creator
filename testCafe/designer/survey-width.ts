import { url, setJSON, getJSON } from "../helper";
import { Selector } from "testcafe";
const title = "Property Grid";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Change survey width", async (t) => {
  const json = {
    "widthMode": "static",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "matrixdropdown",
            "name": "question1",
            "columns": [{ name: "col1" }, { name: "col2" }, { name: "col3" }],
            "rows": ["row1", "row2", "row3"]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const widthEditorInput = Selector("[data-name=\"width\"]").find("input");

  await t
    .click(widthEditorInput)

    .typeText(widthEditorInput, "755px", { replace: true })
    .pressKey("tab");

  await t
    .expect(Selector(".sd-container-modern").clientWidth).eql(755);
});