import { CreatorTester } from "../creator-tester";
import { PredefinedColors, ThemeSurveyTabViewModel } from "../../src/components/tabs/theme";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
import { QuestionColorModel } from "../../src/custom-questions/question-color";
export * from "../../src/components/tabs/theme-custom-questions/font-settings";
export * from "../../src/components/tabs/theme-custom-questions/element-settings";
import { createColor } from "../../src/components/tabs/theme-custom-questions/color-settings";
import { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";
import { TabThemePlugin } from "../../src/components/tabs/theme-plugin";
import { parseColor } from "../../src/utils/utils";
import { SurveyModel } from "survey-core";

import "survey-core/survey.i18n";

test("Theme builder initialization", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  expect(themeEditor.getQuestionByName("themeName").value).toEqual("default");
  expect(themeEditor.getQuestionByName("themeMode").value).toEqual("panels");
  expect(themeEditor.getQuestionByName("themePalette").value).toEqual("light");
  expect(themeEditor.getQuestionByName("backgroundImage").value).toEqual(undefined);
  expect(themeEditor.getQuestionByName("backgroundImageFit").value).toEqual("cover");
  expect(themeEditor.getQuestionByName("backgroundOpacity").value).toEqual(100);
  expect(themeEditor.getQuestionByName("panelBackgroundTransparency").value).toEqual(100);
  expect(themeEditor.getQuestionByName("questionBackgroundTransparency").value).toEqual(100);
  expect(themeEditor.getQuestionByName("--sjs-font-size").value).toEqual("16px");

  expect(themeEditor.getQuestionByName("commonScale").value).toEqual(100);
  expect(themeEditor.getQuestionByName("--sjs-base-unit").value).toEqual("8px");

  expect(themeEditor.getQuestionByName("cornerRadius").value).toEqual(4);
  expect(themeEditor.getQuestionByName("--sjs-corner-radius").value).toEqual("4px");

  const colorQuestions = themeEditor.getAllQuestions().filter(q => q.getType() === "color");
  expect(colorQuestions[0].choices.length).toEqual(7);
  expect(colorQuestions[0].choices.map(c => c.value)).toStrictEqual(Object.values(PredefinedColors.light));
});

test("Theme builder panelBackgroundTransparency", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const currentTheme = themeSurveyTab.currentTheme;
  const panelBackgroundTransparency = themeEditor.getQuestionByName("panelBackgroundTransparency");

  expect(panelBackgroundTransparency.value).toEqual(100);
  expect(currentTheme.cssVariables["--sjs-question-background"]).toBeUndefined();

  panelBackgroundTransparency.value = 60;
  expect(currentTheme.cssVariables["--sjs-question-background"]).toEqual("rgba(255, 255, 255, 0.6)");

  themeEditor.getQuestionByName("questionPanel").contentPanel.getQuestionByName("backcolor").value = "#eeeeee";
  expect(currentTheme.cssVariables["--sjs-question-background"]).toEqual("rgba(238, 238, 238, 0.6)");
});

test("Theme builder questionBackgroundTransparency", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const currentTheme = themeSurveyTab.currentTheme;
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(currentTheme.cssVariables["--sjs-editor-background"]).toBeUndefined();

  questionBackgroundTransparency.value = 60;
  expect(currentTheme.cssVariables["--sjs-editor-background"]).toEqual("rgba(249, 249, 249, 0.6)");

  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(currentTheme.cssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
});

