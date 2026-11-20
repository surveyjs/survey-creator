import type { Browser, BrowserContext, CDPSession, Locator, Page, TestInfo, ViewportSize } from "@playwright/test";
import { expect, test as baseTest } from "@playwright/test";
import * as path from "path";

export const url = "http://127.0.0.1:8080/test-pages/default";
export const urlByPage = "http://127.0.0.1:8080/test-pages/by-page";
export const urlPreviewThemeSwitcher = "http://127.0.0.1:8080/test-pages/preview-theme-switcher";
export const urlThemeForPreview = "http://127.0.0.1:8080/test-pages/theme-for-preview-option";
export const urlDropdownCollapseView = "http://127.0.0.1:8080/test-pages/dropdown-collapse-view";
export const urlLocalized_de = "http://127.0.0.1:8080/test-pages/localized_ui";
export const urlNoLicense = "http://127.0.0.1:8080/test-pages/no-license";
export const urlWidget = "http://127.0.0.1:8080/test-pages/widget";
export const urlThemeTab = "http://127.0.0.1:8080/test-pages/theme-tab";
export const urlCreatorThemes = "http://127.0.0.1:8080/test-pages/creator-themes";
export const urlPresets = "http://127.0.0.1:8080/test-pages/presets";
export const urlRichText = "http://127.0.0.1:8080/test-pages/rich-text";

// Serves a choicesByUrl request from the test itself, so no real web service is contacted.
// Call it before setJSON. The url does not have to exist: the request never leaves the browser.
export async function mockChoicesByUrl(page: Page, requestUrl: string, response: any): Promise<void> {
  await page.route(requestUrl, route => route.fulfill({
    status: 200,
    contentType: "application/json",
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(response)
  }));
}

// Web fonts (Open Sans, several weights) load lazily over the network; a screenshot taken
// before they finish captures fallback-font rendering, which shifts text metrics and fails
// the comparison. `document.fonts.status === "loaded"` is NOT enough: it reports "loaded"
// whenever no load is *currently in progress*, so it returns true in the gap before a
// lazily-used weight (e.g. 700) has even started loading - the screenshot then races the
// font fetch (flaky on cold-cache/slow-network CI). Instead, explicitly kick off every
// declared @font-face, await them all, then wait for the set to settle. The same holds for
// any position the app computes from text measured with the fallback font.
export async function waitForWebFonts(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const fonts: any = (document as any).fonts;
    const pending: Array<Promise<unknown>> = [];
    fonts.forEach((face: any) => pending.push(face.load().catch(() => undefined)));
    await Promise.all(pending);
    await fonts.ready;
  });
}

export async function compareScreenshot(
  page: Page,
  elementSelector: string | Locator | undefined,
  screenshotName: string,
  options: {
      animations?: "disabled" | "allow",
      caret?: "hide" | "initial",
      mask?: Array<Locator>,
      maskColor?: string,
      maxDiffPixelRatio?: number,
      maxDiffPixels?: number,
      omitBackground?: boolean,
      scale?: "css" | "device",
      stylePath?: string | Array<string>,
      threshold?: number,
      timeout?: number,
  } = {}) {
  let currentElement = elementSelector;
  if (!!currentElement && typeof currentElement == "string") {
    currentElement = page.locator(currentElement);
  }

  const pwOptions: {timeout: number, maxDiffPixels?: number} = {
    timeout: 10000,
    maskColor: "#000000",
    ...options,
    stylePath: [path.join(__dirname, "hide-tooltips.css")].concat(options.stylePath || [])
  };

  await waitForWebFonts(page);

  if (!!currentElement) {
    const element = (<Locator>currentElement).filter({ visible: true });
    await expect.soft(element.nth(0)).toBeVisible();
    await expect.soft(element.nth(0)).toHaveScreenshot(screenshotName, pwOptions);
  } else {
    await expect.soft(page).toHaveScreenshot(screenshotName, pwOptions);
  }
}

type MouseButton = "left" | "right" | "middle";

// Records the buttons a test presses with page.mouse.down() and hasn't released with page.mouse.up().
function trackHeldMouseButtons(page: Page): Set<MouseButton> {
  const heldButtons = new Set<MouseButton>();
  const mouse = page.mouse;
  const down = mouse.down.bind(mouse);
  const up = mouse.up.bind(mouse);
  mouse.down = (options) => {
    heldButtons.add(options?.button || "left");
    return down(options);
  };
  mouse.up = async (options) => {
    await up(options);
    heldButtons.delete(options?.button || "left");
  };
  return heldButtons;
}

