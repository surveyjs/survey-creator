import { url, test, expect, setJSON } from "../helper";

const title = "Property Grid";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Change question name and select another question", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].JSON = {
        "elements": [
          { "type": "checkbox", "name": "question1" },
          { "type": "checkbox", "name": "question2" }
        ]
      };
    });
    await page.locator("[data-name=\"question1\"]").click();
    await page.locator("div [data-name=\"name\"] input").click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("ABC");
    await page.locator("[data-name=\"question2\"]").click();
    await page.locator("[data-name=\"ABC\"]").click();
    await expect(page.locator("[data-name=\"ABC\"]")).toBeVisible();
  });

  test("Change rating auto-generate", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [{ "type": "rating", "name": "question1", }]
        }
      ]
    };
    await setJSON(page, json);

    const question1 = page.locator("[data-name=\"question1\"]");
    const choicesTab = page.locator("div[id$=ariaTitle][id^=sp]").getByText("Rating Values", { exact: true });
    const items = page.locator("[data-name=\"rateValues\"]");

    await question1.click();
    await choicesTab.click();
    await expect(items).not.toBeVisible();
    await page.locator(".spg-button-group__item-caption").getByText("Manual", { exact: true }).click();
    await expect(items).toBeVisible();
    await page.locator(".spg-button-group__item-caption").getByText("Auto-generate", { exact: true }).click();
    await expect(items).not.toBeVisible();
  });

  test("Check survey settings button", async ({ page }) => {
    const question1 = page.locator("[data-name=\"q1\"]");
    const maskPage = page.locator('.svc-menu-action__button[title="Input Mask Settings"]');
    await page.evaluate(() => {
      window["creator"].showOneCategoryInPropertyGrid = true;
    });
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [{ "type": "text", "name": "q1" }]
        }
      ]
    };
    await setJSON(page, json);
    await question1.click();
    await expect(maskPage).toBeVisible();
    await page.evaluate((val: string) => {
      window["creator"].survey.getQuestionByName("q1").inputType = val;
    }, "date");
    await expect(maskPage).not.toBeVisible();
    await page.evaluate((val: string) => {
      window["creator"].survey.getQuestionByName("q1").inputType = val;
    }, "text");
    await expect(maskPage).toBeVisible();
  });
});
