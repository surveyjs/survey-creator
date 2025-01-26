import { url, setJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Localization UI";

const changeLocale = ClientFunction(() => {
  window["creator"].locale = "de";
});

fixture(title)
  .page(url)
  .beforeEach(async (t) => {
    await t.maximizeWindow();
  });

test("Change Creator.locale property", async (t) => {
  await setJSON({ elements: [{ type: "checkbox", name: "question1" }] });
  await t.click(Selector("[data-name='question1']"));
  await changeLocale();
  await t.expect(Selector(".svc-survey-element-toolbar-item__title--with-icon").withText("Auswahl").exists).ok();
});