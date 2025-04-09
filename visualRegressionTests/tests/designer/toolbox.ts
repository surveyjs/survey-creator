import { ClientFunction, Selector } from "testcafe";
import { url, changeToolboxSearchEnabled, changeToolboxLocation, getTabbedMenuItemByText, takeElementScreenshot, setJSON, wrapVisualTest, changeToolboxScrolling, getToolboxItemByText, setAllowEditSurveyTitle, setShowAddQuestionButton, setDirRTL, setShowSidebar } from "../../helper";

const title = "Toolbox Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const translationTab = getTabbedMenuItemByText("Translation");

test("Left toolbox", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
    await changeToolboxSearchEnabled(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);

    const toolboxItem = Selector(".svc-toolbox__item");
    const toolboxItemDots = Selector(".svc-toolbox__tool .sv-dots__item");
    const toolboxElement = Selector(".svc-toolbox");
    const creatorTabElement = Selector(".svc-creator-tab");

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-left.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-left-hover-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1510, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-left-adaptive.png", toolboxElement, t, comparer);

    await t.hover(toolboxItemDots);
    await takeElementScreenshot("toolbox-left-hover-dots-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-left-adaptive-compact.png", creatorTabElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-left-compact-hover-item.png", creatorTabElement, t, comparer);

    await t.click(toolboxItemDots);
    await takeElementScreenshot("toolbox-left-popup.png", null, t, comparer);

    await t.resizeWindow(2560, 1440);
  });
});

test("Left toolbox - subitems in first item", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
    await changeToolboxSearchEnabled(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);

    await ClientFunction(() => {
      window["creator"].toolbox.removeItem("radiogroup");
    })();

    const toolboxItem = Selector(".svc-toolbox__item");
    const toolboxElement = Selector(".svc-toolbox");

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-left-subitems-first.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-left-hover-item-subitems-first.png", toolboxElement, t, comparer);

    await t.resizeWindow(2560, 1440);
  });
});

test("Right toolbox", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
    await changeToolboxSearchEnabled(false);
    await setShowAddQuestionButton(false);
    await setAllowEditSurveyTitle(false);

    const toolboxItem = Selector(".svc-toolbox__item");
    const toolboxItemDots = Selector(".svc-toolbox__tool .sv-dots__item");

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setShowSidebar(false);
    await changeToolboxLocation("right");

    const toolboxElement = Selector(".svc-toolbox");
    const creatorTabElement = Selector(".svc-creator-tab");
    await takeElementScreenshot("toolbox-right.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-hover-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1510, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-right-adaptive.png", toolboxElement, t, comparer);

    await t.hover(toolboxItemDots);
    await takeElementScreenshot("toolbox-right-hover-dots-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-right-adaptive-compact.png", creatorTabElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-compact-hover-item.png", creatorTabElement, t, comparer);

    await t.click(toolboxItemDots);
    await takeElementScreenshot("toolbox-right-popup.png", null, t, comparer);
  });
});

test("Right toolbox (rtl)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
    await changeToolboxSearchEnabled(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await setDirRTL();

    const toolboxItem = Selector(".svc-toolbox__item");
    const toolboxItemDots = Selector(".svc-toolbox__tool .sv-dots__item");

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setShowSidebar(false);

    const toolboxElement = Selector(".svc-toolbox");
    const creatorTabElement = Selector(".svc-creator-tab");
    await takeElementScreenshot("toolbox-right-rtl.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-rtl-hover-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1510, 870);
    await takeElementScreenshot("toolbox-right-rtl-adaptive.png", toolboxElement, t, comparer);

    await t.hover(toolboxItemDots);
    await takeElementScreenshot("toolbox-right-rtl-hover-dots-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-right-rtl-adaptive-compact.png", creatorTabElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-rtl-compact-hover-item.png", creatorTabElement, t, comparer);

    await t.click(toolboxItemDots);
    await takeElementScreenshot("toolbox-right-rtl-popup.png", null, t, comparer);
  });
});

test("toolbox inside sidebar", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxItem = Selector(".svc-toolbox__item");
    const toolboxButtonSelector = Selector(".sv-action-bar-item[title=\"Toolbox\"]");

    await changeToolboxLocation("sidebar");
    await t
      .resizeWindow(1240, 870)
      .click(toolboxButtonSelector)
      .resizeWindow(2560, 1440);

    const toolboxElement = Selector(".svc-toolbox");
    await takeElementScreenshot("toolbox-inside-sidebar.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-inside-sidebar-hover-item.png", toolboxElement, t, comparer);
  });
});

