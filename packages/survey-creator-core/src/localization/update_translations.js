/* eslint no-use-before-define: 0 */
/**
 * Finds missed (untranslated) strings in translation
 * Add missed strings as comments in translation
 * Example of running to update french.ts  and all translation files:
 * node update_translation french
 * node update_translation all
 */
// eslint-disable-next-line no-undef
const fs = require("fs");
// eslint-disable-next-line no-undef
const survey = require("survey-core");

const startStr = " = {";
const endStr = "};";
const alternativeNames = {};
const keyComments = {
  survey: "survey templates",
  qt: "Question types",
  ed: "Strings in SurveyJS Creator",
  pe: "Property Editors",
  pv: "Property values",
  op: "Operators",
  ew: "Embed window",
  ts: "Preview (Survey)",
  p: "Properties"
};
const propertiesComments = {
  addNewTypeQuestion: "{0} is localizable question type",
  itemExpressionText: "{0} - the expression",
  page_visibilityText: "{0} page name",
  panel_visibilityText: "{0} panel name",
  panel_enableText: "{0} panel name",
  question_visibilityText: "{0} question name",
  question_enableText: "{0} question name",
  question_requireText: "{0} question name",
  column_visibilityText: "{0} column name, {1} question name",
  column_enableText: "{0} column name, {1} question name",
  column_requireText: "{0} column name, {1} question name",
  trigger_setvalueText: "{0} question name, {1} setValue",
  trigger_copyvalueText: "{0} and {1} question names",
  trigger_skipText: "{0} question name",
  trigger_runExpressionText1: "{0} the expression",
  trigger_runExpressionText2: "{0} question name"
};
// eslint-disable-next-line no-undef
let arg = process.argv;
if(!Array.isArray(arg)) return;
if(arg.length < 3) {
  reportMessage("You should pass file name as parameter or 'all'");
  return;
}
let parameter = arg[2].toLocaleLowerCase();
const englishJSON = readJson("english");
addPropertiesIntoEnglishJSON(englishJSON);
updateAlternativeNamesInJSON(englishJSON);
if(parameter === "english") {
  updateEnglishTranslation();
  return;
}
if(parameter === "all") {
  fs.readdir(".", function (err, files) {
    if (err) {
      reportMessage("Unable to scan directory: " + err);
      return;
    }
    files.forEach(function (file) {
      if(file.indexOf(".ts") > 0 && file !== "english.ts") {
        updateTranslation(file);
      }
    });
  });
} else {
  if(!isTranslationExists(parameter)) {
    reportMessage("There is translation file: " + getTranslationFileName(parameter));
    return;
  }
  updateTranslation(parameter);
}
function reportMessage(msg) {
  // eslint-disable-next-line no-console
  console.log(msg);
}
function isTranslationExists(fileName) {
  return fs.existsSync(getTranslationFileName(fileName));
}
function getTranslationFileName(name) {
  if(name.indexOf(".ts") < 0) {
    name += ".ts";
  }
  return name;
}
function readFile(fileName) {
  return fs.readFileSync(getTranslationFileName(fileName), "utf8");
}
function readJson(name) {
  const text = readFile(name);
  const start = text.indexOf(startStr);
  const end = text.lastIndexOf(endStr);
  if(start < 0 || end < 0) return undefined;
  const content = text.substring(start + startStr.length, end);
  return eval("({" + content + "})");
}
function replaceText(name, newText, missedKeys) {
  const text = readFile(name);
  const start = text.indexOf(startStr);
  const end = text.lastIndexOf(endStr);
  let content = text.substring(0, start + startStr.length) +
    newText + text.substring(end);
  let missedKeysStr = "";
  if(name !== "english") {
    if(missedKeys > 0) {
      missedKeysStr = "//There " + missedKeys + " untranslated keys. You can find them in uncommented lines.\n";
    }
    const importIndex = content.indexOf("import {");
    if(importIndex > 0) {
      content = content.substring(importIndex);
    }
  }
  fs.writeFileSync(getTranslationFileName(name), missedKeysStr + content);
}
function updateTranslation(name) {
  const json = readJson(name);
  if(!json) return;
  updateAlternativeNamesInJSON(json);
  const lines = [];
  let missedKeys = updateTranslationKey(lines, englishJSON, json, 1);
  lines.push(getNewLineText(0));
  if(missedKeys > 0) {
    replaceText(name, lines.join(""), missedKeys);
    reportMessage("Updated file: " + getTranslationFileName(name));
  } else {
    reportMessage("All strings are translated in file: " + getTranslationFileName(name));
  }
}
function updateEnglishTranslation() {
  const lines = [];
  updateTranslationKey(lines, englishJSON, undefined, 1);
  lines.push(getNewLineText(0));
  replaceText("english", lines.join(""), 0);
  reportMessage("Updated file: " + getTranslationFileName("english"));
}
function getNewLineText(level) {
  return "\r\n".padEnd(2 + level * 2);
}
function getKeyName(key) {
  if(key.indexOf("-") > -1 || key.indexOf("@") > -1) return "\"" + key + "\"";
  return key;
}
function updateTranslationKey(lines, englishJson, json, level, levelKey) {
  let missedKeys = 0;
  let isStarted = true;
  let propComment = "";
  for(let key in englishJson) {
    if(key === "license") continue;
    if(!isStarted) {
      lines[lines.length - 1] += "," + propComment;
    }
    propComment = "";
    isStarted = false;
    const keyName = getKeyName(key);
    if(isObject(englishJson, key)) {
      if(!!json && !json[key]) json[key] = {};
      if(!!keyComments[key]) {
        lines.push(getNewLineText(level) + "// " + keyComments[key]);
      }
      lines.push(getNewLineText(level) + keyName + ": {");
      missedKeys += updateTranslationKey(lines, englishJson[key], !!json ? json[key] : undefined, level + 1, key);
      lines.push(getNewLineText(level) + "}");
    } else {
      let hasValue = !!json && !!json[key];
      let value = hasValue ? json[key] : englishJson[key];
      let line = keyName + ": " + JSON.stringify(value);
      if(!!json && !hasValue || !json && key === value && levelKey === "p") {
        line = "//" + line;
        missedKeys ++;
      }
      lines.push(getNewLineText(level) + line);
      propComment = !!propertiesComments[key] ? " //" + propertiesComments[key] : "";
    }
  }
  if(!!propComment) {
    lines[lines.length - 1] += propComment;
  }
  return missedKeys;
}
function isObject(englishJson, name) {
  const val = englishJson[name];
  return !(typeof val === "string" || val instanceof String);
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
      if(!!prop.alternativeName) {
        alternativeNames[prop.alternativeName] = prop.name;
      }
    });
  });
  for(let propName in propertiesHash) {
    if(!json.pe[propName] && !json.p[propName]) {
      json.p[propName] = propName;
    }
    if(!!alternativeNames[propName]) {
      delete alternativeNames[propName];
    }
  }
}
function updateAlternativeNamesInJSON(json) {
  for(let alternativeName in alternativeNames) {
    const newName = alternativeNames[alternativeName];
    const value = json.pe[alternativeName];
    if(!!value) {
      if(!json.pe[newName]) {
        json.pe[newName] = value;
      }
      delete json.pe[alternativeName];
    }
  }
}