import { url, test, expect, setJSON, creatorTabPreviewName, getTabbedMenuItemByText } from "../helper";

const title = "Preview tab";

const json = {
  "pages": [
    {
      "name": "page1",
      "elements": [{ "type": "text", "name": "Question1", }]
    }
  ]
};

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Test theme switcher with one loaded theme", async ({ page }) => {
    await setJSON(page, json);

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(page.locator("#themeSwitcher")).not.toBeVisible();
  });
});

