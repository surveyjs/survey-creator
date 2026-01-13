import { url, test, expect, setJSON, getPropertyGridCategory, generalGroupName } from "../helper";

const title = "Property Grid";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Panel stay focused on question change", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "title": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"]
            },
            {
              "type": "checkbox",
              "name": "question2",
              "title": "question2",
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        }
      ]
    };
    await setJSON(page, json);

    const question1 = page.locator("[data-name=\"question1\"]");
    const question2 = page.locator("[data-name=\"question2\"]");

    await question1.click();
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Layout").click();
    await question2.click();

    const startWithNewLine = page.locator("input[name='startWithNewLine']").locator("..");
    await expect(startWithNewLine).toBeVisible();
    await page.locator("div [data-name=\"minWidth\"] input").click();
    await question1.click();
    await expect(page.locator("div [data-name=\"minWidth\"] input")).toBeFocused();
  });

  test("Show/hide panel header on entering/deleting the panel title, Bug#5720", async ({ page }) => {
    const json = {
      elements: [
        {
          type: "panel",
          name: "panel1"
        }
      ]
    };
    const panel = page.locator(".svc-panel__placeholder");
    const hiddenPanelHeader = page.locator(".svc-element__header--hidden");
    const titleEditor = page.locator("[data-name='title']").locator("textarea");
    await setJSON(page, json);
    await panel.click();
    await expect(hiddenPanelHeader).toBeVisible();
    await titleEditor.click();
    await titleEditor.fill("MyTitle");
    await expect(hiddenPanelHeader).not.toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("MyTitle")).toBeVisible();
    await titleEditor.selectText();
    await page.keyboard.press("Delete");
    await expect(hiddenPanelHeader).toBeVisible();
  });
});
