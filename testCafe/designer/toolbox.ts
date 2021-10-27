import { url, getJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Toolbox";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

const toolbox = Selector(".svc-toolbox");
const toolboxItems = Selector(".svc-toolbox__tool").filterVisible();
const toolboxItemIcons = Selector(".svc-toolbox__tool .svc-toolbox__item-container").filterVisible();
const toolboxItemTitles = Selector(".svc-toolbox__tool .svc-toolbox__item > .svc-toolbox__item-title").filterVisible();

test("Simple click", async (t) => {
  await t.hover(toolboxItems);
  await t.click(toolboxItems, { offsetX: -20 });
  const resultJson = await getJSON();
  await t.expect(resultJson.pages[0].elements.length).eql(1);
});

test("Categories", async (t) => {
  const setupCategories = ClientFunction(() => {
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
  await setupCategories();

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

test.before(async t => {
  await t.resizeWindow(1920, 900);
})
("Responsive creator", async (t) => {
  await t
    .expect(toolbox.visible).ok()
    .expect(toolboxItemIcons.count).eql(20)
    .expect(toolboxItemTitles.count).eql(20)

    .resizeWindow(1000, 900)
    .expect(toolbox.visible).ok()
    .expect(toolboxItemIcons.count).eql(20)
    .expect(toolboxItemTitles.count).eql(0)

    .resizeWindow(750, 500)
    .expect(toolbox.exists).notOk();
});