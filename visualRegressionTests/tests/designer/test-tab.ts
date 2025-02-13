import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, takeElementScreenshot, creatorTabPreviewName, explicitErrorHandler, urlPreviewThemeSwitcher, wrapVisualTest, getListItemByText, resetHoverToCreator, getBarItemByTitle } from "../../helper";

const title = "Test tab Screenshot";

fixture`${title}`.page`${url}`;

const json1 = {
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
          "type": "checkbox",
          "name": "question2",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ]
        }
      ],
      "title": "page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title ",
      "description": "page1 -- description"
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "name": "question3"
        }
      ]
    }
  ]
};

test("toolbar view", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);

    await setJSON(json1);

    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await takeElementScreenshot("test-tab-toolbar.png", Selector(".svc-test-tab__content .sv-action-bar--pages"), t, comparer);

    await t.resizeWindow(380, 600);
    await takeElementScreenshot("test-tab-toolbar_responsive.png", Selector(".svc-footer-bar .svc-toolbar-wrapper"), t, comparer);
  });
});

test("mobile iphone", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);
    await explicitErrorHandler();
    await setJSON(json1);

    await t
      .click(getTabbedMenuItemByText(creatorTabPreviewName))
      .click(Selector("#deviceSelector button"))
      .click(getListItemByText("iPhone SE"));

    await takeElementScreenshot("test-tab-iphone.png", Selector(".svd-simulator-wrapper"), t, comparer);
    await takeElementScreenshot("test-tab-iphone-whole-tab.png", Selector(".svc-plugin-tab__content"), t, comparer);
  });
});

fixture`${title}`.page`${urlPreviewThemeSwitcher}`;

const json2 = {
  showQuestionNumbers: "on",
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
            },
            {
              "name": "text2"
            }
          ]
        }
      ]
    }
  ]
};

test.skip("Theme Switcher", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const simulator = Selector(".svd-simulator-content");

    await t.resizeWindow(1280, 900);
    await explicitErrorHandler();
    await setJSON(json2);

    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await takeElementScreenshot("theme-switcher.png", Selector("#themeSwitcher"), t, comparer);
    await takeElementScreenshot("theme-default-preview.png", simulator, t, comparer);

    await t.click(Selector("#themeSwitcher"));
    await takeElementScreenshot("theme-switcher-popup.png", Selector(".sv-popup__container").filterVisible().nth(0), t, comparer);

    await t
      .click(Selector("#themeSwitcher"))
      .click(Selector(".sd-navigation__complete-btn"));
    await takeElementScreenshot("theme-default-test-again.png", simulator, t, comparer);

    await t
      .click(Selector("#themeSwitcher"))
      .click(getListItemByText("Modern"));
    await takeElementScreenshot("theme-modern-test-again.png", simulator, t, comparer);

    await t
      .click(Selector("#themeSwitcher"))
      .click(getListItemByText("Default (legacy)"));
    await takeElementScreenshot("theme-legacy-test-again.png", simulator, t, comparer);

    await t
      .click(Selector("#themeSwitcher"))
      .click(getListItemByText("Default"));
    await takeElementScreenshot("theme-default-test-again.png", simulator, t, comparer);

    await t.click(Selector(".svc-preview__test-again"));
    await takeElementScreenshot("theme-default-preview.png", simulator, t, comparer);
  });
});

test("Bug #2933: empty matrix look", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);
    await explicitErrorHandler();
    await setJSON({
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdynamic",
              "name": "question1",
              "columnsVisibleIf": "false",
              "choices": [
                1
              ]
            }
          ]
        }
      ],
      "showQuestionNumbers": "off"
    });
    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await takeElementScreenshot("matrix-no-columns.png", Selector(".sd-question"), t, comparer);
  });
});

