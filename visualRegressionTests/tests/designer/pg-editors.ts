import { url, setJSON, takeElementScreenshot, getToolboxItemByText, getPropertyGridCategory, generalGroupName, wrapVisualTest, addQuestionByAddQuestionButton, resetHoverToCreator, surveySettingsButtonSelector, inputMaskSettingsGroupName, getListItemByText, getVisibleElement, changeToolboxSearchEnabled } from "../../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid Editors";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Properties on the same line", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "inputType": "number"
        }
      ]
    };
    await t.resizeWindow(2560, 1440);
    await ClientFunction(() => {
      const qDef = window["SurveyCreatorCore"].SurveyQuestionEditorDefinition.definition.text;
      const props = qDef.properties;
      props.splice(0, 1, { name: "inputType", tab: "Input" });
      props.splice(1, 1, { name: "min", tab: "Input" });
      props.splice(2, 1, { name: "max", tab: "Input" });
      qDef.tabs = [{ name: "Input", index: 1 }];
    })();
    await setJSON(json);

    const question1 = Selector("[data-name=\"question1\"]");

    await t
      .click(question1)
      .pressKey("enter")
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory("Input"))
      .expect(Selector("span").withExactText("Min").visible).ok()
      .expect(Selector(".spg-panel__content").filterVisible().visible).ok();

    await takeElementScreenshot("properties-on-one-line-narrow.png", Selector(".spg-panel__content").filterVisible(), t, comparer);

    const westResizer = Selector(".svc-resizer-west");
    await t
      .drag(westResizer, -50, 0);
    await takeElementScreenshot("properties-on-one-line.png", Selector(".spg-panel__content").filterVisible(), t, comparer);

    await t.click(Selector(".spg-panel__content .spg-question__title").withText("Max"));
    await takeElementScreenshot("properties-on-one-line-focus.png", Selector(".spg-panel__content").filterVisible(), t, comparer);
  });
});

test("Properties on the same line (date)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "inputType": "date"
        }
      ]
    };
    await t.resizeWindow(2560, 1440);
    await ClientFunction(() => {
      const qDef = window["SurveyCreatorCore"].SurveyQuestionEditorDefinition.definition.text;
      const props = qDef.properties;
      props.splice(0, 1, { name: "inputType", tab: "Input" });
      props.splice(1, 1, { name: "min", tab: "Input" });
      props.splice(2, 1, { name: "max", tab: "Input" });
      qDef.tabs = [{ name: "Input", index: 1 }];
    })();
    await setJSON(json);

    const question1 = Selector("[data-name=\"question1\"]");

    await t
      .click(question1, { offsetX: 20, offsetY: 20 })
      .pressKey("enter")
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory("Input"))
      .expect(Selector("span").withExactText("Min").visible).ok()
      .expect(Selector(".spg-panel__content").filterVisible().visible).ok();

    await takeElementScreenshot("properties-on-one-line-narrow-date.png", Selector(".spg-panel__content").filterVisible(), t, comparer);

    const westResizer = Selector(".svc-resizer-west");
    await t
      .drag(westResizer, -60, 0);
    await takeElementScreenshot("properties-on-one-line-date.png", Selector(".spg-panel__content").filterVisible(), t, comparer);

    await t.click(Selector(".spg-panel__content .spg-question__title").withText("Max"));
    await takeElementScreenshot("properties-on-one-line-focus-date.png", Selector(".spg-panel__content").filterVisible(), t, comparer);
  });
});

test("Values editors, keep them close", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {
      "elements": [
        {
          "type": "text",
          "name": "question1"
        }
      ]
    };
    await t.resizeWindow(1560, 1440);
    await setJSON(json);

    const question1 = Selector("[data-name=\"question1\"]");

    await t
      .click(question1)
      .pressKey("enter")
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory("Data"))
      .expect(Selector(".spg-panel__content").filterVisible().visible).ok();

    await takeElementScreenshot("properties-data-tab.png", Selector(".spg-panel__content").filterVisible(), t, comparer);
  });
});

