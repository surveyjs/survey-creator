const fs = require("fs");

const legacyDefaultThemeName = "v2-20";
const baseThemeName = "v2-24";
const sourcePath = "./src/themes/predefined-themes/";
const _dirPath = "./src/themes/";
const regularExpression = /(?<var1>--\w*(-+\w*)*)\s?:\s?(?<var2>.*[^;]);/gi;
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
    "--ctr-toolbox-submenu-item-min-width": "initial",
  }
};

const baseThemeCssVariable = getCssVariablesFormFile(baseThemeName + ".css");
const themeDistinctions = {};

function getUsedCssVariables(path) {
  fs.readdirSync(path, { withFileTypes: true }).forEach(item => {
    if(item.isDirectory()) {
      getUsedCssVariables(path + item.name + "/");
    } else if(item.name.indexOf(".scss") === (item.name.length - 5)) {
      const data = fs.readFileSync(path + item.name, "utf8");

      const iteratorResult = data.matchAll(cssVariablesRegExp);
      const matches = [...iteratorResult]; 
      matches.forEach(m => {
        const variable = m.groups["variable"];
        if(usedCssVariablesList.indexOf(variable) === -1) {
          usedCssVariablesList.push(variable);
        }
      });
    }
  });
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
  if(variableKey.indexOf("-opacity") > -1) {
    return parseInt(value) / 100;
  } else {
    return value;
  }
}

function isLightTheme(themeName) {
  let result = true;
  Object.keys(palettes).forEach(palette => {
    if(palettes[palette].indexOf(themeName) > -1) {
      result = palette === "light";
    }
  });
  return result;
}

function writeTheme2020(themeName, cssVars, variableName) {
  const curPaletteCssVariables = getCssVariablesFormFile(themeName + "/v2.css");
  const cssVariables = { ...cssVars, ...curPaletteCssVariables };
  const theme = { themeName, iconsSet: "v1", cssVariables };
  const themeJson = JSON.stringify(theme, null, 2);
  const result = `const Theme = ${themeJson};\nexport default Theme;\nexport const ${variableName} = Theme;`;
  fs.writeFileSync(_dirPath + themeName + ".ts", result);

  return `import ${variableName}Theme from "./${themeName}";\nexport const ${variableName} = ${variableName}Theme;\n`;
}

function writeTheme(themeName, cssVariables, variableName) {
  const theme = { themeName, iconsSet: "v2", cssVariables };
  const themeJson = JSON.stringify(theme, null, 2);
  const result = `const Theme = ${themeJson};\nexport default Theme;\nexport const ${variableName} = Theme;`;
  fs.writeFileSync(_dirPath + themeName + ".ts", result);

  return `import ${variableName}Theme from "./${themeName}";\nexport const ${variableName} = ${variableName}Theme;\n`;
}

function writeThemePalette(themeName, paletteName, cssVariables, isDefaultTheme) {
  const fileName = [themeName, paletteName].join("-");
  const baseThemeVariable = capitalizedFirstLetter(themeName);
  const variableName = [baseThemeVariable, capitalizedFirstLetter(paletteName)].join("");
  const isLight = isLightTheme(fileName);

  const theme = { themeName: fileName, iconsSet: "v2", isLight: isLight, cssVariables: cssVariables };
  const themeJson = JSON.stringify(theme, null, 2);
  let importsString = "";
  let useImportString = "";
  if(!isDefaultTheme) {
    importsString = `import { assign } from "./utils";\nimport { ${baseThemeVariable} } from "./${themeName}";\n\n`;
    useImportString = `const themeCssVariables = {};\nassign(themeCssVariables, ${baseThemeVariable}.cssVariables, Theme.cssVariables);\nassign(Theme, { cssVariables: themeCssVariables });\n\n`;
  }
  const result = `${importsString}const Theme = ${themeJson};\n${useImportString}export default Theme;\nexport const ${variableName} = Theme;`;
  fs.writeFileSync(_dirPath + fileName + ".ts", result);

  return `import ${variableName}Theme from "./${fileName}";\nexport const ${variableName} = ${variableName}Theme;\n`;
}

const usedCssVariablesList = [];
getUsedCssVariables("./src/");

Object.keys(themeNameMap).forEach(themeName => {
  if(themeName !== baseThemeName && !!baseThemeCssVariable) {
    const curThemeCssVariables = getCssVariablesFormFile(themeName + ".css");
    const distinctions = themeConstants[themeNameMap[themeName]] || {};
    Object.keys(curThemeCssVariables || {}).forEach(variableKey => {
      const variableValue = curThemeCssVariables[variableKey];
      if(variableKey.indexOf("--ctr-shadow-") > -1 || variableKey.indexOf("--lbr-shadow-") > -1 || variableKey.indexOf("-unit") > -1) {
        distinctions[variableKey] = variableValue;
      } else if(variableValue !== baseThemeCssVariable[variableKey] || usedCssVariablesList.indexOf(variableKey) !== -1) {
        distinctions[variableKey] = getCorrectValue(variableKey, variableValue);
      }
    });
    themeDistinctions[themeNameMap[themeName]] = distinctions;
  }
});

let indexFileContent = "";
Object.keys(themeNameMap).forEach(themeName => {
  const currentTheme = themeNameMap[themeName];
  const isDefaultTheme = themeName === baseThemeName;
  console.log("Theme - " + currentTheme);
  if(legacyDefaultThemeName === themeName) {
    indexFileContent += writeTheme2020(currentTheme, themeDistinctions[currentTheme], capitalizedFirstLetter(currentTheme));
  } else if(!isDefaultTheme) {
    indexFileContent += writeTheme(currentTheme, themeDistinctions[currentTheme], capitalizedFirstLetter(currentTheme));
  }

  const palettes = creatorThemePalettes[currentTheme];
  (palettes || []).forEach(paletteName => {
    console.log("Palette - " + paletteName);
    const curPaletteCssVariables = getCssVariablesFormFile(currentTheme + "/" + paletteName + ".css");
    indexFileContent += writeThemePalette(currentTheme, paletteName, curPaletteCssVariables, isDefaultTheme);
  });
});
fs.writeFileSync(_dirPath + "index.ts", indexFileContent);
