import { Selector, ClientFunction } from "testcafe";
import { getToolboxItemByText, getVisibleElement, questionToolbarActions, setJSON, url } from "../helper";

const title = "Creator";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Creator dispose", async t => {
  await t
    .maximizeWindow()
    .expect(Selector(".sv-popup").exists).ok();
  await ClientFunction(() => {
    window["creator"].dispose();
  })();
  await t
    .expect(Selector(".sv-popup").exists).notOk();
});
test("Select survey on deleting the last question", async t => {
  await t
    .maximizeWindow()
    .hover(getToolboxItemByText("Single-Line Input"), { speed: 0.5 })
    .click(getToolboxItemByText("Single-Line Input"), { speed: 0.5 })
    .click(getVisibleElement(".svc-question__content"), { offsetX: 100, offsetY: 100 })
    .expect(Selector(".sv-string-viewer").withExactText("Visible").exists).ok()
    .click(Selector(questionToolbarActions.find('button[title="Delete"]')))
    .wait(2000)
    .expect(Selector(".sv-string-viewer").withExactText("Show the title").exists).notOk();
});

test("Keyboard tab navigation between questions", async (t) => {
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
          },
          {
            "type": "text",
            "name": "question2",
          }
        ]
      }
    ]
  };
  await setJSON(json);
  await t
    .click(Selector(".sv-string-editor").withText("question2"))
    .expect(Selector(".sv-string-editor").withText("question2").focused).ok()
    .pressKey("shift+tab")
    .expect(Selector(".svc-question__content--selected .sv-action-bar-item").withText("Delete").focused).ok()
    .pressKey("shift+tab")
    .expect(Selector(".svc-question__content--selected .sv-action-bar-item").withText("Required").focused).ok()
    .pressKey("shift+tab")
    .expect(Selector(".svc-question__content--selected .sv-action-bar-item").withText("Duplicate").focused).ok()
    .pressKey("shift+tab")
    .expect(Selector(".svc-question__content--selected .sv-action-bar-item").withText("Text").focused).ok()
    .pressKey("shift+tab")
    .expect(Selector(".svc-question__content--selected .sv-action-bar-item").withText("Single-Line Input").focused).ok()
    .pressKey("shift+tab")
    .expect(Selector(".sv-string-editor").withText("question1").focused).ok()
    .pressKey("tab")
    .expect(Selector(".svc-question__content--selected .sv-action-bar-item").withText("Single-Line Input").focused).ok()
    .pressKey("tab")
    .expect(Selector(".svc-question__content--selected .sv-action-bar-item").withText("Text").focused).ok()
    .pressKey("tab")
    .expect(Selector(".svc-question__content--selected .sv-action-bar-item").withText("Duplicate").focused).ok()
    .pressKey("tab")
    .expect(Selector(".svc-question__content--selected .sv-action-bar-item").withText("Required").focused).ok()
    .pressKey("tab")
    .expect(Selector(".svc-question__content--selected .sv-action-bar-item").withText("Delete").focused).ok()
    .pressKey("tab")
    .expect(Selector(".sv-string-editor").withText("question2").focused).ok();
});

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Check responsiveness is working correctly after model update", async t => {
  if (await ClientFunction(() => window["surveyJSFramework"])() === "ko") {
    return;
  }
  const mobileSelector = Selector(".svc-creator--mobile");
  await t
    .resizeWindow(1920, 1080)
    .expect(mobileSelector.exists).notOk()
    .resizeWindow(500, 800)
    .expect(mobileSelector.exists).ok()
    .resizeWindow(1920, 1080)
    .expect(mobileSelector.exists).notOk();
  await ClientFunction(() => {
    (window as any).updateCreatorModel({}, { elements: { type: "text", name: "q115" } });
  })();
  await t.expect(Selector("[data-name='q115']").exists).ok()
    .expect(await ClientFunction(() => !!(window as any).prevCreator.responsivityManager)()).notOk()
    .resizeWindow(1920, 1080)
    .expect(mobileSelector.exists).notOk()
    .resizeWindow(500, 800)
    .expect(mobileSelector.exists).ok()
    .resizeWindow(1920, 1080)
    .expect(mobileSelector.exists).notOk();
});
