import { url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Select context object then edit string";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

const selectedObjectTextSelector = ".svc-property-panel__header #svd-grid-object-selector .sv-action-bar-item__title";

test("Matrix question", async (t) => {
  await t
    .expect(Selector(".svc-question__content").exists).notOk()
    .expect(Selector(selectedObjectTextSelector).innerText).eql("Survey")

    .hover(Selector("div[title=\"Matrix (single choice)\"]"), { speed: 0.5 })
    .click(Selector("div[title=\"Matrix (single choice)\"]"), { speed: 0.5 })
    .expect(Selector(".svc-question__content").exists).ok()
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")

    .click(Selector("span[aria-placeholder='Input page title here']"))
    .expect(Selector(selectedObjectTextSelector).innerText).eql("page1")

    .click(Selector(".sv-string-editor").withText("question1"))
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")

    .click(Selector("span[aria-placeholder='Input survey title here']"))
    .expect(Selector(selectedObjectTextSelector).innerText).eql("Survey")
    .expect(Selector("h5.spg-title").withText("Columns").visible).notOk()

    .click(Selector(".sv-string-editor").withText("Column 1"))
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")
    .expect(Selector("h5.spg-title").withText("Columns").visible).ok()

    .click(Selector(".sv-string-editor").withText("Row 1"))
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")
    .expect(Selector("h5.spg-title").withText("Columns").visible).notOk()
    .expect(Selector("h5.spg-title").withText("Row count").visible).ok();
});

test("Matrix dropdown question", async (t) => {
  await t
    .expect(Selector(".svc-question__content").exists).notOk()
    .expect(Selector(selectedObjectTextSelector).innerText).eql("Survey")

    .hover(Selector("div[title=\"Matrix (multiple choice)\"]"), { speed: 0.5 })
    .click(Selector("div[title=\"Matrix (multiple choice)\"]"), { speed: 0.5 })
    .expect(Selector(".svc-question__content").exists).ok()
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")

    .click(Selector(".sv-string-editor").withText("Column 1"))
    .expect(Selector(selectedObjectTextSelector).innerText).eql("Column 1")
    .expect(Selector("h5.spg-title").withText("Columns").visible).notOk()

    .click(Selector(".sv-string-editor").withText("Row 1"))
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")
    .expect(Selector("h5.spg-title").withText("Columns").visible).notOk()
    .expect(Selector("h5.spg-title").withText("Row count").visible).ok();
});

test("Matrix dropdown question select column", async (t) => {
  await t
    .expect(Selector(".svc-question__content").exists).notOk()
    .expect(Selector(selectedObjectTextSelector).innerText).eql("Survey")

    .hover(Selector("div[title=\"Matrix (multiple choice)\"]"), { speed: 0.5 })
    .click(Selector("div[title=\"Matrix (multiple choice)\"]"), { speed: 0.5 })
    .expect(Selector(".svc-question__content").exists).ok()
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")
    .expect(Selector(".svc-matrix-cell--selected").visible).notOk()

    .hover(Selector(".svc-matrix-cell"), { speed: 0.5 })
    .expect(Selector(".svc-matrix-cell--selected").visible).ok()

    .click(Selector(".sv-string-editor").withText("Column 1"))
    .expect(Selector(".svc-matrix-cell--selected.svc-visible").visible).ok();
});

test("Matrix dynamic question select column", async (t) => {
  await t
    .expect(Selector(".svc-question__content").exists).notOk()
    .expect(Selector(selectedObjectTextSelector).innerText).eql("Survey")

    .hover(Selector("div[title=\"Matrix (dynamic rows)\"]"), { speed: 0.5 })
    .click(Selector("div[title=\"Matrix (dynamic rows)\"]"), { speed: 0.5 })
    .expect(Selector(".svc-question__content").exists).ok()
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")
    .expect(Selector(".svc-matrix-cell--selected").visible).notOk()

    .hover(Selector(".svc-matrix-cell"), { speed: 0.5 })
    .expect(Selector(".svc-matrix-cell--selected").visible).ok()

    .click(Selector(".sv-string-editor").withText("Column 1"))
    .expect(Selector(".svc-matrix-cell--selected.svc-visible").visible).ok();
});

test("Dynamic panel inner panel not selectable", async (t) => {
  await t
    .expect(Selector(".svc-question__content").exists).notOk()

    .hover(Selector("div[title=\"Panel (dynamic panels)\"]"), { speed: 0.5 })
    .click(Selector("div[title=\"Panel (dynamic panels)\"]"), { speed: 0.5 })
    .expect(Selector(".svc-question__adorner").exists).ok()
    .expect(Selector(".svc-question__content").exists).ok()
    .expect(Selector(".svc-question__adorner .svc-question__adorner").exists).ok()
    .expect(Selector(".svc-question__content .svc-question__content").exists).notOk()
    .expect(Selector(".svc-question__adorner .svc-question__adorner>.svc-panel__placeholder_frame").exists).ok();
});
