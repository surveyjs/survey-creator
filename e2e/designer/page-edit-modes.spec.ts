import {
  url,
  urlByPage,
  test,
  expect,
  getAddNewQuestionButton,
} from "../helper";

const title = "Page Edit Modes";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Continious (ordinary) page mode", async ({ page }) => {
    await expect(page.locator(".svc-tab-designer__page-navigator")).toHaveCount(0);
    await expect(getAddNewQuestionButton(page)).toHaveCount(1);
    await expect(getAddNewQuestionButton(page)).toBeVisible();

    await getAddNewQuestionButton(page).click();
    await expect(page.locator("span").filter({ hasText: "question1" }).first()).toBeVisible();
    await expect(page.locator(".svc-tab-designer__page-navigator")).toHaveCount(0);
    await expect(getAddNewQuestionButton(page)).toHaveCount(2);
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 1']")).toBeVisible();
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 2']")).toBeVisible();

    await getAddNewQuestionButton(page).nth(1).click();
    await expect(page.locator(".svc-tab-designer__page-navigator")).toBeVisible();
    await expect(page.locator("span").filter({ hasText: "question2" }).first()).toBeVisible();
    await expect(getAddNewQuestionButton(page)).toHaveCount(3);
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 1']")).toBeVisible();
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 2']")).toBeVisible();
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 3']")).toBeVisible();
    await expect(page.locator(".svc-page-navigator-item-content")).toHaveCount(2);
    await expect(page.locator(".svc-page-navigator-item-content").filter({ hasText: "page1" })).toBeVisible();
    await expect(page.locator(".svc-page-navigator-item-content").filter({ hasText: "page2" })).toBeVisible();
  });

  test("By page edit mode", async ({ page }) => {
    await page.goto(urlByPage);

    await expect(page.locator(".svc-tab-designer__page-navigator")).toHaveCount(0);
    await expect(getAddNewQuestionButton(page)).toHaveCount(1);
    await expect(getAddNewQuestionButton(page)).toBeVisible();

    await getAddNewQuestionButton(page).click();
    await expect(page.locator("span").filter({ hasText: "question1" }).first()).toBeVisible();
    await expect(page.locator(".svc-tab-designer__page-navigator")).toBeVisible();
    await expect(page.locator(".svc-page-navigator-item-content")).toHaveCount(2);
    await expect(page.locator(".svc-page-navigator-item-content").filter({ hasText: "page1" })).toBeVisible();
    await expect(page.locator(".svc-page-navigator-item-content").filter({ hasText: "page2" })).toBeVisible();
    await expect(getAddNewQuestionButton(page)).toHaveCount(1);
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 1']")).toBeAttached();
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 2']")).toHaveCount(0);

    await page.locator(".svc-page-navigator-item-content").filter({ hasText: "page2" }).click();
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 2']")).toBeVisible();
    await expect(getAddNewQuestionButton(page)).toHaveCount(1);
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 1']")).toHaveCount(0);
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 2']")).toBeAttached();

    await getAddNewQuestionButton(page).click();
    await expect(page.locator(".svc-tab-designer__page-navigator")).toBeVisible();
    await expect(page.locator("span").filter({ hasText: "question2" }).first()).toBeVisible();
    await expect(page.locator(".svc-page-navigator-item-content")).toHaveCount(3);
    await expect(page.locator(".svc-page-navigator-item-content").filter({ hasText: "page1" })).toBeVisible();
    await expect(page.locator(".svc-page-navigator-item-content").filter({ hasText: "page2" })).toBeVisible();
    await expect(page.locator(".svc-page-navigator-item-content").filter({ hasText: "page3" })).toBeVisible();
    await expect(getAddNewQuestionButton(page)).toHaveCount(1);
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 2']")).toBeVisible();

    await page.locator(".svc-page-navigator-item-content").filter({ hasText: "page3" }).click();
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 3']")).toBeVisible();
    await expect(getAddNewQuestionButton(page)).toHaveCount(1);
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 1']")).toHaveCount(0);
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 2']")).toHaveCount(0);
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 3']")).toBeAttached();
  });

  test("By page edit mode - delete second page", async ({ page }) => {
    await page.goto(urlByPage);

    const deleteActionButton = page.locator(".svc-page__content-actions").locator(".sv-action").locator('button[title="Delete"]');

    await getAddNewQuestionButton(page).click();
    await expect(page.locator("span").filter({ hasText: "question1" }).first()).toBeVisible();
    await page.locator(".svc-page-navigator-item-content").filter({ hasText: "page2" }).click();
    await expect(page.locator("div[id$=ariaTitle][id^=sp].sd-page__title span[aria-placeholder='Page 2']")).toBeVisible();
    await getAddNewQuestionButton(page).click();
    await page.locator(".svc-page-navigator-item-content").filter({ hasText: "page1" }).click();
    await expect(page.locator("span").filter({ hasText: "question1" }).first()).toBeVisible();
    await page.locator(".svc-page-navigator-item-content").filter({ hasText: "page2" }).click();
    await expect(page.locator("span").filter({ hasText: "question2" }).first()).toBeVisible();
    await deleteActionButton.click();
    await expect(page.locator(".svc-page-navigator-item-content").filter({ hasText: "page1" })).toBeVisible();
    await expect(page.locator("span").filter({ hasText: "question1" }).first()).toBeVisible();
  });
});
