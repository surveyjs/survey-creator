import { test, expect, setJSON } from "../helper";

const title = "Widget";
const urlWidget = "http://127.0.0.1:8080/testCafe/testcafe-widget";

test.describe(title, () => {
  test("Custom widgets should be locked in design mode", async ({ page }) => {
    await page.goto(urlWidget);
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "sortablelist",
              name: "q1",
            },
          ],
        },
      ],
    };
    await setJSON(page, json);
    await expect(page.locator(".svc-widget__content")).toBeVisible();
    await expect(page.locator("span").getByText("Move items here.").first()).toBeVisible();
    await expect(page.locator(".svc-widget__content .sd-question__content")).toHaveCSS("pointer-events", "none");
  });
});
