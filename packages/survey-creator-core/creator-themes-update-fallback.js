const fs = require("fs");

const baseThemeName = "v2-24";
const themeSourcePath = "./src/themes/predefined-themes/";
const defaultLightPaletteSourcePath = "default/light.css";

const regularExpression = /(?<var1>--\w*(?:-\w*)*)\s?:\s?(?<var2>.*[^;]);/gi;
const cssVariableFallbackRegExp = /var\((?<variable>--\w*(?:-\w+)*)\,\s*(?<fallback>((?!var\().)*)\)/gi;
const cssVariableWithOutFallbackRegExp = /var\((?<variable>--\w*(?:-\w*)*)\)/gi;
const newLineRegExp = /\r?\n/gi;

const baseThemeCssVariable = getCssVariablesFormFile(baseThemeName + ".css");
const colorPaletteLightCssVariable = getCssVariablesFormFile(defaultLightPaletteSourcePath);

function getCorrectValue(variableKey, value) {
  if(value === undefined) return value;

  if(variableKey.indexOf("-opacity") > -1) {
    return parseInt(value) / 100;
  } else {
    const colorValue = findConstantValue(value);
    return colorValue || value;
  }
}

function findConstantValue(value) {
  const varName = findVariableName(value);
  if(!varName) return value;

  if(!!baseThemeCssVariable[varName]) {
    return findConstantValue(baseThemeCssVariable[varName]);
  } else if(!!colorPaletteLightCssVariable[varName]) {
    const colorValue = colorPaletteLightCssVariable[varName];
    if(colorValue.indexOf("#") === 0) return `var(${varName}, ${colorValue.toLowerCase()})`;
  }
  return undefined;
}

function findVariableName(str) {
  const iteratorResult = str.matchAll(cssVariableWithOutFallbackRegExp);
  const matches = [...iteratorResult];
  if(matches.length > 0) {
    const varName = matches[0].groups["variable"];
    return varName;
  }
  return undefined;
}

function replaceFallbacks(path) {
  fs.readdirSync(path, { withFileTypes: true }).forEach(item => {
    if(item.isDirectory()) {
      replaceFallbacks(path + item.name + "/");
    } else if(item.name.indexOf(".scss") === (item.name.length - 5)) {
      console.log(item.name);
      const filePath = path + item.name;
      const data = fs.readFileSync(filePath, "utf8");
      let hasChanges = false;

      const lines = data.split(newLineRegExp);
      const newLines = lines.map(line => {
        // console.log("line " + line);

        let newLine = line.replaceAll(cssVariableFallbackRegExp, function(match, variable) {
          const newValue = getCorrectValue(variable, baseThemeCssVariable[variable]);
          if(newValue === undefined) return match;

          hasChanges = true;
          const newStr = `var(${variable}, ${newValue})`;
          return newStr;
        }
        );
        /*newLine = line.replaceAll(cssVariableWithOutFallbackRegExp, function(match, variable) {
          const newValue = getCorrectValue(variable, baseThemeCssVariable[variable]);
          if(newValue === undefined) return match;

          hasChanges = true;
          const newStr = `var(${variable}, ${newValue})`;
          return newStr;
        });*/
        return newLine;
      });

      if(hasChanges) {
        const result = newLines.join("\r\n");
        // console.log(result);
        fs.writeFileSync(filePath, result);
      }
    }
  });
}

function getCssVariablesFormFile(fileName) {
  try {
    const data = fs.readFileSync(themeSourcePath + fileName, "utf8");
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

replaceFallbacks("./src/");