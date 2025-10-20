// import { ClientFunction, Selector } from "testcafe";
// import { url, getTabbedMenuItemByText, getBarItemByTitle, setJSON, takeElementScreenshot, wrapVisualTest, urlLocalized_de, getListItemByText } from "../../helper";

// const title = "Translation tab Screenshot";

// fixture`${title}`.page`${url}`.beforeEach(async (t) => {
// });

// test("strings view", async (t) => {
//   await wrapVisualTest(t, async (t, comparer) => {
//     await t.resizeWindow(2560, 1440);
//     await setJSON(json);

//     const stringsView = Selector(".svc-creator-tab__content.svc-translation-tab");

//     await t.click(getTabbedMenuItemByText("Translation"));
//     await takeElementScreenshot("translation-tab.png", stringsView, t, comparer);

//     await t.resizeWindow(800, 1440);
//     await takeElementScreenshot("translation-tab-small-screen.png", stringsView, t, comparer);

//     await t.resizeWindow(2560, 1440);
//     await t.click(getBarItemByTitle("Used Strings Only"));
//     await t.click(getListItemByText("All Strings"));
//     await takeElementScreenshot("translation-tab-show-all-strings.png", stringsView, t, comparer);
//   });
// });
// });