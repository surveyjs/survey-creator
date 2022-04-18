import { Selector } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, checkElementScreenshot, creatorTabPreviewName, explicitErrorHandler, urlPreviewThemeSwitcher } from "../../helper";

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

fixture`${title}`.page`${urlPreviewThemeSwitcher}`;

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

test("Theme Switcher", async (t) => {
  const simulator = Selector(".svd-simulator-content");
  const checkTheme = async (listID, screnName) => {
    await t
      .click(Selector("#themeSwitcher"))
      .click(Selector(".sv-popup__container .sv-list .sv-list__item").filterVisible().nth(listID));
    await checkElementScreenshot(screnName, simulator, t);
  };

  await t.resizeWindow(1280, 900);
  await explicitErrorHandler();
  await setJSON(json2);

  await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
  await checkElementScreenshot("theme-switcher.png", Selector("#themeSwitcher"), t);
  await checkElementScreenshot("theme-default-preview.png", simulator, t);

  await t.click(Selector("#themeSwitcher"));
  await checkElementScreenshot("theme-switcher-popup.png", Selector(".sv-popup__container").filterVisible().nth(0), t);

  await t
    .click(Selector("#themeSwitcher"))
    .click(Selector(".sd-navigation__complete-btn"));

  await checkElementScreenshot("theme-default-test-again.png", simulator, t);

  await checkTheme(1, "theme-modern-test-again.png");
  await checkTheme(2, "theme-legacy-test-again.png");
  await checkTheme(0, "theme-default-test-again.png");

  await t.click(Selector(".svc-preview__test-again"));
  await checkElementScreenshot("theme-default-preview.png", simulator, t);
});