test("Check default value editor", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "defaultValue": "default"
        }
      ]
    };
    await t.resizeWindow(1560, 1440);
    await setJSON(json);

    const question1 = Selector("[data-name=\"question1\"]");

    await t
      .click(question1)
      .pressKey("enter")
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory("Data"));
    const questionSelector = Selector("div[data-name='defaultValue']");

    await takeElementScreenshot("default-value-clear-button.png", questionSelector, t, comparer);
    await ClientFunction(() => { (<HTMLElement>document.querySelector("div[data-name='defaultValue'] .svc-question-link__clear-button"))?.focus(); })();
    await takeElementScreenshot("default-value-clear-button-focus.png", questionSelector, t, comparer);
  });
});

test("Default value popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);

    const generalTab = Selector("h4").withExactText("General");
    const dataTab = Selector("h4").withExactText("Data");

    await t
      .hover(getToolboxItemByText("Single-Line Input"), { offsetX: 25 })
      .click(getToolboxItemByText("Single-Line Input"), { offsetX: 25 })
      .click(generalTab)
      .click(dataTab)
      .click(Selector(".svc-action-button.svc-question-link__set-button").withText("Set Default Answer"));
    await takeElementScreenshot("pg-default-value-popup.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t, comparer);
  });
});

test("Custom button into fast entry popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);
    await ClientFunction(() => {
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
    })();

    const generalTab = Selector("h4").withExactText("General");
    const choicesTab = Selector("h4").withExactText("Choice Options");

    await t
      .hover(getToolboxItemByText("Dropdown"))
      .click(getToolboxItemByText("Dropdown"))
      .click(generalTab)
      .click(choicesTab)
      .click(Selector(".spg-action-button[title='Edit']"));
    await takeElementScreenshot("pg-choices-fast-entry-popup.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t, comparer);
  });
});

test("Logic popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);

    const generalTab = Selector("h4").withExactText("General");
    const logicTab = Selector("h4").withExactText("Conditions");

    await t
      .hover(getToolboxItemByText("Single-Line Input"), { offsetX: 25 })
      .click(getToolboxItemByText("Single-Line Input"), { offsetX: 25 })
      .click(generalTab)
      .click(logicTab)
      .click(Selector(".spg-panel__content div[data-name='visibleIf'] button[title='Edit']"));
    await takeElementScreenshot("pg-logic-popup.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t, comparer);
  });
});

test("Logic popup with boolean question", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);

    await setJSON({
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

    const generalTab = Selector("h4").withExactText("General");
    const logicTab = Selector("h4").withExactText("Conditions");

    await t
      .click(Selector(".svc-question__content .sd-question__title"))
      .click(generalTab)
      .click(logicTab)
      .click(Selector(".spg-panel__content div[data-name='visibleIf'] button[title='Edit']"))
      .click(Selector(".sd-boolean--checked"));
    await takeElementScreenshot("pg-logic-popup-boolean.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t, comparer);
    await t.click(Selector("button").withText("Cancel").filterVisible());
    await t.click(Selector(".spg-panel__content div[data-name='enableIf'] button[title='Edit']"));
    await takeElementScreenshot("pg-logic-popup-rating.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t, comparer);
  });
});

test("Logic popup mobile", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);
    const generalTab = Selector("h4").withExactText("General");
    const logicTab = Selector("h4").withExactText("Conditions");

    await t
      .hover(getToolboxItemByText("Single-Line Input"), { offsetX: 25 })
      .click(getToolboxItemByText("Single-Line Input"), { offsetX: 25 });
    await t.resizeWindow(500, 870)
      .click(Selector("button[title='Open settings']").filterVisible(), { offsetX: 25 });

    await t.click(generalTab)
      .click(logicTab)

      .click(Selector(".spg-panel__content div[data-name='visibleIf'] button[title='Edit']"));
    await takeElementScreenshot("pg-logic-popup-mobile.png", Selector(".sv-popup.sv-property-editor.sv-popup--overlay .sv-popup__container"), t, comparer);
  });
});

