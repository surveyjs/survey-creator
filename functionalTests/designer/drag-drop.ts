import { url, getPagesLength, getQuestionsLength, setJSON, getJSON, getQuestionNameByIndex, getItemValueByIndex, patchDragDropToDisableDrop, RatingToolboxItem, SingleInputToolboxItem, surveySettingsButtonSelector, changeToolboxScrolling, changeToolboxSearchEnabled, getListItemByText } from "../helper";
import { Selector, ClientFunction } from "testcafe";
const title = "Drag Drop";

const explicitErrorHandler = () => {
  window.addEventListener("error", e => {
    if (e.message === "ResizeObserver loop completed with undelivered notifications." ||
      e.message === "ResizeObserver loop limit exceeded") {
      e.stopImmediatePropagation();
    }
  });
};

fixture`${title}`.page`${url}`.clientScripts({ content: `(${explicitErrorHandler.toString()})()` }).beforeEach(async (t) => {
  await setJSON({ pages: [{ name: "page1" }] });
  await t.maximizeWindow();
});

test("Drag Drop Toolbox Item and Empty Page", async (t) => {
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");
  const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 })

    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 });

  const pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(2);

  const questionsLength = await getQuestionsLength();
  await t.expect(questionsLength).eql(2);

  const ghostPageRowsCount = newGhostPagePage.find(".svc-row").count;
  await t.expect(ghostPageRowsCount).eql(0);
});

test.before(async t => {
  const setOptions = ClientFunction(() => {
    window["creator"].setOptions({
      pageEditMode: "bypage"
    });
  });
  await setOptions();
})("Drag Drop Toolbox Item and Empty Page ({pageEditMode: 'bypage'})", async (t) => {
  const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 })
    .click(Selector(".svc-page-navigator-item__dot[title='page2']"));

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 });

  const pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(2);

  const questionsLength = await getQuestionsLength();
  await t.expect(questionsLength).eql(2);
});

