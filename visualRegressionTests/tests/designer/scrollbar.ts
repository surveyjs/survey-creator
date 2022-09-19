import { url, checkElementScreenshot, objectSelectorButton, propertyGridSelector, setJSON, creatorContentSelector, getPropertyGridCategory, generalGroupName } from "../../helper";

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
  await t.resizeWindow(1920, 900);
  await setJSON(json);

  await checkElementScreenshot("scrollbar-property-grid.png", propertyGridSelector, t);
  //await t.hover(propertyGridSelector, { offsetX: -6, offsetY: 100, speed: 0.5 });
  //await checkElementScreenshot("scrollbar-property-grid-hover.png", propertyGridSelector, t);

  await checkElementScreenshot("scrollbar-creator-content.png", creatorContentSelector, t);
  //await t.hover(creatorContentSelector, { offsetX: -23, offsetY: 100 });
  //await checkElementScreenshot("scrollbar-creator-content-hover.png", creatorContentSelector, t);
});
