import {
  JsonObjectProperty, ItemValue, QuestionDropdownModel,
  Base, Serializer, SurveyModel, matrixDropdownColumnTypes
} from "survey-core";
import { ICreatorPresetEditorSetup } from "./presets-editable-base";
import {
  SurveyCreatorModel, defaultPropertyGridDefinition, ISurveyPropertyGridDefinition, ISurveyPropertiesDefinition,
  SurveyQuestionProperties, editorLocalization, PropertyGridModel, getLocString,
  settings } from "survey-creator-core";

import { CreatorPresetEditableCaregorizedListConfigurator } from "./presets-editable-categorized";
import { IPropertyTabInfo, IPropertyEditorInfo } from "../question-editor/definition";

export class SurveyQuestionPresetProperties extends SurveyQuestionProperties {
  constructor(obj: any, className: string, propertyGridDefinition: ISurveyPropertyGridDefinition) {
    super(obj, null, className, null, null, null, propertyGridDefinition);
  }
  protected getIsPropertyVisible(prop: JsonObjectProperty): boolean {
    return prop.visible !== false;
  }
}

const presetPropertiesBaseClasses = ["question", "matrixdropdownbase", "selectbase", "panelbase", "matrixdropdowncolumn@default", "matrixdropdowncolumn@selectbase"];
interface IPropertyGridTabInfo {
  name: string;
  iconName?: string;
  items: Array<string>;
}
export class SurveyQuestionPresetPropertiesDetail {
  private propertiesHash: { [key: string]: string } = {};
  public classes = new Array<string>();
  private properties: SurveyQuestionPresetProperties;
  private propertyGridValue: PropertyGridModel;
  private propertyGridDefaultValue: PropertyGridModel;
  private obj;
  private allClasses: string[];
  constructor(private className: string, private currentJson: ISurveyPropertyGridDefinition) {
    const cls: { [key: string]: boolean } = {};
    const obj = this.createObj();
    this.obj = obj;
    this.currentJson.classes = this.currentJson.classes || {};
    this.properties = new SurveyQuestionPresetProperties(obj, className, currentJson);
    const allPropertiesNames = this.properties.getAllVisiblePropertiesNames(true);
    const objProps: { [key: string]: JsonObjectProperty } = {};
    Serializer.getPropertiesByObj(obj).forEach(prop => objProps[prop.name] = prop);
    allPropertiesNames.forEach((name: string) => {
      const prop = objProps[name];
      if (prop) {
        const propClassName = this.getPropClassName(prop);
        this.propertiesHash[name] = propClassName;
        cls[propClassName] = true;
      }
    });
    for (let i = 0; i < presetPropertiesBaseClasses.length; i++) {
      const cl = presetPropertiesBaseClasses[i];
      if (cls[cl]) {
        this.classes.push(cl);
      }
    }
    if (this.classes.indexOf(className) < 0) {
      this.classes.push(className);
    }
    this.allClasses = this.getAllClasses();
    this.propertyGridValue = this.createPropertyGrid(obj, this.currentJson);
    this.propertyGridDefaultValue = this.createPropertyGrid(obj);
  }
  public getObj() {
    return this.obj;
  }
  private getAllClasses(): string[] {
    const res = new Array<string>();
    const className = this.classes[0];
    res.push(className);
    if (className == "survey") return res;
    const isColumn = className.indexOf("matrixdropdowncolumn@") == 0;
    Object.keys(this.currentJson.classes).forEach(cl => {
      if (isColumn) {
        if (cl.indexOf("matrixdropdowncolumn@") === 0) {
          res.push(cl);
        }
      } else {
        if (Serializer.isDescendantOf(cl, className) && res.indexOf(cl) < 0) {
          res.push(cl);
        }
      }
    });
    return res;
  }
  private createPropertyGrid(obj: Base, json?: ISurveyPropertyGridDefinition): PropertyGridModel {
    const res = new PropertyGridModel(undefined, undefined, json);
    res.showOneCategoryInPropertyGrid = true;
    res.obj = obj;
    return res;
  }
  private createObj(): Base {
    if (this.className === "survey") return new SurveyModel();
    const ind = this.className.indexOf("@");
    if (ind < 0) return Serializer.createClass(this.className);
    const clName = this.className.substring(0, ind);
    const postFix = this.className.substring(ind + 1);
    const res = Serializer.createClass(clName);
    if (res.cellType) {
      res.cellType = postFix;
    }
    return res;
  }
  public getInitialJson(useDefaults: boolean) {
    const propertyGrid = useDefaults ? this.propertyGridDefaultValue : this.propertyGridValue;
    const pgJSON = propertyGrid.survey.toJSON();
    return pgJSON.pages.filter(p => p.name != propertyGrid.placeholderPageName).map(p => {
      return {
        category: p.name,
        title: p.title,
        iconName: p.iconName,
        properties: p.elements?.filter(e => e.name && e.name.indexOf("overridingProperty") == -1).map(e => {
          const property: any = {
            name: e.name,
            title: e.title
          };

          if (e.description !== undefined) {
            property.description = e.description;
          }

          return property;
        })
      };
    });
  }
  public get propertyGridDefault(): PropertyGridModel { return this.propertyGridDefaultValue; }
  public getPropertyClassName(propName: string): string {
    return this.propertiesHash[propName];
  }
  public updateCurrentJson(val: Array<any>): void {
    this.updateCurrentJsonCore(this.currentJson.classes, val);
  }
  private updateCurrentJsonCore(curJsonClasses: ISurveyPropertiesDefinition, val: Array<any>): void {
    if (!Array.isArray(val)) val = [];
    this.updateJsonClasses(curJsonClasses, val);
  }
  private updateJsonClasses(curJsonClasses: ISurveyPropertiesDefinition, val: Array<IPropertyGridTabInfo>): void {
    if (!Array.isArray(val)) return;
    for (let i = val.length - 1; i >= 0; i--) {
      if (!val[i].name) {
        val.splice(i, 1);
      }
    }
    this.convertPropertiesIntoObject(curJsonClasses);
    const tabs: {[key: string]: IPropertyTabInfo} = this.getAllTabsInfo(curJsonClasses);
    this.updateTabIndexes(tabs, val, curJsonClasses);
    this.removeAddUpdateProperties(curJsonClasses, val);

    val.forEach(tab => {
      if (tab.iconName !== undefined) {
        tabs[tab.name].iconName = tab.iconName;
      }
      this.updateTabProperties(curJsonClasses, tab);
    });
    const usedTabNames: string[] = this.getAllUsedTabNames(curJsonClasses);
    this.removeUnusedTabs(usedTabNames, curJsonClasses);
  }
  private getAllUsedTabNames(curJsonClasses: ISurveyPropertiesDefinition): string[] {
    const res: string[] = [];
    this.allClasses.forEach(clName => {
      const props = curJsonClasses[clName]?.properties;
      if (Array.isArray(props)) {
        props.forEach(prop => {
          if (res.indexOf(prop.tab) < 0) {
            res.push(prop.tab);
          }
        });
      }
    });
    return res;
  }
  private removeUnusedTabs(usedTabNames: string[], curJsonClasses: ISurveyPropertiesDefinition): void {
    this.classes.forEach(clName => {
      const tabs = curJsonClasses[clName]?.tabs;
      if (Array.isArray(tabs)) {
        for (let i = tabs.length - 1; i >= 0; i--) {
          if (usedTabNames.indexOf(tabs[i].name) < 0) {
            tabs.splice(i, 1);
          }
        }
      }
    });
  }
  private convertPropertiesIntoObject(curJsonClasses: ISurveyPropertiesDefinition) {
    const generalTabName = settings.propertyGrid.generalTabName;
    Object.keys(curJsonClasses).forEach(clName => {
      const props = curJsonClasses[clName].properties;
      if (Array.isArray(props)) {
        for (let i = 0; i < props.length; i++) {
          const prop = props[i];
          if (typeof prop === "string") {
            props.splice(i, 1, { name: prop, tab: generalTabName });
          } else {
            if (!prop.tab) {
              prop.tab = generalTabName;
            }
          }
        }
      }
    });
  }
  private removeAddUpdateProperties(curJsonClasses: ISurveyPropertiesDefinition, val: Array<IPropertyGridTabInfo>): void {
    const newTabProperties: {[key: string]: string} = {};
    val.forEach(tab => {
      if (!Array.isArray(tab.items)) return;
      tab.items.forEach(propName => newTabProperties[propName] = tab.name);
    });
    const oldTabProperties: {[key: string]: boolean} = {};
    this.classes.forEach(clName => {
      const props = curJsonClasses[clName]?.properties;
      if (Array.isArray(props)) {
        for (let i = props.length - 1; i >= 0; i--) {
          oldTabProperties[props[i].name] = true;
          const prop = props[i];
          if (!newTabProperties[prop.name]) {
            props.splice(i, 1);
          } else {
            if (prop.tab !== newTabProperties[prop.name]) {
              prop.tab = newTabProperties[prop.name];
              prop.index = undefined;
            }
          }
        }
      }
    });
    const lastClassName = this.classes[this.classes.length - 1];
    const firstClassName = this.classes[0];
    Object.keys(newTabProperties).forEach(propName => {
      if (!oldTabProperties[propName]) {
        const prop = Serializer.findProperty(lastClassName, propName);
        if (prop) {
          let propClassName = this.getPropClassName(prop);
          if (this.classes.indexOf(propClassName) < 0) {
            propClassName = firstClassName;
          }
          const classInfo = curJsonClasses[propClassName];
          classInfo.properties = classInfo.properties || [];
          classInfo.properties.push({ name: propName, tab: newTabProperties[propName] });
        }
      }
    });
  }
  private updateTabProperties(curJsonClasses: ISurveyPropertiesDefinition, tab: IPropertyGridTabInfo) {
    if (!Array.isArray(tab.items)) return;
    const tabProperties: { [key: string]: { prop: IPropertyEditorInfo, className: string } } = {};
    const filteredTabProperties: Array< { prop: IPropertyEditorInfo, className: string }> = [];
    Object.keys(curJsonClasses).forEach(clName => {
      if (this.allClasses.indexOf(clName) < 0) return;
      const props = curJsonClasses[clName].properties;
      if (Array.isArray(props)) {
        for (let i = 0; i < props.length; i++) {
          const prop = props[i];
          if (prop.tab === tab.name) {
            const obj = { prop: prop, className: clName };
            tabProperties[prop.name] = obj;
            if (this.classes.indexOf(clName) < 0) {
              filteredTabProperties.push(obj);
            }
          }
        }
      }
    });
    filteredTabProperties.sort((a, b) => (b.prop.index || 0) - (a.prop.index || 0));
    const step = 100;
    let index = 0;
    tab.items.forEach((propName) => {
      const prop = tabProperties[propName]?.prop;
      if (prop) {
        index = this.getIndexForProperty(filteredTabProperties, prop.index || 0, index, step);
        prop.index = step * (index ++);
      }
    });
  }
  private addGeneralTabIfNeeded(tabs: {[key: string]: IPropertyTabInfo }, tabOrder: string[], curJsonClasses: ISurveyPropertiesDefinition) {
    const generalTabName = settings.propertyGrid.generalTabName;
    if (tabOrder.indexOf(generalTabName) >= 0 && !tabs[generalTabName]) {
      const baseClass = this.classes[0];
      const generalTab: IPropertyTabInfo = { name: generalTabName, index: 0 };
      const classInfo = curJsonClasses[baseClass];
      classInfo.tabs = classInfo.tabs || [];
      classInfo.tabs.unshift(generalTab);
      tabs[generalTabName] = generalTab;
    }
  }
  private updateTabIndexes(tabs: {[key: string]: IPropertyTabInfo }, val: Array<IPropertyGridTabInfo>, curJsonClasses: ISurveyPropertiesDefinition): void {
    const tabOrder: string[] = [];
    val.forEach(tab => {
      tabOrder.push(tab.name);
    });
    const sortedTabs = this.getSortedTabs(tabs, tabOrder);
    this.addGeneralTabIfNeeded(tabs, tabOrder, curJsonClasses);
    val.forEach(tab => {
      if (!tabs[tab.name]) {
        const baseClass = this.classes[0];
        curJsonClasses[baseClass].tabs = curJsonClasses[baseClass].tabs || [];
        const newTab = { name: tab.name };
        curJsonClasses[baseClass].tabs.push(newTab);
        tabs[tab.name] = newTab;
      }
    });
    const step = 100;
    let index = 0;
    const indeces: { [key: string]: number } = {};
    tabOrder.forEach((tabName) => {
      const curIndex = tabs[tabName].index || 0;
      index = this.getIndexForTab(sortedTabs, indeces, curIndex, index, step);
      indeces[tabName] = step * (index ++);
    });
    Object.keys(indeces).forEach((tabName) => {
      tabs[tabName].index = indeces[tabName];
    });
  }
  private getSortedTabs(tabs: {[key: string]: IPropertyTabInfo}, tabOrder: string[]): IPropertyTabInfo[] {
    const res: IPropertyTabInfo[] = [];
    Object.keys(tabs).forEach((name) => {
      if (tabOrder.indexOf(name) < 0) {
        res.push(tabs[name]);
      }
    });
    res.sort((a, b) => (a.index || 0) - (b.index || 0));
    return res;
  }
  private getIndexForTab(sortedTabs: IPropertyTabInfo[], tabIndeces: { [key: string]: number }, curIndex: number, startIndex: number, step: number): number {
    if (curIndex <= 0) return startIndex;
    sortedTabs.forEach((tab) => {
      if (tabIndeces[tab.name] === undefined) {
        const tabIndex = tab.index || 0;
        if (tabIndex > 0 && tabIndex < curIndex) {
          tabIndeces[tab.name] = step * (startIndex ++);
        }

      }
    });
    return startIndex;
  }
  private getIndexForProperty(propsInfo: { prop: IPropertyEditorInfo, className: string }[], curIndex: number, startIndex: number, step: number): number {
    if (curIndex <= 0) return startIndex;
    for (let i = propsInfo.length - 1; i >= 0; i--) {
      const info = propsInfo[i];
      const index = info.prop.index || 0;
      if (index > 0 && index < curIndex) {
        info.prop.index = step * (startIndex ++);
        propsInfo.splice(i, 1);
      }
    }
    return startIndex;
  }
  private getAllTabsInfo(curJsonClasses: ISurveyPropertiesDefinition): {[key: string]: IPropertyTabInfo } {
    const tabs: {[key: string]: IPropertyTabInfo } = {};
    Object.keys(curJsonClasses).forEach(clName => {
      if (this.allClasses.indexOf(clName) >= 0) {
        const classInfo = curJsonClasses[clName];
        if (classInfo.tabs) {
          classInfo.tabs.forEach(tab => {
            if (!tabs[tab.name]) {
              tabs[tab.name] = tab;
            }
          });
        }
      }
    });
    return tabs;
  }
  private getPropClassName(prop: JsonObjectProperty): string {
    const clName = prop.classInfo.name;
    for (let i = 1; i < presetPropertiesBaseClasses.length; i++) {
      const cl = presetPropertiesBaseClasses[i];
      if (clName === cl || Serializer.isDescendantOf(clName, cl)) return this.getClassName(cl);
    }
    if (clName === this.className) return this.className;
    return this.getClassName("question");
  }
  private getClassName(className: string): string {
    const ind = this.className.indexOf("@");
    if (ind < 0) return className;
    const clName = this.className.substring(0, ind);
    if (clName === className || className === "question") {
      className = "default";
    }
    return clName + "@" + className;
  }
}

