import type { Locator, Page } from "@playwright/test";
import {
  url,
  test,
  expect,
  setJSON,
  explicitErrorHandler,
  getToolboxItemByText,
  addQuestionByAddQuestionButton,
  doDragDrop,
} from "../helper";

const title = "Inplace editors";

const logoBase64Substring = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIA";

function getVisibleElement(page: Page, selector: string): Locator {
  return page.locator(selector).filter({ visible: true });
}

async function getImageSrc(page: Page, selector: string, index = 0): Promise<string> {
  return page.evaluate(
    ({ sel, i }) => (document.querySelectorAll(sel)[i] as HTMLImageElement)?.src ?? "",
    { sel: selector, i: index }
  );
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Checkbox question inplace editor", async ({ page }) => {
    const items = getVisibleElement(page, ".svc-item-value-wrapper");

    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);
    await getToolboxItemByText(page, "Checkboxes").hover();
    await getToolboxItemByText(page, "Checkboxes").click();
    await expect(getVisibleElement(page, ".svc-question__content.svc-question__content--selected")).toBeVisible();
    await expect(items).toHaveCount(7);
    await expect(items.nth(0)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(0).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(0).hover();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(0).locator("span").getByText("Select All")).toBeVisible();
    await expect(items.nth(1)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(1).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(1).hover();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(1).locator("span").getByText("Item 1")).toBeVisible();
    await expect(items.nth(2)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(2).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(2).hover();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(2).locator("span").getByText("Item 2")).toBeVisible();
    await expect(items.nth(3)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(3).locator("span").getByText("Item 3")).toBeVisible();
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(4).locator("span").getByText("Item 4")).toBeVisible();
    await expect(items.nth(6)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(6).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(6).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(6).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(6).hover();
    await expect(items.nth(6).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(6).locator("span").getByText("Other (describe)")).toBeVisible();
    await expect(items.nth(5)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator("span").getByText("None")).toBeVisible();

    await items.nth(0).locator(".svc-item-value-controls__add").click();
    await expect(items.nth(0)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(0).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(0).hover();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();

    await items.nth(0).locator(".svc-item-value-controls__remove").click();
    await expect(items.nth(0)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(0).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(0).hover();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();

    await items.nth(4).locator(".svc-item-value-controls__add").click();
    await expect(items).toHaveCount(8);
    await expect(items.nth(4)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(5)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator("span").getByText("Item 5")).toBeVisible();

    await items.nth(4).locator(".svc-item-value-controls__remove").click();
    await expect(items).toHaveCount(7);
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(6).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(6).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(6).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(6).hover();
    await expect(items.nth(6).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(6).locator("span").getByText("Other (describe)")).toBeVisible();
  });

  test("Radiogroup question inplace editor", async ({ page }) => {
    const items = getVisibleElement(page, ".svc-item-value-wrapper");

    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);
    await getToolboxItemByText(page, "Radio Button Group").hover();
    await getToolboxItemByText(page, "Radio Button Group").click();
    await expect(getVisibleElement(page, ".svc-question__content.svc-question__content--selected")).toBeVisible();
    await expect(items).toHaveCount(6);
    await expect(items.nth(0)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(0).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(0).hover();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(0).locator("span").getByText("Item 1")).toBeVisible();
    await expect(items.nth(1)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(1).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(1).hover();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(1).locator("span").getByText("Item 2")).toBeVisible();
    await expect(items.nth(2)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(2).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(2).hover();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(2).locator("span").getByText("Item 3")).toBeVisible();
    await expect(items.nth(3)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(3).locator("span").getByText("Item 4")).toBeVisible();
    await expect(items.nth(5)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator("span").getByText("Other (describe)")).toBeVisible();
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(4).locator("span").getByText("None")).toBeVisible();

    await items.nth(5).locator(".svc-item-value-controls__add").click();
    await expect(items.nth(5)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();

    await items.nth(5).locator(".svc-item-value-controls__remove").click();
    await expect(items.nth(5)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();

    await items.nth(3).locator(".svc-item-value-controls__add").click();
    await expect(items).toHaveCount(7);
    await expect(items.nth(3)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).toBeVisible();
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(4).locator("span").getByText("Item 5")).toBeVisible();

    await items.nth(3).locator(".svc-item-value-controls__remove").click();
    await expect(items).toHaveCount(6);
    await expect(items.nth(3)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator("span").getByText("Other (describe)")).toBeVisible();
  });

  test("Radiogroup inside PanelDynamic question inplace editor", async ({ page }) => {
    const items = getVisibleElement(page, ".svc-item-value-wrapper");
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "paneldynamic",
              "name": "paneldynamic1",
              "templateElements": [
                {
                  "type": "radiogroup",
                  "name": "question1",
                  "choices": ["Item 1", "Item 2", "Item 3"]
                }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(page, json);

    await page.locator("[data-name='question1']").click();
    await expect(items).toHaveCount(6);
    await expect(items.nth(0)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(0).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(0).hover();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(0).locator("span").getByText("Item 1")).toBeVisible();
    await expect(items.nth(1)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(1).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(1).hover();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(1).locator("span").getByText("Item 2")).toBeVisible();
    await expect(items.nth(2)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(2).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(2).hover();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(2).locator("span").getByText("Item 3")).toBeVisible();
    await expect(items.nth(3)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(3).locator("span").getByText("Item 4")).toBeVisible();
    await expect(items.nth(5)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator("span").getByText("Other (describe)")).toBeVisible();
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(4).locator("span").getByText("None")).toBeVisible();

    await items.nth(5).locator(".svc-item-value-controls__add").click();
    await expect(items.nth(5)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();

    await items.nth(5).locator(".svc-item-value-controls__remove").click();
    await expect(items.nth(5)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();

    await items.nth(3).locator(".svc-item-value-controls__add").click();
    await expect(items).toHaveCount(7);
    await expect(items.nth(3)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).toBeVisible();
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(4).locator("span").getByText("Item 5")).toBeVisible();

    await items.nth(3).locator(".svc-item-value-controls__remove").click();
    await expect(items).toHaveCount(6);
    await expect(items.nth(3)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator("span").getByText("Other (describe)")).toBeVisible();
  });

  test("Dropdown question inplace editor", async ({ page }) => {
    const items = getVisibleElement(page, ".svc-item-value-wrapper");

    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);
    await getToolboxItemByText(page, "Dropdown").hover();
    await getToolboxItemByText(page, "Dropdown").click();
    await expect(getVisibleElement(page, ".svc-question__content.svc-question__content--selected")).toBeVisible();
    await expect(items).toHaveCount(6);
    await expect(items.nth(0)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(0).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(0).hover();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(0).locator("span").getByText("Item 1")).toBeVisible();
    await expect(items.nth(1)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(1).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(1).hover();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(1).locator("span").getByText("Item 2")).toBeVisible();
    await expect(items.nth(2)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(2).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(2).hover();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(2).locator("span").getByText("Item 3")).toBeVisible();
    await expect(items.nth(3)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(3).locator("span").getByText("Item 4")).toBeVisible();
    await expect(items.nth(5)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator("span").getByText("Other (describe)")).toBeVisible();
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(4).locator("span").getByText("None")).toBeVisible();

    await items.nth(5).locator(".svc-item-value-controls__add").click();
    await expect(items.nth(5)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();

    await items.nth(5).locator(".svc-item-value-controls__remove").click();
    await expect(items.nth(5)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();

    await items.nth(3).locator(".svc-item-value-controls__add").click();
    await expect(items).toHaveCount(7);
    await expect(items.nth(3)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).toBeVisible();
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(4).locator("span").getByText("Item 5")).toBeVisible();

    await items.nth(3).locator(".svc-item-value-controls__remove").click();
    await expect(items).toHaveCount(6);
    await expect(items.nth(3)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator("span").getByText("Other (describe)")).toBeVisible();
    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(items).toHaveCount(6); // Choice editors are visible if another question is selected
  });

  test("Dropdown question inplace editor after add", async ({ page }) => {
    const items = getVisibleElement(page, ".svc-item-value-wrapper");
    const json = {
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "dropdown",
              "name": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    const questionContent = page.locator(".svc-question__content");
    await getToolboxItemByText(page, "Dropdown").hover();
    await doDragDrop({
      page,
      element: getToolboxItemByText(page, "Dropdown"),
      target: questionContent,
      options: { targetPosition: { x: 0, y: 5 } }
    });
    await expect(page.locator(".svc-question__content").nth(0)).toBeVisible();
    await expect(page.locator(".svc-question__content").nth(1)).toBeVisible();
    await items.nth(3).locator(".svc-item-value-controls__add").click();
    await expect(page.locator(".svc-item-value-wrapper span[contenteditable='true']").getByText("Item 4")).toBeVisible();
  });

  test("Tag Box question inplace editor default values", async ({ page }) => {
    const items = getVisibleElement(page, ".svc-item-value-wrapper");

    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);
    await getToolboxItemByText(page, "Multi-Select Dropdown").hover();
    await getToolboxItemByText(page, "Multi-Select Dropdown").click();
    await expect(getVisibleElement(page, ".svc-question__content.svc-question__content--selected")).toBeVisible();
    await expect(items).toHaveCount(7);
    await expect(items.nth(0)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(0).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(0).hover();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(0).locator("span").getByText("Select All")).toBeVisible();
    await expect(items.nth(1)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(1).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(1).hover();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(1).locator("span").getByText("Item 1")).toBeVisible();
    await expect(items.nth(2)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(2).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(2).hover();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(2).locator("span").getByText("Item 2")).toBeVisible();
    await expect(items.nth(3)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(3).locator("span").getByText("Item 3")).toBeVisible();
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(4).locator("span").getByText("Item 4")).toBeVisible();
    await expect(items.nth(6)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(6).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(6).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(6).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(6).hover();
    await expect(items.nth(6).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(6).locator("span").getByText("Other (describe)")).toBeVisible();
    await expect(items.nth(5)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator("span").getByText("None")).toBeVisible();

    await items.nth(0).locator(".svc-item-value-controls__add").click();
    await expect(items.nth(0)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(0).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(0).hover();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();

    await items.nth(0).locator(".svc-item-value-controls__remove").click();
    await expect(items.nth(0)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(0).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(0).hover();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();

    await items.nth(4).locator(".svc-item-value-controls__add").click();
    await expect(items).toHaveCount(8);
    await expect(items.nth(4)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(5)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(5).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(5).hover();
    await expect(items.nth(5).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(5).locator("span").getByText("Item 5")).toBeVisible();

    await items.nth(4).locator(".svc-item-value-controls__remove").click();
    await expect(items).toHaveCount(7);
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(6).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(6).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(6).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(6).hover();
    await expect(items.nth(6).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(6).locator("span").getByText("Other (describe)")).toBeVisible();
  });

  test("Ranking question inplace editor", async ({ page }) => {
    const items = getVisibleElement(page, ".svc-item-value-wrapper");

    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);
    await getToolboxItemByText(page, "Ranking").hover();
    await getToolboxItemByText(page, "Ranking").click();
    await expect(getVisibleElement(page, ".svc-question__content.svc-question__content--selected")).toBeVisible();
    await expect(items).toHaveCount(4);
    await expect(items.nth(0)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(0).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(0).hover();
    await expect(items.nth(0).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(0).locator("span").getByText("Item 1")).toBeVisible();
    await expect(items.nth(1)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(1).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(1).hover();
    await expect(items.nth(1).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(1).locator("span").getByText("Item 2")).toBeVisible();
    await expect(items.nth(2)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(2).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toHaveCSS("opacity", "0");
    await items.nth(2).hover();
    await expect(items.nth(2).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(2).locator("span").getByText("Item 3")).toBeVisible();
    await expect(items.nth(3)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(page.locator(".svc-item-value-wrapper").nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(3).hover();
    await expect(page.locator(".svc-item-value-wrapper").nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(3).locator("span").getByText("Item 4")).toBeVisible();

    await items.nth(3).locator(".svc-item-value-controls__add").click();
    await expect(items).toHaveCount(5);
    await expect(items.nth(3)).not.toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).toBeVisible();
    await expect(items.nth(4)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(4).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(4).hover();
    await expect(items.nth(4).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await expect(items.nth(4).locator("span").getByText("Item 5")).toBeVisible();

    await items.nth(3).locator(".svc-item-value-controls__remove").click();
    await expect(items).toHaveCount(4);
    await expect(items.nth(3)).toHaveClass(/svc-item-value--new/);
    await expect(items.nth(3).locator(".svc-item-value-controls__add")).toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__remove")).not.toBeVisible();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
    await items.nth(3).hover();
    await expect(items.nth(3).locator(".svc-item-value-controls__drag-icon")).not.toBeVisible();
  });

  test("Image picker question inplace editor", async ({ page }) => {
    await explicitErrorHandler(page);
    const chooseButtonSelector = ".svc-image-item-value-controls .svc-context-button:not(.svc-context-buttton--danger):not(.svc-image-item-value-controls__add)";
    const deleteButtonSelector = ".svc-image-item-value-controls .svc-context-button--danger";
    const imageItems = getVisibleElement(page, ".svc-image-item-value-wrapper");
    await setJSON(page, {
      elements: [
        {
          name: "q1",
          type: "imagepicker",
          choices: [
            { value: "Image 1", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg" },
            { value: "Image 2", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg" },
            { value: "Image 3", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg" },
            { value: "Image 4", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg" }
          ]
        }
      ]
    });
    await page.locator(".svc-question__content").click();
    await expect(getVisibleElement(page, ".svc-question__content.svc-question__content--selected")).toBeVisible();
    await expect(imageItems).toHaveCount(5);
    await expect(imageItems.nth(0)).not.toHaveClass(/svc-item-value--new/);
    await expect(imageItems.nth(0).locator(".svc-image-item-value-controls__add")).not.toBeVisible();
    await expect(imageItems.nth(0).locator(chooseButtonSelector).first()).toBeVisible();
    await expect(imageItems.nth(0).locator(deleteButtonSelector).first()).toBeVisible();
    await expect(imageItems.nth(0).locator("img[alt=\"Image 1\"]")).toBeVisible();
    await expect(imageItems.nth(1)).not.toHaveClass(/svc-item-value--new/);
    await expect(imageItems.nth(1).locator(".svc-image-item-value-controls__add")).not.toBeVisible();
    await expect(imageItems.nth(1).locator(chooseButtonSelector).first()).toBeVisible();
    await expect(imageItems.nth(1).locator(deleteButtonSelector).first()).toBeVisible();
    await expect(imageItems.nth(1).locator("img[alt=\"Image 2\"]")).toBeVisible();
    await expect(imageItems.nth(2)).not.toHaveClass(/svc-item-value--new/);
    await expect(imageItems.nth(2).locator(".svc-image-item-value-controls__add")).not.toBeVisible();
    await expect(imageItems.nth(2).locator(chooseButtonSelector).first()).toBeVisible();
    await expect(imageItems.nth(2).locator(deleteButtonSelector).first()).toBeVisible();
    await expect(imageItems.nth(2).locator("img[alt=\"Image 3\"]")).toBeVisible();
    await expect(imageItems.nth(3)).not.toHaveClass(/svc-item-value--new/);
    await expect(imageItems.nth(3).locator(".svc-image-item-value-controls__add")).not.toBeVisible();
    await expect(imageItems.nth(3).locator(chooseButtonSelector).first()).toBeVisible();
    await expect(imageItems.nth(3).locator(deleteButtonSelector).first()).toBeVisible();
    await expect(imageItems.nth(3).locator("img[alt=\"Image 4\"]")).toBeVisible();
    await expect(imageItems.nth(4)).toHaveClass(/svc-image-item-value--new/);
    await expect(imageItems.nth(4).locator(".svc-image-item-value-controls__add")).toBeVisible();
    await expect(imageItems.nth(4).locator(chooseButtonSelector).first()).not.toBeVisible();
    await expect(imageItems.nth(4).locator(deleteButtonSelector).first()).not.toBeVisible();
    await expect(imageItems.nth(4).locator("img")).toHaveCount(0);

    await imageItems.nth(4).locator(".svc-choose-file-input").setInputFiles("../../resources/logo.jpg");
  });

  test("Image picker question inplace editor - add new item", async ({ page }) => {
    await explicitErrorHandler(page);
    const imageItems = getVisibleElement(page, ".svc-image-item-value-wrapper");
    await setJSON(page, {
      elements: [
        {
          name: "q1",
          type: "imagepicker",
          choices: [
            { value: "Image 1", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg" },
            { value: "Image 2", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg" },
            { value: "Image 3", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg" },
            { value: "Image 4", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg" }
          ]
        }
      ]
    });
    await page.locator(".svc-question__content").click();
    await expect(getVisibleElement(page, ".svc-question__content.svc-question__content--selected")).toBeVisible();
    await expect(imageItems).toHaveCount(5);

    await getVisibleElement(page, ".svc-image-item-value-controls__add").click();
    const input = imageItems.nth(4).locator("input.svc-choose-file-input");
    await input.setInputFiles("../../resources/logo.jpg");
    await expect(imageItems).toHaveCount(6);
    await expect(imageItems.nth(4).locator("img")).toBeVisible();

    const imageLink = await getImageSrc(page, "img.sd-imagepicker__image", 4);
    expect(imageLink.substring(0, 48)).toEqual(logoBase64Substring);
  });

  test("Image question inplace editor", async ({ page }) => {
    const question = getVisibleElement(page, ".svc-question__content.svc-question__content--selected");
    await page.setViewportSize({ width: 2560, height: 1440 });
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);
    await getToolboxItemByText(page, "Image").hover();
    await getToolboxItemByText(page, "Image").click();
    await expect(question).toBeVisible();
    await expect(question.locator(".sd-file__drag-area-placeholder")).toBeVisible();
    await expect(question.locator(".sd-file__choose-btn")).toBeVisible();
  });

  test("Image question inplace editor - choose image via inplace editor", async ({ page }) => {
    const question = getVisibleElement(page, ".svc-question__content.svc-question__content--selected");
    const controls = getVisibleElement(page, ".svc-image-question-controls");
    await page.setViewportSize({ width: 2560, height: 1440 });
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);
    await getToolboxItemByText(page, "Image").hover();
    await getToolboxItemByText(page, "Image").click();

    await question.locator(".sd-file__choose-btn").click();
    await question.locator("input[type=file].sd-visuallyhidden").setInputFiles("../../resources/logo.jpg");
    await expect(question.locator("img")).toBeVisible();
    let imageLink = await getImageSrc(page, "img.sd-image__image");
    expect(imageLink.substring(0, 48)).toEqual(logoBase64Substring);
    await expect(controls).toHaveCount(1);
    await expect(controls.nth(0).locator(".svc-context-button")).toHaveCount(1);
    await expect(question.locator(".sd-image__no-image")).toHaveCount(0);

    await page.evaluate(() => {
      (window as any).creator.survey.getAllQuestions()[0].imageLink = "testUrl";
    });
    imageLink = await getImageSrc(page, "img.sd-image__image");
    expect(imageLink).toContain("testUrl");
    await expect(question.locator(".sd-image__no-image")).toBeVisible();

    await getVisibleElement(page, ".svc-context-button").click();
    await question.locator("input[type=file]").setInputFiles("../../resources/logo.jpg");
    await expect(question.locator("img")).toBeVisible();

    imageLink = await getImageSrc(page, "img.sd-image__image");
    expect(imageLink.substring(0, 48)).toEqual(logoBase64Substring);
  });

  test("Matrix dropdown question inplace popup editor", async ({ page }) => {
    const row1Column1Cell = page.locator("tbody .svc-matrix-cell").filter({ visible: true }).nth(1);
    const editColumnButton = page.locator(".svc-matrix-cell__question-controls-button").filter({ visible: true }).first();

    await expect(page.locator(".svc-question__content")).toHaveCount(0);
    await addQuestionByAddQuestionButton(page, "Multi-Select Matrix");
    await expect(page.locator(".svc-question__content")).toBeVisible();
    await row1Column1Cell.hover();

    await editColumnButton.click();
    await expect(page.locator(".svc-question__content--in-popup")).toBeVisible();
    await expect(page.locator(".sv-popup__content .sd-header__text")).toHaveCount(0);
    await expect(page.locator(".sv-popup__content .sd-page__title")).toHaveCount(0);

    await page.locator(".sv-popup__button--cancel").click();
    await expect(page.locator(".svc-question__content--in-popup")).toHaveCount(0);
    const objectSelectorButton = page.locator(".svc-side-bar__container-header .sv-action--object-selector .sv-action-bar-item");
    await expect(objectSelectorButton.getByText("Column 1")).toBeVisible();
  });

  test("Rating question inplace editor", async ({ page }) => {
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);
    await getToolboxItemByText(page, "Rating Scale").hover();
    await getToolboxItemByText(page, "Rating Scale").click();
    await page.locator(".sd-rating__item-text .sv-string-editor").getByText("3").click();
    await page.locator(".sd-rating__item-text .sv-string-editor").getByText("3").pressSequentially("abc");
    await page.keyboard.press("Enter");
    const rateValues = await page.evaluate(() => {
      return (window as any).creator.survey.getAllQuestions()[0].rateValues.map((v: { text: string }) => v.text);
    });
    expect(rateValues).toEqual(["1", "2", "abc", "4", "5"]);
  });

  test("Matrix dropdown question inplace row header editor #2553", async ({ page }) => {
    await expect(page.locator(".svc-question__content")).toHaveCount(0);
    await addQuestionByAddQuestionButton(page, "Multi-Select Matrix");
    await expect(page.locator(".svc-question__content")).toBeVisible();

    await page.locator(".sd-table__row .svc-matrix-cell .sv-string-editor").first().click();
    await page.locator(".sd-table__row .svc-matrix-cell .sv-string-editor").first().pressSequentially("Row header");
    await page.locator("div[id$=ariaTitle][id^=sp].spg-title").first().click();
    await page.locator("input.spg-input").first().click();
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Delete");
    await page.keyboard.type("300px");
    await expect(page.locator("input.spg-input").first()).toHaveValue("300px");
  });

  test("Checkbox question inplace editor - keyboard navigation", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "paneldynamic",
              "name": "paneldynamic1",
              "templateElements": [
                {
                  "type": "checkbox",
                  "name": "question1",
                  "choices": ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]
                }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    await page.locator(".svc-string-editor").getByText("question1").click();
    await page.waitForTimeout(200);
    await page.keyboard.press("Tab");
    await expect(page.locator(".svc-item-value-controls__add").nth(0)).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.locator(".svc-item-value-controls__remove").nth(0)).toBeFocused();
    await page.keyboard.press(" ");
    await expect(page.locator(".svc-item-value-controls__remove").nth(0)).toBeFocused();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press(" ");
    await expect(page.locator(".svc-item-value-controls__remove").nth(1)).toBeFocused();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Shift+Tab");
    await page.keyboard.press("Shift+Tab");
    await page.keyboard.press(" ");
    await expect(page.locator(".svc-item-value-controls__remove").nth(2)).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await page.keyboard.press("Shift+Tab");
    await page.keyboard.press(" ");
    await expect(page.locator(".svc-item-value-controls__remove").nth(0)).toBeFocused();
  });
});
