import { url, checkElementScreenshot, objectSelectorButton, propertyGridSelector, setShowPropertyGrid, expandButtonSelector } from "../../helper";

const title = "Sidebar Screenshot";

fixture`${title}`.page`${url}`;

test("object selector popup", async (t) => {
  await setShowPropertyGrid(true);
  await t
    .resizeWindow(750, 700)
    .click(expandButtonSelector)
    .click(objectSelectorButton);

  await checkElementScreenshot("side-bar-object-selector.png", propertyGridSelector, t);
  await t.resizeWindow(1920, 900);
});
