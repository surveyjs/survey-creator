import { url, test, expect, setJSON, creatorTabPreviewName, getTabbedMenuItemByText, getBarItemByTitle, explicitErrorHandler, getMenuItemByText, getButtonByText } from "../helper";

const title = "Preview tab";

const json = {
  elements: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: ["Item 1", "Item 2", "Item 3"]
    }
  ]
};

const json2 = {
  headerView: "basic",
  title: {
    default: "My Survey",
    de: "Meine Umfrage"
  },
  pages: [{
    name: "page1",
    elements: [
      { type: "checkbox", name: "string_editor", choices: ["Item 1", "Item 2", "Item 3"] },
      { type: "text", name: "hidden_question", visible: false }
    ],
    title: {
      default: "First page",
      de: "Erste Seite"
    }
  },
  {
    name: "page2",
    elements: [{ type: "text", name: "question1" }],
    title: {
      default: "Second page",
      de: "Zweite Seite"
    }
  },
  {
    name: "page3",
    elements: [{ type: "text", name: "question2" }]
  }]
};

const restartSurveyButtonText = "Preview Survey Again";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Language switcher", async ({ page }) => {
    await setJSON(page, json2);

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(getBarItemByTitle(page, "English")).toBeVisible();
    await expect(page.locator(".sd-title .sd-header__text div")).toContainText("My Survey");
    await getBarItemByTitle(page, "English").click();
    await expect(getMenuItemByText(page, "Deutsch")).toBeVisible();
    await getMenuItemByText(page, "Deutsch").click();
    await expect(page.locator(".sd-title .sd-header__text div")).toContainText("Meine Umfrage");
    await expect(getBarItemByTitle(page, "Deutsch")).toBeVisible();
  });

  test("Page switcher", async ({ page }) => {
    await setJSON(page, json2);
    const selectedClassName = /svc-list__item--selected/;

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(page.locator(".sd-question__title").getByText("string_editor")).toBeVisible();
    await expect(page.locator(".svc-page-selector")).toContainText("First page");
    await expect(page.locator(".sv-action--prevPage button")).toHaveAttribute("disabled", "");
    await expect(page.locator(".sv-action--nextPage button")).not.toHaveAttribute("disabled", "");

    await page.locator(".sv-action--nextPage").click();
    await expect(page.locator(".sd-question__title").getByText("question1")).toBeVisible();
    await expect(page.locator(".svc-page-selector")).toContainText("Second page");
    await expect(page.locator(".sv-action--prevPage button")).not.toHaveAttribute("disabled", "");
    await expect(page.locator(".sv-action--nextPage button")).not.toHaveAttribute("disabled", "");

    await page.locator(".sv-action--nextPage").click();
    await expect(page.locator(".sd-question__title").getByText("question2")).toBeVisible();
    await expect(page.locator(".svc-page-selector")).toContainText("Page 3");
    await expect(page.locator(".sv-action--prevPage button")).not.toHaveAttribute("disabled", "");
    await expect(page.locator(".sv-action--nextPage button")).toHaveAttribute("disabled", "");

    await page.locator(".svc-preview-pager__item[title='Page 3']").click();
    await expect(getMenuItemByText(page, "Second page")).toBeVisible();
    await expect(getMenuItemByText(page, "First page")).not.toHaveClass(selectedClassName);
    await expect(getMenuItemByText(page, "Second page")).not.toHaveClass(selectedClassName);
    await expect(getMenuItemByText(page, "Page 3")).toHaveClass(selectedClassName);
    await getMenuItemByText(page, "Second page").click();
    await expect(page.locator(".sd-question__title").getByText("question1")).toBeVisible();
    await expect(page.locator(".svc-page-selector")).toContainText("Second page");
    await expect(page.locator(".sv-action--prevPage button")).not.toHaveAttribute("disabled", "");
    await expect(page.locator(".sv-action--nextPage button")).not.toHaveAttribute("disabled", "");
    await page.locator(".svc-preview-pager__item[title='Second page']").click();
    await expect(getMenuItemByText(page, "First page")).not.toHaveClass(selectedClassName);
    await expect(getMenuItemByText(page, "Second page")).toHaveClass(selectedClassName);
    await expect(getMenuItemByText(page, "Page 3")).not.toHaveClass(selectedClassName);
    await getMenuItemByText(page, "Second page").click();
  });

  test("Preview Survey Again", async ({ page }) => {
    await setJSON(page, json2);
    const switcher = getBarItemByTitle(page, "Show invisible elements");

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.locator(".sv-action--nextPage").click();
    await page.locator(".sv-action--nextPage").click();
    await getButtonByText(page, "Complete").click();
    await expect(page.locator(".sd-completedpage").getByText("Thank you for completing the survey")).toBeVisible();
    await page.locator(".svc-preview__test-again span").getByText(restartSurveyButtonText).click();
    await expect(page.locator(".sd-question__title").getByText("string_editor")).toBeVisible();
  });

  test("Show invisible elements switcher", async ({ page }) => {
    await setJSON(page, json2);
    const switcher = getBarItemByTitle(page, "Show invisible elements");

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(page.locator(".sd-question__title").getByText("string_editor")).toBeVisible();
    await expect(switcher).toBeVisible();
    await switcher.click();
    await expect(page.locator(".sd-question__title").getByText("hidden_question")).toBeVisible();
  });

  test("Landscape switcher", async ({ page }) => {
    await explicitErrorHandler(page);
    await setJSON(page, json);

    const orientationAction = page.locator(".sv-action--orientationSelector .sv-action-bar-item");

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(orientationAction).toHaveAttribute("disabled", "");
    await expect(page.locator(".svd-simulator-main")).not.toHaveClass(/svd-simulator-main--frame/);
    await expect(getBarItemByTitle(page, "Show invisible elements")).toBeVisible();

    await getBarItemByTitle(page, "Select device type").click();
    await expect(getMenuItemByText(page, "iPad Air")).toBeVisible();
    await getMenuItemByText(page, "iPad Air").click();
    await expect(orientationAction).not.toHaveAttribute("disabled", "");
    await expect(page.locator(".svd-simulator-main")).toHaveClass(/svd-simulator-main--frame/);
    const simulatorWrapper = page.locator(".svd-simulator-wrapper");
    const wrapperBox = await simulatorWrapper.boundingBox();
    expect(wrapperBox.width).toBeGreaterThan(1200);
    expect(wrapperBox.height).toBeLessThan(1000);
    await getBarItemByTitle(page, "Switch to portrait orientation").click();
    await expect(getBarItemByTitle(page, "Switch to landscape orientation")).toBeVisible();
    const wrapperBox2 = await simulatorWrapper.boundingBox();
    expect(wrapperBox2.width).toBeLessThan(1000);
    expect(wrapperBox2.height).toBeGreaterThan(1200);
  });

  test("Device selector", async ({ page }) => {
    await explicitErrorHandler(page);
    await setJSON(page, json);

    const orientationAction = page.locator(".sv-action--orientationSelector .sv-action-bar-item");

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(page.locator(".svc-top-bar .sv-action-bar-item").filter({ visible: true })).toHaveCount(3);
    await expect(orientationAction).toHaveAttribute("disabled", "");
    await expect(getBarItemByTitle(page, "Show invisible elements")).toBeVisible();

    await getBarItemByTitle(page, "Select device type").click();
    await expect(getMenuItemByText(page, "iPad Air")).toBeVisible();

    await getMenuItemByText(page, "iPad Air").click();
    await getButtonByText(page, "Complete").click();
    await expect(orientationAction).not.toHaveAttribute("disabled", "");
    await expect(page.locator(".svc-preview__test-again span").getByText(restartSurveyButtonText)).toBeVisible();

    await getBarItemByTitle(page, "Select device type").click();
    await expect(getMenuItemByText(page, "Desktop")).toBeVisible();

    await getMenuItemByText(page, "Desktop").click();
    await page.locator(".svc-preview__test-again span").getByText(restartSurveyButtonText).click();
    await expect(orientationAction).toHaveAttribute("disabled", "");
    await expect(getBarItemByTitle(page, "Show invisible elements")).toBeVisible();

    await getBarItemByTitle(page, "Select device type").click();
    await expect(getMenuItemByText(page, "iPad Air")).toBeVisible();
  });

  test("Title hints", async ({ page }) => {
    await explicitErrorHandler(page);
    await setJSON(page, json);

    const orientationAction = page.locator(".sv-action--orientationSelector .sv-action-bar-item");

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(page.locator(".svc-top-bar .sv-action-bar-item").filter({ visible: true })).toHaveCount(3);
    await expect(orientationAction).toHaveAttribute("disabled", "");
    await expect(getBarItemByTitle(page, "Show invisible elements")).toBeVisible();

    await getBarItemByTitle(page, "Select device type").click();
    await expect(getMenuItemByText(page, "iPad Mini")).toBeVisible();

    await getMenuItemByText(page, "iPad Mini").click();
    await getBarItemByTitle(page, "Switch to portrait orientation").click();
    await getBarItemByTitle(page, "Switch to landscape orientation").click();
    await getBarItemByTitle(page, "Show invisible elements").click();
    await expect(getBarItemByTitle(page, "Hide invisible elements")).toBeVisible();
    await getBarItemByTitle(page, "Hide invisible elements").click();
    await expect(getBarItemByTitle(page, "Show invisible elements")).toBeVisible();
  });
});

