import {
  SurveyQuestionEditorDefinition,
  ISurveyQuestionEditorDefinition,
} from "./definition";
import { JsonObjectProperty, Serializer, JsonMetadataClass } from "survey-core";
import { SurveyHelper } from "../survey-helper";
import { ISurveyCreatorOptions, settings } from "../creator-settings";

export class SurveyQuestionEditorPropertyDefinition {
  public property: JsonObjectProperty;
  public title: string;
  public category: string;
  public createdFromTabName: boolean;
  public onSameLine: boolean;
  public get name(): string {
    return !!this.property ? this.property.name : "";
  }
}

export class SurveyQuestionEditorTabDefinition {
  public name: string;
  public title: string;
  public visible: boolean = true;
  public index: number = 0;
  public properties: Array<SurveyQuestionEditorPropertyDefinition> = [];
}

const otherTabName = "others";

export class SurveyQuestionProperties {
  private showModeValue: string;
  private properties: Array<JsonObjectProperty>;
  private propertiesHash: any;
  private tabs: Array<SurveyQuestionEditorTabDefinition> = [];
  constructor(
    public obj: any,
    public options: ISurveyCreatorOptions = null,
    className: string = null,
    showMode: string = null,
    private parentObj: any = null,
    private parentProperty: JsonObjectProperty = null
  ) {
    this.showModeValue = showMode;
    this.properties = Serializer.getPropertiesByObj(this.obj);
    this.fillPropertiesHash();
    this.buildTabs(className);
  }
  public getProperty(propertyName: string): JsonObjectProperty {
    var res = this.propertiesHash[propertyName];
    return !!res && res.visible ? res.property : null;
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
  private fillPropertiesHash() {
    this.propertiesHash = {};
    for (var i = 0; i < this.properties.length; i++) {
      var prop = this.properties[i];
      this.propertiesHash[prop.name] = {
        property: prop,
        visible: SurveyHelper.isPropertyVisible(
          this.obj,
          prop,
          this.options,
          this.showMode,
          this.parentObj,
          this.parentProperty
        ),
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
    if (!className) {
      className = this.obj.getType();
    }
    var definitions = this.getAllDefinitionsByClass(className);
    var addedProperties = [];
    for (var i = definitions.length - 1; i >= 0; i--) {
      var defItem = definitions[i];
      for (var j = !!defItem.tabs ? defItem.tabs.length - 1 : -1; j >= 0; j--) {
        if (addedProperties.indexOf(defItem.tabs[j].name) > -1) continue;
        if (this.addPropertyIntoTab(defItem.tabs[j], true)) {
          addedProperties.push(defItem.tabs[j].name);
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
  }
  private addPropertyIntoTab(
    defProperty: any,
    isTab: boolean = false
  ): boolean {
    if (isTab) {
      let tab = this.getTabOrCreate(defProperty.name);
      if (defProperty.index > 0) {
        tab.index = defProperty.index;
      }
      if (defProperty.visible === false) {
        tab.visible = false;
      }
      if (!!defProperty.title) {
        tab.title = defProperty.title;
      }
    }
    var isString = typeof defProperty == "string";
    var name = !isString ? defProperty.name : defProperty;
    var propRes = this.propertiesHash[name];
    if (!propRes) return false;
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
    propertyDefinition.onSameLine = this.isPropertyOnSameLine(propRes.property.nextToProperty);
    propertyDefinition.createdFromTabName = isTab;
    let tab = this.getTabOrCreate(tabName);
    tab.properties.unshift(propertyDefinition);
    return true;
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
    if(this.isPropertyOnSameLine(propName)) propName = propName.substring(1);
    for (var i = 0; i < this.tabs.length; i++) {
      if (!!this.getPropertyByNameInTab(this.tabs[i], propName))
        return this.tabs[i];
    }
    return null;
  }
  private getNextToNameProperty(property: JsonObjectProperty): string {
    if(!property.nextToProperty) return "";
    if(this.isPropertyOnSameLine(property.nextToProperty)) return property.nextToProperty.substring(1);
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
  private getTabOrCreate(tabName: string): SurveyQuestionEditorTabDefinition {
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].name == tabName) return this.tabs[i];
    }
    var res = new SurveyQuestionEditorTabDefinition();
    res.name = tabName;
    if (tabName == settings.propertyGrid.generalTabName) {
      res.index = -1;
    }
    this.tabs.unshift(res);
    return res;
  }
  private setUsedProperties(res: Array<ISurveyQuestionEditorDefinition>, usedProperties: any): void {
    for(let i = 0; i < res.length; i ++) {
      const props = res[i].properties;
      if(!Array.isArray(props)) continue;
      for(let j = 0; j < props.length; j ++) {
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
    if (
      className.indexOf("@") > -1 &&
      SurveyQuestionEditorDefinition.definition[className]
    ) {
      var defaultName =
        className.substring(0, className.indexOf("@") + 1) + "default";
      if (
        defaultName != className &&
        !!SurveyQuestionEditorDefinition.definition[defaultName]
      ) {
        result.push(SurveyQuestionEditorDefinition.definition[defaultName]);
      }
      result.push(SurveyQuestionEditorDefinition.definition[className]);
      this.setUsedProperties(result, usedProperties);
      this.addNonTabProperties(result, usedProperties, true);
      return result;
    }
    let hasNonTabProperties = this.getAllDefinitionsByClassCore(className, usedProperties, result);
    const dynamicClass = this.obj.isQuestion && !!this.obj.getDynamicType ? this.obj.getDynamicType() : "";
    if(dynamicClass) {
      hasNonTabProperties = this.getAllDefinitionsByClassCore(dynamicClass, usedProperties, result);
    }

    if (!hasNonTabProperties) {
      this.addNonTabProperties(result, usedProperties);
    }
    return result;
  }
  private getAllDefinitionsByClassCore(className: string, usedProperties: any, result: Array<ISurveyQuestionEditorDefinition>): boolean {
    let res = false;
    let curClassName = className;
    while (curClassName) {
      let metaClass = <JsonMetadataClass>(
        Serializer.findClass(curClassName)
      );
      if (!metaClass) break;
      res = this.getAllDefinitionsByClassSingleCore(metaClass.name, usedProperties, result);
      curClassName = metaClass.parentName;
    }
    return res;
  }
  private getAllDefinitionsByClassSingleCore(className: string, usedProperties: any, result: Array<ISurveyQuestionEditorDefinition>): boolean {
    const classRes = SurveyQuestionEditorDefinition.definition[className];
    let res = false;
    if(!classRes) return res;
    if (classRes.properties) {
      var i = 0;
      while (i < classRes.properties.length) {
        var prop = classRes.properties[i];
        var propName = typeof prop == "string" ? prop : prop.name;
        var tabName = settings.propertyGrid.generalTabName;
        if (typeof prop !== "string" && !!prop.tab) {
          tabName = prop.tab;
        }
        var jsonProp = !!this.propertiesHash[propName]
          ? this.propertiesHash[propName].property
          : null;
        var jsonPropertyCategory = this.getJsonPropertyCategory(jsonProp);
        if (!!jsonPropertyCategory && jsonPropertyCategory !== tabName) {
          classRes.properties.splice(i, 1);
        } else {
          usedProperties[propName] = true;
          i++;
        }
      }
    }
    if (classRes.tabs) {
      for (var i = 0; i < classRes.tabs.length; i++) {
        res = res || classRes.tabs[i].name === otherTabName;
        usedProperties[classRes.tabs[i].name] = true;
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
  private addNonTabProperties(
    tabs: Array<ISurveyQuestionEditorDefinition>,
    usedProperties: any, isFormMode: boolean = false
  ) {
    let classRes: any = { properties: [], tabs: [] };
    let tabNames = [];
    for (var i = 0; i < this.properties.length; i++) {
      let prop = this.properties[i];
      if (!this.isJSONPropertyVisible(prop) || !!usedProperties[prop.name] ||
        (isFormMode && prop.showMode !== "form"))
        continue;
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
        name: this.properties[i].name,
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
    var props: Array<SurveyQuestionEditorPropertyDefinition> = [].concat(
      properties
    );
    for (var i = 0; i < props.length; i++) {
      var index = props[i].property.visibleIndex;
      if (props[i].createdFromTabName && index < 0) {
        index = 0;
      }
      if (index < 0) continue;
      var curIndex = properties.indexOf(props[i]);
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
