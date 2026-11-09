import { Action, Helpers, IAction, QuestionMatrixDynamicModel, Serializer, SurveyModel, settings as surveySettings } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { TabTestPlugin } from "../src/components/tabs/test-plugin";
import { TestSurveyTabViewModel } from "../src/components/tabs/test";
import { VariablePresetsManager } from "../src/variable-presets";
import { VariablePresetsEditor } from "../src/variable-presets-editor";
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
  { name: "Gold customer", description: "12 years, tier gold", variables: { customerTier: "gold", yearsInBusiness: 12 } },
  { name: "Newcomer", variables: { customerTier: "basic", yearsInBusiness: 0 } },
  { name: "Tier only", variables: { customerTier: "platinum" } }
];
function createContainer(): any {
  return {
    definition: definition,
    presets: presets.map(preset => {
      const res: any = { name: preset.name, variables: { ...preset.variables } };
      if (!!preset.description) res.description = preset.description;
      return res;
    })
  };
}
const surveyJSON = {
  elements: [
    { type: "text", name: "q1" },
    { type: "text", name: "gold", visibleIf: "{customerTier} = 'gold'" },
    { type: "text", name: "doubled", defaultValueExpression: "{yearsInBusiness} * 2" }
  ]
};
function getPlugin(creator: CreatorTester): TabTestPlugin {
  return <TabTestPlugin>creator.getPlugin("test");
}
function getManager(creator: CreatorTester): VariablePresetsManager {
  return getPlugin(creator).variablePresets;
}
function getPreviewModel(creator: CreatorTester): TestSurveyTabViewModel {
  if (creator.activeTab !== "preview") {
    creator.activeTab = "preview";
  }
  return getPlugin(creator).model;
}
function getPresetAction(creator: CreatorTester, id: string): Action {
  return getPreviewModel(creator).pages.actions.filter(action => action.id === id)[0];
}
function createEditor(creator: CreatorTester): VariablePresetsEditor {
  return new VariablePresetsEditor(creator, getManager(creator));
}
function getListQuestion(editor: VariablePresetsEditor): QuestionMatrixDynamicModel {
  return <QuestionMatrixDynamicModel>editor.editSurvey.getAllQuestions()
    .filter(question => question.getType() === "matrixdynamic")[0];
}
// The rendered table is what builds the default actions - the remove button among them - and then
// passes them through onGetMatrixRowActions, so this is the row's action list as a user sees it.
function getRowActions(matrix: QuestionMatrixDynamicModel, rowIndex: number): Array<IAction> {
  return matrix.renderedTable["rowsActions"][rowIndex] || [];
}
// The dialog itself is settings.showDialog - framework territory - so it is stubbed everywhere.
function withDialogStub(action: () => void): Array<any> {
  const oldShowDialog = surveySettings.showDialog;
  const calls: Array<any> = [];
  surveySettings.showDialog = <any>((options: any) => { calls.push(options); return undefined; });
  try {
    action();
  } finally {
    surveySettings.showDialog = oldShowDialog;
  }
  return calls;
}

describe("Variable presets editor: the manager (issue #7982)", () => {
  test("canEdit: no definition, readOnly, and the or of the three flags", () => {
    const noDefinition = new CreatorTester({ variablePresets: { presets: presets } });
    expect(getManager(noDefinition).canEdit).toBeFalsy();
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    expect(manager.canEdit).toBeTruthy();
    creator.readOnly = true;
    expect(manager.canEdit).toBeFalsy();
    creator.readOnly = false;
    manager.allowEdit = false;
    manager.allowAdd = false;
    manager.allowDelete = false;
    expect(manager.canEdit).toBeFalsy();
    manager.allowDelete = true;
    expect(manager.canEdit).toBeTruthy();
    manager.allowDelete = false;
    manager.allowAdd = true;
    expect(manager.canEdit).toBeTruthy();
  });
  test("getPresetOperations seeds from the flags, raises the event once and returns its answer", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    const log: Array<any> = [];
    creator.onVariablePresetEditing.add((sender, options) => {
      log.push({ preset: options.preset, allowEdit: options.allowEdit, allowDelete: options.allowDelete });
      if (options.preset.name === "Newcomer") {
        options.allowEdit = false;
      }
    });
    const gold = creator.variablePresets.presets[0];
    expect(manager.getPresetOperations(gold)).toStrictEqual({ allowEdit: true, allowDelete: true });
    expect(log).toHaveLength(1);
    expect(log[0].preset).toBe(gold);
    manager.allowDelete = false;
    const newcomer = creator.variablePresets.presets[1];
    expect(manager.getPresetOperations(newcomer)).toStrictEqual({ allowEdit: false, allowDelete: false });
    expect(log).toHaveLength(2);
    expect(log[1].allowDelete).toBeFalsy();
  });
  test("setPresets writes the host's own container and keeps the companion", () => {
    const container = createContainer();
    const creator = new CreatorTester({ variablePresets: container });
    const manager = getManager(creator);
    const model = creator.variablePresetsModel;
    const question = model.getVariableQuestion("customerTier");
    manager.setPresets([{ name: "Only one", variables: { customerTier: "basic" } }]);
    expect(creator.variablePresets).toBe(container);
    expect(container.definition).toBe(definition);
    expect(container.presets.map((preset: any) => preset.name)).toStrictEqual(["Only one"]);
    expect(creator.variablePresetsModel).toBe(model);
    expect(creator.variablePresetsModel.getPresetNames()).toStrictEqual(["Only one"]);
    expect(creator.variablePresetsModel.getVariableQuestion("customerTier")).toBe(question);
  });
  test("setPresets raises onVariablePresetsChanged exactly once, with reason edit", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    manager.active = "Gold customer";
    const log: Array<any> = [];
    creator.onVariablePresetsChanged.add((sender, options) => { log.push(options); });
    manager.setPresets([{ name: "Newcomer", variables: {} }], "Gold customer");
    expect(log).toHaveLength(1);
    expect(log[0].reason).toBe("edit");
    expect(log[0].activePresetName).toBe("");
    expect(manager.active).toBe("");
  });
  test("setPresets re-points the active preset to the name it is given", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    manager.active = "Gold customer";
    manager.setPresets([{ name: "Newcomer", variables: {} }], "Newcomer");
    expect(manager.active).toBe("Newcomer");
    manager.setPresets([{ name: "Newcomer", variables: {} }], "No such preset");
    expect(manager.active).toBe("");
  });
  test("showEditor is a no-op without a definition and opens the dialog with one, canEdit or not", () => {
    const noDefinition = new CreatorTester({ variablePresets: { presets: presets } });
    expect(withDialogStub(() => getManager(noDefinition).showEditor())).toHaveLength(0);
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    manager.allowEdit = false;
    manager.allowAdd = false;
    manager.allowDelete = false;
    expect(manager.canEdit).toBeFalsy();
    const calls = withDialogStub(() => manager.showEditor());
    expect(calls).toHaveLength(1);
    expect(calls[0].componentName).toBe("survey");
    expect(calls[0].title).toBe(getLocString("vp.editorTitle"));
  });
});

