import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, takeElementScreenshot, addQuestionByAddQuestionButton, wrapVisualTest, getTabbedMenuItemByText, creatorTabPreviewName, creatorTabDesignerName, resetHoverToCreator, getPropertyGridCategory, generalGroupName, getListItemByText, surveySettingsButtonSelector, changeToolboxScrolling, changeToolboxSearchEnabled, getToolboxItemByAriaLabel, setAllowEditSurveyTitle, setShowAddQuestionButton, setExpandCollapseButtonVisibility, setShowToolbox, setShowSidebar, getSurveyListItemByText, upArrowImageLink, setAllowZoom } from "../../helper";

const title = "Designer surface";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Check section", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

    const surveyJSON = {
      "showQuestionNumbers": "off",
      "widthMode": "static",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              title: "Question 1",
            },
            {
              "type": "text",
              "name": "question2",
              title: "Question 2",
              startWithNewLine: false,
            },
          ]
        }
      ]
    };

    await setJSON(surveyJSON);
    await takeElementScreenshot("questions-in-one-row.png", Selector(".svc-row .sd-row"), t, comparer);
  });
});

test("Test question type converter", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

    const surveyJSON = {
      "showQuestionNumbers": "off",
      "widthMode": "static",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              title: "Question 1",
            }
          ]
        }
      ]
    };
    await setJSON(surveyJSON);

    await t
      .click(Selector(".svc-question__content"), { offsetX: 5, offsetY: 5 })
      .expect(Selector("#convertTo").visible).ok()
      .click(Selector("#convertTo"))
      .expect(Selector(".sv-popup__container").filterVisible().visible).ok();
    await takeElementScreenshot("convert-to-popup.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
  });
});
test("Test question type converter on page for panel - 1", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1000, 800);

    const surveyJSON = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "panel1"
            }
          ]
        }
      ]
    };
    await setJSON(surveyJSON);

    await t
      .click(Selector(".svc-question__content"), { offsetX: 5, offsetY: 5 })
      .expect(Selector("#convertTo").visible).ok()
      .click(Selector("#convertTo"))
      .expect(Selector(".sv-popup__container").filterVisible().visible).ok();
    await takeElementScreenshot("convert-to-popup-panel.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
  });
});

test("Test question type converter on page for panel - 2", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1000, 800);

    const surveyJSON = {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "panel1",
              "elements": [
                {
                  "type": "text",
                  "name": "question1"
                }
              ]
            },
            {
              "type": "text",
              "name": "question2"
            }
          ]
        }
      ]
    };
    await setJSON(surveyJSON);

    await t
      .scroll(Selector(".svc-tab-designer"), "bottom")
      .expect(Selector(".svc-element__question-type-selector").visible).ok()
      .click(Selector(".svc-element__question-type-selector"))
      .expect(Selector(".sv-popup__container").filterVisible().visible).ok();
    await takeElementScreenshot("convert-to-popup-panel-not-empty.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
  });
});

test("Test question type converter (mobile)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(599, 900);

    const surveyJSON = {
      "showQuestionNumbers": "off",
      "widthMode": "static",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              title: "Question 1",
            }
          ]
        }
      ]
    };
    await ClientFunction(() => {
      window["Survey"]._setIsTouch(true);
      (window as any).creator.isTouch = true;
    })();
    await setJSON(surveyJSON);
    await t
      .click(Selector(".svc-question__content"), { offsetX: 5, offsetY: 5 })
      .expect(Selector("#convertTo").visible).ok()
      .click(Selector("#convertTo"))
      .expect(Selector(".sv-popup__container").filterVisible().visible).ok();
    await ClientFunction(() => document.body.focus())();
    await takeElementScreenshot("convert-to-popup-mobile.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
  });
});

test("Test question type selector", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

    const surveyJSON = {
      "showQuestionNumbers": "off",
      "widthMode": "static",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              title: "Question 1",
            }
          ]
        }
      ]
    };
    await setJSON(surveyJSON);

    await t
      .click(Selector(".svc-page__content--new .svc-element__question-type-selector-icon"))
      .expect(Selector(".sv-popup__container").filterVisible().visible).ok();
    await takeElementScreenshot("select-type-popup.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
  });
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

test("Boolean no wrap", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const surveyJSON = {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "boolean",
              "name": "question1",
              "defaultValue": "true",
              "labelTrue": "Dashed-text"
            }
          ]
        }
      ]
    };
    await setJSON(surveyJSON);
    await t.click(Selector("span").withText("Dashed-text"));
    await takeElementScreenshot("bool-no-wrap-edit.png", Selector(".sd-boolean"), t, comparer);
  });
});

test("Choices (Checkbox): Layout", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);

    const json = {
      showQuestionNumbers: "on",
      pages: [
        {
          name: "page1",
          elements: [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2"
              ],
              "hasOther": true,
              "colCount": 2
            }
          ]
        }
      ]
    };
    await setJSON(json);

    const QRoot = Selector(".svc-question__adorner").filterVisible();
    await takeElementScreenshot("surface-checkbox-layout.png", QRoot, t, comparer);
  });
});

test("Choices (Tagbox): Layout", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t
      .resizeWindow(1280, 900)
      .hover(getToolboxItemByAriaLabel("Multi-Select Dropdown"), { speed: 0.5 })
      .click(getToolboxItemByAriaLabel("Multi-Select Dropdown"), { speed: 0.5 })
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory("Data"))
      .click(Selector("span").withExactText("Set Default Answer"))
      .click(Selector(".sv-popup--modal-popup .sd-dropdown__filter-string-input"))
      .click(getSurveyListItemByText("Item 2"))
      .click(getSurveyListItemByText("Item 3"))
      .click(Selector(".sv-popup--modal-popup button").withExactText("Apply"));

    const QRoot = Selector(".svc-question__adorner").filterVisible();
    await takeElementScreenshot("surface-tagbox-default-layout.png", QRoot, t, comparer);
  });
});
test("Choices (Checkbox): Layout small screen", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(500, 900);
    const json = {
      showQuestionNumbers: "on",
      pages: [
        {
          name: "page1",
          elements: [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4"
              ],
              "hasOther": true,
              "colCount": 2
            }
          ]
        }
      ]
    };
    await setJSON(json);

    const QRoot = Selector(".svc-question__adorner").filterVisible();
    await takeElementScreenshot("surface-checkbox-layout-small-screen.png", QRoot, t, comparer);
  });
});

test("Placeholder", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1767, 900);
    const designerTabContent = Selector(".svc-tab-designer");
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();

    await takeElementScreenshot("surface-placeholder.png", designerTabContent, t, comparer);
  });
});

test("Placeholder with survey header", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1767, 900);
    const designerTabContent = Selector(".svc-tab-designer");
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
      (<any>window).creator.showHeaderInEmptySurvey = true;
    })();

    await takeElementScreenshot("surface-placeholder-with-header.png", designerTabContent, t, comparer);
  });
});

test("Question borders", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1232, 900);
    const json = {
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
    };
    await setShowToolbox(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await setJSON(json);
    await setShowSidebar(false);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();
    const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");
    const qContent = Selector(".svc-question__content");
    await takeElementScreenshot("question-content.png", pageContent, t, comparer);

    await t.hover(qContent, { offsetX: 5, offsetY: 5 }).wait(300);
    await takeElementScreenshot("question-content-hover.png", pageContent, t, comparer);

    await t.click(qContent, { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("question-content-click.png", pageContent, t, comparer);
  });
});

