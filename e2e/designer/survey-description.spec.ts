import { url, test, expect, setJSON } from "../helper";

const title = "Survey Description";

test.describe(title, () => {
  test("Edit survey description", async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });

    const description = "SurveyDescription";
    const placeholder = "Description";

    await setJSON(page, { pages: [{ name: "page1" }] });
    await page.locator(`span[aria-placeholder='${placeholder}']`).first().click();
    await page.keyboard.type(description);
    await page.keyboard.press("Enter");

    await expect(page.locator("[data-name='description']").locator("textarea")).toHaveValue(description);
  });
});
