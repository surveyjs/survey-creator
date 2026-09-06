import type { Page, TestInfo } from "@playwright/test";
import { test, expect, getTabbedMenuItemByText, creatorTabDesignerName } from "./helper";

const urlCspStrict = "http://127.0.0.1:8080/test-pages/csp-strict";

type CspViolation = {
  phase: string,
  directive: string,
  blocked: string,
  source: string,
  sample: string,
};

// The page is served under a strict CSP (style-src 'self' 'nonce-...'; font-src 'self';
// img-src 'self') and these tests walk through every creator tab, then assert that
// nothing is refused. The inventory is still printed, grouped by directive and by the
// interaction that triggered each violation, so a regression names its own source.
//
// If a violation ever has to be tolerated, list it here as
// { directive, sample-prefix } - the empty list means zero tolerance.
const knownViolations: Array<{ directive: string, sample: string }> = [];

function isKnownViolation(violation: CspViolation): boolean {
  return knownViolations.some((known) =>
    known.directive === violation.directive && (violation.sample || "").indexOf(known.sample) === 0);
}

async function collectViolations(page: Page, testInfo: TestInfo, scenario: string, stepErrors: Array<string>, consoleCspMessages: Array<string>): Promise<Array<CspViolation>> {
  const violations = await page.evaluate<Array<CspViolation>>(() => (window as any).__cspViolations || []);

  const dedupe = new Map<string, CspViolation & { count: number, phases: Set<string> }>();
  for (const v of violations) {
    const key = `${v.directive}|${v.source}|${v.blocked}|${v.sample}`;
    const existing = dedupe.get(key);
    if (existing) {
      existing.count++;
      existing.phases.add(v.phase);
    } else {
      dedupe.set(key, { ...v, count: 1, phases: new Set([v.phase]) });
    }
  }

  const byDirective = new Map<string, Array<CspViolation & { count: number, phases: Set<string> }>>();
  for (const v of dedupe.values()) {
    if (!byDirective.has(v.directive)) byDirective.set(v.directive, []);
    byDirective.get(v.directive)!.push(v);
  }

  const lines: Array<string> = [];
  lines.push(`=== CSP inventory [${scenario}]: ${violations.length} events, ${dedupe.size} unique ===`);
  for (const [directive, list] of byDirective) {
    lines.push("");
    lines.push(`--- ${directive} (${list.length} unique) ---`);
    for (const v of list) {
      lines.push(`  x${v.count} blocked: ${v.blocked || "(inline)"}`);
      lines.push(`      source: ${v.source}`);
      lines.push(`      phases: ${[...v.phases].join(", ")}`);
      if (v.sample) lines.push(`      sample: ${v.sample}`);
    }
  }
  lines.push("");
  lines.push(`=== console messages mentioning CSP: ${consoleCspMessages.length} ===`);
  if (stepErrors.length > 0) {
    lines.push(`=== steps that failed (layout/interaction): ${stepErrors.length} ===`);
    stepErrors.forEach((e) => lines.push(`  ${e}`));
  }

  // eslint-disable-next-line no-console
  console.log(lines.join("\n"));

  await testInfo.attach(`csp-violations-${scenario}.json`, {
    body: JSON.stringify({
      scenario,
      total: violations.length,
      unique: [...dedupe.values()].map((v) => ({ ...v, phases: [...v.phases] })),
      console: consoleCspMessages,
      stepErrors
    }, undefined, 2),
    contentType: "application/json"
  });

  return violations;
}

function trackCspConsole(page: Page): Array<string> {
  const messages: Array<string> = [];
  page.on("console", (msg) => {
    if (msg.text().indexOf("Content Security Policy") !== -1) {
      messages.push(msg.text());
    }
  });
  return messages;
}

// A blocked stylesheet can break layout badly enough that clicks get intercepted;
// the inventory is the deliverable, so no single step may abort the run.
function makeStepRunner(page: Page, stepErrors: Array<string>) {
  return async (name: string, action: () => Promise<void>) => {
    await page.evaluate((phase) => { (window as any).__cspPhase = phase; }, name);
    try {
      await action();
    } catch(e) {
      stepErrors.push(`${name}: ${e}`);
    }
  };
}

// Switched through the model rather than by clicking the tabbed menu: once the theme
// variables apply, the menu becomes responsive and collapses tabs into a "..." button,
// which made clicks unreliable and is not what this test is about.
const allTabs = ["preview", "theme", "logic", "translation", "json", "designer"] as const;

function switchTab(page: Page, tabName: string, step: (name: string, action: () => Promise<void>) => Promise<void>): Promise<void> {
  return step(`tab ${tabName}`, async () => {
    await page.evaluate((name) => { (window as any).creator.activeTab = name; }, tabName);
    await expect(page.locator(`.svc-creator__content-wrapper, .svc-tab-${tabName}`).first()).toBeVisible({ timeout: 10000 });
    await page.waitForTimeout(700);
  });
}

