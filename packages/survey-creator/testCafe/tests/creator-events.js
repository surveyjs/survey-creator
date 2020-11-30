import { url, init } from "../settings";
import { Selector, ClientFunction } from "testcafe";
import { createUnionOrIntersectionTypeNode } from "typescript";
const assert = require("assert");
const title = `creator-events`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  await init();
});

test(`onPropertyAfterRender event`, async (t) => {
  const addEvent = ClientFunction(() => {
    let count = 0;

    window.creator.onPropertyAfterRender.add(() => {
      count++;
    });
    window.creator.render(null, null);

    return count;
  });

  const checkCount = await addEvent();

  assert.equal(checkCount, 6); // 6 default rendered properties
});
