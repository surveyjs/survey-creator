import { Selector } from "testcafe";
import { getToolboxItemByText, getVisibleElement, url } from "../helper";
const title = "Delete by key";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Correct focus agter delete by Del key", async t => {
  await t
    .maximizeWindow()
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Single-Line Input"), { speed: 0.5 })
    .click(getToolboxItemByText("Single-Line Input"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content").count).eql(1)
    .click(getToolboxItemByText("Single-Line Input"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content").count).eql(2)
    .click(getVisibleElement(".svc-question__content"), { offsetX: 5, offsetY: 5 })
    .pressKey("delete")
    .expect(getVisibleElement(".svc-question__content").count).eql(1)
    .pressKey("delete")
    .expect(getVisibleElement(".svc-question__content").exists).notOk();
});