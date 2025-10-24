import { url } from "../../helper";

fixture`${"Empty test"}`.page`${url}`;

test("Empty test", async (t) => {
  await t.resizeWindow(1920, 1080);
});