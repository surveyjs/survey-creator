import { url, test, expect, setJSON, getTabbedMenuItemByText } from "../helper";

const title = "Translation tab";

test.describe(title, () => {
  test("add language", async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });

    // The table of the grid view: the header row is the first row of the page group, and the locale
    // columns are the Source and Target ones (the Question and String columns come first).
    const localeCells = ".st-translation-table__cell--source, .st-translation-table__cell--target";
    const languageHeaderColumnSelector = page.locator(".st-strings .st-translation-table .st-table__cell--header")
      .filter({ hasText: /(Source|Target): / });
    const stringsColumnSelector = page.locator(".st-strings .st-translation-table tr")
      .filter({ has: page.locator(localeCells) }).first().locator(localeCells);
    const languagesSelector = page.locator(".spg-checkbox");
    const languageDefaultText = page.locator(".spg-table__question-wrapper").getByText("Default (English)");
    const languageDeText = page.locator(".spg-table__question-wrapper").getByText("Deutsch");
    const checkedClassName = "sd-checkbox--checked";
    const disabledClassName = "sd-checkbox--readonly";

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
    await expect(languageHeaderColumnSelector.nth(0)).toHaveText("Source: Default (English)");
    await expect(stringsColumnSelector).toHaveCount(1);

    await expect(languagesSelector).toHaveCount(1);
    await expect(languagesSelector.nth(0)).toHaveClass(new RegExp(disabledClassName));
    await expect(languagesSelector.nth(0)).toHaveClass(new RegExp(checkedClassName));
    await expect(languageDefaultText).toBeVisible();

    await page.getByRole("button", { name: "Add Language" }).click();
    await page.locator("span").getByText("Deutsch").click();
    await expect(languageHeaderColumnSelector).toHaveCount(2);
    await expect(languageHeaderColumnSelector.nth(1)).toHaveText("Target: Deutsch");
    await expect(stringsColumnSelector).toHaveCount(2);
    await expect(languagesSelector).toHaveCount(2);
    await expect(languagesSelector.nth(0)).not.toHaveClass(new RegExp(disabledClassName));
    await expect(languagesSelector.nth(0)).toHaveClass(new RegExp(checkedClassName));
    await expect(languageDefaultText).toBeVisible();
    await expect(languagesSelector.nth(1)).toHaveClass(new RegExp(checkedClassName));
    await expect(languageDeText).toBeVisible();

    await languagesSelector.nth(1).click();
    await expect(languageHeaderColumnSelector).toHaveCount(1);
    await expect(stringsColumnSelector).toHaveCount(1);
    await expect(languagesSelector.nth(1)).not.toHaveClass(new RegExp(checkedClassName));

    await languagesSelector.nth(1).click();
    await expect(languageHeaderColumnSelector).toHaveCount(2);
    await expect(stringsColumnSelector).toHaveCount(2);
    await expect(languagesSelector.nth(1)).toHaveClass(new RegExp(checkedClassName));
  });
});
