import { url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Question wrapper";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
    await t.maximizeWindow();
});

function normalize(str) {
    return str.replace(/\xa0/gi, " ").replace(/\n/gi, " ");
}

test("Single input question wrapper actions", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();

    await t.hover(Selector(`div[title='Single Input']`));
    await t.click(Selector(`div[title='Single Input']`));

    await t
        .expect(
            Selector(".svc-question__content.svc-question__content--selected")
                .exists
        )
        .ok();

    await t
        .expect(
            Selector(".svc-question__content--selected").find(
                "input[aria-label=question1]"
            ).visible
        )
        .ok();

    const controls = Selector(".svc-question__content-actions").find(
        ".sv-action"
    );
    await t.expect(controls.count).eql(4);

    const convertActionButton = controls
        .nth(0)
        .find('button[title="Convert to"]');
    await t.expect(convertActionButton.visible).ok();

    const duplicateActionButton = controls
        .nth(1)
        .find('button[title="Duplicate"]');
    await t.expect(duplicateActionButton.visible).ok();

    const requiredActionButton = controls
        .nth(2)
        .find('button[title="Is required?"]');
    await t.expect(requiredActionButton.visible).ok();

    const separator = controls.nth(3).find(".sv-action-bar-separator");
    await t.expect(separator.visible).ok();

    const deleteActionButton = controls.nth(3).find('button[title="Delete"]');
    await t.expect(deleteActionButton.visible).ok();
});

test.skip("Single input question wrapper action convert", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();

    await t.hover(Selector(`div[title='Single Input']`));
    await t.click(Selector(`div[title='Single Input']`));
    await t
        .expect(
            Selector(".svc-question__content.svc-question__content--selected")
                .exists
        )
        .ok();
    await t
        .expect(
            Selector(".svc-question__content--selected").find(
                "input[aria-label=question1]"
            ).visible
        )
        .ok();

    const controls = Selector(".svc-question__content-actions").find(
        ".sv-action"
    );
    const convertActionButton = controls
        .nth(0)
        .find('button[title="Convert to"]');
    await t.expect(convertActionButton.visible).ok();

    await t.click(convertActionButton);
    const listItems = Selector(".sv-popup .sv-list__item").filterVisible();
    await t.expect(listItems.count).eql(2);
    await t.expect(listItems.nth(0).innerText).eql("Single Input");
    await t.expect(listItems.nth(1).innerText).eql("Comment");

    await t.click(listItems.nth(1));
    await t
        .expect(
            Selector(".svc-question__content--selected").find(
                "textarea[aria-label=question1]"
            ).visible
        )
        .ok();

    await t.click(convertActionButton);
    await t.expect(listItems.count).eql(2);
    await t.expect(listItems.nth(0).innerText).eql("Comment");
    await t.expect(listItems.nth(1).innerText).eql("Single Input");
    await t.click(listItems.nth(1));
    await t
        .expect(
            Selector(".svc-question__content--selected").find(
                "input[aria-label=question1]"
            ).visible
        )
        .ok();
});

test("Single input question wrapper action duplicate", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();

    await t.hover(Selector(`div[title='Single Input']`));
    await t.click(Selector(`div[title='Single Input']`));
    await t
        .expect(
            Selector(".svc-question__content.svc-question__content--selected")
                .exists
        )
        .ok();
    await t
        .expect(
            Selector(".svc-question__content--selected").find(
                "input[aria-label=question1]"
            ).visible
        )
        .ok();

    const controls = Selector(".svc-question__content-actions").find(
        ".sv-action"
    );
    const duplicateActionButton = controls
        .nth(1)
        .find('button[title="Duplicate"]');
    await t.expect(duplicateActionButton.visible).ok();

    await t.click(duplicateActionButton);
    const questions = Selector(".svc-question__content");

    await t.expect(questions.count).eql(2);
    var title1 = await questions.nth(0).find(".sd-question__title").innerText;
    await t.expect(normalize(title1)).eql("1. question1");
    var title2 = await questions.nth(1).find(".sd-question__title").innerText;
    await t.expect(normalize(title2)).eql("2. question2");
    await t
        .expect(questions.nth(0).hasClass("svc-question__content--selected"))
        .notOk();
    await t
        .expect(questions.nth(1).hasClass("svc-question__content--selected"))
        .ok();
});

test("Single input question wrapper action change require", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();

    await t.hover(Selector(`div[title='Single Input']`));
    await t.click(Selector(`div[title='Single Input']`));
    await t
        .expect(
            Selector(".svc-question__content.svc-question__content--selected")
                .exists
        )
        .ok();
    await t
        .expect(
            Selector(".svc-question__content--selected").find(
                "input[aria-label=question1]"
            ).visible
        )
        .ok();

    const controls = Selector(".svc-question__content-actions").find(
        ".sv-action"
    );
    const requiredActionRoot = controls.nth(2);
    const requiredActionButton = controls
        .nth(2)
        .find('button[title="Is required?"]');
    await t.expect(requiredActionButton.visible).ok();

    const questionTitle = Selector(`.sd-question__title`);
    var title = await questionTitle.innerText;
    await t.expect(normalize(title)).eql("1. question1");
    await t
        .expect(requiredActionRoot.hasClass("sv-action-bar-item--secondary"))
        .notOk();

    await t.click(requiredActionButton);
    title = await questionTitle.innerText;
    await t.expect(normalize(title)).eql("1. question1\n *");
    await t
        .expect(requiredActionRoot.hasClass("sv-action-bar-item--secondary"))
        .ok();
});

test("Single input question wrapper action delete", async (t) => {
    await t.expect(Selector(".svc-question__content").exists).notOk();

    await t.hover(Selector(`div[title='Single Input']`));
    await t.click(Selector(`div[title='Single Input']`));
    await t
        .expect(
            Selector(".svc-question__content.svc-question__content--selected")
                .exists
        )
        .ok();
    await t
        .expect(
            Selector(".svc-question__content--selected").find(
                "input[aria-label=question1]"
            ).visible
        )
        .ok();

    const controls = Selector(".svc-question__content-actions").find(
        ".sv-action"
    );
    const deleteActionButton = controls.nth(3).find('button[title="Delete"]');
    await t.expect(deleteActionButton.visible).ok();

    await t.click(deleteActionButton);
    await t.expect(Selector(".svc-question__content").exists).notOk();
});
