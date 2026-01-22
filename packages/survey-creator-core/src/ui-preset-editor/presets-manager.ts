import { Action, IAction, IDialogOptions, ListModel, settings, SurveyModel } from "survey-core";
import { getLocString, SurveyCreatorModel, CreatorPresets, ICreatorPresetConfig, PredefinedCreatorPresets } from "survey-creator-core";
import { presetsCss } from "./presets-theme/presets";
export class PresetsManager {
  /**
   *
   */
  constructor(private creator: SurveyCreatorModel) {

  }
  public presetsList: ListModel;

  private customPresets = [] as string[];

  private getPresetTitle(name: string) {
    return getLocString("preset.names." + name);
  }

  private presetListToItems(presets: string[]) {
    return presets
      .filter(presetName => CreatorPresets[presetName].visible !== false)
      .map(presetName => ({ id: presetName, title: this.getPresetTitle(presetName), action: (item: IAction) => {
        this.presetsList.selectedItem = item;
        //this.model.json = CreatorPresets[presetName].json;
      } })) as IAction[];
  }
  public get presetsMenuItems(): IAction[] {
    const defaultPresets = this.presetListToItems(PredefinedCreatorPresets);
    if (defaultPresets.length > 0) {
      defaultPresets.unshift({ id: "defaultSettings", title: getLocString("presets.plugin.defaultSettings"), css: "sps-list__item--label", enabled: false });
    }

    const customPresets = this.presetListToItems(this.customPresets);
    if (customPresets.length > 0) {
      customPresets.unshift({ id: "customSettings", needSeparator: true, title: getLocString("presets.plugin.savedPresets"), css: "sps-list__item--label", enabled: false });
    }
    const editItem = { id: "editPresetsList",
      needSeparator: customPresets.length + defaultPresets.length > 0,
      title: getLocString("presets.plugin.editPresetsList"),
      action: ()=>this.editPresetsList(this.applyPresetsList.bind(this))
    } as IAction;

    return [...defaultPresets, ...customPresets, editItem];
  }
  private setPresetNewName(onSet: (newName: string) => void) {
    const survey = new SurveyModel({
      showNavigationButtons: "none",
      enterKeyAction: "loseFocus",
      questionErrorLocation: "bottom",
      elements: [{
        type: "dropdown",
        name: "presetName",
        defaultValue: this.presetsList.selectedItem?.title || "",
        allowCustomChoices: true,
        choices: this.customPresets.map(i => ({ value: i, text: i })),
        titleLocation: "hidden",
        isRequired: true }]
    });
    survey.css = presetsCss;
    survey.questionErrorLocation = "bottom";
    settings.showDialog?.(<IDialogOptions>{
      componentName: "survey",
      data: { survey: survey, model: survey },
      onApply: () => {
        if (!survey.validate()) return false;
        onSet(survey.getValue("presetName"));
        return true;
      },
      cssClass: "sps-popup svc-property-editor svc-creator-popup",
      title: getLocString("presets.plugin.saveAsTitle"),
      displayMode: "popup"
    }, this.creator.rootElement);
  }

  private getPresetsListToEdit() {
    return [...PredefinedCreatorPresets.map(p =>({ title: this.getPresetTitle(p), name: p, visible: CreatorPresets[p]?.visible !== false, custom: false })),
      ...this.customPresets.map(p =>({ title: p, name: p, visible: true, custom: true }))];
  }

  private applyPresetsList(newList: any[]) {
    this.customPresets = [];
    newList.forEach(item => {
      const name = item.name || item.title;
      if ((PredefinedCreatorPresets as any).includes(name)) {
        CreatorPresets[name].visible = item.visible;
      } else {
        this.customPresets.push(name);
      }
    });
    this.updateMenu();
  }