describe("Variable presets editor: permissions and the toolbar button (issue #7982)", () => {
  test("The button says View without a definition, Edit with one, View when nothing is allowed", () => {
    const noDefinition = new CreatorTester({ variablePresets: { presets: presets } });
    noDefinition.JSON = surveyJSON;
    expect(getPresetAction(noDefinition, "variablePresetsView").title).toBe(getLocString("vp.view"));
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    expect(getPresetAction(creator, "variablePresetsView").title).toBe(getLocString("vp.edit"));
    const locked = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(locked);
    manager.allowEdit = false;
    manager.allowAdd = false;
    manager.allowDelete = false;
    locked.JSON = surveyJSON;
    const action = getPresetAction(locked, "variablePresetsView");
    expect(action.title).toBe(getLocString("vp.view"));
    // and it still opens the structured editor, not the read-only JSON dialog
    const calls = withDialogStub(() => action.action());
    expect(calls).toHaveLength(1);
    expect(calls[0].title).toBe(getLocString("vp.editorTitle"));
  });
  test("With a definition the button is enabled with no active preset", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    expect(getManager(creator).active).toBe("");
    expect(getPresetAction(creator, "variablePresetsView").enabled).toBeTruthy();
    const noDefinition = new CreatorTester({ variablePresets: { presets: presets } });
    noDefinition.JSON = surveyJSON;
    expect(getPresetAction(noDefinition, "variablePresetsView").enabled).toBeFalsy();
  });
  test("Without a definition the button still opens the read-only JSON dialog", () => {
    const creator = new CreatorTester({ variablePresets: { presets: presets } });
    creator.JSON = surveyJSON;
    getManager(creator).active = "Gold customer";
    const action = getPresetAction(creator, "variablePresetsView");
    const calls = withDialogStub(() => action.action());
    expect(calls).toHaveLength(1);
    expect(calls[0].title).toBe(getLocString("vp.viewTitle") + " - Gold customer");
  });
  test("onVariablePresetEditing narrows one row: View instead of Edit, and no remove button", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.onVariablePresetEditing.add((sender, options) => {
      if (options.preset.name !== "Gold customer") return;
      options.allowEdit = false;
      options.allowDelete = false;
    });
    const editor = createEditor(creator);
    const matrix = getListQuestion(editor);
    expect(matrix.visibleRows).toHaveLength(3);
    const goldActions = getRowActions(matrix, 0);
    expect(goldActions.filter(action => action.id === "edit")[0].title).toBe(getLocString("vp.view"));
    expect(goldActions.filter(action => action.id === "remove-row")).toHaveLength(0);
    const otherActions = getRowActions(matrix, 1);
    expect(otherActions.filter(action => action.id === "edit")[0].title).toBe(getLocString("vp.edit"));
    expect(otherActions.filter(action => action.id === "remove-row")).toHaveLength(1);
    editor.dispose();
  });
});