function logPageError(error: Error): void {
  // eslint-disable-next-line no-console
  console.log(`Uncaught exception: "${error}"`);
}

const freshPageTag = "@fresh-page";

// Runs in the page, on the default test page only.
// - "record": stores what the page looks like once its first creator has rendered.
// - "compare": returns what the test changed that a reset can't undo, by name (empty if nothing). It can't see
//   edits to existing properties, prototype patches, statics, PropertyGridEditorCollection registrations, edited
//   localization strings, nodes added outside the creator or window/document listeners.
// - "release": blurs the focused element and starts releaseCreatorForReuse(), which unmounts and disposes the
//   creator.
// - "reset": restores the page-level state recorded on "record" and starts resetCreatorForReuse(), which renders a
//   new creator.
// "release" and "reset" return the creatorResetCount to wait for, or -1 when the page can't do it.
function pageReuseInPage(mode: "record" | "compare" | "release" | "reset"): boolean | Array<string> | number {
  const w = window as any;
  const getFingerprint = (): Record<string, string> => {
    const survey = w.Survey;
    const creatorCore = w.SurveyCreatorCore;
    const toJSON = (value: unknown) => JSON.stringify(value, (_key, val) => val instanceof Node ? undefined : val);
    const serializer = survey.Serializer;
    return {
      "Serializer": serializer.getAllClasses().sort().map((name: string) =>
        name + ":" + serializer.findClass(name).properties.map((prop: any) => prop.name + (prop.visible ? "" : "!")).join(",")
      ).join(";"),
      "survey-core settings": toJSON(survey.settings),
      "creator settings": toJSON(creatorCore.settings),
      "ComponentCollection": String(survey.ComponentCollection.Instance.items.length),
      "CustomWidgetCollection": String(survey.CustomWidgetCollection.Instance.widgets.length),
      "editorLocalization": creatorCore.editorLocalization.currentLocale + "|" + Object.keys(creatorCore.editorLocalization.locales).join(","),
      "surveyLocalization": toJSON([survey.surveyLocalization.supportedLocales, survey.surveyLocalization.currentLocale, survey.surveyLocalization.defaultLocale])
    };
  };
  const host = document.getElementById("survey-creator");
  if (mode === "record") {
    if (typeof w.releaseCreatorForReuse !== "function" || typeof w.resetCreatorForReuse !== "function" || !w.Survey || !w.SurveyCreatorCore) return false;
    w.e2ePageReuseInitial = {
      fingerprint: getFingerprint(),
      bodyDir: document.body.getAttribute("dir"),
      htmlStyle: document.documentElement.getAttribute("style"),
      hostStyle: host?.getAttribute("style") ?? null
    };
    return true;
  }
  const initial = w.e2ePageReuseInitial;
  if (mode === "compare") {
    // a reload or history navigation replaced the document
    if (!initial) return ["the document"];
    const fingerprint = getFingerprint();
    return Object.keys(fingerprint).filter(key => fingerprint[key] !== initial.fingerprint[key]);
  }
  if (!initial) return -1;
  const resetCount = w.creatorResetCount;
  if (mode === "release") {
    let focused = document.activeElement;
    while(focused?.shadowRoot?.activeElement) {
      focused = focused.shadowRoot.activeElement;
    }
    (focused as HTMLElement | null)?.blur?.();
    return w.releaseCreatorForReuse() === true ? resetCount : -1;
  }
  window.scrollTo(0, 0);
  const restoreAttribute = (element: Element | null, name: string, value: string | null) => {
    if (!element) return;
    if (value === null) {
      element.removeAttribute(name);
    } else {
      element.setAttribute(name, value);
    }
  };
  restoreAttribute(document.body, "dir", initial.bodyDir);
  restoreAttribute(document.documentElement, "style", initial.htmlStyle);
  restoreAttribute(host, "style", initial.hostStyle);
  return w.resetCreatorForReuse() === true ? resetCount : -1;
}

// Playwright's Page is an EventEmitter at runtime; its typings leave these methods out.
type PageEvents = {
  eventNames(): Array<string | symbol>,
  listeners(name: string | symbol): Array<Function>,
  removeListener(name: string | symbol, listener: Function): unknown,
};

