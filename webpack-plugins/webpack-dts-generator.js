'use strict';
const fs = require('fs');
const child_process = require('child_process');

module.exports = function DtsGeneratorProgressPlugin(options) {
  return new options.webpack.ProgressPlugin(function(progress) {
    if (progress === 1) {
      console.log("typescript start");
      child_process.execSync("tsc --p tsconfig.typing.json");
      console.log("typescript end");

      const importName = options.importName || "entries/index";
      const content = "\ndeclare module \"" + options.moduleName + "\" { import main = require(\"" + importName + "\"); export = main; }";
      console.log("\"" + content + "\"");
      fs.writeFile(options.filePath, content, { flag: 'a' }, err => { if(err) { console.error(err); } });
    }
  });
};