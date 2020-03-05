import { url } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `visibleIf_editor`;

const init = ClientFunction(() => {
  Survey.Survey.cssType = "bootstrap";
  var editorOptions = {};
  window.creator = new SurveyEditor.SurveyEditor(
    "editorElement",
    editorOptions
  );
});

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

const getDesignerSurvey = ClientFunction(() => window.creator.survey);

const questions = Selector(".svd_question");
const propertyGrid = Selector(".svd_object_editor");
const tooglePropertyCategory = function(categoryName) {
  return Selector(".svd-accordion-tab-header")
    .child("span")
    .withText(categoryName);
};

test(`Set visibleIf property`, async t => {
  await t
    .click(`[title~=Dropdown]`)
    .click(`[title~=Checkbox]`)
    .click(`[title~=Text]`)
    .click(`[title~=Text]`);

  await t.expect(questions.count).eql(4);
  await t.click(questions.nth(-1).find(".icon-actioneditelement"));
  await t
    .click(tooglePropertyCategory("General"))
    .click(tooglePropertyCategory("Logic"))
    .click(Selector(".svd-expression-header").nth(0));
  const questionSelect = Selector(`div[name="questionName"]`).find("select");
  await t
    .click(questionSelect)
    .click(questionSelect.find("option").withText("question1"));
  const questionValue = Selector(`div[name="questionValue"]`).find("select");
  await t
    .click(questionValue)
    .click(questionValue.find("option").withText("item1"));

  await t
    .expect(
      Selector(".svd-expression-header")
        .nth(0)
        .child(0).innerText
    )
    .eql("{question1} = 'item1'");

  //await t.wait(2000);
});