// The worker's page, see `test` below.
class ReusablePage {
  private context?: BrowserContext;
  private cdp?: CDPSession;
  private page?: Page;
  private navigate?: Page["goto"];
  // the listeners this class added to the page
  private ownListeners = new Set<Function>();
  private heldButtons = new Set<MouseButton>();
  private errors: Array<Error> = [];
  // page.url() once the default page's first creator has rendered
  private loadedUrl?: string;
  // The current document is the default page and no test left state on it that a reset can't undo. Between tests
  // it also means that the creator is released, so the fixture's own resets below don't make the old creator
  // re-render and schedule work (a lazy-rendering check fires 10 ms later on its detached DOM and throws).
  private canReset = false;
  // The current test may reuse the page: its first goto(url) resets the creator instead of navigating, and a
  // real navigation to `url` makes the document reusable for the next test.
  private testMayReuse = false;
  private isFirstGotoOfTest = false;
  // the test whose creator the last release disposed; when it was the test right before this one, an error of its
  // creator (on unmount, dispose or from its timers) lands in this test's errors
  private releasedTest?: string;
  private errorsMayComeFrom?: string;
  private resetsOfDocument = 0;
  // On survey-creator-js every reset leaves the disposed creator reachable (about 5 MB): the page's shadow root keeps a
  // detached radio <input> of the Preview survey, whose preact listener holds its question. A new document every
  // `maxResetsOfDocument` tests bounds that, and any other growth.
  private static readonly maxResetsOfDocument = 30;

  constructor(private browser: Browser) {
  }

  public async beforeTest(viewport: ViewportSize | null, mayReuse: boolean): Promise<Page> {
    this.errorsMayComeFrom = this.canReset ? this.releasedTest : undefined;
    let page = this.page;
    const isNewPage = !page || page.isClosed();
    if (!page || isNewPage) {
      page = await this.open();
    }
    this.testMayReuse = mayReuse;
    this.isFirstGotoOfTest = true;
    if (!mayReuse) {
      this.canReset = false;
    }
    // A test that won't reset the page starts on about:blank, as with Playwright's own page: some wait for a load
    // state before their goto, which the previous test's document may never reach again. Going there first also
    // keeps the resets below from re-rendering a creator that is still mounted.
    if (!this.canReset && page.url() !== "about:blank") {
      await this.navigate!("about:blank");
    }
    // ...and with an empty HTTP cache, as Playwright's own reset gives it: the presets tests read the editor before
    // it has rendered when their page comes from the cache (js, 7 failures in 72 runs, 0 with a cleared cache).
    if (!this.canReset && !isNewPage) {
      await this.cdp!.send("Network.clearBrowserCache");
    }
    if (!isNewPage) {
      for (const other of this.context!.pages()) {
        if (other !== page) await other.close();
      }
      this.removeTestListeners(page);
      await page.unrouteAll({ behavior: "ignoreErrors" });
      // The context's defaults; null would mean "no override", i.e. the OS setting.
      await page.emulateMedia({ media: null, colorScheme: "light", reducedMotion: "no-preference", forcedColors: "none", contrast: "no-preference" });
      // Off the page, as Playwright does between tests in a reused context, so the next creator doesn't render
      // under the previous test's pointer and show a hover.
      await page.mouse.move(-1, -1);
    }
    const size = page.viewportSize();
    if (!!viewport && (!size || size.width !== viewport.width || size.height !== viewport.height)) {
      await page.setViewportSize(viewport);
    }
    return page;
  }

  public async afterTest(testInfo: TestInfo, skipJSErrors: boolean): Promise<void> {
    const page = this.page!;
    const errors = this.errors;
    this.errors = [];
    if (testInfo.status !== testInfo.expectedStatus || testInfo.retry > 0 || (!skipJSErrors && errors.length > 0)) {
      // the page may be in any state: the next test starts on a new one
      await this.drop();
    } else if (this.heldButtons.size > 0) {
      // Playwright keeps a pressed button pressed into the next test, whose first mouse move would then be a drag
      // (doDrag ends with the button down). Release it on a blank page, so that the release doesn't run the app's
      // drop code after the test. The next test then loads the page again.
      this.canReset = false;
      await this.navigate!("about:blank");
      for (const button of [...this.heldButtons]) {
        await page.mouse.up({ button });
      }
    } else if (this.canReset && (page.url() !== this.loadedUrl || this.resetsOfDocument >= ReusablePage.maxResetsOfDocument)) {
      this.canReset = false;
    } else if (this.canReset) {
      const leaks = <Array<string>> await page.evaluate(pageReuseInPage, "compare" as const);
      if (leaks.length > 0) {
        this.canReset = false;
        testInfo.annotations.push({ type: "page-reuse-leak", description: `${leaks.join(", ")} changed: the next test in this worker loads the page again. Tag this test "${freshPageTag}".` });
      } else {
        // An error thrown while the creator is disposed counts against the next test.
        this.canReset = await this.runCreatorReuseStep(page, "release");
        this.releasedTest = this.canReset ? testInfo.titlePath.join(" > ") : undefined;
      }
    }
    if (!skipJSErrors) {
      expect(errors, this.errorsMayComeFrom && `The test before this one on the page, "${this.errorsMayComeFrom}", ` +
        "released its creator here, and an error of that creator (thrown on its unmount, dispose or by its timers) " +
        `lands in this test too. If E2E_FRESH_PAGE=1 makes it go away, tag that test "${freshPageTag}".`).toHaveLength(0);
    }
  }

