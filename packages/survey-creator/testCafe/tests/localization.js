import { url, init } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `localization`;

const initLocale = ClientFunction(() => {
  SurveyCreator.editorLocalization.currentLocale = "fr";
});

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await initLocale();
  await init();
});

test(`check on French locale`, async t => {
  const isTabExists = ClientFunction(() =>
    document.documentElement.innerText.indexOf("Éditeur de questionnaire")
  );

  assert.notEqual(await isTabExists(), -1);
});
