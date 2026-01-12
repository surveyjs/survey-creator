import { url, test, expect, setJSON, getPropertyGridCategory, generalGroupName } from "../helper";

const title = "Custom Property Grid Editors";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test("Check color editor key navigation", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontColor1",
        category: "general",
        visibleIndex: 0
      });
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontColor2",
        category: "general",
        visibleIndex: 1
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontColor1" || prop.name === "fontColor2";
        },
        getJSON: function (obj, prop, options) {
          return {
            type: "color", choices: [{ text: "Contrast", value: "#673AB0" }, { text: "Plain", value: "673AB0" }, { text: "Simple", value: "#55B534" }],
          };
        }
      });
    });
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    await page.locator(".spg-input-container__input").first().click();
    await page.keyboard.press("Tab");
    const activeElementTagName = await page.evaluate(() => document.activeElement?.tagName);
    expect(activeElementTagName).toEqual("INPUT");
    const isActiveElementFontColor2 = await page.evaluate(() => document.activeElement == document.querySelector("[data-name='fontColor2'] .spg-input-container__input"));
    expect(isActiveElementFontColor2).toBeTruthy();
    await page.keyboard.press("Shift+Tab");
    const activeElementTagName2 = await page.evaluate(() => document.activeElement?.tagName);
    expect(activeElementTagName2).toEqual("INPUT");
    const isActiveElementFontColor1 = await page.evaluate(() => document.activeElement == document.querySelector("[data-name='fontColor1'] .spg-input-container__input"));
    expect(isActiveElementFontColor1).toBeTruthy();
    await expect(page.locator("div[data-name='fontColor1'] .sv-popup")).not.toBeVisible();
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(1000);
    await expect(page.locator("div[data-name='fontColor1'] .sv-popup")).toBeVisible();
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await expect(page.locator("div[data-name='fontColor1'] .spg-input-container__input")).toHaveValue("#55B534");
  });

  test("Check spinedit editor key navigation", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontSize1",
        default: 16,
        category: "general",
        visibleIndex: 0
      }
      );
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontSize2",
        default: 16,
        category: "general",
        visibleIndex: 1
      }
      );
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontSize1" || prop.name === "fontSize2";
        },
        getJSON: function (obj, prop, options) {
          return { type: "spinedit", unit: "px" };
        }
      });
    });
    await setJSON(page, {});
    const firstSpinInputSelector = page.locator("[data-name='fontSize1'] .spg-input-container__input");
    await getPropertyGridCategory(page, generalGroupName).click();
    await page.locator(".spg-input-container__input").first().click();
    const selectionStart = await page.evaluate(() => (<HTMLInputElement>document.activeElement).selectionStart);
    const selectionEnd = await page.evaluate(() => (<HTMLInputElement>document.activeElement).selectionEnd);
    expect(selectionStart).toEqual(2);
    expect(selectionEnd).toEqual(2);
    await page.keyboard.press("Tab");
    const activeElementTagName = await page.evaluate(() => document.activeElement?.tagName);
    expect(activeElementTagName).toEqual("INPUT");
    const isActiveElementFontSize2 = await page.evaluate(() => document.activeElement == document.querySelector("[data-name='fontSize2'] .spg-input-container__input"));
    expect(isActiveElementFontSize2).toBeTruthy();
    const selectionStart2 = await page.evaluate(() => (<HTMLInputElement>document.activeElement).selectionStart);
    const selectionEnd2 = await page.evaluate(() => (<HTMLInputElement>document.activeElement).selectionEnd);
    expect(selectionStart2).toEqual(0);
    expect(selectionEnd2).toEqual(2);
    await page.keyboard.press("Shift+Tab");
    const activeElementTagName2 = await page.evaluate(() => document.activeElement?.tagName);
    expect(activeElementTagName2).toEqual("INPUT");
    const isActiveElementFontSize1 = await page.evaluate(() => document.activeElement == document.querySelector("[data-name='fontSize1'] .spg-input-container__input"));
    expect(isActiveElementFontSize1).toBeTruthy();
    const selectionStart3 = await page.evaluate(() => (<HTMLInputElement>document.activeElement).selectionStart);
    const selectionEnd3 = await page.evaluate(() => (<HTMLInputElement>document.activeElement).selectionEnd);
    expect(selectionStart3).toEqual(0);
    expect(selectionEnd3).toEqual(2);
    await page.keyboard.press("ArrowDown");
    await expect(firstSpinInputSelector).toHaveValue("15");
    await page.keyboard.press("ArrowUp");
    await expect(firstSpinInputSelector).toHaveValue("16");
  });

  test("Check file editor key navigation", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "image",
        category: "general",
        visibleIndex: 0,
        default: "some_url"
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "image";
        },
        getJSON: function (obj, prop, options) {
          return { type: "fileedit" };
        }
      });
    });
    const colorInputSelector = page.locator("div[data-name='image'] .spg-input-container__input");
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    await colorInputSelector.click();
    await expect(colorInputSelector).toHaveValue("some_url");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const ariaLabel = await page.evaluate(() => document.activeElement?.getAttribute("aria-label"));
    expect(ariaLabel).toEqual("Select File");
    await page.keyboard.press("Shift+Tab");
    await page.keyboard.press("Enter");
    await expect(colorInputSelector).toHaveValue("");
  });

  test("Check file editor with disable input", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1920 });
    await page.evaluate(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "image",
        category: "general",
        visibleIndex: 0,
        default: "some_url"
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "image";
        },
        getJSON: function (obj, prop, options) {
          return { type: "fileedit", disableInput: true };
        }
      });
    });
    const textSelector = page.locator("div[data-name='image'] input[type='text']");
    const fileSelector = page.locator("div[data-name='image'] input[type='file']");
    await setJSON(page, {});
    await getPropertyGridCategory(page, generalGroupName).click();
    await expect(textSelector).toHaveAttribute("disabled", "");
    await expect(fileSelector).not.toHaveAttribute("disabled", "");
    await page.evaluate(() => { (window as any).creator.propertyGrid.getQuestionByName("image").disableInput = false; });
    await expect(textSelector).not.toHaveAttribute("disabled", "");
    await expect(fileSelector).not.toHaveAttribute("disabled", "");
    await page.evaluate(() => { (window as any).creator.propertyGrid.getQuestionByName("image").readOnly = true; });
    await expect(textSelector).toHaveAttribute("disabled", "");
    await expect(fileSelector).toHaveAttribute("disabled", "");
    await page.evaluate(() => {
      (window as any).creator.propertyGrid.getQuestionByName("image").readOnly = false;
      (window as any).creator.propertyGrid.getQuestionByName("image").disableInput = true;
    });
    await expect(textSelector).toHaveAttribute("disabled", "");
    await expect(fileSelector).not.toHaveAttribute("disabled", "");
  });
});