test("Theme builder: survey settings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const simulatorSurvey = themeSurveyTab.survey;

  const backgroundImage = themeEditor.getQuestionByName("backgroundImage");
  const backgroundImageFit = themeEditor.getQuestionByName("backgroundImageFit");
  const backgroundOpacity = themeEditor.getQuestionByName("backgroundOpacity");
  const themeMode = themeEditor.getQuestionByName("themeMode");

  expect(backgroundImage.value).toEqual(undefined);
  expect(backgroundImageFit.value).toEqual("cover");
  expect(backgroundOpacity.value).toEqual(100);
  expect(themeMode.value).toEqual("panels");

  expect(simulatorSurvey.backgroundImage).toEqual("");
  expect(simulatorSurvey.backgroundImageFit).toEqual("cover");
  expect(simulatorSurvey.backgroundOpacity).toEqual(1);
  expect(simulatorSurvey["isCompact"]).toBe(false);

  backgroundImage.value = "image-url";
  backgroundImageFit.value = "auto";
  backgroundOpacity.value = 60;
  themeMode.value = "lightweight";

  expect(simulatorSurvey.backgroundImage).toEqual("image-url");
  expect(simulatorSurvey.backgroundImageFit).toEqual("auto");
  expect(simulatorSurvey.backgroundOpacity).toEqual(0.6);
  expect(simulatorSurvey["isCompact"]).toBe(true);
});

test("Theme builder switch themes", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const themePalette = themeEditor.getQuestionByName("themePalette");
  const primaryColor = themeEditor.getQuestionByName("--sjs-primary-backcolor");
  const backgroundDimColor = themeEditor.getQuestionByName("--sjs-general-backcolor-dim");

  expect(themePalette.value).toEqual("light");
  expect(primaryColor.value).toEqual("rgba(25, 179, 148, 1)");
  expect(backgroundDimColor.value).toEqual("rgba(243, 243, 243, 1)");

  themePalette.value = "dark";
  expect(primaryColor.value).toEqual("rgba(255, 152, 20, 1)");
  expect(backgroundDimColor.value).toEqual("rgba(36, 36, 36, 1)");
});

