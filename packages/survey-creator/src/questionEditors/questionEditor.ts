import * as ko from "knockout";
import { ISurveyObjectEditorOptions } from "../propertyEditors/propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import {
  SurveyQuestionEditorDefinition,
  ISurveyQuestionEditorDefinition,
} from "./questionEditorDefinition";
import * as Survey from "survey-knockout";
import RModal from "rmodal";
import { SurveyHelper } from "../surveyHelper";
import {
  focusFirstControl,
  getNodesFromKoComponentInfo,
  getFirstNonTextElement,
} from "../utils/utils";
import { EditableObject } from "../propertyEditors/editableObject";
import { SurveyObjectProperty } from "../objectProperty";
import { ISurveyCreatorOptions } from "../settings";
import { SurveyCreator } from "../editor";

export class PropertyGridObjectEditorModel {
  private selectedObjectValue: any = null;
  public koElementEditor = ko.observable<SurveyElementEditorContentModel>(null);
  public koHasObject = ko.observable(false);
  public onAfterRenderCallback: (
    object: any,
    htmlElement: HTMLElement,
    property: SurveyObjectProperty
  ) => any;
  public onSortPropertyCallback: (
    object: any,
    property1: Survey.JsonObjectProperty,
    property2: Survey.JsonObjectProperty
  ) => number;
  public onPropertyChanged: (
    obj: any,
    prop: Survey.JsonObjectProperty,
    oldValue: any
  ) => void;
  public onCorrectValueBeforeSet: (
    obj: any,
    prop: Survey.JsonObjectProperty,
    newValue: any
  ) => any;

  // Old - table(old property grid) creator.options.showElementEditorAsPropertyGrid: false;
  // New - accordition or oldest tabs
  public koIsOldTableAppearance = ko.observable(false);

  constructor(
    public propertyEditorOptions: ISurveyObjectEditorOptions = null
  ) {}