describe("Variable presets editor: the list (issue #7982)", () => {
  test("The list shows names and descriptions only, in container order, as expression cells", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const editor = createEditor(creator);
    const matrix = getListQuestion(editor);
    expect(matrix.value).toStrictEqual([
      { name: "Gold customer", description: "12 years, tier gold" },
      { name: "Newcomer", description: "" },
      { name: "Tier only", description: "" }
    ]);
    expect(matrix.columns.map(column => column.name)).toStrictEqual(["name", "description"]);
    expect(matrix.columns.map(column => column.cellType)).toStrictEqual(["expression", "expression"]);
    editor.dispose();
  });
  test("allowAddRows and allowRemoveRows follow the manager's flags", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    manager.allowAdd = false;
    const editor = createEditor(creator);
    expect(getListQuestion(editor).allowAddRows).toBeFalsy();
    expect(getListQuestion(editor).allowRemoveRows).toBeTruthy();
    editor.dispose();
    manager.allowAdd = true;
    manager.allowDelete = false;
    const second = createEditor(creator);
    expect(getListQuestion(second).allowAddRows).toBeTruthy();
    expect(getListQuestion(second).allowRemoveRows).toBeFalsy();
    second.dispose();
  });
  test("Add makes a uniquely named empty preset and lands on the form", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const editor = createEditor(creator);
    const matrix = getListQuestion(editor);
    matrix.addRow();
    expect(editor.presets).toHaveLength(4);
    expect(editor.presets[3]).toStrictEqual({ name: getLocString("vp.newPresetName"), description: "", variables: {} });
    expect(editor.editingIndex).toBe(3);
    expect(editor.editSurvey.currentPageNo).toBe(1);
    expect(editor.backToList()).toBeFalsy();
    editor.editSurvey.setValue("customerTier", "basic");
    expect(editor.backToList()).toBeTruthy();
    matrix.addRow();
    expect(editor.presets[4].name).toBe(getLocString("vp.newPresetName") + " 1");
    editor.dispose();
  });
  test("A rename that changes only the case shows in the list", () => {
    // Every row has a description, so the list value survives the round trip through the form
    // unchanged but for the name - the survey's default comparison ignores case, preset names do not.
    const creator = new CreatorTester({ variablePresets: {
      definition: definition,
      presets: [{ name: "Gold", description: "tier gold", variables: { customerTier: "gold" } }]
    } });
    const editor = createEditor(creator);
    editor.editPreset(0);
    editor.editSurvey.setValue("variablePresetName", "gold");
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[0].name).toBe("gold");
    expect(getListQuestion(editor).value[0].name).toBe("gold");
    editor.dispose();
  });
  test("Remove drops the preset and the list stays in step", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const editor = createEditor(creator);
    const matrix = getListQuestion(editor);
    matrix.removeRow(1);
    expect(editor.presets.map(preset => preset.name)).toStrictEqual(["Gold customer", "Tier only"]);
    expect(matrix.value.map((row: any) => row.name)).toStrictEqual(["Gold customer", "Tier only"]);
    editor.dispose();
  });
  test("Removing every preset is allowed and apply clears the active preset", () => {
    const container = createContainer();
    const creator = new CreatorTester({ variablePresets: container });
    const manager = getManager(creator);
    manager.active = "Gold customer";
    const editor = createEditor(creator);
    const matrix = getListQuestion(editor);
    matrix.removeRow(2);
    matrix.removeRow(1);
    matrix.removeRow(0);
    expect(editor.presets).toHaveLength(0);
    expect(editor.apply()).toBeTruthy();
    expect(container.presets).toHaveLength(0);
    expect(manager.active).toBe("");
    editor.dispose();
  });
});

