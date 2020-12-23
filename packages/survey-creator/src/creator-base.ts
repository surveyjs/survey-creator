import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { editorLocalization } from "./editorLocalization";
import { QuestionConverter } from "./questionconverter";
import { SurveyTextWorker } from "./textWorker";
import { SurveyHelper, ObjType } from "./surveyHelper";
import { SurveyJSON5 } from "./json5";
import { SurveyLogic } from "./tabs/logic";

export interface ICreatorOptions {
  [index: string]: any;
}

/**
 * Base class for Survey Creator.
 */
export class CreatorBase<T extends {[index: string]: any}> {
  private showDesignerTabValue = ko.observable<boolean>(false);
  private showJSONEditorTabValue = ko.observable<boolean>(false);
  private showTestSurveyTabValue = ko.observable<boolean>(false);
  private showEmbeddedSurveyTabValue = ko.observable<boolean>(false);
  private showTranslationTabValue = ko.observable<boolean>(false);
  private showLogicTabValue = ko.observable<boolean>(false);
  private isRTLValue: boolean = false;
  private haveCommercialLicenseValue = ko.observable(false);

  protected surveyValue = ko.observable<T>();

  protected newQuestions: Array<any> = [];
  protected newPanels: Array<any> = [];

  koAutoSave = ko.observable(false);
  koShowOptions = ko.observable();
  koGenerateValidJSON = ko.observable(true);
  koShowState = ko.observable(false);
  koViewType = ko.observable("designer");

  /**
   * The event is called on deleting an element (question/panel/page) from the survey. Typically, when a user click the delete from the element menu.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.element an instance of the deleting element
   * <br/> options.elementType the type of the element: 'question', 'panel' or 'page'.
   * <br/> options.allowing set it to false to cancel the element deleting
   */
  public onElementDeleting: Survey.Event<
    (sender: CreatorBase<T>, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase<T>, options: any) => any, any>();

  /**
   * The event is called on setting a readOnly property of the property editor. By default the property.readOnly property is used.
   * You may changed it and make the property editor read only or enabled for a particular object.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
   * <br/> options.readOnly a boolean value. It has value equals to options.readOnly property by default. You may change it.
   */
  public onGetPropertyReadOnly: Survey.Event<
    (sender: CreatorBase<T>, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase<T>, options: any) => any, any>();

  /**
   * The event is fired when the survey creator creates a survey object (Survey.Survey).
   * <br/> sender the survey creator object that fires the event
   * <br/> options.survey the survey object showing in the creator.
   * <br/> options.reason indicates what component of the creator requests the survey. There are several reason types: "designer" - survey for designer survey, "test" - survey for "Test Survey" tab and "conditionEditor", "defaultValueEditor", "restfulEditor" - surveys for different property editors.
   */
  public onSurveyInstanceCreated: Survey.Event<
    (sender: CreatorBase<T>, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase<T>, options: any) => any, any>();

  /**
   * The event allows to display the custom name for objects: questions, pages and panels. By default the object name is using. You may show object title by setting showObjectTitles property to true.
   * Use this event, if you want custom display name for objects.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.reason the name of the UI that requests the object display name
   * <br/> options.displayName change this property to show your custom display name for the object
   * @see showObjectTitles
   */
  public onGetObjectDisplayName: Survey.Event<
    (sender: CreatorBase<T>, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase<T>, options: any) => any, any>();

  /**
   * Use this event to add/remove/modify the element (question/panel) menu items.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object which property is edited in the Property Editor.
   * <br/> options.items the list of menu items. It has two required fields: text and onClick: function(obj: Survey.Base) {} and optional name field.
   * @see onElementAllowOperations
   */
  public onDefineElementMenuItems: Survey.Event<
    (sender: CreatorBase<T>, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase<T>, options: any) => any, any>();

  /**
   * This callback is used internally for providing survey JSON text.
   */
  public getSurveyJSONTextCallback: () => { text: string; isModified: boolean };
  /**
   * This callback is used internally for setting survey JSON text.
   */
  public setSurveyJSONTextCallback: (text: string) => void;

