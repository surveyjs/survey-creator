import {
  JsonObjectProperty, ItemValue, QuestionDropdownModel,
  Base, Serializer, SurveyModel, matrixDropdownColumnTypes, PageModel,
  LocalizableString,
  Question } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import {
  SurveyCreatorModel, defaultPropertyGridDefinition, ISurveyPropertyGridDefinition, ISurveyPropertiesDefinition,
  SurveyQuestionProperties, editorLocalization, PropertyGridModel, TabDesignerPlugin,
  ICreatorOptions, settings, IQuestionToolboxItem, SurveyHelper, calculateDragOverLocation, PageAdorner
} from "survey-creator-core";

import { ElementFactory, QuestionMatrixDynamicModel, QuestionPanelDynamicModel } from "survey-core";
import { CreatorPresetEditableCaregorizedListConfigurator } from "./presets-editable-categorized";

//   private allTypes: string[];
//   protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
//     this.allTypes = ElementFactory.Instance.getAllToolboxTypes();
//     model.onGetDynamicPanelTabTitle.add(this.onGetDynamicPanelTabTitle);
//     this.getPanel(model).panelCount = this.allTypes.length;
//   }
//   private get nameSelector() { return this.fullPath + "_selector"; }
//   private getSelector(model: SurveyModel): QuestionDropdownModel { return <QuestionDropdownModel>model.getQuestionByName(this.nameSelector); }

//   protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
//     //this.setupQuestionsValueDefinition(model, json);
//     //this.isModified = !!json;
//     if (!json) {
//       json = this.copyJson(defaultPropertyGridDefinition);
//     }
//     const currentJson = json;
//     currentJson.autoGenerateProperties = false;
//     this.currentProperties = new SurveyQuestionPresetPropertiesDetail(this.currentClassName, this.currentJson);
//     this.propCreator.JSON = this.updateCreatorJSON(this.currentProperties.propertyGrid.survey.toJSON());
//     const categories = creator.toolbox.categories.map(c => ({ category: c.name, items: c.items.map(i => this.createPropertyGridItemRow(i)) }));
//     model.setValue(this.nameCategories, categories);
//   }
// }
const LocCategoriesName = "tabs";
export class SurveyQuestionPresetProperties extends SurveyQuestionProperties {
  constructor(obj: any, className: string, propertyGridDefinition: ISurveyPropertyGridDefinition) {
    super(obj, null, className, null, null, null, propertyGridDefinition);
  }
  protected getIsPropertyVisible(prop: JsonObjectProperty): boolean {
    return prop.visible !== false;
  }
}

const presetPropertiesBaseClasses = ["question", "matrixdropdownbase", "selectbase", "panelbase", "matrixdropdowncolumn@default", "matrixdropdowncolumn@selectbase"];

