// Makes jsdom's inline-style writes linear. Test infrastructure only: browsers do not have
// this cost, so src does not work around it.
//
// jsdom 25.0.1 gives every element's `style` a cssstyle 4.6.0 CSSStyleDeclaration with an
// onChange callback that writes the `style` attribute. cssstyle's _setProperty serializes the
// whole declaration (cssText) three times on every call, so setting N properties is O(N^2), and
// the cssText setter (also behind setAttribute("style", ...)) is no better. calculateThemeVariables
// (src/utils/utils.ts) sets the 1,752 BaseTheme variables one by one on a temporary div: 1.66 s
// per call, and every theme-tab activation calls it about twice.
//
// The patch subclasses CSSStyleDeclaration and assigns the subclass to cssstyle's export, which
// jsdom reads each time it creates an element. Elements created earlier (document, html, body)
// and the declarations that jsdom took from the export at load time (getComputedStyle results,
// rule styles) keep the original class. The subclass caches cssText until the next change. When
// _setProperty appends a declaration, the cached text grows by that one entry; when
// removeProperty removes the last one, the text loses it. Every other change falls back to
// cssstyle's own serializer, once instead of three times.
//
// It applies only to cssstyle 4.6.0, because it depends on cssstyle's internals. On any other
// version, or without cssstyle, it does nothing and tests/jsdom-inline-style.tests.ts fails. Revisit this file whenever
// jsdom or cssstyle changes. package.json pins cssstyle 4.6.0 so that jsdom resolves that copy: jsdom
// asks for ^4.1.0, and npm keeps an older install that satisfies it. jsdom 30.1.3 (checked on 2026-11-04) has its own
// CSSStyleDeclaration in place of cssstyle and is still quadratic, as is cssstyle 6.2.0.
import { createRequire } from "node:module";

// The tests file reads this key from the patched class: its value is the original class.
const patchMarker = Symbol.for("survey-creator-core:jsdom-inline-style");

// cssstyle is jsdom's dependency, not ours, so it is resolved from jsdom: that is the copy jsdom
// uses even if an install nests it. If it cannot be loaded, the patch does nothing.
let cssstyle: any;
let cssstyleVersion: string | undefined;
try {
  const jsdomRequire = createRequire(createRequire(import.meta.url).resolve("jsdom"));
  cssstyle = jsdomRequire("cssstyle");
  cssstyleVersion = jsdomRequire("cssstyle/package.json").version;
} catch{
  cssstyle = undefined;
}
const OriginalCSSStyleDeclaration = cssstyle?.CSSStyleDeclaration;
const originalPrototype = OriginalCSSStyleDeclaration?.prototype;

// The marker check keeps a second run of this file in the same worker from stacking subclasses.
const canPatch = cssstyleVersion === "4.6.0" && typeof OriginalCSSStyleDeclaration === "function" &&
  !OriginalCSSStyleDeclaration[patchMarker];

