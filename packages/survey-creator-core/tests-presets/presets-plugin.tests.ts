import { CreatorTester } from "../tests/creator-tester";
import { UIPresetEditor } from "../src/ui-preset-editor/presets-plugin";
import { CreatorPresets, ICreatorPresetConfig, PredefinedCreatorPresets, UIPreset } from "../src/ui-presets-creator/presets";
import { Basic } from "../src/ui-presets/basic";
import { Expert } from "../src/ui-presets/expert";

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

