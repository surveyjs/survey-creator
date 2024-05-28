import { getPropertyGridCategory, getTabbedMenuItemByText, setJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Theme Editor";
const url = "http://127.0.0.1:8080/testCafe/testcafe-theme-tab";
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
  await t.click(getPropertyGridCategory("Appearance"));

  const colorQuestionInputSelector = Selector("div[data-name=primaryColor] input.spg-color-editor__input");
  const backgroundImageQuestionInputSelector = Selector("div[data-name=backgroundImage] input.spg-input-container__input");
  const backgroundOpacityInputSelector = Selector("div[data-name=panelBackgroundTransparency] input.spg-input-container__input");
  await t
    .click(colorQuestionInputSelector)
    .expect(colorQuestionInputSelector.focused).ok()
    .pressKey("enter")
    .expect(colorQuestionInputSelector.focused).notOk();

  await t
    .click(backgroundOpacityInputSelector)
    .expect(backgroundOpacityInputSelector.focused).ok()
    .pressKey("enter")
    .expect(backgroundOpacityInputSelector.focused).notOk();

  await t.click(getPropertyGridCategory("Background"));
  await t
    .click(backgroundImageQuestionInputSelector)
    .expect(backgroundImageQuestionInputSelector.focused).ok()
    .pressKey("enter")
    .expect(backgroundImageQuestionInputSelector.focused).notOk();
});