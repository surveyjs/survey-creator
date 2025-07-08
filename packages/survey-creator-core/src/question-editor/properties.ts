import {
  SurveyQuestionEditorDefinition,
  ISurveyQuestionEditorDefinition,
  ISurveyPropertyGridDefinition,
  defaultPropertyGridDefinition
} from "./definition";
import { JsonObjectProperty, Serializer, JsonMetadataClass, Helpers } from "survey-core";
import { SurveyHelper } from "../survey-helper";
import { ISurveyCreatorOptions, settings } from "../creator-settings";
import { pgTabIcons } from "../property-grid/icons";

export class SurveyQuestionEditorPropertyDefinition {
  public property: JsonObjectProperty;
  public title: string;
  public category: string;
  public createdFromTabName: boolean;
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

export class SurveyQuestionProperties {
  private showModeValue: string;
  private properties: Array<JsonObjectProperty>;
  private propertiesHash: any;
  private tabs: Array<SurveyQuestionEditorTabDefinition> = [];
  private unusedProperties: Array<JsonObjectProperty> = [];
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
  public getAllVisiblePropertiesNames(includeUnused: boolean): Array<string> {
    const res = [];
    this.tabs.forEach(tab => {
      if (tab.visible !== false) {
        tab.properties.forEach(prop => res.push(prop.name));
      }
    });
    if (includeUnused) {
      this.unusedProperties.forEach(prop => res.push(prop.name));
    }
    return res;
  }
  protected getIsPropertyVisible(prop: JsonObjectProperty): boolean {
    return SurveyHelper.isPropertyVisible(this.obj, prop, this.options, this.showMode, this.parentObj, this.parentProperty);
  }
  protected getDynamicClassName(): string {
    return !!this.obj && this.obj.isQuestion && !!this.obj.getDynamicType ? this.obj.getDynamicType() : "";
  }
  public getProperty(propertyName: string): JsonObjectProperty {
    var res = this.propertiesHash[propertyName];
    return !!res && res.visible ? res.property : null;
  }
  public getPropertyAsCategory(propertyName: string): JsonObjectProperty {
    const prop = this.getProperty(propertyName);
    return prop && (!prop.category || prop.category === propertyName) ? prop : null;
  }
  public get showMode(): string {
    return !!this.showModeValue ? this.showModeValue : "form";
  }
  public get isEmpty(): boolean {
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].visible && this.tabs[i].properties.length > 0)
        return false;
    }
    return true;
  }
  private getClassDefintion(name: string, includingParents?: boolean): ISurveyQuestionEditorDefinition {
    if (!this.propertyGridDefinition || !this.propertyGridDefinition.classes) return undefined;
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
  private getDefinitionClassCopy(name: string) : ISurveyQuestionEditorDefinition {
    if (!name) return undefined;
    const cls = this.propertyGridDefinition.classes[name];
    return cls ? Helpers.getUnbindValue(cls) : undefined;
  }
  private fillPropertiesHash() {
    this.propertiesHash = {};
    for (var i = 0; i < this.properties.length; i++) {
      var prop = this.properties[i];
      this.propertiesHash[prop.name] = {
        property: prop,
        visible: this.getIsPropertyVisible(prop),
      };
    }
  }
  private isJSONPropertyVisible(property: JsonObjectProperty): boolean {
    var res = this.propertiesHash[property.name];
    return !!res && res.visible;
  }
  public getTabByName(tabName: string): SurveyQuestionEditorTabDefinition {
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].name == tabName) return this.tabs[i];
    }
    return null;
  }
  public getTabs(): Array<SurveyQuestionEditorTabDefinition> {
    return this.tabs;
  }
  public getProperties(
    tab: SurveyQuestionEditorTabDefinition
  ): Array<JsonObjectProperty> {
    var res = [];
    for (var i = 0; i < tab.properties.length; i++) {
      res.push(tab.properties[i].property);
    }
    return res;
  }
  private buildTabs(className: string) {
    if (!className && !!this.obj) {
      className = this.obj.getType();
    }
    var definitions = this.getAllDefinitionsByClass(className);
    var addedProperties = [];
    for (var i = definitions.length - 1; i >= 0; i--) {
      var defItem = definitions[i];
      for (var j = !!defItem.tabs ? defItem.tabs.length - 1 : -1; j >= 0; j--) {
        const defTab = defItem.tabs[j];
        if (addedProperties.indexOf(defTab.name) > -1) {
          this.setTabProperties(defTab);
        } else {
          if (this.addPropertyIntoTab(defTab, true)) {
            addedProperties.push(defTab.name);
          }
        }
      }
      for (
        var j = !!defItem.properties ? defItem.properties.length - 1 : -1;
        j >= 0;
        j--
      ) {
        var propertyName =
          defItem.properties[j]["name"] || defItem.properties[j];
        if (addedProperties.indexOf(propertyName) === -1) {
          addedProperties.push(propertyName);
          this.addPropertyIntoTab(defItem.properties[j]);
        }
      }
    }
    for (var i = this.tabs.length - 1; i >= 0; i--) {
      this.movePropertiesToNextProperties(this.tabs[i].properties);
      if (!this.tabs[i].visible) {
        this.tabs.splice(i, 1);
      } else {
        this.sortProperties(this.tabs[i].properties);
      }
    }
    this.tabs.sort(function (a, b) {
      return a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
    });
    this.setParentTabs();
    this.tabs.forEach(tab => {
      tab.tabs?.sort((a, b) => a.index - b.index);
    });
  }
  private setParentTabs(): void {
    for (let i = this.tabs.length - 1; i >= 0; i --) {
      const tab = this.tabs[i];
      if (tab.parentName) {
        const parent = this.getTabByName(tab.parentName);
        if (parent) {
          tab.parent = parent;
          if (!Array.isArray(parent.tabs)) {
            parent.tabs = [];
          }
          parent.tabs.push(tab);
          this.tabs.splice(i, 1);
        }
      }
    }
  }
  private addPropertyIntoTab(
    defProperty: any,
    isTab: boolean = false
  ): boolean {
    if (isTab) {
      this.setTabProperties(defProperty);
    }
    var isString = typeof defProperty == "string";
    var name = !isString ? defProperty.name : defProperty;
    var propRes = this.propertiesHash[name];
    if (!propRes || isTab && !this.getPropertyAsCategory(name)) return false;
    if (!isString && defProperty.visible === false) return false;
    if (
      !propRes.visible &&
      (isString || (!isString && defProperty.visible !== true))
    )
      return false;
    var tabName = isTab ? defProperty.name : settings.propertyGrid.generalTabName;
    if (!isTab && !isString && !!defProperty.tab) {
      tabName = defProperty.tab;
    }
    var propertyDefinition = new SurveyQuestionEditorPropertyDefinition();
    propertyDefinition.property = propRes.property;
    propertyDefinition.category =
      !isString && !!defProperty.category ? defProperty.category : "";
    propertyDefinition.title =
      !isString && !!defProperty.title ? defProperty.title : "";
    if (!isTab && defProperty.index !== undefined) {
      propertyDefinition.definedIndex = defProperty.index;
    }
    propertyDefinition.onSameLine = this.isPropertyOnSameLine(propRes.property.nextToProperty);
    propertyDefinition.createdFromTabName = isTab;
    let tab = this.getTabOrCreate(tabName);
    tab.properties.unshift(propertyDefinition);
    return true;
  }
  private setTabProperties(defProperty: any): void {
    let tab = this.getTabOrCreate(defProperty.name, defProperty.iconName);
    if (defProperty.index > 0) {
      tab.index = defProperty.index;
    }
    tab.parentName = defProperty.parent;
    if (defProperty.visible === false) {
      tab.visible = false;
    }
    if (!!defProperty.title) {
      tab.title = defProperty.title;
    }
  }
  private movePropertiesToNextProperties(
    properties: Array<SurveyQuestionEditorPropertyDefinition>
  ) {
    var props = [].concat(properties);
    for (var i = 0; i < props.length; i++) {
      const nextToProperty = this.getNextToNameProperty(props[i].property);
      var newTab = this.getTabByPropertyName(nextToProperty);
      if (!!newTab) {
        var prop = this.getPropertyByNameInTab(
          newTab,
          nextToProperty
        );
        var index = newTab.properties.indexOf(prop);
        newTab.properties.splice(index + 1, 0, props[i]);
        properties.splice(properties.indexOf(props[i]), 1);
      }
    }
  }
  private getTabByPropertyName(
    propName: string
  ): SurveyQuestionEditorTabDefinition {
    if (!propName) return null;
    if (this.isPropertyOnSameLine(propName)) propName = propName.substring(1);
    for (var i = 0; i < this.tabs.length; i++) {
      if (!!this.getPropertyByNameInTab(this.tabs[i], propName))
        return this.tabs[i];
    }
    return null;
  }
  private getNextToNameProperty(property: JsonObjectProperty): string {
    if (!property.nextToProperty) return "";
    if (this.isPropertyOnSameLine(property.nextToProperty)) return property.nextToProperty.substring(1);
    return property.nextToProperty;
  }
  private isPropertyOnSameLine(nextToProperty: string): boolean {
    return !!nextToProperty && nextToProperty[0] === "*";
  }
  private getPropertyByNameInTab(
    tab: SurveyQuestionEditorTabDefinition,
    propName: string
  ): SurveyQuestionEditorPropertyDefinition {
    var props = tab.properties;
    for (var i = 0; i < props.length; i++) {
      if (props[i].name == propName) return props[i];
    }
    return null;
  }
  private getTabOrCreate(tabName: string, iconName?: string): SurveyQuestionEditorTabDefinition {
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].name == tabName) return this.tabs[i];
    }
    var res = new SurveyQuestionEditorTabDefinition();
    res.name = tabName;
    res.iconName = iconName || pgTabIcons[tabName] || pgTabIcons["undefined"];
    if (tabName == settings.propertyGrid.generalTabName) {
      res.index = -1;
    }
    this.tabs.unshift(res);
    return res;
  }
  private setUsedProperties(res: Array<ISurveyQuestionEditorDefinition>, usedProperties: any): void {
    for (let i = 0; i < res.length; i++) {
      const props = res[i].properties;
      if (!Array.isArray(props)) continue;
      for (let j = 0; j < props.length; j++) {
        const propName = !!props[j]["name"] ? props[j]["name"] : props[j];
        usedProperties[propName] = true;
      }
    }
  }
  private getAllDefinitionsByClass(
    className: string
  ): Array<ISurveyQuestionEditorDefinition> {
    var result = [];
    var usedProperties = {};
    if (className.indexOf("@") > -1 && this.getClassDefintion(className, true)) {
      const prefix = className.substring(0, className.indexOf("@") + 1);
      const clName = className.substring(prefix.length);
      const classes = [];
      let classInfo = Serializer.findClass(clName);
      while(!!classInfo && classInfo.name !== "question") {
        classes.unshift(prefix + classInfo.name);
        classInfo = !!classInfo.parentName ? Serializer.findClass(classInfo.parentName) : undefined;
      }
      if (classes.indexOf(className) < 0) {
        classes.unshift(className);
      }
      if (classes.indexOf(prefix + "default") < 0) {
        classes.unshift(prefix + "default");
      }
      classes.forEach(cl => {
        const def = this.getClassDefintion(cl);
        if (def) {
          result.push(def);
        }
      });
      this.setUsedProperties(result, usedProperties);
      if (this.isColumnObj) {
        this.getAllDefinitionsByClassCore(this.obj.templateQuestion.getType(), usedProperties, result, undefined, true);
      }
      this.addNonTabProperties(result, usedProperties, true);
      return result;
    }
    let hasNonTabDynamicProperties = false;
    const dynamicClass = this.getDynamicClassName();
    if (dynamicClass) {
      hasNonTabDynamicProperties = this.getAllDefinitionsByClassCore(dynamicClass, usedProperties, result, className);
    }
    const hasNonTabProperties = this.getAllDefinitionsByClassCore(className, usedProperties, result, undefined);

    if (!hasNonTabProperties || !hasNonTabDynamicProperties) {
      this.addNonTabProperties(result, usedProperties);
    }
    return result;
  }
  private getAllDefinitionsByClassCore(className: string, usedProperties: any, result: Array<ISurveyQuestionEditorDefinition>, baseClass: string, isColumn?: boolean): boolean {
    let res = false;
    let curClassName = className;
    while(curClassName && (!baseClass || !Serializer.isDescendantOf(baseClass, curClassName))) {
      let metaClass = <JsonMetadataClass>(
        Serializer.findClass(curClassName)
      );
      if (!metaClass) break;
      res = this.getAllDefinitionsByClassSingleCore(metaClass.name, usedProperties, result, isColumn);
      curClassName = metaClass.parentName;
    }
    return res;
  }
  private getAllDefinitionsByClassSingleCore(className: string, usedProperties: any, result: Array<ISurveyQuestionEditorDefinition>, isColumn: boolean): boolean {
    const classRes = this.getClassDefintion(className);
    let res = false;
    if (!classRes) return res;
    let columnDef: ISurveyQuestionEditorDefinition = undefined;
    if (classRes.properties) {
      var i = 0;
      while(i < classRes.properties.length) {
        const prop = classRes.properties[i];
        const propName = typeof prop == "string" ? prop : prop.name;
        let tabName = settings.propertyGrid.generalTabName;
        if (typeof prop !== "string" && !!prop.tab) {
          tabName = prop.tab;
        }
        const jsonProp = !!this.propertiesHash[propName]
          ? this.propertiesHash[propName].property
          : null;
        if (!isColumn || jsonProp?.availableInMatrixColumn) {
          const jsonPropertyCategory = this.getJsonPropertyCategory(jsonProp);
          if (!!jsonPropertyCategory && jsonPropertyCategory !== tabName) {
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
      if (!!columnDef) {
        result.unshift(columnDef);
      }
      return res;
    }
    if (classRes.tabs) {
      for (let i = 0; i < classRes.tabs.length; i++) {
        const tabName = classRes.tabs[i].name;
        res = res || tabName === otherTabName;
        if (!!this.getPropertyAsCategory(tabName)) {
          usedProperties[tabName] = true;
        }
      }
    }
    result.unshift(classRes);
    return res;
  }
  private getJsonPropertyCategory(
    jsonProperty: JsonObjectProperty
  ): string {
    if (!jsonProperty) return null;
    if (!!jsonProperty.category) return jsonProperty.category;
    return null;
  }
  private get isColumnObj() { return this.obj.getType() === "matrixdropdowncolumn"; }
  private getUnusedProperties(usedProperties: any, isFormMode: boolean = false): Array<JsonObjectProperty> {
    const res = [];
    const isColumn = this.isColumnObj;
    for (var i = 0; i < this.properties.length; i++) {
      const prop = this.properties[i];
      if (this.isJSONPropertyVisible(prop) && !usedProperties[prop.name] && (!isFormMode || prop.locationInTable === "both" || prop.showMode === "form" || isColumn && prop.availableInMatrixColumn)) {
        res.push(prop);
      }
    }
    return res;
  }
  private addNonTabProperties(
    tabs: Array<ISurveyQuestionEditorDefinition>,
    usedProperties: any, isFormMode: boolean = false
  ) {
    const unusedProperties = this.getUnusedProperties(usedProperties, isFormMode);
    if (!this.propertyGridDefinition.autoGenerateProperties) {
      this.unusedProperties = unusedProperties;
      return;
    }
    let classRes: any = { properties: [], tabs: [] };
    let tabNames = [];
    for (var i = 0; i < unusedProperties.length; i++) {
      const prop = unusedProperties[i];
      let propCategory = this.getJsonPropertyCategory(prop);
      let tabName = !!propCategory
        ? propCategory
        : tabs.length == 0 || (!!this.parentObj && this.showMode === "form")
          ? settings.propertyGrid.generalTabName
          : otherTabName;
      if (tabNames.indexOf(tabName) < 0 && tabName != settings.propertyGrid.generalTabName) {
        tabNames.push(tabName);
        classRes.tabs.push({
          name: tabName,
          index: tabName === otherTabName ? 1000 : tabNames.length * 10,
        });
      }
      if (prop.categoryIndex > -1 && tabNames.indexOf(tabName) > -1) {
        for (var j = 0; j < classRes.tabs.length; j++) {
          if (classRes.tabs[j].name == tabName) {
            classRes.tabs[j].index = prop.categoryIndex;
          }
        }
      }
      classRes.properties.push({
        name: prop.name,
        tab: tabName,
      });
    }
    if (classRes.properties.length > 0) {
      tabs.push(classRes);
    }
  }
  private sortProperties(
    properties: Array<SurveyQuestionEditorPropertyDefinition>
  ) {
    if (!Array.isArray(properties)) return;
    let index = 0;
    properties.forEach(prop => {
      prop.index = prop.definedIndex !== undefined ? prop.definedIndex : index;
      index ++;
    });
    properties.sort((prop1, prop2): number => {
      if (prop1.index === prop2.index) return 0;
      return prop1.index < prop2.index ? -1 : 1;
    });
    this.insertProperteisWithVisibleIndex(properties);
  }
  private insertProperteisWithVisibleIndex(properties: Array<SurveyQuestionEditorPropertyDefinition>): void {
    const props: Array<SurveyQuestionEditorPropertyDefinition> = [].concat(properties);
    for (let i = 0; i < props.length; i++) {
      let index = props[i].property.visibleIndex;
      if (props[i].createdFromTabName && index < 0) {
        index = 0;
      }
      if (index < 0 || props[i].definedIndex !== undefined) continue;
      let curIndex = properties.indexOf(props[i]);
      if (curIndex > -1) {
        properties.splice(curIndex, 1);
      }
      if (index < properties.length) {
        properties.splice(index, 0, props[i]);
      } else {
        properties.push(props[i]);
      }
    }
  }
}
