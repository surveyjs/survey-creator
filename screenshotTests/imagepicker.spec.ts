import { url, setJSON, explicitErrorHandler, upArrowImageLink, rigthArrowImageLink, downArrowImageLink, leftArrowImageLink, compareScreenshot } from "./helper";
import { test, expect } from "@playwright/test";

const title = "ImagePicker Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  const json = {
    showQuestionNumbers: "on",
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "imagepicker",
            "name": "question1",
            "choices": [
              { "value": "left", "imageLink": leftArrowImageLink },
              { "value": "down", "imageLink": downArrowImageLink },
              { "value": "up", "imageLink": upArrowImageLink },
              { "value": "right", "imageLink": rigthArrowImageLink },
            ],
          }
        ]
      }
    ]
  };

  test("Hover", async ({ page }) => {
    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 2584, height: 1440 });
    await setJSON(page, json);
    await page.waitForLoadState("networkidle");

    const imagePicker = page.locator(".sd-imagepicker");
    const firstImage = imagePicker.locator(".svc-image-item-value-wrapper").first();

    await imagePicker.click();
    await firstImage.hover();
    await compareScreenshot(page, imagePicker, "image-picker-responsive-hover.png");

    await page.evaluate(() => {
      const q = (window as any).creator.survey.getAllQuestions()[0];
      q.colCount = 3;
      q.minImageHeight = 65;
      q.minImageWidth = 100;
    });
    await imagePicker.click();
    await imagePicker.locator(".svc-image-item-value-wrapper").hover();

    await compareScreenshot(page, imagePicker, "image-picker-responsive-col-count-3-hover.png");

    await page.evaluate(() => {
      const q = (window as any).creator.survey.getAllQuestions()[0];
      q.colCount = 0;
      q.imageWidth = 200;
      q.imageHeight = 150;
    });
    await imagePicker.click();
    await firstImage.hover();
    await compareScreenshot(page, imagePicker, "image-picker-hover.png");
  });

  test("dragging file", async ({ page }) => {
    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setJSON(page, json);
    await page.waitForLoadState("networkidle");

    const imagePicker = page.locator(".sd-imagepicker");
    await imagePicker.click();
    //emulate dragging class appear
    await page.evaluate(() => {
      document.querySelector(".svc-image-item-value--new")?.classList.add("svc-image-item-value--file-dragging");
    });
    await compareScreenshot(page, imagePicker, "image-picker-responsive-dragging-file.png");
  });

  test("imagepicker check state when new item is single", async ({ page }) => {
    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
    const imagePicker = page.locator(".sd-imagepicker");
    await page.evaluate(() => {
      (window as any).creator.onUploadFile.add((_, opt) => {
        setTimeout(() => {
          opt.callback("success", "");
        }, 1000000);
      });
    });
    await page.evaluate(() => {
      (window as any).creator.onOpenFileChooser.add((s, o) => {
        o.callback([{}]);
      });
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [{ "type": "imagepicker", "name": "question1", }]
        }
      ]
    });
    await imagePicker.click();
    await compareScreenshot(page, imagePicker, "image-picker-single-new-item.png");
    await page.evaluate(() => document.querySelector(".svc-image-item-value")?.classList.toggle("svc-image-item-value--file-dragging"));
    await compareScreenshot(page, imagePicker, "image-picker-single-new-item-dragging.png");
    await page.evaluate(() => document.querySelector(".svc-image-item-value")?.classList.toggle("svc-image-item-value--file-dragging"));
    await page.locator(".svc-image-item-value-controls__add").click();
    await page.evaluate(() => {
      (document.querySelector(".sd-loading-indicator .sv-svg-icon") as HTMLElement).style.animation = "none";
    });
    await compareScreenshot(page, imagePicker, "image-picker-single-new-item-loading.png");
  });

  test("imagepicker check loading indicator", async ({ page }) => {
    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 1920, height: 1900 });
    await page.evaluate(() => {
      (window as any).creator.onUploadFile.add((_, opt) => {
        setTimeout(() => {
          opt.callback("success", "");
        }, 1000000);
      });
    });
    await page.evaluate(() => {
      (window as any).creator.onOpenFileChooser.add((s, o) => {
        o.callback([{}]);
      });
    });
    await setJSON(page, json);
    await page.waitForLoadState("networkidle");

    const imagePicker = page.locator(".sd-imagepicker");
    await imagePicker.click();
    await page.locator(".svc-image-item-value-controls__add").click();
    await page.evaluate(() => {
      (document.querySelector(".sd-loading-indicator .sv-svg-icon") as HTMLElement).style.animation = "none";
    });
    await compareScreenshot(page, imagePicker, "imagepicker-loading.png");
  });
});