test("Drag Drop Toolbox All Questions", async (t) => {
  const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");

  const CheckboxItem = Selector("[aria-label='Checkboxes']");
  const RadiogroupItem = Selector("[aria-label='Radio Button Group']");
  const DropdownItem = Selector("[aria-label='Dropdown']");
  const CommentItem = Selector("[aria-label='Long Text']");
  const RankingItem = Selector("[aria-label='Ranking']");
  const ImagePickerItem = Selector("[aria-label='Image Picker']");
  const BooleanItem = Selector("[aria-label='Yes/No (Boolean)']");
  const ImageItem = Selector("[aria-label='Image']");
  const HtmlItem = Selector("[aria-label='HTML']");
  const SignatureItem = Selector("[aria-label='Signature']");
  const ExpressionItem = Selector("[aria-label='Expression (read-only)']");
  const FileItem = Selector("[aria-label='File Upload']");
  const MatrixSingleChoiceItem = Selector("[aria-label='Single-Select Matrix']");
  const MatrixMultipleChoiceItem = Selector("[aria-label='Multi-Select Matrix']");
  const MatrixDynamicRowsItem = Selector("[aria-label='Dynamic Matrix']");
  const MultipleTextItem = Selector("[aria-label='Multiple Textboxes']");
  const PanelItem = Selector("[aria-label='Panel']");
  const PanelDynamicItem = Selector("[aria-label='Dynamic Panel']");

  await t.resizeWindow(2560, 2000);
  await ClientFunction(() => {
    const el: any = document.getElementById("survey-creator");
    el.style.position = "relative";
    el.style.bottom = undefined;
    el.style.height = "15000px";
    const rootEl: any = document.getElementsByTagName("app-root")[0];
    if (!!rootEl) {
      rootEl.style.position = "relative";
    }
  })();

  let pagesLength;

  await t
    .hover(ImagePickerItem)
    .dragToElement(ImagePickerItem, EmptyPage, { speed: 0.5 }); // first time drag to single Empty page, next times drag to ghost page
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(1);

  await t
    .hover(CheckboxItem)
    .dragToElement(CheckboxItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(2);

  await t
    .hover(RadiogroupItem)
    .dragToElement(RadiogroupItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(3);

  await t
    .hover(DropdownItem)
    .dragToElement(DropdownItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(4);

  await t
    .hover(CommentItem)
    .dragToElement(CommentItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(5);
  await t.scrollIntoView(newGhostPagePage);

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(6);

  await t
    .hover(RankingItem)
    .dragToElement(RankingItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(7);

  await t
    .hover(SingleInputToolboxItem)
    .dragToElement(SingleInputToolboxItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(8);

  await t
    .hover(HtmlItem)
    .dragToElement(HtmlItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(9);

  await t
    .hover(SignatureItem)
    .dragToElement(SignatureItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(10);

  await t
    .hover(ExpressionItem)
    .dragToElement(ExpressionItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(11);

  await t
    .hover(FileItem)
    .dragToElement(FileItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(12);

  await t
    .hover(MatrixSingleChoiceItem)
    .dragToElement(MatrixSingleChoiceItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(13);

  await t
    .hover(MatrixMultipleChoiceItem)
    .dragToElement(MatrixMultipleChoiceItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(14);

  await t
    .hover(MatrixDynamicRowsItem)
    .dragToElement(MatrixDynamicRowsItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(15);

  await t
    .hover(MultipleTextItem)
    .dragToElement(MultipleTextItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(16);

  await t
    .hover(PanelItem)
    .dragToElement(PanelItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(17);

  await t
    .hover(PanelDynamicItem)
    .dragToElement(PanelDynamicItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(18);

  await t
    .hover(BooleanItem)
    .dragToElement(BooleanItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 })
    .wait(150);

  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(19);

  await t
    .hover(ImageItem)
    .dragToElement(BooleanItem, newGhostPagePage, { speed: 0.5, destinationOffsetY: -50 })
    .wait(150);

  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(20);
});

test("Drag Drop Toolbox Responsivity", async (t) => {
  await changeToolboxScrolling(false);
  await changeToolboxSearchEnabled(false);
  const tabbedMenuItemSelector = Selector(".svc-toolbox .svc-toolbox__tool:nth-of-type(18)");
  await t
    .resizeWindow(1920, 1080)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk()
    .resizeWindow(970, 632)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok()
    .click(".svc-toolbox__tool--dots");

  const PopupSelector = Selector(".sv-popup .sv-popup__container").filterVisible();
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");

  await t.dragToElement(getListItemByText("Dynamic Panel"), EmptyPage, { speed: 0.5 });

  const name = await getQuestionNameByIndex(0);
  await t.expect(name).eql("question1");
});

test("Drag Drop Question", async (t) => {
  await t.resizeWindow(2560, 1440);
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "rating",
            name: "rating1"
          },
          {
            type: "rating",
            name: "rating2"
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const questionName = "rating2";
  const Rating1 = Selector("[data-sv-drop-target-survey-element=\"rating1\"]");
  const Rating2 = Selector(`[data-sv-drop-target-survey-element=${questionName}]`);
  const DragZoneRating2 = Rating2.find(".svc-question__drag-element");
  const FirstRow = Selector(".svc-row");

  await t
    .hover(Rating2, { speed: 0.5 })
    .hover(DragZoneRating2, { speed: 0.5 })
    .dragToElement(DragZoneRating2, FirstRow, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 25,
      speed: 0.5
    });

  let name = await getQuestionNameByIndex(0);
  await t.expect(name).eql(questionName);
  await t
    .hover(Rating2, { speed: 0.5 })
    .hover(DragZoneRating2, { speed: 0.5 })
    .dragToElement(DragZoneRating2, Rating1, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -1,
      speed: 0.5
    });

  name = await getQuestionNameByIndex(1);
  await t.expect(name).eql(questionName);
});

test("Drag Drop to Panel", async (t) => {
  await t.resizeWindow(2560, 1440);
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "panel",
            name: "panel1"
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Panel = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");
  const Question3 = Selector("[data-sv-drop-target-survey-element=\"question3\"]");

  await t
    .hover(RatingToolboxItem, { speed: 0.1 })
    .dragToElement(RatingToolboxItem, Panel, {
      destinationOffsetY: 0,
      speed: 0.5
    })

    .hover(RatingToolboxItem, { speed: 0.1 })
    .dragToElement(RatingToolboxItem, Panel, {
      destinationOffsetY: -1,
      speed: 0.5
    })

    .hover(RatingToolboxItem, { speed: 0.1 })
    .dragToElement(RatingToolboxItem, Panel, {
      speed: 0.5
    })

    .hover(RatingToolboxItem, { speed: 0.1 })
    .dragToElement(RatingToolboxItem, Question3, {
      destinationOffsetY: 10,
      speed: 0.5
    })

    .hover(RatingToolboxItem, { speed: 0.1 })
    .dragToElement(RatingToolboxItem, Question3, {
      destinationOffsetY: -10,
      speed: 0.5
    });
  const expectedJson = {
    pages: [
      {
        name: "page1",
        elements: [
          { type: "rating", name: "question1" },
          {
            type: "panel",
            name: "panel1",
            elements: [
              { type: "rating", name: "question4" },
              { type: "rating", name: "question3" },
              { type: "rating", name: "question5" }
            ]
          },
          { type: "rating", name: "question2" }
        ]
      }
    ]
  };
  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);
});

test("Drag Drop to collapsed panel", async (t) => {
  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "always"; })();

  await t.resizeWindow(1600, 1000);
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "panel",
            name: "panel1",
            elements: [{
              type: "text",
              name: "q1"
            }]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const expectedJson = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1",
            "elements": [
              {
                "type": "text",
                "name": "q1"
              },
              {
                "type": "radiogroup",
                "name": "question1",
                "choices": [
                  "Item 1",
                  "Item 2",
                  "Item 3"
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  const qCollapseButton = Selector(".svc-question__content #collapse");
  await t.click(qCollapseButton.filterVisible());

  const Panel = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");
  const toolboxToolAction = Selector(".svc-toolbox__tool > .sv-action__content");

  await t
    .hover(toolboxToolAction)
    .dispatchEvent(toolboxToolAction, "pointerdown")
    .hover(Panel, { offsetX: 150 })
    .expect(Panel.find(".svc-question__content--collapsed-drag-over-inside").exists).ok()
    .dispatchEvent(toolboxToolAction, "pointerup");
  const resultJson0 = await getJSON();
  await t.expect(resultJson0).eql(expectedJson);

  await t
    .hover(toolboxToolAction)
    .dispatchEvent(toolboxToolAction, "pointerdown")
    .hover(Panel, { offsetX: 5 })
    .expect(Panel.find(".svc-question__content--drag-over-left").exists).ok()
    .expect(Panel.find(".svc-question__content--collapsed-drag-over-inside").exists).notOk()
    .wait(2000)
    .hover(Panel, { offsetX: 100 })
    .expect(Panel.find(".svc-question__content--collapsed").exists).ok()
    .wait(2000)
    .expect(Panel.find(".svc-question__content--collapsed").exists).notOk()
    .expect(Panel.find(".svc-question__content--drag-over-left").exists).notOk()
    .dispatchEvent(toolboxToolAction, "pointerup");
});

test("Drag Drop to selected collapsed panel", async (t) => {
  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "always"; })();

  await t.resizeWindow(1600, 1000);
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "panel",
            name: "panel1",
            elements: [{
              type: "text",
              name: "q1"
            }]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const qCollapseButton = Selector(".svc-question__content #collapse");
  await t.click(qCollapseButton.filterVisible());

  const Panel = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");
  const toolboxToolAction = Selector(".svc-toolbox__tool > .sv-action__content");

  await t
    .click(Panel, { offsetX: 1, offsetY: 1 })
    .hover(toolboxToolAction)
    .dispatchEvent(toolboxToolAction, "pointerdown")
    .hover(Panel, { offsetX: 100 })
    .expect(Panel.find(".svc-question__content--collapsed").exists).ok()
    .expect(Panel.find(".svc-question__content--collapsed").exists).notOk({ timeout: 3000 })
    .dispatchEvent(toolboxToolAction, "pointerup");

  const resultJson0 = await getJSON();
  await t.expect(resultJson0).eql(json);

  await t.expect(Selector(".spg-question[data-name=name] input").value).eql("panel1");
});

test("Drag Drop to collapsed dynamic panel", async (t) => {
  await ClientFunction(() => {
    window["creator"].expandCollapseButtonVisibility = "always";
    window["creator"].expandOnDragTimeOut = 2000;
  })();

  await t.resizeWindow(1600, 1000);
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "paneldynamic",
            "name": "panel1",
            "templateElements": [
              {
                "type": "text",
                "name": "question1"
              }
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const qCollapseButton = Selector(".svc-question__content #collapse");
  await t.click(qCollapseButton.filterVisible());

  const Panel = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");
  const toolboxToolAction = Selector(".svc-toolbox__tool > .sv-action__content");
  await t
    .hover(toolboxToolAction)
    .dispatchEvent(toolboxToolAction, "pointerdown")
    .hover(Panel, { offsetX: 5 })
    .expect(Panel.find(".svc-question__content--drag-over-left").exists).ok()
    .expect(Panel.find(".svc-question__content--collapsed-drag-over-inside").exists).notOk()
    .wait(2000)
    .hover(Panel, { offsetX: 100, speed: 0.5 })
    .expect(Panel.find(".svc-question__content--collapsed").exists).ok()
    .wait(2000)
    .expect(Panel.find(".svc-question__content--collapsed").exists).notOk()
    .expect(Panel.find(".svc-question__content--drag-over-left").exists).notOk()
    .dispatchEvent(toolboxToolAction, "pointerup");

  const resultJson = await getJSON();
  await t.expect(resultJson).eql(json);
});

test("Drag Drop to collapsed page", async (t) => {
  await ClientFunction(() => { window["creator"].expandCollapseButtonVisibility = "always"; })();

  await t.resizeWindow(1600, 1000);
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "panel",
            name: "panel1",
            elements: [{
              type: "text",
              name: "q1"
            }]
          },
        ]
      }
    ]
  };
  await setJSON(json);

  const pCollapseButton = Selector(".svc-page__content > .svc-question__drag-area #collapse button");
  await t.click(pCollapseButton.filterVisible());

  const Page = Selector(".svc-page");
  const toolboxToolAction = Selector(".svc-toolbox__tool > .sv-action__content");
  const expectedJson = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "panel",
            name: "panel1",
            elements: [{
              type: "text",
              name: "q1"
            }]
          }, {
            "type": "radiogroup",
            "name": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  };

  await t
    .hover(toolboxToolAction)
    .dispatchEvent(toolboxToolAction, "pointerdown")
    .hover(Page, { offsetX: 150 })
    .expect(Page.find(".svc-page__content--collapsed-drag-over-inside").exists).ok()
    .dispatchEvent(toolboxToolAction, "pointerup");
  const resultJson0 = await getJSON();
  await t.expect(resultJson0).eql(expectedJson);

  await t
    .hover(toolboxToolAction)
    .dispatchEvent(toolboxToolAction, "pointerdown")
    .hover(Page)

    .expect(Page.find(".svc-page__content--collapsed").exists).ok()
    .wait(2000)
    .expect(Page.find(".svc-page__content--collapsed").exists).notOk();
});

test("Drag Drop Question from a panel", async (t) => {
  await t.resizeWindow(2560, 1440);
  const json = {
    elements: [
      {
        type: "panel",
        name: "panel1",
        elements: [
          { type: "text", name: "question1" }
        ]
      }
    ]
  };
  await setJSON(json);

  const question1 = Selector("[data-sv-drop-target-survey-element=\"question1\"]");
  const panel1 = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");

  await t
    .hover(question1, { speed: 0.5 })
    .dragToElement(question1, panel1, {
      offsetX: 2,
      offsetY: 2,
      destinationOffsetY: 2,
      speed: 0.5
    });
  const expectedJson = {
    pages: [
      {
        name: "page1",
        elements: [
          { type: "text", name: "question1" },
          {
            type: "panel",
            name: "panel1"
          }
        ]
      }
    ]
  };
  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);
});

test("Drag Drop Question with Multiline (StartWithNewLine === false)", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question4"
          },
          {
            "type": "boolean",
            "name": "question1"
          },
          {
            "type": "radiogroup",
            "name": "question2",
            "startWithNewLine": false,
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "rating",
            "name": "question3",
            "startWithNewLine": false
          }
        ]
      }
    ]
  };

  await setJSON(json);

  const Question1 = Selector(
    "[data-sv-drop-target-survey-element=\"question1\"]"
  );
  const Question2 = Selector(
    "[data-sv-drop-target-survey-element=\"question2\"]"
  );
  const Question3 = Selector(
    "[data-sv-drop-target-survey-element=\"question3\"]"
  );
  const Question4 = Selector(
    "[data-sv-drop-target-survey-element=\"question4\"]"
  );
  const DragZoneQuestion1 = Question1.find(".svc-question__drag-element");
  const DragZoneQuestion2 = Question2.find(".svc-question__drag-element");
  const DragZoneQuestion3 = Question3.find(".svc-question__drag-element");
  let questionName;

  // 1 to 2
  await t.hover(Question1, { speed: 0.5 });
  await t.hover(DragZoneQuestion1);
  await t.dragToElement(DragZoneQuestion1, Question2, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetX: -80,
    speed: 0.5
  });
  questionName = await getQuestionNameByIndex(1);
  await t.expect(questionName).eql("question2");
  questionName = await getQuestionNameByIndex(2);
  await t.expect(questionName).eql("question1");
  questionName = await getQuestionNameByIndex(3);
  await t.expect(questionName).eql("question3");
  // EO 1 to 2

  // 3 to 1
  await t.hover(Question3, { speed: 0.5 });
  await t.hover(DragZoneQuestion3);
  await t.dragToElement(DragZoneQuestion3, Question1, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetX: 80,
    speed: 0.5
  });
  questionName = await getQuestionNameByIndex(1);
  await t.expect(questionName).eql("question2");
  questionName = await getQuestionNameByIndex(2);
  await t.expect(questionName).eql("question3");
  questionName = await getQuestionNameByIndex(3);
  await t.expect(questionName).eql("question1");
  //EO 3 to 1

  // 2 to 4
  await t.hover(Question2, { speed: 0.5 });
  await t.hover(DragZoneQuestion2);
  await t.dragToElement(DragZoneQuestion2, Question4, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetY: 80,
    speed: 0.5
  });
  questionName = await getQuestionNameByIndex(0);
  await t.expect(questionName).eql("question2");
  questionName = await getQuestionNameByIndex(1);
  await t.expect(questionName).eql("question4");
  questionName = await getQuestionNameByIndex(2);
  await t.expect(questionName).eql("question3");
  questionName = await getQuestionNameByIndex(3);
  await t.expect(questionName).eql("question1");
  //EO 2 to 4
});

