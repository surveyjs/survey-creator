import { expect } from "@playwright/test";
import { url, compareScreenshot, test, setJSON, setShowSidebar, setShowAddQuestionButton, setAllowEditSurveyTitle, changeToolboxSearchEnabled, changeToolboxScrolling, getTabbedMenuItemByText, changeToolboxLocation, setDirRTL, getToolboxItemByText } from "./helper";

const title = "Toolbox Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Left toolbox", async ({ page }) => {
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);

    const toolboxItem = page.locator(".svc-toolbox__item");
    const toolboxItemDots = page.locator(".svc-toolbox__tool .sv-dots__item");
    const toolboxElement = page.locator(".svc-toolbox");
    const creatorTabElement = page.locator(".svc-creator-tab");
    const translationTab = getTabbedMenuItemByText(page, "Translation");

    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-left.png");

    await toolboxItem.first().hover();
    await compareScreenshot(page, toolboxElement, "toolbox-left-hover-item.png");

    await translationTab.hover();
    await page.setViewportSize({ width: 1510, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-left-adaptive.png");

    await toolboxItemDots.hover();
    await compareScreenshot(page, toolboxElement, "toolbox-left-hover-dots-item.png");

    await translationTab.hover();
    await page.setViewportSize({ width: 1240, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, creatorTabElement, "toolbox-left-adaptive-compact.png");

    await toolboxItem.first().hover({ force: true });
    await compareScreenshot(page, creatorTabElement, "toolbox-left-compact-hover-item.png");

    await toolboxItemDots.click();
    await expect(page).toHaveScreenshot("toolbox-left-popup.png");

    await page.setViewportSize({ width: 2560, height: 1440 });
  });

  test("Left toolbox - subitems in first item", async ({ page }) => {
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);

    await page.evaluate(() => {
      window["creator"].toolbox.removeItem("radiogroup");
    });

    const toolboxItem = page.locator(".svc-toolbox__item");
    const toolboxElement = page.locator(".svc-toolbox");

    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-left-subitems-first.png");

    await toolboxItem.first().hover();
    await compareScreenshot(page, toolboxElement, "toolbox-left-hover-item-subitems-first.png");

    await page.setViewportSize({ width: 2560, height: 1440 });
  });

  test("Right toolbox", async ({ page }) => {
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await setShowAddQuestionButton(page, false);
    await setAllowEditSurveyTitle(page, false);

    const toolboxItem = page.locator(".svc-toolbox__item");
    const toolboxItemDots = page.locator(".svc-toolbox__tool .sv-dots__item");
    const toolboxElement = page.locator(".svc-toolbox");
    const creatorTabElement = page.locator(".svc-creator-tab");
    const translationTab = getTabbedMenuItemByText(page, "Translation");

    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setShowSidebar(page, false);
    await changeToolboxLocation(page, "right");

    await compareScreenshot(page, toolboxElement, "toolbox-right.png");

    await toolboxItem.first().hover();
    await compareScreenshot(page, toolboxElement, "toolbox-right-hover-item.png");

    await translationTab.hover();
    await page.setViewportSize({ width: 1510, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-right-adaptive.png");

    await toolboxItemDots.hover();
    await compareScreenshot(page, toolboxElement, "toolbox-right-hover-dots-item.png");

    await translationTab.hover();
    await page.setViewportSize({ width: 1240, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, creatorTabElement, "toolbox-right-adaptive-compact.png");

    await toolboxItem.first().hover({ force: true });
    await compareScreenshot(page, creatorTabElement, "toolbox-right-compact-hover-item.png");

    await toolboxItemDots.click();
    await compareScreenshot(page, undefined, "toolbox-right-popup.png");
  });

  test("Right toolbox (rtl)", async ({ page }) => {
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await setDirRTL(page);

    const toolboxItem = page.locator(".svc-toolbox__item");
    const toolboxItemDots = page.locator(".svc-toolbox__tool .sv-dots__item");
    const toolboxElement = page.locator(".svc-toolbox");
    const creatorTabElement = page.locator(".svc-creator-tab");
    const translationTab = getTabbedMenuItemByText(page, "Translation");

    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setShowSidebar(page, false);

    await compareScreenshot(page, toolboxElement, "toolbox-right-rtl.png");

    await toolboxItem.first().hover();
    await compareScreenshot(page, toolboxElement, "toolbox-right-rtl-hover-item.png");

    await translationTab.hover();
    await page.setViewportSize({ width: 1510, height: 870 });
    await compareScreenshot(page, toolboxElement, "toolbox-right-rtl-adaptive.png");

    await toolboxItemDots.hover();
    await compareScreenshot(page, toolboxElement, "toolbox-right-rtl-hover-dots-item.png");

    await translationTab.hover();
    await page.setViewportSize({ width: 1240, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, creatorTabElement, "toolbox-right-rtl-adaptive-compact.png");

    await toolboxItem.first().hover({ force: true });
    await compareScreenshot(page, creatorTabElement, "toolbox-right-rtl-compact-hover-item.png");

    await toolboxItemDots.click();
    await compareScreenshot(page, undefined, "toolbox-right-rtl-popup.png");
  });

  test("toolbox inside sidebar", async ({ page }) => {
    const toolboxItem = page.locator(".svc-toolbox__item");
    const toolboxButtonSelector = page.locator('.sv-action-bar-item[title="Toolbox"]');

    await changeToolboxLocation(page, "sidebar");
    await page.setViewportSize({ width: 1240, height: 870 });
    await toolboxButtonSelector.click();
    await page.setViewportSize({ width: 2560, height: 1440 });

    const toolboxElement = page.locator(".svc-toolbox");
    await compareScreenshot(page, toolboxElement, "toolbox-inside-sidebar.png");

    await toolboxItem.first().hover();
    await compareScreenshot(page, toolboxElement, "toolbox-inside-sidebar-hover-item.png");
  });

  test("Toolbox tool pressed state", async ({ page }) => {
    await changeToolboxSearchEnabled(page, false);
    await page.setViewportSize({ width: 2560, height: 1440 });
    const toolboxTool = page.locator(".svc-toolbox__tool");
    const toolboxToolAction = page.locator(".svc-toolbox__tool > .sv-action__content").first();

    await toolboxToolAction.dispatchEvent("pointerdown");
    await compareScreenshot(page, toolboxTool, "toolbox-tool-pressed-state.png");

    await toolboxToolAction.dispatchEvent("pointerup");
    await compareScreenshot(page, toolboxTool, "toolbox-tool-normal-state.png");
  });

  test("designer tab view with page navigator", async ({ page }) => {
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await setJSON(page, {
      showQuestionNumbers: "on",
      pages: [
        { name: "page1", elements: [{ type: "text", name: "question1" }] },
        { name: "page2", elements: [{ type: "text", name: "question2" }] }
      ]
    });
    const designerTab = page.locator(".svc-creator-tab");
    await page.setViewportSize({ width: 950, height: 600 });
    await compareScreenshot(page, designerTab, "designer-tab-page-navigator-toolbox-left.png");

    await changeToolboxLocation(page, "right");
    await page.setViewportSize({ width: 949, height: 600 });
    await compareScreenshot(page, designerTab, "designer-tab-page-navigator-toolbox-right.png");
  });

  test("Toolbox category collapsed", async ({ page }) => {
    await changeToolboxSearchEnabled(page, false);
    await page.setViewportSize({ width: 2560, height: 1440 });
    const toolboxElement = page.locator(".svc-toolbox");
    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    await page.evaluate(() => { window["creator"].toolbox.changeCategories([{ name: "matrixdropdown", category: "matrix-custom" }]); });
    await page.evaluate(() => { window["creator"].toolbox.showCategoryTitles = true; });
    await page.evaluate(() => { window["creator"].toolbox.allowExpandMultipleCategories = true; });
    await expect(page.locator(".svc-toolbox__category-header--collapsed", { hasText: "matrix-custom" })).toBeVisible();
    await compareScreenshot(page, toolboxElement, "toolbox-categories-collapsed.png");
    await page.locator(".svc-toolbox__category-header").first().hover();
    await compareScreenshot(page, page.locator(".svc-toolbox__category-header"), "toolbox-category-collapsed-hover.png");
    await page.locator(".svc-toolbox__category-header").first().click();
    await compareScreenshot(page, page.locator(".svc-toolbox__category-header"), "toolbox-category-hover.png");
  });

  test("Toolbox with category titles", async ({ page }) => {
    await changeToolboxSearchEnabled(page, false);
    const toolboxElement = page.locator(".svc-toolbox");

    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    await page.evaluate(() => { window["creator"].toolbox.keepAllCategoriesExpanded = true; });
    await page.evaluate(() => { window["creator"].toolbox.changeCategories([]); });
    await page.evaluate(() => { window["creator"].toolbox.showCategoryTitles = true; });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await compareScreenshot(page, toolboxElement, "toolbox-categories.png");
  });

  test("Toolbox with subtypes (ltr)", async ({ page }) => {
    const toolboxElement = page.locator(".svc-toolbox");
    const subtypesPopup = page.locator(".sv-popup.sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").filter({ has: page.locator(":visible") });

    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    const itemSelector = getToolboxItemByText(page, "Rating Scale").locator("../..");
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.waitForTimeout(300);
    await itemSelector.hover();
    await compareScreenshot(page, itemSelector, "toolbox-left-rating-subtypes-item.png");
    await itemSelector.locator(".svc-toolbox__item-submenu-button").hover();
    await compareScreenshot(page, toolboxElement, "toolbox-left-rating-subtypes.png");

    await getToolboxItemByText(page, "Stars").hover();
    await compareScreenshot(page, subtypesPopup, "toolbox-left-rating-subtype-hovered.png");
  });

  test("Toolbox with custom subtypes set dynamically (ltr)", async ({ page }) => {
    const toolboxElement = page.locator(".svc-toolbox");
    const subtypesPopup = page.locator(".sv-popup.sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").filter({ has: page.locator(":visible") });

    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });

    const itemSelector = getToolboxItemByText(page, "Rating Scale").locator("../..");
    await page.setViewportSize({ width: 2560, height: 1440 });
    await expect(itemSelector).toBeVisible();

    await page.evaluate(() => {
      const qTemplate = { type: "rating", name: "question1", title: "Custom Template" };
      const textItem = window["creator"].toolbox.getItemByName("rating");
      const questiongroupItem = { name: "my-questions", title: "Sample Rating", json: qTemplate };
      textItem.addSubitem(questiongroupItem);
    });

    await page.waitForTimeout(300);
    await itemSelector.hover();
    await itemSelector.locator(".svc-toolbox__item-submenu-button").hover();
    await getToolboxItemByText(page, "Stars").hover();
    await compareScreenshot(page, subtypesPopup, "toolbox-left-rating-subtype-custom.png");
  });

  // test.skip("Toolbox with subtypes (wrap)", ...) // Skipped as in original

  test("Toolbox with subtypes (rtl)", async ({ page }) => {
    await setDirRTL(page);

    const toolboxElement = page.locator(".svc-toolbox");
    const subtypesPopup = page.locator(".sv-popup.sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").filter({ has: page.locator(":visible") });
    const itemSelector = getToolboxItemByText(page, "Rating Scale").locator("../..");

    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.waitForTimeout(300);
    await itemSelector.hover();
    await compareScreenshot(page, itemSelector, "toolbox-right-rating-subtypes-item.png");
    await itemSelector.locator(".svc-toolbox__item-submenu-button").hover();
    await compareScreenshot(page, toolboxElement, "toolbox-right-rating-subtypes.png");

    await getToolboxItemByText(page, "Stars").hover();
    await compareScreenshot(page, subtypesPopup, "toolbox-right-rating-subtype-hovered.png");
  });

  test("Left toolbox - scroll", async ({ page }) => {
    await changeToolboxScrolling(page, true);
    await changeToolboxSearchEnabled(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);

    const toolboxItem = page.locator(".svc-toolbox__item").filter({ has: page.locator(":visible") }).nth(5);
    const toolboxElement = page.locator(".svc-toolbox");
    const creatorTabElement = page.locator(".svc-creator-tab");
    const translationTab = getTabbedMenuItemByText(page, "Translation");

    await page.setViewportSize({ width: 1510, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-left-scroll.png");
    await toolboxItem.first().hover();
    await compareScreenshot(page, creatorTabElement, "toolbox-left-scroll-hover-item.png");

    await translationTab.hover();
    await page.setViewportSize({ width: 1240, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, creatorTabElement, "toolbox-left-scroll-compact.png");

    await toolboxItem.first().hover({ force: true });
    await compareScreenshot(page, creatorTabElement, "toolbox-left-scroll-compact-hover-item.png");

    await page.setViewportSize({ width: 2560, height: 1440 });
  });

  test("Right toolbox - scroll", async ({ page }) => {
    await changeToolboxSearchEnabled(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    const toolboxItem = page.locator(".svc-toolbox__item").filter({ has: page.locator(":visible") }).nth(5);

    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setShowSidebar(page, false);
    await changeToolboxLocation(page, "right");
    await changeToolboxScrolling(page, true);

    const toolboxElement = page.locator(".svc-toolbox");
    const creatorTabElement = page.locator(".svc-creator-tab");
    const translationTab = getTabbedMenuItemByText(page, "Translation");

    await page.setViewportSize({ width: 1510, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-right-scroll.png");
    await toolboxItem.first().hover();
    await compareScreenshot(page, creatorTabElement, "toolbox-right-scroll-hover-item.png");

    await translationTab.hover();
    await page.setViewportSize({ width: 1240, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, creatorTabElement, "toolbox-right-scroll-compact.png");

    await toolboxItem.first().hover({ force: true });
    await compareScreenshot(page, creatorTabElement, "toolbox-right-scroll-compact-hover-item.png");
  });

  test("Right toolbox (rtl) - scroll", async ({ page }) => {
    await changeToolboxSearchEnabled(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    const toolboxItem = page.locator(".svc-toolbox__item").filter({ has: page.locator(":visible") }).nth(5);

    await setDirRTL(page);
    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setShowSidebar(page, false);
    await changeToolboxScrolling(page, true);
    const toolboxElement = page.locator(".svc-toolbox");
    const creatorTabElement = page.locator(".svc-creator-tab");
    const translationTab = getTabbedMenuItemByText(page, "Translation");

    await translationTab.hover();
    await page.setViewportSize({ width: 1510, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-right-rtl-scroll.png");
    await toolboxItem.first().hover();
    await compareScreenshot(page, toolboxElement, "toolbox-right-rtl-scroll-hover-item.png");
    await translationTab.hover();
    await page.setViewportSize({ width: 1240, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, creatorTabElement, "toolbox-right-rtl-scroll-compact.png");

    await toolboxItem.first().hover({ force: true });
    await compareScreenshot(page, creatorTabElement, "toolbox-right-rtl-scroll-compact-hover-item.png");
  });

  test("Toolbox with search", async ({ page }) => {
    const toolboxElement = page.locator(".svc-toolbox");
    const toolboxSearch = page.locator(".svc-toolbox input").first();

    await changeToolboxScrolling(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await changeToolboxSearchEnabled(page, true);
    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });

    await page.setViewportSize({ width: 2560, height: 1440 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-search.png");
    await toolboxSearch.type("single");
    await compareScreenshot(page, toolboxElement, "toolbox-search-entered.png");
    await page.locator("#svd-grid-search-close").hover();
    await compareScreenshot(page, toolboxElement, "toolbox-search-close-hover.png");
    await toolboxSearch.click();
    await toolboxSearch.type("qwerty");
    await compareScreenshot(page, toolboxElement, "toolbox-search-placeholder.png");
    await page.locator("#svd-grid-search-close").click();
    await page.evaluate(() => {
      (document.querySelector(".svc-toolbox .sv-scroll__scroller") as HTMLDivElement).style.background = "red";
    });
    await compareScreenshot(page, toolboxElement, "toolbox-search-background.png");
  });

  test("Toolbox with search in categories", async ({ page }) => {
    const toolboxElement = page.locator(".svc-toolbox");
    const toolboxSearch = page.locator(".svc-toolbox input").first();

    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, true);
    await page.evaluate(() => {
      window["creator"].toolbox.showCategoryTitles = true;
    });

    await page.setViewportSize({ width: 2560, height: 1440 });
    await setShowSidebar(page, false);
    await toolboxSearch.type("single");
    await compareScreenshot(page, toolboxElement, "toolbox-search-categories.png");
  });

  test("Toolbox with search compact", async ({ page }) => {
    const toolboxElement = page.locator(".svc-toolbox");
    const toolboxSearch = page.locator(".svc-toolbox input").first();

    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await changeToolboxSearchEnabled(page, true);
    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });

    await page.setViewportSize({ width: 1240, height: 870 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-search-compact.png");
    await page.locator(".svc-toolbox__search-button").click();
    await toolboxSearch.type("single");
    await compareScreenshot(page, toolboxElement.locator(".svc-toolbox__panel"), "toolbox-search-compact-entered.png");
    await toolboxSearch.type("qwerty");
    await compareScreenshot(page, toolboxElement.locator(".svc-toolbox__panel"), "toolbox-search-compact-placeholder.png");
  });

  test("Toolbox right with search", async ({ page }) => {
    const toolboxElement = page.locator(".svc-toolbox");
    const toolboxSearch = page.locator(".svc-toolbox input").first();

    await changeToolboxScrolling(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await changeToolboxSearchEnabled(page, true);
    await changeToolboxLocation(page, "right");
    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-search-right.png");
    await toolboxSearch.click();
    await toolboxSearch.type("single");
    await compareScreenshot(page, toolboxElement, "toolbox-search-right-entered.png");
    await toolboxSearch.type("qwerty");
    await compareScreenshot(page, toolboxElement, "toolbox-search-right-placeholder.png");
  });

  test("Toolbox RTL with search", async ({ page }) => {
    const toolboxElement = page.locator(".svc-toolbox");
    const toolboxSearch = page.locator(".svc-toolbox input").first();

    await changeToolboxScrolling(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await changeToolboxSearchEnabled(page, true);
    await setDirRTL(page);
    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });

    await page.setViewportSize({ width: 2560, height: 1440 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-search-rtl.png");
    await toolboxSearch.type("single");
    await compareScreenshot(page, toolboxElement, "toolbox-search-rtl-entered.png");
    await toolboxSearch.type("qwerty");
    await compareScreenshot(page, toolboxElement, "toolbox-search-rtl-placeholder.png");
  });

  test("Toolbox RTL with search compact", async ({ page }) => {
    const toolboxElement = page.locator(".svc-toolbox");
    const creatorTabElement = page.locator(".svc-creator-tab");
    const toolboxSearch = page.locator(".svc-toolbox input").first();

    await setDirRTL(page);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await setShowSidebar(page, false);
    await setJSON(page, { showQuestionNumbers: "on", pages: [{ name: "page1" }] });

    await page.setViewportSize({ width: 950, height: 870 });
    await changeToolboxSearchEnabled(page, true);
    await compareScreenshot(page, creatorTabElement, "toolbox-search-rtl-compact.png");
    await page.locator(".svc-toolbox__search-button").click();
    await toolboxSearch.click();
    await toolboxSearch.type("single");
    await compareScreenshot(page, creatorTabElement.locator(".svc-toolbox__panel"), "toolbox-search-rtl-compact-entered.png");
    await toolboxSearch.type("qwerty");
    await compareScreenshot(page, creatorTabElement.locator(".svc-toolbox__panel"), "toolbox-search-rtl-compact-placeholder.png");
  });

  test("Toolbox disabled items", async ({ page }) => {
    const toolboxElement = page.locator(".svc-toolbox .sv-scroll__wrapper");

    await changeToolboxSearchEnabled(page, true);
    await setShowAddQuestionButton(page, false);
    await page.evaluate(() => {
      const rating = window["creator"].toolbox.getItemByName("rating");
      rating.enabled = false;
      const checkbox = window["creator"].toolbox.getItemByName("checkbox");
      checkbox.enabled = false;
    });

    await page.setViewportSize({ width: 1920, height: 1161 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-disabled-items.png");
    await page.setViewportSize({ width: 1240, height: 1161 });
    await setShowSidebar(page, false);
    await compareScreenshot(page, toolboxElement, "toolbox-compact-disabled-items.png");
    await page.locator("button.svc-element__question-type-selector").click();
    await compareScreenshot(page, page.locator(".sv-popup__container:visible"), "add-new-disabled-items.png");
  });
});