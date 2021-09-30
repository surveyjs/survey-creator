import { setJSON, url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid";

const json = {
  pages: [
    {
      elements: [{ type: "text", name: "question1" }]
    },
    {
      elements: [{ type: "text", name: "question2" }]
    },
    {
      elements: [{ type: "text", name: "question2" }]
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});
export default async function (t) {
  const { error } = await t.getBrowserConsoleMessages();

  await t.expect(error[0]).notOk();
}

test("Delete second page", async (t) => {
  const deleteButtons = Selector("div[name=pages]").find("button[title=Remove]");
  await setJSON(json);
  await t
    .click(Selector("h4").withExactText("General"))
    .click(Selector("h4").withExactText("Pages"))
    .expect(deleteButtons.count).eql(2)
    .click(deleteButtons)
    .expect(deleteButtons.count).eql(1);
});

test("Add calculated values", async (t) => {
  const addButton = Selector("div[name=calculatedValues]").find("button[title='Add New']");
  const rows = Selector("div[name=calculatedValues]").find("tbody").find("tr");

  await setJSON(json);
  await t
    .click(Selector("h4").withExactText("General"))
    .click(Selector("h4").withExactText("Logic"))
    .expect(rows.count).eql(0)
    .click(addButton)
    .expect(rows.count).eql(2);
});