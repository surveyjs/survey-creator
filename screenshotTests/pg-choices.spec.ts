import { expect } from "@playwright/test";
import { url, setJSON, getPropertyGridCategory, generalGroupName, test, compareScreenshot, doDragDrop, resetFocusToBody } from "./helper";

const title = "Choices section Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Check section", async ({ page }) => {
    await page.evaluate(() => window["creator"].currentPlugin.propertyGrid.searchEnabled = false);
    await page.setViewportSize({ width: 1920, height: 1080 });

    await setJSON(page, {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        }
      ]
    });
    // await page.click(Selector(".svd-grid-expand"));
    await page.locator(".svc-question__content").click({ position: { x: 10, y: 10 } });
    await getPropertyGridCategory(page, generalGroupName).click();
    await page.getByRole("button", { name: "Choice Options" }).click();

    const sectionContentElement = page.getByRole("group", { name: "Choice Options" });
    await expect(sectionContentElement).toBeVisible();
    await compareScreenshot(page, sectionContentElement, "choices-section-default.png");
    await page.evaluate(() => (<any>document).querySelector("[data-name='choices'] .spg-input").focus());
    await compareScreenshot(page, sectionContentElement, "choices-section-default-focused.png");
    await resetFocusToBody(page);
    await sectionContentElement.locator(".spg-action-button").nth(0).hover();
    await compareScreenshot(page, sectionContentElement, "choices-clear-button-hovered.png");

    await sectionContentElement.locator(".spg-action-button").nth(3).hover();
    await compareScreenshot(page, sectionContentElement, "choices-edit-item-button-hovered.png");

    await sectionContentElement.locator(".spg-action-button").nth(3).click();
    await compareScreenshot(page, sectionContentElement, "choices-edit-item-content.png");
  });

  test("Check items empty", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    const checkBoxEmptyItemsSurvey = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": []
            }
          ]
        }
      ]
    };
    await setJSON(page, checkBoxEmptyItemsSurvey);
    await page.locator(".svc-question__content").click({ position: { x: 10, y: 10 } });
    await getPropertyGridCategory(page, generalGroupName).click();
    await page.getByRole("button", { name: "Choice Options" }).click();

    const sectionContentElement = page.getByRole("group", { name: "Choice Options" });
    await compareScreenshot(page, sectionContentElement, "choices-empty-items.png");

    await sectionContentElement.locator(".spg-matrixdynamic__add-btn").hover();
    await compareScreenshot(page, sectionContentElement, "choices-empty-add-btn-hovered.png");
  });

  test("Collection editor headers", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    const addCustomProperty = async () => {
      await page.evaluate(() => {
        window["Survey"].JsonObject.metaData.addProperty("itemvalue", { name: "customColumn" });
      });
    };

    const surveyJSON = {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "radiogroup",
              "name": "question1",
              "choices": [1, 2, 3],
            },
          ]
        }
      ]
    };

    await addCustomProperty();
    await setJSON(page, surveyJSON);

    await page.locator(".svc-question__content").click({ position: { x: 10, y: 10 } });
    await getPropertyGridCategory(page, generalGroupName).click();
    await page.getByRole("button", { name: "Choice Options" }).click();

    const sectionContentElement = page.getByRole("group", { name: "Choice Options" });
    await compareScreenshot(page, sectionContentElement, "collection-editor-header.png");
  });

  test("Check choices editor with narrow property grid", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    const surveyJSON = {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "radiogroup",
              "name": "question1",
              "choices": [1, 2, 3],
            },
          ]
        }
      ]
    };

    await setJSON(page, surveyJSON);

    const westResizer = page.locator(".svc-resizer-west");
    const questionSelector = page.locator("div[data-name='choices']");
    await doDragDrop({ page,
      element: westResizer,
      target: westResizer,
      options: { targetPosition: { x: 100, y: 0 } }
    });

    await page.locator(".svc-question__content").click({ position: { x: 10, y: 10 } });
    await getPropertyGridCategory(page, generalGroupName).click();
    await page.getByRole("button", { name: "Choice Options" }).click();
    await questionSelector.locator("td .spg-action-button").nth(0).click();

    await compareScreenshot(page, questionSelector, "choices-editor-narrow-pg.png");
  });
});
