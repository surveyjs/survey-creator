import { url, test, expect, setJSON, setCreatorProp } from "../helper";

const title = "Property Grid";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Change question name and select another question", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].JSON = {
        "elements": [
          { "type": "checkbox", "name": "question1" },
          { "type": "checkbox", "name": "question2" }
        ]
      };
    });
    await page.locator("[data-name=\"question1\"]").click();
    await page.locator("div [data-name=\"name\"] input").click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("ABC");
    await page.locator("[data-name=\"question2\"]").click();
    await page.locator("[data-name=\"ABC\"]").click();
    await expect(page.locator("[data-name=\"ABC\"]")).toBeVisible();
  });

  test("Change rating auto-generate", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [{ "type": "rating", "name": "question1", }]
        }
      ]
    };
    await setJSON(page, json);

    const question1 = page.locator("[data-name=\"question1\"]");
    const choicesTab = page.locator("div[id$=ariaTitle][id^=pg-sp]").getByText("Rating Values", { exact: true });
    const items = page.locator("[data-name=\"rateValues\"]");

    await question1.click();
    await choicesTab.click();
    await expect(items).not.toBeVisible();
    await page.locator(".sv-button-group__item-caption").getByText("Manual", { exact: true }).click();
    await expect(items).toBeVisible();
    await page.locator(".sv-button-group__item-caption").getByText("Auto-generate", { exact: true }).click();
    await expect(items).not.toBeVisible();
  });

  test("Check survey settings button", async ({ page }) => {
    const question1 = page.locator("[data-name=\"q1\"]");
    const maskPage = page.locator('.svc-sidebar-tabs__item .sd-action[title="Input Mask Settings"]');
    await page.evaluate(() => {
      window["creator"].showOneCategoryInPropertyGrid = true;
    });
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [{ "type": "text", "name": "q1" }]
        }
      ]
    };
    await setJSON(page, json);
    await question1.click();
    await expect(maskPage).toBeVisible();
    await page.evaluate((val: string) => {
      window["creator"].survey.getQuestionByName("q1").inputType = val;
    }, "date");
    await expect(maskPage).not.toBeVisible();
    await page.evaluate((val: string) => {
      window["creator"].survey.getQuestionByName("q1").inputType = val;
    }, "text");
    await expect(maskPage).toBeVisible();
  });

  const titleJSON = {
    "elements": [
      { "type": "text", "name": "q1", "title": "Question 1 title" },
      { "type": "text", "name": "q2", "title": "Question 2 title" },
      { "type": "text", "name": "q3" }
    ]
  };

  test("Show and edit the question title", async ({ page }) => {
    await setJSON(page, titleJSON);

    const titleEditor = page.locator("[data-name=\"title\"] textarea");

    await page.locator("[data-name=\"q1\"]").click();
    await expect(titleEditor).toHaveValue("Question 1 title");

    await titleEditor.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("Question 1 new title");
    await page.keyboard.press("Tab");
    expect(await page.evaluate(() => window["creator"].survey.getQuestionByName("q1").title)).toEqual("Question 1 new title");

    // the editor has to show the title of the newly selected question
    await page.locator("[data-name=\"q2\"]").click();
    await expect(titleEditor).toHaveValue("Question 2 title");

    // a question without a title: empty editor with the question name as a placeholder
    await page.locator("[data-name=\"q3\"]").click();
    await expect(titleEditor).toHaveValue("");
    await expect(titleEditor).toHaveAttribute("placeholder", "q3");
  });

  test("Show the question title, showOneCategoryInPropertyGrid is true", async ({ page }) => {
    await setCreatorProp(page, "showOneCategoryInPropertyGrid", true);
    await setJSON(page, titleJSON);

    const titleEditor = page.locator("[data-name=\"title\"] textarea");

    await page.locator("[data-name=\"q1\"]").click();
    await expect(titleEditor).toHaveValue("Question 1 title");

    await page.locator("[data-name=\"q2\"]").click();
    await expect(titleEditor).toHaveValue("Question 2 title");

    await page.locator("[data-name=\"q3\"]").click();
    await expect(titleEditor).toHaveValue("");
    await expect(titleEditor).toHaveAttribute("placeholder", "q3");
  });
});
