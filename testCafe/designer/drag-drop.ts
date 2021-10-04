import { url, getPagesLength, getQuestionsLength, setJSON, getJSON, getQuestionNameByIndex, getItemValueByIndex, } from "../helper";
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
});

test("Drag Drop Question", async (t) => {
  await t.resizeWindow(2560, 1440); //TODO why do we need it?
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

  await t
    .hover(Rating2, { speed: 0.5 })
    .hover(DragZoneRating2, { speed: 0.5 })
    .dragToElement(DragZoneRating2, Rating1, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -120,
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
      destinationOffsetY: 120,
      speed: 0.5
    });

  name = await getQuestionNameByIndex(1);
  await t.expect(name).eql(questionName);
});
test("Drag Drop to Panel", async (t) => {
  await t.resizeWindow(2560, 1440); //TODO why do we need it?
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
    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, Panel, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -250,
      speed: 0.5
    })

    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, Panel, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 250,
      speed: 0.5
    })

    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, Panel, {
      offsetX: 5,
      offsetY: 5,
      speed: 0.5
    })

    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, Question3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -120,
      speed: 0.5
    })

    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, Question3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 120,
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

test.only("Drag Drop Question (StartWithNewLine === false)", async (t) => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "rating",
            name: "question1"
          },
          {
            type: "rating",
            name: "question2",
            startWithNewLine: false
          },
          {
            type: "rating",
            name: "question3",
            startWithNewLine: false
          }
        ],
        title: "page1 -- title",
        description: "page1 -- description"
      }
    ]
  };

  await setJSON(json);

  const Question1 = Selector(
    "[data-sv-drop-target-survey-element=\"question1\"]"
  );
  const Question3 = Selector(
    "[data-sv-drop-target-survey-element=\"question3\"]"
  );
  const DragZoneQuestion1 = Question1.find(".svc-question__drag-element");

  await t.hover(Question1, { speed: 0.5 });
  await t.hover(DragZoneQuestion1);
  await t.dragToElement(DragZoneQuestion1, Question3, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetX: 80,
    speed: 0.5
  });

  let name = await getQuestionNameByIndex(0);
  await t.expect(name).eql("question2");

  name = await getQuestionNameByIndex(1);
  await t.expect(name).eql("question3");

  name = await getQuestionNameByIndex(2);
  await t.expect(name).eql("question1");

  // const getStartWithNewLineByIndex = ClientFunction((index) => {
  //   return creator.survey.getAllQuestions()[index].startWithNewLine;
  // });
  // const result = await getStartWithNewLineByIndex(2);
  // await t.expect(result).eql(false, "question1.startWithNewLine should set to false after drag");
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
            choices: ["item1", "item2", "item3"]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Question1 = Selector("[name=\"question1\"]");
  const Item1 = Selector("[data-sv-drop-target-item-value=\"item1\"]");
  const Item2 = Selector("[data-sv-drop-target-item-value=\"item2\"]");
  const Item3 = Selector("[data-sv-drop-target-item-value=\"item3\"]");
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
  const expectedValue = "item2";
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

test("Drag Drop MatrixRows (property grid)", async (t) => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "radiogroup",
            name: "question1",
            choices: ["item1", "item2", "item3"]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Question1 = Selector("[name=\"question1\"]");
  await t.click(Question1, { speed: 0.5 });

  // TODO uncomment after the fix https://github.com/surveyjs/survey-creator/issues/1618
  const ChoicesTab = Selector("h4").withExactText("Choices");
  await t.click(ChoicesTab);

  const Item1 = Selector("[name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0);
  const Item2 = Selector("[name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1);
  const Item3 = Selector("[name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(2);
  let DragZoneItem2 = Selector("[name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1).find(".spg-matrixdynamic__drag-element");
  await t
    .hover(Item1).hover(Item2).hover(Item3).hover(DragZoneItem2)
    .dragToElement(DragZoneItem2, Item1, {
      offsetX: 5,
      offsetY: 5,
      speed: 0.5
    });

  const expectedValue = "item2";
  let value = await getItemValueByIndex("question1", 0);
  await t.expect(value).eql(expectedValue);

  DragZoneItem2 = Selector("[name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0).find(".spg-matrixdynamic__drag-element");
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
            choices: ["item1", "item2", "item3"]
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "radiogroup",
            name: "question2",
            choices: ["item1", "item2", "item3"]
          }
        ]
      },
      {
        name: "page3",
        elements: [
          {
            type: "radiogroup",
            name: "question3",
            choices: ["item1", "item2", "item3"]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Settings = Selector("[title=\"Settings\"]");
  const PagesTab = Selector("h4").withExactText("Pages");
  await t
    .click(Settings, { speed: 0.5 })
    .click(PagesTab);

  const Page1 = Selector("[name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(0);
  const Page2 = Selector("[name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(1);
  const Page3 = Selector("[name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(2);
  let DragZonePage2 = Selector("[name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(1).find(".spg-matrixdynamic__drag-element");
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
  await t.resizeWindow(2560, 1440); //TODO why do we need it?
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

  await t
    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, DynamicPanel, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -250,
      speed: 0.5,
    })

    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, DynamicPanel, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 350,
      speed: 0.5,
    })

    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, DynamicPanel, {
      offsetX: 5,
      offsetY: 5,
      speed: 0.5,
    })

    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, DynamicPanel, { offsetX: 5, offsetY: 5, speed: 0.5, })

    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, Question3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: -120,
      speed: 0.5,
    })

    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, Question3, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetY: 120,
      speed: 0.5,
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
  await t.resizeWindow(2560, 1440); //TODO why do we need it?
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