test("Drag Drop Question with Multiline and OtherPage (StartWithNewLine === false)", async (t) => {
  await t.resizeWindow(2560, 1440);

  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question4"
          },
          {
            "type": "boolean",
            "name": "question1"
          },
          {
            "type": "radiogroup",
            "name": "question2",
            "startWithNewLine": false,
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "rating",
            "name": "question3",
            "startWithNewLine": false
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "text",
            "name": "question5"
          },
        ]
      }
    ]
  };

  await setJSON(json);

  const Question1 = Selector(
    "[data-sv-drop-target-survey-element=\"question1\"]"
  );
  const Question2 = Selector(
    "[data-sv-drop-target-survey-element=\"question2\"]"
  );
  const Question5 = Selector(
    "[data-sv-drop-target-survey-element=\"question5\"]"
  );
  const DragZoneQuestion1 = Question1.find(".svc-question__drag-element");

  await t.hover(Question5, { speed: 0.5 });
  await t.hover(Question1, { speed: 0.5 });
  await t.hover(DragZoneQuestion1);

  await t.dragToElement(DragZoneQuestion1, Question5, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetY: 80,
    speed: 0.1
  });

  await t.hover(Question1, { speed: 0.5 });
  await t.hover(DragZoneQuestion1);
  await t.dragToElement(DragZoneQuestion1, Question2, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetX: 80,
    speed: 0.1
  });

  const check = ClientFunction(() => {
    return window["creator"].survey.getAllQuestions()[1].startWithNewLine;
  });
  const result = await check();
  await t.expect(result).eql(true);
});

