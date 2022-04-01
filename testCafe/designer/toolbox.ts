import { url, getJSON, toolboxItems } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Toolbox";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(1200, 600);
});

test("Simple click", async (t) => {
  await t.hover(toolboxItems);
  await t.click(toolboxItems, { offsetX: -20 });
  const resultJson = await getJSON();
  await t.expect(resultJson.pages[0].elements.length).eql(1);
});

async function setupCategories(t, windowWidth = 1210) {
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

test("Categories check hover icons", async (t) => {
  await setupCategories(t);

  const categories = Selector(".svc-toolbox__category-header");
  await t
    .expect(categories.count).eql(3)
    .expect(categories.nth(0).innerText).eql("General")
    .expect(categories.nth(1).innerText).eql("Matrix")
    .expect(categories.nth(2).innerText).eql("Panels")

    .hover(categories.nth(0), { speed: 0.5 })
    .expect(categories.nth(0).find(".svc-string-editor__button--collapse").visible).ok()
    .expect(categories.nth(0).find(".svc-string-editor__button--expand").visible).notOk()

    .hover(categories.nth(1), { speed: 0.5 })
    .expect(categories.nth(1).find(".svc-string-editor__button--collapse").visible).notOk()
    .expect(categories.nth(1).find(".svc-string-editor__button--expand").visible).ok()

    .hover(categories.nth(2), { speed: 0.5 })
    .expect(categories.nth(2).find(".svc-string-editor__button--collapse").visible).notOk()
    .expect(categories.nth(2).find(".svc-string-editor__button--expand").visible).ok();
});

test("Categories large mode", async (t) => {
  await setupCategories(t);

  const categories = Selector(".svc-toolbox__category-header");
  const visibleToolboxItems = Selector(".svc-toolbox__tool").filterVisible();
  await t
    .expect(categories.count).eql(3)
    .expect(visibleToolboxItems.count).eql(15)

    .click(categories.nth(1))
    .expect(visibleToolboxItems.count).eql(3)

    .click(categories.nth(2))
    .expect(visibleToolboxItems.count).eql(2);
});

test.before(async (t) => {
  await t.resizeWindow(1100, 600);
})("Categories Responsiveness small -> large", async (t) => {
  const categories = Selector(".svc-toolbox__category-header");
  const visibleToolboxItems = Selector(".svc-toolbox__tool").filterVisible();
  await setupCategories(t, 1110);
  await t
    .expect(Selector(".sv-dots__item").visible).ok()
    .expect(categories.count).eql(0)
    .expect(visibleToolboxItems.count).eql(11)

    .resizeWindow(1200, 600)
    .expect(categories.count).eql(3)
    .expect(visibleToolboxItems.count).eql(15)

    .click(categories.nth(1))
    .expect(visibleToolboxItems.count).eql(3)

    .click(categories.nth(2))
    .expect(visibleToolboxItems.count).eql(2);
});

test.before(async (t) => {
  await t.resizeWindow(1200, 600);
})("Categories Responsiveness large -> small", async (t) => {
  const categories = Selector(".svc-toolbox__category-header");
  const visibleToolboxItems = Selector(".svc-toolbox__tool").filterVisible();

  await setupCategories(t);
  await t
    .expect(categories.count).eql(3)
    .expect(visibleToolboxItems.count).eql(15)

    .resizeWindow(1100, 600)
    .expect(Selector(".sv-dots__item").visible).ok()
    .expect(categories.count).eql(0)
    .expect(visibleToolboxItems.count).eql(11);
});