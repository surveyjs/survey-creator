import { createScreenshotsComparer } from "devextreme-screenshot-comparer";
import { url, setJSON, screenshotComparerOptions, propertyGridSelector, checkElementScreenshot } from "../../helper";
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
  const generalTab = Selector("h4").withExactText("General");
  const inputTab = Selector("h4").withExactText("Input");

  await t
    .click(question1)
    .pressKey("enter")
    .click(generalTab)
    .click(inputTab)
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
  const generalTab = Selector("h4").withExactText("General");
  const dataTab = Selector("h4").withExactText("Data");

  await t
    .click(question1)
    .pressKey("enter")
    .click(generalTab)
    .click(dataTab)
    .expect(Selector(".spg-panel__content").filterVisible().visible).ok();

  await takeScreenshot("properties-data-tab.png", Selector(".spg-panel__content").filterVisible(), screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

});
test("Property grid checkbox - all states", async (t) => {
  await t.resizeWindow(2560, 1440);
  await setJSON({});

  const setCheckboxProperty = ClientFunction((prop, value) => {
    window["creator"].designerPropertyGrid.survey.getQuestionByName("showTitle")[prop] = value;
  });

  const checkbox = Selector("[data-name=\"showTitle\"] .spg-checkbox");

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
});