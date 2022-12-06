import { Selector } from "testcafe";
import { urlDropdownCollapseView, setJSON, takeElementScreenshot, wrapVisualTest } from "../../helper";

const title = "Dropdown question creator test";

fixture`${title}`.page`${urlDropdownCollapseView}`.beforeEach(async (t) => {
});

const json = {
  questions: [
    {
      type: "dropdown",
      name: "q1",
      choices: [
        "Item 1",
        "Item 2",
        "Item 3"
      ]
    }
  ]
};

test("Check collapsed dropdown", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

    const questionSelector = Selector(".svc-question__content");
    const buttonSelector = Selector(".svc-question__dropdown-choices--wrapper .svc-action-button");

    await setJSON(json);

    await takeElementScreenshot("collapsed-dropdown.png", questionSelector, t, comparer);

    await t.click(buttonSelector);
    await takeElementScreenshot("not-collapsed-dropdown.png", questionSelector, t, comparer);
  });
});