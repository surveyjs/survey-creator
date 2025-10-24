import { SurveyCreatorModel, editorLocalization, ICreatorOptions } from "survey-creator-core";
import { CreatorPreset, ICreatorPresetData } from "survey-creator-core";
import { ActionContainer, Base, ComputedUpdater, LocalizableString, SurveyModel, createDropdownActionModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { CreatorPresetEditableToolboxConfigurator } from "./presets-editable-toolbox";
import { CreatorPresetEditablePropertyGrid } from "./presets-editable-properties";
import { CreatorPresetEditableTabs } from "./presets-editable-tabs";
import { CreatorPresetEditableLanguages } from "./presets-editable-languages";

export class NavigationBar extends ActionContainer {
  constructor() {
    super();
    this.cssClasses = {
      root: "presets-navigation-bar",
      defaultSizeMode: "",
      smallSizeMode: "",
      item: "presets-navigation-bar__item presets-navigation-bar-item",
      itemWithTitle: "",
      itemAsIcon: "",
      itemActive: "presets-navigation-bar-item--active",
      itemPressed: "presets-navigation-bar-item--pressed",
      itemIcon: "",
      itemTitle: "",
      itemTitleWithIcon: "",
    };
  }
}

export class CreatorPresetEditorModel extends Base implements ICreatorPresetEditorSetup {
  private presetValue: CreatorPreset;
  private creatorValue: SurveyCreatorModel;
  private modelValue: SurveyModel;
  private resultModelValue: SurveyModel;
  private navigationBarValue: NavigationBar;
  public locTitle: LocalizableString;
  constructor(json?: ICreatorPresetData) {
    super();
    editorLocalization.presetStrings = undefined;
    this.presetValue = new CreatorPreset(json);
    this.creatorValue = this.createCreator({});
    this.modelValue = this.createModel();
    this.resultModelValue = this.createResultModel();
    this.locTitle = new LocalizableString(undefined, false);
    this.locTitle.text = "Creator Presets";
    this.navigationBarValue = new NavigationBar();
    const firstTabName = "preset";
    this.addNavigationAction(firstTabName, "Edit Preset");
    this.addNavigationAction("creator", "Preview Survey Creator");
    this.addNavigationAction("results", "View Preset JSON");
    this.activeTab = firstTabName;
  }
  public dispose(): void {
    super.dispose();
    this.creator.dispose();
    this.disposeModel();
  }
  private disposeModel(): void {
    this.model.editablePresets.forEach(preset => preset.dispose());
    this.model.dispose();
  }
  public get preset(): CreatorPreset { return this.presetValue; }
  public get creator(): SurveyCreatorModel { return this.creatorValue; }
  public get model(): SurveyModel { return this.modelValue; }
  public get resultModel(): SurveyModel {
    this.upldateResultJson();
    return this.resultModelValue;
  }
  public get navigationBar(): ActionContainer { return this.navigationBarValue; }
  public get activeTab(): string {
    return this.getPropertyValue("activeTab");
  }
  public set activeTab(val: string) {
    this.setPropertyValue("activeTab", val);
  }
  public setActiveTab(val: string): boolean {
    if (this.activeTab === "preset" && !this.model.validate(true, true)) return false;
    this.activeTab = val;
    return true;
  }
  public getLocale(): string { return this.json?.languages?.creator || "en"; }
  public get json(): ICreatorPresetData {
    return this.preset.getJson();
  }
  public set json(val: ICreatorPresetData) {
    this.preset.setJson(val);
    this.modelValue = this.createModel();
    this.upldateResultJson();
    this.applyFromSurveyModel(true);
  }
  public get jsonText(): string {
    return JSON.stringify(this.json, null, 2);
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void {
    if (name === "activeTab" && oldValue === "preset") {
      this.applyFromSurveyModel();
    }
  }
  public createCreator(options: ICreatorOptions): SurveyCreatorModel {
    return new SurveyCreatorModel(options);
  }
  private addNavigationAction(tabName: string, title: string): void {
    const id = "action-preset-" + tabName;
    const actionInfo = {
      id: id,
      title: title,
      active: <any>new ComputedUpdater<boolean>(() => this.activeTab === tabName),
      action: () => { this.setActiveTab(tabName); }
    };
    this.navigationBar.addAction(actionInfo);
  }
  protected createModel(): SurveyModel {
    const editablePresets = this.createEditablePresets();
    const model = new SurveyModel(this.getEditModelJson(editablePresets));
    model.editablePresets = editablePresets;
    model.keepIncorrectValues = true;
    model.showPrevButton = false;
    model.showCompleteButton = false;
    model.registerFunctionOnPropertyValueChanged("isShowNextButton", () => {
      model.setPropertyValue("isShowNextButton", true);
    });
    const nextButton = model.navigationBar.getActionById("sv-nav-next");
    nextButton.action = (): void => {
      if (!model.isLastPage) {
        model.nextPageUIClick();
      } else {
        model.currentPageNo = 0;
      }
    };
    editablePresets.forEach(item => item.setupQuestions(model, this));
    const json = this.preset.getJson() || {};
    editablePresets.forEach(item => item.setupQuestionsValue(model, json[item.path], this.creator));
    this.updateJsonLocalizationStrings(editablePresets);
    model.onCurrentPageChanged.add((sender, options) => {
      editablePresets.forEach(item => item.setupOnCurrentPage(model, this.creator));
    });
    model.onValueChanging.add((sender, options) => {
      if (options.name === "languages_creator") {
        this.applyFromSurveyModel(true);
      }
    });
    model.onValueChanged.add((sender, options) => {
      editablePresets.forEach(item => item.updateOnValueChanged(model, options.name));
      if (options.name === "languages_creator") {
        editorLocalization.currentLocale = options.value;
        editablePresets.forEach(item => item.onLocaleChanged(model, json[item.path], this.creator));
      }
    });
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
    return model;
  }
  protected createResultModel(): SurveyModel {
    const model = new SurveyModel({
      elements: [
        { type: "html", name: "q1", html: this.getResultHtml() },
        { type: "comment", name: "json", title: "Preset JSON:", rows: 60, cols: 120, readOnly: true }
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
          title: "Copy",
          action: () => {
            navigator.clipboard.writeText(question.value);
          }
        });
        options.actions.push({
          id: "json_download",
          iconName: "icon-download",
          title: "Download",
          action: () => {
            this.downloadJsonFile(question.value);
          }
        });
        options.actions.push({
          id: "icon-load",
          iconName: "icon-load",
          title: "Load",
          action: () => {
            this.loadJsonFile();
          }
        });
      }
    });
    return model;
  }
  private getResultHtml(): string {
    return `<div>Use the following code to apply the preset:
<div style="line-height:1"><pre><code>import { SurveyCreatorModel, CreatorPreset } from "survey-creator-core";
const creator = new SurveyCreatorModel({ ... });

const presetJson = {
  // Copy the JSON object from below
}

const preset = new CreatorPreset(presetJson);
preset.apply(creator);</div></pre></code></div>
`;
  }
  private downloadJsonFile(text: string): void {
    const jsonBlob = new Blob([text], { type: "application/json" });
    const elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(jsonBlob);
    elem.download = "preset.json";
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
  inputFileElement: HTMLInputElement;
  private loadJsonFile(): void {
    if (!this.inputFileElement) {
      this.inputFileElement = document.createElement("input");
      this.inputFileElement.type = "file";
      this.inputFileElement.style.display = "none";
      this.inputFileElement.onchange = () => {
        if (this.inputFileElement.files.length < 1) return;
        this.importFromFile(this.inputFileElement.files[0]);
        this.inputFileElement.value = "";
      };
    }
    this.inputFileElement.click();
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
  public applyFromSurveyModel(reCreateCretor: boolean = true): boolean {
    if (!this.validateEditableModel(this.model)) return false;
    if (reCreateCretor) {
      const json = this.creator?.JSON || {};
      this.creatorValue = this.createCreator({});
      this.creator.JSON = json;
    }
    this.preset.setJson(this.getJsonFromSurveyModel());
    this.model.setValue("json_result", JSON.stringify(this.preset.getJson(), null, 2));
    this.preset.apply(this.creator);
    return true;
  }
  public getJsonFromSurveyModel(): any {
    const res: ICreatorPresetData = {};
    this.model.editablePresets.forEach(preset => {
      const val = preset.getJsonValue(this.model, this.creator);
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
    for (let i = 0; i < editablePresets.length; i ++) {
      if (!editablePresets[i].validate(model)) return false;
    }
    return true;
  }
  private createEditableCore(preset: CreatorPreset, fullPath: string): CreatorPresetEditableBase {
    if (fullPath === "languages") return new CreatorPresetEditableLanguages(preset);
    if (fullPath === "tabs") return new CreatorPresetEditableTabs(preset);
    if (fullPath === "toolbox") return new CreatorPresetEditableToolboxConfigurator(preset);
    if (fullPath === "propertyGrid") return new CreatorPresetEditablePropertyGrid(preset);
    return undefined;
  }
  private createEditable(preset: CreatorPreset, parent: CreatorPresetEditableBase, fullPath: string): CreatorPresetEditableBase {
    const editable = this.createEditableCore(preset, fullPath);
    if (editable) {
      preset.children.forEach(item => {
        const child = this.createEditable(<CreatorPreset>item, editable, fullPath + "_" + item.getPath());
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
      const editable = this.createEditable(<CreatorPreset>preset, undefined, preset.getPath());
      if (editable) {
        res.push(editable);
      }
    });
    return res;
  }
  private getEditModelJson(editablePresets: Array<CreatorPresetEditableBase>): any {
    const modelJson = { pages: [], showTOC: true, showQuestionNumbers: false, widthMode: "static", width: "1200px" };
    editablePresets.forEach(preset => {
      const pages = preset.createPages();
      if (Array.isArray(pages)) {
        pages.forEach(page => modelJson.pages.push(page));
      }
    });
    return modelJson;
  }
}