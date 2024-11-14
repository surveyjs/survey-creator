import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, explicitErrorHandler, wrapVisualTest, takeElementScreenshot } from "../../helper";

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
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2584, 1440);
    await setJSON(json);
    await t.wait(3000);

    const imagePicker = Selector(".sd-imagepicker");
    const firstImage = imagePicker.find(".svc-image-item-value-wrapper").nth(0);

    await t.click(imagePicker).hover(firstImage);
    await takeElementScreenshot("image-picker-responsive-hover.png", imagePicker, t, comparer);

    await ClientFunction(() => {
      const q = (<any>window).creator.survey.getAllQuestions()[0];
      q.colCount = 3;
      q.minImageHeight = 65;
      q.minImageWidth = 100;
    })();
    await t.click(imagePicker).hover(imagePicker.find(".svc-image-item-value-wrapper"));

    await takeElementScreenshot("image-picker-responsive-col-count-3-hover.png", imagePicker, t, comparer);

    await ClientFunction(() => {
      const q = (<any>window).creator.survey.getAllQuestions()[0];
      q.colCount = 0;
      q.imageWidth = 200;
      q.imageHeight = 150;
    })();
    await t.click(imagePicker).hover(firstImage);
    await takeElementScreenshot("image-picker-hover.png", imagePicker, t, comparer);
  });
});

test("dragging file", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2560, 1440);
    await setJSON(json);
    await t.wait(3000);

    const imagePicker = Selector(".sd-imagepicker");
    await t.click(imagePicker);
    //emulate dragging class appear
    await ClientFunction(() => { document.querySelector(".svc-image-item-value--new")?.classList.add("svc-image-item-value--file-dragging"); })();
    await takeElementScreenshot("image-picker-responsive-dragging-file.png", imagePicker, t, comparer);
  });
});

test("imagepicker check state when new item is signgle", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2560, 1440);
    await setJSON(json);
    await t.wait(3000);
    const imagePicker = Selector(".sd-imagepicker");
    await t.click(imagePicker);
    //emulate dragging class appear
    await ClientFunction(() => { (<any>window).creator.survey.getAllQuestions()[0].choices = []; })();
    await takeElementScreenshot("image-picker-single-new-item.png", imagePicker, t, comparer);
  });
});

test("imagepicker check loading indicator", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(1920, 1900);
    await ClientFunction(() => {
      (window as any).creator.onUploadFile.add((_, opt) => {
        setTimeout(() => {
          opt.callback("success", "");
        }, 1000000);
      });
    })();
    await ClientFunction(() => {
      (window as any).creator.onOpenFileChooser.add((s, o) => {
        o.callback([{}]);
      });
    })();
    await setJSON(json);
    const imagePicker = Selector(".sd-imagepicker");
    await t.click(imagePicker);
    await t.click(Selector(".svc-image-item-value-controls__add"));
    await ClientFunction(() => {
      (<HTMLElement>document.querySelector(".sd-loading-indicator .sv-svg-icon")).style.animation = "none";
    })();
    await takeElementScreenshot("imagepicker-loading.png", imagePicker, t, comparer);
  });
});