test("Page borders", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1232, 900);
    const json = {
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
    };
    await setShowToolbox(false);
    await setAllowEditSurveyTitle(false);
    await setJSON(json);
    await setShowSidebar(false);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();
    const designerTabContent = Selector(".svc-tab-designer");
    const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");

    await takeElementScreenshot("page-content.png", designerTabContent, t, comparer);
    await t.hover(pageContent, { offsetX: 5, offsetY: 5 }).wait(300);
    await takeElementScreenshot("page-content-hover.png", designerTabContent, t, comparer);

    await t.hover(pageContent.find(".svc-element__add-new-question"));
    await takeElementScreenshot("question-add-hover.png", pageContent, t, comparer);

    await t.click(pageContent, { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("page-content-click.png", designerTabContent, t, comparer);

    await t.click(pageContent.find(".sd-page__title"), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("page-title-click.png", designerTabContent, t, comparer);

  });
});

test("Question borders in panels", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1767, 1500);
    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "width": "800px",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "panel1",
              "elements": [
                {
                  "type": "panel",
                  "name": "panel2",
                  "elements": [
                    {
                      "type": "text",
                      "name": "question7"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();

    const qContent = Selector("[data-name=question7]");
    const panelContent = Selector(".svc-question__content--panel .svc-question__content--panel");
    const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");
    await t.hover(qContent, { offsetX: 5, offsetY: 5 }).wait(300);
    await takeElementScreenshot("question-panel-content-hover.png", pageContent, t, comparer);
    await t.hover(panelContent, { offsetX: 5, offsetY: 5 }).wait(300);
    await takeElementScreenshot("question-panel-inner-hover.png", pageContent, t, comparer);
  });
});

/*
  test("Check question width and position", async (t) => { 
  await wrapVisualTest(t, async (t, comparer) => { 
    await t.resizeWindow(1920, 1080);
  
    const surveyJSON = {
      "showQuestionNumbers": "off",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              title: "Question 1",
            },
          ]
        }
      ]
    };
  
    await setJSON(surveyJSON);
    await takeElementScreenshot("question-in-center", Selector(".svc-tab-designer"), t, comparer);
  }); });
  */
test("Panel empty", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "panel1",
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await takeElementScreenshot("surface-empty-panel.png", Selector(".svc-question__content"), t, comparer);
    await t.hover(Selector(".svc-panel__add-new-question"));
    await takeElementScreenshot("surface-empty-panel-hover.png", Selector(".svc-question__content"), t, comparer);
  });
});

test("Panel not empty", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const json = {
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
                  "type": "text",
                  "name": "question1"
                }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await takeElementScreenshot("surface-not-empty-panel.png", Selector(".svc-question__content"), t, comparer);
    await t.hover(Selector(".svc-question__content div").withText("Add Question"));
    await takeElementScreenshot("surface-not-empty-panel-hover.png", Selector(".svc-question__content"), t, comparer);
  });
});

test("Panel gap between items", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const json = {
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
                  "type": "text",
                  "name": "question1"
                },
                {
                  "type": "text",
                  "name": "question2"
                }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await takeElementScreenshot("surface-panel.png", Selector(".svc-question__content"), t, comparer);
  });
});

test("Panel multi-question row", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1956, 900);
    const json = {
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
                  "type": "text",
                  "name": "question1"
                },
                {
                  "type": "text",
                  "name": "question2",
                  "startWithNewLine": false
                }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await takeElementScreenshot("surface-panel-multi-row.png", Selector(".svc-question__content"), t, comparer);

    const Question1 = Selector(
      "[data-sv-drop-target-survey-element=\"question1\"]"
    );
    const Question2 = Selector(
      "[data-sv-drop-target-survey-element=\"question2\"]"
    );
    const DragZoneQuestion1 = Question1.find(".svc-question__drag-element");

    await t.click(Question1, { speed: 0.1, offsetY: 20 });
    await t.hover(DragZoneQuestion1, { speed: 0.1 });
    await t.dragToElement(DragZoneQuestion1, Question2, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetX: -80,
      speed: 0.5
    });
    await resetHoverToCreator(t);

    await takeElementScreenshot("surface-panel-multi-row-question-selected.png", Selector(".svc-question__content"), t, comparer);
  });
});

