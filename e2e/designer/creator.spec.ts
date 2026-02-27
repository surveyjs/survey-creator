import type { Page } from "@playwright/test";
import { url, test, expect, getToolboxItemByText, setJSON } from "../helper";

const title = "Creator";

function getVisibleElement(page: Page, selector: string) {
  return page.locator(selector).filter({ visible: true });
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Creator dispose", async ({ page }) => {
    await expect(page.locator(".sv-popup").first()).toHaveCount(1);
    await page.evaluate(() => {
      window["creator"].dispose();
    });
    await expect(page.locator(".sv-popup")).toHaveCount(0);
  });

  test("Select survey on deleting the last question", async ({ page }) => {
    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await getVisibleElement(page, ".svc-question__content").click({ position: { x: 100, y: 100 } });
    await expect(page.locator(".sv-string-viewer").getByText("Visible", { exact: true })).toHaveCount(1);
    await page.locator(".svc-question__content--selected .svc-question__content-actions .sv-action").locator('button[title="Delete"]').click();
    await page.waitForTimeout(2000);
    await expect(page.locator(".sv-string-viewer").getByText("Show the title", { exact: true })).toHaveCount(0);
  });

  test("Do not select the deleting question if it was not selected", async ({ page }) => {
    await setJSON(page, {
      "elements": [
        { "type": "text", "name": "q1" },
        { "type": "text", "name": "q2" },
        { "type": "text", "name": "q3" }
      ]
    });
    const q1 = getVisibleElement(page, ".svc-question__content").first();
    const q2 = getVisibleElement(page, ".svc-question__content").nth(1);

    await q1.click({ position: { x: 100, y: 5 } });
    await expect(q1).toHaveClass(/svc-question__content--selected/);

    await q2.hover({ position: { x: 50, y: 50 } });
    await expect(q2.locator("span").getByText("Delete")).toBeVisible();

    await q2.locator("span").getByText("Delete").click();
    await page.waitForTimeout(100);
    await expect(getVisibleElement(page, ".svc-question__content span").filter({ hasText: "q2" })).toHaveCount(0);
    await expect(getVisibleElement(page, ".svc-question__content--selected").locator("span").getByText("q1")).toBeVisible();
  });

  test("Keyboard tab navigation between questions", async ({ page }) => {
    const json = {
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "text", "name": "question1" },
            { "type": "text", "name": "question2" }
          ]
        }
      ]
    };

    const getActionByText = (text: string) => {
      return page.locator(".svc-question__content--selected .svc-survey-element-toolbar__item").getByText(text).filter({ visible: true }).locator("..");
    };
    await setJSON(page, json);
    await page.locator(".sv-string-editor").getByText("question2").click();
    await expect(page.locator(".sv-string-editor").getByText("question2").filter({ visible: true })).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(getActionByText("Delete")).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(getActionByText("Required")).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(getActionByText("Duplicate")).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(getActionByText("Text")).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(getActionByText("Single-Line Input")).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(page.locator(".sv-string-editor").getByText("question1").filter({ visible: true })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(getActionByText("Single-Line Input")).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(getActionByText("Text")).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(getActionByText("Duplicate")).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(getActionByText("Required")).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(getActionByText("Delete")).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.locator(".sv-string-editor").getByText("question2").filter({ visible: true })).toBeFocused();
  });

  test("Check responsiveness is working correctly after model update", async ({ page }) => {
    const mobileSelector = page.locator(".svc-creator--mobile");
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(mobileSelector).toHaveCount(0);
    await page.setViewportSize({ width: 500, height: 800 });
    await expect(mobileSelector).toHaveCount(1);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(mobileSelector).toHaveCount(0);
    await page.evaluate(() => {
      (window as any).updateCreatorModel({}, { elements: { type: "text", name: "q115" } });
    });
    await expect(page.locator("[data-name='q115']")).toBeVisible();
    const hasPrevCreatorResponsivity = await page.evaluate(() => !!(window as any).prevCreator?.responsivityManager);
    expect(hasPrevCreatorResponsivity).toBeFalsy();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(mobileSelector).toHaveCount(0);
    await page.setViewportSize({ width: 500, height: 800 });
    await expect(mobileSelector).toHaveCount(1);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(mobileSelector).toHaveCount(0);
  });

  test("Check cleaning json doesn't cause warnings", async ({ page }) => {
    await page.evaluate(() => {
      (console as any).error = (msg: unknown) => {
        throw new Error(String(msg));
      };
      (console as any).warn = (msg: unknown) => {
        throw new Error(String(msg));
      };
    });
    await setJSON(page, { elements: [{ type: "text", name: "q1" }] });
    await setJSON(page, {});
  });
});
