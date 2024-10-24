import { Selector } from "testcafe";
import { setSurveyProp, url, setJSON } from "../helper";
const title = "Clear survey functionality";

const json = {
  questions: [
    {
      type: "text",
      name: "simple question"
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Check cleear survey functionality", async t => {
  const pageSelector = Selector(".svc-creator .svc-tab-designer .svc-page");

  await setJSON(json);
  await t.expect(pageSelector.count).eql(2);
  await setJSON({});
  await t.expect(pageSelector.count).eql(0);
  await setJSON(json);
  await t.expect(pageSelector.count).eql(2);
  await setJSON({});
  await t.expect(pageSelector.count).eql(0);

});