import {
  ISurveyQuestionEditorDefinition,
  ISurveyPropertyGridDefinition,
  defaultPropertyGridDefinition
} from "./definition";
import { JsonObjectProperty, Serializer, JsonMetadataClass, Helpers } from "survey-core";
import { SurveyHelper } from "../survey-helper";
import { ISurveyCreatorOptions, settings } from "../creator-settings";
import { pgTabIcons } from "../property-grid/icons";

export class SurveyQuestionEditorPropertyDefinition {
  public className: string;
  public property: JsonObjectProperty;
  public title: string;
  public category: string;
  public onSameLine: boolean;
  public index: number;
  public definedIndex: number;
  public get name(): string {
    return !!this.property ? this.property.name : "";
  }
}

export class SurveyQuestionEditorTabDefinition {
  public name: string;
  public iconName: string;
  public title: string;
  public visible: boolean = true;
  public index: number = 0;
  public properties: Array<SurveyQuestionEditorPropertyDefinition> = [];
  public parentName: string;
  public parent: SurveyQuestionEditorTabDefinition;
  public tabs: Array<SurveyQuestionEditorTabDefinition>;
}

const otherTabName = "others";

interface IPropertyHashEntry {
  property: JsonObjectProperty;
  visible: boolean;
}

export class SurveyQuestionProperties {
  private showModeValue: string;
  private properties: Array<JsonObjectProperty>;
  private propertiesHash: { [name: string]: IPropertyHashEntry };
  private tabs: Array<SurveyQuestionEditorTabDefinition> = [];
  private unusedProperties: Array<JsonObjectProperty> = [];
  private customGeneratedProperties: Array<string> = [];

  constructor(
    public obj: any,
    public options: ISurveyCreatorOptions = null,
    className: string = null,
    showMode: string = null,
    private parentObj: any = null,
    private parentProperty: JsonObjectProperty = null,
    private propertyGridDefinition: ISurveyPropertyGridDefinition = null
  ) {
    if (!this.propertyGridDefinition) {
      this.propertyGridDefinition = defaultPropertyGridDefinition;
    }
    this.showModeValue = showMode;
    this.properties = Serializer.getPropertiesByObj(this.obj);
    this.fillPropertiesHash();
    this.buildTabs(className);
  }

