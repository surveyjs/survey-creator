import { Selector, ClientFunction } from "testcafe";
import { url, setJSON, takeElementScreenshot, explicitErrorHandler, getPropertyGridCategory, changeToolboxScrolling, patchDragDropToDisableDrop, wrapVisualTest, resetHoverToCreator, getPagesLength, RatingToolboxItem } from "../../helper";

const title = "DragDrop Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Ghost Survey Element", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({ pages: [{ name: "page1" }] });
    await t.resizeWindow(2560, 1440);
    await setJSON({ pages: [{ name: "page1" }] });

    const patchDragDropToShowGhostElementAfterDrop = ClientFunction(() => {
      window["creator"].dragDropSurveyElements.removeGhostElementFromSurvey = () => { };
      window["creator"].dragDropSurveyElements.domAdapter.drop = () => { };
      window["creator"].dragDropSurveyElements.domAdapter.clear = () => { };
    });

    await patchDragDropToShowGhostElementAfterDrop();

    const ghostPage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");
    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, ghostPage, { speed: 0.5 });

    await takeElementScreenshot("drag-drop-survey-element-ghost.png", Selector(".svc-page--drag-over-empty"), t, comparer);
  });
});

test("Empty page", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({ pages: [{ name: "page1" }] });
    await t.resizeWindow(2560, 1440);
    await setJSON({ pages: [{ name: "page1" }] });

    const patchDragDropToShowGhostElementAfterDrop = ClientFunction(() => {
      window["creator"].dragDropSurveyElements.removeGhostElementFromSurvey = () => { };
      window["creator"].dragDropSurveyElements.domAdapter.drop = () => { };
      window["creator"].dragDropSurveyElements.domAdapter.clear = () => { };
    });

    await patchDragDropToShowGhostElementAfterDrop();

    const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");
    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 });

    await takeElementScreenshot("drag-drop-survey-element-empty-page.png", Selector(".svc-question__content--drag-over-inside"), t, comparer);
  });
});

test("Ghost Survey Element after several drops", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({ pages: [{ name: "page1" }] });
    await t.resizeWindow(2560, 1440);
    await setJSON({ pages: [{ name: "page1" }] });

    const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");
    const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");

    const patchDragDropToShowGhostElementAfterDrop = ClientFunction(() => {
      window["creator"].dragDropSurveyElements.removeGhostElementFromSurvey = () => { };
      window["creator"].dragDropSurveyElements.domAdapter.drop = () => { };
      window["creator"].dragDropSurveyElements.domAdapter.clear = () => { };
    });

    let pagesLength;

    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 }); // first time drag to single Empty page, next times drag to ghost page
    pagesLength = await getPagesLength();
    await t.expect(pagesLength).eql(1);

    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 });
    pagesLength = await getPagesLength();
    await t.expect(pagesLength).eql(2);

    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 });
    pagesLength = await getPagesLength();
    await t.expect(pagesLength).eql(3);

    await patchDragDropToShowGhostElementAfterDrop();

    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 });

    await takeElementScreenshot("drag-drop-survey-element-ghost-page-4.png", Selector(".svc-page--drag-over-empty"), t, comparer);
  });
});

test("Toolbox Item State After Drag", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({ pages: [{ name: "page1" }] });
    await t.resizeWindow(2560, 1440);
    await setJSON({ pages: [{ name: "page1" }] });

    const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");

    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 });
    await resetHoverToCreator(t);

    await takeElementScreenshot("toolbox-item-state-after-drag.png", Selector(RatingToolboxItem), t, comparer);
  });
});

test("Empty Panel Styles", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
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

    await patchDragDropToDisableDrop();

    const Panel = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");

    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, Panel, { speed: 0.5 });

    await takeElementScreenshot("drag-drop-survey-element-empty-panel.png", Panel, t, comparer);
  });
});

test("Empty Panel Dynamic Styles", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);

    const json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "paneldynamic",
              name: "question1"
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await patchDragDropToDisableDrop();

    const PanelDynamic = Selector("[data-sv-drop-target-survey-element=\"question1\"]");

    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, PanelDynamic, { speed: 0.5 });

    await takeElementScreenshot("drag-drop-survey-element-empty-panel-dynamic.png", PanelDynamic, t, comparer);
  });
});

