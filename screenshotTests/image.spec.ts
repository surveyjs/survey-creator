import { test, expect } from "@playwright/test";
import { url, setJSON, explicitErrorHandler, upArrowImageLink } from "./helper";

test.beforeEach(async ({ page }) => {
  await page.goto(`${url}`);
});

test("Adorner design", async ({ page }) => {
  await explicitErrorHandler(page);
  await page.setViewportSize({ width: 2560, height: 1440 });

  const json = {
    showQuestionNumbers: true,
    "logoPosition": "right",
    "pages": [
      {
        "name": "page2",
        "elements": [
          { "type": "text", "name": "question1" },
          { "type": "image", "name": "question2", "imageLink": upArrowImageLink }
        ]
      }
    ]
  };

  await setJSON(page, json);
  await page.waitForLoadState("networkidle");

  const image = page.locator(".sd-image");
  await image.click();
  await expect(page.locator(".svc-question__content--image")).toHaveScreenshot("image-adorner.png");
});

test("empty imageLink", async ({ page }) => {
  await explicitErrorHandler(page);
  await page.setViewportSize({ width: 2560, height: 1440 });

  const json = {
    showQuestionNumbers: true,
    "logoPosition": "right",
    "pages": [
      {
        "name": "page2",
        "elements": [
          { "type": "text", "name": "question1" },
          { "type": "image", "name": "question2" }
        ]
      }
    ]
  };

  await setJSON(page, json);
  await page.waitForLoadState("networkidle");

  const fileplaceholder = page.locator(".svc-question__content--image .sd-file");
  await expect(fileplaceholder).toBeVisible();
  await fileplaceholder.click();
  await expect(page.locator(".svc-question__content--image")).toHaveScreenshot("image-empty-image-link.png");
});

test("broken imageLink", async ({ page }) => {
  await explicitErrorHandler(page);
  await page.setViewportSize({ width: 2560, height: 1440 });

  const json = {
    showQuestionNumbers: true,
    "logoPosition": "right",
    "pages": [
      {
        "name": "page2",
        "elements": [
          { "type": "text", "name": "question1" },
          { "type": "image", "name": "question2", "imageLink": "test" }
        ]
      }
    ]
  };

  await setJSON(page, json);
  await page.waitForLoadState("networkidle");
  await page.locator(".sd-image").click();
  await expect(page.locator(".svc-question__content--image")).toHaveScreenshot("image-broken-image-link.png");
});

test("Check image loading indicator", async ({ page }) => {
  await explicitErrorHandler(page);
  await page.setViewportSize({ width: 2560, height: 1440 });

  const json = {
    showQuestionNumbers: true,
    "logoPosition": "right",
    "pages": [
      { "name": "page2", "elements": [{ "type": "image", "name": "question2", "imageLink": "wrong_url" }] }
    ]
  };

  await setJSON(page, json);

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

  const root = page.locator(".svc-question__content--image");
  await root.click({ position: { x: 5, y: 5 } });
  await page.locator(".svc-question__content--image .svc-context-button").click();

  await page.evaluate(() => {
    (<HTMLElement>document.querySelector(".sd-loading-indicator .sv-svg-icon")).style.animation = "none";
  });

  await expect(root).toHaveScreenshot("image-loading.png");
});