  /**
   * You need to set this property to true if you want to use tabs instead of accordion in the popup element's editor.
   */
  public useTabsInElementEditor = false;
  /**
   * You need to set this property to value bigger than 0 to disable adding more logic items in condition than this value.
   */
  public maxLogicItemsInCondition: number = -1;

  /**
   * You need to set this property to true if you want to show titles instead of names in pages editor and object selector.
   * @see onShowObjectDisplayName
   */
  public showObjectTitles = false;

  /**
   * You need to set this property to true if you want to show titles instead of names in expression editor.
   */
  public showTitlesInExpressions = false;
  /**
   * You need to set this property to false to allow your users build expressions visually only, without editing them in text editor.
   */
  public allowEditExpressionsInTextEditor = true;

  /**
   * Set this property to false to hide the pages selector in the Test Survey Tab
   */
  public showPagesInTestSurveyTab = true;

  /**
   * Set this property to false to hide the device simulator in the Test Survey Tab
   */
  public showSimulatorInTestSurveyTab = true;

  /**
   * Set this property to false to disable pages adding, editing and deleting
   */
  public allowModifyPages = true;

  /**
   * The default value is _"auto"_. It shows the language selector if there are more than two languages are using in the survey.
   * It shows only used languages in the survey.
   * Set this property to _false_ to hide the default language selector in the Test Survey Tab.
   * Set it to _true_ to show this selector even if there is only one language in the survey
   * Set it to _all_ to show the selector with all available languages (30+)
   */
  public showDefaultLanguageInTestSurveyTab: boolean | string = "auto";

  /**
   * Set this property to false to hide the show invisible element checkbox in the Test Survey Tab
   */
  public showInvisibleElementsInTestSurveyTab = true;

  /**
   * Set this property to true if you want to show "page selector" in the toolabar instead of "pages editor"
   */
  public showPageSelectorInToolbar = false;

  public tabs = ko.observableArray();

  /**
   * Returns the localized string by its id
   * @param str the string id.
   */
  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  /**
   * Set it to true to show "JSON Editor" tab and to false to hide the tab
   */
  public get showDesignerTab() {
    return this.showDesignerTabValue();
  }
  public set showDesignerTab(value: boolean) {
    this.showDesignerTabValue(value);
  }
  /**
   * Set it to true to show "JSON Editor" tab and to false to hide the tab
   */
  public get showJSONEditorTab() {
    return this.showJSONEditorTabValue();
  }
  public set showJSONEditorTab(value: boolean) {
    this.showJSONEditorTabValue(value);
  }
  /**
   * Set it to true to show "Test Survey" tab and to false to hide the tab
   */
  public get showTestSurveyTab() {
    return this.showTestSurveyTabValue();
  }
  public set showTestSurveyTab(value: boolean) {
    this.showTestSurveyTabValue(value);
  }
  /**
   * Set it to true to show "Embed Survey" tab and to false to hide the tab
   */
  public get showEmbededSurveyTab() {
    return this.showEmbeddedSurveyTabValue();
  }
  public set showEmbededSurveyTab(value: boolean) {
    this.showEmbeddedSurveyTabValue(value);
  }

  /**
   * Set it to true to show "Logic" tab and to false to hide the tab
   */
  public get showLogicTab() {
    return this.showLogicTabValue();
  }
  public set showLogicTab(value: boolean) {
    this.showLogicTabValue(value);
  }
  /**
   * Set it to true to show "Translation" tab and to false to hide the tab
   */
  public get showTranslationTab() {
    return this.showTranslationTabValue();
  }
  public set showTranslationTab(value: boolean) {
    this.showTranslationTabValue(value);
  }

  /**
   * A boolean property, false by default. Set it to true to call protected doSave method automatically on survey changing.
   */
  public get isAutoSave() {
    return this.koAutoSave();
  }
  public set isAutoSave(newVal) {
    this.koAutoSave(newVal);
  }
  /**
   * Set it to false to suppress an alert message about error on saving the survey into database.
   */
  public showErrorOnFailedSave: boolean = true;

