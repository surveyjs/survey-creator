import { url, test, expect, setJSON, creatorTabPreviewName, getTabbedMenuItemByText } from "../helper";

const title = "Preview tab";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Test popups", async ({ page }) => {
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "paneldynamic",
              "name": "question1",
              "templateElements": [
                {
                  "type": "text",
                  "name": "question2"
                }
              ],
              "panelCount": 20,
              "displayMode": "tab"
            }
          ]
        }
      ]
    });

    const popup = page.locator(".sv-popup__container").filter({ visible: true });
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(popup).not.toBeVisible();
    await page.getByRole("button", { name: "More" }).click();
    await expect(popup).toBeVisible();
    await page.locator(".sv-popup ").filter({ visible: true }).click({ position: { x: 20, y: 20 } });
    await expect(popup).not.toBeVisible();
  });
});

