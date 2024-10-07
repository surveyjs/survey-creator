const fs = require("fs");

const baseThemeName = "v2-20";
const sourcePath = "./src/themes/predefined-themes/";
const _dirPath = "./src/themes/";
const regularExpression = /(?<var1>--\w*(-*\w*)*)\s?:\s?(?<var2>.*[^;]);/gi;
var themeNameMap = {
  "v2-20": "sc2020",
  "v2-24": "default"
}
var creatorThemePalettes = {
  "default": ["light", "dark", "contrast"]
}
const baseThemeCssVariable = getCssVariablesFormFile(baseThemeName + ".css");
const themeDistinctions = {};

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

function writeTheme(themeName, palleteName, cssVariables) {
  const fileName = [themeName, palleteName].join("-");
  const variableName = [capitalizedFirstLetter(themeName), capitalizedFirstLetter(palleteName)].join("");
  const theme = { themeName: fileName, cssVariables: cssVariables };
  const themeJson = JSON.stringify(theme, null, 2);
  const result = `const Theme = ${themeJson};\nexport default Theme;\nexport const ${variableName} = Theme;`;
  fs.writeFileSync(_dirPath + fileName + ".ts", result);

  return `import ${variableName}Theme from "./${fileName}";\nexport const ${variableName} = ${variableName}Theme;\n`;
}

Object.keys(themeNameMap).forEach(themeName => {
  if(themeName !== baseThemeName && !!baseThemeCssVariable) {
    const curThemeCssVariables = getCssVariablesFormFile(themeName + ".css");
    const distinctions = {};
    Object.keys(curThemeCssVariables || {}).forEach(cssVariable => {
      if(curThemeCssVariables[cssVariable] !== baseThemeCssVariable[cssVariable]) {
        distinctions[cssVariable] = curThemeCssVariables[cssVariable];
      }
    });
    themeDistinctions[themeNameMap[themeName]] = distinctions;
  }
});


Object.keys(themeNameMap).forEach(themeName => {
  let indexFileContent = "";
  if(themeName !== baseThemeName) {
    const currentTheme = themeNameMap[themeName];
    console.log(currentTheme);
    const palettes = creatorThemePalettes[currentTheme];
    (palettes || []).forEach(palleteName => {
      const curPaletteCssVariables = getCssVariablesFormFile(currentTheme + "/" + palleteName + ".css");

      const newCssVariables = {};
      Object.assign(newCssVariables, themeDistinctions[currentTheme], curPaletteCssVariables);
      indexFileContent += writeTheme(currentTheme, palleteName, newCssVariables);
    });
  }
  fs.writeFileSync(_dirPath + "index.ts", indexFileContent);
});

