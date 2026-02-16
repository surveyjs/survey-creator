import { url, test, expect, setJSON, getTabbedMenuItemByText } from "../helper";

const title = "Translation tab";

test.describe(title, () => {
  test("add language", async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });

    const languageHeaderColumnSelector = page.locator(".st-strings-header table tr").first().locator("th");
    const stringsColumnSelector = page.locator(".st-strings table tr").first().locator("td");
    const languagesSelector = page.locator(".spg-checkbox");
    const languageDefaultText = page.locator(".spg-table__question-wrapper").getByText("Default (English)");
    const languageDeText = page.locator(".spg-table__question-wrapper").getByText("Deutsch");
    const checkedClassName = "spg-checkbox--checked";
    const disabledClassName = "spg-checkbox--disabled";

    const json = {
      elements: [
        {
          type: "checkbox",
          name: "string_editor",
          choices: ["Item 1", "Item 2", "Item 3"]
        }
      ]
    };
    await setJSON(page, json);

    await getTabbedMenuItemByText(page, "Translation").click();

    await expect(languageHeaderColumnSelector).toHaveCount(1);
    await expect(stringsColumnSelector).toHaveCount(2);

    await expect(languagesSelector).toHaveCount(1);
    await expect(languagesSelector.nth(0)).toHaveClass(new RegExp(disabledClassName));
    await expect(languagesSelector.nth(0)).toHaveClass(new RegExp(checkedClassName));
    await expect(languageDefaultText).toBeVisible();

    await page.getByRole("button", { name: "Add Language" }).click();
    await page.locator("span").getByText("Deutsch").click();
    await expect(languageHeaderColumnSelector).toHaveCount(2);
    await expect(stringsColumnSelector).toHaveCount(3);
    await expect(languagesSelector).toHaveCount(2);
    await expect(languagesSelector.nth(0)).toHaveClass(new RegExp(disabledClassName));
    await expect(languagesSelector.nth(0)).toHaveClass(new RegExp(checkedClassName));
    await expect(languageDefaultText).toBeVisible();
    await expect(languagesSelector.nth(1)).toHaveClass(new RegExp(checkedClassName));
    await expect(languageDeText).toBeVisible();

    await languagesSelector.nth(1).click();
    await expect(languageHeaderColumnSelector).toHaveCount(1);
    await expect(stringsColumnSelector).toHaveCount(2);
    await expect(languagesSelector.nth(1)).not.toHaveClass(new RegExp(checkedClassName));

    await languagesSelector.nth(1).click();
    await expect(languageHeaderColumnSelector).toHaveCount(2);
    await expect(stringsColumnSelector).toHaveCount(3);
    await expect(languagesSelector.nth(1)).toHaveClass(new RegExp(checkedClassName));
  });
});
