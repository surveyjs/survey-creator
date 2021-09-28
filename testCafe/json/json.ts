import { getTabbedMenuItemByText, setJSON, url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "JSON tab";

const json = {
  questions: [
    {
      type: "text",
      name: "json_tab_text",
      title: "Change me"
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Change title of text question", async (t) => {
  await setJSON(json);
  await t
    .click(getTabbedMenuItemByText("JSON Editor"))
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"), 8, 15, 8, 24)
    .pressKey("backspace")
    .pressKey("I space a m space c h a n g e d")

    .click(getTabbedMenuItemByText("Survey Designer"))
    .expect(Selector("h5").withText("I am changed").exists).ok();
});