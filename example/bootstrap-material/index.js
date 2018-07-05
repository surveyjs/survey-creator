if (!window["%hammerhead%"]) {
  SurveyEditor.StylesManager.applyTheme("bootstrapmaterial");
  var editor = new SurveyEditor.SurveyEditor("editorElement");
  window.editor = editor;
}
