if (!window["%hammerhead%"]) {
  //   var titleAdorner = {
  //     getCss: () => {
  //       return "mu_title";
  //     },
  //     afterRender: (domEl, model) => {
  //       var decoration = document.createElement("div");
  //       decoration.innerHTML = "";
  //       domEl.appendChild(decoration);
  //     }
  //   };

  //   SurveyEditor.registerAdorner("title", titleAdorner);

  Survey.Survey.cssType = "bootstrap";
  Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  // SurveyEditor.editorLocalization.currentLocale = "es";
  var editor = new SurveyEditor.SurveyEditor("editorElement");
  //editor.surveyId = '5af48e08-a0a5-44a5-83f4-1c90e8e98de1';
  //editor.surveyPostId = '3ce10f8b-2d8a-4ca2-a110-2994b9e697a1';
  editor.saveSurveyFunc = function(saveNo, callback) {
    alert("ok");
    callback(saveNo, true);
  };

  //editor.loadSurvey("b2b56b2c-ad9e-4951-8f0e-c246d6b6a52a");
  editor.showOptions = true;
  editor.showState = true;
  //editor.loadSurvey("a0f7f132-eee4-42e4-b8c8-f8b16840a478");
  //editor.loadSurvey("65c74d4a-3b16-412f-8200-9ac53c8f5c0b");

  //ko.applyBindings(new SurveyEditor.SurveysManager("https://dxsurvey.com", "a797f29b53f8455e8b3ef317f8904dac", editor), document.getElementById("manage"));

  window.editor = editor;
}
