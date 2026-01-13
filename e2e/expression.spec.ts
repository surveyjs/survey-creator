
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