test("Drag Drop Question out of Multiline (StartWithNewLine === false)", async (t) => {
  await t.resizeWindow(2560, 1440);

  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          },
          {
            "type": "text",
            "startWithNewLine": false,
            "name": "question2"
          },
          {
            "type": "text",
            "startWithNewLine": false,
            "name": "question3"
          }
        ]
      }
    ]
  };

  await setJSON(json);

  const Question1 = Selector(
    "[data-sv-drop-target-survey-element=\"question1\"]"
  );
  const Question2 = Selector(
    "[data-sv-drop-target-survey-element=\"question2\"]"
  );
  const DragZoneQuestion2 = Question2.find(".svc-question__drag-element");

  await t.hover(Question2, { speed: 0.5, offsetY: 30 });
  await t.hover(DragZoneQuestion2);

  await t.dragToElement(DragZoneQuestion2, Question1, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetX: -50,
    destinationOffsetY: -10,
    speed: 0.1
  });

  const check = ClientFunction(() => {
    return window["creator"].survey.getAllQuestions()[2].startWithNewLine;
  });
  const result = await check();
  await t.expect(result).eql(true);

  const expectedJson = {
    pages: [
      {
        name: "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          },
          {
            "type": "text",
            "startWithNewLine": false,
            "name": "question3"
          },
          {
            "type": "text",
            "name": "question2"
          }
        ]
      }
    ]
  };
  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);

});

test("Drag Drop ItemValue (choices)", async (t) => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "radiogroup",
            name: "question1",
            choices: ["Item 1", "Item 2", "Item 3"]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Question1 = Selector("[data-name=\"question1\"]");
  const Item1 = Selector("[data-sv-drop-target-item-value=\"Item 1\"]");
  const Item2 = Selector("[data-sv-drop-target-item-value=\"Item 2\"]");
  const Item3 = Selector("[data-sv-drop-target-item-value=\"Item 3\"]");
  const DragZoneItem2 = Item2.find(".svc-item-value-controls__drag");

  await t
    .click(Question1, { speed: 0.5 })
    .hover(Item1).hover(Item2).hover(Item3).hover(DragZoneItem2)

    .dragToElement(DragZoneItem2, Item1, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -40,
      speed: 0.1
    });
  let value = await getItemValueByIndex("question1", 0);
  const expectedValue = "Item 2";
  await t.expect(value).eql(expectedValue);

  await t.dragToElement(DragZoneItem2, Item3, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetY: 30,
    speed: 0.1
  });
  value = await getItemValueByIndex("question1", 2);
  await t.expect(value).eql(expectedValue);
});

test("Drag Drop ItemValue (choices): not-allowed cursor", async (t) => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "radiogroup",
            name: "question1",
            choices: ["Item 1", "Item 2"]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");
  const Question1 = Selector("[data-name=\"question1\"]");
  const Item2 = Selector("[data-sv-drop-target-item-value=\"Item 2\"]");
  const DragZoneItem2 = Item2.find(".svc-item-value-controls__drag");

  const DnDShortcutControls = Selector("div > [data-sv-drop-target-item-value='Item 2']").find(".svc-item-value-controls__button");

  await patchDragDropToDisableDrop();

  await t
    .click(Question1, { speed: 0.5 })
    .hover(Item2).hover(DragZoneItem2)

    .dragToElement(DragZoneItem2, newGhostPagePage, {
      offsetX: 5,
      offsetY: 5,
      speed: 0.1
    });
  await t.expect(DnDShortcutControls.getStyleProperty("cursor")).eql("not-allowed");
});

test("Drag Drop Ranking (choices)", async (t) => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "ranking",
            name: "question1",
            choices: ["Item 1", "Item 2", "Item 3"]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Question1 = Selector("[data-name=\"question1\"]");
  const Item1 = Selector("[data-sv-drop-target-item-value=\"Item 1\"]");
  const Item2 = Selector("[data-sv-drop-target-item-value=\"Item 2\"]");
  const Item3 = Selector("[data-sv-drop-target-item-value=\"Item 3\"]");
  const DragZoneItem2 = Item2.find(".svc-item-value-controls__drag");

  await t
    .click(Question1, { speed: 0.5 })
    .hover(Item1).hover(Item2).hover(Item3).hover(DragZoneItem2)

    .dragToElement(DragZoneItem2, Item1, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -40,
      speed: 0.1
    });
  let value = await getItemValueByIndex("question1", 0);
  const expectedValue = "Item 2";
  await t.expect(value).eql(expectedValue);

  await t.dragToElement(DragZoneItem2, Item3, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetY: 30,
    speed: 0.1
  });
  value = await getItemValueByIndex("question1", 2);
  await t.expect(value).eql(expectedValue);
});

