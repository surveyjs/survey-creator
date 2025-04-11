import { ClientFunction, Selector } from "testcafe";
import { getPropertyGridCategory, getTabbedMenuItemByText, setJSON, takeElementScreenshot, themeSettingsButtonSelector, wrapVisualTest, url, creatorTabThemeName } from "../../helper";

const themeTabUrl = url.replace(/\/testcafe$/, "/testcafe-theme-tab");
const title = "Themes tab";
fixture`${title}`.page`${themeTabUrl}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

const advancedModeSwitcher = getPropertyGridCategory("Appearance").parent(".spg-title").find(".svc-switcher");

test("Check boxshadow settings", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {};
    await setJSON(json);
    const root = Selector("div[data-name='--sjs-shadow-small']");
    await t.resizeWindow(2000, 2000)
      .click(getTabbedMenuItemByText(creatorTabThemeName))
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
      .click(getTabbedMenuItemByText(creatorTabThemeName));
    await takeElementScreenshot("theme-editor-header.png", root, t, comparer);
    await ClientFunction(() => { window["creator"].allowCollapseSidebar = false; })();
    await takeElementScreenshot("theme-editor-header-no-collapse-button.png", root, t, comparer);
  });
});

test("toolbar view", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);
    await setJSON({
      showQuestionNumbers: "on",
      pages: [
        { elements: [{ type: "text", name: "question1" }] },
        { elements: [{ type: "text", name: "question2" }] }
      ]
    });
    await t.click(getTabbedMenuItemByText(creatorTabThemeName));

    await t.resizeWindow(380, 600);
    await takeElementScreenshot("theme-tab-toolbar_responsive.png", Selector(".svc-footer-bar .svc-toolbar-wrapper"), t, comparer);
  });
});

test("theme setting property grid", async (t) => {
  const expandedGroup = Selector(".spg-theme-builder-root .spg-panel.sd-element--expanded");

  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 4000);
    await setJSON({
      showQuestionNumbers: "on",
      title: "Title",
      pages: [
        { elements: [{ type: "text", name: "question1" }] },
        { elements: [{ type: "text", name: "question2" }] }
      ]
    });
    await t.click(getTabbedMenuItemByText(creatorTabThemeName));
    const westResizer = Selector(".svc-resizer-west");
    await t.drag(westResizer, -150, 0);

    await ClientFunction(() => document.body.focus())();
    await takeElementScreenshot("theme-editor-property-grid-general-group.png", expandedGroup, t, comparer);

    await t.click(getPropertyGridCategory("General"));
    await t.click(getPropertyGridCategory("Header"));
    await t.click(expandedGroup.find(".spg-button-group__item-caption").withText("Basic"));
    await ClientFunction(() => document.body.focus())();
    await takeElementScreenshot("theme-editor-property-grid-header-group.png", expandedGroup, t, comparer);

    await t.click(expandedGroup.find(".spg-button-group__item-caption").withText("Advanced"));
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
      showQuestionNumbers: "on",
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

test("Reset theme popup dialog view", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);
    await t.click(getTabbedMenuItemByText(creatorTabThemeName));

    const expandedGroup = Selector(".spg-theme-builder-root .spg-panel.sd-element--expanded");
    await t
      .click(getPropertyGridCategory("General"))
      .click(expandedGroup.find(".spg-button-group__item-caption").withText("Dark"))
      .click(Selector("#svc-reset-theme .svc-toolbar__item"));

    await takeElementScreenshot("theme-tab-reset-popup-dialog.png", Selector(".sv-popup__body-content").filterVisible(), t, comparer);
  });
});