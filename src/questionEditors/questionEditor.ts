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
    questionBase: Survey.Base,
    elWindow: HTMLElement,
    onChanged: (question: Survey.QuestionBase) => any,
    options: ISurveyObjectEditorOptions = null,
    onClosed: () => any = null
  ) {
    var editor = new SurveyQuestionEditor(
      questionBase,
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
    public obj: Survey.Base,
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
    var property = null;
    for (var i = 0; i < this.properties.length; i++) {
      if (this.properties[i].name == propertyName) {
        property = this.properties[i];
        break;
      }
    }
    return SurveyHelper.isPropertyVisible(
      this.obj,
      property,
      this.onCanShowPropertyCallback
    )
      ? property
      : null;
  }
  public getProperties(tabName: string): Array<Survey.JsonObjectProperty> {
    return this.editorDefinition
      .reduce((a, b) => a.concat(b.properties), [
        <any>{ name: tabName, tab: tabName }
      ])
      .filter(
        prop =>
          prop !== undefined && typeof prop !== "string" && prop.tab === tabName
      )
      .map(prop => typeof prop !== "string" && this.getProperty(prop.name))
      .filter(
        prop =>
          !!prop &&
          SurveyHelper.isPropertyVisible(
            this.obj,
            prop,
            this.onCanShowPropertyCallback
          )
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
    public obj: Survey.Base,
    public onCanShowPropertyCallback: (
      object: any,
      property: Survey.JsonObjectProperty
    ) => boolean,
    public className: string = null,
    public options: ISurveyObjectEditorOptions = null
  ) {
    var self = this;
    if (!this.className) this.className = this.obj.getType();
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
    if (this.obj["name"]) {
      this.koTitle(
        editorLocalization
          .getString("pe.qEditorTitle")
          ["format"](this.obj["name"])
      );
    } else {
      this.koTitle(editorLocalization.getString("pe.surveyEditorTitle"));
    }
  }
  protected doCloseWindow(isCancel: boolean) {
    if (isCancel) {
      this.reset();
    } else {
      this.apply();
    }
    if (isCancel || !this.hasError()) {
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
  public apply() {
    if (this.hasError()) return;
    var tabs = this.koTabs();
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].apply();
    }
    if (this.onChanged) {
      this.onChanged(this.obj);
    }
  }
  private buildTabs(): Array<SurveyQuestionEditorTab> {
    var tabs = [];
    var properties = new SurveyQuestionEditorProperties(
      this.obj,
      SurveyQuestionEditorDefinition.getProperties(this.className),
      this.onCanShowPropertyCallback,
      this.options,
      false
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
      var properties = this.properties.getProperties(tabItem.name);
      if (properties.length > 0) {
        var propertyTab = new SurveyQuestionEditorTab(
          this.obj,
          new SurveyQuestionEditorProperties(
            this.obj,
            properties,
            this.onCanShowPropertyCallback,
            this.options,
            true
          ),
          tabItem.name
        );
        propertyTab.title = tabItem.title;
        tabs.push(propertyTab);
      }
    }
  }
}

export class SurveyQuestionEditorTab {
  koAfterRender: any;
  private titleValue: string;
  constructor(
    public obj: Survey.Base,
    public properties: SurveyQuestionEditorProperties = null,
    private _name
  ) {
    this.koAfterRender = function(el, con) {};
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
  public apply() {
    this.properties.apply();
  }
  public doCloseWindow() {}
  protected getValue(property: Survey.JsonObjectProperty): any {
    return property.getPropertyValue(this.obj);
  }
}