test("Toolbox tool pressed state", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxSearchEnabled(false);
    await t.resizeWindow(2560, 1440);
    const toolboxTool = Selector(".svc-toolbox__tool");
    const toolboxToolAction = Selector(".svc-toolbox__tool > .sv-action__content");

    await t.dispatchEvent(toolboxToolAction, "pointerdown");

    await takeElementScreenshot("toolbox-tool-pressed-state.png", toolboxTool, t, comparer);

    await t.dispatchEvent(toolboxToolAction, "pointerup");
    await takeElementScreenshot("toolbox-tool-normal-state.png", toolboxTool, t, comparer);
  });
});

test("designer tab view with page navigator", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
    await changeToolboxSearchEnabled(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await setJSON({
      showQuestionNumbers: "on",
      pages: [
        {
          "name": "page1",
          "elements": [{ "type": "text", "name": "question1" }]
        },
        {
          "name": "page2",
          "elements": [{ "type": "text", "name": "question2" }]
        }
      ]
    });
    const designerTab = Selector(".svc-creator-tab");
    await t.resizeWindow(950, 600);
    await takeElementScreenshot("designer-tab-page-navigator-toolbox-left.png", designerTab, t, comparer);

    await changeToolboxLocation("right");
    await t.resizeWindow(949, 600);
    await takeElementScreenshot("designer-tab-page-navigator-toolbox-right.png", designerTab, t, comparer);
  });
});

test("Toolbox category collapsed", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxSearchEnabled(false);
    await t.resizeWindow(2560, 1440);
    const toolboxElement = Selector(".svc-toolbox");
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await ClientFunction(() => { window["creator"].toolbox.changeCategories([{ name: "matrixdropdown", category: "matrix-custom" }]); })();
    await ClientFunction(() => { window["creator"].toolbox.showCategoryTitles = true; })();
    await ClientFunction(() => { window["creator"].toolbox.allowExpandMultipleCategories = true; })();
    await t.expect(Selector(".svc-toolbox__category-header--collapsed").withText("matrix-custom").visible).ok();
    await takeElementScreenshot("toolbox-categories-collapsed.png", toolboxElement, t, comparer);
    await t.hover(".svc-toolbox__category-header");
    await takeElementScreenshot("toolbox-category-collapsed-hover.png", Selector(".svc-toolbox__category-header"), t, comparer);
    await t.click(".svc-toolbox__category-header");
    await takeElementScreenshot("toolbox-category-hover.png", Selector(".svc-toolbox__category-header"), t, comparer);
  });
});

test("Toolbox with category titles", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxSearchEnabled(false);
    const toolboxElement = Selector(".svc-toolbox");

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await ClientFunction(() => { window["creator"].toolbox.keepAllCategoriesExpanded = true; })();
    await ClientFunction(() => { window["creator"].toolbox.changeCategories([]); })();
    await ClientFunction(() => { window["creator"].toolbox.showCategoryTitles = true; })();
    await t.resizeWindow(2560, 1440);
    await takeElementScreenshot("toolbox-categories.png", toolboxElement, t, comparer);
  });
});

test("Toolbox with subtypes (ltr)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");
    const subtypesPopup = Selector(".sv-popup.sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").filterVisible();

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    const itemSelector = getToolboxItemByText("Rating Scale").parent(".svc-toolbox__tool");
    await t.resizeWindow(2560, 1440)
      .wait(300)
      .hover(itemSelector);
    await takeElementScreenshot("toolbox-left-rating-subtypes-item.png", itemSelector, t, comparer);
    await t.hover(itemSelector.find(".svc-toolbox__item-submenu-button"));

    await takeElementScreenshot("toolbox-left-rating-subtypes.png", toolboxElement, t, comparer);

    await t.hover(getToolboxItemByText("Stars"));
    await takeElementScreenshot("toolbox-left-rating-subtype-hovered.png", subtypesPopup, t, comparer);
  });
});

test("Toolbox with custom subtypes set dynamically (ltr)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");
    const subtypesPopup = Selector(".sv-popup.sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").filterVisible();

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

    const itemSelector = getToolboxItemByText("Rating Scale").parent(".svc-toolbox__tool");
    await t.resizeWindow(2560, 1440);
    await t.expect(itemSelector.visible).ok();

    await ClientFunction(() => {
      const qTemplate = {
        type: "rating",
        name: "question1",
        title: "Custom Template",
      };
      const textItem = window["creator"].toolbox.getItemByName("rating");
      const questiongroupItem = {
        name: "my-questions",
        title: "Sample Rating",
        json: qTemplate,
      };
      textItem.addSubitem(questiongroupItem);
    })();

    await t
      .wait(300)
      .hover(itemSelector);

    await t.hover(itemSelector.find(".svc-toolbox__item-submenu-button"));
    await t.hover(getToolboxItemByText("Stars"));
    await takeElementScreenshot("toolbox-left-rating-subtype-custom.png", subtypesPopup, t, comparer);
  });
});

