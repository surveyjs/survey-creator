import { url, test, expect, setJSON, getJSON, getPropertyGridCategory } from "../helper";

const title = "Property Grid";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Rename choice", async ({ page }) => {
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
    await setJSON(page, json);

    const expectedNewChoiceName = "newItem1";
    const question1 = page.locator("[data-name=\"question1\"]");
    const choicesTab = getPropertyGridCategory(page, "Choice Options");
    const item1PGEditorInput = page.locator("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0).locator("td").nth(1).locator("input");

    await question1.click();
    await choicesTab.click();
    await item1PGEditorInput.fill(expectedNewChoiceName);
    await page.keyboard.press("Enter");

    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].choices[0]).toEqual(expectedNewChoiceName);
  });

  test("https://github.com/surveyjs/survey-library/issues/4170, responsiveness bug in property grid ", async ({ page }) => {
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
    await setJSON(page, json);
    const question1 = page.locator("[data-name=\"question1\"]");
    const choicesTabTitle = getPropertyGridCategory(page, "Choice Options");
    const clearButton = page.locator(".spg-action-button[title='Clear']");
    const addButton = page.locator(".spg-action-button[title='Add new choice']");

    await question1.click();
    await choicesTabTitle.click();
    await clearButton.click();
    await addButton.click();
    await expect(clearButton).toBeVisible();
  });

  test("Load choices by custom button in fast edit", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].onPropertyGridShowPopup.add((sender, options) => {
        const editor = options.popupEditor;
        options.popupModel.footerToolbar.addAction({
          id: "fast-entry-custom",
          innerCss: "sv-popup__body-footer-item sv-popup__button",
          title: "Set Items",
          visibleIndex: 2,
          action: () => {
            editor.comment.value = "1|Item 1\n2|Item 2\ncustom-3|Item 3\n4|Item 4\n5|Item 5";
          }
        });
      });
    });
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
    await setJSON(page, json);
    const question1 = page.locator("[data-name=\"question1\"]");
    const choicesTabTitle = getPropertyGridCategory(page, "Choice Options");
    const fastEntryButton = page.locator(".spg-action-button[title='Edit']");
    const setItemsButton = page.getByRole("button", { name: "Set Items" });
    const applyButton = page.getByRole("button", { name: "Apply" });
    const item5Text = page.locator("input[placeholder='custom-3']");

    await question1.click();
    await choicesTabTitle.click();
    await fastEntryButton.click();
    await setItemsButton.click();
    await applyButton.click();
    await expect(item5Text).toBeVisible();
    await expect(item5Text).toHaveValue("Item 3");
  });

  test("Enter image link after choice added via property grid", async ({ page }) => {
    const json = {
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "imagepicker",
              "name": "question1",
              "choices": [
                {
                  "value": "Image 1",
                  "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                },
                {
                  "value": "Image 2",
                  "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                },
                {
                  "value": "Image 3",
                  "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                },
                {
                  "value": "Image 4",
                  "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                }
              ],
              "imageFit": "cover"
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    const question1 = page.locator("[data-name=\"question1\"]");
    const choicesTabTitle = getPropertyGridCategory(page, "Choice Options");
    const addButton = page.locator(".spg-action-button[title='Add new choice']");
    const input = page.getByRole("textbox", { name: "row 5, column Image or video" });

    await question1.click();
    await choicesTabTitle.click();
    await addButton.click();
    await expect(page.locator(" .sd-imagepicker__no-image")).toBeVisible();
    await input.fill("https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg");
    await expect(page.locator(" .sd-imagepicker__no-image")).not.toBeVisible();
  });
});
