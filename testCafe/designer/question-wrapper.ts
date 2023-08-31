import { getToolboxItemByText, questions, questionToolbarActions, url, selectedObjectTextSelector, urlDropdownCollapseView, getListItemByText, generalGroupName, SingleInputToolboxItem } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Question wrapper";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(1920, 1080);
});

function normalize(str) {
  return str.replace(/\xa0/gi, " ").replace(/(?:\r\n|\r|\n)/g, "");
}

const convertQuestionTypesCount = 20;
const convertTextQuestionInputTypesCount = 13;
const requiredActionButton = questionToolbarActions.find('button[title="Required"]');
const deleteActionButton = questionToolbarActions.find('button[title="Delete"]');

const convertActionButton = questionToolbarActions.find('button[title="Single-Line Input"]');
const convertInputTypeActionButton = questionToolbarActions.find('button[title="Text"]');

const duplicateActionButton = questionToolbarActions.find('button[title="Duplicate"]');
const dotsButton = Selector(".svc-question__content-actions .sv-action.sv-dots");
const listItems = Selector(".sv-popup .sv-list__item").filterVisible();
const popupContent = Selector(".sv-popup__content .sv-list").filterVisible();

const convertPopupContent = "Radio Button Group\nRating Scale\nCheckboxes\nDropdown\nMulti-Select Dropdown\nYes/No (Boolean)\nFile Upload\nImage Picker\nRanking\nSingle-Line Input\nLong Text\nMultiple Textboxes\nDynamic Panel\nSingle-Select Matrix\nMulti-Select Matrix\nDynamic Matrix\nHTML\nExpression (read-only)\nImage\nSignature";
const convertInputTypePopupContent = "Color\nDate\nDate and Time\nEmail\nMonth\nNumber\nPassword\nRange\nPhone Number\nText\nTime\nURL\nWeek";

test("Single input question wrapper actions", async (t) => {
  const separator = questionToolbarActions.nth(3).find(".sv-action-bar-separator");

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input").visible).ok()
    .expect(questionToolbarActions.count).eql(5)
    .expect(convertActionButton.visible).ok()
    .expect(convertInputTypeActionButton.visible).ok()
    .expect(duplicateActionButton.visible).ok()
    .expect(requiredActionButton.visible).ok()
    //.expect(separator.visible).ok()
    .expect(deleteActionButton.visible).ok()
    .expect(dotsButton.exists).ok()
    .expect(dotsButton.visible).notOk();
});

test("Single input question wrapper action convert", async (t) => {
  const convertActionButton = questionToolbarActions.find('button[title="Single-Line Input"]');

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input").visible).ok()
    .expect(convertActionButton.visible).ok()

    .click(convertActionButton)
    .expect(listItems.count).eql(convertQuestionTypesCount)
    .expect(popupContent.innerText).eql(convertPopupContent)

    .click(getListItemByText("Long Text"))
    .expect(Selector(".svc-question__content--selected").find("textarea").visible).ok()

    .click(questionToolbarActions.find('button[title="Long Text"]'))
    .expect(listItems.count).eql(convertQuestionTypesCount)
    .expect(popupContent.innerText).eql(convertPopupContent)

    .click(getListItemByText("Single-Line Input"))
    .expect(Selector(".svc-question__content--selected input").visible).ok();
});
test("Single input question wrapper action convert inputType", async (t) => {
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input").visible).ok()
    .expect(convertInputTypeActionButton.visible).ok()

    .click(convertInputTypeActionButton)
    .expect(listItems.count).eql(convertTextQuestionInputTypesCount)
    .expect(popupContent.innerText).eql(convertInputTypePopupContent)

    .click(getListItemByText("Date"))

    .click(questionToolbarActions.find('button[title="Date"]'))
    .expect(listItems.count).eql(convertTextQuestionInputTypesCount)
    .expect(popupContent.innerText).eql(convertInputTypePopupContent);
});

test("Single input question wrapper action convert on hover", async (t) => {
  const convertActionButton = questionToolbarActions.find('button[title="Single-Line Input"]');

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .click(Selector(".svc-tab-designer"), { offsetX: 5, offsetY: 5 })
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).notOk()
    .hover(".svc-question__content", { offsetX: 5, offsetY: 5 })
    .wait(500)
    .expect(Selector(".svc-question__content").find("input").visible).ok()
    .expect(convertActionButton.visible).ok()

    .click(convertActionButton)
    .expect(listItems.count).eql(convertQuestionTypesCount)
    .expect(popupContent.innerText).eql(convertPopupContent)

    .click(getListItemByText("Long Text"))
    .expect(Selector(".svc-question__content--selected").find("textarea").visible).ok()

    .click(questionToolbarActions.find('button[title="Long Text"]'))
    .expect(listItems.count).eql(convertQuestionTypesCount)
    .expect(popupContent.innerText).eql(convertPopupContent)

    .click(getListItemByText("Single-Line Input"))
    .expect(Selector(".svc-question__content--selected input").visible).ok();
});

test("Single input question wrapper action duplicate", async (t) => {
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input").visible).ok()
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

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input").visible).ok();

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

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input").visible).ok()
    .expect(deleteActionButton.visible).ok()

    .click(deleteActionButton)
    .expect(questions.exists).notOk();
});

