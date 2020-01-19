import { url } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `modify new question`;

const init = ClientFunction(() => {
  Survey.Survey.cssType = "bootstrap";
  Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  //Add a tag property
  Survey.Serializer.addProperty("question", "tag");
  //Make name and tag properties read-only
  Survey.Serializer.findProperty("question", "name").readOnly = true;
  Survey.Serializer.findProperty("question", "tag").readOnly = true;
  SurveyEditor.defaultStrings.p.tag = { name: "tag", title: "MyTag" };
  var editorOptions = {};
  var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

  var questionCounter = 1;
  //Set the name property different from the default value
  //and set the tag property to a generated GUID value.
  editor.onQuestionAdded.add(function(sender, options) {
    var q = options.question;
    var t = q.getType();
    q.name = "Question" + t[0].toUpperCase() + t.substring(1) + questionCounter;
    var guid = window.guid();
    q.tag = guid;
    window.qguid = guid;
    questionCounter++;
  });

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  }

  window.guid = guid;
});

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`check a guid in the tag`, async t => {
  const getGuidFromUi = ClientFunction(
    () =>
      document
        .querySelectorAll("div[data-property='tag']")[0]
        .querySelector("input").value
  );
  const getGuid = ClientFunction(() => window.qguid);

  const OthersTab = Selector(".svd_object_editor span").withText("Others");

  await t.click(`[title~=Radiogroup]`).click(OthersTab);

  assert.equal(await getGuidFromUi(), await getGuid());
});

test(`check custom localization exists`, async t => {
  const OthersTab = Selector(".svd_object_editor span").withText("Others");
  const NewProp = Selector(".svd_object_editor label").withText("Tag");

  await t
    .click(`[title~=Radiogroup]`)
    .click(OthersTab)
    .click(NewProp);
});
