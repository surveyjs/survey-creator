import { url, init } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `drag and drop`;
/* Uncomment after releasing SurveyJS Library v1.0.51-
fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`check d&d`, async t => {
  const getQuestionsAddedCount = ClientFunction(
    () => document.querySelectorAll(".svd_container .svd_question ").length
  );

  await t.dragToElement(
    `[title~=Radiogroup]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 1);
});

test(`check drop to the bottom`, async t => {
  const getQuestionsAddedCount = ClientFunction(
    () => document.querySelectorAll(".svd_container .svd_question ").length
  );
  const checkCheckbox = ClientFunction(
    () =>
      document
        .querySelectorAll(".svd_container .svd_question ")[0]
        .querySelectorAll(".sv_qcbx ").length === 1
  );

  await t.dragToElement(
    `[title~=Checkbox]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 1);
  assert.ok(await checkCheckbox());

  await t.dragToElement(
    `[title~=Radiogroup]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 2);
});
*/
