import { Selector, ClientFunction } from "testcafe";
import { url, setJSON, changeToolboxLocation, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "Page Navigator Screenshot";

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
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "name": "question2"
        }
      ]
    }
  ]
};

test("On the right side (default)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON({ pages: [{ name: "page1" }] });

    await setJSON(json);
    const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");

    await t.expect(pageNavigatorElement.visible).ok();
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-right.png", pageNavigatorElement, t, comparer);

    await t.hover(Selector(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)"));
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-right-hovered.png", pageNavigatorElement, t, comparer);
  });
});

test("On the left side", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON({ pages: [{ name: "page1" }] });

    await setJSON(json);
    const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");
    await changeToolboxLocation("right");

    await t.expect(pageNavigatorElement.visible).ok();
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-left.png", pageNavigatorElement, t, comparer);

    await t.hover(Selector(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)"));
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-left-hovered.png", pageNavigatorElement, t, comparer);
  });
});

test("On the left side (rtl)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await ClientFunction(() => {
      document.body.setAttribute("dir", "rtl");
    })();

    await setJSON(json);
    const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");

    await t.expect(pageNavigatorElement.visible).ok();
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-left-rtl.png", pageNavigatorElement, t, comparer);

    await t.hover(Selector(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)"));
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-left-rtl-hovered.png", pageNavigatorElement, t, comparer);
  });
});
