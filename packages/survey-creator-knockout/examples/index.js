if (!window["%hammerhead%"]) {
  // SurveyCreator.SurveyJSONEditor.aceBasePath = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/";

  Survey.StylesManager.applyTheme("modern");
  let options = {
    // showTestSurveyTab: false,
    // showJSONEditorTab: false
  };
  let creator = new SurveyCreatorKnockout.SurveyCreator(options);
  let json = {
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  creator.JSON = json;
  ko.applyBindings({ creator: creator });
}
