import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, takeElementScreenshot, addQuestionByAddQuestionButton, wrapVisualTest } from "../../helper";

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
    await addQuestionByAddQuestionButton(t, "Multiple-Choice Matrix");
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
          width: "800px"
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
          width: "800px"
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
          width: "800px"
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
          width: "800px"
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
test.only("Check question scroll", async (t) => {
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
    await t.debug();
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
      .click(Selector("input[aria-label=\"Name\"]"));
    await takeElementScreenshot("pg-maxLength-text.png", Selector(".spg-question__content").nth(0), t, comparer);

    await t.click(Selector("textarea[aria-label=\"Title\"]"));
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