describe("Variable presets editor: the form (issue #7982)", () => {
  test("The definition's questions are on the form page at the root, after the two meta questions", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const editor = createEditor(creator);
    const survey = editor.editSurvey;
    expect(survey.pages).toHaveLength(2);
    expect(survey.pages[1].elements.map((element: any) => element.name)).toStrictEqual([
      "variablePresetName", "variablePresetDescription", "customerTier", "yearsInBusiness"
    ]);
    expect(survey.getQuestionByName("customerTier").title).toBe("Customer tier");
    expect(survey.getQuestionByName("variablePresetName").title).toBe(getLocString("vp.presetName"));
    expect(survey.getQuestionByName("variablePresetDescription").title).toBe(getLocString("vp.presetDescription"));
    editor.dispose();
  });
  test("A two-page definition becomes two panels and the survey still has two pages", () => {
    const creator = new CreatorTester({ variablePresets: {
      definition: {
        pages: [
          { name: "who", title: "The customer", elements: [{ type: "text", name: "customerTier" }] },
          { name: "how", title: "The contract", elements: [{ type: "text", name: "yearsInBusiness" }] }
        ]
      },
      presets: [{ name: "One", variables: {} }]
    } });
    const editor = createEditor(creator);
    const survey = editor.editSurvey;
    expect(survey.pages).toHaveLength(2);
    const elements: Array<any> = survey.pages[1].elements;
    expect(elements.map(element => element.name)).toStrictEqual([
      "variablePresetName", "variablePresetDescription", "who", "how"
    ]);
    expect(elements[2].getType()).toBe("panel");
    expect(elements[2].title).toBe("The customer");
    expect(elements[3].title).toBe("The contract");
    expect(survey.getQuestionByName("yearsInBusiness")).toBeTruthy();
    editor.dispose();
  });
  test("A definition variable named variablePresetName moves the meta question aside", () => {
    const creator = new CreatorTester({ variablePresets: {
      definition: { elements: [
        { type: "text", name: "variablePresetName" },
        { type: "text", name: "variablePresetsList" }
      ] },
      presets: [{ name: "One", variables: { variablePresetName: "a variable", variablePresetsList: "another" } }]
    } });
    const editor = createEditor(creator);
    const survey = editor.editSurvey;
    expect(survey.pages[1].elements.map((element: any) => element.name)).toStrictEqual([
      "variablePresetName_1", "variablePresetDescription", "variablePresetName", "variablePresetsList"
    ]);
    expect(getListQuestion(editor).name).toBe("variablePresetsList_1");
    editor.editPreset(0);
    expect(survey.getValue("variablePresetName_1")).toBe("One");
    expect(survey.getValue("variablePresetName")).toBe("a variable");
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[0].variables).toStrictEqual({ variablePresetName: "a variable", variablePresetsList: "another" });
    expect(editor.presets[0].name).toBe("One");
    editor.dispose();
  });
  test("A visibleIf between two variables works on the form page", () => {
    const creator = new CreatorTester({ variablePresets: {
      definition: { elements: [
        { type: "dropdown", name: "customerTier", choices: ["basic", "gold"] },
        { type: "text", name: "goldSince", visibleIf: "{customerTier} = 'gold'" }
      ] },
      presets: [
        { name: "Gold", variables: { customerTier: "gold" } },
        { name: "Basic", variables: { customerTier: "basic" } }
      ]
    } });
    const editor = createEditor(creator);
    editor.editPreset(0);
    expect(editor.editSurvey.getQuestionByName("goldSince").isVisible).toBeTruthy();
    editor.backToList();
    editor.editPreset(1);
    expect(editor.editSurvey.getQuestionByName("goldSince").isVisible).toBeFalsy();
    editor.dispose();
  });
  test("backToList refuses an invalid form and leaves the errors on screen", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const editor = createEditor(creator);
    editor.editPreset(0);
    editor.editSurvey.setValue("customerTier", undefined);
    expect(editor.backToList()).toBeFalsy();
    expect(editor.editSurvey.currentPageNo).toBe(1);
    expect(editor.editingIndex).toBe(0);
    expect(editor.editSurvey.getQuestionByName("customerTier").errors).toHaveLength(1);
    editor.dispose();
  });
  test("backToList writes the working copy and never the host's container", () => {
    const container = createContainer();
    const creator = new CreatorTester({ variablePresets: container });
    const editor = createEditor(creator);
    editor.editPreset(0);
    editor.editSurvey.setValue("variablePresetName", "Platinum customer");
    editor.editSurvey.setValue("customerTier", "platinum");
    expect(editor.backToList()).toBeTruthy();
    expect(editor.editingIndex).toBe(-1);
    expect(editor.editSurvey.currentPageNo).toBe(0);
    expect(editor.presets[0].name).toBe("Platinum customer");
    expect(editor.presets[0].variables).toStrictEqual({ customerTier: "platinum", yearsInBusiness: 12 });
    expect(getListQuestion(editor).value[0].name).toBe("Platinum customer");
    expect(container.presets[0].name).toBe("Gold customer");
    expect(container.presets[0].variables).toStrictEqual({ customerTier: "gold", yearsInBusiness: 12 });
    editor.dispose();
  });
  test("An empty optional variable and an empty description produce no key at all", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const editor = createEditor(creator);
    editor.editPreset(2);
    expect(editor.editSurvey.getValue("yearsInBusiness")).toBeUndefined();
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[2].variables).toStrictEqual({ customerTier: "platinum" });
    expect(Object.keys(editor.presets[2])).not.toContain("description");
    editor.editPreset(0);
    editor.editSurvey.setValue("variablePresetDescription", "");
    expect(editor.backToList()).toBeTruthy();
    expect(Object.keys(editor.presets[0])).not.toContain("description");
    editor.dispose();
  });
  test("A lower-case variable name opens the right question and round-trips as the definition spells it", () => {
    const creator = new CreatorTester({ variablePresets: {
      definition: definition,
      presets: [{ name: "Odd casing", variables: { customertier: "gold", extra: 1 } }]
    } });
    const editor = createEditor(creator);
    editor.editPreset(0);
    expect(editor.editSurvey.getQuestionByName("customerTier").value).toBe("gold");
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[0].variables).toStrictEqual({ customerTier: "gold", extra: 1 });
    editor.dispose();
  });
  test("Display mode: a preset that may not be edited is shown and never written", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.onVariablePresetEditing.add((sender, options) => {
      if (options.preset.name === "Gold customer") options.allowEdit = false;
    });
    const editor = createEditor(creator);
    editor.editPreset(0);
    expect(editor.editSurvey.mode).toBe("display");
    editor.editSurvey.setValue("customerTier", "basic");
    expect(editor.backToList()).toBeTruthy();
    expect(editor.editSurvey.mode).toBe("edit");
    expect(editor.presets[0].variables).toStrictEqual({ customerTier: "gold", yearsInBusiness: 12 });
    editor.editPreset(1);
    expect(editor.editSurvey.mode).toBe("edit");
    editor.dispose();
  });
  test("Display mode: with canEdit false the list has no add button and no remove actions", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    manager.allowEdit = false;
    manager.allowAdd = false;
    manager.allowDelete = false;
    const editor = createEditor(creator);
    expect(editor.editSurvey.mode).toBe("display");
    const matrix = getListQuestion(editor);
    expect(matrix.canAddRow).toBeFalsy();
    expect(getRowActions(matrix, 0).filter(action => action.id === "remove-row")).toHaveLength(0);
    expect(getRowActions(matrix, 0).filter(action => action.id === "edit")[0].title).toBe(getLocString("vp.view"));
    matrix.addRow();
    expect(editor.presets).toHaveLength(3);
    editor.editPreset(0);
    expect(editor.editSurvey.mode).toBe("display");
    editor.dispose();
  });
});

