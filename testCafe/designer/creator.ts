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
    .expect(Selector("body>div>div.sv-popup, body>div>sv-ng-popup-container>div.sv-popup").exists).ok();
  await ClientFunction(() => {
    window["creator"].dispose();
  })();
  await t
    .expect(Selector("body>div>div.sv-popup, body>div>sv-ng-popup-container>div.sv-popup").exists).notOk();
});