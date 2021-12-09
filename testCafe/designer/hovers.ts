import { Selector } from "testcafe";
import { setJSON, url } from "../helper";
const title = "Page hover";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

const json = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    }
  ]
};

test("Page hover test", async t => {
  await setJSON(json);
  await t
    .maximizeWindow();
  const page = Selector(".svc-page__content");
  const question = Selector(".svc-question__adorner");
  await t.hover(page, { offsetX: 5, offsetY: 5 })
    .expect(page.hasClass("svc-hovered-ready")).ok({ timeout: 50 })
    .expect(page.hasClass("svc-hovered")).notOk({ timeout: 20 })
    .expect(page.hasClass("svc-hovered")).ok({ timeout: 300 })
    .hover(Selector(".svc-toolbox"))
    .expect(page.hasClass("svc-hovered")).notOk({ timeout: 50 })
    .hover(question, { offsetX: 5, offsetY: 5 })
    .expect(question.hasClass("svc-hovered")).ok({ timeout: 50 })
    .wait(300)
    .expect(page.hasClass("svc-hovered")).notOk();
});