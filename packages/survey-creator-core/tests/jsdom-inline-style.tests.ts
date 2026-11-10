// Tests for tests/jsdom-inline-style.ts, the setup file that makes jsdom's inline-style
// writes linear. They do not import the setup file, so the same tests run with and without
// the patch: without it, B1 and B2 pass and the "the patch" tests fail.
import { createRequire } from "node:module";
import { vi } from "vitest";

// The patched class carries the original class under this key (see the setup file).
const patchMarker = Symbol.for("survey-creator-core:jsdom-inline-style");

function getCssstyleVersion(): string {
  try {
    const jsdomRequire = createRequire(createRequire(import.meta.url).resolve("jsdom"));
    return "cssstyle " + jsdomRequire("cssstyle/package.json").version + " is installed";
  } catch{
    return "cssstyle cannot be loaded from jsdom";
  }
}

// cssstyle defines an own, undefined `constructor` on each declaration, so the class is read
// from the prototype.
const ElementStyleClass: any = Object.getPrototypeOf(document.createElement("div").style).constructor;
const OriginalCSSStyleDeclaration: any = ElementStyleClass[patchMarker] || ElementStyleClass;

// The third item marks a step after which the style attribute is behind cssText (see below).
type Step = [string, (style: any) => void, "attributeLags"?];

interface IObservedStyle {
  style: any;
  changes: Array<string>;
}

function createElementStyle(): IObservedStyle & { element: HTMLElement } {
  const element = document.createElement("div");
  const style: any = element.style;
  const changes: Array<string> = [];
  const jsdomOnChange = style._onChange;
  style._onChange = (text: string) => {
    changes.push(text);
    jsdomOnChange(text);
  };
  return { element, style, changes };
}

function createOriginalStyle(): IObservedStyle {
  const changes: Array<string> = [];
  const style = new OriginalCSSStyleDeclaration((text: string) => { changes.push(text); });
  return { style, changes };
}

function snapshot(observed: IObservedStyle, extraProperties: Array<string>) {
  const style = observed.style;
  const indices: Array<string> = [];
  for (let i = 0; i < style.length; i++) indices.push(style[i]);
  const properties = Array.from(new Set(indices.concat(extraProperties))).sort();
  const values: { [key: string]: string } = {};
  const priorities: { [key: string]: string } = {};
  for (const property of properties) {
    values[property] = style.getPropertyValue(property);
    priorities[property] = style.getPropertyPriority(property);
  }
  return {
    cssText: style.cssText,
    length: style.length,
    indices,
    outOfRangeIndex: style[style.length],
    values,
    priorities,
    changeCount: observed.changes.length,
    lastChange: observed.changes[observed.changes.length - 1],
  };
}

const watchedProperties = [
  "--a", "--x", "--sjs-0", "--sjs-1", "--sjs-25", "--sjs-49", "a",
  "width", "height", "color", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left",
  "border", "border-width", "border-style", "border-color", "border-top", "border-top-width", "border-left-color",
  "padding", "padding-top", "background", "background-color",
];

function customProperties(count: number): Array<Step> {
  const steps: Array<Step> = [];
  for (let i = 0; i < count; i++) {
    steps.push([`set --sjs-${i}`, (s) => s.setProperty(`--sjs-${i}`, `var(--other-${i}, ${i}px)`)]);
  }
  return steps;
}

