import { Selector, ClientFunction } from "testcafe";
import { url, setJSON, takeElementScreenshot, explicitErrorHandler, getPropertyGridCategory, changeToolboxScrolling, patchDragDropToDisableDrop, wrapVisualTest, resetHoverToCreator, getPagesLength, RatingToolboxItem, setShowAddQuestionButton, setAllowEditSurveyTitle, hideAllAdornerActions, upArrowImageLink, downArrowImageLink, leftArrowImageLink } from "../../helper";

const title = "DragDrop Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Ghost Survey Element", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await hideAllAdornerActions();
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

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
    await hideAllAdornerActions();
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

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
    await hideAllAdornerActions();
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

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
    await hideAllAdornerActions();
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await t.resizeWindow(2560, 1440);
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

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
    await hideAllAdornerActions();
    await t.resizeWindow(2560, 1440);

    const json = {
      showQuestionNumbers: "on",
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
    await hideAllAdornerActions();
    await t.resizeWindow(2560, 1440);

    const json = {
      showQuestionNumbers: "on",
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
    await hideAllAdornerActions();
    await t.resizeWindow(2560, 1440);

    const json = {
      showQuestionNumbers: "on",
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
    await hideAllAdornerActions();
    await t.resizeWindow(390, 844);

    const json = {
      showQuestionNumbers: "on",
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
  await hideAllAdornerActions();
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(390, 844);

    const json = {
      showQuestionNumbers: "on",
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
    await hideAllAdornerActions();
    await t.resizeWindow(390, 844);

    const json = {
      showQuestionNumbers: "on",
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
    await hideAllAdornerActions();
    await t.resizeWindow(2560, 1440);

    const patchMatrixDragDropToDisableDrop = ClientFunction(() => {
      const matrix = window["creator"].designerPropertyGrid.survey.getAllQuestions().filter((q) => q.name === "choices")[0];
      matrix.dragDropMatrixRows.drop = () => { };
      matrix.dragDropMatrixRows.domAdapter.drop = () => { };
    });

    const json = {
      showQuestionNumbers: "on",
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
      showQuestionNumbers: "on",
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
      .click(getPropertyGridCategory("General"))
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
    await hideAllAdornerActions();
    await t.resizeWindow(2560, 1440);

    const json = {
      showQuestionNumbers: "on",
      pages: [
        {
          name: "page1",
          elements: [
            {
              "type": "imagepicker",
              "name": "question1",
              "choices": [
                {
                  "value": "up",
                  "imageLink": upArrowImageLink
                },
                {
                  "value": "giraffe",
                  "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                },
                {
                  "value": "down",
                  "imageLink": downArrowImageLink
                },
                {
                  "value": "left",
                  "imageLink": leftArrowImageLink
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
    await hideAllAdornerActions();
    changeToolboxScrolling(false);
    await explicitErrorHandler();
    await t.resizeWindow(2584, 1440);

    const json = {
      showQuestionNumbers: "on",
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
    await hideAllAdornerActions();
    await explicitErrorHandler();
    await t.resizeWindow(832, 600);
    await setShowAddQuestionButton(false);

    const json = {
      showQuestionNumbers: "on",
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

test("Drag Drop inside panel dynamic top indicator", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await hideAllAdornerActions();
    await explicitErrorHandler();
    await t.resizeWindow(832, 600);

    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "paneldynamic",
              "name": "question1",
              "templateElements": [
                {
                  "type": "text",
                  "name": "question2"
                }
              ]
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

    await setClass(1, "drag-over-top");
    await takeElementScreenshot("drag-drop-inside-panel-dynamic-top.png", Page1, t, comparer);
    await setClass(1, "drag-over-top", "remove");
  });
});

test("Toolbox Custom Component Icon", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await hideAllAdornerActions();
    await t.resizeWindow(2560, 1440);

    const changeIconRatingForToolbox = ClientFunction((iconName) => {
      window["creator"].toolbox.getItemByName("rating").iconName = iconName;
    });

    const json = {
      showQuestionNumbers: "on",
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
    await hideAllAdornerActions();
    await t.resizeWindow(1000, 500);

    const json = {
      showQuestionNumbers: "on",
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

test("Drag Drop to collapsed panel", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await ClientFunction(() => {
      window["creator"].expandCollapseButtonVisibility = "onhover";
      window["creator"].expandOnDragTimeOut = 1000000;
      document.head.insertAdjacentHTML("beforeend", "<style>*, ::after, ::before { animation: initial!important; }</style>");
    })();

    await t.resizeWindow(1600, 1000);
    const json = {
      showQuestionNumbers: "on",
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
    const Panel = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");
    await t.hover(Panel, { offsetX: 5, offsetY: 5 });
    await t.click(qCollapseButton.filterVisible());

    const toolboxToolAction = Selector(".svc-toolbox__tool > .sv-action__content");
    await t
      .hover(toolboxToolAction)
      .dispatchEvent(toolboxToolAction, "pointerdown")
      .hover(Panel);
    await takeElementScreenshot("drag-drop-in-collapsed-panel.png", Selector(".svc-page__content"), t, comparer);
  });
});

test("Drag Drop to collapsed page", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => {
      window["creator"].expandCollapseButtonVisibility = "onhover";
      window["creator"].expandOnDragTimeOut = 1000000;
      document.head.insertAdjacentHTML("beforeend", "<style>*, ::after, ::before { animation: initial!important; }</style>");
    })();
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await t.resizeWindow(1652, 500);
    const json = {
      showQuestionNumbers: "on",
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
    const qCollapseButton = Selector(".svc-page__content #collapse");
    const Page = Selector(".svc-page");
    await t.hover(Page, { offsetX: 5, offsetY: 5 });
    await t.click(qCollapseButton.filterVisible());

    const toolboxToolAction = Selector(".svc-toolbox__tool > .sv-action__content");
    await t
      .hover(toolboxToolAction)
      .dispatchEvent(toolboxToolAction, "pointerdown")
      .hover(Page);
    await takeElementScreenshot("drag-drop-in-collapsed-page.png", ".svc-tab-designer_content", t, comparer);
  });
});

fixture`DragDrop custom widget Screenshot`.page`${url}`.beforeEach(async (t) => {
});

test("Drag indicator for custom widget", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => {
      const widget = {
        name: "peoplepicker",
        title: "People Picker",
        iconName: "search",
        widgetIsLoaded: function () { return true; },
        isFit: function (question) { return question.getType() === "peoplepicker"; },
        activatedByChanged: function (activatedBy) { window["Survey"].Serializer.addClass("peoplepicker", [], null, "empty"); },
        isDefaultRender: false,
        htmlTemplate: `
                  <div>
                    <label class="dds-search">
                    <input type="text" placeholder="Search by name or email" value="">
                    </label>
                  </div>
                `,
        afterRender: (question, element) => {
          const input = element.getElementsByTagName("input")[0];
          input.style.width = "100%";
          input.style.padding = "8px auto";
        },
      };

      window["Survey"].CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");

      const widgetTemplateForKo = document.createElement("script");
      widgetTemplateForKo.setAttribute("id", "survey-widget-peoplepicker");
      widgetTemplateForKo.setAttribute("type", "text/html");
      widgetTemplateForKo.innerHTML = `
                  <div>
                    <label class="dds-search">
                    <input type="text" placeholder="Search by name or email" value="">
                    </label>
                  </div>
                `;
      document.body.appendChild(widgetTemplateForKo);
    })();
    await hideAllAdornerActions();
    await t.resizeWindow(1252, 900);
    await setShowAddQuestionButton(false);

    const json = {
      showQuestionNumbers: "on",
      elements: [{ type: "peoplepicker", name: "q1" }, { type: "peoplepicker", name: "q2" }]
    };
    await setJSON(json);

    await patchDragDropToDisableDrop();

    const q1 = Selector("[data-sv-drop-target-survey-element='q1']");
    await t
      .hover(RatingToolboxItem)
      .dragToElement(RatingToolboxItem, q1, { speed: 0.5, offsetX: 100, offsetY: 10 });

    await takeElementScreenshot("drag-drop-over-custom-widget.png", Selector(".svc-page").nth(0), t, comparer);
  });
});

test("Drag Drop Indicator: Inside Panel: Rows", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await hideAllAdornerActions();
    await t.resizeWindow(1000, 500);

    const json = {
      showQuestionNumbers: "on",
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
                  "name": "question2",
                  "startWithNewLine": false
                }
              ]
            }
          ]
        }
      ]
    };
    await setJSON(json);

    await patchDragDropToDisableDrop();

    const panelRow = Selector(".sd-row__panel");
    const CheckboxItem = Selector("[aria-label='Checkboxes']");
    await t
      .hover(CheckboxItem)
      .dragToElement(CheckboxItem, panelRow, { speed: 0.5, destinationOffsetY: 0, destinationOffsetX: 50 });

    await takeElementScreenshot("drag-drop-indicator-inside-panel-rows.png", Selector(".svc-question__content--panel"), t, comparer);
  });
});

test("Huge shortcut text", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
      showQuestionNumbers: "on", pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }] }]
    });
    await t.resizeWindow(2560, 1440);

    const patchDragDropToShowGhostElementAfterDrop = ClientFunction(() => {
      window["creator"].dragDropSurveyElements.removeGhostElementFromSurvey = () => { };
      window["creator"].dragDropSurveyElements.domAdapter.drop = () => { };
      window["creator"].dragDropSurveyElements.domAdapter.clear = () => { };
    });

    await patchDragDropToShowGhostElementAfterDrop();

    const q1 = Selector("[data-sv-drop-target-survey-element='q1']");
    await t
      .hover(q1.find(".svc-question__drag-element"), { speed: 0.1 })
      .dragToElement(q1.find(".svc-question__drag-element"), q1, { speed: 0.1, offsetX: 10, offsetY: 10 });

    await takeElementScreenshot("drag-drop-huge-shortcut-text.png", Selector(".svc-page").nth(0), t, comparer);
  });
});