test("Animation (choices)", async (t) => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "radiogroup",
            name: "question1",
            choices: ["Item 1", "Item 2", "Item 3"]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Question1 = Selector("[data-name=\"question1\"]");
  const Item1 = Selector("[data-sv-drop-target-item-value=\"Item 1\"]");
  const Item2 = Selector("[data-sv-drop-target-item-value=\"Item 2\"]");
  const Item3 = Selector("[data-sv-drop-target-item-value=\"Item 3\"]");
  const DragZoneItem2 = Item2.find(".svc-item-value-controls__drag");

  await t
    .click(Question1, { speed: 0.5 })
    .hover(Item1).hover(Item2).hover(Item3).hover(DragZoneItem2)

    .dragToElement(DragZoneItem2, Item1, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -40,
      speed: 0.1
    });

  await t.dragToElement(DragZoneItem2, Item3, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetY: 30,
    speed: 0.1
  });

  const animationClassesCount = await ClientFunction(() => {
    let result = 0;
    const itemValueNodes = document.querySelector("[data-name='question1']").querySelectorAll(".svc-item-value-wrapper");
    itemValueNodes.forEach(itemValueNode => {
      if (itemValueNode.classList.contains("svc-item-value--movedown") ||
        itemValueNode.classList.contains("svc-item-value--moveup")) {
        result++;
      }
    });
    return result;
  })();

  await t.expect(animationClassesCount).eql(0, "there is no any animation classes after DnD");
});

test("Drag Drop ImagePicker (choices)", async (t) => {
  await t.resizeWindow(2560, 1440);

  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            "type": "imagepicker",
            "name": "question1",
            "choices": [
              {
                "value": "lion",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                "value": "giraffe",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
              },
              {
                "value": "panda",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
              },
              {
                "value": "camel",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
              }
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const expectedValue = "giraffe";
  let value;

  const Question1 = Selector("[data-name=\"question1\"]");
  const LionItem = Selector("[data-sv-drop-target-item-value=\"lion\"]");
  const GiraffeItem = Selector("[data-sv-drop-target-item-value=\"giraffe\"]");
  const PandaItem = Selector("[data-sv-drop-target-item-value=\"panda\"]");
  const CamelItem = Selector("[data-sv-drop-target-item-value=\"camel\"]");

  const DragZoneGiraffeItem = GiraffeItem.find(".svc-image-item-value-controls__drag-area-indicator").filterVisible();

  await t
    .click(Question1, { speed: 0.1 })
    .hover(PandaItem, { speed: 0.1 }).hover(LionItem, { speed: 0.1 }).hover(CamelItem, { speed: 0.1 }).hover(GiraffeItem, { speed: 0.1 }).hover(DragZoneGiraffeItem, { speed: 0.1 })
    .dragToElement(DragZoneGiraffeItem, LionItem, { speed: 0.1 });
  value = await getItemValueByIndex("question1", 0);
  await t.expect(value).eql(expectedValue);

  await t
    .click(Question1, { speed: 0.1 })
    .hover(PandaItem, { speed: 0.1 }).hover(LionItem, { speed: 0.1 }).hover(CamelItem, { speed: 0.1 }).hover(GiraffeItem, { speed: 0.1 }).hover(DragZoneGiraffeItem, { speed: 0.1 })
    .dragToElement(DragZoneGiraffeItem, PandaItem, { speed: 0.1 });
  value = await getItemValueByIndex("question1", 2);
  await t.expect(value).eql(expectedValue);

  // disable question edit (https://github.com/surveyjs/survey-creator/issues/4236) 
  // unfortunately testcafe "drag-drop" can't reproduce the problem due it is probably some kind of emulation...
  // const disableQuestionEdit = ClientFunction((json) => {
  //   window["creator"].onElementAllowOperations.add((sender, options) => {
  //     options.allowEdit = false;
  //   });
  //   window["creator"].text = JSON.stringify(json);
  // });
  // await disableQuestionEdit(json);
  // const Item1 = Question1.find(".svc-image-item-value").nth(1);
  // const Item2 = Question1.find(".svc-image-item-value").nth(2);
  // await t
  //   .hover(Item1, { speed: 0.1 })
  //   .dragToElement(Item1, Item2, { speed: 0.1 });
});

test("Drag Drop ImagePicker (choices) - check controls exists", async (t) => {
  // see https://github.com/surveyjs/survey-creator/issues/4888
  await t.resizeWindow(2560, 1440);

  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            "type": "imagepicker",
            "name": "question1",
            "choices": [
              {
                "value": "lion",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              }
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Question1 = Selector("[data-name=\"question1\"]");
  const LionItem = Selector("[data-sv-drop-target-item-value=\"lion\"]");
  const DragZoneLionItem = LionItem.find(".svc-image-item-value-controls__drag-area-indicator").filterVisible();
  const SomeOutsideArea = Selector(".svc-toolbox");
  const ControlsNode = LionItem.find(".svc-image-item-value-controls").filterVisible();

  await t
    .click(Question1, { speed: 0.1 })
    .hover(LionItem, { speed: 0.1 })
    .dragToElement(DragZoneLionItem, SomeOutsideArea, { speed: 0.1 })
    .hover(ControlsNode, { speed: 0.1 });
});

test("Drag Drop MatrixRows (property grid)", async (t) => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "radiogroup",
            name: "question1",
            choices: ["Item 1", "Item 2", "Item 3"]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Question1 = Selector("[data-name=\"question1\"]");
  await t.click(Question1, { speed: 0.5 });

  const ChoicesTab = Selector("h4").withExactText("Choice Options");
  await t.click(ChoicesTab);

  const Item1 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0);
  const Item2 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1);
  const Item3 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(2);
  let DragZoneItem2 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1).find(".spg-drag-element__svg");
  await t
    .hover(Item1).hover(Item2).hover(Item3).hover(DragZoneItem2)
    .dragToElement(DragZoneItem2, Item1, {
      offsetX: 5,
      offsetY: 5,
      speed: 0.5
    });

  const expectedValue = "Item 2";
  let value = await getItemValueByIndex("question1", 0);
  await t.expect(value).eql(expectedValue);

  DragZoneItem2 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0).find(".spg-drag-element__svg");
  await t.dragToElement(DragZoneItem2, Item3, { offsetX: 5, offsetY: 5, speed: 0.5 });

  value = await getItemValueByIndex("question1", 2);
  await t.expect(value).eql(expectedValue);
});