if (canPatch) {
  const cssTextDescriptor = Object.getOwnPropertyDescriptor(originalPrototype, "cssText") as PropertyDescriptor;
  const lengthDescriptor = Object.getOwnPropertyDescriptor(originalPrototype, "length") as PropertyDescriptor;

  // cssstyle's cssText getter reads _values and _priorities for every indexed property, so any
  // change in either map makes the cached text stale. Writes that change nothing keep it.
  class ChangeTrackingMap extends Map<string, any> {
    private onChanged: () => void;
    constructor(onChanged: () => void) {
      super();
      this.onChanged = onChanged;
    }
    set(key: string, value: any): this {
      if (!super.has(key) || super.get(key) !== value) {
        this.onChanged();
      }
      return super.set(key, value);
    }
    delete(key: string): boolean {
      if (super.has(key)) {
        this.onChanged();
      }
      return super.delete(key);
    }
    clear(): void {
      if (this.size > 0) {
        this.onChanged();
      }
      super.clear();
    }
  }

  // The same text as one entry of cssstyle's cssText getter.
  const serializeDeclaration = (property: string, value: string, priority: string): string =>
    priority === "important" ? `${property}: ${value} !${priority};` : `${property}: ${value};`;

  class LinearCSSStyleDeclaration extends OriginalCSSStyleDeclaration {
    [index: number]: string;
    declare _values: Map<string, any>;
    declare _priorities: Map<string, string>;
    declare _length: number;
    declare _computed: boolean;
    declare _readonly: boolean;
    declare _setInProgress: boolean;
    declare _onChange: ((cssText: string) => void) | null;
    declare _cachedCssText: string | null;

    constructor(onChangeCallback?: (cssText: string) => void, options?: any) {
      super(onChangeCallback, options);
      // Non-enumerable, like cssstyle's own internals.
      Object.defineProperty(this, "_cachedCssText", { value: null, writable: true, enumerable: false });
      const invalidate = () => { this._cachedCssText = null; };
      this._values = new ChangeTrackingMap(invalidate);
      this._priorities = new ChangeTrackingMap(invalidate);
    }

    get cssText(): string {
      if (this._computed) return "";
      if (this._cachedCssText === null) {
        this._cachedCssText = cssTextDescriptor.get!.call(this);
      }
      return this._cachedCssText as string;
    }
    set cssText(value: string) {
      cssTextDescriptor.set!.call(this, value);
    }

    get length(): number {
      return lengthDescriptor.get!.call(this);
    }
    // Array.prototype.splice (removeProperty, the cssText setter) writes length after it shifts
    // the indexed properties.
    set length(value: number) {
      this._cachedCssText = null;
      lengthDescriptor.set!.call(this, value);
    }

    // cssstyle 4.6.0's _setProperty, step for step, with cssText read through the cache and the
    // cache extended when the property is appended.
    _setProperty(property: string, value: string, priority: string | null = null): void {
      if (typeof value !== "string") return;
      if (value === "") {
        this.removeProperty(property);
        return;
      }
      const hasOnChange = typeof this._onChange === "function";
      let originalText = "";
      if (hasOnChange) {
        originalText = this.cssText;
      }
      let appended = false;
      if (this._values.has(property)) {
        const index = Array.prototype.indexOf.call(this, property);
        // The property already exists but is not indexed into `this` so add it.
        if (index < 0) {
          this[this._length] = property;
          this._length++;
          appended = true;
        }
      } else {
        this[this._length] = property;
        this._length++;
        appended = true;
      }
      this._values.set(property, value);
      if (priority) {
        this._priorities.set(property, priority);
      } else {
        this._priorities.delete(property);
      }
      if (appended) {
        // The new declaration is the last indexed one and the others did not change, so cssText
        // grows by one entry. Without onChange, originalText was not read: serialize on demand.
        if (hasOnChange && !this._computed) {
          const entry = serializeDeclaration(property, value, this._priorities.get(property) || "");
          this._cachedCssText = originalText ? `${originalText} ${entry}` : entry;
        } else {
          this._cachedCssText = null;
        }
      }
      if (hasOnChange && this.cssText !== originalText && !this._setInProgress) {
        (this._onChange as (cssText: string) => void)(this.cssText);
      }
    }

    // cssstyle 4.6.0's removeProperty, step for step. When the removed declaration is the last
    // indexed one, the cached text loses its last entry instead of being serialized again.
    // calculateThemeVariables does that for every calc() and border-effect variable: it sets
    // `width` or `box-shadow`, reads the computed value and removes the property.
    removeProperty(property: string): string {
      if (this._readonly || !this._values.has(property)) {
        return originalPrototype.removeProperty.call(this, property);
      }
      let nextText: string | null = null;
      const cached = this._cachedCssText;
      if (cached !== null && this._length > 0 && this[this._length - 1] === property) {
        const entry = serializeDeclaration(property, this._values.get(property).toString(), this._priorities.get(property) || "");
        if (cached === entry) {
          nextText = "";
        } else if (cached.endsWith(" " + entry)) {
          nextText = cached.slice(0, cached.length - entry.length - 1);
        }
      }
      const prevValue = this._values.get(property);
      this._values.delete(property);
      this._priorities.delete(property);
      const index = Array.prototype.indexOf.call(this, property);
      if (index >= 0) {
        Array.prototype.splice.call(this, index, 1);
        // After the splice the removed index equals the new length only if it was the last one.
        if (nextText !== null && index === this._length) {
          this._cachedCssText = nextText;
        }
        if (typeof this._onChange === "function") {
          this._onChange(this.cssText);
        }
      }
      return prevValue;
    }
  }

  Object.defineProperty(LinearCSSStyleDeclaration, patchMarker, { value: OriginalCSSStyleDeclaration });
  cssstyle.CSSStyleDeclaration = LinearCSSStyleDeclaration;
}
