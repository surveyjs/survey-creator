import { Selector } from "testcafe";
import { url, setJSON, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "Rating Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  showQuestionNumbers: "on",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1"
        }
      ]
    }
  ]
};
const jsonComment = {
  showQuestionNumbers: "on",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "hasComment": true
        }
      ]
    }
  ]
};

const jsonMulti = {
  showQuestionNumbers: "on",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "rateMax": 20
        },
        {
          "type": "rating",
          "name": "question2",
          "rateMax": 20,
          "minRateDescription": "Minimum",
          "maxRateDescription": "Maximum",
        }
      ]
    },
  ]
};

test("Rating adorners", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON(json);

    const question = Selector("div[data-name=question1]");
    await takeElementScreenshot("rating-not-selected.png", question, t, comparer);

    await t
      .click(question, { offsetY: 40 })
      .expect(Selector(".svc-question__content--selected div[data-name=question1]").visible).ok();
    await takeElementScreenshot("rating-selected.png", question, t, comparer);
  });
});

test("Rating adorners - disabled buttons", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1956, 1080);
    await setJSON({
      showQuestionNumbers: "on",
      elements: [
        {
          type: "rating",
          name: "question1",
          rateMax: 20
        }
      ]
    });

    const question = Selector("div[data-name=question1]");
    await takeElementScreenshot("rating-disabled-add.png", question, t, comparer);
    await setJSON({
      showQuestionNumbers: "on",
      elements: [
        {
          type: "rating",
          name: "question1",
          rateMax: 2
        }
      ]
    });
    await takeElementScreenshot("rating-disabled-remove.png", question, t, comparer);
  });
});

test("Rating adorners with comment", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON(jsonComment);

    const question = Selector("div[data-name=question1]");
    await takeElementScreenshot("rating-comment-not-selected.png", question, t, comparer);

    await t
      .click(question, { offsetY: 40 })
      .expect(Selector(".svc-question__content--selected div[data-name=question1]").visible).ok();
    await takeElementScreenshot("rating-comment-selected.png", question, t, comparer);
  });
});

test("Multi row rating adorner", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    (jsonMulti as any).pages[0].elements[0].rateType = "labels";
    (jsonMulti as any).pages[0].elements[1].rateType = "labels";
    await setJSON(jsonMulti);
    await t.resizeWindow(1232, 900);

    const question = Selector("div[data-name=question1]");
    await takeElementScreenshot("rating-multiline.png", question, t, comparer);

    const question2 = Selector("div[data-name=question2]");
    await takeElementScreenshot("rating-multiline-text.png", question2, t, comparer);

    await t.resizeWindow(549, 900);
    await takeElementScreenshot("rating-multiline-mobile.png", question, t, comparer);
    await takeElementScreenshot("rating-multiline-text-mobile.png", question2, t, comparer);

    await t.click(Selector(".svc-question__adorner").nth(0), { offsetX: 1, offsetY: 1 });
    await t.expect(Selector(".svc-question__adorner").nth(0).find(".svc-question__content-actions").visible).ok();
    await takeElementScreenshot("rating-multiline-mobile-selected.png", question, t, comparer);
    await t.click(Selector(".svc-question__adorner").nth(1), { offsetX: 1, offsetY: 1 });
    await t.expect(Selector(".svc-question__adorner").nth(1).find(".svc-question__content-actions").visible).ok();
    await takeElementScreenshot("rating-multiline-mobile-text-selected.png", question2, t, comparer);
  });
});

test("Multi row rating adorner smileys", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const jNew: any = Object.assign({}, jsonMulti);
    jNew.pages[0].elements[0].rateType = "smileys";
    jNew.pages[0].elements[1].rateType = "smileys";
    await setJSON(jNew);
    await t.resizeWindow(1232, 900);

    const question = Selector("div[data-name=question1]");
    await takeElementScreenshot("rating-multiline-smileys.png", question, t, comparer);

    const question2 = Selector("div[data-name=question2]");
    await takeElementScreenshot("rating-multiline-smileys-text.png", question2, t, comparer);

    await t.resizeWindow(549, 900);
    await takeElementScreenshot("rating-multiline-smileys-mobile.png", question, t, comparer);
    await takeElementScreenshot("rating-multiline-smileys-text-mobile.png", question2, t, comparer);

    await t.click(Selector(".svc-question__adorner").nth(0), { offsetX: 1, offsetY: 1 });
    await t.expect(Selector(".svc-question__adorner").nth(0).find(".svc-question__content-actions").visible).ok();
    await takeElementScreenshot("rating-multiline-smileys-mobile-selected.png", question, t, comparer);
    await t.click(Selector(".svc-question__adorner").nth(1), { offsetX: 1, offsetY: 1 });
    await t.expect(Selector(".svc-question__adorner").nth(1).find(".svc-question__content-actions").visible).ok();
    await takeElementScreenshot("rating-multiline-smileys-mobile-text-selected.png", question2, t, comparer);
  });
});