test("Matrix dropdown with vertical layout and and selecting rows", async (t) => {
  await t.expect(questions.exists).notOk()
    .hover(getToolboxItemByText("Multi-Select Matrix"))
    .click(getToolboxItemByText("Multi-Select Matrix"));

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
    .hover(getToolboxItemByText("Multi-Select Matrix"))
    .click(getToolboxItemByText("Multi-Select Matrix"));

  await ClientFunction(() => {
    window["creator"].survey.getQuestionByName("question1").detailPanelMode = "underRow";
  })();
  await t
    .expect(Selector(".sd-question[data-name=question1] .svc-panel__placeholder").withText("Drop a question").visible).ok()
    .hover(SingleInputToolboxItem)
    .dragToElement(SingleInputToolboxItem, Selector(".sd-question[data-name=question1] .svc-panel__placeholder_frame"), { speed: 0.5 })
    .expect((Selector(".sd-question[data-name=question1] .sd-table__row").nth(1).find("#convertTo").withText("Single-Line Input").visible)).ok();

});

test("Matrix dropdown with detail panel - add question button", async (t) => {
  await t.expect(questions.exists).notOk()
    .hover(getToolboxItemByText("Multi-Select Matrix"))
    .click(getToolboxItemByText("Multi-Select Matrix"));

  await ClientFunction(() => {
    window["creator"].survey.getQuestionByName("question1").detailPanelMode = "underRow";
  })();
  await t
    .expect(Selector(".sd-question[data-name=question1] .svc-panel__placeholder").withText("Drop a question").visible).ok()
    .expect(Selector(".sd-question[data-name=question1] .svc-panel__add-new-question").visible).ok()
    .click(Selector(".sd-question[data-name=question1] .svc-panel__add-new-question"))
    .expect((Selector(".sd-question[data-name=question1] .sd-table__row").nth(1).find("#convertTo").withText("Single-Line Input").visible)).ok()
    .expect(Selector(".sd-question[data-name=question2]").visible).ok()
    .click(Selector(".sd-question[data-name=question1] .svc-panel__add-new-question"))
    .expect(Selector(".sd-question[data-name=question3]").visible).ok();
});

test("Rating question required property", async (t) => {
  const isrequiredButton = Selector("#isrequired");
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Rating Scale"))
    .click(getToolboxItemByText("Rating Scale"))
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

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .expect(buttonSelector.withText("Show more").exists).ok()

    .click(Selector(".svc-question__dropdown-choice .svc-item-value-controls__remove"))
    .expect(buttonSelector.exists).notOk()

    .click(Selector(".svc-question__dropdown-choice .svc-item-value-controls__add"))
    .expect(buttonSelector.exists).ok();
});

test("Keep focus on question convert", async (t) => {
  const convertActionButton = questionToolbarActions.find('button[title="Single-Line Input"]');
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .expect(Selector(".svc-question__content.svc-question__content--selected").exists).ok()
    .expect(Selector(".svc-question__content--selected").find("input").visible).ok()
    .expect(convertActionButton.visible).ok()

    .click(convertActionButton)
    .expect(listItems.count).eql(convertQuestionTypesCount)
    .expect(popupContent.innerText).eql(convertPopupContent)

    .click(getListItemByText("Long Text"))
    .expect(Selector(".svc-question__content--selected").find("textarea").visible).ok()
    .expect(Selector(".svc-question__content--selected #convertTo button").focused).ok();
});

test("Matrix column title - get focus on click, not tab", async (t) => {
  await t.expect(questions.exists).notOk()
    .hover(getToolboxItemByText("Multi-Select Matrix"))
    .click(getToolboxItemByText("Multi-Select Matrix"));
  await t
    .click(Selector(".svc-matrix-cell").withText("Column 1"), { offsetX: 5, offsetY: 5 })
    .expect(Selector(".svc-matrix-cell").withText("Column 1").focused).ok()
    .pressKey("tab tab")
    .expect(Selector(".sv-string-editor").withText("Column 2").focused).ok();
});
test("Carryforward banner", async (t) => {
  const getSelectedElementName = ClientFunction(() => {
    return window["creator"].selectedElement.name;
  });
  const choicesTabTitle = Selector("h4").withExactText("Choices");
  const generalTabTitle = Selector("h4").withExactText(generalGroupName);
  const carryForwardEditor = Selector("div[aria-label='Copy choices from the following question']");
  await t.expect(questions.exists).notOk()
    .hover(getToolboxItemByText("Checkboxes"))
    .click(getToolboxItemByText("Checkboxes"))
    .hover(getToolboxItemByText("Radio Button Group"))
    .click(getToolboxItemByText("Radio Button Group"))
    .hover(getToolboxItemByText("Dropdown"))
    .click(getToolboxItemByText("Dropdown"));

  await t
    .expect(getSelectedElementName()).eql("question3")
    .click(generalTabTitle)
    .click(choicesTabTitle)
    .click(carryForwardEditor)
    .click(Selector(".sv-popup__content .sv-list .sv-list__item").withText("question1"))
    .expect(Selector("span").withText("Copy choices from").exists).ok()
    .click(Selector(".svc-carry-forward-panel").find(".svc-action-button").withText("question1"))
    .expect(getSelectedElementName()).eql("question1");
});