export class CreatorPresetEditablePropertyGrid extends CreatorPresetEditableCaregorizedListConfigurator {
  private currentJson: ISurveyPropertyGridDefinition;
  private localeStrings: any;
  private currentProperties?: SurveyQuestionPresetPropertiesDetail;
  private currentClassName: string;
  //   private propCreatorValue: SurveyCreatorModel;
  private isModified: boolean;
  //   public get propCreator(): SurveyCreatorModel { return this.propCreatorValue; }
  //   public disposeCore(): void {
  //     if (this.propCreator) {
  //       this.propCreator.dispose();
  //       this.propCreatorValue = undefined;
  //     }
  //   }
  protected get nameInnerMatrix() { return "properties"; }
  protected createItemsMatrixJSON(props: any): any {
    const defaultJSON = {
      type: "matrixdynamic",
      allowRowReorder: true,
      cellType: "text",
      showHeader: false,
      rowCount: 0,
      allowAddRows: false,
      addRowButtonLocation: "top",
      addRowText: "Add Custom Item",
      "noRowsText": "There are no items",
      columns: [
        {
          "name": "name",
          visible: false
        },
        {
          "name": "title"
        }
      ],
      detailPanelMode: "underRow",
      detailElements: [
        { type: "text", name: "name", title: getLocString("presets.propertyGrid.name"), isUnique: true, isRequired: true, visible: false },
        { type: "text", name: "title", title: getLocString("presets.propertyGrid.titleField"), isUnique: true, isRequired: true, visible: false },
        { type: "comment", name: "description", title: getLocString("presets.propertyGrid.descriptionField"), visible: false }
      ]
    };
    return { ...defaultJSON, ...props };
  }

