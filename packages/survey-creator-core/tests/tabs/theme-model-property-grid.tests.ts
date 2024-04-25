import { QuestionButtonGroupModel, QuestionCompositeModel, QuestionDropdownModel, SurveyElement } from "survey-core";
import { HeaderModel, ThemeModel } from "../../src/components/tabs/theme-model";
import { ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { CreatorTester } from "../creator-tester";
import { PredefinedColors, PredefinedThemes, Themes } from "../../src/components/tabs/themes";
import { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
import { editorLocalization } from "../../src/editorLocalization";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
export { createColor } from "../../src/components/tabs/theme-custom-questions/color-settings";
export { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";
export * from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";
export * from "../../src/property-grid/theme-settings";

test("Theme builder initialization", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeEditor = themePlugin.propertyGrid.survey;

  expect(themeEditor.findQuestionByName("themeName").value).toEqual("default");
  expect(themeEditor.findQuestionByName("isPanelless").value).toEqual(false);
  expect(themeEditor.findQuestionByName("colorPalette").value).toEqual("light");
  expect(themeEditor.findQuestionByName("backgroundImage").value).toEqual("");
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

  questionPanelSettings.contentPanel.getQuestionByName("backcolor").value = "#ff44ff";
  questionPanelSettings.contentPanel.getQuestionByName("hovercolor").value = "#969696";
  questionPanelSettings.contentPanel.getQuestionByName("cornerRadius").value = 5;

  expect(themeModel.questionPanel).toStrictEqual({ backcolor: "#ff44ff", hovercolor: "#969696", cornerRadius: 5 });
});

test("Check shadow settings editor", () => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.activeTab = "theme";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  const themeModel = themePlugin.themeModel as ThemeModel;
  const shadowSmallEditor = themePlugin.propertyGrid.survey.findQuestionByName("--sjs-shadow-small") as QuestionCompositeModel;
  const shadowInnerEditor = themePlugin.propertyGrid.survey.findQuestionByName("--sjs-shadow-inner") as QuestionCompositeModel;

  let cssVariables: any = creator?.theme?.cssVariables;
  expect(themeModel["--sjs-shadow-small"]).toBe("0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel["--sjs-shadow-small-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel["--sjs-shadow-inner"]).toBe("inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel["--sjs-shadow-inner-reset"]).toBe("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  shadowSmallEditor.value = [
    {
      x: 0,
      y: 2,
      blur: 3,
      spread: 0,
      isInset: false,
      color: "rgba(0, 0, 0, 0.15)"
    }
  ];
  cssVariables = creator?.theme?.cssVariables;
  expect(cssVariables["--sjs-shadow-small"]).toBe("0px 2px 3px 0px rgba(0, 0, 0, 0.15)");
  expect(cssVariables["--sjs-shadow-small-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel["--sjs-shadow-small"]).toBe("0px 2px 3px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel["--sjs-shadow-small-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  shadowInnerEditor.value = [
    {
      x: 0,
      y: 3,
      blur: 4,
      spread: 0,
      isInset: false,
      color: "rgba(0, 0, 0, 0.15)"
    }
  ];
  cssVariables = creator?.theme?.cssVariables;
  expect(cssVariables["--sjs-shadow-inner"]).toBe("0px 3px 4px 0px rgba(0, 0, 0, 0.15)");
  expect(cssVariables["--sjs-shadow-inner-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toBe("0px 3px 4px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  shadowInnerEditor.value = [
    {
      x: 0,
      y: 3,
      blur: 4,
      spread: 0,
      isInset: true,
      color: "rgba(0, 0, 0, 0.15)"
    }
  ];
  cssVariables = creator?.theme?.cssVariables;
  expect(cssVariables["--sjs-shadow-inner"]).toBe("inset 0px 3px 4px 0px rgba(0, 0, 0, 0.15)");
  expect(cssVariables["--sjs-shadow-inner-reset"]).toBe("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toBe("inset 0px 3px 4px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toBe("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  shadowInnerEditor.value = [
    {
      x: 0,
      y: 3,
      blur: 4,
      spread: 0,
      isInset: false,
      color: "rgba(0, 0, 0, 0.15)"
    },
    {
      x: 0,
      y: 5,
      blur: 6,
      spread: 0,
      isInset: true,
      color: "rgba(0, 0, 0, 0.15)"
    }
  ];

  cssVariables = creator?.theme?.cssVariables;
  expect(cssVariables["--sjs-shadow-inner"]).toBe("0px 3px 4px 0px rgba(0, 0, 0, 0.15), inset 0px 5px 6px 0px rgba(0, 0, 0, 0.15)");
  expect(cssVariables["--sjs-shadow-inner-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15), inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toBe("0px 3px 4px 0px rgba(0, 0, 0, 0.15), inset 0px 5px 6px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15), inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
});

test("Check all file edit questions has onChooseFiles callback", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const backgroundImageEditor = themePlugin.propertyGrid.survey.findQuestionByName("backgroundImage") as QuestionFileEditorModel;
  expect(!!backgroundImageEditor.onChooseFilesCallback).toBeTruthy();

  const groupHeader = themePlugin.propertyGrid.survey.pages[0].getElementByName("header");
  const headerBackgroundImageEditor = groupHeader.elements[0].contentPanel.getElementByName("backgroundImage");
  expect(!!headerBackgroundImageEditor.onChooseFilesCallback).toBeTruthy();
});

test("Theme builder: restore questionTitle switch tabs", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.activeTab = "theme";
  let questionTitleFontSettings = themePlugin.propertyGrid.survey.findQuestionByName("questionTitle") as QuestionCompositeModel;
  const questionTitleValue = {
    "family": "Open Sans",
    "weight": "600",
    "color": "rgba(0, 0, 0, 0.91)",
    "size": 16
  };

  expect(questionTitleFontSettings.value).toEqual(questionTitleValue);
  expect(themePlugin.themeModel["questionTitle"]).toEqual(questionTitleValue);

  questionTitleValue.color = "rgba(201, 90, 231, 0.91)";
  questionTitleFontSettings.value = questionTitleValue;
  expect(questionTitleFontSettings.value).toEqual(questionTitleValue);
  expect(themePlugin.themeModel["questionTitle"]).toEqual(questionTitleValue);

  creator.activeTab = "designer";
  creator.activeTab = "theme";
  questionTitleFontSettings = themePlugin.propertyGrid.survey.findQuestionByName("questionTitle") as QuestionCompositeModel;
  expect(questionTitleFontSettings.value).toEqual(questionTitleValue);
  expect(themePlugin.themeModel["questionTitle"]).toEqual(questionTitleValue);
});

test("Desktop mode: add advanced mode switcher", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { logo: "Logo", pages: [{ questions: [{ type: "text", name: "q1" }] }] };

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const propertyGridGroups = propertyGridSurvey.pages[0].elements;
  expect(propertyGridGroups.length).toBe(4);
  expect(propertyGridGroups[0].visible).toBeTruthy();
  expect(propertyGridGroups[1].visible).toBeTruthy();
  expect(propertyGridGroups[2].visible).toBeTruthy();
  expect(propertyGridGroups[3].visible).toBeTruthy();

  const actions = (propertyGridGroups[3] as any as SurveyElement).getTitleActions();
  expect(actions.length).toBe(1);
  expect(actions[0].visible).toBeTruthy();
});

test("Mobile mode: hide advanced settings in property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.isMobileView = true;

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const propertyGridGroups = propertyGridSurvey.pages[0].elements;
  expect(propertyGridGroups.length).toBe(4);
  expect(propertyGridGroups[0].visible).toBeTruthy();
  expect(propertyGridGroups[1].visible).toBeFalsy();
  expect(propertyGridGroups[2].visible).toBeTruthy();
  expect(propertyGridGroups[3].visible).toBeTruthy();

  const actions = (propertyGridGroups[3] as any as SurveyElement).getTitleActions();
  expect(actions.length).toBe(1);
  expect(actions[0].visible).toBeFalsy();
});

test("Change advancedModeSwitcher visibility", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { logo: "Logo", pages: [{ questions: [{ type: "text", name: "q1" }] }] };

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const propertyGridGroups = propertyGridSurvey.pages[0].elements;
  expect(propertyGridGroups.length).toBe(4);
  const actions = (propertyGridGroups[3] as any as SurveyElement).getTitleActions();

  expect(actions.length).toBe(1);
  expect(actions[0].visible).toBeTruthy();

  creator.isMobileView = true;
  expect(actions[0].visible).toBeFalsy();
});

test("onAllowModifyTheme events + use creator.readOnly", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.readOnly = true;
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.onAllowModifyTheme.add((s, o) => {
    o.allow = o.theme.themeName === "flat";
  });

  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const colorPalette = propertyGridSurvey.getQuestionByName("colorPalette");
  const primaryBackColor = propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor");
  const backgroundDimColor = propertyGridSurvey.getQuestionByName("--sjs-general-backcolor-dim");

  expect(themeChooser.isReadOnly).toBeFalsy();
  expect(colorPalette.isReadOnly).toBeFalsy();
  expect(primaryBackColor.isReadOnly).toBeTruthy();
  expect(backgroundDimColor.isReadOnly).toBeTruthy();

  themeChooser.value = "flat";
  expect(themeChooser.isReadOnly).toBeFalsy();
  expect(colorPalette.isReadOnly).toBeFalsy();
  expect(primaryBackColor.isReadOnly).toBeFalsy();
  expect(backgroundDimColor.isReadOnly).toBeFalsy();
});

test("Add theme before activate", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

  const themes: string[] = [].concat(PredefinedThemes);
  const customTheme = { themeName: "custom" };
  const fullThemeName = themePlugin.addTheme(customTheme);
  expect(Themes[fullThemeName]).toEqual(customTheme);
  expect(themePlugin.availableThemes).toStrictEqual(themes.concat(["custom"]));

  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(themes.concat(["custom"]));

  themePlugin.removeTheme(fullThemeName);
  expect(Themes["custom"]).toBeUndefined();
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(PredefinedThemes);
});

test("Change available themes after activate", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(PredefinedThemes);

  const themes: string[] = [].concat(PredefinedThemes);
  const customTheme = { themeName: "custom" };
  const fullThemeName = themePlugin.addTheme(customTheme);
  expect(Themes[fullThemeName]).toEqual(customTheme);
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(themes.concat(["custom"]));

  themePlugin.removeTheme(fullThemeName);
  expect(Themes["custom"]).toBeUndefined();
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(PredefinedThemes);
});

