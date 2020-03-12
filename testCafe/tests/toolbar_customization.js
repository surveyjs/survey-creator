import { init } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `toolbar customization`;

const url = "http://127.0.0.1:7777/example/toolbarCustomization.html";

const initModifyToolbar = ClientFunction(() => {
  var creator = window.creator;
  //Add custom button in the toolbar
  creator.toolbarItems.push({
    id: "custom-preview",
    visible: true,
    title: "Survey Preview",
    action: function() {
      var testSurveyModel = new Survey.Model(creator.getSurveyJSON());
      testSurveyModel.render("surveyContainerInPopup");
      $("#modalSurvey").modal("show");
    }
  });
});

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  var options = { showTestSurveyTab: false };
  await init(options);
  await initModifyToolbar();
});

test(`check custom survey preview`, async t => {
  const getPosition = ClientFunction(() =>
    document.documentElement.innerHTML.indexOf(
      "There is no visible page or question in the survey."
    )
  );

  await t.click(
    Selector(".svd-toolbar-button__title")
      .child(0)
      .withText("Survey Preview")
  );

  assert.notEqual(await getPosition(), -1);
});