test.skip("Toolbox with subtypes (wrap)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const subtypesPopup = Selector(".sv-popup.sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").nth(1);

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(1775, 500)
      .scrollBy(".svc-toolbox .sv-scroll__scroller", 2, 300)
      .hover(getToolboxItemByText("Single-Line Input"))
      .expect(subtypesPopup.visible).ok();
    await takeElementScreenshot("toolbox-wrap-subtypes.png", subtypesPopup, t, comparer);
  });
});

test("Toolbox with subtypes (rtl)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setDirRTL();

    const toolboxElement = Selector(".svc-toolbox");
    const subtypesPopup = Selector(".sv-popup.sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").filterVisible();
    const itemSelector = getToolboxItemByText("Rating Scale").parent(".svc-toolbox__tool");

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440)
      .wait(300)
      .hover(itemSelector);
    await takeElementScreenshot("toolbox-right-rating-subtypes-item.png", itemSelector, t, comparer);
    await t.hover(itemSelector.find(".svc-toolbox__item-submenu-button"));
    await takeElementScreenshot("toolbox-right-rating-subtypes.png", toolboxElement, t, comparer);

    await t.hover(getToolboxItemByText("Stars"));
    await takeElementScreenshot("toolbox-right-rating-subtype-hovered.png", subtypesPopup, t, comparer);
  });
});

test("Left toolbox - scroll", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(true);
    await changeToolboxSearchEnabled(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);

    const toolboxItem = Selector(".svc-toolbox__item").filterVisible().nth(5);
    const toolboxElement = Selector(".svc-toolbox");
    const creatorTabElement = Selector(".svc-creator-tab");

    await t.resizeWindow(1510, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-left-scroll.png", toolboxElement, t, comparer);
    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-left-scroll-hover-item.png", creatorTabElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await setShowSidebar(false);
    await t.expect(Selector(".svc-toolbox--compact").visible).ok();
    await takeElementScreenshot("toolbox-left-scroll-compact.png", creatorTabElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-left-scroll-compact-hover-item.png", creatorTabElement, t, comparer);

    await t.resizeWindow(2560, 1440);
  });
});

test("Right toolbox - scroll", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxSearchEnabled(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    const toolboxItem = Selector(".svc-toolbox__item").filterVisible().nth(5);

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setShowSidebar(false);
    await changeToolboxLocation("right");
    await changeToolboxScrolling(true);

    const toolboxElement = Selector(".svc-toolbox");
    const creatorTabElement = Selector(".svc-creator-tab");
    await t.resizeWindow(1510, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-right-scroll.png", toolboxElement, t, comparer);
    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-scroll-hover-item.png", creatorTabElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-right-scroll-compact.png", creatorTabElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-scroll-compact-hover-item.png", creatorTabElement, t, comparer);
  });
});

test("Right toolbox (rtl) - scroll", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxSearchEnabled(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    const toolboxItem = Selector(".svc-toolbox__item").filterVisible().nth(5);

    await setDirRTL();
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setShowSidebar(false);
    await changeToolboxScrolling(true);
    const toolboxElement = Selector(".svc-toolbox");
    const creatorTabElement = Selector(".svc-creator-tab");
    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1510, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-right-rtl-scroll.png", toolboxElement, t, comparer);
    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-rtl-scroll-hover-item.png", toolboxElement, t, comparer);
    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-right-rtl-scroll-compact.png", creatorTabElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-rtl-scroll-compact-hover-item.png", creatorTabElement, t, comparer);
  });
});
test("Toolbox with search", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");

    await changeToolboxScrolling(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await changeToolboxSearchEnabled(true);
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

    await t.resizeWindow(2560, 1440);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-search.png", toolboxElement, t, comparer);
    await t.typeText(Selector(".svc-toolbox input"), "single");
    await takeElementScreenshot("toolbox-search-entered.png", toolboxElement, t, comparer);
    await t.hover("#svd-grid-search-close");
    await takeElementScreenshot("toolbox-search-close-hover.png", toolboxElement, t, comparer);
    await t.click(Selector(".svc-toolbox input"));
    await t.typeText(Selector(".svc-toolbox input"), "qwerty");
    await takeElementScreenshot("toolbox-search-placeholder.png", toolboxElement, t, comparer);
    await t.click("#svd-grid-search-close");
    await ClientFunction(() => (document.querySelector(".svc-toolbox .sv-scroll__scroller") as HTMLDivElement).style.background = "red")();
    await takeElementScreenshot("toolbox-search-background.png", toolboxElement, t, comparer);
  });
});

