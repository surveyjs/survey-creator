import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, takeElementScreenshot, addQuestionByAddQuestionButton, wrapVisualTest, getTabbedMenuItemByText, creatorTabPreviewName, creatorTabDesignerName, resetHoverToCreator, getPropertyGridCategory, generalGroupName, getListItemByText, surveySettingsButtonSelector, changeToolboxScrolling, changeToolboxSearchEnabled, getToolboxItemByAriaLabel, setAllowEditSurveyTitle, setShowAddQuestionButton, setExpandCollapseButtonVisibility, setShowToolbox, setShowSidebar, getSurveyListItemByText, upArrowImageLink, setAllowZoom } from "../../helper";

const title = "Matrix surface";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Matrix column editor", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    await addQuestionByAddQuestionButton(t, "Multi-Select Matrix");
    const row1Column1Cell = Selector(".sd-table__row").nth(0).find(".svc-matrix-cell").filterVisible().nth(1);
    const editColumnButton = Selector(".svc-matrix-cell__question-controls-button").filterVisible();

    await t
      .expect(Selector(".svc-question__content").exists).ok()
      .hover(row1Column1Cell, { speed: 0.5 });

    await t.click(editColumnButton);
    await takeElementScreenshot("matrix-cell-edit.png", Selector(".svc-matrix-cell__popup .sv-popup__container"), t, comparer);
  });
});

test("Matrix column editor with design surface zoomed out", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    await setAllowZoom(true);
    await addQuestionByAddQuestionButton(t, "Multi-Select Matrix");
    for (let i = 0; i < 5; i++) { await t.click(Selector("#zoomOut").find("button")); }
    const row1Column1Cell = Selector(".sd-table__row").nth(0).find(".svc-matrix-cell").filterVisible().nth(1);
    const editColumnButton = Selector(".svc-matrix-cell__question-controls-button").filterVisible();

    await t
      .expect(Selector(".svc-question__content").exists).ok()
      .hover(row1Column1Cell, { speed: 0.5 });

    await t
      .click(editColumnButton)
      .hover(Selector(".sv-popup__body-content").filterVisible(), { offsetX: 10, offsetY: 10 });
    await takeElementScreenshot("matrix-cell-edit-surface-zoomed-out.png", Selector(".svc-matrix-cell__popup .sv-popup__container"), t, comparer);
  });
});

test("Matrix column", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const surveyJSON = {
      showQuestionNumbers: "on",
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
                {
                  "name": "Column 1",
                  "cellType": "text"
                },
                {
                  "name": "Column 2",
                  "cellType": "text"
                }
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
    await setJSON(surveyJSON);
    const columnCell = Selector(".sd-table__cell--column-title").find(".svc-matrix-cell").filterVisible();
    const matrix = Selector(".sd-matrixdropdown");
    await t.hover(columnCell, { speed: 0.5, offsetX: 1, offsetY: 1 });
    await t.wait(100);
    await takeElementScreenshot("matrix-column-cell-hover.png", matrix, t, comparer);
    await t.click(columnCell, { offsetX: 1, offsetY: 1 });
    await takeElementScreenshot("matrix-column-cell-selected.png", matrix, t, comparer);
    await t.click(columnCell.find(".svc-string-editor__input"), { offsetX: 1, offsetY: 1 });
    await takeElementScreenshot("matrix-column-cell-edit.png", matrix, t, comparer);
    await t.click(Selector(".svc-string-editor__input").withText("Row 1"));
    await takeElementScreenshot("matrix-row-cell-edit.png", matrix, t, comparer);
  });
});

test("Matrix column vertical", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const surveyJSON = {
      showQuestionNumbers: "on",
      "widthMode": "static",
      "width": "700px",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "m",
              "columnLayout": "vertical",
              "columns": [
                {
                  "name": "Column 1",
                  "cellType": "text"
                },
                {
                  "name": "Column 2",
                  "cellType": "text"
                }
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
    await setJSON(surveyJSON);
    const columnCell = Selector(".sd-table__cell--column-title").find(".svc-matrix-cell").filterVisible();
    const matrix = Selector(".sd-matrixdropdown");
    await t.hover(columnCell, { speed: 0.5, offsetX: 1, offsetY: 1 });
    await t.wait(100);
    await takeElementScreenshot("matrix-vertical-column-cell-hover.png", matrix, t, comparer);
    await t.click(columnCell, { offsetX: 1, offsetY: 1 });
    await takeElementScreenshot("matrix-vertical-column-cell-selected.png", matrix, t, comparer);
    await t.click(columnCell.find(".svc-string-editor__input"), { offsetX: 1, offsetY: 1 });
    await takeElementScreenshot("matrix-vertical-column-cell-edit.png", matrix, t, comparer);
    await t.click(Selector(".svc-string-editor__input").withText("Row 1"));
    await takeElementScreenshot("matrix-vertical-row-cell-edit.png", matrix, t, comparer);
  });
});

