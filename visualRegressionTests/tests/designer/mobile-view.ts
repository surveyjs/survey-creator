import { ClientFunction, Selector } from "testcafe";
import { url, takeElementScreenshot, propertyGridSelector, setJSON, creatorContentSelector, wrapVisualTest } from "../../helper";

const title = "Mobile view / responsiveness";

fixture`${title}`.page`${url}`;

const json = {
  showQuestionNumbers: "on",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "radiogroup",
          "name": "question2",
          "choices": ["One", "Two", "Three"]
        }
      ]
    },
  ]
};

test("check whole layout", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(500, 900);
    await setJSON(json);
    await takeElementScreenshot("creator-mobile-paddings.png", Selector(".svc-creator"), t, comparer);
    await t.click(Selector(".svc-page__content"), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("creator-mobile-page-selected-paddings.png", Selector(".svc-creator"), t, comparer);
  });
});

test("smartphone layout", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(375, 900);
    await setJSON(json);
    await takeElementScreenshot("creator-smartphone.png", Selector(".svc-creator"), t, comparer);
    await t.click(Selector(".svc-page__content"), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("creator-smartphone-selected.png", Selector(".svc-creator"), t, comparer);
  });
});

test("smartphone layout with page drag", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => {
      window["creator"].allowDragPages = true;
      window["creator"].expandCollapseButtonVisibility = "onhover";
    })();

    await setJSON(json);

    await t.resizeWindow(375, 900);
    await takeElementScreenshot("creator-smartphone-page-drag.png", Selector(".svc-creator"), t, comparer);
    await t.click(Selector(".svc-page__content"), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("creator-smartphone-selected-page-drag.png", Selector(".svc-creator"), t, comparer);
  });
});