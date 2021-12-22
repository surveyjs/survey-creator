import { ClientFunction, Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions } from "../../helper";

const title = "Designer surface";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Check section", async (t) => {
  await t.resizeWindow(1920, 1080);
  await t.wait(1000);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await ClientFunction((json) => { window["creator"].JSON = json; })({
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
          {
            "type": "text",
            "name": "question2",
            title: "Question 2",
            startWithNewLine: false,
          },
          {
            "type": "text",
            "name": "question3",
            title: "Question 3",
            startWithNewLine: false,
          }
        ]
      }
    ]
  });
  await takeScreenshot("questions-in-one-row.png", Selector(".svc-row .sd-row"), screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

});