test("Matrix column editor boolean", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1956, 900);
    const surveyJSON = {
      showQuestionNumbers: "on",
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
              "columns": [
                {
                  "name": "Column 2",
                  "cellType": "boolean"
                }
              ],
              "rows": [
                "Row 1"
              ]
            }
          ]
        }
      ]
    };
    await setJSON(surveyJSON);
    const row1Column1Cell = Selector(".sd-table__row").nth(0).find(".svc-matrix-cell").filterVisible().nth(1);

    await t
      .expect(Selector(".svc-question__content").exists).ok()
      .hover(row1Column1Cell, { speed: 0.5 });

    await takeElementScreenshot("matrix-cell-edit-bool.png", row1Column1Cell, t, comparer);
  });
});

test("Matrix borders in panels", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1767, 1500);
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
                  "columns": [
                    {
                      "name": "Column 1"
                    },
                    {
                      "name": "Column 2"
                    },
                    {
                      "name": "Column 3"
                    }
                  ],
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
    await setJSON(json);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();

    const qContent = Selector("[data-name=question1]");
    const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");
    await takeElementScreenshot("question-panel-content-matrix.png", pageContent, t, comparer);
    await t.hover(qContent, { offsetX: 5, offsetY: 5 }).wait(300);
    await takeElementScreenshot("question-panel-content-matrix-hover.png", pageContent, t, comparer);
    await t.click(qContent, { offsetX: 5, offsetY: 5 }).wait(300);
    await takeElementScreenshot("question-panel-content-matrix-selected.png", pageContent, t, comparer);
  });
});

test("Matrix check title editing (https://github.com/surveyjs/survey-creator/issues/3160)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          "type": "matrix",
          "name": "question1",
          "columns": [
            "Column 1",
            "Column 2",
            "Column 3"
          ],
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
    await setJSON(json);
    await ClientFunction(() => { (<HTMLElement>document.querySelector("[data-name='question1'] .sv-string-editor")).focus(); })();
    await takeElementScreenshot("surface-matrix-title-editing.png", Selector(".svc-question__content"), t, comparer);
  });
});

test("Matrix dynamic with detail two questions + select", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1900);
    const json = {
      showQuestionNumbers: "on",
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
    await setJSON(json);
    await t.click(Selector(".sd-table__cell--detail-panel .svc-row").nth(0), { offsetX: -25, offsetY: -25 })
      .expect(Selector(".svc-question__content--selected").visible).ok();
    await takeElementScreenshot("surface-matrix-detail-two-questions-select.png", Selector(".svc-question__content"), t, comparer);
  });
});

test("Matrix dropdown popup edit ", async (t) => {

  await t.resizeWindow(1400, 900);

  await setJSON({
    showQuestionNumbers: "on",
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "matrixdropdown",
            "name": "question1",
            "columns": [
              {
                "name": "Column 1"
              },
              {
                "name": "Column 2",
                "cellType": "rating"
              }
            ],
            "choices": [
              1,
              2
            ],
            "rows": [
              "Row 1"
            ]
          }
        ]
      }
    ]
  });

  await wrapVisualTest(t, async (t, comparer) => {
    await t.hover(".svc-matrix-cell .sd-dropdown");
    await t.expect(Selector(".svc-matrix-cell__question-controls-button").filterVisible().visible).ok();
    await t.click(Selector(".svc-matrix-cell__question-controls-button").filterVisible());
    await resetHoverToCreator(t);
    await takeElementScreenshot("matrix-dropdown-popup-select.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
    await t.click(Selector("button").withText("Cancel"));
    await t.hover(".svc-matrix-cell .sd-rating");
    await t.expect(Selector(".svc-matrix-cell__question-controls-button").filterVisible().visible).ok();
    await t.click(Selector(".svc-matrix-cell__question-controls-button").nth(1));
    await resetHoverToCreator(t);
    await takeElementScreenshot("matrix-dropdown-popup-rating.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
  });
});

test("Matrix Dynamiv with rows drad-drop", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1600, 1080);
    const json = {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdynamic",
              "name": "question1",
              "columns": [
                {
                  "name": "Column 1"
                },
                {
                  "name": "Column 2"
                },
                {
                  "name": "Column 3"
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "allowRowReorder": true
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await takeElementScreenshot("design-surface-matrixdynamic-with-drag-drop.png", Selector(".svc-tab-designer .sd-table-wrapper"), t, comparer);
  });
});

test("Matrix dynamic with detail", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const json = {
      showQuestionNumbers: "on",
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
    await setJSON(json);
    await takeElementScreenshot("surface-matrix-detail.png", Selector(".svc-question__content"), t, comparer);
  });
});

test("Matrix dynamic with detail empty", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const json = {
      showQuestionNumbers: "on",
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
    await setJSON(json);
    await takeElementScreenshot("surface-matrix-detail-empty.png", Selector(".svc-question__content"), t, comparer);
  });
});

test("Selected matrix-in-panel", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON({
      showQuestionNumbers: "on",
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
    const button = Selector(".svc-page-toolbar__item");
    await t.click(Selector(".svc-question__content--matrix"));
    await takeElementScreenshot("question-matrix-in-panel-selected", Selector(".svc-question__content--matrix"), t, comparer);
  });
});
