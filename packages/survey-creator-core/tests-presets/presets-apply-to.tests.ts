import { CreatorTester } from "../tests/creator-tester";
import { CreatorPresets, IPreset, PredefinedCreatorPresets, UIPreset } from "../src/ui-presets-creator/presets";
import { CreatorPresetsModel } from "../src/ui-presets-creator/creator-presets-model";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { UIPresetEditor } from "../src/ui-preset-editor/presets-plugin";

import { Basic } from "../src/ui-presets/basic";
import { Advanced } from "../src/ui-presets/advanced";
import { Expert } from "../src/ui-presets/expert";

const originalCreatorPresets: { [key: string]: IPreset } = {};
let originalPredefinedPresets: string[] = [];

beforeEach(() => {
  Object.keys(originalCreatorPresets).forEach(key => delete originalCreatorPresets[key]);
  Object.keys(CreatorPresets).forEach(key => {
    originalCreatorPresets[key] = CreatorPresets[key];
    delete CreatorPresets[key];
  });
  originalPredefinedPresets = [...PredefinedCreatorPresets];
  PredefinedCreatorPresets.length = 0;
});

afterEach(() => {
  Object.keys(CreatorPresets).forEach(key => delete CreatorPresets[key]);
  Object.assign(CreatorPresets, originalCreatorPresets);
  PredefinedCreatorPresets.length = 0;
  PredefinedCreatorPresets.push(...originalPredefinedPresets);
});

test("CreatorPresetsModel: setPresetNameSilent sets name without firing onPresetSelected", () => {
  PredefinedCreatorPresets.push("basic", "expert");
  CreatorPresets["basic"] = Basic;
  CreatorPresets["expert"] = Expert;

  const model = new CreatorPresetsModel();
  let firedCount = 0;
  model.onPresetSelected.add(() => { firedCount++; });

  model.setPresetNameSilent("basic");

  expect(model.presetName).toBe("basic");
  expect(firedCount).toBe(0);
});

test("CreatorPresetsModel: setPresetNameSilent does nothing when same value", () => {
  PredefinedCreatorPresets.push("basic");
  CreatorPresets["basic"] = Basic;

  const model = new CreatorPresetsModel();
  model.setPresetNameSilent("basic");
  expect(model.presetName).toBe("basic");

  let firedCount = 0;
  model.onPresetSelected.add(() => { firedCount++; });
  model.setPresetNameSilent("basic");
  expect(firedCount).toBe(0);
});

test("CreatorPresetsModel: setting presetName normally still fires onPresetSelected", () => {
  PredefinedCreatorPresets.push("basic");
  CreatorPresets["basic"] = Basic;

  const model = new CreatorPresetsModel();
  let firedPreset: IPreset = undefined;
  model.onPresetSelected.add((sender, options) => { firedPreset = options.preset; });

  model.presetName = "basic";

  expect(firedPreset).toBe(Basic);
});

test("UIPreset.applyTo sets creator.activePresetName", () => {
  PredefinedCreatorPresets.push("basic");
  CreatorPresets["basic"] = Basic;

  const creator = new CreatorTester({ showCreatorThemeSettings: true });
  const preset = new UIPreset(Basic);
  expect(creator.activePresetName).toBeFalsy();

  preset.applyTo(creator);

  expect(creator.activePresetName).toBe("basic");
});

test("UIPreset.applyTo does not set activePresetName when name is empty", () => {
  const creator = new CreatorTester({ showCreatorThemeSettings: true });
  const preset = new UIPreset({ toolbox: { showCategoryTitles: true } });
  expect(preset.name).toBe("");

  preset.applyTo(creator);

  expect(creator.activePresetName).toBeFalsy();
});

test("UIPreset.applyTo updates preset dropdown in designer plugin", () => {
  PredefinedCreatorPresets.push("basic", "expert");
  CreatorPresets["basic"] = Basic;
  CreatorPresets["expert"] = Expert;

  const creator = new CreatorTester({ showCreatorThemeSettings: true });
  const designerPlugin = creator.getPlugin("designer") as TabDesignerPlugin;
  const presetModel: CreatorPresetsModel = (designerPlugin as any).presetModel;
  expect(presetModel).toBeTruthy();
  expect(presetModel.presetName).toBe("");

  const preset = new UIPreset(Basic);
  preset.applyTo(creator);

  expect(presetModel.presetName).toBe("basic");
});

