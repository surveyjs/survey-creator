if (!window["%hammerhead%"]) {
  var mainColor = "#023670";
  var mainHoverColor = "#035bbc";
  var textColor = "#4a4a4a";
  var headerColor = "#160ce8";
  var headerBackgroundColor = "#4a4a4a";
  var bodyContainerBackgroundColor = "#f8f8f8";

  var defaultThemeColorsSurvey = Survey.StylesManager.ThemeColors["default"];
  defaultThemeColorsSurvey["$main-color"] = mainColor;
  defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
  defaultThemeColorsSurvey["$text-color"] = textColor;
  defaultThemeColorsSurvey["$header-color"] = headerColor;
  defaultThemeColorsSurvey["$header-background-color"] = headerBackgroundColor;
  defaultThemeColorsSurvey[
    "$body-container-background-color"
  ] = bodyContainerBackgroundColor;

  var defaultThemeColorsEditor =
    SurveyCreator.StylesManager.ThemeColors["default"];
  defaultThemeColorsEditor["$primary-color"] = mainColor;
  defaultThemeColorsEditor["$secondary-color"] = mainColor;
  defaultThemeColorsEditor["$primary-hover-color"] = mainHoverColor;
  defaultThemeColorsEditor["$primary-text-color"] = textColor;
  defaultThemeColorsEditor["$selection-border-color"] = mainColor;

  let kpiList = [
    { value: 1, text: "Item 1" },
    { value: 2, text: "Item 2" },
    { value: 3, text: "Item 3" }
  ];
  // Here is some API request to get kpiList data from backend

  // Add KPI property to questions
  Survey.Serializer.addProperty("question", {
    name: "kpis:multiplevalues",
    choices: kpiList
  });
  // Add KPI tab to question editor modal
  SurveyCreator.SurveyQuestionEditorDefinition.definition["question"].tabs.push(
    {
      name: "kpis"
    }
  );

  $.material.init();

  SurveyCreator.StylesManager.applyTheme("bootstrapmaterial");
  var creator = new SurveyCreator.SurveyCreator("editorElement", {
    useTabsInElementEditor: true
  });
  window.creator = creator;
}
