import {
  url,
  urlDropdownCollapseView,
  test,
  expect,
  setJSON,
  doDragDrop,
  getToolboxItemByText,
  getListItemByText,
  generalGroupName,
} from "../helper";

const title = "Question wrapper";

function normalize(str: string) {
  return str.replace(/\xa0/gi, " ").replace(/(?:\r\n|\r|\n)/g, "");
}

const convertQuestionTypesCount = 22;
const convertTextQuestionInputTypesCount = 13;
const selectedObjectTextSelector = ".svc-side-bar__container-header .sv-action--object-selector .sv-action-bar-item__title";
const convertPopupContent = "Radio Button Group\nRating Scale\nSlider\nCheckboxes\nDropdown\nMulti-Select Dropdown\nYes/No (Boolean)\nFile Upload\nImage Picker\nRanking\nSingle-Line Input\nLong Text\nMultiple Textboxes\nPanel\nDynamic Panel\nSingle-Select Matrix\nMulti-Select Matrix\nDynamic Matrix\nHTML\nExpression (read-only)\nImage\nSignature";
const convertInputTypePopupContent = "Color\nDate\nDate and Time\nEmail\nMonth\nNumber\nPassword\nRange\nPhone Number\nText\nTime\nURL\nWeek";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Single input question wrapper actions", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const questionToolbarActions = page.locator(".svc-question__content--selected .svc-question__content-actions").locator(".sv-action:not(.sv-dots)");
    const convertActionButton = page.locator(".svc-question__content--selected .svc-dropdown-action--convertTo").first();
    const convertInputTypeActionButton = questionToolbarActions.locator('button[title="Text"]');
    const duplicateActionButton = questionToolbarActions.locator('button[title="Duplicate"]');
    const requiredActionButton = questionToolbarActions.locator('button[title="Required"]');
    const deleteActionButton = questionToolbarActions.locator('button[title="Delete"]');
    const dotsButton = page.locator(".svc-question__content-actions .sv-action.sv-dots");

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(page.locator(".svc-question__content.svc-question__content--selected")).toHaveCount(1);
    await expect(page.locator(".svc-question__content--selected").locator("input")).toBeVisible();
    await expect(questionToolbarActions).toHaveCount(5);
    await expect(convertActionButton).toBeVisible();
    await expect(convertInputTypeActionButton).toBeVisible();
    await expect(duplicateActionButton).toBeVisible();
    await expect(requiredActionButton).toBeVisible();
    await expect(deleteActionButton).toBeVisible();
    await expect(dotsButton).toHaveCount(1);
    await expect(dotsButton).not.toBeVisible();
  });

  test("Single input question wrapper action convert", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const questionToolbarActions = page.locator(".svc-question__content--selected .svc-question__content-actions").locator(".sv-action");
    const convertActionButton = page.locator(".svc-question__content--selected .svc-dropdown-action--convertTo").first();
    const listItems = page.locator(".sv-popup .svc-list__item").filter({ visible: true });
    const popupContent = page.locator(".sv-popup__content .svc-list").filter({ visible: true });

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(page.locator(".svc-question__content.svc-question__content--selected")).toHaveCount(1);
    await expect(page.locator(".svc-question__content--selected").locator("input")).toBeVisible();
    await expect(convertActionButton).toBeVisible();

    await convertActionButton.click();
    await expect(listItems).toHaveCount(convertQuestionTypesCount);
    expect(await popupContent.innerText()).toEqual(convertPopupContent);

    await getListItemByText(page, "Long Text").click();
    await expect(page.locator(".svc-question__content--selected").locator("textarea")).toBeVisible();

    await questionToolbarActions.locator('button[title="Long Text"]').click();
    await expect(listItems).toHaveCount(convertQuestionTypesCount);
    expect(await popupContent.innerText()).toEqual(convertPopupContent);

    await getListItemByText(page, "Single-Line Input").click();
    await expect(page.locator(".svc-question__content--selected input")).toBeVisible();
  });

  test("Single input question wrapper action convert inputType", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const questionToolbarActions = page.locator(".svc-question__content--selected .svc-question__content-actions").locator(".sv-action");
    const convertInputTypeActionButton = questionToolbarActions.locator('button[title="Text"]');
    const listItems = page.locator(".sv-popup .svc-list__item").filter({ visible: true });
    const popupContent = page.locator(".sv-popup__content .svc-list").filter({ visible: true });

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(page.locator(".svc-question__content.svc-question__content--selected")).toHaveCount(1);
    await expect(page.locator(".svc-question__content--selected").locator("input")).toBeVisible();
    await expect(convertInputTypeActionButton).toBeVisible();

    await convertInputTypeActionButton.click();
    await expect(listItems).toHaveCount(convertTextQuestionInputTypesCount);
    expect(await popupContent.innerText()).toEqual(convertInputTypePopupContent);

    await getListItemByText(page, "Date").click();

    await questionToolbarActions.locator('button[title="Date"]').click();
    await expect(listItems).toHaveCount(convertTextQuestionInputTypesCount);
    expect(await popupContent.innerText()).toEqual(convertInputTypePopupContent);
  });

  test("Single input question wrapper action convert on hover", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const unselectedQuestionToolbarActions = page.locator(".svc-question__content-actions").locator(".sv-action");
    const convertActionButton = unselectedQuestionToolbarActions.locator('button[title="Single-Line Input"]');
    const listItems = page.locator(".sv-popup .svc-list__item").filter({ visible: true });
    const popupContent = page.locator(".sv-popup__content .svc-list").filter({ visible: true });

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await page.locator(".svc-tab-designer").hover({ position: { x: 150, y: 5 } });
    await page.locator(".svc-tab-designer").click({ position: { x: 150, y: 5 } });
    await expect(page.locator(".svc-question__content.svc-question__content--selected")).toHaveCount(0);
    await page.locator(".svc-question__content").hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(500);
    await expect(page.locator(".svc-question__content").locator("input")).toBeVisible();
    await expect(convertActionButton).toBeVisible();

    await convertActionButton.click();
    await expect(listItems).toHaveCount(convertQuestionTypesCount);
    expect(await popupContent.innerText()).toEqual(convertPopupContent);

    await getListItemByText(page, "Long Text").click();
    await expect(page.locator(".svc-question__content--selected").locator("textarea")).toBeVisible();

    await page.locator(".svc-question__content--selected .svc-question__content-actions").locator('button[title="Long Text"]').click();
    await expect(listItems).toHaveCount(convertQuestionTypesCount);
    expect(await popupContent.innerText()).toEqual(convertPopupContent);

    await getListItemByText(page, "Single-Line Input").click();
    await expect(page.locator(".svc-question__content--selected input")).toBeVisible();
  });

  test("Single input question wrapper action duplicate", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const questionToolbarActions = page.locator(".svc-question__content--selected .svc-question__content-actions").locator(".sv-action");
    const duplicateActionButton = questionToolbarActions.locator('button[title="Duplicate"]');

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(page.locator(".svc-question__content.svc-question__content--selected")).toHaveCount(1);
    await expect(page.locator(".svc-question__content--selected").locator("input")).toBeVisible();
    await expect(duplicateActionButton).toBeVisible();

    await duplicateActionButton.click();

    const title1 = await questions.nth(0).locator(".sd-question__title").innerText();
    await expect(questions).toHaveCount(2);
    expect(normalize(title1)).toBe("question1");

    const title2 = await questions.nth(1).locator(".sd-question__title").innerText();
    expect(normalize(title2)).toBe("question2");
    await expect(questions.nth(0)).not.toHaveClass(/svc-question__content--selected/);
    await expect(questions.nth(1)).toHaveClass(/svc-question__content--selected/);
  });

  test("Single input question wrapper action change require", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const questionToolbarActions = page.locator(".svc-question__content--selected .svc-question__content-actions").locator(".sv-action");
    const requiredActionButton = questionToolbarActions.locator('button[title="Required"]');
    const questionTitle = page.locator(".sd-question__title");

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(page.locator(".svc-question__content.svc-question__content--selected")).toHaveCount(1);
    await expect(page.locator(".svc-question__content--selected").locator("input")).toBeVisible();

    await expect(requiredActionButton).toBeVisible();

    let titleText = await questionTitle.innerText();
    expect(normalize(titleText)).toBe("question1");
    await expect(requiredActionButton).not.toHaveClass(/svc-survey-element-toolbar__item--active/);

    await requiredActionButton.hover();
    await requiredActionButton.click();
    titleText = await questionTitle.innerText();
    expect(normalize(titleText)).toBe("question1 *");
    await expect(requiredActionButton).toHaveClass(/svc-survey-element-toolbar__item--active/);
  });

  test("Single input question wrapper action delete", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const questionToolbarActions = page.locator(".svc-question__content--selected .svc-question__content-actions").locator(".sv-action");
    const deleteActionButton = questionToolbarActions.locator('button[title="Delete"]');

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(page.locator(".svc-question__content.svc-question__content--selected")).toHaveCount(1);
    await expect(page.locator(".svc-question__content--selected").locator("input")).toBeVisible();
    await expect(deleteActionButton).toBeVisible();

    await deleteActionButton.click();
    await expect(questions).toHaveCount(0);
  });

  test("Matrix dropdown with vertical layout and and selecting rows", async ({ page }) => {
    const questions = page.locator(".svc-question__content");

    await expect(questions).toHaveCount(0);
    await getToolboxItemByText(page, "Multi-Select Matrix").hover();
    await getToolboxItemByText(page, "Multi-Select Matrix").click();

    await page.evaluate(() => {
      (window as any).creator.survey.getQuestionByName("question1").transposeData = true;
    });

    await page.locator(".sv-string-editor").getByText("Row 1").click();
    await expect(page.locator(selectedObjectTextSelector)).toHaveText("question1");
    await expect(page.locator("div[id$=ariaTitle][id^=sq].spg-title").getByText("Columns")).not.toBeVisible();
    await expect(page.locator("div[id$=ariaTitle][id^=sq].spg-title").getByText("Rows")).toBeVisible();
  });

  test("Matrix dropdown with detail panel", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const SingleInputToolboxItem = page.locator("[aria-label='Single-Line Input']");
    const target = page.locator(".sd-question[data-name=question1] .svc-panel__placeholder_frame");

    await expect(questions).toHaveCount(0);
    await getToolboxItemByText(page, "Multi-Select Matrix").hover();
    await getToolboxItemByText(page, "Multi-Select Matrix").click();

    await page.evaluate(() => {
      (window as any).creator.survey.getQuestionByName("question1").detailPanelMode = "underRow";
    });
    await expect(page.locator(".sd-question[data-name=question1] .svc-panel__placeholder").getByText("Drop a question")).toBeVisible();
    await doDragDrop({ page, element: SingleInputToolboxItem, target, options: { steps: 10 } });
    await expect(page.locator(".sd-question[data-name=question1] .sd-table__row").nth(1).locator(".svc-dropdown-action--convertTo .svc-survey-element-toolbar-item__title").getByText("Single-Line Input")).toBeVisible();
  });

  test("Matrix dropdown with detail panel - add question button", async ({ page }) => {
    const questions = page.locator(".svc-question__content");

    await expect(questions).toHaveCount(0);
    await getToolboxItemByText(page, "Multi-Select Matrix").hover();
    await getToolboxItemByText(page, "Multi-Select Matrix").click();

    await page.evaluate(() => {
      (window as any).creator.survey.getQuestionByName("question1").detailPanelMode = "underRow";
    });
    await expect(page.locator(".sd-question[data-name=question1] .svc-panel__placeholder").getByText("Drop a question")).toBeVisible();
    await expect(page.locator(".sd-question[data-name=question1] .svc-panel__add-new-question")).toBeVisible();
    await page.locator(".sd-question[data-name=question1] .svc-panel__add-new-question").click();
    await expect(page.locator(".sd-question[data-name=question1] .sd-table__row").nth(1).locator(".svc-dropdown-action--convertTo .svc-survey-element-toolbar-item__title").getByText("Single-Line Input")).toBeVisible();
    await expect(page.locator(".sd-question[data-name=question2]")).toBeVisible();
    await page.locator(".sd-question[data-name=question1] .svc-element__add-new-question").click();
    await expect(page.locator(".sd-question[data-name=question3]")).toBeVisible();
  });

  test("Rating question required property", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const isrequiredButton = page.locator(".sv-action--isrequired");

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Rating Scale").hover();
    await getToolboxItemByText(page, "Rating Scale").click();
    await expect(isrequiredButton).toBeVisible();
    await expect(isrequiredButton.locator(".svc-required-action")).not.toHaveClass(/svc-survey-element-toolbar__item--active/);
    await isrequiredButton.click();
    await expect(isrequiredButton.locator(".svc-required-action")).toHaveClass(/svc-survey-element-toolbar__item--active/);
  });
});

