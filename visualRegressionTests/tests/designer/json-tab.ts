import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, creatorTabLogicName, takeElementScreenshot, logicQuestionSelector, logicActionSelector, tableRulesSelector, logicAddNewRuleButton, getListItemByText, wrapVisualTest, resetHoverToCreator } from "../../helper";

const title = "Json tab Screenshot";
const widgetUrl = url.replace(/\/testcafe$/, "/testcafe-widget");
fixture`${title}`.page`${url}`;

const jsonWithErrors = {
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
          "type": "text",
          "name": "question1"
        },
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "text",
          "name": "question1"
        }
      ]
    }
  ]
};

test("one rule view", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    await setJSON({});
    await t
      .click(getTabbedMenuItemByText("JSON Editor")).typeText(Selector(".svc-json-editor-tab__content-area"), JSON.stringify(jsonWithErrors, null, 2), { replace: true, paste: true });
    const tabContent = Selector(".svc-creator-tab__content");
    await takeElementScreenshot("json-tab-with-errors.png", tabContent, t, comparer);
  });
});

fixture`${title}`.page`${widgetUrl}`;
test("JSON Ace editor", async (t) => {
  var skipIfNotReact = ClientFunction(() => {
    return window["creator"].survey.platformName != "react";
  });
  // skip test fo non-react - core code
  if (await skipIfNotReact()) return;
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const json = {
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            }
          ]
        }
      ]
    };
    await setJSON(json);
    await t
      .click(getTabbedMenuItemByText("JSON Editor"));
    const tabContent = Selector(".svc-creator-tab__content");
    await t.click(tabContent);
    await takeElementScreenshot("json-tab-ace.png", tabContent, t, comparer);

    await ClientFunction(() => {
      window["creator"].preferredColorPalette = "dark";
    })();
    await t
      .click(getTabbedMenuItemByText("Logic"))
      .click(getTabbedMenuItemByText("JSON Editor"));

    await takeElementScreenshot("json-tab-ace-dark.png", tabContent, t, comparer);
  });
});