test("Toolbox with search in categories", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");

    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await changeToolboxScrolling(false);
    await changeToolboxSearchEnabled(true);
    await ClientFunction(() => {
      window["creator"].toolbox.showCategoryTitles = true;
    })();

    await t.resizeWindow(2560, 1440);
    await setShowSidebar(false);
    await t.typeText(Selector(".svc-toolbox input"), "single");
    await takeElementScreenshot("toolbox-search-categories.png", toolboxElement, t, comparer);
  });
});

test("Toolbox with search compact", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");

    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await changeToolboxSearchEnabled(true);
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

    await t.resizeWindow(1240, 870);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-search-compact.png", toolboxElement, t, comparer);
    await t.click(Selector(".svc-toolbox__search-button"));
    await t.typeText(Selector(".svc-toolbox input"), "single");
    await takeElementScreenshot("toolbox-search-compact-entered.png", toolboxElement, t, comparer);
    await t.typeText(Selector(".svc-toolbox input"), "qwerty");
    await takeElementScreenshot("toolbox-search-compact-placeholder.png", toolboxElement, t, comparer);
  });
});

test("Toolbox right with search", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");

    await changeToolboxScrolling(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await changeToolboxSearchEnabled(true);
    await changeToolboxLocation("right");
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-search-right.png", toolboxElement, t, comparer);
    await t.click(Selector(".svc-toolbox input"));
    await t.typeText(Selector(".svc-toolbox input"), "single");
    await takeElementScreenshot("toolbox-search-right-entered.png", toolboxElement, t, comparer);
    await t.typeText(Selector(".svc-toolbox input"), "qwerty");
    await takeElementScreenshot("toolbox-search-right-placeholder.png", toolboxElement, t, comparer);
  });
});

test("Toolbox RTL with search", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");

    await changeToolboxScrolling(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await changeToolboxSearchEnabled(true);
    await setDirRTL();
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

    await t.resizeWindow(2560, 1440);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-search-rtl.png", toolboxElement, t, comparer);
    await t.typeText(Selector(".svc-toolbox input"), "single");
    await takeElementScreenshot("toolbox-search-rtl-entered.png", toolboxElement, t, comparer);
    await t.typeText(Selector(".svc-toolbox input"), "qwerty");
    await takeElementScreenshot("toolbox-search-rtl-placeholder.png", toolboxElement, t, comparer);
  });
});

test("Toolbox RTL with search compact", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");
    const creatorTabElement = Selector(".svc-creator-tab");
    await setDirRTL();
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await setShowSidebar(false);
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

    await t.resizeWindow(950, 870);
    await changeToolboxSearchEnabled(true);
    await takeElementScreenshot("toolbox-search-rtl-compact.png", creatorTabElement, t, comparer);
    await t.click(Selector(".svc-toolbox__search-button"));
    await t.click(Selector(".svc-toolbox input"));
    await t.typeText(Selector(".svc-toolbox input"), "single");
    await takeElementScreenshot("toolbox-search-rtl-compact-entered.png", creatorTabElement, t, comparer);
    await t.typeText(Selector(".svc-toolbox input"), "qwerty");
    await takeElementScreenshot("toolbox-search-rtl-compact-placeholder.png", creatorTabElement, t, comparer);
  });
});

test("Toolbox disabled items", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox .sv-scroll__wrapper");

    await changeToolboxSearchEnabled(true);
    await setShowAddQuestionButton(false);
    await ClientFunction(() => {
      const rating = window["creator"].toolbox.getItemByName("rating");
      rating.enabled = false;
      const checkbox = window["creator"].toolbox.getItemByName("checkbox");
      checkbox.enabled = false;
    })();

    await t.resizeWindow(1920, 1161);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-disabled-items.png", toolboxElement, t, comparer);
    await t.resizeWindow(1240, 1161);
    await setShowSidebar(false);
    await takeElementScreenshot("toolbox-compact-disabled-items.png", toolboxElement, t, comparer);
    await t
      .click(Selector("button.svc-element__question-type-selector"))
      .expect(Selector(".sv-popup__container").filterVisible().visible).ok();
    await takeElementScreenshot("add-new-disabled-items.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
  });
});