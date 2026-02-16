import { Locator } from "playwright";
import { downArrowImageLink, leftArrowImageLink, rigthArrowImageLink, upArrowImageLink } from "../../resources/base64images";
import {
  url,
  test,
  expect,
  setJSON,
  getTabbedMenuItemByText,
  creatorTabPreviewName,
  explicitErrorHandler,
  doDragDrop,
} from "../helper";

const title = "Designer surface";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test("Image question", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "image",
              "name": "question1",
              "imageLink": upArrowImageLink
            }
          ]
        }
      ]
    };
    const imageQuestionSelector = page.locator(".sd-image__image");
    await setJSON(page, json);
    await page.waitForLoadState("load");

    await page.setViewportSize({ width: 1280, height: 900 });
    await expect(imageQuestionSelector).toHaveCount(1);
    await expect(imageQuestionSelector).toHaveClass(/sd-image__image--adaptive/);
    await expect(await imageQuestionSelector.evaluate((el: HTMLElement) => el.clientWidth)).toEqual(624);
    await expect(await imageQuestionSelector.evaluate((el: HTMLElement) => el.clientHeight)).toEqual(415);

    await imageQuestionSelector.click();
    await expect(page.locator("div [data-name=\"imageHeight\"] input")).toHaveValue("");
    await expect(page.locator("div [data-name=\"imageHeight\"] input").getAttribute("placeholder")).resolves.toEqual("auto");
    await expect(page.locator("div [data-name=\"imageWidth\"] input")).toHaveValue("");
    await expect(page.locator("div [data-name=\"imageWidth\"] input").getAttribute("placeholder")).resolves.toEqual("auto");

    await page.locator(".sv-action-bar-item[title=\"Hide Panel\"]").click();
    await expect(imageQuestionSelector).toHaveCount(1);
    await expect(imageQuestionSelector).toHaveClass(/sd-image__image--adaptive/);
    await expect(await imageQuestionSelector.evaluate((el: HTMLElement) => el.clientWidth)).toEqual(624);
    await expect(await imageQuestionSelector.evaluate((el: HTMLElement) => el.clientHeight)).toEqual(415);

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(imageQuestionSelector).toHaveCount(1);
    await expect(imageQuestionSelector).toHaveClass(/sd-image__image--adaptive/);
    await expect(await imageQuestionSelector.evaluate((el: HTMLElement) => el.clientWidth)).toEqual(640);
    await expect(await imageQuestionSelector.evaluate((el: HTMLElement) => el.clientHeight)).toEqual(426);
  });

  test("Check scrollbar is not appear when width mode is responsive", async ({ page }) => {
    const json = {
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
    const rootSelector = page.locator(".svc-tab-designer");
    const verticalScrollWidth = 12;
    const rootOffsetWidth = await rootSelector.evaluate((el: HTMLElement) => el.offsetWidth);
    const rootScrollWidth = await rootSelector.evaluate((el: HTMLElement) => el.scrollWidth);
    await page.setViewportSize({ width: 1920, height: 1080 });
    expect(rootOffsetWidth - rootScrollWidth).toBeLessThanOrEqual(verticalScrollWidth);
  });

  test("Check imagepicker add/delete items not raises errors and works fine: #3203", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await setJSON(page, {
      elements: [
        {
          name: "q1",
          type: "imagepicker",
          choices: [
            { "value": "left", "imageLink": leftArrowImageLink },
            { "value": "down", "imageLink": downArrowImageLink },
            { "value": "up", "imageLink": upArrowImageLink },
            { "value": "right", "imageLink": rigthArrowImageLink },
          ]
        }
      ]
    });
    await page.waitForLoadState("load");

    await explicitErrorHandler(page);
    await page.locator(".svc-question__content").click();
    await page.locator(".spg-panel__title--expandable").getByText("Choice Options").click();
    await page.locator(".spg-action-button[title='Add new choice']").click();
    await page.locator(".spg-matrixdynamic tr:last-of-type .spg-action-button--danger").click();
    await expect(page.locator(".sd-imagepicker > *:not(svc-image-item-value)")).toHaveCount(6);
  });

  test("Check imagepicker add/delete items style", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await explicitErrorHandler(page);
    await setJSON(page, {
      elements: [{
        type: "imagepicker", name: "q1", choices: [
          { "value": "lion", "imageLink": "lion.jpg" },
          { "value": "giraffe", "imageLink": "lion.jpg" }
        ]
      }]
    });

    await page.locator(".svc-tab-designer .svc-context-button--danger").first().click();
    await expect(page.locator(".svc-tab-designer .svc-image-item-value--new")).toBeVisible();
    await page.locator(".svc-image-item-value-wrapper").filter({ visible: true }).nth(1).locator(".svc-choose-file-input").setInputFiles("../../resources/logo.jpg");
    await page.waitForLoadState("load");
    await page.locator(".svc-image-item-value-controls__add").click();
  });

  test("Check imagepicker add/delete - 5817", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await explicitErrorHandler(page);
    await setJSON(page, {
      elements: [{
        type: "imagepicker", name: "q1", choices: [
          { "value": "lion", "imageLink": "lion.jpg" },
          { "value": "giraffe", "imageLink": "lion.jpg" }
        ]
      }]
    });
    await page.evaluate(() => {
      const creator = (window as any).creator;
      creator.selectElement(creator.survey.getQuestionByName("q1"));
    });
    await expect(page.locator(".svc-tab-designer .svc-image-item-value--new")).toBeVisible();
    await page.locator(".svc-image-item-value-controls__add").click();
    await page.locator(".svc-image-item-value--new").filter({ visible: true }).locator(".svc-choose-file-input").setInputFiles("../../resources/logo.jpg");
    await page.waitForLoadState("load");

    await expect(page.locator(".svc-image-item-value").nth(2).locator("img").getAttribute("src")).resolves.toBeTruthy();
    await page.locator(".svc-context-button--danger").nth(2).click();
    await expect(page.locator(".svc-image-item-value").nth(2)).toHaveClass(/svc-image-item-value--new/);
    await expect(page.locator(".svc-tab-designer .svc-image-item-value--new")).toBeVisible();
    await page.locator(".svc-image-item-value-controls__add").click();
    await page.locator(".svc-image-item-value--new").filter({ visible: true }).locator(".svc-choose-file-input").setInputFiles("../../resources/logo.jpg");
    await page.waitForLoadState("load");

    await expect(page.locator(".svc-image-item-value").nth(2).locator("img").getAttribute("src")).resolves.toBeTruthy();
  });

  test("Check imagepicker delete item", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await explicitErrorHandler(page);
    await setJSON(page, {
      elements: [{
        type: "imagepicker", name: "q1", choices: [
          { "value": "lion", "imageLink": "lion.jpg" },
          { "value": "giraffe", "imageLink": "lion.jpg" }
        ]
      }]
    });

    await expect(page.locator(".svc-tab-designer .svc-context-button--danger")).toHaveCount(2);
    await expect(page.locator(".svc-image-item-value:not(.svc-image-item-value--new)")).toHaveCount(2);

    await page.locator(".svc-tab-designer .svc-context-button--danger").first().click();
    await expect(page.locator(".svc-tab-designer .svc-context-button--danger")).toHaveCount(1);
    await expect(page.locator(".svc-image-item-value:not(.svc-image-item-value--new)")).toHaveCount(1);
  });

  test("Check imagepicker add/delete files title", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await explicitErrorHandler(page);
    await setJSON(page, {
      elements: [{
        type: "imagepicker", name: "q1", choices: [
          { "value": "lion", "imageLink": "lion.jpg" }
        ]
      }]
    });

    expect(await page.locator(".svc-image-item-value-wrapper svg title").nth(0).textContent()).toEqual("Select a file");
    expect(await page.locator(".svc-image-item-value-wrapper svg title").nth(1).textContent()).toEqual("Remove the file");
  });

  test("Focus on new panel added", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const EmptyPage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']").first();
    const PanelItem = page.locator("[aria-label='Panel']");

    await doDragDrop({ page, element: PanelItem, target: EmptyPage, options: { steps: 10 } });

    await page.waitForTimeout(1000);
    const panelSelector = page.locator(".svc-question__content--panel");
    await expect(panelSelector).toBeFocused();
  });

  test("Focus on new html question added", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const EmptyPage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']").first();
    const HTMLItem = page.locator("[aria-label='HTML']");

    await doDragDrop({ page, element: HTMLItem, target: EmptyPage, options: { steps: 10 } });

    const panelSelector = page.locator(".svc-question__content--html");
    await expect(panelSelector).toBeFocused();
  });

  test("Checks the editor focused state when opening grid properties by keyboard navigation on small screens.", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 1000 });

    await page.keyboard.press("Tab");
    await expect(page.getByRole("tab", { name: "Designer" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("tab", { name: "Preview" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("tab", { name: "Logic" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("tab", { name: "JSON Editor" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("tab", { name: "Translations" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("button", { name: "Survey settings" })).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("textbox", { name: "Survey title" })).toBeFocused();
  });

  test("Check page navigator is visually hidden", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = { elements: [{ name: "q1", type: "text" }] };
    await setJSON(page, json);
    await expect(page.locator(".svc-tab-designer__page-navigator")).not.toBeVisible();
  });

  test("Check sidebar shadow height", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 300 });
    await setJSON(page, {});
    await page.locator('button[title="Survey settings"]').click();
    const offsetHeight = await page.locator(".svc-side-bar__shadow").evaluate((el: HTMLElement) => el.offsetHeight);
    expect(offsetHeight).toBeLessThanOrEqual(480);
  });

  test("Question adorner - update other rows with lazy rendering on question collapsed", async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    const jsonL = {
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
              "imageFit": "cover"
            }
          ]
        },
        {
          "name": "page2",
          "elements": [
            {
              "type": "panel",
              "name": "panel1",
              "elements": [
                {
                  "type": "imagepicker",
                  "name": "question2",
                  "choices": [
                    { "value": "left", "imageLink": leftArrowImageLink },
                    { "value": "down", "imageLink": downArrowImageLink },
                    { "value": "up", "imageLink": upArrowImageLink },
                    { "value": "right", "imageLink": rigthArrowImageLink },
                  ],
                  "imageFit": "cover"
                }
              ]
            }
          ]
        }
      ]
    };
    await page.evaluate(() => {
      (window as any).creator.expandCollapseButtonVisibility = "always";
    });
    await setJSON(page, jsonL);
    await page.waitForLoadState("load");

    const qContent = page.locator(".svc-question__content");
    const qCollapseButton = page.locator(".svc-question__content .sv-action-bar-item--collapse");
    await expect(qContent).toHaveCount(2);
    await expect(qCollapseButton).toHaveCount(2);

    await qCollapseButton.first().click();
    await expect(qContent).toHaveCount(3);
    await expect(qCollapseButton).toHaveCount(3);
  });

  test("Collapse all and expand all toolbar", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1080 });
    const json = {
      elements: [
        { type: "text", name: "question1" },
        { type: "panel", name: "panel1" }
      ]
    };
    await page.evaluate(() => {
      (window as any).creator.expandCollapseButtonVisibility = "onhover";
    });
    await setJSON(page, json);
    await expect(page.locator(".svc-page__content--collapsed")).toHaveCount(0);

    await page.locator(".sv-action--collapse-all").click();
    await expect(page.locator(".svc-page__content--collapsed")).toHaveCount(1);

    await page.locator(".sv-sction--expande-all").click();
    await expect(page.locator(".svc-page__content--collapsed")).toHaveCount(0);
  });

  test("Collapse all and expand all toolbar visibility", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1080 });
    const json = {
      elements: [
        { type: "text", name: "question1" },
        { type: "panel", name: "panel1" }
      ]
    };
    await page.evaluate(() => {
      (window as any).creator.expandCollapseButtonVisibility = "onhover";
    });
    await setJSON(page, json);
    await expect(page.locator(".sv-action--collapse-all")).toHaveCount(1);
    await expect(page.locator(".sv-action--collapse-all")).toBeVisible();
    await expect(page.locator(".sv-sction--expande-all")).toHaveCount(1);
    await expect(page.locator(".sv-sction--expande-all")).toBeVisible();

    await page.evaluate(() => {
      (window as any).creator.expandCollapseButtonVisibility = "never";
    });
    await expect(page.locator(".sv-action--collapse-all")).not.toBeVisible();
    await expect(page.locator(".sv-sction--expande-all")).not.toBeVisible();
  });

  test("Check page adorner state is restored after shrink and stretch", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      widthMode: "responsive",
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "text", "name": "text" }
          ]
        }
      ]
    };
    await setJSON(page, json);

    const duplicateAction = page.locator(".svc-page__content-actions .sv-action--duplicate .svc-page-toolbar-item__title--with-icon");
    await page.locator(".svc-page").first().click({ position: { x: 3, y: 3 } });
    await expect(duplicateAction).toBeVisible();

    await page.setViewportSize({ width: 500, height: 1080 });
    await expect(duplicateAction).not.toBeVisible();

    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(duplicateAction).toBeVisible();
  });

  test("Popup position", async ({ page }) => {
    async function setCreatorMarginTop(top: string) {
      await page.evaluate((t: string) => {
        const el = document.getElementById("survey-creator") || document.querySelector(".svc-creator") as HTMLElement;
        if (el) el.style.marginTop = t;
      }, top);
    }

    await setCreatorMarginTop("200px");

    await page.setViewportSize({ width: 1400, height: 900 });
    await setJSON(page, { "elements": [{ "type": "text", "name": "q1" }] });
    await page.locator('button[title="Survey settings"]').click();
    await page.locator('[data-name="locale"]').click();
    const popupTop = await page.evaluate(() => (document.querySelector('[data-name="locale"] .sv-popup__container') as HTMLElement)?.getBoundingClientRect().top ?? 0);
    expect(popupTop).toBeGreaterThanOrEqual(200);
    await setCreatorMarginTop("");
  });

  test("Disabled Input issue", async ({ page }) => {
    //https://github.com/surveyjs/survey-creator/issues/6138
    const qName = "question1";
    const json = { "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": qName }] }] };
    await setJSON(page, json);

    const questionContentClass = "svc-question__content";
    const questionContent = page.locator(`[data-sv-drop-target-survey-element=${qName}]`).locator(`.${questionContentClass}`);
    const questionInput = questionContent.locator(".sd-input:disabled");

    await questionInput.click({ force: true });
    await expect(questionContent).toHaveClass(/svc-question__content--selected/);
  });

  test("Disabled Textarea issue", async ({ page }) => {
    const qName = "question1";
    const json = { "pages": [{ "name": "page1", "elements": [{ "type": "comment", "name": qName }] }] };
    await setJSON(page, json);

    const questionContentClass = "svc-question__content";
    const questionContent = page.locator(`[data-sv-drop-target-survey-element=${qName}]`).locator(`.${questionContentClass}`);
    const questionInput = questionContent.locator(".sd-input:disabled");

    await questionInput.click({ force: true });
    await expect(questionContent).toHaveClass(/svc-question__content--selected/);
  });

  async function expectQuestionCollapsedClass(locator: Locator, present = true): Promise<void> {
    if (present) {
      await expect(locator).toHaveClass(/svc-question__content--collapsed/);
    } else {
      await expect(locator).not.toHaveClass(/svc-question__content--collapsed/);
    }
  }

  test("Question adorner double click", async ({ page }) => {
    const json = { "pages": [{ "name": "page1", "elements": [{ "type": "comment", "name": "q" }] }] };
    await page.evaluate(() => {
      (window as any).creator.expandCollapseButtonVisibility = "always";
    });
    await setJSON(page, json);
    const questionContent = page.locator(".svc-question__content").first();
    await questionContent.dblclick();
    await expectQuestionCollapsedClass(questionContent, false);

    await page.locator(".svc-required-action").dblclick();
    await expectQuestionCollapsedClass(questionContent, false);

    await page.locator(".sv-action-bar-item--collapse button").first().dblclick();
    await expectQuestionCollapsedClass(questionContent, false);

    await page.locator(".svc-question__content .sv-string-editor").dblclick();
    await expectQuestionCollapsedClass(questionContent, false);

    let height = await questionContent.evaluate((el: HTMLElement) => el.offsetHeight);
    await questionContent.dblclick({ position: { x: 5, y: height - 5 } });
    await expectQuestionCollapsedClass(questionContent, true);

    height = await questionContent.evaluate((el: HTMLElement) => el.offsetHeight);
    await questionContent.dblclick({ position: { x: 5, y: height - 5 } });
    await expectQuestionCollapsedClass(questionContent, false);

    await page.locator(".sd-question__title").dblclick();
    await expectQuestionCollapsedClass(questionContent, true);
    await page.locator(".sd-question__title").dblclick();
    await expectQuestionCollapsedClass(questionContent, false);

    await page.locator(".svc-question__drag-area").nth(0).dblclick();
    await expectQuestionCollapsedClass(questionContent, true);
    await page.locator(".svc-question__drag-area").nth(0).dblclick();
    await expectQuestionCollapsedClass(questionContent, false);
  });

  async function expectPageCollapsedClass(locator: Locator, present = true): Promise<void> {
    if (present) {
      await expect(locator).toHaveClass(/svc-page__content--collapsed/);
    } else {
      await expect(locator).not.toHaveClass(/svc-page__content--collapsed/);
    }
  }

  test("Page adorner double click", async ({ page }) => {
    const json = { "pages": [{ "name": "page1", "elements": [{ "type": "comment", "name": "q" }] }] };
    await page.evaluate(() => {
      (window as any).creator.expandCollapseButtonVisibility = "always";
      (window as any).creator.allowDragPages = true;
    });
    await setJSON(page, json);
    const pageContent = page.locator(".svc-page__content").first();
    await pageContent.dblclick();
    await expectPageCollapsedClass(pageContent, false);

    await page.locator(".svc-page__content-actions .sv-action-bar-item--collapse button").dblclick();
    await expectPageCollapsedClass(pageContent, false);

    await page.locator(".sd-page__title .sv-string-editor").first().dblclick();
    await expectPageCollapsedClass(pageContent, false);

    let height = await pageContent.evaluate((el: HTMLElement) => el.offsetHeight);
    await pageContent.dblclick({ position: { x: 5, y: height - 5 } });
    await expectPageCollapsedClass(pageContent, true);

    height = await pageContent.evaluate((el: HTMLElement) => el.offsetHeight);
    await pageContent.dblclick({ position: { x: 5, y: height - 5 } });
    await expectPageCollapsedClass(pageContent, false);

    const pageBody = page.locator(".sd-body__page").first();
    let width = await pageBody.evaluate((el: HTMLElement) => el.offsetWidth);
    await pageBody.dblclick({ position: { x: width / 2, y: 5 }, force: true });
    await expectPageCollapsedClass(pageContent, true);

    width = await pageBody.evaluate((el: HTMLElement) => el.offsetWidth);
    await pageBody.dblclick({ position: { x: width / 2, y: 5 }, force: true });
    await expectPageCollapsedClass(pageContent, false);

    await page.locator(".svc-page__content > .svc-question__drag-area").first().dblclick();
    await expectPageCollapsedClass(pageContent, true);
    await page.locator(".svc-page__content > .svc-question__drag-area").first().dblclick();
    await expectPageCollapsedClass(pageContent, false);
  });

  test("Page adorner header click - select", async ({ page }) => {
    const json = { "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "question1" }] }] };
    await setJSON(page, json);

    await page.locator(".svc-page__content-actions").first().click({ position: { x: 50, y: 5 } });
    await expect(page.locator(".svc-page__content").first()).toHaveClass(/svc-page__content--selected/);
  });

  test("Check survey settings button", async ({ page }) => {
    await page.evaluate(() => { (window as any).creator.showOneCategoryInPropertyGrid = true; });
    await page.setViewportSize({ width: 1000, height: 800 });
    await page.setViewportSize({ width: 1600, height: 800 });
    const settingsButton = page.locator('button[title="Survey settings"]');
    await expect(settingsButton).not.toHaveClass(/svc-toolbar__item--active/);

    await page.locator('.svc-menu-action__button[title="General"]').click();
    await expect(settingsButton).toHaveClass(/svc-toolbar__item--active/);
  });
});
