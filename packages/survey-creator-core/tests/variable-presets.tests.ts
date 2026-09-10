// The Theme tab's property grid needs its editors registered, as tests/tabs/theme-tab-plugin.tests.ts does.
import "../src/custom-questions/question-file";
import "../src/custom-questions/question-spin-editor";
import "../src/custom-questions/question-color";
import "../src/components/tabs/theme-custom-questions/color-alpha";
import "../src/property-grid/theme-settings";
import "../src/property-grid/header-settings";
import { Action, IAction, SurveyModel, SurveyVariablePresets, settings as surveySettings } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { TabTestPlugin } from "../src/components/tabs/test-plugin";
import { TestSurveyTabViewModel } from "../src/components/tabs/test";
import { TabThemePlugin } from "../src/components/tabs/theme-plugin";
import { VariablePresetsManager } from "../src/variable-presets";
import { getLocString } from "../src/editorLocalization";

const definition = {
  elements: [
    {
      type: "dropdown", name: "customerTier", title: "Customer tier",
      choices: ["basic", "gold", "platinum"], isRequired: true
    },
    {
      type: "text", name: "yearsInBusiness", title: "Years in business",
      inputType: "number", min: 0, max: 99
    }
  ]
};
const presets = [
  { name: "Gold customer", variables: { customerTier: "gold", yearsInBusiness: 12 } },
  { name: "Newcomer", variables: { customerTier: "basic", yearsInBusiness: 0 } },
  { name: "Tier only", variables: { customerTier: "platinum" } }
];
function createContainer(): any {
  return {
    definition: definition,
    presets: presets.map(preset => { return { name: preset.name, variables: { ...preset.variables } }; })
  };
}
const surveyJSON = {
  elements: [
    { type: "text", name: "q1" },
    { type: "text", name: "gold", visibleIf: "{customerTier} = 'gold'" },
    { type: "text", name: "veteran", visibleIf: "{yearsInBusiness} notempty" },
    { type: "text", name: "doubled", defaultValueExpression: "{yearsInBusiness} * 2" }
  ]
};
function getPlugin(creator: CreatorTester): TabTestPlugin {
  return <TabTestPlugin>creator.getPlugin("test");
}
function getManager(creator: CreatorTester): VariablePresetsManager {
  return getPlugin(creator).variablePresets;
}
// The tab is registered as "test" and named "preview": switching to it again would deactivate the
// plugin and build a second view model, so the guard is on the name the creator reports.
function getPreviewModel(creator: CreatorTester): TestSurveyTabViewModel {
  if (creator.activeTab !== "preview") {
    creator.activeTab = "preview";
  }
  return getPlugin(creator).model;
}
function getPresetAction(creator: CreatorTester, id: string): Action {
  return getPreviewModel(creator).pages.actions.filter(action => action.id === id)[0];
}