test("Disable/hide properties in theme property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const isPanelless = propertyGridSurvey.getQuestionByName("isPanelless") as QuestionButtonGroupModel;
  const colorPalette = propertyGridSurvey.getQuestionByName("colorPalette") as QuestionButtonGroupModel;

  expect(themeChooser.value).toBe("default");
  expect(isPanelless.value).toBe(false);
  expect(isPanelless.isReadOnly).toBeFalsy();
  expect(colorPalette.value).toBe("light");
  expect(colorPalette.isReadOnly).toBeFalsy();

  const fullThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "dark", cssVariables: {} });
  expect(fullThemeName).toBe("custom-dark-panelless");

  themeChooser.value = "custom";

  expect(themeChooser.value).toBe("custom");
  expect(isPanelless.value).toBe(true);
  expect(isPanelless.isReadOnly).toBeTruthy();
  expect(colorPalette.value).toBe("dark");
  expect(colorPalette.isReadOnly).toBeTruthy();

  themeChooser.value = "contrast";
  expect(themeChooser.value).toBe("contrast");
  expect(isPanelless.value).toBe(true);
  expect(isPanelless.isReadOnly).toBeFalsy();
  expect(colorPalette.value).toBe("dark");
  expect(colorPalette.isReadOnly).toBeFalsy();
  themePlugin.removeTheme(fullThemeName);
});