test("Drag Drop Pages MatrixRows (property grid Pages)", async (t) => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "radiogroup",
            name: "question1",
            choices: ["Item 1", "Item 2", "Item 3"]
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "radiogroup",
            name: "question2",
            choices: ["Item 1", "Item 2", "Item 3"]
          }
        ]
      },
      {
        name: "page3",
        elements: [
          {
            type: "radiogroup",
            name: "question3",
            choices: ["Item 1", "Item 2", "Item 3"]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const PagesTab = Selector("h4").withExactText("Pages");
  await t
    .click(surveySettingsButtonSelector, { speed: 0.5 })
    .click(PagesTab);

  const Page1 = Selector("[data-name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(0);
  const Page2 = Selector("[data-name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(1);
  const Page3 = Selector("[data-name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(2);
  let DragZonePage2 = Selector("[data-name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(1).find(".spg-drag-element__svg");
  await t
    .hover(Page1).hover(Page2).hover(Page3).hover(DragZonePage2)
    .dragToElement(DragZonePage2, Page1, {
      offsetX: 5,
      offsetY: 5,
      speed: 0.5
    });

  const getPageNameByIndex = ClientFunction((index) => {
    return window["creator"].survey.pages[index].name;
  });

  const expectedPageName = "page2";
  let pageName = await getPageNameByIndex(0);
  await t.expect(pageName).eql(expectedPageName);
});

test("Drag Drop to Panel Dynamic Question", async (t) => {
  await t.resizeWindow(2560, 1440);
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "paneldynamic",
            name: "paneldynamic1",
          },
        ],
      },
    ],
  };
  await setJSON(json);

  const DynamicPanel = Selector("[data-sv-drop-target-survey-element=\"paneldynamic1\"]");
  const Question3 = Selector("[data-sv-drop-target-survey-element=\"question3\"]");
  const FirstRow = Selector(".svc-row");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, FirstRow, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 25,
      speed: 0.5
    })

    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, DynamicPanel, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -1,
      speed: 0.5
    })

    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, DynamicPanel, {
      offsetX: 5,
      offsetY: 5,
      speed: 0.5
    })

    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, Question3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 1,
      speed: 0.5
    })

    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, Question3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -10,
      speed: 0.5
    });

  let expectedJson = {
    pages: [
      {
        name: "page1",
        elements: [
          { type: "rating", name: "question1" },
          {
            type: "paneldynamic",
            name: "paneldynamic1",
            templateElements: [
              { type: "rating", name: "question4" },
              { type: "rating", name: "question3" },
              { type: "rating", name: "question5" },
            ],
          },
          { type: "rating", name: "question2" },
        ],
      },
    ],
  };

  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);
});

test("Drag Drop from Panel Dynamic Question", async (t) => {
  await t.resizeWindow(2560, 1440);
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "paneldynamic",
            name: "paneldynamic1",
            templateElements: [
              { type: "rating", name: "rating1" },
              { type: "rating", name: "rating2" },
            ],
          },
          { type: "rating", name: "rating3" },
        ],
      },
    ],
  };
  await setJSON(json);

  const Rating2 = Selector("[data-sv-drop-target-survey-element=\"rating2\"]");
  const DragZoneRating2 = Rating2.find(".svc-question__drag-element");
  const Rating3 = Selector("[data-sv-drop-target-survey-element=\"rating3\"]");

  await t
    .click(Rating2, { speed: 0.5 })
    .hover(DragZoneRating2, { speed: 0.5 })
    .dragToElement(DragZoneRating2, Rating3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -50,
      speed: 0.5,
    });

  let expectedJson = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "paneldynamic",
            name: "paneldynamic1",
            templateElements: [{ type: "rating", name: "rating1" }],
          },
          { type: "rating", name: "rating3" },
          { type: "rating", name: "rating2" },
        ],
      },
    ],
  };

  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);
});

test("Drag Drop Question: click on drag area should work withot drag start", async (t) => {
  const getSelectedElementName = ClientFunction(() => {
    return window["creator"].selectedElement.name;
  });

  await t.resizeWindow(2560, 1440);
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "rating",
            name: "rating1"
          },
          {
            type: "rating",
            name: "rating2"
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Rating1 = Selector("[data-sv-drop-target-survey-element=\"rating1\"]");
  const Rating2 = Selector("[data-sv-drop-target-survey-element=\"rating2\"]");
  const DragZoneRating2 = Rating2.find(".svc-question__drag-element");

  await t.click(Rating1); // select Rating1
  await t.expect(getSelectedElementName()).eql("rating1");
  await t.hover(Rating2).click(DragZoneRating2); // select Rating2 without drag start
  await t.expect(getSelectedElementName()).eql("rating2");
});

test("Drag Drop below the last Panel", async (t) => {
  await t.resizeWindow(2560, 1440);
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1"
          },
          {
            "type": "panel",
            "name": "panel2",
            "elements": [
              {
                "type": "text",
                "name": "question1"
              }
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const LastPanel = Selector("[data-sv-drop-target-survey-element=\"panel2\"]");
  const PanelToolboxItem = Selector("[aria-label='Panel']");

  await t
    .hover(PanelToolboxItem, { speed: 0.01 })
    .dragToElement(PanelToolboxItem, LastPanel, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -10,
      speed: 0.01
    });

  const expectedJson = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1"
          },
          {
            "type": "panel",
            "name": "panel2",
            "elements": [
              {
                "type": "text",
                "name": "question1"
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel3"
          }
        ]
      }
    ]
  };
  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);
});

