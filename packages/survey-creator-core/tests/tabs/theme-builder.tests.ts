import { CreatorTester } from "../creator-tester";
import { ThemeSurveyTabViewModel } from "../../src/components/tabs/theme";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
import { parseColor, createColor } from "../../src/components/tabs/theme-custom-questions/color-settings";
import { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";
import { TabThemePlugin } from "../../src/components/tabs/theme-plugin";
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
  expect(themeEditor.getQuestionByName("--base-unit").value).toEqual("8px");

  expect(themeEditor.getQuestionByName("cornerRadius").value).toEqual(4);
  expect(themeEditor.getQuestionByName("--sjs-corner-radius").value).toEqual("4px");
});

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
  expect(themeEditor.getQuestionByName("--base-unit").value).toEqual("8px");

  expect(themeEditor.getQuestionByName("cornerRadius").value).toEqual(4);
  expect(themeEditor.getQuestionByName("--sjs-corner-radius").value).toEqual("4px");
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
  const simulator = themeSurveyTab.simulator;
  const panelBackgroundTransparency = themeEditor.getQuestionByName("panelBackgroundTransparency");

  expect(panelBackgroundTransparency.value).toEqual(100);
  expect(simulator.themeVariables["--sjs-question-background"]).toEqual("#ffffff");

  panelBackgroundTransparency.value = 60;
  expect(simulator.themeVariables["--sjs-question-background"]).toEqual("rgba(255, 255, 255, 0.6)");

  themeEditor.getQuestionByName("questionPanel").contentPanel.getQuestionByName("backcolor").value = "#eeeeee";
  expect(simulator.themeVariables["--sjs-question-background"]).toEqual("rgba(238, 238, 238, 0.6)");
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
  const simulator = themeSurveyTab.simulator;
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(simulator.themeVariables["--sjs-editor-background"]).toEqual("#f9f9f9");

  questionBackgroundTransparency.value = 60;
  expect(simulator.themeVariables["--sjs-editor-background"]).toEqual("rgba(249, 249, 249, 0.6)");

  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(simulator.themeVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
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
  const backgroundDimColor = themeEditor.getQuestionByName("--background-dim");

  expect(themePalette.value).toEqual("light");
  expect(primaryColor.value).toEqual("#19b394");
  expect(backgroundDimColor.value).toEqual("#f3f3f3");

  themePalette.value = "dark";
  expect(primaryColor.value).toEqual("#1ab7fa");
  expect(backgroundDimColor.value).toEqual("#4d4d4d");
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
  const simulator = themeSurveyTab.simulator;
  const surveyTitleFontSettings = themeEditor.getQuestionByName("surveyTitle");

  expect(simulator.themeVariables["--sjs-font-surveytitle-family"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-surveytitle-weight"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-surveytitle-color"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-surveytitle-size"]).toBeUndefined();

  surveyTitleFontSettings.value = { family: "Open Sans", weight: "semiBold", color: "#161616", size: 32 };

  expect(simulator.themeVariables["--sjs-font-surveytitle-family"]).toEqual("Open Sans");
  expect(simulator.themeVariables["--sjs-font-surveytitle-weight"]).toEqual("semiBold");
  expect(simulator.themeVariables["--sjs-font-surveytitle-color"]).toEqual("#161616");
  expect(simulator.themeVariables["--sjs-font-surveytitle-size"]).toEqual("32px");
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
  const simulator = themeSurveyTab.simulator;
  const surveyTitleFontSettings = themeEditor.getQuestionByName("surveyTitle");
  const pageTitleFontSettings = themeEditor.getQuestionByName("pageTitle");

  expect(simulator.themeVariables["--sjs-font-surveytitle-family"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-surveytitle-weight"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-surveytitle-color"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-surveytitle-size"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  surveyTitleFontSettings.value = { family: "Open Sans", weight: "semiBold", color: "#161616", size: 32 };

  expect(simulator.themeVariables["--sjs-font-surveytitle-family"]).toEqual("Open Sans");
  expect(simulator.themeVariables["--sjs-font-surveytitle-weight"]).toEqual("semiBold");
  expect(simulator.themeVariables["--sjs-font-surveytitle-color"]).toEqual("#161616");
  expect(simulator.themeVariables["--sjs-font-surveytitle-size"]).toEqual("32px");
  expect(simulator.themeVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  pageTitleFontSettings.value = { family: "Open Sans", weight: "semiBold", color: "#101010", size: 28 };

  expect(simulator.themeVariables["--sjs-font-surveytitle-family"]).toEqual("Open Sans");
  expect(simulator.themeVariables["--sjs-font-surveytitle-weight"]).toEqual("semiBold");
  expect(simulator.themeVariables["--sjs-font-surveytitle-color"]).toEqual("#161616");
  expect(simulator.themeVariables["--sjs-font-surveytitle-size"]).toEqual("32px");
  expect(simulator.themeVariables["--sjs-font-pagetitle-family"]).toEqual("Open Sans");
  expect(simulator.themeVariables["--sjs-font-pagetitle-weight"]).toEqual("semiBold");
  expect(simulator.themeVariables["--sjs-font-pagetitle-color"]).toEqual("#101010");
  expect(simulator.themeVariables["--sjs-font-pagetitle-size"]).toEqual("28px");
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
  const simulator = themeSurveyTab.simulator;
  const questionPanelSettings = themeEditor.getQuestionByName("questionPanel");

  expect(simulator.themeVariables["--sjs-questionpanel-backcolor"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-questionpanel-hovercolor"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-questionpanel-cornerRadius"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-questionpanel-border"]).toBeUndefined();

  questionPanelSettings.value = { backcolor: "#ffffff", hovercolor: "#f8f8f8", corner: 5, border: "0 1 2 rgba(0, 0, 0, 0.15)" };

  expect(simulator.themeVariables["--sjs-questionpanel-backcolor"]).toEqual("#ffffff");
  expect(simulator.themeVariables["--sjs-questionpanel-hovercolor"]).toEqual("#f8f8f8");
  expect(simulator.themeVariables["--sjs-questionpanel-cornerRadius"]).toEqual("5px");
  expect(simulator.themeVariables["--sjs-questionpanel-border"]).toEqual("0 1 2 rgba(0, 0, 0, 0.15)");
});

test("Theme builder calculating dependent colors", (): any => {
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
  const primaryColorDark = themeEditor.getQuestionByName("--sjs-primary-backcolor-dark");
  const primaryColorLight = themeEditor.getQuestionByName("--sjs-primary-backcolor-light");

  expect(themePalette.value).toEqual("light");
  expect(primaryColor.value).toEqual("#19b394");
  expect(primaryColorDark.value).toEqual("#14A48B");
  expect(primaryColorLight.value).toEqual("#E8F7F4");

  // themePalette.value = "dark";
  // expect(primaryColor.value).toEqual("#1ab7fa");
  // expect(backgroundDimColor.value).toEqual("#4d4d4d");
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