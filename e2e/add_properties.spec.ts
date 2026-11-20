import { url, test, expect } from "./helper";

const title = "Creator Custom Properties";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Required property", { tag: "@fresh-page" }, async ({ page }) => {
    await page.evaluate(() => {
    // eslint-disable-next-line no-undef
      (window as any).Survey.Serializer.addProperty("checkbox", { name: "!foo" });
      // eslint-disable-next-line no-undef
      (window as any).creator.JSON = "";
    });

    await page.locator(".svc-toolbox div").filter({ hasText: "Checkbox", visible: true }).first().click();
    await page.locator(".svc-tabbed-menu-item").filter({ hasText: "JSON Editor", visible: true }).first().click();

    await expect(page.locator(".svc-json-error").first()).toBeVisible();
  });

  test("Property with default value", { tag: "@fresh-page" }, async ({ page }) => {
    await page.evaluate(() => {
    // eslint-disable-next-line no-undef
      (window as any).Survey.Serializer.addProperty("survey", { name: "foo", default: "bar" });
      // eslint-disable-next-line no-undef
      (window as any).creator.JSON = {};
    });

    await page.getByText("Others").filter({ visible: true }).click();

    await expect(page.locator("[data-name=foo] input").first()).toHaveValue("bar");
  });

  test("Check boolean property", { tag: "@fresh-page" }, async ({ page }) => {
    await page.evaluate(() => {
    // eslint-disable-next-line no-undef
      (window as any).Survey.Serializer.addProperty("survey", { name: "foo:boolean" });
      // eslint-disable-next-line no-undef
      (window as any).creator.JSON = {};
    });

    await page.getByText("Others").filter({ visible: true }).click();

    await expect(page.locator("label").filter({ hasText: "Foo", visible: true }).first()).toBeVisible();
    await expect(page.locator("label").filter({ hasText: "Foo", visible: true }).locator("input").first()).toBeVisible();
  });

  test("Check text property", { tag: "@fresh-page" }, async ({ page }) => {
    await page.evaluate(() => {
    // eslint-disable-next-line no-undef
      (window as any).Survey.Serializer.addProperty("survey", { name: "foo:text" });
      // eslint-disable-next-line no-undef
      (window as any).creator.JSON = {};
    });

    await page.getByText("Others").filter({ visible: true }).click();

    const fooTextarea = page.locator("div").filter({ hasText: "Foo", visible: true }).locator("textarea").first();

    await fooTextarea.click();
    await fooTextarea.fill("Bar");

    await expect(fooTextarea).toHaveValue("Bar");
  });

  test("Check html property", { tag: "@fresh-page" }, async ({ page }) => {
    await page.evaluate(() => {
    // eslint-disable-next-line no-undef
      (window as any).Survey.Serializer.addProperty("survey", { name: "foo:html" });
      // eslint-disable-next-line no-undef
      (window as any).creator.JSON = {};
    });

    await page.getByText("Others").filter({ visible: true }).click();

    const fooTextarea = page.locator("div").filter({ hasText: "Foo", visible: true }).locator("textarea").first();

    await fooTextarea.click();
    await fooTextarea.fill("Bar");

    await expect(fooTextarea).toHaveValue("Bar");
  });

  test("Check itemvalues property", { tag: "@fresh-page" }, async ({ page }) => {
    await page.evaluate(() => {
    // eslint-disable-next-line no-undef
      (window as any).Survey.Serializer.addProperty("survey", { name: "foo:itemvalues" });
      // eslint-disable-next-line no-undef
      (window as any).creator.JSON = {};
    });

    await page.getByText("Others").filter({ visible: true }).click();

    const addButton = page.locator('button[title="Add item"]').first();
    await addButton.click();
    await addButton.click();

    const rowCountLocator = page.locator("div").filter({ hasText: "Foo", visible: true }).locator("table tbody tr");
    await expect(rowCountLocator).toHaveCount(2);
  });
});