  public objectChanged() {}
  public get selectedObject(): any {
    return this.selectedObjectValue;
  }
  public set selectedObject(value: any) {
    if (this.selectedObjectValue == value) return;
    this.selectedObjectValue = value;
    this.koHasObject(false);
    if (!!value) {
      var elementEditor = this.createSurveyElementEditor(value);
      elementEditor.onAfterRenderCallback = this.onAfterRenderCallback;
      elementEditor.onPropertyChanged = (
        prop: Survey.JsonObjectProperty,
        oldValue: any
      ) => {
        if (this.onPropertyChanged)
          this.onPropertyChanged(this.selectedObjectValue, prop, oldValue);
      };
      elementEditor.onCorrectValueBeforeSet = (
        prop: Survey.JsonObjectProperty,
        newValue: any
      ): any => {
        if (!this.onCorrectValueBeforeSet) return newValue;
        return this.onCorrectValueBeforeSet(
          this.selectedObjectValue,
          prop,
          newValue
        );
      };
      this.koElementEditor(elementEditor);
    } else {
      this.koElementEditor(null);
    }
    this.koHasObject(!!value);
  }
  public getPropertyEditorByName(propertyName: string): SurveyObjectProperty {
    if (!this.koElementEditor()) return null;
    return this.koElementEditor().getPropertyEditorByName(propertyName);
  }
  public focusEditor() {
    if (!!this.koElementEditor()) {
      this.koElementEditor().focusEditor();
    }
  }
  public hasErrors(): boolean {
    if (!this.koElementEditor()) return false;
    return this.koElementEditor().hasError();
  }
  protected createSurveyElementEditor(
    value: any
  ): SurveyElementEditorContentModel {
    let elementEditor;
    if (this.koIsOldTableAppearance()) {
      elementEditor = new SurveyElementEditorOldTableContentModel(
        value,
        "",
        this.propertyEditorOptions,
        this.onSortPropertyCallback
      );
    } else {
      elementEditor = new SurveyElementEditorContentModel(
        value,
        "",
        this.propertyEditorOptions,
        true
      );
    }
    return elementEditor;
  }
}
export class SurveyElementEditorContentModel {
  public onCorrectValueBeforeSet: (
    prop: Survey.JsonObjectProperty,
    newValue: any
  ) => any;
  public onPropertyChanged: (
    prop: Survey.JsonObjectProperty,
    oldValue: any
  ) => void;
  public onAfterRenderCallback: (
    object: any,
    htmlElement: HTMLElement,
    property: SurveyObjectProperty
  ) => any;
  koTabs: any;
  koActiveTab = ko.observable<string>();
  protected properties: SurveyQuestionProperties;
  private originalObjValue: any;
  constructor(
    obj: any,
    public className: string = null,
    public options: ISurveyObjectEditorOptions = null,
    protected useAsPropertyGrid: boolean = false,
    private _readOnly: boolean = false
  ) {
    this.setOriginalObjValue(obj);
    if (!this.className && this.originalObj.getType) {
      this.className = this.originalObj.getType();
    }
    this.properties = new SurveyQuestionProperties(
      this.editableObj,
      this.options,
      this.className
    );
    var tabs = this.buildTabs();
    this.koTabs = ko.observableArray<SurveyElementEditorTabModel>(tabs);
    this.assignPropertiesToEditors();
    var self = this;
    this.koActiveTab.subscribe(function (val) {
      if (!val) return;
      var tab = self.getTabByName(val);
      if (!!tab) {
        tab.expand();
      }
    });
    if (tabs.length > 0) {
      this.koActiveTab(tabs[0].name);
    }
  }
  public get readOnly(): boolean {
    return !!this.options && this.options.readOnly || this._readOnly;
  }
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  public setParentList(parentList: Array<Survey.Base>) {
    var edProperties = this.getAllEditorProperties();
    for (var i = 0; i < edProperties.length; i++) {
      edProperties[i].editor.parentList = parentList;
    }
  }
  protected setOriginalObjValue(obj: any) {
    this.originalObjValue = obj;
  }
  protected get originalObj() {
    return this.originalObjValue;
  }
  public get obj(): any {
    return this.originalObjValue;
  }
  public get editableObj(): any {
    return this.originalObjValue;
  }
  public hasError(): boolean {
    var tabs = this.koTabs();
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].hasError()) {
        this.koActiveTab(tabs[i].name);
        return true;
      }
    }
    return false;
  }
  public getPropertyEditorByName(propertyName: string): SurveyObjectProperty {
    var props = this.getAllEditorProperties();
    for (var i = 0; i < props.length; i++) {
      if (props[i].property.name == propertyName) return props[i];
    }
    return null;
  }
  public getTabByName(tabName: string): SurveyElementEditorTabModel {
    var tabs = this.koTabs();
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].name == tabName) return tabs[i];
    }
    return null;
  }
  public focusEditor() {
    if (!!this.koTabs() && this.koTabs().length > 0) {
      this.koTabs()[0].focusEditor();
    }
  }
  private getAllEditorProperties(): Array<SurveyObjectProperty> {
    var res = [];
    if (!this.koTabs) return res;
    var tabs = this.koTabs();
    for (var i = 0; i < tabs.length; i++) {
      var tab = <SurveyElementEditorTabModel>tabs[i];
      var props = tab.editorProperties;
      for (var j = 0; j < props.length; j++) {
        res.push(props[j]);
      }
    }
    return res;
  }
  private buildTabs(): Array<SurveyElementEditorTabModel> {
    var tabs = [];
    this.addPropertiesTabs(tabs);
    return tabs;
  }
  private assignPropertiesToEditors() {
    var props = this.getAllEditorProperties();
    for (var i = 0; i < props.length; i++) {
      this.assignPropertiesToEditor(props[i]);
    }
  }
  protected assignPropertiesToEditor(propEditor: SurveyObjectProperty) {
    propEditor.onCorrectValueBeforeSet = (
      propEditor: SurveyObjectProperty,
      newValue: any
    ): any => {
      if (!this.onCorrectValueBeforeSet) return newValue;
      return this.onCorrectValueBeforeSet(propEditor.property, newValue);
    };
    propEditor.onChanged = (
      propEditor: SurveyObjectProperty,
      oldValue: any
    ): void => {
      if (!!this.onPropertyChanged)
        this.onPropertyChanged(propEditor.property, oldValue);
    };
    propEditor.getObjectPropertyByName = (
      propertyName: string
    ): SurveyObjectProperty => {
      return this.getPropertyEditorByName(propertyName);
    };
  }
  protected addPropertiesTabs(tabs: Array<SurveyElementEditorTabModel>) {
    var tabItems = this.properties.getTabs();
    for (var i = 0; i < tabItems.length; i++) {
      var tabItem = tabItems[i];
      var properties = this.properties.getProperties(tabItem);
      if (properties.length > 0) {
        tabs.push(this.createNewTab(tabItem, properties));
      }
    }
  }
  protected createNewTab(
    tabItem: SurveyQuestionEditorTabDefinition,
    properties: Array<Survey.JsonObjectProperty>
  ): SurveyElementEditorTabModel {
    var propertyTab = new SurveyElementEditorTabModel(
      this.editableObj,
      properties,
      tabItem.name,
      this.options,
      this.readOnly
    );
    propertyTab.title = tabItem.title;
    var firstProperty =
      tabItem.properties.length > 0 ? tabItem.properties[0] : null;
    if (!!firstProperty && firstProperty.createdFromTabName) {
      var firstEditor = propertyTab.getPropertyEditorByName(tabItem.name);
      if (!!firstEditor) {
        firstEditor.editor.showDisplayName = false;
      }
    }
    propertyTab.onAfterRenderCallback = (htmlElement, property) => {
      if (!this.onAfterRenderCallback) return;
      this.onAfterRenderCallback(this.originalObj, htmlElement, property);
    };
    return propertyTab;
  }
  //this.options = creator
  get useTabsInElementEditor() {
    return (
      !this.useAsPropertyGrid &&
      !!this.options &&
      this.options.useTabsInElementEditor &&
      this.koTabs().length > 1
    );
  }
}
export class SurveyElementEditorOldTableContentModel extends SurveyElementEditorContentModel {
  public koProperties = ko.observableArray<SurveyObjectProperty>();
  public koTab: any;
  constructor(
    obj: any,
    public className: string = null,
    public options: ISurveyObjectEditorOptions = null,
    private onSortPropertyCallback: (
      object: any,
      property1: Survey.JsonObjectProperty,
      property2: Survey.JsonObjectProperty
    ) => number = null
  ) {
    super(obj, className, options, true);
    this.koTab = ko.observable(this.koTabs()[0]);
    this.koProperties(this.getObjectProperties());
    this.koTab().expand();
  }
  protected addPropertiesTabs(tabs: Array<SurveyElementEditorTabModel>) {
    var properties = this.getProperties();
    var tabItem = new SurveyQuestionEditorTabDefinition();
    tabs.push(this.createNewTab(tabItem, properties));
  }
  protected assignPropertiesToEditor(propEditor: SurveyObjectProperty) {
    super.assignPropertiesToEditor(propEditor);
    propEditor.isInPropertyGrid = true;
  }
  private getObjectProperties(): Array<SurveyObjectProperty> {
    var res = [];
    var props = this.koTab().editorProperties;
    for (var i = 0; i < props.length; i++) {
      res.push(props[i]);
    }
    var self = this;
    var sortEvent = function (
      a: SurveyObjectProperty,
      b: SurveyObjectProperty
    ): number {
      var res = 0;
      if (self.onSortPropertyCallback) {
        res = self.onSortPropertyCallback(
          self.originalObj,
          a.property,
          b.property
        );
      }
      if (res) return res;
      if (a.displayName == b.displayName) return 0;
      if (a.displayName > b.displayName) return 1;
      return -1;
    };
    res = res.sort(sortEvent);
    return res;
  }
  private getProperties(): Array<Survey.JsonObjectProperty> {
    var res = [];
    var tabItems = this.properties.getTabs();
    for (var i = 0; i < tabItems.length; i++) {
      var tabProperties = this.properties.getProperties(tabItems[i]);
      for (var j = 0; j < tabProperties.length; j++) {
        res.push(tabProperties[j]);
      }
    }
    return res;
  }
}

