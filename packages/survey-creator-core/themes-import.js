const fs = require("fs");
const MikeThemes = require("./themes.json");
const themes = {};

function createBoxShadow(value) {
  return value.map((val => `${val["type"] === "innerShadow" ? "inset " : ""}${val.x}px ${val.y}px ${val.radius}px ${val.spread}px ${val.color}`
  )).join(",");
}
function getShadowSettings(shadowGroup) {
  let result = [];
  const parseShadowSettings = (settings => {
    const _result = {};
    Object.keys(settings)
    .filter(shadowPropery => { return (shadowPropery !== "category" && shadowPropery !== "exportKey"); })
    .forEach(shadowPropery => {
      if(shadowPropery === "offset") {
        _result["x"] = settings[shadowPropery]["x"]["value"];
        _result["y"] = settings[shadowPropery]["y"]["value"];
      } else {
        _result[shadowPropery] = settings[shadowPropery]["value"];
      }
    });
    return _result;
  })
  if(!!shadowGroup["0"]) {
    result = Object.keys(shadowGroup)
    .filter(shadowPropery => { return (shadowPropery !== "category" && shadowPropery !== "exportKey"); })
    .map(key => shadowGroup[key]).map(item => parseShadowSettings(item))
  } else {
    result = [parseShadowSettings(shadowGroup)]
  }
  return createBoxShadow(result);
}
const displayNameMap = {
  "default": "Default",
  "contrast": "Sharp",
  "plain": "Borderless",
  "simple": "Flat",
  "blank": "Plain",
  "double": "DoubleBorder",
  "bulk": "Layered",
  "pseudo3d": "Solid",
  "playful": "ThreeDimensional",
  "ultra": "Contrast"
};
function getDisplayName(themeName) {
  if(themeName.indexOf("pseudo-3d") !== -1) {
    themeName = themeName.replace("pseudo-3d", "pseudo3d");
  }
  const baseThemeName = themeName.split("-")[0];
  if(!displayNameMap[baseThemeName]) return themeName;

  return themeName.replace(baseThemeName, displayNameMap[baseThemeName].toLowerCase());
}

