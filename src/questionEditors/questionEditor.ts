import * as ko from "knockout";
import { SurveyPropertyModalEditor } from "../propertyEditors/propertyModalEditor";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "../propertyEditors/propertyEditorBase";
import { SurveyPropertyEditorFactory } from "../propertyEditors/propertyEditorFactory";
import { editorLocalization } from "../editorLocalization";
import {
  SurveyQuestionEditorProperty,
  SurveyQuestionEditorRow,
  SurveyQuestionEditorProperties
} from "./questionEditorProperties";
import {
  SurveyQuestionEditorDefinition,
  ISurveyQuestionEditorDefinition
} from "./questionEditorDefinition";
import * as Survey from "survey-knockout";
import RModal from "rmodal";
import { SurveyHelper } from "../surveyHelper";
import { underline } from "chalk";
import { focusFirstControl } from "../utils/utils";

export class SurveyPropertyEditorShowWindow {
  koVisible: any;
  koEditor: any;
  public onCanShowPropertyCallback: (
    object: any,
    property: Survey.JsonObjectProperty
  ) => boolean;
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
    var editor = new SurveyQuestionEditor(
      question,
      this.onCanShowPropertyCallback,
      null,
      options
    );
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

    document.addEventListener(
      "keydown",
      function(ev) {
        modal.keydown(ev);
      },
      false
    );

    editor.onHideWindow = function() {
      modal.close();
    };
  }
}

export class SurveyQuestionProperties {
  private properties: Array<Survey.JsonObjectProperty>;
  private editorDefinition: Array<ISurveyQuestionEditorDefinition>;
  constructor(
    public obj: any,
    public onCanShowPropertyCallback: (
      object: any,
      property: Survey.JsonObjectProperty
    ) => boolean
  ) {
    this.properties = Survey.JsonObject.metaData["getPropertiesByObj"]
      ? Survey.JsonObject.metaData["getPropertiesByObj"](this.obj)
      : Survey.JsonObject.metaData.getProperties(this.obj.getType());
    this.editorDefinition = SurveyQuestionEditorDefinition.getAllDefinitionsByClass(
      this.obj.getType()
    );
  }
  public getProperty(propertyName: string): Survey.JsonObjectProperty {
    var property = this.getPropertyCore(propertyName);
    if (!property) return null;
    return SurveyHelper.isPropertyVisible(
      this.obj,
      property,
      this.onCanShowPropertyCallback
    )
      ? property
      : null;
  }
  private getPropertyCore(propertyName: string): Survey.JsonObjectProperty {
    var property = null;
    for (var i = 0; i < this.properties.length; i++) {
      if (this.properties[i].name == propertyName) return this.properties[i];
    }
    return null;
  }
  public getProperties(tab: any): Array<Survey.JsonObjectProperty> {
    return this.editorDefinition
      .reduce((a, b) => a.concat(b.properties), [
        <any>{ name: tab.name, tab: tab.name }
      ])
      .filter(
        prop =>
          prop !== undefined &&
          typeof prop !== "string" &&
          prop.tab === tab.name
      )
      .map(prop => typeof prop !== "string" && this.getPropertyCore(prop.name))
      .filter(
        prop =>
          !!prop &&
          ((prop.name == tab.name && tab.visible === true) ||
            SurveyHelper.isPropertyVisible(
              this.obj,
              prop,
              this.onCanShowPropertyCallback
            ))
      );
  }
}

export class SurveyQuestionEditor {
  protected properties: SurveyQuestionProperties;
  public onChanged: (obj: Survey.Base) => any;
  public onHideWindow: () => any;
  public onOkClick: any;
  public onApplyClick: any;
  public onResetClick: any;
  koTabs: KnockoutObservableArray<SurveyQuestionEditorTab>;
  koActiveTab = ko.observable<string>();
  koTitle = ko.observable<string>();
  koShowApplyButton: any;
  onTabClick: any;

