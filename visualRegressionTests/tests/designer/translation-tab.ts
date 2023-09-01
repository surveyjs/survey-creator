import { Selector } from "testcafe";
import { url, getTabbedMenuItemByText, getBarItemByTitle, setJSON, takeElementScreenshot, wrapVisualTest, urlLocalized_de } from "../../helper";

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
            "Item 1",
            "Item 2",
            "Item 3"
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
            "Item 1",
            "Item 2",
            "Item 3"
          ]
        }
      ]
    }
  ]
};

test("strings view", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);
    await setJSON(json);

    const stringsView = Selector(".svc-creator-tab__content.svc-translation-tab");

    await t.click(getTabbedMenuItemByText("Translation"));
    await takeElementScreenshot("translation-tab.png", stringsView, t, comparer);

    await t.resizeWindow(800, 1440);
    await takeElementScreenshot("translation-tab-small-screen.png", stringsView, t, comparer);

    await t.resizeWindow(2560, 1440);
    await t.click(getBarItemByTitle("Used Strings Only"));
    await t.click(Selector(".sv-list__item").withText("All Strings"));
    await takeElementScreenshot("translation-tab-show-all-strings.png", stringsView, t, comparer);
  });
});

test("tranlation property grid", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);
    await t.click(getTabbedMenuItemByText("Translation"));
    await t
      .click(Selector(".spg-action-button"))
      .click(Selector("span").withText("Català"))
      .click(Selector(".spg-action-button"))
      .click(Selector("span").withText("Bahasa Indonesia"));
    await takeElementScreenshot("translation-property-grid.png", Selector(".spg-root-modern.st-properties"), t, comparer);
  });
});