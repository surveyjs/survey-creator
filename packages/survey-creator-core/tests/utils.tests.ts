import { calculateThemeVariables, capitalize } from "../src/utils/utils";
import { ColorCalculator, HSBToRGB, HueColorCalculator, RGBToHSB } from "../src/utils/color-utils";

test("check capitalize function", () => {
  expect(capitalize("test str first")).toEqual("Test Str First");
  expect(capitalize("test2")).toEqual("Test2");
  expect(capitalize("Test3")).toEqual("Test3");
  expect(capitalize("test str   four")).toEqual("Test Str Four");
  expect(capitalize("ελληνικά")).toEqual("Ελληνικά"); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
});

test("RGBToHSB HSBToRGB", (): any => {
  const primaryColorRgba = [25, 179, 148, 1];
  const primaryColorDarkRgba = [20, 164, 139, 1];
  const primaryColorLightRgba = [25, 179, 148, 0.1];

  const primaryColorHSB = RGBToHSB(primaryColorRgba[0], primaryColorRgba[1], primaryColorRgba[2]);
  const primaryColorDarkHSB = RGBToHSB(primaryColorDarkRgba[0], primaryColorDarkRgba[1], primaryColorDarkRgba[2]);
  const primaryColorLightHSB = RGBToHSB(primaryColorLightRgba[0], primaryColorLightRgba[1], primaryColorLightRgba[2]);

  const newPrimaryColorRGB = HSBToRGB(primaryColorHSB[0], primaryColorHSB[1], primaryColorHSB[2]);
  const newPrimaryColorDarkRGB = HSBToRGB(primaryColorDarkHSB[0], primaryColorDarkHSB[1], primaryColorDarkHSB[2]);
  const newPrimaryColorLightRGB = HSBToRGB(primaryColorLightHSB[0], primaryColorLightHSB[1], primaryColorLightHSB[2]);

  expect(newPrimaryColorRGB).toEqual([25, 179, 148]);
  expect(newPrimaryColorDarkRGB).toEqual([20, 164, 139]);
  expect(newPrimaryColorLightRGB).toEqual([25, 179, 148]);
});

test("ColorCalculator rgba", (): any => {
  const primaryColor = "rgba(25, 179, 148, 1)";
  const primaryColorLight = "rgba(25, 179, 148, 0.1)";
  const primaryColorDark = "rgba(20, 164, 139, 1)";
  const colorCalculator = new ColorCalculator();

  colorCalculator.initializeColorSettings(primaryColor, [primaryColorLight, primaryColorDark]);
  expect(colorCalculator.colorSettings).toStrictEqual([
    {
      colorAlpha: 0.1,
      colorDelta: 0,
    }, {
      colorAlpha: 1,
      colorDelta: 5.882352941176464,
    }]
  );

  const newDependentColors = colorCalculator.calculateDependentColorValues(primaryColor);
  expect(newDependentColors).toStrictEqual(["rgba(25, 179, 148, 0.1)", "rgba(23, 164, 136, 1)"]);
});

test("ColorCalculator hex", (): any => {
  const primaryColor = "#19B394FF";
  const primaryColorLight = "#19B3941A";
  const primaryColorDark = "#14A48BFF";
  const colorCalculator = new ColorCalculator();

  colorCalculator.initializeColorSettings(primaryColor, [primaryColorLight, primaryColorDark]);
  expect(colorCalculator.colorSettings).toStrictEqual([
    {
      colorAlpha: 0.1,
      colorDelta: 0,
    }, {
      colorAlpha: 1,
      colorDelta: 5.882352941176464,
    }
  ]);

  const newDependentColors = colorCalculator.calculateDependentColorValues(primaryColor);
  expect(newDependentColors).toStrictEqual(["rgba(25, 179, 148, 0.1)", "rgba(23, 164, 136, 1)"]);
});

test("HueColorCalculator hex", (): any => {
  const glowColor = "#004C441A";
  const tealColor = "#EFF9F9";
  const purpleColor = "#F8F4FE";
  const colorCalculator = new HueColorCalculator();

  colorCalculator.initialize(glowColor);
  expect(colorCalculator.calculateDependentColorValue(purpleColor)).toEqual("rgba(30, 0, 76, 0.1)");
  expect(colorCalculator.calculateDependentColorValue(tealColor)).toEqual("rgba(0, 76, 76, 0.1)");
});

test("calculateThemeVariables getPropertyValue call count", () => {
  const cssVariables: { [key: string]: string } = {};
  for (let i = 0; i < 20; i++) {
    cssVariables["--sjs2-test-" + i] = "8px";
  }
  const requested = ["--sjs2-test-0", "--sjs2-test-1"];

  const getComputedStyle = window.getComputedStyle;
  let calls = 0;
  window.getComputedStyle = ((element: Element) => {
    const computed = getComputedStyle(element);
    return new Proxy(computed, {
      get(target, prop, receiver) {
        if (prop === "getPropertyValue") {
          return (property: string) => {
            calls += 1;
            return target.getPropertyValue(property);
          };
        }
        const value = Reflect.get(target, prop, receiver);
        return typeof value === "function" ? value.bind(target) : value;
      }
    });
  }) as typeof window.getComputedStyle;

  try {
    calculateThemeVariables(cssVariables, requested);
    expect(calls).toBe(requested.length);

    calls = 0;
    calculateThemeVariables(cssVariables, []);
    expect(calls).toBe(Object.keys(cssVariables).length);
  } finally {
    window.getComputedStyle = getComputedStyle;
  }
});