import {
  url,
  test,
  expect,
  getToolboxItemByText,
  getListItemByText,
  getTabbedMenuItemByText,
  creatorTabPreviewName,
} from "../helper";

const title = "Question converter";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Convert text question into multiple text question", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const convertActionButton = page.locator(".svc-question__content--selected .svc-dropdown-action--convertTo").first();
    const textItemEditor = page.locator(".sv-string-editor").getByText("text1");

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    expect(await convertActionButton.locator(".svc-survey-element-toolbar-item__title").textContent()).toEqual("Single-Line Input");

    await convertActionButton.click();
    await getListItemByText(page, "Multiple Textboxes").click();
    expect(await convertActionButton.locator(".svc-survey-element-toolbar-item__title").textContent()).toEqual("Multiple Textboxes");

    await textItemEditor.hover();
    await textItemEditor.click();
    await textItemEditor.fill("myItem1");
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(page.locator(".sv-string-viewer").getByText("myItem1")).toBeVisible();
  });
});
