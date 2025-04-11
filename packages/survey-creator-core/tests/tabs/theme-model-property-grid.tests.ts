import { QuestionButtonGroupModel, QuestionCompositeModel, QuestionDropdownModel, Serializer, SurveyElement } from "survey-core";
import { HeaderModel, ThemeModel } from "../../src/components/tabs/theme-model";
import { ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { CreatorTester } from "../creator-tester";
import { defaultThemesOrder, PredefinedColors, PredefinedThemes, Themes } from "../../src/components/tabs/themes";
import { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
import { editorLocalization } from "../../src/editorLocalization";
import { DefaultFonts } from "../../src/components/tabs/theme-custom-questions/font-settings";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
export { createColor } from "../../src/components/tabs/theme-custom-questions/color-alpha";
export { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/shadow-effects";
export * from "../../src/components/tabs/theme-custom-questions/shadow-effects";
export * from "../../src/property-grid/theme-settings";
export * from "../../src/property-grid/header-settings";
import { registerSurveyTheme } from "../../src/components/tabs/theme-model";
import SurveyThemes from "survey-core/themes";
registerSurveyTheme(SurveyThemes);

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
  expect(themeEditor.findQuestionByName("scale").value).toEqual(100);
  expect(themeEditor.findQuestionByName("cornerRadius").value).toEqual(4);

  const colorQuestions = themeEditor.getAllQuestions().filter(q => q.getType() === "color");
  expect(colorQuestions[0].choices.length).toEqual(7);
  expect(colorQuestions[0].choices.map(c => c.value)).toStrictEqual(Object.keys(PredefinedColors.light).map(key => PredefinedColors.light[key]));
});

test("Theme builder: composite question font", (): any => {
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

test("Theme builder: composite question backgroundcornerradius", (): any => {
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
  expect(cssVariables["--sjs-shadow-inner"]).toBe("0px 3px 4px 0px rgba(0, 0, 0, 0.15),inset 0px 5px 6px 0px rgba(0, 0, 0, 0.15)");
  expect(cssVariables["--sjs-shadow-inner-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toBe("0px 3px 4px 0px rgba(0, 0, 0, 0.15),inset 0px 5px 6px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
});

test("Check all file edit questions has onChooseFiles callback", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const backgroundImageEditor = themePlugin.propertyGrid.survey.findQuestionByName("backgroundImage") as QuestionFileEditorModel;
  expect(!!backgroundImageEditor.onChooseFilesCallback).toBeTruthy();

  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
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
  creator.propertyGridNavigationMode = "accordion";
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
  creator.propertyGridNavigationMode = "accordion";
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

test("Mobile mode: hide advanced settings (property grid buttons)", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });

  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.isMobileView = true;

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const advancedModeQuestion = propertyGridSurvey.getQuestionByName("advancedMode");

  expect(advancedModeQuestion.visible).toBeFalsy();
});

test("Change advancedModeSwitcher visibility", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.propertyGridNavigationMode = "accordion";
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

test("advancedModeSwitcher state after switch tabs", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.propertyGridNavigationMode = "accordion";
  creator.JSON = { logo: "Logo", pages: [{ questions: [{ type: "text", name: "q1" }] }] };

  creator.activeTab = "theme";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const propertyGridGroups = propertyGridSurvey.pages[0].elements;
  expect(propertyGridGroups.length).toBe(4);
  const actions = (propertyGridGroups[3] as any as SurveyElement).getTitleActions();
  expect(actions.length).toBe(1);
  expect(actions[0].checked).toBeFalsy();
  expect(propertyGridSurvey.getQuestionByName("advancedMode").value).toBeFalsy();

  actions[0].action();
  expect(actions[0].checked).toBeTruthy();
  expect(propertyGridSurvey.getQuestionByName("advancedMode").value).toBeTruthy();

  creator.activeTab = "designer";
  creator.activeTab = "theme";
  expect(actions[0].checked).toBeTruthy();
  expect(propertyGridSurvey.getQuestionByName("advancedMode").value).toBeTruthy();
});

test("advancedModeSwitcher state after switch tabs (property grid buttons)", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { logo: "Logo", pages: [{ questions: [{ type: "text", name: "q1" }] }] };

  creator.activeTab = "theme";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const advancedModeQuestion = propertyGridSurvey.getQuestionByName("advancedMode");
  expect(advancedModeQuestion.value).toBeFalsy();

  advancedModeQuestion.value = true;
  creator.activeTab = "designer";
  creator.activeTab = "theme";
  expect(advancedModeQuestion.value).toBeTruthy();
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

test("disable irrelevant settings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.propertyGridNavigationMode = "accordion";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  let propertyGridSurvey = themePlugin.propertyGrid.survey;
  let groupHeader = themePlugin.propertyGrid.survey.pages[0].getElementByName("header");
  let headerViewContainer = groupHeader.elements[0].contentPanel;

  expect(headerViewContainer.getQuestionByName("surveyTitle").isReadOnly).toBeTruthy();
  expect(headerViewContainer.getQuestionByName("surveyDescription").isReadOnly).toBeTruthy();
  expect(propertyGridSurvey.getQuestionByName("pageTitle").isReadOnly).toBeTruthy();
  expect(propertyGridSurvey.getQuestionByName("pageDescription").isReadOnly).toBeTruthy();

  creator.activeTab = "designer";
  creator.JSON = {
    "title": "Survey Title",
    "description": "Survey Description",
    "pages": [
      {
        "name": "page1",
        "title": "page 1",
        "description": "page 1 description",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ],
      },
      {
        "name": "page2",
        "title": "page 2",
        "description": "page 2 description",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ],
      }
    ],
  };

  themePlugin.activate();
  propertyGridSurvey = themePlugin.propertyGrid.survey;
  groupHeader = themePlugin.propertyGrid.survey.pages[0].getElementByName("header");
  headerViewContainer = groupHeader.elements[0].contentPanel;

  expect(headerViewContainer.getQuestionByName("surveyTitle").isReadOnly).toBeFalsy();
  expect(headerViewContainer.getQuestionByName("surveyDescription").isReadOnly).toBeFalsy();
  expect(propertyGridSurvey.getQuestionByName("pageTitle").isReadOnly).toBeFalsy();
  expect(propertyGridSurvey.getQuestionByName("pageDescription").isReadOnly).toBeFalsy();
});

test("disable page settings if single page mode", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.propertyGridNavigationMode = "accordion";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  let propertyGridSurvey = themePlugin.propertyGrid.survey;
  let groupHeader = themePlugin.propertyGrid.survey.pages[0].getElementByName("header");
  let headerViewContainer = groupHeader.elements[0].contentPanel;

  expect(creator.survey.isSinglePage).toBeFalsy();
  expect(headerViewContainer.getQuestionByName("surveyTitle").isReadOnly).toBeTruthy();
  expect(headerViewContainer.getQuestionByName("surveyDescription").isReadOnly).toBeTruthy();
  expect(propertyGridSurvey.getQuestionByName("pageTitle").isReadOnly).toBeTruthy();
  expect(propertyGridSurvey.getQuestionByName("pageDescription").isReadOnly).toBeTruthy();

  creator.activeTab = "designer";
  creator.JSON = {
    "title": "Survey Title",
    "description": "Survey Description",
    "pages": [
      {
        "name": "page1",
        "title": "page 1",
        "description": "page 1 description",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ],
      },
      {
        "name": "page2",
        "title": "page 2",
        "description": "page 2 description",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ],
      }
    ],
    "questionsOnPageMode": "singlePage",
  };

  themePlugin.activate();
  propertyGridSurvey = themePlugin.propertyGrid.survey;
  groupHeader = themePlugin.propertyGrid.survey.pages[0].getElementByName("header");
  headerViewContainer = groupHeader.elements[0].contentPanel;
  expect(creator.survey.isSinglePage).toBeTruthy();
  expect(headerViewContainer.getQuestionByName("surveyTitle").isReadOnly).toBeFalsy();
  expect(headerViewContainer.getQuestionByName("surveyDescription").isReadOnly).toBeFalsy();
  expect(propertyGridSurvey.getQuestionByName("pageTitle").isReadOnly).toBeFalsy();
  expect(propertyGridSurvey.getQuestionByName("pageDescription").isReadOnly).toBeFalsy();
});

