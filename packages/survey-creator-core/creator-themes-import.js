const fs = require("fs");

const baseThemeName = "v2-20";
const sourcePath = "./src/themes/predefined-themes/";
const _dirPath = "./src/themes/";
const regularExpression = /(?<var1>--\w*(-*\w*)*)\s?:\s?(?<var2>.*[^;]);/gi;
const cssVariablesRegExp = /(?<variable>--\w*(-*\w*)*)/gi;
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

const baseThemeCssVariable = getCssVariablesFormFile(baseThemeName + ".css");
const themeDistinctions = {};

function getUsedCssVariables(path) {
  fs.readdirSync(path, { withFileTypes: true }).forEach(item => {
    if(item.isDirectory()) {
      getUsedCssVariables(path + item.name + "/");
    } else if(item.name.indexOf(".scss") === (item.name.length - 5)) {
      const data = fs.readFileSync(path + item.name, "utf8");

      const matches = data.matchAll(cssVariablesRegExp);
      Array.from(matches, m => {
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

    const matches = data.matchAll(regularExpression);
    const themeCssVariables = {};
    Array.from(matches, m => themeCssVariables[m.groups["var1"]] = m.groups["var2"]);
    return themeCssVariables;
  } catch (err) {
    console.error(err);
  }
}

function capitalizedFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getCorrectValue(variableKey, value) {
  if(variableKey.indexOf("-opacity-") > -1) {
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

function writeTheme(themeName, cssVariables, variableName) {
  const theme = { themeName, cssVariables };
  const themeJson = JSON.stringify(theme, null, 2);
  const result = `const Theme = ${themeJson};\nexport default Theme;\nexport const ${variableName} = Theme;`;
  fs.writeFileSync(_dirPath + themeName + ".ts", result);
}

function writeThemePalette(themeName, paletteName, cssVariables) {
  const fileName = [themeName, paletteName].join("-");
  const baseThemeVariable = capitalizedFirstLetter(themeName);
  const variableName = [baseThemeVariable, capitalizedFirstLetter(paletteName)].join("");
  const isLight = isLightTheme(fileName);

  const theme = { themeName: fileName, isLight: isLight, cssVariables: cssVariables };
  const themeJson = JSON.stringify(theme, null, 2);
  const importsString = `import { assign } from "./utils";\nimport { ${baseThemeVariable} } from "./${themeName}";\n`;
  const useImportString = `const themeCssVariables = {};\nassign(themeCssVariables, ${baseThemeVariable}.cssVariables, Theme.cssVariables);\nassign(Theme, { cssVariables: themeCssVariables });\n`;
  const result = `${importsString}\nconst Theme = ${themeJson};\n${useImportString}\nexport default Theme;\nexport const ${variableName} = Theme;`;
  fs.writeFileSync(_dirPath + fileName + ".ts", result);

  return `import ${variableName}Theme from "./${fileName}";\nexport const ${variableName} = ${variableName}Theme;\n`;
}

const usedCssVariablesList = [];
getUsedCssVariables("./src/");

Object.keys(themeNameMap).forEach(themeName => {
  if(themeName !== baseThemeName && !!baseThemeCssVariable) {
    const curThemeCssVariables = getCssVariablesFormFile(themeName + ".css");
    const distinctions = {};
    Object.keys(curThemeCssVariables || {}).forEach(variableKey => {
      const variableValue = curThemeCssVariables[variableKey];
      if(variableValue !== baseThemeCssVariable[variableKey] || usedCssVariablesList.indexOf(variableKey) !== -1) {
        distinctions[variableKey] = getCorrectValue(variableKey, variableValue);
      }
    });
    themeDistinctions[themeNameMap[themeName]] = distinctions;
  }
});

Object.keys(themeNameMap).forEach(themeName => {
  let indexFileContent = "";
  if(themeName !== baseThemeName) {
    const currentTheme = themeNameMap[themeName];
    console.log("Theme - " + currentTheme);
    writeTheme(currentTheme, themeDistinctions[currentTheme], capitalizedFirstLetter(currentTheme));

    const palettes = creatorThemePalettes[currentTheme];
    (palettes || []).forEach(paletteName => {
      console.log("Palette - " + paletteName);
      const curPaletteCssVariables = getCssVariablesFormFile(currentTheme + "/" + paletteName + ".css");
      indexFileContent += writeThemePalette(currentTheme, paletteName, curPaletteCssVariables);
    });
  }
  fs.writeFileSync(_dirPath + "index.ts", indexFileContent);
});

