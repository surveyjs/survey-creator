import { Selector } from "testcafe";
import { url, setJSON, getPropertyGridCategory, logicGroupName, generalGroupName, wrapVisualTest, takeElementScreenshot } from "../../helper";

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

    const sectionContentElement = Selector("h4[aria-label=Logic]").parent().nextSibling();

    await t.expect(sectionContentElement.visible).ok();
    await takeElementScreenshot("logic-button-default.png", sectionContentElement, t, comparer);

    await t
      .hover(sectionContentElement.find(".spg-action-button").nth(1));
    await takeElementScreenshot("logic-button-hovered.png", sectionContentElement, t, comparer);
  });
});
test("Check run expression description", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

    await setJSON({});
    await t.click(getPropertyGridCategory(logicGroupName))
      .click(Selector("[data-name='triggers'] .spg-action-button").filterVisible())
      .click(Selector("[data-name='runExpression'] .spg-action-button").filterVisible());
    await takeElementScreenshot("run-expression-description.png", Selector("[data-name='runExpression']"), t, comparer);
  });
});