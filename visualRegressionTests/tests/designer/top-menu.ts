import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "Top Menu Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Top menu on designer tab", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(1920, 1080);

    const topBarElement = Selector(".svc-top-bar");

    await takeElementScreenshot("top-menu-designer-tab.png", topBarElement, t, comparer);

    await t.hover(Selector(".svc-tabbed-menu-item").nth(1));
    await takeElementScreenshot("top-menu-preview-hover.png", topBarElement, t, comparer);

    await t
      .click(Selector(".svc-toolbox"))
      .click(Selector(".svc-toolbox"));
    await takeElementScreenshot("top-menu-undo-active.png", topBarElement, t, comparer);

    await t
      .hover(Selector("#action-undo"));
    await takeElementScreenshot("top-menu-undo-active-hovered.png", topBarElement, t, comparer);

    await t
      .hover(Selector("#action-redo"));
    await takeElementScreenshot("top-menu-redo-inactive-hovered.png", topBarElement, t, comparer);

    await t
      .click(Selector("#action-undo .sv-action-bar-item"))
      .click(Selector(".svc-side-bar .spg-row").nth(1));
    await takeElementScreenshot("top-menu-undo-and-redo-active.png", topBarElement, t, comparer);

    await t
      .click(Selector("#action-undo .sv-action-bar-item"))
      .click(Selector(".svc-side-bar .spg-row").nth(1));
    await takeElementScreenshot("top-menu-redo-active.png", topBarElement, t, comparer);

    await t
      .hover(Selector("[title='Survey settings']"));
    await takeElementScreenshot("top-menu-settings-checked-hovered.png", topBarElement, t, comparer);

    await ClientFunction(() => {
      window["creator"].toolbar.actions.map(a => a.pressed = true);
    })();
    await takeElementScreenshot("top-menu-pressed-buttons.png", topBarElement, t, comparer);
  });
});
test("Top menu with single item", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(1920, 1080);

    const topBarElement = Selector(".svc-top-bar");

    await ClientFunction(() => {
      window["creator"].toolbarItems.forEach(a => a.visible = a.id == "svd-settings");
    })();

    await takeElementScreenshot("top-menu-designer-tab-single-item.png", topBarElement, t, comparer);
  });
});

test("Tabbed menu: icons responsivity", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(900, 1080);
    const topBarElement = Selector(".svc-top-bar");
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await ClientFunction(() => (window as any).creator.tabResponsivenessMode = "icons")();
    await takeElementScreenshot("top-menu-responsivity-icons-big.png", topBarElement, t, comparer);
    await t.resizeWindow(700, 1080);
    await takeElementScreenshot("top-menu-responsivity-icons-medium.png", topBarElement, t, comparer);
    await t.resizeWindow(600, 1080);
    await takeElementScreenshot("top-menu-responsivity-icons-small.png", topBarElement, t, comparer);
  });
});