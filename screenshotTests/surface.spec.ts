import { url, compareScreenshot, test, expect, setJSON, setShowAddQuestionButton, setShowToolbox, setAllowEditSurveyTitle, setShowSidebar, getListItemByText, getTabbedMenuItemByText, creatorTabPreviewName, creatorTabDesignerName, setIsCompact, doDragDrop, resetHoverToCreator, resetFocusToBody } from "./helper";

const title = "Design Surface Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Check section", async ({ page }) => {
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

    await setJSON(page, surveyJSON);
    await compareScreenshot(page, ".svc-row .sd-row", "questions-in-one-row.png");
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
    await page.locator(".sv-action--convertTo").waitFor({ state: "visible" });
    await page.locator(".sv-action--convertTo").click();

    const popupContainer = page.locator(".sv-popup__container").filter({ visible: true });
    await expect(popupContainer).toBeVisible();
    await compareScreenshot(page, ".sv-popup__container", "convert-to-popup.png");
  });

  test("Test question type converter on page for panel - 1", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });

    const surveyJSON = {
      showQuestionNumbers: true,
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
    await page.locator(".sv-action--convertTo").waitFor({ state: "visible" });
    await page.locator(".sv-action--convertTo").click();

    const popupContainer = page.locator(".sv-popup__container").filter({ visible: true }).first();
    await expect(popupContainer).toBeVisible();
    await compareScreenshot(page, ".sv-popup__container", "convert-to-popup-panel.png");
  });

  test("Test question type converter on page for panel - 2", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });

    const surveyJSON = {
      showQuestionNumbers: true,
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
    await page.locator(".svc-element__question-type-selector").filter({ visible: true }).first().click();

    const popupContainer = page.locator(".sv-popup__container").filter({ visible: true });
    await expect(popupContainer).toBeVisible();
    await compareScreenshot(page, ".sv-popup__container", "convert-to-popup-panel-not-empty.png");
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
      window["Survey"]._setIsTouch(true);
      (window as any).creator.isTouch = true;
    });
    await setJSON(page, surveyJSON);
    await page.click(".svc-question__content", { position: { x: 5, y: 5 } });
    await page.locator(".sv-action--convertTo").waitFor({ state: "visible" });
    await page.locator(".sv-action--convertTo").click();

    const popupContainer = page.locator(".sv-popup__container").filter({ visible: true });
    await expect(popupContainer).toBeVisible();
    await resetFocusToBody(page);
    await compareScreenshot(page, ".sv-popup__container", "convert-to-popup-mobile.png");
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

    const popupContainer = page.locator(".sv-popup__container").filter({ visible: true });
    await expect(popupContainer).toBeVisible();
    await compareScreenshot(page, ".sv-popup__container", "select-type-popup.png");
  });

  test("Boolean no wrap", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const surveyJSON = {
      showQuestionNumbers: true,
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
    await page.locator(".sd-boolean__switch .sv-string-editor:has-text('Dashed-text')").filter({ visible: true }).click();
    await compareScreenshot(page, ".sd-boolean", "bool-no-wrap-edit.png");
  });

  test("Choices (Checkbox): Layout", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });

    const json = {
      showQuestionNumbers: true,
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
              "showOtherItem": true,
              "colCount": 2
            }
          ]
        }
      ]
    };
    await setJSON(page, json);

    const QRoot = page.locator(".svc-question__adorner").filter({ visible: true });
    await compareScreenshot(page, QRoot, "surface-checkbox-layout.png");
  });

  test("Choices (Tagbox): Layout", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });

    const surveyJSON = {
      showQuestionNumbers: true,
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "tagbox", "name": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"],
              "defaultValue": ["Item 2", "Item 3"]
            }
          ]
        }
      ]
    };
    await setJSON(page, surveyJSON);

    const QRoot = page.locator(".svc-question__adorner").filter({ visible: true });
    await compareScreenshot(page, QRoot, "surface-tagbox-default-layout.png");
  });

  test("Choices (Checkbox): Layout small screen", async ({ page }) => {
    await page.setViewportSize({ width: 500, height: 900 });
    const json = {
      showQuestionNumbers: true,
      pages: [
        {
          name: "page1",
          elements: [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": ["Item 1", "Item 2", "Item 3", "Item 4"],
              "showOtherItem": true,
              "colCount": 2
            }
          ]
        }
      ]
    };
    await setJSON(page, json);

    const QRoot = page.locator(".svc-question__adorner").filter({ visible: true });
    await compareScreenshot(page, QRoot, "surface-checkbox-layout-small-screen.png");
  });

  test("Question borders", async ({ page }) => {
    await page.setViewportSize({ width: 1232, height: 900 });
    const json = {
      showQuestionNumbers: true,
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

    await setShowToolbox(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await setJSON(page, json);
    await setShowSidebar(page, false);
    await setIsCompact(page, true);

    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");
    const qContent = page.locator(".svc-question__content");
    await compareScreenshot(page, pageContent, "question-content.png");

    await qContent.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await compareScreenshot(page, pageContent, "question-content-hover.png");

    await qContent.click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, pageContent, "question-content-click.png");
  });

  test("Question borders in panels", async ({ page }) => {
    await page.setViewportSize({ width: 1767, height: 1500 });
    const json = {
      showQuestionNumbers: true,
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
    await setJSON(page, json);
    await setIsCompact(page, true);

    const qContent = page.locator("[data-name=question7]");
    const panelContent = page.locator(".svc-question__content--panel .svc-question__content--panel");
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");

    await qContent.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await compareScreenshot(page, pageContent, "question-panel-content-hover.png");

    await panelContent.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await compareScreenshot(page, pageContent, "question-panel-inner-hover.png");
  });

  test("Panel empty", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const json = {
      showQuestionNumbers: true,
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
    await compareScreenshot(page, ".svc-question__content", "surface-empty-panel.png");
    await page.hover(".svc-panel__add-new-question");
    await compareScreenshot(page, ".svc-question__content", "surface-empty-panel-hover.png");
  });

  test("Panel not empty", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const json = {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "panel",
              "name": "panel1",
              "elements": [{ "type": "text", "name": "question1" }]
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    await compareScreenshot(page, ".svc-question__content", "surface-not-empty-panel.png");
    await page.hover(".svc-question__content div:has-text('Add Question')");
    await compareScreenshot(page, ".svc-question__content", "surface-not-empty-panel-hover.png");
  });

  test("Panel gap between items", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const json = {
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
                { "type": "text", "name": "question1" },
                { "type": "text", "name": "question2" }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    await compareScreenshot(page, ".svc-question__content", "surface-panel.png");
  });

  test("Panel multi-question row", async ({ page }) => {
    await page.setViewportSize({ width: 1956, height: 900 });
    const json = {
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
                { "type": "text", "name": "question1" },
                { "type": "text", "name": "question2", "startWithNewLine": false }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    await compareScreenshot(page, ".svc-question__content", "surface-panel-multi-row.png");

    const Question1 = page.locator("[data-sv-drop-target-survey-element=\"question1\"]");
    const Question2 = page.locator("[data-sv-drop-target-survey-element=\"question2\"]");
    const DragZoneQuestion1 = Question1.locator(".svc-question__drag-element");

    await Question1.click({ position: { x: 0, y: 20 } });
    await doDragDrop({ page, element: DragZoneQuestion1, target: Question2,
      options: {
        targetPosition: { x: 500, y: 20 }
      }
    });
    await resetHoverToCreator(page);
    await compareScreenshot(page, ".svc-question__content", "surface-panel-multi-row-question-selected.png");
  });

  test("Panel (small) with questions in row", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const json = {
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
                { "type": "text", "name": "question1" },
                { "type": "text", "name": "question2", "startWithNewLine": false }
              ],
              "maxWidth": "500px"
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    await compareScreenshot(page, ".svc-question__content--panel", "surface-panel-row.png");
  });

  test("Check question adorner width", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: true,
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
    await page.setViewportSize({ width: 1924, height: 1080 });
    const root = page.locator(".sd-page");
    await compareScreenshot(page, root, "question-adorner-width.png");
  });

  test("Check question scroll", async ({ page }) => {
    await page.setViewportSize({ width: 1952, height: 1080 });
    await setJSON(page, {
      showQuestionNumbers: true,
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
    const root = page.locator(".sd-page");
    await compareScreenshot(page, root, "question-checkboxes-scroll.png");
  });

  test("Check required question", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await setJSON(page, {
      showQuestionNumbers: true,
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
    const root = page.locator(".svc-question__content");
    const stringEditor = page.locator(".svc-question__content .svc-string-editor");
    await compareScreenshot(page, root, "question-required.png");
    await stringEditor.hover();
    await compareScreenshot(page, root, "question-required-hover.png");
    await stringEditor.click();
    await compareScreenshot(page, root, "question-required-focus.png");
  });

  test("Character counter on surface", async ({ page }) => {
    await page.setViewportSize({ width: 1120, height: 900 });
    await page.evaluate(() => {
      window["Survey"].Serializer.findProperty("survey", "title").maxLength = 20;
      window["Survey"].Serializer.findProperty("question", "title").maxLength = 15;
    });
    await setJSON(page, {
      showQuestionNumbers: true,
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
    const stringEditorSelector = page.locator(".svc-string-editor__content");
    await stringEditorSelector.nth(0).click();
    await compareScreenshot(page, stringEditorSelector.nth(0), "surface-survey-title-maxLength.png");

    await stringEditorSelector.nth(4).click();
    await stringEditorSelector.nth(4).click();
    await compareScreenshot(page, stringEditorSelector.nth(4), "surface-question-title-maxLength.png");
  });

  test("Question actions", async ({ page }) => {
    await page.setViewportSize({ width: 400, height: 900 });
    await setShowAddQuestionButton(page, false);
    await setIsCompact(page, true);
    const json = {
      showQuestionNumbers: true,
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
    await setJSON(page, json);
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");
    const qContent = page.locator(".svc-question__content");
    await qContent.click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, pageContent, "question-content-mobile-actions.png");
  });

  test("Keep scroll to selected on tab changed", async ({ page }) => {
    await setShowToolbox(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await page.setViewportSize({ width: 1600, height: 900 });
    const json = {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        { "name": "page1", "elements": [{ "type": "text", "name": "question1" }] },
        { "name": "page2", "elements": [{ "type": "text", "name": "question2" }] },
        { "name": "page3", "elements": [{ "type": "text", "name": "question3" }] },
        { "name": "page4", "elements": [{ "type": "text", "name": "question4" }] },
        { "name": "page5", "elements": [{ "type": "text", "name": "question5" }] },
      ]
    };
    await setJSON(page, json);
    await page.locator("button.sv-action-bar-item[title=\"Survey\"]").click({ position: { x: 5, y: 5 } });
    await getListItemByText(page, "question5").filter({ visible: true }).click({ position: { x: 5, y: 5 } });
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    const root = page.locator(".svc-creator");
    await setShowSidebar(page, false);
    await compareScreenshot(page, root, "question-5-selected-in-view.png");
  });

  test("Question actions on hover in mobile mode", async ({ page }) => {
    await page.setViewportSize({ width: 400, height: 900 });
    await setShowAddQuestionButton(page, false);
    const json = {
      showQuestionNumbers: true,
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
    await setJSON(page, json);
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");
    const qContent = page.locator(".svc-question__content");
    await qContent.hover({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, pageContent, "question-content-mobile-actions-hover.png");
  });

  test("Question add type selector button", async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 });
    const json = {
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
    await page.locator(".svc-panel__add-new-question-container .svc-element__question-type-selector").hover();
    await compareScreenshot(page, page.locator(".svc-panel__add-new-question-container"), "question-add-type-selector-button-panel-hover.png");
    await page.evaluate(() => { (document.querySelector(".svc-panel__add-new-question-container .svc-element__question-type-selector") as HTMLDivElement).focus(); });
    await compareScreenshot(page, page.locator(".svc-panel__add-new-question-container"), "question-add-type-selector-button-panel-focus.png");

    await page.locator(".svc-page__footer .svc-element__question-type-selector").first().hover();
    await compareScreenshot(page, page.locator(".svc-page__footer .svc-element__add-new-question"), "question-add-type-selector-button-page-hover.png");
    await page.evaluate(() => { (document.querySelector(".svc-page__footer .svc-element__question-type-selector") as HTMLDivElement).focus(); });
    await compareScreenshot(page, page.locator(".svc-page__footer .svc-element__add-new-question"), "question-add-type-selector-button-page-focus.png");
  });

  test("String editor whitespaces and linedreaks", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].onSurveyInstanceCreated.add((sender, options) => {
        options.survey.onTextMarkdown.add((survey, options) => {
          if (options.element.name == "q1") options.html = options.text;
        });
      });
    });

    await page.setViewportSize({ width: 1400, height: 900 });

    await setJSON(page, {
      showQuestionNumbers: true,
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
    await compareScreenshot(page, page.locator(".svc-question__content").nth(0), "string-editor-linebreaks-html.png");
    await compareScreenshot(page, page.locator(".svc-question__content").nth(1), "string-editor-linebreaks-plain.png");
  });

  test("Check carry forward panel", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await setJSON(page, {
      showQuestionNumbers: true,
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

    const rootSelector = page.locator(".svc-question__adorner").nth(1);
    await compareScreenshot(page, rootSelector, "carry-forward-panel.png");
    await compareScreenshot(page, page.locator(".svc-question__adorner").nth(2), "carry-forward-panel-small.png");
    await compareScreenshot(page, page.locator(".svc-question__adorner").nth(3), "carry-forward-panel-medium.png");
  });

  test("Check carry forward panel ranking", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await setJSON(page, {
      showQuestionNumbers: true,
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

    const rootSelector = page.locator(".svc-question__adorner").nth(1);
    await compareScreenshot(page, rootSelector, "carry-forward-panel-ranking.png");
  });

  test("Check carry forward panel ranking: selectToRank", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await setJSON(page, {
      showQuestionNumbers: true,
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

    const rootSelector = page.locator(".svc-question__adorner").nth(1);
    await compareScreenshot(page, rootSelector, "carry-forward-panel-ranking-select-to-rank.png");
  });

  test("Check carry forward panel ranking: selectToRank vertical", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await setJSON(page, {
      showQuestionNumbers: true,
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

    const rootSelector = page.locator(".svc-question__adorner").nth(1);
    await compareScreenshot(page, rootSelector, "carry-forward-panel-ranking-select-to-rank-vertical.png");
  });

  test("Restful service banner", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await setJSON(page, {
      showQuestionNumbers: true,
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
    await compareScreenshot(page, questionSelector, "restful-question-banner.png");
    const propsSelector = page.locator("[data-name=\"choicesByUrl\"]");
    await compareScreenshot(page, propsSelector, "restful-properties.png");
  });

  test("Question adorners - popup", async ({ page }) => {
    await page.setViewportSize({ width: 1767, height: 900 });
    const json = {
      showQuestionNumbers: true,
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
    await setJSON(page, json);
    await setIsCompact(page, true);

    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");
    const qContent = page.locator(".svc-question__content");
    const qDots = page.locator(".svc-question__content .sv-dots");
    await qContent.click({ position: { x: 5, y: 5 } });
    await qDots.click();
    await compareScreenshot(page, pageContent, "question-tiny-dots-popup.png");
    await page.click("text=Mark as required");

    await qDots.click();
    await compareScreenshot(page, pageContent, "question-tiny-dots-popup-required.png");
    await page.click("text=Remove the required mark");
  });

  test("Question adorners for different sizes", async ({ page }) => {
    await page.setViewportSize({ width: 1767, height: 1900 });
    const json = {
      showQuestionNumbers: true,
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
    await setJSON(page, json);
    await setIsCompact(page, true);

    const qContent = page.locator(".svc-question__content");
    await qContent.nth(0).click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, qContent.nth(0), "question-tiny.png");

    await qContent.nth(1).click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, qContent.nth(1), "question-small.png");

    await qContent.nth(2).click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, qContent.nth(2), "question-medium.png");

    await qContent.nth(3).click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, qContent.nth(3), "question-big.png");

    await qContent.nth(4).click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, qContent.nth(4), "question-huge.png");
  });

  test("Question adorner - hide converter", async ({ page }) => {
    await page.setViewportSize({ width: 1767, height: 1900 });
    await page.evaluate(() => {
      (window as any).creator.onElementGetActions.add((sender, options) => {
        const convertToAction = options.actions.filter(action => action.id === "convertTo")[0];
        options.actions.splice(options.actions.indexOf(convertToAction), 1);
      });
    });
    const json = {
      showQuestionNumbers: true,
      elements: [{ type: "boolean", name: "question1" }]
    };
    await setJSON(page, json);
    const qContent = page.locator(".svc-question__content");
    await qContent.nth(0).click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, qContent.nth(0), "question-adorner-with-hidden-converter.png");
  });

  test("Narrow question placeholder", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 1000 });
    const json = {
      showQuestionNumbers: true,
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
    await setJSON(page, json);
    await setIsCompact(page, true);

    const qContent = page.locator(".svc-question__content");
    await compareScreenshot(page, qContent.nth(0), "panel-placeholder.png");
    await compareScreenshot(page, qContent.nth(1), "panel-title-placeholder.png");

    await compareScreenshot(page, qContent.nth(2), "panel-dynamic-placeholder.png");

    await compareScreenshot(page, qContent.nth(3), "html-placeholder.png");

    await compareScreenshot(page, qContent.nth(4), "image-placeholder.png");

    await compareScreenshot(page, qContent.nth(5), "panel-placeholder-medium.png");

    await compareScreenshot(page, qContent.nth(6), "panel-title-placeholder-medium.png");

    await compareScreenshot(page, qContent.nth(7), "panel-dynamic-placeholder-medium.png");

    await compareScreenshot(page, qContent.nth(8), "html-placeholder-medium.png");

    await compareScreenshot(page, qContent.nth(9), "image-placeholder-medium.png");
  });

  test("Narrow panel add question button", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 1000 });
    const json = {
      showQuestionNumbers: true,
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
    await setJSON(page, json);
    await setIsCompact(page, true);

    await compareScreenshot(page, page.locator(".svc-question__content--panel"), "panel-narrow-add.png");
    await compareScreenshot(page, page.locator(".svc-question__content--paneldynamic"), "panel-dynamic-narrow-add.png");
  });

  test("Dynamic panels in multi-line", async ({ page }) => {
    await page.setViewportSize({ width: 1032, height: 1000 });
    const json = {
      showQuestionNumbers: true,
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
    await setJSON(page, json);
    await setIsCompact(page, true);
    await compareScreenshot(page, page.locator(".svc-row"), "panel-dynamic-in-multiline.png");
  });

  test("Panel title editor is fully visible", async ({ page }) => {
    await page.setViewportSize({ width: 1500, height: 1000 });
    const json = {
      showQuestionNumbers: true,
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
    await setJSON(page, json);
    await page.locator(".sv-string-editor").filter({ hasText: "Panel Title" }).click();
    await compareScreenshot(page, page.locator(".svc-question__content--panel"), "panel-title-editing.png");
  });

  test("Composite question - check no scroll", async ({ page }) => {
    await page.evaluate(() => {
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
    });
    await page.setViewportSize({ width: 1151, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "pages": [{ "name": "page1", "elements": [{ "type": "fullname", "name": "question1" }] }]
    });
    await page.locator(".svc-question__content--fullname").hover();
    await compareScreenshot(page, page.locator(".svc-question__adorner"), "composite-question-no-scroll.png");
  });

  test("Check adorner actions responsivity after convert", async ({ page }) => {
    await page.setViewportSize({ width: 1432, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "text", "name": "question1" },
            { "type": "text", "name": "question2", "startWithNewLine": false },
            { "type": "text", "name": "question3", "startWithNewLine": false }
          ]
        }
      ]
    });
    await page.locator(".svc-question__adorner").nth(2).hover({ position: { x: 10, y: 10 } });
    await page.locator(".svc-question__adorner").nth(2).click({ position: { x: 10, y: 10 } });
    await page.locator(".sv-action--convertTo").nth(2).click();
    await getListItemByText(page, "Yes/No (Boolean)").click();
    await page.locator(".svc-question__adorner").nth(1).hover({ position: { x: 10, y: 10 } });
    await page.locator(".svc-question__adorner").nth(1).click({ position: { x: 10, y: 10 } });
    await page.locator(".svc-question__adorner").nth(2).hover({ position: { x: 10, y: 10 } });
    await page.locator(".svc-question__adorner").nth(2).click({ position: { x: 10, y: 10 } });
    await page.locator(".svc-question__adorner").nth(2).scrollIntoViewIfNeeded();
    await page.hover(".svc-creator", { position: { x: 10, y: 10 } });
    await resetFocusToBody(page);
    await page.waitForTimeout(100);

    const root = page.locator(".sd-page.sd-body__page");
    await compareScreenshot(page, root.nth(0), "actions-on-converted-question.png");
  });

  test("Question types with subtypes", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 700 });
    await setShowToolbox(page, false);
    await page.locator(".svc-element__question-type-selector").click();
    await getListItemByText(page, "Rating Scale").hover();
    await page.waitForTimeout(400);
    await getListItemByText(page, "Labels").hover();
    await compareScreenshot(page, page.locator(".sv-popup--menu-popup").filter({ visible: true }), "question-type-rating-subtypes.png");
  });

  test("Question description bottom", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });

    const json = {
      showQuestionNumbers: true,
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
    await setJSON(page, json);

    await page.locator(".sv-string-editor").filter({ hasText: "Description" }).click();
    const QRoot = page.locator(".svc-question__adorner").filter({ visible: true });
    await compareScreenshot(page, QRoot, "surface-question-bottom-description.png");
  });

  test("Check question button states", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      window["creator"].expandCollapseButtonVisibility = "never";
      window["creator"].onElementGetActions.add((_, options) => {
        if (options.element["isPage"]) return;
        options.actions.push({
          id: "isrequired2",
          title: "Required",
          enabled: false,
          iconName: "icon-required",
          action: () => { }
        });
      });
    });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "elements": [{ type: "boolean", name: "q1", title: "Question Title" }]
    });
    const button = page.locator(".svc-required-action");
    const buttonDisabled = page.locator(".svc-survey-element-toolbar__item:disabled");
    await page.locator(".svc-question__content").click();
    await compareScreenshot(page, button, "question-button.png");
    await button.hover();
    await compareScreenshot(page, button, "question-button-hover.png");
    await button.click();
    await compareScreenshot(page, button, "question-button-checked.png");
    await button.click();
    await page.locator(".svc-question__content").hover();
    await compareScreenshot(page, button, "question-button-after-click.png");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Shift+Tab");
    await compareScreenshot(page, button, "question-button-focused.png");
    await compareScreenshot(page, buttonDisabled, "question-button-disabled.png");
    await buttonDisabled.hover();
    await compareScreenshot(page, buttonDisabled, "question-button-disabled-hover.png");
    await page.evaluate(() => {
      const question = window["creator"].survey.getQuestionByName("q1");
      const adorner = window["SurveyCreatorCore"].QuestionAdornerViewModel.GetAdorner(question);
      adorner.getActionById("isrequired").pressed = true;
      adorner.getActionById("isrequired2").pressed = true;
    });
    await compareScreenshot(page, button, "question-button-pressed.png");
    await compareScreenshot(page, buttonDisabled, "question-button-pressed-disabled.png");
  });

  test("Check question type dots selector", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    await page.evaluate(() => {
      window["creator"].onPageGetFooterActions.add((sender, options) => {
        const page = options.page;
        options.actions.push({
          id: "sv-nav-clear-page",
          title: "Clear Page",
          action: () => {
            alert("Clear Page");
          },
          css: "nav-button",
          innerCss: "sd-btn nav-input",
        });
      });
      window["creator"].JSON = {
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
        ],
        "headerView": "advanced"
      };
    });
    await compareScreenshot(page, ".sv-action-bar.svc-page__footer", "dots-type-selector-custom-button.png");
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
  test("String editor - long strings in short space", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
    await page.evaluate(() => {
      window["creator"].JSON = {
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "multipletext",
                "name": "question3",
                "maxWidth": "300px",
                "title": "Participant details",
                "items": [
                  {
                    "name": "item",
                    "title": "LongUnbreakableItem"
                  }
                ],
                "itemTitleWidth": "100"
              }
            ]
          }
        ],
        "widthMode": "static",
        "width": "800px"
      };
    });
    await compareScreenshot(page, ".sd-multipletext__item-container", "string-editor-long-string-short-space.png");
  });
  test("String editor focused - multiple text", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
    await page.evaluate(() => {
      window["creator"].JSON = {
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "multipletext",
                "name": "question1",
                "items": [
                  {
                    "name": "text1"
                  }
                ]
              }
            ]
          }
        ],
        "headerView": "advanced"
      };
    });
    await page.locator(".sd-multipletext__item-container .sv-string-editor").click();
    await compareScreenshot(page, ".sd-multipletext__item-container", "string-editor-focused-multiple-text.png");
  });
});
