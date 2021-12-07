import {
  setJSON, collapseButtonSelector, expandButtonSelector, getPagesLength, getTabbedMenuItemByText,
  objectSelectorButton, objectSelectorPopup, propertyGridSelector, url,
  pageNavigator, creatorTabDesignerName, creatorTabPreviewName
} from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Side bar";

const json = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    }
  ]
};

fixture(title)
  .page(url)
  .beforeEach(async (t) => await t.maximizeWindow());

test("collapse/expand buttons", async (t) => {
  await ClientFunction((json) => { window["creator"].JSON = json; })(json);

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

async function changeToolboxLocation(newVal: string) {
  await ClientFunction((newVal) => {
    window["creator"].toolboxLocation = newVal;
  })(newVal);
}
const toolboxInDesigner = Selector(".svc-creator-tab .svc-toolbox");
const toolboxInSideBar = Selector(".svc-side-bar .svc-toolbox");
const toolboxButtonSelector = Selector(".sv-action-bar-item[title=\"Toolbox\"]");
const settingsButtonSelector = Selector(".sv-action-bar-item[title=\"Settings\"]");

test("toolboxLocation insideSideBar", async (t) => {
  const propertyGridSelector = Selector(".spg-root-modern");
  const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");
  const SingleInputItem = Selector("[aria-label='Single Input toolbox item']");
  const CheckboxItem = Selector("[aria-label='Checkbox toolbox item']");

  await t
    .expect(toolboxInDesigner.visible).ok()
    .expect(toolboxInSideBar.exists).notOk()
    .expect(toolboxButtonSelector.visible).notOk();

  await changeToolboxLocation("insideSideBar");
  await t
    .expect(toolboxInDesigner.exists).notOk()
    .expect(toolboxInSideBar.exists).notOk()
    .expect(toolboxButtonSelector.visible).ok()

    .click(toolboxButtonSelector)
    .expect(toolboxInDesigner.exists).notOk()
    .expect(toolboxInSideBar.visible).ok()
    .expect(propertyGridSelector.exists).notOk()
    .expect(toolboxButtonSelector.visible).ok()

    .click(settingsButtonSelector)
    .expect(toolboxInDesigner.exists).notOk()
    .expect(toolboxInSideBar.exists).notOk()
    .expect(propertyGridSelector.visible).ok()
    .expect(toolboxButtonSelector.visible).ok()

    .click(toolboxButtonSelector)
    .expect(toolboxInDesigner.exists).notOk()
    .expect(toolboxInSideBar.visible).ok()
    .expect(propertyGridSelector.exists).notOk()
    .expect(toolboxButtonSelector.visible).ok();

  await t
    .hover(SingleInputItem)
    .dragToElement(SingleInputItem, EmptyPage);
  await t.expect(await getPagesLength()).eql(1);

  await t
    .hover(CheckboxItem)
    .dragToElement(CheckboxItem, newGhostPagePage);
  await t.expect(await getPagesLength()).eql(2);

  await changeToolboxLocation("right");
  await t
    .expect(toolboxInDesigner.visible).ok()
    .expect(toolboxInSideBar.exists).notOk()
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
    .click(popup.find(".sv-list__item"));

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

test("toolboxLocation insideSideBar: check toolbox items", async (t) => {
  const toolboxItemCount = 20;
  const itemsInToolboxInDesigner = toolboxInDesigner.find(".svc-toolbox__item");
  const visibleItemsInToolboxInDesigner = itemsInToolboxInDesigner.filterVisible();
  const itemsInToolboxInSideBar = toolboxInSideBar.find(".svc-toolbox__item");
  const visibleItemsInToolboxInSideBar = itemsInToolboxInSideBar.filterVisible();

  await t
    .expect(toolboxInDesigner.visible).ok()
    .expect(itemsInToolboxInDesigner.count).eql(toolboxItemCount)
    .expect(visibleItemsInToolboxInDesigner.count).lte(toolboxItemCount)

    .resizeWindow(1500, 600)
    .expect(toolboxInDesigner.visible).ok()
    .expect(itemsInToolboxInDesigner.count).eql(toolboxItemCount)
    .expect(visibleItemsInToolboxInDesigner.count).lt(toolboxItemCount)
    .expect(toolboxInSideBar.exists).notOk();

  await changeToolboxLocation("insideSideBar");
  await t
    .click(toolboxButtonSelector)
    .expect(toolboxInSideBar.visible).ok()
    .expect(toolboxInDesigner.exists).notOk()
    .expect(itemsInToolboxInSideBar.count).eql(toolboxItemCount)
    .expect(visibleItemsInToolboxInSideBar.count).eql(toolboxItemCount)

    .resizeWindow(1920, 900); // reset window size
});