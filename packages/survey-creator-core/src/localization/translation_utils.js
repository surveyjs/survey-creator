// eslint-disable-next-line no-undef
const fs = require("fs");

const startStr = " = {";
const endStr = "};";
// eslint-disable-next-line no-undef
module.exports = {
  isTranslationExists: function (fileName) {
    return fs.existsSync(this.getTranslationFileName(fileName));
  },
  getTranslationFileName: function(name) {
    if(name.indexOf(".ts") < 0) {
      name += ".ts";
    }
    return name;
  },
  readFile: function(fileName) {
    return fs.readFileSync(this.getTranslationFileName(fileName), "utf8");
  },
  readJson: function(name) {
    const text = this.readFile(name);
    const start = text.indexOf(startStr);
    const end = text.lastIndexOf(endStr);
    if(start < 0 || end < 0) return undefined;
    const content = text.substring(start + startStr.length, end);
    return eval("({" + content + "})");
  },
  getLocale: function(name) {
    const text = this.readFile(name);
    let subStr = "surveyLocalization.locales[\"";
    let index = text.indexOf(subStr);
    if(index < 0) {
      subStr = "editorLocalization.locales[\"";
      index = text.indexOf(subStr);
    }
    if(index < 0) return undefined;
    index += subStr.length;
    const endIndex = text.indexOf("\"", index);
    if(endIndex < 0) return undefined;
    return text.substring(index, endIndex);
  },
  convertLinesToText: function(lines) {
    for(let i = 0; i < lines.length; i ++) {
      let line = lines[i];
      if(i < lines.length - 1) {
        line = line + ",";
      }
      line = "\r\n  " + line;
      lines[i] = line;
    }
    lines.push("\r\n");
    return lines.join("");
  },
  replaceText: function(name, newText, missedKeys, translatedKeys) {
    const text = this.readFile(name);
    const start = text.indexOf(startStr);
    const end = text.lastIndexOf(endStr);
    let content = text.substring(0, start + startStr.length) +
      newText + text.substring(end);
    let missedKeysStr = "";
    let translatedKeysStr = "";
    if(name !== "english") {
      if(missedKeys > 0) {
        missedKeysStr = "// This dictionary contains " + missedKeys + " untranslated or inherited localization strings.\n// These strings are commented out. Uncomment and edit them if you want to add your translations.\n";
      }
      if(Array.isArray(translatedKeys)) {
        let keys = [];
        if(text.indexOf("// The following strings have") < 0) {
          keys.push("");
          keys.push("// The following strings have been translated by a machine translation service");
          keys.push("// Remove those strings that you have corrected manually");
        }
        for(let i = 0; i < translatedKeys.length; i ++) {
          const item = translatedKeys[i];
          keys.push("// " + item.key + ": " + JSON.stringify(item.english) + " => " + JSON.stringify(item.translation));
        }
        translatedKeysStr = keys.join("\n");
      }
      const importIndex = content.indexOf("import {");
      if(importIndex > 0) {
        content = content.substring(importIndex);
      }
    }
    fs.writeFileSync(this.getTranslationFileName(name), missedKeysStr + content + translatedKeysStr);
  },
  reportMessage: function(msg) {
    // eslint-disable-next-line
    console.log(msg);
  },
  getNewLineText: function(level) {
    return "\r\n".padEnd(2 + level * 2);
  },
  getKeyName: function(key) {
    if(key.indexOf("-") > -1 || key.indexOf("@") > -1 ||
      ["true", "false"].indexOf(key) > -1) return "\"" + key + "\"";
    return key;
  },
  updateTranslationKey: function(lines, missedKeys, englishJson, json, level, isEnglish, rootKey) {
    let propComment = "";
    const keys = Object.keys(englishJson);
    for(let i = 0; i < keys.length; i ++) {
      const key = keys[i];
      const hasComma = i < keys.length - 1;
      const commaText = hasComma ? "," : "";
      if(key === "license" && !isEnglish) continue;
      propComment = "";
      const keyName = this.getKeyName(key);
      if(this.isObject(englishJson, key)) {
        if(!!json && !json[key]) json[key] = {};
        if(!!this.keyComments[key]) {
          lines.push(this.getNewLineText(level) + "// " + this.keyComments[key]);
        }
        lines.push(this.getNewLineText(level) + keyName + ": {");
        this.updateTranslationKey(lines, missedKeys, englishJson[key], !!json ? json[key] : undefined, level + 1, isEnglish, key);
        lines.push(this.getNewLineText(level) + "}" + commaText);
      } else {
        let hasValue = !!json && json[key] !== undefined;
        let value = hasValue ? json[key] : englishJson[key];
        let line = keyName.toString() + ": " + JSON.stringify(value);
        if(isEnglish) {
          if(!hasValue) {
            line = keyName.toString() + ": " + JSON.stringify(this.getGeneratedEnglishName(keyName));
            if(!this.propertiesComments[key]) {
              this.propertiesComments[key] = " " + this.autoGeneratedStr;
            }
          } else {
            if(!this.propertiesComments[key] && this.autoGeneratedEnglishKeys[key] === rootKey) {
              this.propertiesComments[key] = " " + this.autoGeneratedStr;
            }
          }
        } else {
          if(!!json && !hasValue || !json && key === value) {
            line = "// " + line;
            const comment = !!this.propertiesComments[key] ? " //" + this.propertiesComments[key] : "";
            missedKeys.push({ propKey: key, key: rootKey + "." + key, english: englishJson[key],
              lineIndex: lines.length, level: level, hasComma: hasComma, comment: comment });
          }
        }
        lines.push(this.getNewLineText(level) + line + commaText);
        propComment = !!this.propertiesComments[key] ? " //" + this.propertiesComments[key] : "";
      }
    }
    if(!!propComment) {
      lines[lines.length - 1] += propComment;
    }
    return missedKeys;
  },
  isObject: function(englishJson, name) {
    const val = englishJson[name];
    return !(typeof val === "string" || val instanceof String);
  },
  getGeneratedEnglishName: function(name) {
    if(!name) return name;
    let res = name[0].toUpperCase();
    for(var i = 1; i < name.length; i ++) {
      if(name[i] === name[i].toUpperCase() && name[i - 1] !== name[i - 1].toUpperCase()) {
        res += " ";
        if(i < name.length - 1 && name[i + 1] !== name[i + 1].toUpperCase()) {
          res += name[i].toLowerCase();
        } else {
          res += name[i];
        }
      } else {
        res += name[i];
      }
    }
    return res;
  },
  updateAlternativeNamesInJSON: function(json) {
    for(let alternativeName in this.alternativeNames) {
      const newName = this.alternativeNames[alternativeName];
      const value = json.pe[alternativeName];
      if(!!value) {
        if(!json.pe[newName]) {
          json.pe[newName] = value;
        }
        delete json.pe[alternativeName];
      }
    }
  },
  autoGeneratedStr: "Auto-generated string",
  autoGeneratedEnglishKeys: {},
  alternativeNames: {},
  keyComments: {
    survey: "survey templates",
    qt: "Question types",
    ed: "Strings in SurveyJS Creator",
    pe: "Property Editors",
    pv: "Property values",
    op: "Operators",
    ew: "Embed window",
    ts: "Preview (Survey)",
    p: "Properties"
  },
  propertiesComments: {
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
    trigger_setvalueEmptyText: "{0} question name",
    trigger_setvalueText: "{0} question name, {1} setValue",
    trigger_copyvalueText: "{0} and {1} question names",
    trigger_skipText: "{0} question name",
    trigger_runExpressionText1: "{0} the expression",
    trigger_runExpressionText2: "{0} question name"
  }
};