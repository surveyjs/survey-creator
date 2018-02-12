import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyTextEditor } from "./propertyModalEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import * as editorLocalization from "../editorLocalization";

export class SurveyPropertyConditionEditor extends SurveyPropertyTextEditor {
  constructor(
    property: Survey.JsonObjectProperty,
    private _type: string,
    public syntaxCheckMethodName: string
  ) {
    super(property);
  }
  public get editorType(): string {
    return this._type;
  }
  public get availableQuestions(): any[] {
    return (this.object && this.object.survey.getAllQuestions()) || [];
  }
  public get hasAceEditor(): boolean {
    return (
      typeof ace !== "undefined" &&
      typeof ace.require("ace/ext/language_tools") !== "undefined"
    );
  }
  public setup() {
    super.setup();
    this.showDisplayName = false;
  }
}

SurveyPropertyEditorFactory.registerEditor("condition", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyConditionEditor(
    property,
    "condition",
    "createCondition"
  );
});
SurveyPropertyEditorFactory.registerEditor("expression", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyConditionEditor(
    property,
    "expression",
    "parseExpression"
  );
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

const createAnnotations = (
  condition: string,
  syntaxCheckMethodName: string
): AceAjax.Annotation[] => {
  condition = condition || "";
  var annotations = new Array<AceAjax.Annotation>();
  var conditionParser: any = new Survey.ConditionsParser();
  conditionParser[syntaxCheckMethodName](condition);
  if (conditionParser.error) {
    var toErrorSubstring = condition.substring(0, conditionParser.error.at);
    var column = toErrorSubstring.length - toErrorSubstring.lastIndexOf("\n");
    var annotation: AceAjax.Annotation = {
      row: condition.match(/\n/g) ? condition.match(/\n/g).length : 0,
      column: column,
      text: conditionParser.error.code + " (" + column + ")",
      type: "error"
    };
    annotations.push(annotation);
  }
  return annotations;
};

var ID_REGEXP = /[a-zA-Z_0-9{\*\/\<\>\=\!\$\.\-\u00A2-\uFFFF]/;

ko.bindingHandlers.aceEditor = {
  init: function(element, options) {
    var configs = options();
    var langTools = ace.require("ace/ext/language_tools");
    var langUtils = ace.require("ace/autocomplete/util");
    var editor = ace.edit(element);
    var objectEditor: SurveyPropertyConditionEditor = configs.editor;
    var isUpdating = false;

    editor.setOption("useWorker", false);

    editor.getSession().on("change", function() {
      var errors = createAnnotations(
        editor.getValue(),
        objectEditor.syntaxCheckMethodName
      );
      isUpdating = true;
      objectEditor.koTextValue(editor.getValue());
      isUpdating = false;
      //   objectEditor.koHasError(errors.length > 0);
      //   if (errors.length > 0) {
      //     objectEditor.koErrorText(errors[0].text);
      //   }
      editor.getSession().setAnnotations(errors);
    });

    var valueSubscription = objectEditor.koTextValue.subscribe(newVal => {
      if (!isUpdating) {
        editor.setValue(newVal || "");
      }
    });

    var completer = {
      identifierRegexps: [ID_REGEXP],
      getCompletions: (editor, session, pos, prefix, callback) => {
        var configs = options();
        var currentQuestion: Survey.QuestionBase = configs.question;
        var usableQuestions = (configs.questions || []).filter(
          q => q !== currentQuestion
        );
        if (
          !!usableQuestions ||
          currentQuestion instanceof Survey.QuestionMatrixDynamic ||
          currentQuestion instanceof Survey.QuestionPanelDynamic
        ) {
          if (
            langUtils.retrievePrecedingIdentifier(
              session.getLine(pos.row),
              pos.column - 1
            ) === "row" &&
            currentQuestion instanceof Survey.QuestionMatrixDynamic
          ) {
            callback(
              null,
              currentQuestion.columns.map(column => {
                return {
                  name: "",
                  value: "{row." + column.name + "}",
                  some: "",
                  meta: column.title,
                  identifierRegex: ID_REGEXP
                };
              })
            );
          } else if (
            langUtils.retrievePrecedingIdentifier(
              session.getLine(pos.row),
              pos.column - 1
            ) === "panel" &&
            currentQuestion instanceof Survey.QuestionPanelDynamic
          ) {
            callback(
              null,
              currentQuestion.template.elements.map(element => {
                return {
                  name: "",
                  value: "{panel." + element.name + "}",
                  some: "",
                  meta: element.name,
                  identifierRegex: ID_REGEXP
                };
              })
            );
          } else {
            var operationsFiltered = operations.filter(
              op => op.value.indexOf(prefix) !== -1
            );
            if (operationsFiltered.length === 0) {
              operationsFiltered = operations;
            }
            var questionsFiltered = usableQuestions.filter(
              op => op.name.indexOf(prefix) !== -1
            );
            if (questionsFiltered.length === 0) {
              questionsFiltered = usableQuestions;
            }
            var completions = operationsFiltered
              .map(op => {
                return {
                  name: "",
                  value: op.value,
                  some: "",
                  meta: op.title,
                  identifierRegex: ID_REGEXP
                };
              })
              .concat(
                questionsFiltered.map(q => {
                  return {
                    name: "",
                    value: "{" + q.name + "}",
                    some: "",
                    meta: q.title,
                    identifierRegex: ID_REGEXP
                  };
                })
              );
            if (currentQuestion instanceof Survey.QuestionMatrixDynamic) {
              completions.push({
                name: "",
                value: "{row.",
                some: "",
                meta: editorLocalization.editorLocalization.getString(
                  editorLocalization.defaultStrings.pe.aceEditorRowTitle
                ),
                identifierRegex: ID_REGEXP
              });
            } else if (currentQuestion instanceof Survey.QuestionPanelDynamic) {
              completions.push({
                name: "",
                value: "{panel.",
                some: "",
                meta: editorLocalization.editorLocalization.getString(
                  editorLocalization.defaultStrings.pe.aceEditorPanelTitle
                ),
                identifierRegex: ID_REGEXP
              });
            }
            callback(null, completions);
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
      valueSubscription.dispose();
    });

    editor.focus();
  }
};