test("Theme builder: composite question fontSettings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const currentTheme = themeSurveyTab.currentTheme;
  const surveyTitleFontSettings = themeEditor.getQuestionByName("surveyTitle");

  expect(currentTheme.cssVariables["--sjs-font-surveytitle-family"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-weight"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-color"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-size"]).toBeUndefined();

  surveyTitleFontSettings.value = { family: "Open Sans", weight: "semiBold", color: "#161616", size: 32 };

  expect(currentTheme.cssVariables["--sjs-font-surveytitle-family"]).toEqual("Open Sans");
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-weight"]).toEqual("semiBold");
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-color"]).toEqual("#161616");
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-size"]).toEqual("32px");
});

test("Theme builder: composite question values are lost", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const currentTheme = themeSurveyTab.currentTheme;
  const surveyTitleFontSettings = themeEditor.getQuestionByName("surveyTitle");
  const pageTitleFontSettings = themeEditor.getQuestionByName("pageTitle");

  expect(currentTheme.cssVariables["--sjs-font-surveytitle-family"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-weight"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-color"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-size"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  surveyTitleFontSettings.value = { family: "Open Sans", weight: "semiBold", color: "#161616", size: 32 };

  expect(currentTheme.cssVariables["--sjs-font-surveytitle-family"]).toEqual("Open Sans");
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-weight"]).toEqual("semiBold");
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-color"]).toEqual("#161616");
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-size"]).toEqual("32px");
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  pageTitleFontSettings.value = { family: "Open Sans", weight: "semiBold", color: "#101010", size: 28 };

  expect(currentTheme.cssVariables["--sjs-font-surveytitle-family"]).toEqual("Open Sans");
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-weight"]).toEqual("semiBold");
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-color"]).toEqual("#161616");
  expect(currentTheme.cssVariables["--sjs-font-surveytitle-size"]).toEqual("32px");
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-family"]).toEqual("Open Sans");
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-weight"]).toEqual("semiBold");
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-color"]).toEqual("#101010");
  expect(currentTheme.cssVariables["--sjs-font-pagetitle-size"]).toEqual("28px");
});

test("Theme builder: composite question elementSettings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const currentTheme = themeSurveyTab.currentTheme;
  const questionPanelSettings = themeEditor.getQuestionByName("questionPanel");

  expect(currentTheme.cssVariables["--sjs-questionpanel-backcolor"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-questionpanel-hovercolor"]).toBeUndefined();
  expect(currentTheme.cssVariables["--sjs-questionpanel-cornerRadius"]).toBeUndefined();

  questionPanelSettings.value = { backcolor: "#ffffff", hovercolor: "#f8f8f8", corner: 5 };

  expect(currentTheme.cssVariables["--sjs-questionpanel-backcolor"]).toEqual("#ffffff");
  expect(currentTheme.cssVariables["--sjs-questionpanel-hovercolor"]).toEqual("#f8f8f8");
  expect(currentTheme.cssVariables["--sjs-questionpanel-cornerRadius"]).toEqual("5px");
});

test("Theme builder reset to default", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const currentTheme = themeSurveyTab.currentTheme;
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(currentTheme.cssVariables["--sjs-editor-background"]).toBeUndefined();

  questionBackgroundTransparency.value = 60;
  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(currentTheme.cssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");

  themeSurveyTab.applySelectedTheme();
  expect(currentTheme.cssVariables["--sjs-editor-background"]).toBeUndefined();// rgba(249, 249, 249, 1)
});

test("Theme builder themeMode not change modified values ", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const currentTheme = themeSurveyTab.currentTheme;
  const themeMode = themeEditor.getQuestionByName("themeMode");
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(currentTheme.cssVariables["--sjs-editor-background"]).toBeUndefined();

  questionBackgroundTransparency.value = 60;
  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(currentTheme.cssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
  expect(themeMode.value).toEqual("panels");

  themeMode.value = "lightweight";
  expect(currentTheme.cssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
});

test("Check createBoxShadow and parseBoxShadow functions", () => {
  let boxShadow = "1px 2px 3px 24px #673241";
  let parsedBoxShadow = parseBoxShadow(boxShadow);
  expect(parsedBoxShadow).toEqual([{
    blur: 3,
    x: 1,
    y: 2,
    spread: 24,
    isInset: false,
    color: "#673241"
  }]);
  let createdBoxShadow = createBoxShadow(parsedBoxShadow);
  expect(createdBoxShadow).toBe("1px 2px 3px 24px #673241");
  boxShadow = "2px 3px 4px 6px rgba(103, 50, 65, 0.75)";
  parsedBoxShadow = parseBoxShadow(boxShadow);
  expect(parsedBoxShadow).toEqual([{
    blur: 4,
    x: 2,
    y: 3,
    spread: 6,
    isInset: false,
    color: "rgba(103, 50, 65, 0.75)"
  }]);
  createdBoxShadow = createBoxShadow(parsedBoxShadow);
  expect(createdBoxShadow).toBe("2px 3px 4px 6px rgba(103, 50, 65, 0.75)");

  boxShadow = "inset 2px 3px 4px 6px rgb(103, 50, 65)";
  parsedBoxShadow = parseBoxShadow(boxShadow);
  expect(parsedBoxShadow).toEqual([{
    blur: 4,
    x: 2,
    y: 3,
    spread: 6,
    isInset: true,
    color: "rgb(103, 50, 65)"
  }]);
  createdBoxShadow = createBoxShadow(parsedBoxShadow);
  expect(createdBoxShadow).toBe("inset 2px 3px 4px 6px rgb(103, 50, 65)");

  boxShadow = "inset 2px 3px 4px 6px rgb(103, 50, 65), 1px 1px 1px 1px rgb(22, 21, 23), 3px 3px 3px 3px rgb(32, 31, 33)";
  parsedBoxShadow = parseBoxShadow(boxShadow);
  expect(parsedBoxShadow).toEqual([{
    blur: 4,
    x: 2,
    y: 3,
    spread: 6,
    isInset: true,
    color: "rgb(103, 50, 65)"
  },
  {
    blur: 1,
    x: 1,
    y: 1,
    spread: 1,
    isInset: false,
    color: "rgb(22, 21, 23)"
  },
  {
    blur: 3,
    x: 3,
    y: 3,
    spread: 3,
    isInset: false,
    color: "rgb(32, 31, 33)"
  }]);
  createdBoxShadow = createBoxShadow(parsedBoxShadow);
  expect(createdBoxShadow).toBe("inset 2px 3px 4px 6px rgb(103, 50, 65), 1px 1px 1px 1px rgb(22, 21, 23), 3px 3px 3px 3px rgb(32, 31, 33)");

  createdBoxShadow = createBoxShadow([{}]);
  expect(createdBoxShadow).toBe("0px 0px 0px 0px #000000");

});

test("Check boxshadowsettings question", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "boxshadowsettings",
      name: "test",
    }]
  });
  const question = survey.getAllQuestions()[0];
  expect(survey.data).toEqual({});
  survey.data = {
    "test": "2px 3px 4px 6px rgba(103, 50, 65, 0.75)"
  };
  expect(question.value).toEqual([{
    "blur": 4,
    "color": "rgba(103, 50, 65, 0.75)",
    "isInset": false,
    "spread": 6,
    "x": 2,
    "y": 3,
  }]);
  question.value = [{
    "blur": 6,
    "color": "#673fff",
    "isInset": true,
    "spread": 8,
    "x": 5,
    "y": 10,
  }];
  question.contentQuestion.panels[0].getQuestionByName("color").contentPanel.getQuestionByName("opacity").value = 7;
  expect(survey.data).toEqual({ "test": "inset 5px 10px 6px 8px rgba(103, 63, 255, 0.07)" });
});

