import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";
import { CreatorThemeModel } from "../../src/creator-theme/creator-theme-model";
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