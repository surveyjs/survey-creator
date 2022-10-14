import { Selector } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, takeElementScreenshot, creatorTabPreviewName, explicitErrorHandler, urlPreviewThemeSwitcher, wrapVisualTest } from "../../helper";

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
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);

    await setJSON(json1);

    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await takeElementScreenshot("test-tab-toolbar.png", Selector(".svc-test-tab__content .sv-action-bar--pages"), t, comparer);

    await t.resizeWindow(380, 600);
    await takeElementScreenshot("test-tab-toolbar_responsive.png", Selector(".svc-footer-bar .svc-toolbar-wrapper"), t, comparer);
  });
});

test("mobile iphone", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);
    await explicitErrorHandler();
    await setJSON(json1);

    await t
      .click(getTabbedMenuItemByText(creatorTabPreviewName))
      .click(Selector("#deviceSelector button"))
      .click(Selector(".sv-list__item").withText("iPhone 6"));

    await takeElementScreenshot("test-tab-iphone.png", Selector(".svd-simulator-wrapper"), t, comparer);
  });
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
  await wrapVisualTest(t, async (t, comparer) => {
    const simulator = Selector(".svd-simulator-content");
    const checkTheme = async (listID, screnName) => {
      await t
        .click(Selector("#themeSwitcher"))
        .click(Selector(".sv-popup__container .sv-list .sv-list__item").filterVisible().nth(listID));
      await takeElementScreenshot(screnName, simulator, t, comparer);
    };

    await t.resizeWindow(1280, 900);
    await explicitErrorHandler();
    await setJSON(json2);

    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await takeElementScreenshot("theme-switcher.png", Selector("#themeSwitcher"), t, comparer);
    await takeElementScreenshot("theme-default-preview.png", simulator, t, comparer);

    await t.click(Selector("#themeSwitcher"));
    await takeElementScreenshot("theme-switcher-popup.png", Selector(".sv-popup__container").filterVisible().nth(0), t, comparer);

    await t
      .click(Selector("#themeSwitcher"))
      .click(Selector(".sd-navigation__complete-btn"));

    await takeElementScreenshot("theme-default-test-again.png", simulator, t, comparer);

    await checkTheme(1, "theme-modern-test-again.png");
    await checkTheme(2, "theme-legacy-test-again.png");
    await checkTheme(0, "theme-default-test-again.png");

    await t.click(Selector(".svc-preview__test-again"));
    await takeElementScreenshot("theme-default-preview.png", simulator, t, comparer);
  });
});

test("Bug #2933: empty matrix look", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);
    await explicitErrorHandler();
    await setJSON({
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdynamic",
              "name": "question1",
              "columnsVisibleIf": "false",
              "choices": [
                1
              ]
            }
          ]
        }
      ],
      "showQuestionNumbers": "off"
    });
    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await takeElementScreenshot("matrix-no-columns.png", Selector(".sd-question"), t, comparer);
  });
});

test("Hidden Question Issue: #3298", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 900);
    await explicitErrorHandler();
    await setJSON(
      {
        "logoPosition": "right",
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "checkbox",
                "name": "question1",
                "choices": [
                  "item1",
                  "item2",
                  "item3"
                ]
              },
              {
                "type": "checkbox",
                "name": "question2",
                "visibleIf": "{question1} notempty",
                "choices": [
                  "item1",
                  "item2",
                  "item3"
                ]
              }
            ]
          }
        ]
      }
    );
    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));

    const showInvisibleElements = Selector('[title="Show invisible elements"]');
    await t.click(showInvisibleElements);
    await takeElementScreenshot("preview-tab-show-invisible-by-creator-button.png", Selector(".sd-page"), t, comparer);

    await t.click(showInvisibleElements).click(Selector(".sd-selectbase__item"));
    await takeElementScreenshot("preview-tab-show-invisible-by-trigger.png", Selector("[data-name='question2']"), t, comparer);
  });
});

const json3 = {
  "width": "755px",
  "widthMode": "static",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "question1",
          "columns": [{ name: "col1" }, { name: "col2" }, { name: "col3" }],
          "rows": ["row1", "row2", "row3"]
        }
      ]
    }
  ]
};

test("survey-width", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const simulator = Selector(".svd-simulator-content");
    await t.resizeWindow(1280, 900);

    await setJSON(json3);

    await t.click(getTabbedMenuItemByText(creatorTabPreviewName));
    await takeElementScreenshot("test-tab-survey-width.png", simulator, t, comparer);
  });
});
