import * as ko from "knockout";
import { ISurveyObjectEditorOptions } from "../propertyEditors/propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyQuestionEditorProperties } from "./questionEditorProperties";
import {
  SurveyQuestionEditorDefinition,
  ISurveyQuestionEditorDefinition
} from "./questionEditorDefinition";
import * as Survey from "survey-knockout";
import RModal from "rmodal";
import { SurveyHelper } from "../surveyHelper";
import { focusFirstControl } from "../utils/utils";
import { EditableObject } from "../propertyEditors/editableObject";
import { SurveyObjectProperty } from "../objectProperty";

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
    onClosed: () => any = null
  ) {
    var editor = new SurveyQuestionEditor(question, null, options);
    editor.onChanged = onChanged;

    this.koEditor(editor);
    this.koVisible(true);

    var modal = new RModal(elWindow, {
      bodyClass: "",
      closeTimeout: 100,
      dialogOpenClass: "animated fadeIn",
      focus: false,
      afterClose: function() {
        if (onClosed) onClosed();
      }
    });
    modal.open();

    var fadeElement = document.getElementById("surveyquestioneditorwindow");
    var outOfModalClickHandler = function(evt) {
      if ((<any>evt.target).className === "modal") {
        editor.onResetClick();
      }
    };
    fadeElement.addEventListener("click", outOfModalClickHandler);

    document.addEventListener(
      "keydown",
      function(ev) {
        modal.keydown(ev);
      },
      false
    );

    editor.onHideWindow = function() {
      fadeElement.removeEventListener("click", outOfModalClickHandler);
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
    return this.property.name;
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
  private properties: Array<Survey.JsonObjectProperty>;
  private propertiesHash: any;
  private tabs: Array<SurveyQuestionEditorTabDefinition> = [];
  constructor(
    public obj: any,
    public options: ISurveyObjectEditorOptions = null,
    className: string = null
  ) {
    this.properties = Survey.Serializer.getPropertiesByObj(this.obj);
    this.fillPropertiesHash();
    this.buildTabs(className);
  }
  public getProperty(propertyName: string): Survey.JsonObjectProperty {
    var res = this.propertiesHash[propertyName];
    return !!res && res.visible ? res.property : null;
  }
  private fillPropertiesHash() {
    this.propertiesHash = {};
    for (var i = 0; i < this.properties.length; i++) {
      var prop = this.properties[i];
      this.propertiesHash[prop.name] = {
        property: prop,
        visible: SurveyHelper.isPropertyVisible(this.obj, prop, this.options)
      };
    }
  }
  private isJSONPropertyVisible(property: Survey.JsonObjectProperty): boolean {
    var res = this.propertiesHash[property.name];
    return !!res && res.visible;
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
    var definition = this.getAllDefinitionsByClass(className);
    for (var i = 0; i < definition.length; i++) {
      var defItem = definition[i];
      for (var j = 0; !!defItem.tabs && j < defItem.tabs.length; j++) {
        this.addPropertyIntoTab(defItem.tabs[j], true);
      }
      for (
        var j = 0;
        !!defItem.properties && j < defItem.properties.length;
        j++
      ) {
        this.addPropertyIntoTab(defItem.properties[j]);
      }
    }
    for (var i = this.tabs.length - 1; i >= 0; i--) {
      if (!this.tabs[i].visible) {
        this.tabs.splice(i, 1);
      }
    }
    this.tabs.sort(function(a, b) {
      return a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
    });
  }
  private addPropertyIntoTab(defProperty: any, isTab: boolean = false) {
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
    if (!propRes) return;
    if (!isString && defProperty.visible === false) return;
    if (
      !propRes.visible &&
      (isString || (!isString && defProperty.visible !== true))
    )
      return;
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
    tab.properties.push(propertyDefinition);
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
    this.tabs.push(res);
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
      result.push(SurveyQuestionEditorDefinition.definition[className]);
      return result;
    }
    var curClassName = className;
    var usedProperties = [];
    var hasOthersTab = false;
    while (curClassName) {
      let metaClass = <Survey.JsonMetadataClass>(
        Survey.Serializer.findClass(curClassName)
      );
      if (!metaClass) break;
      let classRes = SurveyQuestionEditorDefinition.definition[metaClass.name];
      if (classRes) {
        if (classRes.properties) {
          for (var i = 0; i < classRes.properties.length; i++) {
            var prop = classRes.properties[i];
            usedProperties.push(typeof prop == "string" ? prop : prop.name);
          }
        }
        if (classRes.tabs) {
          for (var i = 0; i < classRes.tabs.length; i++) {
            hasOthersTab = hasOthersTab || classRes.tabs[i].name == "others";
            usedProperties.push(classRes.tabs[i].name);
          }
        }
        result.unshift(classRes);
      }
      curClassName = metaClass.parentName;
    }

    if (!hasOthersTab) {
      let classRes: any = { properties: [] };
      if (result.length > 0) {
        classRes.tabs = [{ name: "others", index: 1000 }];
      }
      let tabName = result.length == 0 ? "general" : "others";
      for (var i = 0; i < this.properties.length; i++) {
        if (
          this.isJSONPropertyVisible(this.properties[i]) &&
          usedProperties.indexOf(this.properties[i].name) < 0
        ) {
          classRes.properties.push({
            name: this.properties[i].name,
            tab: tabName
          });
        }
      }
      if (classRes.properties.length > 0) {
        result.push(classRes);
      }
    }
    return result;
  }
}