test("disable irrelevant settings (property grid buttons)", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  let propertyGridSurvey = themePlugin.propertyGrid.survey;
  let groupHeader = themePlugin.propertyGrid.survey.pages[1];
  let headerViewContainer = groupHeader.elements[0].contentPanel;

  expect(headerViewContainer.getQuestionByName("surveyTitle").isReadOnly).toBeTruthy();
  expect(headerViewContainer.getQuestionByName("surveyDescription").isReadOnly).toBeTruthy();
  expect(propertyGridSurvey.getQuestionByName("pageTitle").isReadOnly).toBeTruthy();
  expect(propertyGridSurvey.getQuestionByName("pageDescription").isReadOnly).toBeTruthy();

  creator.activeTab = "designer";
  creator.JSON = {
    "title": "Survey Title",
    "description": "Survey Description",
    "pages": [
      {
        "name": "page1",
        "title": "page 1",
        "description": "page 1 description",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ],
      },
      {
        "name": "page2",
        "title": "page 2",
        "description": "page 2 description",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ],
      }
    ],
  };

  themePlugin.activate();
  propertyGridSurvey = themePlugin.propertyGrid.survey;
  groupHeader = themePlugin.propertyGrid.survey.pages[1];
  headerViewContainer = groupHeader.elements[0].contentPanel;

  expect(headerViewContainer.getQuestionByName("surveyTitle").isReadOnly).toBeFalsy();
  expect(headerViewContainer.getQuestionByName("surveyDescription").isReadOnly).toBeFalsy();
  expect(propertyGridSurvey.getQuestionByName("pageTitle").isReadOnly).toBeFalsy();
  expect(propertyGridSurvey.getQuestionByName("pageDescription").isReadOnly).toBeFalsy();
});