test("Drag Drop to new page and Undo", async (t) => {
  const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");

  const undoAction = Selector("button[title=Undo]");

  await t.resizeWindow(2560, 2000);
  await ClientFunction(() => {
    const el: any = document.getElementById("survey-creator");
    el.style.position = "relative";
    el.style.bottom = undefined;
    el.style.height = "10000px";
    const rootEl: any = document.getElementsByTagName("app-root")[0];
    if (!!rootEl) {
      rootEl.style.position = "relative";
    }
  })();

  let pagesLength;

  await t
    .hover(SingleInputToolboxItem)
    .dragToElement(SingleInputToolboxItem, EmptyPage, { speed: 0.5 }); // first time drag to single Empty page, next times drag to ghost page
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(1);

  await t
    .hover(SingleInputToolboxItem)
    .dragToElement(SingleInputToolboxItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(2);

  await t
    .hover(SingleInputToolboxItem)
    .dragToElement(SingleInputToolboxItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(3);

  await t.click(undoAction);
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(2);

  await t.click(undoAction);
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(1);
});

test("Drag Drop on the right of Panel same row", async (t) => {
  await t.resizeWindow(1920, 1080);
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1",
            "elements": [
              {
                "type": "text",
                "name": "question1"
              },
              {
                "type": "text",
                "name": "question2"
              },
              {
                "type": "text",
                "name": "question3"
              }
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Panel = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");

  await t
    .hover(SingleInputToolboxItem, { speed: 0.01 })
    .dragToElement(SingleInputToolboxItem, Panel, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 100,
      destinationOffsetX: -10,
      speed: 0.01
    });

  const expectedJson = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1",
            "elements": [
              {
                "type": "text",
                "name": "question1"
              },
              {
                "type": "text",
                "name": "question2"
              },
              {
                "type": "text",
                "name": "question3"
              }
            ]
          },
          {
            "type": "text",
            "name": "question4",
            "startWithNewLine": false
          }
        ]
      }
    ]
  };
  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);
});

test("Drag Drop on the right of Panel same row", async (t) => {
  await t.resizeWindow(1920, 1080);
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1"
          },
          {
            "type": "panel",
            "name": "panel2"
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Panel1 = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");
  const Panel2 = Selector("[data-sv-drop-target-survey-element=\"panel2\"]");

  await t
    .hover(Panel2, { speed: 0.1 })
    .dragToElement(Panel2, Panel1, {
      offsetX: 150,
      offsetY: 5,
      destinationOffsetY: 150,
      destinationOffsetX: 150,
      speed: 0.1
    });

  const expectedJson = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1",
            "elements": [
              {
                "type": "panel",
                "name": "panel2"
              }
            ]
          }
        ]
      }
    ]
  };
  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);
});

test("Drag Drop on the bottom of page in bypage mode", async (t) => {
  await t.resizeWindow(1800, 900);
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "q1"
          }
        ]
      }
    ]
  };
  const setOptions = ClientFunction(() => {
    window["creator"].setOptions({
      pageEditMode: "bypage"
    });
  });
  await setOptions();
  await setJSON(json);

  const existingPegeSelector = Selector("[data-sv-drop-target-survey-element=\"page1\"]");
  const ghostPageSelector = Selector("[data-sv-drop-target-survey-element=\"panel2\"]");

  await t.expect(ghostPageSelector.visible).notOk();
  await t.expect(existingPegeSelector.visible).ok();

  await t
    .dragToElement(SingleInputToolboxItem, existingPegeSelector, {
      offsetX: 10,
      offsetY: 10,
      destinationOffsetY: -100,
      destinationOffsetX: 150,
      speed: 0.1
    });

  const expectedJson = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "q1"
          },
          {
            "type": "text",
            "name": "question1"
          }
        ]
      }
    ]
  };
  const resultJson = await getJSON();
  await t.expect(resultJson).eql(expectedJson);
});

test("Drag Drop indicator - rows", async (t) => {
  await t.resizeWindow(1600, 1000);
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          },
          {
            "type": "text",
            "name": "question2",
            "startWithNewLine": false
          },
          {
            "type": "text",
            "name": "question3"
          },
          {
            "type": "text",
            "name": "question4",
            "startWithNewLine": false
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const toolboxToolAction = Selector(".svc-toolbox__tool > .sv-action__content");

  await t
    .hover(toolboxToolAction)
    .dispatchEvent(toolboxToolAction, "pointerdown")

    .hover(Selector(".svc-row").nth(0).find(".svc-question__adorner"), { offsetX: 100, offsetY: 5, speed: 0.1 })
    .expect(Selector(".svc-row").nth(0).hasClass("svc-row--drag-over-top")).ok()

    .hover(Selector(".svc-row").nth(0).find(".svc-question__adorner"), { offsetX: 100, offsetY: 150, speed: 0.1 })
    .expect(Selector(".svc-row").nth(0).hasClass("svc-row--drag-over-top")).notOk()
    .expect(Selector(".svc-row").nth(0).hasClass("svc-row--drag-over-bottom")).ok()

    .hover(Selector(".svc-row").nth(1).find(".svc-question__adorner"), { offsetX: 100, offsetY: 5, speed: 0.1 })
    .expect(Selector(".svc-row").nth(0).hasClass("svc-row--drag-over-top")).notOk()
    .expect(Selector(".svc-row").nth(0).hasClass("svc-row--drag-over-bottom")).notOk()
    .expect(Selector(".svc-row").nth(1).hasClass("svc-row--drag-over-top")).ok()

    .hover(Selector(".svc-row").nth(1).find(".svc-question__adorner"), { offsetX: 100, offsetY: 150, speed: 0.1 })
    .expect(Selector(".svc-row").nth(0).hasClass("svc-row--drag-over-top")).notOk()
    .expect(Selector(".svc-row").nth(0).hasClass("svc-row--drag-over-bottom")).notOk()
    .expect(Selector(".svc-row").nth(1).hasClass("svc-row--drag-over-top")).notOk()
    .expect(Selector(".svc-row").nth(1).hasClass("svc-row--drag-over-bottom")).ok()

    .hover(Selector(".svc-page__content").nth(1), { offsetX: 100, offsetY: 1, speed: 0.1 })
    .dispatchEvent(Selector(".svc-page__content").nth(1), "pointerup")
    .expect(Selector(".svc-row").nth(0).hasClass("svc-row--drag-over-top")).notOk()
    .expect(Selector(".svc-row").nth(0).hasClass("svc-row--drag-over-bottom")).notOk()
    .expect(Selector(".svc-row").nth(1).hasClass("svc-row--drag-over-top")).notOk()
    .expect(Selector(".svc-row").nth(1).hasClass("svc-row--drag-over-bottom")).notOk();
});

