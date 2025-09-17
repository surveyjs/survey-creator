
import { url, test, expect } from "./helper";

const title = "Designer";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });
  test("Check page's d&d attributes are updating on page's name change", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    const testJson = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "q"
            },
          ]
        }
      ]
    };
    await page.evaluate((json) => {
      window["creator"].JSON = json;
    }, testJson);
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-page")).toBe("page1");
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-survey-element")).toBe("page1");
    await page.evaluate(() => { window["creator"].survey.pages[0].name = "test1"; });
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-page")).toBe("test1");
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-survey-element")).toBe("test1");
    await page.evaluate(() => { window["creator"].survey.pages[0].name = "test2"; });
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-page")).toBe("test2");
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-survey-element")).toBe("test2");
  });
});
