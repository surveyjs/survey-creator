if (!window["%hammerhead%"]) {
  $(document).ready(function () {
    var mainColor = "#023670";
    var mainHoverColor = "#035bbc";
    var textColor = "#4a4a4a";
    var headerColor = "#160ce8";
    var headerBackgroundColor = "#4a4a4a";
    var bodyContainerBackgroundColor = "#f8f8f8";

    var defaultThemeColorsSurvey =
      Survey.StylesManager.ThemeColors["bootstrapmaterial"];
    defaultThemeColorsSurvey["$main-color"] = mainColor;
    defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
    defaultThemeColorsSurvey["$text-color"] = textColor;
    defaultThemeColorsSurvey["$header-color"] = headerColor;
    defaultThemeColorsSurvey[
      "$header-background-color"
    ] = headerBackgroundColor;
    defaultThemeColorsSurvey[
      "$body-container-background-color"
    ] = bodyContainerBackgroundColor;

    var defaultThemeColorsCreator =
      SurveyCreator.StylesManager.ThemeColors["default"];
    defaultThemeColorsCreator["$primary-color"] = mainColor;
    defaultThemeColorsCreator["$secondary-color"] = mainColor;
    defaultThemeColorsCreator["$primary-hover-color"] = mainHoverColor;
    defaultThemeColorsCreator["$primary-text-color"] = textColor;
    defaultThemeColorsCreator["$selection-border-color"] = mainColor;

    let kpiList = [
      { value: 1, text: "Item 1" },
      { value: 2, text: "Item 2" },
      { value: 3, text: "Item 3" },
    ];
    // Here is some API request to get kpiList data from backend

    // Add KPI property to questions
    Survey.Serializer.addProperty("question", {
      name: "kpis:multiplevalues",
      choices: kpiList,
    });
    // Add KPI tab to question editor modal
    SurveyCreator.SurveyQuestionEditorDefinition.definition[
      "question"
    ].tabs.push({
      name: "kpis",
    });

    SurveyCreator.StylesManager.applyTheme("bootstrapmaterial");
    var creator = new SurveyCreator.SurveyCreator("editorElement", {
      useTabsInElementEditor: true,
      showLogicTab: true,
    });

    ko.tasks.runEarly();

    $("body").bootstrapMaterialDesign();

    window.creator = creator;
  });
}
