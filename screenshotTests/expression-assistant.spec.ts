import { url, test, expect, compareScreenshot } from "./helper";

const title = "Expression assistant Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Expression assistant: review with a warning", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // A mock AI answering with a value that is not among the choices: the check reports a warning
    await page.evaluate(() => {
      const creator = window["creator"];
      creator.propertyGridNavigationMode = "buttons";
      creator.onAIExpressionRequest.add((_, options) => {
        options.callback({ data: { expression: "{q1} = 'maybe'", explanation: "Shown when the answer to q1 is maybe." } });
      });
      creator.JSON = {
        elements: [
          { type: "radiogroup", name: "q1", choices: ["yes", "no"] },
          { type: "text", name: "q2" }
        ]
      };
    });
    await page.locator(".svc-question__content.svc-question__content--text").click();
    await page.getByTitle("Conditions").click();
    await page.getByRole("button", { name: "Write with AI" }).first().click();
    const dialog = page.locator(".sv-popup.svc-expression-assistant");
    const description = dialog.getByRole("textbox", { name: "Describe what the expression should do" });
    // The dialog focuses its first input, the description, 100 ms after it shows. Wait for that before clicking
    // Generate, or the focus lands on the description after the review renders and shows in the screenshot.
    await expect(description).toBeFocused();
    await description.fill("show when q1 is maybe");
    await dialog.getByRole("button", { name: "Generate" }).click();
    await dialog.locator(".svc-expression-assistant__findings").waitFor();
    await compareScreenshot(page, dialog.locator(".sv-popup__container"), "expression-assistant-review-warning.png");
  });
});