  //#region Public API
  public get showMode(): string {
    return this.showModeValue || "form";
  }
  public get isEmpty(): boolean {
    return !this.tabs.some(tab => tab.visible && tab.properties.length > 0);
  }
  public getAllVisiblePropertiesNames(includeUnused: boolean): Array<string> {
    const res: Array<string> = [];
    for (const tab of this.tabs) {
      if (tab.visible !== false) {
        for (const prop of tab.properties) {
          res.push(prop.name);
        }
      }
    }
    if (includeUnused) {
      for (const prop of this.unusedProperties) {
        res.push(prop.name);
      }
    }
    return res;
  }
  public getProperty(propertyName: string): JsonObjectProperty {
    const entry = this.propertiesHash[propertyName];
    return entry?.visible ? entry.property : null;
  }
  public getTabByName(tabName: string): SurveyQuestionEditorTabDefinition {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].name === tabName) return this.tabs[i];
    }
    return null;
  }
  public getTabs(): Array<SurveyQuestionEditorTabDefinition> {
    return this.tabs;
  }
  public getProperties(tab: SurveyQuestionEditorTabDefinition): Array<JsonObjectProperty> {
    return tab.properties.map(p => p.property);
  }
  public getInvisibleCustomGeneratedProperties(visibleProperties: Array<string>): Array<string> {
    return this.customGeneratedProperties.filter(prop => visibleProperties.indexOf(prop) < 0);
  }
  //#endregion

  //#region Protected (override points)
  protected getIsPropertyVisible(prop: JsonObjectProperty): boolean {
    return SurveyHelper.isPropertyVisible(this.obj, prop, this.options, this.showMode, this.parentObj, this.parentProperty);
  }
  protected getDynamicClassName(): string {
    return this.obj?.isQuestion && this.obj.getDynamicType ? this.obj.getDynamicType() : "";
  }
  //#endregion

  //#region Properties hash
  private fillPropertiesHash(): void {
    this.propertiesHash = {};
    for (const prop of this.properties) {
      this.propertiesHash[prop.name] = {
        property: prop,
        visible: this.getIsPropertyVisible(prop),
      };
    }
  }
  private isJSONPropertyVisible(property: JsonObjectProperty): boolean {
    const entry = this.propertiesHash[property.name];
    return !!entry && entry.visible;
  }
  //#endregion

  //#region Tab building
  private buildTabs(className: string): void {
    if (!className && this.obj) {
      className = this.obj.getType();
    }
    const definitions = this.getAllDefinitionsByClass(className);
    this.populateTabsFromDefinitions(definitions, className);
    this.finalizeTabLayout();
  }
  private populateTabsFromDefinitions(definitions: Array<ISurveyQuestionEditorDefinition>, className: string): void {
    const addedProperties: Array<string> = [];
    for (let i = definitions.length - 1; i >= 0; i--) {
      const defItem = definitions[i];
      if (defItem.tabs) {
        for (let j = defItem.tabs.length - 1; j >= 0; j--) {
          this.applyTabDefinition(defItem.tabs[j]);
        }
      }
      if (defItem.properties) {
        for (let j = defItem.properties.length - 1; j >= 0; j--) {
          const propertyName = defItem.properties[j]["name"] || defItem.properties[j];
          if (addedProperties.indexOf(propertyName) === -1) {
            addedProperties.push(propertyName);
            this.addPropertyIntoTab(className, defItem.properties[j]);
          }
        }
      }
    }
  }
  private finalizeTabLayout(): void {
    for (let i = this.tabs.length - 1; i >= 0; i--) {
      this.movePropertiesToAdjacentPositions(this.tabs[i].properties);
      if (!this.tabs[i].visible) {
        this.tabs.splice(i, 1);
      } else {
        this.sortProperties(this.tabs[i].properties);
      }
    }
    this.sortTabsByIndex(this.tabs);
    this.setParentTabs();
    for (const tab of this.tabs) {
      this.sortTabsByIndex(tab.tabs);
    }
  }
  private applyTabDefinition(defProperty: any): void {
    const tab = this.getTabOrCreate(defProperty.name, defProperty.iconName);
    if (defProperty.index > 0) {
      tab.index = defProperty.index;
    }
    tab.parentName = defProperty.parent;
    if (defProperty.visible === false) {
      tab.visible = false;
    }
    if (defProperty.title) {
      tab.title = defProperty.title;
    }
  }
  private getTabOrCreate(tabName: string, iconName?: string): SurveyQuestionEditorTabDefinition {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].name === tabName) return this.tabs[i];
    }
    const newTab = new SurveyQuestionEditorTabDefinition();
    newTab.name = tabName;
    newTab.iconName = iconName || pgTabIcons[tabName] || pgTabIcons["undefined"];
    if (tabName === settings.propertyGrid.generalTabName) {
      newTab.index = -1;
    }
    this.tabs.unshift(newTab);
    return newTab;
  }
  private sortTabsByIndex(tabs: Array<SurveyQuestionEditorTabDefinition>): void {
    if (!Array.isArray(tabs)) return;
    const hasIndex = tabs.some(tab => tab.index > 0);
    if (!hasIndex) return;
    tabs.sort((a, b) => a.index - b.index);
  }
  private setParentTabs(): void {
    for (let i = this.tabs.length - 1; i >= 0; i--) {
      const tab = this.tabs[i];
      if (!tab.parentName) continue;
      const parent = this.getTabByName(tab.parentName);
      if (!parent) continue;
      tab.parent = parent;
      if (!Array.isArray(parent.tabs)) {
        parent.tabs = [];
      }
      parent.tabs.push(tab);
      this.tabs.splice(i, 1);
    }
  }
  //#endregion

  //#region Property placement into tabs
  private addPropertyIntoTab(className: string, defProperty: any): boolean {
    const isString = typeof defProperty === "string";
    const name = isString ? defProperty : defProperty.name;
    const propRes = this.propertiesHash[name];
    if (!propRes) return false;
    if (!isString && defProperty.visible === false) return false;
    if (!propRes.visible && (isString || defProperty.visible !== true)) return false;

    const tabName = (!isString && defProperty.tab) ? defProperty.tab : settings.propertyGrid.generalTabName;
    const propertyDefinition = new SurveyQuestionEditorPropertyDefinition();
    propertyDefinition.className = className;
    propertyDefinition.property = propRes.property;
    propertyDefinition.category = (!isString && defProperty.category) ? defProperty.category : "";
    propertyDefinition.title = (!isString && defProperty.title) ? defProperty.title : "";
    if (defProperty.index !== undefined) {
      propertyDefinition.definedIndex = defProperty.index;
    }
    propertyDefinition.onSameLine = this.isPropertyOnSameLine(propRes.property.nextToProperty);
    const tab = this.getTabOrCreate(tabName);
    tab.properties.unshift(propertyDefinition);
    return true;
  }
  private movePropertiesToAdjacentPositions(properties: Array<SurveyQuestionEditorPropertyDefinition>): void {
    const snapshot = [].concat(properties);
    for (const currentProp of snapshot) {
      const nextToProperty = this.getNextToNameProperty(currentProp.property);
      const targetTab = this.findTabByPropertyName(nextToProperty);
      if (!targetTab) continue;
      const anchorProp = this.findPropertyInTab(targetTab, nextToProperty);
      const anchorIndex = targetTab.properties.indexOf(anchorProp);
      targetTab.properties.splice(anchorIndex + 1, 0, currentProp);
      properties.splice(properties.indexOf(currentProp), 1);
    }
  }
  private findTabByPropertyName(propName: string): SurveyQuestionEditorTabDefinition {
    if (!propName) return null;
    const normalizedName = this.isPropertyOnSameLine(propName) ? propName.substring(1) : propName;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.findPropertyInTab(this.tabs[i], normalizedName)) return this.tabs[i];
    }
    return null;
  }
  private findPropertyInTab(tab: SurveyQuestionEditorTabDefinition, propName: string): SurveyQuestionEditorPropertyDefinition {
    for (let i = 0; i < tab.properties.length; i++) {
      if (tab.properties[i].name === propName) return tab.properties[i];
    }
    return null;
  }
  private getNextToNameProperty(property: JsonObjectProperty): string {
    if (!property.nextToProperty) return "";
    return this.isPropertyOnSameLine(property.nextToProperty)
      ? property.nextToProperty.substring(1)
      : property.nextToProperty;
  }
  private isPropertyOnSameLine(nextToProperty: string): boolean {
    return !!nextToProperty && nextToProperty[0] === "*";
  }
  //#endregion

  //#region Definition resolution
  private get isColumnObj(): boolean {
    return this.obj.getType() === "matrixdropdowncolumn";
  }
  private get generateOtherTab(): boolean {
    return this.propertyGridDefinition.generateOtherTab === true;
  }
  private getClassDefinition(name: string, includingParents?: boolean): ISurveyQuestionEditorDefinition {
    if (!this.propertyGridDefinition?.classes) return undefined;
    let res = this.getDefinitionClassCopy(name);
    while(!res && includingParents && name) {
      const names = name.split("@");
      const hasBrackets = names[0].indexOf("[]") > 0;
      const cl = Serializer.findClass(names[0].replace("[]", ""));
      name = cl?.parentName;
      if (name && names.length) {
        if (hasBrackets) {
          name += "[]";
        }
        name += "@" + names[1];
      }
      res = this.getDefinitionClassCopy(name);
    }
    return res;
  }
  private getDefinitionClassCopy(name: string): ISurveyQuestionEditorDefinition {
    if (!name) return undefined;
    const cls = this.propertyGridDefinition.classes[name];
    return cls ? Helpers.getUnbindValue(cls) : undefined;
  }
  private getAllDefinitionsByClass(className: string): Array<ISurveyQuestionEditorDefinition> {
    const result: Array<ISurveyQuestionEditorDefinition> = [];
    const usedProperties: { [name: string]: boolean } = {};
    if (className.indexOf("@") > -1 && this.getClassDefinition(className, true)) {
      return this.getDefinitionsForPrefixedClass(className, result, usedProperties);
    }
    return this.getDefinitionsForRegularClass(className, result, usedProperties);
  }
  private getDefinitionsForPrefixedClass(
    className: string,
    result: Array<ISurveyQuestionEditorDefinition>,
    usedProperties: { [name: string]: boolean }
  ): Array<ISurveyQuestionEditorDefinition> {
    const prefix = className.substring(0, className.indexOf("@") + 1);
    const clName = className.substring(prefix.length);
    const classes: Array<string> = [];
    let classInfo = Serializer.findClass(clName);
    while(classInfo && classInfo.name !== "question") {
      classes.unshift(prefix + classInfo.name);
      classInfo = classInfo.parentName ? Serializer.findClass(classInfo.parentName) : undefined;
    }
    if (classes.indexOf(className) < 0) {
      classes.unshift(className);
    }
    if (classes.indexOf(prefix + "default") < 0) {
      classes.unshift(prefix + "default");
    }
    for (const cl of classes) {
      const def = this.getClassDefinition(cl);
      if (def) {
        result.push(def);
      }
    }
    this.markUsedProperties(result, usedProperties);
    if (this.isColumnObj) {
      this.collectDefinitionsFromClassHierarchy(this.obj.templateQuestion.getType(), usedProperties, result, undefined, true);
    }
    this.addNonTabProperties(result, usedProperties, true);
    return result;
  }
  private getDefinitionsForRegularClass(
    className: string,
    result: Array<ISurveyQuestionEditorDefinition>,
    usedProperties: { [name: string]: boolean }
  ): Array<ISurveyQuestionEditorDefinition> {
    let hasNonTabDynamicProperties = false;
    const dynamicClass = this.getDynamicClassName();
    if (dynamicClass) {
      hasNonTabDynamicProperties = this.collectDefinitionsFromClassHierarchy(dynamicClass, usedProperties, result, className);
    }
    const hasNonTabProperties = this.collectDefinitionsFromClassHierarchy(className, usedProperties, result, undefined);
    if (!hasNonTabProperties || !hasNonTabDynamicProperties) {
      this.addNonTabProperties(result, usedProperties);
    }
    return result;
  }
  private markUsedProperties(definitions: Array<ISurveyQuestionEditorDefinition>, usedProperties: { [name: string]: boolean }): void {
    for (const def of definitions) {
      if (!Array.isArray(def.properties)) continue;
      for (const prop of def.properties) {
        const propName = prop["name"] || prop;
        usedProperties[propName] = true;
      }
    }
  }
  private collectDefinitionsFromClassHierarchy(
    className: string,
    usedProperties: { [name: string]: boolean },
    result: Array<ISurveyQuestionEditorDefinition>,
    baseClass: string,
    isColumn?: boolean
  ): boolean {
    let foundOtherTab = false;
    let curClassName = className;
    while(curClassName && (!baseClass || !Serializer.isDescendantOf(baseClass, curClassName))) {
      const metaClass = Serializer.findClass(curClassName) as JsonMetadataClass;
      if (!metaClass) break;
      foundOtherTab = this.collectSingleClassDefinition(metaClass.name, usedProperties, result, isColumn);
      curClassName = metaClass.name === "page" ? "panelbase" : metaClass.parentName;
    }
    return foundOtherTab;
  }
  private collectSingleClassDefinition(
    className: string,
    usedProperties: { [name: string]: boolean },
    result: Array<ISurveyQuestionEditorDefinition>,
    isColumn: boolean
  ): boolean {
    const classRes = this.getClassDefinition(className);
    let foundOtherTab = false;
    if (!classRes) return foundOtherTab;

    let columnDef: ISurveyQuestionEditorDefinition = undefined;
    if (classRes.properties) {
      let i = 0;
      while(i < classRes.properties.length) {
        const prop = classRes.properties[i];
        const propName = typeof prop === "string" ? prop : prop.name;
        const originalTabName = (typeof prop !== "string" && prop.tab) ? prop.tab : "";
        const tabName = originalTabName || settings.propertyGrid.generalTabName;
        const jsonProp = this.propertiesHash[propName]?.property || null;
        if (!isColumn || jsonProp?.availableInMatrixColumn) {
          const jsonPropertyCategory = this.getJsonPropertyCategory(jsonProp);
          if ((!originalTabName || this.generateOtherTab) && jsonPropertyCategory && jsonPropertyCategory !== tabName) {
            classRes.properties.splice(i, 1);
          } else {
            usedProperties[propName] = true;
          }
          if (isColumn) {
            if (!columnDef) {
              columnDef = { properties: [], tabs: [] };
            }
            columnDef.properties.push(prop);
          }
        }
        i++;
      }
    }
    if (isColumn) {
      if (columnDef) {
        result.unshift(columnDef);
      }
      return foundOtherTab;
    }
    if (classRes.tabs) {
      for (const tab of classRes.tabs) {
        foundOtherTab = foundOtherTab || tab.name === otherTabName;
      }
    }
    result.unshift(classRes);
    return foundOtherTab;
  }
  private getJsonPropertyCategory(jsonProperty: JsonObjectProperty): string {
    return jsonProperty?.category || null;
  }
  //#endregion

  //#region Unused / non-tab properties
  private getUnusedProperties(usedProperties: { [name: string]: boolean }, isFormMode: boolean = false): Array<JsonObjectProperty> {
    const isColumn = this.isColumnObj;
    return this.properties.filter(prop => {
      if (!this.isJSONPropertyVisible(prop) || usedProperties[prop.name]) return false;
      if (!isFormMode) return true;
      return prop.locationInTable === "both" || prop.showMode === "form" || (isColumn && prop.availableInMatrixColumn);
    });
  }
  private getInvisibleGeneratedProperties(tabs: Array<ISurveyQuestionEditorDefinition>): Array<string> {
    if (!Array.isArray(tabs)) return [];
    const res: Array<string> = [];
    for (const tab of tabs) {
      if (Array.isArray(tab.invisibleGeneratedProperties)) {
        for (const prop of tab.invisibleGeneratedProperties) {
          res.push(prop);
        }
      }
    }
    return res;
  }
  private addNonTabProperties(
    tabs: Array<ISurveyQuestionEditorDefinition>,
    usedProperties: { [name: string]: boolean },
    isFormMode: boolean = false
  ): void {
    const unusedProperties = this.getUnusedProperties(usedProperties, isFormMode);
    const invisibleGeneratedProperties = this.getInvisibleGeneratedProperties(tabs);
    const generateOther = this.generateOtherTab;
    const classRes: ISurveyQuestionEditorDefinition = { properties: [], tabs: [] };
    const tabNames: Array<string> = [];
    this.customGeneratedProperties = [].concat(invisibleGeneratedProperties);
    for (const prop of unusedProperties) {
      if (invisibleGeneratedProperties.indexOf(prop.name) > -1) continue;
      const propCategory = this.getJsonPropertyCategory(prop);
      const tabName = propCategory
        ? propCategory
        : (tabs.length === 0 || (this.parentObj && this.showMode === "form"))
          ? settings.propertyGrid.generalTabName
          : otherTabName;
      if (!generateOther && tabName === otherTabName) continue;
      this.customGeneratedProperties.push(prop.name);
      if (tabNames.indexOf(tabName) < 0 && tabName !== settings.propertyGrid.generalTabName) {
        tabNames.push(tabName);
        classRes.tabs.push({
          name: tabName,
          index: tabName === otherTabName ? 1000 : tabNames.length * 10,
        });
      }
      if (prop.categoryIndex > -1 && tabNames.indexOf(tabName) > -1) {
        for (let j = 0; j < classRes.tabs.length; j++) {
          if (classRes.tabs[j].name === tabName) {
            classRes.tabs[j].index = prop.categoryIndex;
          }
        }
      }
      classRes.properties.push({ name: prop.name, tab: tabName });
    }
    if (classRes.properties.length > 0) {
      tabs.push(classRes);
    }
  }
  //#endregion

  //#region Property sorting
  private getClassDepth(className: string): number {
    if (className.indexOf("matrixdropdowncolumn@") === 0) {
      return className.indexOf("@default") > 0 ? 0 : 1;
    }
    if (className.indexOf("@") > 0) return 0;
    const classes = this.propertyGridDefinition.classes;
    if (!classes) return 0;
    let classInfo = Serializer.findClass(className);
    while(classInfo?.parentName) {
      className = classInfo.parentName;
      if (classes[className]) return this.getClassDepth(className) + 1;
      classInfo = Serializer.findClass(className);
    }
    return 0;
  }
  private sortProperties(properties: Array<SurveyQuestionEditorPropertyDefinition>): void {
    if (!Array.isArray(properties)) return;
    const classesIndexes: { [key: string]: number } = {};
    const getIndexByClassName = (className: string): number => {
      if (classesIndexes[className] === undefined) {
        classesIndexes[className] = this.getClassDepth(className) * 10000;
      } else {
        classesIndexes[className] += 1;
      }
      return classesIndexes[className];
    };
    for (const prop of properties) {
      prop.index = prop.definedIndex !== undefined ? prop.definedIndex : getIndexByClassName(prop.className);
    }
    properties.sort((a, b) => a.index - b.index);
    this.insertPropertiesWithVisibleIndex(properties);
  }
  private insertPropertiesWithVisibleIndex(properties: Array<SurveyQuestionEditorPropertyDefinition>): void {
    const snapshot = [].concat(properties);
    for (const prop of snapshot) {
      const visibleIndex = prop.property.visibleIndex;
      if (visibleIndex < 0 || prop.definedIndex !== undefined) continue;
      const curIndex = properties.indexOf(prop);
      if (curIndex > -1) {
        properties.splice(curIndex, 1);
      }
      if (visibleIndex < properties.length) {
        properties.splice(visibleIndex, 0, prop);
      } else {
        properties.push(prop);
      }
    }
  }
  //#endregion
}