describe("Variable presets editor: apply (issue #7982)", () => {
  test("apply refuses an invalid form and a duplicate name, and takes two names differing by case", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const editor = createEditor(creator);
    editor.editPreset(0);
    editor.editSurvey.setValue("customerTier", undefined);
    expect(editor.apply()).toBeFalsy();
    editor.editSurvey.setValue("customerTier", "gold");
    editor.editSurvey.setValue("variablePresetName", "Newcomer");
    expect(editor.apply()).toBeFalsy();
    expect(editor.editSurvey.getQuestionByName("variablePresetName").errors[0].locText.textOrHtml)
      .toBe(getLocString("vp.presetNameIsNotUnique"));
    editor.editSurvey.setValue("variablePresetName", "Gold");
    expect(editor.backToList()).toBeTruthy();
    editor.editPreset(1);
    editor.editSurvey.setValue("variablePresetName", "gold");
    expect(editor.apply()).toBeTruthy();
    expect(creator.variablePresets.presets.map((preset: any) => preset.name)).toStrictEqual(["Gold", "gold", "Tier only"]);
    editor.dispose();
  });
  test("apply straight from the form saves what is on it", () => {
    const container = createContainer();
    const creator = new CreatorTester({ variablePresets: container });
    const editor = createEditor(creator);
    editor.editPreset(1);
    editor.editSurvey.setValue("yearsInBusiness", 3);
    expect(editor.apply()).toBeTruthy();
    expect(container.presets[1].variables).toStrictEqual({ customerTier: "basic", yearsInBusiness: 3 });
    editor.dispose();
  });
  test("apply from the list alone, with the form never visited", () => {
    const container = createContainer();
    const creator = new CreatorTester({ variablePresets: container });
    const editor = createEditor(creator);
    const matrix = getListQuestion(editor);
    matrix.removeRow(2);
    matrix.removeRow(1);
    expect(editor.apply()).toBeTruthy();
    expect(container.presets.map((preset: any) => preset.name)).toStrictEqual(["Gold customer"]);
    editor.dispose();
    const second = createEditor(creator);
    getListQuestion(second).removeRow(0);
    expect(second.apply()).toBeTruthy();
    expect(container.presets).toHaveLength(0);
    second.dispose();
  });
  test("apply writes nothing when nothing may be changed", () => {
    const container = createContainer();
    const creator = new CreatorTester({ variablePresets: container });
    const manager = getManager(creator);
    manager.allowEdit = false;
    manager.allowAdd = false;
    manager.allowDelete = false;
    const hostPresets = container.presets;
    const gold = hostPresets[0];
    let counter = 0;
    creator.onVariablePresetsChanged.add(() => { counter++; });
    const editor = createEditor(creator);
    editor.editPreset(0);
    expect(editor.apply()).toBeTruthy();
    expect(container.presets).toBe(hostPresets);
    expect(container.presets[0]).toBe(gold);
    expect(counter).toBe(0);
    editor.dispose();
  });
  test("apply writes through setPresets: the same container, one event, the definition untouched", () => {
    const container = createContainer();
    const creator = new CreatorTester({ variablePresets: container });
    const log: Array<any> = [];
    creator.onVariablePresetsChanged.add((sender, options) => { log.push(options); });
    const editor = createEditor(creator);
    editor.editPreset(0);
    editor.editSurvey.setValue("yearsInBusiness", 13);
    expect(editor.apply()).toBeTruthy();
    expect(creator.variablePresets).toBe(container);
    expect(container.definition).toBe(definition);
    expect(container.presets[0].variables).toStrictEqual({ customerTier: "gold", yearsInBusiness: 13 });
    expect(log).toHaveLength(1);
    expect(log[0].reason).toBe("edit");
    editor.dispose();
  });
  test("Deleting the active preset re-points it, and the last edited one takes over", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const manager = getManager(creator);
    manager.active = "Gold customer";
    const editor = createEditor(creator);
    getListQuestion(editor).removeRow(0);
    editor.editPreset(0);
    expect(editor.apply()).toBeTruthy();
    expect(manager.active).toBe("Newcomer");
    editor.dispose();
  });
  test("Renaming an inactive preset leaves the run alone; editing the active one's values re-runs it", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    const manager = getManager(creator);
    manager.active = "Gold customer";
    const model = getPreviewModel(creator);
    const survey = model.survey;
    survey.setValue("q1", "kept");
    const renamer = createEditor(creator);
    renamer.editPreset(1);
    renamer.editSurvey.setValue("variablePresetName", "Just signed up");
    expect(renamer.apply()).toBeTruthy();
    expect(model.survey).toBe(survey);
    expect(model.survey.getValue("q1")).toBe("kept");
    renamer.dispose();
    const editor = createEditor(creator);
    editor.editPreset(0);
    editor.editSurvey.setValue("yearsInBusiness", 20);
    expect(editor.apply()).toBeTruthy();
    expect(model.survey).not.toBe(survey);
    expect(model.survey.getVariable("yearsinbusiness")).toBe(20);
    expect(model.survey.getValue("doubled")).toBe(40);
    editor.dispose();
  });
  test("Preview follows an applied edit: the switcher's items and the branch", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    creator.JSON = surveyJSON;
    const manager = getManager(creator);
    manager.active = "Newcomer";
    const model = getPreviewModel(creator);
    expect(model.survey.getQuestionByName("gold").isVisible).toBeFalsy();
    const editor = createEditor(creator);
    getListQuestion(editor).removeRow(2);
    editor.editPreset(1);
    editor.editSurvey.setValue("customerTier", "gold");
    editor.editSurvey.setValue("variablePresetName", "Newcomer, promoted");
    expect(editor.apply()).toBeTruthy();
    const action = getPresetAction(creator, "variablePresetSelector");
    const items: Array<IAction> = action.popupModel.contentComponentData.model.actions;
    expect(items.map(item => item.id)).toStrictEqual(["Gold customer", "Newcomer, promoted"]);
    expect(manager.active).toBe("Newcomer, promoted");
    expect(model.survey.getQuestionByName("gold").isVisible).toBeTruthy();
    editor.dispose();
  });
  test("dispose disposes the edit survey and nothing of the creator's", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const model = creator.variablePresetsModel;
    model.getVariableNames();
    const editor = createEditor(creator);
    const editSurvey = editor.editSurvey;
    editor.dispose();
    expect(editSurvey.isDisposed).toBeTruthy();
    expect(creator.variablePresetsModel).toBe(model);
    expect(model["isDisposedValue"]).toBeFalsy();
    expect(model.getVariableQuestion("customerTier")).toBeTruthy();
  });
});

