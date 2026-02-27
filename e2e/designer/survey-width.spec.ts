import {
  url,
  test,
  expect,
  setJSON,
  getToolboxItemByText,
} from "../helper";

const title = "Width of survey on the designer surface";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Change survey width 1", async ({ page }) => {
    const json = {
      "widthMode": "static",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "question1",
              "columns": [{ name: "col1" }, { name: "col2" }, { name: "col3" }],
              "rows": ["row1", "row2", "row3"]
            }
          ]
        }
      ]
    };
    await setJSON(page, json);

    const widthEditorInput = page.locator("[data-name=\"width\"]").locator("input");

    await widthEditorInput.click();
    await widthEditorInput.fill("755px");
    await page.keyboard.press("Tab");

    const container = page.locator(".sd-container-modern");
    await expect(await container.evaluate((el: HTMLElement) => el.clientWidth)).toEqual(755);

    await widthEditorInput.click();
    await widthEditorInput.fill("10000px");
    await page.keyboard.press("Tab");

    const width = await container.evaluate((el: HTMLElement) => el.clientWidth);
    expect(width).toBeGreaterThanOrEqual(1175);
    expect(width).toBeLessThanOrEqual(1200);
  });

  test("Change survey width 2", async ({ page }) => {
    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();

    await expect(page.locator(".svc-tab-designer_content .sd-container-modern")).toHaveClass(/sd-container-modern--static/);

    await getToolboxItemByText(page, "Single-Select Matrix").hover();
    await getToolboxItemByText(page, "Single-Select Matrix").click();

    await expect(page.locator(".svc-tab-designer_content .sd-container-modern")).toHaveClass(/sd-container-modern--responsive/);
  });
});