test("Check parseColor and createColor functions", () => {
  let color = "#673241";
  let parsedColor = parseColor(color);
  expect(parsedColor).toEqual({
    color: "#673241",
    opacity: 100
  });
  let createdColor = createColor(parsedColor);
  expect(createdColor).toBe("rgba(103, 50, 65, 1)");
  color = "rgb(103, 50, 65)";
  parsedColor = parseColor(color);
  expect(parsedColor).toEqual({
    color: "#673241",
    opacity: 100
  });
  createdColor = createColor(parsedColor);
  expect(createdColor).toBe("rgba(103, 50, 65, 1)");
  color = "rgb(103, 50, 65, 0.75)";
  parsedColor = parseColor(color);
  expect(parsedColor).toEqual({
    color: "#673241",
    opacity: 75
  });
  createdColor = createColor(parsedColor);
  expect(createdColor).toBe("rgba(103, 50, 65, 0.75)");
});

test("Check colorsettings question", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "colorsettings",
      name: "test",
    }]
  });
  const question = survey.getAllQuestions()[0];
  expect(survey.data).toEqual({});
  survey.data = {
    "test": "rgba(103, 50, 65, 0.75)"
  };
  expect(question.value).toEqual({
    "color": "#673241",
    "opacity": 75
  });
  question.value = {
    "color": "#673fff",
    "opacity": 50
  };
  expect(survey.data).toEqual({ "test": "rgba(103, 63, 255, 0.5)" });
});

test("Theme builder export value from composite question", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionDimLightBackground = themeEditor.getQuestionByName("--sjs-general-backcolor-dim-light");

  expect(questionDimLightBackground.value).toEqual("#f9f9f9");
  expect(themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value).toBe("#f9f9f9");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(249, 249, 249, 1)");

  themeEditor.getQuestionByName("themeName").value = "ultra";
  expect(questionDimLightBackground.value).toEqual("#ffd84d");
  expect(themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value).toBe("#ffd84d");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(255, 216, 77, 1)");
});

