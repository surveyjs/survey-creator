import { url, init } from "../helper";
import { ClientFunction } from "testcafe";
const assert = require("assert");
const title = `drag and drop`;

fixture`General: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  await ctx.resizeWindow(1920, 1080);
  await init();
});

test.skip(`check d&d all toolbox elements`, async (t) => {
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

test(`check drop to the bottom`, async (t) => {
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

const dragToTopConfig = {
  offsetY: 10,
  destinationOffsetY: 30,
  speed: 0.9
};
const dragToBottomConfig = {
  offsetY: -10,
  destinationOffsetY: -30,
  speed: 0.9
};

test("check change order of questions", async (t) => {
  const getQuestionsOrder = ClientFunction(() => {
    var names = [];
    document
      .querySelectorAll(".svd_questions_editor .svd_question")
      .forEach((questionTemplate) => {
        names.push(questionTemplate.getAttribute("name"));
      });
    return names;
  });

  await t.doubleClick(`[title~=Checkbox]`);
  await t.dragToElement(
    ".svd_questions_editor [name='question1']",
    ".svd_questions_editor",
    dragToBottomConfig
  );
  assert.deepEqual(await getQuestionsOrder(), ["question2", "question1"]);
});

const getQuestionsInPanel = ClientFunction(() => {
  var names = [];
  document
    .querySelectorAll(".svd_questions_editor .panel_actions .svd_question")
    .forEach(function(question) {
      names.push(question.name);
    });
  return names;
});

test("check drop question from toolbox in panel", async (t) => {
  await t.click(`[title=Panel]`);
  await t.dragToElement(
    `[title=Boolean]`,
    ".svd_questions_editor .panel_actions"
  );

  assert.deepEqual(await getQuestionsInPanel(), ["question1"]);
});

test("check drop question from toolbox to the bottom of panel", async (t) => {
  await t.click(`[title=Panel]`);
  await t.dragToElement(
    `[title=Boolean]`,
    ".svd_questions_editor .panel_actions"
  );
  await t.dragToElement(
    `[title=Boolean]`,
    ".svd_questions_editor .panel_actions"
  );

  assert.equal((await getQuestionsInPanel()).length, 2);
});

test.skip("check move question from panel to up", async (t) => {
  await t.click("[title=Panel]");
  await t.dragToElement(
    "[title=Boolean]",
    ".svd_questions_editor .panel_actions"
  );

  await t.dragToElement(
    ".svd_questions_editor .panel_actions [name=question1]",
    ".svd_questions_editor",
    dragToTopConfig
  );

  assert.deepEqual(await getQuestionsInPanel(), []);
});

test("check move question from panel to bottom", async (t) => {
  await t.click("[title=Panel]");
  await t.dragToElement(
    "[title=Boolean]",
    ".svd_questions_editor .panel_actions"
  );

  await t.dragToElement(
    ".svd_questions_editor .panel_actions [name=question1]",
    ".svd_questions_editor",
    dragToBottomConfig
  );

  assert.deepEqual(await getQuestionsInPanel(), []);
});

test("check move question from survey to panel", async (t) => {
  await t.click("[title=Panel]");
  await t.click("[title=Checkbox]");
  await t.dragToElement(
    ".svd_questions_editor [name=question1]",
    ".svd_questions_editor .panel_actions"
  );

  assert.deepEqual(await getQuestionsInPanel(), ["question1"]);
});

test("check change order of questions in panel", async (t) => {
  await t.click("[title=Panel]");
  await t.dragToElement(
    `[title=Boolean]`,
    ".svd_questions_editor .panel_actions"
  );
  await t.dragToElement(
    `[title=Boolean]`,
    ".svd_questions_editor .panel_actions",
    dragToBottomConfig
  );
  await t.dragToElement(
    ".svd_questions_editor [name=question1]",
    ".svd_questions_editor .panel_actions",
    dragToBottomConfig
  );

  assert.deepEqual(await getQuestionsInPanel(), ["question2", "question1"]);
});
