import { QuestionDropdownModel } from "survey-core";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";
import { CreatorThemeModel } from "../../src/creator-theme/creator-theme-model";
import { CreatorThemes, PredefinedCreatorThemes, registerCreatorTheme } from "../../src/creator-theme/creator-themes";
import { CreatorTester } from "../creator-tester";
import Default from "../../src/themes/default-light";
import { legacyCssVariables } from "../../src/themes/legacy-vars";

test("onCreatorThemePropertyChanged event", (): any => {
  const creator: CreatorTester = new CreatorTester();
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"] as CreatorThemeModel;
  let modificationsLog = "";
  creator.onCreatorThemePropertyChanged.add((s, o) => {
    modificationsLog += `->THEME_MODIFIED ${o.name} - ${o.value}`;
  });
  expect(modificationsLog).toBe("");

  themeModel["--sjs2-color-project-accent-600"] = "#ff0000";
  expect(modificationsLog).toBe("->THEME_MODIFIED --sjs2-color-project-accent-600 - #ff0000");
});

test("registerCreatorTheme function", (): any => {
  const customThemeName = "customLight";
  const customCssVariables = {
    "--sjs2-color-project-brand-600": "red",
    "--sjs2-color-project-accent-600": "orange",
  };

  registerCreatorTheme({
    themeName: customThemeName,
    cssVariables: { ...customCssVariables }
  });

  try {
    const creator: CreatorTester = new CreatorTester();
    const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
    const themeChooser = designerPlugin["themePropertyGridViewModel"].survey.getQuestionByName("themeName") as QuestionDropdownModel;
    expect(themeChooser.choices).toHaveLength(2);
    expect(themeChooser.choices[1].value).toBe(customThemeName);
    //expect(creator.creatorTheme).toBeUndefined();
    //expect(creator.themeVariables).toStrictEqual({});

    themeChooser.value = customThemeName;
    expect(creator.creatorTheme.themeName).toBe(customThemeName);
    expect(creator.themeVariables).toStrictEqual({ ...Default.cssVariables, ...customCssVariables });
  } finally {
    PredefinedCreatorThemes.splice(PredefinedCreatorThemes.indexOf(customThemeName), 1);
    delete CreatorThemes[customThemeName];
  }
});

test("check legacy vars has no ambiguous values", (): any => {
  const legacyVars: any = legacyCssVariables;
  const duplicatedKeys: any[] = [];
  const valuesHash: { [key: string]: boolean } = {};
  for (const key in legacyVars) {
    const value = legacyVars[key];
    if (valuesHash[value] && !duplicatedKeys.includes(key)) {
      duplicatedKeys.push(key);
    }
    valuesHash[value] = true;
  }
  expect(duplicatedKeys).toHaveLength(0);
});