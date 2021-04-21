import { url, init } from "../helper";
import { ClientFunction } from "testcafe";
const assert = require("assert");
const title = `options`;

fixture`General: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`showJSONEditorTab`, async t => {
  const isTabExists = ClientFunction(() =>
    document.documentElement.innerText.indexOf("JSON Editor")
  );
  const hideTab = ClientFunction(() => {
    const editorOptions = {
      showJSONEditorTab: false
    };
    creator.render(null, editorOptions);
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
    const editorOptions = {
      showTestSurveyTab: false
    };
    creator.render(null, editorOptions);
  });

  assert.notEqual(await isTabExists(), -1);
  await hideTab();
  assert.equal(await isTabExists(), -1);
});

test(`Check deprecated showEmbededSurveyTab`, async t => {
  const isTabExists = ClientFunction(() =>
    document.documentElement.innerText.indexOf("Embed Survey")
  );
  const showTab = ClientFunction(() => {
    const editorOptions = {
      showEmbededSurveyTab: true
    };
    creator.render(null, editorOptions);
  });

  assert.equal(await isTabExists(), -1);
  await showTab();
  assert.notEqual(await isTabExists(), -1);
});

test(`showEmbeddedSurveyTab`, async t => {
  const isTabExists = ClientFunction(() =>
    document.documentElement.innerText.indexOf("Embed Survey")
  );
  const showTab = ClientFunction(() => {
    const editorOptions = {
      showEmbeddedSurveyTab: true
    };
    creator.render(null, editorOptions);
  });

  assert.equal(await isTabExists(), -1);
  await showTab();
  assert.notEqual(await isTabExists(), -1);
});

// test(`hideObjectProperties`, async t => {
//   const hideButton = Selector('.svd-header-hide-button');
//   const showButton = Selector('.svd-header-show-button');

//   await t
//     .expect(hideButton).ok()
//     .click(`.svd-property-grid__header-hide-button`)
//     .expect(showButton).ok();
// });
