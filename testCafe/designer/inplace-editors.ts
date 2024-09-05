import { addQuestionByAddQuestionButton, explicitErrorHandler, getToolboxItemByText, getVisibleElement, objectSelectorButton, setJSON, url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Inplace editors";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

const items = getVisibleElement(".svc-item-value-wrapper");
const imageItems = getVisibleElement(".svc-image-item-value-wrapper");

test("Checkbox question inplace editor", async (t) => {
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Checkboxes"), { speed: 0.5 })
    .click(getToolboxItemByText("Checkboxes"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(items.count).eql(7)
    .expect(items.nth(0).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(0))
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(0).find("span").withText("Select All").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(1))
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(1).find("span").withText("Item 1").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(2))
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(2).find("span").withText("Item 2").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(3).find("span").withText("Item 3").exists).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(4).find("span").withText("Item 4").exists).ok()
    .expect(items.nth(6).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(6).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(6).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(6).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(6))
    .expect(items.nth(6).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(6).find("span").withText("Other (describe)").exists).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find("span").withText("None").exists).ok()

    .click(items.nth(0).find(".svc-item-value-controls__add"))
    .expect(items.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(0))
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()

    .click(items.nth(0).find(".svc-item-value-controls__remove"))
    .expect(items.nth(0).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(0))
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()

    .click(items.nth(4).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(8)
    .expect(items.nth(4).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).ok()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find("span").withText("Item 5").exists).ok()

    .click(items.nth(4).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(7)
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(6).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(6).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(6).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(6))
    .expect(items.nth(6).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(6).find("span").withText("Other (describe)").exists).ok();
});

test("Radiogroup question inplace editor", async (t) => {
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Radio Button Group"), { speed: 0.5 })
    .click(getToolboxItemByText("Radio Button Group"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(items.count).eql(6)
    .expect(items.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(0))
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(0).find("span").withText("Item 1").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(1))
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(1).find("span").withText("Item 2").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(2))
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(2).find("span").withText("Item 3").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(3).find("span").withText("Item 4").exists).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find("span").withText("Other (describe)").exists).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(4).find("span").withText("None").exists).ok()

    .click(items.nth(5).find(".svc-item-value-controls__add"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()

    .click(items.nth(5).find(".svc-item-value-controls__remove"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()

    .click(items.nth(3).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(7)
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(4).find("span").withText("Item 5").exists).ok()

    .click(items.nth(3).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(6)
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find("span").withText("Other (describe)").exists).ok();
});

test("Radiogroup inside PanelDynamic question inplace editor", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "paneldynamic",
            "name": "paneldynamic1",
            "templateElements": [
              {
                "type": "radiogroup",
                "name": "question1",
                "choices": [
                  "Item 1",
                  "Item 2",
                  "Item 3"
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  await t
    .click(Selector("[data-name='question1']"))
    .expect(items.count).eql(6)
    .expect(items.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(0))
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(0).find("span").withText("Item 1").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(1))
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(1).find("span").withText("Item 2").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(2))
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(2).find("span").withText("Item 3").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(3).find("span").withText("Item 4").exists).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find("span").withText("Other (describe)").exists).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(4).find("span").withText("None").exists).ok()

    .click(items.nth(5).find(".svc-item-value-controls__add"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()

    .click(items.nth(5).find(".svc-item-value-controls__remove"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()

    .click(items.nth(3).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(7)
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(4).find("span").withText("Item 5").exists).ok()

    .click(items.nth(3).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(6)
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find("span").withText("Other (describe)").exists).ok();
});

test("Dropdown question inplace editor", async (t) => {
  await t
    .resizeWindow(1920, 1080)
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Dropdown"), { speed: 0.5 })
    .click(getToolboxItemByText("Dropdown"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(items.count).eql(6)
    .expect(items.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(0))
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(0).find("span").withText("Item 1").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(1))
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(1).find("span").withText("Item 2").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(2))
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(2).find("span").withText("Item 3").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(3).find("span").withText("Item 4").exists).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find("span").withText("Other (describe)").exists).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(4).find("span").withText("None").exists).ok()

    .click(items.nth(5).find(".svc-item-value-controls__add"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()

    .click(items.nth(5).find(".svc-item-value-controls__remove"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()

    .click(items.nth(3).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(7)
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(4).find("span").withText("Item 5").exists).ok()

    .click(items.nth(3).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(6)
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find("span").withText("Other (describe)").exists).ok()
    .hover(getToolboxItemByText("Single-Line Input"), { speed: 0.5 })
    .click(getToolboxItemByText("Single-Line Input"), { speed: 0.5 })
    .expect(items.count).eql(6); // Choice editors are visible if another question is selected
});

test("Dropdown question inplace editor after add", async (t) => {
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "dropdown",
            "name": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);
  await t
    .hover(getToolboxItemByText("Dropdown"))
    .dragToElement(getToolboxItemByText("Dropdown"), Selector(".svc-question__content"), { destinationOffsetY: 5, speed: 0.5 })
    .expect(Selector(".svc-question__content").nth(0).visible).ok()
    .expect(Selector(".svc-question__content").nth(1).visible).ok()
    .click(items.nth(3).find(".svc-item-value-controls__add"))
    .expect(Selector(".svc-item-value-wrapper span").withText("Item 4").withAttribute("contenteditable", "true").visible).ok();
});

test("Tag Box question inplace editor default values", async (t) => {
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Multi-Select Dropdown"), { speed: 0.5 })
    .click(getToolboxItemByText("Multi-Select Dropdown"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(items.count).eql(7)
    .expect(items.nth(0).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(0))
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(0).find("span").withText("Select All").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(1))
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(1).find("span").withText("Item 1").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(2))
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(2).find("span").withText("Item 2").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(3).find("span").withText("Item 3").exists).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(4).find("span").withText("Item 4").exists).ok()
    .expect(items.nth(6).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(6).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(6).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(6).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(6))
    .expect(items.nth(6).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(6).find("span").withText("Other (describe)").exists).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find("span").withText("None").exists).ok()

    .click(items.nth(0).find(".svc-item-value-controls__add"))
    .expect(items.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(0))
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()

    .click(items.nth(0).find(".svc-item-value-controls__remove"))
    .expect(items.nth(0).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(0))
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).notOk()

    .click(items.nth(4).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(8)
    .expect(items.nth(4).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).ok()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(5))
    .expect(items.nth(5).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(5).find("span").withText("Item 5").exists).ok()

    .click(items.nth(4).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(7)
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(6).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(6).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(6).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(6))
    .expect(items.nth(6).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(6).find("span").withText("Other (describe)").exists).ok();
});

