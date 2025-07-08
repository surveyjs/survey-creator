import { url, test, expect } from "./helper";

const title = "String Editor";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });
  test("String editor paste", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    const testJson = {
      "title": "Title",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "q"
            }
          ]
        }
      ]
    };
    await page.evaluate((json) => {
      window["Survey"].Serializer.findProperty("survey", "title").maxLength = 20;
      window["creator"].JSON = json;
    }, testJson);
    await page.getByLabel("Designer").getByText("Lorem ipsum dolor sit amet,").click();
    await page.keyboard.press("ControlOrMeta+c");
    await page.getByRole("textbox", { name: "Survey Title" }).click();
    await page.keyboard.press("Backspace");
    await page.keyboard.press("ControlOrMeta+v");
    await page.locator(".svc-tab-designer_content").click();
    const text = await page.getByRole("textbox", { name: "Survey Title" }).textContent();
    await expect(text).toBe("Lorem ipsum dolor si");
  });
  test("String editor maxLength", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    const testJson = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "q"
            }
          ]
        }
      ]
    };
    await page.evaluate((json) => {
      window["Survey"].Serializer.findProperty("survey", "title").maxLength = 6;
      window["creator"].JSON = json;
    }, testJson);
    await page.getByRole("textbox", { name: "Survey Title" }).click();
    await page.getByRole("textbox", { name: "Survey Title" }).fill("12345");
    await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("12345");
    await page.keyboard.press("6");
    await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("123456");
    await page.keyboard.press("7");
    await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("123456");

    await page.getByRole("textbox", { name: "Survey Title" }).press("ArrowLeft");
    await page.getByRole("textbox", { name: "Survey Title" }).press("ArrowLeft");
    await page.getByRole("textbox", { name: "Survey Title" }).press("Delete");
    await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("12346");
    await page.getByRole("textbox", { name: "Survey Title" }).press("8");

    await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("123486");
    await page.getByRole("textbox", { name: "Survey Title" }).press("Backspace");
    await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("12346");
    await page.getByRole("textbox", { name: "Survey Title" }).press("7");
    await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("123476");
    await page.getByRole("textbox", { name: "Survey Title" }).press("Shift+ArrowLeft");
    await page.getByRole("textbox", { name: "Survey Title" }).press("9");
    await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("123496");

  });
});