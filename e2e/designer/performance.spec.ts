import { url, test, expect, setJSON, explicitErrorHandler, getTabbedMenuItemByText, creatorTabPreviewName, creatorTabDesignerName } from "../helper";
import { large_json } from "../../resources/performance_json";

const title = "Performance";

test.describe(title, () => {
  test("Memory leaks between designer/test tabs switch", async ({ page }) => {
    await page.goto(url);
    await explicitErrorHandler(page);
    await setJSON(page, large_json);
    await page.setViewportSize({ width: 1920, height: 1080 });

    const getMemory = () =>
      page.evaluate(() => (performance as any).memory.usedJSHeapSize);

    await getTabbedMenuItemByText(page, creatorTabPreviewName);
    const memory1 = await getMemory();
    await getTabbedMenuItemByText(page, creatorTabDesignerName);
    await getTabbedMenuItemByText(page, creatorTabPreviewName);
    const memory2 = await getMemory();

    expect((memory2 - memory1) / 1000).toBeLessThan(1000);
  });
});
