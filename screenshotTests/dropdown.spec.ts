import { test, expect } from "@playwright/test";
import { urlDropdownCollapseView, setJSON, compareScreenshot } from "./helper";

const title = "Dropdown question creator test";

test.describe(title, () => {

  test("Check collapsed dropdown", async ({ page }) => {
    await page.goto(`${urlDropdownCollapseView}`);
    await page.setViewportSize({ width: 1920, height: 1080 });

    const questionSelector = page.locator(".svc-question__content");
    const buttonSelector = page.locator(".svc-question__dropdown-choices--wrapper .svc-action-button");

    await setJSON(page, {
      showQuestionNumbers: true,
      elements: [
        {
          type: "dropdown",
          name: "q1",
          choices: ["Item 1", "Item 2", "Item 3"]
        }
      ]
    });

    await compareScreenshot(page, questionSelector, "collapsed-dropdown.png");

    await buttonSelector.click();
    await compareScreenshot(page, questionSelector, "not-collapsed-dropdown.png");
  });
});