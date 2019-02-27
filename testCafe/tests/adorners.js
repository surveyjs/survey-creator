import { url } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `adorners`;

const init = ClientFunction(() => {
  Survey.Survey.cssType = "bootstrap";
  var editorOptions = {};
  var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
});

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`dropdown change item values`, async t => {
  await t
    .click(`[title~=Dropdown]`)
    .click(`.item_editable.item_draggable>span`)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(Selector(`.item_editable.item_draggable>span`).innerText)
    .eql("item1puppies")
    .click(`.svd_properties_grid tr:nth-child(12) input[type='checkbox']`)
    .expect(
      Selector(
        `.svda-select-items-editor .svda-select-items-collection+.item_editable > span:first-child`
      ).innerText
    )
    .eql("Other (describe)")
    .click(
      `.svda-select-items-editor .svda-select-items-collection+.item_editable > span:first-child`
    )
    .typeText(`input:focus`, `puppiesOther`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(
      Selector(
        `.svda-select-items-editor .svda-select-items-collection+.item_editable > span:first-child`
      ).innerText
    )
    .eql("Other (describe)puppiesOther");
  //.debug()
  //.wait(3000);
});

test(`boolean change title`, async t => {
  await t
    .click(`[title~=Boolean]`)
    .click(`.label_editable > span`)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(Selector(`.label_editable > span`).innerText)
    .eql("question1puppies");
});

test(`text change title`, async t => {
  await t
    .click(`[title="Single Input"]`)
    .click(`.title_editable > span:nth-child(3)`)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(Selector(`.title_editable > span:nth-child(3)`).innerText)
    .eql("question1puppies");
});
