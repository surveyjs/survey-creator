import { QuestionDropdownModel } from "survey-core";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";
import { CreatorThemeModel } from "../../src/creator-theme/creator-theme-model";
import { CreatorThemes, PredefinedCreatorThemes, registerCreatorTheme } from "../../src/creator-theme/creator-themes";
import { CreatorTester } from "../creator-tester";

test("onCreatorThemePropertyChanged event", (): any => {
  const creator: CreatorTester = new CreatorTester();
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"] as CreatorThemeModel;
  let modificationsLog = "";
  creator.onCreatorThemePropertyChanged.add((s, o) => {
    modificationsLog += `->THEME_MODIFIED ${o.name} - ${o.value}`;
  });
  expect(modificationsLog).toBe("");

  themeModel["--sjs-secondary-background-500"] = "#ff0000";
  expect(modificationsLog).toBe("->THEME_MODIFIED --sjs-secondary-background-500 - #ff0000");
});

test("registerCreatorTheme function", (): any => {
  const customThemeName = "customLight";
  const customCssVariables = {
    "--sjs-primary-background-500": "red",
    "--sjs-secondary-background-500": "orange",
  };

  registerCreatorTheme({
    themeName: customThemeName,
    cssVariables: { ...customCssVariables }
  });

  try {
    const creator: CreatorTester = new CreatorTester();
    const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
    const themeChooser = designerPlugin["themePropertyGrid"].survey.getQuestionByName("themeName") as QuestionDropdownModel;
    expect(themeChooser.choices).toHaveLength(2);
    expect(themeChooser.choices[1].value).toBe(customThemeName);
    expect(creator.creatorTheme).toBeUndefined();
    expect(creator.themeVariables).toStrictEqual({});

    themeChooser.value = customThemeName;
    expect(creator.creatorTheme.themeName).toBe(customThemeName);
    expect(creator.themeVariables).toStrictEqual({ ...customCssVariables });
  } finally {
    PredefinedCreatorThemes.splice(PredefinedCreatorThemes.indexOf(customThemeName), 1);
    delete CreatorThemes[customThemeName];
  }
});