  public createMainPageCore(): any {
    return {
      title: getLocString("presets.propertyGrid.title"),
      navigationTitle: getLocString("presets.propertyGrid.navigationTitle"),
      description: getLocString("presets.propertyGrid.description"),
      elements: [
        {
          type: "dropdown",
          name: this.nameSelector,
          allowClear: false,
          clearIfInvisible: "onHidden",
          title: getLocString("presets.propertyGrid.selectElement")
        },
        {
          type: "panel",
          name: this.mainPanelName,
          visibleIf: this.getNotEmptyVisibleIf(this.nameSelector),
          elements: [
            {
              type: "matrixdynamic",
              name: this.nameCategories,
              title: getLocString("presets.propertyGrid.propertyGrid"),
              allowRowReorder: true,
              addRowButtonLocation: "top",
              rowCount: 0,
              allowAddRows: true,
              noRowsText: getLocString("presets.propertyGrid.noCategoriesText"),
              addRowText: getLocString("presets.propertyGrid.addCustomCategory"),
              showHeader: false,
              columns: [
                { cellType: "text", name: "category", isUnique: true, isRequired: true, visible: false },
                { type: "boolean", name: "isDefault", visible: false },
                { cellType: "text", name: "title" },
              ],
              detailPanelMode: "underRow",
              detailElements: [
                { type: "text", name: "category", title: getLocString("presets.propertyGrid.categoryName"), isRequired: true, visible: false },
                { type: "text", name: "title", title: getLocString("presets.propertyGrid.categoryTitle"), visible: false },
                { type: "dropdown", name: "iconName", title: getLocString("presets.propertyGrid.iconName"), itemComponent: "svc-presets-icon-item", "allowCustomChoices": true, choices: this.iconList, visible: false },
                this.createItemsMatrixJSON({
                  name: this.nameInnerMatrix,
                  noRowsText: getLocString("presets.propertyGrid.noItemsText"),
                  titleLocation: "hidden",
                })
              ]
            },
            this.createItemsMatrixJSON({
              title: getLocString("presets.propertyGrid.hiddenItems"),
              name: this.nameMatrix,
              noRowsText: getLocString("presets.propertyGrid.noHiddenItemsText"),
              descriptionLocation: "underInput",
              startWithNewLine: false,
            })
          ]
        },
        {
          type: "panel",
          title: " ",
          name: this.navigationPanelName,
          elements: [
            {
              type: "html",
              html: "&nbsp"
            }
          ]
        }
      ]

    };
  }
  private propertyGrid: PropertyGridModel;
  protected propertyGridSetObj(obj: any) {
    const pageName = this.propertyGrid.survey.currentPage?.name;
    this.propertyGrid["setObj"](obj);
    this.propertyGrid.survey.currentPage = this.propertyGrid.survey.getPageByName(pageName);
  }
  protected hasIcon(name: string) { return name == this.nameCategories; }

