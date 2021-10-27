import { url, getPagesLength, getQuestionsLength, setJSON, getJSON, getQuestionNameByIndex, getItemValueByIndex } from "../helper";
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

  const ghostPageRowsCount = newGhostPagePage.find(".svc-row").count;
  await t.expect(ghostPageRowsCount).eql(0);
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
  const ImagePickerItem = Selector("[aria-label='Image picker toolbox item']");
  const BooleanItem = Selector("[aria-label='Boolean toolbox item']");
  const ImageItem = Selector("[aria-label='Image toolbox item']");
  const HtmlItem = Selector("[aria-label='Html toolbox item']");
  const SignatureItem = Selector("[aria-label='Signature pad toolbox item']");
  const ExpressionItem = Selector("[aria-label='Expression (read-only) toolbox item']");
  const FileItem = Selector("[aria-label='File toolbox item']");
  const MatrixSingleChoiceItem = Selector("[aria-label='Matrix (single choice) toolbox item']");
  const MatrixMultipleChoiceItem = Selector("[aria-label='Matrix (multiple choice) toolbox item']");
  const MatrixDynamicRowsItem = Selector("[aria-label='Matrix (dynamic rows) toolbox item']");
  const MultipleTextItem = Selector("[aria-label='Multiple Text toolbox item']");
  const PanelItem = Selector("[aria-label='Panel toolbox item']");
  const PanelDynamicItem = Selector("[aria-label='Panel toolbox item']");

  await t
    .hover(SingleInputItem)
    .dragToElement(SingleInputItem, EmptyPage, { speed: 0.5 }) // first time drag to single Empty page, next times drag to ghost page

    .hover(CheckboxItem)
    .dragToElement(CheckboxItem, newGhostPagePage, { speed: 0.5 })

    .hover(RadiogroupItem)
    .dragToElement(RadiogroupItem, newGhostPagePage, { speed: 0.5 })

    .hover(DropdownItem)
    .dragToElement(DropdownItem, newGhostPagePage, { speed: 0.5 })

    .hover(CommentItem)
    .dragToElement(CommentItem, newGhostPagePage, { speed: 0.5 })

    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 })

    .hover(RankingItem)
    .dragToElement(RankingItem, newGhostPagePage, { speed: 0.5 })

    .hover(ImagePickerItem)
    .dragToElement(ImagePickerItem, newGhostPagePage, { speed: 0.5 })

    .hover(HtmlItem)
    .dragToElement(HtmlItem, newGhostPagePage, { speed: 0.5 })

    .hover(SignatureItem)
    .dragToElement(SignatureItem, newGhostPagePage, { speed: 0.5 })

    .hover(ExpressionItem)
    .dragToElement(ExpressionItem, newGhostPagePage, { speed: 0.5 })

    .hover(FileItem)
    .dragToElement(FileItem, newGhostPagePage, { speed: 0.5 })

    .hover(MatrixSingleChoiceItem)
    .dragToElement(MatrixSingleChoiceItem, newGhostPagePage, { speed: 0.5 })

    .hover(MatrixMultipleChoiceItem)
    .dragToElement(MatrixMultipleChoiceItem, newGhostPagePage, { speed: 0.5 })

    .hover(MatrixDynamicRowsItem)
    .dragToElement(MatrixDynamicRowsItem, newGhostPagePage, { speed: 0.5 })

    .hover(MultipleTextItem)
    .dragToElement(MultipleTextItem, newGhostPagePage, { speed: 0.5 })

    .hover(PanelItem)
    .dragToElement(PanelItem, newGhostPagePage, { speed: 0.5 })

    .hover(PanelDynamicItem)
    .dragToElement(PanelDynamicItem, newGhostPagePage, { speed: 0.5 })

    .hover(BooleanItem)
    .dragToElement(BooleanItem, newGhostPagePage, { speed: 0.5 })

    .hover(ImageItem)
    .dragToElement(BooleanItem, newGhostPagePage, { speed: 0.5 });

  const pagesLength = await getPagesLength();
  await t.expect(pagesLength).eql(20 + 1); // +1 for the first empty page
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
              "item1",
              "item2",
              "item3"
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
    destinationOffsetX: 80,
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
    destinationOffsetX: -80,
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
              "item1",
              "item2",
              "item3"
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

test("Drag Drop Ranking (choices)", async (t) => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "ranking",
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

test("Animation (choices)", async (t) => {
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

  await t.dragToElement(DragZoneItem2, Item3, {
    offsetX: 5,
    offsetY: 5,
    destinationOffsetY: 30,
    speed: 0.1
  });

  const animationClassesCount = await ClientFunction(() => {
    let result = 0;
    const itemValueNodes = document.querySelector("[name='question1']").querySelectorAll(".svc-item-value-wrapper");
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

  const Question1 = Selector("[name=\"question1\"]");
  const LionItem = Selector("[data-sv-drop-target-item-value=\"lion\"]");
  const GiraffeItem = Selector("[data-sv-drop-target-item-value=\"giraffe\"]");
  const PandaItem = Selector("[data-sv-drop-target-item-value=\"panda\"]");
  const CamelItem = Selector("[data-sv-drop-target-item-value=\"camel\"]");

  const DragZoneGiraffeItem = GiraffeItem.find(".svc-image-item__drag-element");

  await t
    .click(Question1, { speed: 0.5 })
    .hover(PandaItem).hover(LionItem).hover(CamelItem).hover(GiraffeItem).hover(DragZoneGiraffeItem)

    .dragToElement(DragZoneGiraffeItem, LionItem, {
      offsetX: 1,
      offsetY: 1,
      destinationOffsetY: -40,
      speed: 0.1
    });

  let value = await getItemValueByIndex("question1", 0);
  const expectedValue = "giraffe";
  await t.expect(value).eql(expectedValue);

  await t.click(Question1, { speed: 0.5 }).hover(GiraffeItem, { speed: 0.5 });

  await t.dragToElement(DragZoneGiraffeItem, PandaItem, {
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
      destinationOffsetY: 320,
      speed: 0.5,
    })

    .hover(RatingToolboxItem, { speed: 0.5 })
    .dragToElement(RatingToolboxItem, DynamicPanel, {
      offsetX: 5,
      offsetY: 5,
      speed: 0.5,
    })

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