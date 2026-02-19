import {
  url,
  test,
  expect,
  setJSON,
  generalGroupName,
  getPropertyGridCategory,
} from "../helper";

const title = "String Editor 1";

const json = { elements: [{ type: "checkbox", name: "string_editor", choices: ["Item 1", "Item 2", "Item 3"] }] };

const json2 = { elements: [{ type: "checkbox", name: "string_editor", description: "desc", choices: ["Item 1", "Item 2", "Item 3"] }] };

const json3 = {
  elements: [
    { type: "checkbox", name: "string_editor", description: "desc", choices: ["Item 1", "Item 2", "Item 3"] },
    {
      type: "matrixdropdown",
      name: "question1",
      columns: [{ name: "Column 1" }, { name: "Column 2" }, { name: "Column 3" }],
      rows: ["Row 1", "Row 2"],
      choices: [1, 2, 3, 4, 5],
    }
  ]
};

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Edit question title", async ({ page }) => {
    await setJSON(page, json);
    const questionTitle = json.elements[0].name;
    const svStringSelector = page.locator(".sv-string-editor").getByText(questionTitle);
    const prefix = "prefix";

    await getPropertyGridCategory(page, generalGroupName).click();
    await svStringSelector.click();
    await page.keyboard.press("Home");
    await page.keyboard.type(prefix);
    await page.keyboard.press("Escape");
    expect(await page.locator("[data-name='title']").locator("textarea").inputValue()).toEqual("");

    await svStringSelector.click();
    await svStringSelector.click();
    await page.keyboard.press("Home");
    await page.keyboard.type(prefix);
    await page.keyboard.press("Control+Enter");
    expect(await page.locator("[data-name='title']").locator("textarea").inputValue()).toEqual(prefix + questionTitle);

    await svStringSelector.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Delete");
    await page.keyboard.press("Control+Enter");
    await expect(page.locator(".sv-string-editor").getByText(questionTitle)).toBeVisible();

    await svStringSelector.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Delete");
    await page.keyboard.press("Control+Enter");
    await expect(page.locator(".sv-string-editor").getByText(questionTitle)).toBeVisible();
  });

  test("Check string editor visibility", async ({ page }) => {
    await setJSON(page, json);

    await expect(page.locator(".sd-question__description .svc-string-editor")).not.toBeVisible();

    const newJson = JSON.parse(JSON.stringify(json));
    newJson.elements[0]["description"] = "Desc";
    await setJSON(page, newJson);
    await expect(page.locator(".sd-question__description .svc-string-editor")).toBeVisible();

    await page.evaluate((jsonArg) => {
      (window as any).Survey.Serializer.findProperty("question", "description").placeholder = "Q placeholder";
      (window as any).creator.JSON = jsonArg;
    }, json);
    await expect(page.locator(".sd-question__description .svc-string-editor")).toBeVisible();
  });

  test("Check string editor visibility on defferent ReadOnly cases", async ({ page }) => {
    const json_t = { elements: [{ type: "checkbox", name: "q1", choices: ["Item 1", "Item 2"] }, { type: "radiogroup", name: "q2", choices: ["Item 3", "Item 4"] }] };
    await setJSON(page, json_t);

    const itemSelector = ".svc-item-value__item .svc-string-editor .sv-string-editor";
    expect(await page.locator(itemSelector).getByText("Item 1").nth(0).getAttribute("contenteditable")).toEqual("true");
    expect(await page.locator(itemSelector).getByText("Item 2").nth(0).getAttribute("contenteditable")).toEqual("true");
    expect(await page.locator(itemSelector).getByText("Item 3").nth(1).getAttribute("contenteditable")).toEqual("true");
    expect(await page.locator(itemSelector).getByText("Item 4").nth(0).getAttribute("contenteditable")).toEqual("true");

    await page.evaluate(() => {
      (window as any).Survey.Serializer.getProperty("itemvalue", "text").readOnly = true;
    });
    await setJSON(page, json_t);

    expect(await page.locator(itemSelector).getByText("Item 1").nth(0).getAttribute("contenteditable")).toEqual("false");
    expect(await page.locator(itemSelector).getByText("Item 2").nth(0).getAttribute("contenteditable")).toEqual("false");
    expect(await page.locator(itemSelector).getByText("Item 3").nth(1).getAttribute("contenteditable")).toEqual("false");
    expect(await page.locator(itemSelector).getByText("Item 4").nth(0).getAttribute("contenteditable")).toEqual("false");

    await page.evaluate(() => {
      (window as any).Survey.Serializer.getProperty("itemvalue", "text").readOnly = false;
      (window as any).Survey.Serializer.getProperty("checkbox", "choices").readOnly = true;
    });
    await setJSON(page, json_t);

    expect(await page.locator(itemSelector).getByText("Item 1").nth(0).getAttribute("contenteditable")).toEqual("false");
    expect(await page.locator(itemSelector).getByText("Item 2").nth(0).getAttribute("contenteditable")).toEqual("false");
    expect(await page.locator(itemSelector).getByText("Item 3").nth(1).getAttribute("contenteditable")).toEqual("true");
    expect(await page.locator(itemSelector).getByText("Item 4").nth(0).getAttribute("contenteditable")).toEqual("true");

    await page.evaluate(() => {
      (window as any).Survey.Serializer.getProperty("checkbox", "choices").readOnly = false;
      (window as any).creator.onPropertyGetReadOnly.add(function (editor: unknown, options: { element: { getType: () => string }, propertyName: string, readOnly: boolean }) {
        if (options.element.getType() === "radiogroup" && options.propertyName == "choices")
          options.readOnly = true;
      });
    });
    await setJSON(page, json_t);

    expect(await page.locator(itemSelector).getByText("Item 1").nth(0).getAttribute("contenteditable")).toEqual("true");
    expect(await page.locator(itemSelector).getByText("Item 2").nth(0).getAttribute("contenteditable")).toEqual("true");
    expect(await page.locator(itemSelector).getByText("Item 3").nth(1).getAttribute("contenteditable")).toEqual("false");
    expect(await page.locator(itemSelector).getByText("Item 4").nth(0).getAttribute("contenteditable")).toEqual("false");
  });

  test("Check creator events on string editor", async ({ page }) => {
    const msg = "Description length can not be greater than 10 characters";
    await page.evaluate(({ jsonArg, msgArg }) => {
      (window as any).creator.JSON = jsonArg;
      (window as any).creator.onPropertyDisplayCustomError.add(function (sender: unknown, options: { element: { isQuestion: boolean }, propertyName: string, value: string, error: string }) {
        if (options.element.isQuestion && options.propertyName == "description" && options.value.length > 10) {
          options.error = msgArg;
        }
      });
    }, { jsonArg: json2, msgArg: msg });

    const svStringSelector = page.locator(".sv-string-editor").getByText("desc", { exact: true });
    const errorNotifyBalloonSelector = page.locator(".svc-notifier.svc-notifier--error").first();
    await svStringSelector.click();
    await svStringSelector.click();
    await page.keyboard.press("Home");
    await page.keyboard.type("1234567890");
    await page.keyboard.press("Enter");
    await expect(errorNotifyBalloonSelector).toHaveText(msg);
    await expect(page.locator(".sd-question__description .svc-string-editor")).toHaveClass(/svc-string-editor--error/);
    const hasSelection = await page.evaluate(() => (window?.getSelection()?.rangeCount ?? 0) > 0);
    expect(hasSelection).toBe(true);
  });

  test("Check string editor on isRequired", async ({ page }) => {
    const msg = "Please enter a value";
    await page.evaluate(({ jsonArg }) => {
      (window as any).Survey.Serializer.findProperty("question", "description").isRequired = true;
      (window as any).creator.JSON = jsonArg;
    }, { jsonArg: json2 });

    const svStringSelector = page.locator(".sv-string-editor").getByText("desc", { exact: true });
    const errorNotifyBalloonSelector = page.locator(".svc-notifier.svc-notifier--error").first();

    await svStringSelector.click();
    await expect(svStringSelector).toBeFocused();
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Delete");
    await page.keyboard.press("Enter");
    await expect(errorNotifyBalloonSelector).toHaveText(msg);
    await expect(page.locator(".sd-question__description .svc-string-editor")).toHaveClass(/svc-string-editor--error/);
    const hasSelection = await page.evaluate(() => (window?.getSelection()?.rangeCount ?? 0) > 0);
    expect(hasSelection).toBe(true);
  });

  test("Check string editor not loosing focus and selects underlying items", async ({ page }) => {
    await setJSON(page, json3);

    const svStringSelector = page.locator(".sv-string-editor").getByText("string_editor", { exact: true });
    const svItemSelector = page.locator(".sv-string-editor").getByText("Item 1");

    await svStringSelector.click();
    await expect(svStringSelector).toBeFocused();
    await expect(page.locator(".svc-side-bar__container-header .sv-action-bar-item__title").getByText("string_editor")).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(page.locator(".sv-string-editor").getByText("desc").first()).toBeFocused();
    await expect(page.locator(".svc-side-bar__container-header .sv-action-bar-item__title").getByText("string_editor")).toBeVisible();
    await svItemSelector.click();
    await expect(page.locator(".svc-side-bar__container-header .sv-action-bar-item__title").getByText("string_editor")).toBeVisible();
    await expect(svItemSelector).toBeFocused();
  });

  test("Check string editor inplaceEditChoiceValues property", async ({ page }) => {
    await setJSON(page, json);

    const svItemSelector = page.locator(".sv-string-editor").getByText("Item 1");

    await svItemSelector.click();
    await svItemSelector.click();
    await page.keyboard.press("Home");
    await page.keyboard.type("new");
    await page.keyboard.press("Enter");
    const itemValue1 = await page.evaluate(() => {
      const itemvalue = (window as any).creator.survey.getQuestionByName("string_editor").choices[0];
      return { value: itemvalue.value, text: itemvalue.text };
    });
    expect(itemValue1).toEqual({ value: "Item 1", text: "newItem 1" });

    await page.evaluate(() => {
      (window as any).creator.inplaceEditChoiceValues = true;
    });

    await page.locator(".sv-string-editor").getByText("newItem 1").click();
    await page.locator(".sv-string-editor").getByText("newItem 1").click();
    await page.keyboard.press("Home");
    await page.keyboard.type("Ok");
    await page.keyboard.press("Enter");
    const itemValue2 = await page.evaluate(() => {
      const itemvalue = (window as any).creator.survey.getQuestionByName("string_editor").choices[0];
      return { value: itemvalue.value, text: itemvalue.text };
    });
    expect(itemValue2).toEqual({ value: "OknewItem 1", text: "newItem 1" });
  });
});
