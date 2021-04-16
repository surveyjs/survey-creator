import { url, init } from "../../helper";
import { Selector, ClientFunction } from "testcafe";
const title = `custom property editor`;

const setCustomEditor = ClientFunction(() => {
  SurveyCreator.SurveyPropertyEditorFactory.registerCustomEditor("boolean", {
    render: function (customPropertyEditor, htmlElement) {
      htmlElement.innerHTML = "Hello Custom Boolean Editor !";
    },
  });

  SurveyCreator.SurveyPropertyEditorFactory.registerCustomEditor("text", {
    render: function (customPropertyEditor, htmlElement) {
      htmlElement.innerHTML = "Hello Custom Text Editor !";
    },
  });
});

fixture`Property editors: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  await setCustomEditor();
  await init();
});

test(`check SurveyCreator.SurveyPropertyEditorFactory.registerCustomEditor`, async (t) => {
  await t.hover(Selector("div").withText("Hello Custom Boolean Editor !"));
  await t.hover(Selector("div").withText("Hello Custom Text Editor !"));
});
