import { Selector, ClientFunction } from "testcafe";
import { url, objectSelectorButton, propertyGridSelector, expandButtonSelector, setJSON, takeElementScreenshot, wrapVisualTest, pageNavigator, getListItemByText, changeToolboxSearchEnabled, getAddNewQuestionButton, getTabbedMenuItemByText, creatorTabTranslationName } from "../../helper";
import { largeSurvey } from "./surveys/large-survey";

const title = "Sidebar Screenshot";

fixture`${title}`.page`${url}`;

test("object selector popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({ pages: [{ name: "page1" }] });
    await t
      .resizeWindow(750, 700)
      .click(expandButtonSelector)
      .click(objectSelectorButton);

    await takeElementScreenshot("side-bar-object-selector.png", propertyGridSelector, t, comparer);
    await t.resizeWindow(1920, 900);
  });
});

test("object selector with search and selected item", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const objectSelectorContent = ".sv-popup.svc-object-selector .sv-popup__body-content";

    await setJSON(largeSurvey);
    await t
      .resizeWindow(1280, 900)
      .click(pageNavigator)
      .click(getListItemByText("educationalNeeds"))
      .click(Selector(".svc-string-editor__input").withText("Patient Name"))

      .click(objectSelectorButton)
      .wait(1000);

    await takeElementScreenshot("side-bar-object-selector-with-selected-item.png", objectSelectorContent, t, comparer);
    await t.resizeWindow(1920, 900);
  });
});
test("object selector with large object's name", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const sideBarActionsContainer = Selector(".svc-side-bar__container-actions");
    await setJSON({
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "very_long_long_long_long_long_long_long_long_name"
            }
          ]
        }
      ]
    });
    await t
      .resizeWindow(1920, 1080)
      .click(Selector(".svc-question__content"), { offsetX: 10, offsetY: 10, })
      .click(Selector(".svc-question__content"), { offsetX: 10, offsetY: 10, });

    await takeElementScreenshot("side-bar-object-selector-with-big-name.png", sideBarActionsContainer, t, comparer);
    await t.resizeWindow(1920, 900);
  });
});
test("property grid search", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      "elements": [
        {
          "type": "text",
          "name": "q1",
          "title": "First"
        }
      ]
    });
    await changeToolboxSearchEnabled(false);
    await t.resizeWindow(1920, 900);
    await takeElementScreenshot("side-bar-search-empty.png", Selector(".spg-container_search"), t, comparer);

    await t.typeText(".svc-search__input", "des");
    await takeElementScreenshot("side-bar-search-editor.png", ".spg-container_search .svc-search", t, comparer);
    await takeElementScreenshot("side-bar-search-general-group.png", Selector(".spg-container_search"), t, comparer);

    await t.click(".svc-search__bar-item"); // prev
    await takeElementScreenshot("side-bar-search-question-group.png", Selector(".spg-container_search"), t, comparer);

    await t.click(Selector(".svc-search__bar-item").nth(1)); // next
    await takeElementScreenshot("side-bar-search-general-group-after-next.png", Selector(".spg-container_search"), t, comparer);

    await t.click(Selector(".svc-search__bar-item").nth(2)); // clear
    await takeElementScreenshot("side-bar-search-empty.png", Selector(".spg-container_search"), t, comparer);
  });
});

test("property grid search matrix", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ]
        }
      ]
    });
    await changeToolboxSearchEnabled(false);
    await t.click(".sd-question");
    await t.resizeWindow(1920, 900);

    await t.typeText(".svc-search__input", "choices");
    await takeElementScreenshot("side-bar-search-matrix.png", ".spg-matrixdynamic__content", t, comparer);
  });
});

const themeTabUrl = url.replace(/\/testcafe$/, "/testcafe-theme-tab");
test.page(themeTabUrl)("tabbed mode", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1200);
    await ClientFunction(() => {
      window["creator"].showOneCategoryInPropertyGrid = true;
    })();
    await takeElementScreenshot("side-bar-tabbed-placeholder.png", ".svc-side-bar", t, comparer);
    await t.click(getAddNewQuestionButton());
    await takeElementScreenshot("side-bar-tabbed-property-grid.png", ".svc-side-bar", t, comparer);

    await t.click(getTabbedMenuItemByText("Themes"));
    await takeElementScreenshot("side-bar-tabbed-property-grid-theme-general.png", ".svc-side-bar", t, comparer);

    await t.click(Selector(".svc-menu-action__button").filterVisible().nth(4));
    await takeElementScreenshot("side-bar-tabbed-property-grid-theme-appearance.png", ".svc-side-bar", t, comparer);

    await t.click(Selector(".spg-boolean-switch").filterVisible());
    await t.hover(Selector(".svc-top-bar").filterVisible());
    await takeElementScreenshot("side-bar-tabbed-property-grid-theme-appearance-advanced.png", ".svc-side-bar", t, comparer);

    await t.hover(Selector(".svc-side-bar .svc-scroll__wrapper").filterVisible());
    await t.expect(Selector(".svc-side-bar .svc-scroll__scrollbar").visible).ok();
    await takeElementScreenshot("side-bar-tabbed-property-grid-theme-appearance-advanced-hover.png", ".svc-side-bar", t, comparer);
  });
});

test("translation tab tabbed property grid", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1200);
    await ClientFunction(() => {
      window["creator"].showOneCategoryInPropertyGrid = true;
    })();

    await t.click(getTabbedMenuItemByText(creatorTabTranslationName));
    await takeElementScreenshot("side-bar-tabbed-property-grid-translation-general.png", ".svc-side-bar", t, comparer);
  });
});