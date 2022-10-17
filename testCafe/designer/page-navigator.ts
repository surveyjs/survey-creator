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

  const firstPageNavigatorItem = "svc-page-navigator-item:nth-child(1) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-of-type(1) > .svc-page-navigator-item--selected";
  const lastPageNavigatorItem = "svc-page-navigator-item:nth-child(4) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-of-type(4) > .svc-page-navigator-item--selected";

  await t
    .expect(Selector(firstPageNavigatorItem).exists).ok()
    .expect(Selector(lastPageNavigatorItem).exists).notOk()
    .scroll(Selector(".svc-tab-designer--with-page-navigator"), "bottomRight")
    .scroll(Selector(".svc-tab-designer--with-page-navigator"), "bottomRight")
    .expect(Selector(firstPageNavigatorItem).exists).notOk()
    .expect(Selector(lastPageNavigatorItem).exists).ok();
});