  public async drop(): Promise<void> {
    const context = this.context;
    this.context = undefined;
    this.page = undefined;
    this.canReset = false;
    await context?.close();
  }

  private async open(): Promise<Page> {
    this.context = await this.browser.newContext();
    const page = await this.context.newPage();
    this.cdp = await this.context.newCDPSession(page);
    // One listener for the page's whole life: an error thrown after a test's check, while the old creator is
    // disposed or the new one renders, counts against the next test.
    page.on("pageerror", (error) => {
      this.errors.push(error);
      logPageError(error);
    });
    this.heldButtons = trackHeldMouseButtons(page);
    const navigate = page.goto.bind(page);
    // A skipped navigation returns null, and only `waitUntil` and `timeout` may be passed (they don't matter to a
    // reset). No spec uses the returned response; keep it that way.
    page.goto = async (targetUrl: string, options?: Parameters<Page["goto"]>[1]) => {
      const mayReset = this.testMayReuse && this.isFirstGotoOfTest && targetUrl === url && !options?.referer;
      this.isFirstGotoOfTest = false;
      if (mayReset && this.canReset && page.url() === this.loadedUrl) {
        // On the released page (nothing is mounted): Chromium shows the focus ring (:focus-visible) on an element
        // that a script focuses unless the last input was a mouse click. A new document has had no input; this page
        // has had the previous test's clicks. A key press puts it back into the state where the ring shows.
        await page.keyboard.press("Escape");
      }
      if (mayReset && this.canReset && page.url() === this.loadedUrl && await this.runCreatorReuseStep(page, "reset")) {
        this.resetsOfDocument++;
        return null;
      }
      this.canReset = false;
      const response = await navigate(targetUrl, options);
      if (this.testMayReuse && targetUrl === url) {
        this.canReset = await this.recordFirstLoad(page);
      }
      return response;
    };
    this.navigate = navigate;
    this.page = page;
    const events = <PageEvents><unknown>page;
    this.ownListeners = new Set(events.eventNames().flatMap(name => events.listeners(name)));
    return page;
  }

  // Listeners that a test added to the page (page.on("console", ...)) would otherwise stay for every later test.
  private removeTestListeners(page: Page): void {
    const events = <PageEvents><unknown>page;
    for (const name of events.eventNames()) {
      for (const listener of events.listeners(name)) {
        if (!this.ownListeners.has(listener)) events.removeListener(name, listener);
      }
    }
  }

  private async recordFirstLoad(page: Page): Promise<boolean> {
    await page.waitForFunction(() => !!window["creator"]?.rootElement, null, { timeout: 10000 });
    this.loadedUrl = page.url();
    this.resetsOfDocument = 0;
    return <boolean> await page.evaluate(pageReuseInPage, "record" as const);
  }

  private async runCreatorReuseStep(page: Page, step: "release" | "reset"): Promise<boolean> {
    const resetCount = <number> await page.evaluate(pageReuseInPage, step);
    if (resetCount < 0) return false;
    // A counter that only the page's release/reset bumps when it's done: a selector would match the old creator's
    // DOM until the remount, and on survey-creator-js the DOM sits in a shadow root.
    await page.waitForFunction(({ count, step }) => window["creatorResetCount"] > count && (step === "release" || !!window["creator"]?.rootElement),
      { count: resetCount, step }, { timeout: 10000 });
    return true;
  }
}

type TestFixtures = { skipJSErrors: boolean };
type WorkerFixtures = { reusablePage: ReusablePage | undefined };

