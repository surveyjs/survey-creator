import { url, test, expect, setJSON, creatorTabPreviewName, getTabbedMenuItemByText } from "../helper";

const title = "Preview tab";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "matrixdynamic",
            "name": "Question1",
            "defaultValue": [
              { "Column 1": [1] },
              { "Column 1": [2] }
            ],
            "columns": [{ "name": "Column 1" }],
            "choices": [1, 2],
            "cellType": "checkbox"
          }
        ]
      }
    ]
  };

  test("Test survey results table expand/collapse", async ({ page }) => {
    await setJSON(page, json);

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.locator(".sd-navigation__complete-btn").click();
    await expect(page.locator(".sd-completedpage").getByText("Thank you for completing the survey")).toBeVisible();

    const tableRows = page.locator(".svd-test-results__table table tbody tr");

    await tableRows.nth(0).click();
    await expect(page.locator("td span").getByText("row 1")).toBeVisible();
    await tableRows.nth(1).click();
    await expect(page.locator("td span").getByText("Column 1")).toBeVisible();
    await tableRows.nth(2).click();
    await expect(page.locator("td span").getByText("Choice")).toBeVisible();
    await tableRows.nth(0).click();
    await expect(page.locator("td span").getByText("row 1")).not.toBeVisible();
  });

  test("Check dropdowns inside survey are hided when scrolling container", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 800 });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "dropdown",
              "name": "question3",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "dropdown",
              "name": "question2",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "dropdown",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "dropdown",
              "name": "question4",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            }
          ]
        }
      ]
    });

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.locator(".sd-dropdown").first().click();
    await expect(page.locator(".sv-popup__container").filter({ visible: true })).toBeVisible();
    await page.locator(".sd-root-modern.sd-root-modern--full-container > .sv-scroll__wrapper > .sv-scroll__scroller").evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    await expect(page.locator(".sv-popup__container").filter({ visible: true })).not.toBeVisible();
  });

  test("Test survey results not visible on mobile", async ({ page }) => {
    await setJSON(page, json);

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.locator(".sd-navigation__complete-btn").click();
    await expect(page.locator(".sd-completedpage").getByText("Thank you for completing the survey")).toBeVisible();

    const tableRows = page.locator(".svd-test-results__table");

    await expect(tableRows).toBeVisible();
    await page.setViewportSize({ width: 500, height: 800 });
    await expect(tableRows).not.toBeVisible();
  });

  test("Test markdown is processed in result question titles", async ({ page }) => {
    await setJSON(page, json);
    await page.evaluate(() => {
      window["creator"].onSurveyInstanceCreated.add((s, o) => {
        if (o.area == "preview-tab") {
          o.survey.onTextMarkdown.add(function (survey, options) {
            options.html = "Markdown converted text";
          });
        }
      });
    });

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.locator(".sd-navigation__complete-btn").click();
    await expect(page.locator(".sd-completedpage").getByText("Thank you for completing the survey")).toBeVisible();

    const questionTitleProcessed = page.locator(".svd-test-results__table td .sv-string-viewer").getByText("Markdown converted text");
    await expect(questionTitleProcessed).toBeVisible();
  });
});

