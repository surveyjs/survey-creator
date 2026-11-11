import { test, expect } from "@playwright/test";
import { url, urlDropdownCollapseView, setJSON, compareScreenshot } from "./helper";

const title = "Dropdown question creator test";

test.describe(title, () => {

  test("Check collapsed dropdown", async ({ page }) => {
    await page.goto(`${urlDropdownCollapseView}`);
    await page.setViewportSize({ width: 1920, height: 1080 });

    const questionSelector = page.locator(".svc-question__content");
    const buttonSelector = page.locator(".svc-question__dropdown-collapse-button");

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

  test("Dropdown formbox outer shadow is not clipped", async ({ page }) => {
    await page.goto(`${url}`);
    await page.setViewportSize({ width: 1920, height: 1080 });

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

    const outerShadow = "0 0 0 8px #5c2ee6";
    await page.evaluate((outerShadow) => {
      const creator = (window as any).creator;
      creator.applyCreatorTheme({
        ...creator.creatorTheme,
        cssVariables: {
          ...creator.creatorTheme.cssVariables,
          "--sjs2-border-effect-component-formbox-default": outerShadow,
          "--sjs2-border-effect-component-formbox-hovered": outerShadow,
          "--sjs2-border-effect-component-formbox-readonly": outerShadow
        }
      });
    }, outerShadow);

    await expect(page.locator(".sd-question__content--dropdown .sd-dropdown")).toHaveCSS("box-shadow", /92, 46, 230/);

    await page.mouse.move(0, 0);
    await compareScreenshot(page, page.locator(".svc-question__content"), "dropdown-formbox-outer-shadow.png");
  });
});