describe("Variable presets editor: the dialog theme (issue #7982)", () => {
  test("Borderless and panelless, layout only, with the compact question gap", () => {
    const creator = new CreatorTester({ variablePresets: createContainer() });
    const editor = createEditor(creator);
    const survey = editor.editSurvey;
    const variables = survey.cssVariables;
    expect(variables["--sjs2-border-spread-form-default"]).toBe("var(--sjs2-border-width-x000)");
    expect(variables["--sjs2-is-panelless"]).toBe("true");
    expect(variables["--sjs2-layout-component-page-content-area-gap-vertical"]).toBe("var(--sjs2-spacing-medium-vertical)");
    // survey-core fills these in for every panelless theme: the panel frame stays transparent
    expect(variables["--sjs2-color-component-panel-simple-default-bg"]).toBe("transparent");
    expect(variables["--sjs2-color-component-panel-simple-default-border"]).toBe("transparent");
    // the palette is the creator's: no color of the theme reaches the dialog
    const allowedColors = [
      "--sjs2-color-component-panel-default-bg",
      "--sjs2-color-utility-surface-survey",
      "--sjs2-color-component-panel-simple-default-bg",
      "--sjs2-color-component-panel-simple-default-border"
    ];
    expect(Object.keys(variables).filter(key => key.indexOf("--sjs2-color-") === 0 && allowedColors.indexOf(key) < 0)).toStrictEqual([]);
    expect(variables["--sjs2-color-utility-surface-survey"]).toBe("var(--sjs2-color-bg-basic-primary)");
    editor.dispose();
  });
});

