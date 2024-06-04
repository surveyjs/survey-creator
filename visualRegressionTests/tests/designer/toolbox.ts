import { ClientFunction, Selector } from "testcafe";
import { url, changeToolboxLocation, getTabbedMenuItemByText, takeElementScreenshot, setJSON, collapseButtonSelector, wrapVisualTest, changeToolboxScrolling, getToolboxItemByText } from "../../helper";

const title = "Toolbox Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const translationTab = getTabbedMenuItemByText("Translation");

test("Left toolbox", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
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
    await takeElementScreenshot("toolbox-left-popup.png", null, t, comparer);

    await t.resizeWindow(2560, 1440);
  });
});

test("Right toolbox", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
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
    await takeElementScreenshot("toolbox-right-popup.png", null, t, comparer);
  });
});

test("Right toolbox (rtl)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(false);
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
    await takeElementScreenshot("toolbox-right-rtl-popup.png", null, t, comparer);
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
    await changeToolboxScrolling(false);
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
    await t.resizeWindow(2560, 1440);
    const toolboxElement = Selector(".svc-toolbox");
    await setJSON({ pages: [{ name: "page1" }] });
    await ClientFunction(() => { window["creator"].toolbox.changeCategories([{ name: "matrixdropdown", category: "matrix-custom" }]); })();
    await ClientFunction(() => { window["creator"].toolbox.showCategoryTitles = true; })();
    await ClientFunction(() => { window["creator"].toolbox.allowExpandMultipleCategories = true; })();
    await t.expect(Selector(".svc-toolbox__category-header--collapsed").withText("matrix-custom").visible).ok();
    await takeElementScreenshot("toolbox-categories-collapsed.png", toolboxElement, t, comparer);
  });
});

test("Toolbox with category titles", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");

    await setJSON({ pages: [{ name: "page1" }] });
    await ClientFunction(() => { window["creator"].toolbox.keepAllCategoriesExpanded = true; })();
    await ClientFunction(() => { window["creator"].toolbox.changeCategories([]); })();
    await ClientFunction(() => { window["creator"].toolbox.showCategoryTitles = true; })();
    await t.resizeWindow(2560, 1440);
    await takeElementScreenshot("toolbox-categories.png", toolboxElement, t, comparer);
  });
});

test("Toolbox with subtypes (ltr)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxElement = Selector(".svc-toolbox");
    const subtypesPopup = Selector(".sv-popup.sv-popup-inner.toolbox-subtypes .sv-popup__container").filterVisible();

    await setJSON({ pages: [{ name: "page1" }] });
    await t.resizeWindow(2560, 1440)
      .wait(300)
      .hover(getToolboxItemByText("Rating Scale"));
    await takeElementScreenshot("toolbox-left-rating-subtypes.png", toolboxElement, t, comparer);

    await t.hover(getToolboxItemByText("Stars"));
    await takeElementScreenshot("toolbox-left-rating-subtype-hovered.png", subtypesPopup, t, comparer);
  });
});

test("Toolbox with subtypes (rtl)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => {
      document.body.setAttribute("dir", "rtl");
    })();

    const toolboxElement = Selector(".svc-toolbox");
    const subtypesPopup = Selector(".sv-popup.sv-popup-inner.toolbox-subtypes .sv-popup__container").filterVisible();

    await setJSON({ pages: [{ name: "page1" }] });
    await t.resizeWindow(2560, 1440)
      .wait(300)
      .hover(getToolboxItemByText("Rating Scale"));
    await takeElementScreenshot("toolbox-right-rating-subtypes.png", toolboxElement, t, comparer);

    await t.hover(getToolboxItemByText("Stars"));
    await takeElementScreenshot("toolbox-right-rating-subtype-hovered.png", subtypesPopup, t, comparer);
  });
});

test("Left toolbox - scroll", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxScrolling(true);

    const toolboxItem = Selector(".svc-toolbox__item").nth(5);
    const toolboxElement = Selector(".svc-toolbox");
    const creatorTabElement = Selector(".svc-creator-tab");

    await t
      .resizeWindow(1510, 870);
    await takeElementScreenshot("toolbox-left-scroll.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await t.expect(Selector(".svc-toolbox--compact").visible).ok();
    await takeElementScreenshot("toolbox-left-scroll-compact.png", creatorTabElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-left-scroll-compact-hover-item.png", creatorTabElement, t, comparer);

    await t.resizeWindow(2560, 1440);
  });
});

test("Right toolbox - scroll", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxItem = Selector(".svc-toolbox__item").nth(5);

    await setJSON({ pages: [{ name: "page1" }] });
    await t
      .resizeWindow(2560, 1440)
      .click(collapseButtonSelector);
    await changeToolboxLocation("right");
    await changeToolboxScrolling(true);

    const toolboxElement = Selector(".svc-toolbox");
    await t
      .resizeWindow(1510, 870);
    await takeElementScreenshot("toolbox-right-scroll.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await takeElementScreenshot("toolbox-right-scroll-compact.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-scroll-compact-hover-item.png", toolboxElement, t, comparer);
  });
});

test("Right toolbox (rtl) - scroll", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const toolboxItem = Selector(".svc-toolbox__item").nth(5);

    await ClientFunction(() => {
      document.body.setAttribute("dir", "rtl");
    })();

    await setJSON({ pages: [{ name: "page1" }] });
    await t
      .resizeWindow(2560, 1440)
      .click(collapseButtonSelector);
    await changeToolboxScrolling(true);
    const toolboxElement = Selector(".svc-toolbox");

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1510, 870);
    await takeElementScreenshot("toolbox-right-rtl-scroll.png", toolboxElement, t, comparer);

    await t
      .hover(translationTab) // move cursor from toolboxItem
      .resizeWindow(1240, 870);
    await takeElementScreenshot("toolbox-right-rtl-scroll-compact.png", toolboxElement, t, comparer);

    await t.hover(toolboxItem);
    await takeElementScreenshot("toolbox-right-rtl-scroll-compact-hover-item.png", toolboxElement, t, comparer);
  });
});