Object.keys(MikeThemes).forEach(function (initThemeName) {
  console.log(initThemeName);

  const generalGroup = MikeThemes[initThemeName]["general"];
  const primaryGroup = MikeThemes[initThemeName]["primary"];
  const secondaryGroup = MikeThemes[initThemeName]["secondary"];
  const shadowGroup = MikeThemes[initThemeName]["shadow"];
  const bordersGroup = MikeThemes[initThemeName]["borders"];
  const specialGroup = MikeThemes[initThemeName]["special"];

  const themeName = getDisplayName(initThemeName);
  themes[themeName] = {};

  if(!!generalGroup) {
    themes[themeName] = {
      "--sjs-general-backcolor": generalGroup["backcolor"] ? generalGroup["backcolor"]["value"] : undefined,
      "--sjs-general-backcolor-dark": generalGroup["backcolor-dark"] ? generalGroup["backcolor-dark"]["value"] : undefined,
      "--sjs-general-backcolor-dim": generalGroup["dim-backcolor"] ? generalGroup["dim-backcolor"]["value"]: undefined,
      "--sjs-general-backcolor-dim-light": generalGroup["dim-backcolor-light"] ? generalGroup["dim-backcolor-light"]["value"] : undefined,
      "--sjs-general-backcolor-dim-dark": generalGroup["dim-backcolor-dark"] ? generalGroup["dim-backcolor-dark"]["value"] : undefined,
      "--sjs-general-forecolor": generalGroup.forecolor ? generalGroup.forecolor["value"] : undefined,
      "--sjs-general-forecolor-light": generalGroup["forecolor-light"] ? generalGroup["forecolor-light"]["value"]: undefined,
      "--sjs-general-dim-forecolor": generalGroup["dim-forecolor"] ? generalGroup["dim-forecolor"]["value"] : undefined,
      "--sjs-general-dim-forecolor-light": generalGroup["dim-forecolor-light"] ? generalGroup["dim-forecolor-light"]["value"] : undefined,
    };
  }
  if(!!primaryGroup) {
    themes[themeName]["--sjs-primary-backcolor"] = primaryGroup["backcolor"] ? primaryGroup["backcolor"]["value"] : undefined;
    themes[themeName]["--sjs-primary-backcolor-light"] = primaryGroup["backcolor-light"] ? primaryGroup["backcolor-light"]["value"] : undefined;
    themes[themeName]["--sjs-primary-backcolor-dark"] = primaryGroup["backcolor-dark"] ? primaryGroup["backcolor-dark"]["value"] : undefined;
    themes[themeName]["--sjs-primary-forecolor"] = primaryGroup["forecolor"] ? primaryGroup["forecolor"]["value"] : undefined;
    themes[themeName]["--sjs-primary-forecolor-light"] = primaryGroup["forecolor-light"] ? primaryGroup["forecolor-light"]["value"] : undefined;
    themes[themeName]["--sjs-base-unit"] = "8px";
    themes[themeName]["--sjs-corner-radius"] = "4px";
  }
  if(!!secondaryGroup) {
    themes[themeName]["--sjs-secondary-backcolor"] = secondaryGroup["backcolor"] ? secondaryGroup["backcolor"]["value"] : undefined;
    themes[themeName]["--sjs-secondary-backcolor-light"] = secondaryGroup["backcolor-light"] ? secondaryGroup["backcolor-light"]["value"] : undefined;
    themes[themeName]["--sjs-secondary-backcolor-semi-light"] = secondaryGroup["backcolor-semi-light"] ? secondaryGroup["backcolor-semi-light"]["value"] : undefined;
    themes[themeName]["--sjs-secondary-forecolor"] = secondaryGroup["forecolor"] ? secondaryGroup["forecolor"]["value"] : undefined;
    themes[themeName]["--sjs-secondary-forecolor-light"] = secondaryGroup["forecolor-light"] ? secondaryGroup["forecolor-light"]["value"] : undefined;
  }
  if(!!shadowGroup) {
    themes[themeName]["--sjs-shadow-small"] = shadowGroup["small"] ? getShadowSettings(shadowGroup["small"]) : undefined;
    themes[themeName]["--sjs-shadow-medium"] = shadowGroup["medium"] ? getShadowSettings(shadowGroup["medium"]) : undefined;
    themes[themeName]["--sjs-shadow-large"] = shadowGroup["large"] ? getShadowSettings(shadowGroup["large"]) : undefined;
    themes[themeName]["--sjs-shadow-inner"] = shadowGroup["inner"] ? getShadowSettings(shadowGroup["inner"]) : undefined;
  }
  if(!!bordersGroup) {
    themes[themeName]["--sjs-border-light"] = bordersGroup["light-border"] ? bordersGroup["light-border"]["value"] : undefined;
    themes[themeName]["--sjs-border-default"] = bordersGroup["default-border"] ? bordersGroup["default-border"]["value"] : undefined;
    themes[themeName]["--sjs-border-inside"] = bordersGroup["inside-border"] ? bordersGroup["inside-border"]["value"] : undefined;
  }
  if(!!specialGroup) {
    themes[themeName]["--sjs-special-red"] = specialGroup["red"] ? specialGroup["red"]["value"] : undefined;
    themes[themeName]["--sjs-special-red-light"] = specialGroup["red-light"] ? specialGroup["red-light"]["value"] : undefined;
    themes[themeName]["--sjs-special-red-forecolor"] = specialGroup["red-forecolor"] ? specialGroup["red-forecolor"]["value"] : undefined;

    themes[themeName]["--sjs-special-green"] = specialGroup["green"] ? specialGroup["green"]["value"] : undefined;
    themes[themeName]["--sjs-special-green-light"] = specialGroup["green-light"] ? specialGroup["green-light"]["value"] : undefined;
    themes[themeName]["--sjs-special-green-forecolor"] = specialGroup["green-forecolor"] ? specialGroup["green-forecolor"]["value"] : undefined;

    themes[themeName]["--sjs-special-blue"] = specialGroup["blue"] ? specialGroup["blue"]["value"] : undefined;
    themes[themeName]["--sjs-special-blue-light"] = specialGroup["blue-light"] ? specialGroup["blue-light"]["value"] : undefined;
    themes[themeName]["--sjs-special-blue-forecolor"] = specialGroup["blue-forecolor"] ? specialGroup["blue-forecolor"]["value"] : undefined;

    themes[themeName]["--sjs-special-yellow"] = specialGroup["yellow"] ? specialGroup["yellow"]["value"] : undefined;
    themes[themeName]["--sjs-special-yellow-light"] = specialGroup["yellow-light"] ? specialGroup["yellow-light"]["value"] : undefined;
    themes[themeName]["--sjs-special-yellow-forecolor"] = specialGroup["yellow-forecolor"] ? specialGroup["yellow-forecolor"]["value"] : undefined;
  }

  console.log(JSON.stringify(themes[themeName]));
});

fs.writeFileSync("imported-themes.json", JSON.stringify(themes, null, 4));