export class SurveyQuestionPresetPropertiesDetail {
  private propertiesHash = {};
  public classes = new Array<string>();
  private properties: SurveyQuestionPresetProperties;
  private propertyGridValue: PropertyGridModel;
  private propertyGridDefaultValue: PropertyGridModel;
  private allPropertiesNames: Array<string>;
  constructor(private className: string, private currentJson: ISurveyPropertyGridDefinition) {
    const cls = {};
    const obj = this.createObj();
    this.properties = new SurveyQuestionPresetProperties(obj, className, currentJson);
    this.allPropertiesNames = this.properties.getAllVisiblePropertiesNames(true);
    const objProps = {};
    Serializer.getPropertiesByObj(obj).forEach(prop => objProps[prop.name] = prop);
    this.allPropertiesNames.forEach(name => {
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
    this.propertyGridValue = this.createPropertyGrid(obj, this.currentJson);
    this.propertyGridDefaultValue = this.createPropertyGrid(obj);
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
  public getAllPropertiesNames(): Array<string> { return this.allPropertiesNames; }
  public getInitialJson() {
    const pgJSON = this.propertyGridValue.survey.toJSON();
    return pgJSON.pages.map(p => {
      return {
        category: p.name,
        title: p.title,
        iconName: p.iconName,
        properties: p.elements?.filter(e => e.name && e.name.indexOf("overridingProperty") == -1).map(e => ({
          name: e.name,
          title: e.title,
          description: e.description,
          isDefault: true
        }))
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
    if (!Array.isArray(val) || val.length === 0) return;
    const tabNames = [];
    this.classes.forEach(cl => {
      this.updateCurrentJsonClass(curJsonClasses, val, cl, tabNames);
    });
  }
  private updateCurrentJsonClass(curJsonClasses: ISurveyPropertiesDefinition, val: Array<any>, clName: string, tabNames: Array<string>): void {
    const properties = [];
    const tabs: any = [];
    const tabStep = 100;

    val.forEach(tab => {
      const clVal = tab.items;
      if (Array.isArray(clVal)) {
        const classesIndeces: any = [];
        this.classes.forEach(cl => classesIndeces.push(0));
        const propertiesIndeces = {};
        for (let i = 0; i < clVal.length; i++) {
          const clName = this.propertiesHash[clVal[i]];
          let clIndex = this.classes.indexOf(clName);
          if (clIndex < 0) continue;
          const nextStep = 10000 / Math.pow(10, clIndex);
          let max = 0;
          for (let j = 0; j <= clIndex; j++) {
            if (classesIndeces[j] > max) max = classesIndeces[j];
          }
          const visIndex = max + nextStep;
          propertiesIndeces[clVal[i]] = visIndex;
          classesIndeces[clIndex] = visIndex;
        }
        clVal.forEach(propName => {
          if (this.propertiesHash[propName] === clName) {
            const tabName = tab.name;
            if (!!tabName && tabNames.indexOf(tab.name) < 0) {
              tabNames.push(tab.name);
              tabs.push({ name: tab.name, index: tabNames.length * tabStep });
            }
            const item: any = { name: propName, index: propertiesIndeces[propName] };
            if (!!tabName) {
              item.tab = tabName;
            }
            properties.push(item);
          }
        });
      }
    });
    curJsonClasses[clName] = { properties: properties, tabs: tabs };
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
      titleLocation: "hidden",
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
        { type: "text", name: "name", title: "Name", isUnique: true, isRequired: true },
        { type: "text", name: "title", title: "Title", isUnique: true, isRequired: true },
        { type: "comment", name: "description", title: "Description" },
        { name: "isDefault", type: "boolean", defaultValue: false, visible: false }
      ]
    };
    return { ...defaultJSON, ...props };
  }

  public createMainPageCore(): any {
    return {
      title: "Set Up the Property Grid",
      navigationTitle: "Property Grid",
      elements: [
        {
          type: "dropdown",
          name: this.nameSelector,
          clearIfInvisible: "onHidden",
          title: "Select an element to customize its settings available in the Property Grid"
        },
        {
          type: "panel",
          name: "propPanel",
          visibleIf: this.getNotEmptyVisibleIf(this.nameSelector),
          elements: [
            {
              type: "matrixdynamic",
              name: this.nameCategories,
              titleLocation: "hidden",
              minRowCount: 1,
              allowRowReorder: true,
              addRowButtonLocation: "top",
              addRowText: "Add Custom Category",
              showHeader: false,
              columns: [
                { cellType: "text", name: "category", isUnique: true, isRequired: true, visible: false },
                { type: "boolean", name: "isDefault", visible: false },
                { cellType: "text", name: "title" },
              ],
              detailPanelMode: "underRow",
              detailElements: [
                { type: "text", name: "category", title: "Category", isRequired: true, visible: false },
                { type: "text", name: "iconName", title: "Icon Name", visible: false },
                this.createItemsMatrixJSON({
                  name: this.nameInnerMatrix,
                })
              ]
            },
            this.createItemsMatrixJSON({
              //allowAddRows: true,
              //addRowButtonLocation: "top",
              //addRowText: "Add Custom Item",
              startWithNewLine: false,
              name: this.nameMatrix,
              "descriptionLocation": "underInput",
              description: "Drag an item from this column to the left one - it will appear visible in the toolbox. You can also move them, using plus and minus buttons near the item."
            })
          ]
        },
      ]

    };
  }

  public getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel): any {
    if (!this.isModified) return undefined;
    this.updateCurrentJson(model);
    return { definition: this.currentJson };
  }
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    this.getSelector(model).choices = this.getSelectorChoices(creatorSetup.creator);
    const oldSearchValue = settings.propertyGrid.enableSearch;
    settings.propertyGrid.enableSearch = false;
    // this.propCreatorValue = creatorSetup.createCreator(options);
    // this.setupPropertyCreator();
    // this.getPropertyCreatorQuestion(model).embeddedCreator = this.propCreator;
    settings.propertyGrid.enableSearch = oldSearchValue;
  }
  private setJSONForTitlesAndDescriptions(locStrs: any, name: string): void {
    const strs = this.localeStrings[name];
    if (Object.keys(strs).length > 0) {
      locStrs[name] = strs;
    }
  }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {
    this.setJSONForTitlesAndDescriptions(locStrs, "pe");
    this.setJSONForTitlesAndDescriptions(locStrs, "pehelp");
  }
  protected updateJsonLocalizationStringsCore(locStrs: any): void {
    this.localeStrings = { pe: locStrs.pe || {}, pehelp: locStrs.pehelp || {} };
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
    this.updateCurrentJson(model);
    if (this.currentProperties) {
      this.currentProperties = undefined;
    }
    const selQuestion = this.getSelector(model);
    this.currentClassName = selQuestion.value;
    if (!this.currentClassName) return;
    this.currentProperties = new SurveyQuestionPresetPropertiesDetail(this.currentClassName, this.currentJson);
    const categories = this.currentProperties.getInitialJson();
    this.defaultItems = [];
    model.setValue(this.nameCategories, categories);
    this.firstTimeLoading = false;
    //this.propCreator.JSON = this.updateCreatorJSON(this.currentProperties.propertyGrid.survey.toJSON());
    //this.setupCreatorToolbox(this.propCreator);
  }

  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.isModified = !!json;
    if (!json) {
      json = this.copyJson(defaultPropertyGridDefinition);
    }
    this.currentJson = json;
    this.currentJson.autoGenerateProperties = false;
  }
  private getSelector(model: SurveyModel): QuestionDropdownModel { return <QuestionDropdownModel>model.getQuestionByName(this.nameSelector); }
  //   private getPropertyCreatorQuestion(model: SurveyModel): QuestionEmbeddedCreatorModel { return <QuestionEmbeddedCreatorModel>model.getQuestionByName(this.namePropertyCreator); }
  private get nameSelector() { return this.fullPath + "_selector"; }
  //   private get namePropertyCreator() { return this.fullPath + "_propcreator"; }
  private getSelectorChoices(creator: SurveyCreatorModel): Array<ItemValue> {
    const classes = ["survey", "page", "panel"];
    const toolboxItems = {};
    creator.toolbox.getDefaultItems([], false, true, true).forEach(item => {
      toolboxItems[item.id] = true;
    });

    Serializer.getChildrenClasses("question", true).forEach(cl => {
      if (toolboxItems[cl.name]) {
        classes.push(cl.name);
      }
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
      this.currentProperties.updateCurrentJson(this.getPropertiesArray(model));
    }
  }
  private getPropertiesArray(model: SurveyModel): Array<any> {
    const categories = this.getQuestionCategories(model).value;
    return categories?.map(c => ({ name: c.category, items: c.properties?.map(p => p.name) }));
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
