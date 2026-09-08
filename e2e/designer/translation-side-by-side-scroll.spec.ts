import { url, test, expect, setJSON, setCreatorProp, getTabbedMenuItemByText } from "../helper";

const title = "Translation tab - side by side scroll";
const tolerance = 2;

// A long survey whose target texts are taller than the source ones: the "de" title and
// description run several lines longer than the default ones, and enough questions follow
// for both panes to scroll and to render lazily. Every string but the last question's title
// is translated, so "the next untranslated string" sits at the very end of the survey.
const longLine = (word: string, count: number): string => Array(count).fill(word).join(" ");
function createJSON(locale: string = "de", translated: boolean = true): any {
  const de = (text: string, deText: string): any => translated ? { default: text, [locale]: deText } : text;
  const elements: Array<any> = [];
  for (let i = 1; i <= 32; i++) {
    const name = "q" + i;
    const element: any = { type: "text", name: name, title: de("Question " + i, "Frage " + i) };
    // The tenth and the eleventh question share a flow row; the target text of the eleventh
    // one is much longer than the source text.
    if (i === 11) {
      element.startWithNewLine = false;
      element.title = de("Question 11", longLine("Frage elf", 30));
    }
    if (i === 12) {
      element.type = "checkbox";
      element.choices = [
        { value: "item1", text: de("Item 1", "Eintrag 1") },
        { value: "item2", text: de("Item 2", "Eintrag 2") }
      ];
    }
    if (i === 32) {
      element.title = "Question 32";
    }
    if (i === 5) {
      elements.push({
        type: "panel", name: "panel1", title: de("Panel 1", longLine("Gruppe eins", 24)),
        elements: [element]
      });
    } else {
      elements.push(element);
    }
  }
  return {
    locale: locale,
    title: de("Survey title", longLine("Umfrage Titel", 40)),
    description: de("Survey description", longLine("Umfrage Beschreibung", 60)),
    pages: [
      { name: "page1", title: de("Page 1", longLine("Seite eins", 30)), elements: elements },
      { name: "page2", elements: [{ type: "text", name: "q40", title: de("Question 40", "Frage 40") }] }
    ]
  };
}

async function openTranslation(page, json: any, orientation: "horizontal" | "vertical" = "horizontal") {
  await setJSON(page, json);
  await setCreatorProp(page, "translationMode", "sideBySide");
  await setCreatorProp(page, "translationFormViewOrientation", orientation);
  await getTabbedMenuItemByText(page, "Translation").click();
  await expect(page.locator(".st-side-by-side__source")).toBeVisible();
  await expect(page.locator(".st-side-by-side__target")).toBeVisible();
}
async function openLocaleDropdown(page, title: string) {
  await page.locator(".sd-dropdown__input").filter({ has: page.getByRole("combobox", { name: title }) }).click();
}

