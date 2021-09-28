import { url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Toolbox";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
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
