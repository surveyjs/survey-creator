import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, takeElementScreenshot, addQuestionByAddQuestionButton, wrapVisualTest, getTabbedMenuItemByText, creatorTabPreviewName, creatorTabDesignerName, resetHoverToCreator, getToolboxItemByText, getPropertyGridCategory, generalGroupName, getListItemByText } from "../../helper";

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
      .click(Selector(".svc-page__content--new .svc-page__question-type-selector-icon"))
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

    const showControl = ClientFunction(() => {
      const el: any = document.querySelectorAll("td:nth-of-type(2) .svc-matrix-cell .svc-matrix-cell__question-controls")[0];
      el.style.display = "block";
    });

    await t
      .expect(Selector(".svc-question__content").exists).ok()
      .hover(row1Column1Cell, { speed: 0.5 });

    // TODO: remove this line after TestCafe implements workig hover
    await showControl();

    await t.click(editColumnButton);

    await takeElementScreenshot("matrix-cell-edit.png", Selector(".svc-matrix-cell__popup .sv-popup__container"), t, comparer);
  });
});

test("Matrix column", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const surveyJSON = {
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
    await t.resizeWindow(1920, 900);
    const surveyJSON = {
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
    const editColumnButton = Selector(".svc-matrix-cell__question-controls-button").filterVisible();

    const showControl = ClientFunction(() => {
      const el: any = document.querySelectorAll("td:nth-of-type(2) .svc-matrix-cell .svc-matrix-cell__question-controls")[0];
      el.style.display = "block";
    });

    await t
      .expect(Selector(".svc-question__content").exists).ok()
      .hover(row1Column1Cell, { speed: 0.5 });

    // TODO: remove this line after TestCafe implements workig hover
    await showControl();
    await takeElementScreenshot("matrix-cell-edit-bool.png", row1Column1Cell, t, comparer);
  });
});

test("Boolean no wrap", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const surveyJSON = {
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
      .hover(getToolboxItemByText("Multi-Select Dropdown"), { speed: 0.5 })
      .click(getToolboxItemByText("Multi-Select Dropdown"), { speed: 0.5 })
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory("Data"))
      .click(Selector("span").withExactText("Set Default Answer"))
      .click(Selector(".sv-popup--modal .sd-dropdown__filter-string-input"))
      .click(getListItemByText("Item 2"))
      .click(getListItemByText("Item 3"))
      .click(Selector(".sv-popup--modal button").withExactText("Apply"));

    const QRoot = Selector(".svc-question__adorner").filterVisible();
    await takeElementScreenshot("surface-tagbox-default-layout.png", QRoot, t, comparer);
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

test("Page and question borders", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1767, 900);
    const json = {
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
    const designerTabContent = Selector(".svc-tab-designer");
    const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");
    const qContent = Selector(".svc-question__content");
    await takeElementScreenshot("page-content.png", designerTabContent, t, comparer);
    await takeElementScreenshot("question-content.png", pageContent, t, comparer);
    await t.hover(pageContent, { offsetX: 5, offsetY: 5 }).wait(300);
    await takeElementScreenshot("page-content-hover.png", designerTabContent, t, comparer);
    await t.hover(qContent, { offsetX: 5, offsetY: 5 }).wait(300);
    await takeElementScreenshot("question-content-hover.png", pageContent, t, comparer);
    await t.hover(pageContent.find(".svc-page__add-new-question"));
    await takeElementScreenshot("question-add-hover.png", pageContent, t, comparer);
    await t.click(qContent, { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("question-content-click.png", pageContent, t, comparer);
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
    const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");
    await t.hover(qContent, { offsetX: 5, offsetY: 5 }).wait(300);
    await takeElementScreenshot("question-panel-content-hover.png", pageContent, t, comparer);
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
    await t.hover(Selector(".svc-question__content div").withText("Add Question"));
    await takeElementScreenshot("surface-empty-panel-hover.png", Selector(".svc-question__content"), t, comparer);
  });
});

test("Panel not empty", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const json = {
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
    await t.resizeWindow(1920, 900);
    const json = {
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

test("Matrix dynamic with detail", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const json = {
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
    await t.click(Selector(".sd-table__cell--detail-panel .svc-row").nth(0), { offsetX: -5, offsetY: -5 })
      .expect(Selector(".svc-question__content--selected").visible).ok();
    await takeElementScreenshot("surface-matrix-detail-two-questions-select.png", Selector(".svc-question__content"), t, comparer);
  });
});
test("Logo image hover", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1900);
    const json = {
      elements: [
        {
          type: "text",
          name: "q1"
        },
      ],
    };
    await setJSON(json);
    await t.hover(".svc-logo-image");
    await takeElementScreenshot("logo-image-hover.png", Selector(".svc-logo-image"), t, comparer);
  });
});
test("Logo image loading", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1900);
    const json = {
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
    await takeElementScreenshot("logo-image-loading.png", Selector(".svc-logo-image"), t, comparer);
  });
});

