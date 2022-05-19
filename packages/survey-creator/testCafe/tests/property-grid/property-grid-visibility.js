import { init } from "../../helper";
import { Selector } from "testcafe";
const assert = require("assert");
const title = `property grid visibility`;

const url = "http://127.0.0.1:7777/example/createCreatorTab.html";

fixture`Property grid: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init({});
});

test(`check property grid visibility when added new creator tab`, async t => {
  await t.expect(Selector("svd-designer-container--right-side").style.width).notEql(0);
});