test.describe(title + " dropdown collapse", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(urlDropdownCollapseView);
  });

  test("Dropdown question with ability to collapse choices", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const buttonSelector = page.locator(".svc-question__dropdown-choices--wrapper .svc-action-button");

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Dropdown").hover();
    await getToolboxItemByText(page, "Dropdown").click();

    await expect(page.locator(".svc-question__content.svc-question__content--selected")).toHaveCount(1);
    await expect(buttonSelector.getByText("Show more")).toHaveCount(1);

    await buttonSelector.getByText("Show more").click();
    await expect(buttonSelector.getByText("Show less")).toHaveCount(1);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(buttonSelector.getByText("Show more")).toHaveCount(1);

    await page.locator(".svc-question__dropdown-choice .svc-item-value-controls__remove").first().click();
    await expect(buttonSelector).toHaveCount(0);

    await page.locator(".svc-question__dropdown-choice .svc-item-value-controls__add").first().click();
    await expect(buttonSelector).toHaveCount(1);
  });

  test("Keep focus on question convert", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const convertActionButton = page.locator(".svc-question__content--selected .svc-dropdown-action--convertTo").first();
    const listItems = page.locator(".sv-popup .svc-list__item").filter({ visible: true });
    const popupContent = page.locator(".sv-popup__content .svc-list").filter({ visible: true });

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(page.locator(".svc-question__content.svc-question__content--selected")).toHaveCount(1);
    await expect(page.locator(".svc-question__content--selected").locator("input")).toBeVisible();
    await expect(convertActionButton).toBeVisible();

    await convertActionButton.click();
    await expect(listItems).toHaveCount(convertQuestionTypesCount);
    expect(await popupContent.innerText()).toEqual(convertPopupContent);

    await getListItemByText(page, "Long Text").click();
    await expect(page.locator(".svc-question__content--selected").locator("textarea")).toBeVisible();
    await expect(page.locator(".svc-question__content--selected .svc-dropdown-action--convertTo button")).toBeFocused();
  });

  test("Matrix column title - get focus on click, not tab", async ({ page }) => {
    const questions = page.locator(".svc-question__content");

    await expect(questions).toHaveCount(0);
    await getToolboxItemByText(page, "Multi-Select Matrix").hover();
    await getToolboxItemByText(page, "Multi-Select Matrix").click();
    await page.locator(".svc-matrix-cell").first().click({ position: { x: 5, y: 5 } });
    await expect(page.locator(".svc-matrix-cell").first()).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.locator(".svc-matrix-cell").getByText("Column 1")).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.locator(".sv-string-editor").getByText("Column 2")).toBeFocused();
  });

  test("Carryforward banner", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const choicesTabTitle = page.locator("div[id$=ariaTitle][id^=sp]").getByText("Choice Options", { exact: true });
    const generalTabTitle = page.locator("div[id$=ariaTitle][id^=sp]").getByText(generalGroupName, { exact: true });
    const carryForwardEditor = page.locator("div[data-name='choicesFromQuestion'] .spg-dropdown");

    await expect(questions).toHaveCount(0);
    await getToolboxItemByText(page, "Checkboxes").hover();
    await getToolboxItemByText(page, "Checkboxes").click();
    await getToolboxItemByText(page, "Radio Button Group").hover();
    await getToolboxItemByText(page, "Radio Button Group").click();
    await getToolboxItemByText(page, "Dropdown").hover();
    await getToolboxItemByText(page, "Dropdown").click();

    const getSelectedElementName = () => page.evaluate(() => (window as any).creator.selectedElement.name);
    expect(await getSelectedElementName()).toBe("question3");
    await generalTabTitle.click();
    await choicesTabTitle.click();
    await carryForwardEditor.click();
    await getListItemByText(page, "question1").click();
    await expect(page.locator("span").getByText("Copy choices from")).toHaveCount(1);
    await page.locator(".svc-carry-forward-panel").locator(".svc-action-button").getByText("question1").click();
    expect(await getSelectedElementName()).toBe("question1");
  });

  test("No tab stop in dynamic panel", async ({ page }) => {
    await setJSON(page, {
      pages: [
        {
          name: "page1",
          elements: [
            { type: "paneldynamic", name: "panel1" },
            {
              type: "panel",
              name: "panel2",
              elements: [{ type: "text", name: "q2" }],
            },
          ],
        },
      ],
    });
    await page.locator(".sv-string-editor").getByText("panel1").click();
    await expect(page.locator(".sv-string-editor").getByText("panel1")).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.locator(".svc-question__content--selected .svc-panel__add-new-question")).toBeFocused();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await expect(page.locator(".sv-string-editor").getByText("q2")).toBeFocused();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await expect(page.locator(".svc-question__content--panel .svc-element__add-new-question")).toBeFocused();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    expect(await page.locator(".svc-question__content--selected > .svc-question__content-actions .svc-dropdown-action--convertTo .svc-survey-element-toolbar__item").innerText()).toEqual("Panel");
    await expect(page.locator(".svc-question__content--selected > .svc-question__content-actions .svc-dropdown-action--convertTo .svc-survey-element-toolbar__item")).toBeFocused();
  });

  test("Question adorner - collapse button in differen modes", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json: { elements: Array<{ type: string, name: string }> } = {
      elements: [{ type: "text", name: "question1" }],
    };
    await setJSON(page, json);
    await getToolboxItemByText(page, "Single-Line Input").hover();
    const qContent = page.locator(".svc-question__content");
    const qCollapseButton = page.locator(".svc-question__content .sv-action-bar-item--collapse");
    await qContent.hover({ position: { x: 10, y: 10 } });
    await expect(page.locator(".svc-question__adorner")).toHaveClass(/svc-hovered/);
    await expect(qCollapseButton).not.toBeVisible();
    await qContent.click({ position: { x: 10, y: 10 } });
    await expect(qContent).toHaveClass(/svc-question__content--selected/);
    await expect(qCollapseButton).not.toBeVisible();

    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "onhover"; });
    json.elements[0].name = "question2";
    await setJSON(page, json);
    await getToolboxItemByText(page, "Single-Line Input").hover();
    await expect(qCollapseButton).not.toBeVisible();
    await qContent.hover({ position: { x: 10, y: 10 } });
    await expect(qCollapseButton).toBeVisible();
    await qContent.click({ position: { x: 10, y: 10 } });
    await getToolboxItemByText(page, "Single-Line Input").hover();
    await expect(qCollapseButton).toBeVisible();

    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "always"; });
    json.elements[0].name = "question3";
    await getToolboxItemByText(page, "Single-Line Input").hover();
    await setJSON(page, json);
    await expect(qCollapseButton).toBeVisible();
    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "never"; });
  });

  test("Question and page collapse button title", async ({ page }) => {
    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "always"; });
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = { elements: [{ type: "text", name: "question1" }] };
    await setJSON(page, json);
    await getToolboxItemByText(page, "Single-Line Input").hover();
    const qCollapseButton = page.locator(".svc-question__content .sv-action-bar-item--collapse button");
    await expect(qCollapseButton).toHaveAttribute("title", "Collapse");
    await qCollapseButton.click();
    await expect(qCollapseButton).toHaveAttribute("title", "Expand");

    const pCollapseButton = page.locator(".svc-page__content > .svc-question__drag-area .sv-action-bar-item--collapse button");
    await expect(pCollapseButton).toHaveAttribute("title", "Collapse");
    await pCollapseButton.click();
    await expect(pCollapseButton).toHaveAttribute("title", "Expand");
  });

  test("Question adorner - do not render content when initially collapsed", async ({ page }) => {
    const json = {
      elements: [
        { type: "text", name: "question1" },
        { type: "panel", name: "panel1" },
      ],
    };
    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "always"; });
    await setJSON(page, json);
    await getToolboxItemByText(page, "Single-Line Input").hover();
    const qContent = page.locator(".svc-question__content--text");
    const qCollapseButton = page.locator(".svc-question__content--text .sv-action-bar-item--collapse");
    const pContent = page.locator(".svc-question__content--panel");
    const pCollapseButton = page.locator(".svc-question__content--panel .sv-action-bar-item--collapse");
    await expect(qCollapseButton).toBeVisible();
    await qCollapseButton.click();
    await expect(pCollapseButton).toBeVisible();
    await pCollapseButton.click();

    await page.locator(".svc-tabbed-menu-item").getByText("Preview").click();
    await page.locator(".svc-tabbed-menu-item").getByText("Designer").click();

    await expect(qContent.locator(".sd-element")).toHaveCount(0);
    await qCollapseButton.click();
    await expect(qContent.locator(".sd-element")).toHaveCount(1);
    await qCollapseButton.click();
    await expect(qContent.locator(".sd-element")).toHaveCount(1);

    await expect(pContent.locator(".sd-element")).toHaveCount(0);
    await pCollapseButton.click();
    await expect(pContent.locator(".sd-element")).toHaveCount(1);
    await pCollapseButton.click();
    await expect(pContent.locator(".sd-element")).toHaveCount(1);

    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "never"; });
  });

  test("Question adorner - collapse button visibility inside panels", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      elements: [
        {
          type: "panel",
          name: "panel1",
          elements: [{ type: "text", name: "question1" }],
        },
      ],
    };
    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "onhover"; });
    await setJSON(page, json);
    await getToolboxItemByText(page, "Single-Line Input").hover();
    const qContent = page.locator(".svc-question__content--text");
    const pContent = page.locator(".svc-question__content--panel");
    const qCollapseButton = page.locator(".svc-question__content--text .sv-action-bar-item--collapse");
    const pCollapseButton = page.locator(".svc-question__content--panel .sv-action-bar-item--collapse").first();

    await qContent.hover({ position: { x: 10, y: 10 } });
    await expect(page.locator(".svc-question__adorner.svc-hovered > .svc-question__content--text")).toHaveCount(1);
    await expect(qCollapseButton).toBeVisible();
    await expect(pCollapseButton).not.toBeVisible();

    await pContent.hover({ position: { x: 10, y: 10 } });
    await expect(page.locator(".svc-question__adorner.svc-hovered > .svc-question__content--panel")).toHaveCount(1);
    await expect(qCollapseButton).not.toBeVisible();
    await expect(pCollapseButton).toBeVisible();

    await qContent.click({ position: { x: 10, y: 10 } });
    await expect(qContent).toHaveClass(/svc-question__content--selected/);
    await expect(qCollapseButton).toBeVisible();
    await expect(pCollapseButton).not.toBeVisible();

    await pContent.click({ position: { x: 10, y: 10 } });
    await expect(pContent).toHaveClass(/svc-question__content--selected/);
    await expect(qCollapseButton).not.toBeVisible();
    await expect(pCollapseButton).toBeVisible();
  });

  test("Question adorner - doubleclick", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      elements: [
        {
          type: "panel",
          name: "panel1",
          elements: [{ type: "text", name: "question1" }],
        },
      ],
    };
    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "onhover"; });
    await setJSON(page, json);
    await getToolboxItemByText(page, "Single-Line Input").hover();
    const qContent = page.locator(".svc-question__content--text");
    const pContent = page.locator(".svc-question__content--panel");
    const pgContent = page.locator(".svc-page__content").first();

    await expect(qContent).not.toHaveClass(/svc-question__content--collapsed/);
    await qContent.dblclick({ position: { x: 10, y: 10 } });
    await expect(qContent).toHaveClass(/svc-question__content--collapsed/);
    await qContent.dblclick({ position: { x: 10, y: 10 } });
    await expect(qContent).not.toHaveClass(/svc-question__content--collapsed/);

    await expect(pContent).not.toHaveClass(/svc-question__content--collapsed/);
    await pContent.dblclick({ position: { x: 10, y: 10 } });
    await expect(pContent).toHaveClass(/svc-question__content--collapsed/);
    await pContent.dblclick({ position: { x: 10, y: 10 } });
    await expect(pContent).not.toHaveClass(/svc-question__content--collapsed/);

    await expect(pgContent).not.toHaveClass(/svc-page__content--collapsed/);
    await pgContent.dblclick({ position: { x: 10, y: 10 } });
    await expect(pgContent).toHaveClass(/svc-page__content--collapsed/);
    await pgContent.dblclick({ position: { x: 10, y: 10 } });
    await expect(pgContent).not.toHaveClass(/svc-page__content--collapsed/);
  });

  test("Page adorner - collapse button in differen modes", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json: { elements: Array<{ type: string, name: string }> } = {
      elements: [{ type: "text", name: "question1" }],
    };
    await setJSON(page, json);
    await getToolboxItemByText(page, "Single-Line Input").hover();
    const pContent = page.locator(".svc-page__content").first();
    const pCollapseButton = page.locator(".svc-page__content > .svc-question__drag-area .sv-action-bar-item--collapse button");
    const actions = page.locator(".svc-page__content-actions").first();
    await pContent.hover({ position: { x: 10, y: 10 } });
    await expect(pContent).toHaveClass(/svc-hovered/, { timeout: 3000 });
    await expect(pCollapseButton).not.toBeVisible();
    await pContent.click({ position: { x: 10, y: 10 } });
    await expect(pContent).toHaveClass(/svc-page__content--selected/);
    await expect(pCollapseButton).not.toBeVisible();

    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "onhover"; });
    json.elements[0].name = "question2";
    await setJSON(page, json);
    await getToolboxItemByText(page, "Single-Line Input").hover();
    await expect(actions).toHaveCSS("opacity", "0");
    await pContent.hover({ position: { x: 10, y: 10 } });
    await expect(pCollapseButton).toBeVisible();
    await pContent.click({ position: { x: 10, y: 10 } });
    await expect(pContent).toHaveClass(/svc-page__content--selected/);
    await expect(pCollapseButton).toBeVisible();

    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "always"; });
    json.elements[0].name = "question3";
    await getToolboxItemByText(page, "Single-Line Input").hover();
    await setJSON(page, json);
    await expect(pCollapseButton).toBeVisible();
    await page.evaluate(() => { (window as any).creator.expandCollapseButtonVisibility = "never"; });
  });
});
