import { getToolboxItemByText, questions, questionToolbarActions, url, selectedObjectTextSelector, urlDropdownCollapseView, getListItemByText } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Question wrapper";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(1920, 1080);
});

function normalize(str) {
  return str.replace(/\xa0/gi, " ").replace(/(?:\r\n|\r|\n)/g, "");
}

const convertQuestionTypesCount = 20;
const requiredActionButton = questionToolbarActions.find('button[title="Required"]');
const deleteActionButton = questionToolbarActions.find('button[title="Delete"]');
const convertActionButton = questionToolbarActions.find('button[title="Text Entry"]');
const duplicateActionButton = questionToolbarActions.find('button[title="Duplicate"]');
const dotsButton = Selector(".svc-question__content-actions .sv-action.sv-dots");
const listItems = Selector(".sv-popup .sv-list__item").filterVisible();
const popupContent = Selector(".sv-popup__content .sv-list").filterVisible();
const convertPopupContent = "Radio Button Group\nRating\nCheckboxes\nDropdown\nMulti-Select Dropdown\nYes/No Question\nFile\nImage Picker\nRanking\nText Entry\nText Area\nMultiple Text Box\nDynamic Panel\nMatrix Table\nMatrix Table with Dropdown\nDynamic Matrix Table\nHTML\nExpression (read-only)\nImage\nSignature Pad";