const sequences: Array<{ name: string, steps: Array<Step> }> = [
  {
    name: "50 custom properties, overwrite, remove, re-add",
    steps: [
      ...customProperties(50),
      ["overwrite with the same value", (s) => s.setProperty("--sjs-25", "var(--other-25, 25px)")],
      ["overwrite with a new value", (s) => s.setProperty("--sjs-25", "calc(1px + 2px)")],
      ["remove in the middle", (s) => s.removeProperty("--sjs-10")],
      ["remove the last", (s) => s.removeProperty("--sjs-49")],
      ["re-add the last", (s) => s.setProperty("--sjs-49", "red")],
      ["append after re-add", (s) => s.setProperty("--sjs-50", "blue")],
      ["remove a missing property", (s) => s.removeProperty("--missing")],
    ],
  },
  {
    name: "append and remove the last, as calculateThemeVariables does",
    steps: [
      ...customProperties(20),
      ["width calc", (s) => s.setProperty("width", "calc(2px + var(--sjs-1))")],
      ["remove width", (s) => s.removeProperty("width")],
      ["box-shadow", (s) => s.setProperty("box-shadow", "0px 1px 2px 0px rgba(0, 0, 0, 0.15)")],
      ["remove box-shadow", (s) => s.removeProperty("box-shadow")],
      ["color important", (s) => s.setProperty("color", "red", "important"), "attributeLags"],
      ["remove color", (s) => s.removeProperty("color")],
      ["margin shorthand", (s) => s.setProperty("margin", "1px")],
      ["remove margin", (s) => s.removeProperty("margin")],
      ...Array.from({ length: 21 }, (_, i): Step => [`remove --sjs-${20 - i}`, (s) => s.removeProperty(`--sjs-${20 - i}`)]),
      ["append to empty", (s) => s.setProperty("--a", "1")],
      ["remove the only one", (s) => s.removeProperty("--a")],
    ],
  },
  {
    name: "custom property priority",
    steps: [
      ["--a important", (s) => s.setProperty("--a", "1", "important")],
      ["--a without priority", (s) => s.setProperty("--a", "1")],
      ["--b important", (s) => s.setProperty("--b", "2", "important")],
    ],
  },
  {
    name: "standard property priority",
    steps: [
      ["width important", (s) => s.setProperty("width", "1px", "important"), "attributeLags"],
      ["width without priority", (s) => s.setProperty("width", "1px")],
      ["height important after custom", (s) => { s.setProperty("--a", "1"); s.setProperty("height", "2px", "important"); }, "attributeLags"],
      ["color important, then append", (s) => { s.setProperty("color", "red", "important"); s.setProperty("--x", "3"); }],
    ],
  },
  {
    name: "standard properties and shorthands",
    steps: [
      ["width", (s) => s.setProperty("width", "10px")],
      ["margin", (s) => s.setProperty("margin", "1px 2px 3px 4px")],
      ["border", (s) => s.setProperty("border", "1px solid red")],
      ["remove margin-top", (s) => s.removeProperty("margin-top")],
      ["padding-top", (s) => s.setProperty("padding-top", "5px")],
      ["padding", (s) => s.setProperty("padding", "1px")],
      ["border-top-width", (s) => s.setProperty("border-top-width", "3px")],
      ["border-left-color", (s) => { s.borderLeftColor = "blue"; }],
      ["background", (s) => s.setProperty("background", "red")],
      ["camel-case width", (s) => { s.width = "20px"; }],
      ["border none", (s) => s.setProperty("border", "none")],
      ["invalid property", (s) => s.setProperty("not-a-property", "1")],
      ["remove border", (s) => s.removeProperty("border")],
    ],
  },
  {
    name: "cssText",
    steps: [
      ["--a before", (s) => s.setProperty("--a", "0")],
      ["cssText with an invalid property", (s) => { s.cssText = "a: b; --x: 1"; }],
      ["append after cssText", (s) => s.setProperty("--y", "2")],
      ["cssText with priorities and shorthands", (s) => { s.cssText = "width: 1px !important; margin: 2px; --z: 3 !important"; }],
      ["cssText = \"\"", (s) => { s.cssText = ""; }],
      ["append after empty cssText", (s) => s.setProperty("--a", "1")],
    ],
  },
  {
    name: "malformed cssText",
    steps: [
      ["--a before", (s) => s.setProperty("--a", "0")],
      // cssstyle returns before it notifies and leaves _setInProgress set, so later
      // setProperty calls do not notify either; removeProperty still does.
      ["malformed cssText", (s) => { s.cssText = "color: red; }"; }, "attributeLags"],
      ["--b after", (s) => s.setProperty("--b", "1"), "attributeLags"],
      ["--c after", (s) => s.setProperty("--c", "2"), "attributeLags"],
      ["remove --c", (s) => s.removeProperty("--c")],
    ],
  },
  {
    // cssstyle's own paths change the maps whenever they change the indices; these do not.
    name: "splice and length written from outside",
    steps: [
      ...customProperties(5),
      ["splice the first", (s) => { Array.prototype.splice.call(s, 0, 1); }, "attributeLags"],
      ["length - 1", (s) => { s.length = s.length - 1; }, "attributeLags"],
      ["append after", (s) => s.setProperty("--x", "1")],
      ["remove the last after", (s) => s.removeProperty("--x")],
    ],
  },
  {
    // The only path in cssstyle 4.6.0 that appends a declaration with a priority:
    // _subImplicitSetter re-adds the other sides of an important shorthand.
    name: "append with a priority",
    steps: [
      ["margin important", (s) => s.setProperty("margin", "1px", "important"), "attributeLags"],
      ["margin-top", (s) => s.setProperty("margin-top", "2px")],
      ["append after", (s) => s.setProperty("--x", "1")],
      ["remove the last important side", (s) => s.removeProperty("margin-left")],
    ],
  },
  {
    name: "empty value removes",
    steps: [
      ["--a", (s) => s.setProperty("--a", "1")],
      ["--b", (s) => s.setProperty("--b", "2")],
      ["--a empty", (s) => s.setProperty("--a", "")],
      ["width", (s) => s.setProperty("width", "1px")],
      ["width empty", (s) => s.setProperty("width", "")],
      ["--b null", (s) => s.setProperty("--b", null)],
    ],
  },
];