test("Property grid checkbox - all states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => window["creator"].currentPlugin.propertyGrid.searchEnabled = false)();
    await t.resizeWindow(2560, 1440);
    await setJSON({});

    const setCheckboxProperty = ClientFunction((prop, value) => {
      window["creator"].designerPropertyGrid.survey.getQuestionByName("showTitle")[prop] = value;
    });

    const checkbox = Selector("[data-name=\"showTitle\"] .spg-checkbox");

    await t.click(getPropertyGridCategory(generalGroupName));

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", false);
    await takeElementScreenshot("pg-checkbox-unchecked.png", checkbox, t, comparer);

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", false);
    await takeElementScreenshot("pg-checkbox-checked.png", checkbox, t, comparer);

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", true);
    await takeElementScreenshot("pg-checkbox-unchecked-readonly.png", checkbox, t, comparer);

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", true);
    await takeElementScreenshot("pg-checkbox-checked-readonly.png", checkbox, t, comparer);

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", false);
    await t.hover(checkbox.find(".spg-checkbox__caption"));
    await takeElementScreenshot("pg-checkbox-unchecked-hover.png", checkbox, t, comparer);

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", false);
    await t.hover(checkbox.find(".spg-checkbox__caption"));
    await takeElementScreenshot("pg-checkbox-checked-hover.png", checkbox, t, comparer);

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", false);
    await t.click(checkbox).hover(Selector(".sv-string-viewer").withText("Make the title and description visible"));
    await takeElementScreenshot("pg-checkbox-unchecked-focused.png", checkbox, t, comparer);

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", false);
    await t.click(checkbox).hover(Selector(".sv-string-viewer").withText("Make the title and description visible"));
    await takeElementScreenshot("pg-checkbox-checked-focused.png", checkbox, t, comparer);

    await ClientFunction(() => { document.body.focus(); })();
    await setCheckboxProperty("title", "Very very very very very very very very very very long checkbox caption");
    await takeElementScreenshot("pg-checkbox-long-caption.png", checkbox, t, comparer);
  });
});

test("Property grid input all states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => window["creator"].currentPlugin.propertyGrid.searchEnabled = false)();
    await t.resizeWindow(2560, 1440);
    await setJSON({});
    const setInputProperty = ClientFunction((prop, value) => {
      window["creator"].designerPropertyGrid.survey.getQuestionByName("title")[prop] = value;
    });

    const input = Selector("[data-name=\"title\"] .spg-input");
    await t.click(getPropertyGridCategory(generalGroupName));

    await takeElementScreenshot("pg-input-default.png", input, t, comparer);

    await setInputProperty("value", "Cool title");
    await takeElementScreenshot("pg-input-with-value.png", input, t, comparer);

    await t.click(input);
    await takeElementScreenshot("pg-input-focused.png", input, t, comparer);

    await setInputProperty("readOnly", true);
    await takeElementScreenshot("pg-input-readonly.png", input, t, comparer);
  });
});

test("Dropdown popup in property grid", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);

    await t
      .click(Selector(".svc-page__add-new-question"))
      .click(Selector(".spg-dropdown[aria-label='Input type']"));

    await takeElementScreenshot("pg-dropdown-editor.png", Selector(".svc-side-bar"), t, comparer);
  });
});

test("rateValues in property grid", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);
    await setJSON({
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "rateDisplayMode": "smileys",
          "autoGenerate": false,
          "rateValues": [
            1,
            2,
            3,
            4,
            5
          ]
        }
      ]
    });
    await t
      .click(Selector(".svc-question__adorner"))
      .click(Selector(".spg-panel__title").withText("Rating Values"));

    await takeElementScreenshot("pg-rate-values.png", Selector("div[data-name=rateValues"), t, comparer);
  });
});

