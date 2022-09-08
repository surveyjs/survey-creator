import { setSurveyProp, url, setJSON, getDropdownValue } from "../helper";
const title = "Change survey locale";

const json = {
  questions: [
    {
      type: "dropdown",
      name: "question1",
      choices: [
        "item1",
        "item2",
        "item3"
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
  await setJSON(json);

  await t.expect(getDropdownValue()).eql("Select...");
  await setSurveyProp("locale", "de");
  await t.expect(getDropdownValue()).eql("Bitte auswählen...");
  await setSurveyProp("locale", "es");
  await t.expect(getDropdownValue()).eql("Seleccione...");
  await setSurveyProp("locale", "it");
  await t.expect(getDropdownValue()).eql("Scegli...");
  await setSurveyProp("locale", "");
  await t.expect(getDropdownValue()).eql("Select...");
});