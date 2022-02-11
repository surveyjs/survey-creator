var doc = require("surveyjs-doc-generator");

doc.generateDts({ 
  entries: ["./src/entries/index.ts"],
  out: "./build/survey-creator-core.d.ts",
  name: "Type definition for Survey Creatorlibrary. Platform independent (core)",
  license: "https://surveyjs.io/Licenses#SurveyCreator",
  paths: {
    "survey-core": ["./node_modules/survey-core/survey.core.d.ts"]
  }    
}
);
