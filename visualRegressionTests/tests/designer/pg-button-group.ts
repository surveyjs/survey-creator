import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, takeElementScreenshot, wrapVisualTest } from "../../helper";

const title = "Button group Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Check styles", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => window["creator"].showOneCategoryInPropertyGrid = true)();
    await t.resizeWindow(1920, 1080);

    // await t.click(Selector(".svd-grid-expand"));
    await t.click(Selector('[title="Quiz Mode"]'));

    const buttongroup = Selector(".spg-button-group").filterVisible();
    await takeElementScreenshot("button-group-disabled.png", buttongroup, t, comparer);
    await t.click(Selector("span").withExactText("Use a timer").filterVisible());
    await takeElementScreenshot("button-group-enabled.png", buttongroup, t, comparer);
    await t.hover(Selector("span").withExactText("Top").filterVisible());
    await takeElementScreenshot("button-group-selected-hovered.png", buttongroup, t, comparer);
    await t.hover(Selector("span").withExactText("Bottom").filterVisible());
    await takeElementScreenshot("button-group-unselected-hovered.png", buttongroup, t, comparer);
  });
});

test("Check long texts", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => window["creator"].showOneCategoryInPropertyGrid = true)();
    await t.resizeWindow(1920, 1080);

    await t.click(Selector('[title="Logo in the Survey Header"]'));
    await t.drag(Selector(".svc-resizer-west"), 200, 0);
    const buttongroup = Selector('[data-name="logoFit"] .spg-button-group').filterVisible();
    await takeElementScreenshot("button-group-ellipsis.png", buttongroup, t, comparer);
  });
});