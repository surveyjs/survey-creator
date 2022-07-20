import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { urlDropdownCollapseView, setJSON, getTabbedMenuItemByText, creatorTabPreviewName, checkElementScreenshot } from "../../helper";

const title = "Dropdown question creator test";

fixture`${title}`.page`${urlDropdownCollapseView}`.beforeEach(async (t) => {
});

const json = {
  questions: [
    {
      type: "dropdown",
      name: "q1",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    }
  ]
};

test("Check the upper part of the page", async (t) => {
  await t.resizeWindow(1920, 1080);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const questionSelector = Selector(".svc-question__content");
  const buttonSelector = Selector(".svc-question__dropdown-choices--wrapper .svc-action-button");

  await setJSON(json);

  await checkElementScreenshot("collapsed-dropdown.png", questionSelector, t);

  await t.click(buttonSelector);
  await checkElementScreenshot("not-collapsed-dropdown.png", questionSelector, t);
});

