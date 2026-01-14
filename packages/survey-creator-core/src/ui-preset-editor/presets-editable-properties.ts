import {
  JsonObjectProperty, ItemValue, QuestionDropdownModel,
  Base, Serializer, SurveyModel, matrixDropdownColumnTypes,
  QuestionMatrixDynamicModel,
  MatrixDynamicRowModel
} from "survey-core";
import { ICreatorPresetEditorSetup } from "./presets-editable-base";
import {
  SurveyCreatorModel, defaultPropertyGridDefinition, ISurveyPropertyGridDefinition, ISurveyPropertiesDefinition,
  SurveyQuestionProperties, editorLocalization, PropertyGridModel, getLocString,
  settings, IPropertyTabInfo, IPropertyEditorInfo } from "survey-creator-core";

import { CreatorPresetEditableCaregorizedListConfigurator } from "./presets-editable-categorized";
import { ISurveyQuestionEditorDefinition } from "../question-editor/definition";
import { SurveyQuestionEditorTabDefinition } from "../question-editor/properties";

export class SurveyQuestionPresetProperties extends SurveyQuestionProperties {
  constructor(obj: any, className: string, propertyGridDefinition: ISurveyPropertyGridDefinition) {
    super(obj, null, className, null, null, null, propertyGridDefinition);
  }
  protected getIsPropertyVisible(prop: JsonObjectProperty): boolean {
    return prop.visible !== false;
  }
}
const presetMatrixColumnName = "matrixdropdowncolumn";
const presetPropertiesBaseClasses = ["question", "matrixdropdownbase", "selectbase", "panelbase", presetMatrixColumnName + "@default", presetMatrixColumnName + "@selectbase"];
interface IPropertyGridTabInfo {
  name: string;
  iconName?: string;
  items: Array<string>;
}
export class SurveyQuestionPresetPropertiesDetail {
  private propertiesHash: { [key: string]: string } = {};
  private properties: SurveyQuestionPresetProperties;
  private propertyGridValue: PropertyGridModel;
  private propertyGridDefaultValue: PropertyGridModel;
  private obj;
  private allClasses: string[] = [];
  private baseClasses: string[] = [];
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
    let firstClassName = "";
    for (let i = 0; i < presetPropertiesBaseClasses.length; i++) {
      const cl = presetPropertiesBaseClasses[i];
      if (cls[cl]) {
        firstClassName = firstClassName || cl;
      }
    }
    firstClassName = firstClassName || className;
    this.collectAllClasses(firstClassName).forEach(cl => {
      if (presetPropertiesBaseClasses.indexOf(cl) < 0) {
        this.allClasses.push(cl);
      } else {
        this.baseClasses.push(cl);
      }
    });
    this.propertyGridValue = this.createPropertyGrid(obj, this.currentJson);
    this.propertyGridDefaultValue = this.createPropertyGrid(obj);
  }
  public getObj() {
    return this.obj;
  }
  private collectAllClasses(className: string): string[] {
    const res = new Array<string>();
    res.push(className);
    if (className == "survey") return res;
    const isColumn = className.indexOf(presetMatrixColumnName + "@") == 0;
    Object.keys(this.currentJson.classes).forEach(cl => {
      if (isColumn) {
        if (cl.indexOf(presetMatrixColumnName + "@") === 0) {
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
  private createObj(className?: string): Base {
    className = className || this.className;
    if (className === "survey") return new SurveyModel();
    const ind = className.indexOf("@");
    if (ind < 0) return Serializer.createClass(className);
    const clName = className.substring(0, ind);
    const postFix = className.substring(ind + 1);
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
    this.removeBaseClassesFromCurrentJson();
    this.updateCurrentJsonCore(this.currentJson.classes, val);
  }
  public getAllClasses(): Array<string> { return this.allClasses; }
  public getClassesBySharedProperty(propName: string): Array<string> {
    const res: string[] = [];
    for (let i = 0; i < this.allClasses.length; i++) {
      const prop = Serializer.findProperty(this.allClasses[i], propName);
      if (prop && prop.visible !== false) {
        res.push(this.allClasses[i]);
      }
    }
    return res;
  }
  public getSelectedClassesForProperty(propName: string): string[] {
    const res: string[] = [];
    for (let i = 0; i < this.allClasses.length; i++) {
      if (this.currentJson.classes[this.allClasses[i]].properties?.filter((p: any) => p === propName || p.name === propName)[0]) {
        res.push(this.allClasses[i]);
      }
    }
    if (res.length === 0) {
      return this.getClassesBySharedProperty(propName);
    }
    return res;
  }
  private removeBaseClassesFromCurrentJson(): void {
    if (!this.hasBaseClassInCurrentJson() || this.baseClasses.length === 0) return;
    const classes = this.currentJson.classes;
    this.allClasses.forEach(clName => {
      classes[clName] = this.createFlatClassProperties(clName);
    });
    this.removeBaseClassesFromCurrentJsonCore();
  }
  private createFlatClassProperties(className: string): ISurveyQuestionEditorDefinition {
    const obj = this.createObj(className);
    this.properties = new SurveyQuestionPresetProperties(obj, className, this.currentJson);
    const res : ISurveyQuestionEditorDefinition = { properties: [] };
    const title = this.currentJson.classes[className]?.title;
    if (!!title) {
      res.title = title;
    }
    this.properties.getTabs().forEach((tab: SurveyQuestionEditorTabDefinition, index: number) => {
      if (tab.visible !== false && tab.properties.length > 0) {
        res.tabs = res.tabs || [];
        const newTab: IPropertyTabInfo = { name: tab.name };
        if (!!tab.title) {
          newTab.title = tab.title;
        }
        if (!!tab.iconName) {
          newTab.iconName = tab.iconName;
        }
        res.tabs.push(newTab);

        tab.properties.forEach(prop => {
          res.properties?.push({ name: prop.name, tab: tab.name });
        });
      }
    });
    return res;
  }
  private hasBaseClassInCurrentJson(): boolean {
    for (let i = 0; i < this.baseClasses.length; i++) {
      if (this.currentJson.classes[this.baseClasses[i]]) return true;
    }
    return false;
  }
  private removeBaseClassesFromCurrentJsonCore(): void {
    this.baseClasses.forEach(name => {
      delete this.currentJson.classes[name];
    });
  }
  private updateCurrentJsonCore(curJsonClasses: ISurveyPropertiesDefinition, val: Array<any>): void {
    if (!Array.isArray(val)) val = [];
    this.updateJsonClasses(curJsonClasses, val);
  }
  private updateJsonClasses(curJsonClasses: ISurveyPropertiesDefinition, val: Array<IPropertyGridTabInfo>): void {
    const tabs = new Array<IPropertyTabInfo>();
    const properties = new Array<IPropertyEditorInfo>();
    val.forEach(tab => {
      if (!tab || !tab.name) return;
      const newTab: IPropertyTabInfo = { name: tab.name };
      if (tab.iconName !== undefined) {
        newTab.iconName = tab.iconName;
      }
      tabs.push(newTab);
      if (Array.isArray(tab.items)) {
        tab.items.forEach(propName => {
          properties.push({ name: propName, tab: tab.name });
        });
      }
    });
    curJsonClasses[this.className] = curJsonClasses[this.className] || {};
    curJsonClasses[this.className].tabs = tabs;
    curJsonClasses[this.className].properties = properties;
  }
  public updatePropertyVisibility(propInfo: any, propCategory: string): void {
    this.updatePropertyVisibilityCore(this.currentJson.classes, propInfo, propCategory);
  }

  private updatePropertyVisibilityCore(curJsonClasses: ISurveyPropertiesDefinition, propInfo: any, propCategory: string): void {
    Object.keys(curJsonClasses).forEach(className => {
      const classDef = curJsonClasses[className];
      const propIndex = (classDef.properties as any)?.findIndex((p: any) => p.name === propInfo.name);
      if (!propInfo.classes) return;
      if (propInfo.classes.indexOf(className) < 0) {
        if (propIndex > -1) classDef.properties.splice(propIndex, 1);
      } else {
        if (propIndex < 0) {
          classDef.properties.push({ name: propInfo.name, tab: propCategory });
        }
      }
    });
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
                  detailElements:

                  [
                    {
                      "type": "panel",
                      "name": "details",
                      "maxWidth": "30%",
                      "elements": [
                        { type: "text", name: "name", title: getLocString("presets.propertyGrid.name"), isUnique: true, isRequired: true, visible: false },
                        { type: "text", name: "title", title: getLocString("presets.propertyGrid.titleField"), isUnique: true, isRequired: true, visible: false },
                        { type: "comment", name: "description", title: getLocString("presets.propertyGrid.descriptionField"), showSelectAllItem: true, visible: false },
                      ],
                      visible: false
                    },
                    {
                      type: "checkbox",
                      name: "classes",
                      title: getLocString("presets.propertyGrid.propertyVisibleIn"),
                      colCount: 3,
                      startWithNewLine: false,
                      visible: false
                    }
                  ]
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
    const categories = this.getQuestionCategories(model).value;

    categories?.forEach(c => c.properties?.forEach(p => this.currentProperties?.updatePropertyVisibility(p, c.category))); // may be slow!

    if (this.currentProperties) {
      this.currentProperties.updateCurrentJson(this.getPropertiesArray(categories));
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
  protected editItem(model: SurveyModel, creator: SurveyCreatorModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel, options?: {description: string, isNew: boolean}) {
    if (question.name === this.nameInnerMatrix && this.currentProperties) {
      const classesQuestion = question.detailPanel.getQuestionByName("classes");
      const propertyName = row.getValue("name");
      classesQuestion.choices = this.currentProperties.getClassesBySharedProperty(propertyName);
      const index = (question.visibleRows as any).findIndex(r => r === row);
      if (index >= 0) {
        const value = question.value || [];
        value[index].classes = this.currentProperties.getSelectedClassesForProperty(propertyName);
        question.value = [...value];
      }
    }
    super.editItem(model, creator, question, row, options);
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
