import { getToolboxItemByText, questions, questionToolbarActions, url, selectedObjectTextSelector } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Question wrapper";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

function normalize(str) {
  return str.replace(/\xa0/gi, " ").replace(/(?:\r\n|\r|\n)/g, "");
}

const requiredActionButton = questionToolbarActions.find('button[title="Is required?"]');
const deleteActionButton = questionToolbarActions.find('button[title="Delete"]');
const convertActionButton = questionToolbarActions.find('button[title="Single Input"]');
const duplicateActionButton = questionToolbarActions.find('button[title="Duplicate"]');
const dotsButton = Selector(".svc-question__content-actions .sv-action.sv-dots");

test("Single input question wrapper actions", async (t) => {
  const separator = questionToolbarActions.nth(3).find(".sv-action-bar-separator");

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single Input"))
    .click(getToolboxItemByText("Single Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok()
    .expect(questionToolbarActions.count).eql(4)
    .expect(convertActionButton.visible).ok()
    .expect(duplicateActionButton.visible).ok()
    .expect(requiredActionButton.visible).ok()
    //.expect(separator.visible).ok()
    .expect(deleteActionButton.visible).ok()
    .expect(dotsButton.exists).ok()
    .expect(dotsButton.visible).notOk();
});

test("Single input question wrapper action convert", async (t) => {
  const convertActionButton = questionToolbarActions.find('button[title="Single Input"]');
  const listItems = Selector(".sv-popup .sv-list__item").filterVisible();

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single Input"))
    .click(getToolboxItemByText("Single Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok()
    .expect(convertActionButton.visible).ok()

    .click(convertActionButton)
    .expect(listItems.count).eql(19)
    .expect(listItems.nth(0).innerText).eql("Single Input")
    .expect(listItems.nth(1).innerText).eql("Checkbox")
    .expect(listItems.nth(4).innerText).eql("Comment")

    .click(listItems.nth(4))
    .expect(Selector(".svc-question__content--selected").find("textarea[aria-label=question1]").visible).ok()

    .click(questionToolbarActions.find('button[title="Comment"]'))
    .expect(listItems.count).eql(19)
    .expect(listItems.nth(0).innerText).eql("Single Input")
    .expect(listItems.nth(1).innerText).eql("Checkbox")
    .expect(listItems.nth(4).innerText).eql("Comment")

    .click(listItems.nth(0))
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok();
});

test("Single input question wrapper action duplicate", async (t) => {
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single Input"))
    .click(getToolboxItemByText("Single Input"))
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

    .hover(getToolboxItemByText("Single Input"))
    .click(getToolboxItemByText("Single Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok();

  await t.expect(requiredActionButton.visible).ok();

  let title = await questionTitle.innerText;
  await t
    .expect(normalize(title)).eql("1. question1")
    .expect(requiredActionButton.parent(".sv-action").hasClass("sv-action-bar-item--secondary")).notOk()

    .click(requiredActionButton);
  title = await questionTitle.innerText;
  await t
    .expect(normalize(title)).eql("1. question1 *")
    .expect(requiredActionButton.parent(".sv-action").hasClass("sv-action-bar-item--secondary")).ok();
});

test("Single input question wrapper action delete", async (t) => {
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single Input"))
    .click(getToolboxItemByText("Single Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok()
    .expect(deleteActionButton.visible).ok()

    .click(deleteActionButton)
    .expect(questions.exists).notOk();
});

test("Matrix dropdown with vertical layout and and selecting rows", async (t) => {
  await t.expect(questions.exists).notOk()
    .hover(getToolboxItemByText("Matrix (multiple choice)"))
    .click(getToolboxItemByText("Matrix (multiple choice)"));

  await ClientFunction(() => {
    window["creator"].showPropertyGrid = true;
    window["creator"].survey.getQuestionByName("question1").columnLayout = "vertical";
  })();

  await t.click(Selector(".sv-string-editor").withText("Row 1"))
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")
    .expect(Selector("h5.spg-title").withText("Columns").visible).notOk()
    .expect(Selector("h5.spg-title").withText("Row count").visible).ok();
});

test("Matrix dropdown with detail panel", async (t) => {
  await t.expect(questions.exists).notOk()
    .hover(getToolboxItemByText("Matrix (multiple choice)"))
    .click(getToolboxItemByText("Matrix (multiple choice)"));

  await ClientFunction(() => {
    window["creator"].showPropertyGrid = true;
    window["creator"].survey.getQuestionByName("question1").detailPanelMode = "underRow";
  })();
  const SingleInputItem = Selector("[aria-label='Single Input toolbox item']");
  await t
    .expect(Selector(".sd-question[data-name=question1] .svc-panel__placeholder").withText("Drop a question").visible).ok()
    .hover(SingleInputItem)
    .dragToElement(SingleInputItem, Selector(".sd-question[data-name=question1] .svc-panel__placeholder_frame"), { speed: 0.5 })
    .expect((Selector(".sd-question[data-name=question1] .sv_matrix_detail_row #convertTo").withText("Single Input").visible)).ok();

});
