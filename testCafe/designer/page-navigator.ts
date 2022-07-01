import { addQuestionByAddQuestionButton, url, selectedObjectTextSelector } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Page navigator";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(1920, 900);
});

test("Check page navigator track scrolling", async (t) => {
  await ClientFunction(() => {
    window["creator"].JSON = {
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
            }
          ]
        }
      ]
    };
  })();

  await t
    .expect(Selector("svc-page-navigator-item:nth-child(2) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-child(2) > .svc-page-navigator-item--selected").exists).ok()
    .scroll(Selector(".svc-tab-designer--with-page-navigator"), "bottomRight")
    .scroll(Selector(".svc-tab-designer--with-page-navigator"), "bottomRight")
    .expect(Selector("svc-page-navigator-item:nth-child(5) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-child(5) > .svc-page-navigator-item--selected").exists).ok();
});
