import {
  setJSON, collapseButtonSelector, expandButtonSelector, getPagesLength, getTabbedMenuItemByText,
  objectSelectorButton, objectSelectorPopup, propertyGridSelector, url,
  pageNavigator, creatorTabDesignerName, creatorTabPreviewName, changeToolboxLocation, SingleInputToolboxItem
} from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Side bar";

const json = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: [
        "Item 1",
        "Item 2",
        "Item 3"
      ]
    }
  ]
};

fixture(title)
  .page(url)
  .beforeEach(async (t) => await t.maximizeWindow());

test("collapse/expand buttons", async (t) => {
  await setJSON(json);

  await t
    .expect(propertyGridSelector.visible).ok()
    .expect(expandButtonSelector.visible).notOk()
    .expect(collapseButtonSelector.visible).ok()

    .click(collapseButtonSelector)
    .expect(collapseButtonSelector.visible).notOk()
    .expect(expandButtonSelector.visible).ok()
    .expect(propertyGridSelector.visible).notOk()

    .click(expandButtonSelector)
    .expect(collapseButtonSelector.visible).ok()
    .expect(expandButtonSelector.visible).notOk()
    .expect(propertyGridSelector.visible).ok()

    .click(collapseButtonSelector)
    .click(getTabbedMenuItemByText("Translation"))
    .expect(collapseButtonSelector.visible).notOk()
    .expect(expandButtonSelector.visible).ok()
    .expect(propertyGridSelector.visible).notOk()

    .click(expandButtonSelector)
    .expect(collapseButtonSelector.visible).ok()
    .expect(expandButtonSelector.visible).notOk()
    .expect(propertyGridSelector.visible).ok()

    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .expect(collapseButtonSelector.visible).ok()
    .expect(expandButtonSelector.visible).notOk()
    .expect(propertyGridSelector.visible).ok();
});

test("SelectObject", async (t: TestController) => {
  await setJSON({ pages: [{ name: "page1" }] });
  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(getTabbedMenuItemByText("Translation"))
    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .expect(objectSelectorPopup.exists).notOk()

    .click(objectSelectorButton)
    .expect(objectSelectorPopup.visible).ok()
    .expect(objectSelectorPopup.find(".sv-list__item").nth(0).focused).ok()
    .expect(Selector(".svc-page__content").classNames).notContains("svc-page__content--selected")

    .click(objectSelectorPopup.find("span").withText("page1"))
    .expect(Selector(".svc-page__content").classNames).contains("svc-page__content--selected")
    .expect(objectSelectorPopup.visible).notOk();
});

const toolboxInDesigner = Selector(".svc-creator-tab .svc-toolbox");
const toolboxInSidebar = Selector(".svc-side-bar .svc-toolbox");
const toolboxButtonSelector = Selector(".sv-action-bar-item[title=\"Toolbox\"]");
const settingsButtonSelector = Selector(".sv-action-bar-item[title=\"Open survey settings\"]");

test("toolboxLocation sidebar", async (t) => {
  const propertyGridSelector = Selector(".spg-root-modern");
  const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");
  const CheckboxItem = Selector("[aria-label='Checkboxes']");

  await setJSON({ pages: [{ name: "page1" }] });
  await t
    .expect(toolboxInDesigner.visible).ok()
    .expect(toolboxInSidebar.exists).notOk()
    .expect(toolboxButtonSelector.visible).notOk();
  await ClientFunction(() => window["creator"].toolbox.removeCategories())();
  await changeToolboxLocation("sidebar");
  await t
    .expect(toolboxInDesigner.exists).notOk()
    .expect(toolboxInSidebar.exists).notOk()
    .expect(toolboxButtonSelector.visible).ok()

    .click(toolboxButtonSelector)
    .expect(toolboxInDesigner.exists).notOk()
    .expect(toolboxInSidebar.visible).ok()
    .expect(propertyGridSelector.exists).notOk()
    .expect(toolboxButtonSelector.visible).ok()

    .click(settingsButtonSelector)
    .expect(toolboxInDesigner.exists).notOk()
    .expect(toolboxInSidebar.exists).notOk()
    .expect(propertyGridSelector.visible).ok()
    .expect(toolboxButtonSelector.visible).ok()

    .click(toolboxButtonSelector)
    .expect(toolboxInDesigner.exists).notOk()
    .expect(toolboxInSidebar.visible).ok()
    .expect(propertyGridSelector.exists).notOk()
    .expect(toolboxButtonSelector.visible).ok();

  await t
    .hover(SingleInputToolboxItem)
    .dragToElement(SingleInputToolboxItem, EmptyPage);
  await t.expect(await getPagesLength()).eql(1);

  await t
    .hover(CheckboxItem)
    .dragToElement(CheckboxItem, newGhostPagePage);
  await t.expect(await getPagesLength()).eql(2);

  await changeToolboxLocation("right");
  await t
    .expect(toolboxInDesigner.visible).ok()
    .expect(toolboxInSidebar.exists).notOk()
    .expect(toolboxButtonSelector.visible).notOk()
    .expect(propertyGridSelector.visible).ok();
});

