var doc = require("surveyjs-doc-generator");
var ts = require(require.resolve("typescript", { paths: [require.resolve("surveyjs-doc-generator")] }));

doc.generateDocumentation(process.argv.slice(2), {
  target: ts.ScriptTarget.ES5, module: ts.ModuleKind.CommonJS
});