  koReadOnly = ko.observable(false);

  protected onSetReadOnly(newVal: boolean) {
  }

  /**
   * A boolean property, false by default. Set it to true to deny editing.
   */
  public get readOnly() {
    return this.koReadOnly();
  }
  public set readOnly(newVal: boolean) {
    const text = this.text;
    this.koReadOnly(newVal);
    this.onSetReadOnly(newVal);
    this.text = text;
  }

  /**
   * You have right to set this property to true if you have bought the commercial licence only.
   * It will remove the text about non-commerical usage on the top of the widget.
   * Setting this property true without having a commercial licence is illegal.
   * @see haveCommercialLicense
   */
  public get haveCommercialLicense() {
    return this.haveCommercialLicenseValue();
  }
  public set haveCommercialLicense(val) {
    this.haveCommercialLicenseValue(val);
  }

  /**
   * Set it to true to activate RTL support
   */
  public get isRTL() {
    return this.isRTLValue;
  }
  public set isRTL(value: boolean) {
    this.isRTLValue = value;
  }

  public get showState() {
    return this.koShowState();
  }

  public set showState(newVal) {
    this.koShowState(newVal);
  }

  /**
   * Change the active view/tab. It will return false if it can't change the current tab.
   * @param viewName name of new active view (tab). The following values are available: "designer", "editor", "test", "embed" and "translation".
   */
  public makeNewViewActive(viewName: string): boolean {
    if (!this.canSwitchViewType(viewName)) return false;
    this.koViewType(viewName);
    return true;
  }

  protected canSwitchViewType(newType: string) {
    return true;
  }

  constructor(protected options: ICreatorOptions) {
    this.setOptions(options);
    this.initTabs();
  }

  protected initTabs() {
    ko.computed(() => {
      this.tabs([]);
      if (this.showDesignerTab) {
        this.tabs.push({
          name: "designer",
          title: this.getLocString("ed.designer"),
          template: "se-tab-designer",
          data: this,
          action: () => this.makeNewViewActive("designer"),
        });
      }
      if (this.showTestSurveyTab) {
        this.tabs.push({
          name: "test",
          title: this.getLocString("ed.testSurvey"),
          template: "se-tab-test",
          data: this,
          action: () => this.makeNewViewActive("test"),
        });
      }
      if (this.showLogicTab) {
        this.tabs.push({
          name: "logic",
          title: this.getLocString("ed.logic"),
          template: "se-tab-logic",
          data: this,
          action: () => this.makeNewViewActive("logic"),
        });
      }
      if (this.showJSONEditorTab) {
        this.tabs.push({
          name: "editor",
          title: this.getLocString("ed.jsonEditor"),
          template: "se-tab-json-editor",
          data: this,
          action: () => this.makeNewViewActive("editor"),
        });
      }
      if (this.showEmbededSurveyTab) {
        this.tabs.push({
          name: "embed",
          title: this.getLocString("ed.embedSurvey"),
          template: "se-tab-embed",
          data: this,
          action: () => this.makeNewViewActive("embed"),
        });
      }
      if (this.showTranslationTab) {
        this.tabs.push({
          name: "translation",
          title: this.getLocString("ed.translation"),
          template: "se-tab-translation",
          data: this,
          action: () => this.makeNewViewActive("translation"),
        });
      }
      if (this.tabs().length > 0) {
        this.koViewType(this.tabs()[0].name);
      }
    });
  }

  public getOptions() {
    return this.options || {};
  }