// 09's fixture: Playwright's own page, so every test loads its page in a new document (in a context reused by the
// config). Used when E2E_FRESH_PAGE is set.
const freshPageTest = baseTest.extend<TestFixtures, WorkerFixtures>({
  skipJSErrors: [false, { option: false }],
  // eslint-disable-next-line no-empty-pattern
  reusablePage: [async ({}, use) => await use(undefined), { scope: "worker" }],
  page: async ({ page, skipJSErrors }, use) => {
    const errors: Array<Error> = [];
    page.addListener("pageerror", (error) => {
      errors.push(error);
      logPageError(error);
    });
    const heldButtons = trackHeldMouseButtons(page);
    await use(page);
    if (!skipJSErrors) {
      expect(errors).toHaveLength(0);
    }
    // The config reuses the browser context, and Playwright keeps a pressed button pressed into the next test,
    // whose first mouse move would then be a drag (doDrag ends with the button down). Release it on a blank page,
    // so that the release doesn't run the app's drop code after the test.
    if (heldButtons.size > 0) {
      await page.goto("about:blank");
      for (const button of [...heldButtons]) {
        await page.mouse.up({ button });
      }
    }
  }
});

// One page per worker, reused on the default test page (`url`): the test's first `page.goto(url)` doesn't navigate.
// After a test the page's window.releaseCreatorForReuse() unmounts and disposes the creator; the next test's goto
// calls window.resetCreatorForReuse(), which renders a new default creator in a new component. See
// promts/e2e-perf/10-reuse-page-per-worker-report.md for what it saves.
// - A test that changes state the reset can't undo must have `{ tag: "@fresh-page" }`: anything global in the
//   page's JS (Serializer and its properties, survey-core or creator settings, ComponentCollection and other
//   registries, prototypes, statics, console, localization: `creator.locale` sets the global
//   editorLocalization.currentLocale, loadCreatorLocales adds locales), <style>/<script> or other nodes or styles
//   outside the creator's component, window/document listeners. Otherwise it changes the next test in its worker,
//   which can come from any spec file. A tagged test loads the page, and the next one loads it again.
// - Before each test the fixture resets: routes (page.unrouteAll), emulated media, the viewport (to the `viewport`
//   option, 1280x720 by default), the mouse (released after a drag, moved off the page), listeners added to the
//   page, extra pages; on a reused page also the focus, the window scroll, body `dir`, the <html> style and the
//   #survey-creator style. There is no generic DOM cleanup: Angular injects component styles into <head> once.
// - After each reused test the fixture compares a fingerprint of the global state (pageReuseInPage). On a
//   difference the next test loads the page again, and the test gets a "page-reuse-leak" annotation naming it.
//   The fingerprint misses most kinds of state (see pageReuseInPage): the tag is the real protection.
// - Any other URL, a second goto in a test, a failed test and a retry navigate for real, so they get a new
//   document as with Playwright's own page.
// - Every test of a worker shares one browser context: storage, the HTTP cache, permissions, context routes, init
//   scripts, exposed functions and the clock are not reset between tests (no spec uses them). Context options in
//   test.use() other than `viewport` apply only as they were for the worker's first test. A test that needs any of
//   these needs Playwright's own test.
// - A failure that depends on the tests before it reproduces only in the same order: --workers=1 with the same
//   test list. E2E_FRESH_PAGE=1 (any value) turns page reuse off, to check whether a failure depends on the order.
const reusedPageTest = baseTest.extend<TestFixtures, WorkerFixtures>({
  skipJSErrors: [false, { option: false }],
  reusablePage: [async ({ browser }, use) => {
    const reusablePage = new ReusablePage(browser);
    await use(reusablePage);
    await reusablePage.drop();
  }, { scope: "worker" }],
  // Doesn't depend on Playwright's page or context, so no test pays for a context it doesn't use.
  page: async ({ reusablePage, skipJSErrors, viewport }, use, testInfo) => {
    const mayReuse = testInfo.retry === 0 && !testInfo.tags.includes(freshPageTag);
    if (testInfo.retry > 0) {
      await reusablePage!.drop();
    }
    await use(await reusablePage!.beforeTest(viewport, mayReuse));
    await reusablePage!.afterTest(testInfo, skipJSErrors);
  }
});

export const test = process.env.E2E_FRESH_PAGE ? freshPageTest : reusedPageTest;

