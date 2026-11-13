import { base64image } from "../../resources/base64images";
import {
  url,
  test,
  expect,
  setJSON,
} from "../helper";

const title = "Logo Image";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Set logo in property grid and remove it in designer", async ({ page }) => {
    await setJSON(page, { pages: [{ name: "page1" }] });
    const logoSection = await page.evaluate(() => {
      return window["creator"].getLocString("pe.tabs.logo");
    });
    await page.locator(".spg-title").filter({ hasText: logoSection }).click();
    await page.locator("[data-name='logo']").locator("input[type='text']").fill(base64image);
    await page.keyboard.press("Tab");
    await expect(page.locator(`img[src="${base64image}"]`)).toBeVisible();
  });

  test("Set logo in designer, change it and check it in test tab", async ({ page }) => {
    await setJSON(page, { pages: [{ name: "page1", elements: [{ type: "text", name: "question1" }] }] });
    await page.locator(".svc-logo-image input[type=file]").setInputFiles("../../resources/logo.jpg");
    await page.locator(".svc-logo-image-placeholder svg").click();

    const logoImage = await page.evaluate(() => {
      return "img." + window["creator"].survey.css.logoImage;
    });
    await expect(page.locator(logoImage)).toBeVisible();
    await page.locator(".svc-logo-image input[type=file]").setInputFiles("../../resources/logo.jpg");
    await expect(page.locator(logoImage)).toBeVisible();

    const testTab = await page.evaluate(() => {
      return window["creator"].getLocString("tabs.preview");
    });
    await page.locator(".svc-tabbed-menu-item").filter({ hasText: testTab }).click();
    await expect(page.locator("img.sd-logo__image")).toBeVisible();
  });

  test("Set logo in property grid and change it in designer", async ({ page }) => {
    await setJSON(page, { pages: [{ name: "page1" }] });
    const logoSection = await page.evaluate(() => {
      return window["creator"].getLocString("pe.tabs.logo");
    });
    await page.locator(".spg-title").filter({ hasText: logoSection }).click();
    await page.locator("[data-name='logo']").locator("input[type='text']").fill(base64image);
    await page.keyboard.press("Tab");
    await expect(page.locator(`img[src="${base64image}"]`)).toBeVisible();
    const logoImage = await page.evaluate(() => {
      return "img." + window["creator"].survey.css.logoImage;
    });
    await page.locator(".svc-logo-image input[type=file]").setInputFiles("../../resources/logo.jpg");
    await page.locator(".svc-logo-image").click();
    await expect(page.locator(logoImage)).toBeVisible();
  });

  test("Logo placeholder is a named button that opens the file dialog from the keyboard", async ({ page }) => {
    await setJSON(page, { title: "Contact Form", description: "Enter your details below", pages: [{ name: "page1" }] });
    const placeholder = page.getByRole("button", { name: "Upload logo" });
    await expect(placeholder).toHaveClass(/svc-logo-image-placeholder/);

    await page.locator(".svc-tab-designer .sd-description .sv-string-editor").first().focus();
    await page.keyboard.press("Tab");
    await expect(placeholder).toBeFocused();

    let fileChooser = page.waitForEvent("filechooser");
    await page.keyboard.press("Enter");
    await fileChooser;

    fileChooser = page.waitForEvent("filechooser");
    await page.keyboard.press("Space");
    await fileChooser;
  });
});
