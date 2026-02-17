import {
  url,
  test,
  expect,
  setJSON,
  getPagesLength,
  getTabbedMenuItemByText,
  getBarItemByTitle,
  creatorTabDesignerName,
  creatorTabPreviewName,
  creatorTabTranslationName,
  changeToolboxLocation,
  changeToolboxScrolling,
  changeToolboxSearchEnabled,
  doDragDrop,
} from "../helper";

const title = "Side bar";

const json = {
  elements: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: ["Item 1", "Item 2", "Item 3"]
    }
  ]
};

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 900 });
  });

  test("collapse/expand buttons", async ({ page }) => {
    await setJSON(page, json);

    const propertyGridSelector = page.locator(".svc-side-bar__container");
    const expandButtonSelector = getBarItemByTitle(page, "Show Panel");
    const collapseButtonSelector = getBarItemByTitle(page, "Hide Panel");

    await expect(propertyGridSelector).toBeVisible();
    await expect(expandButtonSelector).not.toBeVisible();
    await expect(collapseButtonSelector).toBeVisible();

    await collapseButtonSelector.click();
    await expect(collapseButtonSelector).not.toBeVisible();
    await expect(expandButtonSelector).toBeVisible();
    await expect(propertyGridSelector).not.toBeVisible();

    await expandButtonSelector.click();
    await expect(collapseButtonSelector).toBeVisible();
    await expect(expandButtonSelector).not.toBeVisible();
    await expect(propertyGridSelector).toBeVisible();

    await collapseButtonSelector.click();
    await getTabbedMenuItemByText(page, "Translation").click();
    await expect(collapseButtonSelector).not.toBeVisible();
    await expect(expandButtonSelector).toBeVisible();
    await expect(propertyGridSelector).not.toBeVisible();

    await expandButtonSelector.click();
    await expect(collapseButtonSelector).toBeVisible();
    await expect(expandButtonSelector).not.toBeVisible();
    await expect(propertyGridSelector).toBeVisible();

    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await expect(collapseButtonSelector).toBeVisible();
    await expect(expandButtonSelector).not.toBeVisible();
    await expect(propertyGridSelector).toBeVisible();
  });

  test("SelectObject", async ({ page }) => {
    await setJSON(page, { pages: [{ name: "page1" }] });

    const objectSelectorButton = page.locator(".svc-side-bar__container-header .sv-action--object-selector .sv-action-bar-item");
    const objectSelectorPopup = page.locator(".sv-popup.svc-object-selector .svc-list__container");
    const pageContent = page.locator(".svc-page__content").first();

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await getTabbedMenuItemByText(page, creatorTabTranslationName).click();
    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await expect(objectSelectorPopup).toHaveCount(0);

    await objectSelectorButton.click();
    await expect(objectSelectorPopup).toBeVisible();
    await expect(objectSelectorPopup.locator(".svc-list__item").first()).toBeFocused();
    await expect(pageContent).not.toHaveClass(/svc-page__content--selected/);

    await objectSelectorPopup.locator("span").getByText("page1").click();
    await expect(pageContent).toHaveClass(/svc-page__content--selected/);
    await expect(objectSelectorPopup).not.toBeVisible();
  });

  test("toolboxLocation sidebar", async ({ page }) => {
    const toolboxInDesigner = page.locator(".svc-creator-tab .svc-toolbox");
    const toolboxInSidebar = page.locator(".svc-side-bar .svc-toolbox");
    const toolboxButtonSelector = page.locator(".sv-action-bar-item[title=\"Toolbox\"]");
    const propertyGridSelector = page.locator(".spg-root-modern");
    const newGhostPagePage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']");
    const EmptyPage = page.locator("[data-sv-drop-target-survey-element='page1']");
    const CheckboxItem = page.locator("[aria-label='Checkboxes']");
    const SingleInputToolboxItem = page.locator("[aria-label='Single-Line Input']");
    const surveySettingsButtonSelector = getBarItemByTitle(page, "Survey settings");

    await setJSON(page, { pages: [{ name: "page1" }] });
    await expect(toolboxInDesigner).toBeVisible();
    await expect(toolboxInSidebar).toHaveCount(0);
    await expect(toolboxButtonSelector).not.toBeVisible();

    await page.evaluate(() => (window as any).creator.toolbox.removeCategories());
    await changeToolboxLocation(page, "sidebar");

    await expect(toolboxInDesigner).toHaveCount(0);
    await expect(toolboxInSidebar).toHaveCount(0);
    await expect(toolboxButtonSelector).toBeVisible();

    await toolboxButtonSelector.click();
    await expect(toolboxInDesigner).toHaveCount(0);
    await expect(toolboxInSidebar).toBeVisible();
    await expect(propertyGridSelector).toHaveCount(0);
    await expect(toolboxButtonSelector).toBeVisible();

    await surveySettingsButtonSelector.click();
    await expect(toolboxInDesigner).toHaveCount(0);
    await expect(toolboxInSidebar).toHaveCount(0);
    await expect(propertyGridSelector).toBeVisible();
    await expect(toolboxButtonSelector).toBeVisible();

    await toolboxButtonSelector.click();
    await expect(toolboxInDesigner).toHaveCount(0);
    await expect(toolboxInSidebar).toBeVisible();
    await expect(propertyGridSelector).toHaveCount(0);
    await expect(toolboxButtonSelector).toBeVisible();

    await doDragDrop({
      page,
      element: SingleInputToolboxItem,
      target: EmptyPage,
    });
    expect(await getPagesLength(page)).toEqual(1);

    await doDragDrop({
      page,
      element: CheckboxItem,
      target: newGhostPagePage,
    });
    expect(await getPagesLength(page)).toEqual(2);

    await changeToolboxLocation(page, "right");
    await expect(toolboxInDesigner).toBeVisible();
    await expect(toolboxInSidebar).toHaveCount(0);
    await expect(toolboxButtonSelector).not.toBeVisible();
    await expect(propertyGridSelector).toBeVisible();
  });

  test("toolboxLocation left", async ({ page }) => {
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);

    const toolboxInDesigner = page.locator(".svc-creator-tab .svc-toolbox");
    const dotsInToolbox = toolboxInDesigner.locator(".sv-dots__item");
    const toolboxPopup = page.locator(".svc-toolbox-popup .sv-popup__container").first();
    const pageNavigationPopup = page.locator(".svc-page-navigator .sv-popup__container").first();
    const pageNavigator = page.locator(".svc-page-navigator__selector").filter({ visible: true });

    await setJSON(page, {
      pages: [
        { name: "page1", elements: [{ type: "text", name: "q1" }] },
        { name: "page2", elements: [{ type: "text", name: "q2" }] }
      ]
    });

    await expect(toolboxInDesigner).toBeVisible();
    await page.setViewportSize({ width: 1500, height: 600 });

    await expect(dotsInToolbox).toBeVisible();
    await dotsInToolbox.click();
    await expect(toolboxPopup).toBeVisible();
    let box = await toolboxPopup.boundingBox();
    expect(box!.y).toBeGreaterThanOrEqual(0);
    expect(box!.x).toBeGreaterThanOrEqual(0);
    await toolboxPopup.locator(".svc-list__item").first().click();

    await pageNavigator.click();
    await expect(pageNavigationPopup).toBeVisible();
    box = await pageNavigationPopup.boundingBox();
    expect(box!.y).toBeGreaterThanOrEqual(0);
    expect(box!.x).toBeLessThan(1500 - 100);
    await pageNavigationPopup.locator(".svc-list__item").getByText("page2").click();

    await changeToolboxLocation(page, "right");

    await dotsInToolbox.click();
    await expect(toolboxPopup).toBeVisible();
    box = await toolboxPopup.boundingBox();
    expect(box!.y).toBeGreaterThanOrEqual(0);
    expect(box!.x).toBeLessThan(1500 - 100);
    await toolboxPopup.locator(".svc-list__item").first().click();

    await pageNavigator.click();
    await expect(pageNavigationPopup).toBeVisible();
    box = await pageNavigationPopup.boundingBox();
    expect(box!.y).toBeGreaterThanOrEqual(0);
    expect(box!.x).toBeGreaterThanOrEqual(0);
    await pageNavigationPopup.locator(".svc-list__item").first().click();
  });

  test("toolboxLocation sidebar: check toolbox items", async ({ page }) => {
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);

    const toolboxInDesigner = page.locator(".svc-creator-tab .svc-toolbox");
    const toolboxInSidebar = page.locator(".svc-side-bar .svc-toolbox");
    const toolboxButtonSelector = page.locator(".sv-action-bar-item[title=\"Toolbox\"]");
    const toolboxItemCount = 22;
    const itemsInToolboxInDesigner = toolboxInDesigner.locator(".svc-toolbox__item:not(.svc-toolbox__item-subtype):not(.svc-toolbox__item--dots)");
    const visibleItemsInToolboxInDesigner = itemsInToolboxInDesigner.filter({ visible: true });
    const itemsInToolboxInSidebar = toolboxInSidebar.locator(".svc-toolbox__item:not(.svc-toolbox__item-subtype):not(.svc-toolbox__item--dots)");
    const visibleItemsInToolboxInSidebar = itemsInToolboxInSidebar.filter({ visible: true });

    await expect(toolboxInDesigner).toBeVisible();
    await expect(itemsInToolboxInDesigner).toHaveCount(toolboxItemCount);
    expect(await visibleItemsInToolboxInDesigner.count()).toBeLessThanOrEqual(toolboxItemCount);

    await page.setViewportSize({ width: 1500, height: 600 });
    await expect(toolboxInDesigner).toBeVisible();
    await expect(itemsInToolboxInDesigner).toHaveCount(toolboxItemCount);
    expect(await visibleItemsInToolboxInDesigner.count()).toBeLessThan(toolboxItemCount);
    await expect(toolboxInSidebar).toHaveCount(0);

    await page.evaluate(() => (window as any).creator.toolbox.removeCategories());
    await changeToolboxLocation(page, "sidebar");

    await toolboxButtonSelector.click();
    await expect(toolboxInSidebar).toBeVisible();
    await expect(toolboxInDesigner).toHaveCount(0);
    await expect(itemsInToolboxInSidebar).toHaveCount(toolboxItemCount);
    expect(await visibleItemsInToolboxInSidebar.count()).toEqual(toolboxItemCount);
  });

  test("tablet size click outside", async ({ page }) => {
    await page.setViewportSize({ width: 820, height: 1180 });

    const getSidebarOpen = () => page.evaluate(() => !!(window as any).creator.sidebar.flyoutPanelMode && !!(window as any).creator.sidebar.renderedIsVisible);
    const showSidebarButton = page.locator("[title='Show Panel']");
    const shadowArea = page.locator(".svc-side-bar__shadow");

    let isSidebarOpen = await getSidebarOpen();
    expect(isSidebarOpen).toBeFalsy();

    await showSidebarButton.click();
    isSidebarOpen = await getSidebarOpen();
    expect(isSidebarOpen).toBeTruthy();

    await shadowArea.click({ position: { x: 10, y: 10 } });

    isSidebarOpen = await getSidebarOpen();
    expect(isSidebarOpen).toBeFalsy();
  });

  test("Focus in Property grid", async ({ page }) => {
    await setJSON(page, { elements: [{ type: "boolean", name: "test_q" }] });
    await page.setViewportSize({ width: 820, height: 1180 });

    const getSidebarOpen = () => page.evaluate(() => !!(window as any).creator.sidebar.flyoutPanelMode && !!(window as any).creator.sidebar.renderedIsVisible);
    const hideSidebarButton = page.locator("[title='Hide Panel']");

    let isSidebarOpen = await getSidebarOpen();
    expect(isSidebarOpen).toBeFalsy();

    await page.locator(".svc-question__adorner").click({ position: { x: 5, y: 5 } });
    await expect(page.locator(".svc-question__adorner button", { hasText: "Settings" })).toBeVisible();
    await page.locator(".svc-question__adorner button", { hasText: "Settings" }).click();
    isSidebarOpen = await getSidebarOpen();
    expect(isSidebarOpen).toBeTruthy();
    await expect(page.locator(".spg-question[data-name=name] input")).toBeFocused();

    await hideSidebarButton.click();
    isSidebarOpen = await getSidebarOpen();
    expect(isSidebarOpen).toBeFalsy();
    await expect(page.locator(".svc-question__content")).toBeFocused();
  });

  test("No Focus on open Property grid Mobile", async ({ page }) => {
    await setJSON(page, { elements: [{ type: "text", name: "test_q" }] });
    await page.setViewportSize({ width: 500, height: 800 });

    await page.locator(".svc-question__adorner").click({ position: { x: 5, y: 5 } });
    await expect(page.locator(".svc-question__adorner button[title='Open settings']")).toBeVisible();
    await page.locator(".svc-question__adorner button[title='Open settings']").click();
    await expect(page.locator(".spg-question[data-name=name] input")).not.toBeFocused();
  });

  test("Element Selector: Column: Scroll", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 500 });

    const json = {
      "headerView": "advanced",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "question1",
              "choices": [1, 2, 3, 4, 5],
              "columns": [{ "name": "Column 1" }, { "name": "Column 2" }, { "name": "Column 3" }],
              "rows": [
                "Row 1",
                "Row 2"
              ]
            }
          ]
        }
      ],
    };
    await setJSON(page, json);

    const getQuestionTopPosition = () => page.evaluate(() => {
      const el = document.querySelector(".svc-question__content");
      return el ? Math.round(el.getBoundingClientRect().top) : 0;
    });

    expect(await getQuestionTopPosition()).toEqual(374);
    await page.locator(".sv-action--object-selector").click();
    await page.locator(".svc-list__item").getByText("Column 2").click();
    await page.waitForTimeout(500);
    expect(await getQuestionTopPosition()).toEqual(72);
  });
});
