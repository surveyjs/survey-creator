import { getTabbedMenuItemByText, setJSON, creatorTabPreviewName, urlPreviewThemeChanger, creatorTabDesignerName, url } from "../helper";
import { Selector } from "testcafe";
const title = "Preview tab";

const json = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "Question1",
        }
      ]
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Test theme changer with one loaded theme", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(Selector("#themeChanger").visible).notOk();
});

fixture`${title}`.page`${urlPreviewThemeChanger}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Test theme changer with 3 themes", async (t) => {
  const clickAndCheck = async (listID, themeName, visibleSelector, notVisibleSelector_1, notVisibleSelector_2) => {
    await t
      .click(Selector("#themeChanger"))
      .click(Selector(".sv-popup__container .sv-list .sv-list__item").filterVisible().nth(listID));
    await checkVisibility(themeName, visibleSelector, notVisibleSelector_1, notVisibleSelector_2);
  };

  const checkVisibility = async (themeName, visibleSelector, notVisibleSelector_1, notVisibleSelector_2) => {
    await t
      .expect(visibleSelector.visible).ok()
      .expect(notVisibleSelector_1.visible).notOk()
      .expect(notVisibleSelector_2.visible).notOk()
      .expect(Selector("#themeChanger button").withText(themeName).visible).ok();
  };

  const defaultRoot = Selector(".sd-root-modern");
  const modernRoot = Selector(".sv-root-modern");
  const legacyRoot = Selector(".sv_default_css");

  await setJSON(json);

  await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
  await checkVisibility("Default", defaultRoot, modernRoot, legacyRoot);
  await clickAndCheck(1, "Modern", modernRoot, defaultRoot, legacyRoot);

  await t
    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .click(getTabbedMenuItemByText(creatorTabPreviewName));
  await checkVisibility("Modern", modernRoot, defaultRoot, legacyRoot);

  await clickAndCheck(2, "Default (legacy)", legacyRoot, defaultRoot, modernRoot);
  await clickAndCheck(0, "Default", defaultRoot, modernRoot, legacyRoot);
});
