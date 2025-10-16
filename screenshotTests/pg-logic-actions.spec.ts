import { url, compareScreenshot, test, setJSON, getPropertyGridCategory, getListItemByText, generalGroupName, logicGroupName, expect } from "./helper";

const title = "Actions in Logic section Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Check states", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    await setJSON(page, {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            }
          ]
        }
      ]
    });

    await page.locator(".svc-question__content").click({ position: { x: 10, y: 10 } });
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, logicGroupName).click();

    const sectionContentElement = page.getByRole("group", { name: "Conditions" });

    await expect(sectionContentElement).toBeVisible();
    await compareScreenshot(page, sectionContentElement, "logic-button-default.png");

    await sectionContentElement.locator(".spg-action-button").nth(1).hover();
    await compareScreenshot(page, sectionContentElement, "logic-button-hovered.png");
  });

  test("Check list item styles into logic popup", async ({ page }) => {
    const json2 = {
      showQuestionNumbers: "on",
      "elements": [
        {
          "type": "text",
          "name": "question1",
        }, {
          "type": "dropdown",
          "name": "region",
          "title": "Select a region",
          "choices": ["Africa", "Americas", "Asia", "Europe", "Oceania"]
        }
      ]
    };

    await page.setViewportSize({ width: 1280, height: 900 });

    await setJSON(page, json2);
    await page.locator(".svc-question__content").first().click({ position: { x: 10, y: 10 } });
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, logicGroupName).click();

    const sectionContentElement = page.getByRole("group", { name: "Conditions" });

    await sectionContentElement.locator(".spg-action-button").nth(1).click();
    await page.locator(".sl-dropdown").first().click();
    await getListItemByText(page, "region").click({ position: { x: 10, y: 20 } });
    await page.waitForTimeout(1000);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");

    await compareScreenshot(page, page.locator(".sv-popup.svc-property-editor.sv-popup--modal-popup .sv-popup__container"), "pg-logic-popup-dropdown-list-item--focused.png");
  });

  test("Check run expression description", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.evaluate(() => {
      (window as any).SurveyCreatorCore.editorLocalization.getLocale().pe.expressionHelp = "Use curly brackets to access answers: `{question1} + {question2}`. Expressions also support functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `count()`, `avg()`, and others";
    });

    await setJSON(page, {});
    await getPropertyGridCategory(page, logicGroupName).click();
    await page.locator("[data-name='triggers'] .spg-action-button").nth(1).click();
    await page.locator("[data-name='runExpression'] .spg-action-button").click();

    await compareScreenshot(page, page.locator("[data-name='runExpression']"), "run-expression-description.png");
  });
});
