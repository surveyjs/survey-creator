import { url, checkElementScreenshot, objectSelectorButton, propertyGridSelector, expandButtonSelector, setJSON, generalGroupName, getPropertyGridCategory } from "../../helper";

const title = "Sidebar Screenshot";

fixture`${title}`.page`${url}`;

test("object selector popup", async (t) => {
  await setJSON({ pages: [{ name: "page1" }] });
  await t
    .click(getPropertyGridCategory(generalGroupName))
    .resizeWindow(750, 700)
    .click(expandButtonSelector)
    .click(objectSelectorButton);

  await checkElementScreenshot("side-bar-object-selector.png", propertyGridSelector, t);
  await t.resizeWindow(1920, 900);
});
