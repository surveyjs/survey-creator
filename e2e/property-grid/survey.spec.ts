import { url, test, expect, setJSON, getPropertyGridCategory, generalGroupName, logicGroupName } from "../helper";

const title = "Property Grid";

const json = {
  pages: [
    {
      elements: [{ type: "text", name: "question1" }]
    },
    {
      elements: [{ type: "text", name: "question2" }]
    },
    {
      elements: [{ type: "text", name: "question2" }]
    }
  ]
};

const json2 = { elements: [{ type: "dropdown", name: "q1", title: "title" }] };

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Delete second page", async ({ page }) => {
    const deleteButtons = page.locator("div[data-name=pages]").locator("button[title=Remove]");
    await setJSON(page, json);
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Pages").click();
    await expect(deleteButtons).toHaveCount(3);
    await deleteButtons.first().click();
    await expect(deleteButtons).toHaveCount(2);
  });

  test("Add calculated values", async ({ page }) => {
    const addButton = page.locator("div[data-name=calculatedValues]").locator("button[title='Add new variable']");
    const rows = page.locator("div[data-name=calculatedValues]").locator("tbody").locator("tr");

    await setJSON(page, json);
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, logicGroupName).click();
    await expect(rows).toHaveCount(0);
    await addButton.click();
    await expect(rows).toHaveCount(2);
  });

  test("Check showInMultiple columns editing", async ({ page }) => {
    const json = {
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "q1",
          "title": "Question 1",
          "columns": [{ "name": "Column 1", "cellType": "radiogroup" },],
          "choices": [1, 2, 3, 4, 5],
          "rows": [
            "Row 1",
          ]
        }]
    };
    await setJSON(page, json);
    const question = page.locator(".sv-string-editor").getByText("Question 1");
    const edit = page.locator("button[title='Edit']");
    const showInMultiple = page.locator("input[name='showInMultipleColumns']").locator("..");
    const radioMatrixCell = page.locator("td:nth-of-type(2) .svc-matrix-cell");
    const controlButton = radioMatrixCell.locator(".svc-matrix-cell__question-controls");
    await question.click();
    await getPropertyGridCategory(page, generalGroupName).click();
    await getPropertyGridCategory(page, "Columns").click();
    await edit.click();
    await showInMultiple.click();
    await expect(page.locator("th .svc-matrix-cell .sv-string-editor").first()).toHaveText("1");
    await radioMatrixCell.hover();
    await controlButton.click();
    await expect(page.locator(".sv-popup__container .sd-selectbase__item .sd-item__control-label .svc-string-editor .sv-string-editor").filter({ hasText: "1" }).first()).toHaveText("1");
  });

  test("Merge undo/redo transcactioins for text", async ({ page }) => {
    const question = page.locator("[data-name=\"q1\"]");
    const titleEditor = page.locator("[data-name='title']").locator("textarea");
    const undoAction = page.locator("button[title=Undo]");
    const getQuestionTitle = async () => {
      return await page.evaluate(() => {
        return window["creator"].survey.getQuestionByName("q1").title;
      });
    };
    await setJSON(page, json2);
    await question.click();
    await titleEditor.click();
    await page.keyboard.type("1");
    await page.keyboard.type("-234");
    const title1 = await getQuestionTitle();
    await expect(title1).toBe("title1-234");
    await undoAction.click();
    const title2 = await getQuestionTitle();
    await expect(title2).toBe("title");
    await titleEditor.click();
    await page.keyboard.type("2");
    await page.waitForTimeout(1100);
    await page.keyboard.type("-345");
    const title3 = await getQuestionTitle();
    await expect(title3).toBe("title2-345");
    await undoAction.click();
    const title4 = await getQuestionTitle();
    await expect(title4).toBe("title2");
  });

  test("Check ctrl+z undo/redo", async ({ page }) => {
    const question = page.locator("[data-name=\"q1\"]");
    const titleEditor = page.locator("[data-name='title']").locator("textarea");
    const getQuestionTitle = async () => {
      return await page.evaluate(() => {
        return window["creator"].survey.getQuestionByName("q1").title;
      });
    };
    await setJSON(page, json2);
    await question.click();
    await titleEditor.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("1234");
    await page.waitForTimeout(1000);
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(1000);
    await page.keyboard.press("Control+z");
    const title = await getQuestionTitle();
    await expect(title).toBe("1234");
  });

  test("Text editors, loose focus on enter", async ({ page }) => {
    await page.setViewportSize({ width: 1560, height: 1440 });

    await setJSON(page, json2);
    const titleInput = page.locator("div[data-name=title] input");
    await titleInput.click();
    await page.keyboard.type("a b c");
    await expect(titleInput).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(titleInput).not.toBeFocused();
  });

  test("Drop-down menus do not close on second click", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    await setJSON(page, json2);
    await getPropertyGridCategory(page, generalGroupName).click();
    const dataGroup = getPropertyGridCategory(page, "Data");
    await dataGroup.click();
    const panel = page.locator(".spg-panel.sd-element--expanded").first();
    const dropdown = panel.locator(".spg-dropdown").first();
    const popupContainer = page.locator(".sv-popup__container").filter({ visible: true }).first();

    const clientRectWidth = await dropdown.boundingBox();
    const dropdownWidth = clientRectWidth ? parseInt(clientRectWidth.width.toString()) : 0;
    await expect(dropdownWidth).toBeGreaterThan(350);
    await expect(popupContainer).not.toBeVisible();

    await dropdown.click({ position: { x: dropdownWidth - 20, y: 20 } });
    await expect(popupContainer).toBeVisible();

    await dropdown.click({ position: { x: dropdownWidth - 20, y: 20 } });
    await expect(popupContainer).not.toBeVisible();

    await dropdown.click({ position: { x: dropdownWidth - 20, y: 20 } });
    await expect(popupContainer).toBeVisible();

    await panel.locator(".spg-panel__content").click({ position: { x: 10, y: 10 } });
    await expect(popupContainer).not.toBeVisible();
  });

  test("Search correctly scrolls to element", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "title": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        }
      ]
    };
    await page.evaluate(() => {
      window["creator"].animationEnabled = true;
    });
    await setJSON(page, json);
    await page.setViewportSize({ width: 1600, height: 600 });

    const isElementInViewport = async () => {
      return await page.evaluate(() => {
        const element = (window as any).creator.rootElement.getRootNode().querySelector("[data-name=logo] input") as HTMLElement;
        if (!element) return false;
        const getBoundValues = element.getBoundingClientRect();

        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        return getBoundValues.bottom > 0 && getBoundValues.right > 0 && getBoundValues.left < (windowWidth || (window as any).creator.rootElement.getRootNode().documentElement.clientWidth) && getBoundValues.top < (windowHeight || (window as any).creator.rootElement.getRootNode().documentElement.clientHeight);
      });
    };

    await page.locator(".spg-container_search .svc-search input").click();
    await page.locator(".spg-container_search .svc-search input").fill("log");
    await page.waitForTimeout(500);
    const inViewport = await isElementInViewport();
    await expect(inViewport).toBe(true);
  });

  test("Check help description doesn't reset input value", async ({ page }) => {
    await setJSON(page, {
      "showTimer": true,
      "headerView": "advanced"
    });
    const input = page.locator("[data-name='timeLimit'] .spg-input");
    const helpButton = page.locator("[data-name='timeLimit'] .spg-help-action");
    await getPropertyGridCategory(page, "Quiz Mode").click();
    await input.click();
    await input.fill("100");
    await helpButton.click();
    await expect(input).toHaveValue("100");
  });
});
