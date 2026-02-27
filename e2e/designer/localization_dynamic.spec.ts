import { url, test, expect, setJSON } from "../helper";

const title = "Localization UI";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Change Creator.locale property", async ({ page }) => {
    const checkboxText = "Auswahl";
    await setJSON(page, { elements: [{ type: "checkbox", name: "question1" }] });
    await page.locator("[data-name='question1']").click();
    await page.evaluate(() => {
      window["creator"].locale = "de";
    });
    await page.waitForTimeout(500);
    expect(await page.locator(".svc-survey-element-toolbar-item__title--with-icon").first().textContent()).toBe(checkboxText);
  });
});