export class SurveyElementEditorTabModel {
  private editorPropertiesValue: Array<SurveyObjectProperty> = [];
  private titleValue: string;
  private htmlElements = null;
  public onExpand: () => void;
  public onCollapse: () => void;
  public onAfterRenderCallback: (
    htmlElement: HTMLElement,
    property: SurveyObjectProperty
  ) => any;
  koAfterRenderProperty: any;
  koAfterRender: any;
  constructor(
    public obj: any,
    private properties: Array<Survey.JsonObjectProperty>,
    private _name,
    public options: ISurveyObjectEditorOptions,
    private _readOnly: boolean = false
  ) {
    this.buildEditorProperties();
    var self = this;
    this.koAfterRenderProperty = function (componentInfo: any, con) {
      self.afterRenderProperty(componentInfo, con);
    };
    this.koAfterRender = function (componentInfo: any, con) {
      self.afterRender(componentInfo, con);
    };
  }
  public expand(doSetup: boolean = true) {
    if (!!this.onExpand) this.onExpand();
    this.doOnExpanded(doSetup);
  }
  public collapse() {
    if (!!this.onCollapse) this.onCollapse();
  }
  public doOnExpanded(doSetup: boolean = true) {
    if(doSetup) {
      this.beforeShow();
    }
    if(this.options && !(this.options as SurveyCreator).selectFromStringEditor) {
      setTimeout(() => {
        ko.tasks.runEarly();
        this.focusEditor();
      }, 1);
    }
  }
  private afterRender(elements: HTMLElement[], context) {
    this.htmlElements = elements;
    this.focusEditor();
    if(this.options)
      (this.options as SurveyCreator).selectFromStringEditor = false;
  }
  public focusEditor() {
    if (!!this.htmlElements) {
      focusFirstControl(this.htmlElements);
    }
  }
  public get name(): string {
    return this._name;
  }
  public get title() {
    if (this.titleValue) return this.titleValue;
    var str = editorLocalization.getString("pe.tabs." + this.name);
    return str ? str : this.name;
  }
  public set title(value: string) {
    this.titleValue = value;
  }
  public get editorProperties(): Array<SurveyObjectProperty> {
    return this.editorPropertiesValue;
  }
  public get htmlTemplate(): string {
    return "svd-object-editor-tab";
  }
  public get templateObject(): any {
    return this;
  }
  public hasError(): boolean {
    var isError = false;
    for (var i = 0; i < this.editorProperties.length; i++) {
      isError = this.editorProperties[i].hasError() || isError;
    }
    return isError;
  }
  public beforeShow() {
    this.performForAllProperties((p) => p.beforeShow());
  }
  public reset() {
    this.performForAllProperties((p) => p.reset());
  }
  public applyToObj(obj: Survey.Base) {
    this.performForAllProperties((p) => p.applyToObj(obj));
  }
  public getPropertyEditorByName(propertyName: string): SurveyObjectProperty {
    var props = this.editorProperties;
    for (var i = 0; i < props.length; i++) {
      if (props[i].property.name == propertyName) return props[i];
    }
  }
  protected getValue(property: Survey.JsonObjectProperty): any {
    return property.getPropertyValue(this.obj);
  }
  private afterRenderProperty(componentInfo: any, prop) {
    const elements = getNodesFromKoComponentInfo(componentInfo);
    if (!this.onAfterRenderCallback) return;
    var el = getFirstNonTextElement(elements);
    var tEl = elements[0];
    if (tEl.nodeName === "#text") tEl.data = "";
    tEl = elements[elements.length - 1];
    if (tEl.nodeName === "#text") tEl.data = "";
    this.onAfterRenderCallback(el.parentElement, prop);
  }
  private buildEditorProperties() {
    for (var i = 0; i < this.properties.length; i++) {
      var prop = this.properties[i];
      this.createEditor(prop);
    }
  }
  private createEditor(property: any) {
    var objectProperty = new SurveyObjectProperty(property, this.options);
    objectProperty.object = this.obj;
    objectProperty.editor.readOnly(objectProperty.editor.readOnly() || this._readOnly);
    this.editorPropertiesValue.push(objectProperty);
  }
  private performForAllProperties(func: (p: SurveyObjectProperty) => void) {
    for (var i = 0; i < this.editorPropertiesValue.length; i++) {
      func(this.editorPropertiesValue[i]);
    }
  }
}

