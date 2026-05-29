import { url, test, expect, setJSON, getPropertyGridCategory, generalGroupName } from "../helper";

const title = "Property Grid";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Check spinedit arrows click", async ({ page }) => {
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontSize",
        default: 16,
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontSize";
        },
        getJSON: function (obj, prop, options) {
          return { type: "spinedit", unit: "px" };
        }
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    const questionLocator = page.locator("div[data-name='fontSize']");
    const arrowButtonLocator = questionLocator.locator(".sd-formbox__group .sd-action");
    await arrowButtonLocator.first().click();
    const fontSize1 = await page.evaluate(() => (<any>window).creator.survey.fontSize);
    expect(fontSize1).toBe(15);
    await arrowButtonLocator.last().click();
    const fontSize2 = await page.evaluate(() => (<any>window).creator.survey.fontSize);
    expect(fontSize2).toBe(16);
  });
  test("Check spinedit arrows click changeValueOnPressing: false", async ({ page }) => {
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontSize",
        default: 16,
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontSize";
        },
        getJSON: function (obj, prop, options) {
          return { type: "spinedit", unit: "px", changeValueOnPressing: false };
        }
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    const questionLocator = page.locator("div[data-name='fontSize']");
    const arrowButtonLocator = questionLocator.locator(".sd-formbox__group .sd-action");
    await arrowButtonLocator.first().click();
    const fontSize1 = await page.evaluate(() => (<any>window).creator.survey.fontSize);
    expect(fontSize1).toBe(15);
    await arrowButtonLocator.last().click();
    const fontSize2 = await page.evaluate(() => (<any>window).creator.survey.fontSize);
    expect(fontSize2).toBe(16);
  });

  test("Check spinedit editor applies value on enter", async ({ page }) => {
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontSize",
        default: 16,
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontSize";
        },
        getJSON: function (obj, prop, options) {
          return { type: "spinedit", unit: "px" };
        }
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    const questionLocator = page.locator("div[data-name='fontSize']");
    const inputLocator = questionLocator.locator(".sd-formbox__input");
    await inputLocator.click();
    await inputLocator.fill("24");
    await page.keyboard.press("Enter");
    const fontSize1 = await page.evaluate(() => (<any>window).creator.survey.fontSize);
    expect(fontSize1).toBe(24);
    await inputLocator.click();
    await inputLocator.fill("16");
    await page.keyboard.press("Enter");
    const fontSize2 = await page.evaluate(() => (<any>window).creator.survey.fontSize);
    expect(fontSize2).toBe(16);
  });
});