describe("Variable presets on the creator model (issue #7982)", () => {
  test("The option reaches the creator and the container is held by reference", () => {
    const container = createContainer();
    const creator = new CreatorTester({ variablePresets: container });
    expect(creator.variablePresets).toBe(container);
    expect(creator.variablePresetsModel).toBeInstanceOf(SurveyVariablePresets);
    expect(creator.variablePresetsModel.source).toBe(container);
    expect(creator.variablePresetsModel.getPresetNames()).toStrictEqual(["Gold customer", "Newcomer", "Tier only"]);
  });
  test("The companion and its definition survey are not built until a call needs them", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    expect((<any>creator).variablePresetsModelValue).toBeFalsy();
    const model = creator.variablePresetsModel;
    expect(model["surveyValue"]).toBeFalsy();
    expect(model.getVariableNames()).toStrictEqual(["customerTier", "yearsInBusiness"]);
    expect(model["surveyValue"]).toBeTruthy();
  });
  test("No container: an empty companion, no throw", () => {
    const creator = new CreatorTester();
    expect(creator.variablePresets).toBeUndefined();
    expect(creator.variablePresetsModel.getPresetNames()).toStrictEqual([]);
    expect(creator.variablePresetsModel.hasDefinition).toBeFalsy();
    expect(getManager(creator).activeVariables).toStrictEqual({});
  });
  test("Assigning a container replaces and disposes the core companion", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const oldModel = creator.variablePresetsModel;
    oldModel.getVariableNames();
    const container = { presets: [] };
    creator.variablePresets = container;
    expect((<any>creator).variablePresetsModelValue).toBeFalsy();
    expect(oldModel["isDisposedValue"]).toBeTruthy();
    expect(creator.variablePresetsModel.source).toBe(container);
    expect(creator.variablePresetsModel).not.toBe(oldModel);
  });
  test("Assigning the same container again keeps the companion", () => {
    const container = createContainer();
    const creator = new CreatorTester({ variablePresets: container });
    const model = creator.variablePresetsModel;
    creator.variablePresets = container;
    expect(creator.variablePresetsModel).toBe(model);
  });
  test("Assigning a container raises onPropertyChanged, a deep-equal copy included", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const log: Array<any> = [];
    creator.onPropertyChanged.add((sender, options) => {
      if (options.name === "variablePresets") log.push(options.newValue);
    });
    const copy = createContainer();
    creator.variablePresets = copy;
    expect(log).toHaveLength(1);
    expect(log[0]).toBe(copy);
    expect(creator.variablePresetsModel.source).toBe(copy);
    creator.variablePresets = copy;
    expect(log).toHaveLength(1);
  });
  test("The companion is disposed with the creator", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const model = creator.variablePresetsModel;
    creator.dispose();
    expect(model["isDisposedValue"]).toBeTruthy();
  });
});

describe("The active variable preset on the Preview plugin (issue #7982)", () => {
  test("The plugin owns the manager and the manager is disposed with the creator", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    expect(manager).toBeInstanceOf(VariablePresetsManager);
    creator.dispose();
    expect(manager.isDisposed).toBeTruthy();
  });
  test("activeVariables: none, a preset, and a stale name", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    expect(manager.active).toBe("");
    expect(manager.activeVariables).toStrictEqual({});
    manager.active = "Gold customer";
    expect(manager.activeVariables).toStrictEqual({ customerTier: "gold", yearsInBusiness: 12 });
    manager.active = "No such preset";
    expect(manager.active).toBe("");
    expect(manager.activeVariables).toStrictEqual({});
  });
  test("Assigning a container keeps an active name it has and clears one it does not", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    manager.active = "Newcomer";
    creator.variablePresets = { presets: [{ name: "Newcomer", variables: { customerTier: "basic" } }] };
    expect(manager.active).toBe("Newcomer");
    expect(manager.activeVariables).toStrictEqual({ customerTier: "basic" });
    creator.variablePresets = { presets: [{ name: "Other", variables: {} }] };
    expect(manager.active).toBe("");
    expect(manager.activeVariables).toStrictEqual({});
  });
  test("onVariablePresetsChanged fires once on a change and not on the same value", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    const log: Array<any> = [];
    creator.onVariablePresetsChanged.add((sender, options) => { log.push(options); });
    manager.active = "Gold customer";
    expect(log).toHaveLength(1);
    expect(log[0].reason).toBe("select");
    expect(log[0].active).toBe("Gold customer");
    expect(log[0].variablePresets).toBe(creator.variablePresets);
    manager.active = "Gold customer";
    expect(log).toHaveLength(1);
    manager.active = "";
    expect(log).toHaveLength(2);
    expect(log[1].active).toBe("");
  });
  test("The choice survives a rebuild of the view model", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    getPreviewModel(creator);
    creator.activeTab = "designer";
    expect(getManager(creator).active).toBe("Gold customer");
    expect(getPreviewModel(creator).survey.getVariable("customertier")).toBe("gold");
  });
});

