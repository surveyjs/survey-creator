import { url, test, expect, setJSON, creatorTabPreviewName, getTabbedMenuItemByText, getBarItemByTitle, getListItemByText } from "../helper";

const title = "Preview tab simulator";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Simulator popups", async ({ page }) => {
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "dropdown",
              "name": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        }
      ]
    });

    const dropdownSelect = page.locator(".sd-dropdown");
    const dropdownPopup = page.locator(".svd-simulator-content .sv-popup");
    const dropdownPopupContainer = dropdownPopup.locator(".sv-popup__container");
    const tabletPopup = "sv-popup--menu-tablet";
    const phonePopup = "sv-popup--menu-phone";

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(dropdownPopupContainer).not.toBeVisible();

    await dropdownSelect.click();
    await expect(dropdownPopupContainer).toBeVisible();
    const classNames1 = await dropdownPopup.getAttribute("class");
    expect(classNames1).not.toContain(phonePopup);
    expect(classNames1).not.toContain(tabletPopup);

    await getBarItemByTitle(page, "Select device type").click();
    await getListItemByText(page, "iPad Air").click();

    await dropdownSelect.click();
    await expect(dropdownPopupContainer).toBeVisible();
    const classNames2 = await dropdownPopup.getAttribute("class");
    expect(classNames2).not.toContain(phonePopup);
    expect(classNames2).toContain(tabletPopup);
    await page.locator(".sv-popup--menu-tablet").click({ position: { x: 0, y: 10 } });

    await getBarItemByTitle(page, "Select device type").click();
    await getListItemByText(page, "iPhone 15").click();
    await dropdownSelect.click();
    await expect(dropdownPopupContainer).toBeVisible();
    const classNames3 = await dropdownPopup.getAttribute("class");
    expect(classNames3).toContain(phonePopup);
    expect(classNames3).not.toContain(tabletPopup);
  });

  test("Simulator TOC", async ({ page }) => {
    await setJSON(page, {
      "showTOC": true,
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "dropdown",
              "name": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        },
        {
          "name": "page2",
          "elements": [
            {
              "type": "text",
              "name": "question2",
            }
          ]
        }
      ]
    });
    const tocList = page.locator(".sv_progress-toc.sv_progress-toc--left.sv_progress-toc--sticky");
    const tocMobile = page.locator(".sv_progress-toc.sv_progress-toc--mobile");
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(tocList).toBeVisible();
    await expect(tocMobile).not.toBeVisible();

    await page.getByRole("button", { name: "Select device type" }).click();
    await page.getByText("iPhone SE").click();
    await expect(tocList).toBeVisible();
    await expect(tocMobile).not.toBeVisible();

    await page.getByRole("button", { name: "Switch to portrait orientation" }).click();
    await expect(tocList).not.toBeVisible();
    await expect(tocMobile).toBeVisible();

    await page.getByRole("button", { name: "Switch to landscape" }).click();
    await expect(tocList).toBeVisible();
    await expect(tocMobile).not.toBeVisible();

    await page.getByRole("button", { name: "Switch to portrait orientation" }).click();
    await expect(tocList).not.toBeVisible();
    await expect(tocMobile).toBeVisible();

    await page.getByRole("button", { name: "Switch to landscape" }).click();
    await expect(tocList).toBeVisible();
    await expect(tocMobile).not.toBeVisible();
  });
});
