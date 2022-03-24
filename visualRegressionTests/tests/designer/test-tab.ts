import { Selector } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, checkElementScreenshot, creatorTabPreviewName } from "../../helper";

const title = "Test tab Screenshot";

fixture`${title}`.page`${url}`;

const json1 = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "checkbox",
          "name": "question2",
          "choices": [
            "item1",
            "item2",
            "item3"
          ]
        }
      ],
      "title": "page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title page1 -- title ",
      "description": "page1 -- description"
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "name": "question3"
        }
      ]
    }
  ]
};

test("toolbar view", async (t) => {
  await t.resizeWindow(1280, 900);

  await setJSON(json1);

  await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
  await checkElementScreenshot("test-tab-toolbar.png", Selector(".svc-test-tab__content .sv-action-bar--pages"), t);

  await t.resizeWindow(380, 600);
  await checkElementScreenshot("test-tab-toolbar_responsive.png", Selector(".svc-footer-bar .svc-toolbar-wrapper"), t);
});

test("mobile iphone", async (t) => {
  await t.resizeWindow(1280, 900);

  await setJSON(json1);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector("#deviceSelector .sv-action-bar-item-dropdown"))
    .click(Selector(".sv-list__item").withText("iPhone 5"));

  await checkElementScreenshot("test-tab-iphone.png", Selector(".svd-simulator-wrapper"), t);
});