import { url } from "../helper";
import { ClientFunction, Selector } from 'testcafe';
const title = "Inplace editors";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
    await t.maximizeWindow();
});

test("Checkbox question inplace editor", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t.hover(Selector(`div[title=Checkbox]`), { speed: 0.5 });
    await t.click(Selector(`div[title=Checkbox]`), { speed: 0.5 });
    await t.expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok();

    const items = Selector(".svc-item-value-wrapper");
    await t.expect(items.count).eql(7);

    await t.expect(items.nth(0).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t
        .expect(items.nth(0).find("span").withText("Select All").exists)
        .ok();

    await t.expect(items.nth(1).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(1).find("span").withText("item1").exists).ok();

    await t.expect(items.nth(2).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(2).find("span").withText("item2").exists).ok();

    await t.expect(items.nth(3).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(3).find("span").withText("item3").exists).ok();

    await t.expect(items.nth(4).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(4).find("span").withText("item4").exists).ok();

    await t.expect(items.nth(5).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t
        .expect(items.nth(5).find("span").withText("Other (describe)").exists)
        .ok();

    await t.expect(items.nth(6).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(6).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(6).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(6).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(6).find("span").withText("None").exists).ok();

    await t.click(items.nth(0).find(".svc-item-value-controls__add"));
    await t.expect(items.nth(0).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__drag").visible)
        .notOk();

    await t.click(items.nth(0).find(".svc-item-value-controls__remove"));
    await t.expect(items.nth(0).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__drag").visible)
        .notOk();

    await t.click(items.nth(4).find(".svc-item-value-controls__add"));

    await t.expect(items.count).eql(8);

    await t.expect(items.nth(4).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__drag").visible)
        .ok();

    await t.expect(items.nth(5).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(5).find("span").withText("item5").exists).ok();

    await t.click(items.nth(4).find(".svc-item-value-controls__remove"));

    await t.expect(items.count).eql(7);

    await t.expect(items.nth(4).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__drag").visible)
        .notOk();

    await t
        .expect(items.nth(5).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t
        .expect(items.nth(5).find("span").withText("Other (describe)").exists)
        .ok();
});

test("Radiogroup question inplace editor", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t.hover(Selector(`div[title=Radiogroup]`), {speed: 0.5});
    await t.click(Selector(`div[title=Radiogroup]`), {speed: 0.5});
    await t
        .expect(
            Selector(".svc-question__content.svc-question__content--selected")
                .exists
        )
        .ok();

    const items = Selector(".svc-item-value-wrapper");
    await t.expect(items.count).eql(6);

    await t.expect(items.nth(0).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(0).find("span").withText("item1").exists).ok();

    await t.expect(items.nth(1).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(1).find("span").withText("item2").exists).ok();

    await t.expect(items.nth(2).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(2).find("span").withText("item3").exists).ok();

    await t.expect(items.nth(3).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(3).find("span").withText("item4").exists).ok();

    await t.expect(items.nth(4).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t
        .expect(items.nth(4).find("span").withText("Other (describe)").exists)
        .ok();

    await t.expect(items.nth(5).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(5).find("span").withText("None").exists).ok();

    await t.click(items.nth(5).find(".svc-item-value-controls__add"));
    await t.expect(items.nth(5).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__drag").visible)
        .notOk();

    await t.click(items.nth(5).find(".svc-item-value-controls__remove"));
    await t.expect(items.nth(5).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__drag").visible)
        .notOk();

    await t.click(items.nth(3).find(".svc-item-value-controls__add"));

    await t.expect(items.count).eql(7);

    await t.expect(items.nth(3).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__drag").visible)
        .ok();

    await t.expect(items.nth(4).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(4).find("span").withText("item5").exists).ok();

    await t.click(items.nth(3).find(".svc-item-value-controls__remove"));

    await t.expect(items.count).eql(6);

    await t.expect(items.nth(3).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__drag").visible)
        .notOk();

    await t
        .expect(items.nth(4).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t
        .expect(items.nth(4).find("span").withText("Other (describe)").exists)
        .ok();
});

test("Dropdown question inplace editor", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t.hover(Selector(`div[title=Dropdown]`), {speed: 0.5});
    await t.click(Selector(`div[title=Dropdown]`), {speed: 0.5});
    await t
        .expect(
            Selector(".svc-question__content.svc-question__content--selected")
                .exists
        )
        .ok();

    const items = Selector(".svc-item-value-wrapper");
    await t.expect(items.count).eql(6);

    await t.expect(items.nth(0).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(0).find("span").withText("item1").exists).ok();

    await t.expect(items.nth(1).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(1).find("span").withText("item2").exists).ok();

    await t.expect(items.nth(2).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(2).find("span").withText("item3").exists).ok();

    await t.expect(items.nth(3).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(3).find("span").withText("item4").exists).ok();

    await t.expect(items.nth(4).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t
        .expect(items.nth(4).find("span").withText("Other (describe)").exists)
        .ok();

    await t.expect(items.nth(5).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(5).find("span").withText("None").exists).ok();

    await t.click(items.nth(5).find(".svc-item-value-controls__add"));
    await t.expect(items.nth(5).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__drag").visible)
        .notOk();

    await t.click(items.nth(5).find(".svc-item-value-controls__remove"));
    await t.expect(items.nth(5).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(5).find(".svc-item-value-controls__drag").visible)
        .notOk();

    await t.click(items.nth(3).find(".svc-item-value-controls__add"));

    await t.expect(items.count).eql(7);

    await t.expect(items.nth(3).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__drag").visible)
        .ok();

    await t.expect(items.nth(4).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(4).find("span").withText("item5").exists).ok();

    await t.click(items.nth(3).find(".svc-item-value-controls__remove"));

    await t.expect(items.count).eql(6);

    await t.expect(items.nth(3).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__drag").visible)
        .notOk();

    await t
        .expect(items.nth(4).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t
        .expect(items.nth(4).find("span").withText("Other (describe)").exists)
        .ok();

    await t.hover(Selector(`div[title='Single Input']`), {speed: 0.5});
    await t.click(Selector(`div[title='Single Input']`), {speed: 0.5});

    await t.expect(items.count).eql(6); // Choice editors are hidden if another question is selected
});

test("Ranking question inplace editor", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t.hover(Selector(`div[title=Ranking]`), {speed: 0.5});
    await t.click(Selector(`div[title=Ranking]`), {speed: 0.5});
    await t
        .expect(
            Selector(".svc-question__content.svc-question__content--selected")
                .exists
        )
        .ok();

    const items = Selector(".svc-item-value-wrapper");
    await t.expect(items.count).eql(4);

    await t.expect(items.nth(0).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(0).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(0).find("span").withText("item1").exists).ok();

    await t.expect(items.nth(1).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(1).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(1).find("span").withText("item2").exists).ok();

    await t.expect(items.nth(2).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(2).find(".svc-item-value-controls__drag").visible)
        .ok();
    await t.expect(items.nth(2).find("span").withText("item3").exists).ok();

    await t.expect(items.nth(3).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(3).find("span").withText("item4").exists).ok();

    await t.click(items.nth(3).find(".svc-item-value-controls__add"));

    await t.expect(items.count).eql(5);

    await t.expect(items.nth(3).hasClass("svc-item-value--new")).notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__add").visible)
        .notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__remove").visible)
        .ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__drag").visible)
        .ok();

    await t.expect(items.nth(4).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(4).find(".svc-item-value-controls__drag").visible)
        .notOk();
    await t.expect(items.nth(4).find("span").withText("item5").exists).ok();

    await t.click(items.nth(3).find(".svc-item-value-controls__remove"));

    await t.expect(items.count).eql(4);

    await t.expect(items.nth(3).hasClass("svc-item-value--new")).ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__add").visible)
        .ok();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__remove").visible)
        .notOk();
    await t
        .expect(items.nth(3).find(".svc-item-value-controls__drag").visible)
        .notOk();
});

test("Image picker question inplace editor", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t.hover(Selector(`div[title='Image picker']`), {speed: 0.5});
    await t.click(Selector(`div[title='Image picker']`), {speed: 0.5});
    await t
        .expect(
            Selector(".svc-question__content.svc-question__content--selected")
                .exists
        )
        .ok();

    const items = Selector(".svc-image-item-value-wrapper");
    await t.expect(items.count).eql(5);

    await t.expect(items.nth(0).hasClass("svc-item-value--new")).notOk();
    await t.expect(items.nth(0).find(".svc-image-item-value-controls__add").visible).notOk();
    await t.expect(items.nth(0).find(".svc-image-item-value-controls__choose-file").visible).ok();
    await t.expect(items.nth(0).find('.svc-image-item-value-controls__remove').visible).ok();
    await t.expect(items.nth(0).find('img[alt=lion]').exists).ok();

    await t.expect(items.nth(1).hasClass('svc-item-value--new')).notOk()
    await t.expect(items.nth(1).find('.svc-image-item-value-controls__add').visible).notOk();
    await t.expect(items.nth(1).find('.svc-image-item-value-controls__choose-file').visible).ok();
    await t.expect(items.nth(1).find('.svc-image-item-value-controls__remove').visible).ok();
    await t.expect(items.nth(1).find('img[alt=giraffe]').exists).ok();

    await t.expect(items.nth(2).hasClass('svc-item-value--new')).notOk()
    await t.expect(items.nth(2).find('.svc-image-item-value-controls__add').visible).notOk();
    await t.expect(items.nth(2).find('.svc-image-item-value-controls__choose-file').visible).ok();
    await t.expect(items.nth(2).find('.svc-image-item-value-controls__remove').visible).ok();
    await t.expect(items.nth(2).find('img[alt=panda]').exists).ok();
    
    await t.expect(items.nth(3).hasClass('svc-item-value--new')).notOk()
    await t.expect(items.nth(3).find('.svc-image-item-value-controls__add').visible).notOk();
    await t.expect(items.nth(3).find('.svc-image-item-value-controls__choose-file').visible).ok();
    await t.expect(items.nth(3).find('.svc-image-item-value-controls__remove').visible).ok();
    await t.expect(items.nth(3).find('img[alt=camel]').exists).ok();
    
    await t.expect(items.nth(4).hasClass('svc-image-item-value--new')).ok()
    await t.expect(items.nth(4).find('.svc-image-item-value-controls__add').visible).ok();
    await t.expect(items.nth(4).find('.svc-image-item-value-controls__choose-file').visible).notOk();
    await t.expect(items.nth(4).find('.svc-image-item-value-controls__remove').visible).notOk();
    await t.expect(items.nth(4).find('img').exists).notOk();

    await t.setFilesToUpload(items.nth(4).find('.svc-choose-file-input'), "./image.jpg");
});

test("Image question inplace editor", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t.hover(Selector(`div[title=Image]`), {speed: 0.5});
    await t.click(Selector(`div[title=Image]`), {speed: 0.5});
    await t
        .expect(
            Selector(".svc-question__content.svc-question__content--selected")
                .exists
        )
        .ok();

    await t
        .expect(
            Selector(".svc-question__content--selected").find(
                "img[alt=question1]"
            ).exists
        )
        .ok();

    const controls = Selector(".svc-image-question-controls");
    await t.expect(controls.count).eql(1);

    await t
        .expect(
            controls.nth(0).find(".svc-image-question-controls__button").visible
        )
        .ok();
});

test("Image question inplace editor - choose image via inplace editor", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();
    await t.hover(Selector(`div[title=Image]`), {speed: 0.5});
    await t.click(Selector(`div[title=Image]`), {speed: 0.5});

    const getImageLink = ClientFunction(() => {
        return document.querySelectorAll("img.sv_image_image")[0].src;
    });
    let imageLink = await getImageLink();
    await t.expect(imageLink).eql("https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg");

    await t.click(Selector('.svc-image-question-controls__button'));
    await t.setFilesToUpload(Selector('.svc-question__content input[type=file]'), './image.jpg');
    imageLink = await getImageLink();
    await t.expect(imageLink.substring(0, 48)).eql("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA");
});

test("Matrix dropdown question inplace popup editor", async (t) => {
    const showControl = ClientFunction(() => {
        document.querySelectorAll("td:nth-child(2) .svc-matrix-cell .svc-matrix-cell__question-controls")[0].style.display = "block";
    });    
    await t.expect(Selector(".svc-question__content").exists).notOk();

    await t.hover(Selector(`div[title="Matrix (multiple choice)"]`), {speed: 0.5});
    await t.click(Selector(`div[title="Matrix (multiple choice)"]`), {speed: 0.5});
    await t.expect(Selector(".svc-question__content").exists).ok();

    await t.hover(Selector(`td:nth-child(2) .svc-matrix-cell`).nth(0), {speed: 0.1});
    // TODO: remove this line after TestCafe implements workig hover
    await showControl();
    await t.click(Selector(`td:nth-child(2) .svc-matrix-cell`).nth(0).find(`.svc-matrix-cell__question-controls-button`), {speed: 0.5});
    await t.expect(Selector('.svc-question__content--selected-no-border').visible).ok();
    await t.expect(Selector('.sv-popup__content .sd-header__text').exists).notOk();
    await t.expect(Selector('.sv-popup__content .sd-page__title').exists).notOk();

    await t.click(Selector('.sv-popup__button--cancel'));
    await t.expect(Selector('.svc-question__content--selected-no-border').exists).notOk();
});
