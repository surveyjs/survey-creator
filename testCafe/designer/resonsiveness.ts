import { Selector } from "testcafe";
import { url } from "../helper";
const title = "Responsiveness";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Check base responsiveness for tabbed menu", async (t) => {
  const tabbedMenuItemSelector = Selector(".svc-tabbed-menu .svc-tabbed-menu-item-container:nth-child(5)");
  await t
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk()
    .resizeWindow(932, 969)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok()
    .click(".svc-tabbed-menu-item-container.sv-dots");
  const popupSelector = Selector(".sv-popup").filterVisible();
  await t
    .expect(popupSelector.find(".sv-list__item").withText("Translation").visible).ok()
    .pressKey("esc")
    .expect(popupSelector.visible).notOk()
    .maximizeWindow()
    .expect(await tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok();
});

test("Check base responsiveness for toolbox", async (t) => {
  const tabbedMenuItemSelector = Selector(".svc-toolbox .svc-toolbox__tool:nth-child(20)");
  await t
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk()
    .resizeWindow(932, 632)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok()
    .click(".svc-toolbox__tool.sv-dots");
  const popupSelector = Selector(".sv-popup").filterVisible();
  await t
    .expect(popupSelector.find(".sv-list__item").withText("Panel (dynamic panels)").visible).ok()
    .pressKey("esc")
    .expect(popupSelector.visible).notOk()
    .maximizeWindow()
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk();
});