export class SurveyPropertyEditorShowWindow {
  koVisible: any;
  koEditor: any;
  constructor() {
    this.koVisible = ko.observable(false);
    this.koEditor = ko.observable(null);
  }
  public show(
    question: Survey.Base,
    elWindow: HTMLElement,
    onChanged: (question: Survey.Question) => any,
    options: ISurveyObjectEditorOptions = null,
    onClosed: () => any = null,
    onEditorAfterRenderCallback: (
      obj: any,
      htmlElement: HTMLElement,
      prop: SurveyObjectProperty
    ) => void = undefined
  ) {
    var editor = new SurveyQuestionEditor(question, null, options);
    editor.onAfterRenderCallback = onEditorAfterRenderCallback;
    editor.onChanged = onChanged;

    this.koEditor(editor);
    this.koVisible(true);

    var modal = new RModal(elWindow, {
      bodyClass: "",
      closeTimeout: 100,
      dialogOpenClass: "animated fadeIn",
      focus: false,
      afterClose: function () {
        if (onClosed) onClosed();
      },
    });
    modal.open();

    if ((<any>options).closeModalOutside !== "off") {
      var fadeElement = document.getElementById("surveyquestioneditorwindow");
      var outOfModalClickHandler = function (evt) {
        if ((<any>evt.target).className === "modal") {
          if ((<any>options).closeModalOutside === "apply") {
            editor.onOkClick();
          } else {
            editor.onResetClick();
          }
        }
      };
      fadeElement.addEventListener("mousedown", outOfModalClickHandler);
    }

    document.addEventListener(
      "keydown",
      function (ev) {
        modal.keydown(ev);
      },
      false
    );

    editor.onHideWindow = function () {
      if ((<any>options).closeModalOutside !== "off") {
        fadeElement.removeEventListener("mousedown", outOfModalClickHandler);
      }
      modal.close();
    };
  }
}

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

