import { UIPresetEditor } from "../src/ui-preset-editor/presets-plugin";
import { CreatorBase } from "../src/creator-base";
import { UIPreset, CreatorPresets, ICreatorPresetConfig, PredefinedCreatorPresets } from "../src/ui-presets-creator/presets";

const originalCreatorPresets: { [key: string]: ICreatorPresetConfig } = {};
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
    CreatorPresets["basic"] = { presetName: "basic", json: {}, visible: true };
    CreatorPresets["advanced"] = { presetName: "advanced", json: {}, visible: true };
  });

  describe("addPreset", () => {
    test("should add preset from UIPreset", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      const preset = new UIPreset({ presetName: "custom1", json: { toolbox: { showCategoryTitles: true } } });

      plugin.addPreset(preset);

      expect(CreatorPresets["custom1"]).toBeDefined();
      expect(CreatorPresets["custom1"].json).toEqual({ toolbox: { showCategoryTitles: true } });
      expect(plugin.presets.some(p => p.name === "custom1")).toBe(true);
    });
  });

  describe("removePreset", () => {
    test("should remove preset by name", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      plugin.addPreset(new UIPreset({ presetName: "toRemove", json: {} }));

      plugin.removePreset("toRemove");

      expect(CreatorPresets["toRemove"]).toBeUndefined();
      expect(plugin.presets.some(p => p.name === "toRemove")).toBe(false);
    });

    test("should remove preset by UIPreset instance", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      const preset = new UIPreset({ presetName: "toRemoveByPreset", json: {} });
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
      expect(preset.presetName).toBe("basic");
    });

    test("should return undefined for non-existent preset", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);

      const preset = plugin.getPreset("nonExistent");

      expect(preset).toBeUndefined();
    });
  });

  describe("getCurrentPreset", () => {
    test("should return undefined when preset selector is not set", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);

      const current = plugin.getCurrentPreset();

      expect(current).toBeUndefined();
    });

    test("should return current preset when selector is set", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      plugin["presetsManager"].presetSelector = { value: "basic" } as any;
      plugin.activate();

      const current = plugin.getCurrentPreset();

      expect(current).toBeDefined();
      expect(current.presetName).toBe("basic");
    });
  });

  describe("savePresetFunc", () => {
    test("should call savePresetFunc when set", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      plugin.activate();
      plugin.savePresetFunc = (saveNo, callback) => {
        expect(saveNo).toBe(0);
        callback();
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
        callback();
      };

      plugin["performSave"]();
      plugin["performSave"]();

      expect(saveNumbers).toEqual([0, 1]);
    });
  });

  describe("presets", () => {
    test("should return array with name, visible, removable, sortable", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);

      const presets = plugin.presets;

      expect(Array.isArray(presets)).toBe(true);
      expect(presets.length).toBeGreaterThan(0);
      presets.forEach(p => {
        expect(p).toHaveProperty("name");
        expect(p).toHaveProperty("visible");
      });
    });

    test("presets should update when addPreset is called", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      const initialCount = plugin.presets.length;

      plugin.addPreset(new UIPreset({ presetName: "newPreset", json: {} }));

      expect(plugin.presets.length).toBe(initialCount + 1);
      expect(plugin.presets.some(p => p.name === "newPreset")).toBe(true);
    });

    test("presets should update when removePreset is called", () => {
      const creator = new CreatorBase();
      const plugin = new UIPresetEditor(creator);
      plugin.addPreset(new UIPreset({ presetName: "tempPreset", json: {} }));
      const countBefore = plugin.presets.length;

      plugin.removePreset("tempPreset");

      expect(plugin.presets.length).toBe(countBefore - 1);
      expect(plugin.presets.some(p => p.name === "tempPreset")).toBe(false);
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
