import { ClientFunction, Selector } from "testcafe";
import { getPropertyGridCategory, getTabbedMenuItemByText, setJSON, takeElementScreenshot, wrapVisualTest } from "../../helper";

const url = "http://127.0.0.1:8080/testCafe/testcafe-no-license";
const title = "No License";
fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Check no license banner", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(800, 600);
    const json = {};
    await setJSON(json);
    const root = Selector(".svc-creator");
    await takeElementScreenshot("no-license.png", root, t, comparer);
    await t.resizeWindow(375, 600);
    await takeElementScreenshot("no-license-mobile.png", root, t, comparer);
  });
});
