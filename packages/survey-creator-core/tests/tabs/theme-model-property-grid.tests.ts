import { QuestionCompositeModel } from "survey-core";
import { ThemeModel } from "../../src/components/tabs/theme-model";
import { ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { CreatorTester } from "../creator-tester";
import { PredefinedColors } from "../../src/components/tabs/themes";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
export { elementSettingsFromCssVariable, elementSettingsToCssVariable } from "../../src/components/tabs/theme-custom-questions/element-settings";
export { fontsettingsToCssVariable, fontsettingsFromCssVariable } from "../../src/components/tabs/theme-custom-questions/font-settings";
export { createColor } from "../../src/components/tabs/theme-custom-questions/color-settings";
export { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";

test("Theme builder initialization", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeEditor = themePlugin.propertyGrid.survey;

  expect(themeEditor.findQuestionByName("themeName").value).toEqual("default");
  expect(themeEditor.findQuestionByName("themeMode").value).toEqual("panels");
  expect(themeEditor.findQuestionByName("themePalette").value).toEqual("light");
  expect(themeEditor.findQuestionByName("backgroundImage").value).toEqual(undefined);
  expect(themeEditor.findQuestionByName("backgroundImageFit").value).toEqual("cover");
  expect(themeEditor.findQuestionByName("backgroundOpacity").value).toEqual(100);
  expect(themeEditor.findQuestionByName("panelBackgroundTransparency").value).toEqual(100);
  expect(themeEditor.findQuestionByName("questionBackgroundTransparency").value).toEqual(100);
  expect(themeEditor.findQuestionByName("commonScale").value).toEqual(100);
  expect(themeEditor.findQuestionByName("cornerRadius").value).toEqual(4);

  const colorQuestions = themeEditor.getAllQuestions().filter(q => q.getType() === "color");
  expect(colorQuestions[0].choices.length).toEqual(7);
  expect(colorQuestions[0].choices.map(c => c.value)).toStrictEqual(Object.keys(PredefinedColors.light).map(key => PredefinedColors.light[key]));
});

test("Theme builder: composite question fontSettings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const questionTitleFontSettings = themePlugin.propertyGrid.survey.findQuestionByName("questionTitle") as QuestionCompositeModel;

  expect(themeModel["questionTitle"]).toStrictEqual({ family: "Open Sans", color: "rgba(0, 0, 0, 0.91)", weight: "600", size: 16 });
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("color").value).toEqual("rgba(0, 0, 0, 0.91)");
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("weight").value).toEqual("600");
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("size").value).toEqual(16);
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("family").value).toEqual("Open Sans");

  questionTitleFontSettings.value = { family: "Arial, sans-serif", weight: "500", size: 40 };

  expect(themeModel["questionTitle"]).toStrictEqual({ family: "Arial, sans-serif", weight: "500", size: 40 });
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("color").value).toEqual(undefined);
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("weight").value).toEqual("500");
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("size").value).toEqual(40);
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("family").value).toEqual("Arial, sans-serif");

  questionTitleFontSettings.contentPanel.getQuestionByName("color").value = "#222222";
  questionTitleFontSettings.contentPanel.getQuestionByName("weight").value = "450";
  questionTitleFontSettings.contentPanel.getQuestionByName("size").value = 18;
  questionTitleFontSettings.contentPanel.getQuestionByName("family").value = "Some font";

  expect(themeModel["questionTitle"]).toStrictEqual({ family: "Some font", weight: "450", size: 18, color: "#222222" });
});

