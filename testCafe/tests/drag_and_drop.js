import { url, init } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `drag and drop`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`check d&d`, async t => {
  const getQuestionsAddedCount = ClientFunction(
    () => document.querySelectorAll(".svd_container .svd_question ").length
  );

  await t.dragToElement(`[title~=Radiogroup]`, `.svd_container .well`);
  assert.equal(await getQuestionsAddedCount(), 1);
});
