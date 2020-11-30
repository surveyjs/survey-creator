import { url, init } from "../../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `one-selected`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  await init();
});

test(`survey logic (triggers property editor)`, async (t) => {
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

test(`radiogroup validators property editor`, async (t) => {
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

// https://github.com/surveyjs/survey-creator/issues/873
test(`email validator from json`, async (t) => {
  const setCreatorText = ClientFunction(() => {
    window.creator.text =
      '{"pages":[{"name":"page1","elements":[{"type":"text","name":"q1","validators":[{"type":"email"}]}]}]}';
  });

  const validationAccorditionTab = Selector(
    ".svd-accordion-tab-header[data-title='Validation']"
  ).withText("Validation");

  await setCreatorText();

  const select = Selector(".svd_object_selector");
  const option = select.find("option").withText("..q1");

  await t.click(select).click(option).click(validationAccorditionTab);

  await t.click(".propertyeditor-validators .svd_custom_select select");
});

// https://github.com/surveyjs/survey-creator/issues/878
test(`single input validators property editor`, async (t) => {
  const getSurveyElementEditorContentModelClassName = ClientFunction(() => {
    const el = document.querySelector(".propertyeditor-validators");
    return ko.dataFor(el).selectedObjectEditor().className;
  });

  const getValidatorsSelectOptionsCount = ClientFunction(() => {
    const els = document.querySelectorAll(
      ".propertyeditor-validators .input-group select option"
    );
    return els.length;
  });

  const validationAccorditionTab = Selector(
    ".svd-accordion-tab-header[data-title='Validation']"
  ).withText("Validation");
  const addBtn = Selector(".propertyeditor-validators .glyphicon-plus");
  const removeBtn = Selector(".propertyeditor-validators .btn-danger");
  const validationContent = Selector(
    ".propertyeditor-validators .svd-propertyeditor-condition"
  );
  const expressionValidator = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("expression");
  const numericValidator = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("numeric");
  const textValidator = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("text");
  const regexValidator = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("regex");
  const emailValidator = Selector(
    ".propertyeditor-validators .svd-available-classes-container"
  )
    .child("li")
    .withText("e-mail");

  await t.click(`[title~=Single]`);

  await t.click(validationAccorditionTab);

  await t.click(addBtn).click(expressionValidator);
  await t.click(addBtn).click(numericValidator);
  await t.click(addBtn).click(textValidator);
  await t.click(addBtn).click(regexValidator);
  await t.click(addBtn).click(emailValidator);

  assert.equal(await getValidatorsSelectOptionsCount(), 5);

  assert.equal(
    await getSurveyElementEditorContentModelClassName(),
    "emailvalidator"
  );
  await t.click(removeBtn);
  assert.equal(await getValidatorsSelectOptionsCount(), 4);

  assert.equal(
    await getSurveyElementEditorContentModelClassName(),
    "regexvalidator"
  );
  await t.click(removeBtn);
  assert.equal(await getValidatorsSelectOptionsCount(), 3);

  assert.equal(
    await getSurveyElementEditorContentModelClassName(),
    "textvalidator"
  );
  await t.click(removeBtn);
  assert.equal(await getValidatorsSelectOptionsCount(), 2);

  assert.equal(
    await getSurveyElementEditorContentModelClassName(),
    "numericvalidator"
  );
  await t.click(removeBtn);
  assert.equal(await getValidatorsSelectOptionsCount(), 1);

  assert.equal(
    await getSurveyElementEditorContentModelClassName(),
    "expressionvalidator"
  );
  await t.click(removeBtn);
  assert.equal(await getValidatorsSelectOptionsCount(), 1);
});