describe("Variable presets editor: nested values (nested data, survey-library #12233)", () => {
  const nestedElements = [
    { type: "panel", name: "user", valueName: "users", title: "User", elements: [
      { type: "dropdown", name: "tier", title: "Tier", choices: ["gold", "silver"], isRequired: true },
      { type: "text", name: "name", title: "Name" }] },
    { type: "dropdown", name: "role", choices: ["admin", "user"] }
  ];
  const nestedDefinition = { elements: nestedElements };
  const goldVariables = { users: { tier: "gold", name: "Ann" }, role: "admin" };
  function createNestedContainer(definition: any = nestedDefinition, variables?: any): any {
    return {
      definition: definition,
      presets: [
        { name: "Gold", description: "The gold one", variables: variables || Helpers.getUnbindValue(goldVariables) },
        { name: "Silver", variables: { users: { tier: "silver", name: "Bob" }, role: "user" } }
      ]
    };
  }
  const answers: { [name: string]: any } = { tier: "gold", name: "Ann", role: "admin" };
  // The rule C8 states: for the same answers, the form saves exactly the data that the definition's
  // own survey holds.
  function getDefinitionData(definition: any): any {
    const survey = new SurveyModel(definition);
    Object.keys(answers).forEach(name => { survey.getQuestionByName(name).value = answers[name]; });
    const res = survey.data;
    survey.dispose();
    return res;
  }
  function saveNewPreset(definition: any): any {
    const creator = new CreatorTester({ variablePresets: { definition: definition, presets: [] } });
    const editor = createEditor(creator);
    getListQuestion(editor).addRow();
    Object.keys(answers).forEach(name => { editor.editSurvey.getQuestionByName(name).value = answers[name]; });
    expect(editor.backToList()).toBeTruthy();
    const res = editor.presets[0].variables;
    editor.dispose();
    return res;
  }
  function openPreset(definition: any, variables: any): VariablePresetsEditor {
    const creator = new CreatorTester({ variablePresets: createNestedContainer(definition, variables) });
    const editor = createEditor(creator);
    editor.editPreset(0);
    return editor;
  }
  function getFormValues(editor: VariablePresetsEditor): any {
    const res: any = {};
    Object.keys(answers).forEach(name => { res[name] = editor.editSurvey.getQuestionByName(name).value; });
    return res;
  }

  test("auto: opening a nested preset fills the inner questions and saving keeps the nesting", () => {
    const editor = openPreset(nestedDefinition, Helpers.getUnbindValue(goldVariables));
    expect(getFormValues(editor)).toStrictEqual(answers);
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[0].variables).toStrictEqual(goldVariables);
    editor.dispose();
  });
  test("auto: a new preset gets nested variables, and a missing required inner question blocks saving", () => {
    expect(saveNewPreset(nestedDefinition)).toStrictEqual(goldVariables);
    expect(getDefinitionData(nestedDefinition)).toStrictEqual(goldVariables);
    const creator = new CreatorTester({ variablePresets: { definition: nestedDefinition, presets: [] } });
    const editor = createEditor(creator);
    getListQuestion(editor).addRow();
    editor.editSurvey.getQuestionByName("name").value = "Ann";
    expect(editor.backToList()).toBeFalsy();
    const tier = editor.editSurvey.getQuestionByName("tier");
    expect(tier.errors).toHaveLength(1);
    expect(tier.errors[0].getText()).toBe(new SurveyModel().getLocalizationString("requiredError"));
    editor.dispose();
  });
  test("panel mode: a panel without valueName nests under its name", () => {
    const definition = { dataNesting: "panel", elements: [
      { type: "panel", name: "user", elements: nestedElements[0].elements },
      nestedElements[1]
    ] };
    const expected = { user: { tier: "gold", name: "Ann" }, role: "admin" };
    expect(getDefinitionData(definition)).toStrictEqual(expected);
    expect(saveNewPreset(definition)).toStrictEqual(expected);
    const editor = openPreset(definition, Helpers.getUnbindValue(expected));
    expect(getFormValues(editor)).toStrictEqual(answers);
    editor.dispose();
  });
  test("page mode, one page: the variables are keyed under the page", () => {
    const definition = { dataNesting: "page", pages: [{ name: "page1", elements: nestedElements }] };
    const expected = { page1: goldVariables };
    expect(getDefinitionData(definition)).toStrictEqual(expected);
    expect(saveNewPreset(definition)).toStrictEqual(expected);
    const editor = openPreset(definition, Helpers.getUnbindValue(expected));
    expect(getFormValues(editor)).toStrictEqual(answers);
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[0].variables).toStrictEqual(expected);
    editor.dispose();
  });
  test("page mode, root elements: they land on page1 as in the definition", () => {
    const definition = { dataNesting: "page", elements: nestedElements };
    expect(getDefinitionData(definition)).toStrictEqual({ page1: goldVariables });
    expect(saveNewPreset(definition)).toStrictEqual({ page1: goldVariables });
  });
  test("page mode, two pages: each page keys its own variables", () => {
    const definition = { dataNesting: "page", pages: [
      { name: "page1", elements: [nestedElements[0]] },
      { name: "page2", elements: [nestedElements[1]] }
    ] };
    const expected = { page1: { users: { tier: "gold", name: "Ann" } }, page2: { role: "admin" } };
    expect(getDefinitionData(definition)).toStrictEqual(expected);
    expect(saveNewPreset(definition)).toStrictEqual(expected);
    const editor = openPreset(definition, Helpers.getUnbindValue(expected));
    expect(getFormValues(editor)).toStrictEqual(answers);
    editor.dispose();
  });
  test("panelAndPage mode: pages and panels nest by name", () => {
    const definition = { dataNesting: "panelAndPage", pages: [{ name: "page1", elements: [
      { type: "panel", name: "user", elements: nestedElements[0].elements },
      nestedElements[1]
    ] }] };
    const expected = { page1: { user: { tier: "gold", name: "Ann" }, role: "admin" } };
    expect(getDefinitionData(definition)).toStrictEqual(expected);
    expect(saveNewPreset(definition)).toStrictEqual(expected);
  });
  test("auto: a page with its own valueName nests, as the only page and as one of two", () => {
    const onePage = { pages: [{ name: "page1", valueName: "account", elements: nestedElements }] };
    expect(getDefinitionData(onePage)).toStrictEqual({ account: goldVariables });
    expect(saveNewPreset(onePage)).toStrictEqual({ account: goldVariables });
    const twoPages = { pages: [
      { name: "page1", valueName: "account", elements: [nestedElements[0]] },
      { name: "page2", elements: [nestedElements[1]] }
    ] };
    const expected = { account: { users: { tier: "gold", name: "Ann" } }, role: "admin" };
    expect(getDefinitionData(twoPages)).toStrictEqual(expected);
    expect(saveNewPreset(twoPages)).toStrictEqual(expected);
    const editor = openPreset(twoPages, Helpers.getUnbindValue(expected));
    expect(getFormValues(editor)).toStrictEqual(answers);
    editor.dispose();
  });
  test("none mode: a panel valueName does not nest, in the definition or in the form", () => {
    const definition = { dataNesting: "none", elements: nestedElements };
    expect(getDefinitionData(definition)).toStrictEqual(answers);
    expect(saveNewPreset(definition)).toStrictEqual(answers);
    const editor = openPreset(definition, { ...answers });
    expect(getFormValues(editor)).toStrictEqual(answers);
    editor.dispose();
  });
  // Answers the inner questions, the ones inside a dynamic panel's panel and a detail panel included,
  // and returns the survey's data.
  function answerRecords(survey: SurveyModel): any {
    survey.getQuestionByName("a").value = "x";
    const list: any = survey.getQuestionByName("list");
    list.panels[0].getQuestionByName("b").value = "y";
    const matrix: any = survey.getQuestionByName("m");
    const row = matrix.visibleRows[0];
    row.showDetailPanel();
    row.detailPanel.getQuestionByName("e").value = "z";
    return survey.data;
  }
  test.each(["none", "auto", "panel", "page", "panelAndPage"])("%s mode: nested panels, and panels inside records, keep the definition's shape", (dataNesting) => {
    const definition = { dataNesting: dataNesting, elements: [
      { type: "panel", name: "outer", valueName: "o", elements: [
        { type: "panel", name: "deeper", valueName: "d", elements: [{ type: "text", name: "a" }] }
      ] },
      { type: "paneldynamic", name: "list", panelCount: 1, templateElements: [
        { type: "panel", name: "inner", valueName: "in", elements: [{ type: "text", name: "b" }] }
      ] },
      { type: "matrixdynamic", name: "m", rowCount: 1, columns: [{ name: "c", cellType: "text" }], detailPanelMode: "underRow", detailElements: [
        { type: "panel", name: "detail", valueName: "det", elements: [{ type: "text", name: "e" }] }
      ] }
    ] };
    const survey = new SurveyModel(definition);
    const expected = answerRecords(survey);
    survey.dispose();
    // the by-name modes are checked against the definition's own data only
    if (dataNesting === "none") {
      expect(expected).toStrictEqual({ a: "x", list: [{ b: "y" }], m: [{ e: "z" }] });
    } else if (dataNesting === "auto") {
      expect(expected).toStrictEqual({ o: { d: { a: "x" } }, list: [{ in: { b: "y" } }], m: [{ det: { e: "z" } }] });
    }
    const creator = new CreatorTester({ variablePresets: { definition: definition, presets: [] } });
    const editor = createEditor(creator);
    getListQuestion(editor).addRow();
    answerRecords(editor.editSurvey);
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[0].variables).toStrictEqual(expected);
    editor.editPreset(0);
    expect(editor.editSurvey.getQuestionByName("a").value).toBe("x");
    expect((<any>editor.editSurvey.getQuestionByName("list")).panels[0].getQuestionByName("b").value).toBe("y");
    editor.dispose();
  });
  test("Keys in another spelling open the definition's questions and save in its spelling", () => {
    const editor = openPreset(nestedDefinition, { Users: { Tier: "gold", Nope: 1 }, ROLE: "user" });
    expect(editor.editSurvey.getQuestionByName("tier").value).toBe("gold");
    expect(editor.editSurvey.getQuestionByName("role").value).toBe("user");
    expect(editor.backToList()).toBeTruthy();
    // an inner key the definition does not know is kept as written, like a root one
    expect(editor.presets[0].variables).toStrictEqual({ users: { tier: "gold", Nope: 1 }, role: "user" });
    editor.dispose();
  });
  test("The editor's own name and description survive opening and saving a nested preset", () => {
    const editor = openPreset(nestedDefinition, Helpers.getUnbindValue(goldVariables));
    expect(editor.editSurvey.getValue("variablePresetName")).toBe("Gold");
    expect(editor.editSurvey.getValue("variablePresetDescription")).toBe("The gold one");
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[0]).toStrictEqual({ name: "Gold", description: "The gold one", variables: goldVariables });
    editor.dispose();
  });
  test("A preset key the definition does not know moves the editor's own key aside and round-trips", () => {
    const variables = { users: { tier: "gold" }, variablePresetName: "a stray key" };
    const editor = openPreset(nestedDefinition, Helpers.getUnbindValue(variables));
    expect(editor.editSurvey.getValue("variablePresetName_1")).toBe("Gold");
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[0].name).toBe("Gold");
    expect(editor.presets[0].variables).toStrictEqual(variables);
    editor.dispose();
  });
  test("A literal dotted key is no path: it stays an unknown key, as the companion reads it", () => {
    const variables = { "users.tier": "gold", role: "admin" };
    const editor = openPreset(nestedDefinition, { ...variables });
    expect(editor.editSurvey.getQuestionByName("tier").value).toBeUndefined();
    expect(editor.editSurvey.getValue("tier")).toBeUndefined();
    expect(editor.backToList()).toBeFalsy();
    editor.editSurvey.getQuestionByName("tier").value = "silver";
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[0].variables).toStrictEqual({ "users.tier": "gold", users: { tier: "silver" }, role: "admin" });
    editor.dispose();
  });
  test("The form keeps the definition's shape when a host changes the serializer default of dataNesting", () => {
    const prop = Serializer.findProperty("survey", "dataNesting");
    const oldDefault = prop.defaultValue;
    try {
      prop.defaultValue = "none";
      const auto = { dataNesting: "auto", elements: nestedElements };
      expect(getDefinitionData(auto)).toStrictEqual(goldVariables);
      expect(saveNewPreset(auto)).toStrictEqual(goldVariables);
      prop.defaultValue = "panel";
      const twoPages = { pages: [
        { name: "page1", elements: [{ type: "text", name: "tier" }, { type: "text", name: "name" }] },
        { name: "page2", elements: [{ type: "text", name: "role" }] }
      ] };
      expect(getDefinitionData(twoPages)).toStrictEqual(answers);
      expect(saveNewPreset(twoPages)).toStrictEqual(answers);
    } finally {
      prop.defaultValue = oldDefault;
    }
  });
  test.each(["none", "auto"])("%s mode: a panel in a dynamic panel inside a detail panel keeps the definition's shape", (dataNesting) => {
    const definition = { dataNesting: dataNesting, elements: [
      { type: "matrixdynamic", name: "m", rowCount: 1, columns: [{ name: "c", cellType: "text" }], detailPanelMode: "underRow", detailElements: [
        { type: "paneldynamic", name: "items", panelCount: 1, templateElements: [
          { type: "panel", name: "p1", valueName: "address", elements: [{ type: "text", name: "street" }] }
        ] }
      ] }
    ] };
    const answer = (survey: SurveyModel): any => {
      const row = (<any>survey.getQuestionByName("m")).visibleRows[0];
      row.showDetailPanel();
      const items = row.detailPanel.getQuestionByName("items");
      if (items.panels.length === 0) items.addPanel();
      items.panels[0].getQuestionByName("street").value = "s";
      return survey.data;
    };
    const survey = new SurveyModel(definition);
    const expected = answer(survey);
    survey.dispose();
    expect(expected).toStrictEqual(dataNesting === "none" ? { m: [{ items: [{ street: "s" }] }] } : { m: [{ items: [{ address: { street: "s" } }] }] });
    const creator = new CreatorTester({ variablePresets: { definition: definition, presets: [] } });
    const editor = createEditor(creator);
    getListQuestion(editor).addRow();
    answer(editor.editSurvey);
    expect(editor.backToList()).toBeTruthy();
    expect(editor.presets[0].variables).toStrictEqual(expected);
    editor.dispose();
  });
  test("An element of an unknown type does not shift a nameless container's key", () => {
    const definition = { dataNesting: "none", elements: [
      { type: "nosuchtype" },
      { type: "panel", valueName: "users", elements: nestedElements[0].elements },
      nestedElements[1]
    ] };
    expect(getDefinitionData(definition)).toStrictEqual(answers);
    expect(saveNewPreset(definition)).toStrictEqual(answers);
  });
});