test("Hidden Question Issue: #3298", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);
    await explicitErrorHandler();
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
                "visibleIf": "{question1} notempty",
                "choices": [
                  "Item 1",
                  "Item 2",
                  "Item 3"
                ]
              }
            ]
          }
        ]
      }
    );
    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));

    const showInvisibleElements = Selector('[title="Show invisible elements"]');
    await t.click(showInvisibleElements);
    await takeElementScreenshot("preview-tab-show-invisible-by-creator-button.png", Selector(".sd-page"), t, comparer);

    const hideInvisibleElements = Selector('[title="Hide invisible elements"]');
    await t.click(hideInvisibleElements).click(Selector("span").withText("Item 2"));
    await takeElementScreenshot("preview-tab-show-invisible-by-trigger.png", Selector("[data-name='question2']"), t, comparer);
  });
});

const json3 = {
  autoFocusFirstQuestion: true,
  showQuestionNumbers: "on",
  "width": "755px",
  "widthMode": "static",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "question1",
          "columns": [{ name: "col1" }, { name: "col2" }, { name: "col3" }],
          "rows": ["row1", "row2", "row3"]
        }
      ]
    }
  ]
};

test("survey-width", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const simulator = Selector(".svd-simulator-content");
    await t.resizeWindow(1280, 900);

    await setJSON(json3);

    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await takeElementScreenshot("test-tab-survey-width.png", simulator, t, comparer);
  });
});
test("Check survey timer", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {

    await t.resizeWindow(1920, 1080);
    const json = {
      showQuestionNumbers: "on",
      headerView: "basic",
      "autoFocusFirstQuestion": true,
      "title": "American History",
      "showTimerPanel": "bottom",
      "showTimerPanelMode": "survey",
      "maxTimeToFinish": 60,
      "widthMode": "static",
      "firstPageIsStartPage": true,
      "pages": [
        {
          "elements": [
            {
              "type": "html",
              "html": "You are about to start a quiz on American history. <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }
          ]
        },
        {
          "elements": [
            {
              "type": "radiogroup",
              "name": "civilwar",
              "title": "When was the American Civil War?",
              "choices": [
                "1796-1803",
                "1810-1814",
                "1861-1865",
                "1939-1945"
              ],
              "correctAnswer": "1861-1865"
            },
            {
              "type": "radiogroup",
              "name": "libertyordeath",
              "title": "Whose quote is this: \"Give me liberty, or give me death\"?",
              "choices": [
                "John Hancock",
                "James Madison",
                "Patrick Henry",
                "Samuel Adams"
              ],
              "correctAnswer": "Patrick Henry"
            },
            {
              "type": "radiogroup",
              "name": "magnacarta",
              "title": "What is Magna Carta?",
              "choices": [
                "The foundation of the British parliamentary system",
                "The Great Seal of the monarchs of England",
                "The French Declaration of the Rights of Man",
                "The charter signed by the Pilgrims on the Mayflower"
              ],
              "correctAnswer": "The foundation of the British parliamentary system"
            }
          ]
        }
      ]
    };
    await ClientFunction(() => {
      const style = document.createElement("style");
      style.innerHTML = ".sd-timer__progress--animation { transition: none !important; }";
      document.body.appendChild(style);
      (<any>window).Survey.SurveyTimer.instance.start = () => { };
    })();
    await setJSON(json);
    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await t.click(Selector(".sd-navigation__start-btn"));
    await resetHoverToCreator(t);
    await takeElementScreenshot("survey-timer.png", Selector(".svc-creator__content-wrapper"), t, comparer);
  });
});
test("empty survey preview", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const simulator = Selector(".svc-test-tab__content");
    await t.resizeWindow(800, 600);

    await setJSON({});

    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await takeElementScreenshot("test-tab-empty-survey.png", simulator, t, comparer);
  });
});
test("dropdown popup in simulator", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const simulator = Selector(".svd-simulator-content");
    await t.resizeWindow(1200, 1000);
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "rating",
              "name": "nps-score",
              "rateCount": 11,
              "rateMin": 0,
              "rateMax": 10,
              "minRateDescription": "Very unlikely",
              "maxRateDescription": "Very likely"
            },
            {
              "type": "comment",
              "name": "disappointing-experience",
              "visible": false,
              "visibleIf": "{nps-score} <= 5",
              "maxLength": 300
            }
          ]
        }
      ]
    });

    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await t.resizeWindow(800, 800);
    await t.click(Selector('[data-name="nps-score"]'));
    await t.click(Selector("li.sd-list__item span").withText("2"));
    await t.click(Selector('[data-name="nps-score"]'));
    await takeElementScreenshot("test-tab-opened-dropdown.png", simulator, t, comparer);
  });
});