test("Theme builder: composite question elementSettings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const questionPanelSettings = themePlugin.propertyGrid.survey.findQuestionByName("questionPanel") as QuestionCompositeModel;

  expect(themeModel.questionPanel).toStrictEqual({ "backcolor": "rgba(255, 255, 255, 1)", "cornerRadius": 4, "hovercolor": "rgba(248, 248, 248, 1)" });

  expect(questionPanelSettings.contentPanel.getQuestionByName("backcolor").value).toEqual("rgba(255, 255, 255, 1)");
  expect(questionPanelSettings.contentPanel.getQuestionByName("hovercolor").value).toEqual("rgba(248, 248, 248, 1)");
  expect(questionPanelSettings.contentPanel.getQuestionByName("cornerRadius").value).toEqual(4);

  // questionPanelSettings.value = { backcolor: "#ff44ff", hovercolor: "#969696", cornerRadius: 5 };
  // expect(questionPanelSettings.contentPanel.getQuestionByName("backcolor").value).toEqual("rgba(255, 68, 255, 1)");
  // expect(questionPanelSettings.contentPanel.getQuestionByName("hovercolor").value).toEqual("rgba(150, 150, 150, 1)");
  // expect(questionPanelSettings.contentPanel.getQuestionByName("cornerRadius").value).toEqual(5);

  questionPanelSettings.contentPanel.getQuestionByName("backcolor").value = "#ff44ff";
  questionPanelSettings.contentPanel.getQuestionByName("hovercolor").value = "#969696";
  questionPanelSettings.contentPanel.getQuestionByName("cornerRadius").value = 5;

  expect(themeModel.questionPanel).toStrictEqual({ backcolor: "#ff44ff", hovercolor: "#969696", cornerRadius: 5 });
});

