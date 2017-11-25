import * as ko from "knockout";
import { SurveyPropertyModalEditor } from "../propertyEditors/propertyModalEditor";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "../propertyEditors/propertyEditorBase";
import { SurveyPropertyEditorFactory } from "../propertyEditors/propertyEditorFactory";
import { editorLocalization } from "../editorLocalization";
import {
  SurveyQuestionEditorGeneralProperty,
  SurveyQuestionEditorGeneralRow,
  SurveyQuestionEditorGeneralProperties
} from "./questionEditorGeneralProperties";
import {
  SurveyQuestionEditorDefinition,
  ISurveyQuestionEditorDefinition
} from "./questionEditorDefinition";
import * as Survey from "survey-knockout";
import RModal from "rmodal";
import { SurveyHelper } from "../surveyHelper";

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
    questionBase: Survey.QuestionBase,
    elWindow: HTMLElement,
    onChanged: (question: Survey.QuestionBase) => any,
    options: ISurveyObjectEditorOptions = null
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
      closeTimeout: 100,
      dialogOpenClass: "animated fadeIn",
      focus: false
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
    this.properties = Survey.JsonObject.metaData.getProperties(
      this.obj.getType()
    );
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
      .reduce((a, b) => a.concat(b.properties), [])
      .filter(prop => typeof prop !== "string" && prop.tab === tabName)
      .map(prop => typeof prop !== "string" && this.getProperty(prop.name))
      .filter(prop => !!prop);
  }
}

export class SurveyQuestionEditor {
  protected properties: SurveyQuestionProperties;
  public onChanged: (obj: Survey.Base) => any;
  public onHideWindow: () => any;
  public onOkClick: any;
  public onApplyClick: any;
  public onResetClick: any;
  koTabs: KnockoutObservableArray<SurveyQuestionEditorTabBase>;
  koActiveTab: any;
  koTitle: any;
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
    this.koActiveTab = ko.observable(tabs[0].name);
    this.koTabs = ko.observableArray<SurveyQuestionEditorTabBase>(tabs);
    this.koTitle = ko.observable();
    this.koShowApplyButton = ko.observable(
      !this.options || this.options.showApplyButtonInEditors
    );
    if (this.obj["name"]) {
      this.koTitle(
        editorLocalization
          .getString("pe.qEditorTitle")
          ["format"](this.obj["name"])
      );
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
  private buildTabs(): Array<SurveyQuestionEditorTabBase> {
    var tabs = [];
    var properties = new SurveyQuestionEditorGeneralProperties(
      this.obj,
      SurveyQuestionEditorDefinition.getProperties(this.className),
      this.onCanShowPropertyCallback,
      this.options
    );
    tabs.push(new SurveyQuestionEditorTabGeneral(this.obj, properties));
    this.addPropertiesTabs(tabs);
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].onCanShowPropertyCallback = this.onCanShowPropertyCallback;
    }
    return tabs;
  }
  private addPropertiesTabs(tabs: Array<SurveyQuestionEditorTabBase>) {
    var tabNames = SurveyQuestionEditorDefinition.getTabs(this.className);
    for (var i = 0; i < tabNames.length; i++) {
      var tabItem = tabNames[i];
      var property = this.properties.getProperty(tabItem.name);
      if (!!property) {
        var editorTab = new SurveyQuestionEditorTabProperty(
          this.obj,
          property,
          this.options
        );
        if (tabItem.title) editorTab.title = tabItem.title;
        tabs.push(editorTab);
      } else {
        var properties = this.properties.getProperties(tabItem.name);
        if (properties.length > 0) {
          var peopertiesTab = new SurveyQuestionEditorTab(
            tabItem.name,
            this.obj,
            new SurveyQuestionEditorGeneralProperties(
              this.obj,
              properties,
              this.onCanShowPropertyCallback,
              this.options
            )
          );
          peopertiesTab.title = tabItem.title;
          tabs.push(peopertiesTab);
        }
      }
    }
  }
}

export class SurveyQuestionEditorTabBase {
  koAfterRender: any;
  private titleValue: string;
  constructor(public obj: Survey.Base) {
    this.koAfterRender = function(el, con) {};
  }
  public get name(): string {
    return "name";
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
    return "questioneditortab-" + this.name;
  }
  public get templateObject(): any {
    return this;
  }
  public hasError(): boolean {
    return false;
  }
  public reset() {}
  public apply() {}
  public doCloseWindow() {}
  protected getValue(property: Survey.JsonObjectProperty): any {
    return property.getPropertyValue(this.obj);
  }
}

export class SurveyQuestionEditorTabGeneral extends SurveyQuestionEditorTabBase {
  constructor(
    public obj: Survey.Base,
    public properties: SurveyQuestionEditorGeneralProperties = null
  ) {
    super(obj);
    this.properties = properties
      ? properties
      : new SurveyQuestionEditorGeneralProperties(
          obj,
          SurveyQuestionEditorDefinition.getProperties(obj.getType()),
          null
        );
  }
  public get name(): string {
    return "general";
  }
  public get htmlTemplate(): string {
    return "questioneditortab-general";
  }
  public hasError(): boolean {
    return this.properties.hasError();
  }
  public reset() {
    this.properties.reset();
  }
  public apply() {
    this.properties.apply();
  }
}

export class SurveyQuestionEditorTab extends SurveyQuestionEditorTabBase {
  constructor(
    private tabName: string,
    public obj: Survey.Base,
    public properties: SurveyQuestionEditorGeneralProperties = null
  ) {
    super(obj);
    this.properties = properties
      ? properties
      : new SurveyQuestionEditorGeneralProperties(
          obj,
          SurveyQuestionEditorDefinition.getProperties(obj.getType()),
          null
        );
  }
  public get name(): string {
    return this.tabName;
  }
  public get htmlTemplate(): string {
    return "questioneditortab-general";
  }
}

export class SurveyQuestionEditorTabProperty extends SurveyQuestionEditorTabBase {
  private propertyEditorValue: SurveyPropertyModalEditor;
  constructor(
    public obj: Survey.Base,
    public property: Survey.JsonObjectProperty,
    public options: ISurveyObjectEditorOptions = null
  ) {
    super(obj);
    this.propertyEditorValue = <SurveyPropertyModalEditor>SurveyPropertyEditorFactory.createEditor(
      this.property,
      null
    );
    var self = this;
    this.propertyEditorValue.options = options;
    this.propertyEditorValue.onGetLocale = function() {
      return self.doOnGetLocale();
    };
    this.propertyEditorValue.object = obj;
    this.propertyEditorValue.beforeShowModal();
    this.koAfterRender = function(el, con) {
      self.propertyEditor.koAfterRender(el, con);
    };
  }
  private doOnGetLocale(): string {
    if (this.obj && this.obj["getLocale"]) return this.obj["getLocale"]();
    return "";
  }
  public get name(): string {
    return this.property.name;
  }
  public hasError(): boolean {
    return this.propertyEditor.hasError();
  }
  public get htmlTemplate(): string {
    return "propertyeditorcontent-" + this.propertyEditor.editorType;
  }
  public get templateObject(): any {
    return this.propertyEditor;
  }
  public get propertyEditor(): SurveyPropertyModalEditor {
    return this.propertyEditorValue;
  }
  public reset() {
    this.propertyEditorValue.editingValue = this.getValue(this.property);
  }
  public apply() {
    this.propertyEditor.apply();
    this.obj[this.property.name] = this.propertyEditorValue.editingValue;
  }
  public doCloseWindow() {
    this.propertyEditor.beforeCloseModal();
  }
}