test("Panel (small) with questions in row", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const json = {
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
                  "type": "text",
                  "name": "question1"
                },
                {
                  "type": "text",
                  "name": "question2",
                  "startWithNewLine": false
                }
              ],
              "maxWidth": "500px"
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await takeElementScreenshot("surface-panel-row.png", Selector(".svc-question__content--panel"), t, comparer);
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
test("Logo big image", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1900);
    const json = {
      showQuestionNumbers: "on",
      "logo": "data:image/svg+xml,%3Csvg height='100%25' width='100%25' viewBox='0 0 162 66' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M161.579 0H0.420532V50.1402H143.407L161.579 66V0Z' fill='%2319B394'%3E%3C/path%3E%3Cpath d='M38.9962 26.02C39.2441 26.5983 39.4093 27.3417 39.4093 28.1677C39.4093 29.159 39.2441 30.0676 38.831 30.7284C38.418 31.4719 37.9224 32.0501 37.2616 32.4631C36.6007 32.8761 35.8573 33.2065 35.0313 33.4543C34.2053 33.6195 33.2966 33.7847 32.388 33.7847C30.9837 33.7847 29.5795 33.5369 28.1752 33.1239C26.771 32.7109 25.5319 32.1327 24.4581 31.3066L26.1101 28.1677C26.2753 28.3329 26.5231 28.4981 26.9362 28.8285C27.3492 29.0764 27.8448 29.3242 28.423 29.572C29.0012 29.8198 29.5795 30.0676 30.3229 30.2328C30.9837 30.398 31.7272 30.4806 32.4706 30.4806C34.4531 30.4806 35.4443 29.8198 35.4443 28.5807C35.4443 28.1677 35.3617 27.8373 35.1139 27.5895C34.8661 27.3417 34.5357 27.0939 34.1226 26.8461C33.7096 26.5983 33.214 26.4331 32.5532 26.2678C31.975 26.1026 31.3141 25.9374 30.5707 25.6896C29.6621 25.4418 28.9186 25.194 28.2578 24.8636C27.597 24.5332 27.0188 24.2028 26.6058 23.8724C26.1927 23.4593 25.8623 23.0463 25.6145 22.4681C25.3667 21.9725 25.2841 21.3117 25.2841 20.5682C25.2841 19.577 25.4493 18.7509 25.7797 18.0075C26.1101 17.2641 26.6058 16.6859 27.2666 16.1902C27.9274 15.6946 28.5882 15.2816 29.4143 15.0338C30.2403 14.786 31.1489 14.6208 32.0576 14.6208C33.3792 14.6208 34.6183 14.8686 35.6921 15.2816C36.766 15.6946 37.7572 16.1902 38.5832 16.7685L36.9312 19.7422C36.8486 19.6596 36.6007 19.4118 36.2703 19.2466C35.9399 18.9988 35.5269 18.8336 35.1139 18.5857C34.6183 18.4205 34.1226 18.1727 33.627 18.0901C33.0488 17.9249 32.5532 17.8423 31.975 17.8423C30.9837 17.8423 30.2403 18.0075 29.7447 18.4205C29.2491 18.7509 29.0012 19.3292 29.0012 19.99C29.0012 20.403 29.0839 20.7334 29.2491 20.9812C29.4143 21.229 29.6621 21.4769 30.0751 21.6421C30.4881 21.8073 30.9011 21.9725 31.3967 22.1377C31.975 22.3029 32.5532 22.4681 33.2966 22.6333C34.2053 22.8811 35.0313 23.1289 35.7747 23.4593C36.5181 23.7071 37.179 24.1202 37.6746 24.5332C38.3354 24.9462 38.7484 25.4418 38.9962 26.02ZM54.6909 29.4894V19.7422H51.1389V28.3329C50.7259 29.159 50.2303 29.8198 49.5695 30.2328C48.9086 30.6458 48.2478 30.8936 47.587 30.8936C46.0175 30.8936 45.2741 29.8198 45.2741 27.6721V19.7422H41.7221V28.4155C41.7221 30.2328 42.0526 31.5545 42.796 32.4631C43.5394 33.3717 44.6133 33.8673 46.0175 33.8673C47.174 33.8673 48.2478 33.6195 49.239 33.1239C50.2303 32.6283 50.9737 31.9675 51.6345 30.9762L51.7171 32.0501C51.7997 32.5457 52.0476 32.9587 52.378 33.2891C52.791 33.6195 53.2866 33.7021 53.9474 33.7021C54.1126 33.7021 54.3604 33.7021 54.6083 33.7021C54.8561 33.7021 55.1039 33.6195 55.5169 33.5369V30.5632C55.1865 30.5632 55.0213 30.4806 54.8561 30.3154C54.6909 30.1502 54.6909 29.9024 54.6909 29.4894ZM65.6771 19.4944C65.3467 19.4944 64.9337 19.577 64.5206 19.7422C64.1076 19.9074 63.6946 20.0726 63.3642 20.403C62.9512 20.6508 62.6208 20.9812 62.2904 21.3943C61.9599 21.8073 61.6295 22.2203 61.3817 22.7159V19.7422H58.1602V33.6195H61.7121V25.194C62.0425 24.368 62.7034 23.7897 63.5294 23.3767C64.3554 22.9637 65.3467 22.7985 66.4205 22.7159V19.4944C66.3379 19.4944 66.2553 19.4944 66.1727 19.4944C66.0901 19.4944 65.9249 19.4944 65.6771 19.4944ZM74.1852 30.6458L70.6333 19.6596H66.9987L72.1201 33.5369H75.9199L81.0413 19.6596H77.7372L74.1852 30.6458ZM95.5795 23.8724C95.9099 24.6984 96.0751 25.607 96.0751 26.5983C96.0751 26.8461 96.0751 27.0113 96.0751 27.2591C96.0751 27.5069 96.0751 27.6721 95.9925 27.7547H85.2541C85.3367 28.3329 85.4193 28.7459 85.6671 29.2416C85.9149 29.6546 86.1627 29.985 86.4931 30.3154C86.8235 30.6458 87.2365 30.811 87.6496 30.9762C88.0626 31.1414 88.4756 31.224 88.9712 31.224C89.7146 31.224 90.3755 31.0588 90.9537 30.7284C91.6145 30.398 92.0275 29.9024 92.2753 29.4068L95.3317 30.2328C94.836 31.3066 94.01 32.1327 92.8536 32.8761C91.6971 33.5369 90.3755 33.8673 88.8886 33.8673C87.8148 33.8673 86.7409 33.7021 85.9149 33.2891C85.0889 32.8761 84.2628 32.3805 83.602 31.7197C82.9412 31.0588 82.4456 30.3154 82.1151 29.4068C81.7847 28.5807 81.6195 27.6721 81.6195 26.6809C81.6195 25.6896 81.7847 24.781 82.1151 23.8724C82.4456 22.9637 82.9412 22.2203 83.602 21.5595C84.2628 20.8986 85.0063 20.403 85.9149 19.99C86.8235 19.577 87.8148 19.4118 88.9712 19.4118C90.1277 19.4118 91.1189 19.577 92.0275 19.99C92.9362 20.403 93.6796 20.8986 94.3404 21.5595C94.836 22.3029 95.2491 23.0463 95.5795 23.8724ZM92.4405 25.4418C92.3579 24.368 91.9449 23.5419 91.2841 22.9637C90.6233 22.3855 89.7972 22.0551 88.806 22.0551C88.3104 22.0551 87.8974 22.1377 87.4844 22.3029C87.0713 22.4681 86.7409 22.7159 86.4105 22.9637C86.0801 23.2115 85.8323 23.6245 85.6671 24.0376C85.5019 24.4506 85.3367 24.9462 85.3367 25.4418H92.4405ZM107.144 19.7422L103.84 30.5632L100.123 19.7422H96.4881L101.94 33.6195C101.775 34.1978 101.61 34.6934 101.444 35.1064C101.279 35.5194 101.114 35.7672 100.949 36.015C100.783 36.2628 100.618 36.428 100.453 36.5106C100.288 36.5933 100.04 36.6759 99.7922 36.6759C99.627 36.6759 99.3792 36.6759 99.0488 36.5933C98.801 36.5106 98.4706 36.5106 98.1402 36.428V39.4844C98.4706 39.567 98.801 39.6496 99.0488 39.7322C99.3792 39.8148 99.627 39.8148 99.8748 39.8148C101.114 39.8148 102.105 39.4844 102.849 38.9061C103.675 38.3279 104.253 37.5019 104.583 36.5106L110.365 19.9074H107.144V19.7422Z' fill='white'%3E%3C/path%3E%3Cpath d='M109.787 29.7372C110.035 29.9024 110.448 30.0676 111.026 30.3154C111.605 30.5632 112.265 30.6458 113.009 30.6458C113.752 30.6458 114.33 30.4806 114.743 30.2328C115.156 29.985 115.487 29.572 115.735 29.0764C115.983 28.5807 116.148 27.9199 116.148 27.0939C116.23 26.3504 116.23 25.3592 116.23 24.368V14.786H119.865V24.368C119.865 25.7722 119.782 27.0939 119.617 28.2503C119.452 29.4068 119.121 30.398 118.626 31.224C118.13 32.0501 117.469 32.7109 116.561 33.1239C115.652 33.5369 114.413 33.7847 112.844 33.7847C111.274 33.7847 109.87 33.3717 108.796 32.6283L109.787 29.7372ZM134.899 19.7422C134.816 19.6596 134.568 19.4118 134.238 19.2466C133.907 19.0814 133.494 18.8336 133.081 18.5857C132.586 18.4205 132.09 18.1727 131.595 18.0901C131.016 17.9249 130.521 17.8423 129.942 17.8423C128.951 17.8423 128.208 18.0075 127.712 18.4205C127.217 18.7509 126.969 19.3292 126.969 19.99C126.969 20.403 127.051 20.7334 127.217 20.9812C127.382 21.229 127.63 21.4769 128.043 21.6421C128.373 21.8073 128.869 21.9725 129.364 22.1377C129.942 22.3029 130.521 22.4681 131.264 22.6333C132.173 22.8811 132.999 23.1289 133.742 23.4593C134.486 23.7071 135.146 24.1202 135.642 24.5332C136.138 24.9462 136.551 25.4418 136.881 26.02C137.129 26.5983 137.294 27.3417 137.294 28.1677C137.294 29.159 137.129 30.0676 136.716 30.7284C136.303 31.4719 135.807 32.0501 135.146 32.4631C134.486 32.8761 133.742 33.2065 132.916 33.4543C132.09 33.6195 131.182 33.7847 130.273 33.7847C128.869 33.7847 127.464 33.5369 126.06 33.1239C124.656 32.7109 123.417 32.1327 122.343 31.3066L123.995 28.1677C124.16 28.3329 124.408 28.4981 124.821 28.8285C125.234 29.0764 125.73 29.3242 126.308 29.572C126.886 29.8198 127.464 30.0676 128.208 30.2328C128.869 30.398 129.612 30.4806 130.355 30.4806C132.338 30.4806 133.329 29.8198 133.329 28.5807C133.329 28.1677 133.247 27.8373 132.999 27.5895C132.751 27.3417 132.421 27.0939 132.008 26.8461C131.595 26.5983 131.099 26.4331 130.438 26.2678C129.86 26.1026 129.199 25.9374 128.456 25.6896C127.547 25.4418 126.804 25.194 126.143 24.8636C125.482 24.5332 124.904 24.2028 124.491 23.8724C124.078 23.4593 123.747 23.0463 123.499 22.4681C123.252 21.9725 123.169 21.3117 123.169 20.5682C123.169 19.577 123.334 18.7509 123.665 18.0075C123.995 17.2641 124.491 16.6859 125.151 16.1903C125.812 15.6946 126.473 15.2816 127.299 15.0338C128.125 14.786 129.034 14.6208 129.942 14.6208C131.264 14.6208 132.503 14.8686 133.577 15.2816C134.651 15.6946 135.642 16.1902 136.468 16.7685L134.899 19.7422Z' fill='white'%3E%3C/path%3E%3C/svg%3E",
      "logoWidth": "600px",
      "logoHeight": "auto",
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
    };
    await setJSON(json);
    await takeElementScreenshot("logo-big-image.png", Selector(".svc-designer-header"), t, comparer);
  });
});

