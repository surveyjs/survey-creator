const fs = require("fs");

const legacyDefaultThemeName = "v2-20";
const baseThemeName = "v2-24";
const sourcePath = "./src/themes/predefined-themes/";
const _dirPath = "./src/themes/";
const regularExpression = /(?<var1>--\w*(?:-\w*)*)\s?:\s?(?<var2>.*[^;]);/gi;
const cssVariablesRegExp = /(?<variable>--\w*(-+\w*)*)/gi;
var themeNameMap = {
  "v2-20": "sc2020",
  "v2-24": "default"
};
var creatorThemePalettes = {
  "default": ["light", "dark", "contrast"]
};
var palettes = {
  "light": ["default-light", "default-contrast"],
  "dark": ["default-dark"],
};
var themeConstants = {
  "sc2020": {
    "--ctr-toolbox-scrollbar-left": "0",
    "--ctr-toolbox-scrollbar-right": "initial",
    "--ctr-toolbox-scroller-align-items": "flex-end",
    "--ctr-toolbox-item-align": "flex-start",
    "--ctr-toolbox-margin-left-compact": "12px",
    "--ctr-toolbox-item-banner-icon-display": "block",
    "--ctr-toolbox-item-banner-beak-display": "none",
    "--ctr-toolbox-item-banner-left": 0,
    "--ctr-toolbox-submenu-item-min-width": "initial",
  }
};

const baseThemeCssVariable = getCssVariablesFormFile(baseThemeName + ".css");
const themeDistinctions = {};

function ingectAlpha(hexColor, alpha) {
  if (!!hexColor && alpha !== undefined) {
    const rgbValue = HEXToRGB(hexColor);
    return `rgba(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]}, ${rgbValue[3] || alpha})`;
  }
}

function roundTo2Decimals(number) {
  return Math.round(number * 100) / 100;
}

function parseRgbaFromString(value = "") {
  const matchRgb = value.match(/\((.*)\)/);
  if (matchRgb) {
    return matchRgb[1].split(",").map(i => parseFloat(i));
  } else {
    return [];
  }
}

function getRGBaChannelValues(color) {
  let colorRgba = parseRgbaFromString(color);
  if (colorRgba.length === 0) {
    colorRgba = parseRgbaFromString(ingectAlpha(color, 1));
  }
  return colorRgba;
}

function HEXToRGB(baseColor) {
  if (!!baseColor) {
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);
    const alpha = roundTo2Decimals(parseInt(baseColor.slice(7, 9), 16) / 255);

    return [r, g, b, alpha];
  }
  return [];
}

function RGBToHSL(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [roundTo2Decimals(h * 360), roundTo2Decimals(s * 100), roundTo2Decimals(l * 100)];
}

