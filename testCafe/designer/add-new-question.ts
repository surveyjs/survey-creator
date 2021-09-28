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
    .expect(Selector("span").withText("Add Question").visible).ok()
    .click(Selector("span").withText("Add Question"))
    .expect(Selector("span").withText("question1").visible).ok()
    .expect(Selector('[class^="svc-question__content svc-question__content--selec"]').visible).ok();
});