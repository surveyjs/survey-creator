import { DomWindowHelper } from "survey-core";
import { vi, type MockInstance } from "vitest";

let getRGBaColorSpy: MockInstance | undefined;

export async function mockSurveyCoreGetRGBaColorIdentity(): Promise<void> {
  getRGBaColorSpy?.mockRestore();
  const surveyCore = await vi.importActual<typeof import("survey-core")>("survey-core");
  getRGBaColorSpy = vi.spyOn(surveyCore, "getRGBaColor").mockImplementation((v: any) => v);
}

export function restoreSurveyCoreGetRGBaColorMock(): void {
  getRGBaColorSpy?.mockRestore();
  getRGBaColorSpy = undefined;
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
