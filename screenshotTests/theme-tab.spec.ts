import { test, expect } from "@playwright/test";
import { url, getTabbedMenuItemByText, getBarItemByTitle, setJSON, getListItemByText, compareScreenshot, creatorTabThemeName, getPropertyGridCategory, themeSettingsButtonSelector, resetFocusToBody, collapseButtonSelector } from "./helper";

const title = "Themes tab";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url.replace(/\/testcafe$/, "/testcafe-theme-tab")}`);
  });

  test("Check boxshadow settings", async ({ page }) => {
    await page.setViewportSize({ width: 2000, height: 2000 });
    await setJSON(page, {});
    const root = page.locator("div[data-name='--sjs-shadow-small']");
    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    await getPropertyGridCategory(page, "Appearance").click();
    await page.getByRole("checkbox", { name: "Advanced mode" }).click();
    await root.scrollIntoViewIfNeeded();
    await compareScreenshot(page, root, "boxshadow-one-panel.png");
    await page.click(".spg-paneldynamic__add-btn");
    await root.hover({ position: { x: 0, y: 0 } });
    await resetFocusToBody(page);
    await compareScreenshot(page, root, "boxshadow-two-panels.png");
  });

  test("Check sidebar header", async ({ page }) => {
    await page.setViewportSize({ width: 2000, height: 2000 });
    const root = page.locator(".svc-side-bar__container-header ").filter({ has: page.locator(":visible") });
    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    await compareScreenshot(page, root, "theme-editor-header.png");
    await page.evaluate(() => { window["creator"].allowCollapseSidebar = false; });
    await compareScreenshot(page, root, "theme-editor-header-no-collapse-button.png");
  });

  test("toolbar view", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      pages: [
        { elements: [{ type: "text", name: "question1" }] },
        { elements: [{ type: "text", name: "question2" }] }
      ]
    });
    await page.waitForTimeout(300);
    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    await page.setViewportSize({ width: 380, height: 600 });
    await page.waitForTimeout(300);
    const toolbar = page.locator(".svc-footer-bar .svc-toolbar-wrapper");
    await compareScreenshot(page, toolbar, "theme-tab-toolbar-responsive.png");
  });

  test("theme setting property grid", async ({ page }) => {
    await page.setViewportSize({ width: 1580, height: 4000 });
    await setJSON(page, {
      showQuestionNumbers: true,
      title: "Title",
      pages: [
        { elements: [{ type: "text", name: "question1" }] },
        { elements: [{ type: "text", name: "question2" }] }
      ]
    });
    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    const westResizer = page.locator(".svc-resizer-west");
    const { x, y, width, height } = await <any>westResizer.boundingBox();
    await westResizer.hover();
    await page.mouse.down();
    await page.mouse.move(x - 150, (height - y) / 2, { steps: 5 });
    await page.mouse.up();

    await resetFocusToBody(page);
    const expandedGroup = page.locator(".spg-theme-builder-root .spg-panel.sd-element--expanded");
    await compareScreenshot(page, expandedGroup, "theme-editor-property-grid-general-group.png");

    await getPropertyGridCategory(page, "General").click();
    await getPropertyGridCategory(page, "Header").click();
    await expandedGroup.locator(".spg-button-group__item-caption").getByText("Basic").click();
    await resetFocusToBody(page);
    await compareScreenshot(page, expandedGroup, "theme-editor-property-grid-header-group.png");

    await expandedGroup.locator(".spg-button-group__item-caption").getByText("Advanced").click();
    await compareScreenshot(page, expandedGroup, "theme-editor-property-grid-header-group-advanced.png");

    await getPropertyGridCategory(page, "Header").click();
    await getPropertyGridCategory(page, "Background").click();
    await resetFocusToBody(page);
    await compareScreenshot(page, expandedGroup, "theme-editor-property-grid-background-group.png");

    await getPropertyGridCategory(page, "Background").click();
    await getPropertyGridCategory(page, "Appearance").click();
    await resetFocusToBody(page);
    await compareScreenshot(page, expandedGroup, "theme-editor-property-grid-appearance-group.png");

    await page.getByRole("checkbox", { name: "Advanced mode" }).click();
    await resetFocusToBody(page);
    await compareScreenshot(page, expandedGroup, "theme-editor-property-grid-advanced-group.png");
  });

  test("theme setting property grid mobile", async ({ page }) => {
    await page.setViewportSize({ width: 400, height: 600 });
    await setJSON(page, {
      showQuestionNumbers: true,
      pages: [
        { elements: [{ type: "text", name: "question1" }] },
        { elements: [{ type: "text", name: "question2" }] }
      ]
    });
    await page.getByRole("button", { name: "Preview" }).click();
    await themeSettingsButtonSelector(page).click();
    await resetFocusToBody(page);
    const expandedGroup = page.locator(".spg-theme-builder-root .spg-panel.sd-element--expanded");
    await compareScreenshot(page, expandedGroup, "theme-editor-property-grid-general-group-mobile.png");
  });

  test("Reset theme popup dialog view", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    const expandedGroup = page.locator(".spg-theme-builder-root .spg-panel.sd-element--expanded");
    await getPropertyGridCategory(page, "General").click();
    await expandedGroup.locator(".spg-button-group__item-caption").getByText("Dark").click();
    await page.click(".sv-action--reset-theme .svc-toolbar__item");
    const popup = page.locator(".sv-popup__body-content").filter({ has: page.locator(":visible") });
    await compareScreenshot(page, popup, "theme-tab-reset-popup-dialog.png");
  });

  test("Scrollbar theming", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "html",
              "name": "question1",
              "html": "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>"
            }
          ]
        }
      ]
    });
    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    const expandedGroup = page.locator(".spg-theme-builder-root .spg-panel.sd-element--expanded");
    await expandedGroup.locator(".spg-button-group__item-caption").getByText("Dark").click();
    const simulator = page.locator(".svd-simulator-main").filter({ has: page.locator(":visible") });
    await simulator.hover();
    await compareScreenshot(page, simulator, "theme-tab-scrollbar.png");
  });
});