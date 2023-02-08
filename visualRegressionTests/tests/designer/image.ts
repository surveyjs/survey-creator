import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, explicitErrorHandler, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "Image Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "image",
          "name": "question2",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
        }
      ]
    }
  ]
};

test("Adorner design", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2560, 1440);
    await setJSON(json);
    await t.wait(3000);

    const image = Selector(".sd-image");
    await t.click(image);
    await takeElementScreenshot("image-adorner.png", Selector(".svc-question__content--image"), t, comparer);

  });
});
