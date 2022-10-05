import { url, objectSelectorButton, propertyGridSelector, expandButtonSelector, setJSON, takeElementScreenshot, wrapVisualTest } from "../../helper";

const title = "Sidebar Screenshot";

fixture`${title}`.page`${url}`;

test("object selector popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await setJSON({ pages: [{ name: "page1" }] });
    await t
      .resizeWindow(750, 700)
      .click(expandButtonSelector)
      .click(objectSelectorButton);

    await takeElementScreenshot("side-bar-object-selector.png", propertyGridSelector, t, comparer);
    await t.resizeWindow(1920, 900);
  });
});
