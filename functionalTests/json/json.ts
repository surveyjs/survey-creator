import { getTabbedMenuItemByText, setJSON, url, creatorTabDesignerName } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "JSON tab";

const json = {
  pages: [
    {
      elements: [
        {
          type: "text",
          name: "json_tab_text",
          title: "Change me"
        }
      ]
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
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"), 8, 20, 8, 29)
    .pressKey("backspace")
    .pressKey("I space a m space c h a n g e d")

    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .expect(Selector("h5").withText("I am changed").exists).ok();
});
test("Check show/hide errors list visibility", async (t) => {
  await setJSON(json);
  await t
    .click(getTabbedMenuItemByText("JSON Editor"))
    .expect(Selector(".svc-json-editor-tab__errros_list").visible).notOk()
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"), 4, 7, 4, 7)
    .pressKey("a")
    .wait(1100)
    .expect(Selector(".svc-json-editor-tab__errros_list").visible).ok()
    .pressKey("backspace")
    .wait(1100)
    .expect(Selector(".svc-json-editor-tab__errros_list").visible).notOk();
});
test("Goto line from error", async (t) => {
  await setJSON(json);
  await t
    .click(getTabbedMenuItemByText("JSON Editor"))
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"))
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"), 4, 7, 4, 7)
    .pressKey("a")
    .wait(1100)
    .expect(Selector(".svc-json-editor-tab__errros_list").visible).ok()
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"), 1, 1, 1, 1)
    .click(Selector("span").withText("Line: "))
    .pressKey("delete")
    .wait(1100)
    .expect(Selector(".svc-json-editor-tab__errros_list").visible).notOk();
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

test("Check fix error", async (t) => {
  await setJSON({
    elements: [{
      type: "text",
      name: "q1",
    },
    {
      type: "text",
      name: "q2",
    }]
  });
  await t
    .click(getTabbedMenuItemByText("JSON Editor"))
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"))
    .selectTextAreaContent(Selector(".svc-json-editor-tab__content-area"), 11, 20, 11, 21)
    .pressKey("1")
    .wait(1100)
    .expect(Selector(".svc-json-editor-tab__errros_list").visible).ok()
    .click(".svc-json-error__fix-button")
    .wait(1100)
    .expect(Selector(".svc-json-editor-tab__errros_list").visible).notOk();
});