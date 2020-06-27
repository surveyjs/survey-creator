import { url, init } from "../../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `add properties`;

const addProperty = ClientFunction(() => {
  //add a property to the survey object
  Survey.Serializer.addProperty("survey", {
    name: "customProperty:number",
    default: 123456,
  });
});

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  await addProperty();
  await init();
});

test(`triggers property editor`, async (t) => {
  const logicAccorditionTab = Selector(
    ".svd-accordion-tab-header[data-title='Logic']"
  ).withText("Logic");
  const addBtn = Selector(".propertyeditor-validators .glyphicon-plus");
  const removeBtn = Selector(".propertyeditor-validators .btn-danger");
  const triggerContent = Selector(
    ".propertyeditor-validators .svd-propertyeditor-condition"
  );

  const completeSurveyTrigger = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("complete survey");

  const setValueTrigger = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("set value");

  const copyValueTrigger = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("copy value");

  const skipToQuestionTrigger = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("skip to question");

  const runExpressionTrigger = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("run expression");

  await t.click(logicAccorditionTab);

  await t.click(addBtn).click(completeSurveyTrigger);
  await t.hover(triggerContent);
  await t.click(removeBtn);

  await t.click(addBtn).click(setValueTrigger);
  await t.hover(triggerContent);
  await t.click(removeBtn);

  await t.click(addBtn).click(copyValueTrigger);
  await t.hover(triggerContent);
  await t.click(removeBtn);

  await t.click(addBtn).click(skipToQuestionTrigger);
  await t.hover(triggerContent);
  await t.click(removeBtn);

  await t.click(addBtn).click(runExpressionTrigger);
  await t.hover(triggerContent);
  await t.click(removeBtn);
});

test(`validators property editor`, async (t) => {
  const validationAccorditionTab = Selector(
    ".svd-accordion-tab-header[data-title='Validation']"
  ).withText("Validation");
  const addBtn = Selector(".propertyeditor-validators .glyphicon-plus");
  const removeBtn = Selector(".propertyeditor-validators .btn-danger");
  const validationContent = Selector(
    ".propertyeditor-validators .svd-propertyeditor-condition"
  );
  const expressionTrigger = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("expression");

  await t.click(`[title~=Radiogroup]`);

  await t.click(validationAccorditionTab);

  await t.click(addBtn).click(expressionTrigger);
  await t.hover(validationContent);
  await t.click(removeBtn);
});