test("disable page settings if single page mode (property grid buttons)", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  let propertyGridSurvey = themePlugin.propertyGrid.survey;
  let groupHeader = themePlugin.propertyGrid.survey.pages[1];
  let headerViewContainer = groupHeader.elements[0].contentPanel;

  expect(creator.survey.isSinglePage).toBeFalsy();
  expect(headerViewContainer.getQuestionByName("surveyTitle").isReadOnly).toBeTruthy();
  expect(headerViewContainer.getQuestionByName("surveyDescription").isReadOnly).toBeTruthy();
  expect(propertyGridSurvey.getQuestionByName("pageTitle").isReadOnly).toBeTruthy();
  expect(propertyGridSurvey.getQuestionByName("pageDescription").isReadOnly).toBeTruthy();

  creator.activeTab = "designer";
  creator.JSON = {
    "title": "Survey Title",
    "description": "Survey Description",
    "pages": [
      {
        "name": "page1",
        "title": "page 1",
        "description": "page 1 description",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ],
      },
      {
        "name": "page2",
        "title": "page 2",
        "description": "page 2 description",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ],
      }
    ],
    "questionsOnPageMode": "singlePage",
  };

  themePlugin.activate();
  propertyGridSurvey = themePlugin.propertyGrid.survey;
  groupHeader = themePlugin.propertyGrid.survey.pages[1];
  headerViewContainer = groupHeader.elements[0].contentPanel;
  expect(creator.survey.isSinglePage).toBeTruthy();
  expect(headerViewContainer.getQuestionByName("surveyTitle").isReadOnly).toBeFalsy();
  expect(headerViewContainer.getQuestionByName("surveyDescription").isReadOnly).toBeFalsy();
  expect(propertyGridSurvey.getQuestionByName("pageTitle").isReadOnly).toBeFalsy();
  expect(propertyGridSurvey.getQuestionByName("pageDescription").isReadOnly).toBeFalsy();
});

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
  const actualThemeNameList = [...defaultThemesOrder, "custom"];
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(actualThemeNameList);

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

  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(actualThemeNameList);

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
  const actualThemeNameList = [...defaultThemesOrder, "custom"];
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(actualThemeNameList);

  themeChooser.value = "custom";

  expect(themeChooser.value).toBe("custom");
  expect(isPanelless.value).toBe(true);
  expect(isPanelless.isReadOnly).toBeTruthy();
  expect(colorPalette.value).toBe("dark");
  expect(colorPalette.isReadOnly).toBeTruthy();

  const fullPanellessThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: false, "colorPalette": "dark", cssVariables: {} });
  expect(fullPanellessThemeName).toBe("custom-dark");
  expect(Themes[fullPanellessThemeName]).toBeDefined();
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(actualThemeNameList);

  expect(themeChooser.value).toBe("custom");
  expect(isPanelless.value).toBe(true);
  expect(isPanelless.isReadOnly).toBeFalsy();
  expect(colorPalette.value).toBe("dark");
  expect(colorPalette.isReadOnly).toBeTruthy();

  themePlugin.removeTheme(fullThemeName, true);
  expect(Themes[fullThemeName]).toBeUndefined();
  expect(Themes[fullPanellessThemeName]).toBeUndefined();
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(defaultThemesOrder);
});

