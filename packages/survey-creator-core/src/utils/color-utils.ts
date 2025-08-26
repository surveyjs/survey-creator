import { roundTo2Decimals } from "./utils";

export class ColorCalculator {
  colorSettings: Array<{ colorAlpha: number, colorDelta: number }> = [];
  isInitialized = false;

  initializeColorSettings(baseColor: string, dependentColorValues: Array<string>) {
    const baseColorRgba = getRGBaChannelValues(baseColor);
    dependentColorValues.forEach((dependentColor: string) => {
      const dependentColorRgba = getRGBaChannelValues(dependentColor);
      const colorAlpha = dependentColorRgba[3];

      const baseColorHSB = RGBToHSB(baseColorRgba[0], baseColorRgba[1], baseColorRgba[2]);
      const colorHSB = RGBToHSB(dependentColorRgba[0], dependentColorRgba[1], dependentColorRgba[2]);
      const colorDelta = baseColorHSB[2] - colorHSB[2];
      this.colorSettings.push({ colorAlpha, colorDelta });
    });
    this.isInitialized = !!this.colorSettings.length;
  }

  calculateDependentColorValues(newBaseColor: string): Array<string> {
    let newBaseColorRbg = getRGBaChannelValues(newBaseColor);
    const newBaseColorHsb = RGBToHSB(newBaseColorRbg[0], newBaseColorRbg[1], newBaseColorRbg[2]);
    const result = this.colorSettings.map(setting => {
      const newColorLightRGB = HSBToRGB(newBaseColorHsb[0], newBaseColorHsb[1], newBaseColorHsb[2] - setting.colorDelta);
      return convertRgbaToString(newColorLightRGB, setting.colorAlpha);
    });
    return result;
  }
}

export class HueColorCalculator {
  colorHsb: Array<number>;
  colorAlpha: number;
  isInitialized = false;

  initialize(baseColor: string): void {
    const colorRbg = getRGBaChannelValues(baseColor);
    this.isInitialized = !!colorRbg.length;
    if (this.isInitialized) {
      this.colorHsb = RGBToHSB(colorRbg[0], colorRbg[1], colorRbg[2]);
      this.colorAlpha = colorRbg[3];
    }
  }

  calculateDependentColorValue(baseColor: string): string {
    const baseColorRbg = getRGBaChannelValues(baseColor);
    const baseColorHsb = RGBToHSB(baseColorRbg[0], baseColorRbg[1], baseColorRbg[2]);
    const newColorRGB = HSBToRGB(baseColorHsb[0], this.colorHsb[1], this.colorHsb[2]);
    const resultColor = convertRgbaToString(newColorRGB, this.colorAlpha);
    return resultColor;
  }
}

export function ingectAlpha(hexColor: any, alpha: number): any {
  if (!!hexColor && alpha !== undefined) {
    const rgbValue = HEXToRGB(hexColor);
    return `rgba(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]}, ${rgbValue[3] || alpha})`;
  }
}

export function convertRgbaToString(rgbValues: Array<number>, alpha: number): string {
  return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${alpha})`;
}

export function parseRgbaFromString(value: string = ""): Array<number> {
  const matchRgb = value.match(/\((.*)\)/);
  if (matchRgb) {
    return matchRgb[1].split(",").map(i => parseFloat(i));
  } else {
    return [];
  }
}

export function getRGBaChannelValues(color: string): Array<number> {
  let colorRgba = parseRgbaFromString(color);
  if (colorRgba.length === 0) {
    colorRgba = parseRgbaFromString(ingectAlpha(color, 1));
  }
  return colorRgba;
}

export function parseColor(value: string = ""): { color: string, opacity: number } {
  const rgbValues = parseRgbaFromString(value);
  if (rgbValues.length !== 0) {
    let opacity = 1;
    if (rgbValues.length == 4) {
      opacity = rgbValues.pop();
    }
    const color = rgbValues.reduce((res: string, color: number) => {
      const hex = color.toString(16);
      return res + (hex.length == 1 ? "0" + hex : hex);
    }, "#");
    return { color, opacity: roundTo2Decimals(opacity * 100) };
  } else {
    return { color: value, opacity: 100 };
  }
}
export function HEXToRGB(baseColor: any): any {
  if (!!baseColor) {
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);
    const alpha = roundTo2Decimals(parseInt(baseColor.slice(7, 9), 16) / 255);

    return [r, g, b, alpha];
  }
  return [];
}

export function HSBToRGB(h, s, b) {
  s /= 100;
  b /= 100;
  const k = (n) => (n + h / 60) % 6;
  const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
  return [Math.round(255 * f(5)), Math.round(255 * f(3)), Math.round(255 * f(1))];
}

export function RGBToHSB(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const v = Math.max(r, g, b),
    n = v - Math.min(r, g, b);
  const h = n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
  return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
}

export function colorsAreEqual(color1: string, color2: string) {
  const color1Value = parseColor(color1);
  color1Value.color = color1Value.color.substring(0, 7).toUpperCase();
  const color2Value = parseColor(color2);
  color2Value.color = color2Value.color.substring(0, 7).toUpperCase();
  return color1Value.color === color2Value.color && color1Value.opacity === color2Value.opacity;
}
