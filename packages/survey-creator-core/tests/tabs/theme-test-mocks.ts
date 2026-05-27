import { DomDocumentHelper } from "survey-core";
import { vi, type MockInstance } from "vitest";
import * as colorUtils from "../../src/utils/color-utils";

let getRGBaColorSpy: MockInstance | undefined;

export function mockGetRGBaColorIdentity(): void {
  getRGBaColorSpy?.mockRestore();
  getRGBaColorSpy = vi.spyOn(colorUtils.getRGBaColorResolver, "getRGBaColor").mockImplementation((v: any) => v);
}

export function restoreGetRGBaColorMock(): void {
  getRGBaColorSpy?.mockRestore();
  getRGBaColorSpy = undefined;
}

const defaultComputedCssVariables: Record<string, string> = {
  "--sjs2-typography-font-family-text": "Open Sans",
  "--sjs2-typography-font-family-component-header-title": "Open Sans",
  "--sjs2-typography-font-family-component-header-description": "Open Sans",
  "--sjs2-typography-font-weight-component-header-title": "700",
  "--sjs2-typography-font-weight-component-header-description": "400",
  "--sjs2-typography-font-size-component-header-title": "32px",
  "--sjs2-typography-font-size-component-header-description": "20px",
};

export function mockDomWindowGetComputedStyleFromInlineStyles(values: Record<string, string> = {}): MockInstance {
  const mergedDefaults = { ...defaultComputedCssVariables, ...values };
  return vi.spyOn(DomDocumentHelper, "getComputedStyle").mockImplementation((el: any) => {
    const style = el?.style;
    return {
      getPropertyValue: (property: string) => {
        if (style) {
          const v = style.getPropertyValue?.(property);
          if (typeof v === "string" && v.length > 0) {
            const varRefMatch = v.match(/^var\((--[^)]+)\)$/);
            if (varRefMatch) {
              const varName = varRefMatch[1];
              const cssVarValue = style.getPropertyValue?.(varName) || mergedDefaults[varName];
              return cssVarValue || "";
            }
            return v;
          }
          // Fallback for non-custom properties in JSDOM mocks
          const v2 = style[property];
          if (typeof v2 === "string" && v2.length > 0) return v2;
        }
        if (mergedDefaults[property] !== undefined) return mergedDefaults[property];
        return "";
      }
    } as any;
  });
}
