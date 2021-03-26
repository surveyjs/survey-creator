import { url, init } from "../helper";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `add properties`;

const addProperty = ClientFunction(() => {
  //add a property to the survey object
  Survey.Serializer.addProperty("survey", {
    name: "customProperty:number",
    default: 123456
  });
});

fixture`General: ${title}`.page`${url}`.beforeEach(async ctx => {
  await addProperty();
  await init();
});

test(`check the new prop exists`, async t => {
  const getPosition = ClientFunction(() =>
    document.documentElement.innerHTML.indexOf("Custom property")
  );

  const OthersTab = Selector(".svd_object_editor span").withText("Others");

  await t.click(OthersTab);

  assert.notEqual(await getPosition(), -1);
});
