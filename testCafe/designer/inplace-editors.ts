import { getToolboxItemByText, getVisibleElement, setJSON, url } from "../helper";
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
    .hover(getToolboxItemByText("Checkbox"), { speed: 0.5 })
    .click(getToolboxItemByText("Checkbox"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(items.count).eql(7)
    .expect(items.nth(0).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(0).find("span").withText("Select All").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(1).find("span").withText("item1").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(2).find("span").withText("item2").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(3).find("span").withText("item3").exists).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("item4").exists).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(5).find("span").withText("Other (describe)").exists).ok()
    .expect(items.nth(6).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(6).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(6).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(6).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(6).find("span").withText("None").exists).ok()

    .click(items.nth(0).find(".svc-item-value-controls__add"))
    .expect(items.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__drag").visible).notOk()

    .click(items.nth(0).find(".svc-item-value-controls__remove"))
    .expect(items.nth(0).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__drag").visible).notOk()

    .click(items.nth(4).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(8)
    .expect(items.nth(4).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(5).find("span").withText("item5").exists).ok()

    .click(items.nth(4).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(7)
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(5).find("span").withText("Other (describe)").exists).ok();
});

test("Radiogroup question inplace editor", async (t) => {
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Radiogroup"), { speed: 0.5 })
    .click(getToolboxItemByText("Radiogroup"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(items.count).eql(6)
    .expect(items.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(0).find("span").withText("item1").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(1).find("span").withText("item2").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(2).find("span").withText("item3").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(3).find("span").withText("item4").exists).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("Other (describe)").exists).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(5).find("span").withText("None").exists).ok()

    .click(items.nth(5).find(".svc-item-value-controls__add"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()

    .click(items.nth(5).find(".svc-item-value-controls__remove"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()

    .click(items.nth(3).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(7)
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("item5").exists).ok()

    .click(items.nth(3).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(6)
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("Other (describe)").exists).ok();
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
                  "item1",
                  "item2",
                  "item3"
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
    .click(Selector("[name='question1']"))
    .expect(items.count).eql(6)
    .expect(items.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(0).find("span").withText("item1").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(1).find("span").withText("item2").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(2).find("span").withText("item3").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(3).find("span").withText("item4").exists).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("Other (describe)").exists).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(5).find("span").withText("None").exists).ok()

    .click(items.nth(5).find(".svc-item-value-controls__add"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()

    .click(items.nth(5).find(".svc-item-value-controls__remove"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()

    .click(items.nth(3).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(7)
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("item5").exists).ok()

    .click(items.nth(3).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(6)
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("Other (describe)").exists).ok();
});

test("Dropdown question inplace editor", async (t) => {
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Dropdown"), { speed: 0.5 })
    .click(getToolboxItemByText("Dropdown"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(items.count).eql(6)
    .expect(items.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(0).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(0).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(0).find("span").withText("item1").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(1).find("span").withText("item2").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(2).find("span").withText("item3").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(3).find("span").withText("item4").exists).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("Other (describe)").exists).ok()
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(5).find("span").withText("None").exists).ok()

    .click(items.nth(5).find(".svc-item-value-controls__add"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()

    .click(items.nth(5).find(".svc-item-value-controls__remove"))
    .expect(items.nth(5).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(5).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(5).find(".svc-item-value-controls__drag").visible).notOk()

    .click(items.nth(3).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(7)
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("item5").exists).ok()

    .click(items.nth(3).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(6)
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("Other (describe)").exists).ok()

    .hover(getToolboxItemByText("'Single Input'"), { speed: 0.5 })
    .click(getToolboxItemByText("'Single Input'"), { speed: 0.5 })
    .expect(items.count).eql(0); // Choice editors are hidden if another question is selected
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
    .expect(items.nth(0).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(0).find("span").withText("item1").exists).ok()
    .expect(items.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(1).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(1).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(1).find("span").withText("item2").exists).ok()
    .expect(items.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(2).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(2).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(2).find("span").withText("item3").exists).ok()
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(3).find("span").withText("item4").exists).ok()

    .click(items.nth(3).find(".svc-item-value-controls__add"))
    .expect(items.count).eql(5)
    .expect(items.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).ok()
    .expect(items.nth(4).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(4).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(4).find(".svc-item-value-controls__drag").visible).notOk()
    .expect(items.nth(4).find("span").withText("item5").exists).ok()

    .click(items.nth(3).find(".svc-item-value-controls__remove"))
    .expect(items.count).eql(4)
    .expect(items.nth(3).hasClass("svc-item-value--new")).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__add").visible).ok()
    .expect(items.nth(3).find(".svc-item-value-controls__remove").visible).notOk()
    .expect(items.nth(3).find(".svc-item-value-controls__drag").visible).notOk();
});

test("Image picker question inplace editor", async (t) => {
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("'Image picker'"), { speed: 0.5 })
    .click(getToolboxItemByText("'Image picker'"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(imageItems.count).eql(5)
    .expect(imageItems.nth(0).hasClass("svc-item-value--new")).notOk()
    .expect(imageItems.nth(0).find(".svc-image-item-value-controls__add").visible).notOk()
    .expect(imageItems.nth(0).find(".svc-image-item-value-controls__choose-file").visible).ok()
    .expect(imageItems.nth(0).find(".svc-image-item-value-controls__remove").visible).ok()
    .expect(imageItems.nth(0).find("img[alt=lion]").exists).ok()
    .expect(imageItems.nth(1).hasClass("svc-item-value--new")).notOk()
    .expect(imageItems.nth(1).find(".svc-image-item-value-controls__add").visible).notOk()
    .expect(imageItems.nth(1).find(".svc-image-item-value-controls__choose-file").visible).ok()
    .expect(imageItems.nth(1).find(".svc-image-item-value-controls__remove").visible).ok()
    .expect(imageItems.nth(1).find("img[alt=giraffe]").exists).ok()
    .expect(imageItems.nth(2).hasClass("svc-item-value--new")).notOk()
    .expect(imageItems.nth(2).find(".svc-image-item-value-controls__add").visible).notOk()
    .expect(imageItems.nth(2).find(".svc-image-item-value-controls__choose-file").visible).ok()
    .expect(imageItems.nth(2).find(".svc-image-item-value-controls__remove").visible).ok()
    .expect(imageItems.nth(2).find("img[alt=panda]").exists).ok()
    .expect(imageItems.nth(3).hasClass("svc-item-value--new")).notOk()
    .expect(imageItems.nth(3).find(".svc-image-item-value-controls__add").visible).notOk()
    .expect(imageItems.nth(3).find(".svc-image-item-value-controls__choose-file").visible).ok()
    .expect(imageItems.nth(3).find(".svc-image-item-value-controls__remove").visible).ok()
    .expect(imageItems.nth(3).find("img[alt=camel]").exists).ok()
    .expect(imageItems.nth(4).hasClass("svc-image-item-value--new")).ok()
    .expect(imageItems.nth(4).find(".svc-image-item-value-controls__add").visible).ok()
    .expect(imageItems.nth(4).find(".svc-image-item-value-controls__choose-file").visible).notOk()
    .expect(imageItems.nth(4).find(".svc-image-item-value-controls__remove").visible).notOk()
    .expect(imageItems.nth(4).find("img").exists).notOk()

    .setFilesToUpload(imageItems.nth(4).find(".svc-choose-file-input"), "./image.jpg");
});

test("Image picker question inplace editor - add new item", async (t) => {
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("'Image picker'"), { speed: 0.5 })
    .click(getToolboxItemByText("'Image picker'"), { speed: 0.5 })
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
  const controls = getVisibleElement(".svc-image-question-controls");
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Image"), { speed: 0.5 })
    .click(getToolboxItemByText("Image"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(getVisibleElement(".svc-question__content--selected").find("img[alt=question1]").exists).ok()
    .expect(controls.count).eql(1)
    .expect(controls.nth(0).find(".svc-image-question-controls__button").visible).ok();
});

test("Image question inplace editor - choose image via inplace editor", async (t) => {
  await t
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("Image"), { speed: 0.5 })
    .click(getToolboxItemByText("Image"), { speed: 0.5 });

  const getImageLink = ClientFunction(() => {
    return document.querySelectorAll("img.sv_image_image")[0]["src"];
  });
  let imageLink = await getImageLink();
  await t.expect(imageLink).eql("https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg");
  await t
    .click(getVisibleElement(".svc-image-question-controls__button"))
    .setFilesToUpload(getVisibleElement(".svc-question__content input[type=file"), "./image.jpg");
  imageLink = await getImageLink();
  await t.expect(imageLink.substring(0, 48)).eql("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA");
});

test("Matrix dropdown question inplace popup editor", async (t) => {
  const showControl = ClientFunction(() => {
    const el: any = document.querySelectorAll("td:nth-child(2) .svc-matrix-cell .svc-matrix-cell__question-controls")[0];
    el.style.display = "block";
  });
  const row1Column1Cell = Selector("tbody .svc-matrix-cell").filterVisible().nth(1);
  await t
    .expect(Selector(".svc-question__content").exists).notOk()

    .hover(getToolboxItemByText("Matrix (multiple choice)"), { speed: 0.5 })
    .click(getToolboxItemByText("Matrix (multiple choice)"), { speed: 0.5 })
    .expect(Selector(".svc-question__content").exists).ok()
    .hover(row1Column1Cell, { speed: 0.5 });

  // TODO: remove this line after TestCafe implements workig hover
  await showControl();

  await t.click(Selector(".svc-matrix-cell__question-controls-button"))
    .expect(Selector(".svc-question__content--selected-no-border").visible).ok()
    .expect(Selector(".sv-popup__content .sd-header__text").exists).notOk()
    .expect(Selector(".sv-popup__content .sd-page__title").exists).notOk()

    .click(Selector(".sv-popup__button--cancel"))
    .expect(Selector(".svc-question__content--selected-no-border").exists).notOk();
});