test("Multi row rating adorner stars", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const jNew: any = Object.assign({}, jsonMulti);
    jNew.pages[0].elements[0].rateType = "stars";
    jNew.pages[0].elements[1].rateType = "stars";
    await setJSON(jNew);
    await t.resizeWindow(1232, 900);

    const question = Selector("div[data-name=question1]");
    await takeElementScreenshot("rating-multiline-stars.png", question, t, comparer);

    const question2 = Selector("div[data-name=question2]");
    await takeElementScreenshot("rating-multiline-stars-text.png", question2, t, comparer);

    await t.resizeWindow(549, 900);
    await takeElementScreenshot("rating-multiline-stars-mobile.png", question, t, comparer);
    await takeElementScreenshot("rating-multiline-stars-text-mobile.png", question2, t, comparer);

    await t.click(Selector(".svc-question__adorner").nth(0), { offsetX: 1, offsetY: 1 });
    await t.expect(Selector(".svc-question__adorner").nth(0).find(".svc-question__content-actions").visible).ok();
    await takeElementScreenshot("rating-multiline-stars-mobile-selected.png", question, t, comparer);
    await t.click(Selector(".svc-question__adorner").nth(1), { offsetX: 1, offsetY: 1 });
    await t.expect(Selector(".svc-question__adorner").nth(1).find(".svc-question__content-actions").visible).ok();
    await takeElementScreenshot("rating-multiline-stars-mobile-text-selected.png", question2, t, comparer);
  });
});

test("Rating editing", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON(json);
    await t.resizeWindow(1900, 1000);
    const question = Selector("div[data-name=question1]");
    await t.click(question.find("span").withText("3"));
    await takeElementScreenshot("rating-editing.png", question, t, comparer);
  });
});

test("Rating min/max editing", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "rating",
              "name": "question1",
              "minRateDescription": "min",
              "maxRateDescription": "max"
            }
          ]
        }
      ]
    }
    );
    await t.resizeWindow(1936, 1000);
    const question = Selector("div[data-name=question1]");
    await t.click(question.find("span").withText("min"));
    await takeElementScreenshot("rating-editing-min.png", question, t, comparer);
    await t.click(question.find("span").withText("max"));
    await takeElementScreenshot("rating-editing-max.png", question, t, comparer);
  });
});

test("Rating in matrix", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "question1",
              "columns": [
                {
                  "name": "Column 1",
                  "cellType": "rating",
                  "rateType": "stars"
                },
                {
                  "name": "Column 2"
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "cellType": "rating",
              "rows": [
                "Row 1",
                "Row 2"
              ]
            }
          ]
        }
      ],
      "widthMode": "static",
      "width": "1000"
    });
    await t.resizeWindow(1900, 1000);
    const question = Selector("div[data-name=question1]");
    await takeElementScreenshot("rating-in-matrix.png", question, t, comparer);
  });
});

test("Rating long item", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "rating",
              "name": "question1",
              "autoGenerate": false,
              "rateValues": [
                1,
                {
                  "value": 2,
                  "text": "item 2"
                },
                {
                  "value": 3,
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                4,
                5
              ]
            }
          ]
        }
      ]
    });
    await t.resizeWindow(1900, 1000);
    const question = Selector("div[data-name=question1]");
    await takeElementScreenshot("rating-long-item.png", question, t, comparer);
    await t.click(Selector("span").withText("Lorem"));
    await takeElementScreenshot("rating-long-item-edit.png", question, t, comparer);
  });
});

test("Rating labels location", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "rating",
              "name": "question1",
              "minRateDescription": "Bad",
              "maxRateDescription": "Good",
              "rateDescriptionLocation": "top"
            },
            {
              "type": "rating",
              "name": "question1",
              "minRateDescription": "Bad",
              "maxRateDescription": "Good",
              "rateDescriptionLocation": "bottom"
            },
            {
              "type": "rating",
              "name": "question1",
              "minRateDescription": "Bad",
              "maxRateDescription": "Good",
              "rateDescriptionLocation": "topBottom"
            }
          ]
        }
      ],
      "widthMode": "static"
    });
    await t.resizeWindow(1900, 1000);
    const question = Selector(".svc-rating-question-content");
    await takeElementScreenshot("rating-top-labels.png", question.nth(0), t, comparer);
    await takeElementScreenshot("rating-bottom-labels.png", question.nth(1), t, comparer);
    await takeElementScreenshot("rating-top-bottom-labels.png", question.nth(2), t, comparer);

    await t.resizeWindow(500, 1000);
    await takeElementScreenshot("rating-top-labels-mobile.png", question.nth(0), t, comparer);
    await takeElementScreenshot("rating-bottom-labels-mobile.png", question.nth(1), t, comparer);
    await takeElementScreenshot("rating-top-bottom-labels-mobile.png", question.nth(2), t, comparer);
  });
});