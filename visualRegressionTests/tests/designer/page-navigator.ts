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
    await t.resizeWindow(1920, 400);
    await setJSON(json);
    await t.wait(500);
    const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");

    await t.expect(pageNavigatorElement.visible).ok();
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-right.png", pageNavigatorElement, t, comparer);

    await t.hover(Selector(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)"));
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-right-hovered.png", pageNavigatorElement, t, comparer);
  });
});

test("On the right side opened popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 400);
    await setJSON(json);

    await t.click(".svc-page-navigator__selector");
    await t.click(".svc-page-navigator__selector");
    await t.click(".svc-page-navigator__selector");
    await takeElementScreenshot("page-navigator-popup.png", Selector(".svc-page-navigator__selector .sv-popup__container"), t, comparer);
    await takeElementScreenshot("page-navigator-with-popup.png", Selector(".svc-creator-tab"), t, comparer);
  });
});

test("On the left side", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 400);
    await setJSON(json);
    await t.wait(500);

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
    await t.resizeWindow(1920, 400);
    await ClientFunction(() => {
      document.body.setAttribute("dir", "rtl");
    })();

    await setJSON(json);
    await t.wait(500);
    const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");

    await t.expect(pageNavigatorElement.visible).ok();
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-left-rtl.png", pageNavigatorElement, t, comparer);

    await t.hover(Selector(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)"));
    await t.wait(1000);
    await takeElementScreenshot("page-navigator-left-rtl-hovered.png", pageNavigatorElement, t, comparer);
  });
});

test("Page Navigator works with - scroll-behavior: smooth;", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1400, 800);
    await ClientFunction(() => {
      document.documentElement.style["scroll-behavior"] = "smooth";
    })();

    await setJSON({ pages: [{ name: "page1", questions: [{ type: "radiogroup", choices: [1, 2, 3] }] }, { name: "page2" }, { name: "page3" }, { name: "page4" }, { name: "page5" }] });

    const firstPageNavigatorItem = "svc-page-navigator-item:nth-child(1) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-of-type(1) > .svc-page-navigator-item--selected";
    const thirdPageNavigatorItem = "svc-page-navigator-item:nth-child(3) > .svc-page-navigator-item--selected, .svc-page-navigator-item:nth-of-type(3) > .svc-page-navigator-item--selected";
    const navigatorItem2Click = ".svc-page-navigator-item-content";

    await t
      .expect(Selector(firstPageNavigatorItem).exists).ok()
      .expect(Selector(thirdPageNavigatorItem).exists).notOk()
      .click(Selector(navigatorItem2Click).nth(2))
      .expect(Selector(firstPageNavigatorItem).exists).notOk()
      .expect(Selector(thirdPageNavigatorItem).exists).ok();

    await t.wait(1000);
    await takeElementScreenshot("design-surface-navigated-to-3rd.png", Selector(".svc-creator-tab"), t, comparer);
  });
});