  protected setOptions(options: any) {
    if (!options) options = {};
    if (!options.hasOwnProperty("generateValidJSON"))
      options.generateValidJSON = true;
    this.options = options;
    this.showDesignerTabValue(
      typeof options.showDesignerTab !== "undefined"
        ? options.showDesignerTab
        : true
    );
    this.showLogicTabValue(
      typeof options.showLogicTab !== "undefined" ? options.showLogicTab : false
    );
    this.showJSONEditorTabValue(
      typeof options.showJSONEditorTab !== "undefined"
        ? options.showJSONEditorTab
        : true
    );
    this.showTestSurveyTabValue(
      typeof options.showTestSurveyTab !== "undefined"
        ? options.showTestSurveyTab
        : true
    );
    this.showEmbeddedSurveyTabValue(
      typeof options.showEmbededSurveyTab !== "undefined"
        ? options.showEmbededSurveyTab
        : false
    );
    this.showTranslationTabValue(
      typeof options.showTranslationTab !== "undefined"
        ? options.showTranslationTab
        : false
    );
    this.showLogicTabValue(
      typeof options.showLogicTab !== "undefined" ? options.showLogicTab : false
    );

    this.haveCommercialLicense =
      typeof options.haveCommercialLicense !== "undefined"
        ? options.haveCommercialLicense
        : false;

    this.showObjectTitles =
      typeof options.showObjectTitles !== "undefined"
        ? options.showObjectTitles
        : false;
    this.showTitlesInExpressions =
      typeof options.showTitlesInExpressions !== "undefined"
        ? options.showTitlesInExpressions
        : false;
    this.allowEditExpressionsInTextEditor =
      typeof options.allowEditExpressionsInTextEditor !== "undefined"
        ? options.allowEditExpressionsInTextEditor
        : true;
    this.useTabsInElementEditor =
      typeof options.useTabsInElementEditor !== "undefined"
        ? options.useTabsInElementEditor
        : false;
    this.maxLogicItemsInCondition =
      typeof options.maxLogicItemsInCondition !== "undefined"
        ? options.maxLogicItemsInCondition
        : -1;
    this.showState =
      typeof options.showState !== "undefined" ? options.showState : false;
    this.koShowOptions(
      typeof options.showOptions !== "undefined" ? options.showOptions : false
    );

    this.koGenerateValidJSON(this.options.generateValidJSON);
    this.isAutoSave =
      typeof options.isAutoSave !== "undefined" ? options.isAutoSave : false;
    this.showErrorOnFailedSave =
      typeof options.showErrorOnFailedSave !== "undefined"
        ? options.showErrorOnFailedSave
        : true;
    this.isRTLValue =
      typeof options.isRTL !== "undefined" ? options.isRTL : false;

    if (typeof options.readOnly !== "undefined") {
      this.koReadOnly(options.readOnly);
    }
    if (typeof options.showPagesInTestSurveyTab !== "undefined") {
      this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
    }
    if (typeof options.showSimulatorInTestSurveyTab !== "undefined") {
      this.showSimulatorInTestSurveyTab = options.showSimulatorInTestSurveyTab;
    }
    if (typeof options.showDefaultLanguageInTestSurveyTab !== "undefined") {
      this.showDefaultLanguageInTestSurveyTab =
        options.showDefaultLanguageInTestSurveyTab;
    }
    if (typeof options.showInvisibleElementsInTestSurveyTab !== "undefined") {
      this.showInvisibleElementsInTestSurveyTab =
        options.showInvisibleElementsInTestSurveyTab;
    }
    if (typeof options.allowModifyPages !== "undefined") {
      this.allowModifyPages = options.allowModifyPages;
    }
  }

  isCanModifyProperty(
    obj: Survey.Base,
    propertyName: string
  ): boolean {
    var property = Survey.Serializer.findProperty(obj.getType(), propertyName);
    return !property || !this.onIsPropertyReadOnlyCallback(obj, property, property.readOnly);
  }

  onIsPropertyReadOnlyCallback(
    obj: Survey.Base,
    property: Survey.JsonObjectProperty,
    readOnly: boolean
  ): boolean {
    var proposedValue = this.readOnly || readOnly;
    if (this.onGetPropertyReadOnly.isEmpty) return proposedValue;
    var options = {
      obj: obj,
      property: property,
      readOnly: proposedValue,
      propertyName: property.name,
    };
    this.onGetPropertyReadOnly.fire(this, options);
    return options.readOnly;
  }