export const setJSON = async (page: Page, json: object) => {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((json) => {
    window["creator"].text = JSON.stringify(json);
  }, json);
};

// The react and js test pages load survey-creator-core.i18n.js only on localized_ui.html.
// Call this before a test sets creator.locale on another page, opens the presets editor (its Languages
// page lists the creator locales) or shows creator strings of another locale. Angular and Vue bundle
// the locales, so there it does nothing.
export const loadCreatorLocales = async (page: Page) => {
  await page.waitForFunction(() => !!window["creator"]);
  const isMissing = await page.evaluate(() => {
    const core = window["SurveyCreatorCore"];
    return !!core && !core.editorLocalization.locales["de"];
  });
  if (isMissing) {
    await page.addScriptTag({ url: "/node_modules/survey-creator-core/survey-creator-core.i18n.js" });
  }
};

export const setToolboxItemJSON = async (page: Page, itemName: string, json: object) => {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate(({ itemName, json }) => {
    window["creator"].toolbox.getItemByName(itemName).json = { type: itemName, ...json };
  }, { itemName, json });
};

export const setSurveyProp = async (page: Page, propName: string, value: unknown) => {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate(({ propName, value }) => {
    window["creator"].survey[propName] = value;
  }, { propName, value });
};

export const setCreatorProp = async (page: Page, propName: string, value: unknown) => {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate(({ propName, value }) => {
    window["creator"][propName] = value;
  }, { propName, value });
};

export const getJSON = async (page: Page) => {
  await page.waitForFunction(() => !!window["creator"]);
  return await page.evaluate(() => {
    return JSON.parse(window["creator"].text);
  });
};

interface IDragToElementOptions {
  elementPosition?: {x?: number, y?: number};
  targetPosition?: {x?: number, y?: number};
  steps?: number;
}

export async function doDrag({ page, element, target, options }: { page: Page, element: Locator, target: Locator, options?: IDragToElementOptions }):Promise<void> {
  if (options?.elementPosition) {
    await element.hover({ force: true, position: { x: (options.elementPosition?.x || 0), y: (options.elementPosition?.y || 0) } });
  } else {
    await element.hover({ force: true });
  }
  await page.mouse.down();
  await target.scrollIntoViewIfNeeded();
  const { x, y, width, height } = await <any>target.boundingBox();

  if (options?.targetPosition) {
    await page.mouse.move(x + (options?.targetPosition?.x || 0), y + (options?.targetPosition?.y || 0), { steps: options?.steps || 20 });
  } else {
    await page.mouse.move(x + width / 2, y + height / 2, { steps: options?.steps || 20 });
  }
}

export async function doDragDrop({ page, element, target, options }: { page: Page, element: Locator, target: Locator, options?: IDragToElementOptions }):Promise<void> {
  await doDrag({ page, element, target, options: options || {} });
  await page.mouse.up();
}

// Resolves after two rendering updates. The browser dispatches the scroll event of a scroll
// (for example, scrollIntoViewIfNeeded) in the next rendering update, so a popup opened right
// after the scroll could be closed by that late event.
export async function waitForAnimationFrames(page: Page): Promise<void> {
  await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
}

export async function showCreatorSettings(page) {
  await page.locator(".svc-sidebar-tabs__bottom-container .sd-action").click();
}
export async function showPresets(page) {
  await showCreatorSettings(page);
  await page.locator(".spg-launch__card").click();
}

export const creatorTabDesignerName = "Designer";
export const creatorTabPreviewName = "Preview";
export const creatorTabLogicName = "Logic";
export const creatorTabJsonEditorName = "JSON Editor";
export const creatorTabTranslationName = "Translation";
export const creatorTabThemeName = "Themes";
export const generalGroupName = "General";
export const logicGroupName = "Conditions";
export const inputMaskSettingsGroupName = "Input Mask Settings";

export const objectSelectorButton = (page) => page.locator(".svc-side-bar__container-header .sv-action--object-selector .sd-action");

export function getTabbedMenuItemByText(page: Page, text: "Designer" | "Preview" | "Logic" | "Translation" | "JSON Editor" | "Embed Survey" | "Miner Logik" | "Themes"): Locator {
  return page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item__text").getByText(text).or(page.locator(".svc-tabbed-menu-item-container").filter({ has: page.locator("title").getByText(text) })).filter({ visible: true });
}

