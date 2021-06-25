import {
  SurveyQuestionEditorDefinition,
  ISurveyQuestionEditorDefinition,
} from "./definition";
import * as Survey from "survey-core";
import { SurveyHelper } from "../surveyHelper";
import { ISurveyCreatorOptions } from "../settings";

export class SurveyQuestionEditorPropertyDefinition {
  public property: Survey.JsonObjectProperty;
  public title: string;
  public category: string;
  public createdFromTabName: boolean;
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

export class SurveyQuestionProperties {
  private showModeValue: string;
  private properties: Array<Survey.JsonObjectProperty>;
  private propertiesHash: any;
  private tabs: Array<SurveyQuestionEditorTabDefinition> = [];
  constructor(
    public obj: any,
    public options: ISurveyCreatorOptions = null,
    className: string = null,
    showMode: string = null,
    private parentObj: any = null,
    private parentProperty: Survey.JsonObjectProperty = null
  ) {
    this.showModeValue = showMode;
    this.properties = Survey.Serializer.getPropertiesByObj(this.obj);
    this.fillPropertiesHash();
    this.buildTabs(className);
  }
  public getProperty(propertyName: string): Survey.JsonObjectProperty {
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
  private isJSONPropertyVisible(property: Survey.JsonObjectProperty): boolean {
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
  ): Array<Survey.JsonObjectProperty> {
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
    var tabName = isTab ? defProperty.name : "general";
    if (!isTab && !isString && !!defProperty.tab) {
      tabName = defProperty.tab;
    }
    var propertyDefinition = new SurveyQuestionEditorPropertyDefinition();
    propertyDefinition.property = propRes.property;
    propertyDefinition.category =
      !isString && !!defProperty.category ? defProperty.category : "";
    propertyDefinition.title =
      !isString && !!defProperty.title ? defProperty.title : "";
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
      var newTab = this.getTabByPropertyName(props[i].property.nextToProperty);
      if (!!newTab) {
        var prop = this.getPropertyByNameInTab(
          newTab,
          props[i].property.nextToProperty
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
    for (var i = 0; i < this.tabs.length; i++) {
      if (!!this.getPropertyByNameInTab(this.tabs[i], propName))
        return this.tabs[i];
    }
    return null;
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
    //TODO make "general" constant
    if (tabName == "general") {
      res.index = -1;
    }
    this.tabs.unshift(res);
    return res;
  }
  private getAllDefinitionsByClass(
    className: string
  ): Array<ISurveyQuestionEditorDefinition> {
    var result = [];
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
      return result;
    }
    var curClassName = className;
    var usedProperties = {};
    var hasNonTabProperties = false;
    while (curClassName) {
      let metaClass = <Survey.JsonMetadataClass>(
        Survey.Serializer.findClass(curClassName)
      );
      if (!metaClass) break;
      let classRes = SurveyQuestionEditorDefinition.definition[metaClass.name];
      if (classRes) {
        if (classRes.properties) {
          var i = 0;
          while (i < classRes.properties.length) {
            var prop = classRes.properties[i];
            var propName = typeof prop == "string" ? prop : prop.name;
            var tabName = "general";
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
            hasNonTabProperties =
              hasNonTabProperties || classRes.tabs[i].name == "others";
            usedProperties[classRes.tabs[i].name] = true;
          }
        }
        result.unshift(classRes);
      }
      curClassName = metaClass.parentName;
    }

    if (!hasNonTabProperties) {
      this.addNonTabProperties(result, usedProperties);
    }
    return result;
  }
  private getJsonPropertyCategory(
    jsonProperty: Survey.JsonObjectProperty
  ): string {
    if (!jsonProperty) return null;
    if (!!jsonProperty.category) return jsonProperty.category;
    return null;
  }
  private addNonTabProperties(
    tabs: Array<ISurveyQuestionEditorDefinition>,
    usedProperties: any
  ) {
    let classRes: any = { properties: [], tabs: [] };
    let tabNames = [];
    for (var i = 0; i < this.properties.length; i++) {
      let prop = this.properties[i];
      if (!this.isJSONPropertyVisible(prop) || !!usedProperties[prop.name])
        continue;
      let propCategory = this.getJsonPropertyCategory(prop);
      let tabName = !!propCategory
        ? propCategory
        : tabs.length == 0
        ? "general"
        : "others";
      if (tabNames.indexOf(tabName) < 0 && tabName != "general") {
        tabNames.push(tabName);
        classRes.tabs.push({
          name: tabName,
          index: tabName == "others" ? 1000 : tabNames.length * 10,
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
      if (props[i].createdFromTabName) {
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