test("Drag Drop indicator - between questions", async (t) => {
  await t.resizeWindow(1600, 1000);
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          },
          {
            "type": "text",
            "name": "question2",
            "startWithNewLine": false
          },
          {
            "type": "text",
            "name": "question3"
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const toolboxToolAction = Selector(".svc-toolbox__tool > .sv-action__content");

  await t.expect(Selector(".svc-question__adorner").visible).ok();

  const questionRectRight = await Selector(".svc-question__adorner").getBoundingClientRectProperty("right");
  const questionRectBottom = await Selector(".svc-question__adorner").getBoundingClientRectProperty("bottom");
  await t
    .hover(toolboxToolAction)
    .dispatchEvent(toolboxToolAction, "pointerdown")
    .hover(Selector("#survey-creator"), { offsetX: Math.round(questionRectRight) + 8, offsetY: Math.round(questionRectBottom) - 100 })
    .expect(Selector(".svc-question__content").nth(1).hasClass("svc-question__content--drag-over-left")).ok();

  await t
    .hover(toolboxToolAction)
    .dispatchEvent(toolboxToolAction, "pointerdown")
    .hover(Selector("#survey-creator"), { offsetX: Math.round(questionRectRight) - 100, offsetY: Math.round(questionRectBottom) + 8 })
    .expect(Selector(".svc-question__content").nth(2).hasClass("svc-question__content--drag-over-top")).ok();

});

test("Drag Drop page with other pages collapsed on start drag", async (t) => {
  await ClientFunction(() => {
    window["creator"].expandCollapseButtonVisibility = "always";
    window["creator"].allowDragPages = true;
    window["creator"].collapseOnDrag = true;
  })();

  await t.resizeWindow(1600, 900);
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "boolean",
            "name": "question2"
          }
        ]
      },
      {
        "name": "page3",
        "elements": [
          {
            "type": "text",
            "name": "question3"
          }
        ]
      },
      {
        "name": "page4",
        "elements": [
          {
            "type": "rating",
            "name": "question4"
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const expectedJson = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page4",
        "elements": [
          {
            "type": "rating",
            "name": "question4"
          }
        ]
      },
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "boolean",
            "name": "question2"
          }
        ]
      },
      {
        "name": "page3",
        "elements": [
          {
            "type": "text",
            "name": "question3"
          }
        ]
      }
    ]
  };

  const page1 = Selector("[data-sv-drop-target-survey-page=\"page1\"]");
  const page2 = Selector("[data-sv-drop-target-survey-page=\"page2\"]");
  const page4 = Selector("[data-sv-drop-target-survey-page=\"page4\"]");
  const page4DragHandle = Selector("[data-sv-drop-target-survey-page=\"page4\"] > .svc-question__drag-area > .svc-question__drag-element");

  await t
    .scrollIntoView(page4)
    .hover(page4, { offsetX: 150, offsetY: 20 })
    .expect(Selector(".svc-page__content--collapsed").count).eql(0)
    .dispatchEvent(page4DragHandle, "pointerdown")
    .hover(page4, { speed: 0.05 })
    .expect(page4.hasClass("svc-page__content--dragged")).ok()
    .expect(Selector(".svc-page__content--collapsed").count).eql(4);

  const pageRectBottom = await page1.getBoundingClientRectProperty("bottom");
  const pageRectLeft = await page1.getBoundingClientRectProperty("left");
  await t
    //test indicator between pages
    .hover(Selector("#survey-creator"), { offsetX: Math.round(pageRectLeft) + 50, offsetY: Math.round(pageRectBottom) + 6 })
    .expect(page2.find(".svc-question__drop-indicator--top").visible).ok()

    .hover(page1, { offsetX: 150, offsetY: 60, speed: 0.05 })
    .expect(page1.find(".svc-question__drop-indicator--top").visible).notOk()
    .expect(page1.find(".svc-question__drop-indicator--bottom").visible).ok()
    .hover(page1, { offsetX: 150, offsetY: 10, speed: 0.05 })
    .expect(page1.find(".svc-question__drop-indicator--top").visible).ok()
    .expect(page1.find(".svc-question__drop-indicator--bottom").visible).notOk()
    .dispatchEvent(page4DragHandle, "pointerup")
    .wait(500)
    .expect(Selector(".svc-page__content--collapsed").count).eql(0);
  const resultJson0 = await getJSON();
  await t.expect(resultJson0).eql(expectedJson);
});

test("Drag Drop page to denied area and then keep ghost page after added new one", async (t) => {
  await ClientFunction(() => {
    window["creator"].expandCollapseButtonVisibility = "always";
    window["creator"].allowDragPages = true;
    window["creator"].collapseOnDrag = true;
  })();

  await t.resizeWindow(1600, 900);
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "boolean",
            "name": "question2"
          }
        ]
      },
    ]
  };
  await setJSON(json);

  const expectedJson = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "boolean",
            "name": "question2"
          }
        ]
      },
      {
        "name": "page3",
        "elements": [
          {
            "type": "text",
            "name": "question3"
          }
        ]
      }
    ]
  };

  const page2 = Selector("[data-sv-drop-target-survey-page=\"page2\"]");
  const page2DragHandle = Selector("[data-sv-drop-target-survey-page=\"page2\"] > .svc-question__drag-area > .svc-question__drag-element");

  await t
    .scrollIntoView(page2)
    .hover(page2, { offsetX: 150, offsetY: 20 })
    .expect(Selector(".svc-page__content--collapsed").count).eql(0)
    .dispatchEvent(page2DragHandle, "pointerdown")
    .hover(Selector(".svc-designer-header"), { speed: 0.05 })
    .dispatchEvent(page2DragHandle, "pointerup")
    .wait(500)
    .expect(Selector(".svc-page__content--collapsed").count).eql(0);
  await t
    .scrollIntoView(Selector(".svc-element__add-new-question").nth(2))
    .expect(Selector(".svc-element__add-new-question").nth(3).exists).notOk()
    .click(Selector(".svc-element__add-new-question").nth(2));
  const resultJson0 = await getJSON();
  await t.expect(resultJson0).eql(expectedJson);
  await t
    .expect(Selector(".svc-element__add-new-question").nth(3).visible).ok();
});