export class SurveyElementEditorContent {
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
  private origionalObjValue: any;
  constructor(
    obj: any,
    public className: string = null,
    public options: ISurveyObjectEditorOptions = null,
    protected useAsPropertyGrid: boolean = false
  ) {
    this.setOrigionalObjValue(obj);
    if (!this.className && this.origionalObj.getType) {
      this.className = this.origionalObj.getType();
    }
    this.properties = new SurveyQuestionProperties(
      this.editableObj,
      this.options,
      this.className
    );
    var tabs = this.buildTabs();
    this.koTabs = ko.observableArray<SurveyQuestionEditorTab>(tabs);
    this.assignPropertiesToEditors();
    tabs.forEach(tab => tab.beforeShow());
    if (tabs.length > 0) {
      this.koActiveTab(tabs[0].name);
    }
  }
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  protected setOrigionalObjValue(obj: any) {
    this.origionalObjValue = obj;
  }
  protected get origionalObj() {
    return this.origionalObjValue;
  }
  public get obj(): any {
    return this.origionalObjValue;
  }
  public get editableObj(): any {
    return this.origionalObjValue;
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
  private getAllEditorProperties(): Array<SurveyObjectProperty> {
    var res = [];
    if (!this.koTabs) return res;
    var tabs = this.koTabs();
    for (var i = 0; i < tabs.length; i++) {
      var tab = <SurveyQuestionEditorTab>tabs[i];
      var props = tab.properties.getAllProperties();
      for (var j = 0; j < props.length; j++) {
        res.push(props[j]);
      }
    }
    return res;
  }
  private buildTabs(): Array<SurveyQuestionEditorTab> {
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
  protected addPropertiesTabs(tabs: Array<SurveyQuestionEditorTab>) {
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
  ): SurveyQuestionEditorTab {
    var self = this;
    var propertyTab = new SurveyQuestionEditorTab(
      this.editableObj,
      new SurveyQuestionEditorProperties(
        this.editableObj,
        properties,
        this.options,
        tabItem
      ),
      tabItem.name
    );
    propertyTab.title = tabItem.title;
    var firstProperty =
      tabItem.properties.length > 0 ? tabItem.properties[0] : null;
    if (!!firstProperty && firstProperty.createdFromTabName) {
      var firstEditor = propertyTab.getPropertyEditorByName(tabItem.name);
      if (!!firstEditor) firstEditor.editor.displayName = "";
    }
    propertyTab.onAfterRenderCallback = (htmlElement, property) => {
      if (!this.onAfterRenderCallback) return;
      this.onAfterRenderCallback(this.origionalObj, htmlElement, property);
    };
    return propertyTab;
  }
  get useTabsInElementEditor() {
    return (
      !this.useAsPropertyGrid &&
      !!this.options &&
      this.options.useTabsInElementEditor &&
      this.koTabs().length > 1
    );
  }
}

export class SurveyElementEditorContentNoCategries extends SurveyElementEditorContent {
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
  }
  protected addPropertiesTabs(tabs: Array<SurveyQuestionEditorTab>) {
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
    var props = this.koTab().properties.editorProperties;
    for (var i = 0; i < props.length; i++) {
      res.push(props[i]);
    }
    var self = this;
    var sortEvent = function(
      a: SurveyObjectProperty,
      b: SurveyObjectProperty
    ): number {
      var res = 0;
      if (self.onSortPropertyCallback) {
        res = self.onSortPropertyCallback(
          self.origionalObj,
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

export class SurveyQuestionEditor extends SurveyElementEditorContent {
  public onChanged: (obj: Survey.Base) => any;
  public onHideWindow: () => any;
  public onOkClick: any;
  public onApplyClick: any;
  public onResetClick: any;
  koTabs: ko.ObservableArray<SurveyQuestionEditorTab>;
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
    self.onApplyClick = function() {
      self.apply();
    };
    self.onOkClick = function() {
      self.doCloseWindow(false);
    };
    self.onResetClick = function() {
      self.doCloseWindow(true);
    };
    this.onTabClick = function(tab) {
      self.koActiveTab(tab.name);
    };
    this.koShowApplyButton = ko.observable(
      !this.options || this.options.showApplyButtonInEditors
    );
    this.koTitle(this.getTitle());
  }
  protected setOrigionalObjValue(obj: any) {
    super.setOrigionalObjValue(obj);
    this.editableObject = new EditableObject(obj);
  }
  public get obj(): any {
    return this.editableObject.obj;
  }
  public get editableObj(): any {
    return this.editableObject.editableObj;
  }
  public get readOnly(): boolean {
    return !!this.options && this.options.readOnly;
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
        tabs[i].expand();
        if (!isFirstError) {
          this.koActiveTab(tabs[i].name);
          isFirstError = true;
        }
      }
      res = !tabRes && res;
    }

    if (res) {
      this.editableObject.applyAll();
      if (this.onChanged) {
        this.onChanged(this.obj);
      }
    }
    return res;
  }
}

export class SurveyElementPropertyGrid {
  private selectedObjectValue: any = null;
  public koElementEditor = ko.observable(null);
  public koHasObject = ko.observable(false);
  public hasCategories: boolean = true;
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
  constructor(
    public propertyEditorOptions: ISurveyObjectEditorOptions = null
  ) {}
  public get contentHtmlTemplate(): string {
    return this.hasCategories
      ? "questioneditor-content"
      : "questioneditor-propertygridcontent";
  }
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
  protected createSurveyElementEditor(value: any): SurveyElementEditorContent {
    if (this.hasCategories)
      return new SurveyElementEditorContent(
        value,
        "",
        this.propertyEditorOptions,
        true
      );
    var res = new SurveyElementEditorContentNoCategries(
      value,
      "",
      this.propertyEditorOptions,
      this.onSortPropertyCallback
    );
    return res;
  }
}

export class SurveyQuestionEditorTab {
  private titleValue: string;
  public onExpand: () => void;
  public onAfterRenderCallback: (
    htmlElement: HTMLElement,
    property: SurveyObjectProperty
  ) => any;
  koAfterRenderProperty: any;
  constructor(
    public obj: any,
    public properties: SurveyQuestionEditorProperties = null,
    private _name
  ) {
    var self = this;
    this.koAfterRenderProperty = function(el, con) {
      self.afterRenderProperty(el, con);
    };
  }
  public expand() {
    if (!!this.onExpand) this.onExpand();
  }
  public koAfterRender(elements: HTMLElement[], context) {
    focusFirstControl(elements);
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
  public get htmlTemplate(): string {
    return "questioneditortab";
  }
  public get templateObject(): any {
    return this;
  }
  public hasError(): boolean {
    return this.properties.hasError();
  }
  public beforeShow() {
    this.properties.beforeShow();
  }
  public reset() {
    this.properties.reset();
  }
  public applyToObj(obj: Survey.Base) {
    return this.properties.applyToObj(obj);
  }
  public getPropertyEditorByName(propertyName: string): SurveyObjectProperty {
    return this.properties.getPropertyEditorByName(propertyName);
  }
  protected getValue(property: Survey.JsonObjectProperty): any {
    return property.getPropertyValue(this.obj);
  }
  protected afterRenderProperty(elements, prop) {
    if (!this.onAfterRenderCallback) return;
    var el = Survey.SurveyElement.GetFirstNonTextElement(elements);
    var tEl = elements[0];
    if (tEl.nodeName === "#text") tEl.data = "";
    tEl = elements[elements.length - 1];
    if (tEl.nodeName === "#text") tEl.data = "";
    this.onAfterRenderCallback(el, prop);
  }
}
