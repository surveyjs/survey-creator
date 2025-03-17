import { getToolboxItemByText, questions, questionToolbarActions, url, selectedObjectTextSelector, urlDropdownCollapseView, getListItemByText, generalGroupName, SingleInputToolboxItem, setJSON, unselectedQuestionToolbarActions } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Question wrapper";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(1920, 1080);
});

function normalize(str) {
  return str.replace(/\xa0/gi, " ").replace(/(?:\r\n|\r|\n)/g, "");
}

const convertQuestionTypesCount = 21;
const convertTextQuestionInputTypesCount = 13;
const requiredActionButton = questionToolbarActions.find('button[title="Required"]');
const deleteActionButton = questionToolbarActions.find('button[title="Delete"]');

const convertActionButton = questionToolbarActions.find('button[title="Single-Line Input"]');
const convertInputTypeActionButton = questionToolbarActions.find('button[title="Text"]');

const duplicateActionButton = questionToolbarActions.find('button[title="Duplicate"]');
const dotsButton = Selector(".svc-question__content-actions .sv-action.sv-dots");
const listItems = Selector(".sv-popup .svc-list__item").filterVisible();
const popupContent = Selector(".sv-popup__content .svc-list").filterVisible();

const convertPopupContent = "Radio Button Group\nRating Scale\nCheckboxes\nDropdown\nMulti-Select Dropdown\nYes/No (Boolean)\nFile Upload\nImage Picker\nRanking\nSingle-Line Input\nLong Text\nMultiple Textboxes\nPanel\nDynamic Panel\nSingle-Select Matrix\nMulti-Select Matrix\nDynamic Matrix\nHTML\nExpression (read-only)\nImage\nSignature";
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
  const convertActionButton = unselectedQuestionToolbarActions.find('button[title="Single-Line Input"]');

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .click(Selector(".svc-tab-designer"), { offsetX: 150, offsetY: 5 })
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
    .expect(normalize(title1)).eql("question1");

  const title2 = await questions.nth(1).find(".sd-question__title").innerText;
  await t
    .expect(normalize(title2)).eql("question2")
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
    .expect(normalize(title)).eql("question1")
    .expect(requiredActionButton.hasClass("svc-survey-element-toolbar__item--active")).notOk()

    .click(requiredActionButton);
  title = await questionTitle.innerText;
  await t
    .expect(normalize(title)).eql("question1 *")
    .expect(requiredActionButton.hasClass("svc-survey-element-toolbar__item--active")).ok();
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
    .click(Selector(".sd-question[data-name=question1] .svc-element__add-new-question"))
    .expect(Selector(".sd-question[data-name=question3]").visible).ok();
});

test("Rating question required property", async (t) => {
  const isrequiredButton = Selector("#isrequired");
  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Rating Scale"))
    .click(getToolboxItemByText("Rating Scale"))
    .expect(isrequiredButton.visible).ok()
    .expect(isrequiredButton.find(".svc-required-action").classNames).notContains("svc-survey-element-toolbar__item--active")
    .click(isrequiredButton)
    .expect(isrequiredButton.find(".svc-required-action").classNames).contains("svc-survey-element-toolbar__item--active");
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
  const choicesTabTitle = Selector("h4").withExactText("Choice Options");
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
    .click(getListItemByText("question1"))
    .expect(Selector("span").withText("Copy choices from").exists).ok()
    .click(Selector(".svc-carry-forward-panel").find(".svc-action-button").withText("question1"))
    .expect(getSelectedElementName()).eql("question1");
});
test("No tab stop in dynamic panel", async (t) => {
  await setJSON({
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "paneldynamic",
            "name": "panel1"
          },
          {
            "type": "panel",
            "name": "panel2",
            "elements": [
              {
                "type": "text",
                "name": "q2"
              }
            ]
          }
        ]
      }
    ]
  });
  await t
    .click(Selector(".sv-string-editor").withText("panel1"))
    .expect(Selector(".sv-string-editor").withText("panel1").focused).ok()
    .pressKey("tab")
    .expect(Selector(".svc-question__content--selected .svc-action-button").withText("Add Question").focused).ok()
    .pressKey("tab")
    .pressKey("tab")
    .pressKey("tab")
    .pressKey("tab")
    .pressKey("tab")
    .expect(Selector(".sv-string-editor").withText("q2").focused).ok()
    .pressKey("tab")
    .pressKey("tab")
    .pressKey("tab")
    .pressKey("tab")
    .pressKey("tab")
    .pressKey("tab")
    .expect(Selector(".svc-question__content--panel .svc-action-button").withText("Add Question").focused).ok()
    .pressKey("tab")
    .pressKey("tab")
    .expect(Selector(".svc-question__content--panel .svc-survey-element-toolbar__item").withText("Panel").focused).ok();
});

