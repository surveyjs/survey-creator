import { url, test, expect, setJSON, getListItemByText, getPropertyGridCategory } from "../helper";

const title = "Property Grid";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("visibleIf property in de localization", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"]
            },
            { "type": "text", "name": "question2" }
          ]
        }
      ]
    };
    await setJSON(page, json);
    await page.evaluate(() => {
      window["creator"].locale = "de";
    });

    const question1 = page.locator("[data-name=\"question1\"]");
    const generalTab = getPropertyGridCategory(page, "Allgemein");
    const logicTab = getPropertyGridCategory(page, "Logik");
    const editVisibleIf = page.getByRole("button", { name: "Bearbeiten" });
    const popup = page.locator(".sv-popup__body-content");
    const chooseQuestion = popup.locator(".sl-dropdown__value");
    const question2Text = popup.locator(".sd-input");
    const applyBtn = page.getByRole("button", { name: "Anwenden" });

    await question1.click();
    await generalTab.click();
    await logicTab.click();
    await editVisibleIf.first().click();
    await chooseQuestion.first().click();
    await getListItemByText(page, "question2").click();
    await question2Text.fill("val1");
    await applyBtn.first().click();
  });

  test("Matrix column editor in de localization", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "question1",
              "columns": [
                { "name": "Column 1" },
                { "name": "Column 2" },
                { "name": "Column 3" }
              ],
              "choices": [1, 2, 3, 4, 5],
              "rows": ["Row 1", "Row 2"]
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    await page.evaluate(() => {
      window["creator"].locale = "de";
    });

    const row1Column1Cell = page.locator(".sd-table__row").nth(0).locator(".svc-matrix-cell").filter({ visible: true }).nth(1);
    const editColumnButton = page.locator(".svc-matrix-cell__question-controls-button").filter({ visible: true });
    const popup = page.locator(".svc-matrix-cell__popup.sv-popup--modal-popup .sv-popup__body-content");
    const applyBtn = page.getByRole("button", { name: "Anwenden" });
    const cancelBtn = page.getByRole("button", { name: "Abbrechen" });

    await expect(page.locator(".svc-question__content")).toBeVisible();
    await row1Column1Cell.hover();
    await editColumnButton.first().click();

    await expect(popup).toBeVisible();
    await expect(applyBtn).toBeVisible();
    await expect(cancelBtn).toBeVisible();

    await applyBtn.click();
    await expect(popup).not.toBeVisible();
  });
});
