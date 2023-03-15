import { url, init, getListItemByText } from "../helper";
import page from "../page-model";
import { Selector } from "testcafe";
const title = `visibleIf_editor`;

fixture`General: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  await init();
});

test(`Set visibleIf property`, async (t) => {
  await t.maximizeWindow();
  await t
    .click(page.toolBarQuestion("Dropdown"))
    .click(page.toolBarQuestion("Checkbox"))
    .click(page.toolBarQuestion("Single Input"))
    .click(page.toolBarQuestion("Single Input"));

  await t.expect(page.questions.count).eql(4);
  await t.click(page.selectElementInPropertyGrid(page.questions.nth(-1)));
  await t
    .click(page.propertyGridCategory("General"))
    .click(page.propertyGridCategory("Logic"))
    .click(Selector(".svd-expression-header").nth(0));
  const questionSelect = Selector(`div[data-name="questionName"]`);
  await t
    .click(questionSelect)
    .click(getListItemByText("question1"));
  const questionValue = Selector(`div[data-name="questionValue"]`);
  await t
    .click(questionValue)
    .click(getListItemByText("item1"));

  const expressionText = Selector(".svd-expression-header").nth(0).child(0)
    .innerText;
  await t.expect(expressionText).eql("{question1} == 'item1'");

  await t
    .click(`input[value="Remove"]`)
    .expect(expressionText)
    .eql("Expression is empty");

  await t
    .click(Selector(`button`).withText("Edit"))
    .typeText(
      Selector(`textarea`),
      "{question1} = 'item2' and {question2} = ['item1', 'item2']"
    )
    .expect(expressionText)
    .eql("({question1} == 'item2') and ({question2} == ['item1', 'item2'])");

  await t
    .click(Selector(`button`).withText("Build"))
    .expect(Selector(`div[data-name="questionName"]`).count)
    .eql(2);
});