// The rendered rows of a pane: the header rows and every rendered question, keyed the way the
// model pairs them, each with its viewport offset and height - and the number of skeletons.
interface IRowBox { y: number, h: number }
interface IPaneRows { rows: { [key: string]: IRowBox }, skeletons: number }
async function collectRows(page): Promise<{ source: IPaneRows, target: IPaneRows }> {
  return await page.locator(".st-side-by-side").evaluate((root: Element) => {
    const collect = (pane: Element): IPaneRows => {
      const rows: { [key: string]: IRowBox } = {};
      const add = (key: string, el: Element | null): void => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        rows[key] = { y: rect.top, h: rect.height };
      };
      add("survey:title", pane.querySelector(".sd-header__text .sd-title"));
      add("survey:description", pane.querySelector(".sd-header__text .sd-description"));
      add("page:title", pane.querySelector(".sd-page__title"));
      add("panel:title", pane.querySelector(".sd-panel__title"));
      pane.querySelectorAll(".sd-question[data-name]").forEach(el => add("question:" + el.getAttribute("data-name"), el));
      return { rows: rows, skeletons: pane.querySelectorAll(".sv-skeleton-element").length };
    };
    return {
      source: collect(root.querySelector(".st-side-by-side__source")!),
      target: collect(root.querySelector(".st-side-by-side__target")!)
    };
  });
}
// Every row rendered in one pane is rendered in the other, at the same offset and height.
function expectRowsAligned(panes: { source: IPaneRows, target: IPaneRows }, minRows: number = 1): void {
  const sourceKeys = Object.keys(panes.source.rows).sort();
  const targetKeys = Object.keys(panes.target.rows).sort();
  expect(sourceKeys).toEqual(targetKeys);
  expect(sourceKeys.length).toBeGreaterThanOrEqual(minRows);
  const mismatches = sourceKeys.filter(key => {
    const s = panes.source.rows[key];
    const t = panes.target.rows[key];
    return Math.abs(s.y - t.y) > tolerance || Math.abs(s.h - t.h) > tolerance;
  }).map(key => `${key}: source ${JSON.stringify(panes.source.rows[key])} target ${JSON.stringify(panes.target.rows[key])}`);
  expect(mismatches).toEqual([]);
}
async function expectPanesAligned(page, minRows: number = 1): Promise<{ source: IPaneRows, target: IPaneRows }> {
  let panes;
  await expect.poll(async () => {
    panes = await collectRows(page);
    const sourceKeys = Object.keys(panes.source.rows).sort();
    const targetKeys = Object.keys(panes.target.rows).sort();
    if (sourceKeys.join() !== targetKeys.join() || sourceKeys.length < minRows) return false;
    return sourceKeys.every(key => Math.abs(panes.source.rows[key].y - panes.target.rows[key].y) <= tolerance
      && Math.abs(panes.source.rows[key].h - panes.target.rows[key].h) <= tolerance);
  }, { timeout: 10000 }).toBe(true);
  expectRowsAligned(panes, minRows);
  return panes;
}
// A scroll to the end is repeated while the rows that come into the view render and grow the
// content (the way a user keeps turning the wheel); a scroll to the middle is one jump.
async function scrollContainer(page, to: "top" | "middle" | "end") {
  const container = page.locator(".st-side-by-side");
  const setScrollTop = async (): Promise<boolean> => await container.evaluate((el, to) => {
    el.scrollTop = to === "top" ? 0 : to === "middle" ? (el.scrollHeight - el.clientHeight) / 2 : el.scrollHeight;
    return to !== "end" || el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
  }, to);
  for (let attempt = 0; attempt < 20; attempt++) {
    if (await setScrollTop()) {
      if (to !== "end") return;
      await waitForVisibleRowsRendered(page);
      if (await container.evaluate(el => el.scrollTop + el.clientHeight >= el.scrollHeight - 2)) return;
    } else {
      await page.waitForTimeout(50);
    }
  }
}
// Waits until the rows in the view are rendered: no skeleton intersects the container.
async function waitForVisibleRowsRendered(page) {
  await expect.poll(async () => await page.locator(".st-side-by-side").evaluate((root: Element) => {
    const container = root.getBoundingClientRect();
    return Array.from(root.querySelectorAll(".sv-skeleton-element")).filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.bottom > container.top && rect.top < container.bottom;
    }).length;
  }), { timeout: 10000 }).toBe(0);
}
// Scrolls the container down screen by screen, the way a user does, until the row is rendered
// and in the view.
async function scrollUntilRowVisible(page, name: string) {
  const container = page.locator(".st-side-by-side");
  for (let attempt = 0; attempt < 30; attempt++) {
    await waitForVisibleRowsRendered(page);
    if (await isInContainerView(page, getPaneRow(page, "target", name))) return;
    await container.evaluate(el => { el.scrollTop = el.scrollTop + el.clientHeight * 0.6; });
  }
  throw new Error("The row " + name + " did not come into the view");
}
function getPaneRow(page, pane: "source" | "target", name: string) {
  return page.locator(`.st-side-by-side__${pane} .sd-question[data-name="${name}"]`);
}
async function isInContainerView(page, locator): Promise<boolean> {
  const containerBox = (await page.locator(".st-side-by-side").boundingBox())!;
  // A lazily rendered row that is still a skeleton has no question root yet.
  if (await locator.count() === 0) return false;
  const box = await locator.boundingBox();
  return !!box && box.y >= containerBox.y - tolerance && box.y + box.height <= containerBox.y + containerBox.height + tolerance;
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("horizontal: one scroll container, the panes do not scroll on their own, the divider spans the content", async ({ page }) => {
    await openTranslation(page, createJSON());
    const container = page.locator(".st-side-by-side");
    const scroll = await container.evaluate(el => ({ scrollHeight: el.scrollHeight, clientHeight: el.clientHeight }));
    expect(scroll.scrollHeight).toBeGreaterThan(scroll.clientHeight + 100);
    const panesBox = (await page.locator(".st-side-by-side__panes").boundingBox())!;
    const sourceBox = (await page.locator(".st-side-by-side__source").boundingBox())!;
    const targetBox = (await page.locator(".st-side-by-side__target").boundingBox())!;
    // The inner wrapper is as tall as the scrolled content, and so are the panes.
    expect(Math.abs(panesBox.height - scroll.scrollHeight)).toBeLessThanOrEqual(tolerance);
    expect(Math.abs(sourceBox.height - panesBox.height)).toBeLessThanOrEqual(tolerance);
    expect(Math.abs(targetBox.height - panesBox.height)).toBeLessThanOrEqual(tolerance);
    const paneScroll = await page.locator(".st-side-by-side__source").evaluate(el => ({ scrollHeight: el.scrollHeight, clientHeight: el.clientHeight, overflowY: getComputedStyle(el).overflowY }));
    expect(paneScroll.overflowY).toBe("visible");
    expect(Math.abs(paneScroll.scrollHeight - paneScroll.clientHeight)).toBeLessThanOrEqual(tolerance);
    // The source pane's right border runs to the bottom of the content, beyond the viewport.
    const border = await page.locator(".st-side-by-side__source").evaluate(el => getComputedStyle(el).borderRightWidth);
    expect(parseFloat(border)).toBeGreaterThan(0);
    expect(sourceBox.y + sourceBox.height).toBeGreaterThan(scroll.clientHeight + 100);
    expect(Math.abs((sourceBox.y + sourceBox.height) - (panesBox.y + panesBox.height))).toBeLessThanOrEqual(tolerance);
  });

  test("horizontal: the rows of the two panes are aligned at the top, in the middle and at the end", async ({ page }) => {
    await openTranslation(page, createJSON());
    await waitForVisibleRowsRendered(page);
    let panes = await expectPanesAligned(page, 6);
    // The taller target texts set the row heights, and the source rows follow them.
    ["survey:title", "survey:description", "page:title", "panel:title", "question:q1"].forEach(key => {
      expect(panes.source.rows[key]).toBeTruthy();
    });
    expect(panes.target.rows["survey:title"].h).toBeGreaterThan(40);

    await scrollContainer(page, "middle");
    await waitForVisibleRowsRendered(page);
    panes = await expectPanesAligned(page, 6);
    // Rows beyond the first lazy batch (q1-q3) are rendered now, on both sides.
    const lazyRows = Object.keys(panes.source.rows).filter(key => /^question:q([4-9]|[12][0-9]|3[01])$/.test(key));
    expect(lazyRows.length).toBeGreaterThan(0);

    await scrollContainer(page, "end");
    await waitForVisibleRowsRendered(page);
    await expect(getPaneRow(page, "source", "q32")).toBeVisible();
    await expect(getPaneRow(page, "target", "q32")).toBeVisible();
    panes = await expectPanesAligned(page, 6);
    expect(panes.source.rows["question:q32"]).toBeTruthy();
    expect(panes.source.rows["question:q1"]).toBeTruthy();
    // The measured geometry, for the record of a run.
    const report = ["survey:title", "survey:description", "page:title", "panel:title", "question:q1", "question:q16", "question:q32"]
      .filter(key => !!panes.source.rows[key])
      .map(key => `${key} source y=${panes.source.rows[key].y.toFixed(1)} h=${panes.source.rows[key].h.toFixed(1)} target y=${panes.target.rows[key].y.toFixed(1)} h=${panes.target.rows[key].h.toFixed(1)}`);
    // eslint-disable-next-line no-console
    console.log("side-by-side rows at the end:\n" + report.join("\n"));
  });

  test("horizontal: an inline edit re-aligns the rows - the source row grows and shrinks with the target text", async ({ page }) => {
    await openTranslation(page, createJSON());
    await waitForVisibleRowsRendered(page);
    const before = await expectPanesAligned(page, 6);
    const targetTitle = page.locator(".st-side-by-side__target .sd-question[data-name=q2] .sd-question__title .sv-string-editor");
    await targetTitle.click();
    await page.keyboard.press("End");
    await page.keyboard.type(" " + longLine("weitere Zeile", 60));
    await page.keyboard.press("Control+Enter");
    await expect.poll(async () => (await collectRows(page)).source.rows["question:q2"].h, { timeout: 10000 })
      .toBeGreaterThan(before.source.rows["question:q2"].h + 20);
    const grown = await expectPanesAligned(page, 6);
    expect(grown.target.rows["question:q2"].h).toBeGreaterThan(before.target.rows["question:q2"].h + 20);

    await targetTitle.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("Frage 2");
    await page.keyboard.press("Control+Enter");
    await expect.poll(async () => (await collectRows(page)).source.rows["question:q2"].h, { timeout: 10000 })
      .toBeLessThanOrEqual(before.source.rows["question:q2"].h + tolerance);
    const shrunk = await expectPanesAligned(page, 6);
    expect(Math.abs(shrunk.target.rows["question:q2"].h - before.target.rows["question:q2"].h)).toBeLessThanOrEqual(tolerance);
  });

  test("horizontal: the next untranslated string scrolls the container to the string, the source counterpart at the same offset", async ({ page }) => {
    await openTranslation(page, createJSON());
    await waitForVisibleRowsRendered(page);
    const progressLink = page.locator(".svc-side-bar .spg-question[data-name=translationProgress]").getByRole("button", { name: /strings translated/ });
    await expect(progressLink).toBeVisible();
    expect(await isInContainerView(page, getPaneRow(page, "target", "q32"))).toBe(false);
    await progressLink.click();
    const stringsDialog = page.locator(".sv-popup.st-element-strings-dialog");
    await expect(stringsDialog).toBeVisible();
    await stringsDialog.locator(".sv-popup__body-footer button").click();
    await expect(stringsDialog).toHaveCount(0);
    await expect.poll(async () => await isInContainerView(page, getPaneRow(page, "target", "q32")), { timeout: 10000 }).toBe(true);
    await waitForVisibleRowsRendered(page);
    const panes = await expectPanesAligned(page, 3);
    expect(panes.source.rows["question:q32"]).toBeTruthy();
  });

  test("vertical: the panes mirror each other's scroll position", async ({ page }) => {
    await openTranslation(page, createJSON(), "vertical");
    await expect(page.locator(".st-side-by-side--vertical")).toBeVisible();
    const source = page.locator(".st-side-by-side__source");
    const target = page.locator(".st-side-by-side__target");
    const sourceScroll = await source.evaluate(el => ({ scrollHeight: el.scrollHeight, clientHeight: el.clientHeight }));
    expect(sourceScroll.scrollHeight).toBeGreaterThan(sourceScroll.clientHeight + 100);

    await source.evaluate(el => { el.scrollTop = (el.scrollHeight - el.clientHeight) / 2; });
    const sourceTop = await source.evaluate(el => el.scrollTop);
    expect(sourceTop).toBeGreaterThan(100);
    await expect.poll(async () => await target.evaluate(el => el.scrollTop), { timeout: 5000 }).toBeCloseTo(sourceTop, 0);
    // The question at the top of the source pane is the one at the top of the target pane.
    const topQuestion = async (pane): Promise<string> => await pane.evaluate(el => {
      const paneTop = el.getBoundingClientRect().top;
      const rows = Array.from(el.querySelectorAll(".sd-question[data-name]")) as Array<HTMLElement>;
      const first = rows.filter(row => row.getBoundingClientRect().bottom > paneTop + 1)[0];
      return first ? first.getAttribute("data-name")! : "";
    });
    await expect.poll(async () => await topQuestion(source), { timeout: 10000 }).not.toBe("");
    await expect.poll(async () => await topQuestion(target), { timeout: 10000 }).toBe(await topQuestion(source));

    await target.evaluate(el => { el.scrollTop = el.scrollTop + 300; });
    const targetTop = await target.evaluate(el => el.scrollTop);
    await expect.poll(async () => await source.evaluate(el => el.scrollTop), { timeout: 5000 }).toBeCloseTo(targetTop, 0);
  });

  test("target language switch keeps the rows aligned; clearing it restores the natural heights", async ({ page }) => {
    // Keep the locale dropdowns short so every item is rendered in the popup list.
    await page.evaluate(() => {
      (window as any).Survey.surveyLocalization.supportedLocales = ["de", "fr"];
    });
    const json = createJSON("fr");
    // German texts, much longer than the French ones, wait to be switched to.
    json.title.de = longLine("Umfrage Titel", 60);
    json.pages[0].elements[0].title.de = longLine("Frage eins", 40);
    await openTranslation(page, json);
    await waitForVisibleRowsRendered(page);
    const before = await expectPanesAligned(page, 6);

    await openLocaleDropdown(page, "Target language");
    await page.getByRole("option", { name: "Deutsch" }).click();
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1")).toHaveCount(0);
    await expect.poll(async () => (await collectRows(page)).source.rows["question:q1"].h, { timeout: 10000 })
      .toBeGreaterThan(before.source.rows["question:q1"].h + 20);
    const after = await expectPanesAligned(page, 6);
    expect(after.target.rows["survey:title"].h).toBeGreaterThan(before.target.rows["survey:title"].h + 20);

    await page.locator(".svc-side-bar .spg-question[data-name=targetLocale]").getByRole("button", { name: "Clear" }).click();
    await expect(page.locator(".st-side-by-side__target")).toHaveCount(0);
    await expect(page.locator(".st-side-by-side--no-target")).toBeVisible();
    // No pairs: no source row carries an inline min-height, and the rows have their natural heights.
    await expect(page.locator(".st-side-by-side__source [style*=\"min-height\"]")).toHaveCount(0);
    await expect.poll(async () => (await getPaneRow(page, "source", "q1").boundingBox())!.height, { timeout: 10000 })
      .toBeLessThan(before.source.rows["question:q1"].h + tolerance);
    // The source pane alone still scrolls in the shared container.
    const scroll = await page.locator(".st-side-by-side").evaluate(el => ({ scrollHeight: el.scrollHeight, clientHeight: el.clientHeight }));
    expect(scroll.scrollHeight).toBeGreaterThan(scroll.clientHeight + 100);
    await scrollContainer(page, "end");
    await expect(getPaneRow(page, "source", "q32")).toBeVisible();
  });

  test("lazy rendering: after a scroll to the end and back to the top no row pair differs", async ({ page }) => {
    await openTranslation(page, createJSON());
    await waitForVisibleRowsRendered(page);
    await scrollContainer(page, "end");
    await waitForVisibleRowsRendered(page);
    await expect(getPaneRow(page, "target", "q32")).toBeVisible();
    await scrollContainer(page, "top");
    await waitForVisibleRowsRendered(page);
    const panes = await expectPanesAligned(page, 10);
    expect(panes.source.skeletons).toBe(panes.target.skeletons);
  });

  test("lazy rendering: a large scroll jump before the rows rendered leaves no skeleton facing a rendered row", async ({ page }) => {
    await openTranslation(page, createJSON());
    // Straight to the end, while the rows below the fold are still skeletons.
    await scrollContainer(page, "end");
    await waitForVisibleRowsRendered(page);
    await expect(getPaneRow(page, "target", "q32")).toBeVisible();
    let panes = await expectPanesAligned(page, 3);
    expect(panes.source.skeletons).toBe(panes.target.skeletons);

    await scrollContainer(page, "middle");
    await waitForVisibleRowsRendered(page);
    panes = await expectPanesAligned(page, 3);
    expect(panes.source.skeletons).toBe(panes.target.skeletons);
    // A skeleton in one pane never faces a rendered row in the other: the same rows are
    // rendered on both sides (the keys are compared above), and the skeletons are the same.
    const skeletonIds = await page.locator(".st-side-by-side").evaluate((root: Element) => {
      const ids = (pane: string): Array<string> => Array.from(root.querySelectorAll(`.st-side-by-side__${pane} .sv-skeleton-element`))
        .map(el => el.getAttribute("id") || "").map(id => id.replace(/^.*?_/, ""));
      return { source: ids("source"), target: ids("target") };
    });
    expect(skeletonIds.source.length).toBe(skeletonIds.target.length);
  });

  test("box model: questions sharing a flow row and a padded question are equalized, and shrink back", async ({ page }) => {
    await openTranslation(page, createJSON());
    await waitForVisibleRowsRendered(page);
    await scrollUntilRowVisible(page, "q12");
    await expect(getPaneRow(page, "target", "q11")).toBeVisible();
    await expect(getPaneRow(page, "target", "q12")).toBeVisible();
    const before = await expectPanesAligned(page, 6);
    // The two questions of the flow row sit side by side and are as tall as the longer one.
    expect(Math.abs(before.source.rows["question:q10"].y - before.source.rows["question:q11"].y)).toBeLessThanOrEqual(tolerance);
    expect(before.target.rows["question:q11"].h).toBeGreaterThan(before.target.rows["question:q13"].h + 20);
    expect(before.source.rows["question:q12"].h).toBeGreaterThan(before.source.rows["question:q13"].h);

    // Dropping the long target text shrinks the pair back.
    const targetTitle = page.locator(".st-side-by-side__target .sd-question[data-name=q11] .sd-question__title .sv-string-editor");
    await targetTitle.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("Frage 11");
    await page.keyboard.press("Control+Enter");
    await expect.poll(async () => (await collectRows(page)).source.rows["question:q11"].h, { timeout: 10000 })
      .toBeLessThan(before.source.rows["question:q11"].h - 20);
    const after = await expectPanesAligned(page, 6);
    expect(Math.abs(after.source.rows["question:q11"].h - after.source.rows["question:q13"].h)).toBeLessThanOrEqual(tolerance + 1);
  });
});
