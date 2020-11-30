if (!window["%hammerhead%"]) {
  // SurveyCreator.SurveyJSONEditor.aceBasePath = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/";

  var options = {};
  var creator = new SurveyCreator.SurveyCreator("creator-element", options);
  window.creator = creator;

  ko.applyBindings();
}
