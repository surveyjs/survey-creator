import { DomWindowHelper } from "survey-core";
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
  "--sjs2-typography-font-family-component-input-content": "Open Sans",
  "--sjs2-typography-font-weight-component-input-content": "400",
  "--sjs2-typography-font-size-component-input-content": "16px",
  "--sjs2-typography-font-family-component-question-title": "Open Sans",
  "--sjs2-typography-font-weight-component-question-title": "600",
  "--sjs2-typography-font-size-component-question-title": "16px",
  "--sjs2-typography-font-family-component-question-description": "Open Sans",
  "--sjs2-typography-font-weight-component-question-description": "400",
  "--sjs2-typography-font-size-component-question-description": "16px",
  "--sjs2-typography-font-family-component-page-title": "Open Sans",
  "--sjs2-typography-font-weight-component-page-title": "700",
  "--sjs2-typography-font-size-component-page-title": "24px",
  "--sjs2-typography-font-family-component-page-description": "Open Sans",
  "--sjs2-typography-font-weight-component-page-description": "400",
  "--sjs2-typography-font-size-component-page-description": "16px",
  "--sjs2-typography-font-family-component-header-title": "Open Sans",
  "--sjs2-typography-font-family-component-header-description": "Open Sans",
  "--sjs2-typography-font-weight-component-header-title": "700",
  "--sjs2-typography-font-weight-component-header-description": "400",
  "--sjs2-typography-font-size-component-header-title": "32px",
  "--sjs2-typography-font-size-component-header-description": "20px",
  "--sjs2-color-component-page-default-title": "rgba(0, 0, 0, 0.91)",
  "--sjs2-color-component-page-default-description": "rgba(0, 0, 0, 0.45)",
  "--sjs2-color-component-question-default-title": "rgba(0, 0, 0, 0.91)",
  "--sjs2-color-component-question-default-description": "rgba(0, 0, 0, 0.45)",
  "--sjs2-color-component-input-default-value": "rgba(0, 0, 0, 0.91)",
  "--sjs2-color-component-input-default-placeholder": "rgba(0, 0, 0, 0.45)",
};

export function mockDomWindowGetComputedStyleFromInlineStyles(values: Record<string, string> = {}): MockInstance {
  const mergedDefaults = { ...defaultComputedCssVariables, ...values };
  return vi.spyOn(DomWindowHelper, "getWindow").mockReturnValue({
    ...window,
    getComputedStyle: (el: any) => {
      const style = el?.style;
      return {
        getPropertyValue: (property: string) => {
          if (style) {
            const v = style.getPropertyValue?.(property);
            if (typeof v === "string" && v.length > 0) return v;
            // Fallback for non-custom properties in JSDOM mocks
            const v2 = style[property];
            if (typeof v2 === "string" && v2.length > 0) return v2;
          }
          if (mergedDefaults[property] !== undefined) return mergedDefaults[property];
          return "";
        }
      } as any;
    }
  } as any);
}
