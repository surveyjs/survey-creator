import { generalGroupName, getPropertyGridCategory, logicGroupName, setJSON, url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid";

const json = {
  pages: [
    {
      elements: [{ type: "text", name: "question1" }]
    },
    {
      elements: [{ type: "text", name: "question2" }]
    },
    {
      elements: [{ type: "text", name: "question2" }]
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});
export default async function (t) {
  const { error } = await t.getBrowserConsoleMessages();

  await t.expect(error[0]).notOk();
}

export const generalGroup = getPropertyGridCategory(generalGroupName);
export const logicGroup = getPropertyGridCategory(logicGroupName);
export const dataGroup = getPropertyGridCategory("Data");
export const choicesGroup = getPropertyGridCategory("Choices");
export const pagesGroup = getPropertyGridCategory("Pages");

test("Delete second page", async (t) => {
  const deleteButtons = Selector("div[data-name=pages]").find("button[title=Remove]");
  await setJSON(json);
  await t
    .click(generalGroup)
    .click(pagesGroup)
    .expect(deleteButtons.count).eql(3)
    .click(deleteButtons)
    .expect(deleteButtons.count).eql(2);
});

test("Add calculated values", async (t) => {
  const addButton = Selector("div[data-name=calculatedValues]").find("button[title='Add new variable']");
  const rows = Selector("div[data-name=calculatedValues]").find("tbody").find("tr");

  await setJSON(json);
  await t
    .click(generalGroup)
    .click(logicGroup)
    .expect(rows.count).eql(0)
    .click(addButton)
    .expect(rows.count).eql(2);
});

test("Check showInMultiple columns editing", async (t) => {
  const json = {
    "elements": [
      {
        "type": "matrixdropdown",
        "name": "q1",
        "title": "Question 1",
        "columns": [
          {
            "name": "Column 1",
            "cellType": "radiogroup"

          },
        ],
        "choices": [
          1,
          2,
          3,
          4,
          5
        ],
        "rows": [
          "Row 1",
        ]
      }]
  };
  await setJSON(json);
  const question = Selector(".sv-string-editor").withText("Question 1");
  const columns = getPropertyGridCategory("Columns");
  const edit = Selector("button[title='Edit']");
  const showInMultiple = Selector("input[name='showInMultipleColumns']");
  const radioMatrixCell = Selector("td:nth-of-type(2) .svc-matrix-cell");
  const controlButton = radioMatrixCell.find(".svc-matrix-cell__question-controls");
  await t
    .click(question)
    .click(generalGroup)
    .click(columns)
    .click(edit)
    .click(showInMultiple)
    .expect(Selector("th .svc-matrix-cell .sv-string-editor").textContent).eql("1")
    .hover(radioMatrixCell)
    .click(controlButton)
    .expect(Selector(".sv-popup__container .sd-selectbase__item .sd-item__control-label .svc-string-editor .sv-string-editor").filterVisible().textContent).eql("1");
});

test("Merge undo/redo transcactioins for text", async (t) => {
  const json = {
    elements: [
      {
        type: "dropdown",
        name: "q1",
        title: "title"
      }
    ]
  };
  const question = Selector("[data-name=\"q1\"]");
  const titleEditor = Selector("[data-name='title']").find("textarea");
  const undoAction = Selector("button[title=Undo]");
  const getQuestionTitle = ClientFunction(() => {
    return window["creator"].survey.getQuestionByName("q1").title;
  });
  await setJSON(json);
  await t
    .click(question)
    .click(titleEditor)
    .typeText(titleEditor, "1")
    .typeText(titleEditor, "-234")
    .expect(getQuestionTitle()).eql("title1-234")
    .click(undoAction)
    .expect(getQuestionTitle()).eql("title")
    .click(titleEditor)
    .typeText(titleEditor, "2")
    .wait(1100)
    .typeText(titleEditor, "-345")
    .expect(getQuestionTitle()).eql("title2-345")
    .click(undoAction)
    .expect(getQuestionTitle()).eql("title2");
});

test("Check ctrl+z undo/redo", async (t) => {
  const json = {
    elements: [
      {
        type: "dropdown",
        name: "q1",
        title: "title"
      }
    ]
  };
  const question = Selector("[data-name=\"q1\"]");
  const titleEditor = Selector("[data-name='title']").find("textarea");
  const getQuestionTitle = ClientFunction(() => {
    return window["creator"].survey.getQuestionByName("q1").title;
  });
  await setJSON(json);
  await t
    .click(question)
    .click(titleEditor)
    .pressKey("ctrl+a")
    .typeText(titleEditor, "1234")
    .wait(1000)
    .pressKey("ctrl+a")
    .pressKey("backspace")
    .wait(1000)
    .pressKey("ctrl+z")
    .expect(getQuestionTitle()).eql("1234");
});

test("Text editors, loose focus on enter", async (t) => {
  await t.resizeWindow(1560, 1440);
  const json = {
    elements: [
      {
        type: "dropdown",
        name: "q1",
        title: "title"
      }
    ]
  };
  await setJSON(json);
  await t
    .click(Selector("div[data-name=title] input"))
    .pressKey("a b c")
    .expect(Selector("div[data-name=title] input").focused).ok()
    .pressKey("Enter")
    .expect(Selector("div[data-name=title] input").focused).notOk();
});

test("Drop-down menus do not close on second click", async (t) => {
  await t.resizeWindow(1920, 1080);
  const json = {
    elements: [
      {
        type: "dropdown",
        name: "q1",
        title: "title"
      }
    ]
  };
  await setJSON(json);
  const panel = dataGroup.parent(".sd-element--expanded.spg-panel");
  const dropdown = panel.find(".spg-dropdown");
  const popupContainer = Selector(".sv-popup__container").filterVisible();

  await t
    .click(generalGroup)
    .click(dataGroup);

  const clientRectWidth = await dropdown.getBoundingClientRectProperty("width");
  const dropdownWidth = parseInt(clientRectWidth.toString());
  await t
    .expect(dropdownWidth).gt(350)
    .expect(popupContainer.visible).notOk()

    .click(dropdown, { offsetX: dropdownWidth - 20, offsetY: 20 })
    .expect(popupContainer.visible).ok()

    .click(dropdown, { offsetX: dropdownWidth - 20, offsetY: 20 })
    .expect(popupContainer.visible).notOk()

    .click(dropdown, { offsetX: dropdownWidth - 20, offsetY: 20 })
    .expect(popupContainer.visible).ok()

    .click(panel.find(".spg-panel__content"), { offsetX: 10, offsetY: 10 })
    .expect(popupContainer.visible).notOk();
});