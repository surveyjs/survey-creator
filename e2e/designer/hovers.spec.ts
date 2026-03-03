import { url, test, expect, setJSON } from "../helper";

const title = "Page hover";

const json = { elements: [{ type: "checkbox", name: "string_editor", choices: ["Item 1", "Item 2", "Item 3"] }] };

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Page hover test", async ({ page }) => {
    await setJSON(page, json);
    await page.evaluate(() => {
      window["creatorOldPageHoverDelay"] = window["creator"].pageHoverDelay;
      window["creator"].pageHoverDelay = 2000;
    });

    const hoveredClass = /svc-hovered/;
    const pageContent = page.locator(".svc-page__content").first();
    const question = page.locator(".svc-question__adorner").first();

    await pageContent.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await expect(pageContent).not.toHaveClass(hoveredClass, { timeout: 200 });
    await expect(pageContent).toHaveClass(hoveredClass, { timeout: 3000 });

    await page.locator(".sd-page__title").first().hover();
    await page.waitForTimeout(300);
    await expect(pageContent).toHaveClass(hoveredClass, { timeout: 200 });

    await page.locator(".svc-toolbox").hover();
    await expect(pageContent).not.toHaveClass(hoveredClass, { timeout: 500 });

    await question.hover({ position: { x: -10, y: 0 } });
    await page.waitForTimeout(300);
    await expect(question).toHaveClass(hoveredClass, { timeout: 3000 });

    await page.waitForTimeout(3000);
    await expect(pageContent).not.toHaveClass(hoveredClass);

    await page.evaluate(() => {
      window["creator"].pageHoverDelay = window["creatorOldPageHoverDelay"];
    });
  });

  test("Page hover on Add Question button", async ({ page }) => {
    await setJSON(page, json);

    const hoveredClass = /svc-hovered/;
    const pageContent = page.locator(".svc-page__content").first();
    const addQuestion = page.locator(".svc-element__add-new-question").first();

    await addQuestion.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await expect(pageContent).not.toHaveClass(hoveredClass);
  });

  test("Page navigator hover", async ({ page }) => {
    await setJSON(page, {
      "pages": [
        { "name": "page1", "elements": [{ "type": "text", "name": "question", "isRequired": true }] },
        { "name": "page2", "elements": [{ "type": "text", "name": "question1" }] }
      ]
    });
    await page.setViewportSize({ width: 970, height: 632 });

    const pageHoverSelector = page.locator(".svc-page-navigator-item__banner").getByText("page2", { exact: true });

    await page.waitForTimeout(10);
    await expect(page.locator(".svc-page-navigator-item-content").filter({ visible: true })).toHaveCount(2);
    await page.locator(".svc-page-navigator-item-content").nth(1).hover();
    await page.waitForTimeout(1500);
    await expect(pageHoverSelector).toBeVisible();
  });

  test("Question hover and events", async ({ page }) => {
    await setJSON(page, json);
    await page.evaluate(() => {
      window["creator"].onElementAllowOperations.add((sender: any, options: any) => {
        options.allowDelete = !window["creator"].__creatorNotAllowDelete;
      });
    });

    const questionTitle = page.locator(".svc-string-editor").filter({ hasText: "string_editor" });
    const action = page.locator(".svc-tab-designer .svc-question__adorner.svc-hovered .svc-survey-element-toolbar__item[title=Delete]");

    await questionTitle.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await expect(action).toBeVisible();

    await page.locator(".svc-toolbox").hover();

    await page.evaluate(() => {
      window["creator"].__creatorNotAllowDelete = true;
      window["creator"].refreshDesigner();
    });

    await questionTitle.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await expect(action).not.toBeVisible();
  });
});