test("Text Entry question wrapper actions", async (t) => {
  const separator = questionToolbarActions.nth(3).find(".sv-action-bar-separator");

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Text Entry"))
    .click(getToolboxItemByText("Text Entry"))
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

test("Text Entry question wrapper action convert", async (t) => {
  const convertActionButton = questionToolbarActions.find('button[title="Text Entry"]');

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Text Entry"))
    .click(getToolboxItemByText("Text Entry"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok()
    .expect(convertActionButton.visible).ok()

    .click(convertActionButton)
    .expect(listItems.count).eql(convertQuestionTypesCount)
    .expect(popupContent.innerText).eql(convertPopupContent)

    .click(getListItemByText("Text Area"))
    .expect(Selector(".svc-question__content--selected").find("textarea[aria-label=question1]").visible).ok()

    .click(questionToolbarActions.find('button[title="Text Area"]'))
    .expect(listItems.count).eql(convertQuestionTypesCount)
    .expect(popupContent.innerText).eql(convertPopupContent)

    .click(getListItemByText("Text Entry"))
    .expect(Selector(".svc-question__content--selected input[aria-label=question1]").visible).ok();
});

test("Text Entry question wrapper action convert on hover", async (t) => {
  const convertActionButton = questionToolbarActions.find('button[title="Text Entry"]');

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Text Entry"))
    .click(getToolboxItemByText("Text Entry"))
    .click(Selector(".svc-tab-designer"), { offsetX: 5, offsetY: 5 })
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).notOk()
    .hover(".svc-question__content", { offsetX: 5, offsetY: 5 })
    .wait(500)
    .expect(Selector(".svc-question__content").find("input[aria-label=question1]").visible).ok()
    .expect(convertActionButton.visible).ok()

    .click(convertActionButton)
    .expect(listItems.count).eql(convertQuestionTypesCount)
    .expect(popupContent.innerText).eql(convertPopupContent)

    .click(getListItemByText("Text Area"))
    .expect(Selector(".svc-question__content--selected").find("textarea[aria-label=question1]").visible).ok()

    .click(questionToolbarActions.find('button[title="Text Area"]'))
    .expect(listItems.count).eql(convertQuestionTypesCount)
    .expect(popupContent.innerText).eql(convertPopupContent)

    .click(getListItemByText("Text Entry"))
    .expect(Selector(".svc-question__content--selected input[aria-label=question1]").visible).ok();
});

test("Text Entry question wrapper action duplicate", async (t) => {
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Text Entry"))
    .click(getToolboxItemByText("Text Entry"))
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

test("Text Entry question wrapper action change require", async (t) => {
  const questionTitle = Selector(".sd-question__title");
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Text Entry"))
    .click(getToolboxItemByText("Text Entry"))
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

test("Text Entry question wrapper action delete", async (t) => {
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Text Entry"))
    .click(getToolboxItemByText("Text Entry"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok()
    .expect(deleteActionButton.visible).ok()

    .click(deleteActionButton)
    .expect(questions.exists).notOk();
});

test("Matrix dropdown with vertical layout and and selecting rows", async (t) => {
  await t.expect(questions.exists).notOk()
    .hover(getToolboxItemByText("Matrix Table with Dropdown"))
    .click(getToolboxItemByText("Matrix Table with Dropdown"));

  await ClientFunction(() => {
    window["creator"].survey.getQuestionByName("question1").columnLayout = "vertical";
  })();

  await t.click(Selector(".sv-string-editor").withText("Row 1"))
    .expect(Selector(selectedObjectTextSelector).innerText).eql("question1")
    .expect(Selector("h5.spg-title").withText("Columns").visible).notOk()
    .expect(Selector("h5.spg-title").withText("Rows").visible).ok();
});

test("Matrix dropdown with detail panel", async (t) => {
  await t.expect(questions.exists).notOk()
    .hover(getToolboxItemByText("Matrix Table with Dropdown"))
    .click(getToolboxItemByText("Matrix Table with Dropdown"));

  await ClientFunction(() => {
    window["creator"].survey.getQuestionByName("question1").detailPanelMode = "underRow";
  })();
  const SingleInputItem = Selector("[aria-label='Text Entry toolbox item']");
  await t
    .expect(Selector(".sd-question[data-name=question1] .svc-panel__placeholder").withText("Drop a question").visible).ok()
    .hover(SingleInputItem)
    .dragToElement(SingleInputItem, Selector(".sd-question[data-name=question1] .svc-panel__placeholder_frame"), { speed: 0.5 })
    .expect((Selector(".sd-question[data-name=question1] .sd-table__row").nth(1).find("#convertTo").withText("Text Entry").visible)).ok();

});

test("Matrix dropdown with detail panel - add question button", async (t) => {
  await t.expect(questions.exists).notOk()
    .hover(getToolboxItemByText("Matrix Table with Dropdown"))
    .click(getToolboxItemByText("Matrix Table with Dropdown"));

  await ClientFunction(() => {
    window["creator"].survey.getQuestionByName("question1").detailPanelMode = "underRow";
  })();
  await t
    .expect(Selector(".sd-question[data-name=question1] .svc-panel__placeholder").withText("Drop a question").visible).ok()
    .expect(Selector(".sd-question[data-name=question1] .svc-panel__add-new-question").visible).ok()
    .click(Selector(".sd-question[data-name=question1] .svc-panel__add-new-question"))
    .expect((Selector(".sd-question[data-name=question1] .sd-table__row").nth(1).find("#convertTo").withText("Text Entry").visible)).ok()
    .expect(Selector(".sd-question[data-name=question2]").visible).ok()
    .click(Selector(".sd-question[data-name=question1] .svc-panel__add-new-question"))
    .expect(Selector(".sd-question[data-name=question3]").visible).ok();
});

test("Rating question required property", async (t) => {
  const isrequiredButton = Selector("#isrequired");
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Rating"))
    .click(getToolboxItemByText("Rating"))
    .expect(isrequiredButton.visible).ok()
    .expect(isrequiredButton.classNames).notContains("sv-action-bar-item--secondary")
    .expect(isrequiredButton.find("use").getAttribute("xlink:href")).eql("#icon-switch-inactive_16x16")

    .click(isrequiredButton)
    .expect(isrequiredButton.classNames).contains("sv-action-bar-item--secondary")
    .expect(isrequiredButton.find("use").getAttribute("xlink:href")).eql("#icon-switch-active_16x16");
});

fixture`${title}`.page`${urlDropdownCollapseView}`.beforeEach(async (t) => {
  await t.resizeWindow(1920, 1080);
});

test("Dropdown question with ability to collapse choices", async (t) => {
  const buttonSelector = Selector(".svc-question__dropdown-choices--wrapper .svc-action-button");

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Dropdown"))
    .click(getToolboxItemByText("Dropdown"))

    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(buttonSelector.withText("Show more").exists).ok()

    .click(buttonSelector)
    .expect(buttonSelector.withText("Show less").exists).ok()

    .hover(getToolboxItemByText("Text Entry"))
    .click(getToolboxItemByText("Text Entry"))
    .expect(buttonSelector.withText("Show more").exists).ok()

    .click(Selector(".svc-question__dropdown-choice .svc-item-value-controls__remove"))
    .expect(buttonSelector.exists).notOk()

    .click(Selector(".svc-question__dropdown-choice .svc-item-value-controls__add"))
    .expect(buttonSelector.exists).ok();
});

test("Keep focus on question convert", async (t) => {
  const convertActionButton = questionToolbarActions.find('button[title="Text Entry"]');

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Text Entry"))
    .click(getToolboxItemByText("Text Entry"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input[aria-label=question1]").visible).ok()
    .expect(convertActionButton.visible).ok()

    .click(convertActionButton)
    .expect(listItems.count).eql(convertQuestionTypesCount)
    .expect(popupContent.innerText).eql(convertPopupContent)

    .click(getListItemByText("Text Area"))
    .expect(Selector(".svc-question__content--selected").find("textarea[aria-label=question1]").visible).ok()
    .expect(Selector(".svc-question__content--selected #convertTo button").focused).ok();
});

test("Matrix column title - get focus on click, not tab", async (t) => {
  await t.expect(questions.exists).notOk()
    .hover(getToolboxItemByText("Matrix Table with Dropdown"))
    .click(getToolboxItemByText("Matrix Table with Dropdown"));
  await t
    .click(Selector(".svc-matrix-cell").withText("Column 1"), { offsetX: 5, offsetY: 5 })
    .expect(Selector(".svc-matrix-cell").withText("Column 1").focused).ok()
    .pressKey("tab tab")
    .expect(Selector(".sv-string-editor").withText("Column 2").focused).ok();
});