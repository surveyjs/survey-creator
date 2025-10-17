import { url, wrapVisualTest } from "../../helper";

fixture`${"Empty test"}`.page`${url}`;

test("Empty test", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
  });
});