test("Logo image hover", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1900);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "text",
          name: "q1"
        },
      ],
    };
    await setJSON(json);
    await t.hover(".svc-logo-image-placeholder");
    await takeElementScreenshot("logo-image-hover.png", Selector(".svc-logo-image-placeholder"), t, comparer);
  });
});
test("Logo image loading", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1900);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "text",
          name: "q1"
        },
      ],
    };
    await setJSON(json);
    await ClientFunction(() => {
      (window as any).creator.onUploadFile.add((_, opt) => {
        setTimeout(() => {
          opt.callback("success", "");
        }, 1000000);
      });
    })();
    await ClientFunction(() => {
      (window as any).creator.onOpenFileChooser.add((s, o) => {
        o.callback([{}]);
      });
    })();
    await t.click(Selector(".svc-logo-image"));
    await ClientFunction(() => {
      (<HTMLElement>document.querySelector(".sd-loading-indicator .sv-svg-icon")).style.animation = "none";
    })();
    await takeElementScreenshot("logo-image-loading.png", Selector(".svc-logo-image__loading"), t, comparer);
  });
});

test("Logo image adorners", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1900);
    const json = {
      showQuestionNumbers: "on",
      logo: upArrowImageLink,
      elements: [
        {
          type: "text",
          name: "q1"
        },
      ],
    };
    await setJSON(json);
    await takeElementScreenshot("logo-image-adorners.png", Selector(".svc-logo-image"), t, comparer);
    await t.hover(Selector(".svc-logo-image-container"));
    await takeElementScreenshot("logo-image-adorners-hover.png", Selector(".svc-logo-image"), t, comparer);
    await t.hover(Selector(".svc-logo-image-container .svc-context-button"));
    await takeElementScreenshot("logo-image-adorners-choose-hover.png", Selector(".svc-logo-image"), t, comparer);
    await t.hover(Selector(".svc-logo-image-container .svc-context-button--danger"));
    await takeElementScreenshot("logo-image-adorners-clear-hover.png", Selector(".svc-logo-image"), t, comparer);
  });
});

test("Check survey layout in mobile mode", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(550, 900);
    const designerTabContent = Selector(".svc-tab-designer");
    await setJSON({
      "title": "Survey title",
      "description": "Survey description",
      "showQuestionNumbers": "off",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question11"
            },
            {
              "type": "matrix",
              "name": "question1",
              "columns": [
                "Column 1",
                "Column 2",
              ],
              "rows": [
                "Row 1",
                "Row 2"
              ]
            }
          ],
        }
      ]
    });
    await takeElementScreenshot("designer-survey-layout-mobile.png", designerTabContent, t, comparer);
  });
});

test("Check property grid flyout", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setShowToolbox(false);
    await setShowAddQuestionButton(false);
    await t.resizeWindow(1120, 900);
    const root = Selector(".svc-creator");
    await setJSON({});
    await t.click(surveySettingsButtonSelector);
    await takeElementScreenshot("propery-grid-flyout.png", root, t, comparer);
  });
});

test("Check question adorner width", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page2",
          "elements": [
            {
              "type": "panel",
              "name": "panel1",
              "elements": [
                {
                  "type": "dropdown",
                  "name": "qty_n",
                  "minWidth": "100px",
                  "choices": [
                    "1"
                  ]
                },
                {
                  "type": "dropdown",
                  "name": "size_n",
                  "minWidth": "100px",
                  "startWithNewLine": false,
                  "choices": [
                    "S"
                  ]
                }
              ]
            },
            {
              "type": "panel",
              "name": "panel2",
              "elements": [
                {
                  "type": "dropdown",
                  "name": "qty_n2",
                  "minWidth": "100px",
                  "choices": [
                    "1"
                  ]
                },
                {
                  "type": "dropdown",
                  "name": "size_n2",
                  "minWidth": "100px",
                  "startWithNewLine": false,
                  "choices": [
                    "S"
                  ]
                }
              ],
              "startWithNewLine": false
            },
            {
              "type": "panel",
              "name": "panel3",
              "elements": [
                {
                  "type": "dropdown",
                  "name": "qty_n3",
                  "minWidth": "100px",
                  "choices": [
                    "1"
                  ]
                },
                {
                  "type": "dropdown",
                  "name": "size_n3",
                  "minWidth": "100px",
                  "startWithNewLine": false,
                  "choices": [
                    "S"
                  ]
                }
              ],
              "startWithNewLine": false
            }
          ]
        }
      ],
      "questionsOnPageMode": "singlePage",
      "widthMode": "static",
      "width": "1400"
    });
    await t.resizeWindow(1924, 1080);
    const root = Selector(".sd-page");
    await takeElementScreenshot("question-adorner-width.png", root, t, comparer);
  });
});

test("Check question scroll", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1952, 1080);
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page2",
          "elements": [
            {
              "type": "checkbox",
              "name": "promoter_features",
              "title": "What features do you value the most?",
              "isRequired": true,
              "validators": [
                {
                  "type": "answercount",
                  "text": "Please select two features maximum.",
                  "maxCount": 2
                }
              ],
              "choices": [
                "Performance",
                "Stability",
                "User Interface",
                "Complete Functionality"
              ],
              "showOtherItem": true,
              "otherText": "Other feature:",
              "colCount": 4
            }
          ]
        }
      ]
    });
    const root = Selector(".sd-page");
    await takeElementScreenshot("question-checkboxes-scroll.png", root, t, comparer);
  });
});
test("Check required question", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "elements": [
        {
          type: "text",
          name: "q1",
          title: "Question Title",
          isRequired: true
        }
      ]
    });
    const root = Selector(".svc-question__content");
    const stringEditor = Selector(".svc-question__content .svc-string-editor");
    await takeElementScreenshot("question-required.png", root, t, comparer);
    await t.hover(stringEditor);
    await takeElementScreenshot("question-required-hover.png", root, t, comparer);
    await t.click(stringEditor);
    await takeElementScreenshot("question-required-focus.png", root, t, comparer);
  });
});

test("Character counter in property grid", async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    const showSidebarButton = Selector("[title='Show Panel']");

    await t.resizeWindow(1120, 900);

    await ClientFunction(() => {
      window["Survey"].Serializer.findProperty("question", "name").maxLength = 10;
      window["Survey"].Serializer.findProperty("question", "title").maxLength = 20;
    })();
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ],
              "showOtherItem": true
            }
          ]
        }
      ]
    });
    await t
      .click(Selector(".svc-question__content"))
      .click(showSidebarButton)
      .click(Selector("[data-name='name']").find("input"));
    await takeElementScreenshot("pg-maxLength-text.png", Selector(".spg-question__content").nth(0), t, comparer);

    await t.click(Selector("[data-name='title']").find("textarea"));
    await takeElementScreenshot("pg-maxLength-comment.png", Selector(".spg-question__content").nth(1), t, comparer);
  });
});

