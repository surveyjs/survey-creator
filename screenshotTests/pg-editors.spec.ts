import { test, expect } from "playwright/test";
import { url, setJSON, getPropertyGridCategory, generalGroupName, addQuestionByAddQuestionButton, resetHoverToCreator, surveySettingsButtonSelector, inputMaskSettingsGroupName, getListItemByText, getQuestionBarItemByTitle, setShowToolbox, setShowAddQuestionButton, setAllowEditSurveyTitle, getAddNewQuestionButton, compareScreenshot, doDragDrop, setIsCompact, resetFocusToBody } from "./helper";

const title = "Property Grid Editors";
test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Properties on the same line", async ({ page }) => {
    const json = {
      showQuestionNumbers: true,
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "inputType": "number"
        }
      ]
    };
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.evaluate(() => {
      const qDef = window["SurveyCreatorCore"].SurveyQuestionEditorDefinition.definition.text;
      const props = qDef.properties;
      props.splice(0, 1, { name: "inputType", tab: "Input" });
      props.splice(1, 1, { name: "min", tab: "Input" });
      props.splice(2, 1, { name: "max", tab: "Input" });
      qDef.tabs = [{ name: "Input", index: 1 }];
    });
    await setJSON(page, json);

    const question1 = page.locator("[data-name=\"question1\"]");

    await question1.click();
    await page.keyboard.press("Enter");
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Input").click();
    await expect(page.locator("span").filter({ hasText: "Min" })).toBeVisible();
    await expect(page.locator(".spg-panel__content").filter({ hasText: "" })).toBeVisible();

    await compareScreenshot(page, page.locator(".spg-panel__content").filter({ hasText: "" }), "properties-on-one-line-narrow.png");

    const westResizer = page.locator(".svc-resizer-west");
    await doDragDrop({ page,
      element: westResizer,
      target: westResizer,
      options: { targetPosition: { x: -50, y: 0 } }
    });
    await compareScreenshot(page, page.locator(".spg-panel__content").filter({ hasText: "" }), "properties-on-one-line.png");

    await page.locator(".spg-panel__content .spg-question__title").filter({ hasText: "Max" }).click();
    await compareScreenshot(page, page.locator(".spg-panel__content").filter({ hasText: "" }), "properties-on-one-line-focus.png");
  });

  test("Properties on the same line (date)", async ({ page }) => {
    const json = {
      showQuestionNumbers: true,
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "inputType": "date"
        }
      ]
    };
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.evaluate(() => {
      const qDef = window["SurveyCreatorCore"].SurveyQuestionEditorDefinition.definition.text;
      const props = qDef.properties;
      props.splice(0, 1, { name: "inputType", tab: "Input" });
      props.splice(1, 1, { name: "min", tab: "Input" });
      props.splice(2, 1, { name: "max", tab: "Input" });
      qDef.tabs = [{ name: "Input", index: 1 }];
    });
    await setJSON(page, json);

    const question1 = page.locator("[data-name=\"question1\"]");

    await question1.click({ position: { x: 20, y: 20 } });
    await page.keyboard.press("Enter");
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Input").click();
    await expect(page.locator("span").filter({ hasText: "Min" })).toBeVisible();
    await expect(page.locator(".spg-panel__content").filter({ hasText: "" })).toBeVisible();

    await compareScreenshot(page, page.locator(".spg-panel__content").filter({ hasText: "" }), "properties-on-one-line-narrow-date.png");

    let westResizer = page.locator(".svc-resizer-west");
    await doDragDrop({ page,
      element: westResizer,
      target: westResizer,
      options: { targetPosition: { x: -60, y: 0 } }
    });
    await compareScreenshot(page, page.locator(".spg-panel__content").filter({ hasText: "" }), "properties-on-one-line-date.png");

    await page.locator(".spg-panel__content .spg-question__title").filter({ hasText: "Max" }).click();
    await compareScreenshot(page, page.locator(".spg-panel__content").filter({ hasText: "" }), "properties-on-one-line-focus-date.png");
  });

  test("Values editors, keep them close", async ({ page }) => {
    await page.setViewportSize({ width: 1560, height: 1440 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "elements": [{ "type": "text", "name": "question1" }]
    });

    const question1 = page.locator("[data-name=\"question1\"]");

    await question1.click();
    await page.keyboard.press("Enter");
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Data").click();
    await expect(page.locator(".spg-panel__content").filter({ hasText: "" })).toBeVisible();

    await compareScreenshot(page, page.locator(".spg-panel__content").filter({ hasText: "" }), "properties-data-tab.png");
  });

  test("Check default value editor", async ({ page }) => {
    const json = {
      showQuestionNumbers: true,
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "defaultValue": "default"
        }
      ]
    };
    await page.setViewportSize({ width: 1560, height: 1440 });
    await setJSON(page, json);

    const question1 = page.locator("[data-name=\"question1\"]");

    await question1.click();
    await page.keyboard.press("Enter");
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Data").click();
    const questionSelector = page.locator("div[data-name='defaultValue']");

    await compareScreenshot(page, questionSelector, "default-value-clear-button.png");
    await page.evaluate(() => { (<HTMLElement>document.querySelector("div[data-name='defaultValue'] .svc-question-link__clear-button"))?.focus(); });
    await compareScreenshot(page, questionSelector, "default-value-clear-button-focus.png");
  });

  test("Default value popup", async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 870 });
    await getAddNewQuestionButton(page).click();
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Data").click();
    await page.locator(".svc-action-button.svc-question-link__set-button").filter({ hasText: "Set Default Answer" }).click();
    await compareScreenshot(page, page.locator(".sv-popup.svc-property-editor.sv-popup--modal-popup .sv-popup__container"), "pg-default-value-popup.png");
  });

  test("Custom button into fast entry popup", async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 870 });
    await page.evaluate(() => {
      (<any>window).creator.onPropertyGridShowModal.add((sender, options) => {
        const editor = options.popupEditor;
        options.popupModel.footerToolbar.addAction({
          id: "fast-entry-custom",
          innerCss: "sv-popup__body-footer-item sv-popup__button",
          title: "Set Items",
          visibleIndex: 1,
          action: () => {
            editor.comment.value = "1|Item 1\n2|Item 2\n3|Item 3";
          }
        });
      });
    });
    await setIsCompact(page, false);
    await setJSON(page, { "elements": [{ "type": "dropdown", "name": "question1", "choices": ["Item 1", "Item 2", "Item 3"] }] });
    const question1 = page.locator("[data-name=\"question1\"]");
    await question1.click();
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Choice Options").click();
    await page.locator(".spg-action-button").filter({ hasText: "Edit" }).first().click();
    await compareScreenshot(page, page.locator(".sv-popup.svc-property-editor.sv-popup--modal-popup .sv-popup__container"), "pg-choices-fast-entry-popup.png");
  });

  test("Logic popup", async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 870 });
    await getAddNewQuestionButton(page).click();
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Conditions").click();
    await page.locator(".spg-panel__content div[data-name='visibleIf'] button").filter({ hasText: "Edit" }).click();
    await compareScreenshot(page, page.locator(".sv-popup.svc-property-editor.sv-popup--modal-popup .sv-popup__container"), "pg-logic-popup.png");
  });

  test("Logic popup with boolean question", async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 870 });

    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question2",
              "visibleIf": "{question1} = true",
              "enableIf": "{question3} = 1"
            },
            {
              "type": "rating",
              "name": "question3",
              "rateCount": 20,
              "rateMax": 20
            },
            {
              "type": "boolean",
              "name": "question1"
            }
          ]
        }
      ],
      "showQuestionNumbers": "off"
    });

    await page.locator(".svc-question__content .sd-question__title").first().click();
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Conditions").click();
    await page.locator(".spg-panel__content div[data-name='visibleIf'] button").filter({ hasText: "Edit" }).click();
    await page.locator(".sd-boolean--checked").click();
    await compareScreenshot(page, page.locator(".sv-popup.svc-property-editor.sv-popup--modal-popup .sv-popup__container"), "pg-logic-popup-boolean.png");
    await page.locator("button").filter({ hasText: "Cancel" }).first().click();
    await page.waitForTimeout(1000);
    await page.locator(".spg-panel__content div[data-name='enableIf'] button").filter({ hasText: "Edit" }).click();
    await compareScreenshot(page, page.locator(".sv-popup.svc-property-editor.sv-popup--modal-popup .sv-popup__container"), "pg-logic-popup-rating.png");
  });

  test("Logic popup mobile", async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 870 });
    await getAddNewQuestionButton(page).click();
    await page.setViewportSize({ width: 500, height: 870 });
    await getQuestionBarItemByTitle(page, "Open settings").click();
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Conditions").click();
    await page.locator(".spg-panel__content div[data-name='visibleIf'] button").filter({ hasText: "Edit" }).click();
    await compareScreenshot(page, page.locator(".sv-popup.svc-property-editor.sv-popup--modal-overlay"), "pg-logic-popup-mobile.png");
  });

  test("Property grid checkbox - all states", async ({ page }) => {
    await page.evaluate(() => window["creator"].currentPlugin.propertyGrid.searchEnabled = false);
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setJSON(page, {});

    const setCheckboxProperty = async (prop, value) => {
      await page.evaluate(([prop, value]) => {
        window["creator"].designerPropertyGrid.survey.getQuestionByName("showTitle")[prop] = value;
      }, [prop, value]);
    };

    const checkbox = page.locator("[data-name=\"showTitle\"] .spg-checkbox");

    await getPropertyGridCategory(page, generalGroupName).click();

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", false);
    await compareScreenshot(page, checkbox, "pg-checkbox-unchecked.png");

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", false);
    await compareScreenshot(page, checkbox, "pg-checkbox-checked.png");

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", true);
    await compareScreenshot(page, checkbox, "pg-checkbox-unchecked-readonly.png");

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", true);
    await compareScreenshot(page, checkbox, "pg-checkbox-checked-readonly.png");

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", false);
    await checkbox.locator(".spg-checkbox__caption").hover();
    await compareScreenshot(page, checkbox, "pg-checkbox-unchecked-hover.png");

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", false);
    await checkbox.locator(".spg-checkbox__caption").hover();
    await compareScreenshot(page, checkbox, "pg-checkbox-checked-hover.png");

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", false);
    await checkbox.click();
    await page.locator(".sv-string-viewer").filter({ hasText: "Make the title and description visible" }).hover();
    await compareScreenshot(page, checkbox, "pg-checkbox-unchecked-focused.png");

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", false);
    await checkbox.click();
    await page.locator(".sv-string-viewer").filter({ hasText: "Make the title and description visible" }).hover();
    await compareScreenshot(page, checkbox, "pg-checkbox-checked-focused.png");

    await resetFocusToBody(page);
    await setCheckboxProperty("title", "Very very very very very very very very very very long checkbox caption");
    await compareScreenshot(page, checkbox, "pg-checkbox-long-caption.png");
  });

  test("Property grid input all states", async ({ page }) => {
    await page.evaluate(() => window["creator"].currentPlugin.propertyGrid.searchEnabled = false);
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setJSON(page, {});
    const setInputProperty = async (prop, value) => {
      await page.evaluate(([prop, value]) => {
        window["creator"].designerPropertyGrid.survey.getQuestionByName("title")[prop] = value;
      }, [prop, value]);
    };

    const input = page.locator("[data-name=\"title\"] .spg-input");
    await getPropertyGridCategory(page, generalGroupName).click();

    await compareScreenshot(page, input, "pg-input-default.png");

    await setInputProperty("value", "Cool title");
    await compareScreenshot(page, input, "pg-input-with-value.png");

    await input.click();
    await compareScreenshot(page, input, "pg-input-focused.png");

    await setInputProperty("readOnly", true);
    await compareScreenshot(page, input, "pg-input-readonly.png");
  });

  test("Dropdown popup in property grid", async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 870 });
    await setJSON(page, { "elements": [{ "type": "text", "name": "question1" }] });
    const question1 = page.locator("[data-name=\"question1\"]");
    await question1.click();

    await page.locator("div[data-name='inputType'] .spg-dropdown").click();
    await compareScreenshot(page, page.locator(".svc-side-bar"), "pg-dropdown-editor.png");
  });

  test("rateValues in property grid", async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 870 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "rateType": "smileys",
          "autoGenerate": false,
          "rateValues": [1, 2, 3, 4, 5]
        }
      ]
    });
    await page.locator(".svc-question__adorner").click();
    await page.locator(".spg-panel__title").filter({ hasText: "Rating Values" }).click();

    await compareScreenshot(page, page.locator("div[data-name=rateValues]"), "pg-rate-values.png");
  });

  test("Check bindings question", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await addQuestionByAddQuestionButton(page, "Dynamic Matrix");
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Conditions").click();

    await compareScreenshot(page, page.locator(".spg-question[data-name='bindings']"), "bindings-editor.png");
  });

  test("Check triggers question", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await getPropertyGridCategory(page, "Conditions").click();
    await page.locator("div[data-name='triggers'] .spg-action-button--icon").nth(1).click();
    await compareScreenshot(page, page.locator("div[data-name='triggers']"), "triggers-editor.png");
    await page.evaluate(() => (<any>document).querySelector("[aria-label='row 1, column triggerType']").focus());
    await resetHoverToCreator(page);
    await compareScreenshot(page, page.locator("div[data-name='triggers']"), "triggers-editor-focused.png");
  });

  test("Check question with error", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await setJSON(page, { pages: [{ elements: [{ type: "text", name: "question1" }] }] });
    const question1 = page.locator("[data-name=\"question1\"]");
    await question1.click();
    const questionSelector = page.locator("div[data-name='name']");
    const inputElement = page.getByRole("textbox", { name: "Question name" });
    await inputElement.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Delete");
    await page.keyboard.press("Tab");
    await compareScreenshot(page, questionSelector, "pg-editor-errors.png");
  });

  test("Check color editor", async ({ page }) => {
    await page.evaluate(() => window["creator"].currentPlugin.propertyGrid.searchEnabled = false);
    await page.setViewportSize({ width: 1920, height: 920 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontColor",
        default: "#19B394",
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontColor";
        },
        getJSON: function (obj, prop, options) {
          return {
            type: "color", readOnly: true, choices: [{ text: "Contrast", value: "#673AB0" }, { text: "Plain", value: "673AB0" }, { text: "Simple", value: "#55B534" }],
          };
        }
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    const questionSelector = page.locator("div[data-name='fontColor']");
    await compareScreenshot(page, questionSelector, "color-editor-disabled.png");
    await page.evaluate(() => (window as any).creator.propertyGrid.getAllQuestions()[0].readOnly = false);
    await compareScreenshot(page, questionSelector, "color-editor.png");
    await questionSelector.locator(".spg-input__edit-button").hover();
    await compareScreenshot(page, questionSelector, "color-editor-button-hover.png");
    await questionSelector.locator(".spg-input__edit-button").click();
    await resetHoverToCreator(page);
    await compareScreenshot(page, page.locator(".sv-popup__container").filter({ visible: true }), "color-editor-choices.png");
    await page.keyboard.press("Escape");
    await questionSelector.locator(".spg-color-editor__input").click();
    await compareScreenshot(page, questionSelector, "color-editor-focus.png");
    await page.evaluate(() => {
      (<any>window).creator.propertyGrid.getQuestionByName("fontColor").titleLocation = "left";
    });
    await compareScreenshot(page, questionSelector, "color-editor-title-location-left-focus.png");
    await resetFocusToBody(page);
    await compareScreenshot(page, questionSelector, "color-editor-title-location-left.png");
  });

  test("Check color editor with empty value", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontColor",
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontColor";
        },
        getJSON: function (obj, prop, options) {
          return {
            type: "color", allowEmptyValue: true, choices: [{ text: "Contrast", value: "#673AB0" }],
          };
        }
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    const questionSelector = page.locator("div[data-name='fontColor']");
    await compareScreenshot(page, questionSelector, "color-editor-empty.png");
    await page.evaluate(() => (window as any).creator.propertyGrid.getAllQuestions()[0].readOnly = true);
    await compareScreenshot(page, questionSelector, "color-editor-empty-disabled.png");
  });

  test("Check spinedit editor", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontSize",
        default: 16,
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontSize";
        },
        getJSON: function (obj, prop, options) {
          return { type: "spinedit", unit: "px", readOnly: true, };
        }
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    const questionSelector = page.locator("div[data-name='fontSize']");
    await compareScreenshot(page, questionSelector, "spin-editor-disabled.png");
    await page.evaluate(() => (window as any).creator.propertyGrid.getAllQuestions()[0].readOnly = false);
    await compareScreenshot(page, questionSelector, "spin-editor.png");
    await questionSelector.locator(".spg-input__edit-button").first().hover();
    await compareScreenshot(page, questionSelector, "spin-editor-button-hover.png");
    await questionSelector.locator(".spg-spin-editor__input").click();
    await compareScreenshot(page, questionSelector, "spin-editor-focus.png");
    await page.evaluate(() => {
      (<any>window).creator.propertyGrid.getQuestionByName("fontSize").titleLocation = "left";
    });
    await compareScreenshot(page, questionSelector, "spin-editor-title-location-left-focus.png");
    await resetFocusToBody(page);
    await compareScreenshot(page, questionSelector, "spin-editor-title-location-left.png");
  });

  test("Check file editor", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "image",
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "image";
        },
        getJSON: function (obj, prop, options) {
          return { type: "fileedit", readOnly: true };
        }
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    const questionSelector = page.locator("div[data-name='image']");
    await compareScreenshot(page, questionSelector, "file-editor-disabled.png");
    await page.evaluate(() => (window as any).creator.propertyGrid.getAllQuestions()[0].readOnly = false);
    await compareScreenshot(page, questionSelector, "file-editor.png");
    await page.evaluate(() => {
      (<any>window).creator.propertyGrid.getQuestionByName("image").titleLocation = "left";
    });
    await compareScreenshot(page, questionSelector, "file-editor-title-location-left.png");
    await page.getByRole("textbox", { name: "Image" }).getByRole("textbox").click();
    await compareScreenshot(page, questionSelector, "file-editor-title-location-left-focus.png");
  });

  test("Check dropdown editor with titleLocation: 'left'", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontFamily",
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontFamily";
        },
        getJSON: function (obj, prop, options) {
          return { type: "dropdown", titleLocation: "left", choices: ["Item 1"] };
        }
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    const questionSelector = page.locator("div[data-name='fontFamily']");
    await compareScreenshot(page, questionSelector, "dropdown-editor-title-location-left.png");
    await questionSelector.locator("input").focus();
    await questionSelector.locator("input").click();
    await compareScreenshot(page, questionSelector, "dropdown-editor-title-location-left-focus.png");
  });

  test("Check overriding property editor", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: true,
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "boolean",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question2",
              "visibleIf": "{question1} = true"
            }
          ]
        }
      ]
    });
    await page.setViewportSize({ width: 1920, height: 1920 });
    await page.locator("div[data-sv-drop-target-survey-element='question2']").click({ position: { x: 200, y: 30 } });
    await compareScreenshot(page, page.locator(".spg-row--multiple"), "overriding-property-editor.png");
  });

  test("Check comment editor with reset button", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "test:text",
        default: "default",
        category: "general",
        visibleIndex: 0
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    const questionSelector = page.locator("div[data-name='test']");
    await compareScreenshot(page, questionSelector, "comment-with-reset-disabled-button.png");
    await questionSelector.locator("textarea").fill("value");
    await compareScreenshot(page, questionSelector, "comment-with-reset-enabled-button.png");
  });

  test("Check text editor with reset button", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "test",
        default: "default",
        category: "general",
        visibleIndex: 0
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    const questionSelector = page.locator("div[data-name='test']");
    await compareScreenshot(page, questionSelector, "text-with-reset-disabled-button.png");
    await questionSelector.locator("input").click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("value");
    await questionSelector.locator("input").click();
    await compareScreenshot(page, questionSelector, "text-with-reset-enabled-button.png");
  });

  test("Check accepted file types hint link", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: true,
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "file",
              "name": "question1"
            }
          ]
        }
      ]
    });
    await page.setViewportSize({ width: 1900, height: 1000 });
    await page.locator("div[data-sv-drop-target-survey-element='question1']").click({ position: { x: 200, y: 30 } });
    await page.locator("[data-name='acceptedTypes'] button").click();
    await compareScreenshot(page, page.locator("[data-name='acceptedTypes']"), "file-accepted-types-hint.png");
  });

  test("Check property grid panel' header states", async ({ page }) => {
    await setJSON(page, {});
    await page.setViewportSize({ width: 1920, height: 1920 });
    const headerSelector = page.getByRole("button", { name: generalGroupName }); //getPropertyGridCategory(page, generalGroupName).first();
    await headerSelector.click();
    await compareScreenshot(page, headerSelector, "pg-panel-header-expanded-focused.png");
    await page.keyboard.press("Tab");
    await compareScreenshot(page, headerSelector, "pg-panel-header-expanded.png");
    await headerSelector.click();
    await compareScreenshot(page, headerSelector, "pg-panel-header-collapsed-focused.png");
    await page.keyboard.press("Tab");
    await resetHoverToCreator(page);
    await compareScreenshot(page, headerSelector, "pg-panel-header-collapsed.png");
  });

  test("Dropdown input in property grid", async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 870 });

    await surveySettingsButtonSelector(page).click();
    await page.locator(".spg-question[data-name='locale'] .spg-dropdown").click();
    await page.keyboard.type("ali");

    await compareScreenshot(page, page.locator(".spg-question[data-name='locale'] .spg-dropdown"), "pg-dropdown-editor-input.png");
  });

  test("Dropdown clean button in property grid", async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 870 });
    const dropdownSelector = page.locator(".spg-question[data-name='locale'] .spg-dropdown");
    await surveySettingsButtonSelector(page).click();
    await dropdownSelector.click();
    await page.keyboard.type("Italiano");
    await page.keyboard.press("Enter");

    await compareScreenshot(page, dropdownSelector, "pg-dropdown-clean-button.png");
    await page.locator(".sd-editor-button-item").filter({ hasText: "Clear" }).hover();
    await compareScreenshot(page, dropdownSelector, "pg-dropdown-clean-button-hover.png");
  });

  test("Property grid checkbox with description", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      (window as any).SurveyCreatorCore.localization.getLocale("en").pehelp["visible"] = "Visible property's description";
    });
    await setJSON(page, {
      showQuestionNumbers: true,
      "pages": [
        {
          "name": "page1",
          "elements": [{ "type": "text", "name": "question1" }]
        }
      ]
    });
    await page.locator("div[data-sv-drop-target-survey-element='question1']").click({ position: { x: 200, y: 30 } });
    await compareScreenshot(page, page.locator("[data-name='visible']"), "pg-checkbox-hint.png");
    await page.locator("[data-name='visible'] .spg-action-button").click();
    await compareScreenshot(page, page.locator("[data-name='visible']"), "pg-checkbox-hint-opened.png");
  });

  test("Check property grid mask settings", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });

    await addQuestionByAddQuestionButton(page, "Single-Line Input");
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, inputMaskSettingsGroupName).click();
    await page.locator(".spg-question[data-name='maskType'] .spg-dropdown").click();
    await getListItemByText(page, "Pattern").click();

    const expandedGroup = page.locator(".spg-root-modern .spg-panel.sd-element--expanded");
    await resetFocusToBody(page);
    await compareScreenshot(page, expandedGroup, "pg-input-mask-settings-pattern.png");
  });

  test("renderAs works in matrix questions for textwithreset", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 800 });
    await page.evaluate(() => {
      window["Survey"].Serializer.findProperty("page", "name").defaultValue = "test";
    });
    const json = {
      showQuestionNumbers: true,
      "elements": [{ "type": "text", "name": "question1" }]
    };
    await setJSON(page, json);

    await getPropertyGridCategory(page, "Pages").click();
    const expandedGroup = page.locator(".spg-root-modern .spg-panel.sd-element--expanded");
    await resetFocusToBody(page);
    await compareScreenshot(page, expandedGroup, "pg-pages-with-reset.png");
  });

  test("popup overlay in property grid", async ({ page }) => {
    await setShowToolbox(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await page.setViewportSize({ width: 900, height: 900 });
    await page.evaluate(() => {
      window["Survey"]._setIsTouch(true);
    });
    const json = {
      showQuestionNumbers: true,
      "elements": [{ "type": "text", "name": "question1" }]
    };
    await setJSON(page, json);

    await page.locator("div[data-sv-drop-target-survey-element='question1']").click({ position: { x: 200, y: 30 } });
    await getQuestionBarItemByTitle(page, "Open settings").click();
    await page.locator(".spg-question[data-name='inputType'] .spg-dropdown").click();

    await compareScreenshot(page, page.locator(".sv-popup").filter({ visible: true }).first(), "pg-overlay-popup.png");
  });

  test("Check creator theme settings", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      (window as any).updateCreatorModel({ showCreatorThemeSettings: true }, {});
      (window as any).creator.showOneCategoryInPropertyGrid = true;
    });
    const westResizer = page.locator(".svc-resizer-west");
    await doDragDrop({ page,
      element: westResizer,
      target: westResizer,
      options: { targetPosition: { x: -60, y: 0 } }
    });
    await page.locator(".svc-sidebar-tabs__bottom-container .svc-menu-action__button").click();
    const popup = page.locator(".spg-body").filter({ visible: true }).first();
    await compareScreenshot(page, popup, "creator-theme-settings.png");
  });

  test("Helper action not hidden", async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 870 });
    const westResizer = page.locator(".svc-resizer-west");
    const questionHeader = page.getByRole("group", { name: "Conditions" }).locator(".spg-question__header");
    const json = { "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "text", }] }] };
    await setJSON(page, json);
    await page.waitForTimeout(1000);
    await page.locator(".svc-page").first().click({ position: { x: 5, y: 5 } });
    await getPropertyGridCategory(page, "Conditions").click();
    await doDragDrop({ page,
      element: westResizer,
      target: westResizer,
      options: { targetPosition: { x: 200, y: 0 } }
    });
    await compareScreenshot(page, questionHeader, "helper-action.png");
  });

  test("Character counter in property grid", async ({ page }) => {
    const showSidebarButton = page.locator("[title='Show Panel']");

    await page.setViewportSize({ width: 1120, height: 900 });

    await page.evaluate(() => {
      window["Survey"].Serializer.findProperty("question", "name").maxLength = 10;
      window["Survey"].Serializer.findProperty("question", "title").maxLength = 20;
    });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"],
              "showOtherItem": true
            }
          ]
        }
      ]
    });
    await page.locator(".svc-question__content").click();
    await showSidebarButton.click();
    await page.locator("[data-name='name']").locator("input").click();
    await compareScreenshot(page, page.locator(".spg-question__content").first(), "pg-maxLength-text.png");

    await page.locator("[data-name='title']").locator("textarea").click();
    await compareScreenshot(page, page.locator(".spg-question__content").nth(1), "pg-maxLength-comment.png");
  });
});
