import { setJSON, url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Page Title";

const json = {
  questions: [
    {
      type: "text",
      name: "page_title"
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Edit page title", async (t) => {
  await setJSON(json);
  const title = "PageTitle";
  await t
    .click(Selector("span[aria-placeholder='Page 1']"))
    .pressKey(title.split("").join(" "))
    .pressKey("enter")
    .expect(Selector("textarea[aria-label=Title]").value).eql(title, "Page title in property grid is updated");
});