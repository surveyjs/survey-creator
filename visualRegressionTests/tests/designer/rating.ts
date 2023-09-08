import { Selector } from "testcafe";
import { url, setJSON, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "Rating Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
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
    await setJSON({
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
    await setJSON(jsonMulti);
    await t.resizeWindow(1200, 900);

    const question = Selector("div[data-name=question1]");
    await takeElementScreenshot("rating-multiline.png", question, t, comparer);

    const question2 = Selector("div[data-name=question2]");
    await takeElementScreenshot("rating-multiline-text.png", question2, t, comparer);

    await t.resizeWindow(550, 900);
    await takeElementScreenshot("rating-multiline-mobile.png", question, t, comparer);
    await takeElementScreenshot("rating-multiline-text-mobile.png", question2, t, comparer);
  });
});

test("Rating editing", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON(json);

    const question = Selector("div[data-name=question1]");
    await t.click(question.find("span").withText("3"));
    await takeElementScreenshot("rating-editing.png", question, t, comparer);
  });
});

test("Rating in matrix", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
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