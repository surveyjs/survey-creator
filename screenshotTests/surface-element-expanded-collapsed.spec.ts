import { url, compareScreenshot, test, setJSON, setExpandCollapseButtonVisibility, expect, resetHoverToCreator, setAllowEditSurveyTitle, setShowAddQuestionButton, setShowToolbox, setShowSidebar, setAllowZoom } from "./helper";

const title = "Surface element expanded/collapsed";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Question adorner - collapsed", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      showQuestionNumbers: true,
      elements: [
        {
          type: "text",
          name: "question1"
        },
        {
          type: "panel",
          name: "panel1"
        },
        {
          "type": "checkbox",
          "name": "question1",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ],
          "choicesByUrl": {
            "url": "#"
          }
        },
        {
          "type": "image",
          "name": "question2",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
        },
        {
          "type": "html",
          "name": "question3",
          "html": "HTML<br>\nLines"
        }
      ]
    };
    await setExpandCollapseButtonVisibility(page, "onhover");
    await setJSON(page, json);
    const qContent = page.locator(".svc-question__content");
    const qCollapseButton = page.getByRole("button", { name: "Collapse" }).first();
    await qContent.nth(0).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(0), "question-adorner-collapsed.png", { maxDiffPixels: 2 });
    await qContent.nth(1).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(1), "panel-adorner-collapsed.png");
    await qContent.nth(2).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(2), "question-carry-forward-collapsed.png");
    await qContent.nth(3).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(3), "question-image-collapsed.png");
    await qContent.nth(4).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(4), "question-html-collapsed.png");

    await page.locator(".svc-tabbed-menu-item").filter({ hasText: "Preview" }).click();
    await page.locator(".svc-tabbed-menu-item").filter({ hasText: "Designer" }).click();
    await compareScreenshot(page, qContent.nth(0), "question-adorner-collapsed-first-render.png");
    await compareScreenshot(page, qContent.nth(1), "panel-adorner-collapsed-first-render.png");
  });

  test("Question adorner - no title collapsed", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "titleLocation": "hidden"
            },
            {
              "type": "paneldynamic",
              "name": "question4",
              "titleLocation": "hidden"
            },
            {
              "type": "html",
              "name": "question2"
            },
            {
              "type": "image",
              "name": "question3",
              "imageFit": "cover",
              "imageHeight": "auto",
              "imageWidth": "100%"
            }
          ]
        }
      ]
    };
    await setExpandCollapseButtonVisibility(page, "onhover");
    await setJSON(page, json);
    const qContent = page.locator(".svc-question__content");
    const qCollapseButton = page.getByRole("button", { name: "Collapse" }).first();
    await qContent.nth(0).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(0), "question-adorner-no-title-collapsed.png");
    await qContent.nth(1).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(1), "panel-dynamic-adorner-no-title-collapsed.png");
    await qContent.nth(2).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(2), "question-html-adorner-no-title-collapsed.png");
    await qContent.nth(3).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(3), "question-image-adorner-no-title-collapsed.png");
  });

  test("Page adorner - collapsed", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 600 });
    const json = {
      showQuestionNumbers: true,
      elements: [
        {
          type: "expression",
          name: "question1"
        }
      ]
    };
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await setExpandCollapseButtonVisibility(page, "onhover");
    await setJSON(page, json);
    const qContent = page.locator(".svc-page__content");
    const qCollapseButton = page.getByRole("button", { name: "Collapse" }).first();
    await qContent.nth(0).hover({ position: { x: 10, y: 10 } });
    await expect(qContent.nth(0)).toHaveClass(/svc-hovered/);
    await compareScreenshot(page, page.locator(".svc-tab-designer_content"), "page-adorner-expanded.png");
    await qContent.nth(0).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await resetHoverToCreator(page);
    await compareScreenshot(page, page.locator(".svc-tab-designer_content"), "page-adorner-collapsed-selected.png");
    await page.click(".svc-tab-designer_content", { position: { x: 1, y: 1 } });
    await compareScreenshot(page, page.locator(".svc-tab-designer_content"), "page-adorner-collapsed.png");
  });

  test("Question adorner - collapsed mobile", async ({ page }) => {
    await page.setViewportSize({ width: 551, height: 1080 });
    const json = {
      showQuestionNumbers: true,
      elements: [
        {
          type: "text",
          name: "question1"
        },
        {
          type: "panel",
          name: "panel1"
        }
      ]
    };
    await setExpandCollapseButtonVisibility(page, "onhover");
    await setJSON(page, json);
    const qContent = page.locator(".svc-question__content");
    const qCollapseButton = page.getByRole("button", { name: "Collapse" }).first();
    await qContent.nth(0).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(0), "question-adorner-collapsed-mobile.png");
    await qContent.nth(1).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, qContent.nth(1), "panel-adorner-collapsed-mobile.png");

    await page.locator(".svc-creator").click({ position: { x: 1, y: 1 } });
    await compareScreenshot(page, qContent.nth(0), "question-adorner-collapsed-unselected.png");
    await compareScreenshot(page, qContent.nth(1), "panel-adorner-collapsed-unselected.png");
  });

  test("Page adorner - collapsed mobile", async ({ page }) => {
    await page.setViewportSize({ width: 551, height: 1080 });
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            }
          ]
        },
        {
          "name": "page3",
          "elements": [
            {
              "type": "text",
              "name": "question3"
            }
          ]
        }
      ]
    };
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await setExpandCollapseButtonVisibility(page, "onhover");
    await setJSON(page, json);
    const qContent = page.locator(".svc-page__content");
    const qCollapseButton = page.getByRole("button", { name: "Collapse" }).first();
    await qContent.nth(0).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await qContent.nth(1).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await compareScreenshot(page, page.locator(".svc-tab-designer_content"), "page-adorner-collapsed-mobile.png");
  });

  test("Collapse all and expand all toolbar", async ({ page }) => {
    await page.setViewportSize({ width: 912, height: 1080 });
    const json = {
      showQuestionNumbers: true,
      elements: [
        {
          type: "text",
          name: "question1"
        },
        {
          type: "panel",
          name: "panel1"
        }
      ]
    };
    await setShowToolbox(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setShowAddQuestionButton(page, false);
    await setShowSidebar(page, false);
    await setExpandCollapseButtonVisibility(page, "onhover");
    await setJSON(page, json);
    await page.click(".sv-action--lockQuestions");
    await page.hover(".sv-action--collapse-all");
    await compareScreenshot(page, page.locator(".svc-tab-designer"), "design-surface-toolbar.png");

    await setAllowZoom(page, true);
    await page.hover(".sv-action--zoomOut");
    await compareScreenshot(page, page.locator(".svc-tab-designer__surface-toolbar"), "design-surface-toolbar-with-zoom.png");
  });

  test("Question adorner - collapsed custom question box gap", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      showQuestionNumbers: true,
      elements: [
        {
          type: "text",
          name: "question1"
        }
      ]
    };
    await setExpandCollapseButtonVisibility(page, "onhover");
    await setJSON(page, json);
    // 48px instead of the default spacing-x200 (16px): collapsed padding-bottom is spacing-x200 + this gap.
    await page.evaluate(() => {
      const creator = (window as any).creator;
      creator.defaultSurfaceCssVariables["--sjs2-layout-component-question-box-gap-vertical"] = "48px";
      creator.getPlugin("designer").model.updateSurfaceCssVariables();
    });
    const qContent = page.locator(".svc-question__content");
    const qCollapseButton = page.getByRole("button", { name: "Collapse" }).first();
    await qContent.nth(0).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await expect(qContent.nth(0)).toHaveClass(/svc-question__content--collapsed/);
    await compareScreenshot(page, qContent.nth(0), "question-adorner-collapsed-custom-gap.png");
  });

  test("Question adorner - collapsed title location left", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      showQuestionNumbers: true,
      elements: [
        {
          type: "text",
          name: "question1",
          title: "Question title",
          titleLocation: "left"
        }
      ]
    };
    await setExpandCollapseButtonVisibility(page, "onhover");
    await setJSON(page, json);
    const qAdorner = page.locator(".svc-question__adorner");
    const qContent = page.locator(".svc-question__content");
    const qCollapseButton = page.getByRole("button", { name: "Collapse" }).first();
    await qContent.nth(0).click({ position: { x: 10, y: 10 } });
    await qCollapseButton.click();
    await expect(qContent.nth(0)).toHaveClass(/svc-question__content--collapsed/);
    await expect(qContent.locator(".sd-question__header--location--left")).toBeHidden();
    await expect(qAdorner.locator("> .svc-element__header--hidden")).toBeVisible();
    await compareScreenshot(page, qAdorner, "question-adorner-collapsed-title-left.png");
  });
});