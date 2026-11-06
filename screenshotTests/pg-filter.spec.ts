import { test, expect } from "playwright/test";
import { url, setJSON, getPropertyGridCategory, generalGroupName, compareScreenshot } from "./helper";

// The settings of the Filter Control (survey-library #11890) in the property grid
const title = "Property Grid: the Filter Control";
const json = {
  elements: [
    {
      type: "filter", name: "filter1", source: "products", showSearch: true, searchFields: ["name"], defaultItem: "cheap",
      items: [
        { name: "cheap", title: "Cheap", expression: "{price} < 20" },
        { name: "out-of-stock", title: "Out of stock", expression: "{stock} = 0" }
      ]
    },
    {
      type: "matrixdynamic", name: "products", rowCount: 1,
      columns: [
        { name: "name", title: "Name", cellType: "text" },
        { name: "price", title: "Price", cellType: "text", inputType: "number" },
        { name: "stock", title: "In Stock", cellType: "text", inputType: "number" }
      ]
    }
  ]
};

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await page.setViewportSize({ width: 1560, height: 1440 });
    await setJSON(page, json);
    await page.locator("[data-name=\"filter1\"]").click();
    await page.keyboard.press("Enter");
  });

  const showCategory = async (page, categoryName: string) => {
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, categoryName).click();
    const content = page.locator(".spg-panel__content").filter({ hasText: "" });
    await expect(content).toBeVisible();
    return content;
  };

  test("General: the data source", async ({ page }) => {
    const content = page.locator(".spg-panel__content").filter({ hasText: "" });
    await expect(content).toBeVisible();
    await compareScreenshot(page, content, "pg-filter-general.png");
  });

  test("Filter Settings: modes and search", async ({ page }) => {
    await compareScreenshot(page, await showCategory(page, "Filter Settings"), "pg-filter-settings.png");
  });

  test("Presets", async ({ page }) => {
    await compareScreenshot(page, await showCategory(page, "Presets"), "pg-filter-presets.png");
  });
});
