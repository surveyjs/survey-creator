import {
  url,
  test,
  expect,
  setJSON,
  getToolboxItemByText,
  explicitErrorHandler,
  handleShiftEnter,
  doDragDrop,
} from "../helper";

const title = "String Editor 2";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Check item string editor focus out on near click", async ({ page }) => {
    const json = { "elements": [{ "type": "checkbox", "name": "question1", "choices": ["Item 1"] }] };
    await setJSON(page, json);

    const svItemSelector = page.locator(".sv-string-editor").getByText("Item 1");

    await svItemSelector.click();
    await expect(svItemSelector).toBeFocused();

    await page.locator(".svc-item-value-wrapper").nth(1).click({ position: { x: 200, y: 50 }, force: true });
    await expect(svItemSelector).not.toBeFocused();
  });

  test("Check markdown events", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).creator.onSurveyInstanceCreated.add((_sender: any, options: any) => {
        options.survey.onTextMarkdown.add((_s: any, o: any) => o.html = o.text.replaceAll("*", "$"));
      });
    });
    await setJSON(page, { "description": "*abc*", "elements": [{ "type": "text", "name": "question1" }] });
    await page.locator(".sv-string-editor").getByText("$abc$").click();
    await expect(page.locator(".sv-string-editor").getByText("*abc*")).toBeVisible();
    await page.locator(".sv-string-editor").getByText("*abc*").click();
    await page.keyboard.press("Home");
    await page.keyboard.type("d");
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("d$abc$")).toBeVisible();
  });

  test("Check markdown shift-enter", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).creator.onSurveyInstanceCreated.add((_sender: any, options: any) => {
        options.survey.onTextMarkdown.add((_s: any, o: any) => o.html = o.text);
        (window as any).creator.onHtmlToMarkdown.add((_s: any, o: any) => o.text = o.html);
      });
    });

    await setJSON(page, { "description": "abc", "elements": [{ "type": "text", "name": "question1" }] });
    await page.locator(".sv-string-editor").getByText("abc").click();
    await page.locator(".sv-string-editor").getByText("abc").press("ArrowRight");
    await page.keyboard.type("d");
    await page.keyboard.press("Shift+Enter");
    await expect(page.locator(".sd-title .sd-description .sv-string-editor")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sd-title .sd-description .sv-string-editor")).not.toBeFocused();
  });

  test("Check markdown back events", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).creator.onSurveyInstanceCreated.add((_sender: any, options: any) => {
        options.survey.onTextMarkdown.add((_s: any, o: any) => o.html = o.text.replaceAll("*", "$"));
      });
      (window as any).creator.onHtmlToMarkdown.add((_s: any, o: any) => o.text = o.html.replaceAll("$", "*"));
    });

    await setJSON(page, { "description": "*abc*", "elements": [{ "type": "text", "name": "question1" }] });
    await page.locator(".sv-string-editor").getByText("$abc$").click();
    await expect(page.locator(".sv-string-editor").getByText("$abc$")).toBeVisible();
    await page.locator(".sv-string-editor").getByText("$abc$").click();
    await page.keyboard.press("Home");
    await page.keyboard.type("d");
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("d$abc$")).toBeVisible();
    const getValue = await page.evaluate(() => (window as any).creator.survey.description);
    expect(getValue).toEqual("d*abc*");
  });

  test("Check markdown events with HTML", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).creator.onSurveyInstanceCreated.add((_sender: any, options: any) => {
        options.survey.onTextMarkdown.add((_s: any, o: any) => o.html = o.text.replaceAll("*", "$"));
      });
    });

    await setJSON(page, { "description": "*a<b>b</b>c*", "elements": [{ "type": "text", "name": "question1" }] });
    let getValue = await page.evaluate(() => (window as any).creator.survey.description);
    expect(getValue).toEqual("*a<b>b</b>c*");
    await page.locator(".sv-string-editor").getByText("$abc$").click();
    await expect(page.locator(".sv-string-editor").getByText("*a<b>b</b>c*")).toBeVisible();
    await page.locator(".sv-string-editor").getByText("*a<b>b</b>c*").click();
    // await page.waitForTimeout(100);
    await page.keyboard.press("Escape");
    // await page.waitForTimeout(100);
    await expect(page.locator(".sv-string-editor").getByText("$abc$")).toBeVisible();
    getValue = await page.evaluate(() => (window as any).creator.survey.description);
    expect(getValue).toEqual("*a<b>b</b>c*");
    await page.locator(".sv-string-editor").getByText("$abc$").click();
    await expect(page.locator(".sv-string-editor").getByText("*a<b>b</b>c*")).toBeVisible();
    await page.locator(".sv-string-editor").getByText("*a<b>b</b>c*").click();
    await page.keyboard.press("Home");
    await page.keyboard.type("d");
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("d$abc$")).toBeVisible();
    getValue = await page.evaluate(() => (window as any).creator.survey.description);
    expect(getValue).toEqual("d*a<b>b</b>c*");
  });

  test("Check markdown events with question title", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).creator.onSurveyInstanceCreated.add((_sender: any, options: any) => {
        options.survey.onTextMarkdown.add((_s: any, o: any) => o.html = o.text.replaceAll("*", "$"));
      });
    });

    await setJSON(page, { "elements": [{ "type": "text", "name": "question1" }] });
    await page.locator(".sv-string-editor").getByText("question1").click();
    await expect(page.locator(".sv-string-editor").getByText("question1")).toBeFocused();
  });

  test("Test selection", async ({ page }) => {
    const json = { "elements": [{ "type": "text", "name": "question1" }] };
    await setJSON(page, json);

    const svItemSelector = page.locator(".sv-string-editor").getByText("question1");

    await svItemSelector.click();
    let selection = await page.evaluate(() => window.getSelection()!.toString());
    expect(selection).toEqual("question1");
    // await page.waitForTimeout(300);
    await svItemSelector.click();
    selection = await page.evaluate(() => window.getSelection()!.toString());
    expect(selection).toEqual("");
  });

  test("Test styles", async ({ page }) => {
    const json = { "elements": [{ "type": "text", "name": "question1" }] };
    await setJSON(page, json);

    const svItemSelector = page.locator(".sv-string-editor").getByText("question1");

    const userSelect = await svItemSelector.evaluate((el) => getComputedStyle(el).userSelect);
    expect(userSelect).toEqual("text");
  });

  test("Test selection after tab", async ({ page }) => {
    const json = {
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "title": "page_title",
          "description": "page_desc",
          "elements": [{ "type": "text", "name": "question1" }],
        }
      ]
    };

    await setJSON(page, json);

    const svItemSelector = page.locator(".sv-string-editor").getByText("page_title");

    await svItemSelector.click();
    let selection = await page.evaluate(() => window.getSelection()!.toString());
    expect(selection).toEqual("page_title");
    // await page.waitForTimeout(300);
    await page.keyboard.press("Tab");
    selection = await page.evaluate(() => window.getSelection()!.toString());
    expect(selection).toEqual("page_desc");
  });

  test("Test string change event", async ({ page }) => {
    const json = {
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrix",
              "name": "question1",
              "columns": ["Column 1", "Column 2", "Column 3"],
              "rows": [
                "Row 1",
                "Row 2"
              ]
            }
          ]
        }
      ]
    };

    await setJSON(page, json);
    expect(await page.locator("th").first().innerHTML()).toContain("Column 1");

    await page.evaluate(() => {
      (window as any).creator.survey.getAllQuestions()[0].columns[0].text = "newTitle";
    });
    expect(await page.locator("th").first().innerHTML()).toContain("newTitle");
  });

  test("Focus on new question", async ({ page }) => {
    await getToolboxItemByText(page, "Radio Button Group").click();
    const svStringSelector = page.locator(".sv-string-editor").getByText("question1");
    await expect(svStringSelector).toBeFocused();
  });

  test("Focus on new question dragged", async ({ page }) => {
    await setJSON(page, { pages: [{ name: "page1" }] });
    const EmptyPage = page.locator("[data-sv-drop-target-survey-element='page1']");
    const RatingToolboxItem = page.locator("[aria-label='Rating Scale']");

    await doDragDrop({ page, element: RatingToolboxItem, target: EmptyPage, options: { steps: 10 } });
    const svStringSelector = page.locator(".sv-string-editor").getByText("question1");
    await expect(svStringSelector).toBeFocused();
  });

  test("Do not focus on existing question dragged", async ({ page }) => {
    await setJSON(page, { "logoPosition": "right", "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "question1" }, { "type": "text", "name": "question2" }, { "type": "text", "name": "question3" }] }] });
    const q1 = page.locator("[data-sv-drop-target-survey-element=\"question1\"]");
    const q3 = page.locator("[data-sv-drop-target-survey-element=\"question3\"]");
    const dragZone = q1.locator(".svc-question__drag-element");

    await doDragDrop({
      page,
      element: dragZone,
      target: q3,
      options: {
        elementPosition: { x: 5, y: 5 },
        targetPosition: { x: 5, y: 1 }
      }
    });

    const svStringSelector = page.locator(".sv-string-editor").getByText("question1");
    await expect(svStringSelector).not.toBeFocused();
  });

  test("Focus switch on select base", async ({ page }) => {
    await getToolboxItemByText(page, "Radio Button Group").click();
    const svStringSelector = page.locator(".sv-string-editor").getByText("question1");
    await expect(svStringSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor[contenteditable=\"true\"]").getByText("Item 1")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor[contenteditable=\"true\"]").getByText("Item 2")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor[contenteditable=\"true\"]").getByText("Item 3")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor[contenteditable=\"true\"]").getByText("Item 4")).toBeFocused();
    await page.keyboard.press("Control+Enter");
    await expect(page.locator(".sv-string-editor[contenteditable=\"true\"]").getByText("Item 5")).not.toBeVisible();
  });

  test("Disable edit inactive items", async ({ page }) => {
    await getToolboxItemByText(page, "Checkboxes").click();

    const itemSelector = ".svc-item-value__item .svc-string-editor .sv-string-editor";
    expect(await page.locator(itemSelector).getByText("Select All").getAttribute("contenteditable")).toEqual("false");
    expect(await page.locator(itemSelector).getByText("None").getAttribute("contenteditable")).toEqual("false");
    expect(await page.locator(itemSelector).getByText("Other").getAttribute("contenteditable")).toEqual("false");
    await page.locator(".svc-item-value-controls__add").nth(0).click();
    expect(await page.locator(itemSelector).getByText("Select All").getAttribute("contenteditable")).toEqual("true");
    await page.locator(".svc-item-value-controls__add").nth(1).click();
    expect(await page.locator(itemSelector).getByText("None").getAttribute("contenteditable")).toEqual("true");
    await page.locator(".svc-item-value-controls__add").nth(1).click();
    expect(await page.locator(itemSelector).getByText("Other").getAttribute("contenteditable")).toEqual("true");
  });

  test("Focus switch on rating base", async ({ page }) => {
    await getToolboxItemByText(page, "Rating Scale").click();
    await page.keyboard.press("Enter");
    const svStringSelector = page.locator(".svc-rating-question-content .sv-string-editor").getByText("2").first();
    await expect(svStringSelector).toBeVisible();
    await svStringSelector.click();
    await expect(svStringSelector).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.locator(".svc-rating-question-content .sv-string-editor").getByText("3").first()).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".svc-rating-question-content .sv-string-editor").getByText("4").first()).not.toBeFocused();
  });

  test("Delete items on backspace", async ({ page }) => {
    await getToolboxItemByText(page, "Radio Button Group").click();
    const svStringSelector = page.locator(".sv-string-editor").getByText("question1");
    await expect(svStringSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("Item 2")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("Item 1")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Item 2")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Item 3")).toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("Item 1")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("Item 2")).not.toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Item 1")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Item 3")).toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("Item 3")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("Item 1")).not.toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("Item 3")).not.toBeVisible();
  });

  test("Focus switch on multiple text", async ({ page }) => {
    await getToolboxItemByText(page, "Multiple Textboxes").click();
    const svStringSelector = page.locator(".sv-string-editor").getByText("question1");
    await expect(svStringSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("text1")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("text2")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("text3")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("text4")).toBeFocused();
    await page.keyboard.press("Control+Enter");
    await expect(page.locator(".sv-string-editor").getByText("text5")).not.toBeVisible();
  });

  test("Delete  multiple text items on backspace", async ({ page }) => {
    await getToolboxItemByText(page, "Multiple Textboxes").click();
    const svStringSelector = page.locator(".sv-string-editor").getByText("question1");
    await expect(svStringSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");
    await page.keyboard.press("Shift+Tab");
    await expect(page.locator(".sv-string-editor").getByText("text2")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("text1")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("text2")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("text3")).toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("text1")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("text2")).not.toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("text1")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("text3")).toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("text3")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("text1")).not.toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("text3")).not.toBeVisible();
  });

  test("Focus switch on matrix columns and rows", async ({ page }) => {
    await getToolboxItemByText(page, "Single-Select Matrix").click();
    const svStringSelector = page.locator(".sv-string-editor").getByText("question1");
    await expect(svStringSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("Column 1")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("Column 2")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("Column 3")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("Column 4")).toBeFocused();
    await page.keyboard.press("Control+Enter");
    await expect(page.locator(".sv-string-editor").getByText("Column 5")).not.toBeVisible();
    await page.locator(".sv-string-editor").getByText("Row 1").click();
    await expect(page.locator(".sv-string-editor").getByText("Row 1")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("Row 2")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("Row 3")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("Row 4")).toBeFocused();
    await page.keyboard.press("Control+Enter");
    await expect(page.locator(".sv-string-editor").getByText("Row 5")).not.toBeVisible();
  });

  test("Delete matrix Columns on backspace", async ({ page }) => {
    await getToolboxItemByText(page, "Single-Select Matrix").click();
    const svStringSelector = page.locator(".sv-string-editor").getByText("question1");
    await expect(svStringSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");
    await expect(page.locator(".sv-string-editor").getByText("Column 2")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("Column 1")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Column 2")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Column 3")).toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("Column 1")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("Column 2")).not.toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Column 1")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Column 3")).toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("Column 3")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("Column 1")).not.toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("Column 3")).not.toBeVisible();
  });

  test("Delete matrix rows on backspace", async ({ page }) => {
    await getToolboxItemByText(page, "Single-Select Matrix").click();
    const svStringSelector = page.locator(".sv-string-editor").getByText("question1");
    await expect(svStringSelector).toBeFocused();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");
    await page.keyboard.press("Shift+Tab");
    await expect(page.locator(".sv-string-editor").getByText("Row 2")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("Row 1")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Row 2")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Row 3")).toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("Row 1")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("Row 2")).not.toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Row 1")).toBeVisible();
    await expect(page.locator(".sv-string-editor").getByText("Row 3")).toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("Row 3")).toBeFocused();
    await expect(page.locator(".sv-string-editor").getByText("Row 1")).not.toBeVisible();
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await page.keyboard.press("Backspace");
    // await page.waitForTimeout(200);
    await expect(page.locator(".sv-string-editor").getByText("Row 3")).not.toBeVisible();
  });

  test("Paste multiline selectbase", async ({ page }) => {
    await getToolboxItemByText(page, "Radio Button Group").click();

    await page.locator(".sv-string-editor").getByText("Item 2").hover();
    await page.locator(".sv-string-editor").getByText("Item 2").click();
    await page.waitForTimeout(500);
    await expect(page.locator(".sv-string-editor").getByText("Item 2")).toBeFocused();

    await page.keyboard.press("Home");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowRight");

    await expect(page.locator(".sv-string-editor").getByText("Item 2")).toBeFocused();
    await page.evaluate(() => {
      const el = document.activeElement as HTMLElement;
      const event = new ClipboardEvent("paste", { bubbles: true, cancelable: true, clipboardData: new DataTransfer() });
      event.clipboardData!.setData("text/plain", "a\nb\nc");
      el.dispatchEvent(event);
    });
    await expect(page.locator(".sv-string-editor").getByText("Item 3")).toBeFocused();
    const choicesJson = await page.evaluate(() => JSON.stringify((window as any).creator.survey.getAllQuestions()[0].choices.map((c: { text: string }) => c.text)));
    expect(choicesJson).toEqual("[\"Item 1\",\"Ita\",\"b\",\"cem 2\",\"Item 3\"]");
  });

  test("Paste multiline selectbase through event", async ({ page }) => {
    await setJSON(page, { "elements": [{ "type": "radiogroup", "name": "question1", "choices": ["Item 1"], "showNoneItem": true }] });
    const skipIfReact = await page.evaluate(() => (window as any).creator.survey.platformName == "react");
    // skip test fo react - insecured code
    if (skipIfReact) return;

    await page.locator(".sv-string-editor").getByText("None").click();
    await page.evaluate((data: string) => {
      const event = new Event("paste");
      (event as any).clipboardData = { getData: () => data };
      document.activeElement!.dispatchEvent(event);
    }, "q\nw\ne");
    await page.keyboard.press("Enter");
    const visibleChoicesJson = await page.evaluate(() => JSON.stringify((window as any).creator.survey.getAllQuestions()[0].visibleChoices.map((c: { text: string }) => c.text)));
    expect(visibleChoicesJson).toEqual("[\"Item 1\",\"Item 2\",\"qwe\",\"Other (describe)\"]");

    await page.locator(".sv-string-editor").getByText("Item 1").click();
    await page.evaluate((data: string) => {
      const event = new Event("paste");
      (event as any).clipboardData = { getData: () => data };
      document.activeElement!.dispatchEvent(event);
    }, "a\nb\nc");
    const choicesJson = await page.evaluate(() => JSON.stringify((window as any).creator.survey.getAllQuestions()[0].choices.map((c: { text: string }) => c.text)));
    expect(choicesJson).toEqual("[\"a\",\"b\",\"c\"]");
  });

  test.skip("Paste html data", async ({ page }) => {
    // this test does not work in Chrome. Keep it here fore future investigation
    await setJSON(page, {
      "elements": [
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "html",
          "html": "<span id='copy-simulator'>Sim copy</span><span tabindex='-1' id='paste-simulator'>Sim paste</span>"
        }]
    });

    await page.evaluate(() => {
      document.addEventListener("copy", function (e: ClipboardEvent) {
        e.clipboardData!.setData("text/html", "<span>s\nd</span>");
        e.clipboardData!.setData("text/plain", "s d");
      });

      document.getElementById("copy-simulator")?.addEventListener("click", () => {
        document.execCommand("copy");
      });
      document.getElementById("paste-simulator")?.addEventListener("mouseover", () => {
        document.execCommand("paste"); // does not work in chrome
      });
    });

    // await page.waitForTimeout(200);
    await page.locator("span").getByText("Sim copy").click();

    await page.locator(".sv-string-editor").getByText("question1").click();

    await page.locator("span").getByText("Sim paste").hover();
    const questionTitle = await page.evaluate(() => (window as any).creator.survey.getAllQuestions()[0].title);
    expect(questionTitle).toEqual("s d");
  });

  test("Undo after new item add", async ({ page }) => {
    await getToolboxItemByText(page, "Radio Button Group").click();
    await page.locator(".svc-item-value-controls__add").filter({ visible: true }).nth(1).click();
    await expect(page.locator(".svc-item-value-controls__remove")).toHaveCount(4);
    await page.locator("button[title=Undo]").click();
    await expect(page.locator(".svc-item-value-controls__remove")).toHaveCount(3);
  });

  test("Check string editor focus on imagepicker caption click", async ({ page }) => {
    await explicitErrorHandler(page);
    await setJSON(page, {
      "elements": [
        {
          "type": "imagepicker",
          "name": "question1",
          "choices": [
            {
              "value": "lion",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
            }
          ],
          "showLabel": true
        }]
    });

    const svStringSelector = page.locator(".sv-string-editor").getByText("lion");

    await svStringSelector.click();
    await expect(svStringSelector).toBeFocused();
  });

  test("Check string editor with html", async ({ page }) => {
    await explicitErrorHandler(page);
    await page.evaluate(() => {
      (window as any).creator.onSurveyInstanceCreated.add(function (_editor: any, options: any) {
        if (options.area === "designer-tab") {
          options.survey.onTextMarkdown.add((_: any, opt: any) => {
            opt.html = opt.text;
          });
        }
      });
    });
    await setJSON(page, {
      "elements": [
        {
          "type": "text",
          title: "<p id='markup_html' style='color:rgb(255, 0, 255);'>Test</p>",
          "name": "question1",
        }]
    });

    const htmlMarkupSelector = page.locator(".sv-string-editor--html #markup_html").getByText("Test");

    await expect(htmlMarkupSelector).toHaveCSS("color", "rgb(255, 0, 255)");
  });

  test("Check string editor with html security", async ({ page }) => {
    await explicitErrorHandler(page);
    await page.evaluate(() => {
      (window as any).creator.onSurveyInstanceCreated.add(function (_editor: any, options: any) {
        if (options.area === "designer-tab") {
          options.survey.onTextMarkdown.add((_: any, opt: any) => {
            opt.html = opt.text.replaceAll("<", "[").replaceAll(">", "]");
          });
        }
      });
    });
    await setJSON(page, { "elements": [{ "type": "text", title: "<p>Test</p>", "name": "q1" }] });
    const htmlMarkupSelector = page.locator(".sv-string-editor--html").getByText("Test");
    await expect(htmlMarkupSelector).toBeVisible();

    let innerHTML = await page.evaluate(() => document.querySelector(".sd-question[data-name=q1] .sv-string-editor")!.innerHTML);
    expect(innerHTML).toEqual("[p]Test[/p]");
    await htmlMarkupSelector.click();
    innerHTML = await page.evaluate(() => document.querySelector(".sd-question[data-name=q1] .sv-string-editor")!.innerHTML);
    expect(innerHTML).toEqual("&lt;p&gt;Test&lt;/p&gt;");
    await page.keyboard.press("Enter");
    innerHTML = await page.evaluate(() => document.querySelector(".sd-question[data-name=q1] .sv-string-editor")!.innerHTML);
    expect(innerHTML).toEqual("[p]Test[/p]");
  });

  test("Check string editor focus does not throw error: #4459", async ({ page }) => {
    await explicitErrorHandler(page);
    await setJSON(page, { "elements": [{ "type": "checkbox", "name": "promoter_features", "colCount": 1, "choices": ["Item 1", "Item 2", "Item 3"] }] });
    await page.locator(".svc-question__content").click();
    await expect(page.locator(".sv-string-editor").getByText("Item 4", { exact: true })).toHaveCount(1);
    await expect(page.locator(".sv-string-editor").getByText("Item 5", { exact: true })).toHaveCount(0);

    await page.locator(".svc-item-value-controls__add").filter({ visible: true }).nth(1).click({ force: true });
    await expect(page.locator(".sv-string-editor").getByText("Item 5", { exact: true })).toHaveCount(1);
  });

  test("Check string editor composition update events", async ({ page }) => {
    await page.evaluate(() => {
      const property = (window as any).Survey.Serializer.findProperty("question", "title");
      property.maxLength = 2;
    });
    await setJSON(page, { "elements": [{ "type": "text", "name": "q", "maxLength": 1 }] });
    const editor = page.locator(".svc-question__content .svc-string-editor .sv-string-editor");
    await editor.click();
    await page.keyboard.press("a");
    await expect(editor.getByText("a", { exact: true })).toHaveCount(1);
    await page.keyboard.press("b");
    await expect(editor.getByText("ab", { exact: true })).toHaveCount(1);
    await page.keyboard.press("c");
    await expect(editor.getByText("ab", { exact: true })).toHaveCount(1);
    await page.keyboard.press("Escape");

    const options = { eventConstructor: "CompositionEvent" };

    await editor.dispatchEvent("compositionstart", options);

    await editor.click();
    await page.keyboard.press("a");
    await expect(editor.getByText("a", { exact: true })).toHaveCount(1);
    await page.keyboard.press("b");
    await expect(editor.getByText("ab", { exact: true })).toHaveCount(1);
    await page.keyboard.press("c");
    await expect(editor.getByText("abc", { exact: true })).toHaveCount(1);

    await editor.dispatchEvent("compositionend", options);

    await page.evaluate(() => {
      const property = (window as any).Survey.Serializer.findProperty("question", "title");
      property.maxLength = undefined;
    });
  });

  test("Check string-editor enter key", async ({ page }) => {
    await page.evaluate(() => {
      const property = (window as any).Survey.Serializer.findProperty("question", "title");
      property.maxLength = 2;
    });
    await setJSON(page, { "elements": [{ "type": "text", "name": "q", "maxLength": 1 }] });
    const descriptionQuerySelector = ".svc-designer-header .sd-description .svc-string-editor .sv-string-editor";
    const titleQuerySelector = ".svc-designer-header .sd-title .svc-string-editor .sv-string-editor";
    await handleShiftEnter(page, descriptionQuerySelector);
    await page.locator(descriptionQuerySelector).first().click();
    await page.keyboard.type("abc");
    await page.keyboard.press("Shift+Enter");
    await page.keyboard.type("def");
    await page.keyboard.press("Enter");

    const description = await page.evaluate(() => (window as any).creator.survey.description.trim().replace(/\n+/g, "\n"));
    expect(description).toEqual("abc\ndef");

    await handleShiftEnter(page, titleQuerySelector);
    await page.locator(titleQuerySelector).first().click();
    await page.keyboard.type("abc");
    await page.keyboard.press("Shift+Enter");
    await page.keyboard.type("def");
    await page.keyboard.press("Enter");

    const surveyTitle = await page.evaluate(() => (window as any).creator.survey.title.trim());
    expect(surveyTitle).toEqual("abcdef");
  });
});
