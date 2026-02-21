import type { Page } from "@playwright/test";
import {
  url,
  test,
  expect,
  getJSON,
  setJSON,
  explicitErrorHandler,
  changeToolboxScrolling,
  changeToolboxSearchEnabled,
  getToolboxItemByText,
  getSubToolboxItemByText,
  setAllowEditSurveyTitle,
  doDragDrop,
} from "../helper";

const title = "Toolbox";

async function getVisibleToolboxToolsCount(page: Page) {
  return await page.locator(".svc-toolbox__category>.svc-toolbox__tool").filter({ visible: true }).count();
}

async function setupCategories(page: Page, windowWidth = 1910) {
  await page.evaluate(() => {
    window["creator"].toolbox.removeCategories();
    window["creator"].toolbox.orderedQuestions = ["radiogroup", "matrix", "matrixdropdown", "panel", "panaldynamic"];
    window["creator"].toolbox.showCategoryTitles = true;
    window["creator"].toolbox.changeCategories([
      { name: "panel", category: "Panels" },
      { name: "paneldynamic", category: "Panels" },
      { name: "matrix", category: "Matrix" },
      { name: "matrixdropdown", category: "Matrix" },
      { name: "matrixdynamic", category: "Matrix" },
    ]);
  });
  await page.setViewportSize({ width: windowWidth, height: 600 });
}