test("headerViewContainer init state", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;

  expect(headerViewContainer.getValue()).toStrictEqual({
    "headerView": "advanced",
    "logoPosition": "left",
    "inheritWidthFrom": "survey",
    "overlapEnabled": false,
    "backgroundColorSwitch": "none",
    "backgroundImageFit": "cover",
    "backgroundImageOpacity": 100,
    "logoPositionX": "left",
    "logoPositionY": "top",
    "titlePositionX": "left",
    "titlePositionY": "bottom",
    "descriptionPositionX": "left",
    "descriptionPositionY": "bottom",
    "textAreaWidth": 0,
    "height": 0,
    "mobileHeight": 0,
    "headerDescription": {
      "family": "Open Sans",
      "size": 20,
      "weight": "400",
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
  const simulatorSurvey = themePlugin.model.survey;
  const themeModel = themePlugin.themeModel as ThemeModel;
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;
  const surveyTitleQuestion = headerViewContainer.getElementByName("surveyTitle");
  const surveyDescriptionQuestion = headerViewContainer.getElementByName("surveyDescription");
  const header = themeModel.header as HeaderModel;

  expect(simulatorSurvey.logoPosition).toEqual("left");
  expect(creator.survey.logoPosition).toEqual("left");
  expect(header["surveyTitle"]).toStrictEqual({ family: "Open Sans", weight: "700", size: 32 });
  expect(header["surveyDescription"]).toStrictEqual({ family: "Open Sans", weight: "400", size: 16 });

  headerViewContainer.getElementByName("logoPosition").value = "right";
  surveyTitleQuestion.contentPanel.getQuestionByName("weight").value = "400";
  surveyTitleQuestion.contentPanel.getQuestionByName("size").value = 41;
  surveyTitleQuestion.contentPanel.getQuestionByName("family").value = "Courier New";
  surveyDescriptionQuestion.contentPanel.getQuestionByName("weight").value = "800";
  surveyDescriptionQuestion.contentPanel.getQuestionByName("size").value = 21;
  surveyDescriptionQuestion.contentPanel.getQuestionByName("family").value = "Trebuchet MS";

  expect(header["surveyTitle"]).toStrictEqual({ family: "Courier New", weight: "400", size: 41 });
  expect(header["surveyDescription"]).toStrictEqual({ family: "Trebuchet MS", weight: "800", size: 21 });

  expect(creator.theme.header).toStrictEqual({ "backgroundImageFit": "cover", "backgroundImageOpacity": 100, "descriptionPositionX": "left", "descriptionPositionY": "bottom", "height": 0, "inheritWidthFrom": "survey", "logoPositionX": "left", "logoPositionY": "top", "mobileHeight": 0, "overlapEnabled": false, "textAreaWidth": 0, "titlePositionX": "left", "titlePositionY": "bottom" });
  expect(creator.survey.logoPosition).toEqual("right");
  expect(simulatorSurvey.logoPosition).toEqual("right");
});

test("set headerViewContainer basic restore", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { logoPosition: "right", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();

  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;
  expect(headerViewContainer.getElementByName("logoPosition").value).toEqual("right");
});

test("set headerViewContainer advanced", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;
  const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");
  const headerDescriptionQuestion = headerViewContainer.getElementByName("headerDescription");

  expect(creator.theme.header).toStrictEqual({ "backgroundImageFit": "cover", "backgroundImageOpacity": 100, "descriptionPositionX": "left", "descriptionPositionY": "bottom", "height": 0, "inheritWidthFrom": "survey", "logoPositionX": "left", "logoPositionY": "top", "mobileHeight": 0, "overlapEnabled": false, "textAreaWidth": 0, "titlePositionX": "left", "titlePositionY": "bottom" });

  let currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-header-backcolor"]).toBeUndefined();

  headerViewContainer.getElementByName("logoPosition").value = "right";
  headerViewContainer.getElementByName("headerView").value = "advanced";
  headerViewContainer.getElementByName("height").value = 300;
  headerViewContainer.getElementByName("inheritWidthFrom").value = "container";
  headerViewContainer.getElementByName("textAreaWidth").value = 600;
  headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
  headerViewContainer.getElementByName("backgroundColor").value = "#5094ed";
  headerViewContainer.getElementByName("backgroundImage").value = "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg";
  headerViewContainer.getElementByName("backgroundImageFit").value = "fill";
  headerViewContainer.getElementByName("backgroundImageOpacity").value = 50;
  headerViewContainer.getElementByName("overlapEnabled").value = true;
  headerViewContainer.getElementByName("logoPositionX").value = "center";
  headerViewContainer.getElementByName("logoPositionY").value = "middle";
  headerViewContainer.getElementByName("titlePositionX").value = "center";
  headerViewContainer.getElementByName("titlePositionY").value = "middle";
  headerViewContainer.getElementByName("descriptionPositionX").value = "center";
  headerViewContainer.getElementByName("descriptionPositionY").value = "middle";
  headerTitleQuestion.contentPanel.getQuestionByName("color").value = "#FBFF24";
  headerTitleQuestion.contentPanel.getQuestionByName("weight").value = "400";
  headerTitleQuestion.contentPanel.getQuestionByName("size").value = 39;
  headerTitleQuestion.contentPanel.getQuestionByName("family").value = "Georgia";
  headerDescriptionQuestion.contentPanel.getQuestionByName("color").value = "rgba(50, 16, 218, 0.45)";
  headerDescriptionQuestion.contentPanel.getQuestionByName("weight").value = "800";
  headerDescriptionQuestion.contentPanel.getQuestionByName("size").value = 19;
  headerDescriptionQuestion.contentPanel.getQuestionByName("family").value = "Verdana";

  expect(creator.theme.header).toStrictEqual({
    "height": 300,
    "inheritWidthFrom": "container",
    "textAreaWidth": 600,
    "mobileHeight": 0,
    "overlapEnabled": true,
    "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
    "backgroundImageOpacity": 0.5,
    "backgroundImageFit": "fill",
    "logoPositionX": "center",
    "logoPositionY": "middle",
    "titlePositionX": "center",
    "titlePositionY": "middle",
    "descriptionPositionX": "center",
    "descriptionPositionY": "middle"
  });

  currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBe("Georgia");
  expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBe("400");
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBe("#FBFF24");
  expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBe("39px");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-family"]).toBe("Verdana");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-weight"]).toBe("800");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBe("rgba(50, 16, 218, 0.45)");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-size"]).toBe("19px");
  expect(currentThemeCssVariables["--sjs-header-backcolor"]).toBe("#5094ed");
});