test("isPanelless is switching to panelless and back", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.readOnly = true;
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const isPanelless = propertyGridSurvey.getQuestionByName("isPanelless");

  expect(themeChooser.value).toBe("default");
  expect(isPanelless.value).toBe(false);

  themeModel.loadTheme({ isPanelless: undefined });
  expect(themeChooser.value).toBe("default");
  expect(isPanelless.value).toBe(false);

  themeModel.loadTheme({ isPanelless: true });
  expect(themeChooser.value).toBe("default");
  expect(isPanelless.value).toBe(true);

  themeModel.loadTheme({ isPanelless: undefined });
  expect(themeChooser.value).toBe("default");
  expect(isPanelless.value).toBe(false);

  themeModel.loadTheme({ isPanelless: true });
  expect(themeChooser.value).toBe("default");
  expect(isPanelless.value).toBe(true);

  themeModel.loadTheme({ isPanelless: false });
  expect(themeChooser.value).toBe("default");
  expect(isPanelless.value).toBe(false);
});

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

test("Check Theme builder's custom questions respect creator locale", (): any => {
  editorLocalization.currentLocale = "test";
  editorLocalization.locales["test"] = {
    theme: {
      opacity: "opacity_test",
      boxShadowX: "boxShadowX_test",
      backcolor: "backcolor_test",
      fontFamily: "fontFamily_test"
    }
  };
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.locale = "test";
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  expect(propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor").contentPanel.getQuestionByName("opacity").title).toBe("opacity_test");
  expect(propertyGridSurvey.getQuestionByName("--sjs-shadow-small").contentQuestion.panels[0].getQuestionByName("x").title).toBe("boxShadowX_test");
  expect(propertyGridSurvey.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").colorTitle).toBe("backcolor_test");
  expect(propertyGridSurvey.getQuestionByName("editorFont").contentPanel.getQuestionByName("family").title).toBe("fontFamily_test");
  editorLocalization.currentLocale = "en";
});

test("Disable/enable colorPalette property for custom theme variations in theme property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const isPanelless = propertyGridSurvey.getQuestionByName("isPanelless") as QuestionButtonGroupModel;
  const colorPalette = propertyGridSurvey.getQuestionByName("colorPalette") as QuestionButtonGroupModel;

  expect(themeChooser.value).toBe("default");
  expect(isPanelless.value).toBe(false);
  expect(isPanelless.isReadOnly).toBeFalsy();
  expect(colorPalette.value).toBe("light");
  expect(colorPalette.isReadOnly).toBeFalsy();

  const fullThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "dark", cssVariables: {} });
  expect(fullThemeName).toBe("custom-dark-panelless");
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
    "default",
    "sharp",
    "borderless",
    "flat",
    "plain",
    "doubleborder",
    "layered",
    "solid",
    "threedimensional",
    "contrast",
    "custom"
  ]);

  themeChooser.value = "custom";

  expect(themeChooser.value).toBe("custom");
  expect(isPanelless.value).toBe(true);
  expect(isPanelless.isReadOnly).toBeTruthy();
  expect(colorPalette.value).toBe("dark");
  expect(colorPalette.isReadOnly).toBeTruthy();

  const fullLightThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "light", cssVariables: {} });
  expect(fullLightThemeName).toBe("custom-light-panelless");

  expect(themePlugin.themeModel.hasVariations(true)).toBe(true);
  expect(themePlugin.themeModel.hasVariations(false)).toBe(false);

  expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
    "default",
    "sharp",
    "borderless",
    "flat",
    "plain",
    "doubleborder",
    "layered",
    "solid",
    "threedimensional",
    "contrast",
    "custom"
  ]);

  expect(themeChooser.value).toBe("custom");
  expect(isPanelless.value).toBe(true);
  expect(isPanelless.isReadOnly).toBeTruthy();
  expect(colorPalette.value).toBe("dark");
  expect(colorPalette.isReadOnly).toBeFalsy();

  themePlugin.removeTheme(fullThemeName);
  themePlugin.removeTheme(fullLightThemeName);
});

