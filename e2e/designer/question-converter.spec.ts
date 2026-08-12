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
    expect(await convertActionButton.locator(".sd-action__title").textContent()).toEqual("Single-Line Input");

    await convertActionButton.click();
    await getListItemByText(page, "Multiple Textboxes").click();
    expect(await convertActionButton.locator(".sd-action__title").textContent()).toEqual("Multiple Textboxes");

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
    // The nested textbox renders its own "Convert To" action inside the root question's
    // subtree, and (being in the question footer) it comes before the root's action in the
    // DOM. Scope to the root question's adorner and take the last match so the action
    // targets the root question, not the nested textbox (Bug#7803).
    const convertActionButton = page.locator("[data-sv-drop-target-survey-element=\"question1\"] .svc-dropdown-action--convertTo").last();
    const nestedElement = page.locator("[data-name=subitem2]");

    // The root question type, read from the model.
    const getRootType = (): Promise<string> => page.evaluate(() => (window as any).creator.survey.getQuestionByName("question1").getType());
    // The type of the element nested into the "Item 2" choice, read from the serialized JSON.
    const getNestedElementType = (): Promise<string | undefined> => page.evaluate(() => {
      const json = (window as any).creator.survey.getQuestionByName("question1").toJSON();
      const item = (json.choices || []).filter((c: any) => c && c.value === "Item 2")[0];
      return item && item.elements && item.elements[0] ? item.elements[0].type : undefined;
    });
    const item2ExpandButton = page.locator(".svc-item-value-wrapper[data-sv-drop-target-item-value=\"Item 2\"] .svc-choice-elements-button");
    // The "Item 2" choice adorner expand/collapse icon. It reflects the adorner state:
    // "#icon-expandpanel-16x16" when collapsed, "#icon-collapsepanel-16x16" when expanded.
    const getItem2PanelIcon = (): Promise<string | null> => item2ExpandButton.locator("use").getAttribute("xlink:href");

    // Selects the question and ensures the "Item 2" nested panel is expanded so the nested
    // element renders. The button toggles, so click it only when the panel is collapsed -
    // this also exposes the bug where the adorner is stuck in a stale expanded state and the
    // panel cannot be opened (Bug#7803).
    const expandNestedPanelAndCheck = async (): Promise<void> => {
      await question.click({ button: "left", position: { x: 0, y: 40 } });
      await expect(page.locator(".svc-question__content--selected")).toBeVisible();
      await expect(item2ExpandButton).toBeVisible();
      if ((await getItem2PanelIcon())?.includes("expandpanel")) {
        await item2ExpandButton.click();
      }
      await expect(nestedElement).toBeVisible();
    };

    const convertTo = async (typeTitle: string): Promise<void> => {
      await question.click({ button: "left", position: { x: 0, y: 40 } });
      await convertActionButton.click();
      await getListItemByText(page, typeTitle).click();
    };

    // Checkbox: expand the "Item 2" choice; the nested element renders.
    await expandNestedPanelAndCheck();
    await expect.poll(getRootType).toEqual("checkbox");
    await expect.poll(getNestedElementType).toEqual("text");
    await expect.poll(getItem2PanelIcon).toContain("collapsepanel");

    // Convert into Radio Button Group. The "Convert To" action must convert the
    // root question, not the nested textbox (Bug#7803).
    await convertTo("Radio Button Group");
    await expect.poll(getRootType).toEqual("radiogroup");
    await expect.poll(getNestedElementType).toEqual("text");
    // After conversion the "Item 2" choice adorner must reset to the collapsed state
    // with the detail panel hidden, not stay in a stale expanded state (Bug#7803).
    await expect(nestedElement).toBeHidden();
    await expect.poll(getItem2PanelIcon).toContain("expandpanel");
    // The panel can still be expanded and renders the nested element.
    await expandNestedPanelAndCheck();

    // Convert back into Checkboxes: the root converts, the nested textbox stays a textbox.
    await convertTo("Checkboxes");
    await expect.poll(getRootType).toEqual("checkbox");
    await expect.poll(getNestedElementType).toEqual("text");
    await expect(nestedElement).toBeHidden();
    await expect.poll(getItem2PanelIcon).toContain("expandpanel");
    await expandNestedPanelAndCheck();
  });
});
