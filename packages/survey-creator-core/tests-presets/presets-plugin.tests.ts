import { CreatorTester } from "../tests/creator-tester";
import { UIPresetEditor } from "../src/ui-preset-editor/presets-plugin";
import { CreatorPresets, IPreset, PredefinedCreatorPresets } from "../src/ui-presets-creator/presets";
import { Basic } from "../src/ui-presets/basic";
import { Expert } from "../src/ui-presets/expert";

const originalCreatorPresets: { [key: string]: IPreset } = {};
let originalPredefinedPresets: string[] = [];

class UIPresetEditorTester extends UIPresetEditor {
  public performSaveTest() {
    this.performSave();
  }
  public discardUnsavedTest() {
    this.discardUnsaved();
  }
}

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

test("should call performSave for custom preset", () => {
  PredefinedCreatorPresets.push("basic");
  CreatorPresets["basic"] = { name: "basic", json: {}, visible: true };

  const creator = new CreatorTester();
  const plugin = new UIPresetEditor(creator);
  plugin.addPreset({ name: "custom1", json: {}, visible: true });
  const presetsManager = (plugin as any)["presetsManager"];
  presetsManager.presetSelector = { value: "custom1" } as any;
  plugin.activate();

  const performSaveSpy = jest.spyOn(plugin as any, "performSave").mockImplementation(() => { });
  const saveAsSpy = jest.spyOn(presetsManager, "saveAs").mockImplementation(() => { });

  (plugin as any)["saveOrSaveAs"]();

  expect(performSaveSpy).toHaveBeenCalledTimes(1);
  expect(saveAsSpy).not.toHaveBeenCalled();
  plugin.deactivate();

  presetsManager.presetSelector = { value: "basic" } as any;
  plugin.activate();

  (plugin as any)["saveOrSaveAs"]();

  expect(saveAsSpy).toHaveBeenCalledTimes(1);
  expect(performSaveSpy).toHaveBeenCalledTimes(1); // called
  plugin.deactivate();
});

test("made changes, save, made more changes and discard to saved", () => {
  const creator = new CreatorTester();
  const plugin = new UIPresetEditorTester(creator);
  plugin.activate();
  plugin.model.json = { tabs: { items: [{ name: "designer" }] } };
  plugin.performSaveTest();
  expect(plugin.model.json.tabs.items).toEqual([{ name: "designer" }]);
  plugin.model.json = { tabs: { items: [{ name: "designer" }, { name: "preview" }] } };
  expect(plugin.model.json.tabs.items).toEqual([{ name: "designer" }, { name: "preview" }]);
  plugin.discardUnsavedTest();
  expect(plugin.model.json.tabs.items).toEqual([{ name: "designer" }]);
});

test("Selecting Basic preset should update property grid on Property Grid page", () => {
  PredefinedCreatorPresets.push("expert", "basic");
  CreatorPresets["expert"] = Expert;
  CreatorPresets["basic"] = Basic;

  const creator = new CreatorTester();
  const plugin = new UIPresetEditor(creator);
  plugin.activate();

  const survey = plugin.model.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid");
  survey.setValue("propertyGrid_selector", "survey");

  const propGridCategories = survey.getQuestionByName("propertyGrid_categories");
  const expertCategories = propGridCategories.value;
  expect(expertCategories.length).toBeGreaterThan(1);

  const presetsManager = (plugin as any)["presetsManager"];
  presetsManager.selectPresetCallback(CreatorPresets["basic"]);

  const basicCategories = propGridCategories.value;
  expect(basicCategories).toHaveLength(1);
  expect(basicCategories[0].properties.map((p: any) => p.name)).toEqual(
    Basic.json.propertyGrid.definition.classes.survey.properties
  );

  plugin.deactivate();
});

