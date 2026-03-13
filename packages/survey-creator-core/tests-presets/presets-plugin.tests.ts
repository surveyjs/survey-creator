import { CreatorTester } from "../tests/creator-tester";
import { UIPresetEditor } from "../src/ui-preset-editor/presets-plugin";
import { CreatorPresets, ICreatorPresetConfig, PredefinedCreatorPresets, UIPreset, registerUIPreset } from "../src/ui-presets-creator/presets";
import { Basic } from "../src/ui-presets/basic";
import { Advanced } from "../src/ui-presets/advanced";

const originalCreatorPresets: { [key: string]: ICreatorPresetConfig } = {};
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

test("UIPresetEditor: pagesAction.title falls back to empty string when selected item has no title", () => {
  const creator = new CreatorTester();
  const plugin = new UIPresetEditor(creator);

  plugin.activate();

  const pagesAction: any = plugin.model.navigationBar.getActionById("presets-pages");
  expect(pagesAction).toBeTruthy();

  const pagesList: any = (plugin as any)["pagesList"];
  expect(pagesList).toBeTruthy();
  expect(pagesList.actions.length).toBeGreaterThan(0);

  const surveyModel: any = plugin.model.model;
  surveyModel.currentPage = surveyModel.pages[1];

  expect(pagesAction.title).toBe(surveyModel.currentPage.navigationTitle);
  plugin.deactivate();
});

test("UIPresetEditor: check status action on editor model json changed", () => {
  const creator = new CreatorTester();
  const plugin = new UIPresetEditor(creator);

  plugin.activate();

  const statusAcion: any = plugin.model.navigationBar.getActionById("presets-status");
  expect(statusAcion).toBeTruthy();
  expect(statusAcion.visible).toBeFalsy();

  expect(plugin.model.model.getQuestionByName("propertyGrid_selector").value).toBe("survey");
  plugin.model.model.getQuestionByName("propertyGrid_selector").value = "page";
  expect(statusAcion.visible).toBeFalsy();

  plugin.model.model.getQuestionByName("propertyGrid_categories").value = [];
  expect(statusAcion.visible).toBeTruthy();
  expect(statusAcion.title).toBe("Unsaved changes");
  plugin.deactivate();
});

test("UIPresetEditor: hidePresets should not throw when only Basic and Advanced presets are registered", () => {
  registerUIPreset(Basic);
  registerUIPreset(Advanced);

  const creator = new CreatorTester();
  const plugin = new UIPresetEditor(creator);
  plugin.activate();

  expect(() => {
    (plugin as any)["hidePresets"]();
  }).not.toThrow();

  plugin.deactivate();
});

describe("UIPresetEditor: saveClicked", () => {
  test("should call performSave for custom preset", () => {
    PredefinedCreatorPresets.push("basic");
    CreatorPresets["basic"] = { presetName: "basic", json: {}, visible: true };

    const creator = new CreatorTester();
    const plugin = new UIPresetEditor(creator);
    plugin.addPreset(new UIPreset({ presetName: "custom1", json: {}, visible: true }));
    (plugin as any)["presetsManager"].presetSelector = { value: "custom1" } as any;
    plugin.activate();

    const performSaveSpy = jest.spyOn(plugin as any, "performSave").mockImplementation(() => { });
    const saveAsHandlerSpy = jest.spyOn(plugin as any, "saveAsHandler").mockImplementation(() => { });

    (plugin as any)["saveOrSaveAs"]();

    expect(performSaveSpy).toHaveBeenCalledTimes(1);
    expect(saveAsHandlerSpy).not.toHaveBeenCalled();
    plugin.deactivate();

    (plugin as any)["presetsManager"].presetSelector = { value: "basic" } as any;
    plugin.activate();

    (plugin as any)["saveOrSaveAs"]();

    expect(saveAsHandlerSpy).toHaveBeenCalledTimes(1); //not changed
    expect(performSaveSpy).toHaveBeenCalledTimes(1); // called
    plugin.deactivate();
  });
});
test("ui preset registration", () => {
  const creator0 = new CreatorTester();
  const sideBarPageModel0 = creator0.sidebar.pages.filter(page => page.id === "creatorTheme")[0].componentData;
  expect(sideBarPageModel0.elements).toHaveLength(1);
  registerUIPreset(
    {
      presetName: "basic",
      json: {
        options: {
          allowZoom: false,
        }
      }
    }
  );
  registerUIPreset(
    {
      presetName: "advanced",
      json: {
        options: {
          allowZoom: true,
        }
      }
    }
  );
  const creator = new CreatorTester();
  const sideBarPageModel = creator.sidebar.pages.filter(page => page.id === "creatorTheme")[0].componentData;
  expect(sideBarPageModel.elements).toHaveLength(2);
  const survey = sideBarPageModel.elements[0].componentData.model.survey;
  expect(survey.getQuestionByName("presetName").choices.map(c => [c.value, c.text])).toEqual([["basic", "Basic"], ["advanced", "Advanced"]]);

  expect(creator.allowZoom).toBeTruthy();
  survey.setValue("presetName", "basic");
  expect(creator.allowZoom).toBeFalsy();

  survey.setValue("presetName", "advanced");
  expect(creator.allowZoom).toBeTruthy();
});
