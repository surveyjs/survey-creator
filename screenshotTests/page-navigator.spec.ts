import { url, test, setJSON, expect, changeToolboxLocation, setDirRTL, setShowToolbox, setAllowEditSurveyTitle, setShowAddQuestionButton, setShowSidebar, getListItemByText, compareScreenshot } from "./helper";

const title = "Page Navigator Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

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
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ]
      }
    ]
  };

  test("On the right side (default)", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 500 });
    await setJSON(page, json);
    await page.waitForTimeout(500);
    const pageNavigatorContainer = page.locator(".svc-tab-designer__page-navigator");
    const pageNavigatorElement = page.locator(".svc-page-navigator");

    await expect(pageNavigatorElement).toBeVisible();
    await page.waitForTimeout(1000);
    await compareScreenshot(page, pageNavigatorContainer, "page-navigator-right.png");

    await page.locator(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)").hover();
    await page.waitForTimeout(1000);
    await compareScreenshot(page, pageNavigatorContainer, "page-navigator-right-hovered.png");

    await page.setViewportSize({ width: 1920, height: 1400 });
    await page.waitForTimeout(1000);
    await expect(pageNavigatorElement).not.toBeVisible();
  });

  test("On the right side opened popup", async ({ page }) => {
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);

    await page.setViewportSize({ width: 1920, height: 500 });
    await setShowToolbox(page, false);
    await setJSON(page, json);

    // await page.locator(".svc-page-navigator__selector").click();
    // await page.locator(".svc-page-navigator__selector").click();
    await page.locator(".svc-page-navigator__selector").click();
    await compareScreenshot(page, page.locator(".svc-page-navigator .sv-popup__container"), "page-navigator-popup.png");
    await compareScreenshot(page, page.locator(".svc-creator-tab"), "page-navigator-with-popup.png");
  });

  test("On the left side", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 500 });
    await setJSON(page, json);
    await page.waitForTimeout(500);

    const pageNavigatorContainer = page.locator(".svc-tab-designer__page-navigator");
    const pageNavigatorElement = page.locator(".svc-page-navigator");
    await changeToolboxLocation(page, "right");

    await expect(pageNavigatorElement).toBeVisible();
    await page.waitForTimeout(1000);
    await compareScreenshot(page, pageNavigatorContainer, "page-navigator-left.png");

    await page.locator(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)").hover();
    await page.waitForTimeout(1000);
    await compareScreenshot(page, pageNavigatorContainer, "page-navigator-left-hovered.png");

    await page.setViewportSize({ width: 1920, height: 1400 });
    await page.waitForTimeout(1000);
    await expect(pageNavigatorElement).not.toBeVisible();
  });

  test("On the left side (rtl)", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 500 });
    await setDirRTL(page);

    await setJSON(page, json);
    await page.waitForTimeout(500);
    const pageNavigatorElement = page.locator(".svc-tab-designer__page-navigator");

    await expect(pageNavigatorElement).toBeVisible();
    await page.waitForTimeout(1000);
    await compareScreenshot(page, pageNavigatorElement, "page-navigator-left-rtl.png");

    await page.locator(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)").hover();
    await page.waitForTimeout(1000);
    await compareScreenshot(page, pageNavigatorElement, "page-navigator-left-rtl-hovered.png");
  });

  test("Page Navigator works with - scroll-behavior: smooth;", async ({ page }) => {
    await setShowToolbox(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await setShowSidebar(page, false);
    await page.setViewportSize({ width: 1400, height: 800 });
    await page.evaluate(() => {
      document.documentElement.style["scroll-behavior"] = "smooth";
    });

    await setJSON(page, {
      showQuestionNumbers: true, pages: [{ name: "page1", questions: [{ type: "radiogroup", choices: [1, 2, 3] }] }, { name: "page2" }, { name: "page3" }, { name: "page4" }, { name: "page5" }]
    });

    const firstPageNavigatorItem = "svc-page-navigator-item:nth-child(1) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-of-type(1) > .svc-page-navigator-item--selected";
    const thirdPageNavigatorItem = "svc-page-navigator-item:nth-child(3) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-of-type(3) > .svc-page-navigator-item--selected";
    const navigatorItem2Click = ".svc-page-navigator-item-content";

    await expect(page.locator(firstPageNavigatorItem)).toBeVisible();
    await expect(page.locator(thirdPageNavigatorItem)).not.toBeVisible();
    await page.locator(navigatorItem2Click).nth(2).click();
    await expect(page.locator(firstPageNavigatorItem)).not.toBeVisible();
    await expect(page.locator(thirdPageNavigatorItem)).toBeVisible();

    await page.waitForTimeout(1000);
    await compareScreenshot(page, page.locator(".svc-creator-tab"), "design-surface-navigated-to-3rd.png");
  });

  test("Page navigator scrolling in bypage mode", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1000 });
    await page.evaluate(() => {
      window["creator"].pageEditMode = "bypage";
    });
    await setJSON(page, {
      title: "NPS Survey Question",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "rating",
              name: "nps_score",
              title:
                "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
              isRequired: true,
              rateCount: 11,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Most unlikely)",
              maxRateDescription: "(Most likely)",
            },
            {
              type: "checkbox",
              name: "promoter_features",
              visibleIf: "{nps_score} >= 9",
              title: "Which of the following features do you value the most?",
              description: "Please select no more than three features.",
              isRequired: true,
              validators: [
                {
                  type: "answercount",
                  text: "Please select no more than three features.",
                  maxCount: 3,
                },
              ],
              choices: [
                "Performance",
                "Stability",
                "User interface",
                "Complete functionality",
                "Learning materials (documentation, demos, code examples)",
                "Quality support",
              ],
              showOtherItem: true,
              otherText: "Other features:",
              colCount: 2,
            },
            {
              type: "comment",
              name: "passive_experience",
              visibleIf: "{nps_score} >= 7  and {nps_score} <= 8",
              title: "What can we do to make your experience more satisfying?",
            },
            {
              type: "comment",
              name: "disappointing_experience",
              visibleIf: "{nps_score} <= 6",
              title:
                "Please let us know why you had such a disappointing experience with our product",
            },
          ],
        },
        {
          name: "page2",
          elements: [
            {
              type: "text",
              name: "question1",
            },
            {
              type: "text",
              name: "question2",
            },
            {
              type: "text",
              name: "question3",
            },
          ],
        },
        {
          name: "page3",
          elements: [
            {
              type: "text",
              name: "question4",
            },
            {
              type: "text",
              name: "question5",
            },
            {
              type: "text",
              name: "question6",
            },
            {
              type: "text",
              name: "question7",
            },
          ],
        },
        {
          name: "page4",
          elements: [
            {
              type: "text",
              name: "question8",
            },
          ],
        },
        {
          name: "page5",
          elements: [
            {
              type: "text",
              name: "question9",
            },
          ],
        },
        {
          name: "page6",
          elements: [
            {
              type: "text",
              name: "question10",
            },
          ],
        },
        {
          name: "page7",
          elements: [
            {
              type: "text",
              name: "question11",
            },
          ],
        },
        {
          name: "page8",
          elements: [
            {
              type: "text",
              name: "question12",
            },
          ],
        },
        {
          name: "page9",
          elements: [
            {
              type: "text",
              name: "question13",
            },
          ],
        },
        {
          name: "page10",
          elements: [
            {
              type: "text",
              name: "question14",
            },
          ],
        },
        {
          name: "page11",
          elements: [
            {
              type: "text",
              name: "question15",
            },
          ],
        },
        {
          name: "page12",
          elements: [
            {
              type: "text",
              name: "question16",
            },
          ],
        },
        {
          name: "page13",
          elements: [
            {
              type: "text",
              name: "question17",
            },
          ],
        },
        {
          name: "page14",
          elements: [
            {
              type: "text",
              name: "question18",
            },
          ],
        },
        {
          name: "page15",
          elements: [
            {
              type: "text",
              name: "question19",
            },
          ],
        },
        {
          name: "page16",
          elements: [
            {
              type: "text",
              name: "question20",
            },
          ],
        },
        {
          name: "page17",
          elements: [
            {
              type: "text",
              name: "question21",
            },
            {
              type: "text",
              name: "question22",
            },
          ],
        },
        {
          name: "page18",
          elements: [
            {
              type: "text",
              name: "question23",
            },
          ],
        },
        {
          name: "page19",
          elements: [
            {
              type: "text",
              name: "question24",
            },
          ],
        },
        {
          name: "page20",
          elements: [
            {
              type: "text",
              name: "question25",
            },
          ],
        },
      ],
      showQuestionNumbers: false,
    });
    await page.waitForTimeout(500);

    const pageNavigatorElement = page.locator(".svc-tab-designer__page-navigator");

    await expect(pageNavigatorElement).toBeVisible();
    await compareScreenshot(page, pageNavigatorElement, "page-navigator-bypage.png");
  });

  test("Page navigator has enough space to be shown", async ({ page }) => {
    await page.setViewportSize({ width: 1508, height: 800 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "title": "NPS Survey Question",
      "widthMode": "responsive",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "comment",
              "name": "nps_score",
              "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
              "isRequired": true
            },
            {
              "type": "comment",
              "name": "promoter_features",
              "visibleIf": "{nps_score} >= 9",
              "title": "Which of the following features do you value the most?",
              "description": "Please select no more than three features.",
              "isRequired": true,
              "rows": 6
            },
            {
              "type": "comment",
              "name": "passive_experience",
              "visibleIf": "{nps_score} >= 7  and {nps_score} <= 8",
              "title": "What can we do to make your experience more satisfying?",
              "rows": 6
            },
            {
              "type": "comment",
              "name": "disappointing_experience",
              "visibleIf": "{nps_score} <= 6",
              "title": "Please let us know why you had such a disappointing experience with our product"
            }
          ]
        },
        {
          "name": "page2",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question2"
            },
            {
              "type": "text",
              "name": "question3"
            }
          ]
        }
      ],
    });
    await page.evaluate(() => { document.body.focus(); });
    await page.locator(".svc-designer-header").hover({ position: { x: 1, y: 1 } });
    await page.waitForTimeout(500);
    const designSurface = page.locator(".svc-tab-designer--with-surface-tools");
    await expect(designSurface).toBeVisible();
    await compareScreenshot(page, designSurface, "page-navigator-not-overlaped.png");
  });

  test("Page navigator in by-page mode has enough space to be shown", async ({ page }) => {
    await page.setViewportSize({ width: 1508, height: 800 });
    await page.evaluate(() => {
      window["creator"].pageEditMode = "bypage";
    });
    await setJSON(page, {
      showQuestionNumbers: true,
      "title": "NPS Survey Question",
      "widthMode": "responsive",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "comment",
              "name": "nps_score",
              "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
              "isRequired": true
            },
            {
              "type": "comment",
              "name": "promoter_features",
              "visibleIf": "{nps_score} >= 9",
              "title": "Which of the following features do you value the most?",
              "description": "Please select no more than three features.",
              "isRequired": true,
              "rows": 6
            },
            {
              "type": "comment",
              "name": "passive_experience",
              "visibleIf": "{nps_score} >= 7  and {nps_score} <= 8",
              "title": "What can we do to make your experience more satisfying?",
              "rows": 6
            },
            {
              "type": "comment",
              "name": "disappointing_experience",
              "visibleIf": "{nps_score} <= 6",
              "title": "Please let us know why you had such a disappointing experience with our product"
            }
          ]
        },
        {
          "name": "page2",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question2"
            },
            {
              "type": "text",
              "name": "question3"
            }
          ]
        }
      ],
    });
    await page.evaluate(() => { document.body.focus(); });
    await page.locator(".svc-designer-header").hover({ position: { x: 1, y: 1 } });
    await page.waitForTimeout(500);
    const designSurface = page.locator(".svc-tab-designer--with-surface-tools");
    await expect(designSurface).toBeVisible();
    await compareScreenshot(page, designSurface, "page-navigator-by-page-not-overlaped.png");
  });

  test("Page navigator scrolls to top of long page and centers small page", async ({ page }) => {
    await setShowToolbox(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await page.setViewportSize({ width: 1500, height: 800 });
    await setShowSidebar(page, false);
    await setJSON(page, {
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
        },
        {
          "name": "page2",
          "elements": [
            {
              "type": "text",
              "name": "question2"
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
        },
        {
          "name": "page4",
          "elements": [
            {
              "type": "text",
              "name": "question4"
            },
            {
              "type": "text",
              "name": "question6"
            },
            {
              "type": "text",
              "name": "question7"
            },
            {
              "type": "text",
              "name": "question8"
            },
            {
              "type": "text",
              "name": "question9"
            },
            {
              "type": "text",
              "name": "question10"
            },
            {
              "type": "text",
              "name": "question11"
            },
            {
              "type": "text",
              "name": "question12"
            },
            {
              "type": "text",
              "name": "question13"
            },
            {
              "type": "text",
              "name": "question14"
            },
            {
              "type": "text",
              "name": "question15"
            }
          ]
        },
        {
          "name": "page5",
          "elements": [
            {
              "type": "text",
              "name": "question5"
            }
          ]
        }
      ]
    });
    const designSurface = page.locator(".svc-creator");
    const pageSelector = page.locator(".svc-page-navigator__selector");
    await pageSelector.click();
    await getListItemByText(page, "page4").click();
    await page.waitForTimeout(500);
    await compareScreenshot(page, designSurface, "page-navigator-select-long-page.png");
    await pageSelector.click();
    await getListItemByText(page, "page2").click();
    await page.waitForTimeout(500);
    await compareScreenshot(page, designSurface, "page-navigator-select-short-page.png");
  });
});