/** Replaces `window.creator` via the React test page `updateCreatorModel` helper (see `test-pages/default.html`). */
export const recreateCreatorWithOptions = async (page: Page, creatorOptions: Record<string, unknown>, json: object) => {
  await expect(getTabbedMenuItemByText(page, creatorTabDesignerName)).toBeVisible();
  await page.evaluate(
    ({ creatorOptions, json }) => {
      const defaults = {
        expandCollapseButtonVisibility: "never",
        showLogicTab: true,
        showTranslationTab: true
      };
      (window as any).updateCreatorModel({ ...defaults, ...creatorOptions }, json);
    },
    { creatorOptions, json }
  );
};

export function getBarItemByTitle(page: Page, text: string): Locator {
  return page.getByRole("button", { name: text }).and(page.locator(".sd-action"));
}

export function getQuestionBarItemByTitle(page: Page, text: string): Locator {
  const role = text === "Required" ? "checkbox" : "button";
  return page.locator(".svc-question__content-actions").getByRole(role, { name: text });
}

export function getListItemByText(page: Page, text: string): Locator {
  return page.locator(".sv-popup__content .sd-menu-list .sd-menu-item").getByText(text, { exact: true }).filter({ visible: true });
}

export function getVisibleSelectListItemByText(page: Page, text: string): Locator {
  return page.locator(".sv-popup__container .sd-selectlist__item", {
    has: page.getByText(text, { exact: true })
  }).filter({ visible: true });
}

export function getMenuItemByText(page: Page, text: string): Locator {
  return page.getByRole("menuitemradio", { name: text, exact: true });
}

export function getPropertyGridCategory(page: Page, categoryName: string): Locator {
  return page.locator(".spg-panel__title span").getByText(categoryName, { exact: true }).filter({ visible: true });
}

// Installs the filter once per document. On a reused page (see `test`) it then also covers the later tests on that
// page, which never asked for it.
export const explicitErrorHandler = async (page: Page) => {
  await page.evaluate(() => {
    if (window["e2eResizeObserverErrorFilter"]) return;
    window["e2eResizeObserverErrorFilter"] = true;
    window.addEventListener("error", e => {
      if (e.message === "ResizeObserver loop completed with undelivered notifications." ||
        e.message === "ResizeObserver loop limit exceeded") {
        e.stopImmediatePropagation();
      }
    });
  });
};

export function getButtonByText(locator: Locator | Page, text: string) {
  return locator.getByRole("button", { name: text });
}
export async function patchDragDropToDisableDrop(page: Page) {
  await page.evaluate(() => {
    const c = (window as any).creator;
    if (!c) return;

    if (c.dragDropSurveyElements) {
      c.dragDropSurveyElements.drop = () => { };
      if (c.dragDropSurveyElements.domAdapter) {
        c.dragDropSurveyElements.domAdapter.drop = () => { };
      }
    }

    if (c.dragDropChoices) {
      c.dragDropChoices.drop = () => { };
      if (c.dragDropChoices.domAdapter) {
        c.dragDropChoices.domAdapter.drop = () => { };
      }
    }
  });
}

export function getVisibleElement(page: Page, selector: string) {
  return page.locator(selector).filter({ visible: true });
}

export async function changeToolboxScrolling(page: Page, hasScroll: boolean) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((newVal) => {
    window["creator"].toolbox.overflowBehavior = newVal ? "scroll" : "hideInMenu";
  }, hasScroll);
}

export async function changeToolboxSearchEnabled(page: Page, enabled: boolean) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((newVal) => {
    window["creator"].toolbox.searchEnabled = newVal;
  }, enabled);
}

export async function changeToolboxLocation(page: Page, newVal: string) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((val) => {
    window["creator"].toolboxLocation = val;
  }, newVal);
}

export async function getPagesLength(page: Page): Promise<number> {
  await page.waitForFunction(() => !!window["creator"]);
  return await page.evaluate(() => window["creator"].survey.pages.length);
}
export async function getQuestionsLength(page: Page): Promise<number> {
  await page.waitForFunction(() => !!window["creator"]);
  return await page.evaluate(() => window["creator"].survey.getAllQuestions().length);
}

export async function getQuestionNameByIndex(page: Page, index: number): Promise<string> {
  await page.waitForFunction(() => !!window["creator"]);
  return await page.evaluate((i) => window["creator"].survey.getAllQuestions()[i].name, index);
}

