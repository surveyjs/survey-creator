import { expect } from "@playwright/test";
import { url, compareScreenshot, test, setJSON, setShowSidebar, setShowAddQuestionButton, setAllowEditSurveyTitle, changeToolboxSearchEnabled, changeToolboxScrolling, getTabbedMenuItemByText, changeToolboxLocation, setDirRTL, getToolboxItemByText, setExpandCollapseButtonVisibility, resetHoverToCreator, setShowToolbox, setAllowZoom } from "./helper";

test.beforeEach(async ({ page }) => {
  await page.goto(`${url}`);
});

test("Test question type converter", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });

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
  await setJSON(page, surveyJSON);

  await page.click(".svc-question__content", { position: { x: 5, y: 5 } });
  await expect(page.locator("#convertTo")).toBeVisible();
  await page.click("#convertTo");
  await expect(page.locator(".sv-popup__container").filter({ hasText: "" })).toBeVisible();
  await expect(page.locator(".sv-popup__container").filter({ hasText: "" })).toHaveScreenshot("convert-to-popup.png");
});

test("Test question type converter on page for panel - 1", async ({ page }) => {
  await page.setViewportSize({ width: 1000, height: 800 });

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
  await setJSON(page, surveyJSON);

  await page.click(".svc-question__content", { position: { x: 5, y: 5 } });
  await expect(page.locator("#convertTo")).toBeVisible();
  await page.click("#convertTo");
  await expect(page.locator(".sv-popup__container").filter({ hasText: "" })).toBeVisible();
  await expect(page.locator(".sv-popup__container").filter({ hasText: "" })).toHaveScreenshot("convert-to-popup-panel.png");
});

test("Test question type converter on page for panel - 2", async ({ page }) => {
  await page.setViewportSize({ width: 1000, height: 800 });

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
  await setJSON(page, surveyJSON);

  //await page.locator(".svc-tab-designer").scrollTo({ y: 1000 });
  await expect(page.locator(".svc-element__question-type-selector")).toBeVisible();
  await page.click(".svc-element__question-type-selector");
  await expect(page.locator(".sv-popup__container").filter({ hasText: "" })).toBeVisible();
  await expect(page.locator(".sv-popup__container").filter({ hasText: "" })).toHaveScreenshot("convert-to-popup-panel-not-empty.png");
});

test("Test question type converter (mobile)", async ({ page }) => {
  await page.setViewportSize({ width: 599, height: 900 });

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
  await page.evaluate(() => {
    (window as any)["Survey"]._setIsTouch(true);
    (window as any).creator.isTouch = true;
  });
  await setJSON(page, surveyJSON);
  await page.click(".svc-question__content", { position: { x: 5, y: 5 } });
  await expect(page.locator("#convertTo")).toBeVisible();
  await page.click("#convertTo");
  await expect(page.locator(".sv-popup__container").filter({ hasText: "" })).toBeVisible();
  await page.evaluate(() => document.body.focus());
  await expect(page.locator(".sv-popup__container").filter({ hasText: "" })).toHaveScreenshot("convert-to-popup-mobile.png");
});

test("Test question type selector", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });

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
  await setJSON(page, surveyJSON);

  await page.click(".svc-page__content--new .svc-element__question-type-selector-icon");
  await expect(page.locator(".sv-popup__container").filter({ hasText: "" })).toBeVisible();
  await expect(page.locator(".sv-popup__container").filter({ hasText: "" })).toHaveScreenshot("select-type-popup.png");
});

test("Boolean no wrap", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 900 });
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
  await setJSON(page, surveyJSON);
  await page.click("span:has-text('Dashed-text')");
  await expect(page.locator(".sd-boolean")).toHaveScreenshot("bool-no-wrap-edit.png");
});

test("Choices (Checkbox): Layout", async ({ page }) => {
  await page.setViewportSize({ width: 2560, height: 1440 });

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
  await setJSON(page, json);

  const QRoot = page.locator(".svc-question__adorner").filter({ hasText: "" });
  await expect(QRoot).toHaveScreenshot("surface-checkbox-layout.png");
});

test("Choices (Tagbox): Layout", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.hover('[aria-label="Multi-Select Dropdown"]');
  await page.click('[aria-label="Multi-Select Dropdown"]');
  await page.click('[data-name="general"]');
  await page.click('[data-name="Data"]');
  await page.click("span:has-text('Set Default Answer')");
  await page.click(".sv-popup--modal-popup .sd-dropdown__filter-string-input");
  await page.click("text=Item 2");
  await page.click("text=Item 3");
  await page.click(".sv-popup--modal-popup button:has-text('Apply')");

  const QRoot = page.locator(".svc-question__adorner").filter({ hasText: "" });
  await expect(QRoot).toHaveScreenshot("surface-tagbox-default-layout.png");
});

