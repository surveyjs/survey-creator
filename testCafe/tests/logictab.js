import { url, init } from "../settings";
import page from "../page-model";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `logictab_editor`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  var creatorOptions = { showJSONEditorTab: false, showLogicTab: true };
  await init();
});

test(`Create logic`, async t => {
  await t
    .click(page.toolBarQuestion("Dropdown"))
    .click(page.toolBarQuestion("Checkbox"))
    .click(page.toolBarQuestion("Single Input"))
    .click(page.toolBarQuestion("Single Input"))
    .expect(page.questions.count)
    .eql(4);

  //await t.click(page.creatorTab("Survey Logic"));

  //await t.wait(3000);
});
