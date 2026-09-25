import type { Page } from "@playwright/test";
import { url, test, expect, getAddNewQuestionButton } from "./helper";

const title = "prefers-reduced-motion";

async function enableCreatorAnimations(page: Page, respectReducedMotion: boolean): Promise<void> {
  await page.evaluate((respect) => {
    const creator = (window as any).creator;
    const settings = (window as any).Survey.settings;
    creator.animationEnabled = true;
    settings.animationEnabled = true;
    settings.respectReducedMotion = respect;
  }, respectReducedMotion);
}

async function trackAnimationClasses(page: Page): Promise<void> {
  await page.evaluate(() => {
    const self: any = window;
    self.__animationClasses = [];
    const collect = (el: Element) => {
      el.classList.forEach((cls) => {
        if (/--(enter|leave)$/.test(cls)) self.__animationClasses.push(cls);
      });
    };
    const root = (window as any).creator.rootElement as HTMLElement;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.type === "attributes") collect(m.target as Element);
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) collect(node as Element);
        });
      });
    });
    observer.observe(root, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
  });
}

test.describe(title, () => {
  test("root class follows the OS preference without a reload", async ({ page }) => {
    await page.goto(url);
    // The test page starts with animations off. Turning them on is not reactive, so the
    // first media change below is what re-renders the root with the new flag.
    await enableCreatorAnimations(page, true);
    const root = page.locator(".svc-creator").first();

    await page.emulateMedia({ reducedMotion: "reduce" });
    await expect(root).toHaveClass(/svc-creator--disable-animations/);

    await page.emulateMedia({ reducedMotion: "no-preference" });
    await expect(root).not.toHaveClass(/svc-creator--disable-animations/);

    await page.emulateMedia({ reducedMotion: "reduce" });
    await expect(root).toHaveClass(/svc-creator--disable-animations/);
  });

  test("no enter/leave animations when the user requests reduced motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(url);
    await enableCreatorAnimations(page, true);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await trackAnimationClasses(page);

    await getAddNewQuestionButton(page).click();
    await expect(page.locator(".svc-question__content").first()).toBeVisible();

    const classes = await page.evaluate(() => (window as any).__animationClasses as Array<string>);
    expect(classes.length).toEqual(0);
  });

  test("enter/leave animations run when respectReducedMotion is false", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(url);
    await enableCreatorAnimations(page, false);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await trackAnimationClasses(page);

    await getAddNewQuestionButton(page).click();
    await expect(page.locator(".svc-question__content").first()).toBeVisible();

    const classes = await page.evaluate(() => (window as any).__animationClasses as Array<string>);
    expect(classes.length).toBeGreaterThan(0);
  });
});
