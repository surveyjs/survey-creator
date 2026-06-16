import {
  url,
  test,
  expect,
  getToolboxItemByText,
  getListItemByText,
  getTabbedMenuItemByText,
  creatorTabPreviewName,
  setJSON,
} from "../helper";

const title = "Question converter";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Convert text question into multiple text question", async ({ page }) => {
    const questions = page.locator(".svc-question__content");
    const convertActionButton = page.locator(".svc-question__content--selected .svc-dropdown-action--convertTo").first();
    const textItemEditor = page.locator(".sv-string-editor").getByText("text1");

    await expect(questions).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    expect(await convertActionButton.locator(".svc-survey-element-toolbar-item__title").textContent()).toEqual("Single-Line Input");

    await convertActionButton.click();
    await getListItemByText(page, "Multiple Textboxes").click();
    expect(await convertActionButton.locator(".svc-survey-element-toolbar-item__title").textContent()).toEqual("Multiple Textboxes");

    await textItemEditor.hover();
    await textItemEditor.click();
    await textItemEditor.fill("myItem1");
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(page.locator(".sv-string-viewer").getByText("myItem1")).toBeVisible();
  });

  test("Keep nested choice elements when converting checkbox <-> radiogroup, Bug#7803", async ({ page }) => {
    await page.waitForFunction(() => !!window["creator"]);
    await page.evaluate(() => {
      (window as any).creator.setOptions({ maxChoiceContentNestingLevel: 2 });
    });
    await setJSON(page, {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "checkbox",
              name: "question1",
              choices: [
                "Item 1",
                {
                  value: "Item 2",
                  elements: [
                    { type: "text", name: "subitem2" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    });

    const question = page.locator(".svc-question__content").first();
    const convertActionButton = page.locator(".svc-question__content--selected .svc-dropdown-action--convertTo").first();
    const nestedElement = page.locator("[data-name=subitem2]");

    // Selects the question and expands the nested panel inside the "Item 2" choice.
    const expandNestedPanelAndCheck = async (): Promise<void> => {
      await question.click({ button: "left", position: { x: 0, y: 40 } });
      await expect(page.locator(".svc-question__content--selected")).toBeVisible();
      const expandButton = page.locator(".svc-item-value-wrapper[data-sv-drop-target-item-value=\"Item 2\"] .svc-choice-elements-button");
      await expandButton.click();
      await expect(nestedElement).toBeVisible();
    };

    const convertTo = async (typeTitle: string): Promise<void> => {
      await question.click({ button: "left", position: { x: 0, y: 40 } });
      await convertActionButton.click();
      await getListItemByText(page, typeTitle).click();
      expect(await convertActionButton.locator(".svc-survey-element-toolbar-item__title").textContent()).toEqual(typeTitle);
    };

    // Checkbox: the nested element renders inside the choice.
    await expandNestedPanelAndCheck();

    // Convert into Radio Button Group: the nested element should still render.
    await convertTo("Radio Button Group");
    await expandNestedPanelAndCheck();

    // Convert back into Checkboxes: the nested element should still render.
    await convertTo("Checkboxes");
    await expandNestedPanelAndCheck();
  });
});