test("dropdown popup in simulator - mobile", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const simulator = Selector(".svd-simulator-content");
    await t.resizeWindow(1200, 1000);
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "rating",
              "name": "nps-score",
              "rateCount": 11,
              "rateMin": 0,
              "rateMax": 10,
              "minRateDescription": "Very unlikely",
              "maxRateDescription": "Very likely"
            },
            {
              "type": "comment",
              "name": "disappointing-experience",
              "visible": false,
              "visibleIf": "{nps-score} <= 5",
              "maxLength": 300
            }
          ]
        }
      ]
    });
    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await t.click(Selector('[title="Select device type"]'));
    await t.click(Selector("span").withText("iPhone SE"));
    await t.click(getBarItemByTitle("Switch to portrait orientation"));
    await t.click(Selector('[data-name="nps-score"]'));
    await takeElementScreenshot("test-tab-opened-dropdown-mobile.png", simulator, t, comparer);
  });
});
test("background image in preview", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const previewTab = Selector(".svc-creator-tab").filterVisible();
    await t.resizeWindow(1024, 768);
    await setJSON({
      showQuestionNumbers: "on",
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
    });
    await ClientFunction(() => {
      window["creator"].theme = {
        "backgroundImage": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAwIiBoZWlnaHQ9IjIwMDAiPgo8Y2lyY2xlIGN4PSIxMDAwIiBjeT0iMTAwMCIgcj0iODgwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZDAwMDAiIHN0cm9rZS13aWR0aD0iMTUiLz4KPC9zdmc+",
        "backgroundImageFit": "cover",
        "backgroundImageAttachment": "fixed",
        "backgroundOpacity": 1,
        "cssVariables": {},
        "themeName": "default",
        "colorPalette": "light",
        "isPanelless": false
      };
    })();
    await t.click(Selector(".svc-tabbed-menu-item").withText("Preview"));
    await t.click(Selector('input[title="Complete"]'));
    await takeElementScreenshot("test-tab-background-image.png", previewTab, t, comparer);
  });
});

test("Page selector with invisible page", async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1024, 768);
    await setJSON({
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "boolean",
              "name": "question1",
              "title": "Show Page"
            }
          ]
        },
        {
          "name": "page2",
          "elements": [
            {
              "type": "rating",
              "name": "question2"
            }
          ],
          "visibleIf": "{question1} = true"
        },
        {
          "name": "page3",
          "elements": [
            {
              "type": "radiogroup",
              "name": "question3",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            }
          ]
        }
      ]
    });
    const pageSelectorButton = Selector(".svc-page-selector");
    await t
      .click(getTabbedMenuItemByText(creatorTabPreviewName))
      .click(pageSelectorButton);
    await takeElementScreenshot("test-tab-page-selector-witn-invisible-page.png", ".svc-page-selector .sv-popup__container", t, comparer);
  });
});

test("Tagbox has wrong style on preview tab", async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1024, 768);
    await setJSON({
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "tagbox",
              "name": "question1",
              "defaultValue": ["Item 2", "Item 3"],
              "choices": ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
            }
          ]
        }
      ]
    });

    const questionTagbox = Selector(".sd-input.sd-tagbox");
    await t
      .click(getTabbedMenuItemByText(creatorTabPreviewName))
      .click(questionTagbox);
    await takeElementScreenshot("test-tab-tagbox-style.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
  });
});