  /**
   * The editing survey object (Survey.Survey)
   */
  public get survey() {
    return this.surveyValue();
  }

  private getSurveyTextFromDesigner() {
    var json = (<any>this.survey).toJSON();
    if (this.options && this.options.generateValidJSON) {
      return JSON.stringify(json, null, 1);
    }
    return new SurveyJSON5().stringify(json, null, 1);
  }

  protected setTextValue(value: string) {
    if (!!this.setSurveyJSONTextCallback) {
      this.setSurveyJSONTextCallback(value);
    }
  }

  /**
   * Set JSON as text  into survey. Clear undo/redo states optionally.
   * @param value JSON as text
   * @param clearState default false. Set this parameter to true to clear undo/redo states.
   */
  public changeText(value: string, clearState = false) {
    this.setTextValue(value);
  }

  /**
   * The Survey JSON as a text. Use it to get Survey JSON or change it.
   * @see JSON
   */
  public get text(): string {
    if (!!this.getSurveyJSONTextCallback) {
      return this.getSurveyJSONTextCallback().text;
    }
    return this.getSurveyTextFromDesigner();
  }
  public set text(value: string) {
    this.changeText(value, true);
  }

  public getSurveyJSON(): any {
    if (this.koViewType() != "editor") {
      return new Survey.JsonObject().toJsonObject(this.survey);
    }
    var surveyJsonText = this.text;
    var textWorker = new SurveyTextWorker(surveyJsonText);
    if (textWorker.isJsonCorrect) {
      return new Survey.JsonObject().toJsonObject(textWorker.survey);
    }
    return null;
  }

  public getObjectDisplayName(
    obj: Survey.Base,
    reason: string,
    displayName: string = undefined
  ): string {
    if (!displayName) {
      displayName = SurveyHelper.getObjectName(obj, this.showObjectTitles);
    }
    var options = { obj: obj, displayName: displayName, reason: reason };
    this.onGetObjectDisplayName.fire(this, options);
    return options.displayName;
  }

  public createSurvey(
    json: any = {},
    reason: string = "designer",
    surveyType = Survey.Survey
  ) {
    var survey = new surveyType(json);
    if (reason != "designer" && reason != "test") {
      survey.locale = editorLocalization.currentLocale;
    }
    this.onSurveyInstanceCreated.fire(this, { survey: survey, reason: reason });
    return survey;
  }

  public setModified(options: any = null) {
  }

  protected convertCurrentObject(obj: Survey.Question, className: string) {
    var newQuestion = QuestionConverter.convertObject(obj, className);
    this.setModified({
      type: "QUESTION_CONVERTED",
      className: className,
      oldValue: obj,
      newValue: newQuestion,
    });
  }

  protected initSurveyWithJSON(json: any, clearState: boolean) {}

  /**
   * The Survey JSON. Use it to get Survey JSON or change it.
   * @see text
   */
  public get JSON(): any {
    return (<any>this.survey).toJSON();
  }
  public set JSON(val: any) {
    if (this.koViewType() == "editor") {
      this.setTextValue(JSON.stringify(val));
    } else {
      this.initSurveyWithJSON(val, true);
    }
  }

  protected doClickQuestionCore(
    element: Survey.IElement,
    modifiedType: string = "ADDED_FROM_TOOLBOX"
  ) {
    var parent = this.survey.currentPage;
    var index = -1;
    var elElement = this.survey.selectedElement;
    if (elElement && elElement.parent) {
      parent = elElement.parent;
      index = parent.elements.indexOf(this.survey.selectedElement);
      if (index > -1) index++;
    }
    parent.addElement(element, index);
    this.setModified({ type: modifiedType, question: element });
  }

  protected setNewNames(element: Survey.IElement) {
    this.newQuestions = [];
    this.newPanels = [];
    this.setNewNamesCore(element);
  }

