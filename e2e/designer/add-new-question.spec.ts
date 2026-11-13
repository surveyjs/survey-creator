import type { Page } from "@playwright/test";
import {
  url,
  test,
  expect,
  setJSON,
  getJSON,
  getAddNewQuestionButton,
  getToolboxItemByText,
  getListItemByText,
  getQuestionBarItemByTitle,
  doDragDrop,
} from "../helper";

const title = "Add new question";

function getVisibleElement(page: Page, selector: string) {
  return page.locator(selector).filter({ visible: true });
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Add New Question", async ({ page }) => {
    await expect(getAddNewQuestionButton(page)).toBeVisible();
    await getAddNewQuestionButton(page).click();
    await expect(page.locator("span").getByText("question1").first()).toBeVisible();
    await expect(getVisibleElement(page, ".svc-question__content.svc-question__content--selected")).toBeVisible();
    await page.locator(".svc-page__footer .svc-add-new-question-action .svc-surface-btn .svc-surface-btn__selector .sd-action").first().click();
    await page.waitForTimeout(100);
    await page.keyboard.press("p");
    await getListItemByText(page, "Panel").click();
    await getAddNewQuestionButton(page).click();
    await page.waitForTimeout(500);
    await expect(page.locator("span").getByText("question1").first()).toBeVisible();
  });

  test("No Add New Question in HTML question placeholder", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 2000 });
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);
    await getToolboxItemByText(page, "HTML").hover();
    await getToolboxItemByText(page, "HTML").click();
    await expect(getVisibleElement(page, ".svc-question__content.svc-question__content--selected")).toBeVisible();
    await expect(
      page.locator(".sd-question--html+.svc-panel__placeholder_frame .svc-panel__add-new-question > span").getByText("Add Question")
    ).toHaveCount(0);
  });

  test("Add New Question and show title editor", async ({ page }) => {
    await expect(getAddNewQuestionButton(page)).toBeVisible();
    await getAddNewQuestionButton(page).click();
    await page.waitForTimeout(150);
    await page.keyboard.press("A");
    await page.keyboard.press("B");
    await page.keyboard.press("C");
    await page.keyboard.press("Enter");

    let questionTitle = await page.evaluate((index: number) => {
      return window["creator"].survey.getAllQuestions()[index].title;
    }, 0);
    expect(questionTitle).toBe("ABC");

    await page.evaluate((val: boolean) => {
      window["creator"].startEditTitleOnQuestionAdded = val;
    }, false);
    await getAddNewQuestionButton(page).first().click();
    await page.waitForTimeout(150);
    await page.keyboard.press("C");
    await page.keyboard.press("D");
    await page.keyboard.press("E");
    await page.keyboard.press("Enter");
    questionTitle = await page.evaluate((index: number) => {
      return window["creator"].survey.getAllQuestions()[index].title;
    }, 1);
    expect(questionTitle).toBe("question2");

    await page.evaluate((val: boolean) => {
      window["creator"].startEditTitleOnQuestionAdded = val;
    }, true);
    await getAddNewQuestionButton(page).first().click();
    await page.waitForTimeout(150);
    await page.keyboard.press("C");
    await page.keyboard.press("D");
    await page.keyboard.press("E");
    await page.keyboard.press("Enter");
    questionTitle = await page.evaluate((index: number) => {
      return window["creator"].survey.getAllQuestions()[index].title;
    }, 2);
    expect(questionTitle).toBe("CDE");
  });

  test("Drag Drop Toolbox Item and show title editor", async ({ page }) => {
    const EmptyPage = page.locator("[data-sv-drop-target-survey-element='page1']");
    const newGhostPagePage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']");
    const RatingToolboxItem = page.locator("[aria-label='Rating Scale']");

    await setJSON(page, { pages: [{ name: "page1" }] });

    await doDragDrop({ page, element: RatingToolboxItem, target: EmptyPage, options: { steps: 10 } });
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(1);
    await expect(getVisibleElement(page, ".svc-question__content").locator(".sv-string-editor").first()).toBeFocused();
    await page.keyboard.press("A");
    await page.keyboard.press("B");
    await page.keyboard.press("C");
    await page.keyboard.press("Enter");

    let questionTitle = await page.evaluate((index: number) => {
      return window["creator"].survey.getAllQuestions()[index].title;
    }, 0);
    expect(questionTitle).toBe("ABC");

    await page.evaluate((val: boolean) => {
      window["creator"].startEditTitleOnQuestionAdded = val;
    }, false);
    await doDragDrop({ page, element: RatingToolboxItem, target: newGhostPagePage, options: { steps: 10 } });
    await page.waitForTimeout(150);
    await page.keyboard.press("C");
    await page.keyboard.press("D");
    await page.keyboard.press("E");
    await page.keyboard.press("Enter");
    questionTitle = await page.evaluate((index: number) => {
      return window["creator"].survey.getAllQuestions()[index].title;
    }, 1);
    expect(questionTitle).toBe("question2");
  });

  test("Add question when a question in dynamic panel is selected", async ({ page }) => {
    await setJSON(page, {
      elements: [
        {
          type: "paneldynamic",
          name: "panel1",
          templateElements: [{ type: "text", name: "question1" }],
        },
      ],
    });

    await page.locator(".sv-string-editor").getByText("question1").click();
    await page.locator(".svc-panel__add-new-question-container .sd-action").nth(0).click();
    await expect(page.locator("[data-name=\"question2\"]")).toBeVisible();
  });

  test("Add New Question with sub type", async ({ page }) => {
    const questionContentActions = getVisibleElement(page, ".svc-question__content-actions .sd-action__title");

    await page.locator(".svc-page__footer .svc-add-new-question-action .svc-surface-btn .svc-surface-btn__selector .sd-action").click();
    await getListItemByText(page, "Rating Scale").hover();
    await page.waitForTimeout(400);
    await getListItemByText(page, "Stars").click();
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(1);
    await expect(questionContentActions.nth(0)).toHaveText("Rating Scale");
    await expect(questionContentActions.nth(1)).toHaveText("Stars");

    let expectedJson = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "rating",
              name: "question1",
              rateType: "stars",
            },
          ],
        },
      ],
    };
    let resultJson = await getJSON(page);
    expect(resultJson).toEqual(expectedJson);

    await getQuestionBarItemByTitle(page, "Rating Scale").click();
    await getListItemByText(page, "Single-Line Input").scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await getListItemByText(page, "Single-Line Input").hover();
    await page.waitForTimeout(400);
    await expect(page.getByRole("menuitemradio", { name: "Single-Line Input" }).locator(".sv-popup-inner .sv-popup__container")).toBeVisible();
    await getListItemByText(page, "Password").click();
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(1);
    await expect(questionContentActions.nth(0)).toHaveText("Single-Line Input");
    await expect(questionContentActions.nth(1)).toHaveText("Password");

    expectedJson = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "text",
              name: "question1",
              inputType: "password",
            },
          ],
        },
      ],
    } as typeof expectedJson;
    resultJson = await getJSON(page);
    expect(resultJson).toEqual(expectedJson);

    await getQuestionBarItemByTitle(page, "Single-Line Input").click();
    await expect(getListItemByText(page, "Single-Line Input")).toHaveCount(1);
    await getListItemByText(page, "Single-Line Input").scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await getListItemByText(page, "Single-Line Input").hover();
    await page.waitForTimeout(400);
    await getListItemByText(page, "Rating Scale").click();
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(1);
    await expect(questionContentActions.nth(0)).toHaveText("Rating Scale");
    await expect(questionContentActions.nth(1)).toHaveText("Labels");

    expectedJson = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "rating",
              name: "question1",
            },
          ],
        },
      ],
    } as typeof expectedJson;
    resultJson = await getJSON(page);
    expect(resultJson).toEqual(expectedJson);
  });

  test("Add Question is a native button and the type selector is a separate sibling button", async ({ page }) => {
    await setJSON(page, {
      pages: [{
        name: "page1",
        elements: [
          { type: "text", name: "question1" },
          { type: "panel", name: "panel1", elements: [{ type: "text", name: "question2" }] }
        ]
      }]
    });
    const surface = page.locator(".svc-page__content:not(.svc-page__content--new) .svc-page__footer .svc-surface-btn");
    await expect(surface).not.toHaveAttribute("tabindex");
    const addButton = surface.getByRole("button", { name: "Add Question", exact: true });
    const typeSelector = surface.getByRole("button", { name: "Select question type" });
    await expect(addButton).toHaveCount(1);
    await expect(typeSelector).toHaveCount(1);
    await expect(page.locator(".svc-panel__add-new-question-container").getByRole("button", { name: "Select question type" })).toHaveCount(1);

    await typeSelector.focus();
    await page.keyboard.press("Shift+Tab");
    await expect(addButton).toBeFocused();
    const questionCount = () => page.evaluate(() => (window as any).creator.survey.getAllQuestions().length);
    expect(await questionCount()).toBe(2);
    await page.keyboard.press("Enter");
    await expect.poll(questionCount).toBe(3);

    await typeSelector.focus();
    await page.keyboard.press("Shift+Tab");
    await page.keyboard.press("Space");
    await expect.poll(questionCount).toBe(4);
  });

  test("Question type selector announces whether its list is open", async ({ page }) => {
    await setJSON(page, { pages: [{ name: "page1", elements: [{ type: "text", name: "question1" }] }] });
    const typeSelector = page.locator(".svc-page__content:not(.svc-page__content--new) .svc-page__footer")
      .getByRole("button", { name: "Select question type" });
    await expect(typeSelector).toHaveAttribute("aria-expanded", "false");
    await typeSelector.focus();
    await page.keyboard.press("Enter");
    await expect(getListItemByText(page, "Single-Line Input")).toBeVisible();
    await expect(typeSelector).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Escape");
    await expect(getListItemByText(page, "Single-Line Input")).toBeHidden();
    await expect(typeSelector).toHaveAttribute("aria-expanded", "false");
  });
});
