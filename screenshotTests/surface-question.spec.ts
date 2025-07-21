import { expect } from "@playwright/test";
import { url, compareScreenshot, test, setJSON, setShowSidebar, setShowAddQuestionButton, setAllowEditSurveyTitle, changeToolboxSearchEnabled, changeToolboxScrolling, getTabbedMenuItemByText, changeToolboxLocation, setDirRTL, getToolboxItemByText, setExpandCollapseButtonVisibility, resetHoverToCreator, setShowToolbox, setAllowZoom } from "./helper";

test.describe("Question surface", () => {
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
    await expect(page.locator(".svc-row .sd-row")).toHaveScreenshot("questions-in-one-row.png");
  });

  test("Question borders", async ({ page }) => {
    await page.setViewportSize({ width: 1232, height: 900 });
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
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");
    const qContent = page.locator(".svc-question__content");
    await expect(pageContent).toHaveScreenshot("question-content.png");

    await qContent.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await expect(pageContent).toHaveScreenshot("question-content-hover.png");

    await qContent.click({ position: { x: 5, y: 5 } });
    await expect(pageContent).toHaveScreenshot("question-content-click.png");
  });

  test("Question borders in panels", async ({ page }) => {
    await page.setViewportSize({ width: 1767, height: 1500 });
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
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });

    const qContent = page.locator("[data-name=question7]");
    const panelContent = page.locator(".svc-question__content--panel .svc-question__content--panel");
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");
    await qContent.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await expect(pageContent).toHaveScreenshot("question-panel-content-hover.png");
    await panelContent.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await expect(pageContent).toHaveScreenshot("question-panel-inner-hover.png");
  });

  test("Check question adorner width", async ({ page }) => {
    await setJSON(page, {
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
    await page.setViewportSize({ width: 1924, height: 1080 });
    const root = page.locator(".sd-page");
    await expect(root).toHaveScreenshot("question-adorner-width.png");
  });

  test("Check question scroll", async ({ page }) => {
    await page.setViewportSize({ width: 1952, height: 1080 });
    await setJSON(page, {
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
    const root = page.locator(".sd-page");
    await expect(root).toHaveScreenshot("question-checkboxes-scroll.png");
  });

  test("Check required question", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await setJSON(page, {
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
    const root = page.locator(".svc-question__content");
    const stringEditor = page.locator(".svc-question__content .svc-string-editor");
    await expect(root).toHaveScreenshot("question-required.png");
    await stringEditor.hover();
    await expect(root).toHaveScreenshot("question-required-hover.png");
    await stringEditor.click();
    await expect(root).toHaveScreenshot("question-required-focus.png");
  });

  test("Question actions", async ({ page }) => {
    await page.setViewportSize({ width: 400, height: 900 });
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
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");
    const qContent = page.locator(".svc-question__content");
    await qContent.click({ position: { x: 5, y: 5 } });
    await expect(pageContent).toHaveScreenshot("question-content-mobile-actions.png");
  });

  test("Keep scroll to selected on tab changed", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
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
    await setJSON(page, json);
    await page.locator("button.sv-action-bar-item[title=\"Survey\"]").click({ position: { x: 5, y: 5 } });
    await page.locator("text=question5").filter({ hasText: "question5" }).click({ position: { x: 5, y: 5 } });
    await page.locator("text=Preview").click();
    await page.locator("text=Designer").click();
    const root = page.locator(".svc-creator");
    await expect(root).toHaveScreenshot("question-5-selected-in-view.png");
  });

  test("Question actions on hover in mobile mode", async ({ page }) => {
    await page.setViewportSize({ width: 400, height: 900 });
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
    await setJSON(page, json);
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");
    const qContent = page.locator(".svc-question__content");
    await qContent.hover({ position: { x: 5, y: 5 } });
    await expect(pageContent).toHaveScreenshot("question-content-mobile-actions-hover.png");
  });

  test("Question add type selector button", async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 });
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
    await page.locator(".svc-panel__add-new-question-container .svc-element__question-type-selector").hover();
    await expect(page.locator(".svc-panel__add-new-question-container")).toHaveScreenshot("question-add-type-selector-button-panel-hover.png");
    await page.evaluate(() => {
      (document.querySelector(".svc-panel__add-new-question-container .svc-element__question-type-selector") as HTMLDivElement).focus();
    });
    await expect(page.locator(".svc-panel__add-new-question-container")).toHaveScreenshot("question-add-type-selector-button-panel-focus.png");

    await page.locator(".svc-page__footer .svc-element__question-type-selector").hover();
    await expect(page.locator(".svc-page__footer .svc-element__add-new-question")).toHaveScreenshot("question-add-type-selector-button-page-hover.png");
    await page.evaluate(() => {
      (document.querySelector(".svc-page__footer .svc-element__question-type-selector") as HTMLDivElement).focus();
    });
    await expect(page.locator(".svc-page__footer .svc-element__add-new-question")).toHaveScreenshot("question-add-type-selector-button-page-focus.png");
  });

  test("Question adorners - popup", async ({ page }) => {
    await page.setViewportSize({ width: 1767, height: 900 });
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
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");
    const qContent = page.locator(".svc-question__content");
    const qDots = page.locator(".svc-question__content .sv-dots");
    await qContent.click({ position: { x: 5, y: 5 } });
    await qDots.click();
    await expect(pageContent).toHaveScreenshot("question-tiny-dots-popup.png");
    await page.locator("text=Mark as required").click();

    await qDots.click();
    await expect(pageContent).toHaveScreenshot("question-tiny-dots-popup-required.png");
    await page.locator("text=Remove the required mark").click();
  });

  test("Question adorners for different sizes", async ({ page }) => {
    await page.setViewportSize({ width: 1767, height: 1900 });
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
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });
    const qContent = page.locator(".svc-question__content");
    await qContent.nth(0).click({ position: { x: 5, y: 5 } });
    await expect(qContent.nth(0)).toHaveScreenshot("question-tiny.png");

    await qContent.nth(1).click({ position: { x: 5, y: 5 } });
    await expect(qContent.nth(1)).toHaveScreenshot("question-small.png");

    await qContent.nth(2).click({ position: { x: 5, y: 5 } });
    await expect(qContent.nth(2)).toHaveScreenshot("question-medium.png");

    await qContent.nth(3).click({ position: { x: 5, y: 5 } });
    await expect(qContent.nth(3)).toHaveScreenshot("question-big.png");

    await qContent.nth(4).click({ position: { x: 5, y: 5 } });
    await expect(qContent.nth(4)).toHaveScreenshot("question-huge.png");
  });

  test("Question adorner - hide converter", async ({ page }) => {
    await page.setViewportSize({ width: 1767, height: 1900 });
    await page.evaluate(() => {
      (window as any).creator.onDefineElementMenuItems.add((sender, options) => {
        const convertToAction = options.items.filter(item => item.id === "convertTo")[0];
        options.items.splice(options.items.indexOf(convertToAction), 1);
      });
    });
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "boolean",
          name: "question1"
        }
      ]
    };
    await setJSON(page, json);
    const qContent = page.locator(".svc-question__content");
    await qContent.nth(0).click({ position: { x: 5, y: 5 } });
    await expect(qContent.nth(0)).toHaveScreenshot("question-adorner-with-hidden-converter.png");
  });

  test("Question types with subtypes", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 700 });
    await page
      .locator(".svc-element__question-type-selector")
      .click()
      .then(() => page.locator("text=Rating Scale").filter({ hasText: "Rating Scale" }).hover())
      .then(() => page.waitForTimeout(400))
      .then(() => page.locator("text=Labels").nth(1).hover());
    await expect(page.locator(".sv-popup--menu-popup").filter({ hasText: "" })).toHaveScreenshot("question-type-rating-subtypes.png");
  });

  test("Check question button states", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      (window as any).creator.expandCollapseButtonVisibility = "never";
      (window as any).creator.onDefineElementMenuItems.add((_, options) => {
        if (options.obj["isPage"]) return;
        options.items.push({
          id: "isrequired2",
          title: "Required",
          enabled: false,
          iconName: "icon-required",
          action: () => { }
        });
      });
    });
    await setJSON(page, {
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
    const button = page.locator(".svc-required-action");
    const buttonDisabled = page.locator(".svc-survey-element-toolbar__item:disabled");
    await page.locator(".svc-question__content").click();
    await expect(button).toHaveScreenshot("question-button.png");
    await button.hover();
    await expect(button).toHaveScreenshot("question-button-hover.png");
    await button.click();
    await expect(button).toHaveScreenshot("question-button-checked.png");
    await button.click();
    await page.locator(".svc-question__content").hover();
    await expect(button).toHaveScreenshot("question-button-after-click.png");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Shift+Tab");
    await expect(button).toHaveScreenshot("question-button-focused.png");
    await expect(buttonDisabled).toHaveScreenshot("question-button-disabled.png");
    await buttonDisabled.hover();
    await expect(buttonDisabled).toHaveScreenshot("question-button-disabled-hover.png");
    await page.evaluate(() => {
      const question = (window as any).creator.survey.getQuestionByName("q1");
      const adorner = (window as any).SurveyCreatorCore.QuestionAdornerViewModel.GetAdorner(question);
      adorner.getActionById("isrequired").pressed = true;
      adorner.getActionById("isrequired2").pressed = true;
    });
    await expect(button).toHaveScreenshot("question-button-pressed.png");
    await expect(buttonDisabled).toHaveScreenshot("question-button-pressed-disabled.png");
  });

  test("Character counter on surface", async ({ page }) => {
    const stringEditorSelector = page.locator(".svc-string-editor__content");
    await page.setViewportSize({ width: 1120, height: 900 });

    await page.evaluate(() => {
      (window as any).Survey.Serializer.findProperty("survey", "title").maxLength = 20;
      (window as any).Survey.Serializer.findProperty("question", "title").maxLength = 15;
    });
    await setJSON(page, {
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
    await stringEditorSelector.nth(0).click();
    await expect(stringEditorSelector.nth(0)).toHaveScreenshot("surface-survey-title-maxLength.png");

    await stringEditorSelector.nth(4).click();
    await stringEditorSelector.nth(4).click();
    await expect(stringEditorSelector.nth(4)).toHaveScreenshot("surface-question-title-maxLength.png");
  });

  test("Question description bottom", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });

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
    await setJSON(page, json);

    await page.locator(".sv-string-editor").filter({ hasText: "Description" }).click();
    const QRoot = page.locator(".svc-question__adorner").filter({ hasText: "" });
    await expect(QRoot).toHaveScreenshot("surface-question-bottom-description.png");
  });

  test("Check carry forward panel", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await setJSON(page, {
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

    const rootSelector = page.locator(".svc-question__adorner").nth(1);
    await expect(rootSelector).toHaveScreenshot("carry-forward-panel.png");
    await expect(page.locator(".svc-question__adorner").nth(2)).toHaveScreenshot("carry-forward-panel-small.png");
    await expect(page.locator(".svc-question__adorner").nth(3)).toHaveScreenshot("carry-forward-panel-medium.png");
  });

  test("Check carry forward panel ranking", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await setJSON(page, {
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

    const rootSelector = page.locator(".svc-question__adorner").nth(1);
    await expect(rootSelector).toHaveScreenshot("carry-forward-panel-ranking.png");
  });

  test("Check carry forward panel ranking: selectToRank", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await setJSON(page, {
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

    const rootSelector = page.locator(".svc-question__adorner").nth(1);
    await expect(rootSelector).toHaveScreenshot("carry-forward-panel-ranking-select-to-rank.png");
  });

  test("Check carry forward panel ranking: selectToRank vertical", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await setJSON(page, {
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

    const rootSelector = page.locator(".svc-question__adorner").nth(1);
    await expect(rootSelector).toHaveScreenshot("carry-forward-panel-ranking-select-to-rank-vertical.png");
  });

  test("Narrow question placeholder", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 1000 });
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
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });
    const qContent = page.locator(".svc-question__content");
    await expect(qContent.nth(0)).toHaveScreenshot("panel-placeholder.png");
    await expect(qContent.nth(1)).toHaveScreenshot("panel-title-placeholder.png");

    await expect(qContent.nth(2)).toHaveScreenshot("panel-dynamic-placeholder.png");

    await expect(qContent.nth(3)).toHaveScreenshot("html-placeholder.png");

    await expect(qContent.nth(4)).toHaveScreenshot("image-placeholder.png");

    await expect(qContent.nth(5)).toHaveScreenshot("panel-placeholder-medium.png");

    await expect(qContent.nth(6)).toHaveScreenshot("panel-title-placeholder-medium.png");

    await expect(qContent.nth(7)).toHaveScreenshot("panel-dynamic-placeholder-medium.png");

    await expect(qContent.nth(8)).toHaveScreenshot("html-placeholder-medium.png");

    await expect(qContent.nth(9)).toHaveScreenshot("image-placeholder-medium.png");
  });

  test("Narrow panel add question button", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 1000 });
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
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });
    await expect(page.locator(".svc-question__content--panel")).toHaveScreenshot("panel-narrow-add.png");

    await expect(page.locator(".svc-question__content--paneldynamic")).toHaveScreenshot("panel-dynamic-narrow-add.png");
  });

  test("Dynamic panels in multi-line", async ({ page }) => {
    await page.setViewportSize({ width: 1032, height: 1000 });
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
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });
    await expect(page.locator(".svc-row")).toHaveScreenshot("panel-dynamic-in-multiline.png");
  });

  test("Panel title editor is fully visible", async ({ page }) => {
    await page.setViewportSize({ width: 1500, height: 1000 });
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
    await setJSON(page, json);
    await page.locator(".sv-string-editor").filter({ hasText: "Panel Title" }).click();
    await expect(page.locator(".svc-question__content--panel")).toHaveScreenshot("panel-title-editing.png");
  });

  test("Composite question - check no scroll", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).Survey.ComponentCollection.Instance.add({
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
    await page.locator(".sd-input.sd-text").hover();
    await expect(page.locator(".svc-question__adorner")).toHaveScreenshot("composite-question-no-scroll.png");
  });
});