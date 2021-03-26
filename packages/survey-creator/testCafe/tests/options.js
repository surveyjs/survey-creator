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
    let editorOptions = {
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
    let editorOptions = {
      showTestSurveyTab: false
    };
    creator.render(null, editorOptions);
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
