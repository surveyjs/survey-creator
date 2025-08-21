import { url, test, expect } from "./helper";

const title = "TabbedMenu and Toolbox Actions";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("TabbedMenu", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    await page.evaluate(() => {
      window["creator"].tabs.map(t => t.enabled = false);
    });
    await page.getByText("Preview").click();
    await expect(page.getByText("Your form is empty")).toBeVisible();
  });

  test("Toolbox", async ({ page }) => {
    await page.setViewportSize({ width: 1500, height: 800 });
    await page.evaluate(() => {
      window["creator"].toolbox.items.forEach(i => i.enabled = false);
    });
    await page.getByText("Radio Button Group").click({ force: true });
    await expect(page.getByText("Your form is empty")).toBeVisible();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Space");
    await expect(page.getByText("Your form is empty")).toBeVisible();
  });
  // test("Toolbox", async ({ page }) => {
  //   await page.setViewportSize({ width: 1000, height: 800 });
  //   const testJson = {
  //     "pages": [
  //       {
  //         "name": "page1",
  //         "elements": [
  //           {
  //             "type": "text",
  //             "name": "q"
  //           }
  //         ]
  //       }
  //     ]
  //   };
  //   await page.evaluate((json) => {
  //     window["Survey"].Serializer.findProperty("survey", "title").maxLength = 6;
  //     window["creator"].JSON = json;
  //   }, testJson);
  //   await page.getByRole("textbox", { name: "Survey Title" }).click();
  //   await page.getByRole("textbox", { name: "Survey Title" }).fill("12345");
  //   await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("12345");
  //   await page.keyboard.press("6");
  //   await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("123456");
  //   await page.keyboard.press("7");
  //   await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("123456");

  //   await page.getByRole("textbox", { name: "Survey Title" }).press("ArrowLeft");
  //   await page.getByRole("textbox", { name: "Survey Title" }).press("ArrowLeft");
  //   await page.getByRole("textbox", { name: "Survey Title" }).press("Delete");
  //   await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("12346");
  //   await page.getByRole("textbox", { name: "Survey Title" }).press("8");

  //   await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("123486");
  //   await page.getByRole("textbox", { name: "Survey Title" }).press("Backspace");
  //   await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("12346");
  //   await page.getByRole("textbox", { name: "Survey Title" }).press("7");
  //   await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("123476");
  //   await page.getByRole("textbox", { name: "Survey Title" }).press("Shift+ArrowLeft");
  //   await page.getByRole("textbox", { name: "Survey Title" }).press("9");
  //   await expect(await page.getByRole("textbox", { name: "Survey Title" }).textContent()).toBe("123496");

  // });
});