test("Disable/enable themeMode property for custom theme variations in theme property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const isPanelless = propertyGridSurvey.getQuestionByName("isPanelless") as QuestionButtonGroupModel;
  const colorPalette = propertyGridSurvey.getQuestionByName("colorPalette") as QuestionButtonGroupModel;

  expect(themeChooser.value).toBe("default");
  expect(isPanelless.value).toBe(false);
  expect(isPanelless.isReadOnly).toBeFalsy();
  expect(colorPalette.value).toBe("light");
  expect(colorPalette.isReadOnly).toBeFalsy();

  const fullThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "dark", cssVariables: {} });
  expect(fullThemeName).toBe("custom-dark-panelless");
  expect(Themes[fullThemeName]).toBeDefined();
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
    "default",
    "sharp",
    "borderless",
    "flat",
    "plain",
    "doubleborder",
    "layered",
    "solid",
    "threedimensional",
    "contrast",
    "custom"
  ]);

  themeChooser.value = "custom";

  expect(themeChooser.value).toBe("custom");
  expect(isPanelless.value).toBe(true);
  expect(isPanelless.isReadOnly).toBeTruthy();
  expect(colorPalette.value).toBe("dark");
  expect(colorPalette.isReadOnly).toBeTruthy();

  const fullPanellessThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: false, "colorPalette": "dark", cssVariables: {} });
  expect(fullPanellessThemeName).toBe("custom-dark");
  expect(Themes[fullPanellessThemeName]).toBeDefined();
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
    "default",
    "sharp",
    "borderless",
    "flat",
    "plain",
    "doubleborder",
    "layered",
    "solid",
    "threedimensional",
    "contrast",
    "custom"
  ]);

  expect(themeChooser.value).toBe("custom");
  expect(isPanelless.value).toBe(true);
  expect(isPanelless.isReadOnly).toBeFalsy();
  expect(colorPalette.value).toBe("dark");
  expect(colorPalette.isReadOnly).toBeTruthy();

  themePlugin.removeTheme(fullThemeName, true);
  expect(Themes[fullThemeName]).toBeUndefined();
  expect(Themes[fullPanellessThemeName]).toBeUndefined();
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
    "default",
    "sharp",
    "borderless",
    "flat",
    "plain",
    "doubleborder",
    "layered",
    "solid",
    "threedimensional",
    "contrast"
  ]);
});

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
// const propertyGridSurvey = themePlugin.propertyGrid.survey;

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
// const propertyGridSurvey = themePlugin.propertyGrid.survey;

