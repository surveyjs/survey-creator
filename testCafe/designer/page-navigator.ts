import { addQuestionByAddQuestionButton, url, selectedObjectTextSelector } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Page navigator";

export function getAddNewQuestionButton(n = 0) {
  return Selector(".svc-page__add-new-question > span").withText("Add Question").nth(n);
}

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

test("PageNavigator shown if scrolling exists", async t => {
  await t.resizeWindow(1600, 1300);
  await t
    .expect(getAddNewQuestionButton().visible).ok()
    .click(getAddNewQuestionButton())
    .expect(Selector("span").withText("question1").visible).ok()
    .expect(Selector(".svc-page-navigator").visible).notOk()
    .click(getAddNewQuestionButton(1))
    .expect(Selector("span").withText("question2").visible).ok()
    .expect(Selector(".svc-page-navigator").visible).notOk()
    .click(getAddNewQuestionButton(2))
    .expect(Selector("span").withText("question3").visible).ok()
    .expect(Selector(".svc-page-navigator").visible).ok()
    .resizeWindow(1600, 1700)
    .expect(Selector(".svc-page-navigator").visible).notOk()
    .resizeWindow(1600, 1300)
    .expect(Selector(".svc-page-navigator").visible).ok()
    .click(Selector(".svc-question__content--selected span").withText("Delete"))
    .expect(Selector("span").withText("question3").visible).notOk()
    .expect(Selector(".svc-page-navigator").visible).notOk();
});
