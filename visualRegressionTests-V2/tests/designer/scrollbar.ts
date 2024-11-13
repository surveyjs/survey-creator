import { url, takeElementScreenshot, objectSelectorButton, propertyGridSelector, setJSON, creatorContentSelector, getPropertyGridCategory, generalGroupName, wrapVisualTest } from "../../helper";

const title = "Sidebar Screenshot";

fixture`${title}`.page`${url}`;

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1"
        },
        {
          "type": "radiogroup",
          "name": "question2"
        },
        {
          "type": "radiogroup",
          "name": "question2"
        },
      ]
    },
  ]
};

test("check scrollbars", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    await setJSON(json);

    await takeElementScreenshot("scrollbar-property-grid.png", propertyGridSelector, t, comparer);
    //await t.hover(propertyGridSelector, { offsetX: -6, offsetY: 100, speed: 0.5 });
    //await takeElementScreenshot("scrollbar-property-grid-hover.png", propertyGridSelector, t, comparer);

    await takeElementScreenshot("scrollbar-creator-content.png", creatorContentSelector, t, comparer);
    //await t.hover(creatorContentSelector, { offsetX: -23, offsetY: 100 });
    //await takeElementScreenshot("scrollbar-creator-content-hover.png", creatorContentSelector, t, comparer);
  });
});
