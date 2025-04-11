import { Selector } from "testcafe";
import { setSurveyProp, url, setJSON, getDropdownValue } from "../helper";
const title = "Change survey locale";

const json = {
  questions: [
    {
      type: "dropdown",
      name: "question1",
      choices: [
        "Item 1",
        "Item 2",
        "Item 3"
      ]
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Change survey locale", async t => {
  const placeholder = Selector(".sd-input.sd-dropdown input").getAttribute("placeholder");
  await setJSON(json);

  await t.expect(placeholder).eql("Select...");
  await setSurveyProp("locale", "de");
  await t.expect(placeholder).eql("Bitte auswählen...");
  await setSurveyProp("locale", "es");
  await t.expect(placeholder).eql("Seleccione...");
  await setSurveyProp("locale", "it");
  await t.expect(placeholder).eql("Scegli...");
  await setSurveyProp("locale", "");
  await t.expect(placeholder).eql("Select...");
});