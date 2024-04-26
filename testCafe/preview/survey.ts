import { url, getTabbedMenuItemByText, setJSON, creatorTabPreviewName } from "../helper";
import { Selector, ClientFunction } from "testcafe";
const title = "Preview tab";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Test popups", async (t) => {
  await setJSON({
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "paneldynamic",
            "name": "question1",
            "templateElements": [
              {
                "type": "text",
                "name": "question2"
              }
            ],
            "panelCount": 20,
            "renderMode": "tab"
          }
        ]
      }
    ]
  });

  const popup = Selector(".sv-popup__container").filterVisible();
  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(popup.visible).notOk()
    .click(Selector(".svd-simulator-main .sv-dots__item"))
    .expect(popup.visible).ok()
    .click(Selector(".sd-question__title").withText("question1"))
    .expect(popup.visible).notOk();
});
