import { Selector, ClientFunction } from "testcafe";
import { addQuestionByAddQuestionButton, getToolboxItemByText, getVisibleElement, questionToolbarActions, url } from "../helper";

const title = "Creator";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Creator dispose", async t => {
  await t
    .maximizeWindow()
    .expect(Selector(".sv-popup").exists).ok();
  await ClientFunction(() => {
    window["creator"].dispose();
  })();
  await t
    .expect(Selector(".sv-popup").exists).notOk();
});
test("Select survey on deleting the last question", async t => {
  await t
    .maximizeWindow()
    .hover(getToolboxItemByText("Single-Line Input"), { speed: 0.5 })
    .click(getToolboxItemByText("Single-Line Input"), { speed: 0.5 })
    .click(getVisibleElement(".svc-question__content"), { offsetX: 100, offsetY: 100 })
    .expect(Selector(".sv-string-viewer").withExactText("Visible").exists).ok()
    .click(Selector(questionToolbarActions.find('button[title="Delete"]')))
    .wait(2000)
    .expect(Selector(".sv-string-viewer").withExactText("Show the title").exists).notOk();
});