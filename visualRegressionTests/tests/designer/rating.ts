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
        }
      ]
    }
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

    await t.resizeWindow(550, 900);
    await takeElementScreenshot("rating-multiline-mobile.png", question, t, comparer);
  });
});