import { test, expect } from "@playwright/test";
import { url, setJSON, hideAllAdornerActions, getPropertyGridCategory, changeToolboxScrolling, explicitErrorHandler, resetHoverToCreator, getPagesLength, setShowAddQuestionButton, setAllowEditSurveyTitle, upArrowImageLink, downArrowImageLink, leftArrowImageLink, compareScreenshot, doDrag, doDragDrop } from "./helper";

const title = "DragDrop Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Ghost Survey Element", async ({ page }) => {
    await hideAllAdornerActions(page);
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

    const ghostPage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']");
    const ratingToolboxItem = page.locator("[aria-label='Rating Scale']");
    await doDrag({ page, element: ratingToolboxItem, target: ghostPage });

    await compareScreenshot(page, page.locator(".svc-page--drag-over-empty"), "drag-drop-survey-element-ghost.png");
  });

  test("Empty page", async ({ page }) => {
    await hideAllAdornerActions(page);
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

    const emptyPage = page.locator("[data-sv-drop-target-survey-element='page1']");
    const ratingToolboxItem = page.locator("[aria-label='Rating Scale']");
    await doDrag({ page, element: ratingToolboxItem, target: emptyPage });

    await compareScreenshot(page, page.locator(".svc-question__content--drag-over-inside"), "drag-drop-survey-element-empty-page.png");
  });

  test("Ghost Survey Element after several drops", async ({ page }) => {
    await hideAllAdornerActions(page);
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

    const emptyPage = page.locator("[data-sv-drop-target-survey-element='page1']");
    const newGhostPagePage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']");
    const ratingToolboxItem = page.locator("[aria-label='Rating Scale']");

    await doDragDrop({ page, element: ratingToolboxItem, target: emptyPage });
    let pagesLength = await page.evaluate(() => (window as any).creator.survey.pages.length);
    expect(pagesLength).toBe(1);

    await ratingToolboxItem.hover();
    await ratingToolboxItem.dragTo(newGhostPagePage, { force: true });
    pagesLength = await page.evaluate(() => (window as any).creator.survey.pages.length);
    expect(pagesLength).toBe(2);

    await ratingToolboxItem.hover();
    await ratingToolboxItem.dragTo(newGhostPagePage, { force: true });
    pagesLength = await page.evaluate(() => (window as any).creator.survey.pages.length);
    expect(pagesLength).toBe(3);

    await ratingToolboxItem.hover();
    await ratingToolboxItem.dragTo(newGhostPagePage, { force: true });

    await compareScreenshot(page, page.locator(".svc-page--drag-over-empty"), "drag-drop-survey-element-ghost-page-4.png");
  });

  test("Toolbox Item State After Drag", async ({ page }) => {
    await hideAllAdornerActions(page);
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });

    const emptyPage = page.locator("[data-sv-drop-target-survey-element='page1']");
    const ratingToolboxItem = page.locator("[aria-label='Rating Scale']");
    await doDragDrop({ page, element: ratingToolboxItem, target: emptyPage });
    await resetHoverToCreator(page);

    await compareScreenshot(page, ratingToolboxItem, "toolbox-item-state-after-drag.png");
  });

  test("Empty Panel Styles", async ({ page }) => {
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 2560, height: 1440 });

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
    await setJSON(page, json);

    const panel = page.locator("[data-sv-drop-target-survey-element=\"panel1\"]");
    const ratingToolboxItem = page.locator("[aria-label='Rating Scale']");
    await doDrag({ page, element: ratingToolboxItem, target: panel });

    await compareScreenshot(page, panel, "drag-drop-survey-element-empty-panel.png");
  });

  test("Empty Panel Dynamic Styles", async ({ page }) => {
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 2560, height: 1440 });

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
    await setJSON(page, json);

    const panelDynamic = page.locator("[data-sv-drop-target-survey-element=\"question1\"]");
    const ratingToolboxItem = page.locator("[aria-label='Rating Scale']");
    await doDrag({ page, element: ratingToolboxItem, target: panelDynamic });

    await compareScreenshot(page, panelDynamic, "drag-drop-survey-element-empty-panel-dynamic.png");
  });

  test("Choices: Ranking", async ({ page }) => {
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 2560, height: 1440 });

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
    await setJSON(page, json);

    const qRoot = page.locator(".svc-question__adorner .sd-question__content").first();
    const firstItem = qRoot.locator(".svc-item-value-wrapper").first();

    await compareScreenshot(page, qRoot, "drag-drop-item-values-ranking.png");

    await firstItem.hover();
    await compareScreenshot(page, qRoot, "drag-drop-item-values-ranking--hover.png");

    await doDrag({ page, element: firstItem.locator(".svc-item-value-controls__drag"), target: firstItem });

    await page.waitForTimeout(500);
    await compareScreenshot(page, qRoot, "drag-drop-item-values-ranking--dragging.png");
  });

  test("Choices: Mobile", async ({ page }) => {
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 390, height: 844 });

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
    await setJSON(page, json);

    const row = page.locator(".sd-row").first();
    await compareScreenshot(page, row, "drag-drop-item-values--mobile.png");
  });

  test("Choices: Ranking: Mobile", async ({ page }) => {
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 390, height: 844 });

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
    await setJSON(page, json);

    const row = page.locator(".sd-row").first();
    await compareScreenshot(page, row, "drag-drop-item-values-ranking--mobile.png");
  });

  test("Choices: DropDown: Mobile", async ({ page }) => {
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 390, height: 844 });

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
    await setJSON(page, json);

    const row = page.locator(".sd-row").first();
    await compareScreenshot(page, row, "drag-drop-item-values-dropdown--mobile.png");
  });

  test("Matrix: Property Grid: Choices", async ({ page }) => {
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 2560, height: 1440 });

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
    await setJSON(page, json);

    await page.locator("[data-name=\"question1\"]").click();
    await getPropertyGridCategory(page, "Choice Options").click();

    const item1 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0);
    const item2 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1);
    const item3 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(2);

    const dragZoneItem2 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1).locator(".spg-drag-element__svg");

    await item1.hover();
    await item2.hover();
    await item3.hover();
    await dragZoneItem2.hover();
    await dragZoneItem2.dragTo(item1, {
      targetPosition: { x: 20, y: 20 },
      force: true
    });

    await compareScreenshot(page, page.locator("[data-name=\"choices\"]"), "drag-drop-matrix-pg-choices.png");
  });

  test("Matrix: Property Grid: Choices: Scroll", async ({ page }) => {
    await page.setViewportSize({ width: 1500, height: 500 });

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
    await setJSON(page, json);

    await page.locator("[data-name=\"question1\"]").click();
    await getPropertyGridCategory(page, "General").click();
    await getPropertyGridCategory(page, "Choice Options").click();

    const item1 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0);
    const item2 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1);
    const item3 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(2);

    const dragZoneItem2 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1).locator(".spg-drag-element__svg");
    await dragZoneItem2.dragTo(dragZoneItem2, { targetPosition: { x: -1, y: 0 }, force: true });

    await compareScreenshot(page, page.locator("[data-name=\"choices\"]"), "drag-drop-matrix-pg-choices-scroll.png");
  });

  test("Drag Drop ImagePicker (choices) drop to invalid area", async ({ page }) => {
    await explicitErrorHandler(page);
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 2560, height: 1440 });

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
    await setJSON(page, json);

    const question1 = page.locator("[data-name=\"question1\"]");
    const giraffeItem = page.locator("[data-sv-drop-target-item-value=\"giraffe\"]");
    const surveyTitle = page.locator("[aria-placeholder='Survey Title']");

    const dragZoneGiraffeItem = giraffeItem.locator(".svc-image-item-value-controls__drag-area-indicator").first();

    await question1.click();
    await giraffeItem.hover();
    await doDrag({ page, element: dragZoneGiraffeItem, target: surveyTitle });

    await page.waitForTimeout(1000);
    await resetHoverToCreator(page);

    await compareScreenshot(page, giraffeItem, "drag-drop-image-picker-invalid-drop-area.png");
  });

  test("Drag Drop to Multiline from Toolbox", async ({ page }) => {
    await hideAllAdornerActions(page);
    await changeToolboxScrolling(page, false);
    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 2584, height: 1440 });

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
    await setJSON(page, json);

    const question2 = page.locator("[data-name=\"question2\"]");
    const question4 = page.locator("[data-name=\"question4\"]");
    const page1 = page.locator("[data-sv-drop-target-survey-element='page1']");
    const ratingToolboxItem = page.locator("[aria-label='Rating Scale']");

    await ratingToolboxItem.hover();
    await ratingToolboxItem.dragTo(question2, { targetPosition: { x: -1, y: 0 }, force: true });
    await question4.hover();
    await compareScreenshot(page, page1, "drag-drop-to-multiline-from-toolbox.png");
  });

  test("Drag Drop to Multiline styles", async ({ page }) => {
    await hideAllAdornerActions(page);
    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 832, height: 600 });
    await setShowAddQuestionButton(page, false);

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
    await setJSON(page, json);

    const page1 = page.locator("[data-sv-drop-target-survey-element='page1']");

    async function setClass(idx: number, suffix: string, remove: "add" | "remove" = "add") {
      await page.evaluate(([idx, suffix, remove]) => {
        const el = document.querySelectorAll(".svc-question__content")[idx];
        if (remove != "remove") {
          el.classList.add("svc-question__content--" + suffix);
        } else {
          el.classList.remove("svc-question__content--" + suffix);
        }
      }, [idx, suffix, remove]);
    }

    await setClass(0, "drag-over-left");
    await compareScreenshot(page, page1, "drag-drop-to-multiline-start.png");
    await setClass(0, "drag-over-left", "remove");

    await setClass(0, "drag-over-right");
    await compareScreenshot(page, page1, "drag-drop-to-multiline-middle-1.png");
    await setClass(0, "drag-over-right", "remove");

    await setClass(1, "drag-over-left");
    await compareScreenshot(page, page1, "drag-drop-to-multiline-middle-2.png");
    await setClass(1, "drag-over-left", "remove");

    await setClass(1, "drag-over-right");
    await compareScreenshot(page, page1, "drag-drop-to-multiline-end.png");
    await setClass(1, "drag-over-right", "remove");
  });

  test("Drag Drop inside panel dynamic top indicator", async ({ page }) => {
    await hideAllAdornerActions(page);
    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 832, height: 600 });

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
    await setJSON(page, json);

    const page1 = page.locator("[data-sv-drop-target-survey-element='page1']");

    async function setClass(idx: number, suffix: string, remove: "add" | "remove" = "add") {
      await page.evaluate(([idx, suffix, remove]) => {
        const el = document.querySelectorAll(".svc-question__content")[idx];
        if (remove != "remove") {
          el.classList.add("svc-question__content--" + suffix);
        } else {
          el.classList.remove("svc-question__content--" + suffix);
        }
      }, [idx, suffix, remove]);
    }

    await page.waitForTimeout(500);
    await setClass(1, "drag-over-top");
    await compareScreenshot(page, page1, "drag-drop-inside-panel-dynamic-top.png");
    await setClass(1, "drag-over-top", "remove");
  });

  test("Toolbox Custom Component Icon", async ({ page }) => {
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 2560, height: 1440 });

    await page.evaluate((iconName) => {
      window["creator"].toolbox.getItemByName("rating").iconName = iconName;
    }, "icon-modernbooleancheckchecked");

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
    await setJSON(page, json);

    const panel = page.locator("[data-sv-drop-target-survey-element=\"panel1\"]");
    const ratingToolboxItem = page.locator("[aria-label='Rating Scale']");
    await doDrag({ page, element: ratingToolboxItem, target: panel });

    await compareScreenshot(page, panel, "drag-drop-toolbox-custom-component-icon.png");

    await page.evaluate(() => {
      window["creator"].toolbox.getItemByName("rating").iconName = "icon-rating";
    });
  });

  test("Drag Drop (choices): scroll", async ({ page }) => {
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 1000, height: 500 });

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
    await setJSON(page, json);

    const newGhostPagePage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']");
    const checkboxItem = page.locator("[aria-label='Checkboxes']");
    await doDrag({ page, element: checkboxItem, target: newGhostPagePage,
    });

    await compareScreenshot(page, newGhostPagePage, "drag-drop-scroll.png");
  });

  test("Drag Drop to collapsed panel", async ({ page }) => {
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await page.evaluate(() => {
      window["creator"].expandCollapseButtonVisibility = "onhover";
      window["creator"].expandOnDragTimeOut = 1000000;
      document.head.insertAdjacentHTML("beforeend", "<style>*, ::after, ::before { animation: initial!important; }</style>");
    });

    await page.setViewportSize({ width: 1600, height: 1000 });
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
    await setJSON(page, json);

    const qCollapseButton = page.locator(".svc-question__content #collapse");
    const panel = page.locator("[data-sv-drop-target-survey-element=\"panel1\"]");
    await panel.hover({ position: { x: 5, y: 5 } });
    await qCollapseButton.first().click();

    const toolboxToolAction = page.locator(".svc-toolbox__tool > .sv-action__content");
    await toolboxToolAction.hover();
    await toolboxToolAction.dispatchEvent("pointerdown");
    await panel.hover();
    await compareScreenshot(page, page.locator(".svc-page__content"), "drag-drop-in-collapsed-panel.png");
  });

  test("Drag Drop to collapsed page", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].expandCollapseButtonVisibility = "onhover";
      window["creator"].expandOnDragTimeOut = 1000000;
      document.head.insertAdjacentHTML("beforeend", "<style>*, ::after, ::before { animation: initial!important; }</style>");
    });
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await page.setViewportSize({ width: 1652, height: 500 });

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
    await setJSON(page, json);

    const qCollapseButton = page.locator(".svc-page__content #collapse");
    const pageElement = page.locator(".svc-page");
    await pageElement.hover({ position: { x: 5, y: 5 } });
    await qCollapseButton.first().click();

    const toolboxToolAction = page.locator(".svc-toolbox__tool > .sv-action__content");
    await toolboxToolAction.hover();
    await toolboxToolAction.dispatchEvent("pointerdown");
    await pageElement.hover();
    await compareScreenshot(page, page.locator(".svc-tab-designer_content"), "drag-drop-in-collapsed-page.png");
  });
});