test("Choices (Checkbox): Layout small screen", async ({ page }) => {
  await page.setViewportSize({ width: 500, height: 900 });
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
  await setJSON(page, json);

  const QRoot = page.locator(".svc-question__adorner").filter({ hasText: "" });
  await expect(QRoot).toHaveScreenshot("surface-checkbox-layout-small-screen.png");
});

test("Placeholder", async ({ page }) => {
  await page.setViewportSize({ width: 1767, height: 900 });
  const designerTabContent = page.locator(".svc-tab-designer");
  await page.evaluate(() => {
    (window as any).creator.toolbox.isCompact = true;
  });

  await expect(designerTabContent).toHaveScreenshot("surface-placeholder.png");
});

test("Placeholder with survey header", async ({ page }) => {
  await page.setViewportSize({ width: 1767, height: 900 });
  const designerTabContent = page.locator(".svc-tab-designer");
  await page.evaluate(() => {
    (window as any).creator.toolbox.isCompact = true;
    (window as any).creator.showHeaderInEmptySurvey = true;
  });

  await expect(designerTabContent).toHaveScreenshot("surface-placeholder-with-header.png");
});

test("Panel empty", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 900 });
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
  await setJSON(page, json);
  await expect(page.locator(".svc-question__content")).toHaveScreenshot("surface-empty-panel.png");
  await page.hover(".svc-panel__add-new-question");
  await expect(page.locator(".svc-question__content")).toHaveScreenshot("surface-empty-panel-hover.png");
});

test("Panel not empty", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 900 });
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
  await setJSON(page, json);
  await expect(page.locator(".svc-question__content")).toHaveScreenshot("surface-not-empty-panel.png");
  await page.hover(".svc-question__content div:has-text('Add Question')");
  await expect(page.locator(".svc-question__content")).toHaveScreenshot("surface-not-empty-panel-hover.png");
});

test("Panel gap between items", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 900 });
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
  await setJSON(page, json);
  await expect(page.locator(".svc-question__content")).toHaveScreenshot("surface-panel.png");
});

test("Panel multi-question row", async ({ page }) => {
  await page.setViewportSize({ width: 1956, height: 900 });
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
  await setJSON(page, json);
  await expect(page.locator(".svc-question__content")).toHaveScreenshot("surface-panel-multi-row.png");

  const Question1 = page.locator("[data-sv-drop-target-survey-element=\"question1\"]");
  const Question2 = page.locator("[data-sv-drop-target-survey-element=\"question2\"]");
  const DragZoneQuestion1 = Question1.locator(".svc-question__drag-element");

  await Question1.click({ position: { x: 10, y: 20 } });
  await DragZoneQuestion1.hover();
  //await page.dragAndDrop(DragZoneQuestion1, Question2, { targetPosition: { x: -80, y: 5 } });
  await page.hover(".svc-creator", { position: { x: 10, y: 10 } });

  await expect(page.locator(".svc-question__content")).toHaveScreenshot("surface-panel-multi-row-question-selected.png");
});

test("Panel (small) with questions in row", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 900 });
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
  await setJSON(page, json);
  await expect(page.locator(".svc-question__content--panel")).toHaveScreenshot("surface-panel-row.png");
});

