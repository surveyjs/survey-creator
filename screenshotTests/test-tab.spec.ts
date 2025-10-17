import { test, expect } from "@playwright/test";
import { url, compareScreenshot, setJSON, getTabbedMenuItemByText, creatorTabPreviewName, getListItemByText, resetHoverToCreator, getBarItemByTitle, explicitErrorHandler } from "./helper";

const title = "Test tab Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("toolbar view", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });

    await setJSON(page, {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "text", "name": "question1" },
            { "type": "checkbox", "name": "question2", "choices": ["Item 1", "Item 2", "Item 3"] }
          ],
          "title": "page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title ",
          "description": "page1 -- description"
        },
        {
          "name": "page2",
          "elements": [{ "type": "text", "name": "question3" }]
        }
      ]
    });

    await page.waitForTimeout(300);
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await compareScreenshot(page, page.locator(".svc-test-tab__content .sv-action-bar--pages"), "test-tab-toolbar.png");

    await page.setViewportSize({ width: 380, height: 600 });
    await page.waitForTimeout(300);
    await compareScreenshot(page, page.locator(".svc-footer-bar .svc-toolbar-wrapper"), "test-tab-toolbar-responsive.png");
  });

  test("mobile iphone", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await explicitErrorHandler(page);
    await setJSON(page, {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "text", "name": "question1" },
            { "type": "checkbox", "name": "question2", "choices": ["Item 1", "Item 2", "Item 3"] }
          ],
          "title": "page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title ",
          "description": "page1 -- description"
        },
        {
          "name": "page2",
          "elements": [{ "type": "text", "name": "question3" }]
        }
      ]
    });

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.click("#deviceSelector button");
    await getListItemByText(page, "iPhone SE").click();
    await compareScreenshot(page, page.locator(".svd-simulator-wrapper"), "test-tab-iphone.png");
    await compareScreenshot(page, page.locator(".svc-plugin-tab__content"), "test-tab-iphone-whole-tab.png");
  });

  test("Bug #2933: empty matrix look", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await explicitErrorHandler(page);
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdynamic",
              "name": "question1",
              "columnsVisibleIf": "false",
              "choices": [1]
            }
          ]
        }
      ],
      "showQuestionNumbers": "off"
    });
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await compareScreenshot(page, page.locator(".sd-question"), "matrix-no-columns.png");
  });

  test("Hidden Question Issue: #3298", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await explicitErrorHandler(page);
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
              "choices": ["Item 1", "Item 2", "Item 3"]
            },
            {
              "type": "checkbox",
              "name": "question2",
              "visibleIf": "{question1} notempty",
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        }
      ]
    });
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();

    const showInvisibleElements = page.locator('[title="Show invisible elements"]');
    await showInvisibleElements.click();
    await compareScreenshot(page, page.locator(".sd-page"), "preview-tab-show-invisible-by-creator-button.png");

    const hideInvisibleElements = page.locator('[title="Hide invisible elements"]');
    await hideInvisibleElements.click();
    await page.locator("span", { hasText: "Item 2" }).first().click();
    await compareScreenshot(page, page.locator('[data-name="question2"]'), "preview-tab-show-invisible-by-trigger.png");
  });

  test("survey-width", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });

    await setJSON(page, {
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
    });

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await compareScreenshot(page, page.locator(".svd-simulator-content"), "test-tab-survey-width.png");
  });

  test("Check survey timer", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await setJSON(page, {
      showQuestionNumbers: "on",
      headerView: "basic",
      "autoFocusFirstQuestion": true,
      "title": "American History",
      "showTimer": true,
      "timerLocation": "bottom",
      "timerInfoMode": "survey",
      "timeLimit": 60,
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
    });

    // Remove timer animation and disable timer start
    await page.addStyleTag({ content: ".sd-timer__progress--animation { transition: none !important; }" });
    await page.evaluate(() => {
      (window as any).Survey.SurveyTimer.instance.start = () => {};
    });

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.locator(".sd-navigation__start-btn").click();
    await resetHoverToCreator(page);
    await compareScreenshot(page, page.locator(".svc-creator__content-wrapper"), "survey-timer.png");
  });

  test("empty survey preview", async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 600 });

    await setJSON(page, {});

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await compareScreenshot(page, page.locator(".svc-test-tab__content"), "test-tab-empty-survey.png");
  });

  test("dropdown popup in simulator", async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 1000 });
    await setJSON(page, {
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

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.setViewportSize({ width: 800, height: 800 });
    await page.locator('[data-name="nps-score"]').click();
    await page.locator("li.sd-list__item span", { hasText: "2" }).click();
    await page.locator('[data-name="nps-score"]').click();
    await compareScreenshot(page, page.locator(".svd-simulator-content"), "test-tab-opened-dropdown.png");
  });

  test("dropdown popup in simulator - mobile", async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 1000 });
    await setJSON(page, {
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
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.locator('[title="Select device type"]').click();
    await page.locator("span", { hasText: "iPhone SE" }).click();
    await getBarItemByTitle(page, "Switch to portrait orientation").click();
    await page.locator('[data-name="nps-score"]').click();
    await compareScreenshot(page, page.locator(".svd-simulator-content"), "test-tab-opened-dropdown-mobile.png");
  });

  test("background image in preview", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await setJSON(page, {
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
    await page.evaluate(() => {
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
    });
    await page.locator(".svc-tabbed-menu-item", { hasText: "Preview" }).click();
    await page.locator('input[title="Complete"]').click();
    await compareScreenshot(page, page.locator(".svc-creator-tab"), "test-tab-background-image.png");
  });

  test("Page selector with invisible page", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await setJSON(page, {
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
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        }
      ]
    });
    const pageSelectorButton = page.locator(".svc-page-selector");
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await pageSelectorButton.click();
    await compareScreenshot(page, page.locator(".svc-page-selector .sv-popup__container"), "test-tab-page-selector-witn-invisible-page.png");
  });

  test("Tagbox has wrong style on preview tab", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await setJSON(page, {
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

    const questionTagbox = page.locator(".sd-input.sd-tagbox");
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await questionTagbox.click();
    await compareScreenshot(page, page.locator(".sv-popup__container"), "test-tab-tagbox-style.png");
  });
});