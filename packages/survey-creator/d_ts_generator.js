var doc = require("surveyjs-doc-generator");

doc.generateDts({ 
  entries: ["./src/entries/index.ts"],
  out: "./build/survey-creator.d.ts",
  name: "Type definition for Survey Creator library",
  license: "https://surveyjs.io/Licenses#SurveyCreator",
  paths: {
    "survey-knockout": ["./node_modules/survey-knockout/survey.ko.d.ts"]
  }    
}
);
