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

export function mockDomWindowGetComputedStyleFromInlineStyles(values: Record<string, string> = {}): MockInstance {
  return vi.spyOn(DomWindowHelper, "getWindow").mockReturnValue({
    ...window,
    getComputedStyle: (el: any) => {
      const style = el?.style;
      return {
        getPropertyValue: (property: string) => {
          if (values[property]) return values[property];
          if (!style) return "";
          const v = style.getPropertyValue?.(property);
          if (typeof v === "string" && v.length > 0) return v;
          // Fallback for non-custom properties in JSDOM mocks
          const v2 = style[property];
          return typeof v2 === "string" ? v2 : "";
        }
      } as any;
    }
  } as any);
}
