import * as SurveyCore from "survey-core";
import { DomWindowHelper } from "survey-core";

export function mockSurveyCoreGetRGBaColorIdentity(): jest.SpyInstance {
  return jest.spyOn(SurveyCore, "getRGBaColor").mockImplementation((v: any) => v);
}

export function mockDomWindowGetComputedStyleFromInlineStyles(): jest.SpyInstance {
  return jest.spyOn(DomWindowHelper, "getWindow").mockReturnValue({
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

