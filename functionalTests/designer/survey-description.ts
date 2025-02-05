import { url, setJSON, generalGroupName, getPropertyGridCategory } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Survey Description";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Edit survey description", async (t) => {
  const description = "SurveyDescription";
  const placeholder = "Description";

  await setJSON({ pages: [{ name: "page1" }] });
  await t
    .click(Selector(`span[aria-placeholder='${placeholder}']`))
    .pressKey(description.split("").join(" "))
    .pressKey("enter")
    .expect(Selector("[data-name='description']").find("textarea").value).eql(description, "Survey description in property grid is updated");
});