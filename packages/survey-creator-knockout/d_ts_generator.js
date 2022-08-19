var doc = require("surveyjs-doc-generator");

doc.generateDts({ 
  entries: ["./src/entries/index.ts"],
  out: "./build/survey-creator-knockout.d.ts",
  name: "Type definition for Survey Creator library for Knockout",
  license: "https://surveyjs.io/Licenses#SurveyCreator",
  excludeImports: true,
  paths: {
    "survey-core": ["./node_modules/survey-core/survey.core.d.ts"],
    "survey-knockout-ui": ["./node_modules/survey-knockout-ui/survey-knockout-ui.d.ts"],
    "survey-creator-core": ["../survey-creator-core/build/survey-creator-core.d.ts"]
  }    
}
);
