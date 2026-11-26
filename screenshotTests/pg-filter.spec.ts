import { test, expect, url, setJSON, getPropertyGridCategory, generalGroupName, compareScreenshot, resetHoverToCreator } from "./helper";

// The settings of the Filter Control (survey-library #11890) in the property grid
const title = "Property Grid: the Filter Control";
const json = {
  elements: [
    {
      type: "filter", name: "filter1", targetQuestion: "products", showSearchBar: true, searchFields: ["name"], defaultPreset: "cheap",
      fields: [{ name: "price", title: "Unit price", operators: ["less", "greater"] }, { name: "name" }, { name: "category", showInQuickFilters: false }],
      presets: [
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

  test("General", async ({ page }) => {
    const content = page.locator(".spg-panel__content").filter({ hasText: "" });
    await expect(content).toBeVisible();
    await compareScreenshot(page, content, "pg-filter-general.png");
  });

  test("Filter Settings: the target question, fields, quick filters and search", async ({ page }) => {
    await compareScreenshot(page, await showCategory(page, "Filter Settings"), "pg-filter-settings.png");
  });

  test("Filter Settings: a field's details", async ({ page }) => {
    const content = await showCategory(page, "Filter Settings");
    await content.locator(".sd-action[title='Show Details']").first().click();
    await resetHoverToCreator(page);
    await compareScreenshot(page, content, "pg-filter-field-details.png");
  });
  test("Filter Presets", async ({ page }) => {
    await compareScreenshot(page, await showCategory(page, "Filter Presets"), "pg-filter-presets.png");
  });
});
