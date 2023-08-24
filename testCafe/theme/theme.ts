import { getTabbedMenuItemByText, setJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Theme Editor";
const url = "http://127.0.0.1:8080/testCafe/testcafe-theme-tab.html";
const json = {
  pages: [
    {
      elements: [{ type: "text", name: "question1" }]
    },
    {
      elements: [{ type: "text", name: "question2" }]
    },
    {
      elements: [{ type: "text", name: "question2" }]
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});
export default async function (t) {
  const { error } = await t.getBrowserConsoleMessages();

  await t.expect(error[0]).notOk();
}

test("Editors, loose focus on enter", async (t) => {
  await t.resizeWindow(1560, 1440);
  const json = {
    elements: [
      {
        type: "dropdown",
        name: "q1",
        title: "title"
      }
    ]
  };
  await setJSON(json);

  await t.click(getTabbedMenuItemByText("Themes"));

  await t
    .click(Selector("div[data-name=--sjs-primary-backcolor] input"))
    .expect(Selector("div[data-name=--sjs-primary-backcolor] input").focused).ok()
    .pressKey("Enter")
    .expect(Selector("div[data-name=--sjs-primary-backcolor] input").focused).notOk();

  await t
    .click(Selector("div[data-name=panelBackgroundTransparency] input"))
    .expect(Selector("div[data-name=panelBackgroundTransparency] input").focused).ok()
    .pressKey("Enter")
    .expect(Selector("div[data-name=panelBackgroundTransparency] input").focused).notOk();

  await t
    .click(Selector("div[data-name=backgroundImage] input"))
    .expect(Selector("div[data-name=backgroundImage] input").focused).ok()
    .pressKey("Enter")
    .expect(Selector("div[data-name=backgroundImage] input").focused).notOk();
});