describe("Variable presets in Preview (issue #7982)", () => {
  test("An active preset sets the variables and flips the branch", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    const survey = getPreviewModel(creator).survey;
    expect(survey.getVariable("customertier")).toBe("gold");
    expect(survey.getQuestionByName("gold").isVisible).toBeTruthy();
  });
  test("No active preset leaves every variable unset", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    const survey = getPreviewModel(creator).survey;
    expect(survey.getVariable("customertier")).toBeUndefined();
    expect(survey.getQuestionByName("gold").isVisible).toBeFalsy();
  });
  test("The values are applied before the first render", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    const survey = getPreviewModel(creator).survey;
    expect(survey.getQuestionByName("doubled").value).toBe(24);
  });
  test("Switching to a preset that names fewer variables unsets the missing ones", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    const model = getPreviewModel(creator);
    expect(model.survey.getVariable("yearsinbusiness")).toBe(12);
    getManager(creator).active = "Tier only";
    expect(model.survey.getVariable("yearsinbusiness")).toBeUndefined();
    expect(model.survey.getQuestionByName("veteran").isVisible).toBeFalsy();
  });
  test("The batch is applied in one recalculation, never on a partial state", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    // The trigger is true only while customerTier is set and yearsInBusiness is not, which is the
    // half-applied state a setVariable loop passes through and setVariables never produces. A
    // setvalue trigger does not undo itself, so a partial state would leave "partial" behind.
    creator.JSON = {
      elements: [{ type: "text", name: "q1" }],
      triggers: [{
        type: "setvalue", expression: "{customerTier} notempty and {yearsInBusiness} empty",
        setToName: "q1", setValue: "partial"
      }]
    };
    getManager(creator).active = "Gold customer";
    const survey = getPreviewModel(creator).survey;
    expect(survey.getVariable("customertier")).toBe("gold");
    expect(survey.getVariable("yearsinbusiness")).toBe(12);
    expect(survey.getValue("q1")).toBeFalsy();
  });
  test("A survey that writes a variable does not change the host's container", () => {
    const container = createContainer();
    const creator = new CreatorTester({ variablePresets: container });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    const survey = getPreviewModel(creator).survey;
    survey.setVariable("customerTier", "written");
    expect(survey.getVariable("customertier")).toBe("written");
    expect(container.presets[0].variables.customerTier).toBe("gold");
    expect(getManager(creator).activeVariables.customerTier).toBe("gold");
  });
  test("The designer survey has no variables", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    getPreviewModel(creator);
    creator.activeTab = "designer";
    expect(creator.survey.getVariableNames()).toHaveLength(0);
  });
  test("Without a container Preview leaves alone what a setup handler set; with one the preset is the whole world", () => {
    const setVariable = (sender: any, options: any) => { options.survey.setVariable("fromHost", "kept"); };
    const plain = new CreatorTester();
    plain.onSurveyInstanceSetupHandlers.add(setVariable);
    plain.JSON = surveyJSON;
    expect(getPreviewModel(plain).survey.getVariable("fromhost")).toBe("kept");
    const withPresets = new CreatorTester({ variablePresets: createContainer() });
    withPresets.onSurveyInstanceSetupHandlers.add(setVariable);
    withPresets.JSON = surveyJSON;
    getManager(withPresets).active = "Gold customer";
    const survey = getPreviewModel(withPresets).survey;
    expect(survey.getVariable("customertier")).toBe("gold");
    expect(survey.getVariable("fromhost")).toBeUndefined();
  });
  test("A host assigning the active preset while the tab is open restarts the survey", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    const model = getPreviewModel(creator);
    model.survey.setValue("q1", "an answer");
    getManager(creator).active = "Gold customer";
    expect(model.survey.getVariable("customertier")).toBe("gold");
    expect(model.survey.getQuestionByName("gold").isVisible).toBeTruthy();
    expect(model.survey.getValue("q1")).toBeFalsy();
  });
  test("Choosing a preset with the same values does not restart the survey", () => {
    const creator = new CreatorTester({ variablePresets: { presets: [
      { name: "A", variables: { customerTier: "gold" } },
      { name: "B", variables: { customerTier: "gold" } }
    ] } });
    creator.JSON = surveyJSON;
    getManager(creator).active = "A";
    const model = getPreviewModel(creator);
    const survey = model.survey;
    survey.setValue("q1", "kept");
    getManager(creator).active = "B";
    expect(model.survey).toBe(survey);
    expect(model.survey.getValue("q1")).toBe("kept");
  });
  test("Replacing the container while the tab is open refreshes the switcher and restarts the survey", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    const model = getPreviewModel(creator);
    const action = getPresetAction(creator, "variablePresetSelector");
    creator.variablePresets = { presets: [{ name: "Other", variables: { customerTier: "basic" } }, { name: "Another", variables: {} }] };
    const items: Array<IAction> = action.popupModel.contentComponentData.model.actions;
    expect(items.map(item => item.id)).toStrictEqual(["Other", "Another"]);
    expect(action.title).toBe(getLocString("vp.noPreset"));
    expect(getManager(creator).active).toBe("");
    expect(model.survey.getVariable("customertier")).toBeUndefined();
  });
  test("Two activate/deactivate cycles leave one set of values", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    getPreviewModel(creator);
    creator.activeTab = "designer";
    const survey = getPreviewModel(creator).survey;
    expect(survey.getVariableNames()).toStrictEqual(["customertier", "yearsinbusiness"]);
  });
});

