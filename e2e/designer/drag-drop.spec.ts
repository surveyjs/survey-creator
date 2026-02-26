import {
  url,
  test,
  expect,
  setJSON,
  getJSON,
  getPagesLength,
  getQuestionsLength,
  getQuestionNameByIndex,
  getItemValueByIndex,
  doDrag,
  doDragDrop,
  getListItemByText,
  getBarItemByTitle,
  changeToolboxScrolling,
  changeToolboxSearchEnabled,
  patchDragDropToDisableDrop,
} from "../helper";

const title = "Drag Drop";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Drag Drop Toolbox Item and Empty Page", async ({ page }) => {
    const EmptyPage = page.locator("[data-sv-drop-target-survey-element='page1']").filter({ visible: true }).first();
    const newGhostPagePage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']").filter({ visible: true }).first();
    const RatingToolboxItem = page.locator("[aria-label='Rating Scale']").filter({ visible: true }).first();

    await setJSON(page, { pages: [{ name: "page1" }] });
    await doDragDrop({ page, element: RatingToolboxItem, target: EmptyPage, options: { steps: 20 } });
    await doDragDrop({ page, element: RatingToolboxItem, target: newGhostPagePage, options: { steps: 20 } });

    expect(await getPagesLength(page)).toEqual(2);
    expect(await getQuestionsLength(page)).toEqual(2);
    await expect(newGhostPagePage.locator(".svc-row")).toHaveCount(0);
  });

  test("Drag Drop Toolbox Item and Empty Page ({pageEditMode: 'bypage'})", async ({ page }) => {
    await page.evaluate(() => {
      const c = (window as any).creator;
      c.setOptions({ pageEditMode: "bypage" });
    });
    const newGhostPagePage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']").filter({ visible: true }).first();
    const emptyPage = page.locator("[data-sv-drop-target-survey-element='page2']").filter({ visible: true }).first();
    const RatingToolboxItem = page.locator("[aria-label='Rating Scale']").filter({ visible: true }).first();

    //await newGhostPagePage.waitFor({ state: "visible", timeout: 15000 });
    await doDragDrop({ page, element: RatingToolboxItem, target: newGhostPagePage, options: { steps: 20 } });
    await page.locator(".svc-page-navigator-item__dot[title='page2']").filter({ visible: true }).first().click();
    await doDragDrop({ page, element: RatingToolboxItem, target: emptyPage, options: { steps: 20 } });

    expect(await getPagesLength(page)).toEqual(2);
    expect(await getQuestionsLength(page)).toEqual(2);
  });

  test("Drag Drop Toolbox All Questions", async ({ page }) => {
    test.setTimeout(120_000);
    const newGhostPagePage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']").filter({ visible: true }).first();
    const EmptyPage = page.locator("[data-sv-drop-target-survey-element='page1']").filter({ visible: true }).first();

    const CheckboxItem = page.locator("[aria-label='Checkboxes']").filter({ visible: true }).first();
    const RadiogroupItem = page.locator("[aria-label='Radio Button Group']").filter({ visible: true }).first();
    const DropdownItem = page.locator("[aria-label='Dropdown']").filter({ visible: true }).first();
    const CommentItem = page.locator("[aria-label='Long Text']").filter({ visible: true }).first();
    const RankingItem = page.locator("[aria-label='Ranking']").filter({ visible: true }).first();
    const ImagePickerItem = page.locator("[aria-label='Image Picker']").filter({ visible: true }).first();
    const BooleanItem = page.locator("[aria-label='Yes/No (Boolean)']").filter({ visible: true }).first();
    const ImageItem = page.locator("[aria-label='Image']").filter({ visible: true }).first();
    const HtmlItem = page.locator("[aria-label='HTML']").filter({ visible: true }).first();
    const SignatureItem = page.locator("[aria-label='Signature']").filter({ visible: true }).first();
    const ExpressionItem = page.locator("[aria-label='Expression (read-only)']").filter({ visible: true }).first();
    const FileItem = page.locator("[aria-label='File Upload']").filter({ visible: true }).first();
    const MatrixSingleChoiceItem = page.locator("[aria-label='Single-Select Matrix']").filter({ visible: true }).first();
    const MatrixMultipleChoiceItem = page.locator("[aria-label='Multi-Select Matrix']").filter({ visible: true }).first();
    const MatrixDynamicRowsItem = page.locator("[aria-label='Dynamic Matrix']").filter({ visible: true }).first();
    const MultipleTextItem = page.locator("[aria-label='Multiple Textboxes']").filter({ visible: true }).first();
    const PanelItem = page.locator("[aria-label='Panel']").filter({ visible: true }).first();
    const PanelDynamicItem = page.locator("[aria-label='Dynamic Panel']").filter({ visible: true }).first();
    const RatingToolboxItem = page.locator("[aria-label='Rating Scale']").filter({ visible: true }).first();
    const SingleInputToolboxItem = page.locator("[aria-label='Single-Line Input']").filter({ visible: true }).first();

    await setJSON(page, { pages: [{ name: "page1" }] });
    await page.setViewportSize({ width: 2560, height: 2000 });
    await page.evaluate(() => {
      const c = (window as any).creator;
      const root = c.rootElement.getRootNode();
      const el = root.getElementById("survey-creator");
      if (el) {
        el.style.position = "relative";
        (el.style as any).bottom = undefined;
        el.style.height = "15000px";
      }
      const rootEl = root.getElementsByTagName("app-root")[0];
      if (rootEl) (rootEl as HTMLElement).style.position = "relative";
    });

    await doDragDrop({ page, element: ImagePickerItem, target: EmptyPage, options: { steps: 20 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(1);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: CheckboxItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(2);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: RadiogroupItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(3);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: DropdownItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(4);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: CommentItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(5);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: RatingToolboxItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(6);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: RankingItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(7);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: SingleInputToolboxItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(8);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: HtmlItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(9);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: SignatureItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(10);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: ExpressionItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(11);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: FileItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(12);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: MatrixSingleChoiceItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(13);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: MatrixMultipleChoiceItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(14);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: MatrixDynamicRowsItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(15);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: MultipleTextItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(16);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: PanelItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(17);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: PanelDynamicItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(18);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: BooleanItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(19);
    await newGhostPagePage.scrollIntoViewIfNeeded();

    await doDragDrop({ page, element: ImageItem, target: newGhostPagePage, options: { steps: 20, destinationOffsetY: -50 } });
    await page.waitForTimeout(150);
    expect(await getPagesLength(page)).toEqual(20);
    await newGhostPagePage.scrollIntoViewIfNeeded();
  });

  test("Drag Drop Toolbox Responsivity", async ({ page }) => {
    await setJSON(page, { pages: [{ name: "page1" }] });
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    const tabbedMenuItemSelector = page.locator(".svc-toolbox .svc-toolbox__tool:nth-of-type(18)").first();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(150);
    await expect(tabbedMenuItemSelector).not.toHaveClass(/sv-action--hidden/);
    await page.setViewportSize({ width: 970, height: 632 });
    await expect(tabbedMenuItemSelector).toHaveClass(/sv-action--hidden/);
    await page.locator(".svc-toolbox__tool--dots").filter({ visible: true }).first().click();

    const EmptyPage = page.locator("[data-sv-drop-target-survey-element='page1']").filter({ visible: true }).first();
    const dynamicPanelItem = getListItemByText(page, "Dynamic Panel").filter({ visible: true }).first();
    await doDragDrop({ page, element: dynamicPanelItem, target: EmptyPage, options: { steps: 20 } });

    const name = await getQuestionNameByIndex(page, 0);
    expect(name).toEqual("question1");
  });

  test("Drag Drop Question", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      pages: [{ name: "page1", elements: [{ type: "rating", name: "rating1" }, { type: "rating", name: "rating2" }] }],
    };
    await setJSON(page, json);

    const questionName = "rating2";
    const Rating1 = page.locator("[data-sv-drop-target-survey-element=\"rating1\"]").filter({ visible: true }).first();
    const Rating2 = page.locator(`[data-sv-drop-target-survey-element="${questionName}"]`).filter({ visible: true }).first();
    const DragZoneRating2 = Rating2.locator(".svc-question__drag-element");
    const FirstRow = page.locator(".svc-row").filter({ visible: true }).first();

    await doDragDrop({ page, element: DragZoneRating2, target: FirstRow, options: { steps: 20, destinationOffsetY: 25 } });
    expect(await getQuestionNameByIndex(page, 0)).toEqual(questionName);

    await doDragDrop({ page, element: DragZoneRating2, target: Rating1, options: { steps: 20, destinationOffsetY: -1 } });
    expect(await getQuestionNameByIndex(page, 1)).toEqual(questionName);
  });

  test("Drag Drop to Panel", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      pages: [{ name: "page1", elements: [{ type: "panel", name: "panel1" }] }],
    };
    await setJSON(page, json);

    const Panel = page.locator("[data-sv-drop-target-survey-element=\"panel1\"]").filter({ visible: true }).first();
    const Question3 = page.locator("[data-sv-drop-target-survey-element=\"question3\"]").filter({ visible: true }).first();
    const RatingToolboxItem = page.locator("[aria-label='Rating Scale']").filter({ visible: true }).first();

    const { width: widthPanel, height: heightPanel } = await <any>Panel.boundingBox();

    await doDragDrop({ page, element: RatingToolboxItem, target: Panel, options: { steps: 20, targetPosition: { x: widthPanel / 2, y: 0 } } });
    await doDragDrop({ page, element: RatingToolboxItem, target: Panel, options: { steps: 20, targetPosition: { x: widthPanel / 2, y: heightPanel - 5 } } });
    await doDragDrop({ page, element: RatingToolboxItem, target: Panel, options: { steps: 20 } });
    const { width: widthQuestion3, height: heightQuestion3 } = await <any>Question3.boundingBox();
    await doDragDrop({ page, element: RatingToolboxItem, target: Question3, options: { steps: 20, targetPosition: { x: widthQuestion3 / 2, y: 10 } } });
    await doDragDrop({ page, element: RatingToolboxItem, target: Question3, options: { steps: 20, targetPosition: { x: widthQuestion3 / 2, y: heightQuestion3 - 10 } } });

    const expectedJson = {
      pages: [{
        name: "page1",
        elements: [
          { type: "rating", name: "question1" },
          { type: "panel", name: "panel1", elements: [{ type: "rating", name: "question4" }, { type: "rating", name: "question3" }, { type: "rating", name: "question5" }] },
          { type: "rating", name: "question2" },
        ],
      }],
    };
    expect(await getJSON(page)).toEqual(expectedJson);
  });

  test("Drag Drop to collapsed panel", async ({ page }) => {
    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "always"; });
    await page.setViewportSize({ width: 1600, height: 1000 });
    const json = {
      pages: [{ name: "page1", elements: [{ type: "panel", name: "panel1", elements: [{ type: "text", name: "q1" }] }] }],
    };
    await setJSON(page, json);

    const expectedJson = {
      pages: [{
        name: "page1",
        elements: [{
          type: "panel",
          name: "panel1",
          elements: [
            { type: "text", name: "q1" },
            { type: "radiogroup", name: "question1", choices: ["Item 1", "Item 2", "Item 3"] },
          ],
        }],
      }],
    };

    const qCollapseButton = page.locator(".svc-question__content .sv-action-bar-item--collapse").filter({ visible: true }).first();
    await qCollapseButton.click();

    const Panel = page.locator("[data-sv-drop-target-survey-element=\"panel1\"]").filter({ visible: true }).first();
    const toolboxToolAction = page.locator(".svc-toolbox__tool > .sv-action__content").filter({ visible: true }).first();

    await doDrag({ page, element: toolboxToolAction, target: Panel, options: { steps: 25 } });
    await expect(Panel.locator(".svc-question__content--collapsed-drag-over-inside")).toBeVisible({ timeout: 15000 });
    await page.mouse.up();
    expect(await getJSON(page)).toEqual(expectedJson);

    await toolboxToolAction.hover();
    await page.mouse.down();
    await Panel.scrollIntoViewIfNeeded();
    const panelBox = await Panel.boundingBox();
    if (!panelBox) throw new Error("Panel has no bounding box");
    const centerY = panelBox.y + panelBox.height / 2;
    await page.mouse.move(panelBox.x + 15, centerY, { steps: 20 });
    await expect(Panel.locator(".svc-question__content--drag-over-left")).toBeVisible({ timeout: 15000 });
    await expect(Panel.locator(".svc-question__content--collapsed-drag-over-inside")).not.toBeVisible();
    await page.waitForTimeout(2000);
    await page.mouse.move(panelBox.x + 100, centerY, { steps: 20 });
    await expect(Panel.locator(".svc-question__content--collapsed")).toBeVisible({ timeout: 15000 });
    await page.waitForTimeout(2000);
    await expect(Panel.locator(".svc-question__content--collapsed")).not.toBeVisible();
    await expect(Panel.locator(".svc-question__content--drag-over-left")).not.toBeVisible();
    await page.mouse.up();
  });

  test("Drag Drop to selected collapsed panel", async ({ page }) => {
    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "always"; });
    await page.setViewportSize({ width: 1600, height: 1000 });
    const json = {
      pages: [{ name: "page1", elements: [{ type: "panel", name: "panel1", elements: [{ type: "text", name: "q1" }] }] }],
    };
    await setJSON(page, json);

    const qCollapseButton = page.locator(".svc-question__content .sv-action-bar-item--collapse").filter({ visible: true }).first();
    await qCollapseButton.click();

    const Panel = page.locator("[data-sv-drop-target-survey-element=\"panel1\"]").filter({ visible: true }).first();
    const toolboxToolAction = page.locator(".svc-toolbox__tool > .sv-action__content").filter({ visible: true }).first();

    await Panel.click({ position: { x: 1, y: 1 } });
    await doDrag({ page, element: toolboxToolAction, target: Panel, options: { steps: 25, targetPosition: { x: 100, y: 0 } } });
    await expect(Panel.locator(".svc-question__content--collapsed")).toBeVisible({ timeout: 15000 });
    await expect(Panel.locator(".svc-question__content--collapsed")).not.toBeVisible({ timeout: 5000 });
    await page.mouse.up();

    expect(await getJSON(page)).toEqual(json);
    await expect(page.locator(".spg-question[data-name=name] input").filter({ visible: true }).first()).toHaveValue("panel1");
  });

  test("Drag Drop to collapsed dynamic panel", async ({ page }) => {
    await page.evaluate(() => {
      const c = (window as any).creator;
      c.expandCollapseButtonVisibility = "always";
      c.expandOnDragTimeOut = 2000;
    });
    await page.setViewportSize({ width: 1600, height: 1000 });
    const json = {
      pages: [{ name: "page1", elements: [{ type: "paneldynamic", name: "panel1", templateElements: [{ type: "text", name: "question1" }] }] }],
    };
    await setJSON(page, json);

    const qCollapseButton = page.locator(".svc-question__content .sv-action-bar-item--collapse").filter({ visible: true }).first();
    await qCollapseButton.click();

    const Panel = page.locator("[data-sv-drop-target-survey-element=\"panel1\"]").filter({ visible: true }).first();
    const toolboxToolAction = page.locator(".svc-toolbox__tool > .sv-action__content").filter({ visible: true }).first();
    await toolboxToolAction.hover();
    await page.mouse.down();
    await Panel.scrollIntoViewIfNeeded();
    const panelBox = await Panel.boundingBox();
    if (!panelBox) throw new Error("Panel has no bounding box");
    const centerY = panelBox.y + panelBox.height / 2;
    await page.mouse.move(panelBox.x + 15, centerY, { steps: 20 });
    await expect(Panel.locator(".svc-question__content--drag-over-left")).toBeVisible({ timeout: 15000 });
    await expect(Panel.locator(".svc-question__content--collapsed-drag-over-inside")).not.toBeVisible();
    await page.waitForTimeout(2000);
    await page.mouse.move(panelBox.x + 100, centerY, { steps: 20 });
    await expect(Panel.locator(".svc-question__content--collapsed")).toBeVisible({ timeout: 15000 });
    await page.waitForTimeout(2000);
    await expect(Panel.locator(".svc-question__content--collapsed")).not.toBeVisible();
    await expect(Panel.locator(".svc-question__content--drag-over-left")).not.toBeVisible();
    await page.mouse.up();

    expect(await getJSON(page)).toEqual(json);
  });

  test("Drag Drop to collapsed page", async ({ page }) => {
    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "always"; });
    await page.setViewportSize({ width: 1600, height: 1000 });
    const json = {
      pages: [{ name: "page1", elements: [{ type: "panel", name: "panel1", elements: [{ type: "text", name: "q1" }] }] }],
    };
    await setJSON(page, json);

    const pCollapseButton = page.locator(".svc-page__content > .svc-question__drag-area .sv-action-bar-item--collapse button").filter({ visible: true }).first();
    await pCollapseButton.click();

    const Page = page.locator("[data-sv-drop-target-survey-element='page1']").filter({ visible: true }).first();
    const toolboxToolAction = page.locator(".svc-toolbox__tool > .sv-action__content").filter({ visible: true }).first();
    const expectedJson = {
      pages: [{
        name: "page1",
        elements: [
          { type: "panel", name: "panel1", elements: [{ type: "text", name: "q1" }] },
          { type: "radiogroup", name: "question1", choices: ["Item 1", "Item 2", "Item 3"] },
        ],
      }],
    };

    await doDrag({ page, element: toolboxToolAction, target: Page, options: { steps: 25, targetPosition: { x: 150, y: 0 } } });
    await expect(Page.locator(".svc-page__content--collapsed-drag-over-inside")).toBeVisible({ timeout: 15000 });
    await page.mouse.up();
    expect(await getJSON(page)).toEqual(expectedJson);

    await toolboxToolAction.hover();
    await page.mouse.down();
    await Page.scrollIntoViewIfNeeded();
    const pageBox = await Page.boundingBox();
    if (!pageBox) throw new Error("Page has no bounding box");
    const pageCenterX = pageBox.x + pageBox.width / 2;
    const pageCenterY = pageBox.y + pageBox.height / 2;
    await page.mouse.move(pageCenterX, pageCenterY, { steps: 20 });
    await expect(Page.locator(".svc-page__content--collapsed")).toBeVisible({ timeout: 15000 });
    await page.waitForTimeout(2000);
    await expect(Page.locator(".svc-page__content--collapsed")).not.toBeVisible();
    await page.mouse.up();
  });

  test("Drag Drop Question from a panel", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      elements: [{ type: "panel", name: "panel1", elements: [{ type: "text", name: "question1" }] }],
    };
    await setJSON(page, json);

    const question1 = page.locator("[data-sv-drop-target-survey-element=\"question1\"]").filter({ visible: true }).first();
    const panel1 = page.locator("[data-sv-drop-target-survey-element=\"panel1\"]").filter({ visible: true }).first();

    await doDragDrop({ page, element: question1, target: panel1, options: { steps: 20, destinationOffsetY: 2 } });

    const expectedJson = {
      pages: [{
        name: "page1",
        elements: [
          { type: "text", name: "question1" },
          { type: "panel", name: "panel1" },
        ],
      }],
    };
    expect(await getJSON(page)).toEqual(expectedJson);
  });

  test("Drag Drop Question with Multiline (StartWithNewLine === false)", async ({ page }) => {
    const json = {
      pages: [{
        name: "page1",
        elements: [
          { type: "text", name: "question4" },
          { type: "boolean", name: "question1" },
          { type: "radiogroup", name: "question2", startWithNewLine: false, choices: ["Item 1", "Item 2", "Item 3"] },
          { type: "rating", name: "question3", startWithNewLine: false },
        ],
      }],
    };
    await setJSON(page, json);

    const Question1 = page.locator("[data-sv-drop-target-survey-element=\"question1\"]").filter({ visible: true }).first();
    const Question2 = page.locator("[data-sv-drop-target-survey-element=\"question2\"]").filter({ visible: true }).first();
    const Question3 = page.locator("[data-sv-drop-target-survey-element=\"question3\"]").filter({ visible: true }).first();
    const Question4 = page.locator("[data-sv-drop-target-survey-element=\"question4\"]").filter({ visible: true }).first();
    const DragZoneQuestion1 = Question1.locator(".svc-question__drag-element");
    const DragZoneQuestion2 = Question2.locator(".svc-question__drag-element");
    const DragZoneQuestion3 = Question3.locator(".svc-question__drag-element");

    await doDragDrop({ page, element: DragZoneQuestion1, target: Question2, options: { steps: 20, destinationOffsetX: -80 } });
    expect(await getQuestionNameByIndex(page, 1)).toEqual("question2");
    expect(await getQuestionNameByIndex(page, 2)).toEqual("question1");
    expect(await getQuestionNameByIndex(page, 3)).toEqual("question3");

    await doDragDrop({ page, element: DragZoneQuestion3, target: Question1, options: { steps: 20, destinationOffsetX: 80 } });
    expect(await getQuestionNameByIndex(page, 1)).toEqual("question2");
    expect(await getQuestionNameByIndex(page, 2)).toEqual("question3");
    expect(await getQuestionNameByIndex(page, 3)).toEqual("question1");

    await doDragDrop({ page, element: DragZoneQuestion2, target: Question4, options: { steps: 20, destinationOffsetY: 80 } });
    expect(await getQuestionNameByIndex(page, 0)).toEqual("question2");
    expect(await getQuestionNameByIndex(page, 1)).toEqual("question4");
    expect(await getQuestionNameByIndex(page, 2)).toEqual("question3");
    expect(await getQuestionNameByIndex(page, 3)).toEqual("question1");
  });

  test("Drag Drop Question with Multiline and OtherPage (StartWithNewLine === false)", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      pages: [
        {
          name: "page1",
          elements: [
            { type: "text", name: "question4" },
            { type: "boolean", name: "question1" },
            { type: "radiogroup", name: "question2", startWithNewLine: false, choices: ["Item 1", "Item 2", "Item 3"] },
            { type: "rating", name: "question3", startWithNewLine: false },
          ],
        },
        { name: "page2", elements: [{ type: "text", name: "question5" }] },
      ],
    };
    await setJSON(page, json);

    const Question1 = page.locator("[data-sv-drop-target-survey-element=\"question1\"]").filter({ visible: true }).first();
    const Question2 = page.locator("[data-sv-drop-target-survey-element=\"question2\"]").filter({ visible: true }).first();
    const Question5 = page.locator("[data-sv-drop-target-survey-element=\"question5\"]").filter({ visible: true }).first();
    const DragZoneQuestion1 = Question1.locator(".svc-question__drag-element");

    await doDragDrop({ page, element: DragZoneQuestion1, target: Question5, options: { steps: 10, destinationOffsetY: 80 } });
    await doDragDrop({ page, element: DragZoneQuestion1, target: Question2, options: { steps: 10, destinationOffsetX: 80 } });

    const result = await page.evaluate(() => (window as any).creator.survey.getAllQuestions()[1].startWithNewLine);
    expect(result).toEqual(true);
  });

  test("Drag Drop Question out of Multiline (StartWithNewLine === false)", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      pages: [{
        name: "page1",
        elements: [
          { type: "text", name: "question1" },
          { type: "text", startWithNewLine: false, name: "question2" },
          { type: "text", startWithNewLine: false, name: "question3" },
        ],
      }],
    };
    await setJSON(page, json);

    const Question1 = page.locator("[data-sv-drop-target-survey-element=\"question1\"]").filter({ visible: true }).first();
    const Question2 = page.locator("[data-sv-drop-target-survey-element=\"question2\"]").filter({ visible: true }).first();
    const DragZoneQuestion2 = Question2.locator(".svc-question__drag-element");

    await doDragDrop({ page, element: DragZoneQuestion2, target: Question1, options: { steps: 10, destinationOffsetX: -50, destinationOffsetY: -10 } });

    const result = await page.evaluate(() => (window as any).creator.survey.getAllQuestions()[2].startWithNewLine);
    expect(result).toEqual(true);

    const expectedJson = {
      pages: [{
        name: "page1",
        elements: [
          { type: "text", name: "question1" },
          { type: "text", startWithNewLine: false, name: "question3" },
          { type: "text", name: "question2" },
        ],
      }],
    };
    expect(await getJSON(page)).toEqual(expectedJson);
  });

  test("Drag Drop ItemValue (choices)", async ({ page }) => {
    const json = {
      pages: [{ name: "page1", elements: [{ type: "radiogroup", name: "question1", choices: ["Item 1", "Item 2", "Item 3"] }] }],
    };
    await setJSON(page, json);

    const Question1 = page.locator("[data-name=\"question1\"]").filter({ visible: true }).first();
    const Item1 = page.locator("[data-sv-drop-target-item-value=\"Item 1\"]").filter({ visible: true }).first();
    const Item2 = page.locator("[data-sv-drop-target-item-value=\"Item 2\"]").filter({ visible: true }).first();
    const Item3 = page.locator("[data-sv-drop-target-item-value=\"Item 3\"]").filter({ visible: true }).first();
    const DragZoneItem2 = Item2.locator(".svc-item-value-controls__drag");

    await Question1.click();
    await doDragDrop({ page, element: DragZoneItem2, target: Item1, options: { steps: 10, destinationOffsetY: -40 } });
    expect(await getItemValueByIndex(page, "question1", 0)).toEqual("Item 2");

    await doDragDrop({ page, element: DragZoneItem2, target: Item3, options: { steps: 10, destinationOffsetY: 30 } });
    expect(await getItemValueByIndex(page, "question1", 2)).toEqual("Item 2");
  });

  test("Drag Drop ItemValue (choices): not-allowed cursor", async ({ page }) => {
    const json = {
      pages: [{ name: "page1", elements: [{ type: "radiogroup", name: "question1", choices: ["Item 1", "Item 2"] }] }],
    };
    await setJSON(page, json);

    const newGhostPagePage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']").filter({ visible: true }).first();
    const Question1 = page.locator("[data-name=\"question1\"]").filter({ visible: true }).first();
    const Item2 = page.locator("[data-sv-drop-target-item-value=\"Item 2\"]").filter({ visible: true }).first();
    const DragZoneItem2 = Item2.locator(".svc-item-value-controls__drag");
    const DnDShortcutControls = page.locator("div > [data-sv-drop-target-item-value='Item 2']").locator(".svc-item-value-controls__button").filter({ visible: true }).first();

    await patchDragDropToDisableDrop(page);
    await Question1.click();
    await doDragDrop({ page, element: DragZoneItem2, target: newGhostPagePage, options: { steps: 10 } });
    await expect(DnDShortcutControls).toHaveCSS("cursor", "not-allowed");
  });

  test("Drag Drop Ranking (choices)", async ({ page }) => {
    const json = {
      pages: [{ name: "page1", elements: [{ type: "ranking", name: "question1", choices: ["Item 1", "Item 2", "Item 3"] }] }],
    };
    await setJSON(page, json);

    const Question1 = page.locator("[data-name=\"question1\"]").filter({ visible: true }).first();
    const Item1 = page.locator("[data-sv-drop-target-item-value=\"Item 1\"]").filter({ visible: true }).first();
    const Item2 = page.locator("[data-sv-drop-target-item-value=\"Item 2\"]").filter({ visible: true }).first();
    const Item3 = page.locator("[data-sv-drop-target-item-value=\"Item 3\"]").filter({ visible: true }).first();
    const DragZoneItem2 = Item2.locator(".svc-item-value-controls__drag");

    await Question1.click();
    await doDragDrop({ page, element: DragZoneItem2, target: Item1, options: { steps: 10, destinationOffsetY: -40 } });
    expect(await getItemValueByIndex(page, "question1", 0)).toEqual("Item 2");

    await doDragDrop({ page, element: DragZoneItem2, target: Item3, options: { steps: 10, destinationOffsetY: 30 } });
    expect(await getItemValueByIndex(page, "question1", 2)).toEqual("Item 2");
  });

  test("Animation (choices)", async ({ page }) => {
    const json = {
      pages: [{ name: "page1", elements: [{ type: "radiogroup", name: "question1", choices: ["Item 1", "Item 2", "Item 3"] }] }],
    };
    await setJSON(page, json);

    const Question1 = page.locator("[data-name=\"question1\"]").filter({ visible: true }).first();
    const Item1 = page.locator("[data-sv-drop-target-item-value=\"Item 1\"]").filter({ visible: true }).first();
    const Item2 = page.locator("[data-sv-drop-target-item-value=\"Item 2\"]").filter({ visible: true }).first();
    const Item3 = page.locator("[data-sv-drop-target-item-value=\"Item 3\"]").filter({ visible: true }).first();
    const DragZoneItem2 = Item2.locator(".svc-item-value-controls__drag");

    await Question1.click();
    await doDragDrop({ page, element: DragZoneItem2, target: Item1, options: { steps: 10, destinationOffsetY: -40 } });
    await doDragDrop({ page, element: DragZoneItem2, target: Item3, options: { steps: 10, destinationOffsetY: 30 } });

    const animationClassesCount = await page.evaluate(() => {
      let result = 0;
      const root = (window as any).creator.rootElement.getRootNode();
      const container = root.querySelector("[data-name='question1']");
      if (!container) return 0;
      const nodes = container.querySelectorAll(".svc-item-value-wrapper");
      nodes.forEach((node: Element) => {
        if (node.classList.contains("svc-item-value--movedown") || node.classList.contains("svc-item-value--moveup")) result++;
      });
      return result;
    });
    expect(animationClassesCount).toEqual(0);
  });

  test("Drag Drop ImagePicker (choices)", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      pages: [{
        name: "page1",
        elements: [{
          type: "imagepicker",
          name: "question1",
          choices: [
            { value: "lion", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg" },
            { value: "giraffe", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg" },
            { value: "panda", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg" },
            { value: "camel", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg" },
          ],
        }],
      }],
    };
    await setJSON(page, json);

    const Question1 = page.locator("[data-name=\"question1\"]").filter({ visible: true }).first();
    const LionItem = page.locator("[data-sv-drop-target-item-value=\"lion\"]").filter({ visible: true }).first();
    const GiraffeItem = page.locator("[data-sv-drop-target-item-value=\"giraffe\"]").filter({ visible: true }).first();
    const PandaItem = page.locator("[data-sv-drop-target-item-value=\"panda\"]").filter({ visible: true }).first();
    const DragZoneGiraffeItem = GiraffeItem.locator(".svc-image-item-value-controls__drag-area-indicator").filter({ visible: true }).first();

    await Question1.click();
    await doDragDrop({ page, element: DragZoneGiraffeItem, target: LionItem, options: { steps: 10 } });
    expect(await getItemValueByIndex(page, "question1", 0)).toEqual("giraffe");

    await Question1.click();
    await doDragDrop({ page, element: DragZoneGiraffeItem, target: PandaItem, options: { steps: 10 } });
    expect(await getItemValueByIndex(page, "question1", 2)).toEqual("giraffe");
  });

  test("Drag Drop ImagePicker (choices) - check controls exists", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      pages: [{
        name: "page1",
        elements: [{
          type: "imagepicker",
          name: "question1",
          choices: [{ value: "lion", imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg" }],
        }],
      }],
    };
    await setJSON(page, json);

    const Question1 = page.locator("[data-name=\"question1\"]").filter({ visible: true }).first();
    const LionItem = page.locator("[data-sv-drop-target-item-value=\"lion\"]").filter({ visible: true }).first();
    const DragZoneLionItem = LionItem.locator(".svc-image-item-value-controls__drag-area-indicator").filter({ visible: true }).first();
    const SomeOutsideArea = page.locator(".svc-toolbox").filter({ visible: true }).first();
    const ControlsNode = LionItem.locator(".svc-image-item-value-controls").filter({ visible: true }).first();

    await Question1.click();
    await doDragDrop({ page, element: DragZoneLionItem, target: SomeOutsideArea, options: { steps: 10 } });
    await ControlsNode.hover();
  });

  test("Drag Drop MatrixRows (property grid)", async ({ page }) => {
    const json = {
      pages: [{ name: "page1", elements: [{ type: "radiogroup", name: "question1", choices: ["Item 1", "Item 2", "Item 3"] }] }],
    };
    await setJSON(page, json);

    await page.locator("[data-name=\"question1\"]").filter({ visible: true }).first().click();
    const ChoicesTab = page.locator("div[id$=ariaTitle][id^=sp]").getByText("Choice Options", { exact: true }).filter({ visible: true }).first();
    await ChoicesTab.click();

    const Item1 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0);
    const Item2 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1);
    const Item3 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(2);
    let DragZoneItem2 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1).locator(".spg-drag-element__svg");
    await doDragDrop({ page, element: DragZoneItem2, target: Item1, options: { steps: 20, destinationOffsetX: 5, destinationOffsetY: 5 } });
    expect(await getItemValueByIndex(page, "question1", 0)).toEqual("Item 2");

    DragZoneItem2 = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0).locator(".spg-drag-element__svg");
    await doDragDrop({ page, element: DragZoneItem2, target: Item3, options: { steps: 20, destinationOffsetX: 5, destinationOffsetY: -5 } });
    expect(await getItemValueByIndex(page, "question1", 2)).toEqual("Item 2");
  });

  test("Drag Drop Pages MatrixRows (property grid Pages)", async ({ page }) => {
    const json = {
      pages: [
        { name: "page1", elements: [{ type: "radiogroup", name: "question1", choices: ["Item 1", "Item 2", "Item 3"] }] },
        { name: "page2", elements: [{ type: "radiogroup", name: "question2", choices: ["Item 1", "Item 2", "Item 3"] }] },
        { name: "page3", elements: [{ type: "radiogroup", name: "question3", choices: ["Item 1", "Item 2", "Item 3"] }] },
      ],
    };
    await setJSON(page, json);

    const PagesTab = page.locator("div[id$=ariaTitle][id^=sp]").getByText("Pages", { exact: true }).filter({ visible: true }).first();
    await getBarItemByTitle(page, "Survey settings").click();
    await PagesTab.click();

    const Page1 = page.locator("[data-name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(0);
    const Page2 = page.locator("[data-name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(1);
    const Page3 = page.locator("[data-name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(2);
    const DragZonePage2 = page.locator("[data-name=\"pages\"] [data-sv-drop-target-matrix-row]").nth(1).locator(".spg-drag-element__svg");
    await doDragDrop({ page, element: DragZonePage2, target: Page1, options: { steps: 20, destinationOffsetX: 5, destinationOffsetY: 5 } });

    const pageName = await page.evaluate((i: number) => (window as any).creator.survey.pages[i].name, 0);
    expect(pageName).toEqual("page2");
  });

  test("Drag Drop to Panel Dynamic Question", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      pages: [{ name: "page1", elements: [{ type: "paneldynamic", name: "paneldynamic1" }] }],
    };
    await setJSON(page, json);

    const DynamicPanel = page.locator("[data-sv-drop-target-survey-element=\"paneldynamic1\"]").filter({ visible: true }).first();
    const Question3 = page.locator("[data-sv-drop-target-survey-element=\"question3\"]").filter({ visible: true }).first();
    const FirstRow = page.locator(".svc-row").filter({ visible: true }).first();
    const RatingToolboxItem = page.locator("[aria-label='Rating Scale']").filter({ visible: true }).first();

    await doDragDrop({ page, element: RatingToolboxItem, target: FirstRow, options: { steps: 20, destinationOffsetY: 25 } });
    await doDragDrop({ page, element: RatingToolboxItem, target: DynamicPanel, options: { steps: 20, destinationOffsetY: -1 } });
    await doDragDrop({ page, element: RatingToolboxItem, target: DynamicPanel, options: { steps: 20 } });
    await doDragDrop({ page, element: RatingToolboxItem, target: Question3, options: { steps: 20, destinationOffsetY: 1 } });
    await doDragDrop({ page, element: RatingToolboxItem, target: Question3, options: { steps: 20, destinationOffsetY: -10 } });

    const expectedJson = {
      pages: [{
        name: "page1",
        elements: [
          { type: "rating", name: "question1" },
          { type: "paneldynamic", name: "paneldynamic1", templateElements: [{ type: "rating", name: "question4" }, { type: "rating", name: "question3" }, { type: "rating", name: "question5" }] },
          { type: "rating", name: "question2" },
        ],
      }],
    };
    expect(await getJSON(page)).toEqual(expectedJson);
  });

  test("Drag Drop from Panel Dynamic Question", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      pages: [{
        name: "page1",
        elements: [
          { type: "paneldynamic", name: "paneldynamic1", templateElements: [{ type: "rating", name: "rating1" }, { type: "rating", name: "rating2" }] },
          { type: "rating", name: "rating3" },
        ],
      }],
    };
    await setJSON(page, json);

    const Rating2 = page.locator("[data-sv-drop-target-survey-element=\"rating2\"]").filter({ visible: true }).first();
    const DragZoneRating2 = Rating2.locator(".svc-question__drag-element");
    const Rating3 = page.locator("[data-sv-drop-target-survey-element=\"rating3\"]").filter({ visible: true }).first();

    await Rating2.click();
    await doDragDrop({ page, element: DragZoneRating2, target: Rating3, options: { steps: 20, destinationOffsetY: -50 } });

    const expectedJson = {
      pages: [{
        name: "page1",
        elements: [
          { type: "paneldynamic", name: "paneldynamic1", templateElements: [{ type: "rating", name: "rating1" }] },
          { type: "rating", name: "rating3" },
          { type: "rating", name: "rating2" },
        ],
      }],
    };
    expect(await getJSON(page)).toEqual(expectedJson);
  });

  test("Drag Drop Question: click on drag area should work withot drag start", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      pages: [{ name: "page1", elements: [{ type: "rating", name: "rating1" }, { type: "rating", name: "rating2" }] }],
    };
    await setJSON(page, json);

    const Rating1 = page.locator("[data-sv-drop-target-survey-element=\"rating1\"]").filter({ visible: true }).first();
    const Rating2 = page.locator("[data-sv-drop-target-survey-element=\"rating2\"]").filter({ visible: true }).first();
    const DragZoneRating2 = Rating2.locator(".svc-question__drag-element");

    await Rating1.click();
    expect(await page.evaluate(() => (window as any).creator.selectedElement.name)).toEqual("rating1");
    await Rating2.hover();
    await DragZoneRating2.click();
    expect(await page.evaluate(() => (window as any).creator.selectedElement.name)).toEqual("rating2");
  });

  test("Drag Drop below the last Panel", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    const json = {
      logoPosition: "right",
      pages: [{
        name: "page1",
        elements: [
          { type: "panel", name: "panel1" },
          { type: "panel", name: "panel2", elements: [{ type: "text", name: "question1" }] },
        ],
      }],
    };
    await setJSON(page, json);

    const LastPanel = page.locator("[data-sv-drop-target-survey-element=\"panel2\"]").filter({ visible: true }).first();
    const PanelToolboxItem = page.locator("[aria-label='Panel']").filter({ visible: true }).first();

    await doDragDrop({ page, element: PanelToolboxItem, target: LastPanel, options: { steps: 5, destinationOffsetY: -10 } });

    const expectedJson = {
      logoPosition: "right",
      pages: [{
        name: "page1",
        elements: [
          { type: "panel", name: "panel1" },
          { type: "panel", name: "panel2", elements: [{ type: "text", name: "question1" }] },
          { type: "panel", name: "panel3" },
        ],
      }],
    };
    expect(await getJSON(page)).toEqual(expectedJson);
  });

  test("Drag Drop to new page and Undo", async ({ page }) => {
    const newGhostPagePage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']").filter({ visible: true }).first();
    const EmptyPage = page.locator("[data-sv-drop-target-survey-element='page1']").filter({ visible: true }).first();
    const undoAction = page.locator("button[title=Undo]").filter({ visible: true }).first();
    const SingleInputToolboxItem = page.locator("[aria-label='Single-Line Input']").filter({ visible: true }).first();

    await page.setViewportSize({ width: 2560, height: 2000 });
    await page.evaluate(() => {
      const c = (window as any).creator;
      const root = c.rootElement.getRootNode();
      const el = root.getElementById("survey-creator");
      if (el) { el.style.position = "relative"; (el.style as any).bottom = undefined; el.style.height = "10000px"; }
      const rootEl = root.getElementsByTagName("app-root")[0];
      if (rootEl) (rootEl as HTMLElement).style.position = "relative";
    });

    await doDragDrop({ page, element: SingleInputToolboxItem, target: EmptyPage, options: { steps: 20 } });
    expect(await getPagesLength(page)).toEqual(1);

    await doDragDrop({ page, element: SingleInputToolboxItem, target: newGhostPagePage, options: { steps: 20 } });
    expect(await getPagesLength(page)).toEqual(2);

    await doDragDrop({ page, element: SingleInputToolboxItem, target: newGhostPagePage, options: { steps: 20 } });
    expect(await getPagesLength(page)).toEqual(3);

    await undoAction.click();
    expect(await getPagesLength(page)).toEqual(2);

    await undoAction.click();
    expect(await getPagesLength(page)).toEqual(1);
  });

  test("Drag Drop on the right of Panel same row - single panel", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      logoPosition: "right",
      pages: [{
        name: "page1",
        elements: [{
          type: "panel",
          name: "panel1",
          elements: [{ type: "text", name: "question1" }, { type: "text", name: "question2" }, { type: "text", name: "question3" }],
        }],
      }],
    };
    await setJSON(page, json);

    const Panel = page.locator("[data-sv-drop-target-survey-element=\"panel1\"]").filter({ visible: true }).first();
    const SingleInputToolboxItem = page.locator("[aria-label='Single-Line Input']").filter({ visible: true }).first();

    await doDragDrop({ page, element: SingleInputToolboxItem, target: Panel, options: { steps: 5, destinationOffsetY: 100, destinationOffsetX: -10 } });

    const expectedJson = {
      logoPosition: "right",
      pages: [{
        name: "page1",
        elements: [
          {
            type: "panel",
            name: "panel1",
            elements: [{ type: "text", name: "question1" }, { type: "text", name: "question2" }, { type: "text", name: "question3" }],
          },
          { type: "text", name: "question4", startWithNewLine: false },
        ],
      }],
    };
    expect(await getJSON(page)).toEqual(expectedJson);
  });

  test("Drag Drop on the right of Panel same row - two panels", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      logoPosition: "right",
      pages: [{
        name: "page1",
        elements: [{ type: "panel", name: "panel1" }, { type: "panel", name: "panel2" }],
      }],
    };
    await setJSON(page, json);

    const Panel1 = page.locator("[data-sv-drop-target-survey-element=\"panel1\"]").filter({ visible: true }).first();
    const Panel2 = page.locator("[data-sv-drop-target-survey-element=\"panel2\"]").filter({ visible: true }).first();

    await doDragDrop({ page, element: Panel2, target: Panel1, options: { steps: 10, destinationOffsetY: 150, destinationOffsetX: 150 } });

    const expectedJson = {
      logoPosition: "right",
      pages: [{
        name: "page1",
        elements: [{ type: "panel", name: "panel1", elements: [{ type: "panel", name: "panel2" }] }],
      }],
    };
    expect(await getJSON(page)).toEqual(expectedJson);
  });

  test("Drag Drop on the bottom of page in bypage mode", async ({ page }) => {
    await page.setViewportSize({ width: 1800, height: 900 });
    await page.evaluate(() => { (window as any).creator.setOptions({ pageEditMode: "bypage" }); });
    const json = {
      logoPosition: "right",
      pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }],
    };
    await setJSON(page, json);

    const existingPageSelector = page.locator("[data-sv-drop-target-survey-element=\"page1\"]").filter({ visible: true }).first();
    const ghostPageSelector = page.locator("[data-sv-drop-target-survey-element=\"panel2\"]").filter({ visible: true }).first();
    const SingleInputToolboxItem = page.locator("[aria-label='Single-Line Input']").filter({ visible: true }).first();

    await expect(ghostPageSelector).not.toBeVisible();
    await expect(existingPageSelector).toBeVisible({ timeout: 15000 });

    await doDragDrop({ page, element: SingleInputToolboxItem, target: existingPageSelector, options: { steps: 10, destinationOffsetY: -100, destinationOffsetX: 150 } });

    const expectedJson = {
      logoPosition: "right",
      pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }, { type: "text", name: "question1" }] }],
    };
    expect(await getJSON(page)).toEqual(expectedJson);
  });

  test("Drag Drop indicator - rows", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1000 });
    const json = {
      logoPosition: "right",
      pages: [{
        name: "page1",
        elements: [
          { type: "text", name: "question1" },
          { type: "text", name: "question2", startWithNewLine: false },
          { type: "text", name: "question3" },
          { type: "text", name: "question4", startWithNewLine: false },
        ],
      }],
    };
    await setJSON(page, json);

    const toolboxToolAction = page.locator(".svc-toolbox__tool > .sv-action__content").filter({ visible: true }).first();
    const rows = page.locator(".svc-row").filter({ visible: true });

    await toolboxToolAction.hover();
    await page.mouse.down();

    await rows.nth(0).locator(".svc-question__adorner").hover({ position: { x: 100, y: 5 } });
    await expect(rows.nth(0)).toHaveClass(/svc-row--drag-over-top/, { timeout: 15000 });

    await rows.nth(0).locator(".svc-question__adorner").hover({ position: { x: 100, y: 150 } });
    await expect(rows.nth(0)).not.toHaveClass(/svc-row--drag-over-top/);
    await expect(rows.nth(0)).toHaveClass(/svc-row--drag-over-bottom/, { timeout: 15000 });

    await rows.nth(1).locator(".svc-question__adorner").hover({ position: { x: 100, y: 5 } });
    await expect(rows.nth(0)).not.toHaveClass(/svc-row--drag-over-top/);
    await expect(rows.nth(0)).not.toHaveClass(/svc-row--drag-over-bottom/);
    await expect(rows.nth(1)).toHaveClass(/svc-row--drag-over-top/, { timeout: 15000 });

    await rows.nth(1).locator(".svc-question__adorner").hover({ position: { x: 100, y: 150 } });
    await expect(rows.nth(0)).not.toHaveClass(/svc-row--drag-over-top/);
    await expect(rows.nth(0)).not.toHaveClass(/svc-row--drag-over-bottom/);
    await expect(rows.nth(1)).not.toHaveClass(/svc-row--drag-over-top/);
    await expect(rows.nth(1)).toHaveClass(/svc-row--drag-over-bottom/, { timeout: 15000 });

    await page.locator(".svc-page__content").nth(1).hover({ position: { x: 100, y: 1 } });
    await page.mouse.up();
    await expect(rows.nth(0)).not.toHaveClass(/svc-row--drag-over-top/);
    await expect(rows.nth(0)).not.toHaveClass(/svc-row--drag-over-bottom/);
    await expect(rows.nth(1)).not.toHaveClass(/svc-row--drag-over-top/);
    await expect(rows.nth(1)).not.toHaveClass(/svc-row--drag-over-bottom/);
  });

  test("Drag Drop indicator - between questions", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1000 });
    const json = {
      logoPosition: "right",
      pages: [{
        name: "page1",
        elements: [
          { type: "text", name: "question1" },
          { type: "text", name: "question2", startWithNewLine: false },
          { type: "text", name: "question3" },
        ],
      }],
    };
    await setJSON(page, json);

    const toolboxToolAction = page.locator(".svc-toolbox__tool > .sv-action__content").filter({ visible: true }).first();
    await expect(page.locator(".svc-question__adorner")).toBeVisible({ timeout: 15000 });

    const adorner = page.locator(".svc-question__adorner").filter({ visible: true }).first();
    const box = await adorner.boundingBox();
    const questionRectRight = box ? box.x + box.width : 0;
    const questionRectBottom = box ? box.y + box.height : 0;

    await toolboxToolAction.hover();
    await page.mouse.down();
    await page.mouse.move(questionRectRight + 8, questionRectBottom - 100, { steps: 20 });
    await expect(page.locator(".svc-question__content").nth(1)).toHaveClass(/svc-question__content--drag-over-left/, { timeout: 15000 });
    await page.mouse.up();

    await toolboxToolAction.hover();
    await page.mouse.down();
    await page.mouse.move(questionRectRight - 100, questionRectBottom + 8, { steps: 20 });
    await expect(page.locator(".svc-question__content").nth(2)).toHaveClass(/svc-question__content--drag-over-top/, { timeout: 15000 });
    await page.mouse.up();
  });

  test("Drag Drop page with other pages collapsed on start drag", async ({ page }) => {
    await page.evaluate(() => {
      const c = (window as any).creator;
      c.expandCollapseButtonVisibility = "always";
      c.allowDragPages = true;
      c.collapseOnDrag = true;
    });
    await page.setViewportSize({ width: 1600, height: 900 });
    const json = {
      logoPosition: "right",
      pages: [
        { name: "page1", elements: [{ type: "text", name: "question1" }] },
        { name: "page2", elements: [{ type: "boolean", name: "question2" }] },
        { name: "page3", elements: [{ type: "text", name: "question3" }] },
        { name: "page4", elements: [{ type: "rating", name: "question4" }] },
      ],
    };
    await setJSON(page, json);

    const expectedJson = {
      logoPosition: "right",
      pages: [
        { name: "page4", elements: [{ type: "rating", name: "question4" }] },
        { name: "page1", elements: [{ type: "text", name: "question1" }] },
        { name: "page2", elements: [{ type: "boolean", name: "question2" }] },
        { name: "page3", elements: [{ type: "text", name: "question3" }] },
      ],
    };

    const page1 = page.locator("[data-sv-drop-target-survey-page=\"page1\"]").filter({ visible: true }).first();
    const page2 = page.locator("[data-sv-drop-target-survey-page=\"page2\"]").filter({ visible: true }).first();
    const page4 = page.locator("[data-sv-drop-target-survey-page=\"page4\"]").filter({ visible: true }).first();
    const page4DragHandle = page.locator("[data-sv-drop-target-survey-page=\"page4\"] > .svc-question__drag-area > .svc-question__drag-element").filter({ visible: true }).first();

    await page4.scrollIntoViewIfNeeded();
    await page4.hover({ position: { x: 150, y: 20 } });
    await expect(page.locator(".svc-page__content--collapsed")).toHaveCount(0);
    await page4DragHandle.dispatchEvent("pointerdown");
    await page4.hover();
    await expect(page4).toHaveClass(/svc-page__content--dragged/, { timeout: 15000 });
    await expect(page.locator(".svc-page__content--collapsed")).toHaveCount(4);

    const page1Box = await page1.boundingBox();
    const pageRectBottom = page1Box ? page1Box.y + page1Box.height : 0;
    const pageRectLeft = page1Box ? page1Box.x : 0;

    await page.locator("#survey-creator").filter({ visible: true }).first().hover({ position: { x: pageRectLeft + 50, y: pageRectBottom + 6 } });
    await expect(page2.locator(".svc-question__drop-indicator--top")).toBeVisible({ timeout: 15000 });

    await page1.hover({ position: { x: 150, y: 60 } });
    await expect(page1.locator(".svc-question__drop-indicator--top")).not.toBeVisible();
    await expect(page1.locator(".svc-question__drop-indicator--bottom")).toBeVisible({ timeout: 15000 });
    await page1.hover({ position: { x: 150, y: 10 } });
    await expect(page1.locator(".svc-question__drop-indicator--top")).toBeVisible({ timeout: 15000 });
    await expect(page1.locator(".svc-question__drop-indicator--bottom")).not.toBeVisible();
    await page4DragHandle.dispatchEvent("pointerup");
    await page.waitForTimeout(500);
    await expect(page.locator(".svc-page__content--collapsed")).toHaveCount(0);
    expect(await getJSON(page)).toEqual(expectedJson);
  });

  test("Drag Drop page to denied area and then keep ghost page after added new one", async ({ page }) => {
    await page.evaluate(() => {
      const c = (window as any).creator;
      c.expandCollapseButtonVisibility = "always";
      c.allowDragPages = true;
      c.collapseOnDrag = true;
    });
    await page.setViewportSize({ width: 1600, height: 900 });
    const json = {
      logoPosition: "right",
      pages: [
        { name: "page1", elements: [{ type: "text", name: "question1" }] },
        { name: "page2", elements: [{ type: "boolean", name: "question2" }] },
      ],
    };
    await setJSON(page, json);

    const expectedJson = {
      logoPosition: "right",
      pages: [
        { name: "page1", elements: [{ type: "text", name: "question1" }] },
        { name: "page2", elements: [{ type: "boolean", name: "question2" }] },
        { name: "page3", elements: [{ type: "text", name: "question3" }] },
      ],
    };

    const page2 = page.locator("[data-sv-drop-target-survey-page=\"page2\"]").filter({ visible: true }).first();
    const page2DragHandle = page.locator("[data-sv-drop-target-survey-page=\"page2\"] > .svc-question__drag-area > .svc-question__drag-element").filter({ visible: true }).first();

    await page2.scrollIntoViewIfNeeded();
    await page2.hover({ position: { x: 150, y: 20 } });
    await expect(page.locator(".svc-page__content--collapsed")).toHaveCount(0);
    await page2DragHandle.dispatchEvent("pointerdown");
    await page.locator(".svc-designer-header").filter({ visible: true }).first().hover();
    await page2DragHandle.dispatchEvent("pointerup");
    await page.waitForTimeout(500);
    await expect(page.locator(".svc-page__content--collapsed")).toHaveCount(0);

    await page.locator(".svc-element__add-new-question").nth(2).filter({ visible: true }).scrollIntoViewIfNeeded();
    await expect(page.locator(".svc-element__add-new-question").nth(3)).not.toBeVisible();
    await page.locator(".svc-element__add-new-question").nth(2).filter({ visible: true }).click();
    expect(await getJSON(page)).toEqual(expectedJson);
    await expect(page.locator(".svc-element__add-new-question").nth(3)).toBeVisible({ timeout: 15000 });
  });
});
