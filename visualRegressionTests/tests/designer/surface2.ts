import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, takeElementScreenshot, addQuestionByAddQuestionButton, wrapVisualTest, getTabbedMenuItemByText, creatorTabPreviewName, creatorTabDesignerName, resetHoverToCreator, getPropertyGridCategory, generalGroupName, getListItemByText, surveySettingsButtonSelector, changeToolboxScrolling, changeToolboxSearchEnabled, getToolboxItemByAriaLabel, setAllowEditSurveyTitle, setShowAddQuestionButton, setExpandCollapseButtonVisibility, setShowToolbox, setShowSidebar, getSurveyListItemByText, upArrowImageLink, setAllowZoom } from "../../helper";

const title = "Designer surface";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
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
      .hover(Selector(".svc-question__adorner").nth(2), { offsetX: 10, offsetY: 10 }).click(Selector(".svc-question__adorner").nth(2), { offsetX: 10, offsetY: 10 })
      .hover(".svc-creator", { offsetX: 10, offsetY: 10 });
    await ClientFunction(() => { document.body.focus(); })();
    await t.wait(100);
    await takeElementScreenshot("actions-on-converted-question.png", root.nth(0), t, comparer);
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
