import { UIPresetEditor } from "../src/ui-preset-editor/presets-plugin";
import { CreatorBase } from "../src/creator-base";
import { UIPreset, CreatorPresets, IPreset, PredefinedCreatorPresets } from "../src/ui-presets-creator/presets";

const originalCreatorPresets: { [key: string]: IPreset } = {};
const originalPredefinedPresets: string[] = [];

beforeEach(() => {
  Object.keys(CreatorPresets).forEach(key => {
    originalCreatorPresets[key] = CreatorPresets[key];
    delete CreatorPresets[key];
  });
  originalPredefinedPresets.push(...PredefinedCreatorPresets);
  PredefinedCreatorPresets.length = 0;
});

afterEach(() => {
  Object.keys(CreatorPresets).forEach(key => delete CreatorPresets[key]);
  Object.assign(CreatorPresets, originalCreatorPresets);
  PredefinedCreatorPresets.length = 0;
  PredefinedCreatorPresets.push(...originalPredefinedPresets);
});

describe("UIPresetEditor API", () => {
  beforeEach(() => {
    PredefinedCreatorPresets.push("basic", "advanced");
    CreatorPresets["basic"] = { name: "basic", json: {}, visible: true };
    CreatorPresets["advanced"] = { name: "advanced", json: {}, visible: true };
  });

  describe("addPreset", () => {
    test("should add preset from IPreset object", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);

      plugin.addPreset({ name: "custom1", json: { toolbox: { showCategoryTitles: true } } });

      expect(CreatorPresets["custom1"]).toBeDefined();
      expect(CreatorPresets["custom1"].json).toEqual({ toolbox: { showCategoryTitles: true } });
      expect(plugin.availablePresets.some(p => p.name === "custom1")).toBe(true);
    });
  });

  describe("removePreset", () => {
    test("should remove preset by name", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      plugin.addPreset({ name: "toRemove", json: {} });

      plugin.removePreset("toRemove");

      expect(CreatorPresets["toRemove"]).toBeUndefined();
      expect(plugin.availablePresets.some(p => p.name === "toRemove")).toBe(false);
    });

    test("should remove preset by IPreset object", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      const preset: IPreset = { name: "toRemoveByPreset", json: {} };
      plugin.addPreset(preset);

      plugin.removePreset(preset);

      expect(CreatorPresets["toRemoveByPreset"]).toBeUndefined();
    });
  });

  describe("getPreset", () => {
    test("should return preset by name", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);

      const preset = plugin.getPreset("basic");

      expect(preset).toBeDefined();
      expect(preset.name).toBe("basic");
    });

    test("should return undefined for non-existent preset", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);

      const preset = plugin.getPreset("nonExistent");

      expect(preset).toBeUndefined();
    });
  });

  describe("preset property", () => {
    test("should return undefined when preset selector is not set", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);

      const current = plugin.preset;

      expect(current).toBeUndefined();
    });

    test("should return current preset when selector is set", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      plugin["presetsManager"].presetSelector = { value: "basic" } as any;
      plugin.activate();

      const current = plugin.preset;

      expect(current).toBeDefined();
      expect(current.name).toBe("basic");
    });
  });

  describe("savePresetFunc", () => {
    test("should call savePresetFunc with saveNo and callback", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      plugin.activate();
      plugin.savePresetFunc = (saveNo, callback) => {
        expect(saveNo).toBe(1);
        callback(saveNo, true);
      };

      plugin["performSave"]();

      expect(plugin["saveCount"]).toBe(1);
    });

    test("savePresetFunc receives incremental saveNo", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      plugin.activate();
      const saveNumbers: number[] = [];
      plugin.savePresetFunc = (saveNo, callback) => {
        saveNumbers.push(saveNo);
        callback(saveNo, true);
      };

      plugin["performSave"]();
      plugin["performSave"]();

      expect(saveNumbers).toEqual([1, 2]);
    });

    test("savePresetFunc does not proceed on failure", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      plugin.activate();
      plugin.savePresetFunc = (saveNo, callback) => {
        callback(saveNo, false);
      };

      plugin["performSave"]();

      expect(plugin["saveCount"]).toBe(1);
    });
  });

  describe("availablePresets", () => {
    test("should return array with name, visible", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);

      const presets = plugin.availablePresets;

      expect(Array.isArray(presets)).toBe(true);
      expect(presets.length).toBeGreaterThan(0);
      presets.forEach(p => {
        expect(p).toHaveProperty("name");
        expect(p).toHaveProperty("visible");
      });
    });

    test("availablePresets should update when addPreset is called", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      const initialCount = plugin.availablePresets.length;

      plugin.addPreset({ name: "newPreset", json: {} });

      expect(plugin.availablePresets.length).toBe(initialCount + 1);
      expect(plugin.availablePresets.some(p => p.name === "newPreset")).toBe(true);
    });

    test("availablePresets should update when removePreset is called", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      plugin.addPreset({ name: "tempPreset", json: {} });
      const countBefore = plugin.availablePresets.length;

      plugin.removePreset("tempPreset");

      expect(plugin.availablePresets.length).toBe(countBefore - 1);
      expect(plugin.availablePresets.some(p => p.name === "tempPreset")).toBe(false);
    });
  });

  describe("onPresetListSaved", () => {
    test("should fire when presetsManager.onPresetListSaved is invoked", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);

      const receivedPresets: any[] = [];
      plugin.onPresetListSaved.add((sender, opt) => {
        receivedPresets.push(...opt.presets);
      });

      plugin["presetsManager"].onPresetListSaved([
        { name: "basic", visible: true, removable: false, sortable: false },
        { name: "advanced", visible: false, removable: false, sortable: false }
      ]);

      expect(receivedPresets.length).toBe(2);
      expect(receivedPresets[0].name).toBe("basic");
      expect(receivedPresets[1].name).toBe("advanced");
    });
  });
});