//   expect(themeEditorSurvey.getAllQuestions()).toHaveLength(3);
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

//   themeChooser.value = "flat";
//   expect(themeEditorSurvey.getAllQuestions()).toHaveLength(3);
// });

test("headerViewContainer init state", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  const groupHeader = themePlugin.propertyGrid.survey.pages[0].getElementByName("header");
  const headerViewContainer = groupHeader.elements[0].contentPanel;

  expect(headerViewContainer.getValue()).toStrictEqual({
    "headerView": "basic",
    "logoPosition": "left",
    "inheritWidthFrom": "container",
    "overlapEnabled": false,
    "backgroundColorSwitch": "accentColor",
    "backgroundImageFit": "cover",
    "backgroundImageOpacity": 100,
    "logoPositionX": "right",
    "logoPositionY": "top",
    "titlePositionX": "left",
    "titlePositionY": "bottom",
    "descriptionPositionX": "left",
    "descriptionPositionY": "bottom",
    "textAreaWidth": 512,
    "height": 256,
    "headerDescription": {
      "family": "Open Sans",
      "size": 16,
      "weight": "600",
    },
    "headerTitle": {
      "family": "Open Sans",
      "size": 32,
      "weight": "700",
    },
    "surveyDescription": {
      "family": "Open Sans",
      "size": 16,
      "weight": "400",
    },
    "surveyTitle": {
      "family": "Open Sans",
      "size": 32,
      "weight": "700",
    },
  });
});

test("set headerViewContainer basic", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  // const themeBuilder = themePlugin.model as ThemeEditorModel;
  // const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  // const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
  // const surveyTitleQuestion = headerViewContainer.getElementByName("surveyTitle");
  // const surveyDescriptionQuestion = headerViewContainer.getElementByName("surveyDescription");
  const header = themeModel.header as HeaderModel;

  expect(header["surveyTitle"]).toStrictEqual({});
  expect(header["surveyDescription"]).toStrictEqual({});

  // expect(creator.survey.logoPosition).toEqual("left");

  // headerViewContainer.getElementByName("logoPosition").value = "right";
  // surveyTitleQuestion.contentPanel.getQuestionByName("weight").value = "400";
  // surveyTitleQuestion.contentPanel.getQuestionByName("size").value = 41;
  // surveyTitleQuestion.contentPanel.getQuestionByName("family").value = "Courier New";
  // surveyDescriptionQuestion.contentPanel.getQuestionByName("weight").value = "800";
  // surveyDescriptionQuestion.contentPanel.getQuestionByName("size").value = 21;
  // surveyDescriptionQuestion.contentPanel.getQuestionByName("family").value = "Trebuchet MS";
  expect(header["surveyTitle"]).toStrictEqual({ family: "Courier New", weight: "400", size: 41 });
  expect(header["surveyDescription"]).toStrictEqual({ family: "Trebuchet MS", weight: "800", size: 21 });

  // expect(creator.theme.header).toBeUndefined();
  // expect(creator.survey.logoPosition).toEqual("right");
});