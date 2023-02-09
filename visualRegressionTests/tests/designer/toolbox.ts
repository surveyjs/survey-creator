import { ClientFunction, Selector } from "testcafe";
import { url, changeToolboxLocation, getTabbedMenuItemByText, takeElementScreenshot, setJSON, collapseButtonSelector, wrapVisualTest } from "../../helper";

const title = "Toolbox Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const translationTab = getTabbedMenuItemByText("Translation");

test("Left toolbox", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxItem = Selector(".svc-toolbox__item");
    const toolboxItemDots = Selector(".svc-toolbox__tool .sv-dots__item");
    const toolboxElement = Selector(".svc-toolbox");

    await setJSON({ pages: [{ name: "page1" }] });
    await t.resizeWindow(2560, 1440);
    await takeElementScreenshot("toolbox-left.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-left-hover-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1510, 870);
    await takeElementScreenshot("toolbox-left-adaptive.png", toolboxElement, t, comparer);

    await t.hover(toolboxItemDots);
    await takeElementScreenshot("toolbox-left-hover-dots-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await takeElementScreenshot("toolbox-left-adaptive-compact.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-left-compact-hover-item.png", toolboxElement, t, comparer);

    await t.click(toolboxItemDots);
    await takeElementScreenshot("toolbox-left-popup.png", Selector(".sv-popup.svc-toolbox-popup"), t, comparer);

    await t.resizeWindow(2560, 1440);
  });
});

test("Right toolbox", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxItem = Selector(".svc-toolbox__item");
    const toolboxItemDots = Selector(".svc-toolbox__tool .sv-dots__item");

    await setJSON({ pages: [{ name: "page1" }] });
    await t
      .resizeWindow(2560, 1440)
      .click(collapseButtonSelector);
    await changeToolboxLocation("right");

    const toolboxElement = Selector(".svc-toolbox");
    await takeElementScreenshot("toolbox-right.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-hover-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1510, 870);
    await takeElementScreenshot("toolbox-right-adaptive.png", toolboxElement, t, comparer);

    await t.hover(toolboxItemDots);
    await takeElementScreenshot("toolbox-right-hover-dots-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await takeElementScreenshot("toolbox-right-adaptive-compact.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-compact-hover-item.png", toolboxElement, t, comparer);

    await t.click(toolboxItemDots);
    await takeElementScreenshot("toolbox-right-popup.png", Selector(".sv-popup.svc-toolbox-popup"), t, comparer);
  });
});

test("Right toolbox (rtl)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxItem = Selector(".svc-toolbox__item");
    const toolboxItemDots = Selector(".svc-toolbox__tool .sv-dots__item");

    await ClientFunction(() => {
      document.body.setAttribute("dir", "rtl");
    })();

    await setJSON({ pages: [{ name: "page1" }] });
    await t
      .resizeWindow(2560, 1440)
      .click(collapseButtonSelector);

    const toolboxElement = Selector(".svc-toolbox");
    await takeElementScreenshot("toolbox-right-rtl.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-rtl-hover-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1510, 870);
    await takeElementScreenshot("toolbox-right-rtl-adaptive.png", toolboxElement, t, comparer);

    await t.hover(toolboxItemDots);
    await takeElementScreenshot("toolbox-right-rtl-hover-dots-item.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await takeElementScreenshot("toolbox-right-rtl-adaptive-compact.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-rtl-compact-hover-item.png", toolboxElement, t, comparer);

    await t.click(toolboxItemDots);
    await takeElementScreenshot("toolbox-right-rtl-popup.png", Selector(".sv-popup.svc-toolbox-popup"), t, comparer);
  });
});

test("toolbox inside sidebar", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxItem = Selector(".svc-toolbox__item");
    const toolboxButtonSelector = Selector(".sv-action-bar-item[title=\"Toolbox\"]");

    await changeToolboxLocation("sidebar");
    await t
      .resizeWindow(1240, 870)
      .click(toolboxButtonSelector)
      .resizeWindow(2560, 1440);

    const toolboxElement = Selector(".svc-toolbox");
    await takeElementScreenshot("toolbox-inside-sidebar.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-inside-sidebar-hover-item.png", toolboxElement, t, comparer);
  });
});

test("Toolbox tool pressed state", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);
    const toolboxTool = Selector(".svc-toolbox__tool");

    await t.dispatchEvent(toolboxTool, "pointerdown");

    await takeElementScreenshot("toolbox-tool-pressed-state.png", toolboxTool, t, comparer);

    await t.dispatchEvent(toolboxTool, "pointerup");
    await takeElementScreenshot("toolbox-tool-normal-state.png", toolboxTool, t, comparer);
  });
});

test("designer tab view with page navigator", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      pages: [
        {
          "name": "page1",
          "elements": [{ "type": "text", "name": "question1" }]
        },
        {
          "name": "page2",
          "elements": [{ "type": "text", "name": "question2" }]
        }
      ]
    });
    const designerTab = Selector(".svc-creator-tab");
    await t
      .click(".sd-page__title")
      .resizeWindow(1450, 600);
    await takeElementScreenshot("designer-tab-page-navigator-toolbox-left.png", designerTab, t, comparer);

    await changeToolboxLocation("right");
    await takeElementScreenshot("designer-tab-page-navigator-toolbox-right.png", designerTab, t, comparer);
  });
});

test("Toolbox category collapsed", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");

    await setJSON({ pages: [{ name: "page1" }] });
    await ClientFunction(() => {
      var toolbox = window["creator"].toolbox;
      toolbox.changeCategories([{ name: "matrixdropdown", category: "matrix" }]);
      toolbox.showCategoryTitles = true;
      toolbox.allowExpandMultipleCategories = true;
    })();
    await t.resizeWindow(2560, 1440);
    await t.wait(200);
    await takeElementScreenshot("toolbox-categories-collapsed.png", toolboxElement, t, comparer);
  });
});

test("Toolbox with category titles", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");

    await setJSON({ pages: [{ name: "page1" }] });
    await ClientFunction(() => {
      var toolbox = window["creator"].toolbox;
      toolbox.keepAllCategoriesExpanded = true;
      toolbox.changeCategories([]);
      toolbox.showCategoryTitles = true;
    })();
    await t.resizeWindow(2560, 1440);
    await t.wait(200);
    await takeElementScreenshot("toolbox-categories.png", toolboxElement, t, comparer);
  });
});