export class SurveyQuestionEditor extends SurveyElementEditorContentModel {
  public onChanged: (obj: Survey.Base) => any;
  public onHideWindow: () => any;
  public onOkClick: any;
  public onApplyClick: any;
  public onResetClick: any;
  koTabs: ko.ObservableArray<SurveyElementEditorTabModel>;
  koActiveTab = ko.observable<string>();
  koTitle = ko.observable<string>();
  koShowApplyButton: any;
  onTabClick: any;
  private editableObject: EditableObject;

  constructor(
    obj: any,
    public className: string = null,
    public options: ISurveyObjectEditorOptions = null
  ) {
    super(obj, className, options, false);
    var self = this;
    self.onApplyClick = function () {
      self.apply();
    };
    self.onOkClick = function () {
      self.doCloseWindow(false);
    };
    self.onResetClick = function () {
      self.doCloseWindow(true);
    };
    this.onTabClick = function (tab) {
      if(!!tab.beforeShow) {
        tab.beforeShow();
      }
      self.koActiveTab(tab.name);
    };
    this.koShowApplyButton = ko.observable(
      !this.options || this.options.showApplyButtonInEditors
    );
    this.koTitle(this.getTitle());
  }
  protected setOriginalObjValue(obj: any) {
    super.setOriginalObjValue(obj);
    this.editableObject = new EditableObject(obj);
  }
  public get obj(): any {
    return this.editableObject.obj;
  }
  public get editableObj(): any {
    return this.editableObject.editableObj;
  }
  private getTitle(): string {
    var res;
    if (this.editableObj["name"]) {
      res = editorLocalization
        .getString("pe.qEditorTitle")
        ["format"](this.editableObj["name"]);
    } else {
      res = editorLocalization.getString("pe.surveyEditorTitle");
    }
    if (!!this.options && this.options.onGetElementEditorTitleCallback) {
      res = this.options.onGetElementEditorTitleCallback(this.editableObj, res);
    }
    return res;
  }
  protected doCloseWindow(isCancel: boolean) {
    var appliedSuccesfull = false;
    if (!isCancel) {
      appliedSuccesfull = this.apply();
    }
    if (isCancel || appliedSuccesfull) {
      if (this.onHideWindow) this.onHideWindow();
    }
  }
  public reset() {
    this.editableObject.reset();
    var tabs = this.koTabs();
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].reset();
    }
  }
  public apply(): boolean {
    var res = true;
    var isFirstError = false;
    var tabs = this.koTabs();
    for (var i = 0; i < tabs.length; i++) {
      var tabRes = tabs[i].hasError();
      if (tabRes) {
        tabs[i].expand(false);
        if (!isFirstError) {
          this.koActiveTab(tabs[i].name);
          isFirstError = true;
        }
      }
      res = !tabRes && res;
    }

    if (res) {
      if (!!this.options) {
        this.options.startUndoRedoTransaction();
      }
      this.editableObject.applyAll();
      if (this.onChanged) {
        this.onChanged(this.obj);
      }
      if (!!this.options) {
        this.options.stopUndoRedoTransaction();
      }
    }
    return res;
  }
}

Survey.Serializer.findProperty("rating", "rateValues").visibleIf = null;
Survey.Serializer.findProperty("rating", "rateMin").visibleIf = null;
Survey.Serializer.findProperty("rating", "rateMax").visibleIf = null;
Survey.Serializer.findProperty("rating", "rateStep").visibleIf = null;