import { Selector, ClientFunction } from "testcafe";
import { addQuestionByAddQuestionButton, getToolboxItemByText, getVisibleElement, setJSON, url } from "../helper";

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