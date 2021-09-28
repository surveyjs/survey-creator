import { url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Survey Description";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Edit survey description", async (t) => {
  const description = "SurveyDescription";
  const placeholder = await ClientFunction(() => {
    const property = window["Survey"].Serializer.findProperty("survey", "description");
    return window["creator"].getLocString(property.placeholder);
  })();
  await t
    .click(Selector(`span[aria-placeholder='${placeholder}']`))
    .pressKey(description.split("").join(" "))
    .pressKey("enter")
    .expect(Selector("textarea[aria-label=Description]").value).eql(description, "Survey description in property grid is updated");
});