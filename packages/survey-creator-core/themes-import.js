const fs = require('fs');
const MikeThemes = require("./themes.json");
const themes = {};

function createBoxShadow(value) {
  return value.map((val => `${val["type"] === "innerShadow" ? "inset " : ""}${val.x}px ${val.y}px ${val.radius}px ${val.spread}px ${val.color}`
  )).join(",");
}
function getShadowSettings(shadowGroup) {
  const result = {};
  Object.keys(shadowGroup)
  .filter(shadowPropery => { return (shadowPropery !== "category" && shadowPropery !== "exportKey"); })
  .forEach(shadowPropery => {
    if(shadowPropery === "offset") {
      result["x"] = shadowGroup[shadowPropery]["x"]["value"];
      result["y"] = shadowGroup[shadowPropery]["y"]["value"];
    } else {
      result[shadowPropery] = shadowGroup[shadowPropery]["value"];
    }
  });
return createBoxShadow([result]);
}

Object.keys(MikeThemes).forEach(function (themeName) {
  console.log(themeName);
  
  const generalGroup = MikeThemes[themeName].general;
  const primaryGroup = MikeThemes[themeName].primary;
  const secondaryGroup = MikeThemes[themeName].secondary;
  const shadowGroup = MikeThemes[themeName].shadow;
  const bordersGroup = MikeThemes[themeName].borders;
  const specialGroup = MikeThemes[themeName].special;

  themes[themeName] = {};

  if(!!generalGroup) {
    themes[themeName] = {
      "--background": generalGroup["backcolor"] ? generalGroup["backcolor"]["value"] : undefined,
      "--background-dark": generalGroup["backcolor-dark"] ? generalGroup["backcolor-dark"]["value"] : undefined,
      "--background-dim": generalGroup["dim-backcolor"] ? generalGroup["dim-backcolor"]["value"]: undefined,
      "--background-dim-light": generalGroup["dim-backcolor-light"] ? generalGroup["dim-backcolor-light"]["value"] : undefined,
      "--sjs-general-forecolor": generalGroup.forecolor ? generalGroup.forecolor["value"] : undefined,
      "--sjs-general-forecolor-light": generalGroup["forecolor-light"] ? generalGroup["forecolor-light"]["value"]: undefined,
      "--sjs-general-dim-forecolor": generalGroup["dim-forecolor"] ? generalGroup["dim-forecolor"]["value"] : undefined,
      "--sjs-general-dim-forecolor-light": generalGroup["dim-forecolor-light"] ? generalGroup["dim-forecolor-light"]["value"] : undefined,
    }
  }
  if(!!primaryGroup) {
    themes[themeName]["--sjs-primary-backcolor"] = primaryGroup["backcolor"] ? primaryGroup["backcolor"]["value"] : undefined;
    themes[themeName]["--sjs-primary-backcolor-light"] = primaryGroup["backcolor-light"] ? primaryGroup["backcolor-light"]["value"] : undefined;
    themes[themeName]["--sjs-primary-backcolor-dark"] = primaryGroup["backcolor-dark"] ? primaryGroup["backcolor-dark"]["value"] : undefined;
    themes[themeName]["--sjs-primary-forecolor"] = primaryGroup["forecolor"] ? primaryGroup["forecolor"]["value"] : undefined;
    themes[themeName]["--base-unit"] = "8px";
    themes[themeName]["--sjs-corner-radius"] = "4px";
  }
  if(!!shadowGroup) {
    themes[themeName]["--sjs-shadow-small"] = shadowGroup["small"] ? getShadowSettings(shadowGroup["small"]) : undefined;
    themes[themeName]["--sjs-shadow-medium"] = shadowGroup["medium"] ? getShadowSettings(shadowGroup["medium"]) : undefined;
    themes[themeName]["--sjs-shadow-large"] = shadowGroup["large"] ? getShadowSettings(shadowGroup["large"]) : undefined;
    themes[themeName]["--sjs-shadow-inner"] = shadowGroup["inner"] ? getShadowSettings(shadowGroup["inner"]) : undefined;
  }

  console.log(JSON.stringify(themes[themeName]));
});

fs.writeFileSync("imported-themes.json", JSON.stringify(themes, null, 4));