import { url, setJSON, getJSON, getToolboxItemByText } from "../helper";
import { Selector } from "testcafe";
const title = "Property Grid";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(1920, 1080);
});

test.only("Change survey width", async (t) => {
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

    .typeText(widthEditorInput, "755px", { replace: true, paste: true })
    .pressKey("tab");
  await t
    .expect(Selector(".sd-container-modern").clientWidth).eql(755);

  await t
    .click(widthEditorInput)

    .typeText(widthEditorInput, "10000px", { replace: true, paste: true })
    .pressKey("tab");

  await t
    .expect(Selector(".sd-container-modern").clientWidth).gt(1190)
    .expect(Selector(".sd-container-modern").clientWidth).lt(1200);
});

test("Change survey width", async (t) => {
  await t
    .hover(getToolboxItemByText("Text Entry"))
    .click(getToolboxItemByText("Text Entry"));

  await t
    .expect(Selector(".svc-tab-designer_content .sd-container-modern").hasClass("sd-container-modern--static")).ok();

  await t
    .hover(getToolboxItemByText("Matrix Table"))
    .click(getToolboxItemByText("Matrix Table"));
  await t
    .expect(Selector(".svc-tab-designer_content .sd-container-modern").hasClass("sd-container-modern--responsive")).ok();
});