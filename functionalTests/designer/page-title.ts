import { generalGroupName, getPropertyGridCategory, setJSON, url } from "../helper";
import { Selector } from "testcafe";
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
  const editorValue = Selector("[data-name='title']").find("textarea");
  await t
    .click(getPropertyGridCategory(generalGroupName))

    .click(Selector("span[aria-placeholder='Page 1']"))
    .expect(editorValue.value).eql("", "Page title in property grid is empty")

    .pressKey(title.split("").join(" "))
    .pressKey("enter")
    .expect(editorValue.value).eql(title, "Page title in property grid is updated");
});