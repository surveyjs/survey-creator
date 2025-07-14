import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, takeElementScreenshot, addQuestionByAddQuestionButton, wrapVisualTest, getTabbedMenuItemByText, creatorTabPreviewName, creatorTabDesignerName, resetHoverToCreator, getPropertyGridCategory, generalGroupName, getListItemByText, surveySettingsButtonSelector, changeToolboxScrolling, changeToolboxSearchEnabled, getToolboxItemByAriaLabel, setAllowEditSurveyTitle, setShowAddQuestionButton, setExpandCollapseButtonVisibility, setShowToolbox, setShowSidebar, getSurveyListItemByText, upArrowImageLink, setAllowZoom } from "../../helper";

const title = "Question surface";

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

