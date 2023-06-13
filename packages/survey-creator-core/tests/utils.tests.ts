import { ColorCalculator, HSBToRGB, RGBToHSB, capitalize } from "../src/utils/utils";

test("check capitalize function", () => {
  expect(capitalize("test str first")).toEqual("Test Str First");
  expect(capitalize("test2")).toEqual("Test2");
  expect(capitalize("Test3")).toEqual("Test3");
  expect(capitalize("test str   four")).toEqual("Test Str Four");
  expect(capitalize("ελληνικά")).toEqual("Ελληνικά");
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

test("ColorCalculator", (): any => {
  const primaryColor = "rgba(25, 179, 148, 1)";
  const primaryColorLight = "rgba(25, 179, 148, 0.1)";
  const primaryColorDark = "rgba(20, 164, 139, 1)";
  const colorCalculator = new ColorCalculator();

  colorCalculator.initialize(primaryColor, primaryColorLight, primaryColorDark);
  expect(colorCalculator.colorSettings).toEqual({
    baseColorAlpha: 1,
    darkColorAlpha: 1,
    lightColorAlpha: 0.1,
    deltaDarkColor: 5.882352941176464,
    deltaLightColor: 0,
    newColorDark: "",
    newColorLight: "" }
  );

  colorCalculator.calculateColors(primaryColor);
  expect(colorCalculator.colorSettings).toEqual({
    baseColorAlpha: 1,
    darkColorAlpha: 1,
    lightColorAlpha: 0.1,
    deltaDarkColor: 5.882352941176464,
    deltaLightColor: 0,
    newColorDark: "rgba(23, 164, 136, 1)",
    newColorLight: "rgba(25, 179, 148, 0.1)" }
  );
});