test("restore basic headerViewContainer values", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.theme = {
    "cssVariables": {
      "--sjs-corner-radius": "20px",
      "--sjs-base-unit": "9.6px",
      "--sjs-font-size": "17.6px",
      "--sjs-header-backcolor": "#5094ed",
      "--sjs-font-surveytitle-family": "Courier New",
      "--sjs-font-surveytitle-weight": "400",
      "--sjs-font-surveytitle-size": "41px",
      "--sjs-font-surveydescription-family": "Trebuchet MS",
      "--sjs-font-surveydescription-weight": "800",
      "--sjs-font-surveydescription-size": "21px",
      "--sjs-font-headertitle-family": "Georgia",
      "--sjs-font-headertitle-weight": "800",
      "--sjs-font-headertitle-color": "rgba(219, 15, 15, 0.91)",
      "--sjs-font-headertitle-size": "39px",
      "--sjs-font-headerdescription-family": "Verdana",
      "--sjs-font-headerdescription-weight": "800",
      "--sjs-font-headerdescription-color": "rgba(50, 16, 218, 0.45)",
      "--sjs-font-headerdescription-size": "19px"
    },
    "header": {
      "height": 300,
      "inheritWidthFrom": "container",
      "textAreaWidth": 600,
      "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
      "backgroundImageOpacity": 0.5,
      "backgroundImageFit": "fill",
      "overlapEnabled": true,
      "logoPositionX": "center",
      "logoPositionY": "middle",
      "titlePositionX": "center",
      "titlePositionY": "middle",
      "descriptionPositionX": "center",
      "descriptionPositionY": "middle"
    }
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;
  headerViewContainer.getQuestionByName("");

  expect(headerViewContainer.getQuestionByName("headerView").value).toBe("advanced");
  expect(headerViewContainer.getQuestionByName("logoPosition").value).toBe("left");
  expect(headerViewContainer.getQuestionByName("inheritWidthFrom").value).toBe("container");
  expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#5094ed");
  expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toBe("custom");
  expect(headerViewContainer.getQuestionByName("backgroundImage").value).toBe("https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg");
  expect(headerViewContainer.getQuestionByName("backgroundImageFit").value).toBe("fill");
  expect(headerViewContainer.getQuestionByName("backgroundImageOpacity").value).toBe(50);
  expect(headerViewContainer.getQuestionByName("overlapEnabled").value).toBe(true);
  expect(headerViewContainer.getQuestionByName("logoPositionX").value).toBe("center");
  expect(headerViewContainer.getQuestionByName("logoPositionY").value).toBe("middle");
  expect(headerViewContainer.getQuestionByName("titlePositionX").value).toBe("center");
  expect(headerViewContainer.getQuestionByName("titlePositionY").value).toBe("middle");
  expect(headerViewContainer.getQuestionByName("descriptionPositionX").value).toBe("center");
  expect(headerViewContainer.getQuestionByName("descriptionPositionY").value).toBe("middle");
  expect(headerViewContainer.getQuestionByName("textAreaWidth").value).toBe(600);
  expect(headerViewContainer.getQuestionByName("height").value).toBe(300);
  expect(headerViewContainer.getQuestionByName("headerDescription").value).toStrictEqual({
    "color": "rgba(50, 16, 218, 0.45)",
    "family": "Verdana",
    "size": 19,
    "weight": "800",
  });
  expect(headerViewContainer.getQuestionByName("headerTitle").value).toStrictEqual({
    "color": "rgba(219, 15, 15, 0.91)",
    "family": "Georgia",
    "size": 39,
    "weight": "800",
  });
  expect(headerViewContainer.getQuestionByName("surveyDescription").value).toStrictEqual({
    "family": "Trebuchet MS",
    "size": 21,
    "weight": "800",
  });
  expect(headerViewContainer.getQuestionByName("surveyTitle").value).toStrictEqual({
    "family": "Courier New",
    "size": 41,
    "weight": "400",
  });
});