test.describe("CSP strict policy diagnostics", () => {
  // The csp-strict page is a static test page and exists only in the packages that
  // serve test-pages/ statically (js, react). Vue/angular serve an SPA example whose
  // router has no such route - and their servers answer unknown paths with the SPA
  // fallback (200 + index.html), so availability is detected by the page's own
  // marker, not by the status code.
  test.beforeEach(async ({ page }) => {
    const response = await page.request.get(urlCspStrict).catch(() => null);
    const available = !!response && response.ok() && (await response.text()).indexOf("__cspViolations") !== -1;
    test.skip(!available, "the csp-strict test page is not served for this framework");
  });

  test("inventory with a populated survey (imagemap, property grid, standalone survey)", async ({ page }, testInfo) => {
    test.setTimeout(180000);
    const consoleCspMessages = trackCspConsole(page);
    const stepErrors: Array<string> = [];
    const step = makeStepRunner(page, stepErrors);

    await page.goto(urlCspStrict);
    await expect(getTabbedMenuItemByText(page, creatorTabDesignerName)).toBeVisible();
    await expect(page.locator(".svc-question__content").first()).toBeVisible();

    // The creator ships no fonts of its own: the Open Sans faces come from survey-core's
    // stylesheet, which has to be enough under `font-src 'self'`. The faces are loaded
    // by hand because they load lazily - and `fonts.check()` is no guard here, it
    // answers true for a family nothing declares at all.
    const openSans = await page.evaluate(async() => {
      const faces = Array.from((document as any).fonts).filter((face: any) => face.family === "Open Sans");
      await Promise.all(faces.map((face: any) => face.load().catch(() => undefined)));
      return { declared: faces.length, loaded: faces.filter((face: any) => face.status === "loaded").length };
    });
    expect(openSans.declared).toBeGreaterThan(0);
    expect(openSans.loaded).toBe(openSans.declared);

    // Select a question through the model rather than a click: it fills the
    // property grid without depending on the (possibly broken) layout.
    await step("select imagemap question", async () => {
      await page.evaluate(() => {
        const creator = (window as any).creator;
        creator.selectElement(creator.survey.getQuestionByName("q2"));
      });
      await page.waitForTimeout(500);
    });

    for (const tabName of allTabs) {
      await switchTab(page, tabName, step);
    }

    // The standalone survey below the creator checks that a plain survey renders
    // cleanly under the same policy, next to the creator.
    await step("standalone survey", async () => {
      await expect(page.locator("#standalone-survey .sd-root-modern")).toBeVisible({ timeout: 10000 });
    });

    const violations = await collectViolations(page, testInfo, "populated", stepErrors, consoleCspMessages);
    expect(stepErrors).toEqual([]);
    expect(violations.filter((v) => !isKnownViolation(v))).toEqual([]);
  });

  test("inventory with an empty survey (empty-state placeholder images)", async ({ page }, testInfo) => {
    test.setTimeout(180000);
    const consoleCspMessages = trackCspConsole(page);
    const stepErrors: Array<string> = [];
    const step = makeStepRunner(page, stepErrors);

    await page.goto(`${urlCspStrict}?empty=1`);
    await expect(getTabbedMenuItemByText(page, creatorTabDesignerName)).toBeVisible();

    // Nothing is selected, so the property-grid placeholder illustration renders too.
    for (const tabName of allTabs) {
      await switchTab(page, tabName, step);
    }

    const violations = await collectViolations(page, testInfo, "empty", stepErrors, consoleCspMessages);
    expect(stepErrors).toEqual([]);
    expect(violations.filter((v) => !isKnownViolation(v))).toEqual([]);
  });

  test("inventory with the creator in a shadow root (the variables are adopted onto the shadow root)", async ({ page }, testInfo) => {
    test.setTimeout(180000);
    const consoleCspMessages = trackCspConsole(page);
    const stepErrors: Array<string> = [];
    const step = makeStepRunner(page, stepErrors);

    await page.goto(`${urlCspStrict}?shadow=1`);
    await expect(page.locator(".svc-creator").first()).toBeVisible();

    // The document stylesheet cannot cross the shadow boundary, so the variables come
    // from an adopted stylesheet on the shadow root - CSSOM delivery that a strict
    // `style-src` does not police, so no <style> element and no nonce are involved.
    expect(await page.evaluate(() => {
      // eslint-disable-next-line surveyjs/eslint-plugin-i18n/allowed-in-shadow-dom
      const shadowRoot = document.getElementById("survey-creator")!.shadowRoot!;
      return !shadowRoot.querySelector("style") && shadowRoot.adoptedStyleSheets.length > 0;
    })).toBeTruthy();
    // Locators pierce the shadow boundary, so the computed value is read without
    // reaching for the shadow root by hand.
    const unitSize = await page.locator(".svc-creator").first()
      .evaluate((el) => getComputedStyle(el).getPropertyValue("--sjs2-base-unit-size").trim());
    expect(unitSize).not.toBe("");

    for (const tabName of allTabs) {
      await switchTab(page, tabName, step);
    }

    const violations = await collectViolations(page, testInfo, "shadow", stepErrors, consoleCspMessages);
    expect(stepErrors).toEqual([]);
    expect(violations.filter((v) => !isKnownViolation(v))).toEqual([]);
  });
});
