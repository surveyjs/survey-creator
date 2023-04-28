import { CreatorTester } from "../creator-tester";
import { TestSurveyTabViewModel } from "../../src/components/tabs/test";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel }from "../../src/custom-questions/question-spin-editor";
import { TabTestPlugin } from "../../src/components/tabs/test-plugin";

import "survey-core/survey.i18n";

test("Theme builder initialization", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const testSurveyTab = testPlugin.model as TestSurveyTabViewModel;
  const themeEditor = testSurveyTab.themeEditorSurvey;

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
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const testSurveyTab = testPlugin.model as TestSurveyTabViewModel;
  const themeEditor = testSurveyTab.themeEditorSurvey;

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
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const testSurveyTab = testPlugin.model as TestSurveyTabViewModel;
  const themeEditor = testSurveyTab.themeEditorSurvey;
  const panelBackgroundTransparency = themeEditor.getQuestionByName("panelBackgroundTransparency");

  expect(panelBackgroundTransparency.value).toEqual(100);
  expect(themeEditor.data["--sjs-question-background"]).toEqual("#ffffff");

  panelBackgroundTransparency.value = 60;
  expect(themeEditor.data["--sjs-question-background"]).toEqual("rgba(255, 255, 255, 0.6)");

  themeEditor.getQuestionByName("--background").value = "#eeeeee";
  expect(themeEditor.data["--sjs-question-background"]).toEqual("rgba(238, 238, 238, 0.6)");
});

test("Theme builder questionBackgroundTransparency", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const testSurveyTab = testPlugin.model as TestSurveyTabViewModel;
  const themeEditor = testSurveyTab.themeEditorSurvey;
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(themeEditor.data["--sjs-editor-background"]).toEqual("#f9f9f9");

  questionBackgroundTransparency.value = 60;
  expect(themeEditor.data["--sjs-editor-background"]).toEqual("rgba(249, 249, 249, 0.6)");

  themeEditor.getQuestionByName("--background-dim-light").value = "#f7f7f7";
  expect(themeEditor.data["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
});

test("Theme builder: survey settings", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const testSurveyTab = testPlugin.model as TestSurveyTabViewModel;
  const themeEditor = testSurveyTab.themeEditorSurvey;
  const simulatorSurvey = testSurveyTab.survey;

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
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const testSurveyTab = testPlugin.model as TestSurveyTabViewModel;
  const themeEditor = testSurveyTab.themeEditorSurvey;
  const themePalette = themeEditor.getQuestionByName("themePalette");
  const primaryColor = themeEditor.getQuestionByName("--primary");
  const backgroundDimColor = themeEditor.getQuestionByName("--background-dim");

  expect(themePalette.value).toEqual("light");
  expect(primaryColor.value).toEqual("#19b394");
  expect(backgroundDimColor.value).toEqual("#f3f3f3");

  themePalette.value = "dark";
  expect(primaryColor.value).toEqual("#1ab7fa");
  expect(backgroundDimColor.value).toEqual("#4d4d4d");
});

test("Theme builder: composite question fontSettings", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const testSurveyTab = testPlugin.model as TestSurveyTabViewModel;
  const themeEditor = testSurveyTab.themeEditorSurvey;
  const simulator = testSurveyTab.simulator;
  const surveyTitleFontSettings = themeEditor.getQuestionByName("surveyTitle");

  expect(simulator.themeVariables["--sjs-font-surveyTitle-family"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-surveyTitle-weight"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-surveyTitle-color"]).toBeUndefined();
  expect(simulator.themeVariables["--sjs-font-surveyTitle-size"]).toBeUndefined();

  surveyTitleFontSettings.value = {family: 'Open Sans', weight: 'semiBold', color: '#161616', size: 32};

  expect(simulator.themeVariables["--sjs-font-surveyTitle-family"]).toEqual('Open Sans');
  expect(simulator.themeVariables["--sjs-font-surveyTitle-weight"]).toEqual("semiBold");
  expect(simulator.themeVariables["--sjs-font-surveyTitle-color"]).toEqual("#161616");
  expect(simulator.themeVariables["--sjs-font-surveyTitle-size"]).toEqual(32);
});