describe("The variable preset actions in the page toolbar (issue #7982)", () => {
  test("Both actions are in the page toolbar and not in the creator toolbar", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    const actions = getPreviewModel(creator).pages.actions;
    const ids = actions.map(action => action.id);
    expect(ids.indexOf("variablePresetSelector")).toBe(ids.indexOf("nextPage") + 1);
    expect(ids).toContain("variablePresetsView");
    const toolbarIds = creator.toolbar.actions.map(action => action.id);
    expect(toolbarIds).not.toContain("variablePresetSelector");
    expect(toolbarIds).not.toContain("variablePresetsView");
  });
  test("The actions are invisible with no container and visible with presets", () => {
    const empty = new CreatorTester();
    empty.JSON = surveyJSON;
    expect(getPresetAction(empty, "variablePresetSelector").visible).toBeFalsy();
    expect(getPresetAction(empty, "variablePresetsView").visible).toBeFalsy();
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    expect(getPresetAction(creator, "variablePresetSelector").visible).toBeTruthy();
    expect(getPresetAction(creator, "variablePresetsView").visible).toBeTruthy();
  });
  test("The actions and the bar are visible on a one-page survey", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = { elements: [{ type: "text", name: "q1" }] };
    const model = getPreviewModel(creator);
    expect(model.pageListItems).toHaveLength(1);
    expect(getPresetAction(creator, "variablePresetSelector").visible).toBeTruthy();
    expect(getPresetAction(creator, "variablePresetsView").visible).toBeTruthy();
    expect(model.isPageToolbarVisible).toBeTruthy();
  });
  test("The items are the preset names in container order, with no extra entry", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    const action = getPresetAction(creator, "variablePresetSelector");
    const items: Array<IAction> = action.popupModel.contentComponentData.model.actions;
    expect(items.map(item => item.id)).toStrictEqual(["Gold customer", "Newcomer", "Tier only"]);
    expect(items.map(item => item.title)).toStrictEqual(["Gold customer", "Newcomer", "Tier only"]);
    // the popup is the list alone, with no header
    expect(action.popupModel.title).toBe("");
    // the list renders its actions, so they must be the same list as the visible items
    expect(action.popupModel.contentComponentData.model.visibleItems.map((item: IAction) => item.id)).toStrictEqual(["Gold customer", "Newcomer", "Tier only"]);
  });
  test("The title and the selected item follow a name a host assigns while the tab is open", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    const action = getPresetAction(creator, "variablePresetSelector");
    expect(action.title).toBe(getLocString("vp.noPreset"));
    getManager(creator).active = "Newcomer";
    expect(action.title).toBe(getLocString("vp.selectorTitle") + ": Newcomer");
    expect(action.popupModel.contentComponentData.model.selectedItem.id).toBe("Newcomer");
  });
  test("The switcher is hidden and the button shown with exactly one preset", () => {
    const creator = new CreatorTester({ variablePresets: { definition: definition, presets: [presets[0]] } });
    creator.JSON = surveyJSON;
    expect(getPresetAction(creator, "variablePresetSelector").visible).toBeFalsy();
    expect(getPresetAction(creator, "variablePresetsView").visible).toBeTruthy();
  });
  test("Choosing an item selects the preset, re-runs the survey and raises the event once", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    const model = getPreviewModel(creator);
    model.survey.setValue("q1", "an answer");
    let raised = 0;
    creator.onVariablePresetsChanged.add(() => { raised++; });
    const action = getPresetAction(creator, "variablePresetSelector");
    action.popupModel.contentComponentData.model.onSelectionChanged({ id: "Gold customer", title: "Gold customer" });
    expect(getManager(creator).active).toBe("Gold customer");
    expect(raised).toBe(1);
    expect(model.survey.getQuestionByName("gold").isVisible).toBeTruthy();
    expect(model.survey.getValue("q1")).toBeFalsy();
  });
  test("View is disabled with no active preset and enabled with one", () => {
    const creator = new CreatorTester({ variablePresets: { presets: presets } });
    creator.JSON = surveyJSON;
    const action = getPresetAction(creator, "variablePresetsView");
    expect(action.enabled).toBeFalsy();
    getManager(creator).active = "Gold customer";
    expect(action.enabled).toBeTruthy();
  });
  test("View shows the active preset's variables in one read-only question", () => {
    const creator = new CreatorTester({ variablePresets: { presets: presets } });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    const model = getPreviewModel(creator);
    const oldShowDialog = surveySettings.showDialog;
    let callCount = 0;
    let dialogOptions: any = undefined;
    surveySettings.showDialog = <any>((options: any) => { callCount++; dialogOptions = options; return undefined; });
    try {
      model.showVariablesViewDialog();
    } finally {
      surveySettings.showDialog = oldShowDialog;
    }
    expect(callCount).toBe(1);
    expect(dialogOptions.componentName).toBe("survey");
    const dialogSurvey: SurveyModel = dialogOptions.data.survey;
    const question = dialogSurvey.getAllQuestions()[0];
    expect(question.isReadOnly).toBeTruthy();
    expect(JSON.parse(question.value)).toStrictEqual({ customerTier: "gold", yearsInBusiness: 12 });
  });
  test("The Theme tab inherits the toolbar but shows no preset controls and runs no presets", () => {
    const creator = new CreatorTester({ showThemeTab: true, variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    creator.activeTab = "theme";
    const themeModel = (<TabThemePlugin>creator.getPlugin("theme")).model;
    const actions = themeModel.pages.actions;
    expect(actions.filter(action => action.id === "variablePresetSelector")[0].visible).toBeFalsy();
    expect(actions.filter(action => action.id === "variablePresetsView")[0].visible).toBeFalsy();
    expect(themeModel.survey.getVariableNames()).toHaveLength(0);
  });
  test("With a definition the button keeps its id and is not the View button", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    const action = getPresetAction(creator, "variablePresetsView");
    expect(action).toBeTruthy();
    // tier 02 replaces the title and the action; the id is what this test pins
    expect(action.id).toBe("variablePresetsView");
  });
});
