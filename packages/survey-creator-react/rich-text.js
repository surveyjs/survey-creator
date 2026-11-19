/* global Survey, SurveyCreator, SurveyCreatorCore, SurveyTheme, React, ReactDOM, SurveyRichText */
// Dev-only harness for Creator rich text. Not part of any bundle and not used by automated tests.
// Survey JSON is Appendix A of the rich text spec. ?plugin=off loads neither the plugin nor the setup.
var demoSurveyJson = String.raw`{
  "title": "Rich text <strong>demo</strong>",
  "description": "<p>Survey description with <em>italic</em> text.</p><p>Second paragraph.</p>",
  "pages": [
    {
      "name": "strings",
      "title": "Strings",
      "elements": [
        {
          "type": "text", "name": "s1",
          "title": "Title with <em>italic</em>, <strong>bold</strong>, <s>strike</s> and <a href=\"https://surveyjs.io\">a link</a>",
          "description": "<p>Line one<br>Line two</p><ul><li>item one</li><li>item two</li></ul>"
        },
        {
          "type": "radiogroup", "name": "s2", "title": "Plain title",
          "choices": [
            { "value": "bold", "text": "<strong>Bold</strong> choice" },
            { "value": "plain", "text": "Plain choice" },
            { "value": "markdown", "text": "Markdown **is not** rendered" },
            { "value": "tom", "text": "Tom & Jerry" }
          ]
        },
        { "type": "text", "name": "s3", "title": "Raw <b>html</b> and <script>alert(1)</script>" },
        { "type": "text", "name": "s4", "title": "<a href=\"javascript:alert(1)\">js link</a>" },
        { "type": "text", "name": "s5", "title": "Table", "description": "<table><tr><td>a</td><td>b</td></tr><tr><td>1</td><td>2</td></tr></table>" },
        { "type": "text", "name": "s6", "title": "<ul><li>a list</li><li>in a title</li></ul>" },
        {
          "type": "text", "name": "s7", "title": "Styled string",
          "description": "<p style=\"color:red\">Red</p><table><tr><td>cell</td></tr></table>"
        },
        { "type": "text", "name": "s8", "title": "Plain multi-line description", "description": "Plain line one\nPlain line two" }
      ]
    },
    {
      "name": "editor",
      "title": "Editor",
      "elements": [
        { "type": "richtext", "name": "c_md", "title": "Rich answer (static toolbar)", "placeholder": "Type and format text" },
        { "type": "richtext", "name": "c_typing", "title": "Updates while typing", "textUpdateMode": "onTyping" },
        {
          "type": "richtext", "name": "c_legacy", "title": "Plain answer from before rich text",
          "defaultValue": "Typed in a textarea: a < b & c\nSecond line"
        },
        { "type": "richtext", "name": "c_inline", "title": "Inline mode", "acceptCarriageReturn": false },
        { "type": "richtext", "name": "c_max", "title": "Max length 50", "maxLength": 50 },
        { "type": "richtext", "name": "c_rows", "title": "Rows, autoGrow, resize", "rows": 6, "autoGrow": true, "allowResize": true },
        { "type": "richtext", "name": "c_tb_none", "title": "Toolbar: none (shortcuts only)", "richTextToolbarMode": "none" },
        { "type": "richtext", "name": "c_tb_focus", "title": "Toolbar: on focus", "richTextToolbarMode": "onFocus" },
        { "type": "richtext", "name": "c_tb_selection", "title": "Toolbar: on selection", "richTextToolbarMode": "onSelection" },
        { "type": "richtext", "name": "c_tb_static", "title": "Toolbar: static", "richTextToolbarMode": "static" },
        {
          "type": "richtext", "name": "c_unsupported", "title": "Unsupported stored content",
          "defaultValue": "<p style=\"color:red\">Red</p><table><tr><td>cell</td></tr></table>"
        },
        {
          "type": "matrixdropdown", "name": "m1", "title": "Matrix with a rich text cell",
          "columns": [{ "name": "notes", "cellType": "richtext" }],
          "rows": ["Row 1"]
        }
      ]
    }
  ]
}`;

var pluginLoaded = typeof SurveyRichText !== "undefined" && !!SurveyRichText.RichText;
var richStringAreas = ["designer-tab", "preview-tab", "theme-tab", "translation-tab:source-survey", "translation-tab:target-survey", "matrix-cell-question-popup-editor"];

SurveyCreatorCore.registerSurveyTheme(SurveyTheme);
SurveyCreatorCore.registerCreatorTheme(SurveyTheme);

if (pluginLoaded) {
  Survey.Serializer.findProperty("survey", "description").type = "html";
  Survey.Serializer.findProperty("survey", "description").defaultValue = "description";
  Survey.Serializer.findProperty("survey", "title").defaultValue = "title";
  Survey.Serializer.findProperty("page", "description").type = "html";
  Survey.Serializer.findProperty("question", "title").type = "inlinehtml";
  Survey.Serializer.findProperty("itemvalue", "text").type = "inlinehtml";
}

var creator = new SurveyCreator.SurveyCreator({
  showThemeTab: true,
  showTranslationTab: true,
  showLogicTab: true
});
if (pluginLoaded) {
  creator.registerRichTextEditor(SurveyRichText.RichText);
  creator.onSurveyInstanceCreated.add(function (_, options) {
    if (richStringAreas.indexOf(options.area) > -1) {
      options.survey.onTextMarkdown.add(SurveyRichText.RichText.renderStringHandler);
    }
  });
}
creator.JSON = JSON.parse(demoSurveyJson);
window.creator = creator;

ReactDOM.render(
  React.createElement(SurveyCreator.SurveyCreatorComponent, { creator: creator }),
  document.getElementById("creator-host")
);