function generateColor(cssVariables, baseColorName, dependentColorName, resultCssVariables) {
  if (!cssVariables[baseColorName]) {
    console.log(`${baseColorName} is missing`);
    return;
  }
  if (!cssVariables[dependentColorName]) {
    console.log(`${dependentColorName} is missing`);
    return;
  }

  const baseRgbaColor = getRGBaChannelValues(cssVariables[baseColorName]);
  const baseHslColor = RGBToHSL(baseRgbaColor[0], baseRgbaColor[1], baseRgbaColor[2]);

  const dependentRgbaColor = getRGBaChannelValues(cssVariables[dependentColorName]);
  const dependentHslColor = RGBToHSL(dependentRgbaColor[0], dependentRgbaColor[1], dependentRgbaColor[2]);
  // console.log(`${dependentColorName} r=${dependentRgbaColor[0]} g=${dependentRgbaColor[1]} b=${dependentRgbaColor[2]}`);
  // console.log(`${dependentColorName} h=${dependentHslColor[0]} s=${dependentHslColor[1]} l=${dependentHslColor[2]}`);

  const deltaAlpha = baseRgbaColor[3] - dependentRgbaColor[3];
  const deltaH = roundTo2Decimals(baseHslColor[0] - dependentHslColor[0]);
  const deltaS = roundTo2Decimals(baseHslColor[1] - dependentHslColor[1]);
  const deltaL = roundTo2Decimals(baseHslColor[2] - dependentHslColor[2]);

  // console.log(`${dependentColorName} dh=${deltaH} ds=${deltaS} dl=${deltaL} da=${deltaAlpha}`);
  resultCssVariables[dependentColorName + "-deltaAlpha"] = deltaAlpha;
  resultCssVariables[dependentColorName + "-deltaH"] = deltaH;
  resultCssVariables[dependentColorName + "-deltaS"] = deltaS;
  resultCssVariables[dependentColorName + "-deltaL"] = deltaL;

  const hueValue = `calc(h - var(${dependentColorName + "-deltaH"}))`;
  const saturationValue = `calc(s - var(${dependentColorName + "-deltaS"}))`;
  const lightnessValue = `calc(l - var(${dependentColorName + "-deltaL"}))`;
  const alphaValue = `calc(1 - var(${dependentColorName + "-deltaAlpha"}))`;
  resultCssVariables[dependentColorName] = `hsl(from var(${baseColorName}) ${hueValue} ${saturationValue} ${lightnessValue} / ${alphaValue})`;
}
function generateColorVariables(cssVariables) {
  const resultCssVariables = {};
  generateColor(cssVariables, "--sjs-primary-background-500", "--sjs-primary-background-400", resultCssVariables);
  generateColor(cssVariables, "--sjs-primary-background-500", "--sjs-primary-background-10", resultCssVariables);

  generateColor(cssVariables, "--sjs-secondary-background-500", "--sjs-secondary-background-400", resultCssVariables);
  generateColor(cssVariables, "--sjs-secondary-background-500", "--sjs-secondary-background-25", resultCssVariables);
  generateColor(cssVariables, "--sjs-secondary-background-500", "--sjs-secondary-background-10", resultCssVariables);

  generateColor(cssVariables, "--sjs-special-background", "--sjs-special-haze", resultCssVariables);
  generateColor(cssVariables, "--sjs-special-background", "--sjs-special-glow", resultCssVariables);

  return resultCssVariables;
}

function getUsedCssVariables(path) {
  fs.readdirSync(path, { withFileTypes: true }).forEach(item => {
    if (item.isDirectory()) {
      getUsedCssVariables(path + item.name + "/");
    } else if (item.name.indexOf(".scss") === (item.name.length - 5)) {
      const data = fs.readFileSync(path + item.name, "utf8");

      const iteratorResult = data.matchAll(cssVariablesRegExp);
      const matches = [...iteratorResult];
      matches.forEach(m => {
        const variable = m.groups["variable"];
        if (usedCssVariablesList.indexOf(variable) === -1) {
          usedCssVariablesList.push(variable);
        }
      });
    }
  });
}

