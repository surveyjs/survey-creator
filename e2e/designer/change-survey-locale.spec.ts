import { url, test, expect, setJSON, setSurveyProp } from "../helper";

const title = "Change survey locale";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Change survey locale", async ({ page }) => {
    const dropdownInput = page.locator(".sd-input.sd-dropdown input").first();
    const json = { elements: [{ type: "dropdown", name: "question1", choices: ["Item 1", "Item 2", "Item 3"] }] };
    await setJSON(page, json);

    await expect(dropdownInput).toHaveAttribute("placeholder", "Select...");
    await setSurveyProp(page, "locale", "de");
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    await expect(dropdownInput).toHaveAttribute("placeholder", "Bitte auswählen...");
    await setSurveyProp(page, "locale", "es");
    await expect(dropdownInput).toHaveAttribute("placeholder", "Seleccione...");
    await setSurveyProp(page, "locale", "it");
    await expect(dropdownInput).toHaveAttribute("placeholder", "Scegli...");
    await setSurveyProp(page, "locale", "");
    await expect(dropdownInput).toHaveAttribute("placeholder", "Select...");
  });
});