test("UIPreset.applyTo does not re-apply preset through onPresetSelected", () => {
  PredefinedCreatorPresets.push("basic", "expert");
  CreatorPresets["basic"] = Basic;
  CreatorPresets["expert"] = Expert;

  const creator = new CreatorTester({ showCreatorThemeSettings: true });
  const designerPlugin = creator.getPlugin("designer") as TabDesignerPlugin;
  const presetModel: CreatorPresetsModel = (designerPlugin as any).presetModel;

  let presetSelectedCount = 0;
  presetModel.onPresetSelected.add(() => { presetSelectedCount++; });

  const preset = new UIPreset(Basic);
  preset.applyTo(creator);

  expect(presetModel.presetName).toBe("basic");
  expect(presetSelectedCount).toBe(0);
});

test("Selecting preset from dropdown updates creator.activePresetName", () => {
  PredefinedCreatorPresets.push("basic", "expert");
  CreatorPresets["basic"] = Basic;
  CreatorPresets["expert"] = Expert;

  const creator = new CreatorTester({ showCreatorThemeSettings: true });
  expect(creator.activePresetName).toBeFalsy();

  const designerPlugin = creator.getPlugin("designer") as TabDesignerPlugin;
  const presetModel: CreatorPresetsModel = (designerPlugin as any).presetModel;

  presetModel.presetName = "expert";

  expect(creator.activePresetName).toBe("expert");
});

test("UIPreset.applyTo then selecting different preset from dropdown works correctly", () => {
  PredefinedCreatorPresets.push("basic", "expert");
  CreatorPresets["basic"] = Basic;
  CreatorPresets["expert"] = Expert;

  const creator = new CreatorTester({ showCreatorThemeSettings: true });
  const designerPlugin = creator.getPlugin("designer") as TabDesignerPlugin;
  const presetModel: CreatorPresetsModel = (designerPlugin as any).presetModel;

  const preset = new UIPreset(Basic);
  preset.applyTo(creator);
  expect(presetModel.presetName).toBe("basic");
  expect(creator.activePresetName).toBe("basic");

  presetModel.presetName = "expert";
  expect(presetModel.presetName).toBe("expert");
  expect(creator.activePresetName).toBe("expert");
});

test("UIPresetEditor.activate should not reset creator to default configuration after applyTo", () => {
  PredefinedCreatorPresets.push("basic", "expert");
  CreatorPresets["basic"] = Basic;
  CreatorPresets["expert"] = Expert;

  const creator = new CreatorTester({ showCreatorThemeSettings: true });
  const preset = new UIPreset(Basic);
  preset.applyTo(creator);

  const tabIdsBefore = creator.tabs.map(t => t.id);
  expect(tabIdsBefore).toContain("designer");
  expect(tabIdsBefore).toContain("preview");
  expect(tabIdsBefore).not.toContain("logic");

  const plugin = new UIPresetEditor(creator);
  plugin.activate();

  const tabIdsAfter = creator.tabs.map(t => t.id);
  expect(tabIdsAfter).toContain("designer");
  expect(tabIdsAfter).toContain("preview");
  expect(tabIdsAfter).not.toContain("logic");

  plugin.deactivate();
});

test("UIPresetEditor.activate preserves applied preset's toolbox configuration", () => {
  PredefinedCreatorPresets.push("basic", "expert");
  CreatorPresets["basic"] = Basic;
  CreatorPresets["expert"] = Expert;

  const creator = new CreatorTester({ showCreatorThemeSettings: true });
  const preset = new UIPreset(Basic);
  preset.applyTo(creator);

  const toolboxItemsBefore = creator.toolbox.items.map(i => i.name);
  expect(toolboxItemsBefore.length).toBeGreaterThan(0);

  const plugin = new UIPresetEditor(creator);
  plugin.activate();

  const toolboxItemsAfter = creator.toolbox.items.map(i => i.name);
  expect(toolboxItemsAfter).toEqual(toolboxItemsBefore);

  plugin.deactivate();
});
