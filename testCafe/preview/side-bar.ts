import { getTabbedMenuItemByText, setJSON, creatorTabPreviewName, urlSideBarPreview, creatorTabDesignerName } from "../helper";
import { Selector } from "testcafe";
const title = "Preview tab";

fixture`${title}`.page`${urlSideBarPreview}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

const json = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "Question1",
        }
      ]
    }
  ]
};

test("Test theme switcher", async (t) => {
  await setJSON(json);

  const drpdwnSelector = Selector(".svc-side-bar .spg-panel .spg-question__content .spg-dropdown");
  const defaultRoot = Selector(".sd-root-modern");
  const modernRoot = Selector(".sv-root-modern");

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(modernRoot.visible).notOk()
    .expect(defaultRoot.visible).ok()
    .click(drpdwnSelector)
    .click(drpdwnSelector.child(1))
    .expect(modernRoot.visible).ok()
    .expect(defaultRoot.visible).notOk();

  await t
    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(modernRoot.visible).ok()
    .expect(defaultRoot.visible).notOk();
});
