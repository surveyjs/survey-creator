import { DomWindowHelper } from "survey-core";
import { vi, type MockInstance } from "vitest";
import { getRGBaColorTestBridge } from "../survey-core-getRGBA-test-state";

/** ESM namespace exports are not spyable; wiring lives in survey-core-getRGBA-mock-setup.ts (first setup file). */
export async function mockSurveyCoreGetRGBaColorIdentity(): Promise<void> {
  getRGBaColorTestBridge.useIdentity = true;
}

export function restoreSurveyCoreGetRGBaColorMock(): void {
  getRGBaColorTestBridge.useIdentity = false;
}

export function mockDomWindowGetComputedStyleFromInlineStyles(): MockInstance {
  return vi.spyOn(DomWindowHelper, "getWindow").mockReturnValue({
    ...window,
    getComputedStyle: (el: any) => {
      const style = el?.style;
      return {
        getPropertyValue: (property: string) => {
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
