import { url, test, expect } from "./helper";
import { json as hugeJson } from "./questions_4114";

const title = "Design Surface Lazy Rendering";

// Functional checks of the design surface with a huge survey.
test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });
  test("Pages adorner content lazy rendering", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    await page.evaluate((json) => {
      window["creator"].JSON = json;
    }, hugeJson);
    const skeletonElement = page.locator(".sv-skeleton-element");
    const nonRenderedPages = page.locator(".svc-page__loading-content");
    await expect.poll(() => skeletonElement.count()).toBeGreaterThanOrEqual(85);
    await expect.poll(() => nonRenderedPages.count()).toBeGreaterThanOrEqual(106);
  });

  test("Select distant question", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 800 });
    await page.evaluate((json) => {
      window["creator"].JSON = json;
    }, hugeJson);
    await page.getByRole("button", { name: "Survey", exact: true }).click();
    await page.locator(".svc-object-selector .sd-menu-list__container > .sd-menu-filter").click();
    await page.locator(".sv-action--object-selector").getByRole("textbox", { name: "Type to search..." }).fill("q3978");
    await expect(page.locator("[data-name='q3978']")).toBeHidden();
    await page.getByText("q3978").click();
    await expect(page.getByRole("textbox", { name: "Question name" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Question name" })).toHaveValue("q3978");
    await expect(page.locator("[data-name='q3978']")).toBeVisible();
  });
});
