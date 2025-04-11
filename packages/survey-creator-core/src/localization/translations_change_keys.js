/* eslint no-use-before-define: 0 */
/**
 * Move keys from one object into another object and optionally rename them
 * Add missed strings as comments in translation
 * Example of running to update french.ts  and all translation files:
 * node translations_change_keys french
 * node translations_change_keys all
 */
// eslint-disable-next-line no-undef
const fs = require("fs");
// eslint-disable-next-line no-undef
const survey = require("survey-core");
// eslint-disable-next-line no-undef
const utils = require("./translation_utils");

const keysToUpdate = [
  { src: "ed.testSurvey", dest: "tabs.preview" },
  { src: "ed.themeSurvey", dest: "tabs.theme" },
  { src: "ed.embedSurvey", dest: "" },
  { src: "ed.translation", dest: "tabs.translation" },
  { src: "ed.designer", dest: "tabs.designer" },
  { src: "ed.jsonEditor", dest: "tabs.editor" },
  { src: "tabs.editor", dest: "tabs.json" },
  { src: "ed.logic", dest: "tabs.logic" }
];

// eslint-disable-next-line no-undef
let arg = process.argv;
if(!Array.isArray(arg)) return;
if(arg.length < 3) {
  utils.reportMessage("You should pass file name as parameter or 'all'");
  return;
}
let parameter = arg[2].toLocaleLowerCase();
if(parameter === "english") {
  return;
}
const englishJSON = utils.readJson("english");
if(parameter === "all") {
  fs.readdir(".", function (err, files) {
    if (err) {
      utils.reportMessage("Unable to scan directory: " + err);
      return;
    }
    files.forEach(function (file) {
      if(file.indexOf(".ts") > 0 && file !== "english.ts") {
        updateTranslation(file);
      }
    });
  });
} else {
  if(!utils.isTranslationExists(parameter)) {
    utils.reportMessage("There is no translation file: " + utils.getTranslationFileName(parameter));
    return;
  }
  updateTranslation(parameter);
}

function updateTranslation(name) {
  const json = utils.readJson(name);
  const newJson = name === "english" ? englishJSON : {};
  if(name !== "english") {
    updateJsonKeys(newJson, json, englishJSON);
  }
  let counter = 0;
  keysToUpdate.forEach(item => {
    counter += moveKeys(newJson, item.src, item.dest) ? 1 : 0;
  });
  const lines = [];
  const stringsToTranslate = [];
  utils.updateTranslationKey(lines, stringsToTranslate, englishJSON, newJson, 1);
  lines.push(utils.getNewLineText(0));

  utils.replaceText(name, lines.join(""), 0, []);
  utils.reportMessage("Updated file: " + utils.getTranslationFileName(name) + ". " + counter + " keys moved/deleted.");
}
function updateJsonKeys(newJson, json, english) {
  const keys = Object.keys(english);
  keys.forEach(key => {
    if(utils.isObject(english, key)) {
      newJson[key] = json[key] || {};
      updateJsonKeys(newJson[key], newJson[key], english[key]);
    }
  });
}
function moveKeys(json, src, dest) {
  if(!src) return false;
  let path = src.split(".");
  const srcObj = getObjFromPath(json, path);
  let strName = path[path.length - 1];
  const val = !!srcObj ? srcObj[strName] : undefined;
  if(!val) return false;
  delete srcObj[strName];
  if(!dest) return true;
  path = dest.split(".");
  const destObj = getObjFromPath(json, path);
  if(!!destObj) {
    strName = path[path.length - 1];
    destObj[strName] = val;
  }
  return true;
}
function getObjFromPath(json, path) {
  for(let i = 0; i < path.length - 1; i ++) {
    if(!json) return undefined;
    json = json[path[i]];
  }
  return json;
}