test("toolboxLocation left", async (t) => {
  const toolboxInDesigner = Selector(".svc-creator-tab .svc-toolbox");
  const dotsInToolbox = toolboxInDesigner.find(".sv-dots__item");
  const popup = Selector(".sv-popup__container").filterVisible();

  await setJSON({
    pages: [
      { name: "page1", elements: [{ type: "text", name: "q1" }], },
      { name: "page2", elements: [{ type: "text", name: "q2" }], }
    ]
  });
  await t
    .expect(toolboxInDesigner.visible).ok()
    .resizeWindow(1500, 600)

    .expect(dotsInToolbox.visible).ok()
    .click(dotsInToolbox)
    .expect(popup.visible).ok()
    .expect(popup.offsetTop).gte(0)
    .expect(popup.offsetLeft).gte(0)
    .click(popup.find(".sv-list__item"))

    .click(pageNavigator)
    .expect(popup.visible).ok()
    .expect(popup.offsetTop).gte(0)
    .expect(popup.offsetLeft).lt(1500 - 100) // window width - popup width
    .click(popup.find(".sv-list__item").withText("page2"));

  await changeToolboxLocation("right");
  await t
    .click(dotsInToolbox)
    .expect(popup.visible).ok()
    .expect(popup.offsetTop).gte(0)
    .expect(popup.offsetLeft).lt(1500 - 100) // window width - popup width
    .click(popup.find(".sv-list__item"))

    .click(pageNavigator)
    .expect(popup.visible).ok()
    .expect(popup.offsetTop).gte(0)
    .expect(popup.offsetLeft).gte(0)
    .click(popup.find(".sv-list__item"))

    .resizeWindow(1920, 900); // reset window size
});

test("toolboxLocation sidebar: check toolbox items", async (t) => {
  const toolboxItemCount = 21;
  const itemsInToolboxInDesigner = toolboxInDesigner.find(".svc-toolbox__item");
  const visibleItemsInToolboxInDesigner = itemsInToolboxInDesigner.filterVisible();
  const itemsInToolboxInSidebar = toolboxInSidebar.find(".svc-toolbox__item");
  const visibleItemsInToolboxInSidebar = itemsInToolboxInSidebar.filterVisible();

  await t
    .expect(toolboxInDesigner.visible).ok()
    .expect(itemsInToolboxInDesigner.count).eql(toolboxItemCount)
    .expect(visibleItemsInToolboxInDesigner.count).lte(toolboxItemCount)

    .resizeWindow(1500, 600)
    .expect(toolboxInDesigner.visible).ok()
    .expect(itemsInToolboxInDesigner.count).eql(toolboxItemCount)
    .expect(visibleItemsInToolboxInDesigner.count).lt(toolboxItemCount)
    .expect(toolboxInSidebar.exists).notOk();

  await ClientFunction(() => window["creator"].toolbox.removeCategories())();
  await changeToolboxLocation("sidebar");
  await t
    .click(toolboxButtonSelector)
    .expect(toolboxInSidebar.visible).ok()
    .expect(toolboxInDesigner.exists).notOk()
    .expect(itemsInToolboxInSidebar.count).eql(toolboxItemCount)
    .expect(visibleItemsInToolboxInSidebar.count).eql(toolboxItemCount)

    .resizeWindow(1920, 900); // reset window size
});

test("tablet size click outside", async (t) => {
  await t.resizeWindow(820, 1180);

  const getSidebarOpen = ClientFunction(() => { return !!window["creator"].sidebar.flyoutPanelMode; });

  const showSidebarButton = Selector("[title='Show Panel']");
  const shadowArea = Selector(".svc-side-bar__shadow");

  let isSidebarOpen = await getSidebarOpen();
  await t.expect(isSidebarOpen).notOk;

  await t.click(showSidebarButton);
  isSidebarOpen = await getSidebarOpen();
  await t.expect(isSidebarOpen).ok;

  await t.click(shadowArea, { offsetX: 10 });

  isSidebarOpen = await getSidebarOpen();
  await t.expect(isSidebarOpen).notOk;
});

test("Focus in Property grid", async (t) => {
  await setJSON({
    questions: [
      {
        type: "text",
        name: "test_q"
      }
    ]
  });
  await t.resizeWindow(820, 1180);

  const getSidebarOpen = ClientFunction(() => { return !!window["creator"].sidebar.flyoutPanelMode; });

  const hideSidebarButton = Selector("[title='Hide Panel']");

  let isSidebarOpen = await getSidebarOpen();
  await t.expect(isSidebarOpen).notOk;

  await t.click(Selector(".svc-question__adorner"), { offsetX: 5, offsetY: 5 });
  await t.expect(Selector(".svc-question__adorner button").withText("Settings").visible).ok();
  await t.click(Selector(".svc-question__adorner button").withText("Settings"));
  isSidebarOpen = await getSidebarOpen();
  await t.expect(isSidebarOpen).ok;
  await t.expect(Selector("input").withText("test_q").focused).ok;

  await t.click(hideSidebarButton);
  isSidebarOpen = await getSidebarOpen();
  await t.expect(isSidebarOpen).notOk;
  await t.expect(Selector(".svc-question__content").focused).ok;
});