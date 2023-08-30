import { SingleInputToolboxItem, getAddNewQuestionButton, getTabbedMenuItemByText, getToolboxItemByText, url } from "../helper";
import { Selector } from "testcafe";
const title = "Check Empty Survey JSON";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Designer with empty json should show only one ghost page", async (t) => {
  const pages = Selector(".svc-page__content");
  const ghostPage = Selector(".svc-page__content.svc-page__content--new");
  const newGhostPagePage = Selector("[data-sv-drop-target-survey-element='newGhostPage']");

  await t
    .expect(pages.count).eql(1)
    .expect(ghostPage.count).eql(1)

    .click(getAddNewQuestionButton())
    .expect(pages.count).eql(2)
    .expect(ghostPage.count).eql(1)

    .click(getTabbedMenuItemByText("JSON Editor"))
    .click(Selector(".svc-json-editor-tab__content"))
    .pressKey("ctrl+a delete")
    .click(getTabbedMenuItemByText("Designer"))
    .expect(pages.count).eql(1)
    .expect(ghostPage.count).eql(1)

    .hover(getToolboxItemByText("Single-Line Input"))
    .dragToElement(SingleInputToolboxItem, newGhostPagePage, { speed: 0.5 })

    .expect(pages.count).eql(2)
    .expect(ghostPage.count).eql(1);
});