test.describe("DragDrop custom widget Screenshot", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Drag indicator for custom widget", async ({ page }) => {
    await page.evaluate(() => {
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
          input.style.boxSizing = "content-box";
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
    });

    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 1252, height: 900 });
    await setShowAddQuestionButton(page, false);

    const json = {
      showQuestionNumbers: "on",
      elements: [{ type: "peoplepicker", name: "q1" }, { type: "peoplepicker", name: "q2" }]
    };
    await setJSON(page, json);

    const q1 = page.locator("[data-sv-drop-target-survey-element='q1']");
    const ratingToolboxItem = page.locator("[aria-label='Rating Scale']");
    await doDrag({ page, element: ratingToolboxItem, target: q1 });

    await compareScreenshot(page, page.locator(".svc-page").first(), "drag-drop-over-custom-widget.png");
  });

  test("Drag Drop Indicator: Inside Panel: Rows", async ({ page }) => {
    await hideAllAdornerActions(page);
    await page.setViewportSize({ width: 1000, height: 500 });

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
    await setJSON(page, json);

    const panelRow = page.locator(".sd-row__panel");
    const checkboxItem = page.locator("[aria-label='Checkboxes']");

    await checkboxItem.hover();
    await checkboxItem.dragTo(panelRow, { targetPosition: { x: 50, y: 0 }, force: true });

    await compareScreenshot(page, page.locator(".svc-question__content--panel"), "drag-drop-indicator-inside-panel-rows.png");
  });

  test("Huge shortcut text", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }] }]
    });
    await page.setViewportSize({ width: 2560, height: 1440 });

    const q1 = page.locator("[data-sv-drop-target-survey-element='q1']");
    await doDrag({ page, element: q1.locator(".svc-question__drag-element"), target: q1 });

    await compareScreenshot(page, page.locator(".svc-page").first(), "drag-drop-huge-shortcut-text.png");
  });
});
