import { url, init } from "../helper";
import { ClientFunction } from "testcafe";
const assert = require("assert");
const title = `creator-events`;

fixture`General: ${title}`.page`${url}`.beforeEach(async (ctx) => {
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
