import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `custom widgets`;

const url = "http://127.0.0.1:7777/example/customWidget.html";

export const init = ClientFunction(() => {
  Survey.Survey.cssType = "bootstrap";
  Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

  //Hide json tab and allow to drop only three questions
  var editorOptions = {
    questionTypes: ["text", "radiogroup", "dropdown"],
    showJSONEditorTab: false
  };
  var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

  window.editor = editor;
});

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`check widgets`, async t => {
  const getTestTab = Selector(
    () => document.querySelectorAll(".svd_container ul li:nth-child(3)")[0]
  );

  await t
    .click(`[title~=Radiogroup]`)
    .click(`[title~=Dropdown]`)
    .click(`[title~=Bar]`)
    .click(getTestTab)
    .wait(1000)
    .click(`#surveyjsExample .iradio_square-blue`)
    .click(`#surveyjsExample .br-theme-css-stars a`);
});
