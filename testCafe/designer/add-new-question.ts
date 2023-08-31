import { Selector, ClientFunction } from "testcafe";
import { setJSON, getAddNewQuestionButton, getToolboxItemByText, getVisibleElement, url, RatingToolboxItem } from "../helper";

const title = "Add new question";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

const getQuestionTitle = ClientFunction((index) => {
  return window["creator"].survey.getAllQuestions()[index].title;
});
const setStartEditTitleOnQuestionAdded = ClientFunction((val) => {
  return window["creator"].startEditTitleOnQuestionAdded = val;
});

test("Add New Question", async t => {
  await t
    .maximizeWindow()
    .expect(getAddNewQuestionButton().visible).ok()
    .click(getAddNewQuestionButton())
    .expect(Selector("span").withText("question1").visible).ok()
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()
    .click(Selector(".svc-page__add-new-question > button.svc-page__question-type-selector"))
    .wait(100)
    .pressKey("p")
    .click(Selector(".sv-popup:not(.sv-popup--overlay) li").withExactText("Panel").filterVisible())
    .click(getAddNewQuestionButton())
    .expect(Selector("span").withText("question1").visible).ok();
});

test("No Add New Question in HTML question placeholder", async t => {
  await t
    .resizeWindow(2560, 2000)
    .expect(getVisibleElement(".svc-question__content").exists).notOk()
    .hover(getToolboxItemByText("HTML"), { speed: 0.5 })
    .click(getToolboxItemByText("HTML"), { speed: 0.5 })
    .expect(getVisibleElement(".svc-question__content.svc-question__content--selected").exists).ok()

    .expect(Selector(".sd-question--html+.svc-panel__placeholder_frame .svc-panel__add-new-question > span").withText("Add Question").exists).notOk();
});
test("Add New Question and show title editor", async t => {
  await t
    .maximizeWindow()
    .expect(getAddNewQuestionButton().visible).ok()
    .click(getAddNewQuestionButton())
    .wait(150)
    .pressKey("A")
    .pressKey("B")
    .pressKey("C")
    .pressKey("Enter");

  let title = await getQuestionTitle(0);
  await t.expect(title).eql("ABC");

  await setStartEditTitleOnQuestionAdded(false);
  await t
    .click(getAddNewQuestionButton())
    .wait(150)
    .pressKey("C")
    .pressKey("D")
    .pressKey("E")
    .pressKey("Enter");
  title = await getQuestionTitle(1);
  await t.expect(title).eql("question2");

  await setStartEditTitleOnQuestionAdded(true);
  await t
    .click(getAddNewQuestionButton())
    .wait(150)
    .pressKey("C")
    .pressKey("D")
    .pressKey("E")
    .pressKey("Enter");
  title = await getQuestionTitle(2);
  await t.expect(title).eql("CDE");
});
test("Drag Drop Toolbox Item and show title editor", async (t) => {
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");
  const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");

  await setJSON({ pages: [{ name: "page1" }] });
  await t.maximizeWindow();

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 });
  await t
    .wait(150)
    .pressKey("A")
    .pressKey("B")
    .pressKey("C")
    .pressKey("Enter");

  let title = await getQuestionTitle(0);
  await t.expect(title).eql("ABC");

  await setStartEditTitleOnQuestionAdded(false);
  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, newGhostPagePage, { speed: 0.5 });
  await t
    .wait(150)
    .pressKey("C")
    .pressKey("D")
    .pressKey("E")
    .pressKey("Enter");
  title = await getQuestionTitle(1);
  await t.expect(title).eql("question2");
});
