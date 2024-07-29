import { Selector, ClientFunction } from "testcafe";
import { url, setJSON, changeToolboxLocation, changeToolboxScrolling, wrapVisualTest, takeElementScreenshot, changeToolboxSearchEnabled } from "../../helper";

const title = "Page Navigator Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

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

test("On the right side (default)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 500);
    await setJSON(json);
    await t.wait(500);
    const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");

    await t.expect(pageNavigatorElement.visible).ok();
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-right.png", pageNavigatorElement, t, comparer);

    await t.hover(Selector(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)"));
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-right-hovered.png", pageNavigatorElement, t, comparer);

    await t.resizeWindow(1920, 1092);
    await t.wait(1000);
    await t.expect(pageNavigatorElement.visible).notOk();
  });
});

test("On the right side opened popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
    await changeToolboxSearchEnabled(false);

    await t.resizeWindow(1920, 500);
    await setJSON(json);

    await t.click(".svc-page-navigator__selector");
    await t.click(".svc-page-navigator__selector");
    await t.click(".svc-page-navigator__selector");
    await takeElementScreenshot("page-navigator-popup.png", Selector(".svc-page-navigator__selector .sv-popup__container"), t, comparer);
    await takeElementScreenshot("page-navigator-with-popup.png", Selector(".svc-creator-tab"), t, comparer);
  });
});

test("On the left side", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 500);
    await setJSON(json);
    await t.wait(500);

    const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");
    await changeToolboxLocation("right");

    await t.expect(pageNavigatorElement.visible).ok();
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-left.png", pageNavigatorElement, t, comparer);

    await t.hover(Selector(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)"));
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-left-hovered.png", pageNavigatorElement, t, comparer);

    await t.resizeWindow(1920, 1092);
    await t.wait(1000);
    await t.expect(pageNavigatorElement.visible).notOk();
  });
});

test("On the left side (rtl)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 500);
    await ClientFunction(() => {
      document.body.setAttribute("dir", "rtl");
    })();

    await setJSON(json);
    await t.wait(500);
    const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");

    await t.expect(pageNavigatorElement.visible).ok();
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-left-rtl.png", pageNavigatorElement, t, comparer);

    await t.hover(Selector(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)"));
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-left-rtl-hovered.png", pageNavigatorElement, t, comparer);
  });
});

test("Page Navigator works with - scroll-behavior: smooth;", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
    await changeToolboxSearchEnabled(false);
    await t.resizeWindow(1400, 800);
    await ClientFunction(() => {
      document.documentElement.style["scroll-behavior"] = "smooth";
    })();

    await setJSON({ pages: [{ name: "page1", questions: [{ type: "radiogroup", choices: [1, 2, 3] }] }, { name: "page2" }, { name: "page3" }, { name: "page4" }, { name: "page5" }] });

    const firstPageNavigatorItem = "svc-page-navigator-item:nth-child(1) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-of-type(1) > .svc-page-navigator-item--selected";
    const thirdPageNavigatorItem = "svc-page-navigator-item:nth-child(3) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-of-type(3) > .svc-page-navigator-item--selected";
    const navigatorItem2Click = ".svc-page-navigator-item-content";

    await t
      .expect(Selector(firstPageNavigatorItem).exists).ok()
      .expect(Selector(thirdPageNavigatorItem).exists).notOk()
      .click(Selector(navigatorItem2Click).nth(2))
      .expect(Selector(firstPageNavigatorItem).exists).notOk()
      .expect(Selector(thirdPageNavigatorItem).exists).ok();

    await t.wait(1000);
    await takeElementScreenshot("design-surface-navigated-to-3rd.png", Selector(".svc-creator-tab"), t, comparer);
  });
});

test("Page navigator scrolling in bypage mode", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1000);
    await ClientFunction(() => {
      window["creator"].pageEditMode = "bypage";
    })();
    await setJSON({
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
      showQuestionNumbers: "off",
    });
    await t.wait(500);
    // await ClientFunction(() => {
    //   document.querySelector(".svc-tab-designer")!.scrollTop = 500;
    // })();
    // await t.wait(500);

    const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");

    await t.expect(pageNavigatorElement.visible).ok();
    await takeElementScreenshot("page-navigator-bypage.png", pageNavigatorElement, t, comparer);
  });
});

test("Page navigator has enough space to be shown", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1508, 800);
    await setJSON({
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
      ],
    });
    await ClientFunction(() => { document.body.focus(); })();
    await t.hover(Selector(".svc-designer-header"), { offsetX: 1, offsetY: 1 }).wait(500);
    const designSurface = Selector(".svc-tab-designer--with-page-navigator");
    await t.expect(designSurface.visible).ok();
    await takeElementScreenshot("page-navigator-not-overlaped.png", designSurface, t, comparer);
  });
});
test("Page navigator in by-page mode has enough space to be shown", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1508, 800);
    await ClientFunction(() => {
      window["creator"].pageEditMode = "bypage";
    })();
    await setJSON({
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
      ],
    });
    await ClientFunction(() => { document.body.focus(); })();
    await t.hover(Selector(".svc-designer-header"), { offsetX: 1, offsetY: 1 }).wait(500);
    const designSurface = Selector(".svc-tab-designer--with-page-navigator");
    await t.expect(designSurface.visible).ok();
    await takeElementScreenshot("page-navigator-by-page-not-overlaped.png", designSurface, t, comparer);
  });
});
test("Page navigator scrolls to top of long page and centers small page", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
    await changeToolboxSearchEnabled(false);
    await t.resizeWindow(1500, 800);
    await setJSON({
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
    const designSurface = Selector(".svc-creator");
    const pageSelector = Selector(".svc-page-navigator__selector");
    const listItemSelector = Selector(".sv-list__item-body");
    await t.click(pageSelector).click(listItemSelector.withText("page4")).wait(500);
    await takeElementScreenshot("page-navigator-select-long-page.png", designSurface, t, comparer);
    await t.click(pageSelector).click(listItemSelector.withText("page2")).wait(500);
    await takeElementScreenshot("page-navigator-select-short-page.png", designSurface, t, comparer);
  });
});