describe("jsdom inline style: same output as cssstyle", () => {
  for (const sequence of sequences) {
    test(sequence.name, () => {
      const patched = createElementStyle();
      const original = createOriginalStyle();
      for (const [stepName, apply] of sequence.steps) {
        apply(patched.style);
        apply(original.style);
        expect(snapshot(patched, watchedProperties), stepName).toEqual(snapshot(original, watchedProperties));
      }
    });
  }
  for (const sequence of sequences) {
    test(sequence.name + ", without onChange", () => {
      const patched: IObservedStyle = { style: new ElementStyleClass(), changes: [] };
      const original: IObservedStyle = { style: new OriginalCSSStyleDeclaration(), changes: [] };
      for (const [stepName, apply] of sequence.steps) {
        apply(patched.style);
        apply(original.style);
        expect(snapshot(patched, watchedProperties), stepName).toEqual(snapshot(original, watchedProperties));
      }
    });
  }
});

describe("jsdom inline style: the style attribute follows", () => {
  // For a standard property, cssstyle 4.6.0 sets the priority after it notifies jsdom, so
  // after setProperty("width", "1px", "important") the attribute misses "!important" until
  // the next change. The patch keeps that; the attribute then equals the last notification.
  for (const sequence of sequences) {
    test(sequence.name, () => {
      const { element, style, changes } = createElementStyle();
      for (const [stepName, apply, attributeLags] of sequence.steps) {
        apply(style);
        const attribute = element.getAttribute("style") ?? "";
        if (attributeLags) {
          expect(attribute, stepName).toBe(changes[changes.length - 1]);
          expect(attribute, stepName).not.toBe(style.cssText);
        } else {
          expect(attribute, stepName).toBe(style.cssText);
        }
      }
    });
  }

  test("setting the attribute updates the style", () => {
    const patched = createElementStyle();
    const original = createOriginalStyle();
    const texts = [
      "color: red; --z: 3",
      "--z: 4; width: 1px !important; margin: 1px 2px",
      "border: 1px solid blue; a: b",
      "",
    ];
    patched.style.setProperty("--before", "1");
    original.style.setProperty("--before", "1");
    for (const text of texts) {
      patched.element.setAttribute("style", text);
      original.style.cssText = text;
      expect(snapshot(patched, watchedProperties), text).toEqual(snapshot(original, watchedProperties));
      patched.style.setProperty("--after", "2");
      original.style.setProperty("--after", "2");
      expect(snapshot(patched, watchedProperties), text + ", then --after").toEqual(snapshot(original, watchedProperties));
      expect(patched.element.getAttribute("style"), text + ", then --after").toBe(patched.style.cssText);
    }
  });
});

describe("jsdom inline style: the patch", () => {
  test("is active", () => {
    const isPatched = !!ElementStyleClass[patchMarker] && ElementStyleClass !== OriginalCSSStyleDeclaration;
    expect(isPatched, `Element styles are not patched by tests/jsdom-inline-style.ts (${getCssstyleVersion()}). ` +
      "The patch applies only to cssstyle 4.6.0. If an older cssstyle is installed, run npm install: package.json pins 4.6.0. Otherwise, recheck it against the CSSStyleDeclaration that jsdom now uses: " +
      "if setProperty is still quadratic, update the patch and its version check; if it is linear now, remove the patch.").toBe(true);
  });

  // cssstyle's cssText getter calls getPropertyValue once per declaration, so the call count
  // is the number of declarations serialized. Quadratic code makes about 4x the calls for
  // twice the declarations; linear code at most about 2x, and at most 2 per declaration.
  function countGetPropertyValueCalls(count: number, apply: (element: HTMLElement, style: any) => void): number {
    const element = document.createElement("div");
    const style: any = element.style;
    const spy = vi.spyOn(style, "getPropertyValue");
    apply(element, style);
    const calls = spy.mock.calls.length;
    spy.mockRestore();
    expect(style.length).toBe(count);
    return calls;
  }

  function expectLinear(counts: Array<number>, what: string): void {
    const message = `getPropertyValue calls for ${what}: ${counts[0]} at 500, ${counts[1]} at 1,000`;
    expect(counts[0], message).toBeLessThanOrEqual(2 * 500);
    expect(counts[1], message).toBeLessThanOrEqual(2 * 1000);
    // The ratio check needs a floor: a patch that serializes nothing while appending makes 0 calls.
    expect(counts[1], message).toBeLessThanOrEqual(Math.max(2.5 * counts[0], 1000));
  }

  test("is linear in setProperty", () => {
    const counts = [500, 1000].map((n) => countGetPropertyValueCalls(n, (element, style) => {
      for (let i = 0; i < n; i++) style.setProperty(`--sjs-var-${i}`, `var(--other-${i}, calc(1px * ${i}))`);
      expect(element.getAttribute("style")).toBe(style.cssText);
    }));
    expectLinear(counts, "N setProperty calls");
  });

  test("is linear in setAttribute(\"style\")", () => {
    const counts = [500, 1000].map((n) => {
      const text = Array.from({ length: n }, (_, i) => `--sjs-var-${i}: ${i}px`).join("; ");
      return countGetPropertyValueCalls(n, (element, style) => {
        element.setAttribute("style", text);
        expect(style.getPropertyValue(`--sjs-var-${n - 1}`)).toBe(`${n - 1}px`);
      });
    });
    expectLinear(counts, "one style attribute with N declarations");
  });
});