test("Character counter on surface", async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    const stringEditorSelector = Selector(".svc-string-editor__content");
    await t.resizeWindow(1120, 900);

    await ClientFunction(() => {
      window["Survey"].Serializer.findProperty("survey", "title").maxLength = 20;
      window["Survey"].Serializer.findProperty("question", "title").maxLength = 15;
    })();
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ],
              "showOtherItem": true
            }
          ]
        }
      ]
    });
    await t.click(stringEditorSelector.nth(0));
    await takeElementScreenshot("surface-survey-title-maxLength.png", stringEditorSelector.nth(0), t, comparer);

    await t
      .click(stringEditorSelector.nth(4))
      .click(stringEditorSelector.nth(4));
    await takeElementScreenshot("surface-question-title-maxLength.png", stringEditorSelector.nth(4), t, comparer);
  });
});
test("Check string editor on isRequired", async (t) => {
  const msg = "Please enter a value";
  await ClientFunction((json, msg) => {
    window["Survey"].Serializer.findProperty("survey", "title").isRequired = true;
    window["creator"].JSON = json;
  })({
    showQuestionNumbers: "on",
    title: "title",
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  }, msg);

  const hideCursor = ClientFunction(() => {
    const el: any = document.querySelectorAll(".svc-designer-header .sd-title .svc-string-editor .sv-string-editor")[0];
    el.style.color = "transparent";
  });

  const svStringSelector = Selector(".svc-designer-header .sd-title .svc-string-editor");
  await hideCursor();
  await wrapVisualTest(t, async (t, comparer) => {
    await t
      .click(svStringSelector)
      .pressKey("delete")
      .pressKey("enter")
      .expect((svStringSelector).hasClass("svc-string-editor--error")).ok();
    await takeElementScreenshot("surface-string-editor-error.png", Selector(".svc-designer-header .sd-title"), t, comparer);
  });
});

test("Question actions", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(400, 900);
    await setShowAddQuestionButton(false);
    const json = {
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
    };
    await setJSON(json);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();
    const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");
    const qContent = Selector(".svc-question__content");
    await t.click(qContent, { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("question-content-mobile-actions.png", pageContent, t, comparer);
  });
});

test("Keep scroll to selected on tab changed", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setShowToolbox(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await t.resizeWindow(1600, 900);
    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        { "name": "page1", "elements": [{ "type": "text", "name": "question1" }] },
        { "name": "page2", "elements": [{ "type": "text", "name": "question2" }] },
        { "name": "page3", "elements": [{ "type": "text", "name": "question3" }] },
        { "name": "page4", "elements": [{ "type": "text", "name": "question4" }] },
        { "name": "page5", "elements": [{ "type": "text", "name": "question5" }] },
      ]
    };
    await setJSON(json);
    await t.click(Selector("button.sv-action-bar-item[title=\"Survey\"]"), { offsetX: 5, offsetY: 5 });
    await t.click(getListItemByText("question5").filterVisible(), { offsetX: 5, offsetY: 5 });
    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await t.click(getTabbedMenuItemByText(creatorTabDesignerName));
    const root = Selector(".svc-creator");
    await setShowSidebar(false);
    await takeElementScreenshot("question-5-selected-in-view.png", root, t, comparer);
  });
});
test("Question actions on hover in mobile mode", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(400, 900);
    await setShowAddQuestionButton(false);
    const json = {
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
    };
    await setJSON(json);
    const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");
    const qContent = Selector(".svc-question__content");
    await t.hover(qContent, { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("question-content-mobile-actions-hover.png", pageContent, t, comparer);
  });
});

test("Question add type selector button", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1400, 900);
    const json = {
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
                  "type": "text",
                  "name": "question1"
                }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await t.hover(Selector(".svc-panel__add-new-question-container .svc-element__question-type-selector"));
    await takeElementScreenshot("question-add-type-selector-button-panel-hover.png", Selector(".svc-panel__add-new-question-container"), t, comparer);
    await ClientFunction(() => { (document.querySelector(".svc-panel__add-new-question-container .svc-element__question-type-selector") as HTMLDivElement).focus(); })();
    await takeElementScreenshot("question-add-type-selector-button-panel-focus.png", Selector(".svc-panel__add-new-question-container"), t, comparer);

    await t.hover(Selector(".svc-page__footer .svc-element__question-type-selector"));
    await takeElementScreenshot("question-add-type-selector-button-page-hover.png", Selector(".svc-page__footer .svc-element__add-new-question"), t, comparer);
    await ClientFunction(() => { (document.querySelector(".svc-page__footer .svc-element__question-type-selector") as HTMLDivElement).focus(); })();
    await takeElementScreenshot("question-add-type-selector-button-page-focus.png", Selector(".svc-page__footer .svc-element__add-new-question"), t, comparer);
  });
});

test("String editor whitespaces and linedreaks", async (t) => {
  await ClientFunction(() => {
    window["creator"].onSurveyInstanceCreated.add((sender, options) => {
      options.survey.onTextMarkdown.add((survey, options) => {
        if (options.element.name == "q1") options.html = options.text;
      });
    });
  })();

  await t.resizeWindow(1400, 900);

  await setJSON({
    showQuestionNumbers: "on",
    "elements": [
      {
        "type": "radiogroup",
        "name": "q1",
        "choices": ["a\nb\nc"]
      },
      {
        "type": "radiogroup",
        "name": "q2",
        "choices": ["a\nb\nc"]
      }
    ]
  });
  await wrapVisualTest(t, async (t, comparer) => {
    await takeElementScreenshot("string-editor-linebreaks-html.png", Selector(".svc-question__content").nth(0), t, comparer);
    await takeElementScreenshot("string-editor-linebreaks-plain.png", Selector(".svc-question__content").nth(1), t, comparer);
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

test("Check carry forward panel", async (t) => {
  await t.resizeWindow(1920, 1920);
  await setJSON(
    {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "checkbox",
              "name": "question2",
              "choicesFromQuestion": "question1",
              "choicesFromQuestionMode": "selected"
            },
            {
              "type": "checkbox",
              "name": "question3",
              "choicesFromQuestion": "question1",
              "choicesFromQuestionMode": "selected",
              "maxWidth": "200px",
              "minWidth": "200px",
            },
            {
              "type": "checkbox",
              "name": "question4",
              "choicesFromQuestion": "question1",
              "choicesFromQuestionMode": "selected",
              "maxWidth": "400px",
              "minWidth": "400px",
            }
          ]
        }
      ]
    });

  await wrapVisualTest(t, async (t, comparer) => {
    const rootSelector = Selector(".svc-question__adorner").nth(1);
    await takeElementScreenshot("carry-forward-panel.png", rootSelector, t, comparer);
    await takeElementScreenshot("carry-forward-panel-small.png", Selector(".svc-question__adorner").nth(2), t, comparer);
    await takeElementScreenshot("carry-forward-panel-medium.png", Selector(".svc-question__adorner").nth(3), t, comparer);
  });
});

test("Check carry forward panel ranking", async (t) => {
  await t.resizeWindow(1920, 1920);
  await setJSON(
    {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "ranking",
              "name": "question2",
              "choicesFromQuestion": "question1",
              "choicesFromQuestionMode": "selected"
            }
          ]
        }
      ]
    });

  await wrapVisualTest(t, async (t, comparer) => {
    const rootSelector = Selector(".svc-question__adorner").nth(1);
    await takeElementScreenshot("carry-forward-panel-ranking.png", rootSelector, t, comparer);
  });
});

test("Check carry forward panel ranking: selectToRank", async (t) => {
  await t.resizeWindow(1920, 1920);
  await setJSON(
    {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "ranking",
              "name": "question2",
              "choicesFromQuestion": "question1",
              "choicesFromQuestionMode": "selected",
              "selectToRankEnabled": true
            }
          ]
        }
      ]
    });

  await wrapVisualTest(t, async (t, comparer) => {
    const rootSelector = Selector(".svc-question__adorner").nth(1);
    await takeElementScreenshot("carry-forward-panel-ranking-select-to-rank.png", rootSelector, t, comparer);
  });
});