  protected restoreValuesFromDefault(model: SurveyModel) {
    this.isModified = false;
    this.currentJson = this.copyJson(defaultPropertyGridDefinition);
    this.updateMatrices(model);
  }

  public getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel, defaultJson: any): any {
    if (!this.isModified) return undefined;
    return { definition: this.currentJson };
  }
  protected setupPageQuestions(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.getSelector(model).choices = this.getSelectorChoices(creator);
    const oldSearchValue = settings.propertyGrid.enableSearch;
    settings.propertyGrid.enableSearch = false;
    // this.propCreatorValue = creatorSetup.createCreator(options);
    // this.setupPropertyCreator();
    // this.getPropertyCreatorQuestion(model).embeddedCreator = this.propCreator;
    settings.propertyGrid.enableSearch = oldSearchValue;
  }
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    this.propertyGrid = creatorSetup.creator["designerPropertyGrid"];
    super.setupQuestionsCore(model, creatorSetup);
    this.setupPageQuestions(model, creatorSetup.creator);
  }
  private setJSONForTitlesAndDescriptions(locStrs: any, name: string): void {
    const strs = this.localeStrings[name];
    if (Object.keys(strs).length > 0) {
      locStrs[name] = strs;
    }
  }
  protected onLocaleChangedCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.setupPageQuestions(model, creator);
    this.setupQuestionsValueCore(model, json, creator);
  }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {
    this.setJSONForTitlesAndDescriptions(locStrs, "pe");
    this.setJSONForTitlesAndDescriptions(locStrs, "pehelp");
  }
  protected updateJsonLocalizationStringsCore(locStrs: any): void {
    this.localeStrings = { pe: locStrs.pe || {}, pehelp: locStrs.pehelp || {} };
  }
  protected setupOnCurrentPageCore(model: SurveyModel, creator: SurveyCreatorModel, active: boolean): void {
    creator.setSidebarEnabled(active);
    this.propertyGridSetObj(active ? this.currentProperties?.getObj() : null);
  }

  //   private isPropCreatorChanged: boolean;
  private firstTimeLoading = false;
  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {
    super.updateOnValueChangedCore(model, name);
    if (name == this.nameCategories) {
      if (!this.firstTimeLoading)this.isModified = true;
      const matrix = this.getQuestionCategories(model);
      if (matrix.isVisible) {
        matrix.value?.forEach(row => {
          const category = row.category;
          const title = row.title;
          if (row.title !== editorLocalization.getString("pe.tabs." + category)) {
            this.ensureLocalizationPath("pe.tabs");
            this.localeStrings.pe.tabs[category] = title;
          }
          row.properties?.forEach(p => {
            if (p.title !== editorLocalization.getString("pe." + p.name)) {
              this.changePropTitleAndDescription("pe", p.name, p.title);
            }
            if (p.description !== editorLocalization.getString("pehelp." + p.name)) {
              this.changePropTitleAndDescription("pehelp", p.name, p.description);
            }
          });
        });
      }
      if (!this.firstTimeLoading)this.updateCurrentJson(model);
    }
    // if ((<any>options.target)?.isQuestion) {
    //   if (options.name === "title") {
    //     this.changePropTitleAndDescription("pe", name, options.newValue);
    //   }
    //   if (options.name === "description") {
    //     this.changePropTitleAndDescription("pehelp", name, options.newValue);
    //   }
    // }
    // if ((<any>options.target)?.isPage) {
    //   if (options.name === "title") {
    //     this.ensureLocalizationPath("pe.tabs");
    //     this.localeStrings.pe.tabs[name] = options.newValue;
    //   }
    // }

    if (name !== this.nameSelector) return;
    this.firstTimeLoading = true;
    if (this.currentProperties) {
      this.currentProperties = undefined;
    }
    const selQuestion = this.getSelector(model);
    this.currentClassName = selQuestion.value;
    this.updateMatrices(model);
    this.firstTimeLoading = false;
    //this.propCreator.JSON = this.updateCreatorJSON(this.currentProperties.propertyGrid.survey.toJSON());
    //this.setupCreatorToolbox(this.propCreator);
  }

  private updateMatrices(model: SurveyModel) {
    if (this.currentClassName) {
      this.currentProperties = new SurveyQuestionPresetPropertiesDetail(this.currentClassName, this.currentJson);
      this.setupDefaults(model);
      const categories = this.currentProperties.getInitialJson(false);
      model.setValue(this.nameCategories, categories);
      const items = this.getCurrentlyHiddenItems(categories);
      model.setValue(this.nameMatrix, items);
      this.propertyGridSetObj(this.currentProperties.getObj());
    }
  }
  private getCurrentlyHiddenItems(categories: any) {
    const hiddenProperties = ["progressBarInheritWidthFrom"];
    const itemsMap: any = {};
    this.defaultItems.forEach((i: any) => itemsMap[i.name] = i);
    categories.filter((c: any) => c.properties).forEach((c: any) => c.properties.forEach((p: any) => delete itemsMap[p.name]));
    return Object.keys(itemsMap).map(key => itemsMap[key]).filter(i => hiddenProperties.indexOf(i.name) == -1);
  }

  private setupDefaults(model: SurveyModel): void {
    const categories = this.currentProperties?.getInitialJson(true) || [];
    this.defaultCategories = [...categories];
    this.defaultItems = [];
    categories.forEach(c => this.defaultItems.push(...c.properties));
  }

  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.getSelector(model).value = "survey";
    const defaultJson = creator.getPropertyGridDefinition();
    this.isModified = !!json?.definition || (defaultJson && (JSON.stringify(defaultJson) !== JSON.stringify(defaultPropertyGridDefinition)));
    this.currentJson = json?.definition || this.copyJson(defaultJson || defaultPropertyGridDefinition);
    this.currentJson.autoGenerateProperties = false;
    this.updateOnValueChangedCore(model, this.nameSelector);
  }
  private getSelector(model: SurveyModel): QuestionDropdownModel { return <QuestionDropdownModel>model.getQuestionByName(this.nameSelector); }
  //   private getPropertyCreatorQuestion(model: SurveyModel): QuestionEmbeddedCreatorModel { return <QuestionEmbeddedCreatorModel>model.getQuestionByName(this.namePropertyCreator); }
  private get nameSelector() { return this.fullPath + "_selector"; }
  //   private get namePropertyCreator() { return this.fullPath + "_propcreator"; }
  private getSelectorChoices(creator: SurveyCreatorModel): Array<ItemValue> {
    const classes = ["survey", "page"];
    creator.toolbox.getDefaultItems([], false, true, true).forEach(item => {
      classes.push(item.id);
    });

    const res: any[] = [];
    classes.forEach(str => res.push(new ItemValue(str, this.getSelectorItemTitle(str))));
    const columnPrefix = "matrixdropdowncolumn@";
    res.push(new ItemValue(columnPrefix + "default", this.getColumnItemTitle("")));
    for (let key in matrixDropdownColumnTypes) {
      res.push(new ItemValue(columnPrefix + key, this.getColumnItemTitle(key)));
    }
    return res;
  }
  private getSelectorItemTitle(name: string): string {
    if (name === "survey") return editorLocalization.getString("ed.surveyTypeName");
    if (name === "page") return editorLocalization.getString("ed.pageTypeName");
    return editorLocalization.getString("qt." + name);
  }
  private getColumnItemTitle(name: string): string {
    const columnTitle = editorLocalization.getString("ed.columnTypeName");
    const postFix = !name ? "default" : this.getSelectorItemTitle(name);
    return columnTitle + ": " + postFix;
  }
  private updateCurrentJson(model: SurveyModel): void {
    //if (!this.isPropCreatorChanged) return;
    //this.isPropCreatorChanged = false;
    if (this.currentProperties) {
      this.currentProperties.updateCurrentJson(this.getPropertiesArray(this.getQuestionCategories(model).value));
    }
  }
  private getPropertiesArray(categories: any): Array<any> {
    return categories?.map(c => ({ name: c.category, items: c.properties?.map(p => p.name), iconName: c.iconName }));
  }
  private changePropTitleAndDescription(path: string, propName: string, val: string): void {
    this.ensureLocalizationPath(path);
    const strs = this.localeStrings[path];
    const className = this.currentProperties.getPropertyClassName(propName);
    if (!!className) {
      if (!strs[className]) {
        strs[className] = {};
      }
      strs[className][propName] = val;
    }
  }
  private ensureLocalizationPath(path: string): void {
    if (!this.localeStrings) {
      this.localeStrings = {};
    }
    const names = path.split(".");
    let strs = this.localeStrings;
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      if (!strs[name]) strs[name] = {};
      strs = strs[name];
    }
  }
  //   private setupPropertyCreator(): void {
  //     const creator = this.propCreator;
  //     creator.maxNestedPanels = 0;
  //     creator.showSaveButton = false;
  //     creator.onModified.add((sender, options) => {
  //       this.isPropCreatorChanged = true;
  //       this.isModified = true;
  //       if (options.type === "PROPERTY_CHANGED") {
  //         const name = (<any>options.target).name;
  //         if ((<any>options.target)?.isQuestion) {
  //           if (options.name === "title") {
  //             this.changePropTitleAndDescription("pe", name, options.newValue);
  //           }
  //           if (options.name === "description") {
  //             this.changePropTitleAndDescription("pehelp", name, options.newValue);
  //           }
  //         }
  //         if ((<any>options.target)?.isPage) {
  //           if (options.name === "title") {
  //             this.ensureLocalizationPath("pe.tabs");
  //             this.localeStrings.pe.tabs[name] = options.newValue;
  //           }
  //         }
  //       }
  //     });
  //     creator.autoSaveEnabled = false;
  //     creator.showTabsDefault = false;
  //     creator.showToolbarDefault = false;
  //     creator.allowCollapseSidebar = false;
  //     creator.toolbar.setItems([]);
  //     creator.showAddQuestionButton = false;
  //     creator.toolbox.forceCompact = false;
  //     creator.showSidebar = false;
  //     creator.onSurveyInstanceSetupHandlers.add((sender, options) => {
  //       if (options.area === "designer-tab") {
  //         const model = options.survey;
  //         model.onPageAdded.add((sender, options) => {
  //           this.addCategoryNamePropIntoPage(options.page, creator);
  //         });
  //       }
  //     });
  //     creator.onSurveyInstanceCreated.add((sender, options) => {
  //       if (options.area === "designer-tab") {
  //         const model = options.survey;
  //         model.onElementWrapperComponentName.add((sender, options) => {
  //           const el = options.element;
  //           if (this.isCategoryElement(el)) {
  //             options.componentName = el.getType();
  //           } else {
  //             const compName = options.componentName;
  //             if (el.isQuestion && (compName === "svc-dropdown-question" || compName === "svc-question")) {
  //               options.componentName = "svc-preset-question";
  //             }
  //             if (el.isPage) {
  //               options.componentName = "svc-preset-page";
  //             }
  //           }
  //         });
  //         const prev_getRendererContextForString = model.getRendererContextForString;
  //         const prev_getRendererForString = model.getRendererForString;
  //         model.getRendererForString = (element: Base, name: string): string => {
  //           if (this.isCategoryElement(element)) return undefined;
  //           return prev_getRendererForString.call(model, element, name);
  //         };
  //         model.getRendererContextForString = (element: Base, locStr: LocalizableString): any => {
  //           if (this.isCategoryElement(element)) return locStr;
  //           return prev_getRendererContextForString.call(model, element, locStr);
  //         };
  //       }
  //     });
  //     creator.onElementAllowOperations.add((sender, options) => {
  //       options.allowChangeInputType = false;
  //       options.allowChangeRequired = false;
  //       options.allowChangeType = false;
  //       options.allowCopy = false;
  //       options.allowShowSettings = false;
  //       options.allowDelete = true;
  //       options.allowEdit = true;
  //     });
  //     creator.onCollectionItemAllowOperations.add((sender, options) => {
  //       options.allowEdit = false;
  //       options.allowAdd = false;
  //       options.allowDelete = false;
  //     });
  //     creator.onModified.add((sender, options) => {
  //       if (options.type === "OBJECT_DELETED") {
  //         this.setupCreatorToolbox(sender);
  //       }
  //     });
  //     creator.getElementAddornerCssCallback = (obj: Base, className: string): string => { return className + " preset_pg_question"; };
  //     creator.onPageAdded.add((sender, options) => {
  //       const page = options.page;
  //       page.name = SurveyHelper.getNewName(creator.survey.pages, "category");
  //       if (!page.title) {
  //         page.title = "New Category";
  //       }
  //       page.updateRows();
  //     });
  //     creator.onQuestionAdded.add((sender, options) => {
  //       this.setupCreatorToolbox(sender);
  //     });
  //     creator.onDragDropAllow.add((sender, options) => {
  //       options.allowDropNextToAnother = false;
  //     });
  //     creator.onCanShowProperty.add((sender, options) => {
  //       if (options.obj.isPage && options.propertyName === "description") {
  //         options.canShow = false;
  //       }
  //     });
  //   }
  //   private isCategoryElement(el: any): boolean {
  //     return el.isCategoryElement === true;
  //   }
  //   private updateCreatorJSON(json: any): any {
  //     if (!json || !json.pages) return;
  //     json.widthMode = "static";
  //     json.width = "800px";
  //     json.pages.forEach((page: any) => {
  //       this.updateCreatorJSONElements(page.elements);
  //     });
  //     return json;
  //   }
  //   private updateCreatorJSONElements(elements: Array<any>): void {
  //     if (!Array.isArray(elements)) return;
  //     for (let i = elements.length - 1; i >= 0; i--) {
  //       const el = elements[i];
  //       if (!!el.name && el.name.indexOf("overridingProperty") > -1) {
  //         elements.splice(i, 1);
  //       } else {
  //         this.updateJSONElement(el);
  //       }
  //     }
  //   }
  //   private updateJSONElement(el: any): void {
  //     if (Array.isArray(el.elements)) {
  //       this.updateCreatorJSONElements(el.elements);
  //     }
  //     if (el.titleLocation === "hidden") {
  //       delete el.titleLocation;
  //     }
  //     if (el.descriptionLocation === "hidden") {
  //       delete el.descriptionLocation;
  //     }
  //     if (!!el.state) {
  //       delete el.state;
  //     }
  //     const type = el.type;
  //     if (type === "textwithreset") {
  //       el.type = "text";
  //     }
  //     if (type === "commentwithreset") {
  //       el.type = "comment";
  //     }
  //   }
  //   private setupCreatorToolbox(creator: SurveyCreatorModel): void {
  //     const elements: IQuestionToolboxItem[] = [];
  //     const hiddenProperties = ["progressBarInheritWidthFrom"]; //TODO
  //     const propGrid = this.currentProperties.propertyGridDefault.survey;
  //     const survey = this.propCreator.survey;
  //     const allProps = this.currentProperties.getAllPropertiesNames();
  //     allProps.forEach(propName => {
  //       if (!survey.getQuestionByName(propName) && propGrid.getQuestionByName(propName)
  //         && hiddenProperties.indexOf(propName) < 0) {
  //         const q = propGrid.getQuestionByName(propName);
  //         const json = q.toJSON();
  //         this.updateJSONElement(json);
  //         json.name = propName;
  //         json.type = q.getType();
  //         elements.push({
  //           name: propName,
  //           title: q.title,
  //           className: q.getType(),
  //           iconName: "icon-text", //TODO
  //           json: json
  //         });
  //       }
  //     });

