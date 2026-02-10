import { ListModel, QuestionDropdownModel, SurveyModel, settings, IAction, QuestionMatrixDynamicModel, Action, MatrixDynamicRowModel } from "survey-core";
import { PresetsManager } from "../src/ui-preset-editor/presets-manager";
import { CreatorPresets, ICreatorPresetConfig, PredefinedCreatorPresets } from "../src/ui-presets-creator/presets";
import { getLocString } from "../src/editorLocalization";

jest.mock("survey-core", () => {
  const originalModule = jest.requireActual("survey-core");
  return {
    ...originalModule,
    settings: {
      ...originalModule.settings,
      showDialog: jest.fn()
    }
  };
});

describe("PresetsManager", () => {
  let manager: PresetsManager;
  let mockPresetsList: ListModel;
  let mockPresetSelector: QuestionDropdownModel;
  let mockSelectPresetCallback: jest.Mock;
  let mockShowDialog: jest.SpyInstance;

  const originalCreatorPresets = { ...CreatorPresets };
  const originalPredefinedPresets = [...PredefinedCreatorPresets];

  beforeEach(() => {
    Object.keys(CreatorPresets).forEach(key => delete CreatorPresets[key]);
    PredefinedCreatorPresets.length = 0;

    mockPresetsList = {
      setItems: jest.fn() as any,
      selectedItem: null,
      onItemClick: jest.fn(),
      getActionById: jest.fn()
    } as any;

    mockPresetSelector = {
      choices: []
    } as any;

    mockSelectPresetCallback = jest.fn();

    manager = new PresetsManager();
    manager.presetsList = mockPresetsList;
    manager.presetSelector = mockPresetSelector;
    manager.selectPresetCallback = mockSelectPresetCallback;

    mockShowDialog = jest.spyOn(settings, "showDialog");
  });

  afterEach(() => {
    jest.clearAllMocks();
    Object.keys(CreatorPresets).forEach(key => delete CreatorPresets[key]);
    Object.assign(CreatorPresets, originalCreatorPresets);
    PredefinedCreatorPresets.length = 0;
    PredefinedCreatorPresets.push(...originalPredefinedPresets);
  });

  describe("Initialization and status management", () => {
    test("should create instance with initial state", () => {
      const newManager = new PresetsManager();
      expect(newManager).toBeInstanceOf(PresetsManager);
      expect(newManager.isSaved).toBe(true);
      expect(newManager.presetsList).toBeUndefined();
      expect(newManager.presetSelector).toBeUndefined();
    });

    test("should set saved status", () => {
      expect(manager.isSaved).toBe(true);

      manager.setStatus(true);
      expect(manager.isSaved).toBe(false);

      manager.setStatus(false);
      expect(manager.isSaved).toBe(true);
    });

    test("should work correctly with unsaved flag", () => {
      manager.setStatus(true);
      expect(manager.isSaved).toBe(false);

      manager.setStatus(false);
      expect(manager.isSaved).toBe(true);
    });
  });

  describe("Adding and removing presets", () => {
    test("should add custom preset", () => {
      const preset: ICreatorPresetConfig = {
        presetName: "custom1",
        json: { toolbox: { showCategoryTitles: true } }
      };

      manager.addPreset(preset);

      expect(CreatorPresets["custom1"]).toBeDefined();
      expect(CreatorPresets["custom1"]).toEqual(preset);
      expect(mockPresetsList.setItems).toHaveBeenCalled();
    });

    test("should call updateMenu after adding preset", () => {
      const preset: ICreatorPresetConfig = {
        presetName: "custom2",
        json: {}
      };

      manager.addPreset(preset);

      expect(mockPresetsList.setItems).toHaveBeenCalled();
    });

    test("should remove custom preset", () => {
      const preset: ICreatorPresetConfig = {
        presetName: "custom3",
        json: {}
      };

      manager.addPreset(preset);
      expect(CreatorPresets["custom3"]).toBeDefined();

      manager.removePreset("custom3");

      expect(CreatorPresets["custom3"]).toBeUndefined();
      expect(mockPresetsList.setItems).toHaveBeenCalled();
    });

    test("should call updateMenu after removing preset", () => {
      const preset: ICreatorPresetConfig = {
        presetName: "custom4",
        json: {}
      };

      manager.addPreset(preset);
      jest.clearAllMocks();

      manager.removePreset("custom4");

      expect(mockPresetsList.setItems).toHaveBeenCalled();
    });

    test("should handle removal of non-existent preset", () => {
      expect(() => {
        manager.removePreset("non-existent");
      }).not.toThrow();
      expect(mockPresetsList.setItems).toHaveBeenCalled();
    });

    test("should add multiple presets sequentially", () => {
      const preset1: ICreatorPresetConfig = { presetName: "preset1", json: {} };
      const preset2: ICreatorPresetConfig = { presetName: "preset2", json: {} };

      manager.addPreset(preset1);
      manager.addPreset(preset2);

      expect(CreatorPresets["preset1"]).toBeDefined();
      expect(CreatorPresets["preset2"]).toBeDefined();
    });
  });

  describe("Updating presets menu", () => {
    beforeEach(() => {
      PredefinedCreatorPresets.push("basic", "advanced");
      CreatorPresets["basic"] = { presetName: "basic", json: {}, visible: true };
      CreatorPresets["advanced"] = { presetName: "advanced", json: {}, visible: false };
    });

    test("should update menu when update is called", () => {
      manager.update();

      expect(mockPresetsList.setItems).toHaveBeenCalled();
      expect(Array.isArray((mockPresetsList.setItems as jest.Mock).mock.calls[0][0])).toBe(true);
    });

    test("should update choices in presetSelector", () => {
      manager.update();

      expect(mockPresetSelector.choices).toBeDefined();
      expect(Array.isArray(mockPresetSelector.choices)).toBe(true);
    });

    test("should include predefined presets in menu", () => {
      manager.update();

      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const basicAction = menuItems.find(item => item.id === "basic");

      expect(basicAction).toBeDefined();
    });

    test("should include custom presets in menu", () => {
      const preset: ICreatorPresetConfig = {
        presetName: "customMenu",
        json: {}
      };
      manager.addPreset(preset);
      jest.clearAllMocks();

      manager.update();

      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const customAction = menuItems.find(item => item.id === "customMenu");

      expect(customAction).toBeDefined();
    });

    test("should include edit list item", () => {
      manager.update();

      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const editItem = menuItems.find(item => item.id === "editPresetsList");

      expect(editItem).toBeDefined();
      expect(editItem?.action).toBeDefined();
    });

    test("should filter invisible presets", () => {
      CreatorPresets["hidden"] = {
        presetName: "hidden",
        json: {},
        visible: false
      };
      PredefinedCreatorPresets.push("hidden");

      manager.update();

      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const hiddenAction = menuItems.find(item => item.id === "hidden");

      expect(hiddenAction).toBeUndefined();
    });
  });

  describe("Saving presets via saveAs", () => {
    test("should show dialog for entering name in saveAs", () => {
      const json = { toolbox: { showCategoryTitles: true } };
      const saveCallback = jest.fn();

      mockShowDialog.mockImplementation((options) => {
        return { dispose: jest.fn() };
      });

      manager.saveAs(json, saveCallback);

      expect(mockShowDialog).toHaveBeenCalled();
      const dialogOptions = mockShowDialog.mock.calls[0][0];
      expect(dialogOptions.componentName).toBe("survey");
      expect(dialogOptions.title).toBe(getLocString("presets.plugin.saveAsTitle"));
    });

    test("should create survey with dropdown for entering name", () => {
      const json = { toolbox: {} };
      const saveCallback = jest.fn();

      mockShowDialog.mockImplementation((options) => {
        return { dispose: jest.fn() };
      });

      manager.saveAs(json, saveCallback);

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const survey = dialogOptions.data.survey as SurveyModel;

      expect(survey).toBeInstanceOf(SurveyModel);
      const nameQuestion = survey.getQuestionByName("presetName");
      expect(nameQuestion).toBeDefined();
      expect(nameQuestion.isRequired).toBe(true);
    });

    test("should add preset and call callback on confirmation", () => {
      const json = { toolbox: { showCategoryTitles: true } };
      const saveCallback = jest.fn();
      const newName = "savedPreset";

      let onApplyCallback: (() => boolean) | undefined;

      mockShowDialog.mockImplementation((options) => {
        onApplyCallback = options.onApply;
        return { dispose: jest.fn() };
      });

      manager.saveAs(json, saveCallback);

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const survey = dialogOptions.data.survey as SurveyModel;
      survey.setValue("presetName", newName);

      expect(onApplyCallback).toBeDefined();
      expect(onApplyCallback!()).toBe(true);
      expect(CreatorPresets[newName]).toBeDefined();
      expect(saveCallback).toHaveBeenCalledWith(newName);
    });

    test("should call onItemClick for new preset", () => {
      const json = {};
      const saveCallback = jest.fn();
      const newName = "clickedPreset";

      const mockAction = { id: newName } as IAction;
      (manager.presetsList.getActionById as jest.Mock).mockReturnValue(mockAction);

      mockShowDialog.mockImplementation((options) => {
        return { dispose: jest.fn() };
      });

      manager.saveAs(json, saveCallback);

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const survey = dialogOptions.data.survey as SurveyModel;
      survey.setValue("presetName", newName);
      dialogOptions.onApply();

      expect(manager.presetsList.onItemClick).toHaveBeenCalledWith(mockAction);
    });

    test("should overwrite existing preset when name already exists", () => {
      const presetName = "existingPreset";
      const initialJson = { toolbox: { showCategoryTitles: false } };
      const updatedJson = { toolbox: { showCategoryTitles: true } };
      const saveCallback = jest.fn();

      // Prepare existing custom preset so it is present in the manager's custom list.
      manager.addPreset({ presetName, json: initialJson });

      const mockAction = { id: presetName } as IAction;
      (manager.presetsList.getActionById as jest.Mock).mockReturnValue(mockAction);

      mockShowDialog.mockImplementation((options) => {
        return { dispose: jest.fn() };
      });

      manager.saveAs(updatedJson, saveCallback);

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const survey = dialogOptions.data.survey as SurveyModel;
      survey.setValue("presetName", presetName);
      dialogOptions.onApply();

      // Preset config should be overwritten (not duplicated).
      expect(CreatorPresets[presetName]).toBeDefined();
      expect(CreatorPresets[presetName].json).toEqual(updatedJson);
      expect(saveCallback).toHaveBeenCalledWith(presetName);
      expect(manager.presetsList.onItemClick).toHaveBeenCalledWith(mockAction);

      const occurrences = manager.getPresetsArray().filter(p => p.name === presetName).length;
      expect(occurrences).toBe(1);
    });

    test("should not add preset when dialog is cancelled", () => {
      const json = {};
      const saveCallback = jest.fn();

      mockShowDialog.mockImplementation((options) => {
        return { dispose: jest.fn() };
      });

      manager.saveAs(json, saveCallback);

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const survey = dialogOptions.data.survey as SurveyModel;
      survey.setValue("presetName", "");

      const onApply = dialogOptions.onApply;
      expect(onApply()).toBe(false);
      expect(saveCallback).not.toHaveBeenCalled();
    });
  });

  describe("Editing presets list", () => {
    beforeEach(() => {
      PredefinedCreatorPresets.push("basic", "advanced");
      CreatorPresets["basic"] = { presetName: "basic", json: {}, visible: true };
      CreatorPresets["advanced"] = { presetName: "advanced", json: {}, visible: true };
    });

    test("should show edit list dialog", () => {
      mockShowDialog.mockImplementation((options) => {
        return { dispose: jest.fn() };
      });

      manager.update();
      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const editItem = menuItems.find(item => item.id === "editPresetsList");

      if (editItem && editItem.action) {
        editItem.action();
      }

      expect(mockShowDialog).toHaveBeenCalled();
      const dialogOptions = mockShowDialog.mock.calls[0][0];
      expect(dialogOptions.componentName).toBe("survey");
      expect(dialogOptions.title).toBe(getLocString("presets.plugin.editPresetsListTitle"));
    });

    test("should add matrix editor to survey for editing", () => {
      mockShowDialog.mockImplementation((options) => {
        return { dispose: jest.fn() };
      });

      manager.update();
      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const editItem = menuItems.find(item => item.id === "editPresetsList");
      if (editItem && editItem.action) {
        editItem.action();
      }

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const survey = dialogOptions.data.survey as SurveyModel;
      const matrixQuestion = survey.getQuestionByName("presetsList");

      expect(matrixQuestion).toBeDefined();
      expect(survey.pages[0].questions.length).toBeGreaterThan(0);
    });

    test("should apply changes to presets list", () => {
      let onApplyCallback: (() => boolean) | undefined;

      mockShowDialog.mockImplementation((options) => {
        onApplyCallback = options.onApply;
        return { dispose: jest.fn() };
      });

      manager.update();
      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const editItem = menuItems.find(item => item.id === "editPresetsList");
      if (editItem && editItem.action) {
        editItem.action();
      }

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const survey = dialogOptions.data.survey as SurveyModel;
      const newList = [
        { name: "basic", visible: false, custom: false },
        { name: "advanced", visible: true, custom: false }
      ];
      survey.setValue("presetsList", newList);

      expect(onApplyCallback).toBeDefined();
      expect(onApplyCallback!()).toBe(true);
      expect(CreatorPresets["basic"].visible).toBe(false);
      expect(CreatorPresets["advanced"].visible).toBe(true);
    });

    test("should add custom presets from edit list", () => {
      const customPreset: ICreatorPresetConfig = {
        presetName: "newCustom",
        json: {}
      };
      CreatorPresets["newCustom"] = customPreset;

      let onApplyCallback: (() => boolean) | undefined;

      mockShowDialog.mockImplementation((options) => {
        onApplyCallback = options.onApply;
        return { dispose: jest.fn() };
      });

      manager.update();
      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const editItem = menuItems.find(item => item.id === "editPresetsList");
      if (editItem && editItem.action) {
        editItem.action();
      }

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const survey = dialogOptions.data.survey as SurveyModel;
      const newList = [
        { name: "basic", visible: true, custom: false },
        { name: "newCustom", visible: true, custom: true }
      ];
      survey.setValue("presetsList", newList);

      onApplyCallback!();

      manager.update();
      const setItemsMock = mockPresetsList.setItems as jest.Mock;
      const updatedMenuItems = setItemsMock.mock.calls[setItemsMock.mock.calls.length - 1][0] as IAction[];
      const customAction = updatedMenuItems.find(item => item.id === "newCustom");
      expect(customAction).toBeDefined();
    });
  });

  describe("Matrix row actions configuration", () => {
    let survey: SurveyModel;
    let matrixQuestion: QuestionMatrixDynamicModel;

    beforeEach(() => {
      PredefinedCreatorPresets.push("basic", "advanced");
      CreatorPresets["basic"] = { presetName: "basic", json: {}, visible: true };
      CreatorPresets["advanced"] = { presetName: "advanced", json: {}, visible: false };

      survey = new SurveyModel({
        pages: [{ name: "page1", elements: [] }]
      });

      manager.addPresetsListEditor(survey);
      matrixQuestion = survey.getQuestionByName("presetsList") as QuestionMatrixDynamicModel;
    });

    test("should hide remove action for predefined presets", () => {
      const options: any = {
        question: matrixQuestion,
        row: matrixQuestion.visibleRows[0],
        actions: [
          { id: "remove-row", visible: true },
          { id: "show-detail", visible: true }
        ]
      };

      survey.onGetMatrixRowActions.fire(survey, options);

      const removeAction = options.actions.find((a: IAction) => a.id === "remove-row");
      expect(removeAction.visible).toBe(false);
    });

    test("should add visible action for predefined presets", () => {
      const row = matrixQuestion.visibleRows[0];
      const options: any = {
        question: matrixQuestion,
        row: row,
        actions: [
          { id: "remove-row", visible: true }
        ]
      };

      survey.onGetMatrixRowActions.fire(survey, options);

      const visibleAction = options.actions.find((a: IAction) => a.id === "visible");
      expect(visibleAction).toBeDefined();
      expect(visibleAction.location).toBe("end");
    });

    test("should set correct icon for visible action when preset is visible", () => {
      const row = matrixQuestion.visibleRows[0];
      row.getQuestionByName("visible").value = true;
      const options: any = {
        question: matrixQuestion,
        row: row,
        actions: [
          { id: "remove-row", visible: true }
        ]
      };

      survey.onGetMatrixRowActions.fire(survey, options);

      const visibleAction = options.actions.find((a: IAction) => a.id === "visible");
      expect(visibleAction.iconName).toBe("icon-visible-24x24");
    });

    test("should set correct icon for visible action when preset is not visible", () => {
      const row = matrixQuestion.visibleRows[0];
      row.getQuestionByName("visible").value = false;
      const options: any = {
        question: matrixQuestion,
        row: row,
        actions: [
          { id: "remove-row", visible: true }
        ]
      };

      survey.onGetMatrixRowActions.fire(survey, options);

      const visibleAction = options.actions.find((a: IAction) => a.id === "visible");
      expect(visibleAction.iconName).toBe("icon-invisible-24x24");
    });

    test("should toggle visibility when visible action is clicked", () => {
      const row = matrixQuestion.visibleRows[0];
      row.getQuestionByName("visible").value = true;
      const options: any = {
        question: matrixQuestion,
        row: row,
        actions: [
          { id: "remove-row", visible: true }
        ]
      };

      survey.onGetMatrixRowActions.fire(survey, options);

      const visibleAction = options.actions.find((a: IAction) => a.id === "visible");
      expect(visibleAction.iconName).toBe("icon-visible-24x24");

      visibleAction.action();

      expect(row.getQuestionByName("visible").value).toBe(false);
      expect(visibleAction.iconName).toBe("icon-invisible-24x24");
    });

    test("should configure remove action for custom presets", () => {
      matrixQuestion.value = [
        { name: "basic", title: "Basic", visible: true, custom: false },
        { name: "custom1", title: "Custom 1", visible: true, custom: true }
      ];
      const row = matrixQuestion.visibleRows.find((r: any) => r.getValue("custom") === true) || matrixQuestion.visibleRows[0] as any;
      row.getQuestionByName("custom").value = true;

      const options: any = {
        question: matrixQuestion,
        row: row,
        actions: [
          { id: "remove-row", visible: true, iconName: "default-icon" }
        ]
      };

      survey.onGetMatrixRowActions.fire(survey, options);

      const removeAction = options.actions.find((a: IAction) => a.id === "remove-row");
      expect(removeAction.iconName).toBe("icon-delete-24x24");
      expect(removeAction.iconSize).toBe("auto");
      expect(removeAction.component).toBe("sv-action-bar-item");
      expect(removeAction.innerCss).toBe("sps-action-button sps-action-button--danger");
      expect(removeAction.showTitle).toBe(false);
      expect(removeAction.action).toBeDefined();
    });

    test("should remove custom preset row when remove action is clicked", () => {
      matrixQuestion.value = [
        { name: "basic", title: "Basic", visible: true, custom: false },
        { name: "custom1", title: "Custom 1", visible: true, custom: true }
      ];

      const row = matrixQuestion.visibleRows.find((r: any) => r.getValue("custom") === true) as any;

      matrixQuestion.removeRowUI = jest.fn();
      const options: any = {
        question: matrixQuestion,
        row: row,
        actions: [
          { id: "remove-row", visible: true }
        ]
      };

      survey.onGetMatrixRowActions.fire(survey, options);

      const removeAction = options.actions.find((a: IAction) => a.id === "remove-row");
      removeAction.action(removeAction);

      expect(matrixQuestion.removeRowUI).toHaveBeenCalledWith(row);
    });

    test("predefined presets title should be readonly", () => {
      matrixQuestion.value = [
        { name: "basic", title: "Basic", visible: true, custom: false },
        { name: "custom1", title: "Custom 1", visible: true, custom: true }
      ];

      const predefinedRow = matrixQuestion.visibleRows.find((r: any) => r.getValue("custom") === false) as any;
      const customRow = matrixQuestion.visibleRows.find((r: any) => r.getValue("custom") === true) as any;

      expect(predefinedRow.getQuestionByName("title").readOnly).toBe(true);
      expect(customRow.getQuestionByName("title").readOnly).toBe(false);
    });

    test("should handle both predefined and custom presets in same matrix", () => {
      matrixQuestion.value = [
        { name: "basic", title: "Basic", visible: true, custom: false },
        { name: "custom1", title: "Custom 1", visible: true, custom: true }
      ];

      const predefinedRow = matrixQuestion.visibleRows.find((r: any) => r.getValue("custom") === false) as any;
      const customRow = matrixQuestion.visibleRows.find((r: any) => r.getValue("custom") === true) as any;

      const predefinedOptions: any = {
        question: matrixQuestion,
        row: predefinedRow,
        actions: [
          { id: "remove-row", visible: true }
        ]
      };

      const customOptions: any = {
        question: matrixQuestion,
        row: customRow,
        actions: [
          { id: "remove-row", visible: true }
        ]
      };

      survey.onGetMatrixRowActions.fire(survey, predefinedOptions);
      survey.onGetMatrixRowActions.fire(survey, customOptions);

      const predefinedRemoveAction = predefinedOptions.actions.find((a: IAction) => a.id === "remove-row");
      const predefinedVisibleAction = predefinedOptions.actions.find((a: IAction) => a.id === "visible");
      const customRemoveAction = customOptions.actions.find((a: IAction) => a.id === "remove-row");
      const customVisibleAction = customOptions.actions.find((a: IAction) => a.id === "visible");

      expect(predefinedRemoveAction.visible).toBe(false);
      expect(predefinedVisibleAction).toBeDefined();
      expect(customRemoveAction.iconName).toBe("icon-delete-24x24");
      expect(customVisibleAction).toBeDefined();
    });
  });

  describe("Integration with UI components", () => {
    beforeEach(() => {
      PredefinedCreatorPresets.push("basic");
      CreatorPresets["basic"] = { presetName: "basic", json: {}, visible: true };
    });

    test("should call selectPresetCallback when preset is selected", () => {
      manager.update();
      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const basicAction = menuItems.find(item => item.id === "basic");

      expect(basicAction).toBeDefined();
      expect(basicAction?.action).toBeDefined();

      if (basicAction && basicAction.action) {
        basicAction.action(basicAction);
      }

      expect(mockSelectPresetCallback).toHaveBeenCalledWith(CreatorPresets["basic"]);
      expect(mockPresetsList.selectedItem).toBe(basicAction);
    });

    test("should update presetSelector choices on update", () => {
      manager.update();

      expect(mockPresetSelector.choices).toBeDefined();
      expect(Array.isArray(mockPresetSelector.choices)).toBe(true);
      expect(mockPresetSelector.choices.length).toBeGreaterThan(0);
    });

    test("should work correctly without presetSelector", () => {
      manager.presetSelector = undefined as any;

      expect(() => {
        manager.update();
      }).not.toThrow();
      expect(mockPresetsList.setItems).toHaveBeenCalled();
    });

    test("should work correctly without presetsList", () => {
      manager.presetsList = undefined as any;

      expect(() => {
        manager.update();
      }).not.toThrow();
    });

    test("should add presetsListEditor to survey", () => {
      const survey = new SurveyModel({
        pages: [{ name: "page1", elements: [] }]
      });

      manager.addPresetsListEditor(survey);

      const matrixQuestion = survey.getQuestionByName("presetsList");
      expect(matrixQuestion).toBeDefined();
      expect(survey.pages[0].questions.length).toBe(1);
    });

    test("should set initial value in presetsListEditor", () => {
      PredefinedCreatorPresets.push("test");
      CreatorPresets["test"] = { presetName: "test", json: {}, visible: true };

      const survey = new SurveyModel({
        pages: [{ name: "page1", elements: [] }]
      });

      manager.addPresetsListEditor(survey);

      const matrixQuestion = survey.getQuestionByName("presetsList");
      expect(matrixQuestion.value).toBeDefined();
      expect(Array.isArray(matrixQuestion.value)).toBe(true);
    });

    test("should show dialog when adding new row to presets matrix", () => {
      PredefinedCreatorPresets.push("basic", "advanced");
      CreatorPresets["basic"] = { presetName: "basic", json: { toolbox: {} }, visible: true };
      CreatorPresets["advanced"] = { presetName: "advanced", json: { toolbox: {} }, visible: true };

      const survey = new SurveyModel({
        pages: [{ name: "page1", elements: [] }]
      });

      manager.addPresetsListEditor(survey);

      const matrixQuestion = survey.getQuestionByName("presetsList") as QuestionMatrixDynamicModel;

      mockShowDialog.mockImplementation((options) => {
        return { dispose: jest.fn() };
      });

      const options: any = {
        question: matrixQuestion,
        allow: true,
        canAddRow: true
      };
      survey.onMatrixRowAdding.fire(survey, options);

      expect(mockShowDialog).toHaveBeenCalled();
      expect(options.allow).toBe(false);
    });

    test("should create dialog with presetName and template fields", () => {
      PredefinedCreatorPresets.push("basic");
      CreatorPresets["basic"] = { presetName: "basic", json: {}, visible: true };

      const survey = new SurveyModel({
        pages: [{ name: "page1", elements: [] }]
      });

      manager.addPresetsListEditor(survey);

      const matrixQuestion = survey.getQuestionByName("presetsList") as QuestionMatrixDynamicModel;

      mockShowDialog.mockImplementation((options) => {
        return { dispose: jest.fn() };
      });

      const options: any = {
        question: matrixQuestion,
        allow: true,
        canAddRow: true
      };
      survey.onMatrixRowAdding.fire(survey, options);

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const addSurvey = dialogOptions.data.survey as SurveyModel;

      expect(addSurvey).toBeInstanceOf(SurveyModel);
      expect(addSurvey.getQuestionByName("presetName")).toBeDefined();
      expect(addSurvey.getQuestionByName("template")).toBeDefined();
      expect(addSurvey.getQuestionByName("presetName").isRequired).toBe(true);
      expect(addSurvey.getQuestionByName("template").value).toBe("basic");
    });

    test("should create new preset from template when dialog is confirmed", () => {
      PredefinedCreatorPresets.push("basic", "advanced");
      const templateJson = { toolbox: { showCategoryTitles: true }, tabs: { items: [] } };
      CreatorPresets["basic"] = { presetName: "basic", json: templateJson, visible: true };
      CreatorPresets["advanced"] = { presetName: "advanced", json: {}, visible: true };

      const survey = new SurveyModel({
        pages: [{ name: "page1", elements: [] }]
      });

      manager.addPresetsListEditor(survey);

      const matrixQuestion = survey.getQuestionByName("presetsList") as QuestionMatrixDynamicModel;

      let onApplyCallback: (() => boolean) | undefined;

      mockShowDialog.mockImplementation((options) => {
        onApplyCallback = options.onApply;
        return { dispose: jest.fn() };
      });

      const options: any = {
        question: matrixQuestion,
        allow: true,
        canAddRow: true
      };
      survey.onMatrixRowAdding.fire(survey, options);

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const addSurvey = dialogOptions.data.survey as SurveyModel;
      addSurvey.setValue("presetName", "newPreset");
      addSurvey.setValue("template", "basic");

      expect(onApplyCallback).toBeDefined();
      expect(onApplyCallback!()).toBe(true);
      expect(CreatorPresets["newPreset"]).toBeDefined();
      expect(CreatorPresets["newPreset"].json).toEqual(templateJson);
      expect(matrixQuestion.value).toHaveLength(4);
      expect(matrixQuestion.value[3].name).toBe("newPreset");
      expect(matrixQuestion.value[3].custom).toBe(true);
    });

    test("should not create preset when dialog validation fails", () => {
      const survey = new SurveyModel({
        pages: [{ name: "page1", elements: [] }]
      });

      manager.addPresetsListEditor(survey);

      const matrixQuestion = survey.getQuestionByName("presetsList") as QuestionMatrixDynamicModel;
      matrixQuestion.value = [];

      let onApplyCallback: (() => boolean) | undefined;

      mockShowDialog.mockImplementation((options) => {
        onApplyCallback = options.onApply;
        return { dispose: jest.fn() };
      });

      const options: any = {
        question: matrixQuestion,
        allow: true,
        canAddRow: true
      };
      survey.onMatrixRowAdding.fire(survey, options);

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const addSurvey = dialogOptions.data.survey as SurveyModel;
      addSurvey.setValue("presetName", "");

      expect(onApplyCallback).toBeDefined();
      expect(onApplyCallback!()).toBe(false);
      expect(CreatorPresets["newPreset"]).toBeUndefined();
      expect(matrixQuestion.value).toHaveLength(0);
    });

    test("should add preset to matrix value array", () => {
      const survey = new SurveyModel({
        pages: [{ name: "page1", elements: [] }]
      });

      manager.addPresetsListEditor(survey);

      const matrixQuestion = survey.getQuestionByName("presetsList") as QuestionMatrixDynamicModel;
      matrixQuestion.value = [{ name: "existing", title: "Existing", visible: true, custom: true }];

      let onApplyCallback: (() => boolean) | undefined;

      mockShowDialog.mockImplementation((options) => {
        onApplyCallback = options.onApply;
        return { dispose: jest.fn() };
      });

      const options: any = {
        question: matrixQuestion,
        allow: true,
        canAddRow: true
      };
      survey.onMatrixRowAdding.fire(survey, options);

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const addSurvey = dialogOptions.data.survey as SurveyModel;
      addSurvey.setValue("presetName", "addedPreset");
      addSurvey.setValue("template", "basic");

      onApplyCallback!();

      expect(matrixQuestion.value).toHaveLength(2);
      expect(matrixQuestion.value[1].name).toBe("addedPreset");
      expect(matrixQuestion.value[1].title).toBe("addedPreset");
      expect(matrixQuestion.value[1].visible).toBe(true);
      expect(matrixQuestion.value[1].custom).toBe(true);
    });

    test("should use correct dialog title and css class", () => {
      const survey = new SurveyModel({
        pages: [{ name: "page1", elements: [] }]
      });

      manager.addPresetsListEditor(survey);

      const matrixQuestion = survey.getQuestionByName("presetsList") as QuestionMatrixDynamicModel;

      mockShowDialog.mockImplementation((options) => {
        return { dispose: jest.fn() };
      });

      const options: any = {
        question: matrixQuestion,
        allow: true,
        canAddRow: true
      };
      survey.onMatrixRowAdding.fire(survey, options);

      const dialogOptions = mockShowDialog.mock.calls[0][0];
      expect(dialogOptions.title).toBe(getLocString("presets.plugin.addNewPreset"));
      expect(dialogOptions.cssClass).toBe("sps-popup sps-popup--level2 svc-property-editor svc-creator-popup");
      expect(dialogOptions.displayMode).toBe("popup");
    });
  });

  describe("Edge cases handling", () => {
    test("should handle empty presets list", () => {
      manager.update();

      expect(mockPresetsList.setItems).toHaveBeenCalled();
      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const editItem = menuItems.find(item => item.id === "editPresetsList");
      expect(editItem).toBeDefined();
    });

    test("should handle presets without visible property", () => {
      PredefinedCreatorPresets.push("noVisible");
      CreatorPresets["noVisible"] = { presetName: "noVisible", json: {} };

      manager.update();

      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const action = menuItems.find(item => item.id === "noVisible");
      expect(action).toBeDefined();
    });

    test("should handle presets with visible: false", () => {
      PredefinedCreatorPresets.push("hiddenPreset");
      CreatorPresets["hiddenPreset"] = {
        presetName: "hiddenPreset",
        json: {},
        visible: false
      };

      manager.update();

      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const action = menuItems.find(item => item.id === "hiddenPreset");
      expect(action).toBeUndefined();
    });

    test("should handle missing selectPresetCallback", () => {
      manager.selectPresetCallback = undefined as any;
      PredefinedCreatorPresets.push("basic");
      CreatorPresets["basic"] = { presetName: "basic", json: {}, visible: true };

      manager.update();
      const menuItems = (mockPresetsList.setItems as jest.Mock).mock.calls[0][0] as IAction[];
      const basicAction = menuItems.find(item => item.id === "basic");

      expect(() => {
        if (basicAction && basicAction.action) {
          basicAction.action(basicAction);
        }
      }).not.toThrow();
    });

    test("should handle presets with undefined json", () => {
      const preset: ICreatorPresetConfig = {
        presetName: "noJson",
        json: undefined
      };

      expect(() => {
        manager.addPreset(preset);
      }).not.toThrow();
      expect(CreatorPresets["noJson"]).toBeDefined();
    });
  });
});