test("restore advanced headerViewContainer values", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.theme = {
    "cssVariables": {
      "--sjs-corner-radius": "20px",
      "--sjs-base-unit": "9.6px",
      "--sjs-font-size": "17.6px",
      "--sjs-header-backcolor": "#5094ed",
      "--sjs-font-surveytitle-family": "Courier New",
      "--sjs-font-surveytitle-weight": "400",
      "--sjs-font-surveytitle-size": "41px",
      "--sjs-font-surveydescription-family": "Trebuchet MS",
      "--sjs-font-surveydescription-weight": "800",
      "--sjs-font-surveydescription-size": "21px",
      "--sjs-font-headertitle-family": "Georgia",
      "--sjs-font-headertitle-weight": "800",
      "--sjs-font-headertitle-color": "rgba(219, 15, 15, 0.91)",
      "--sjs-font-headertitle-size": "39px",
      "--sjs-font-headerdescription-family": "Verdana",
      "--sjs-font-headerdescription-weight": "800",
      "--sjs-font-headerdescription-color": "rgba(50, 16, 218, 0.45)",
      "--sjs-font-headerdescription-size": "19px"
    },
    "header": {
      "height": 300,
      "inheritWidthFrom": "container",
      "textAreaWidth": 600,
      "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
      "backgroundImageOpacity": 0.5,
      "backgroundImageFit": "fill",
      "overlapEnabled": true,
      "logoPositionX": "center",
      "logoPositionY": "middle",
      "titlePositionX": "center",
      "titlePositionY": "middle",
      "descriptionPositionX": "center",
      "descriptionPositionY": "middle"
    },
    "headerView": "advanced",
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;
  headerViewContainer.getQuestionByName("");

  expect(headerViewContainer.getQuestionByName("headerView").value).toBe("advanced");
  expect(headerViewContainer.getQuestionByName("logoPosition").value).toBe("left");
  expect(headerViewContainer.getQuestionByName("inheritWidthFrom").value).toBe("container");
  expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#5094ed");
  expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toBe("custom");
  expect(headerViewContainer.getQuestionByName("backgroundImage").value).toBe("https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg");
  expect(headerViewContainer.getQuestionByName("backgroundImageFit").value).toBe("fill");
  expect(headerViewContainer.getQuestionByName("backgroundImageOpacity").value).toBe(50);
  expect(headerViewContainer.getQuestionByName("overlapEnabled").value).toBe(true);
  expect(headerViewContainer.getQuestionByName("logoPositionX").value).toBe("center");
  expect(headerViewContainer.getQuestionByName("logoPositionY").value).toBe("middle");
  expect(headerViewContainer.getQuestionByName("titlePositionX").value).toBe("center");
  expect(headerViewContainer.getQuestionByName("titlePositionY").value).toBe("middle");
  expect(headerViewContainer.getQuestionByName("descriptionPositionX").value).toBe("center");
  expect(headerViewContainer.getQuestionByName("descriptionPositionY").value).toBe("middle");
  expect(headerViewContainer.getQuestionByName("textAreaWidth").value).toBe(600);
  expect(headerViewContainer.getQuestionByName("height").value).toBe(300);
  expect(headerViewContainer.getQuestionByName("headerDescription").value).toStrictEqual({
    "color": "rgba(50, 16, 218, 0.45)",
    "family": "Verdana",
    "size": 19,
    "weight": "800",
  });
  expect(headerViewContainer.getQuestionByName("headerTitle").value).toStrictEqual({
    "color": "rgba(219, 15, 15, 0.91)",
    "family": "Georgia",
    "size": 39,
    "weight": "800",
  });
  expect(headerViewContainer.getQuestionByName("surveyDescription").value).toStrictEqual({
    "family": "Trebuchet MS",
    "size": 21,
    "weight": "800",
  });
  expect(headerViewContainer.getQuestionByName("surveyTitle").value).toStrictEqual({
    "family": "Courier New",
    "size": 41,
    "weight": "400",
  });
});

