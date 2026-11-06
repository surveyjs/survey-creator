/* global SurveyCreator, SurveyCreatorCore, SurveyTheme, React, ReactDOM, SurveyRichText */
// Dev-only harness for Creator rich text. Not part of any bundle.
var demoSurveyJson = String.raw`{
  "title": "Rich text **demo**",
  "description": "Survey description with *italic* text.\n\nSecond paragraph.",
  "pages": [
    {
      "name": "strings",
      "title": "Strings",
      "elements": [
        {
          "type": "text", "name": "s1",
          "title": "Title with *italic*, **bold**, ~~strike~~ and [a link](https://surveyjs.io)",
          "description": "Line one\nLine two\n\n- item one\n- item two"
        },
        {
          "type": "radiogroup", "name": "s2", "title": "Plain title",
          "choices": ["**Bold** choice", "Plain choice", "Choice with a literal \\* star"]
        },
        { "type": "text", "name": "s3", "title": "Raw <b>html</b> and <script>alert(1)</script>" },
        { "type": "text", "name": "s4", "title": "[js link](javascript:alert(1))" },
        { "type": "text", "name": "s5", "title": "Table", "description": "| a | b |\n|---|---|\n| 1 | 2 |" },
        { "type": "text", "name": "s6", "title": "- not a list in a title" },
        {
          "type": "text", "name": "s7", "title": "HTML string",
          "description": "<p style=\"color:red\">Red</p><table><tr><td>cell</td></tr></table>"
        }
      ]
    },
    {
      "name": "editor",
      "title": "Editor",
      "elements": [
        { "type": "comment", "name": "c_md", "title": "Markdown answer", "textFormat": "markdown", "placeholder": "Type and format text" },
        { "type": "comment", "name": "c_typing", "title": "Updates while typing", "textFormat": "markdown", "textUpdateMode": "onTyping" },
        { "type": "comment", "name": "c_html", "title": "HTML answer", "textFormat": "html" },
        { "type": "comment", "name": "c_inline", "title": "Inline mode", "textFormat": "markdown", "acceptCarriageReturn": false },
        { "type": "comment", "name": "c_max", "title": "Max length 50", "textFormat": "markdown", "maxLength": 50 },
        { "type": "comment", "name": "c_rows", "title": "Rows, autoGrow, resize", "textFormat": "markdown", "rows": 6, "autoGrow": true, "allowResize": true },
        {
          "type": "comment", "name": "c_unsupported", "title": "Unsupported stored content", "textFormat": "html",
          "defaultValue": "<p style=\"color:red\">Red</p><table><tr><td>cell</td></tr></table>"
        },
        {
          "type": "matrixdropdown", "name": "m1", "title": "Matrix with a rich comment cell",
          "columns": [{ "name": "notes", "cellType": "comment", "textFormat": "markdown" }],
          "rows": ["Row 1"]
        }
      ]
    }
  ]
}`;

var pluginLoaded = typeof SurveyRichText !== "undefined" && !!SurveyRichText.RichText;
var richStringAreas = ["designer-tab", "preview-tab", "theme-tab", "translation-tab:source-survey", "translation-tab:target-survey", "matrix-cell-question-popup-editor"];

document.getElementById("plugin-status").textContent = pluginLoaded ? "Plugin: loaded" : "Plugin: off";

function text(id, value) {
  document.getElementById(id).textContent = value;
}

SurveyCreatorCore.registerSurveyTheme(SurveyTheme);
SurveyCreatorCore.registerCreatorTheme(SurveyTheme);

function createCreator() {
  var host = document.getElementById("creator-host");
  if (window.creatorModel) {
    ReactDOM.unmountComponentAtNode(host);
    window.creatorModel.dispose();
  }
  var creator = new SurveyCreator.SurveyCreator({
    showThemeTab: true,
    showTranslationTab: true,
    showLogicTab: true
  });
  var registerEditor = pluginLoaded && document.getElementById("register-editor").checked;
  var htmlHandler = pluginLoaded && document.getElementById("html-handler").checked;
  var passThrough = pluginLoaded && document.getElementById("pass-through").checked;
  if (registerEditor) {
    creator.registerRichTextEditor(SurveyRichText.RichText);
  }
  if (pluginLoaded) {
    creator.onSurveyInstanceCreated.add(function (_, options) {
      if (richStringAreas.indexOf(options.area) > -1) {
        options.survey.onTextMarkdown.add(passThrough
          ? function (_sender, markdownOptions) { markdownOptions.html = markdownOptions.text; }
          : SurveyRichText.RichText.textMarkdownHandler);
      }
    });
  }
  if (htmlHandler) {
    creator.onHtmlToMarkdown.add(passThrough
      ? function (_sender, markdownOptions) { markdownOptions.text = markdownOptions.html; }
      : SurveyRichText.RichText.htmlToMarkdownHandler);
  }
  creator.JSON = JSON.parse(demoSurveyJson);
  window.creatorModel = creator;
  window.creator = creator;
  ReactDOM.render(
    React.createElement(SurveyCreator.SurveyCreatorComponent, { creator: creator }),
    host
  );
  var rich = creator.isRichStringsEnabled();
  text("rich-status", rich ? "Rich strings: enabled" : "Rich strings: off");
}

document.getElementById("register-editor").addEventListener("change", createCreator);
document.getElementById("html-handler").addEventListener("change", createCreator);
document.getElementById("pass-through").addEventListener("change", createCreator);
createCreator();
