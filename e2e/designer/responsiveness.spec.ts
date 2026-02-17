import {
  url,
  test,
  expect,
  setJSON,
  changeToolboxScrolling,
  getListItemByText,
  getTabbedMenuItemByText,
  getPropertyGridCategory,
  getAddNewQuestionButton,
  creatorTabDesignerName,
  creatorTabPreviewName,
  generalGroupName,
  selectedObjectTextSelector,
} from "../helper";
import type { Locator, Page } from "@playwright/test";

const title = "Responsiveness";

async function changeSidebarLocation(page: Page, newVal: string) {
  await page.evaluate((val) => {
    (window as any).creator.sidebarLocation = val;
  }, newVal);
}

async function dragByOffset(page: Page, locator: Locator, offsetX: number, offsetY: number) {
  const box = await locator.boundingBox();
  if (!box) throw new Error("No bounding box");
  await page.mouse.move(box.x + 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + 2 + offsetX, box.y + box.height / 2 + offsetY);
  await page.mouse.up();
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Check base responsiveness for toolbox", async ({ page }) => {
    await changeToolboxScrolling(page, false);
    const tabbedMenuItemSelector = page.locator(".svc-toolbox .svc-toolbox__tool:nth-of-type(20)");
    await page.setViewportSize({ width: 1280, height: 1200 });
    await expect(tabbedMenuItemSelector).not.toHaveClass(/sv-action--hidden/);
    await page.setViewportSize({ width: 1280, height: 632 });
    await expect(tabbedMenuItemSelector).toHaveClass(/sv-action--hidden/);
    await page.locator(".svc-toolbox__tool--dots").click();
    const popupSelector = page.locator(".sv-popup .sv-popup__container").filter({ visible: true });
    await expect(getListItemByText(page, "Dynamic Panel")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(popupSelector).not.toBeVisible();
    await page.setViewportSize({ width: 1920, height: 1200 });
    await expect(tabbedMenuItemSelector).not.toHaveClass(/sv-action--hidden/);
  });

  test("Responsive creator: toolbox & page navigator", async ({ page }) => {
    await setJSON(page, {
      pages: [
        { elements: [{ type: "text", name: "question1" }] },
        { elements: [{ type: "text", name: "question2" }] },
        { elements: [{ type: "text", name: "question2" }] }
      ]
    });
    const toolboxItemCount = 22;
    const collapseButtonSelector = page.locator(".sv-action-bar-item[title=\"Hide Panel\"]");
    const toolbox = page.locator(".svc-toolbox");
    const toolboxItemIcons = page.locator(".svc-toolbox__tool .svc-toolbox__item-container").filter({ visible: true });
    const toolboxItemTitles = page.locator(".svc-toolbox__tool .svc-toolbox__item > .svc-toolbox__item-title").filter({ visible: true });
    const pageNavigator = page.locator(".svc-page-navigator__selector").filter({ visible: true });

    await page.setViewportSize({ width: 1920, height: 1200 });
    await collapseButtonSelector.click();
    await expect(toolbox).toBeVisible();
    await expect(toolboxItemIcons).toHaveCount(toolboxItemCount);
    await expect(toolboxItemTitles).toHaveCount(toolboxItemCount);
    await expect(pageNavigator).toBeVisible();

    await page.setViewportSize({ width: 1000, height: 1200 });
    await expect(toolbox).toBeVisible();
    await expect(toolboxItemIcons).toHaveCount(toolboxItemCount);
    await expect(toolboxItemTitles).toHaveCount(0);
    await expect(pageNavigator).toBeVisible();

    await page.setViewportSize({ width: 750, height: 500 });
    await expect(toolbox).toHaveCount(0);
    await expect(pageNavigator).toHaveCount(0);

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await expect(toolbox).toHaveCount(0);
    await expect(pageNavigator).toHaveCount(0);
  });

  test("Responsive creator: property grid", async ({ page }) => {
    await setJSON(page, {
      pages: [
        { elements: [{ type: "comment", name: "question1" }, { type: "comment", name: "question2" }] },
        { elements: [{ type: "comment", name: "question3" }] }
      ]
    });
    const flyoutPropertyGrid = page.locator(".svc-side-bar--flyout");
    const westResizer = page.locator(".svc-resizer-west");
    const eastResizer = page.locator(".svc-resizer-east");
    const propertyGridSelector = page.locator(".svc-side-bar__container");
    const collapseButtonSelector = page.locator(".sv-action-bar-item[title=\"Hide Panel\"]");
    const expandButtonSelector = page.locator(".sv-action-bar-item[title=\"Show Panel\"]");
    const questionToolbarActions = page.locator(".svc-question__content--selected .svc-question__content-actions .sv-action").filter({ visible: true });
    const questions = page.locator(".svc-question__content");
    let pgWidth = 481;

    await page.setViewportSize({ width: 1920, height: 900 });
    await expect(westResizer).toBeVisible();
    await expect(eastResizer).not.toBeVisible();

    await questions.locator(".sv-string-editor").getByText("question1").click();
    await expect(propertyGridSelector).toBeVisible();
    expect(await propertyGridSelector.evaluate((el: HTMLElement) => el.offsetWidth)).toEqual(pgWidth);
    await expect(flyoutPropertyGrid).toHaveCount(0);
    await expect(questionToolbarActions).toHaveCount(4);

    await dragByOffset(page, westResizer, 150, 0);
    expect(await propertyGridSelector.evaluate((el: HTMLElement) => el.offsetWidth)).toEqual(pgWidth - 150);

    await page.setViewportSize({ width: 750, height: 700 });
    await expandButtonSelector.click();
    await expect(propertyGridSelector).toBeVisible();
    expect(await propertyGridSelector.evaluate((el: HTMLElement) => el.offsetWidth)).toEqual(pgWidth - 150);
    await expect(flyoutPropertyGrid).toHaveCount(1);

    await dragByOffset(page, westResizer, -150, 0);
    expect(await propertyGridSelector.evaluate((el: HTMLElement) => el.offsetWidth)).toEqual(pgWidth);

    await collapseButtonSelector.click();
    await expect(propertyGridSelector).not.toBeVisible();
    await expect(flyoutPropertyGrid).toHaveCount(1);

    await questions.locator(".sv-string-editor").getByText("question2").click();
    await expect(questionToolbarActions).toHaveCount(5);

    await questionToolbarActions.locator(".svc-survey-element-toolbar-item__title").getByText("Settings").click();
    await expect(propertyGridSelector).toBeVisible();
    await expect(flyoutPropertyGrid).toHaveCount(1);

    await collapseButtonSelector.click();
    await expect(propertyGridSelector).not.toBeVisible();
    await expect(flyoutPropertyGrid).toHaveCount(1);

    await expandButtonSelector.click();
    await changeSidebarLocation(page, "left");

    await expect(westResizer).not.toBeVisible();
    await expect(eastResizer).toBeVisible();
    expect(await propertyGridSelector.evaluate((el: HTMLElement) => el.offsetWidth)).toEqual(pgWidth);

    await dragByOffset(page, eastResizer, -120, 0);
    expect(await propertyGridSelector.evaluate((el: HTMLElement) => el.offsetWidth)).toEqual(pgWidth - 120);

    await dragByOffset(page, eastResizer, 100, 0);
    expect(await propertyGridSelector.evaluate((el: HTMLElement) => el.offsetWidth)).toEqual(pgWidth - 20);
  });

  test("Responsive creator: designer tab for mobile devices", async ({ page }) => {
    const topToolBar = page.locator(".svc-top-bar .sv-action-bar");
    const footerToolBar = page.locator(".svc-footer-bar .sv-action-bar");
    const collapseButtonSelector = page.locator(".sv-action-bar-item[title=\"Hide Panel\"]");

    await page.setViewportSize({ width: 750, height: 500 });
    await expect(topToolBar).toBeVisible();
    await expect(footerToolBar).not.toBeVisible();
    await expect(topToolBar.locator(".sv-action").filter({ visible: true })).toHaveCount(4);

    await page.setViewportSize({ width: 370, height: 400 });
    await expect(topToolBar).not.toBeVisible();
    await expect(footerToolBar).toBeVisible();
    await expect(footerToolBar.locator(".sv-action").filter({ visible: true })).toHaveCount(5);

    await page.setViewportSize({ width: 1920, height: 900 });
    await collapseButtonSelector.click();
    await expect(topToolBar).toBeVisible();
    await expect(footerToolBar).not.toBeVisible();
    await expect(topToolBar.locator(".sv-action").filter({ visible: true })).toHaveCount(4);
  });

  test("property grid for mobile devices", async ({ page }) => {
    const mobilePropertGrid = page.locator(".svc-side-bar--mobile .svc-side-bar__container");
    const surveySettingsButtonSelector = page.locator(".sv-action-bar-item[title=\"Survey settings\"]");
    const propertyGridSelector = page.locator(".svc-side-bar__container");

    await page.setViewportSize({ width: 750, height: 600 });
    await expect(mobilePropertGrid).toHaveCount(0);

    await page.setViewportSize({ width: 370, height: 600 });
    await expect(mobilePropertGrid).not.toBeVisible();

    await surveySettingsButtonSelector.click();
    await expect(mobilePropertGrid).toBeVisible();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("Survey");

    await page.locator(".svd-grid-hide").click();
    await getAddNewQuestionButton(page).click();
    await page.locator(".svc-survey-element-toolbar__item[title=\"Open settings\"]").filter({ visible: true }).first().click();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");

    await page.setViewportSize({ width: 1920, height: 900 });
    await expect(mobilePropertGrid).toHaveCount(0);
    await expect(propertyGridSelector).toBeVisible();
  });

  test("test tab for mobile devices", async ({ page }) => {
    await setJSON(page, { pages: [{ elements: [{ type: "text", name: "question1" }] }] });
    const testTabToolbar = page.locator(".sv-action-bar--pages");
    const creatorFooterToolbar = page.locator(".svc-footer-bar .svc-toolbar-wrapper");
    const creatorFooterToolbarActions = creatorFooterToolbar.locator(".sv-action").filter({ visible: true });

    await page.setViewportSize({ width: 1920, height: 900 });
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(testTabToolbar).toHaveCount(0);
    await expect(creatorFooterToolbar).toHaveCount(0);

    await page.setViewportSize({ width: 370, height: 600 });
    await expect(testTabToolbar).toHaveCount(0);
    await expect(creatorFooterToolbarActions).toHaveCount(3);
    await expect(creatorFooterToolbarActions.nth(0)).toHaveClass(/sv-action--svd-designer/);
    await expect(creatorFooterToolbarActions.nth(1)).toHaveClass(/sv-action--svd-preview/);
    await expect(creatorFooterToolbarActions.nth(2)).toHaveClass(/sv-action--showInvisible/);

    await page.setViewportSize({ width: 1920, height: 900 });
    await expect(testTabToolbar).toHaveCount(0);
    await expect(creatorFooterToolbar).toHaveCount(0);

    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await getAddNewQuestionButton(page).nth(1).click();
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(testTabToolbar).toHaveCount(1);
    await expect(creatorFooterToolbar).toHaveCount(0);
    await expect(testTabToolbar.locator(".sv-action").filter({ visible: true })).toHaveCount(3);

    await page.setViewportSize({ width: 370, height: 600 });
    await expect(testTabToolbar).toHaveCount(0);
    await expect(creatorFooterToolbarActions).toHaveCount(5);
    await expect(creatorFooterToolbarActions.nth(0)).toHaveClass(/sv-action--svd-designer/);
    await expect(creatorFooterToolbarActions.nth(1)).toHaveClass(/sv-action--svd-preview/);
    await expect(creatorFooterToolbarActions.nth(2)).toHaveClass(/sv-action--prevPage/);
    await expect(creatorFooterToolbarActions.locator(".svc-preview-pager__item").nth(0)).toHaveAttribute("disabled", "");
    await expect(creatorFooterToolbarActions.nth(3)).toHaveClass(/sv-action--nextPage/);
    await expect(creatorFooterToolbarActions.locator(".svc-preview-pager__item").nth(1)).not.toHaveAttribute("disabled", "");
    await expect(creatorFooterToolbarActions.nth(4)).toHaveClass(/sv-action--showInvisible/);

    await creatorFooterToolbarActions.nth(3).click();
    await expect(creatorFooterToolbarActions.locator(".svc-preview-pager__item").nth(0)).not.toHaveAttribute("disabled", "");
    await expect(creatorFooterToolbarActions.locator(".svc-preview-pager__item").nth(1)).toHaveAttribute("disabled", "");

    await page.setViewportSize({ width: 1920, height: 900 });
    await expect(testTabToolbar).toHaveCount(1);
    await expect(creatorFooterToolbar).toHaveCount(0);
  });

  test("Property grid editor popup", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "title": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        }
      ]
    };
    await setJSON(page, json);

    const question1 = page.locator("[data-name=\"question1\"]");

    await page.setViewportSize({ width: 1920, height: 900 });
    await question1.click();
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Data").click();
    await page.getByText("Set Default Answer", { exact: true }).click();
    await expect(page.locator(".sv-popup--modal-popup")).toBeVisible();
    await page.getByRole("button", { name: "Cancel", exact: true }).click();
    await page.setViewportSize({ width: 380, height: 600 });
    await page.locator(".svc-survey-element-toolbar__item[title=\"Open settings\"]").filter({ visible: true }).click();
    await page.locator(".svd-grid-hide").click();
    await question1.click({ position: { x: 5, y: 5 } });
    await page.locator(".svc-question__content-actions .svc-survey-element-toolbar__item[title=\"Open settings\"]").filter({ visible: true }).click();
    await page.getByText("Set Default Answer", { exact: true }).click();
    await expect(page.locator(".sv-popup--modal-overlay")).toBeVisible();
  });

  test("Question type popup - wide", async ({ page }) => {
    const json = {};
    await setJSON(page, json);
    await page.setViewportSize({ width: 1920, height: 900 });
    await page.waitForTimeout(500);
    await page.locator("button.svc-element__question-type-selector").click();
    await expect(getListItemByText(page, "Single-Line Input")).toHaveCount(1);
  });

  test("Question type popup - narrow", async ({ page }) => {
    const json = { elements: [{ type: "text", name: "q1" }] };
    await setJSON(page, json);
    await page.setViewportSize({ width: 380, height: 600 });
    await page.waitForTimeout(500);
    await page.locator("button.svc-element__question-type-selector").first().click();
    await expect(getListItemByText(page, "Single-Line Input")).toHaveCount(1);
  });

  test("Responsive creator: property grid - click the shadow", async ({ page }) => {
    const json = { pages: [{ name: "page1" }] };
    await setJSON(page, json);
    const propertyGridSelector = page.locator(".svc-side-bar__container");
    const flyoutPropertyGrid = page.locator(".svc-side-bar--flyout");
    const expandButtonSelector = page.locator(".sv-action-bar-item[title=\"Show Panel\"]");
    const collapseButtonSelector = page.locator(".sv-action-bar-item[title=\"Hide Panel\"]");
    const surveySettingsButtonSelector = page.locator(".sv-action-bar-item[title=\"Survey settings\"]");
    const objectSelectorButton = page.locator(".svc-side-bar__container-header .sv-action--object-selector .sv-action-bar-item");

    await page.setViewportSize({ width: 900, height: 700 });
    await page.locator(".svc-page__content").first().click({ position: { x: 5, y: 5 } });
    await expandButtonSelector.click();
    await expect(propertyGridSelector).toBeVisible();
    await expect(flyoutPropertyGrid).toHaveCount(1);
    await expect(objectSelectorButton.getByText("page1")).toBeVisible();
    await collapseButtonSelector.click();
    await surveySettingsButtonSelector.click();
    await expect(objectSelectorButton.getByText("Survey")).toBeVisible();
    await page.locator(".svc-creator").click({ position: { x: 237, y: 273 } });

    await expect(objectSelectorButton.getByText("page1")).not.toBeVisible();
  });
});
