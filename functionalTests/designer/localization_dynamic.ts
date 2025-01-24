import { url, setJSON, setSurveyProp } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Localization UI";
const customLogicTabName = "Miner Logik";

fixture(title)
  .page(url)
  .beforeEach(async (t) => {
    await t.maximizeWindow();
  });

test("Change Creator.locale property", async (t) => {
  await setJSON({ elements: [{ type: "checkbox", name: "question1" }] });
  await t.click(Selector("[data-name='question1']"));
  await setSurveyProp("locale", "de");
  await t.expect(Selector(".svc-survey-element-toolbar-item__title--with-icon").withText("Auswahl").exists).ok();
});