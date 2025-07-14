import { test, expect } from "@playwright/test";
import { url, setExpandCollapseButtonVisibility, resetHoverToCreator, setAllowEditSurveyTitle, setShowAddQuestionButton, setShowToolbox, setShowSidebar, setAllowZoom } from "../helper";

test.beforeEach(async ({ page }) => {
  await page.goto(`${url}`);
});

test("Question adorner - collapsed", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await setExpandCollapseButtonVisibility(page, "onhover");
  // ... setJSON skipped ...

  const qContent = page.locator(".svc-question__content");
  const qCollapseButton = page.locator(".svc-question__content #collapse");

  await qContent.nth(0).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(0) }).first().click();
  await expect(qContent.nth(0)).toHaveScreenshot("question-adorner-collapsed.png");

  await qContent.nth(1).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(1) }).first().click();
  await expect(qContent.nth(1)).toHaveScreenshot("panel-adorner-collapsed.png");

  await qContent.nth(2).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(2) }).first().click();
  await expect(qContent.nth(2)).toHaveScreenshot("question-carry-forward-collapsed.png");

  await qContent.nth(3).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(3) }).first().click();
  await expect(qContent.nth(3)).toHaveScreenshot("question-image-collapsed.png");

  await qContent.nth(4).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(4) }).first().click();
  await expect(qContent.nth(4)).toHaveScreenshot("question-html-collapsed.png");

  await page.locator(".svc-tabbed-menu-item", { hasText: "Preview" }).click();
  await page.locator(".svc-tabbed-menu-item", { hasText: "Designer" }).click();
  await expect(qContent.nth(0)).toHaveScreenshot("question-adorner-collapsed-first-render.png");
  await expect(qContent.nth(1)).toHaveScreenshot("panel-adorner-collapsed-first-render.png");
});

test("Question adorner - no title collapsed", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await setExpandCollapseButtonVisibility(page, "onhover");
  // ... setJSON skipped ...

  const qContent = page.locator(".svc-question__content");
  const qCollapseButton = page.locator(".svc-question__content #collapse");

  await qContent.nth(0).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(0) }).first().click();
  await expect(qContent.nth(0)).toHaveScreenshot("question-adorner-no-title-collapsed.png");

  await qContent.nth(1).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(1) }).first().click();
  await expect(qContent.nth(1)).toHaveScreenshot("panel-dynamic-adorner-no-title-collapsed.png");

  await qContent.nth(2).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(2) }).first().click();
  await expect(qContent.nth(2)).toHaveScreenshot("question-html-adorner-no-title-collapsed.png");

  await qContent.nth(3).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(3) }).first().click();
  await expect(qContent.nth(3)).toHaveScreenshot("question-image-adorner-no-title-collapsed.png");
});

test("Page adorner - collapsed", async ({ page }) => {
  await page.setViewportSize({ width: 1000, height: 600 });
  await setAllowEditSurveyTitle(page, false);
  await setShowAddQuestionButton(page, false);
  await setExpandCollapseButtonVisibility(page, "onhover");
  // ... setJSON skipped ...

  const qContent = page.locator(".svc-page__content");
  const qCollapseButton = page.locator(".svc-page__content #collapse");

  await qContent.nth(0).hover({ position: { x: 10, y: 10 } });
  await expect(qContent.nth(0)).toHaveClass(/svc-hovered/);
  await expect(page.locator(".svc-tab-designer_content")).toHaveScreenshot("page-adorner-expanded.png");

  await qContent.nth(0).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(0) }).first().click();
  await resetHoverToCreator(page);
  await expect(page.locator(".svc-tab-designer_content")).toHaveScreenshot("page-adorner-collapsed-selected.png");

  await page.locator(".svc-tab-designer_content").click({ position: { x: 1, y: 1 } });
  await expect(page.locator(".svc-tab-designer_content")).toHaveScreenshot("page-adorner-collapsed.png");
});

test("Question adorner - collapsed mobile", async ({ page }) => {
  await page.setViewportSize({ width: 551, height: 1080 });
  await setExpandCollapseButtonVisibility(page, "onhover");
  // ... setJSON skipped ...

  const qContent = page.locator(".svc-question__content");
  const qCollapseButton = page.locator(".svc-question__content #collapse");

  await qContent.nth(0).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(0) }).first().click();
  await expect(qContent.nth(0)).toHaveScreenshot("question-adorner-collapsed-mobile.png");

  await qContent.nth(1).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(1) }).first().click();
  await expect(qContent.nth(1)).toHaveScreenshot("panel-adorner-collapsed-mobile.png");

  await page.locator(".svc-creator").click({ position: { x: 1, y: 1 } });
  await expect(qContent.nth(0)).toHaveScreenshot("question-adorner-collapsed-unselected.png");
  await expect(qContent.nth(1)).toHaveScreenshot("panel-adorner-collapsed-unselected.png");
});

test("Page adorner - collapsed mobile", async ({ page }) => {
  await page.setViewportSize({ width: 551, height: 1080 });
  await setAllowEditSurveyTitle(page, false);
  await setShowAddQuestionButton(page, false);
  await setExpandCollapseButtonVisibility(page, "onhover");
  // ... setJSON skipped ...

  const qContent = page.locator(".svc-page__content");
  const qCollapseButton = page.locator(".svc-page__content #collapse");

  await qContent.nth(0).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.filter({ has: qContent.nth(0) }).first().click();

  await qContent.nth(1).click({ position: { x: 10, y: 10 } });
  await qCollapseButton.nth(1).click();

  await resetHoverToCreator(page, 0, -1);
  await expect(page.locator(".svc-tab-designer_content")).toHaveScreenshot("page-adorner-collapsed-mobile.png");
});

test("Collapse all and expand all toolbar", async ({ page }) => {
  await page.setViewportSize({ width: 912, height: 1080 });
  await setShowToolbox(page, false);
  await setAllowEditSurveyTitle(page, false);
  await setShowAddQuestionButton(page, false);
  await setShowSidebar(page, false);
  await setExpandCollapseButtonVisibility(page, "onhover");
  // ... setJSON skipped ...

  await page.locator("#lockQuestions").click();
  await page.locator("#collapseAll").hover();
  await expect(page.locator(".svc-tab-designer")).toHaveScreenshot("design-surface-toolbar.png");

  await setAllowZoom(page, true);
  await page.locator("#zoomOut").hover();
  await expect(page.locator(".svc-tab-designer__surface-toolbar")).toHaveScreenshot("design-surface-toolbar-with-zoom.png");
});