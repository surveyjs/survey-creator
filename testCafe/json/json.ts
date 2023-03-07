import { getTabbedMenuItemByText, setJSON, url, creatorTabDesignerName } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "JSON tab";

const json = {
  logoPosition: "right",
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
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"), 9, 15, 9, 24)
    .pressKey("backspace")
    .pressKey("I space a m space c h a n g e d")

    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .expect(Selector("h5").withText("I am changed").exists).ok();
});
test("Check show/hide errors button visibility", async (t) => {
  await setJSON(json);
  await t
    .click(getTabbedMenuItemByText("JSON Editor"))
    .expect(Selector("svc-json-editor-tab__errros_button").exists).notOk();

});
test("Check show/hide errors button functionality", async (t) => {
  await setJSON(json);
  await t
    .click(getTabbedMenuItemByText("JSON Editor"))
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"))
    .pressKey("backspace")
    .pressKey("I space a m space e r r o r space s t r i n g )")

    .expect(Selector(".svc-json-editor-tab__errros_button").withText("Show errors").exists).ok()
    .expect(Selector(".svc-json-editor-tab__content-errors").exists).notOk()

    .click(Selector(".svc-json-editor-tab__errros_button"))
    .expect(Selector(".svc-json-editor-tab__errros_button").withText("Hide errors").exists).ok()
    .expect(Selector(".svc-json-editor-tab__content-errors").exists).ok()
    .expect(Selector(".svc-json-editor-tab__content-errors > span:last-child").withText("Expected 'n' instead of ' '").exists).ok()

    .click(Selector(".svc-json-editor-tab__errros_button"))
    .expect(Selector(".svc-json-editor-tab__errros_button").withText("Show errors").exists).ok();
});
test("Check deactivating other tabs when json has errros", async (t) => {
  await setJSON(json);
  await t
    .click(getTabbedMenuItemByText("JSON Editor"))
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"))
    .pressKey("backspace")
    .pressKey("I space a m space e r r o r space s t r i n g )")

    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .expect(Selector("h5").withText("Change me").exists).notOk();
});
test("Check search", async (t) => {
  await setJSON(json);
  await t
    .click(getTabbedMenuItemByText("JSON Editor"))
    .pressKey("ctrl+f") //check if there will be no errors
    .expect(getTabbedMenuItemByText("JSON Editor").visible).ok();
});