test("Check bindings question", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await addQuestionByAddQuestionButton(t, "Dynamic Matrix");
    await t
      .click(Selector("h4[aria-label=General]"))
      .click(Selector("h4[aria-label=Conditions]"));

    await takeElementScreenshot("bindings-editor.png", Selector(".spg-question[data-name='bindings']"), t, comparer);
  });
});
test("Check triggers question", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await t
      .click(Selector("h4[aria-label=Conditions]"))
      .click(Selector("div[data-name='triggers'] .spg-action-button--icon[title='Add new trigger']"));
    await takeElementScreenshot("triggers-editor.png", Selector("div[data-name='triggers']"), t, comparer);
    await ClientFunction(() => (<any>document).querySelector("[aria-label='row 1, column triggerType'] input").focus())();
    await resetHoverToCreator(t);
    await takeElementScreenshot("triggers-editor-focused.png", Selector("div[data-name='triggers']"), t, comparer);
  });
});

test("Check question with error", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await setJSON({
      type: "text",
      name: "q1",
    });
    await addQuestionByAddQuestionButton(t, "Long Text");
    const questionSelector = Selector("div[data-name='name']");
    await t
      .selectText(questionSelector.find("input"))
      .pressKey("delete")
      .pressKey("tab");
    await takeElementScreenshot("pg-editor-errors.png", questionSelector, t, comparer);
  });
});

test("Check color editor", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => window["creator"].currentPlugin.propertyGrid.searchEnabled = false)();
    await t.resizeWindow(1920, 1920);
    await ClientFunction(() => {
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
    })();
    await setJSON({});
    await t
      .click(Selector("h4[aria-label=General]"));
    const questionSelector = Selector("div[data-name='fontColor']");
    await takeElementScreenshot("color-editor-disabled.png", questionSelector, t, comparer);
    await ClientFunction(() => (window as any).creator.propertyGrid.getAllQuestions()[0].readOnly = false)();
    await takeElementScreenshot("color-editor.png", questionSelector, t, comparer);
    await t.hover(questionSelector.find(".spg-input__edit-button"));
    await takeElementScreenshot("color-editor-button-hover.png", questionSelector, t, comparer);
    await t.click(questionSelector.find(".spg-input__edit-button"));
    await resetHoverToCreator(t);
    await takeElementScreenshot("color-editor-choices.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
    await t.click(questionSelector.find(".spg-input__edit-button"));
    await t.click(questionSelector.find(".spg-color-editor__input"));
    await takeElementScreenshot("color-editor-focus.png", questionSelector, t, comparer);
    await ClientFunction(() => {
      (<any>window).creator.propertyGrid.getQuestionByName("fontColor").titleLocation = "left";
    })();
    await takeElementScreenshot("color-editor-title-location-left-focus.png", questionSelector, t, comparer);
    await ClientFunction(() => {
      document.body.focus();
    })();
    await takeElementScreenshot("color-editor-title-location-left.png", questionSelector, t, comparer);
  });
});

test("Check color editor with empty value", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await ClientFunction(() => {
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
    })();
    await setJSON({});
    await t
      .click(Selector("h4[aria-label=General]"));
    const questionSelector = Selector("div[data-name='fontColor']");
    await takeElementScreenshot("color-editor-empty.png", questionSelector, t, comparer);
    await ClientFunction(() => (window as any).creator.propertyGrid.getAllQuestions()[0].readOnly = true)();
    await takeElementScreenshot("color-editor-empty-disabled.png", questionSelector, t, comparer);
  });
});