test("Choices: Ranking", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);

    const json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              "type": "ranking",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2"
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await patchDragDropToDisableDrop();

    const QRoot = Selector(".svc-question__adorner .sd-question__content").filterVisible();
    const FirstItem = QRoot.find(".svc-item-value-wrapper").nth(0);

    await takeElementScreenshot("drag-drop-item-values-ranking.png", QRoot, t, comparer);

    await t.hover(FirstItem);
    await takeElementScreenshot("drag-drop-item-values-ranking--hover.png", QRoot, t, comparer);

    await t.dragToElement(FirstItem.find(".svc-item-value-controls__drag"), FirstItem).wait(500);
    await takeElementScreenshot("drag-drop-item-values-ranking--dragging.png", QRoot, t, comparer);
  });
});

test("Choices: Mobile", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(390, 844);

    const json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              "type": "radiogroup",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2"
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);

    const Row = Selector(".sd-row").filterVisible();
    await takeElementScreenshot("drag-drop-item-values--mobile.png", Row, t, comparer);
  });
});

test("Choices: Ranking: Mobile", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(390, 844);

    const json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              "type": "ranking",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2"
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);

    const Row = Selector(".sd-row").filterVisible();
    await takeElementScreenshot("drag-drop-item-values-ranking--mobile.png", Row, t, comparer);
  });
});

test("Choices: DropDown: Mobile", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(390, 844);

    const json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              "type": "dropdown",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2"
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);

    const Row = Selector(".sd-row").filterVisible();
    await takeElementScreenshot("drag-drop-item-values-dropdown--mobile.png", Row, t, comparer);
  });
});

test("Matrix: Property Grid: Choices", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);

    const patchMatrixDragDropToDisableDrop = ClientFunction(() => {
      const matrix = window["creator"].designerPropertyGrid.survey.getAllQuestions().filter((q) => q.name === "choices")[0];
      matrix.dragDropMatrixRows.drop = () => { };
      matrix.dragDropMatrixRows.domAdapter.drop = () => { };
    });

    const json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              "type": "checkbox",
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
    await setJSON(json);

    await t
      .click(Selector("[data-name=\"question1\"]"), { speed: 0.5 })
      .click(getPropertyGridCategory("Choice Options"));

    await patchMatrixDragDropToDisableDrop();

    const Item1 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0);
    const Item2 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1);
    const Item3 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(2);

    let DragZoneItem2 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1).find(".spg-drag-element__svg");
    await t
      .hover(Item1).hover(Item2).hover(Item3).hover(DragZoneItem2)
      .dragToElement(DragZoneItem2, Item1, {
        offsetX: 5,
        offsetY: 5,
        destinationOffsetX: 20,
        destinationOffsetY: 20,
        speed: 0.5
      });

    await takeElementScreenshot("drag-drop-matrix-pg-choices.png", Selector("[data-name=\"choices\"]"), t, comparer);
  });
});

test("Matrix: Property Grid: Choices: Scroll", async (t) => {
  //https://github.com/surveyjs/survey-creator/issues/5484
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1500, 500);

    const patchMatrixDragDropToDisableDrop = ClientFunction(() => {
      const matrix = window["creator"].designerPropertyGrid.survey.getAllQuestions().filter((q) => q.name === "choices")[0];
      matrix.dragDropMatrixRows.drop = () => { };
      matrix.dragDropMatrixRows.domAdapter.drop = () => { };
    });

    const json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              "type": "checkbox",
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
    await setJSON(json);

    await t
      .click(Selector("[data-name=\"question1\"]"), { speed: 0.5 })
      .click(getPropertyGridCategory("Choice Options"));

    await patchMatrixDragDropToDisableDrop();

    const Item1 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0);
    const Item2 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1);
    const Item3 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(2);

    let DragZoneItem2 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1).find(".spg-drag-element__svg");
    await t.dragToElement(DragZoneItem2, DragZoneItem2, { destinationOffsetX: -1, speed: 0.1 });

    await takeElementScreenshot("drag-drop-matrix-pg-choices-scroll.png", Selector("[data-name=\"choices\"]"), t, comparer);
  });
});

