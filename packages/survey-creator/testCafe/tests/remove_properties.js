import { url, init } from "../settings";
import { ClientFunction } from "testcafe";
const assert = require("assert");
const title = `remove properties`;

const initRemoveProperty = ClientFunction(() => {
  //remove a property to the page object. You can't set it in JSON as well
  Survey.Serializer.removeProperty("survey", "cookieName");
});

const initCreatorEvents = ClientFunction(() => {
  var creator = window.creator;
  creator.onCanShowProperty.add(function(sender, options) {
    if (options.obj.getType() == "survey") {
      options.canShow = options.property.name == "title";
    }
  });
});

fixture`General: ${title}`.page`${url}`.beforeEach(async ctx => {
  await initRemoveProperty();
  await init();
  await initCreatorEvents();
});

test(`check the prop doesn't exists`, async t => {
  const getPosition = ClientFunction(() =>
    document.documentElement.innerHTML.indexOf("cookieName")
  );

  assert.equal(await getPosition(), -1);
});
