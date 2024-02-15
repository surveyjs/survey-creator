import { ClientFunction, Selector } from "testcafe";
import { getPropertyGridCategory, getTabbedMenuItemByText, setJSON, takeElementScreenshot, themeSettingsButtonSelector, wrapVisualTest } from "../../helper";

const url = "http://127.0.0.1:8080/testCafe/testcafe-theme-tab";
const title = "Themes tab";
fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

const advancedModeSwitcher = getPropertyGridCategory("Appearance").parent(".spg-title").find(".svc-switcher");

test("Check boxshadow settings", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {};
    await setJSON(json);
    const root = Selector("div[data-name='--sjs-shadow-small']");
    await t.resizeWindow(2000, 2000)
      .click(getTabbedMenuItemByText("Themes"))
      .click(getPropertyGridCategory("Appearance"))
      .click(advancedModeSwitcher)
      .scrollIntoView(root);
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

test("toolbar view", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);
    await setJSON({
      pages: [
        { elements: [{ type: "text", name: "question1" }] },
        { elements: [{ type: "text", name: "question2" }] }
      ]
    });
    await t.click(getTabbedMenuItemByText("Themes"));

    await t.resizeWindow(380, 600);
    await takeElementScreenshot("theme-tab-toolbar_responsive.png", Selector(".svc-footer-bar .svc-toolbar-wrapper"), t, comparer);
  });
});

test("theme setting property grid", async (t) => {
  const expandedGroup = Selector(".spg-theme-builder-root .spg-panel.sd-element--expanded");

  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 4000);
    await setJSON({
      title: "Title",
      pages: [
        { elements: [{ type: "text", name: "question1" }] },
        { elements: [{ type: "text", name: "question2" }] }
      ]
    });
    await t.click(getTabbedMenuItemByText("Themes"));
    const westResizer = Selector(".svc-resizer-west");
    await t.drag(westResizer, -150, 0);

    await ClientFunction(() => document.body.focus())();
    await takeElementScreenshot("theme-editor-property-grid-general-group.png", expandedGroup, t, comparer);

    await t.click(getPropertyGridCategory("General"));
    await t.click(getPropertyGridCategory("Header"));
    await ClientFunction(() => document.body.focus())();
    await takeElementScreenshot("theme-editor-property-grid-header-group.png", expandedGroup, t, comparer);

    await t.click(expandedGroup.find(".sv-button-group__item-caption").withText("Advanced"));
    await takeElementScreenshot("theme-editor-property-grid-header-group-advanced.png", expandedGroup, t, comparer);

    await t.click(getPropertyGridCategory("Header"));
    await t.click(getPropertyGridCategory("Background"));
    await ClientFunction(() => document.body.focus())();
    await takeElementScreenshot("theme-editor-property-grid-background-group.png", expandedGroup, t, comparer);

    await t.click(getPropertyGridCategory("Background"));
    await t.click(getPropertyGridCategory("Appearance"));
    await ClientFunction(() => document.body.focus())();
    await takeElementScreenshot("theme-editor-property-grid-appearance-group.png", expandedGroup, t, comparer);

    await t.click(advancedModeSwitcher);
    await ClientFunction(() => document.body.focus())();
    await takeElementScreenshot("theme-editor-property-grid-advanced-group.png", expandedGroup, t, comparer);
  });
});

test("theme setting property grid mobile", async (t) => {
  const expandedGroup = Selector(".spg-theme-builder-root .spg-panel.sd-element--expanded");

  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(400, 600);
    await setJSON({
      pages: [
        { elements: [{ type: "text", name: "question1" }] },
        { elements: [{ type: "text", name: "question2" }] }
      ]
    });
    await t.click(Selector('button[title="Preview"]'));
    await t.click(themeSettingsButtonSelector);

    await ClientFunction(() => document.body.focus())();
    await takeElementScreenshot("theme-editor-property-grid-general-group-mobile.png", expandedGroup, t, comparer);
  });
});