import { SurveyCreatorModel, editorLocalization, ICreatorOptions, getLocString } from "survey-creator-core";
import { UIPreset, ICreatorPresetData, CreatorDomHelper } from "survey-creator-core";
import { Action, ActionContainer, Base, LocalizableString, Question, QuestionMatrixDropdownRenderedRow, QuestionMatrixDynamicModel, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { CreatorPresetEditableToolboxConfigurator } from "./presets-editable-toolbox";
import { CreatorPresetEditablePropertyGrid } from "./presets-editable-properties";
import { CreatorPresetEditableTabs } from "./presets-editable-tabs";
import { CreatorPresetEditableLanguages } from "./presets-editable-languages";
import { CreatorPresetEditableOptions } from "./presets-editable-options";
import { presetsCss } from "./presets-theme/presets";
export { enStrings } from "./localization/english";

export class NavigationBar extends ActionContainer {
  constructor() {
    super();
    this.cssClasses = {
      root: "sps-navigation-bar",
      defaultSizeMode: "",
      smallSizeMode: "",
      item: "sps-navigation-bar__item sps-navigation-bar-item",
      itemWithTitle: "",
      itemAsIcon: "",
      itemActive: "sps-navigation-bar-item--active",
      itemPressed: "sps-navigation-bar-item--pressed",
      itemIcon: "sps-navigation-bar-item__icon",
      itemTitle: "sps-navigation-bar-item__title",
      itemTitleWithIcon: "",
    };
  }
}

export class CreatorPresetEditorModel extends Base implements ICreatorPresetEditorSetup {
  private presetValue: UIPreset;
  private modelValue: SurveyModel;
  private resultModelValue: SurveyModel;
  private navigationBarValue: NavigationBar;
  public locTitle: LocalizableString;
  private applying = false;
  constructor(json?: ICreatorPresetData, private creatorValue?: SurveyCreatorModel, private defaultJsonValue?: ICreatorPresetData) {
    super();
    editorLocalization.presetStrings = undefined;
    this.presetValue = new UIPreset(json);
    if (!this.creatorValue)this.creatorValue = this.createCreator({});
    this.modelValue = this.createModel();
    this.resultModelValue = this.createResultModel();
    this.locTitle = new LocalizableString(undefined, false);
    this.locTitle.text = getLocString("presets.editor.title");
    this.navigationBarValue = new NavigationBar();
    const firstTabName = "preset";
    this.preset.setJson(this.getJsonFromSurveyModel());
  }
  public get navigationBar(): ActionContainer {
    return this.navigationBarValue;
  }
  public dispose(): void {
    super.dispose();
    //this.creator.dispose();
    this.disposeModel();
  }
  private disposeModel(): void {
    this.resetAllPages();
    this.model.editablePresets.forEach(preset => preset.dispose());
    this.model.dispose();
  }
  public get preset(): UIPreset { return this.presetValue; }
  public get creator(): SurveyCreatorModel { return this.creatorValue; }
  public get model(): SurveyModel { return this.modelValue; }
  public get resultModel(): SurveyModel {
    this.upldateResultJson();
    return this.resultModelValue;
  }
  public getLocale(): string { return editorLocalization.currentLocale || "en"; }
  public get json(): ICreatorPresetData {
    return this.preset.getJson();
  }
  public set json(val: ICreatorPresetData) {
    this.preset.setJson(val);
    this.updateDataFromJson(this.modelValue);
    this.upldateResultJson();
  }
  public get jsonText(): string {
    return JSON.stringify(this.json, null, 2);
  }
  public get defaultJson(): ICreatorPresetData {
    return this.defaultJsonValue;
  }
  public createCreator(options: ICreatorOptions): SurveyCreatorModel {
    return new SurveyCreatorModel(options);
  }

  private resetAllPages() {
    this.model.editablePresets.forEach(item => item.setupOnCurrentPage(this.model, this.creator, true));
    this.creator.readOnly = false;
  }

  public resetToDefaults(page?: string) {
    if (!page) {
      this.notify(getLocString("presets.editor.resetToDefaults"));
    }
    this.model.editablePresets.forEach(item => {
      if (!page || item.pageName == page) item.resetToDefaults(this.model, !!page);
    });
  }

  private activatePage(model: SurveyModel, creator: SurveyCreatorModel, editablePresets: CreatorPresetEditableBase[]) {
    const inactivePresets = editablePresets.filter(item => model.currentPage.name !== item.pageName);
    const activePreset = editablePresets.filter(item => model.currentPage.name === item.pageName)[0];
    inactivePresets.forEach(item => item.setupOnCurrentPage(model, this.creator, false));
    activePreset.setupOnCurrentPage(model, this.creator, true);
  }

  private notify(message: string) {
    this.creator.notify(message);
  }

  protected updateDataFromJson(model: SurveyModel) {
    const json = this.preset.getJson() || {};
    editorLocalization.presetStrings = json.localization;
    model.editablePresets.forEach(item => item.setupQuestions(model, this));
    model.editablePresets.forEach(item => item.setupQuestionsValue(model, json[item.path], this.creator));
    this.updateJsonLocalizationStrings(model.editablePresets);
    return json;
  }

  public onLocaleChanged() {
    const json = this.preset.getJson();
    this.model.editablePresets.forEach(item => item.onLocaleChanged(this.model, json[item.path], this.creator));
  }

  public onJsonChangedCallback: () => void;
  protected createModel(): SurveyModel {
    const editablePresets = this.createEditablePresets();
    const model = new SurveyModel(this.getEditModelJson(editablePresets));
    model.css = presetsCss;
    model.editablePresets = editablePresets;
    model.keepIncorrectValues = true;
    model.showNavigationButtons = false;
    model.completeText = getLocString("presets.editor.completeText");
    model.pagePrevText = getLocString("presets.editor.pagePrevText");
    model.enterKeyAction = "loseFocus";
    model.fitToContainer = false;

    editablePresets.forEach(item => item.notifyCallback = (message: string) => this.notify(message));
    if (!this.defaultJsonValue) {
      this.defaultJsonValue = {};
      editablePresets.forEach(item => this.defaultJsonValue[item.path] = item.getDefaultJsonValue(this.creator));
    }
    const json = this.updateDataFromJson(model);

    this.activatePage(model, this.creator, editablePresets);
    model.onCurrentPageChanged.add((sender, options) => {
      this.activatePage(model, this.creator, editablePresets);
    });
    model.onValueChanged.add((sender, options) => {
      const questionNames = editablePresets.filter(item => !item.isSettingUp).map(preset => preset.questionNames).reduce((acc, current) => acc.concat(current), []);
      editablePresets.forEach(item => item.updateOnValueChanged(model, options.name));
      if (questionNames.indexOf(options.name) != -1 && !this.applying) {
        this.applyFromSurveyModel(false);
        this.activatePage(model, this.creator, editablePresets);
        this.onJsonChangedCallback?.();
      }
    });
    model.onGetQuestionTitleActions.add((_, options) => {
      editablePresets.forEach(item => {
        if (options.question.name == item.getNavigationElementName()) {
          options.question.getTitleToolbar().isResponsivenessDisabled = true;
          options.actions = model.navigationBar.actions;
        }
        item.onGetQuestionTitleActions(model, this.creator, options);
      });
    });
    model.onGetPanelTitleActions.add((_, options) => {
      editablePresets.forEach(item => {
        if (options.panel.name == item.getNavigationElementName()) {
          options.panel.getTitleToolbar().isResponsivenessDisabled = true;
          options.actions = model.navigationBar.actions;
        }
        item.onGetPanelTitleActions(model, this.creator, options);
      });
    });
    function adjustMatrixAlignment(question: Question) {
      if (question.isDescendantOf("matrixdynamic")) {
        question.onCreateDetailPanelRenderedRowCallback = (
          renderedRow: QuestionMatrixDropdownRenderedRow
        ) => {
          renderedRow.cells = [renderedRow.cells[1]];
          renderedRow.cells[0].colSpans += 2;
        };
      }
    }
    model.getAllQuestions().forEach(question => adjustMatrixAlignment(question));
    model.onQuestionCreated.add((_, options) => { adjustMatrixAlignment(options.question); });

    model.onMatrixDetailPanelVisibleChanged.add((sender, options) => {
      editablePresets.forEach(item => item.updateOnMatrixDetailPanelVisibleChanged(model, this.creator, options));
    });
    model.onGetMatrixRowActions.add((sender, options) => {
      editablePresets.forEach(item => item.onGetMatrixRowActions(model, this.creator, options));
    });
    model.onMatrixRowDragOver.add((sender, options) => {
      editablePresets.forEach(item => item.onMatrixRowDragOver(model, this.creator, options));
    });
    model.onMatrixRowRemoving.add((sender, options) => {
      editablePresets.forEach(item => item.onMatrixRowRemoving(model, this.creator, options));
    });
    model.onMatrixRowAdded.add((sender, options) => {
      editablePresets.forEach(item => item.onMatrixRowAdded(model, this.creator, options));
    });
    model.onMatrixCellValueChanged.add((sender, options) => {
      editablePresets.forEach(item => item.onMatrixCellValueChanged(model, this.creator, options));
    });
    model.onUpdateQuestionCssClasses.add(function (_, options) {
      editablePresets.forEach(item => {
        const suffix = item.getCustomQuestionCssSuffix(options.question);
        if (suffix) {
          options.cssClasses.mainRoot += " sps-question--" + suffix;
        }
        if (item.getMainElementNames().indexOf(options.question.name) >= 0) {
          options.cssClasses.mainRoot += " sps-question--main";
          options.cssClasses.row += " sps-table__row--main";
          options.cssClasses.buttonAdd += " sps-matrixdynamic__add-btn--icon";
          options.cssClasses.iconAdd = "sps-matrixdynamic__add-btn-icon";
          options.cssClasses.iconAddId = "#icon-add-24x24";
        }
      });
    });
    model.onUpdatePanelCssClasses.add(function (_, options) {
      editablePresets.forEach(item => {
        if (options.panel.name === item.getNavigationElementName()) {
          options.cssClasses.panel.container += " sps-panel--navigation ";
        }
      });
    });
    model.onUpdatePageCssClasses.add(function (_, options) {
      editablePresets.forEach(item => {
        if (item.pageName === options.page.name) {
          options.cssClasses.page.root += " sps-page--" + item.fullPath;
        }
      });
    });

    return model;
  }
  protected createResultModel(): SurveyModel {
    const model = new SurveyModel({
      elements: [
        { type: "html", name: "q1", html: this.getResultHtml() },
        { type: "comment", name: "json", title: getLocString("presets.editor.presetJson"), rows: 60, cols: 120, readOnly: true }
      ]
    });
    model.showPrevButton = false;
    model.showCompleteButton = false;
    model.showQuestionNumbers = false;
    model.width = "900px";
    model.onGetQuestionTitleActions.add((sender, options) => {
      if (options.question.name === "json") {
        const question = options.question;
        options.actions.push({
          id: "json_copy",
          iconName: "icon-copy",
          title: getLocString("presets.editor.copy"),
          action: () => {
            navigator.clipboard.writeText(question.value);
          }
        });
        options.actions.push({
          id: "json_download",
          iconName: "icon-download",
          title: getLocString("presets.editor.download"),
          action: () => {
            this.downloadJsonFile(question.value);
          }
        });
        options.actions.push({
          id: "icon-load",
          iconName: "icon-load",
          title: getLocString("presets.editor.load"),
          action: () => {
            this.loadJsonFile();
          }
        });
      }
    });
    return model;
  }
  private getResultHtml(): string {
    return `<div>${getLocString("presets.editor.usageExample")}</div>`;
  }
  public downloadJsonFile(text?: string): void {
    if (!text) text = this.jsonText;
    const jsonBlob = new Blob([text], { type: "application/json" });
    const elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(jsonBlob);
    elem.download = "preset.json";
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
  public loadJsonFile(): void {
    CreatorDomHelper.openFileDialog((file: File) => this.importFromFile(file), ".json");
  }
  private importFromFile(file: File) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const surveyJSONText = fileReader.result as string;
      this.json = JSON.parse(surveyJSONText);
    };
    fileReader.readAsText(file);
  }
  private upldateResultJson(): void {
    this.resultModelValue.getQuestionByName("json").value = this.jsonText;
  }
  public applyFromSurveyModel(validate = true): boolean {
    this.applying = true;
    if (validate && !this.validateEditableModel(this.model)) {
      this.applying = false;
      return false;
    }
    this.preset.setJson(this.getJsonFromSurveyModel());
    this.model.setValue("json_result", JSON.stringify(this.preset.getJson(), null, 2));
    this.preset.apply(this.creator, true);
    this.applying = false;
    return true;
  }
  public getJsonFromSurveyModel(): any {
    const res: ICreatorPresetData = {};
    this.model.editablePresets.forEach(preset => {
      const val = preset.getJsonValue(this.model, this.creator, this.defaultJsonValue?.[preset.path]);
      if (!!val) {
        res[preset.path] = val;
      }
    });
    this.getJsonLocalizationStrings(res);
    return res;
  }
  private getJsonLocalizationStrings(res: ICreatorPresetData): void {
    const locStrs: any = {};
    this.model.editablePresets.forEach(preset => {
      preset.setJsonLocalizationStrings(this.model, locStrs);
    });
    if (this.json && !!this.json.localization) {
      res.localization = JSON.parse(JSON.stringify(this.json.localization));
    }
    const locale = this.getLocale();
    if (Object.keys(locStrs).length > 0) {
      if (!res.localization) {
        res.localization = {};
      }
      res.localization[locale] = locStrs;
    } else {
      if (res.localization) {
        if (res.localization[locale]) {
          delete res.localization[locale];
        }
        if (Object.keys(res.localization).length === 0) {
          delete res.localization;
        }
      }
    }
  }
  private updateJsonLocalizationStrings(editablePresets: Array<CreatorPresetEditableBase>): void {
    const strs = this.json && !!this.json.localization ? JSON.parse(JSON.stringify(this.json.localization)) : {};
    const locale = this.getLocale();
    const locs = strs[locale] || {};
    editablePresets.forEach(preset => {
      preset.updateJsonLocalizationStrings(locs);
    });
  }
  private validateEditableModel(model: SurveyModel): boolean {
    if (!model.validate(true, true)) return false;
    const editablePresets = model.editablePresets;
    for (let i = 0; i < editablePresets.length; i++) {
      if (!editablePresets[i].validate(model)) return false;
    }
    return true;
  }
  private createEditableCore(preset: UIPreset, fullPath: string): CreatorPresetEditableBase {
    if (fullPath === "languages") return new CreatorPresetEditableLanguages(preset);
    if (fullPath === "tabs") return new CreatorPresetEditableTabs(preset);
    if (fullPath === "toolbox") return new CreatorPresetEditableToolboxConfigurator(preset);
    if (fullPath === "propertyGrid") return new CreatorPresetEditablePropertyGrid(preset);
    if (fullPath === "options") return new CreatorPresetEditableOptions(preset);
    return undefined;
  }
  private createEditable(preset: UIPreset, parent: CreatorPresetEditableBase, fullPath: string): CreatorPresetEditableBase {
    const editable = this.createEditableCore(preset, fullPath);
    if (editable) {
      preset.children.forEach(item => {
        const child = this.createEditable(<UIPreset>item, editable, fullPath + "_" + item.getPath());
        if (child) {
          editable.children.push(child);
          child.parent = editable;
        }
      });
    }
    return editable;
  }
  private createEditablePresets(): Array<CreatorPresetEditableBase> {
    const res = [];
    this.preset.children.forEach(preset => {
      const editable = this.createEditable(<UIPreset>preset, undefined, preset.getPath());
      if (editable) {
        res.push(editable);
      }
    });
    return res;
  }
  private getEditModelJson(editablePresets: Array<CreatorPresetEditableBase>): any {
    const modelJson = { pages: [], showQuestionNumbers: false };
    editablePresets.forEach(preset => {
      const pages = preset.createPages();
      if (Array.isArray(pages)) {
        pages.forEach(page => modelJson.pages.push(page));
      }
    });
    return modelJson;
  }
}