test("Check survey layout in mobile mode", async ({ page }) => {
  await page.setViewportSize({ width: 550, height: 900 });
  const designerTabContent = page.locator(".svc-tab-designer");
  await setJSON(page, {
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
  await expect(designerTabContent).toHaveScreenshot("designer-survey-layout-mobile.png");
});

test("Check property grid flyout", async ({ page }) => {
  await page.setViewportSize({ width: 1120, height: 900 });
  const root = page.locator(".svc-creator");
  await setJSON(page, {});
  await page.click('[data-name="surveySettings"]');
  await expect(root).toHaveScreenshot("propery-grid-flyout.png");
});

test("Check string editor on isRequired", async ({ page }) => {
  const msg = "Please enter a value";
  await page.evaluate(([json, msg]) => {
    (window as any)["Survey"].Serializer.findProperty("survey", "title").isRequired = true;
    (window as any).creator.JSON = json;
  }, [{
    showQuestionNumbers: "on",
    title: "title",
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  }, msg]);

  await page.evaluate(() => {
    const el: any = document.querySelectorAll(".svc-designer-header .sd-title .svc-string-editor .sv-string-editor")[0];
    el.style.color = "transparent";
  });

  const svStringSelector = page.locator(".svc-designer-header .sd-title .svc-string-editor");
  await svStringSelector.click();
  await page.keyboard.press("Delete");
  await page.keyboard.press("Enter");
  await expect(svStringSelector).toHaveClass("svc-string-editor--error");
  await expect(page.locator(".svc-designer-header .sd-title")).toHaveScreenshot("surface-string-editor-error.png");
});

test("String editor whitespaces and linedreaks", async ({ page }) => {
  await page.evaluate(() => {
    (window as any).creator.onSurveyInstanceCreated.add((sender, options) => {
      options.survey.onTextMarkdown.add((survey, options) => {
        if (options.element.name == "q1") options.html = options.text;
      });
    });
  });

  await page.setViewportSize({ width: 1400, height: 900 });

  await setJSON(page, {
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
  await expect(page.locator(".svc-question__content").nth(0)).toHaveScreenshot("string-editor-linebreaks-html.png");
  await expect(page.locator(".svc-question__content").nth(1)).toHaveScreenshot("string-editor-linebreaks-plain.png");
});

test("Restful service banner", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1920 });
  await setJSON(page, {
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

  await page.click("span:has-text('Go to settings')");
  const questionSelector = page.locator(".svc-question__adorner").nth(0);
  await expect(questionSelector).toHaveScreenshot("restful-question-banner.png");
  const propsSelector = page.locator("[data-name=\"choicesByUrl\"]");
  await expect(propsSelector).toHaveScreenshot("restful-properties.png");
});

test("Check minimal height", async ({ page }) => {
  await page.setViewportSize({ width: 1120, height: 900 });
  const root = page.locator(".svc-creator");
  await setJSON(page, {});
  await page.evaluate(() => {
    const creator = document.getElementById("survey-creator");
    if (creator) {
      creator.style.bottom = "";
      creator.style.height = "1px";
    }
  });
  await expect(root).toHaveScreenshot("creator-min-height.png");
});

test("Multiple questions in one row, row content has scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.evaluate(() => {
    window["creator"].JSON = {
      "title": "WELD SHOP CHECKLIST",
      "pages": [
        {
          "name": "introInfo",
          "elements": [
            {
              "type": "panel",
              "name": "panel3",
              "elements": [
                {
                  "type": "text",
                  "name": "uctPartNum",
                  "title": "UCT Part Number"
                },
                {
                  "type": "text",
                  "name": "rev",
                  "startWithNewLine": false,
                  "title": "Rev"
                },
                {
                  "type": "text",
                  "name": "qty",
                  "startWithNewLine": false,
                  "title": "Qty"
                }
              ]
            },
            {
              "type": "text",
              "name": "date",
              "startWithNewLine": false,
              "title": "Date",
              "maskType": "datetime",
              "maskSettings": {
                "pattern": "mm-dd-yyyy"
              }
            },
            {
              "type": "panel",
              "name": "panel5",
              "startWithNewLine": false,
              "elements": [
                {
                  "type": "text",
                  "name": "woNum",
                  "title": "WO Number"
                },
                {
                  "type": "comment",
                  "name": "customer",
                  "title": "Customer"
                }
              ]
            },
            {
              "type": "boolean",
              "name": "fairRequires",
              "title": "If requires FAIR"
            }
          ]
        },
      ],
      "questionsOnPageMode": "singlePage"
    };
  });
  await compareScreenshot(page, ".sd-page__row.sd-row--multiple", "row-multiple-questions.png");
});

test("Check adorner actions responsivity after convert", async ({ page }) => {
  await page.setViewportSize({ width: 1432, height: 900 });
  const root = page.locator(".sd-page.sd-body__page");
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
  // await page.hover(page.locator(".svc-question__adorner").nth(2), { position: { x: 10, y: 10 } });
  // await page.click(page.locator(".svc-question__adorner").nth(2), { position: { x: 10, y: 10 } });
  // await page.click(page.locator("#convertTo").nth(2));
  // await page.click("text=Yes/No (Boolean)");
  // await page.hover(page.locator(".svc-question__adorner").nth(1), { position: { x: 10, y: 10 } });
  // await page.click(page.locator(".svc-question__adorner").nth(1), { position: { x: 10, y: 10 } });
  // await page.hover(page.locator(".svc-question__adorner").nth(2), { position: { x: 10, y: 10 } });
  // await page.click(page.locator(".svc-question__adorner").nth(2), { position: { x: 10, y: 10 } });
  // await page.hover(".svc-creator", { position: { x: 10, y: 10 } });
  await page.evaluate(() => { document.body.focus(); });
  await page.waitForTimeout(100);
  await expect(root.nth(0)).toHaveScreenshot("actions-on-converted-question.png");
});

test("Scaling design surface", async ({ page }) => {
  await page.evaluate(() => {
    (window as any).creator.allowZoom = true;
    (window as any).creator.showToolbox = false;
    (window as any).creator.showSidebar = false;
  });
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
  await setJSON(page, json);
  const surfaceSelector = page.locator(".svc-tab-designer_content > div");
  const qContent = page.locator(".svc-question__content");
  await qContent.click({ position: { x: 5, y: 5 } });

  await page.setViewportSize({ width: 1024, height: 3700 });
  for (let i = 0; i < 5; i++) {
    await page.click("#zoomOut button");
  }
  await page.setViewportSize({ width: 600, height: 1900 });
  await expect(surfaceSelector).toHaveScreenshot("design-surface-zoom-out.png");
});