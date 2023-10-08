import { Selector } from "testcafe";
import {
  getToolboxItemByText, questions, questionToolbarActions, url, getListItemByText,
  getTabbedMenuItemByText, creatorTabPreviewName
} from "../helper";
const title = "Question converter";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(1920, 1080);
});

test("Convert text question into multiple text question", async (t) => {
  const convertActionButton = questionToolbarActions.find('button[title="Single-Line Input"]');
  const textItemEditor = Selector(".sv-string-editor").withText("text1");

  await t
    .expect(questions.exists).notOk()

    .hover(getToolboxItemByText("Single-Line Input"))
    .click(getToolboxItemByText("Single-Line Input"))
    .expect(convertActionButton.visible).ok()
    .click(convertActionButton)
    .click(getListItemByText("Multiple Textboxes"))
    .expect(getToolboxItemByText("Multiple Textboxes").visible).ok()
    .click(textItemEditor)
    .typeText(textItemEditor, "myItem1")
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(Selector(".sv-string-viewer").withText("myItem1").visible).ok();
});