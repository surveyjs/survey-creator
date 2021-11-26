import { Selector } from "testcafe";
import { setSurveyProp, url, setJSON } from "../helper";
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

  await t.expect(Selector("div").withText("Choose...").visible).ok();
  await setSurveyProp("locale", "de");
  await t.expect(Selector("div").withText("Bitte auswählen...").visible).ok();
  await setSurveyProp("locale", "es");
  await t.expect(Selector("div").withText("Seleccione...").visible).ok();
  await setSurveyProp("locale", "it");
  await t.expect(Selector("div").withText("Scegli...").visible).ok();
  await setSurveyProp("locale", "");
  await t.expect(Selector("div").withText("Choose...").visible).ok();
});