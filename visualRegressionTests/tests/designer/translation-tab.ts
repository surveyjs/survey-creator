import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";
import { url, screenshotComparerOptions, getTabbedMenuItemByText, getBarItemByTitle, setJSON, checkElementScreenshot as checkElementScreenshot } from "../../helper";

const title = "Translation tab Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "title": "Question 1"
        },
        {
          "type": "radiogroup",
          "name": "question3",
          "choices": [
            "item1",
            "item2",
            "item3"
          ]
        },
        {
          "type": "checkbox",
          "name": "question2",
          "title": {
            "default": "Question 3",
            "ru": "Вопрос 3"
          },
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

test("strings view", async (t) => {
  await t.resizeWindow(2560, 1440);
  await setJSON(json);

  const stringsView = Selector(".svc-creator-tab__content.svc-translation-tab");

  await t.click(getTabbedMenuItemByText("Translation"));
  await checkElementScreenshot("translation-tab.png", stringsView, t);

  await t.click(getBarItemByTitle("Used Strings Only"));
  await t.click(Selector(".sv-list__item").withText("All Strings"));
  await checkElementScreenshot("translation-tab-show-all-strings.png", stringsView, t);
});