test("Logo image adorners", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1900);
    const json = {
      logo: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
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
    await t.resizeWindow(1120, 900);
    const root = Selector(".svc-creator");
    await setJSON({});
    await t.click(Selector("button[title='Open survey settings']"));
    await takeElementScreenshot("propery-grid-flyout.png", root, t, comparer);
  });
});

test("Check question adorner width", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON({
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
    const root = Selector(".sd-page");
    await takeElementScreenshot("question-adorner-width.png", root, t, comparer);
  });
});

test("Check question scroll", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON({
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
    const json = {
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
    await t.resizeWindow(1600, 900);
    const json = {
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
    await t.click(Selector(".sv-list__item span").withExactText("question5").filterVisible(), { offsetX: 5, offsetY: 5 });
    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await t.click(getTabbedMenuItemByText(creatorTabDesignerName));
    const root = Selector(".svc-creator");
    await takeElementScreenshot("question-5-selected-in-view.png", root, t, comparer);
  });
});
test("Question actions on hover in mobile mode", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(400, 900);
    const json = {
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
    await t.click(Selector(".svc-panel__question-type-selector"));
    await t.click(Selector(".svc-panel__question-type-selector")); // two clicks to set focus
    await takeElementScreenshot("question-add-type-selector-button-page-focus.png", Selector(".svc-panel__add-new-question-container"), t, comparer);
    await t.hover(Selector(".svc-panel__question-type-selector"));
    await takeElementScreenshot("question-add-type-selector-button-page-hover.png", Selector(".svc-panel__add-new-question-container"), t, comparer);
    await t.click(Selector(".svc-page__question-type-selector"));
    await t.click(Selector(".svc-page__question-type-selector")); // two clicks to set focus
    await takeElementScreenshot("question-add-type-selector-button-panel-focus.png", Selector(".svc-page__add-new-question"), t, comparer);
    await t.hover(Selector(".svc-page__question-type-selector"));
    await takeElementScreenshot("question-add-type-selector-button-panel-hover.png", Selector(".svc-page__add-new-question"), t, comparer);
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
    "elements": [
      {
        "type": "text",
        "name": "q1",
        "title": "a\nb\nc"
      },
      {
        "type": "text",
        "name": "q2",
        "title": "a\nb\nc"
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
    await t.click(Selector(".svc-matrix-cell__question-controls-button").filterVisible());
    await resetHoverToCreator(t);
    await takeElementScreenshot("matrix-dropdown-popup-rating.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
  });
});

test("Check carry forward panel", async (t) => {
  await t.resizeWindow(1920, 1920);
  await setJSON(
    {
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
            }
          ]
        }
      ]
    });

  await wrapVisualTest(t, async (t, comparer) => {
    const rootSelector = Selector(".svc-question__adorner").nth(1);
    await takeElementScreenshot("carry-forward-panel.png", rootSelector, t, comparer);
  });
});

test("Check carry forward panel ranking", async (t) => {
  await t.resizeWindow(1920, 1920);
  await setJSON(
    {
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

test("Question adorners - popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1767, 900);
    const json = {
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
    const requiredItem = Selector(".sv-list__item").withText("Required");
    await t.click(qContent, { offsetX: 5, offsetY: 5 });
    await t.click(qDots);
    await takeElementScreenshot("question-tiny-dots-popup.png", pageContent, t, comparer);
    await t.click(requiredItem);

    await t.click(qDots);
    await takeElementScreenshot("question-tiny-dots-popup-required.png", pageContent, t, comparer);
    await t.click(requiredItem);
  });
});
test("Question adorners for different sizes", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1767, 1900);
    const json = {
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
              "maxWidth": "200px",
              "title": "Q"
            }
            ,
            {
              "type": "text",
              "name": "question2",
              "minWidth": "100px",
              "maxWidth": "400px",
              "title": "Q"
            }
            ,
            {
              "type": "text",
              "name": "question3",
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
  });
});

test("Narrow question placeholder", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1000, 1000);
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "question1",
              "maxWidth": "250px"
            },
            {
              "type": "paneldynamic",
              "name": "panel1",
              "maxWidth": "250px",
              "startWithNewLine": false,
              "isRequired": true
            },
            {
              "type": "html",
              "name": "question2",
              "minWidth": "100px",
              "maxWidth": "250px",
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

    await takeElementScreenshot("panel-dynamic-placeholder.png", qContent.nth(1), t, comparer);

    await takeElementScreenshot("html-placeholder.png", qContent.nth(2), t, comparer);
  });
});