// https://github.com/surveyjs/survey-creator/issues/3113
test("Drag Drop ImagePicker (choices) drop to invalid area", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
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
                  "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
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

    const Question1 = Selector("[data-name=\"question1\"]");
    const GiraffeItem = Selector("[data-sv-drop-target-item-value=\"giraffe\"]");
    const SurveyTitle = Selector("[aria-placeholder='Survey Title']");

    const DragZoneGiraffeItem = GiraffeItem.find(".svc-image-item-value-controls__drag-area-indicator").filterVisible();

    await t
      .click(Question1, { speed: 0.1 })
      .hover(GiraffeItem, { speed: 0.1 }).hover(DragZoneGiraffeItem, { speed: 0.1 })
      .dragToElement(DragZoneGiraffeItem, SurveyTitle, { speed: 0.1 })
      .wait(1000);
    await resetHoverToCreator(t);

    await takeElementScreenshot("drag-drop-image-picker-invalid-drop-area.png", Selector(GiraffeItem), t, comparer);
  });
});
// https://github.com/surveyjs/survey-creator/issues/3234
test("Drag Drop to Multiline from Toolbox", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    changeToolboxScrolling(false);
    await explicitErrorHandler();
    await t.resizeWindow(2584, 1440);

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

    const Question2 = Selector("[data-name=\"question2\"]");
    const Question4 = Selector("[data-name=\"question4\"]");
    const Page1 = Selector("[data-sv-drop-target-survey-element='page1']");

    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, Question2, { speed: 0.5, destinationOffsetX: -1 })
      .hover(Question4);
    await takeElementScreenshot("drag-drop-to-multiline-from-toolbox.png", Page1, t, comparer);
  });
});

test("Drag Drop to Multiline styles", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(832, 600);

    const json = {
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
              "name": "q2",
              "startWithNewLine": false
            }
          ]
        }
      ]
    };
    await setJSON(json);

    const Page1 = Selector("[data-sv-drop-target-survey-element='page1']");

    async function setClass(idx: number, suffix: string, remove: "add" | "remove" = "add") {
      await ClientFunction((idx, suffix, remove) => {
        const el = document.querySelectorAll(".svc-question__content")[idx];
        if (remove != "remove") {
          el.classList.add("svc-question__content--" + suffix);
        }
        else {
          el.classList.remove("svc-question__content--" + suffix);
        }
      })(idx, suffix, remove);
    }
    await setClass(0, "drag-over-left");
    await takeElementScreenshot("drag-drop-to-multiline-start.png", Page1, t, comparer);
    await setClass(0, "drag-over-left", "remove");

    await setClass(0, "drag-over-right");
    await takeElementScreenshot("drag-drop-to-multiline-middle-1.png", Page1, t, comparer);
    await setClass(0, "drag-over-right", "remove");

    await setClass(1, "drag-over-left");
    await takeElementScreenshot("drag-drop-to-multiline-middle-2.png", Page1, t, comparer);
    await setClass(1, "drag-over-left", "remove");

    await setClass(1, "drag-over-right");
    await takeElementScreenshot("drag-drop-to-multiline-end.png", Page1, t, comparer);
    await setClass(1, "drag-over-right", "remove");
  });
});

test("Toolbox Custom Component Icon", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);

    const changeIconRatingForToolbox = ClientFunction((iconName) => {
      window["creator"].toolbox.getItemByName("rating").iconName = iconName;
    });

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

    await patchDragDropToDisableDrop();

    await changeIconRatingForToolbox("icon-modernbooleancheckchecked");

    const Panel = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");

    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, Panel, { speed: 0.5 });

    await takeElementScreenshot("drag-drop-toolbox-custom-component-icon.png", Panel, t, comparer);

    await changeIconRatingForToolbox("icon-rating");
  });
});

test("Drag Drop (choices): scroll", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1000, 500);

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

    await patchDragDropToDisableDrop();

    const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");
    const CheckboxItem = Selector("[aria-label='Checkboxes']");
    await t
      .hover(CheckboxItem)
      .dragToElement(CheckboxItem, newGhostPagePage, { speed: 0.5 });

    await takeElementScreenshot("drag-drop-scroll.png", newGhostPagePage, t, comparer);
  });
});