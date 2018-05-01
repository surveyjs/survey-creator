import { url } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `customize question editor`;

const init = ClientFunction(() => {
  Survey.Survey.cssType = "bootstrap";
  Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  //Add a tag property to all questions
  Survey.JsonObject.metaData.addProperty("questionbase", "tag");
  // Change the order of name and title properties, remove the startWithNewLine property and add a tag property
  SurveyEditor.SurveyQuestionEditorDefinition.definition[
    "questionbase"
  ].properties = [
    "title",
    "name",
    { name: "tag", title: "Tag" },
    { name: "visible", category: "checks" },
    { name: "isRequired", category: "checks" }
  ];
  // make visibleIf tab the second after general for all questions
  SurveyEditor.SurveyQuestionEditorDefinition.definition[
    "questionbase"
  ].tabs = [{ name: "visibleIf", index: 1 }];

  var editorOptions = {};
  var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
});

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`check new editor dialog`, async t => {
  const getPosition1 = ClientFunction(() =>
    document.documentElement.innerHTML.indexOf("Title")
  );
  const getPosition2 = ClientFunction(() =>
    document.documentElement.innerHTML.indexOf("Name")
  );
  const getPosition3 = ClientFunction(() =>
    document.documentElement.innerHTML.indexOf("Tag")
  );
  const getPosition4 = ClientFunction(() =>
    document.documentElement.innerHTML.indexOf("Is visible?")
  );
  const getPosition5 = ClientFunction(() =>
    document.documentElement.innerHTML.indexOf("Is required?")
  );
  const getPosition6 = ClientFunction(() =>
    document.documentElement.innerHTML.indexOf("Visible If")
  );

  await t
    .click(`[title~=Radiogroup]`)
    .click(`.svd_question`)
    .click(`.svda_question_action .icon-actioneditelement`);

  assert.notEqual(await getPosition1(), -1);
  assert.notEqual(await getPosition2(), -1);
  assert.notEqual(await getPosition3(), -1);
  assert.notEqual(await getPosition4(), -1);
  assert.notEqual(await getPosition5(), -1);
  assert.notEqual(await getPosition6(), -1);
});