test("Ranking question inplace editor", async (t) => {
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Ranking"), { speed: 0.5 })
    .click(getToolboxItemByText("Ranking"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(items.count).eql(4)
    .expect(items.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(0))
    .expect(items.nth(0).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(0).find("span").withText("Item 1").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(1))
    .expect(items.nth(1).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(1).find("span").withText("Item 2").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").getStyleProperty("opacity")).eql("0")
    .hover(items.nth(2))
    .expect(items.nth(2).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(2).find("span").withText("Item 3").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(Selector(".svc-item-value-wrapper").nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(3))
    .expect(Selector(".svc-item-value-wrapper").nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(3).find("span").withText("Item 4").exists).ok()

    .click(items.nth(3).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(5)
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(4))
    .expect(items.nth(4).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .expect(items.nth(4).find("span").withText("Item 5").exists).ok()

    .click(items.nth(3).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(4)
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk()
    .hover(items.nth(3))
    .expect(items.nth(3).find(".svc-item-value-controls__drag-icon").visible).notOk();
});

test("Image picker question inplace editor", async (t) => {
  await explicitErrorHandler();
  const chooseButtonSelector = ".svc-image-item-value-controls .svc-context-button:not(.svc-context-buttton--danger):not(.svc-image-item-value-controls__add)";
  const deleteButtonSelector = ".svc-image-item-value-controls .svc-context-button--danger";
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Image Picker"), { speed: 0.5 })
    .click(getToolboxItemByText("Image Picker"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(imageItems.count).eql(5)
    .expect(imageItems.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(imageItems.nth(0).find(".svc-image-item-value-controls__add").visible).notOk()
    .expect(imageItems.nth(0).find(chooseButtonSelector).visible).ok()
    .expect(imageItems.nth(0).find(deleteButtonSelector).visible).ok()
    .expect(imageItems.nth(0).find("img[alt=\"Image 1\"").exists).ok()
    .expect(imageItems.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(imageItems.nth(1).find(".svc-image-item-value-controls__add").visible).notOk()
    .expect(imageItems.nth(1).find(chooseButtonSelector).visible).ok()
    .expect(imageItems.nth(1).find(deleteButtonSelector).visible).ok()
    .expect(imageItems.nth(1).find("img[alt=\"Image 2\"]").exists).ok()
    .expect(imageItems.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(imageItems.nth(2).find(".svc-image-item-value-controls__add").visible).notOk()
    .expect(imageItems.nth(2).find(chooseButtonSelector).visible).ok()
    .expect(imageItems.nth(2).find(deleteButtonSelector).visible).ok()
    .expect(imageItems.nth(2).find("img[alt=\"Image 3\"]").exists).ok()
    .expect(imageItems.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(imageItems.nth(3).find(".svc-image-item-value-controls__add").visible).notOk()
    .expect(imageItems.nth(3).find(chooseButtonSelector).visible).ok()
    .expect(imageItems.nth(3).find(deleteButtonSelector).visible).ok()
    .expect(imageItems.nth(3).find("img[alt=\"Image 4\"]").exists).ok()
    .expect(imageItems.nth(4).hasClass("svc-image-item-value--new")).ok()
    .expect(imageItems.nth(4).find(".svc-image-item-value-controls__add").visible).ok()
    .expect(imageItems.nth(4).find(chooseButtonSelector).visible).notOk()
    .expect(imageItems.nth(4).find(deleteButtonSelector).visible).notOk()
    .expect(imageItems.nth(4).find("img").exists).notOk()

    .setFilesToUpload(imageItems.nth(4).find(".svc-choose-file-input"), "./image.jpg");
});

test("Image picker question inplace editor - add new item", async (t) => {
  await explicitErrorHandler();
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Image Picker"), { speed: 0.5 })
    .click(getToolboxItemByText("Image Picker"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(imageItems.count).eql(5)

    .click(getVisibleElement(".svc-image-item-value-controls__add"));
  const input = await imageItems.nth(4).find("input.svc-choose-file-input");
  await t
    .setFilesToUpload(input, "./image.jpg")
    .expect(imageItems.count).eql(6)
    .expect(imageItems.nth(4).find("img").visible).ok();

  const getImageLink = ClientFunction(() => {
    return document.querySelectorAll("img.sd-imagepicker__image")[4]["src"];
  });
  let imageLink = await getImageLink();
  await t.expect(imageLink.substring(0, 48)).eql("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA");

});

test("Image question inplace editor", async (t) => {
  const question = getVisibleElement(".svc-question__content.svc-question__content--selected");
  await t
    .resizeWindow(2560, 1440)
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Image"), { speed: 0.5 })
    .click(getToolboxItemByText("Image"), { speed: 0.5 })
    .expect(question.exists).ok()
    .expect(question.find(".sd-file__drag-area-placeholder").visible).ok()
    .expect(question.find(".sd-file__choose-btn").visible).ok();
});

test("Image question inplace editor - choose image via inplace editor", async (t) => {
  const question = getVisibleElement(".svc-question__content.svc-question__content--selected");
  const controls = getVisibleElement(".svc-image-question-controls");
  await t
    .resizeWindow(2560, 1440)
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Image"), { speed: 0.5 })
    .click(getToolboxItemByText("Image"), { speed: 0.5 });

  const getImageLink = ClientFunction(() => {
    return document.querySelectorAll("img.sd-image__image")[0]["src"];
  });

  await t
    .click(question.find(".sd-file__choose-btn"))
    .setFilesToUpload(question.find("input[type=file].sd-visuallyhidden"), "./image.jpg")
    .expect(question.find("img").exists).ok();
  let imageLink = await getImageLink();
  await t
    .expect(imageLink.substring(0, 48)).eql("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA")
    .expect(controls.count).eql(1)
    .expect(controls.nth(0).find(".svc-context-button").count).eql(1)
    .expect(question.find(".sd-image__no-image").exists).notOk();

  await ClientFunction(() => {
    window["creator"].survey.getAllQuestions()[0].imageLink = "testUrl";
  })();
  imageLink = await getImageLink();
  await t
    .expect(imageLink).contains("testUrl")
    .expect(question.find(".sd-image__no-image").visible).ok();

  await t
    .click(getVisibleElement(".svc-context-button"))
    .setFilesToUpload(question.find("input[type=file]"), "./image.jpg")
    .expect(question.find("img").exists).ok();

  imageLink = await getImageLink();
  await t.expect(imageLink.substring(0, 48)).eql("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA");
});

test("Matrix dropdown question inplace popup editor", async (t) => {
  const row1Column1Cell = Selector("tbody .svc-matrix-cell").filterVisible().nth(1);
  const editColumnButton = Selector(".svc-matrix-cell__question-controls-button").filterVisible();

  await t.expect(Selector(".svc-question__content").exists).notOk();
  await addQuestionByAddQuestionButton(t, "Multi-Select Matrix");
  await t
    .expect(Selector(".svc-question__content").exists).ok()
    .hover(row1Column1Cell, { speed: 0.5 });

  await t
    .click(editColumnButton)
    .expect(Selector(".svc-question__content--in-popup").visible).ok()
    .expect(Selector(".sv-popup__content .sd-header__text").exists).notOk()
    .expect(Selector(".sv-popup__content .sd-page__title").exists).notOk()

    .click(Selector(".sv-popup__button--cancel"))
    .expect(Selector(".svc-question__content--in-popup").exists).notOk()
    .expect(objectSelectorButton.withText("Column 1").visible).ok();
});

test("Rating question inplace editor", async (t) => {
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Rating Scale"), { speed: 0.5 })
    .click(getToolboxItemByText("Rating Scale"), { speed: 0.5 })
    .click(Selector(".sd-rating__item-text .sv-string-editor").withText("3"))
    .typeText(Selector(".sd-rating__item-text .sv-string-editor").withText("3"), "abc")
    .pressKey("Enter")
    .expect(ClientFunction(() => {
      return window["creator"].survey.getAllQuestions()[0].rateValues.map(v => v.text);
    })()).eql(["1", "2", "abc", "4", "5"]);

});

test("Matrix dropdown question inplace row header editor #2553", async (t) => {
  await t.expect(Selector(".svc-question__content").exists).notOk();
  await addQuestionByAddQuestionButton(t, "Multi-Select Matrix");
  await t.expect(Selector(".svc-question__content").exists).ok();

  await t
    // .click(Selector("button[title='ShowPanel']"))
    .click(Selector(".sd-table__row .svc-matrix-cell .sv-string-editor"))
    .typeText(Selector(".sd-table__row .svc-matrix-cell .sv-string-editor"), "Row header")
    .click(Selector("h4.spg-title"))
    .click(Selector("input.spg-input"))
    .pressKey("ctrl+a delete 3 0 0 p x")
    .expect(Selector("input.spg-input").value).eql("300px");
});

test("Checkbox question inplace editor", async (t) => {

  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "paneldynamic",
            "name": "paneldynamic1",
            "templateElements": [
              {
                "type": "checkbox",
                "name": "question1",
                "choices": [
                  "Item 1",
                  "Item 2",
                  "Item 3",
                  "Item 4",
                  "Item 5",
                  "Item 6"
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);
  await t
    .click(Selector(".svc-string-editor").withText("question1"))
    .wait(200)
    .pressKey("tab")
    .expect(Selector(".svc-item-value-controls__add").nth(0).focused).ok()
    .pressKey("tab")
    .expect(Selector(".svc-item-value-controls__remove").nth(0).focused).ok()
    .pressKey("space")
    .expect(Selector(".svc-item-value-controls__remove").nth(0).focused).ok()
    .pressKey("tab")
    .pressKey("tab")
    .pressKey("space")
    .expect(Selector(".svc-item-value-controls__remove").nth(1).focused).ok()
    .pressKey("tab tab tab tab tab tab")
    .pressKey("shift+tab shift+tab")
    .pressKey("space")
    .expect(Selector(".svc-item-value-controls__remove").nth(2).focused).ok()
    .pressKey("shift+tab shift+tab")
    .pressKey("space")
    .expect(Selector(".svc-item-value-controls__remove").nth(0).focused).ok();
});