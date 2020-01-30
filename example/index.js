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

  // SurveyEditor.editorLocalization.currentLocale = "fr";

  // SurveyEditor.removeAdorners(["mainRoot"]);

  // Survey.Survey.cssType = "bootstrap";
  // Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  // SurveyEditor.editorLocalization.currentLocale = "hu";
  // SurveyEditor.StylesManager.applyTheme("winter");

  //color customization
  var mainColor = "#0065FF";
  var mainHoverColor = "#60C5FB";
  var textColor = "#4a4a4a";
  var headerColor = "#7ff07f";
  var headerBackgroundColor = "#4a4a4a";
  var bodyContainerBackgroundColor = "#f8f8f8";

  var defaultThemeColorsSurvey = Survey
      .StylesManager
      .ThemeColors["default"];
  defaultThemeColorsSurvey["$main-color"] = mainColor;
  defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
  defaultThemeColorsSurvey["$text-color"] = textColor;
  defaultThemeColorsSurvey["$header-color"] = headerColor;
  defaultThemeColorsSurvey["$header-background-color"] = headerBackgroundColor;
  defaultThemeColorsSurvey["$body-container-background-color"] = bodyContainerBackgroundColor;

  var defaultThemeColorsEditor = SurveyEditor
      .StylesManager
      .ThemeColors["default"];
  defaultThemeColorsEditor["$primary-color"] = mainColor;
  defaultThemeColorsEditor["$secondary-color"] = mainColor;
  defaultThemeColorsEditor["$primary-hover-color"] = mainHoverColor;
  defaultThemeColorsEditor["$primary-text-color"] = textColor;
  defaultThemeColorsEditor["$selection-border-color"] = mainColor;

  Survey
      .StylesManager
      .applyTheme();
  SurveyEditor
      .StylesManager
      .applyTheme();
  //

  var options = {
    pageEditMode: "single"
  };
  // SurveyEditor.editorLocalization.getLocale("en").survey.dropQuestion =
  //   "Drag and drop a question to start designing your form";
  var editor = new SurveyEditor.SurveyEditor("editorElement", options);
  editor.showToolbox = "right";
  editor.showPropertyGrid = "right";
  editor.rightContainerActiveItem("toolbox");
  editor.toolbarItems.splice(2, 5);
  editor.placeholderHtml = `
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
      <img src="./drag-image.svg"/>
      <div style="font-size: 16px; max-width: 210px;">
        Drag and drop a question to start designing your form
      </div>
    </div>`;

  // SurveyEditor.StylesManager.applyTheme("orange");
  //editor.surveyId = '5af48e08-a0a5-44a5-83f4-1c90e8e98de1';
  //editor.surveyPostId = '3ce10f8b-2d8a-4ca2-a110-2994b9e697a1';
  editor.saveSurveyFunc = function(saveNo, callback) {
    alert("ok");
    callback(saveNo, true);
  };

  //editor.loadSurvey("b2b56b2c-ad9e-4951-8f0e-c246d6b6a52a");
  // editor.showOptions = true;
  //editor.showState = true;
  //editor.loadSurvey("a0f7f132-eee4-42e4-b8c8-f8b16840a478");
  //editor.loadSurvey("65c74d4a-3b16-412f-8200-9ac53c8f5c0b");

  //ko.applyBindings(new SurveyEditor.SurveysManager("https://dxsurvey.com", "a797f29b53f8455e8b3ef317f8904dac", editor), document.getElementById("manage"));

  window.editor = editor;
}