  constructor(
    public obj: any,
    public onCanShowPropertyCallback: (
      object: any,
      property: Survey.JsonObjectProperty
    ) => boolean,
    public className: string = null,
    public options: ISurveyObjectEditorOptions = null
  ) {
    var self = this;
    if (!this.className && this.obj.getType) {
      this.className = this.obj.getType();
    }
    this.properties = new SurveyQuestionProperties(
      obj,
      onCanShowPropertyCallback
    );
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
    var tabs = this.buildTabs();
    tabs.forEach(tab => tab.beforeShow());
    this.koTabs = ko.observableArray<SurveyQuestionEditorTab>(tabs);
    if (tabs.length > 0) {
      this.koActiveTab(tabs[0].name);
    }
    this.koShowApplyButton = ko.observable(
      !this.options || this.options.showApplyButtonInEditors
    );
    this.koTitle(this.getTitle());
  }
  private getTitle(): string {
    var res;
    if (this.obj["name"]) {
      res = editorLocalization
        .getString("pe.qEditorTitle")
        ["format"](this.obj["name"]);
    } else {
      res = editorLocalization.getString("pe.surveyEditorTitle");
    }
    if (!!this.options && this.options.onGetElementEditorTitleCallback) {
      res = this.options.onGetElementEditorTitleCallback(this.obj, res);
    }
    return res;
  }
  protected doCloseWindow(isCancel: boolean) {
    var appliedSuccesfull = false;
    if (isCancel) {
      this.reset();
    } else {
      appliedSuccesfull = this.apply();
    }
    if (isCancel || appliedSuccesfull) {
      var tabs = this.koTabs();
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].doCloseWindow();
      }
      if (this.onHideWindow) this.onHideWindow();
    }
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
  public reset() {
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
      var tabRes = tabs[i].apply();
      if (!tabRes) {
        tabs[i].expand();
        if (!isFirstError) {
          this.koActiveTab(tabs[i].name);
          isFirstError = true;
        }
      }
      res = tabRes && res;
    }
    if (res && this.onChanged) {
      this.onChanged(this.obj);
    }
    return res;
  }
  public getPropertyEditorByName(
    propertyName: string
  ): SurveyQuestionEditorProperty {
    var tabs = this.koTabs();
    for (var i = 0; i < tabs.length; i++) {
      var res = tabs[i].getPropertyEditorByName(propertyName);
      if (!!res) return res;
    }
    return res;
  }
  private buildTabs(): Array<SurveyQuestionEditorTab> {
    var tabs = [];
    var properties = new SurveyQuestionEditorProperties(
      this.obj,
      SurveyQuestionEditorDefinition.getProperties(this.className),
      this.onCanShowPropertyCallback,
      this.options
    );
    if (SurveyQuestionEditorDefinition.isGeneralTabVisible(this.className)) {
      tabs.push(new SurveyQuestionEditorTab(this.obj, properties, "general"));
    }
    this.addPropertiesTabs(tabs);
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].onCanShowPropertyCallback = this.onCanShowPropertyCallback;
    }
    return tabs;
  }
  private addPropertiesTabs(tabs: Array<SurveyQuestionEditorTab>) {
    var tabNames = SurveyQuestionEditorDefinition.getTabs(this.className);
    for (var i = 0; i < tabNames.length; i++) {
      var tabItem = tabNames[i];
      var properties = this.properties.getProperties(tabItem);
      if (properties.length > 0) {
        var propertyTab = new SurveyQuestionEditorTab(
          this.obj,
          new SurveyQuestionEditorProperties(
            this.obj,
            properties,
            this.onCanShowPropertyCallback,
            this.options,
            tabItem
          ),
          tabItem.name
        );
        propertyTab.title = tabItem.title;
        tabs.push(propertyTab);
      }
    }
  }
  get useTabsInElementEditor() {
    return (
      !!this.options &&
      this.options.useTabsInElementEditor &&
      this.koTabs().length > 1
    );
  }
}

export class SurveyQuestionEditorTab {
  private titleValue: string;
  public onExpand: () => void;
  constructor(
    public obj: any,
    public properties: SurveyQuestionEditorProperties = null,
    private _name
  ) {}
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
  public apply(): boolean {
    return this.properties.apply();
  }
  public getPropertyEditorByName(
    propertyName: string
  ): SurveyQuestionEditorProperty {
    return this.properties.getPropertyEditorByName(propertyName);
  }
  public doCloseWindow() {}
  protected getValue(property: Survey.JsonObjectProperty): any {
    return property.getPropertyValue(this.obj);
  }
}
