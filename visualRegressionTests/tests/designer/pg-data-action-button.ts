import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "ValueLink Actions in Data section Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  showQuestionNumbers: "on",
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

test("Check states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

    await setJSON(json);

    // await t
    //   .click(Selector(".svd-grid-expand"));
    await t.click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
    await t.wait(500);
    await t.click(Selector("h4[aria-label=General]"));
    await t.click(Selector("h4[aria-label=Data]"));

    const buttonElement = Selector(".svc-action-button.svc-link-value-button.svc-question-link__set-button");
    await takeElementScreenshot("action-button-default.png", buttonElement, t, comparer);

    await t.hover(buttonElement);
    await takeElementScreenshot("action-button-hovered.png", buttonElement, t, comparer);

    await ClientFunction(() => {
      window["creator"].survey.getAllQuestions()[0].defaultValue = "val";
    })();
    const clearButtonElement = Selector(".svc-link__button.svc-question-link__clear-button.svc-action-button");
    await t.hover(clearButtonElement);
    await takeElementScreenshot("action-clear-button-hovered.png", clearButtonElement, t, comparer);
  });
});

test("Default value clear button", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 870);

    const generalTab = Selector("h4").withExactText("General");
    const dataTab = Selector("h4").withExactText("Data");
    await setJSON({
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "defaultValue": "text"
            }
          ]
        }
      ]
    });

    await t
      .click(Selector(".svc-question__content"))
      .click(generalTab)
      .click(dataTab)
      .click(Selector(".svc-action-button.svc-question-link__set-button").withText("Change Default Answer"));
    const buttons = Selector(".spg-link");
    await takeElementScreenshot("action-buttons-on-popup-open.png", buttons, t, comparer);
  });
});

