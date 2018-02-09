import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyTextEditor } from "./propertyModalEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyConditionEditor extends SurveyPropertyTextEditor {
  constructor(property: Survey.JsonObjectProperty, private _type: string) {
    super(property);
  }
  public get editorType(): string {
    return this._type;
  }
  public get availableQuestions(): any[] {
    return (this.object && this.object.survey.getAllQuestions()) || [];
  }
  public get hasAceEditor(): boolean {
    return typeof ace !== "undefined";
  }
  public setup() {
    super.setup();
    this.showDisplayName = false;
  }
}

SurveyPropertyEditorFactory.registerEditor("condition", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyConditionEditor(property, "condition");
});
SurveyPropertyEditorFactory.registerEditor("expression", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyConditionEditor(property, "expression");
});

var operations = [
  {
    value: "and",
    title: "logical 'and' operator"
  },
  {
    value: "&&",
    title: "logical 'and' operator"
  },
  {
    value: "or",
    title: "logical 'or' operator"
  },
  {
    value: "||",
    title: "logical 'or' operator"
  },
  {
    value: "empty",
    title: "returns true if the left operand is empty	{questionName} empty"
  },
  {
    value: "notempty",
    title:
      "returns true if the left operand is not empty	{questionName} notempty"
  },
  {
    value: "=",
    title:
      "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124"
  },
  {
    value: "==",
    title:
      "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124"
  },
  {
    value: "equal",
    title:
      "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124"
  },
  {
    value: "<>",
    title:
      "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124"
  },
  {
    value: "!=",
    title:
      "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124"
  },
  {
    value: "notequal",
    title:
      "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124"
  },
  {
    value: ">",
    title:
      "returns true if the left operand greater then the second operand	{questionName} > 2, {questionName} greater 'a'"
  },
  {
    value: "greater",
    title:
      "returns true if the left operand greater then the second operand	{questionName} > 2, {questionName} greater 'a'"
  },
  {
    value: "<",
    title:
      "returns true if the left operand less then the second operand	{questionName} < 2, {questionName} less 'a'"
  },
  {
    value: "less",
    title:
      "returns true if the left operand less then the second operand	{questionName} < 2, {questionName} less 'a'"
  },
  {
    value: ">=",
    title:
      "returns true if the left operand equal or greater then the second operand	{questionName} >= 2, {questionName} greaterorequal 'a'"
  },
  {
    value: "greaterorequal",
    title:
      "returns true if the left operand equal or greater then the second operand	{questionName} >= 2, {questionName} greaterorequal 'a'"
  },
  {
    value: "<=",
    title:
      "returns true if the left operand equal or less then the second operand	{questionName} <= 2, {questionName} lessorequal 'a'"
  },
  {
    value: "lessorequal",
    title:
      "returns true if the left operand equal or less then the second operand	{questionName} <= 2, {questionName} lessorequal 'a'"
  },
  {
    value: "contains",
    title:
      "return true if the left operand is an array and it contains a value of the second operand	{questionName} contains 'a'"
  },
  {
    value: "notcontains",
    title:
      "return true if the left operand is an array and it does not contain a value of the second operand"
  }
];

ko.bindingHandlers.aceEditor = {
  init: function(element, options) {
    var configs = options();
    var langTools = ace.require("ace/ext/language_tools");
    var editor = ace.edit(element);
    var completer = {
      identifierRegexps: [/[a-zA-Z_0-9{\*\/\<\>\=\!\$\.\-\u00A2-\uFFFF]/],
      getCompletions: function(editor, session, pos, prefix, callback) {
        if (!!configs.questions) {
          if (prefix === "row") {
          } else if (prefix === "panel") {
          } else {
            var operationsFiltered = operations.filter(
              op => op.value.indexOf(prefix) !== -1
            );
            if (operationsFiltered.length === 0) {
              operationsFiltered = operations;
            }
            var questionsFiltered = configs.questions.filter(
              op => op.name.indexOf(prefix) !== -1
            );
            if (questionsFiltered.length === 0) {
              questionsFiltered = configs.questions;
            }
            callback(
              null,
              operationsFiltered
                .map(op => {
                  return {
                    name: "",
                    value: op.value,
                    some: "",
                    meta: op.title
                  };
                })
                .concat(
                  questionsFiltered.map(q => {
                    return {
                      name: "",
                      value: "{" + q.name + "} ",
                      some: "",
                      meta: q.title
                    };
                  })
                )
            );
          }
          return;
        }
        callback(null, []);
      }
    };
    langTools.setCompleters([completer]);
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true
    });

    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
      editor.destroy();
    });
  }
};
