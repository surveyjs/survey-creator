/* eslint no-use-before-define: 0 */
/**
 * Auto translate strings using ms api translate service
 * Example of translating un-translated string in french.ts:
 * node translation_ms-translator french <ms-tranlation-key-32-symbols>
 * Example of translating un-translated string in all files:
 * node translation_ms-translator all <ms-tranlation-key-32-symbols>
 */
// eslint-disable-next-line no-undef
const http = require("https");
// eslint-disable-next-line no-undef
const crypto = require("crypto");
// eslint-disable-next-line no-undef
const fs = require("fs");
// eslint-disable-next-line no-undef
const utils = require("./translation_utils");

const unsupportedName = "unsupported";

// eslint-disable-next-line no-undef
let arg = process.argv;
if(!Array.isArray(arg)) return;
if(arg.length < 4) {
  utils.reportMessage("You should pass file name as parameter and ms-translation-key");
  return;
}
let parameter = arg[2].toLocaleLowerCase();
if(parameter === "english") {
  utils.reportMessage("You can't update english translation");
  return;
}
let translationKey = arg[3];

const endpoint = "api.cognitive.microsofttranslator.com";
const resource_region = "southcentralus";
const englishJSON = utils.readJson("english");
if(parameter === "all") {
  fs.readdir(".", function (err, files) {
    if (err) {
      utils.reportMessage("Unable to scan directory: " + err);
      return;
    }
    files.forEach(function (file) {
      if(file.indexOf(".ts") > 0 && file !== "english.ts") {
        translateLanguage(file);
      }
    });
  });
} else {
  if(!utils.isTranslationExists(parameter)) {
    utils.reportMessage("There is no translation file: " + utils.getTranslationFileName(parameter));
    return;
  }
  translateLanguage(parameter);
}

function getMSTranslationLocale(name) {
  const locale = utils.getLocale(name);
  if(locale === "gr") return "el";
  if(locale === "ua") return "uk";
  if(locale === "tel") return "te";
  if(locale === "rs") return "sr-Latn";
  if(locale === "tg") return unsupportedName;
  return locale;
}
function translateLanguage(name) {
  const locale = getMSTranslationLocale(name);
  if(!locale) return;
  if(locale === "en") {
    return;
  }
  if(locale === unsupportedName) {
    utils.reportMessage("MS translator doesn't support: " + name + ".");
    return;
  }
  const json = utils.readJson(name);
  if(!json) return;
  utils.updateAlternativeNamesInJSON(json);
  const lines = [];
  const stringsToTranslate = [];
  utils.updateTranslationKey(lines, stringsToTranslate, englishJSON, json, 1);
  lines.push(utils.getNewLineText(0));
  if(stringsToTranslate.length === 0) {
    utils.reportMessage("File name: " + name + ". There is nothing to translate.");
    return;
  }
  translateStrings(locale, stringsToTranslate, () => {
    updateFileWithTranslatedText(name, lines, stringsToTranslate);
  });
}
function updateFileWithTranslatedText(name, lines, stringsToTranslate) {
  for(let i = 0; i < stringsToTranslate.length; i ++) {
    const item = stringsToTranslate[i];
    if(!!item.translation && item.lineIndex < lines.length) {
      let str = utils.getNewLineText(item.level) + utils.getKeyName(item.propKey) + ": " + JSON.stringify(item.translation);
      if(item.hasComma) str += ",";
      if(!!item.comment) str += item.comment;
      lines.splice(item.lineIndex, 1, str);
    }
  }
  const text = lines.join("");
  utils.replaceText(name, text, 0, stringsToTranslate);
  utils.reportMessage("Updated file: " + utils.getTranslationFileName(name));
}
function translateStrings(locale, stringsToTranslate, callback) {
  const dataToTranslate = [];
  for(let i = 0; i < stringsToTranslate.length; i ++) {
    dataToTranslate.push({ text: stringsToTranslate[i].english });
  }
  let data = "";
  http.request({
    hostname: endpoint,
    path: "/translate?api-version=3.0&from=en&to=" + locale,
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": translationKey,
      "Ocp-Apim-Subscription-Region": resource_region,
      "Content-type": "application/json",
      "X-ClientTraceId": UUIDGenerator()
    },
    responseType: "json"
  }, (response) => {
    response.on("data", function (chunk) {
      data += chunk;
    });
    response.on("end", function () {
      const translations = JSON.parse(data);
      for(let i = 0; i < translations.length; i ++) {
        const item = translations[i];
        const tr_item = stringsToTranslate[i];
        tr_item.translation = item.translations[0].text;
      }
      callback();
    });
  }).on("error", (error) => {
    utils.reportMessage("Error to translate: " + locale + ". Error: " + JSON.stringify(error, null, 2));
  }).end(JSON.stringify(dataToTranslate));
}
function UUIDGenerator() {
  return crypto.randomBytes(16).toString("hex");
}