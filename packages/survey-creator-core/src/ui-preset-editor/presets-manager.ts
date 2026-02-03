import { Action, IAction, IDialogOptions, ListModel, QuestionDropdownModel, QuestionMatrixDynamicModel, Serializer, settings, SurveyModel } from "survey-core";
import { getLocString, SurveyCreatorModel, CreatorPresets, ICreatorPresetConfig, PredefinedCreatorPresets, propertyGridCss } from "survey-creator-core";
import { presetsCss } from "./presets-theme/presets";
import { get } from "lodash";
export class PresetsManager {
  /**
   *
   */
  constructor(private creator?: SurveyCreatorModel) {

  }
  public presetsList: ListModel;
  public selectPresetCallback: (preset: ICreatorPresetConfig) => void;
  public presetSelector: QuestionDropdownModel;
  private unsaved = false;

  public setStatus(unsaved: boolean) {
    this.unsaved = unsaved;
  }
  public get isSaved(): boolean {
    return !this.unsaved;
  }

  private customPresets = [] as string[];

  private getPresetTitle(name: string) {
    return getLocString("preset.names." + name);
  }

  private presetListToItems(presets: string[]) {
    return presets
      .filter(presetName => CreatorPresets[presetName].visible !== false)
      .map(presetName => ({ id: presetName, title: this.getPresetTitle(presetName), action: (item: IAction) => {
        this.presetsList.selectedItem = item;
        this.selectPresetCallback?.(CreatorPresets[presetName]);
      } })) as IAction[];
  }
  private get presetsMenuItems(): IAction[] {
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
      focusFirstQuestionAutomatic: true,
      elements: [{
        type: "dropdown",
        name: "presetName",
        allowCustomChoices: true,
        choices: this.customPresets.map(i => ({ value: i, text: i })),
        titleLocation: "hidden",
        requiredErrorText: getLocString("presets.editor.required"),
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
    });
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

  public addPresetsListEditor(survey: SurveyModel, onEdit?: (item: any) => void) {
    const presetsListEditor = new QuestionMatrixDynamicModel("presetsList");
    presetsListEditor.fromJSON({
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
      cellType: "text",
      confirmDelete: true,
      confirmDeleteText: getLocString("presets.plugin.confirmDeleteCustomPreset"),
      addRowText: getLocString("presets.plugin.addNewPreset"),
      allowRowReorder: true,
      allowCustomChoices: true,
      isRequired: true }
    );

    survey.onMatrixCellCreated.add((sender, options) => {
      if (options.columnName === "title") {
        options.cellQuestion.readOnly = !options.row.getValue("custom");
      }
    });
    survey.onGetMatrixRowActions.add((sender, options) => {
      const removeAction = options.actions.filter(a => a.id == "remove-row")[0];
      const getRowIconName = (row) => row.getValue("visible") ? "icon-visible-24x24" : "icon-invisible-24x24";
      const visibleAction = new Action({
        id: "visible",
        iconName: getRowIconName(options.row),
        location: "end",
        css: options.row.getValue("visible") ? "" : "sps-action--invisible",
        action: () => {
          options.row.getQuestionByName("visible").value = !options.row.getValue("visible");
          visibleAction.iconName = getRowIconName(options.row);
          visibleAction.css = options.row.getValue("visible") ? "" : "sps-action--invisible";
        }
      });
      options.actions.push(visibleAction);

      if (options.row.getValue("custom")) {
        removeAction.iconName = "icon-delete-24x24";
        removeAction.iconSize = "auto",
        removeAction.component = "sv-action-bar-item",
        removeAction.innerCss = "sps-action-button sps-action-button--danger",
        removeAction.showTitle = false,
        removeAction.action = () => {
          options.question.removeRowUI(options.row);
        };
      } else {
        removeAction.visible = false;
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
      addSurvey.css = { ...presetsCss,
        buttongroup: {
          ...propertyGridCss.buttongroup,
        }
      };
      const popupModel = settings.showDialog?.(<IDialogOptions>{
        componentName: "survey",
        data: { survey: addSurvey, model: addSurvey },
        onApply: () => {
          if (!addSurvey.validate()) return false;
          const presetName = addSurvey.getValue("presetName");
          CreatorPresets[presetName] = JSON.parse(JSON.stringify(CreatorPresets[addSurvey.getValue("template")]));
          const value = options.question.value || [];
          value.push({ title: presetName, name: presetName, visible: true, custom: true });
          options.question.value = value;
          return true;
        },
        cssClass: "sps-popup sps-popup--level2 svc-property-editor svc-creator-popup",
        title: getLocString("presets.plugin.addNewPreset"),
        displayMode: "popup"
      }, this.creator?.rootElement);
      this.customizePopupButtons(popupModel, getLocString("presets.plugin.add"), getLocString("presets.plugin.discard"));
      options.allow = false;
    });
    survey.pages[0].addQuestion(presetsListEditor);
    presetsListEditor.value = this.getPresetsListToEdit();
  }

  private customizePopupButtons(popupModel: any, applyText: string, cancelText: string) {
    if (popupModel.footerToolbar) {
      const defaultActionBarCss = popupModel.footerToolbar.cssClasses;
      defaultActionBarCss.item = "sps-btn";
      popupModel.footerToolbar.cssClasses = defaultActionBarCss;
      const applyAction = popupModel.footerToolbar.getActionById("apply");
      const cancelAction = popupModel.footerToolbar.getActionById("cancel");
      applyAction.innerCss = "sps-btn--primary-brand";
      applyAction.title = applyText || getLocString("buttons.apply");
      cancelAction.innerCss = "sps-btn--secondary-brand";
      cancelAction.css += " sps-action--grow";
      cancelAction.title = cancelText || getLocString("buttons.cancel");
    }
  }

  private editPresetsList(onSet: (newList: any[]) => void) {
    const survey = new SurveyModel({
      showNavigationButtons: "none",
      enterKeyAction: "loseFocus",
      questionErrorLocation: "bottom",
      questionTitleLocation: "hidden",
      pages: [{ name: "page1", elements: [] }]
    });
    this.addPresetsListEditor(survey);
    survey.css = { ...presetsCss,
      actionBar: {
        ...propertyGridCss.actionBar,
        itemIcon: presetsCss.actionBar.itemIcon + " sps-action-button__icon--muted",
      },
      matrixdynamic: {
        ...propertyGridCss.matrixdynamic,
        buttonAdd: presetsCss.matrixdynamic.buttonAdd,
        footer: propertyGridCss.matrixdynamic.footer + " sps-matrixdynamic__footer--in-dialog",
      }
    };
    const popupModel = settings.showDialog?.(<IDialogOptions>{
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
    }, this.creator?.rootElement);
    this.customizePopupButtons(popupModel, getLocString("presets.plugin.save"), getLocString("presets.plugin.discard"));
  }

  private updateMenu() {
    this.presetsList?.setItems(this.presetsMenuItems);
    if (this.presetSelector)this.presetSelector.choices = this.getPresetsListToEdit().filter(p => p.visible).map(i => ({ value: i.name, text: i.title }));
  }

  public update() {
    this.updateMenu();
  }

  public saveAs(json: any, saveCallback: (newName: string) => void) {
    this.setPresetNewName((newName) => {
      this.addPreset({ presetName: newName, json: json });
      this.presetsList.onItemClick(this.presetsList.getActionById(newName));
      saveCallback(newName);
    });
  }

  public addPreset(preset: ICreatorPresetConfig) {
    CreatorPresets[preset.presetName] = preset;
    this.customPresets.push(preset.presetName);
    this.updateMenu();
  }
  public removePreset(presetAccessor: string): void {
    delete CreatorPresets[presetAccessor];
    this.customPresets = this.customPresets.filter(p => p !== presetAccessor);
    this.updateMenu();
  }
}