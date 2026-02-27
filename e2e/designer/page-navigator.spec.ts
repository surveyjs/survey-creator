import {
  url,
  test,
  expect,
  setJSON,
  setAllowEditSurveyTitle,
  getAddNewQuestionButton,
} from "../helper";

const title = "Page navigator";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Check page navigator track scrolling", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 700 });
    await setJSON(page, {
      logoPosition: "right",
      pages: [
        { name: "page1", elements: [{ type: "text", name: "question1" }] },
        { name: "page2", elements: [{ type: "text", name: "question2" }] },
        { name: "page3", elements: [{ type: "text", name: "question3" }] },
        { name: "page4", elements: [{ type: "text", name: "question4" }] },
      ],
    });

    const firstPageNavigatorItem = "svc-page-navigator-item:nth-child(1) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-of-type(1) > .svc-page-navigator-item--selected";
    const lastPageNavigatorItem = "svc-page-navigator-item:nth-child(4) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-of-type(4) > .svc-page-navigator-item--selected";

    const scroller = page.locator(".svc-tab-designer--with-surface-tools .sv-scroll__scroller");

    await expect(page.locator(firstPageNavigatorItem)).toBeVisible();
    await expect(page.locator(lastPageNavigatorItem)).toHaveCount(0);

    await scroller.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
      el.scrollLeft = el.scrollWidth;
    });
    await scroller.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
      el.scrollLeft = el.scrollWidth;
    });

    await expect(page.locator(firstPageNavigatorItem)).toHaveCount(0);
    await expect(page.locator(lastPageNavigatorItem)).toBeVisible();
  });

  test("PageNavigator shown if scrolling exists", async ({ page }) => {
    await setAllowEditSurveyTitle(page, false);
    await page.setViewportSize({ width: 1600, height: 1400 });

    await expect(getAddNewQuestionButton(page)).toBeVisible();
    await getAddNewQuestionButton(page).click();
    await expect(page.locator("span").filter({ hasText: "question1" }).first()).toBeVisible();
    await expect(page.locator(".svc-page-navigator")).not.toBeVisible();

    await getAddNewQuestionButton(page).nth(1).click();
    await expect(page.locator("span").filter({ hasText: "question2" }).first()).toBeVisible();
    await page.waitForTimeout(1000);
    await expect(page.locator(".svc-page-navigator")).not.toBeVisible();

    await getAddNewQuestionButton(page).nth(2).click();
    await expect(page.locator("span").filter({ hasText: "question3" }).first()).toBeVisible();
    await expect(page.locator(".svc-page-navigator")).toBeVisible();

    await page.setViewportSize({ width: 1600, height: 1750 });
    await expect(page.locator(".svc-page-navigator")).not.toBeVisible();

    await page.setViewportSize({ width: 1600, height: 1400 });
    await expect(page.locator(".svc-page-navigator")).toBeVisible();

    await page.locator(".svc-question__content--selected span").filter({ hasText: "Delete" }).click();
    await expect(page.locator("span").filter({ hasText: "question3" }).first()).not.toBeVisible();
    await expect(page.locator(".svc-page-navigator")).not.toBeVisible();
  });
});
