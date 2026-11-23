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
    // Kept on purpose: the page must not be hovered before pageHoverDelay (2000 ms) runs out.
    await page.waitForTimeout(300);
    await expect(pageContent).not.toHaveClass(hoveredClass, { timeout: 200 });
    await expect(pageContent).toHaveClass(hoveredClass, { timeout: 3000 });

    await page.locator(".sd-page__title").first().hover();
    // Kept on purpose: moving inside the page must not drop its hover; the class is already there, so only a pause can show that it stays.
    await page.waitForTimeout(300);
    await expect(pageContent).toHaveClass(hoveredClass, { timeout: 200 });

    await page.locator(".svc-toolbox").hover();
    await expect(pageContent).not.toHaveClass(hoveredClass, { timeout: 500 });

    await question.hover({ position: { x: -10, y: 0 } });
    await expect(question).toHaveClass(hoveredClass, { timeout: 3000 });

    // Kept on purpose: the page must not become hovered while the question is, even after pageHoverDelay (2000 ms) runs out.
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
    const addQuestion = page.locator(".svc-page__footer .svc-add-new-question-action .svc-surface-btn").first();

    await addQuestion.hover({ position: { x: 5, y: 5 } });
    // Kept on purpose: checks that the page hover does not appear; nothing else changes on this hover to wait for.
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

    await expect(page.locator(".svc-page-navigator-item-content").filter({ visible: true })).toHaveCount(2);
    await page.locator(".svc-page-navigator-item-content").nth(1).hover();
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
    const action = page.locator(".svc-tab-designer .svc-question__adorner.svc-hovered").getByRole("button", { name: "Delete" });

    await questionTitle.hover({ position: { x: 5, y: 5 } });
    await expect(action).toBeVisible();

    await page.locator(".svc-toolbox").hover();

    await page.evaluate(() => {
      window["creator"].__creatorNotAllowDelete = true;
      window["creator"].refreshDesigner();
    });

    await questionTitle.hover({ position: { x: 5, y: 5 } });
    await expect(page.locator(".svc-tab-designer .svc-question__adorner.svc-hovered")).toBeVisible();
    await expect(action).not.toBeVisible();
  });
});
