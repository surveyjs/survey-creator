import { url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Select context object then edit string";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
    await t.maximizeWindow();
});

test("Matrix question", async (t) => {
    const selectedObjectTextSelector = `.svc-property-panel__header #svd-grid-object-selector .sv-action-bar-item__title`;
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("Survey");

    await t.hover(Selector(`div[title="Matrix (single choice)"]`), {
        speed: 0.5
    });
    await t.click(Selector(`div[title="Matrix (single choice)"]`), {
        speed: 0.5
    });
    await t.expect(Selector(".svc-question__content").exists).ok();
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("question1");

    await t.click(Selector(`span[aria-placeholder='Input page title here']`));
    await t.expect(Selector(selectedObjectTextSelector).innerText).eql("page1");

    await t.click(Selector(`.sv-string-editor`).withText("question1"));
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("question1");

    await t.click(Selector(`span[aria-placeholder='Input survey title here']`));
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("Survey");
    await t
        .expect(Selector("h5.spg-title").withText("Columns").visible)
        .notOk();

    await t.click(Selector(`.sv-string-editor`).withText("Column 1"));
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("question1");
    await t.expect(Selector("h5.spg-title").withText("Columns").visible).ok();

    await t.click(Selector(`.sv-string-editor`).withText("Row 1"));
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("question1");
    await t
        .expect(Selector("h5.spg-title").withText("Columns").visible)
        .notOk();
    await t
        .expect(Selector("h5.spg-title").withText("Row count").visible)
        .ok();
});

test("Matrix dropdown question", async (t) => {
    const selectedObjectTextSelector = `.svc-property-panel__header #svd-grid-object-selector .sv-action-bar-item__title`;
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("Survey");

    await t.hover(Selector(`div[title="Matrix (multiple choice)"]`), {
        speed: 0.5
    });
    await t.click(Selector(`div[title="Matrix (multiple choice)"]`), {
        speed: 0.5
    });
    await t.expect(Selector(".svc-question__content").exists).ok();
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("question1");

    await t.click(Selector(`.sv-string-editor`).withText("Column 1"));
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("Column 1");
    await t
        .expect(Selector("h5.spg-title").withText("Columns").visible)
        .notOk();

    await t.click(Selector(`.sv-string-editor`).withText("Row 1"));
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("question1");
    await t
        .expect(Selector("h5.spg-title").withText("Columns").visible)
        .notOk();
    await t
        .expect(Selector("h5.spg-title").withText("Row count").visible)
        .ok();
});

test("Matrix dropdown question select column", async (t) => {
    const selectedObjectTextSelector = `.svc-property-panel__header #svd-grid-object-selector .sv-action-bar-item__title`;
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("Survey");

    await t.hover(Selector(`div[title="Matrix (multiple choice)"]`), {
        speed: 0.5
    });
    await t.click(Selector(`div[title="Matrix (multiple choice)"]`), {
        speed: 0.5
    });
    await t.expect(Selector(".svc-question__content").exists).ok();
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("question1");
    await t.expect(Selector(`.svc-matrix-cell--selected`).visible).notOk();

    await t.hover(Selector(`.svc-matrix-cell`), { speed: 0.5 });
    await t.expect(Selector(`.svc-matrix-cell--selected`).visible).ok();

    await t.click(Selector(`.sv-string-editor`).withText("Column 1"));
    await t
        .expect(Selector(`.svc-matrix-cell--selected.svc-visible`).visible)
        .ok();
});

test("Matrix dynamic question select column", async (t) => {
    const selectedObjectTextSelector = `.svc-property-panel__header #svd-grid-object-selector .sv-action-bar-item__title`;
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("Survey");

    await t.hover(Selector(`div[title="Matrix (dynamic rows)"]`), {
        speed: 0.5
    });
    await t.click(Selector(`div[title="Matrix (dynamic rows)"]`), {
        speed: 0.5
    });
    await t.expect(Selector(".svc-question__content").exists).ok();
    await t
        .expect(Selector(selectedObjectTextSelector).innerText)
        .eql("question1");
    await t.expect(Selector(`.svc-matrix-cell--selected`).visible).notOk();

    await t.hover(Selector(`.svc-matrix-cell`), { speed: 0.5 });
    await t.expect(Selector(`.svc-matrix-cell--selected`).visible).ok();

    await t.click(Selector(`.sv-string-editor`).withText("Column 1"));
    await t
        .expect(Selector(`.svc-matrix-cell--selected.svc-visible`).visible)
        .ok();
});

test("Dynamic panel inner panel not selectable", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();

    await t.hover(Selector(`div[title="Panel (dynamic panels)"]`), {
        speed: 0.5
    });
    await t.click(Selector(`div[title="Panel (dynamic panels)"]`), {
        speed: 0.5
    });
    await t.expect(Selector(".svc-question__adorner").exists).ok();
    await t.expect(Selector(".svc-question__content").exists).ok();
    await t
        .expect(
            Selector(".svc-question__adorner .svc-question__adorner").exists
        )
        .ok();
    await t
        .expect(
            Selector(".svc-question__content .svc-question__content").exists
        )
        .notOk();
    await t
        .expect(
            Selector(
                ".svc-question__adorner .svc-question__adorner>.svc-panel__placeholder_frame"
            ).exists
        )
        .ok();
});
