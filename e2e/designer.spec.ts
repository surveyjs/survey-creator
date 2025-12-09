
import { url, test, expect, doDragDrop, setJSON } from "./helper";

const title = "Designer";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });
  test("Check page's d&d attributes are updating on page's name change", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    const testJson = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "q"
            },
          ]
        }
      ]
    };
    await page.evaluate((json) => {
      window["creator"].JSON = json;
    }, testJson);
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-page")).toBe("page1");
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-survey-element")).toBe("page1");
    await page.evaluate(() => { window["creator"].survey.pages[0].name = "test1"; });
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-page")).toBe("test1");
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-survey-element")).toBe("test1");
    await page.evaluate(() => { window["creator"].survey.pages[0].name = "test2"; });
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-page")).toBe("test2");
    expect(await page.locator(".svc-page").first().getAttribute("data-sv-drop-target-survey-element")).toBe("test2");
  });
  test("Check title actions on design surface for title location = left", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    const testJson = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "text",
              name: "Action Test",
              titleLocation: "left",
            },
          ],
        },
      ],
    };
    await page.evaluate((json) => {
      window["creator"].JSON = {};

      window["creator"].onSurveyInstanceSetupHandlers.add((_, options) => {
        if (options.area === "designer-tab" || options.area === "preview-tab") {
          options.survey.onGetQuestionTitleActions.add((_, options) => {
            options.actions = [
              {
                tooltip: "Test action",
                iconName: "icon-toolbox-customquestion-24x24",
                action: () => {
                },
              },
            ];
          });
        }
      });

      window["creator"].JSON = json;
    }, testJson);
    await expect(page.getByRole("button", { name: "Test action" })).toBeVisible();
  });
  test("check d&d paneldynamic from one page to another - #7304", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      (window as any).creator.animationEnabled = true;
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "paneldynamic",
              "name": "question1",
              "templateElements": [
                {
                  "type": "text",
                  "name": "question2"
                }
              ]
            }
          ]
        }
      ],
      "headerView": "advanced"
    });
    await doDragDrop({ page, element: page.locator("[data-sv-drop-target-survey-element='question1'] > .svc-question__content > .svc-question__drag-area"), target: page.locator("[data-sv-drop-target-page='page2']"), options: { targetPosition: { x: 50, y: 50 }, elementPosition: { x: 10, y: 10 } } });
    await page.waitForTimeout(2000);
    await expect(page.locator("[data-sv-drop-target-page='page2'] .svc-string-editor", { hasText: "question2" })).toBeVisible({ visible: true });
    await page.locator("[data-sv-drop-target-page='page2'] .svc-element__add-new-question.svc-btn").click();
    await page.waitForTimeout(2000);
    await expect(page.locator("[data-sv-drop-target-page='page2'] .svc-string-editor", { hasText: "question3" })).toBeVisible({ visible: true });
  });
});