function correctColorVariables(curPaletteCssVariables) {
  for (let key in curPaletteCssVariables) {
    curPaletteCssVariables[key] = curPaletteCssVariables[key].replace(/^(#\w{6,6})[fF]{2,2}$/, "$1");
  }
}

function getCssVariablesFormFile(fileName) {
  try {
    const data = fs.readFileSync(sourcePath + fileName, "utf8");
    // console.log(data);

    const iteratorResult = data.matchAll(regularExpression);
    const matches = [...iteratorResult];
    const themeCssVariables = {};
    matches.forEach(m => themeCssVariables[m.groups["var1"]] = m.groups["var2"]);
    return themeCssVariables;
  } catch (err) {
    console.error(err);
  }
}

function capitalizedFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getCorrectValue(variableKey, value) {
  if (variableKey.indexOf("-opacity") > -1) {
    return parseInt(value) / 100;
  } else {
    return value;
  }
}

function isLightTheme(themeName) {
  let result = true;
  Object.keys(palettes).forEach(palette => {
    if (palettes[palette].indexOf(themeName) > -1) {
      result = palette === "light";
    }
  });
  return result;
}

let exportedNames = [];

function writeTheme2020(themeName, cssVars, variableName) {
  const curPaletteCssVariables = getCssVariablesFormFile(themeName + "/v2.css");
  correctColorVariables(curPaletteCssVariables);
  const cssVariables = { ...cssVars, ...curPaletteCssVariables };
  const theme = { themeName, iconSet: "v1", isLight: true, cssVariables };
  const themeJson = JSON.stringify(theme, null, 2);
  const result = `export default ${themeJson};\n`;
  fs.writeFileSync(_dirPath + themeName + ".ts", result);

  exportedNames.push(variableName);
  return `import ${variableName} from "./${themeName}";\n`;
}

function writeTheme(themeName, cssVariables, variableName) {
  const theme = { themeName, iconSet: "v2", cssVariables };
  const themeJson = JSON.stringify(theme, null, 2);
  const result = `export default ${themeJson};`;
  fs.writeFileSync(_dirPath + themeName + ".ts", result);

  exportedNames.push(variableName);
  return `import ${variableName} from "./${themeName}";\n`;
}

function writeThemePalette(themeName, paletteName, cssVariables, extendTheme) {
  const fileName = [themeName, paletteName].join("-");
  const baseThemeVariable = capitalizedFirstLetter(themeName);

  const variableName = [baseThemeVariable, capitalizedFirstLetter(paletteName)].join("");
  const isLight = isLightTheme(fileName);

  const theme = { themeName: fileName, iconSet: "v2", isLight: isLight, cssVariables: cssVariables };
  const themeJson = JSON.stringify(theme, null, 2);
  let importsString = "";
  let useImportString = "";
  if (extendTheme) {
    importsString = `import { assign } from "./utils";\nimport { ${baseThemeVariable} } from "./${themeName}";\n\n`;
    useImportString = `const themeCssVariables = {};\nassign(themeCssVariables, ${baseThemeVariable}.cssVariables, Theme.cssVariables);\nassign(Theme, { cssVariables: themeCssVariables });\n\n`;
  }
  const result = `${importsString}export default ${themeJson};\n`;
  fs.writeFileSync(_dirPath + fileName + ".ts", result);

  exportedNames.push(variableName);
  return `import ${variableName} from "./${fileName}";\n`;
}

const usedCssVariablesList = [];
getUsedCssVariables("./src/");

Object.keys(themeNameMap).forEach(themeName => {
  if (!!baseThemeCssVariable) {
    const curThemeCssVariables = getCssVariablesFormFile(themeName + ".css");
    const distinctions = themeConstants[themeNameMap[themeName]] || {};
    Object.keys(curThemeCssVariables || {}).forEach(variableKey => {
      const variableValue = curThemeCssVariables[variableKey];
      if (variableKey.indexOf("--ctr-shadow-") > -1 || variableKey.indexOf("--lbr-shadow-") > -1 || variableKey.indexOf("-unit") > -1) {
        distinctions[variableKey] = variableValue;
      } else if (variableValue !== baseThemeCssVariable[variableKey] || usedCssVariablesList.indexOf(variableKey) !== -1) {
        distinctions[variableKey] = getCorrectValue(variableKey, variableValue);
      }
    });
    themeDistinctions[themeNameMap[themeName]] = distinctions;
  }
});

let indexFileContent = "";
Object.keys(themeNameMap).forEach(themeName => {
  const currentTheme = themeNameMap[themeName];
  console.log("Theme - " + currentTheme);
  let strImportTheme = "";
  if (legacyDefaultThemeName === themeName) {
    strImportTheme = writeTheme2020(currentTheme, themeDistinctions[currentTheme], "SC2020");
  } else if (baseThemeName !== themeName) {
    strImportTheme = writeTheme(currentTheme, themeDistinctions[currentTheme], capitalizedFirstLetter(currentTheme));
  }
  indexFileContent += strImportTheme;
  const palettes = creatorThemePalettes[currentTheme];
  (palettes || []).forEach(paletteName => {
    console.log("Palette - " + paletteName);
    const curPaletteCssVariables = getCssVariablesFormFile(currentTheme + "/" + paletteName + ".css");
    correctColorVariables(curPaletteCssVariables);
    const resultColorVariables = generateColorVariables(curPaletteCssVariables);
    const cssVariables = { ...curPaletteCssVariables, ...resultColorVariables };
    if (baseThemeName === themeName && paletteName === "light") {
      const cssVariablesJson = JSON.stringify(resultColorVariables, null, 2);
      const result = `export const DefaultLightColorCssVariables = ${cssVariablesJson};`;
      fs.writeFileSync(_dirPath + "default-light-color-css-variables.ts", result);
    } else {
      strImportTheme = writeThemePalette(currentTheme, paletteName, cssVariables);
      indexFileContent += strImportTheme;
    }
  });
});

indexFileContent += "const __surveyjs_internal_themes_hash = true;\n";
exportedNames.push("__surveyjs_internal_themes_hash");
indexFileContent += `export { ${exportedNames.join(", ")} };\n`;
indexFileContent += `export default { ${exportedNames.join(", ")} };`;
fs.writeFileSync(_dirPath + "index.ts", indexFileContent);