  protected getAllQuestions(): Array<any> {
    var result = [];
    for (var i = 0; i < this.survey.pages.length; i++) {
      this.addElements(this.survey.pages[i].elements, false, result);
    }
    this.addElements(this.newPanels, false, result);
    this.addElements(this.newQuestions, false, result);
    return result;
  }

  protected getAllPanels(): Array<any> {
    var result = [];
    for (var i = 0; i < this.survey.pages.length; i++) {
      this.addElements(this.survey.pages[i].elements, true, result);
    }
    this.addElements(this.newPanels, true, result);
    this.addElements(this.newQuestions, true, result);
    return result;
  }

  protected addElements(
    elements: Array<any>,
    isPanel: boolean,
    result: Array<any>
  ) {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].isPanel === isPanel) {
        result.push(elements[i]);
      }
      this.addElements(SurveyHelper.getElements(elements[i]), isPanel, result);
    }
  }

  protected getNewName(type: string): string {
    if (type == "page") return SurveyHelper.getNewPageName(this.survey.pages);
    return type == "panel" || type == "flowpanel"
      ? this.getNewPanelName()
      : this.getNewQuestionName();
  }
  protected getNewQuestionName(): string {
    return SurveyHelper.getNewQuestionName(this.getAllQuestions());
  }
  protected getNewPanelName(): string {
    return SurveyHelper.getNewPanelName(this.getAllPanels());
  }

  protected setNewNamesCore(element: Survey.IElement) {
    var elType = element["getType"]();
    element.name = this.getNewName(elType);
    if (element.isPanel || elType == "page") {
      if (element.isPanel) {
        this.newPanels.push(element);
      }
      var panel = <Survey.PanelModelBase>(<any>element);
      for (var i = 0; i < panel.elements.length; i++) {
        this.setNewNamesCore(panel.elements[i]);
      }
    } else {
      this.newQuestions.push(element);
    }
  }

  protected createNewElement(json: any): Survey.IElement {
    var newElement = Survey.Serializer.createClass(json["type"]);
    new Survey.JsonObject().toObject(json, newElement);
    this.setNewNames(newElement);
    return newElement;
  }

  public copyElement(element: Survey.Base): Survey.IElement {
    var json = new Survey.JsonObject().toJsonObject(element);
    json.type = element.getType();
    return this.createNewElement(json);
  }

  /**
   * Copy a question to the active page
   * @param question A copied Survey.Question
   */
  public fastCopyQuestion(question: Survey.Base) {
    var newElement = this.copyElement(question);
    this.doClickQuestionCore(newElement, "ELEMENT_COPIED");
  }

  /**
   * Delete an element in the survey. It can be a question, a panel or a page.
   * @param element a survey element.
   */
  public deleteElement(element: Survey.Base) {
    this.deleteObject(element);
  }

  protected deleteObjectCore(obj: any) {
    var objType = SurveyHelper.getObjectType(obj);
    if (objType == ObjType.Page) {
      this.survey.removePage(obj);
    } else {
      this.deletePanelOrQuestion(obj, objType);
    }
    this.setModified({
      type: "OBJECT_DELETED",
      target: obj,
    });
    if (objType == ObjType.Question) {
      this.updateConditionsOnRemove(obj.getValueName());
    }
  }

  protected deleteObject(obj: any) {
    var options = {
      element: obj,
      elementType: SurveyHelper.getObjectType(obj),
      allowing: true,
    };
    this.onElementDeleting.fire(this, options);
    if (!options.allowing) return;
    this.deleteObjectCore(obj);
  }

  protected updateConditionsOnRemove(name: string) {
    // TODO: remove SurveyLogic call here
    new SurveyLogic(<any>this.survey, <any>this).removeQuestion(name);
  }

  public selectElement(element: any) {
  }

  protected deletePanelOrQuestion(obj: Survey.Base, objType: ObjType): void {
    var parent = obj["parent"];
    var elements = parent.elements;
    var objIndex = elements.indexOf(obj);
    if (objIndex == elements.length - 1) {
      objIndex--;
    }
    obj["delete"]();
    this.selectElement(objIndex > -1 ? elements[objIndex] : parent);
  }

}
