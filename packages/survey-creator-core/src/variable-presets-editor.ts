import {
  Action, Helpers, IAction, IDialogOptions, ISurveyVariablePreset, QuestionMatrixDynamicModel,
  settings as surveySettings, SurveyModel
} from "survey-core";
import { SurveyCreatorModel } from "./creator-base";
import { VariablePresetsManager } from "./variable-presets";
import { getLocString } from "./editorLocalization";

// The Edit dialog behind the Preview toolbar button (issue #7982): one survey with two pages - the
// preset list, and the definition itself as the form for one preset - shown through
// settings.showDialog the way src/ui-preset-editor/presets-manager.ts shows its own editors. There
// is no new framework component: a dialog holding a plain survey needs none.
//
// Both constructor arguments, because they answer different questions: the creator gives
// createSurvey, rootElement, the container and the core companion; the manager gives the
// permission flags, getPresetOperations, the active preset and setPresets. The manager's own
// creator stays private.
export class VariablePresetsEditor {
  public readonly editSurvey: SurveyModel;
  // The working copy: a deep copy of the host's presets. Nothing the user does here reaches the
  // host's objects until apply(); cancel discards it.
  private presetsValue: Array<ISurveyVariablePreset>;
  private editingIndexValue: number = -1;
  // The name and not the index, so that removing a row needs no index arithmetic in a second place.
  private lastEditedName: string = "";
  private listKey: string;
  private nameKey: string;
  private descriptionKey: string;
  private backAction: Action;

