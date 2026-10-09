import { url, test, expect } from "./helper";

const title = "Expression assistant";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    // A mock AI: the handler answers every request with the same checked expression.
    await page.evaluate(() => {
      const creator = window["creator"];
      creator.propertyGridNavigationMode = "buttons";
      window["aiRequests"] = [];
      creator.onGenerateExpression.add((_, options) => {
        window["aiRequests"].push({ kind: options.kind, prompt: options.prompt });
        options.callback({ expression: "{q1} = 'yes'", explanation: "Shown when q1 is yes." });
      });
      creator.JSON = {
        elements: [
          { type: "radiogroup", name: "q1", choices: ["yes", "no"] },
          { type: "text", name: "q2" }
        ]
      };
    });
  });

  test("Generate, review and Accept write the property; focus returns to the action", async ({ page }) => {
    await page.locator(".svc-question__content.svc-question__content--text").click();
    await page.getByTitle("Conditions").click();
    const editor = page.getByRole("textbox", { name: "Make the question visible if" });
    const action = page.getByRole("button", { name: "Write with AI" }).first();
    await expect(action).toBeVisible();
    await action.click();

    const dialog = page.locator(".sv-popup.svc-expression-assistant");
    await expect(dialog).toBeVisible();
    await dialog.getByRole("textbox", { name: "Describe what the expression should do" }).fill("show when q1 is yes");
    await dialog.getByRole("button", { name: "Generate" }).click();
    await expect(dialog.locator(".svc-expression-assistant__suggested")).toContainText("{q1} = 'yes'");
    await expect(dialog.locator(".svc-expression-assistant__explanation")).toContainText("Shown when q1 is yes.");
    await expect(dialog.locator("[role='status']")).toContainText("Review the suggested expression.");
    expect(await page.evaluate(() => window["aiRequests"])).toEqual([{ kind: "generate", prompt: "show when q1 is yes" }]);

    await dialog.getByRole("button", { name: "Accept" }).click();
    await expect(dialog).toBeHidden();
    await expect(editor).toHaveValue("{q1} = 'yes'");
    expect(await page.evaluate(() => window["creator"].survey.getQuestionByName("q2").visibleIf)).toBe("{q1} = 'yes'");
    // the dialog gives the focus back to the element that opened it
    await expect(action).toBeFocused();
  });

  test("Reject leaves the property unchanged", async ({ page }) => {
    await page.locator(".svc-question__content.svc-question__content--text").click();
    await page.getByTitle("Conditions").click();
    await page.getByRole("button", { name: "Write with AI" }).first().click();
    const dialog = page.locator(".sv-popup.svc-expression-assistant");
    await dialog.getByRole("textbox", { name: "Describe what the expression should do" }).fill("show when q1 is yes");
    await dialog.getByRole("button", { name: "Generate" }).click();
    await expect(dialog.locator(".svc-expression-assistant__suggested")).toBeVisible();
    await dialog.getByRole("button", { name: "Reject" }).click();
    await expect(dialog).toBeHidden();
    expect(await page.evaluate(() => window["creator"].survey.getQuestionByName("q2").visibleIf)).toBeFalsy();
  });
});
