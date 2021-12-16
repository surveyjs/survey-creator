import { ClientFunction, Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";
import { url, screenshotComparerOptions } from "../../helper";

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
const translationTab = Selector(".svc-tabbed-menu-item__text").withText("Translation");
export function getBarItemByTitle(text) {
  return Selector(".sv-action-bar-item[title=\"" + text + "\"]");
}

test("strings view", async (t) => {
  await t.resizeWindow(2560, 1440);
  await ClientFunction((json) => { window["creator"].JSON = json; })(json);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const stringsView = Selector(".svc-creator-tab__content.svc-translation-tab");
  const checkScreenshot = async (screenshotName: string) => {
    await t.wait(1000);
    await takeScreenshot(screenshotName, stringsView, screenshotComparerOptions);
    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  };

  await t.click(translationTab);
  await checkScreenshot("translation-tab.png");

  await t.click(getBarItemByTitle("Show all strings"));
  await checkScreenshot("translation-tab-show-all-strings.png");
});
