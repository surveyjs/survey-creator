import { createScreenshotsComparer } from "devextreme-screenshot-comparer";
import { url, setJSON, screenshotComparerOptions, checkElementScreenshot, getToolboxItemByText, getPropertyGridCategory, generalGroupName } from "../../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid Editors";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Properties on the same line", async (t) => {
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
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  const question1 = Selector("[data-name=\"question1\"]");

  await t
    .click(question1)
    .pressKey("enter")
    .click(getPropertyGridCategory("Input"))
    .expect(Selector("span").withExactText("Min").visible).ok()
    .expect(Selector(".spg-panel__content").filterVisible().visible).ok();

  await takeScreenshot("properties-on-one-line-narrow.png", Selector(".spg-panel__content").filterVisible(), screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  const westResizer = Selector(".svc-resizer-west");
  await t
    .drag(westResizer, -50, 0);
  await takeScreenshot("properties-on-one-line.png", Selector(".spg-panel__content").filterVisible(), screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t.click(Selector(".spg-panel__content .spg-question__title").withText("Max"));
  await takeScreenshot("properties-on-one-line-focus.png", Selector(".spg-panel__content").filterVisible(), screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

});
test("Values editors, keep them close", async (t) => {
  const json = {
    "elements": [
      {
        "type": "text",
        "name": "question1"
      }
    ]
  };
  await t.resizeWindow(2560, 1440);
  await setJSON(json);
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  const question1 = Selector("[data-name=\"question1\"]");

  await t
    .click(question1)
    .pressKey("enter")
    .click(getPropertyGridCategory("Data"))
    .expect(Selector(".spg-panel__content").filterVisible().visible).ok();

  await takeScreenshot("properties-data-tab.png", Selector(".spg-panel__content").filterVisible(), screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

});

test("Default value popup", async (t) => {
  await t.resizeWindow(1240, 870);

  const generalTab = Selector("h4").withExactText("General");
  const dataTab = Selector("h4").withExactText("Data");

  await t
    .hover(getToolboxItemByText("Single Input"))
    .click(getToolboxItemByText("Single Input"))
    .click(generalTab)
    .click(dataTab)
    .click(Selector(".svc-action-button.svc-question-link__set-button").withText("Set Default Answer"));
  await checkElementScreenshot("pg-default-value-popup.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t);
});

test("Logic popup", async (t) => {
  await t.resizeWindow(1240, 870);

  const generalTab = Selector("h4").withExactText("General");
  const logicTab = Selector("h4").withExactText("Logic");

  await t
    .hover(getToolboxItemByText("Single Input"))
    .click(getToolboxItemByText("Single Input"))
    .click(generalTab)
    .click(logicTab)
    .click(Selector(".spg-panel__content div[data-name='visibleIf'] button[title='Edit']"));
  await checkElementScreenshot("pg-logic-popup.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t);
});

test("Property grid checkbox - all states", async (t) => {
  await t.resizeWindow(2560, 1440);
  await setJSON({});

  const setCheckboxProperty = ClientFunction((prop, value) => {
    window["creator"].designerPropertyGrid.survey.getQuestionByName("showTitle")[prop] = value;
  });

  const checkbox = Selector("[data-name=\"showTitle\"] .spg-checkbox");

  await t.click(getPropertyGridCategory(generalGroupName));
  await setCheckboxProperty("value", false);
  await setCheckboxProperty("readOnly", false);
  await checkElementScreenshot("pg-checkbox-unchecked.png", checkbox, t);

  await setCheckboxProperty("value", true);
  await setCheckboxProperty("readOnly", false);
  await checkElementScreenshot("pg-checkbox-checked.png", checkbox, t);

  await setCheckboxProperty("value", false);
  await setCheckboxProperty("readOnly", true);
  await checkElementScreenshot("pg-checkbox-unchecked-readonly.png", checkbox, t);

  await setCheckboxProperty("value", true);
  await setCheckboxProperty("readOnly", true);
  await checkElementScreenshot("pg-checkbox-checked-readonly.png", checkbox, t);

  await setCheckboxProperty("value", false);
  await setCheckboxProperty("readOnly", false);
  await t.hover(checkbox.find(".spg-checkbox__caption"));
  await checkElementScreenshot("pg-checkbox-unchecked-hover.png", checkbox, t);

  await setCheckboxProperty("value", true);
  await setCheckboxProperty("readOnly", false);
  await t.hover(checkbox.find(".spg-checkbox__caption"));
  await checkElementScreenshot("pg-checkbox-checked-hover.png", checkbox, t);

  await setCheckboxProperty("value", true);
  await setCheckboxProperty("readOnly", false);
  await t.click(checkbox).hover(Selector(".sv-string-viewer").withText("Description"));
  await checkElementScreenshot("pg-checkbox-unchecked-focused.png", checkbox, t);

  await setCheckboxProperty("value", false);
  await setCheckboxProperty("readOnly", false);
  await t.click(checkbox).hover(Selector(".sv-string-viewer").withText("Description"));
  await checkElementScreenshot("pg-checkbox-checked-focused.png", checkbox, t);

  await ClientFunction(() => { document.body.focus(); })();
  await setCheckboxProperty("title", "Very very very very very very very very very very long checkbox caption");
  await checkElementScreenshot("pg-checkbox-long-caption.png", checkbox, t);
});

test("Property grid input all states", async (t) => {
  await t.resizeWindow(2560, 1440);
  await setJSON({});
  const setInputProperty = ClientFunction((prop, value) => {
    window["creator"].designerPropertyGrid.survey.getQuestionByName("title")[prop] = value;
  });

  const input = Selector("[data-name=\"title\"] .spg-input");
  await t.click(getPropertyGridCategory(generalGroupName));

  await checkElementScreenshot("pg-input-default.png", input, t);

  await setInputProperty("value", "Cool title");
  await checkElementScreenshot("pg-input-with-value.png", input, t);

  await t.click(input);
  await checkElementScreenshot("pg-input-focused.png", input, t);

  await setInputProperty("readOnly", true);
  await checkElementScreenshot("pg-input-disabled.png", input, t);
});

test("Dropdown popup in property grid", async (t) => {
  await t.resizeWindow(1240, 870);

  await t
    .click(Selector(".svc-page__add-new-question"))
    .click(getPropertyGridCategory(generalGroupName))
    .click(Selector(".spg-dropdown[aria-label='Input type']"));

  await checkElementScreenshot("pg-dropdown-editor.png", Selector(".svc-side-bar"), t);
});