//     creator.toolbox.addItems(elements, true);
//   }
//   private addCategoryNamePropIntoPage(page: PageModel, creator: SurveyCreatorModel): void {
//     page.showDescription = false;
//     (<any>page).isPropertyGridCategory = true;
//     const qCategoryName: Question = Serializer.createClass("text");
//     qCategoryName.name = "page_categoryName";
//     qCategoryName.value = page.name;
//     qCategoryName.valueChangedCallback = () => {
//       page.name = qCategoryName.value;
//     };
//     qCategoryName.title = "Category Name"; //TODO
//     qCategoryName.titleLocation = "left";
//     qCategoryName.readOnly = this.isDefaultCategoryName(page.name);
//     const qCatetoryIcon = Serializer.createClass("text");
//     qCategoryName.name = "page_categoryIcon";
//     qCatetoryIcon.title = "Category Icon"; //TODO
//     qCatetoryIcon.titleLocation = "left";
//     qCatetoryIcon.startWithNewLine = false;
//     [qCategoryName, qCatetoryIcon].forEach(el => {
//       el.getSurvey = () => { return page.survey; };
//       Object.defineProperty(el, "isDesignMode", { get() { return false; } });
//       el.isCategoryElement = true;
//       el.onFirstRendering();
//     });
//     (<any>page)["getElementsForRows"] = () => {
//       const res = [].concat(page.elements);
//       res.unshift(qCatetoryIcon);
//       res.unshift(qCategoryName);
//       return res;
//     };
//   }
//   private isDefaultCategoryName(name: string): boolean {
//     if (!name) return true;
//     return !!this.currentProperties.propertyGridDefault.survey.getPageByName(name);
//   }
}
