import { Selector } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, checkElementScreenshot, creatorTabPreviewName, explicitErrorHandler, urlSideBarPreview } from "../../helper";

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
  await explicitErrorHandler();
  await setJSON(json1);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector("#deviceSelector button"))
    .click(Selector(".sv-list__item").withText("iPhone 5"));

  await checkElementScreenshot("test-tab-iphone.png", Selector(".svd-simulator-wrapper"), t);
});

fixture`${title}`.page`${urlSideBarPreview}`;

const json2 = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "multipletext",
          "name": "question1",
          "items": [
            {
              "name": "text1"
            },
            {
              "name": "text2"
            }
          ]
        }
      ]
    }
  ]
};

test("side bar with theme switcher", async (t) => {
  await t.resizeWindow(1280, 900);
  await explicitErrorHandler();
  await setJSON(json2);

  await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
  await checkElementScreenshot("preview-side-bar.png", Selector(".svc-side-bar"), t);

  const drpdwnSelector = Selector(".svc-side-bar .spg-panel .spg-question__content .spg-dropdown");
  const simulator = Selector(".svd-simulator-content");

  await checkElementScreenshot("theme-default-preview.png", simulator, t);

  await t
    .click(drpdwnSelector)
    .click(drpdwnSelector.child(1));
  await checkElementScreenshot("theme-modern-preview.png", simulator, t);

  await t
    .click(drpdwnSelector)
    .click(drpdwnSelector.child(2));
  await checkElementScreenshot("theme-legacy-preview.png", simulator, t);

  await t
    .click(Selector(".sv_complete_btn"));
  await checkElementScreenshot("theme-legacy-test-again.png", simulator, t);

  await t
    .click(drpdwnSelector)
    .click(drpdwnSelector.child(1));
  await checkElementScreenshot("theme-modern-test-again.png", simulator, t);

  await t
    .click(drpdwnSelector)
    .click(drpdwnSelector.child(0));
  await checkElementScreenshot("theme-default-test-again.png", simulator, t);
});