test("import styles from file", ()=> {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  themeSurveyTab.setThemeFromFile({
    "cssVariables": {
      "--sjs-general-backcolor": "rgba(150, 150, 255, 1)",
    },
    "backgroundImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABQCAYAAAC6aDOxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATkSURBVHgB5ZxNUhNBFIBf9xBBccFWQulwAvEAUuEEFidQTyCsXIonUE+gN9AbEEOVW3DnjlhGXRo3EBKm2+7AxEmnf2aGzLxX8G0IMxNIPV5/3fNeDwCE+XX78Q4gw4EovUZrQwA8AWRIBuj3UivmDfGRAfQBGZIBklzsS4AYGDsCZMgFqLe8+XYcHIVk0AVkFoAQP+9s7oGEF+n3USK7gAyZDNJSVl9eZY9JSLqADAMCaClPvJOhedJB/3wkMsgWHAW6oDXoAcpKOYuUEn2K16BK2pTyFBx/itegZZBNylm4wJ/iNSgZdCnlj9JzjWT4U7wGJYMcUp6+ZhR9BwLUHiCXlE1GyzdwiHmlPE1/vd8mMYvVlkEhKWdRUzyJGUxTSwblkXIWCmWOlFoCJFRwIId3JhAoc6RUPsS0lNWXjSLvoVDmSKk0QLqmzPxStg4lCmWOlMoCpKUsGXvjvEDAnusUhTJHSiUBSmvK7ivkh+ESf6derNjOrg6+kFgkaioJkLiYsWLrSQnd4a1otzFySpuMoDVzD5BXyjo4km/pRaDg9gBRKXOkzDVAISknjO+uD9pd/XrhXDywXkSkzJEytwDlkfL9k/anzG+ObZepAJPKoLksFMMrZfmhOTh4PX2MbegxZ7n2+mVQHinPHpbWGUwVyq6Xg/JK2XLO+p7BUvQVCHGltoqWss87CfDtKe9cooekyrpjII6U8LZ0BhWWcobzhQI3rngcrZ12dktJupyU/6Nmqhgoc6GGbf2yVAaVkXIWJh1rICLIc76drtcKByhQvug7pTwFK1T+qBOWwM7aqD1ZahQKUHClDPx5Gnnvh2D2m1RstJRXzzrvssdyz2JayqwhDp0XKCk3B53XQJTjldbK4lAcejoqR82TziPzYC5Jh6TMpPy06pEyBRojsef15qWUTXINsZCUzxaj50AY3W7yqSErZZNggOYjZTx+3G21wNNuMqVs4g3QvKSMhVZDJMR713mblE2ckr72UlZqaJ521kM/xyrpGyLlLciBdYjdZCmbzAwxLWWWb4NBrahadXvt9CD4V9dS5kLsOy8oqIapDMrR6EMjT78+j5SLenMSoGD5Apsc/XrvxiylBl2+gIKMJV109wUGoWL+eGOWvLqUTcYBKrz7AgHm2TMU2pg1lvKo3HqNl9l9gUGSRH9tx4Mbs5SUfSvlECQeRUjRi7tbQ/HHds72WILrEYYULeUy3slC6nGohXNnJlszoAopm5AKkHQU0mz9eu9u2StI2YTU82K6Xy9tg97YcVallE1oPXHo6tcD66avq5ayCakMCvXrQ+u1sZTnXGGg5aBAv74OKZvQyiBPv74XVbNSDhEBEcbDh8kdy6l+lKi7RICXrvcqKW89GLa/QQWQGWKBfn1tUjYhEyBPv97ZZCxTvigKoQAV7Ncr74wWeeVlX0KzWIF+vW9j1pyhk0EF+vVcymd1tZvIBEjdb+XLICXle4ODz1ATlBaKwQyqQ8omJALUW26Fs6cmKZvQ+NcUIf/UKGUTEgGKEvHQd75OKc/8bqAA96yia5ayCY0hJllsP16/lE1oZBCT8cwxJCmb0AiQeR+GKGUT9ADpVg8YayBMKZugB2im1YMsZRP0AGXXQBSkbIIeoMkaiIiUTQhImsWUpGyCHiBV5ogpSZkcvaXNp0CYf3BxyTNPele9AAAAAElFTkSuQmCC",
    "backgroundImageFit": "auto",
    "themeName": "My Theme",
    "themePalette": "light",
    "isCompact": true
  } as any);

  expect(themeEditor.getQuestionByName("themeName").value).toEqual("My Theme");
  expect(themeEditor.getQuestionByName("themePalette").value).toEqual("light");
  expect(themeEditor.getQuestionByName("themeMode").value).toEqual("lightweight");
  expect(themeEditor.getQuestionByName("backgroundImage").value).toBeTruthy();
  expect(themeEditor.getQuestionByName("backgroundImageFit").value).toEqual("auto");
});