test("Question adorner - collapse button in differen modes", async (t) => {
  await t.resizeWindow(1920, 1080);
  const json = {
    elements: [
      {
        type: "text",
        name: "question1"
      }
    ]
  };
  await setJSON(json);
  await t.hover(getToolboxItemByText("Single-Line Input"));
  const qContent = Selector(".svc-question__content");
  const qCollapseButton = Selector(".svc-question__content #collapse");
  await t.hover(qContent, { offsetX: 10, offsetY: 10 });
  await t.expect(Selector(".svc-question__adorner").hasClass("svc-hovered")).ok();
  await t.expect(qCollapseButton.visible).notOk();
  await t.click(qContent, { offsetX: 10, offsetY: 10 });
  await t.expect(qContent.hasClass("svc-question__content--selected")).ok();
  await t.expect(qCollapseButton.visible).notOk();

  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "onhover"; })();
  json.elements[0].name = "question2";
  await setJSON(json);
  await t.hover(getToolboxItemByText("Single-Line Input"));
  await t.expect(qCollapseButton.visible).notOk();
  await t.hover(qContent, { offsetX: 10, offsetY: 10 });
  await t.expect(qCollapseButton.visible).ok();
  await t.click(qContent, { offsetX: 10, offsetY: 10 });
  await t.hover(getToolboxItemByText("Single-Line Input"));
  await t.expect(qCollapseButton.visible).ok();

  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "always"; })();
  json.elements[0].name = "question3";
  await t.hover(getToolboxItemByText("Single-Line Input"));
  await setJSON(json);
  await t.expect(qCollapseButton.visible).ok();
  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "never"; })();
});

test("Question and page collapse button title", async (t) => {
  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "always"; })();
  await t.resizeWindow(1920, 1080);
  const json = {
    elements: [
      {
        type: "text",
        name: "question1"
      }
    ]
  };
  await setJSON(json);
  await t.hover(getToolboxItemByText("Single-Line Input"));
  const qCollapseButton = Selector(".svc-question__content #collapse button");
  await t.expect(qCollapseButton.getAttribute("title")).eql("Collapse");
  await t.click(qCollapseButton);
  await t.expect(qCollapseButton.getAttribute("title")).eql("Expand");

  const pCollapseButton = Selector(".svc-page__content > .svc-question__drag-area #collapse button");
  await t.expect(pCollapseButton.getAttribute("title")).eql("Collapse");
  await t.click(pCollapseButton);
  await t.expect(pCollapseButton.getAttribute("title")).eql("Expand");
});

test("Question adorner - do not render content when initially collapsed", async (t) => {
  const json = {
    elements: [
      {
        type: "text",
        name: "question1"
      },
      {
        type: "panel",
        name: "panel1"
      }
    ]
  };
  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "always"; })();
  await setJSON(json);
  await t.hover(getToolboxItemByText("Single-Line Input"));
  const qContent = Selector(".svc-question__content--text");
  const qCollapseButton = Selector(".svc-question__content--text #collapse");
  const pContent = Selector(".svc-question__content--panel");
  const pCollapseButton = Selector(".svc-question__content--panel #collapse");
  await t.expect(qCollapseButton.visible).ok();
  await t.click(qCollapseButton);
  await t.expect(pCollapseButton.visible).ok();
  await t.click(pCollapseButton);

  await t.click(Selector(".svc-tabbed-menu-item").withText("Preview"));
  await t.click(Selector(".svc-tabbed-menu-item").withText("Designer"));

  await t.expect(qContent.find(".sd-element").exists).notOk();
  await t.click(qCollapseButton);
  await t.expect(qContent.find(".sd-element").exists).ok();
  await t.click(qCollapseButton);
  await t.expect(qContent.find(".sd-element").exists).ok();

  await t.expect(pContent.find(".sd-element").exists).notOk();
  await t.click(pCollapseButton);
  await t.expect(pContent.find(".sd-element").exists).ok();
  await t.click(pCollapseButton);
  await t.expect(pContent.find(".sd-element").exists).ok();

  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "never"; })();
});

