import { test, expect } from "@playwright/test";
import { url, setJSON } from "../helper";

const title = "Page surface";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Page borders", async ({ page }) => {
    await page.setViewportSize({ width: 1232, height: 900 });
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
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
    });
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.showToolbox = false;
      (window as any).creator.allowEditSurveyTitle = false;
      (window as any).creator.showSidebar = false;
    });

    const designerTabContent = page.locator(".svc-tab-designer");
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");

    await expect(designerTabContent).toHaveScreenshot("page-content.png");

    await pageContent.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await expect(designerTabContent).toHaveScreenshot("page-content-hover.png");

    await pageContent.locator(".svc-element__add-new-question").hover();
    await expect(pageContent).toHaveScreenshot("question-add-hover.png");

    await pageContent.click({ position: { x: 5, y: 5 } });
    await expect(designerTabContent).toHaveScreenshot("page-content-click.png");

    await pageContent.locator(".sd-page__title").click({ position: { x: 5, y: 5 } });
    await expect(designerTabContent).toHaveScreenshot("page-title-click.png");
  });

  test("Page placeholder without elements", async ({ page }) => {
    await page.setViewportSize({ width: 770, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "title": "Page1"
        }
      ]
    });

    await expect(page.locator(".svc-page")).toHaveScreenshot("page-placeholder-without-elements.png");
  });

  test("Check page selection when width mode is responsive", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      showQuestionNumbers: "on",
      widthMode: "responsive",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "text",
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.allowEditSurveyTitle = false;
    });

    const rootSelector = page.locator(".svc-tab-designer");
    await page.locator(".svc-page").click({ position: { x: 5, y: 5 } });
    await expect(rootSelector).toHaveScreenshot("page-selected-responsive.png");
  });

  test("Page hidden header and top toolbar", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
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

    await page.evaluate((json) => {
      (window as any).Survey.settings.designMode.showEmptyTitles = false;
      (window as any).updateCreatorModel({ expandCollapseButtonVisibility: "never" }, json);
    }, json);

    const rootSelector = page.locator(".svc-tab-designer");
    await page.locator(".svc-page").click({ position: { x: 5, y: 5 } });
    await expect(rootSelector).toHaveScreenshot("page-selected-hidden-header.png");
  });

  test("Check page button states", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      window["creator"].onDefineElementMenuItems.add((_, options) => {
        if (!options.obj["isPage"]) return;
        options.items.push({
          id: "duplicate2",
          title: "Duplicate",
          enabled: false,
          iconSize: 16,
          iconName: "icon-copy-16x16",
          action: () => { }
        });
      });
    });

    await setJSON(page, {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "elements": [
        {
          type: "text",
          name: "q1",
          title: "Question Title"
        }
      ]
    });

    const button = page.locator(".svc-page-toolbar__item");
    const buttonDisabled = page.locator(".svc-page-toolbar__item:disabled");

    await page.locator(".svc-page__content").click({ position: { x: 5, y: 5 } });
    await expect(button).toHaveScreenshot("page-button.png");

    await button.hover();
    await expect(button).toHaveScreenshot("page-button-hover.png");

    await page.keyboard.press("Tab");
    await expect(button).toHaveScreenshot("page-button-focused.png");

    await expect(buttonDisabled).toHaveScreenshot("page-button-disabled.png");

    await buttonDisabled.hover();
    await expect(buttonDisabled).toHaveScreenshot("page-button-disabled-hover.png");

    await page.evaluate(() => {
      const page = window["creator"].survey.getPageByName("page1");
      const adorner = window["SurveyCreatorCore"].PageAdorner.GetAdorner(page);
      adorner.actionContainer.actions[0].pressed = true;
      adorner.actionContainer.actions[2].pressed = true;
    });

    await expect(button).toHaveScreenshot("page-button-pressed.png");
    await expect(buttonDisabled).toHaveScreenshot("page-button-pressed-disabled.png");
  });
});