import { Selector } from "testcafe";
import { collapseButtonSelector, pageNavigator, propertyGridSelector, questions, questionToolbarActions, setJSON, toolbox, toolboxItemIcons, toolboxItemTitles, url } from "../helper";
const title = "Responsiveness";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

const flyoutPropertyGrid = Selector(".svc-flyoutPanelMode-panel");

test("Check base responsiveness for tabbed menu", async (t) => {
  const tabbedMenuItemSelector = Selector(".svc-tabbed-menu .svc-tabbed-menu-item-container:nth-child(5)");
  await t
    .click(collapseButtonSelector)
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
    .click(collapseButtonSelector)
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

test.before(async t => {
  await t.resizeWindow(1920, 900);
})
("Responsive creator: toolbox & page navigator", async (t) => {
  await setJSON({
    pages: [
      {
        elements: [{ type: "text", name: "question1" }]
      },
      {
        elements: [{ type: "text", name: "question2" }]
      },
      {
        elements: [{ type: "text", name: "question2" }]
      }
    ]
  });
  await t
    .click(collapseButtonSelector)
    .expect(toolbox.visible).ok()
    .expect(toolboxItemIcons.count).eql(20)
    .expect(toolboxItemTitles.count).eql(20)
    .expect(pageNavigator.visible).ok()

    .resizeWindow(1000, 900)
    .expect(toolbox.visible).ok()
    .expect(toolboxItemIcons.count).eql(20)
    .expect(toolboxItemTitles.count).eql(0)
    .expect(pageNavigator.visible).ok()

    .resizeWindow(750, 500)
    .expect(toolbox.exists).notOk()
    .expect(pageNavigator.exists).notOk();
});

test.before(async t => {
  await t.resizeWindow(1920, 900);
})
("Responsive creator: property grid", async (t) => {
  await setJSON({
    pages: [
      {
        elements: [{ type: "text", name: "question1" }, { type: "text", name: "question2" }]
      },
      {
        elements: [{ type: "text", name: "question2" }]
      }
    ]
  });
  const resizer = Selector(".svc-resizer");
  await t
    .click(questions.find(".sv-string-editor").withText("question1"))
    .expect(propertyGridSelector.visible).ok()
    .expect(propertyGridSelector.offsetWidth).eql(450)
    .expect(flyoutPropertyGrid.exists).notOk()
    .expect(questionToolbarActions.count).eql(4)

    .drag(resizer, 100, 0)
    .expect(propertyGridSelector.offsetWidth).eql(350)

    .resizeWindow(750, 700)
    .expect(propertyGridSelector.visible).ok()
    .expect(propertyGridSelector.offsetWidth).eql(350)
    .expect(flyoutPropertyGrid.exists).ok()

    .drag(resizer, -100, 0)
    .expect(propertyGridSelector.offsetWidth).eql(450)

    .click(collapseButtonSelector)
    .expect(propertyGridSelector.visible).notOk()
    .expect(flyoutPropertyGrid.exists).notOk()

    .click(questions.find(".sv-string-editor").withText("question2"))
    .expect(questionToolbarActions.count).eql(5)

    .click(questionToolbarActions.withText("Settings"))
    .expect(propertyGridSelector.visible).ok()
    .expect(flyoutPropertyGrid.exists).ok()

    .click(collapseButtonSelector)
    .expect(propertyGridSelector.visible).notOk()
    .expect(flyoutPropertyGrid.exists).notOk();
});