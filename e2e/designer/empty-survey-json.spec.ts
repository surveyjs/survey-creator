import {
  url,
  test,
  expect,
  getTabbedMenuItemByText,
  getToolboxItemByText,
  getAddNewQuestionButton,
  doDragDrop,
  creatorTabDesignerName,
  creatorTabJsonEditorName,
} from "../helper";

const title = "Check Empty Survey JSON";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Designer with empty json should show only one ghost page", async ({ page }) => {
    const pages = page.locator(".svc-page__content");
    const ghostPage = page.locator(".svc-page__content.svc-page__content--new");
    const newGhostPage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']").first();
    const SingleInputToolboxItem = page.locator("[aria-label='Single-Line Input']");

    await expect(pages).toHaveCount(1);
    await expect(ghostPage).toHaveCount(1);

    await getAddNewQuestionButton(page).click();
    await expect(pages).toHaveCount(2);
    await expect(ghostPage).toHaveCount(1);

    await getTabbedMenuItemByText(page, creatorTabJsonEditorName).click();
    await page.locator(".svc-json-editor-tab__content").click();
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Delete");
    expect(await page.getByRole("textbox", { name: "JSON Editor" }).textContent()).toBe("");

    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await expect(pages).toHaveCount(1);
    await expect(ghostPage).toHaveCount(1);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await doDragDrop({ page, element: SingleInputToolboxItem, target: newGhostPage });
    await expect(pages).toHaveCount(2);
    await expect(ghostPage).toHaveCount(1);
  });
});
