import { url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Question wrapper";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

function normalize(str) {
  return str.replace(/\xa0/gi, " ").replace(/(?:\r\n|\r|\n)/g, "");
}

const controls = Selector(".svc-question__content-actions .sv-action").filterVisible();
const requiredActionButton = controls.nth(2).find('button[title="Is required?"]');
const deleteActionButton = controls.nth(3).find('button[title="Delete"]');
const convertActionButton = controls.nth(0).find('button[title="Single Input"]');
const duplicateActionButton = controls.nth(1).find('button[title="Duplicate"]');
const dotsButton = Selector(".svc-question__content-actions .sv-action").nth(4);
const questions = Selector(".svc-question__content");

test("Single input question wrapper actions", async (t) => {
  const separator = controls.nth(3).find(".sv-action-bar-separator");

  await t
    .expect(questions.exists).notOk()

    .hover(Selector("div[title='Single Input']"))
    .click(Selector("div[title='Single Input']"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok()
    .expect(controls.count).eql(4)
    .expect(convertActionButton.visible).ok()
    .expect(duplicateActionButton.visible).ok()
    .expect(requiredActionButton.visible).ok()
    .expect(separator.visible).ok()
    .expect(deleteActionButton.visible).ok()
    .expect(dotsButton.exists).ok()
    .expect(dotsButton.visible).notOk();
});

test("Single input question wrapper action convert", async (t) => {
  const convertActionButton = controls.find('button[title="Single Input"]');
  const listItems = Selector(".sv-popup .sv-list__item").filterVisible();

  await t
    .expect(questions.exists).notOk()

    .hover(Selector("div[title='Single Input']"))
    .click(Selector("div[title='Single Input']"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok()
    .expect(convertActionButton.visible).ok()

    .click(convertActionButton)
    .expect(listItems.count).eql(18)
    .expect(listItems.nth(0).innerText).eql("Checkbox")
    .expect(listItems.nth(3).innerText).eql("Comment")

    .click(listItems.nth(3))
    .expect(Selector(".svc-question__content--selected").find("textarea[aria-label=question1]").visible).ok()

    .click(controls.find('button[title="Comment"]'))
    .expect(listItems.count).eql(18)
    .expect(listItems.nth(0).innerText).eql("Single Input")
    .expect(listItems.nth(1).innerText).eql("Checkbox")

    .click(listItems.nth(0))
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok();
});

test("Single input question wrapper action duplicate", async (t) => {
  await t
    .expect(questions.exists).notOk()

    .hover(Selector("div[title='Single Input']"))
    .click(Selector("div[title='Single Input']"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok()
    .expect(duplicateActionButton.visible).ok()

    .click(duplicateActionButton);

  const title1 = await questions.nth(0).find(".sd-question__title").innerText;
  await t
    .expect(questions.count).eql(2)
    .expect(normalize(title1)).eql("1. question1");

  const title2 = await questions.nth(1).find(".sd-question__title").innerText;
  await t
    .expect(normalize(title2)).eql("2. question2")
    .expect(questions.nth(0).hasClass("svc-question__content--selected")).notOk()
    .expect(questions.nth(1).hasClass("svc-question__content--selected")).ok();
});

test("Single input question wrapper action change require", async (t) => {
  const questionTitle = Selector(".sd-question__title");
  await t
    .expect(questions.exists).notOk()

    .hover(Selector("div[title='Single Input']"))
    .click(Selector("div[title='Single Input']"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok();

  const requiredActionRoot = controls.nth(2);
  await t.expect(requiredActionButton.visible).ok();

  let title = await questionTitle.innerText;
  await t
    .expect(normalize(title)).eql("1. question1").expect(requiredActionRoot.hasClass("sv-action-bar-item--secondary")).notOk()

    .click(requiredActionButton);
  title = await questionTitle.innerText;
  await t
    .expect(normalize(title)).eql("1. question1 *").expect(requiredActionRoot.hasClass("sv-action-bar-item--secondary")).ok();
});

test("Single input question wrapper action delete", async (t) => {
  await t
    .expect(questions.exists).notOk()

    .hover(Selector("div[title='Single Input']"))
    .click(Selector("div[title='Single Input']"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok()
    .expect(deleteActionButton.visible).ok()

    .click(deleteActionButton)
    .expect(questions.exists).notOk();
});
