import { Selector } from "testcafe";
import { url, setJSON, collapseButtonSelector, questions, propertyGridSelector, toolbox, toolboxItemIcons, toolboxItemTitles, pageNavigator, questionToolbarActions } from "../helper";
const title = "Creat";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

const flyoutPropertyGrid = Selector(".svc-flyoutPanelMode-panel");

test.before(async t => {
  await t.resizeWindow(1920, 900);
})
("Responsive creator: toolbox & page navigator", async (t) => {
  await setJSON({
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
  });
  await t
    .click(collapseButtonSelector)
    .expect(toolbox.visible).ok()
    .expect(toolboxItemIcons.count).eql(20)
    .expect(toolboxItemTitles.count).eql(20)
    .expect(pageNavigator.visible).ok()

    .resizeWindow(1000, 900)
    .expect(toolbox.visible).ok()
    .expect(toolboxItemIcons.count).eql(20)
    .expect(toolboxItemTitles.count).eql(0)
    .expect(pageNavigator.visible).ok()

    .resizeWindow(750, 500)
    .expect(toolbox.exists).notOk()
    .expect(pageNavigator.exists).notOk();
});

test.before(async t => {
  await t.resizeWindow(1920, 900);
})
("Responsive creator: property grid", async (t) => {
  await setJSON({
    pages: [
      {
        elements: [{ type: "text", name: "question1" }, { type: "text", name: "question2" }]
      },
      {
        elements: [{ type: "text", name: "question2" }]
      }
    ]
  });
  await t
    .click(questions.find(".sv-string-editor").withText("question1"))
    .expect(propertyGridSelector.visible).ok()
    .expect(flyoutPropertyGrid.exists).notOk()
    .expect(questionToolbarActions.count).eql(4)

    .resizeWindow(750, 700)
    .expect(propertyGridSelector.visible).ok()
    .expect(flyoutPropertyGrid.exists).ok()

    .click(collapseButtonSelector)
    .expect(propertyGridSelector.visible).notOk()
    .expect(flyoutPropertyGrid.exists).notOk()

    .click(questions.find(".sv-string-editor").withText("question2"))
    .expect(questionToolbarActions.count).eql(5)

    .click(questionToolbarActions.withText("Settings"))
    .expect(propertyGridSelector.visible).ok()
    .expect(flyoutPropertyGrid.exists).ok()

    .click(collapseButtonSelector)
    .expect(propertyGridSelector.visible).notOk()
    .expect(flyoutPropertyGrid.exists).notOk();
});