async function setupToolboxProperty(page: Page, propertyName: string, propertyValue: unknown) {
  await page.evaluate(
    ({ name, value }) => {
      (window as any).creator.toolbox[name] = value;
    },
    { name: propertyName, value: propertyValue }
  );
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test("Simple click", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    const toolboxItems = page.locator(".svc-toolbox__tool").first();
    await toolboxItems.hover();
    await page.locator(".svc-toolbox__tool").first().click();
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements.length).toEqual(1);
  });

  test("Categories check hover icons", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });
    await setupCategories(page);

    await page.setViewportSize({ width: 1920, height: 1920 });

    const categoriesHeader = page.locator(".svc-toolbox__category-header");
    await expect(categoriesHeader).toHaveCount(3);
    await expect(categoriesHeader.nth(0)).toHaveText("General");
    await expect(categoriesHeader.nth(1)).toHaveText("Matrix");
    await expect(categoriesHeader.nth(2)).toHaveText("Panels");

    await categoriesHeader.nth(0).hover();
    const expandedCategoriesClassName = ".svc-string-editor__button--expand";
    const collapsedCategoriesClassName = ".svc-string-editor__button--collapse";
    await expect(categoriesHeader.nth(0).locator(collapsedCategoriesClassName)).toBeVisible();
    await expect(categoriesHeader.nth(0).locator(expandedCategoriesClassName)).not.toBeVisible();

    await categoriesHeader.nth(1).hover();
    await expect(categoriesHeader.nth(1).locator(collapsedCategoriesClassName)).not.toBeVisible();
    await expect(categoriesHeader.nth(1).locator(expandedCategoriesClassName)).toBeVisible();

    await categoriesHeader.nth(2).hover();
    await expect(categoriesHeader.nth(2).locator(collapsedCategoriesClassName)).not.toBeVisible();
    await expect(categoriesHeader.nth(2).locator(expandedCategoriesClassName)).toBeVisible();
  });

  test("Categories large mode", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });
    await setupCategories(page);

    const categoriesHeader = page.locator(".svc-toolbox__category-header");
    await expect(categoriesHeader).toHaveCount(3);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(17);

    await categoriesHeader.nth(1).click();
    expect(await getVisibleToolboxToolsCount(page)).toEqual(3);

    await categoriesHeader.nth(2).click();
    expect(await getVisibleToolboxToolsCount(page)).toEqual(2);
  });

  test("Categories Responsiveness small -> large", async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 605 });

    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await setupCategories(page, 1110);

    await expect(page.locator(".svc-toolbox .sv-dots__item")).toBeVisible();
    const categoriesHeader = page.locator(".svc-toolbox__category-header");
    await expect(categoriesHeader).toHaveCount(0);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(11);

    await page.setViewportSize({ width: 1900, height: 600 });
    await expect(categoriesHeader).toHaveCount(3);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(17);

    await categoriesHeader.nth(1).click();
    expect(await getVisibleToolboxToolsCount(page)).toEqual(3);

    await categoriesHeader.nth(2).click();
    expect(await getVisibleToolboxToolsCount(page)).toEqual(2);
  });

  test("Categories Responsiveness large -> small", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await setupCategories(page);

    const categoriesHeader = page.locator(".svc-toolbox__category-header");
    await expect(categoriesHeader).toHaveCount(3);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(17);

    await page.setViewportSize({ width: 1200, height: 600 });
    await expect(page.locator(".svc-toolbox .sv-dots__item")).toBeVisible();
    await expect(categoriesHeader).toHaveCount(0);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(11);
  });

  test("Categories allowExpandMultipleCategories property", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await setupCategories(page);
    await setupToolboxProperty(page, "allowExpandMultipleCategories", true);
    await setupToolboxProperty(page, "forceCompact", false);

    const categories = page.locator(".svc-toolbox__category");
    const categoriesHeader = page.locator(".svc-toolbox__category-header");
    const collapsibleCategories = page.locator(".svc-toolbox__category-header--collapsed");
    await expect(categoriesHeader).toHaveCount(3);
    await expect(collapsibleCategories).toHaveCount(3);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(0);

    await categoriesHeader.nth(0).click();
    await expect(categories.nth(0).locator(":scope>.svc-toolbox__tool")).toHaveCount(17);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(17);

    await categoriesHeader.nth(1).click();
    await expect(categories.nth(1).locator(":scope>.svc-toolbox__tool")).toHaveCount(3);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(20);

    await categoriesHeader.nth(2).click();
    await expect(categories.nth(2).locator(":scope>.svc-toolbox__tool")).toHaveCount(2);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(22);
  });

  test("Categories keepAllCategoriesExpanded property", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await setupCategories(page);
    await setupToolboxProperty(page, "forceCompact", false);
    await setupToolboxProperty(page, "keepAllCategoriesExpanded", true);

    const categoriesHeader = page.locator(".svc-toolbox__category-header");
    const collapsibleCategories = page.locator(".svc-toolbox__category-header--collapsed");

    const expandedCategoriesClassName = ".svc-string-editor__button--expand";
    const collapsedCategoriesClassName = ".svc-string-editor__button--collapse";

    await expect(categoriesHeader).toHaveCount(3);
    await expect(collapsibleCategories).toHaveCount(0);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(22);

    await categoriesHeader.nth(0).hover({ force: true });
    await expect(categoriesHeader.nth(0).locator(collapsedCategoriesClassName)).toHaveCount(0);
    await expect(categoriesHeader.nth(0).locator(expandedCategoriesClassName)).toHaveCount(0);

    await categoriesHeader.nth(0).click();
    await expect(categoriesHeader).toHaveCount(3);
    await expect(collapsibleCategories).toHaveCount(0);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(22);

    await categoriesHeader.nth(1).hover({ force: true });
    await expect(categoriesHeader.nth(1).locator(collapsedCategoriesClassName)).toHaveCount(0);
    await expect(categoriesHeader.nth(1).locator(expandedCategoriesClassName)).toHaveCount(0);

    await categoriesHeader.nth(1).click();
    await expect(categoriesHeader).toHaveCount(3);
    await expect(collapsibleCategories).toHaveCount(0);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(22);

    await categoriesHeader.nth(2).hover({ force: true });
    await expect(categoriesHeader.nth(2).locator(collapsedCategoriesClassName)).toHaveCount(0);
    await expect(categoriesHeader.nth(2).locator(expandedCategoriesClassName)).toHaveCount(0);

    await categoriesHeader.nth(2).click();
    await expect(categoriesHeader).toHaveCount(3);
    await expect(collapsibleCategories).toHaveCount(0);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(22);
  });

  test("add question from toolbox popup items", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await changeToolboxScrolling(page, false);

    const popup = page.locator(".svc-toolbox__tool--dots .sv-popup__container");

    await page.setViewportSize({ width: 970, height: 632 });
    await expect(page.locator(".svc-question__content")).toHaveCount(0);
    await expect(popup.first()).not.toBeVisible();

    await page.locator(".svc-toolbox__tool--dots").click();
    await expect(popup.first()).toBeVisible();

    await popup.locator(".svc-list__item").first().click();
    await expect(page.locator(".svc-question__content")).toHaveCount(1);
  });

  test("check toolbox scroll", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await changeToolboxScrolling(page, false);
    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 1900, height: 800 });

    const hasNoScroll = () =>
      page.evaluate(() => {
        const element = (window as any).creator.rootElement.getRootNode().querySelector(".svc-toolbox");
        return element?.scrollHeight === element?.clientHeight;
      });

    const setSize = (size: number) =>
      page.evaluate((s) => {
        const element = (window as any).creator.rootElement.getRootNode().querySelector(".svc-creator") as HTMLElement;
        if (element) element.style.height = s + "px";
      }, size);

    for (let i = 580; i > 540; i--) {
      await setSize(i);
      await page.waitForTimeout(100);
      expect(await hasNoScroll()).toBeTruthy();
    }
  });

  test("check toolbox css", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await expect(page.locator(".svc-toolbox__tool.undefined")).toHaveCount(0);
  });

  test("toolbar responsiveness with search", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 1920, height: 597 });
    await setJSON(page, {
      widthMode: "responsive",
      pages: [
        {
          name: "page1",
          elements: [{ type: "text", name: "question1" }],
        },
      ],
    });
    await expect(page.locator(".svc-toolbox .sv-dots__item")).toBeVisible();
    await expect(page.locator(".svc-toolbox__category>.svc-toolbox__tool")).toHaveCount(23);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(11);

    await changeToolboxSearchEnabled(page, true);
    await page.setViewportSize({ width: 1920, height: 598 });
    await expect(page.locator(".svc-toolbox .sv-dots__item")).toBeVisible();
    await expect(page.locator(".svc-toolbox__category>.svc-toolbox__tool")).toHaveCount(23);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(10);
  });

  test("toolbar responsiveness in compact mode", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 1920, height: 605 });

    await page.evaluate(() => {
      const customCategoryName = "Custom Questions";
      const customQuestionsData = {};

      var addIntoCustomItems = (element) => {
        var json = new (window as any)["Survey"].JsonObject().toJsonObject(element);
        json.type = element.getType();
        var item = {
          id: element.name,
          name: element.name,
          iconName: "icon-" + element.getType(),
          title: element.title,
          json: json,
          isCopied: false,
          isStandard: false,
          category: customCategoryName
        };
        (customQuestionsData as any)[item.name] = item;
        (window as any).creator.toolbox.addItem(item);
      };

      (window as any).creator.onElementGetActions.add(function (editor, options) {
        if (options.element.isPage) return;
        const objToAdd = options.element;
        options.actions.unshift({
          id: "addtosharedrepo",
          title: "Save as Toolbox Item",
          iconName: "icon-toolbox",
          iconSize: 16,
          action: () => {
            addIntoCustomItems(objToAdd);
          }
        });
      });
    });

    await setJSON(page, {
      widthMode: "responsive",
      pages: [
        {
          name: "page1",
          elements: [{ type: "text", name: "question1" }],
        },
      ],
    });

    await expect(page.locator(".svc-toolbox .sv-dots__item")).toBeVisible();
    const scrollContainerHeight = await page.locator(".sv-scroll__container").first().evaluate((el) => el.clientHeight);
    expect(scrollContainerHeight).toBeLessThanOrEqual(515);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(11);
    await expect(page.locator(".svc-toolbox__category>.svc-toolbox__tool")).toHaveCount(23);

    await page.locator(".svc-question__content--text").click({ position: { x: 200, y: 20 } });
    await page.locator(".svc-survey-element-toolbar-item__title").getByText("Save as Toolbox Item").click();

    await expect(page.locator(".svc-toolbox .sv-dots__item")).toBeVisible();
    const scrollContainerHeight2 = await page.locator(".sv-scroll__container").first().evaluate((el) => el.clientHeight);
    expect(scrollContainerHeight2).toBeLessThanOrEqual(515);
    expect(await getVisibleToolboxToolsCount(page)).toEqual(11);
    await expect(page.locator(".svc-toolbox__category>.svc-toolbox__tool")).toHaveCount(24);
  });

  test("toolbox subTypes: add items by drag-n-drop", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await explicitErrorHandler(page);
    await setAllowEditSurveyTitle(page, false);
    await page.setViewportSize({ width: 1900, height: 800 });

    const toolboxSubTypesPopup = page.locator(".sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").filter({ visible: true });
    const newGhostPagePage = page.locator("[data-sv-drop-target-survey-element='newGhostPage']");
    const ratingTool = page.locator(".svc-toolbox__tool").filter({ has: getToolboxItemByText(page, "Rating Scale") });
    const ratingSubmenuBtn = ratingTool.locator(".svc-toolbox__item-submenu-button");

    await expect(toolboxSubTypesPopup).not.toBeVisible();
    await ratingSubmenuBtn.hover();
    await page.waitForTimeout(400);
    await expect(toolboxSubTypesPopup).toBeVisible();
    await ratingTool.hover();
    await page.waitForTimeout(400);
    await expect(toolboxSubTypesPopup).not.toBeVisible();
    await ratingSubmenuBtn.hover();
    await page.waitForTimeout(400);
    await expect(toolboxSubTypesPopup).toBeVisible();

    const smileysItem = getSubToolboxItemByText(page, "Smileys");
    const placeholder = page.locator(".svc-designer__placeholder-container");
    await smileysItem.hover({ force: true });
    await page.waitForTimeout(400);
    await doDragDrop({
      page,
      element: smileysItem,
      target: placeholder,
      options: { steps: 10 },
    });
    await expect(page.locator(".svc-question__content")).toHaveCount(1);

    const ratingItem = getToolboxItemByText(page, "Rating Scale");
    await ratingItem.hover();
    await doDragDrop({
      page,
      element: ratingItem,
      target: newGhostPagePage,
      options: { steps: 10 },
    });
    await expect(page.locator(".svc-question__content")).toHaveCount(2);
    await expect(toolboxSubTypesPopup).not.toBeVisible();

    const expectedJson = {
      headerView: "advanced",
      pages: [
        {
          name: "page1",
          elements: [{ type: "rating", name: "question1", rateType: "smileys" }],
        },
        {
          name: "page2",
          elements: [{ type: "rating", name: "question2" }],
        },
      ],
    };
    const resultJson = await getJSON(page);
    expect(resultJson).toEqual(expectedJson);
  });

  test("toolbox subTypes: add items by click", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 1900, height: 800 });

    const toolboxSubTypesPopup = page.locator(".sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").filter({ visible: true });

    await getToolboxItemByText(page, "Single-Line Input").click();
    await page.waitForTimeout(400);
    await expect(page.locator(".svc-question__content")).toHaveCount(1);

    const singleLineTool = page.locator(".svc-toolbox__tool").filter({ has: getToolboxItemByText(page, "Single-Line Input") });
    await singleLineTool.locator(".svc-toolbox__item-submenu-button").hover();
    await page.waitForTimeout(400);
    await expect(toolboxSubTypesPopup).toBeVisible();

    await getSubToolboxItemByText(page, "Password").click();
    await expect(page.locator(".svc-question__content")).toHaveCount(2);
    await expect(toolboxSubTypesPopup).toBeVisible();

    const expectedJson = {
      headerView: "advanced",
      pages: [
        {
          name: "page1",
          elements: [
            { type: "text", name: "question1" },
            { type: "text", name: "question2", inputType: "password" },
          ],
        },
      ],
    };
    const resultJson = await getJSON(page);
    expect(resultJson).toEqual(expectedJson);
  });

  test("toolbox subTypes: hide subTypes popup", async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 600 });

    await explicitErrorHandler(page);
    await page.setViewportSize({ width: 1900, height: 800 });

    const toolboxSubTypesPopup = page.locator(".sv-popup-inner.svc-toolbox-subtypes .sv-popup__container").filter({ visible: true });
    const ratingTool = page.locator(".svc-toolbox__tool").filter({ has: getToolboxItemByText(page, "Rating Scale") });

    await expect(toolboxSubTypesPopup).not.toBeVisible();
    await ratingTool.locator(".svc-toolbox__item-submenu-button").hover();
    await page.waitForTimeout(400);
    await expect(toolboxSubTypesPopup).toBeVisible();

    await page.locator(".sv-scroll__scroller").first().evaluate((el) => el.scrollBy(2, 100));
    await expect(toolboxSubTypesPopup).not.toBeVisible();
  });

  test("toolbox search in compact mode - clear but do not close", async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 600 });

    const searchInput = page.locator(".svc-search__input").first();

    await page.locator(".svc-toolbox__search-button").click();
    await searchInput.fill("d");
    await expect(searchInput).toHaveValue("d");
    await expect(page.locator(".svc-toolbox")).toHaveClass(/svc-toolbox--flyout/);
    await page.locator(".svc-toolbox .sv-action--grid-search-close").click();
    await expect(searchInput).toHaveValue("");
    await expect(page.locator(".svc-toolbox")).toHaveClass(/svc-toolbox--flyout/);
  });
});
