import { QuestionMatrixDynamicModel } from "survey-core";
import { CreatorPresetEditorModel } from "../src/presets/presets-editor";
import { UIPresetEditor } from "../src/presets/presets-plugin";
import { CreatorBase } from "../src/creator-base";
//import "survey-creator-core/i18n/german";
//import "survey-creator-core/i18n/italian";
//import "survey-creator-core/i18n/french";

test("Preset edit model, create pages", () => {
  const creator = new CreatorBase();
  const plugin = new UIPresetEditor(creator);
  let v;
  plugin.onPresetSaved.add((_, opt) => {
    v = opt.preset.toolbox.showCategoryTitles;
  });
  plugin.activate();
  const q = plugin.model.model.getQuestionByName("toolbox_showCategoryTitles");
  q.value = true;
  expect(v).toBe(undefined);
  plugin["saveHandler"]();
  expect(v).toBe(true);
});