test("Question adorner - collapse button visibility inside panels", async (t) => {
  await t.resizeWindow(1920, 1080);
  const json = {
    elements: [
      {
        "type": "panel",
        "name": "panel1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      }
    ]
  };
  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "onhover"; })();
  await setJSON(json);
  await t.hover(getToolboxItemByText("Single-Line Input"));
  const qContent = Selector(".svc-question__content--text");
  const pContent = Selector(".svc-question__content--panel");
  const qCollapseButton = Selector(".svc-question__content--text #collapse");
  const pCollapseButton = Selector(".svc-question__content--panel #collapse");

  await t.hover(qContent, { offsetX: 10, offsetY: 10 });
  await t.expect(Selector(".svc-question__adorner.svc-hovered > .svc-question__content--text").exists).ok();
  await t.expect(qCollapseButton.visible).ok();
  await t.expect(pCollapseButton.visible).notOk();

  await t.hover(pContent, { offsetX: 10, offsetY: 10 });
  await t.expect(Selector(".svc-question__adorner.svc-hovered > .svc-question__content--panel").exists).ok();
  await t.expect(qCollapseButton.visible).notOk();
  await t.expect(pCollapseButton.visible).ok();

  await t.click(qContent, { offsetX: 10, offsetY: 10 });
  await t.expect(qContent.hasClass("svc-question__content--selected")).ok();
  await t.expect(qCollapseButton.visible).ok();
  await t.expect(pCollapseButton.visible).notOk();

  await t.click(pContent, { offsetX: 10, offsetY: 10 });
  await t.expect(pContent.hasClass("svc-question__content--selected")).ok();
  await t.expect(qCollapseButton.visible).notOk();
  await t.expect(pCollapseButton.visible).ok();
});

test("Question adorner - doubleclick", async (t) => {
  await t.resizeWindow(1920, 1080);
  const json = {
    elements: [
      {
        "type": "panel",
        "name": "panel1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      }
    ]
  };
  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "onhover"; })();
  await setJSON(json);
  await t.hover(getToolboxItemByText("Single-Line Input"));
  const qContent = Selector(".svc-question__content--text");
  const pContent = Selector(".svc-question__content--panel");
  const pgContent = Selector(".svc-page__content");

  await t.expect(qContent.hasClass("svc-question__content--collapsed")).notOk();
  await t.doubleClick(qContent, { offsetX: 10, offsetY: 10 });
  await t.expect(qContent.hasClass("svc-question__content--collapsed")).ok();
  await t.doubleClick(qContent, { offsetX: 10, offsetY: 10 });
  await t.expect(qContent.hasClass("svc-question__content--collapsed")).notOk();

  await t.expect(pContent.hasClass("svc-question__content--collapsed")).notOk();
  await t.doubleClick(pContent, { offsetX: 10, offsetY: 10 });
  await t.expect(pContent.hasClass("svc-question__content--collapsed")).ok();
  await t.doubleClick(pContent, { offsetX: 10, offsetY: 10 });
  await t.expect(pContent.hasClass("svc-question__content--collapsed")).notOk();

  await t.expect(pgContent.hasClass("svc-page__content--collapsed")).notOk();
  await t.doubleClick(pgContent, { offsetX: 10, offsetY: 10 });
  await t.expect(pgContent.hasClass("svc-page__content--collapsed")).ok();
  await t.doubleClick(pgContent, { offsetX: 10, offsetY: 10 });
  await t.expect(pgContent.hasClass("svc-page__content--collapsed")).notOk();
});

test("Page adorner - collapse button in differen modes", async (t) => {
  await t.resizeWindow(1920, 1080);
  const json = {
    elements: [
      {
        type: "text",
        name: "question1"
      }
    ]
  };
  await setJSON(json);
  await t.hover(getToolboxItemByText("Single-Line Input"));
  const pContent = Selector(".svc-page__content");
  const pCollapseButton = Selector(".svc-page__content > .svc-question__drag-area #collapse button");
  const actions = Selector(".svc-page__content-actions");
  await t.hover(pContent, { offsetX: 10, offsetY: 10 });
  await t.expect(Selector(".svc-page__content").hasClass("svc-hovered")).ok({ timeout: 3000 });
  await t.expect(pCollapseButton.visible).notOk();
  await t.click(pContent, { offsetX: 10, offsetY: 10 });
  await t.expect(pContent.hasClass("svc-page__content--selected")).ok();
  await t.expect(pCollapseButton.visible).notOk();

  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "onhover"; })();
  json.elements[0].name = "question2";
  await setJSON(json);
  await t.hover(getToolboxItemByText("Single-Line Input"));
  await t.expect(actions.getStyleProperty("opacity")).eql("0");
  await t.hover(pContent, { offsetX: 10, offsetY: 10 });
  await t.expect(pCollapseButton.visible).ok();
  await t.click(pContent, { offsetX: 10, offsetY: 10 });
  await t.expect(pContent.hasClass("svc-page__content--selected")).ok();
  await t.expect(pCollapseButton.visible).ok();

  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "always"; })();
  json.elements[0].name = "question3";
  await t.hover(getToolboxItemByText("Single-Line Input"));
  await setJSON(json);
  await t.expect(pCollapseButton.visible).ok();
  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "never"; })();
});