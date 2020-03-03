import { url, init } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `drag and drop`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`check d&d all toolbox elements`, async t => {
  const getQuestionsAddedCount = ClientFunction(
    () => document.querySelectorAll(".svd_container .svd_question ").length
  );

  await t.dragToElement(
    `[title~=Radiogroup]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 1);

  await t.dragToElement(
    `[title~="Checkbox"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 2);

  await t.dragToElement(
    `[title="Single Input"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 3);

  await t.dragToElement(
    `[title="Dropdown"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 4);

  await t.dragToElement(
    `[title="Comment"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 5);

  await t.dragToElement(
    `[title="Rating"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 6);

  await t.dragToElement(
    `[title="Image picker"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 7);

  await t.dragToElement(
    `[title="Boolean"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 8);

  await t.dragToElement(
    `[title="Html"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 9);

  await t.dragToElement(
    `[title="Expression (read-only)"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 10);

  await t.dragToElement(
    `[title="File"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 11);

  await t.dragToElement(
    `[title="Matrix (single choice)"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 12);

  await t.dragToElement(
    `[title="Matrix (multiple choice)"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 13);

  await t.dragToElement(
    `[title="Matrix (dynamic rows)"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 14);

  await t.dragToElement(
    `[title="Multiple Text"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 15);

  await t.dragToElement(
    `[title="Panel"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 16);

  await t.dragToElement(
    `[title="Panel (dynamic panels)"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 17 + 1); //panel dynamic adds two questions that's why 17+1
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
    `[title~="Checkbox"]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 1);
  assert.ok(await checkCheckbox());

  await t.dragToElement(
    `[title="Radiogroup"]`,
    `.svd_container .svd_questions_editor`
  );

  assert.equal(await getQuestionsAddedCount(), 2);
  assert.equal(await getQuestionsAddedCount(), 2);
});
