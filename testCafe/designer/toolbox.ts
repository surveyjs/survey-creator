import { url, getJSON, toolboxItems } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Toolbox";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(1900, 600);
});

test("Simple click", async (t) => {
  await t.hover(toolboxItems);
  await t.click(toolboxItems, { offsetX: -20 });
  const resultJson = await getJSON();
  await t.expect(resultJson.pages[0].elements.length).eql(1);
});

async function setupCategories(t, windowWidth = 1910) {
  const changeCategories = ClientFunction(() => {
    window["creator"].toolbox.changeCategories([
      {
        name: "panel",
        category: "Panels"
      }, {
        name: "paneldynamic",
        category: "Panels"
      }, {
        name: "matrix",
        category: "Matrix"
      }, {
        name: "matrixdropdown",
        category: "Matrix"
      }, {
        name: "matrixdynamic",
        category: "Matrix"
      }
    ]);
  });
  await changeCategories();
  await t.resizeWindow(windowWidth, 600);
}

async function setupToolboxProperty(propertyName: string, propertyValue: any) {
  await ClientFunction((propertyName: string, propertyValue: any) => {
    window["creator"].toolbox[propertyName] = propertyValue;
  })(propertyName, propertyValue);
}

const categories = Selector(".svc-toolbox__category");
const categoriesHeader = Selector(".svc-toolbox__category-header");
const visibleToolboxItems = Selector(".svc-toolbox__tool").filterVisible();
const collapsibleCategories = Selector(".svc-toolbox__category-header--collapsed");
const getCollapsedCategories = (index = 0) => { return categoriesHeader.nth(index).find(".svc-string-editor__button--expand"); };
const getExpandedCategories = (index = 0) => { return categoriesHeader.nth(index).find(".svc-string-editor__button--collapse"); };

test("Categories check hover icons", async (t) => {
  await setupCategories(t);

  await t
    .expect(categoriesHeader.count).eql(3)
    .expect(categoriesHeader.nth(0).innerText).eql("General")
    .expect(categoriesHeader.nth(1).innerText).eql("Matrix")
    .expect(categoriesHeader.nth(2).innerText).eql("Panels")

    .hover(categoriesHeader.nth(0), { speed: 0.5 })
    .expect(getExpandedCategories(0).visible).ok()
    .expect(getCollapsedCategories(0).visible).notOk()

    .hover(categoriesHeader.nth(1), { speed: 0.5 })
    .expect(getExpandedCategories(1).visible).notOk()
    .expect(getCollapsedCategories(1).visible).ok()

    .hover(categoriesHeader.nth(2), { speed: 0.5 })
    .expect(getExpandedCategories(2).visible).notOk()
    .expect(getCollapsedCategories(2).visible).ok();
});

test("Categories large mode", async (t) => {
  await setupCategories(t);

  await t
    .expect(categoriesHeader.count).eql(3)
    .expect(visibleToolboxItems.count).eql(15)

    .click(categoriesHeader.nth(1))
    .expect(visibleToolboxItems.count).eql(3)

    .click(categoriesHeader.nth(2))
    .expect(visibleToolboxItems.count).eql(2);
});

test.before(async (t) => {
  await t.resizeWindow(1200, 600);
})("Categories Responsiveness small -> large", async (t) => {

  await setupCategories(t, 1110);
  await t
    .expect(Selector(".svc-toolbox .sv-dots__item").visible).ok()
    .expect(categoriesHeader.count).eql(0)
    .expect(visibleToolboxItems.count).eql(11)

    .resizeWindow(1900, 600)
    .expect(categoriesHeader.count).eql(3)
    .expect(visibleToolboxItems.count).eql(15)

    .click(categoriesHeader.nth(1))
    .expect(visibleToolboxItems.count).eql(3)

    .click(categoriesHeader.nth(2))
    .expect(visibleToolboxItems.count).eql(2);
});

test.before(async (t) => {
  await t.resizeWindow(1900, 600);
})("Categories Responsiveness large -> small", async (t) => {

  await setupCategories(t);
  await t
    .expect(categoriesHeader.count).eql(3)
    .expect(visibleToolboxItems.count).eql(15)

    .resizeWindow(1200, 600)
    .expect(Selector(".sv-dots__item").visible).ok()
    .expect(categoriesHeader.count).eql(0)
    .expect(visibleToolboxItems.count).eql(11);
});

test("Categories allowExpandMultipleCategories property", async (t) => {
  await setupCategories(t);
  await setupToolboxProperty("forceCompact", false);
  await setupToolboxProperty("allowExpandMultipleCategories", true);

  await t
    .expect(categoriesHeader.count).eql(3)
    .expect(collapsibleCategories.count).eql(3)
    .expect(visibleToolboxItems.count).eql(0)

    .click(categoriesHeader.nth(0))
    .expect(categories.nth(0).find(".svc-toolbox__tool").count).eql(15)
    .expect(visibleToolboxItems.count).eql(15)

    .click(categoriesHeader.nth(1))
    .expect(categories.nth(1).find(".svc-toolbox__tool").count).eql(3)
    .expect(visibleToolboxItems.count).eql(18)

    .click(categoriesHeader.nth(2))
    .expect(categories.nth(2).find(".svc-toolbox__tool").count).eql(2)
    .expect(visibleToolboxItems.count).eql(20);
});

test("Categories keepAllCategoriesExpanded property", async (t) => {
  await setupCategories(t);
  await setupToolboxProperty("forceCompact", false);
  await setupToolboxProperty("keepAllCategoriesExpanded", true);

  await t
    .expect(categoriesHeader.count).eql(3)
    .expect(collapsibleCategories.count).eql(0)
    .expect(visibleToolboxItems.count).eql(20)

    .hover(categoriesHeader.nth(0), { speed: 0.5 })
    .expect(getExpandedCategories(0).exists).notOk()
    .expect(getCollapsedCategories(0).exists).notOk()

    .click(categoriesHeader.nth(0))
    .expect(categoriesHeader.count).eql(3)
    .expect(collapsibleCategories.count).eql(0)
    .expect(visibleToolboxItems.count).eql(20)

    .hover(categoriesHeader.nth(1), { speed: 0.5 })
    .expect(getExpandedCategories(1).exists).notOk()
    .expect(getCollapsedCategories(1).exists).notOk()

    .click(categoriesHeader.nth(1))
    .expect(categoriesHeader.count).eql(3)
    .expect(collapsibleCategories.count).eql(0)
    .expect(visibleToolboxItems.count).eql(20)

    .hover(categoriesHeader.nth(2), { speed: 0.5 })
    .expect(getExpandedCategories(2).exists).notOk()
    .expect(getCollapsedCategories(2).exists).notOk()

    .click(categoriesHeader.nth(2))
    .expect(categoriesHeader.count).eql(3)
    .expect(collapsibleCategories.count).eql(0)
    .expect(visibleToolboxItems.count).eql(20);
});