  private editPresetsList(onSet: (newList: any[]) => void) {
    const survey = new SurveyModel({
      showNavigationButtons: "none",
      enterKeyAction: "loseFocus",
      questionErrorLocation: "bottom",
      elements: [{
        type: "matrixdynamic",
        name: "presetsList",
        columns: [
          {
            name: "title",
            title: "Title",
          },
          {
            name: "name",
            visible: false
          },
          {
            name: "visible",
            visible: false,
            cellType: "boolean",
          },
          {
            name: "custom",
            cellType: "boolean",
            visible: false,
            defaultValue: true,
          }
        ],
        rowCount: 0,
        cellType: "text",
        confirmDelete: true,
        confirmDeleteText: getLocString("presets.plugin.confirmDeleteCustomPreset"),
        addRowText: getLocString("presets.plugin.addNewPreset"),
        allowRowReorder: true,
        defaultValue: this.getPresetsListToEdit(),
        allowCustomChoices: true,
        titleLocation: "hidden",
        isRequired: true }]
    });
    survey.css = presetsCss;
    survey.onGetMatrixRowActions.add((sender, options) => {
      const removeAction = options.actions.filter(a => a.id == "remove-row")[0];
      const getRowIconName = (row) => row.getValue("visible") ? "icon-visible-24x24" : "icon-invisible-24x24";
      if (!options.row.getValue("custom")) {
        removeAction.visible = false;
        const visibleAction = new Action({
          id: "visible",
          iconName: getRowIconName(options.row),
          location: "end",
          action: () => {
            //options.row.setValue("visible", !options.row.getValue("visible"));
            options.row.getQuestionByName("visible").value = !options.row.getValue("visible");
            visibleAction.iconName = getRowIconName(options.row);
          }
        });
        options.actions.push(visibleAction);
      } else {
        removeAction.iconName = "icon-delete-24x24";
        removeAction.iconSize = "auto",
        removeAction.component = "sv-action-bar-item",
        removeAction.innerCss = "sps-table__action-button sps-table__action-button--remove",
        removeAction.showTitle = false,
        removeAction.action = () => {
          options.question.removeRowUI(options.row);
        };
      }
    });
    survey.onMatrixRowAdding.add((sender, options) => {
      const addSurvey = new SurveyModel({
        showNavigationButtons: "none",
        enterKeyAction: "loseFocus",
        questionErrorLocation: "bottom",
        elements: [{
          type: "text",
          name: "presetName",
          titleLocation: "hidden",
          isRequired: true,
        }, {
          type: "buttongroup",
          name: "template",
          title: "Template",
          defaultValue: "basic",
          choices: [
            { value: "basic", text: "Basic" },
            { value: "advanced", text: "Advanced" },
            { value: "expert", text: "Expert" }
          ],
        }]
      });
      addSurvey.css = presetsCss;
      settings.showDialog?.(<IDialogOptions>{
        componentName: "survey",
        data: { survey: addSurvey, model: addSurvey },
        onApply: () => {
          if (!addSurvey.validate()) return false;
          const presetName = addSurvey.getValue("presetName");
          CreatorPresets[presetName] = JSON.parse(JSON.stringify(CreatorPresets[addSurvey.getValue("template")]));
          const value = options.question.value || [];
          value.push({ title: presetName, name: presetName, visible: true, custom: true });
          options.question.value = value;
          onSet(value); // TODO: fix nested popup modals and remove this line
          return true;
        },
        cssClass: "sps-popup svc-property-editor svc-creator-popup",
        title: getLocString("presets.plugin.addNewPreset"),
        displayMode: "popup"
      }, this.creator.rootElement);
      options.allow = false;
    });
    settings.showDialog?.(<IDialogOptions>{
      componentName: "survey",
      data: { survey: survey, model: survey },
      onApply: () => {
        if (!survey.validate()) return false;
        onSet(survey.getValue("presetsList"));
        return true;
      },
      cssClass: "sps-popup svc-property-editor svc-creator-popup",
      title: getLocString("presets.plugin.editPresetsListTitle"),
      displayMode: "popup"
    }, this.creator.rootElement);
  }

  private updateMenu() {
    this.presetsList?.setItems(this.presetsMenuItems);
  }

  public saveAs(json: any) {
    this.setPresetNewName((newName) => {
      this.addPreset({ presetName: newName, json: json });
      this.presetsList.onItemClick(this.presetsList.getActionById(newName));
    });
  }

  public addPreset(preset: ICreatorPresetConfig, setAsDefault = false) {
    CreatorPresets[preset.presetName] = preset;
    this.customPresets.push(preset.presetName);
    this.updateMenu();
  }
  public removePreset(presetAccessor: string | ICreatorPresetConfig, includeModifications = false): void {

  }
}