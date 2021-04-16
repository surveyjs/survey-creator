import { url, init } from "../../helper";
import { Selector } from "testcafe";
const title = `string-editors`;

fixture`Property editors: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  await init();
});

test("ctrl+Z click when editing title - #855", async (t) => {
  await t
    .doubleClick("[title~=Dropdown]")
    .click(".svd-popup-editor-tab-general textarea")
    .pressKey("ctrl+z")
    .expect(Selector(".svd_survey_designer .sv_row").count)
    .eql(2);
});
