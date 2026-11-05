
import { url, test, expect } from "./helper";

const title = "Expressions";
const config = {
  "elements": [
    {
      "type": "text",
      "name": "q1",
    },
  ]
};

test.describe(title, () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await page.evaluate((config) => {
      window["creator"].propertyGridNavigationMode = "buttons";
      window["creator"].expressionsValidateVariables = true;
      window["creator"].JSON = config;
    }, config);
  });

  test("Check syntax", async ({ page }) => {
    await page.locator(".svc-question__content.svc-question__content--text").click();
    await page.getByTitle("Conditions").click();
    await page.getByRole("textbox", { name: "Make the question visible if" }).click();
    await page.keyboard.type("{");
    expect(await page.locator(".sd-element__erbox").count()).toBe(0);
    await page.keyboard.press("Tab");
    expect(await page.locator(".sd-element__erbox").count()).toBe(1);
    await page.getByRole("textbox", { name: "Make the question visible if" }).click();
    expect(await page.locator(".sd-element__erbox").count()).toBe(1);
    await page.keyboard.type("q1");
    expect(await page.locator(".sd-element__erbox").count()).toBe(1);
    await page.keyboard.type("}");
    expect(await page.locator(".sd-element__erbox").count()).toBe(0);
  });

  test("Check unknown function", async ({ page }) => {
    await page.locator(".svc-question__content.svc-question__content--text").click();
    await page.getByTitle("Conditions").click();
    await page.getByRole("textbox", { name: "Make the question visible if" }).click();
    await page.keyboard.type("ages()");
    expect(await page.locator(".sd-element__erbox").count()).toBe(0);
    await page.keyboard.press("Tab");
    expect(await page.locator(".sd-element__erbox").count()).toBe(1);
    await page.getByRole("textbox", { name: "Make the question visible if" }).click();
    expect(await page.locator(".sd-element__erbox").count()).toBe(1);
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("Backspace");
    expect(await page.locator(".sd-element__erbox").count()).toBe(0);
  });

  test("Check unknown variable", async ({ page }) => {
    await page.locator(".svc-question__content.svc-question__content--text").click();
    await page.getByTitle("Conditions").click();
    await page.getByRole("textbox", { name: "Make the question visible if" }).click();
    await page.keyboard.type("{q2}");
    expect(await page.locator(".sd-element__erbox").count()).toBe(0);
    await page.keyboard.press("Tab");
    expect(await page.locator(".sd-element__erbox").count()).toBe(1);
    await page.getByRole("textbox", { name: "Make the question visible if" }).click();
    expect(await page.locator(".sd-element__erbox").count()).toBe(1);
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("1");
    expect(await page.locator(".sd-element__erbox").count()).toBe(0);
  });
});

test.describe("Expression question banner", () => {
  const json = {
    "elements": [
      { "type": "text", "name": "price" },
      { "type": "text", "name": "quantity" },
      { "type": "expression", "name": "total", "expression": "{price} * {quantity}" }
    ]
  };

  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await page.evaluate((json) => {
      window["creator"].JSON = json;
    }, json);
  });

  test("Edit expression opens the sidebar and focuses the expression editor", async ({ page }) => {
    await page.evaluate(() => { window["creator"].setShowSidebar(false); });
    await expect(page.locator(".svc-side-bar__container")).toBeHidden();
    const banner = page.locator(".svc-question__content--expression .svc-carry-forward-panel");
    await expect(banner).toContainText("{price} * {quantity}");
    await banner.getByRole("button", { name: "Edit expression" }).click();
    await expect(page.locator(".svc-side-bar__container")).toBeVisible();
    expect(await page.evaluate(() => window["creator"].selectedElement.name)).toBe("total");
    await expect(page.getByRole("textbox", { name: "Expression", exact: true })).toBeFocused();
  });

  test("The banner follows the expression edited in the property grid", async ({ page }) => {
    const banner = page.locator(".svc-question__content--expression .svc-carry-forward-panel");
    await banner.getByRole("button", { name: "Edit expression" }).click();
    const editor = page.getByRole("textbox", { name: "Expression", exact: true });
    await expect(editor).toBeFocused();
    await editor.fill("{price} + 1");
    await editor.press("Tab");
    await expect(banner).toContainText("{price} + 1");
    await editor.fill("");
    await editor.press("Tab");
    await expect(banner).toContainText("No expression set");
  });

  test("No link in a read-only creator", async ({ page }) => {
    await page.evaluate(() => { window["creator"].readOnly = true; });
    const banner = page.locator(".svc-question__content--expression .svc-carry-forward-panel");
    await expect(banner).toContainText("{price} * {quantity}");
    await expect(banner.getByRole("button")).toHaveCount(0);
  });
});