  constructor(private creator: SurveyCreatorModel, private manager: VariablePresetsManager) {
    this.presetsValue = Helpers.getUnbindValue(creator.variablePresets?.presets || []);
    // The list matrix and the two meta questions share the data object with the variables, so their
    // names must not be variable names. A definition declaring a variable called
    // "variablePresetName" is absurd but legal, and the editor must not lose that variable's value
    // to the name box - the meta question moves aside instead. Case-insensitively, because that is
    // how variable names match.
    this.listKey = this.getUniqueName("variablePresetsList");
    this.nameKey = this.getUniqueName("variablePresetName");
    this.descriptionKey = this.getUniqueName("variablePresetDescription");
    this.editSurvey = creator.createSurvey(this.createJson(), "variable-presets-editor", this);
    this.editSurvey.showNavigationButtons = false;
    this.editSurvey.questionErrorLocation = "bottom";
    this.editSurvey["cssVariables"] = {};
    const matrix = this.listQuestion;
    if (!!matrix) {
      matrix.allowAddRows = this.manager.allowAdd;
      matrix.allowRemoveRows = this.manager.allowDelete;
    }
    this.backAction = new Action({
      id: "variablePresetsBack",
      title: getLocString("vp.back"),
      visible: false,
      appearance: { mode: "secondary" },
      action: () => { this.backToList(); }
    });
    this.setupEvents();
    this.setEditSurveyMode(-1);
    this.updateList();
  }
  public get presets(): Array<ISurveyVariablePreset> {
    return this.presetsValue;
  }
  public get editingIndex(): number {
    return this.editingIndexValue;
  }
  public showDialog(): void {
    const popupModel = surveySettings.showDialog?.(<IDialogOptions>{
      componentName: "survey",
      data: { survey: this.editSurvey, model: this.editSurvey },
      onApply: (): boolean => this.apply(),
      onHide: (): void => this.dispose(),
      cssClass: "svc-property-editor svc-creator-popup svc-variable-presets",
      title: getLocString("vp.editorTitle"),
      displayMode: "popup"
    }, this.creator.rootElement);
    if (!popupModel || !popupModel.footerToolbar) return;
    // Back is a footer action left of Apply/Cancel, shown only while the form is open: the toolbar
    // is the one place a dialog's own navigation belongs.
    popupModel.footerToolbar.actions.splice(0, 0, this.backAction);
  }
  public editPreset(index: number): void {
    const preset = this.presetsValue[index];
    if (!preset) return;
    this.editingIndexValue = index;
    // One write, so that a visibleIf between two variables settles once instead of flickering
    // through half-assigned states. The list value goes in with it because assigning survey.data
    // replaces the whole data object.
    const data: any = {};
    data[this.listKey] = this.listQuestion?.value;
    data[this.nameKey] = preset.name;
    if (!!preset.description) {
      data[this.descriptionKey] = preset.description;
    }
    this.assignVariables(data, preset.variables);
    this.editSurvey.data = data;
    this.setEditSurveyMode(index);
    this.editSurvey.currentPageNo = 1;
    this.backAction.visible = true;
  }
  public backToList(): boolean {
    if (this.editingIndexValue < 0) return true;
    // The current page only, and the errors stay on screen when it fails: a half-typed preset is
    // neither silently saved nor silently lost.
    if (this.editSurvey.mode !== "display" && !this.editSurvey.currentPage.validate(true, true)) return false;
    this.writeForm();
    this.editingIndexValue = -1;
    this.setEditSurveyMode(-1);
    this.updateList();
    this.editSurvey.currentPageNo = 0;
    this.backAction.visible = false;
    return true;
  }
  public apply(): boolean {
    // The only validation apply() performs, and it validates the form page alone. Never
    // editSurvey.validate(true, true): that checks page 2 as well - a required name, and whatever
    // the definition marks required - so a user who opened the list, deleted two presets and never
    // visited the form would be told the form is invalid and could not apply. The working copy
    // needs no second pass: every preset in it either came from the host or went through
    // backToList().
    if (this.editingIndexValue >= 0 && !this.backToList()) return false;
    const activeName = this.manager.active;
    let name = "";
    if (!!activeName && !!this.getPreset(activeName)) {
      name = activeName;
    } else if (!!this.lastEditedName && !!this.getPreset(this.lastEditedName)) {
      name = this.lastEditedName;
    }
    this.manager.setPresets(this.presetsValue, name);
    return true;
  }
  public dispose(): void {
    this.editSurvey?.dispose();
    this.backAction?.dispose();
    this.presetsValue = [];
    this.creator = undefined;
    this.manager = undefined;
  }
  private get listQuestion(): QuestionMatrixDynamicModel {
    return <QuestionMatrixDynamicModel>this.editSurvey?.getQuestionByName(this.listKey);
  }
  private createJson(): any {
    const metaElements: Array<any> = [
      {
        type: "text", name: this.nameKey, title: getLocString("vp.presetName"),
        isRequired: true, requiredErrorText: getLocString("vp.presetNameIsEmpty")
      },
      { type: "text", name: this.descriptionKey, title: getLocString("vp.presetDescription") }
    ];
    return {
      pages: [
        {
          name: "variablePresetsList",
          elements: [{
            type: "matrixdynamic",
            name: this.listKey,
            titleLocation: "hidden",
            rowCount: 0,
            hideColumnsIfEmpty: true,
            addRowText: getLocString("vp.addPreset"),
            // Expression cells render as text, so the list is a list and not a grid of inputs: all
            // editing happens on the form page.
            columns: [
              {
                name: "name", title: getLocString("vp.listNameColumn"),
                cellType: "expression", expression: "{row.name}"
              },
              {
                name: "description", title: getLocString("vp.listDescriptionColumn"),
                cellType: "expression", expression: "{row.description}"
              }
            ]
          }]
        },
        {
          name: "variablePresetEditor",
          elements: metaElements.concat(this.getDefinitionElements())
        }
      ]
    };
  }
  // The definition's elements go on the form page at the root, not inside a panel per preset: a
  // definition that says visibleIf: "{customerTier} = 'gold'" on one variable resolves
  // {customerTier} against the survey root, so nesting it would make every cross-variable rule in
  // the definition silently misbehave. At the root the definition behaves exactly as it does inside
  // SurveyVariablePresets.validateVariables, which is what these values are checked against.
  private getDefinitionElements(): Array<any> {
    const definition = this.creator.variablePresets?.definition;
    if (!definition) return [];
    const json = Helpers.getUnbindValue(definition);
    const pages: Array<any> = Array.isArray(json.pages) ? json.pages : [];
    if (pages.length > 1) {
      // A definition may declare its own pages, and page 2 of a two-page wizard cannot also be
      // three pages: each definition page becomes a panel carrying that page's title and
      // description, so the author's grouping survives without its pagination.
      return pages.map((page: any, index: number) => {
        return {
          type: "panel",
          name: page.name || ("variablePresetPanel" + index),
          title: page.title,
          description: page.description,
          elements: page.elements || []
        };
      });
    }
    if (pages.length === 1) return pages[0].elements || [];
    return Array.isArray(json.elements) ? json.elements : [];
  }
  private setupEvents(): void {
    const survey = this.editSurvey;
    survey.onGetMatrixRowActions.add((sender, options) => {
      if (options.question.name !== this.listKey) return;
      const index = (<any>options.row).index;
      const preset = this.presetsValue[index];
      if (!preset) return;
      const operations = this.manager.getPresetOperations(preset);
      const allowEdit = operations.allowEdit && this.manager.canEdit;
      options.actions.push(<IAction>{
        id: "edit",
        iconName: allowEdit ? "icon-edit" : "icon-visible-24x24",
        iconSize: "auto",
        component: "sv-action-bar-item",
        showTitle: false,
        location: "end",
        title: getLocString(allowEdit ? "vp.edit" : "vp.view"),
        action: () => { this.editPreset(index); }
      });
      // The default actions arrive with the remove button among them, so this is also where a
      // per-preset delete is withheld.
      const removeAction = options.actions.filter(action => action.id === "remove-row")[0];
      if (!removeAction) return;
      if (operations.allowDelete) {
        removeAction.tooltip = getLocString("vp.deletePreset");
      } else {
        options.actions.splice(options.actions.indexOf(removeAction), 1);
      }
    });
    survey.onMatrixAllowRemoveRow.add((sender, options) => {
      if (options.question.name !== this.listKey) return;
      const preset = this.presetsValue[options.rowIndex];
      if (!preset) return;
      options.allow = this.manager.getPresetOperations(preset).allowDelete;
    });
    survey.onMatrixRowAdding.add((sender, options) => {
      if (options.question.name !== this.listKey) return;
      // The matrix's own add button - it is already positioned, localized and keyboard-reachable -
      // but not the matrix's own row: the row is refused and the preset is pushed onto the working
      // copy here, so that the list is never written from inside the matrix's own add. Adding lands
      // on the form, which is where the name and the values are actually typed.
      options.allow = false;
      if (!this.manager.canEdit || !this.manager.allowAdd) return;
      this.presetsValue.push({ name: this.getNewPresetName(), description: "", variables: {} });
      this.updateList();
      this.editPreset(this.presetsValue.length - 1);
    });
    survey.onMatrixRowRemoved.add((sender, options) => {
      if (options.question.name !== this.listKey) return;
      this.presetsValue.splice(options.rowIndex, 1);
      this.updateList();
    });
    survey.onValidateQuestion.add((sender, options) => {
      if (options.name !== this.nameKey || !options.value) return;
      // Preset names are case-sensitive identifiers, so "Gold" and "gold" are two presets.
      for (let i = 0; i < this.presetsValue.length; i++) {
        if (i !== this.editingIndexValue && this.presetsValue[i].name === options.value) {
          options.error = getLocString("vp.presetNameIsNotUnique");
          return;
        }
      }
    });
  }
  // Survey mode is per-survey and not per-page, so the form's mode is set on the way in and
  // restored on the way back; one place for it, so that the two call sites cannot drift. Display
  // mode and not readOnly per question: it is what survey-core renders values with, and it needs no
  // walk over the definition's elements. It covers the name and description boxes too, which is
  // right - a preset whose values may not be edited may not be renamed either.
  private setEditSurveyMode(index: number): void {
    let mode = "edit";
    if (!this.manager.canEdit) {
      mode = "display";
    } else if (index >= 0) {
      const preset = this.presetsValue[index];
      if (!!preset && !this.manager.getPresetOperations(preset).allowEdit) {
        mode = "display";
      }
    }
    this.editSurvey.mode = mode;
  }
  private updateList(): void {
    const matrix = this.listQuestion;
    if (!matrix) return;
    // The variables never enter the matrix value: the list is a list of names and descriptions.
    const value = this.presetsValue.map(preset => {
      return { name: preset.name, description: preset.description || "" };
    });
    if (Helpers.isTwoValueEquals(matrix.value, value)) return;
    matrix.value = value;
  }
  private writeForm(): void {
    const preset = this.presetsValue[this.editingIndexValue];
    if (!preset) return;
    // Nothing is written in display mode - asserted here rather than relying on the survey having
    // kept every editor read-only.
    if (this.editSurvey.mode === "display") return;
    const data = this.editSurvey.data;
    const variables: any = {};
    Object.keys(data).forEach(key => {
      if (key === this.listKey || key === this.nameKey || key === this.descriptionKey) return;
      // The keys are the definition's own data keys, so valueName is honoured for free. survey.data
      // already omits empty questions, so a preset that leaves an optional variable blank simply
      // has no key and the host's setVariable is never called for it.
      variables[key] = data[key];
    });
    preset.name = data[this.nameKey];
    const description = data[this.descriptionKey];
    if (!!description) {
      preset.description = description;
    } else {
      // so that a preset that never had one does not gain description: "" on the round trip
      delete preset.description;
    }
    preset.variables = variables;
    this.lastEditedName = preset.name;
  }
  // The one place where the two naming rules meet: variable names match case-insensitively at
  // runtime (setVariable lower-cases) and core validates { customertier: "gold" } as a perfectly
  // good preset, while survey data keys are case-sensitive - assigned as it is, that value would
  // leave the customerTier question blank and sit in the data as an orphan. A key the definition
  // does not know is kept untouched, so it round-trips unchanged.
  private assignVariables(data: any, variables: any): void {
    if (!variables) return;
    const model = this.creator.variablePresetsModel;
    Object.keys(variables).forEach(key => {
      const question = model.getVariableQuestion(key);
      data[!!question ? question.getValueName() : key] = variables[key];
    });
  }
  private getPreset(name: string): ISurveyVariablePreset {
    return this.presetsValue.filter(preset => preset.name === name)[0];
  }
  private getNewPresetName(): string {
    const base = getLocString("vp.newPresetName");
    let name = base;
    let index = 1;
    while(!!this.getPreset(name)) {
      name = base + " " + index;
      index++;
    }
    return name;
  }
  private getUniqueName(base: string): string {
    const model = this.creator.variablePresetsModel;
    let name = base;
    let index = 1;
    while(model.hasVariable(name)) {
      name = base + "_" + index;
      index++;
    }
    return name;
  }
}
