import { url, init } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `options`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`showJSONEditorTab`, async t => {
  const isTabExists = ClientFunction(() =>
    document.documentElement.innerText.indexOf("JSON Editor")
  );
  const hideTab = ClientFunction(() => {
    let editorOptions = {
      showJSONEditorTab: false
    };
    editor.render(null, editorOptions);
  });

  assert.notEqual(await isTabExists(), -1);

  await hideTab();

  assert.equal(await isTabExists(), -1);
});

test(`showTestSurveyTab`, async t => {
  const isTabExists = ClientFunction(() =>
    document.documentElement.innerText.indexOf("Test Survey")
  );
  const hideTab = ClientFunction(() => {
    let editorOptions = {
      showTestSurveyTab: false
    };
    editor.render(null, editorOptions);
  });

  assert.notEqual(await isTabExists(), -1);

  await hideTab();

  assert.equal(await isTabExists(), -1);
});

test(`showEmbededSurveyTab`, async t => {
  const isTabExists = ClientFunction(() =>
    document.documentElement.innerText.indexOf("Embed Survey")
  );
  const showTab = ClientFunction(() => {
    let editorOptions = {
      showEmbededSurveyTab: true
    };
    editor.render(null, editorOptions);
  });

  assert.equal(await isTabExists(), -1);

  await showTab();

  assert.notEqual(await isTabExists(), -1);
});
