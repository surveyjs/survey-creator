import * as doc from "surveyjs-doc-generator";
import * as ts from "typescript";

doc.generateDocumentation(process.argv.slice(2), <any>{
    target: ts.ScriptTarget.ES5, module: ts.ModuleKind.CommonJS
});