test("Check carry forward panel ranking: selectToRank vertical", async (t) => {
  await t.resizeWindow(1920, 1920);
  await setJSON(
    {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "ranking",
              "name": "question2",
              "choicesFromQuestion": "question1",
              "choicesFromQuestionMode": "selected",
              "selectToRankEnabled": true,
              "selectToRankAreasLayout": "vertical"
            }
          ]
        }
      ]
    });

  await wrapVisualTest(t, async (t, comparer) => {
    const rootSelector = Selector(".svc-question__adorner").nth(1);
    await takeElementScreenshot("carry-forward-panel-ranking-select-to-rank-vertical.png", rootSelector, t, comparer);
  });
});

test("Restful service banner", async (t) => {
  await t.resizeWindow(1920, 1920);
  await setJSON(
    {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "dropdown",
              "name": "country",
              "title": "Select a country",
              "description": "A full list of countries is queried from a RESTful web service.",
              "choicesByUrl": {
                "url": "https://surveyjs.io/api/CountriesExample",
                "valueName": "name"
              }
            }
          ]
        }
      ]
    });

  await wrapVisualTest(t, async (t, comparer) => {
    await t.click(Selector("span").withText("Go to settings"));
    const questionSelector = Selector(".svc-question__adorner").nth(0);
    await takeElementScreenshot("restful-question-banner.png", questionSelector, t, comparer);
    const propsSelector = Selector("[data-name=\"choicesByUrl\"]");
    await takeElementScreenshot("restful-properties.png", propsSelector, t, comparer);
  });
});

test("Question adorners - popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1767, 900);
    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question",
              "minWidth": "100px",
              "maxWidth": "150px",
              "title": "Q"
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();
    const designerTabContent = Selector(".svc-tab-designer");
    const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");
    const qContent = Selector(".svc-question__content");
    const qDots = Selector(".svc-question__content .sv-dots");
    await t.click(qContent, { offsetX: 5, offsetY: 5 });
    await t.click(qDots);
    await takeElementScreenshot("question-tiny-dots-popup.png", pageContent, t, comparer);
    await t.click(getListItemByText("Mark as required"));

    await t.click(qDots);
    await takeElementScreenshot("question-tiny-dots-popup-required.png", pageContent, t, comparer);
    await t.click(getListItemByText("Remove the required mark"));
  });
});
test("Question adorners for different sizes", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1767, 1900);
    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question",
              "minWidth": "100px",
              "maxWidth": "150px",
              "title": "Q"
            }
            ,
            {
              "type": "text",
              "name": "question1",
              "minWidth": "100px",
              "maxWidth": "250px",
              "title": "Q"
            },
            {
              "type": "text",
              "name": "question2",
              "minWidth": "100px",
              "maxWidth": "400px",
              "title": "Q"
            },
            {
              "type": "text",
              "name": "question3",
              "minWidth": "100px",
              "maxWidth": "500px",
              "title": "Q"
            }
            ,
            {
              "type": "text",
              "name": "question4",
              "minWidth": "100px",
              "maxWidth": "600px",
              "title": "Q"
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();
    const actions = Selector(".svc-question__content-actions");
    const qContent = Selector(".svc-question__content");
    await t.click(qContent.nth(0), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("question-tiny.png", qContent.nth(0), t, comparer);

    await t.click(qContent.nth(1), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("question-small.png", qContent.nth(1), t, comparer);

    await t.click(qContent.nth(2), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("question-medium.png", qContent.nth(2), t, comparer);

    await t.click(qContent.nth(3), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("question-big.png", qContent.nth(3), t, comparer);

    await t.click(qContent.nth(4), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("question-huge.png", qContent.nth(4), t, comparer);
  });
});

test("Question adorner - hide converter", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1767, 1900);
    await ClientFunction(() => {
      (<any>window).creator.onDefineElementMenuItems.add((sender, options) => {
        const convertToAction = options.items.filter(item => item.id === "convertTo")[0];
        options.items.splice(options.items.indexOf(convertToAction), 1);
      });
    })();
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "boolean",
          name: "question1"
        }
      ]
    };
    await setJSON(json);
    const qContent = Selector(".svc-question__content");
    await t.click(qContent.nth(0), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("question-adorner-with-hidden-converter.png", qContent.nth(0), t, comparer);
  });
});

test("Narrow question placeholder", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1000, 1000);
    const json = {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "question1",
              "maxWidth": "200px",
              "minWidth": "200px"
            },
            {
              "type": "panel",
              "name": "panel1z",
              "maxWidth": "200px",
              "minWidth": "200px",
              "title": "Title",
              "startWithNewLine": false,
              "isRequired": true
            },
            {
              "type": "paneldynamic",
              "name": "panel1",
              "maxWidth": "200px",
              "minWidth": "200px",
              "startWithNewLine": false,
              "isRequired": true
            },
            {
              "type": "html",
              "name": "question2",
              "maxWidth": "200px",
              "minWidth": "200px",
              "startWithNewLine": false
            },
            {
              "type": "image",
              "name": "question3",
              "maxWidth": "200px",
              "minWidth": "200px",
              "startWithNewLine": false
            },
            {
              "type": "panel",
              "name": "question1",
              "maxWidth": "400px",
              "minWidth": "400px"
            },
            {
              "type": "panel",
              "name": "panel11",
              "maxWidth": "400px",
              "minWidth": "400px",
              "title": "Title",
              "startWithNewLine": false,
              "isRequired": true
            },
            {
              "type": "paneldynamic",
              "name": "panel1",
              "maxWidth": "400px",
              "minWidth": "400px",
              "startWithNewLine": false,
              "isRequired": true
            },
            {
              "type": "html",
              "name": "question2",
              "maxWidth": "400px",
              "minWidth": "400px",
              "startWithNewLine": false
            },
            {
              "type": "image",
              "name": "question3",
              "maxWidth": "400px",
              "minWidth": "400px",
              "startWithNewLine": false
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();
    const qContent = Selector(".svc-question__content");
    await takeElementScreenshot("panel-placeholder.png", qContent.nth(0), t, comparer);
    await takeElementScreenshot("panel-title-placeholder.png", qContent.nth(1), t, comparer);

    await takeElementScreenshot("panel-dynamic-placeholder.png", qContent.nth(2), t, comparer);

    await takeElementScreenshot("html-placeholder.png", qContent.nth(3), t, comparer);

    await takeElementScreenshot("image-placeholder.png", qContent.nth(4), t, comparer);

    await takeElementScreenshot("panel-placeholder-medium.png", qContent.nth(5), t, comparer);

    await takeElementScreenshot("panel-title-placeholder-medium.png", qContent.nth(6), t, comparer);

    await takeElementScreenshot("panel-dynamic-placeholder-medium.png", qContent.nth(7), t, comparer);

    await takeElementScreenshot("html-placeholder-medium.png", qContent.nth(8), t, comparer);

    await takeElementScreenshot("image-placeholder-medium.png", qContent.nth(9), t, comparer);

  });
});

test("Narrow panel add question button", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1000, 1000);
    const json = {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "panel1",
              "elements": [
                {
                  "type": "text",
                  "name": "question1",
                  "title": "Q1"
                }
              ],
              "minWidth": "200px",
              "maxWidth": "250px"
            },
            {
              "type": "paneldynamic",
              "name": "panel2",
              "minWidth": "200px",
              "maxWidth": "250px",
              "startWithNewLine": false,
              "templateElements": [
                {
                  "type": "text",
                  "name": "question2",
                  "title": "Q2"
                }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();
    await takeElementScreenshot("panel-narrow-add.png", Selector(".svc-question__content--panel"), t, comparer);

    await takeElementScreenshot("panel-dynamic-narrow-add.png", Selector(".svc-question__content--paneldynamic"), t, comparer);
  });
});

