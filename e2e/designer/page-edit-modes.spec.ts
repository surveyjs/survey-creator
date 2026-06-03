import {
  url,
  urlByPage,
  test,
  expect,
  getAddNewQuestionButton,
  setJSON,
  getPagesLength,
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

    const deleteActionButton = page.locator(".svc-page__content-actions").locator(".sd-action-bar__item").getByRole("button", { name: "Delete" });

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

  test("By page mode - delete questions one by one from last page, no crash, Bug#7758", async ({ page }) => {
    await page.goto(urlByPage);
    await setJSON(page, {
      pages: [
        {
          name: "page1",
          elements: [
            { type: "rating", name: "nps-score" },
            { type: "comment", name: "improvements-required" }
          ]
        },
        {
          name: "page2",
          elements: [
            { type: "boolean", name: "rebuy" }
          ]
        },
        {
          name: "page3",
          elements: [
            { type: "radiogroup", name: "testimonial", choices: ["yes", "no"] },
            { type: "text", name: "email", visibleIf: "{testimonial} = 'yes'" }
          ]
        }
      ]
    });

    await page.locator(".svc-page-navigator-item-content").filter({ hasText: "page3" }).click();
    await expect(page.locator(".sd-question[data-name='testimonial']")).toBeVisible();

    const deleteButton = page.locator(".svc-tab-designer .svc-question__adorner.svc-hovered").getByRole("button", { name: "Delete" });

    // Delete first question on page3
    await page.locator(".sd-question[data-name='testimonial']").hover();
    await expect(deleteButton).toBeVisible();
    await deleteButton.click();

    await expect(page.locator(".sd-question[data-name='email']")).toBeVisible();

    // Delete last question on page3 - in bypage mode the page stays, only the question disappears
    await page.locator(".sd-question[data-name='email']").hover();
    await expect(deleteButton).toBeVisible();
    await deleteButton.click();

    // email is immediately removed from the DOM (no stale component)
    await expect(page.locator(".sd-question[data-name='email']")).toHaveCount(0);

    // page3 remains visible but empty - it is not auto-deleted in bypage mode
    expect(await getPagesLength(page)).toBe(3);
    await expect(page.locator(".svc-page-navigator-item-content").filter({ hasText: "page3" })).toBeVisible();
  });
});
