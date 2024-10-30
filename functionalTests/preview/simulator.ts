import { url, getTabbedMenuItemByText, setJSON, creatorTabPreviewName, getBarItemByTitle, getListItemByText } from "../helper";
import { Selector } from "testcafe";
const title = "Preview tab simulator";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Simulator popups", async (t) => {
  await setJSON({
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "dropdown",
            "name": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  });

  const dropdownSelect = Selector(".sd-dropdown");
  const dropdownPopup = Selector(".svd-simulator-content .sv-popup");
  const dropdownPopupContainer = dropdownPopup.find(".sv-popup__container");
  const tabletPopup = "sv-popup--tablet";
  const overlayPopup = "sv-popup--dropdown-overlay";

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(dropdownPopupContainer.visible).notOk()

    .click(dropdownSelect)
    .expect(dropdownPopupContainer.visible).ok()
    .expect(dropdownPopup.classNames).notContains(overlayPopup)
    .expect(dropdownPopup.classNames).notContains(tabletPopup)

    .click(getBarItemByTitle("Select device type"))
    .click(getListItemByText("iPad Air"))

    .click(dropdownSelect)
    .expect(dropdownPopupContainer.visible).ok()
    .expect(dropdownPopup.classNames).contains(overlayPopup)
    .expect(dropdownPopup.classNames).contains(tabletPopup)

    .click(getBarItemByTitle("Select device type"))
    .click(getListItemByText("iPhone 15"))
    .click(dropdownSelect)
    .expect(dropdownPopupContainer.visible).ok()
    .expect(dropdownPopup.classNames).contains(overlayPopup)
    .expect(dropdownPopup.classNames).notContains(tabletPopup);
});