test("Dynamic panels in multi-line", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1032, 1000);
    const json = {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "paneldynamic",
              "name": "question1",
              "startWithNewLine": false
            },
            {
              "type": "checkbox",
              "name": "question2",
              "startWithNewLine": false,
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4",
                "Item 5",
                "Item 6"
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();
    await takeElementScreenshot("panel-dynamic-in-multiline.png", Selector(".svc-row"), t, comparer);
  });
});

test("Panel title editor is fully visible", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1500, 1000);
    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "panel1",
              "title": "Panel Title"
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await t.click(Selector(".sv-string-editor").withText("Panel Title"));
    await takeElementScreenshot("panel-title-editing.png", Selector(".svc-question__content--panel"), t, comparer);
  });
});

test("Page placeholder without elements", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(770, 900);
    await setJSON({
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "title": "Page1"
        }
      ]
    });

    await takeElementScreenshot("page-placeholder-without-elements.png", Selector(".svc-page"), t, comparer);
  });
});

test("Check minimal height", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    changeToolboxScrolling(false);
    await changeToolboxSearchEnabled(false);
    await t.resizeWindow(1120, 900);
    const root = Selector(".svc-creator");
    await setJSON({});
    await ClientFunction(() => {
      const creator = document.getElementById("survey-creator");

      creator.style.bottom = "";
      creator.style.height = "1px";
    })();
    await takeElementScreenshot("creator-min-height.png", root, t, comparer);
  });
});

test("Composite question - check no scroll", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => {
      window["Survey"].ComponentCollection.Instance.add({
        name: "fullname",
        title: "Full Name",
        elementsJSON: [
          {
            type: "text",
            name: "firstName",
            title: "First Name",
            isRequired: true,
            minWidth: 200
          },
          {
            type: "text",
            name: "lastName",
            title: "Last Name",
            isRequired: true,
            minWidth: 200,
            startWithNewLine: false,
          }
        ],
      });
    })();
    await t.resizeWindow(1151, 900);
    await setJSON({
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "fullname",
              "name": "question1"
            }
          ]
        }
      ]
    });
    await t.hover(".sd-input.sd-text");
    await takeElementScreenshot("composite-question-no-scroll.png", Selector(".svc-question__adorner"), t, comparer);
  });
});

test("Check adorner actions responsivity after convert", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1432, 900);
    const root = Selector(".sd-page.sd-body__page");
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question2",
              "startWithNewLine": false
            },
            {
              "type": "text",
              "name": "question3",
              "startWithNewLine": false
            }
          ]
        }
      ]
    });
    await t.hover(Selector(".svc-question__adorner").nth(2), { offsetX: 10, offsetY: 10 }).click(Selector(".svc-question__adorner").nth(2), { offsetX: 10, offsetY: 10 }).click(Selector("#convertTo").nth(2))
      .click(getListItemByText("Yes/No (Boolean)"))
      .hover(Selector(".svc-question__adorner").nth(1), { offsetX: 10, offsetY: 10 }).click(Selector(".svc-question__adorner").nth(1), { offsetX: 10, offsetY: 10 })
      .hover(Selector(".svc-question__adorner").nth(2), { offsetX: 10, offsetY: 10 }).click(Selector(".svc-question__adorner").nth(2), { offsetX: 10, offsetY: 10 });
    await ClientFunction(() => { document.body.focus(); })();
    await t.wait(100);
    await takeElementScreenshot("actions-on-converted-question.png", root.nth(0), t, comparer);
  });
});

test("Question adorner - collapsed", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "text",
          name: "question1"
        },
        {
          type: "panel",
          name: "panel1"
        },
        {
          "type": "checkbox",
          "name": "question1",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ],
          "choicesByUrl": {
            "url": "#"
          }
        },
        {
          "type": "image",
          "name": "question2",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
        },
        {
          "type": "html",
          "name": "question3",
          "html": "HTML<br>\nLines"
        }
      ]
    };
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    const qContent = Selector(".svc-question__content");
    const qCollapseButton = Selector(".svc-question__content #collapse");
    await t.click(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-adorner-collapsed.png", qContent.nth(0), t, comparer);
    await t.click(qContent.nth(1), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("panel-adorner-collapsed.png", qContent.nth(1), t, comparer);
    await t.click(qContent.nth(2), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-carry-forward-collapsed.png", qContent.nth(2), t, comparer);
    await t.click(qContent.nth(3), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-image-collapsed.png", qContent.nth(3), t, comparer);
    await t.click(qContent.nth(4), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-html-collapsed.png", qContent.nth(4), t, comparer);

    await t.click(Selector(".svc-tabbed-menu-item").withText("Preview"));
    await t.click(Selector(".svc-tabbed-menu-item").withText("Designer"));
    await takeElementScreenshot("question-adorner-collapsed-first-render.png", qContent.nth(0), t, comparer);
    await takeElementScreenshot("panel-adorner-collapsed-first-render.png", qContent.nth(1), t, comparer);
  });
});

test("Question adorner - no title collapsed", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "titleLocation": "hidden"
            },
            {
              "type": "paneldynamic",
              "name": "question4",
              "titleLocation": "hidden"
            },
            {
              "type": "html",
              "name": "question2"
            },
            {
              "type": "image",
              "name": "question3",
              "imageFit": "cover",
              "imageHeight": "auto",
              "imageWidth": "100%"
            }
          ]
        }
      ]
    };
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    const qContent = Selector(".svc-question__content");
    const qCollapseButton = Selector(".svc-question__content #collapse");
    await t.click(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-adorner-no-title-collapsed.png", qContent.nth(0), t, comparer);
    await t.click(qContent.nth(1), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("panel-dynamic-adorner-no-title-collapsed.png", qContent.nth(1), t, comparer);
    await t.click(qContent.nth(2), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-html-adorner-no-title-collapsed.png", qContent.nth(2), t, comparer);
    await t.click(qContent.nth(3), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-image-adorner-no-title-collapsed.png", qContent.nth(3), t, comparer);
  });
});

test("Page adorner - collapsed", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1000, 600);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "expression",
          name: "question1"
        }
      ]
    };
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    const qContent = Selector(".svc-page__content");
    const qCollapseButton = Selector(".svc-page__content #collapse");
    await t.hover(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.expect(qContent.nth(0).hasClass("svc-hovered")).ok();
    await takeElementScreenshot("page-adorner-expanded.png", ".svc-tab-designer_content", t, comparer);
    await t.click(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await resetHoverToCreator(t);
    await takeElementScreenshot("page-adorner-collapsed-selected.png", ".svc-tab-designer_content", t, comparer);
    await t.click(".svc-tab-designer_content", { offsetX: 1, offsetY: 1 });
    await takeElementScreenshot("page-adorner-collapsed.png", ".svc-tab-designer_content", t, comparer);
  });
});

test("Question adorner - collapsed mobile", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(551, 1080);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "text",
          name: "question1"
        },
        {
          type: "panel",
          name: "panel1"
        }
      ]
    };
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    const qContent = Selector(".svc-question__content");
    const qCollapseButton = Selector(".svc-question__content #collapse");
    await t.click(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-adorner-collapsed-mobile.png", qContent.nth(0), t, comparer);
    await t.click(qContent.nth(1), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("panel-adorner-collapsed-mobile.png", qContent.nth(1), t, comparer);

    await t.click(Selector(".svc-creator"), { offsetX: 1, offsetY: 1 });
    await takeElementScreenshot("question-adorner-collapsed-unselected.png", qContent.nth(0), t, comparer);
    await takeElementScreenshot("panel-adorner-collapsed-unselected.png", qContent.nth(1), t, comparer);
  });
});