test("Check spinedit editor", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await ClientFunction(() => {
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
    })();
    await setJSON({});
    await t
      .click(Selector("h4[aria-label=General]"));
    const questionSelector = Selector("div[data-name='fontSize']");
    await takeElementScreenshot("spin-editor-disabled.png", questionSelector, t, comparer);
    await ClientFunction(() => (window as any).creator.propertyGrid.getAllQuestions()[0].readOnly = false)();
    await takeElementScreenshot("spin-editor.png", questionSelector, t, comparer);
    await t.hover(questionSelector.find(".spg-input__edit-button"));
    await takeElementScreenshot("spin-editor-button-hover.png", questionSelector, t, comparer);
    await t.click(questionSelector.find(".spg-spin-editor__input"));
    await takeElementScreenshot("spin-editor-focus.png", questionSelector, t, comparer);
    await ClientFunction(() => {
      (<any>window).creator.propertyGrid.getQuestionByName("fontSize").titleLocation = "left";
    })();
    await takeElementScreenshot("spin-editor-title-location-left-focus.png", questionSelector, t, comparer);
    await ClientFunction(() => {
      document.body.focus();
    })();
    await takeElementScreenshot("spin-editor-title-location-left.png", questionSelector, t, comparer);
  });
});
test("Check file editor", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await ClientFunction(() => {
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
    })();
    await setJSON({});
    await t
      .click(Selector("h4[aria-label=General]"));
    const questionSelector = Selector("div[data-name='image']");
    await takeElementScreenshot("file-editor-disabled.png", questionSelector, t, comparer);
    await ClientFunction(() => (window as any).creator.propertyGrid.getAllQuestions()[0].readOnly = false)();
    await takeElementScreenshot("file-editor.png", questionSelector, t, comparer);
    await ClientFunction(() => {
      (<any>window).creator.propertyGrid.getQuestionByName("image").titleLocation = "left";
    })();
    await takeElementScreenshot("file-editor-title-location-left.png", questionSelector, t, comparer);
    await t.click(questionSelector.find("input"));
    await takeElementScreenshot("file-editor-title-location-left-focus.png", questionSelector, t, comparer);
  });
});

test("Check dropdown editor with titleLocation: 'left'", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await ClientFunction(() => {
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
    })();
    await setJSON({});
    await t
      .click(Selector("h4[aria-label=General]"));
    const questionSelector = Selector("div[data-name='fontFamily']");
    await takeElementScreenshot("dropdown-editor-title-location-left.png", questionSelector, t, comparer);
    await t.click(questionSelector.find("input"));
    await takeElementScreenshot("dropdown-editor-title-location-left-focus.png", questionSelector, t, comparer);
  });
});

test("Check overriding property editor", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
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
    await t.resizeWindow(1920, 1920);
    await t.click("div[data-sv-drop-target-survey-element='question2']", { offsetX: 200, offsetY: 30 });
    await takeElementScreenshot("overriding-property-editor.png", Selector(".spg-row--multiple"), t, comparer);
  });
});

test("Check comment editor with reset button", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await ClientFunction(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "test:text",
        default: "default",
        category: "general",
        visibleIndex: 0
      });
    })();
    await setJSON({});
    await t
      .click(Selector("h4[aria-label=General]"));
    const questionSelector = Selector("div[data-name='test']");
    await takeElementScreenshot("comment-with-reset-disabled-button.png", questionSelector, t, comparer);
    await t.typeText(questionSelector.find("textarea"), "value", { replace: true });
    await takeElementScreenshot("comment-with-reset-enabled-button.png", questionSelector, t, comparer);
  });
});

test("Check text editor with reset button", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await ClientFunction(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "test",
        default: "default",
        category: "general",
        visibleIndex: 0
      });
    })();
    await setJSON({});
    await t
      .click(Selector("h4[aria-label=General]"));
    const questionSelector = Selector("div[data-name='test']");
    await takeElementScreenshot("text-with-reset-disabled-button.png", questionSelector, t, comparer);
    await t.typeText(questionSelector.find("input"), "value", { replace: true });
    await takeElementScreenshot("text-with-reset-enabled-button.png", questionSelector, t, comparer);
  });
});

