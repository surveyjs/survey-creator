import { Selector } from "testcafe";
import { url } from "../helper";
const title = "Add new question";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Add New Question", async t => {
  await t
    .maximizeWindow()
    .expect(Selector(".svc-page__add-new-question > span").withText("Add Question").visible).ok()
    .click(Selector(".svc-page__add-new-question > span").withText("Add Question"))
    .expect(Selector("span").withText("question1").visible).ok()
    .expect(Selector('[class^="svc-question__content svc-question__content--selec"]').visible).ok()
    .click(Selector(".svc-page__add-new-question > button.svc-page__question-type-selector"))
    .wait(100)
    .pressKey("p")
    .expect(Selector(".sv-popup:not(.sv-popup--overlay) li").withText("Panel").visible).ok()
    .click(Selector(".sv-popup:not(.sv-popup--overlay) li").withText("Panel"))
    .click(Selector(".svc-panel__add-new-question > span").withText("Add Question"))
    .expect(Selector("span").withText("question1").visible).ok();
});