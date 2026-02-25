import {
  url,
  test,
  expect,
  setJSON,
  generalGroupName,
  getPropertyGridCategory,
} from "../helper";

const title = "Page Title";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Edit page title", async ({ page }) => {
    await setJSON(page, { elements: [{ type: "text", name: "page_title" }] });
    const pageTitle = "PageTitle";
    const editorValue = page.locator("[data-name='title']").locator("textarea");

    await getPropertyGridCategory(page, generalGroupName).click();
    await page.locator("span[aria-placeholder='Page 1']").click();
    await expect(editorValue).toHaveValue("");

    await page.keyboard.type(pageTitle);
    await page.keyboard.press("Enter");
    await expect(editorValue).toHaveValue(pageTitle);
  });
});