test("Check accepted file types hint link", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({
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
    await t.resizeWindow(1900, 1000);
    await t.click("div[data-sv-drop-target-survey-element='question1']", { offsetX: 200, offsetY: 30 });
    await t.click(Selector("[data-name='acceptedTypes'] button"));
    await takeElementScreenshot("file-accepted-types-hint.png", Selector("[data-name='acceptedTypes']"), t, comparer);
  });
});
test("Check property grid panel' header states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({});
    await t.resizeWindow(1920, 1920);
    const headerSelector = Selector("h4[aria-label=General]").nth(0);
    await t
      .click(headerSelector);
    await takeElementScreenshot("pg-panel-header-expanded-focused.png", headerSelector, t, comparer);
    await t.pressKey("tab");
    await takeElementScreenshot("pg-panel-header-expanded.png", headerSelector, t, comparer);
    await t
      .click(headerSelector);
    await takeElementScreenshot("pg-panel-header-collapsed-focused.png", headerSelector, t, comparer);
    await t.pressKey("tab");
    await resetHoverToCreator(t);
    await takeElementScreenshot("pg-panel-header-collapsed.png", headerSelector, t, comparer);
  });
});
test("Dropdown input in property grid", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);

    await t
      .click(surveySettingsButtonSelector)
      .click(Selector(".spg-dropdown[aria-label='Select a survey language']"))
      .pressKey("a l i");

    await takeElementScreenshot("pg-dropdown-editor-input.png", Selector(".spg-dropdown[aria-label='Select a survey language']"), t, comparer);
  });
});

test("Property grid checkbox with description", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await ClientFunction(() => {
      (window as any).SurveyCreatorCore.localization.getLocale("en").pehelp["visible"] = "Visible property's description";
    })();
    await setJSON({
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            }
          ]
        }
      ]
    });
    await t.click("div[data-sv-drop-target-survey-element='question1']", { offsetX: 200, offsetY: 30 });
    await takeElementScreenshot("pg-checkbox-hint.png", Selector("[data-name='visible']"), t, comparer);
    await t.click(Selector("[data-name='visible'] .spg-action-button"));
    await takeElementScreenshot("pg-checkbox-hint-opened.png", Selector("[data-name='visible']"), t, comparer);
  });
});
test("Check property grid mask settings", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);

    await addQuestionByAddQuestionButton(t, "Single-Line Input");
    await t
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory(inputMaskSettingsGroupName))
      .click(Selector(".spg-dropdown[aria-label='Input mask type']"))
      .click(getListItemByText("Pattern"));

    const expandedGroup = Selector(".spg-root-modern .spg-panel.sd-element--expanded");
    await ClientFunction(() => { document.body.focus(); })();
    await takeElementScreenshot("pg-input-mask-settings-pattern.png", expandedGroup, t, comparer);
  });
});

test("renderAs works in matrix questions for textwithreset", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1600, 800);
    await ClientFunction(() => {
      window["Survey"].Serializer.findProperty("page", "name").defaultValue = "test";
      // window["Survey"].Serializer.addProperty("survey", {
      //   name: "name",
      //   default: "test"
      // });
    })();
    const json = {
      "elements": [
        {
          "type": "text",
          "name": "question1"
        }
      ]
    };
    await setJSON(json);

    await t
      .click(getPropertyGridCategory("Pages"));
    const expandedGroup = Selector(".spg-root-modern .spg-panel.sd-element--expanded");
    await ClientFunction(() => { document.body.focus(); })();
    await takeElementScreenshot("pg-pages-with-reset.png", expandedGroup, t, comparer);
  });
});
test("popup overlay in property grid", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await changeToolboxSearchEnabled(false);
    await t.resizeWindow(900, 900);
    await ClientFunction(() => {
      window["Survey"]._setIsTouch(true);
    })();
    const json = {
      "elements": [
        {
          "type": "text",
          "name": "question1"
        }
      ]
    };
    await setJSON(json);

    await t
      .click("div[data-sv-drop-target-survey-element='question1']", { offsetX: 200, offsetY: 30 })
      .click(getVisibleElement(".sv-action-bar-item[title='Open settings']"))
      .click(Selector(".spg-dropdown[aria-label='Input type']"));

    await takeElementScreenshot("pg-overlay-popup.png", getVisibleElement(".sv-popup .sv-popup__container"), t, comparer);
  });
});