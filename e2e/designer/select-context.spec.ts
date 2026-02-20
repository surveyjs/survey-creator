import {
  url,
  test,
  expect,
  setJSON,
  addQuestionByAddQuestionButton,
  selectedObjectTextSelector,
} from "../helper";

const title = "Select context object then edit string";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Select questions and survey", async ({ page }) => {
    await expect(page.locator(".svc-question__content")).toHaveCount(0);
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("Survey");

    await addQuestionByAddQuestionButton(page, "Rating Scale");
    await page.locator(".svc-tab-designer .svc-page .svc-question__content").click({ position: { x: 5, y: 50 } });
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");
    await page.locator(".svc-tab-designer .svc-page").first().click({ position: { x: 5, y: 50 } });
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("page1");
    await page.locator(".svc-tab-designer").click({ position: { x: 5, y: 50 } });
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("Survey");
  });

  test.skip("Check page selector does not select survey", async ({ page }) => {
    await setJSON(page, {
      logoPosition: "right",
      pages: [
        {
          name: "page1",
          elements: [{ type: "text", name: "question1" }],
        },
        {
          name: "page2",
          elements: [{ type: "text", name: "question2" }]
        }
      ]
    });

    await page.locator(".svc-tab-designer .svc-page .svc-question__content").click({ position: { x: 5, y: 50 } });
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");
    await page.locator(".svc-page-navigator-item__dot[title=\"page2\"]").click();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");
  });

  test("Matrix question", async ({ page }) => {
    await expect(page.locator(".svc-question__content")).toHaveCount(0);
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("Survey");

    await addQuestionByAddQuestionButton(page, "Single-Select Matrix");
    await expect(page.locator(".svc-question__content")).toBeVisible();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");

    await page.locator("span[aria-placeholder='Page 1']").click();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("page1");

    await page.locator(".sv-string-editor").getByText("question1").click();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");

    await page.locator("span[aria-placeholder='Survey Title']").click();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("Survey");
    await expect(page.locator("div[id$=ariaTitle][id^=sq].spg-title").getByText("Columns")).not.toBeVisible();

    await page.locator(".sv-string-editor").getByText("Column 1").click();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");
    await expect(page.locator("div[id$=ariaTitle][id^=sq].spg-title").getByText("Columns")).toBeVisible();

    await page.locator(".sv-string-editor").getByText("Row 1").click();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");
    await expect(page.locator("div[id$=ariaTitle][id^=sq].spg-title").getByText("Columns")).not.toBeVisible();
    await expect(page.locator("div[id$=ariaTitle][id^=sq].spg-title").getByText("Rows")).toBeVisible();
  });

  test("Matrix dropdown question", async ({ page }) => {
    await expect(page.locator(".svc-question__content")).toHaveCount(0);
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("Survey");

    await addQuestionByAddQuestionButton(page, "Multi-Select Matrix");
    await expect(page.locator(".svc-question__content")).toBeVisible();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");

    await page.locator(".sv-string-editor").getByText("Column 1").click();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("Column 1");
    await expect(page.locator("div[id$=ariaTitle][id^=sq].spg-title").getByText("Columns")).not.toBeVisible();

    await page.locator(".sv-string-editor").getByText("Row 1").click();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");
    await expect(page.locator("div[id$=ariaTitle][id^=sq].spg-title").getByText("Columns")).not.toBeVisible();
    await expect(page.locator("div[id$=ariaTitle][id^=sq].spg-title").getByText("Rows")).toBeVisible();
  });

  test("Matrix dropdown question select column", async ({ page }) => {
    await expect(page.locator(".svc-question__content")).toHaveCount(0);
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("Survey");

    await addQuestionByAddQuestionButton(page, "Multi-Select Matrix");
    await expect(page.locator(".svc-question__content")).toBeVisible();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");
    await expect(page.locator(".svc-matrix-cell--selected").first()).not.toBeVisible();

    await page.locator(".svc-matrix-cell").first().hover();
    await expect(page.locator(".svc-matrix-cell--selected").first()).toBeVisible();

    await page.locator(".sv-string-editor").getByText("Column 1").click();
    await expect(page.locator(".svc-matrix-cell--selected.svc-visible").first()).toBeVisible();
  });

  test("Matrix dynamic question select column", async ({ page }) => {
    await expect(page.locator(".svc-question__content")).toHaveCount(0);
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("Survey");

    await addQuestionByAddQuestionButton(page, "Dynamic Matrix");
    await expect(page.locator(".svc-question__content")).toBeVisible();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");
    await expect(page.locator(".svc-matrix-cell--selected").first()).not.toBeVisible();

    await page.locator(".svc-matrix-cell").first().hover();
    await expect(page.locator(".svc-matrix-cell--selected").first()).toBeVisible();

    await page.locator(".sv-string-editor").getByText("Column 1").click();
    await expect(page.locator(".svc-matrix-cell--selected.svc-visible").first()).toBeVisible();
  });

  test("Dynamic panel inner panel not selectable", async ({ page }) => {
    await expect(page.locator(".svc-question__content")).toHaveCount(0);

    await addQuestionByAddQuestionButton(page, "Dynamic Panel");
    await expect(page.locator(".svc-question__adorner").first()).toBeVisible();
    await expect(page.locator(".svc-question__content")).toBeVisible();
    await expect(page.locator(".svc-question__adorner .svc-question__adorner")).toBeVisible();
    await expect(page.locator(".svc-question__content .svc-question__content")).toHaveCount(0);
    await expect(page.locator(".svc-question__adorner .svc-question__adorner .svc-panel__placeholder_frame")).toBeVisible();
  });
});
