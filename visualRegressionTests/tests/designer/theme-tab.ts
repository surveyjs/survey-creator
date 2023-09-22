import { ClientFunction, Selector } from "testcafe";
import { getTabbedMenuItemByText, setJSON, takeElementScreenshot, wrapVisualTest } from "../../helper";

const url = "http://127.0.0.1:8080/testCafe/testcafe-theme-tab.html";
const title = "Themes tab";
fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Check boxshadow settings", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {};
    await setJSON(json);
    const root = Selector("div[data-name='--sjs-shadow-small']");
    await t.resizeWindow(2000, 2000)
      .click(getTabbedMenuItemByText("Themes"))
      .click(Selector("h4[aria-label='Advanced']"));
    await takeElementScreenshot("boxshadow-one-panel.png", root, t, comparer);
    await t.click(".spg-paneldynamic__add-btn");
    await t.hover(root, { offsetX: 0, offsetY: 0 });
    await ClientFunction(() => { document.body.focus(); })();
    await takeElementScreenshot("boxshadow-two-panels.png", root, t, comparer);
  });
});

test("Check sidebar header", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {};
    const root = Selector(".svc-side-bar__container-header ").filterVisible();
    await t.resizeWindow(2000, 2000)
      .click(getTabbedMenuItemByText("Themes"));
    await takeElementScreenshot("theme-editor-header.png", root, t, comparer);
    await ClientFunction(() => { window["creator"].allowCollapseSidebar = false; })();
    await takeElementScreenshot("theme-editor-header-no-collapse-button.png", root, t, comparer);
  });
});
