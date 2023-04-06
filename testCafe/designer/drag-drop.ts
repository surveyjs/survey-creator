import { url, getPagesLength, getQuestionsLength, setJSON, getJSON, getQuestionNameByIndex, getItemValueByIndex, patchDragDropToDisableDrop } from "../helper";
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
  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
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
  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
  const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 })
    .click(Selector("[title='page2']"));

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

  const SingleInputItem = Selector("[aria-label='Single Input toolbox item']");
  const CheckboxItem = Selector("[aria-label='Checkbox toolbox item']");
  const RadiogroupItem = Selector("[aria-label='Radiogroup toolbox item']");
  const DropdownItem = Selector("[aria-label='Dropdown toolbox item']");
  const CommentItem = Selector("[aria-label='Comment toolbox item']");
  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
  const RankingItem = Selector("[aria-label='Ranking toolbox item']");
  const ImagePickerItem = Selector("[aria-label='Image Picker toolbox item']");
  const BooleanItem = Selector("[aria-label='Boolean toolbox item']");
  const ImageItem = Selector("[aria-label='Image toolbox item']");
  const HtmlItem = Selector("[aria-label='HTML toolbox item']");
  const SignatureItem = Selector("[aria-label='Signature Pad toolbox item']");
  const ExpressionItem = Selector("[aria-label='Expression (read-only) toolbox item']");
  const FileItem = Selector("[aria-label='File toolbox item']");
  const MatrixSingleChoiceItem = Selector("[aria-label='Single-Choice Matrix toolbox item']");
  const MatrixMultipleChoiceItem = Selector("[aria-label='Multiple-Choice Matrix toolbox item']");
  const MatrixDynamicRowsItem = Selector("[aria-label='Dynamic Matrix toolbox item']");
  const MultipleTextItem = Selector("[aria-label='Multiple Text toolbox item']");
  const PanelItem = Selector("[aria-label='Panel toolbox item']");
  const PanelDynamicItem = Selector("[aria-label='Panel toolbox item']");

  await t.resizeWindow(2560, 2000);

  let pagesLength;

  await t
    .hover(ImagePickerItem)
    .dragToElement(ImagePickerItem, EmptyPage, { speed: 0.5 }); // first time drag to single Empty page, next times drag to ghost page
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(1);

  await t
    .hover(CheckboxItem)
    .dragToElement(CheckboxItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(2);

  await t
    .hover(RadiogroupItem)
    .dragToElement(RadiogroupItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(3);

  await t
    .hover(DropdownItem)
    .dragToElement(DropdownItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(4);

  await t
    .hover(CommentItem)
    .dragToElement(CommentItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(5);

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(6);

  await t
    .hover(RankingItem)
    .dragToElement(RankingItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(7);

  await t
    .hover(SingleInputItem)
    .dragToElement(SingleInputItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(8);

  await t
    .hover(HtmlItem)
    .dragToElement(HtmlItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(9);

  await t
    .hover(SignatureItem)
    .dragToElement(SignatureItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(10);

  await t
    .hover(ExpressionItem)
    .dragToElement(ExpressionItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(11);

  await t
    .hover(FileItem)
    .dragToElement(FileItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(12);

  await t
    .hover(MatrixSingleChoiceItem)
    .dragToElement(MatrixSingleChoiceItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(13);

  await t
    .hover(MatrixMultipleChoiceItem)
    .dragToElement(MatrixMultipleChoiceItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(14);

  await t
    .hover(MatrixDynamicRowsItem)
    .dragToElement(MatrixDynamicRowsItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(15);

  await t
    .hover(MultipleTextItem)
    .dragToElement(MultipleTextItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(16);

  await t
    .hover(PanelItem)
    .dragToElement(PanelItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(17);

  await t
    .hover(PanelDynamicItem)
    .dragToElement(PanelDynamicItem, newGhostPagePage, { speed: 0.5 });
  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(18);

  await t
    .hover(BooleanItem)
    .dragToElement(BooleanItem, newGhostPagePage, { speed: 0.5 });

  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(19);

  await t
    .hover(ImageItem)
    .dragToElement(BooleanItem, newGhostPagePage, { speed: 0.5 });

  pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(20);
});

test("Drag Drop Toolbox Responsivity", async (t) => {
  const tabbedMenuItemSelector = Selector(".svc-toolbox .svc-toolbox__tool:nth-of-type(19)");
  await t
    .resizeWindow(1920, 1080)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk()
    .resizeWindow(970, 632)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok()
    .click(".svc-toolbox__tool.sv-dots");

  const PopupSelector = Selector(".sv-popup .sv-popup__container").filterVisible();
  const DynamicPanelItem = PopupSelector.find(".sv-list__item").withText("Dynamic Panel");
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");

  await t.dragToElement(DynamicPanelItem, EmptyPage, { speed: 0.5 });

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
  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
  const Question3 = Selector("[data-sv-drop-target-survey-element=\"question3\"]");

  await t
    .hover(RatingToolboxItem, { speed: 0.01 })
    .dragToElement(RatingToolboxItem, Panel, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 0,
      speed: 0.1
    })

    .hover(RatingToolboxItem, { speed: 0.01 })
    .dragToElement(RatingToolboxItem, Panel, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -1,
      speed: 0.1
    })

    .hover(RatingToolboxItem, { speed: 0.01 })
    .dragToElement(RatingToolboxItem, Panel, {
      offsetX: 5,
      offsetY: 5,
      speed: 0.1
    })

    .hover(RatingToolboxItem, { speed: 0.01 })
    .dragToElement(RatingToolboxItem, Question3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 25,
      speed: 0.1
    })

    .hover(RatingToolboxItem, { speed: 0.01 })
    .dragToElement(RatingToolboxItem, Question3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -10,
      speed: 0.1
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
    destinationOffsetX: -1,
    destinationOffsetY: -1,
    speed: 0.1
  });

  const check = ClientFunction(() => {
    return window["creator"].survey.getAllQuestions()[2].startWithNewLine;
  });
  const result = await check();
  await t.expect(result).eql(true);
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

  const DnDShortcutControls = Selector("body > div > [data-sv-drop-target-item-value='Item 2']").find(".svc-item-value-controls__button");

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

  const ChoicesTab = Selector("h4").withExactText("Choices");
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

  const Settings = Selector("[title=\"Open survey settings\"]");
  const PagesTab = Selector("h4").withExactText("Pages");
  await t
    .click(Settings, { speed: 0.5 })
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
  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
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
      destinationOffsetY: -1,
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
  const afterLastPanel = Selector("[data-sv-drop-target-survey-element=\"page1\"]").find(".svc-page__add-new-question");
  const PanelToolboxItem = Selector("[aria-label='Panel toolbox item']");

  await t
    .hover(PanelToolboxItem, { speed: 0.01 })
    .dragToElement(PanelToolboxItem, afterLastPanel, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 0,
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
