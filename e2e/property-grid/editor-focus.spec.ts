import { url, test, expect, setJSON, getPropertyGridCategory, generalGroupName } from "../helper";

const title = "Property Grid: focus a property editor";

const json = {
  elements: [
    { type: "text", name: "price" },
    { type: "text", name: "quantity" },
    { type: "expression", name: "total", expression: "{price} * {quantity}" }
  ]
};

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1280, height: 500 });
  });

  test("A focused property editor stays in view after its category expands", async ({ page }) => {
    await setJSON(page, json);
    await page.evaluate(() => {
      const creator = window["creator"];
      creator.selectElement(creator.survey.getQuestionByName("total"));
    });
    // selectElement focuses the designer element after a delay. Wait for it, or it takes the focus from the editor later.
    await expect(page.locator(".svc-question__content").filter({ has: page.locator("[data-name='total']") })).toBeFocused();
    const editor = page.locator(".spg-root-modern div[data-name='expression'] textarea");
    await expect(editor).toBeVisible();
    // Collapse the category, so that selectElement has to expand it again.
    await getPropertyGridCategory(page, generalGroupName).click();
    await expect(editor).toBeHidden();

    await page.evaluate(() => {
      const creator = window["creator"];
      creator.selectElement(creator.survey.getQuestionByName("total"), "expression");
    });
    await expect(editor).toBeFocused();

    // Before the fix, expanding the category started a delayed 500 ms smooth scroll to its first question.
    // Wait until scrollTop stops changing.
    const scroller = page.locator(".spg-root-modern .sv-scroll__scroller");
    let prevScrollTop = -1;
    await expect.poll(async () => {
      const scrollTop = await scroller.evaluate((el) => el.scrollTop);
      const isStable = scrollTop === prevScrollTop;
      prevScrollTop = scrollTop;
      return isStable;
    }, { intervals: [300] }).toBe(true);

    await expect(editor).toBeFocused();
    await expect(editor).toBeInViewport({ ratio: 1 });
  });
});
