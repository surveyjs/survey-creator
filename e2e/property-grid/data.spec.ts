import { url, test, expect, setJSON, getJSON, getPropertyGridCategory, generalGroupName } from "../helper";

const title = "Property Grid";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Default value", async ({ page }) => {
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
    const dataTab = getPropertyGridCategory(page, "Data");

    await question1.click();
    await dataTab.click();
    await page.locator("span").getByText("Set Default Answer", { exact: true }).click();
    await page.locator(".sv-popup--modal-popup span").getByText("Item 1", { exact: true }).click();
    await page.locator(".sv-popup--modal-popup button").getByText("Apply", { exact: true }).click();
    await expect(page.locator("span").getByText("Change Default Answer", { exact: true })).toBeVisible();
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].defaultValue).toEqual(["Item 1"]);
    await page.locator("span").getByText("Clear", { exact: true }).click();
    await expect(page.locator("span").getByText("Set Default Answer", { exact: true })).toBeVisible();
    const resultJson2 = await getJSON(page);
    expect(resultJson2.pages[0].elements[0].defaultValue).toEqual(undefined);
  });

  test("Default value & readonly", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "rating",
              "name": "question1",
              "defaultValue": 3
            }
          ]
        }
      ]
    };
    await setJSON(page, json);
    await page.evaluate(() => {
      window["creator"].readOnly = true;
    });

    const question1 = page.locator("[data-name=\"question1\"]");
    const dataTab = getPropertyGridCategory(page, "Data");

    await question1.click();
    await dataTab.click();
    await expect(page.locator("span").getByText("Clear", { exact: true })).not.toBeVisible();
    await page.locator("span").getByText("Change Default Answer", { exact: true }).click();
    await page.locator(".sv-popup__body-header").getByText("Default Answer", { exact: true }).click();
    await expect(page.locator(".sv-popup--modal-popup button").getByText("Apply", { exact: true })).not.toBeVisible();
    await page.locator(".sv-popup--modal-popup button").getByText("Cancel", { exact: true }).click();
    await expect(page.locator("span").getByText("Change Default Answer", { exact: true })).toBeVisible();
  });

  test("Impossible to specify the default value for a masked Date field", async ({ page }) => {
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "title": "Question 1",
              "clearIfInvisible": "none",
              "maskType": "datetime",
              "maskSettings": {
                "pattern": "mm/dd/yyyy"
              }
            }
          ]
        }
      ]
    };
    await setJSON(page, json);

    const question1 = page.locator("[data-name=\"question1\"]");
    const dataTab = getPropertyGridCategory(page, "Data");

    await question1.click({ position: { x: 100, y: 10 } });
    await getPropertyGridCategory(page, generalGroupName).click();
    await dataTab.click();
    await page.locator("span").getByText("Set Default Answer", { exact: true }).click();
    await page.waitForTimeout(1000);
    await page.keyboard.press("2");
    await page.keyboard.press("4");
    await expect(page.locator(".sv-popup--modal-popup input")).toHaveValue("02/04/yyyy");
    await page.keyboard.press("1");
    await page.keyboard.press("9");
    await page.keyboard.press("9");
    await page.keyboard.press("8");
    await expect(page.locator(".sv-popup--modal-popup input")).toHaveValue("02/04/1998");
    await page.locator(".sv-popup--modal-popup button").getByText("Apply", { exact: true }).click();
    await expect(page.locator("span").getByText("Change Default Answer", { exact: true })).toBeVisible();

    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].defaultValue).toEqual("1998-02-04");
  });
});
