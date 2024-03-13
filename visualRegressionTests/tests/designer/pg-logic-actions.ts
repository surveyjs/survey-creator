import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, getPropertyGridCategory, logicGroupName, generalGroupName, wrapVisualTest, takeElementScreenshot, getVisibleElement, getListItemByText } from "../../helper";

const title = "Actions in Logic section Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1"
        }
      ]
    }
  ]
};

test("Check states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

    await setJSON(json);

    // await t
    //   .click(Selector(".svd-grid-expand"));
    await t.click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
    await t.click(getPropertyGridCategory(generalGroupName));
    await t.click(getPropertyGridCategory(logicGroupName));

    const sectionContentElement = Selector("h4[aria-label=Conditions]").parent().nextSibling();

    await t.expect(sectionContentElement.visible).ok();
    await takeElementScreenshot("logic-button-default.png", sectionContentElement, t, comparer);

    await t
      .hover(sectionContentElement.find(".spg-action-button").nth(2));
    await takeElementScreenshot("logic-button-hovered.png", sectionContentElement, t, comparer);
  });
});
test("Check list item styles into logic popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json2 = {
      "elements": [
        {
          "type": "text",
          "name": "question1",
        }, {
          "type": "dropdown",
          "name": "region",
          "title": "Select a region",
          "choices": ["Africa", "Americas", "Asia", "Europe", "Oceania"]
        }
      ]
    };
    await t.resizeWindow(1280, 900);

    await setJSON(json2);
    await t.click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
    await t.click(getPropertyGridCategory(generalGroupName));
    await t.click(getPropertyGridCategory(logicGroupName));

    const sectionContentElement = Selector("h4[aria-label=Conditions]").parent().nextSibling();

    await t.click(sectionContentElement.find(".spg-action-button").nth(2))
      .click(Selector(".sl-dropdown"))
      .click(getListItemByText("region"))
      .pressKey("tab")
      .pressKey("tab")
      .pressKey("down")
      .pressKey("down");
    await takeElementScreenshot("pg-logic-popup-dropdown-list-item--focused.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t, comparer);
  });
});
test("Check run expression description", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

    await ClientFunction(() => {
      (window as any).SurveyCreatorCore.editorLocalization.getLocale().pe.expressionHelp = "Use curly brackets to access answers: `{question1} + {question2}`. Expressions also support functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `count()`, `avg()`, and others";
    })();
    await setJSON({});
    await t.click(getPropertyGridCategory(logicGroupName))
      .click(Selector("[data-name='triggers'] .spg-action-button").filterVisible().nth(1))
      .click(Selector("[data-name='runExpression'] .spg-action-button").filterVisible());
    await takeElementScreenshot("run-expression-description.png", Selector("[data-name='runExpression']"), t, comparer);
  });
});