import { getTabbedMenuItemByText, url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid";

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

const expandButtonSelector = Selector(".sv-action-bar-item[title=\"Show Panel\"]");
const collapseButtonSelector = Selector(".sv-action-bar-item[title=\"Hide Panel\"]");
const propertyGridSelector = Selector(".svc-property-panel");
const objectSelectorButton = Selector(".svc-property-panel__header #svd-grid-object-selector .sv-action-bar-item");
const objectSelectorPopup = Selector(".sv-popup .svc-object-selector");

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
    .expect(propertyGridSelector.visible).ok()
    .expect(expandButtonSelector.visible).notOk()
    .expect(collapseButtonSelector.visible).ok()

    .click(collapseButtonSelector)
    .expect(collapseButtonSelector.visible).notOk()
    .expect(expandButtonSelector.nth(1).visible).ok()
    .expect(propertyGridSelector.visible).notOk()

    .click(expandButtonSelector.nth(1))
    .expect(collapseButtonSelector.visible).ok()
    .expect(expandButtonSelector.visible).notOk()
    .expect(propertyGridSelector.visible).ok()

    .click(getTabbedMenuItemByText("Survey Designer"))
    .expect(propertyGridSelector.visible).notOk()
    .expect(expandButtonSelector.visible).ok()
    .expect(collapseButtonSelector.visible).notOk()

    .click(expandButtonSelector)
    .expect(collapseButtonSelector.visible).ok()
    .expect(expandButtonSelector.visible).notOk()
    .expect(propertyGridSelector.visible).ok();
});

test("SelectObject", async (t: TestController) => {

  await t
    .click(getTabbedMenuItemByText("Test Survey"))
    .click(getTabbedMenuItemByText("Translation"))
    .click(getTabbedMenuItemByText("Survey Designer"))
    .expect(objectSelectorPopup.exists).ok()

    .click(objectSelectorButton)
    .expect(objectSelectorPopup.visible).ok()
    .expect(objectSelectorPopup.find("input").focused).ok()
    .expect(Selector(".svc-page__content").classNames).notContains("svc-page__content--selected")

    .click(objectSelectorPopup.find("span").withText("page1"))
    .expect(Selector(".svc-page__content").classNames).contains("svc-page__content--selected")
    .expect(objectSelectorPopup.visible).notOk();
});