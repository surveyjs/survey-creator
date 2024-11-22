const fs = require("fs");

const sourcePath = "../../visualRegressionTests/";
const destinationPath = "../../visualRegressionTests-V2/";

function copyFolder(folderName, srcPath, destPath) {
  console.log("folder name: " + folderName);
  const newDestPath = destPath + folderName + "/";
  try {
    if (!fs.existsSync(newDestPath)) {
      fs.mkdirSync(newDestPath);
    }
  } catch (err) {
    console.log(err);
  }
  copyFiles(srcPath + folderName + "/", newDestPath);
}

function copyFiles(srcPath, destPath) {
  fs.readdirSync(srcPath, { withFileTypes: true })
  .filter(item => item.name !== "etalons")
  .forEach(item => {
    if(item.isDirectory()) {
      copyFolder(item.name, srcPath, destPath);
    } else {
      if (item.name !== "helper.ts") {
        console.log("source file " + srcPath + item.name);
        fs.copyFileSync(srcPath + item.name, destPath + item.name);
      }
    }
  });
}

try {
  console.log("Copy tests");
  copyFiles(sourcePath, destinationPath);
} catch(e) {
  console.log(e)
}