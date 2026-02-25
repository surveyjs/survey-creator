import { url, compareScreenshot, test, setJSON, expect, resetHoverToCreator, addQuestionByAddQuestionButton, setAllowZoom } from "./helper";

const title = "Matrix surface";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Matrix column editor", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await addQuestionByAddQuestionButton(page, "Multi-Select Matrix");
    const row1Column1Cell = page.locator(".sv-dropdown_select-wrapper").first();
    const editColumnButton = page.locator(".svc-matrix-cell__question-controls-button").first();

    await row1Column1Cell.hover({ force: true });
    await editColumnButton.click();
    await compareScreenshot(page, page.locator(".svc-matrix-cell__popup .sv-popup__container"), "matrix-cell-edit.png");
  });

  test("Matrix column editor with design surface zoomed out", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await setAllowZoom(page, true);
    await addQuestionByAddQuestionButton(page, "Multi-Select Matrix");
    for (let i = 0; i < 5; i++) {
      await page.locator(".sv-action--zoomOut button").click();
    }
    const row1Column1Cell = page.locator(".sv-dropdown_select-wrapper").first();
    const editColumnButton = page.locator(".svc-matrix-cell__question-controls-button").first();

    await row1Column1Cell.hover({ force: true });
    await editColumnButton.click();
    await page.mouse.move(0, 0);
    // await page.locator(".sv-popup__body-content").hover({ position: { x: 10, y: 10 } });
    await compareScreenshot(page, page.locator(".svc-matrix-cell__popup .sv-popup__container"), "matrix-cell-edit-surface-zoomed-out.png");
  });

  test("Matrix column", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const surveyJSON = {
      showQuestionNumbers: true,
      "widthMode": "static",
      "width": "700px",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "m",
              "columns": [
                { "name": "Column 1", "cellType": "text" },
                { "name": "Column 2", "cellType": "text" }
              ],
              "rows": [
                "Row 1",
                "Row 2"
              ]
            }
          ]
        }
      ]
    };
    await setJSON(page, surveyJSON);
    const columnCell = page.locator(".sd-table__cell--column-title").locator(".svc-matrix-cell").first();
    const matrix = page.locator(".sd-matrixdropdown");
    await columnCell.hover({ force: true, position: { x: 1, y: 1 } });
    await page.waitForTimeout(100);
    await compareScreenshot(page, matrix, "matrix-column-cell-hover.png");
    await columnCell.click({ position: { x: 1, y: 1 } });
    await compareScreenshot(page, matrix, "matrix-column-cell-selected.png");
    await columnCell.locator(".svc-string-editor__input").click({ position: { x: 1, y: 1 } });
    await compareScreenshot(page, matrix, "matrix-column-cell-edit.png");
    await page.locator(".svc-string-editor__input").filter({ hasText: "Row 1" }).click();
    await compareScreenshot(page, matrix, "matrix-row-cell-edit.png");
  });

  test("Matrix column vertical", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const surveyJSON = {
      showQuestionNumbers: true,
      "widthMode": "static",
      "width": "700px",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "m",
              "transposeData": true,
              "columns": [
                { "name": "Column 1", "cellType": "text" },
                { "name": "Column 2", "cellType": "text" }
              ],
              "rows": [
                "Row 1",
                "Row 2"
              ]
            }
          ]
        }
      ]
    };
    await setJSON(page, surveyJSON);
    const columnCell = page.locator(".sd-table__cell--column-title").locator(".svc-matrix-cell").first();
    const matrix = page.locator(".sd-matrixdropdown");
    await columnCell.hover({ force: true, position: { x: 1, y: 1 } });
    await page.waitForTimeout(100);
    await compareScreenshot(page, matrix, "matrix-vertical-column-cell-hover.png");
    await columnCell.click({ position: { x: 1, y: 1 } });
    await compareScreenshot(page, matrix, "matrix-vertical-column-cell-selected.png");
    await columnCell.locator(".svc-string-editor__input").click({ position: { x: 1, y: 1 } });
    await compareScreenshot(page, matrix, "matrix-vertical-column-cell-edit.png");
    await page.locator(".svc-string-editor__input").filter({ hasText: "Row 1" }).click();
    await compareScreenshot(page, matrix, "matrix-vertical-row-cell-edit.png");
  });

  test("Matrix column editor boolean", async ({ page }) => {
    await page.setViewportSize({ width: 1956, height: 900 });
    const surveyJSON = {
      showQuestionNumbers: true,
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "question23",
              "defaultValue": {
                "Row 1": {
                  "Column 2": true
                }
              },
              "columns": [{ "name": "Column 2", "cellType": "boolean" }],
              "rows": [
                "Row 1"
              ]
            }
          ]
        }
      ]
    };
    await setJSON(page, surveyJSON);
    const row1Column1Cell = page.locator(".sd-table__row").nth(0).locator(".svc-matrix-cell").nth(1);

    await expect(page.locator(".svc-question__content")).toBeVisible();
    await row1Column1Cell.hover({ force: true });

    await compareScreenshot(page, row1Column1Cell, "matrix-cell-edit-bool.png");
  });

  test("Matrix borders in panels", async ({ page }) => {
    await page.setViewportSize({ width: 1767, height: 1500 });
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "panel1",
              "elements": [
                {
                  "type": "matrixdropdown",
                  "name": "question1",
                  "columns": [{ "name": "Column 1" }, { "name": "Column 2" }, { "name": "Column 3" }],
                  "cellType": "text",
                  "rows": [
                    "Row 1",
                    "Row 2"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "widthMode": "static"
    };
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });

    const qContent = page.locator("[data-name=question1]");
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");
    await compareScreenshot(page, pageContent, "question-panel-content-matrix.png");
    await qContent.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await compareScreenshot(page, pageContent, "question-panel-content-matrix-hover.png");
    await qContent.click({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await compareScreenshot(page, pageContent, "question-panel-content-matrix-selected.png");
  });

  test("Matrix check title editing (https://github.com/surveyjs/survey-creator/issues/3160)", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const json = {
      showQuestionNumbers: true,
      elements: [
        {
          "type": "matrix",
          "name": "question1",
          "columns": ["Column 1", "Column 2", "Column 3"],
          "rows": [
            "Row 1",
            "Row 2"
          ],
          width: "800px",
          minWidth: "800px",
          maxWidth: "800px"
        },
      ],
    };
    await setJSON(page, json);
    await page.evaluate(() => {
      (document.querySelector("[data-name='question1'] .sv-string-editor") as HTMLElement).focus();
    });
    await compareScreenshot(page, page.locator(".svc-question__content"), "surface-matrix-title-editing.png");
  });

  test("Matrix dynamic with detail two questions + select", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1900 });
    const json = {
      showQuestionNumbers: true,
      elements: [
        {
          type: "matrixdynamic",
          name: "matrix",
          rowCount: 2,
          detailPanelMode: "underRow",
          columns: [{ name: "col1" }, { name: "col2" }, { name: "col3" }],
          detailElements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }],
          width: "800px",
          minWidth: "800px",
          maxWidth: "800px"
        },
      ],
    };
    await setJSON(page, json);
    await page.locator(".sd-table__cell--detail-panel .svc-row").nth(0).click();
    await expect(page.locator(".svc-question__content--selected")).toBeVisible();
    await compareScreenshot(page, page.locator(".svc-question__content"), "surface-matrix-detail-two-questions-select.png");
  });

  test("Matrix dropdown popup edit ", async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 });

    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "question1",
              "columns": [
                { "name": "Column 1" },
                { "name": "Column 2", "cellType": "rating" }
              ],
              "choices": [1, 2],
              "rows": [
                "Row 1"
              ]
            }
          ]
        }
      ]
    });
    const dropdownButton = page.locator(".svc-matrix-cell").nth(3).locator(".svc-matrix-cell__question-controls-button");
    const ratingButton = page.locator(".svc-matrix-cell").nth(4).locator(".svc-matrix-cell__question-controls-button");

    await page.locator(".svc-matrix-cell").nth(3).hover({ force: true });
    await expect(dropdownButton).toBeVisible();
    await dropdownButton.click();
    await compareScreenshot(page, page.locator(".sv-popup__container"), "matrix-dropdown-popup-select.png");
    await page.locator("button").filter({ hasText: "Cancel" }).click();
    await page.waitForTimeout(500);

    await page.locator(".svc-matrix-cell").nth(4).hover({ force: true });
    await expect(ratingButton).toBeVisible();
    await ratingButton.click();
    await compareScreenshot(page, page.locator(".sv-popup__container"), "matrix-dropdown-popup-rating.png");
  });

  test("Matrix Dynamiv with rows drad-drop", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1080 });
    const json = {
      showQuestionNumbers: true,
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdynamic",
              "name": "question1",
              "columns": [{ "name": "Column 1" }, { "name": "Column 2" }, { "name": "Column 3" }],
              "choices": [1, 2, 3, 4, 5],
              "allowRowReorder": true
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    await compareScreenshot(page, page.locator(".svc-tab-designer .sd-table-wrapper"), "design-surface-matrixdynamic-with-drag-drop.png");
  });

  test("Matrix dynamic with detail", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const json = {
      showQuestionNumbers: true,
      elements: [
        {
          type: "matrixdynamic",
          name: "matrix",
          rowCount: 2,
          detailPanelMode: "underRow",
          columns: [{ name: "col1" }, { name: "col2" }, { name: "col3" }],
          detailElements: [{ type: "text", name: "q1" }],
          width: "800px",
          minWidth: "800px",
          maxWidth: "800px"
        },
      ],
    };
    await setJSON(page, json);
    await compareScreenshot(page, page.locator(".svc-question__content"), "surface-matrix-detail.png");
  });

  test("Matrix dynamic with detail empty", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const json = {
      showQuestionNumbers: true,
      elements: [
        {
          type: "matrixdynamic",
          name: "matrix",
          rowCount: 2,
          detailPanelMode: "underRow",
          columns: [{ name: "col1" }, { name: "col2" }, { name: "col3" }],
          width: "800px",
          minWidth: "800px",
          maxWidth: "800px"
        },
      ],
    };
    await setJSON(page, json);
    await compareScreenshot(page, page.locator(".svc-question__content"), "surface-matrix-detail-empty.png");
  });

  test("Selected matrix-in-panel", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "panel1",
              "elements": [
                {
                  "type": "matrix",
                  "name": "question1",
                  "columns": [
                    "Column 1",
                    "Column 2"
                  ],
                  "rows": [
                    "Row 1",
                    "Row 2"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "widthMode": "static",
      "width": "600px"
    });
    const button = page.locator(".svc-page-toolbar__item");
    await page.locator(".svc-question__content--matrix").click();
    await compareScreenshot(page, page.locator(".svc-question__content--matrix"), "question-matrix-in-panel-selected.png");
  });
});