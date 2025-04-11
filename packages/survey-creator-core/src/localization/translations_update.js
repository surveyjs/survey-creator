/* eslint no-use-before-define: 0 */
/**
 * Finds missed (untranslated) strings in translation
 * Add missed strings as comments in translation
 * Example of running to update french.ts  and all translation files:
 * node translations_update french
 * node translations_update all
 */
// eslint-disable-next-line no-undef
const fs = require("fs");
// eslint-disable-next-line no-undef
const survey = require("survey-core");
// eslint-disable-next-line no-undef
const utils = require("./translation_utils");

// eslint-disable-next-line no-undef
let arg = process.argv;
if (!Array.isArray(arg)) return;
if (arg.length < 3) {
  utils.reportMessage("You should pass file name as parameter or 'all'");
  return;
}
let parameter = arg[2].toLocaleLowerCase();
const englishJSON = utils.readJson("english");
addPropertiesIntoEnglishJSON(englishJSON);
utils.updateAlternativeNamesInJSON(englishJSON);
if (parameter === "english") {
  updateEnglishTranslation();
  return;
}
if (parameter === "all") {
  fs.readdir(".", function (err, files) {
    if (err) {
      utils.reportMessage("Unable to scan directory: " + err);
      return;
    }
    files.forEach(function (file) {
      if (file.indexOf(".ts") > 0 && file !== "english.ts") {
        updateTranslation(file);
      }
    });
  });
} else {
  if (!utils.isTranslationExists(parameter)) {
    utils.reportMessage("There is no translation file: " + utils.getTranslationFileName(parameter));
    return;
  }
  updateTranslation(parameter);
}
function updateTranslation(name) {
  const json = utils.readJson(name);
  if (!json) return;
  utils.updateAlternativeNamesInJSON(json);
  const lines = [];
  const missedKeys = [];
  utils.updateTranslationKey(lines, missedKeys, englishJSON, json, 1);
  lines.push(utils.getNewLineText(0));
  if (missedKeys.length > 0) {
    utils.replaceText(name, lines.join(""), missedKeys.length);
    utils.reportMessage("Updated file: " + utils.getTranslationFileName(name));
  } else {
    utils.reportMessage("All strings are translated in file: " + utils.getTranslationFileName(name));
  }
}
function updateEnglishTranslation() {
  const lines = [];
  const json = utils.readJson("english.ts");
  updateEnglishAutoGeneratedKey();
  const missedKeys = [];
  utils.updateTranslationKey(lines, missedKeys, englishJSON, json, 1, true);
  lines.push(utils.getNewLineText(0));
  utils.replaceText("english", lines.join(""), 0);
  utils.reportMessage("Updated file: " + utils.getTranslationFileName("english"));
}
function updateEnglishAutoGeneratedKey() {
  const text = utils.readFile("english.ts");
  const lines = text.split("\n");
  const keyNames = [];
  for (let i = 0; i < lines.length; i ++) {
    const str = lines[i].trim();
    if (str.endsWith("{")) {
      const index = str.indexOf(":");
      const name = index > -1 ? str.substring(0, index).trim() : "";
      keyNames.push(name);
    }
    if (str.endsWith("},")) {
      keyNames.pop();
    }
    if (str.indexOf(utils.autoGeneratedStr) > -1) {
      const keyName = keyNames.length > 0 ? keyNames[keyNames.length - 1] : "";
      const index = str.indexOf(":");
      if (index > -1 && !!keyName) {
        let keyStr = str.substring(0, index).trim().replace("\"", "");
        utils.autoGeneratedEnglishKeys[keyStr] = keyName;
      }
    }
  }
}
function addPropertiesIntoEnglishJSON(json) {
  const classes = survey.Serializer.getAllClasses();
  const properties = [];
  const propertiesHash = {};
  classes.forEach(name => {
    const cl = survey.Serializer.findClass(name);
    cl.properties.forEach(prop => {
      properties.push(prop);
      propertiesHash[prop.name] = prop;
      if (!!prop.alternativeName) {
        utils.alternativeNames[prop.alternativeName] = prop.name;
      }
    });
  });
  for (let propName in propertiesHash) {
    if (!json.pe[propName] && !json.p[propName]) {
      json.p[propName] = propName;
    }
    if (!!utils.alternativeNames[propName]) {
      delete utils.alternativeNames[propName];
    }
  }
}