test.skip("Check reset for sjs-shadow-inner due to animation", () => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const shadowSmallEditor = themePlugin.propertyGrid.survey.findQuestionByName("--sjs-shadow-small") as QuestionCompositeModel;
  const shadowInnerEditor = themePlugin.propertyGrid.survey.findQuestionByName("--sjs-shadow-inner") as QuestionCompositeModel;

  // let shadowSmallEditor = themeModel["--sjs-shadow-small"];
  // let shadowInnerEditor = themeModel["--sjs-shadow-inner"];

  let themeModelJSONCssVariables = themeModel.toJSON()["cssVariables"] || {};
  expect(themeModelJSONCssVariables["--sjs-shadow-small-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModelJSONCssVariables["--sjs-shadow-inner-reset"]).toBe("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  shadowSmallEditor.value = [
    {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      isInset: false,
      color: "rgba(0, 0, 0, 0.15)"
    }
  ];

  themeModelJSONCssVariables = themeModel.toJSON()["cssVariables"] || {};
  expect(themeModelJSONCssVariables["--sjs-shadow-small-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  shadowInnerEditor.value = [
    {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      isInset: false,
      color: "rgba(0, 0, 0, 0.15)"
    }
  ];

  themeModelJSONCssVariables = themeModel.toJSON()["cssVariables"] || {};
  expect(themeModelJSONCssVariables["--sjs-shadow-inner-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  shadowInnerEditor.value = [
    {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      isInset: true,
      color: "rgba(0, 0, 0, 0.15)"
    }
  ];

  themeModelJSONCssVariables = themeModel.toJSON()["cssVariables"] || {};
  expect(themeModelJSONCssVariables["--sjs-shadow-inner-reset"]).toBe("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  shadowInnerEditor.value = [
    {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      isInset: false,
      color: "rgba(0, 0, 0, 0.15)"
    },
    {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      isInset: true,
      color: "rgba(0, 0, 0, 0.15)"
    }
  ];

  themeModelJSONCssVariables = themeModel.toJSON()["cssVariables"] || {};
  expect(themeModelJSONCssVariables["--sjs-shadow-inner-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15), inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
});

test("Theme builder export value from composite question", (): any => {
  const themeModel = new ThemeModel();

  expect(themeModel.editorPanel.backcolor).toBe("rgba(249, 249, 249, 1)");
  expect(themeModel.getPropertyValue("--sjs-general-backcolor-dim-light")).toEqual("rgba(249, 249, 249, 1)");
  expect(themeModel.cssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(249, 249, 249, 1)");

  themeModel.themeName = "contrast";
  expect(themeModel.editorPanel.backcolor).toBe("rgba(255, 216, 77, 1)");
  expect(themeModel.getPropertyValue("--sjs-general-backcolor-dim-light")).toEqual("rgba(255, 216, 77, 1)");
  expect(themeModel.cssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(255, 216, 77, 1)");
});

// test("Add theme before activate", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

//   const themes: string[] = [].concat(PredefinedThemes);
//   const customTheme = { themeName: "custom" };
//   const fullThemeName = themePlugin.addTheme(customTheme);
//   expect(Themes[fullThemeName]).toEqual(customTheme);
//   expect(themePlugin.availableThemes).toStrictEqual(themes.concat(["custom"]));

//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditor.getQuestionByName("themeName") as QuestionDropdownModel;

//   expect(themeBuilder.availableThemes).toStrictEqual(themes.concat(["custom"]));
//   expect(themeChooser.choices.map(c => c.value)).toStrictEqual(themes.concat(["custom"]));

//   themePlugin.removeTheme(fullThemeName);
//   expect(Themes["custom"]).toBeUndefined();
//   expect(themeBuilder.availableThemes).toStrictEqual(PredefinedThemes);
//   expect(themeChooser.choices.map(c => c.value)).toStrictEqual(PredefinedThemes);
// });

// test("Change available themes after activate", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditor.getQuestionByName("themeName") as QuestionDropdownModel;

//   expect(themeBuilder.availableThemes).toStrictEqual(PredefinedThemes);
//   expect(themeChooser.choices.map(c => c.value)).toStrictEqual(PredefinedThemes);

//   const themes: string[] = [].concat(PredefinedThemes);
//   const customTheme = { themeName: "custom" };
//   const fullThemeName = themePlugin.addTheme(customTheme);
//   expect(Themes[fullThemeName]).toEqual(customTheme);
//   expect(themeBuilder.availableThemes).toStrictEqual(themes.concat(["custom"]));
//   expect(themeChooser.choices.map(c => c.value)).toStrictEqual(themes.concat(["custom"]));

//   themePlugin.removeTheme(fullThemeName);
//   expect(Themes["custom"]).toBeUndefined();
//   expect(themeBuilder.availableThemes).toStrictEqual(PredefinedThemes);
//   expect(themeChooser.choices.map(c => c.value)).toStrictEqual(PredefinedThemes);
// });

// test("Disable/hide properties in theme property grid", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themeMode = themeEditorSurvey.getQuestionByName("themeMode") as QuestionButtonGroupModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette") as QuestionButtonGroupModel;

//   expect(themeChooser.value).toBe("default");
//   expect(themeMode.value).toBe("panels");
//   expect(themeMode.isReadOnly).toBeFalsy();
//   expect(themePalette.value).toBe("light");
//   expect(themePalette.isReadOnly).toBeFalsy();

//   const fullThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "dark", cssVariables: {} });
//   expect(fullThemeName).toBe("custom-dark-panelless");

//   themeChooser.value = "custom";

//   expect(themeChooser.value).toBe("custom");
//   expect(themeMode.value).toBe("lightweight");
//   expect(themeMode.isReadOnly).toBeTruthy();
//   expect(themePalette.value).toBe("dark");
//   expect(themePalette.isReadOnly).toBeTruthy();

//   themeChooser.value = "contrast";
//   expect(themeChooser.value).toBe("contrast");
//   expect(themeMode.value).toBe("lightweight");
//   expect(themeMode.isReadOnly).toBeFalsy();
//   expect(themePalette.value).toBe("dark");
//   expect(themePalette.isReadOnly).toBeFalsy();
//   themePlugin.removeTheme(fullThemeName);
// });

// test("themeMode is switching to panelless and back", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.readOnly = true;
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themeMode = themeEditorSurvey.getQuestionByName("themeMode");

//   expect(themeChooser.value).toBe("default");
//   expect(themeMode.value).toBe("panels");

//   themeBuilder.loadTheme({ isPanelless: undefined });
//   expect(themeChooser.value).toBe("default");
//   expect(themeMode.value).toBe("panels");

//   themeBuilder.loadTheme({ isPanelless: true });
//   expect(themeChooser.value).toBe("default");
//   expect(themeMode.value).toBe("lightweight");

//   themeBuilder.loadTheme({ isPanelless: undefined });
//   expect(themeChooser.value).toBe("default");
//   expect(themeMode.value).toBe("panels");

//   themeBuilder.loadTheme({ isPanelless: true });
//   expect(themeChooser.value).toBe("default");
//   expect(themeMode.value).toBe("lightweight");

//   themeBuilder.loadTheme({ isPanelless: false });
//   expect(themeChooser.value).toBe("default");
//   expect(themeMode.value).toBe("panels");
// });

// test("disable irrelevant settings", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   themePlugin.activate();
//   let themeEditorSurvey = (themePlugin.model as ThemeEditorModel).themeEditorSurvey;

//   expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyTitle").isReadOnly).toBeTruthy();
//   expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyDescription").isReadOnly).toBeTruthy();
//   expect(themeEditorSurvey.getQuestionByName("pageTitle").isReadOnly).toBeTruthy();
//   expect(themeEditorSurvey.getQuestionByName("pageDescription").isReadOnly).toBeTruthy();

//   creator.activeTab = "designer";
//   creator.JSON = {
//     "title": "Survey Title",
//     "description": "Survey Description",
//     "pages": [
//       {
//         "name": "page1",
//         "title": "page 1",
//         "description": "page 1 description",
//         "elements": [
//           {
//             "type": "text",
//             "name": "question1"
//           }
//         ],
//       },
//       {
//         "name": "page2",
//         "title": "page 2",
//         "description": "page 2 description",
//         "elements": [
//           {
//             "type": "text",
//             "name": "question2"
//           }
//         ],
//       }
//     ],
//   };

//   themePlugin.activate();
//   themeEditorSurvey = (themePlugin.model as ThemeEditorModel).themeEditorSurvey;
//   expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyTitle").isReadOnly).toBeFalsy();
//   expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyDescription").isReadOnly).toBeFalsy();
//   expect(themeEditorSurvey.getQuestionByName("pageTitle").isReadOnly).toBeFalsy();
//   expect(themeEditorSurvey.getQuestionByName("pageDescription").isReadOnly).toBeFalsy();
// });

// test("disable page settings if single page mode", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   themePlugin.activate();
//   let themeEditorSurvey = (themePlugin.model as ThemeEditorModel).themeEditorSurvey;
//   expect(creator.survey.isSinglePage).toBeFalsy();
//   expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyTitle").isReadOnly).toBeTruthy();
//   expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyDescription").isReadOnly).toBeTruthy();
//   expect(themeEditorSurvey.getQuestionByName("pageTitle").isReadOnly).toBeTruthy();
//   expect(themeEditorSurvey.getQuestionByName("pageDescription").isReadOnly).toBeTruthy();

//   creator.activeTab = "designer";
//   creator.JSON = {
//     "title": "Survey Title",
//     "description": "Survey Description",
//     "pages": [
//       {
//         "name": "page1",
//         "title": "page 1",
//         "description": "page 1 description",
//         "elements": [
//           {
//             "type": "text",
//             "name": "question1"
//           }
//         ],
//       },
//       {
//         "name": "page2",
//         "title": "page 2",
//         "description": "page 2 description",
//         "elements": [
//           {
//             "type": "text",
//             "name": "question2"
//           }
//         ],
//       }
//     ],
//     "questionsOnPageMode": "singlePage",
//   };

//   themePlugin.activate();
//   themeEditorSurvey = (themePlugin.model as ThemeEditorModel).themeEditorSurvey;
//   expect(creator.survey.isSinglePage).toBeTruthy();
//   expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyTitle").isReadOnly).toBeFalsy();
//   expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyDescription").isReadOnly).toBeFalsy();
//   expect(themeEditorSurvey.getQuestionByName("pageTitle").isReadOnly).toBeFalsy();
//   expect(themeEditorSurvey.getQuestionByName("pageDescription").isReadOnly).toBeFalsy();
// });

// test("Check Theme builder's custom questions respect creator locale", (): any => {
//   editorLocalization.currentLocale = "test";
//   editorLocalization.locales["test"] = {
//     theme: {
//       opacity: "opacity_test",
//       boxShadowX: "boxShadowX_test",
//       backcolor: "backcolor_test",
//       fontFamily: "fontFamily_test"
//     }
//   };
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.locale = "test";
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   expect(themeEditor.getQuestionByName("--sjs-primary-backcolor").contentPanel.getQuestionByName("opacity").title).toBe("opacity_test");
//   expect(themeEditor.getQuestionByName("--sjs-shadow-small").contentQuestion.panels[0].getQuestionByName("x").title).toBe("boxShadowX_test");
//   expect(themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").colorTitle).toBe("backcolor_test");
//   expect(themeEditor.getQuestionByName("editorFont").contentPanel.getQuestionByName("family").title).toBe("fontFamily_test");
//   editorLocalization.currentLocale = "en";
// });

// test("Disable/enable themePalette property for custom theme variations in theme property grid", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themeMode = themeEditorSurvey.getQuestionByName("themeMode") as QuestionButtonGroupModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette") as QuestionButtonGroupModel;

//   expect(themeChooser.value).toBe("default");
//   expect(themeMode.value).toBe("panels");
//   expect(themeMode.isReadOnly).toBeFalsy();
//   expect(themePalette.value).toBe("light");
//   expect(themePalette.isReadOnly).toBeFalsy();

//   const fullThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "dark", cssVariables: {} });
//   expect(fullThemeName).toBe("custom-dark-panelless");
//   expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
//     "default",
//     "sharp",
//     "borderless",
//     "flat",
//     "plain",
//     "doubleborder",
//     "layered",
//     "solid",
//     "threedimensional",
//     "contrast",
//     "custom"
//   ]);

//   themeChooser.value = "custom";

//   expect(themeChooser.value).toBe("custom");
//   expect(themeMode.value).toBe("lightweight");
//   expect(themeMode.isReadOnly).toBeTruthy();
//   expect(themePalette.value).toBe("dark");
//   expect(themePalette.isReadOnly).toBeTruthy();

//   const fullLightThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "light", cssVariables: {} });
//   expect(fullLightThemeName).toBe("custom-light-panelless");
//   expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
//     "default",
//     "sharp",
//     "borderless",
//     "flat",
//     "plain",
//     "doubleborder",
//     "layered",
//     "solid",
//     "threedimensional",
//     "contrast",
//     "custom"
//   ]);

//   expect(themeChooser.value).toBe("custom");
//   expect(themeMode.value).toBe("lightweight");
//   expect(themeMode.isReadOnly).toBeTruthy();
//   expect(themePalette.value).toBe("dark");
//   expect(themePalette.isReadOnly).toBeFalsy();

//   themePlugin.removeTheme(fullThemeName);
//   themePlugin.removeTheme(fullLightThemeName);
// });

// test("Disable/enable themeMode property for custom theme variations in theme property grid", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themeMode = themeEditorSurvey.getQuestionByName("themeMode") as QuestionButtonGroupModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette") as QuestionButtonGroupModel;

//   expect(themeChooser.value).toBe("default");
//   expect(themeMode.value).toBe("panels");
//   expect(themeMode.isReadOnly).toBeFalsy();
//   expect(themePalette.value).toBe("light");
//   expect(themePalette.isReadOnly).toBeFalsy();

//   const fullThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "dark", cssVariables: {} });
//   expect(fullThemeName).toBe("custom-dark-panelless");
//   expect(Themes[fullThemeName]).toBeDefined();
//   expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
//     "default",
//     "sharp",
//     "borderless",
//     "flat",
//     "plain",
//     "doubleborder",
//     "layered",
//     "solid",
//     "threedimensional",
//     "contrast",
//     "custom"
//   ]);

//   themeChooser.value = "custom";

//   expect(themeChooser.value).toBe("custom");
//   expect(themeMode.value).toBe("lightweight");
//   expect(themeMode.isReadOnly).toBeTruthy();
//   expect(themePalette.value).toBe("dark");
//   expect(themePalette.isReadOnly).toBeTruthy();

//   const fullPanellessThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: false, "colorPalette": "dark", cssVariables: {} });
//   expect(fullPanellessThemeName).toBe("custom-dark");
//   expect(Themes[fullPanellessThemeName]).toBeDefined();
//   expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
//     "default",
//     "sharp",
//     "borderless",
//     "flat",
//     "plain",
//     "doubleborder",
//     "layered",
//     "solid",
//     "threedimensional",
//     "contrast",
//     "custom"
//   ]);

//   expect(themeChooser.value).toBe("custom");
//   expect(themeMode.value).toBe("lightweight");
//   expect(themeMode.isReadOnly).toBeFalsy();
//   expect(themePalette.value).toBe("dark");
//   expect(themePalette.isReadOnly).toBeTruthy();

//   themePlugin.removeTheme(fullThemeName, true);
//   expect(Themes[fullThemeName]).toBeUndefined();
//   expect(Themes[fullPanellessThemeName]).toBeUndefined();
//   expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
//     "default",
//     "sharp",
//     "borderless",
//     "flat",
//     "plain",
//     "doubleborder",
//     "layered",
//     "solid",
//     "threedimensional",
//     "contrast"
//   ]);
// });

// test("onPropertyGridSurveyCreated: Modify property grid", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   creator.themeEditor.onPropertyGridSurveyCreated.add((sender: ThemeTabPlugin, options: IPropertyGridSurveyCreatedEvent) => {
//     const defaultValueElement = options.survey.findQuestionByName("questionTitle")["defaultValue"];

//     const newFontSettings = Serializer.createClass("fontsettings", { name: "custom-question-title" });
//     options.model.addPropertyGridEditor({ element: newFontSettings, insertBefore: "questionTitle" });
//     newFontSettings.title = "Question title font";
//     newFontSettings.value = defaultValueElement;

//     const newMatrixFontSettings = Serializer.createClass("fontsettings", { name: "matrix-title" });
//     options.model.addPropertyGridEditor({ element: newMatrixFontSettings, insertAfter: "questionTitle" });
//     newMatrixFontSettings.title = "Matrix title font";
//     newMatrixFontSettings.value = defaultValueElement;

//     options.model.removePropertyGridEditor("questionTitle");
//   });
//   creator.themeEditor.activate();
//   const themeBuilder = creator.themeEditor.model as ThemeEditorModel;
//   const themeEditor = themeBuilder.themeEditorSurvey;

//   const questionTitleFontSettings = themeEditor.getQuestionByName("questionTitle");
//   expect(questionTitleFontSettings).toBeNull();
//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();

//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-custom-question-title-family"]).toBe("Open Sans");
//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-custom-question-title-weight"]).toBe("600");
//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-custom-question-title-color"]).toBe("rgba(0, 0, 0, 0.91)");
//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-custom-question-title-size"]).toBe("16px");

//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-matrix-title-family"]).toBe("Open Sans");
//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-matrix-title-weight"]).toBe("600");
//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-matrix-title-color"]).toBe("rgba(0, 0, 0, 0.91)");
//   expect(themeBuilder.currentThemeCssVariables["--sjs-font-matrix-title-size"]).toBe("16px");
// });

// test("onPropertyGridSurveyCreated: Modify property grid & switch themeName", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   creator.themeEditor.onPropertyGridSurveyCreated.add((sender: ThemeTabPlugin, options: IPropertyGridSurveyCreatedEvent) => {
//     options.model.themeEditorSurvey.getAllQuestions().forEach(q => {
//       if (q.name !== "themeName") {
//         options.model.removePropertyGridEditor(q.name);
//       }
//     });

//     const newFontSettings = Serializer.createClass("fontsettings", { name: "custom-question-title" });
//     options.model.addPropertyGridEditor({ element: newFontSettings, insertAfter: "themeName" });

//     const newMatrixFontSettings = Serializer.createClass("fontsettings", { name: "matrix-title" });
//     options.model.addPropertyGridEditor({ element: newMatrixFontSettings, insertAfter: "themeName" });
//   });
//   creator.themeEditor.activate();
//   const themeBuilder = creator.themeEditor.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;

//   expect(themeEditorSurvey.getAllQuestions()).toHaveLength(3);
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

//   themeChooser.value = "flat";
//   expect(themeEditorSurvey.getAllQuestions()).toHaveLength(3);
// });