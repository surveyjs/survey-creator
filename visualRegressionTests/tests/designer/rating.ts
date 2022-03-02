import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, setJSON } from "../../helper";

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

test("Rating adorners", async (t) => {
  await setJSON(json);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const question = Selector("div[data-name=question1]");
  await takeScreenshot("rating-not-selected.png", question, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t
    .click(question, { offsetY: 40 })
    .expect(Selector(".svc-question__content--selected div[data-name=question1]").visible).ok();
  await takeScreenshot("rating-selected.png", question, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});

test("Rating adorners with comment", async (t) => {
  await setJSON(jsonComment);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const question = Selector("div[data-name=question1]");
  await takeScreenshot("rating-comment-not-selected.png", question, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t
    .click(question, { offsetY: 40 })
    .expect(Selector(".svc-question__content--selected div[data-name=question1]").visible).ok();
  await takeScreenshot("rating-comment-selected.png", question, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});