export async function getItemValueByIndex(page: Page, questionName: string, index: number): Promise<string | undefined> {
  await page.waitForFunction(() => !!window["creator"]);
  return await page.evaluate(([qName, i]) => {
    const creator = (window as any).creator;
    if (!creator || !creator.survey) return undefined;
    const question = creator.survey.getQuestionByName(qName);
    const choices = question && question.visibleChoices ? question.visibleChoices : [];
    const choice = choices[i];
    return choice ? choice.value : undefined;
  }, [questionName, index]);
}

export async function setAllowEditSurveyTitle(page: Page, newVal: boolean) {
  await page.waitForFunction(() => !!window["creator"]);
  await page.evaluate((val) => {
    window["creator"].showSurveyHeader = val;
  }, newVal);
}

export async function handleShiftEnter(page: Page, selector: string) {
  await page.evaluate((sel: string) => {
    const el = document.querySelector(sel);
    if (el) {
      el.addEventListener("keypress", function (e: Event) {
        const ev = e as KeyboardEvent;
        if (ev.charCode === 13 && ev.shiftKey) {
          const editorEl = document.querySelector(sel) as HTMLElement;
          const selection = window.getSelection()!;
          const range = document.createRange();
          editorEl.innerHTML += "<div><br/></div>";
          range.setStart(editorEl, editorEl.childNodes.length);
          range.setEnd(editorEl, editorEl.childNodes.length);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      });
    }
  }, selector);
}

export const selectedObjectTextSelector = ".svc-side-bar__container-header .sv-action--object-selector .sd-action__title";

export async function addQuestionByAddQuestionButton(page: Page, text: string) {
  await page.locator(".svc-page__footer .svc-add-new-question-action .svc-surface-btn .svc-surface-btn__selector .sd-action").click();
  await page.locator(".sd-menu-item span").getByText(text, { exact: true }).filter({ visible: true }).click();
}

export function getAddNewQuestionButton(page: Page): Locator {
  return page.locator(".svc-page__footer .svc-add-new-question-action .svc-surface-btn > .svc-surface-btn__title-button").getByText("Add Question");
}

export function getToolboxItemByText(page: Page, text: string): Locator {
  return page.locator(".svc-toolbox__item-title").getByText(text, { exact: true });
}

export function getSubToolboxItemByText(page: Page, text: string): Locator {
  return page.locator(".svc-toolbox__item-subtype").getByText(text, { exact: true });
}

export async function hideElement(page: Page, selector: string) {
  await page.locator(selector).evaluate((element) => {
    element.style.visibility = "hidden";
  });
}

const HIDE_CONTENT_BEHIND_POPUP_STYLE_ID = "hide-content-behind-popup-style";
const HIDE_CONTENT_BEHIND_POPUP_CSS = `
  .svc-creator, .sps-body { visibility: hidden !important; }
  .sv-popup, .sv-popup *, .sv-dropdown-popup, .sv-dropdown-popup * { visibility: visible !important; }
`;

export async function hideContentBehindPopup(page: Page) {
  await page.evaluate(({ styleId, css }) => {
    const roots: Array<Document | ShadowRoot> = [];
    const addRoot = (root: Document | ShadowRoot | null | undefined) => {
      if (root && !roots.includes(root)) {
        roots.push(root);
      }
    };

    const creator = (window as any).creator;
    addRoot(creator?.rootElement?.getRootNode?.());
    addRoot(document.getElementById("survey-creator")?.shadowRoot ?? null);
    addRoot(document);

    for (const root of roots) {
      const host = root === document ? document.head : root;
      if (host.querySelector(`#${styleId}`)) {
        continue;
      }
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = css;
      host.appendChild(style);
    }
  }, { styleId: HIDE_CONTENT_BEHIND_POPUP_STYLE_ID, css: HIDE_CONTENT_BEHIND_POPUP_CSS });
}

export async function showContentBehindPopup(page: Page) {
  await page.evaluate((styleId) => {
    const roots: Array<Document | ShadowRoot> = [];
    const addRoot = (root: Document | ShadowRoot | null | undefined) => {
      if (root && !roots.includes(root)) {
        roots.push(root);
      }
    };

    const creator = (window as any).creator;
    addRoot(creator?.rootElement?.getRootNode?.());
    addRoot(document.getElementById("survey-creator")?.shadowRoot ?? null);
    addRoot(document);

    for (const root of roots) {
      const host = root === document ? document.head : root;
      host.querySelector(`#${styleId}`)?.remove();
    }
  }, HIDE_CONTENT_BEHIND_POPUP_STYLE_ID);
}

export { expect };