test("Check accordion property grid categories", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.propertyGridNavigationMode = "accordion";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  let propertyGridSurvey = themePlugin.propertyGrid.survey;
  const categoriesTrueOrder = ["general", "header", "background", "appearance"];
  const categories = propertyGridSurvey.pages[0].elements;
  const categoriesNames = categories.map(pe => pe.name);
  expect(categoriesNames).toStrictEqual(categoriesTrueOrder);

  expect(categories[0].isVisible).toBeTruthy();
  expect(categories[1].isVisible).toBeTruthy();
  expect(categories[2].isVisible).toBeTruthy();
  expect(categories[3].isVisible).toBeTruthy();
});

test("Check buttons property grid categories", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.propertyGridNavigationMode = "buttons";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  let propertyGridSurvey = themePlugin.propertyGrid.survey;
  const categoriesTrueOrder = ["general", "header", "background", "appearance"];
  const categories = propertyGridSurvey.pages;
  const categoriesNames = categories.map(pe => pe.name);
  expect(categoriesNames).toStrictEqual(categoriesTrueOrder);
  expect(propertyGridSurvey.currentPage.name).toBe("general");
});

test("Check subcategory order", (): any => {
  Serializer.addProperty("theme", {
    name: "custom-question-title",
    type: "font",
    category: "appearancequestion",
  });

  Serializer.addProperty("theme", {
    name: "matrix-title",
    type: "font",
    category: "appearancequestion",
  });

  try {
    Serializer.getProperty("theme", "questionTitle").visible = false;

    const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
    creator.propertyGridNavigationMode = "accordion";
    const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
    creator.JSON = { questions: [{ type: "text", name: "q1" }] };

    themePlugin.activate();
    let propertyGridSurvey = themePlugin.propertyGrid.survey;
    const subcategoriesTrueOrder = ["appearancecolor", "appearancefont", "appearanceother", "appearanceadvancedmode", "appearanceprimarycolor", "appearancepage", "appearancequestion", "appearanceinput", "appearancelines"];
    const subcategories = propertyGridSurvey.getPanelByName("appearance").elements.filter(pe => pe.isPanel).map(pe => pe.name);

    expect(subcategories).toStrictEqual(subcategoriesTrueOrder);
  } finally {
    Serializer.removeProperty("theme", "custom-question-title");
    Serializer.removeProperty("theme", "matrix-title");
    Serializer.getProperty("theme", "questionTitle").visible = true;
  }
});

test("Check subcategory order (property grid buttons)", (): any => {
  Serializer.addProperty("theme", {
    name: "custom-question-title",
    type: "font",
    category: "appearancequestion",
  });

  Serializer.addProperty("theme", {
    name: "matrix-title",
    type: "font",
    category: "appearancequestion",
  });

  try {
    Serializer.getProperty("theme", "questionTitle").visible = false;

    const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
    const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
    creator.JSON = { questions: [{ type: "text", name: "q1" }] };

    themePlugin.activate();
    let propertyGridSurvey = themePlugin.propertyGrid.survey;
    const subcategoriesTrueOrder = ["appearancecolor", "appearancefont", "appearanceother", "appearanceadvancedmode", "appearanceprimarycolor", "appearancepage", "appearancequestion", "appearanceinput", "appearancelines"];
    const subcategories = propertyGridSurvey.getPageByName("appearance").elements.filter(pe => pe.isPanel).map(pe => pe.name);

    expect(subcategories).toStrictEqual(subcategoriesTrueOrder);
  } finally {
    Serializer.removeProperty("theme", "custom-question-title");
    Serializer.removeProperty("theme", "matrix-title");
    Serializer.getProperty("theme", "questionTitle").visible = true;
  }
});

