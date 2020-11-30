var doc = require("surveyjs-doc-generator");
var ts = require("typescript");

doc.generateDocumentation(process.argv.slice(2), {
    target: ts.ScriptTarget.ES5, module: ts.ModuleKind.CommonJS
});