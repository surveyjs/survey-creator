import { ClientFunction, Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, setJSON, explicitErrorHandler } from "../../helper";

const title = "ImagePicker Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "imagepicker",
          "name": "question1",
          "choices": [
            {
              "value": "lion",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
            },
            {
              "value": "giraffe",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
            },
            {
              "value": "panda",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
            },
            {
              "value": "camel",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
            }
          ]
        }
      ]
    }
  ]
};

test("Hover", async (t) => {
  await explicitErrorHandler();
  await t.resizeWindow(2560, 1440);
  await setJSON(json);
  await t.wait(3000);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const imagePicker = Selector(".sd-imagepicker");
  const firstImage = imagePicker.find(".svc-image-item-value-wrapper").nth(0);

  await t.click(imagePicker).hover(firstImage);
  await takeScreenshot("image-picker-responsive-hover.png", imagePicker, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await ClientFunction(() => {
    const q = (<any>window).creator.survey.getAllQuestions()[0];
    q.colCount = 3;
    q.minImageHeight = 65;
    q.minImageWidth = 100;
  })();
  await t.click(imagePicker).hover(imagePicker.find(".svc-image-item-value-wrapper"));

  await takeScreenshot("image-picker-responsive-col-count-3-hover.png", imagePicker, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await ClientFunction(() => {
    const q = (<any>window).creator.survey.getAllQuestions()[0];
    q.colCount = 0;
    q.imageWidth = 200;
    q.imageHeight = 150;
  })();
  await t.click(imagePicker).hover(firstImage);
  await takeScreenshot("image-picker-hover.png", imagePicker, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});

test("dragging file", async (t) => {
  await explicitErrorHandler();
  await t.resizeWindow(2560, 1440);
  await setJSON(json);
  await t.wait(3000);
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const imagePicker = Selector(".sd-imagepicker");
  await t.click(imagePicker);
  //emulate dragging class appear
  await ClientFunction(() => { document.querySelector(".svc-image-item-value--new")?.classList.add("svc-image-item-value--file-dragging"); })();
  await takeScreenshot("image-picker-responsive-dragging-file.png", imagePicker, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});