test("header survey title font color changed", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { title: "Survey Title", questions: [{ type: "text", name: "q1" }] };

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;
  const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");

  expect(creator.theme.header).toEqual({ "backgroundImageFit": "cover", "backgroundImageOpacity": 100, "descriptionPositionX": "left", "descriptionPositionY": "bottom", "height": 0, "inheritWidthFrom": "survey", "logoPositionX": "left", "logoPositionY": "top", "mobileHeight": 0, "overlapEnabled": false, "textAreaWidth": 0, "titlePositionX": "left", "titlePositionY": "bottom" });

  let currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();

  headerViewContainer.getElementByName("headerView").value = "advanced";

  currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();

  // headerTitleQuestion.contentPanel.getQuestionByName("color").value = "#FBFF24";
  // headerTitleQuestion.contentPanel.getQuestionByName("weight").value = "400";
  headerTitleQuestion.contentPanel.getQuestionByName("size").value = 39;
  // headerTitleQuestion.contentPanel.getQuestionByName("family").value = "Georgia";

  currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBeUndefined();
  // expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBe("Georgia");
  expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBeUndefined();
  // expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBe("400");
  // expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBe("39px");
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();
  // expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBe("#FBFF24");
});

test("header editable after theme changed", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { title: "Survey Title", headerView: "advanced", questions: [{ type: "text", name: "q1" }] };

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;
  const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");
  const themeChooser = themePlugin.propertyGrid.survey.getQuestionByName("themeName") as QuestionDropdownModel;

  themeChooser.value = "flat";
  expect(headerTitleQuestion.isVisible).toBe(true);

  headerViewContainer.getElementByName("headerView").value = "basic";
  expect(headerTitleQuestion.isVisible).toBe(false);
});

test("advanced header disable inheritWidthFrom and reset it to 'container' if showTOC is true", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { title: "Survey Title", headerView: "advanced", questions: [{ type: "text", name: "q1" }] };

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;
  const inheritWidthFromQuestion = headerViewContainer.getElementByName("inheritWidthFrom");

  expect(inheritWidthFromQuestion.isVisible).toBe(true);
  expect(inheritWidthFromQuestion.value).toBe("survey");

  themePlugin.deactivate();
  creator.survey.showTOC = true;
  themePlugin.activate();
  expect(headerViewContainer.getElementByName("headerView").value).toBe("advanced");
  expect(inheritWidthFromQuestion.value).toBe("container");
  expect(inheritWidthFromQuestion.isVisible).toBe(false);

  themePlugin.deactivate();
  creator.survey.showTOC = false;
  themePlugin.activate();
  expect(headerViewContainer.getElementByName("headerView").value).toBe("advanced");
  expect(inheritWidthFromQuestion.value).toBe("container");
  expect(inheritWidthFromQuestion.isVisible).toBe(true);
});

test("Theme builder: set custom font", (): any => {
  const customFont = "RobotoMono-Regular, monospace";
  expect(DefaultFonts.length).toEqual(10);
  DefaultFonts.push(customFont);
  try {
    const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
    creator.JSON = { questions: [{ type: "text", name: "q1" }] };
    const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
    themePlugin.activate();
    const questionGeneralFont = themePlugin.propertyGrid.survey.findQuestionByName("--sjs-font-family") as QuestionDropdownModel;
    const questionTitleFontSettings = themePlugin.propertyGrid.survey.findQuestionByName("questionTitle") as QuestionCompositeModel;
    const questionTitleFontFamily = questionTitleFontSettings.contentPanel.getQuestionByName("family") as QuestionDropdownModel;

    expect(questionGeneralFont.choices.length).toEqual(11);
    expect(questionTitleFontFamily.choices.length).toEqual(11);
  } finally {
    DefaultFonts.splice(DefaultFonts.indexOf(customFont), 1);
    expect(DefaultFonts.length).toEqual(10);
  }
});