test("Page adorner - collapsed mobile", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(551, 1080);
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            }
          ]
        },
        {
          "name": "page3",
          "elements": [
            {
              "type": "text",
              "name": "question3"
            }
          ]
        }
      ]
    };
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    const qContent = Selector(".svc-page__content");
    const qCollapseButton = Selector(".svc-page__content #collapse");
    await t.click(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await t.click(qContent.nth(1), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible().nth(1));
    await resetHoverToCreator(t, 0, -1);
    await takeElementScreenshot("page-adorner-collapsed-mobile.png", ".svc-tab-designer_content", t, comparer);
  });
});
test("Question types with subtypes", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1000, 700);
    await setShowToolbox(false);

    await t
      .click(Selector(".svc-element__question-type-selector"))
      .hover(getListItemByText("Rating Scale").filterVisible())
      .wait(400)
      .hover(getListItemByText("Labels").nth(1));
    await takeElementScreenshot("question-type-rating-subtypes.png", Selector(".sv-popup--menu-popup").filterVisible(), t, comparer);
  });
});

test("Check page selection when width mode is responsive", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t
      .resizeWindow(1920, 1080);
    const json = {
      showQuestionNumbers: "on",
      widthMode: "responsive",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "text",
            }
          ]
        }
      ]
    };
    await setAllowEditSurveyTitle(false);
    await setJSON(json);
    const rootSelector = Selector(".svc-tab-designer");
    await t.click(".svc-page", { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("page-selected-responsive.png", rootSelector, t, comparer);
  });
});

test("Collapse all and expand all toolbar", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(912, 1080);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "text",
          name: "question1"
        },
        {
          type: "panel",
          name: "panel1"
        }
      ]
    };
    await setShowToolbox(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await setShowSidebar(false);
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    await t.click("#lockQuestions");
    await t.hover("#collapseAll");
    await takeElementScreenshot("design-surface-toolbar.png", Selector(".svc-tab-designer"), t, comparer);

    await setAllowZoom(true);
    await t.hover("#zoomOut");
    await takeElementScreenshot("design-surface-toolbar-with-zoom.png", Selector(".svc-tab-designer__surface-toolbar"), t, comparer);
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

test("Question description bottom", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1024, 800);

    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "description": "Description",
              "descriptionLocation": "underInput"
            }
          ]
        }
      ]
    };
    await setJSON(json);

    await t.click(Selector(".sv-string-editor").withText("Description"));
    const QRoot = Selector(".svc-question__adorner").filterVisible();
    await takeElementScreenshot("surface-question-bottom-description.png", QRoot, t, comparer);
  });
});

test("Scaling design surface", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => {
      window["creator"].allowZoom = true;
      window["creator"].showToolbox = false;
      window["creator"].showSidebar = false;
    })();
    const json = {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "rating", "name": "question1" },
            {
              "type": "dropdown",
              "name": "question2",
              "choices": ["Item 1", "Item 2", "Item 3"]
            },
            { "type": "boolean", "name": "question3" },
            { "type": "file", "name": "question4" },
            {
              "type": "panel",
              "name": "panel1"
            }
          ]
        }
      ]
    };
    await setJSON(json);
    const surfaceSelector = Selector(".svc-tab-designer_content > div");
    const qContent = Selector(".svc-question__content");
    await t.click(qContent, { offsetX: 5, offsetY: 5 });

    await t.resizeWindow(1024, 3700);
    for (let i = 0; i < 5; i++) { await t.click(Selector("#zoomOut").find("button")); }
    await t.resizeWindow(600, 1900);
    await takeElementScreenshot("design-surface-zoom-out.png", surfaceSelector, t, comparer);
  });
});

test("Page hidden header and top toolbar", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t
      .resizeWindow(1920, 1080);
    const json = {
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
    };

    await ClientFunction((json) => {
      (window as any).Survey.settings.designMode.showEmptyTitles = false;
      (window as any).updateCreatorModel({ expandCollapseButtonVisibility: "never" }, json);
    })(json);

    const rootSelector = Selector(".svc-tab-designer");
    await t.click(".svc-page", { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("page-selected-hidden-header.png", rootSelector, t, comparer);
  });
});

test("Check question button states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await ClientFunction(() => {
      window["creator"].expandCollapseButtonVisibility = "never";
      window["creator"].onDefineElementMenuItems.add((_, options) => {
        if (options.obj["isPage"]) return;
        options.items.push({
          id: "isrequired2",
          title: "Required",
          enabled: false,
          iconName: "icon-required",
          action: () => { }
        });
      });
    })();
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "elements": [
        {
          type: "boolean",
          name: "q1",
          title: "Question Title"
        }
      ]
    });
    const button = Selector(".svc-required-action");
    const buttonDisabled = Selector(".svc-survey-element-toolbar__item:disabled");
    await t.click(Selector(".svc-question__content"));
    await takeElementScreenshot("question-button.png", button, t, comparer);
    await t.hover(button);
    await takeElementScreenshot("question-button-hover.png", button, t, comparer);
    await t.click(button);
    await takeElementScreenshot("question-button-checked.png", button, t, comparer);
    await t.click(button);
    await t.hover(Selector(".svc-question__content"));
    await takeElementScreenshot("question-button-after-click.png", button, t, comparer);
    await t.pressKey("tab shift+tab");
    await takeElementScreenshot("question-button-focused.png", button, t, comparer);
    await takeElementScreenshot("question-button-disabled.png", buttonDisabled, t, comparer);
    await t.hover(buttonDisabled);
    await takeElementScreenshot("question-button-disabled-hover.png", buttonDisabled, t, comparer);
    await ClientFunction(() => {
      const question = window["creator"].survey.getQuestionByName("q1");
      const adorner = window["SurveyCreatorCore"].QuestionAdornerViewModel.GetAdorner(question);
      adorner.getActionById("isrequired").pressed = true;
      adorner.getActionById("isrequired2").pressed = true;
    })();
    await takeElementScreenshot("question-button-pressed.png", button, t, comparer);
    await takeElementScreenshot("question-button-pressed-disabled.png", buttonDisabled, t, comparer);
  });
});

test("Check page button states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await ClientFunction(() => {
      window["creator"].onDefineElementMenuItems.add((_, options) => {
        if (!options.obj["isPage"]) return;
        options.items.push({
          id: "duplicate2",
          title: "Duplicate",
          enabled: false,
          iconSize: 16,
          iconName: "icon-copy-16x16",
          action: () => { }
        });
      });
    })();
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "elements": [
        {
          type: "text",
          name: "q1",
          title: "Question Title"
        }
      ]
    });
    const button = Selector(".svc-page-toolbar__item");
    const buttonDisabled = Selector(".svc-page-toolbar__item:disabled");
    await t.click(Selector(".svc-page__content"), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("page-button.png", button, t, comparer);
    await t.hover(button);
    await takeElementScreenshot("page-button-hover.png", button, t, comparer);
    await t.pressKey("tab");
    await takeElementScreenshot("page-button-focused.png", button, t, comparer);
    await takeElementScreenshot("page-button-disabled.png", buttonDisabled, t, comparer);
    await t.hover(buttonDisabled);
    await takeElementScreenshot("page-button-disabled-hover.png", buttonDisabled, t, comparer);
    await ClientFunction(() => {
      const page = window["creator"].survey.getPageByName("page1");
      const adorner = window["SurveyCreatorCore"].PageAdorner.GetAdorner(page);
      adorner.actionContainer.actions[0].pressed = true;
      adorner.actionContainer.actions[2].pressed = true;
    })();
    await takeElementScreenshot("page-button-pressed.png", button, t, comparer);
    await takeElementScreenshot("page-button-pressed-disabled.png", buttonDisabled, t, comparer);
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