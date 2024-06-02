import {
  Base,
  FunctionFactory,
  Helpers,
  ItemValue,
  JsonObjectProperty,
  PanelModel,
  PanelModelBase,
  Question,
  QuestionButtonGroupModel,
  Serializer,
  settings,
  SurveyModel,
  Action,
  MatrixDynamicRowModel,
  ComputedUpdater,
  QuestionDropdownModel,
  QuestionSelectBase,
  PopupBaseViewModel,
  surveyLocalization,
  QuestionTextBase,
  IDialogOptions
} from "survey-core";
import { editorLocalization, getLocString } from "../editorLocalization";
import { EditableObject } from "../editable-object";
import { propertyGridCss } from "../property-grid-theme/property-grid";
import {
  SurveyQuestionEditorTabDefinition,
  SurveyQuestionProperties
} from "../question-editor/properties";
import {
  EmptySurveyCreatorOptions,
  ISurveyCreatorOptions,
  ICollectionItemAllowOperations,
  settings as creatorSettings
} from "../creator-settings";
import { QuestionFactory } from "survey-core";
import { defaultV2Css } from "survey-core";
import { SurveyHelper } from "../survey-helper";
import { ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { parsePropertyDescription } from "./description-parser";
import { QuestionFileEditorModel } from "../custom-questions/question-file";
import { getAcceptedTypesByContentMode } from "../utils/utils";
import { QuestionLinkValueModel } from "../components/link-value";

function propertyVisibleIf(params: any): boolean {
  if (!this.question) return false;
  const obj = this.question.obj;
  const prop = this.question.property;
  if (!obj || !prop) return false;
  if (!Serializer.hasOriginalProperty(obj, prop.name)) return false;
  return prop.isVisible("", obj);
}
function propertyEnableIf(params: any): boolean {
  const prop = this.question.property;
  const obj = this.question.obj;
  if (!this.question || !obj || !prop) return false;
  if (this.question.obj[prop.overridingProperty]) return false;
  return prop.isEnable(obj);
}

FunctionFactory.Instance.register("propertyVisibleIf", propertyVisibleIf);
FunctionFactory.Instance.register("propertyEnableIf", propertyEnableIf);

export interface IPropertyEditorSetup {
  editSurvey: SurveyModel;
  apply(): boolean;
}

export function setSurveyJSONForPropertyGrid(
  json: any,
  updateOnTyping: boolean = true,
  titleLocationLeft: boolean = true
) {
  json.showNavigationButtons = "none";
  json.showPageTitles = false;
  json.focusFirstQuestionAutomatic = false;
  json.showQuestionNumbers = "off";
  if (titleLocationLeft) {
    json.questionTitleLocation = "left";
  }
  json.showProgressBar = "off";
  if (updateOnTyping) {
    json.textUpdateMode = "onTyping";
  }
  json.requiredText = "";
}

export abstract class PropertyEditorSetupValue implements IPropertyEditorSetup {
  private editSurveyValue: SurveyModel;
  constructor(
    protected options: ISurveyCreatorOptions = null,
    doSetup: boolean = true
  ) {
    if (!this.options) {
      this.options = new EmptySurveyCreatorOptions();
    }
    if (doSetup) {
      this.setupSurvey();
    }
  }
  protected setupSurvey() {
    this.editSurveyValue = this.createSurvey();
  }
  public get editSurvey(): SurveyModel {
    return this.editSurveyValue;
  }
  public hasErrors(): boolean {
    return this.editSurvey.hasErrors(true, true);
  }
  protected createSurvey(): SurveyModel {
    var json = this.getSurveyJSON();
    setSurveyJSONForPropertyGrid(json, false, false);
    return this.options.createSurvey(json, this.getSurveyCreationReason(), this);
  }
  protected abstract getSurveyJSON(): any;
  protected abstract getSurveyCreationReason(): string;
  public abstract apply(): boolean;
  public dispose(): void {
    if (!!this.editSurvey) {
      this.editSurvey.dispose();
    }
  }
}

export interface IPropertyGridEditor {
  fit(prop: JsonObjectProperty, context?: string): boolean;
  isDefault?: () => boolean;
  getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions,
    propGridDefinition?: ISurveyPropertyGridDefinition
  ): any;
  showModalPropertyEditor?: (
    editor: IPropertyGridEditor,
    property: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ) => IPropertyEditorSetup;
  onCreated?: (obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions,
    propGridDefinition?: ISurveyPropertyGridDefinition) => void;
  onSetup?: (obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions) => void;
  validateValue?: (obj: Base, question: Question, prop: JsonObjectProperty, val: any) => string;
  onAfterRenderQuestion?: (
    obj: Base,
    prop: JsonObjectProperty,
    evtOptions: any
  ) => void;
  createPropertyEditorSetup?: (
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ) => IPropertyEditorSetup;
  isPropertyEditorSetupEnabled?: (
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ) => boolean;
  canClearPropertyValue?: (obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions) => boolean;
  clearPropertyValue?: (
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ) => void;
  onValueChanged?: (obj: Base, prop: JsonObjectProperty, question: Question) => void;
  onValueChanging?: (obj: Base, prop: JsonObjectProperty, question: Question, options: any) => void;
  onMasterValueChanged?: (
    obj: Base,
    prop: JsonObjectProperty,
    question: Question
  ) => void;

  onAddIntoPropertyValue?: (
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ) => void;
  onMatrixCellCreated?: (obj: Base, options: any) => void;
  onMatrixCellValueChanged?: (obj: Base, options: any) => void;
  onMatrixAllowRemoveRow?: (obj: Base, row: any) => boolean;
  onGetQuestionTitleActions?: (obj: Base, options: any, creator: ISurveyCreatorOptions) => void;
  onUpdateQuestionCssClasses?: (obj: Base, options: any) => void;
}

export var PropertyGridEditorCollection = {
  editors: new Array<IPropertyGridEditor>(),
  fitHash: {},
  clearHash(): void {
    this.fitHash = {};
  },
  register(editor: IPropertyGridEditor): void {
    this.editors.push(editor);
  },
  getEditor(prop: JsonObjectProperty, context?: string): IPropertyGridEditor {
    if (!prop) return null;
    if (!!context) {
      for (var i = this.editors.length - 1; i >= 0; i--) {
        let ed = this.editors[i];
        if (ed.fit(prop, context)) return ed;
      }
    }
    var fitEd = this.fitHash[prop.id];
    if (!!fitEd) return fitEd;
    let ed = this.isEditorFit(prop);
    return !!ed ? ed : this.isEditorFit(prop, true);
  },
  isEditorFit(
    prop: JsonObjectProperty,
    asDefault: boolean = false
  ): IPropertyGridEditor {
    for (var i = this.editors.length - 1; i >= 0; i--) {
      let ed = this.editors[i];
      if (
        (!asDefault && ed.fit(prop)) ||
        (asDefault && ed.isDefault && ed.isDefault())
      ) {
        this.fitHash[prop.id] = ed;
        return ed;
      }
    }
    return null;
  },
  getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions,
    context?: string,
    propGridDefinition?: ISurveyPropertyGridDefinition
  ): any {
    var res = this.getEditor(prop, context);
    return !!res ? res.getJSON(obj, prop, options, propGridDefinition) : null;
  },
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions,
    propGridDefinition?: ISurveyPropertyGridDefinition): any {
    var res = this.getEditor(prop);
    if (!!res && !!res.onCreated) {
      res.onCreated(obj, question, prop, options, propGridDefinition);
    }
  },
  onSetup(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    var res = this.getEditor(prop);
    if (!!res && !!res.onSetup) {
      res.onSetup(obj, question, prop, options);
    }
  },
  validateValue(obj: Base, question: Question, prop: JsonObjectProperty, value: any): string {
    var res = this.getEditor(prop);
    if (!!res && !!res.validateValue) {
      return res.validateValue(obj, question, prop, value);
    }
    return "";
  },
  onAfterRenderQuestion(obj: Base, prop: JsonObjectProperty, evtOptions: any) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onAfterRenderQuestion) {
      res.onAfterRenderQuestion(obj, prop, evtOptions);
    }
  },
  onMatrixCellCreated(obj: Base, prop: JsonObjectProperty, options: any) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onMatrixCellCreated) {
      res.onMatrixCellCreated(options.question.obj, options);
    }
  },
  onMatrixCellValueChanged(obj: Base, prop: JsonObjectProperty, options: any) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onMatrixCellValueChanged) {
      res.onMatrixCellValueChanged(obj, options);
    }
    var row = options.row;
    if (!!row) {
      var cellQuestion = row.getQuestionByName(options.columnName);
      if (!!cellQuestion) {
        row.runCondition({}, { question: cellQuestion });
      }
    }
  },
  onMatrixAllowRemoveRow(
    obj: Base,
    prop: JsonObjectProperty,
    row: MatrixDynamicRowModel
  ): boolean {
    var res = this.getEditor(prop);
    if (!!res && !!res.onMatrixAllowRemoveRow) {
      return res.onMatrixAllowRemoveRow(obj, row);
    }
    return true;
  },
  onGetMatrixRowAction(
    obj: Base,
    prop: JsonObjectProperty,
    options: any,
    setObjFunc: (obj: Base) => void
  ) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onGetMatrixRowAction) {
      res.onGetMatrixRowAction(obj, options, setObjFunc);
    }
  },
  onUpdateQuestionCssClasses(obj: Base,
    prop: JsonObjectProperty,
    options: any) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onUpdateQuestionCssClasses) {
      res.onUpdateQuestionCssClasses(obj, options);
    }
  },
  onGetQuestionTitleActions(obj: Base, prop: JsonObjectProperty, options: any, creator: ISurveyCreatorOptions) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onGetQuestionTitleActions) {
      res.onGetQuestionTitleActions(obj, options, creator);
    }
  },
  onValueChanged(obj: Base, prop: JsonObjectProperty, question: Question) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onValueChanged) {
      res.onValueChanged(obj, prop, question);
    }
  },
  onValueChanging(obj: Base, prop: JsonObjectProperty, question: Question, options: any) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onValueChanging) {
      res.onValueChanging(obj, prop, question, options);
    }
  },
  onMasterValueChanged(obj: Base, prop: JsonObjectProperty, question: Question) {
    var res = this.getEditor(prop);
    if (!!res && !!res.onMasterValueChanged) {
      res.onMasterValueChanged(obj, prop, question);
    }
  },
};

export class PropertyGridTitleActionsCreator {
  constructor(public obj: Base, private options: ISurveyCreatorOptions) { }
  public onGetQuestionTitleActions(options) {
    const question = options.question;
    const property = question.property;
    const editor = PropertyGridEditorCollection.getEditor(property);
    if (!editor) return;
    const actions = [];
    let enabled = !question.isReadOnly;
    const hasClear = !!editor.clearPropertyValue && (!editor.canClearPropertyValue || editor.canClearPropertyValue(this.obj, property, question, this.options));
    if (hasClear) {
      actions.push(
        this.createClearValueAction(editor, property, question, enabled)
      );
    }
    if ((<any>question).allowBatchEdit !== false) {
      if (!!editor.createPropertyEditorSetup) {
        if (!!editor.isPropertyEditorSetupEnabled) {
          enabled = editor.isPropertyEditorSetupEnabled(this.obj, property, options.question, this.options);
        }
        actions.push(
          this.createEditorSetupAction(editor, property, question, enabled)
        );
      }
    }
    var helpAction = this.createPropertyHelpAction(question);
    if (!!helpAction) {
      actions.unshift(helpAction);
      question.getTitleToolbar().containerCss += " spg-title-toolobar--single-help-action";
      helpAction.iconSize = 16;
    }
    if (actions.length > 0) {
      options.titleActions = actions;
    }
  }
  private createClearValueAction(
    editor: IPropertyGridEditor,
    property: JsonObjectProperty,
    question: Question,
    enabled: boolean
  ): any {
    return {
      id: "property-grid-clear",
      title: getLocString("pe.clear"),
      showTitle: false,
      iconName: "icon-clear",
      innerCss: "spg-action-button--danger",
      enabled: enabled,
      visible: <any>new ComputedUpdater<boolean>(() => {
        const propertyValue = (<any>question).obj[property.name];
        return Array.isArray(propertyValue) ? propertyValue.length > 0 : !!propertyValue;
      }),
      action: () => {
        editor.clearPropertyValue(
          (<any>question).obj,
          property,
          question,
          this.options
        );
      }
    };
  }
  private showModalPropertyEditor(
    editor: IPropertyGridEditor,
    property: JsonObjectProperty,
    question: Question
  ) {
    return editor.showModalPropertyEditor(
      editor,
      property,
      question,
      this.options
    );
  }

  private createEditorSetupAction(
    editor: IPropertyGridEditor,
    property: JsonObjectProperty,
    question: Question,
    enabled: boolean
  ): any {
    var setupAction = {
      id: "property-grid-setup",
      iconName: property.isArray ? "icon-fast-entry" : "icon-wizard",
      enabled: enabled,
      title: getLocString("pe.edit"),
      showTitle: false,
      action: () => {
        return this.showModalPropertyEditor(editor, property, question);
      }
    };
    return setupAction;
  }
  private createPropertyHelpAction(question: Question): any {
    if (!question.description) return null;
    const action = new Action({
      title: "",
      tooltip: question.description,
      id: "property-grid-help",
      iconName: this.getHelpActionIconName(question),
      css: "spg-help-action",
      showTitle: false,
      action: () => {
        question.descriptionLocation =
          question.descriptionLocation != "hidden" ? "hidden" : "underTitle";
        action.iconName = this.getHelpActionIconName(question);
      }
    });
    return action;
  }
  private getHelpActionIconName(question: Question): string {
    return question.descriptionLocation != "hidden" ? "icon-description-hide" : "icon-description";
  }
}

export class PropertyJSONGenerator {
  public static isPropertyReadOnly(
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions,
    obj: Base,
    parentObj: Base,
    parentProperty: JsonObjectProperty
  ): boolean {
    var res = prop.readOnly;
    if (!!options && !!obj) {
      res = options.onIsPropertyReadOnlyCallback(
        obj,
        prop,
        res,
        parentObj,
        parentProperty
      );
    }
    return res;
  }
  public static getClassNameProperty(obj: Base): string {
    if (!!obj && !!obj["getClassNameProperty"])
      return obj["getClassNameProperty"]();
    return undefined;
  }

  constructor(
    public obj: Base,
    private options: ISurveyCreatorOptions = null,
    private parentObj: Base = null,
    private parentProperty: JsonObjectProperty = null,
    private propertyGridDefinition: ISurveyPropertyGridDefinition = null
  ) { }
  public toJSON(isNested: boolean = false, context: string = undefined): any {
    return this.createJSON(isNested, context);
  }
  public createColumnsJSON(className: string, names: Array<string>): any {
    const res: Array<any> = [];
    const obj = (className ? Serializer.createClass(className) : this.obj) || this.obj;
    for (var i = 0; i < names.length; i++) {
      var columnJSON = this.getColumnPropertyJSON(obj, names[i]);
      if (!!columnJSON) {
        res.push(columnJSON);
      }
    }
    return res;
  }
  public setupObjPanel(panel: PanelModelBase, isNestedObj: boolean = false, context: string = undefined): void {
    panel.fromJSON(this.toJSON(isNestedObj, context));
    this.onQuestionsCreated(panel);
  }
  private onQuestionsCreated(panel: PanelModelBase): void {
    var properties = Serializer.getPropertiesByObj(this.obj);
    var props: any = {};
    for (var i = 0; i < properties.length; i++) {
      props[properties[i].name] = properties[i];
    }
    var questions = panel.questions;
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var prop = props[q.name];
      q.property = prop;
      q.obj = this.obj;
      q.creatorOptions = this.options;
      const eventVisibility = this.getVisibilityOnEvent(prop);
      q.readOnly = q.readOnly || this.isPropertyReadOnly(prop);
      q.visible = q.visible && eventVisibility;
      if (!!prop.visibleIf && eventVisibility) {
        q.visibleIf = "propertyVisibleIf() = true";
      }
      if (q.visible && (!!prop.overridingProperty || prop.enableIf)) {
        if (!q.readOnly) {
          q.enableIf = "propertyEnableIf() = true";
        }
        if (prop.overridingProperty) {
          q.onUpdateCssClassesCallback = (css: any) => {
            css.questionWrapper = "spg-boolean-wrapper--overriding";
          };
          const overridingQuestion = this.createOverridingQuestion(panel, q, prop.overridingProperty);
          q.parent.addElement(overridingQuestion, q.parent.elements.indexOf(q) + 1);
        }
      }
      q.descriptionLocation = "hidden";
      const helpText = editorLocalization.getPropertyHelpInEditor(this.obj.getType(), prop.name, prop.type);
      if (!!helpText) {
        q.description = helpText;
      }
      PropertyGridEditorCollection.onCreated(this.obj, q, prop, this.options, this.propertyGridDefinition);
      this.options.onPropertyEditorCreatedCallback(this.obj, prop, q);
    }
  }
  private getVisibilityOnEvent(
    prop: JsonObjectProperty,
    showMode: string = ""
  ): boolean {
    return this.options.onCanShowPropertyCallback(
      this.obj,
      <any>prop,
      showMode,
      this.parentObj,
      <any>this.parentProperty
    );
  }
  private isPropertyReadOnly(prop: JsonObjectProperty): boolean {
    return PropertyJSONGenerator.isPropertyReadOnly(
      prop,
      this.options,
      this.obj,
      this.parentObj,
      this.parentProperty
    );
  }
  private createOverridingQuestion(panel: PanelModelBase, question: Question, overridingProp: string): Question {
    const linkValue = <QuestionLinkValueModel>Serializer.createClass("linkvalue");
    linkValue.name = question.name + "_" + "overridingProperty";
    linkValue.startWithNewLine = false;
    linkValue.property = question.property;
    linkValue.obj = question.obj;
    linkValue.visibleIf = "propertyEnableIf() = false";
    const overridingQuestion = panel.getQuestionByName(overridingProp);
    linkValue.linkValueText = editorLocalization.getString("pe.overridingPropertyPrefix");
    linkValue.titleLocation = "hidden";
    linkValue.onUpdateCssClassesCallback = (css: any) => {
      css.questionWrapper = "spg-link-wrapper--overriding";
    };
    if (!!overridingQuestion) {
      linkValue.linkClickCallback = () => {
        //Focus and aways scroll into view
        overridingQuestion.focus(false, true);
      };
    }
    return linkValue;
  }
  private getClasPropName(): string {
    if (!!this.parentObj && !!this.parentProperty)
      return this.parentProperty.name;
    var propName = PropertyJSONGenerator.getClassNameProperty(this.obj);
    if (!!propName && this.obj[propName]) return this.obj[propName];
    return undefined;
  }
  private createJSON(isNestedObj: boolean, context: string = undefined): any {
    var className = undefined;
    const propName = this.getClasPropName();
    if (!!propName) {
      className = this.obj.getType();
      if (className === "itemvalue") className += "[]";
      className += "@" + propName;
    }
    var properties = new SurveyQuestionProperties(this.obj, null,
      className, undefined, this.parentObj, this.parentProperty, this.propertyGridDefinition
    );
    var tabs = properties.getTabs();
    var panels: any = {};
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].visible === false) continue;
      panels[tabs[i].name] = this.createPanelProps(tabs[i], context);
    }
    var json: any = {
      elements: []
    };
    for (var key in panels) {
      if (key == creatorSettings.propertyGrid.generalTabName && isNestedObj) {
        var els = panels[key].elements;
        for (var i = 0; i < els.length; i++) {
          json.elements.push(els[i]);
        }
      } else {
        json.elements.push(panels[key]);
      }
    }
    return json;
  }
  private createPanelProps(tab: SurveyQuestionEditorTabDefinition, context: string, isChild: boolean = false): any {
    var panel = this.createPanelJSON(tab.name, tab.title, isChild);
    for (var i = 0; i < tab.properties.length; i++) {
      var propDef = tab.properties[i];
      var propJSON = this.createQuestionJSON(this.obj, <any>propDef.property, propDef.title, false, context);
      if (propDef.onSameLine) {
        propJSON.startWithNewLine = false;
        this.updateQuestionJSONOnSameLine(propJSON);
        if (panel.elements.length > 0) {
          this.updateQuestionJSONOnSameLine(panel.elements[panel.elements.length - 1]);
        }
      }
      if (!propJSON) continue;
      panel.elements.push(propJSON);
    }
    if (Array.isArray(tab.tabs)) {
      tab.tabs.forEach(child => {
        const panelJSON = this.createPanelProps(child, context, true);
        if (panelJSON.title === child.name) {
          delete panelJSON.title;
        }
        if (panelJSON) {
          panel.elements.push(panelJSON);
        }
      });
    }
    return panel;
  }
  private updateQuestionJSONOnSameLine(json: any) {
    json.titleLocation = "left";
    json.minWidth = "50px";
  }
  private createPanelJSON(category: string, title: string, isChild: boolean): any {
    const res: any = {
      type: "panel",
      name: category,
      title: this.getPanelTitle(category, title),
      elements: []
    };
    if (!isChild) {
      res.state = "collapsed";
    }
    return res;
  }
  private createQuestionJSON(
    obj: Base,
    prop: JsonObjectProperty,
    title: string,
    isColumn: boolean = false,
    context: string
  ): any {
    var isVisible = this.isPropertyVisible(prop, isColumn ? "list" : "");
    if (!isVisible && isColumn) return null;
    var json = PropertyGridEditorCollection.getJSON(
      obj, prop, this.options, context, this.propertyGridDefinition
    );
    if (!json) return null;
    json.name = prop.name;
    json.title = this.getQuestionTitle(prop, obj.getType(), title);
    if (this.isQuestionTitleHidden(prop)) {
      json.titleLocation = "hidden";
    }
    json.visible = prop.visible;
    json.isReadOnly = prop.readOnly;
    json.isRequired = prop.isRequired;
    json.requiredErrorText = editorLocalization.getString("pe.propertyIsEmpty");

    if (["page", "panelbase"].indexOf(prop.className) && json.name === "name") {
      json.isRequired = true;
      json.requiredErrorText = editorLocalization.getString("pe.propertyIsEmpty");
    }

    const placeholder = editorLocalization.getPropertyPlaceholder(obj.getType(), prop.name);
    if (!!placeholder) {
      json.placeholder = placeholder;
    }
    return json;
  }
  private getColumnPropertyJSON(obj: Base, propName: string): any {
    if (!obj) return null;
    var prop = Serializer.findProperty(obj.getType(), propName);
    if (!prop) return null;
    var json = this.createQuestionJSON(obj, prop, "", true, undefined);
    if (!json) return null;
    if (prop.isUnique) {
      json.isUnique = prop.isUnique;
    }
    if (!!json.type) {
      json.cellType = json.type;
      delete json.type;
    }
    if (json.cellType === "buttongroup") {
      json.cellType = "dropdown";
    }
    if (json.cellType === "fileedit") {
      json.cellType = "text";
    }
    if (!!prop.visibleIf) {
      json.visibleIf = "propertyVisibleIf() = true";
    }
    if (!!json.isReadOnly) {
      json.readOnly = json.isReadOnly;
      delete json.isReadOnly;
    }
    return json;
  }
  private isPropertyVisible(
    prop: JsonObjectProperty,
    showMode: string
  ): boolean {
    if (!prop.visible) return false;
    return !showMode || !prop.showMode || showMode == prop.showMode;
  }
  private getPanelTitle(name: string, title: string): string {
    if (!!title) return title;
    const res: any = editorLocalization.getString("pe.tabs." + name);
    if (typeof res === "object") {
      for (let key in res) {
        if (Serializer.isDescendantOf(this.obj.getType(), key)) return res[key];
      }
    }
    return res;
  }
  private getQuestionTitle(prop: JsonObjectProperty, className: string, title: string): string {
    if (!!prop.displayName) return prop.displayName;
    if (!!title && title !== prop.name) return title;
    let titleClass = className;
    if (!!this.parentProperty) {
      titleClass += "@" + this.parentProperty.name;
    }
    return editorLocalization.getPropertyNameInEditor(titleClass, prop.name);
  }
  private isQuestionTitleHidden(prop: JsonObjectProperty): boolean {
    return prop.displayName === "";
  }
}

export class PropertyGridModel {
  private surveyValue: SurveyModel;
  private objValue: Base;
  private optionsValue: ISurveyCreatorOptions;
  private titleActionsCreator: PropertyGridTitleActionsCreator;
  private classNameProperty: string;
  private classNameValue: any;
  private propertyGridDefinition: ISurveyPropertyGridDefinition;

  currentlySelectedProperty: string;
  currentlySelectedPanel: PanelModel;

  public objValueChangedCallback: () => void;
  public changedFromActionCallback: (obj: Base, propertyName: string) => void;
  public refresh(): void {
    this.setObj(this.objValue);
  }
  constructor(
    obj: Base = null,
    options: ISurveyCreatorOptions = new EmptySurveyCreatorOptions(),
    propertyGridDefinition: ISurveyPropertyGridDefinition = null
  ) {
    this.options = options;
    this.propertyGridDefinition = propertyGridDefinition;
    if (this.options.enableLinkFileEditor) {
      PropertyGridEditorCollection.register(new PropertyGridLinkEditor());
    }
    this.obj = obj;
  }
  public get obj() {
    return this.objValue;
  }
  public set obj(value: Base) {
    if (this.objValue === value) return;
    this.setObj(value);
  }
  public selectProperty(propertyName: string, focus = true) {
    if (!this.survey) return;
    var question = this.survey.getQuestionByName(propertyName);
    if (!question) return;
    var panels = this.survey.getAllPanels();
    for (var i = 0; i < panels.length; i++) {
      var panel = <PanelModel>panels[i];
      if (panel === question.parent) {
        panel.expand();
      } else {
        panel.collapse();
      }
    }
    if (focus) {
      question.focus();
    }
  }
  private setObjFromAction(value: Base, propertyName: string) {
    if (this.changedFromActionCallback) {
      this.changedFromActionCallback(value, propertyName);
    } else {
      this.setObj(value);
    }
  }
  private setObj(value: Base) {
    this.objValue = value;
    this.classNameProperty = !!this.obj
      ? PropertyJSONGenerator.getClassNameProperty(this.obj)
      : "";
    this.classNameValue = !!this.classNameProperty
      ? this.obj[this.classNameProperty]
      : undefined;

    this.titleActionsCreator = !!this.obj
      ? new PropertyGridTitleActionsCreator(this.obj, this.options)
      : undefined;
    var json = this.getSurveyJSON();
    if (this.options.readOnly) {
      json.mode = "display";
    }
    if (!!this.surveyValue) {
      this.surveyValue.onValidateQuestion.clear();
      this.surveyValue.onValueChanging.clear();
      this.surveyValue.onValueChanged.clear();
      this.surveyValue.onMatrixCellValueChanging.clear();
      this.surveyValue.onMatrixCellValidate.clear();
      this.surveyValue.onMatrixCellValueChanged.clear();
      this.surveyValue.editingObj = undefined;
      this.surveyValue.data = {};
      this.surveyValue.dispose();
    }
    this.surveyValue = this.createSurvey(json, (survey: SurveyModel): void => {
      survey.questionErrorLocation = "bottom";
      survey.getCss().list = {};
      survey.css = propertyGridCss;
      var page = survey.createNewPage("p1");
      if (!!this.obj) {
        new PropertyJSONGenerator(this.obj, this.options, null, null, this.propertyGridDefinition).setupObjPanel(
          page,
          false
        );
        survey.enterKeyAction = "loseFocus";
        survey.addPage(page);
        survey.getAllQuestions().forEach(q => {
          PropertyGridEditorCollection.onSetup(this.obj, q, q.property, this.options);
        });
        survey.checkErrorsMode = "onValueChanging";
      }
    });
    if (!this.obj) return;
    this.survey.onValueChanged.add((sender, options) => {
      this.onValueChanged(options);
    });
    this.survey.onValueChanging.add((sender, options) => {
      this.onValueChanging(options);
    });
    this.survey.onValidateQuestion.add((sender, options) => {
      this.onValidateQuestion(options);
    });
    this.survey.onGetQuestionTitleActions.add((sender, options) => {
      this.titleActionsCreator.onGetQuestionTitleActions(options);
      this.onGetQuestionTitleActions(options, this.options);
      const q = options.question;
      this.options.onPropertyEditorUpdateTitleActionsCallback(this.obj, q.property, q, options.titleActions);
    });
    this.survey.onGetPanelTitleActions.add((sender, options) => {
      options.titleActions.splice(0, options.titleActions.length);
    });
    this.survey.onMatrixCellCreated.add((sender, options) => {
      this.onMatrixCellCreated(options);
    });
    this.survey.onMatrixCellValueChanging.add((sender, options) => {
      this.onMatrixCellValueChanging(options);
    });
    this.survey.onMatrixCellValidate.add((sender, options) => {
      this.onMatrixCellValidate(options);
    });
    this.survey.onMatrixCellValueChanged.add((sender, options) => {
      this.onMatrixCellValueChanged(options);
    });
    this.survey.onMatrixAllowRemoveRow.add((sender, options) => {
      options.allow = this.getMatrixAllowRemoveRow(options.question, <MatrixDynamicRowModel>options.row);
    });
    this.survey.onMatrixRowRemoving.add((sender, options) => {
      options.allow = this.getMatrixOnRowRemoving(options.question, <MatrixDynamicRowModel>options.row);
    });
    this.survey.onMatrixRowAdded.add((sender, options) => {
      this.onMatrixRowAdded(options);
    });
    this.survey.onGetMatrixRowActions.add((sender, options) => {
      this.onGetMatrixRowAction(options);
    });
    this.survey.onUpdateQuestionCssClasses.add((sender, options) => {
      this.onUpdateQuestionCssClasses(options);
    });
    this.survey.onElementContentVisibilityChanged.add((sender, options) => {
      if (creatorSettings.propertyGrid.allowExpandMultipleCategories) return;
      const el = options.element;
      if (el && el.isPanel && el.isExpanded) {
        this.collapseOtherPanels(<PanelModel>el);
      }
    });
    this.survey.onAfterRenderQuestion.add((sender, options) => {
      this.onAfterRenderQuestion(options);
    });
    this.survey.onTextMarkdown.add((sender, options) => {
      if (options.name === "description") {
        options.html = parsePropertyDescription(options.text);
      }
    });
    this.survey.editingObj = this.obj;
    if (this.objValueChangedCallback) {
      this.objValueChangedCallback();
    }
    this.updateDependedPropertiesEditors();
    this.survey.onFocusInPanel.add((sender, options) => {
      if (this.currentlySelectedPanel !== options.panel) {
        const questionToFocus = options.panel.getFirstQuestionToFocus(false, true);
        this.currentlySelectedProperty = !!questionToFocus ? questionToFocus.name : "";
        this.currentlySelectedPanel = options.panel;
      }
    });
    this.survey.onFocusInQuestion.add((sender, options) => {
      this.currentlySelectedProperty = options.question.name;
      this.currentlySelectedPanel = <PanelModel>options.question.parent;
    });
    this.survey.onUploadFiles.add((_, options) => {
      const callback = (status: string, data: any) => options.callback(status, [{ content: data, file: options.files[0] }]);
      const question = options.question.obj.getType() == "survey" ? undefined : (options.question.obj.getType() == "imageitemvalue" ? options.question.obj.locOwner : options.question.obj);
      const item = options.question.obj.getType() == "imageitemvalue" ? options.question.obj : undefined;
      this.options.uploadFiles(options.files, question, callback, { element: options.question.obj, item: item, elementType: options.question.obj.getType(), propertyName: options.name });
    });
    this.survey.getAllQuestions().map(q => q.allowRootStyle = false);
    this.survey.onQuestionCreated.add((_, opt) => {
      opt.question.allowRootStyle = false;
    });
    this.options.onPropertyGridSurveyCreatedCallback(this.obj, this.survey);
  }
  public get options(): ISurveyCreatorOptions {
    return this.optionsValue;
  }
  public set options(val: ISurveyCreatorOptions) {
    this.optionsValue = !!val ? val : new EmptySurveyCreatorOptions();
  }
  public get survey() {
    return this.surveyValue;
  }
  public validate(): boolean {
    if (!this.survey) return;
    return !this.survey.hasErrors(true, true);
  }
  public collapseCategory(name: string) {
    var panel = <PanelModel>this.survey.getPanelByName(name);
    if (!!panel) {
      panel.collapse();
    }
  }
  public expandCategory(name: string) {
    var panel = <PanelModel>this.survey.getPanelByName(name);
    if (!!panel) {
      panel.expand();
    }
  }
  public collapseAllCategories(): void {
    this.collapseAllCategoriesExcept(null);
  }
  public expandAllCategories(): void {
    this.survey.getAllPanels().forEach(pnl => {
      if (!pnl.parent.isPanel) {
        pnl.expand();
      }
    });
  }
  private collapseOtherPanels(panel: PanelModel): void {
    this.collapseAllCategoriesExcept(panel);
  }
  private collapseAllCategoriesExcept(panel: PanelModel): void {
    this.survey.getAllPanels().forEach(pnl => {
      if (pnl !== panel && !pnl.parent.isPanel) pnl.collapse();
    });
  }
  protected createSurvey(json: any, callback?: (survey: SurveyModel) => void): SurveyModel {
    return this.options.createSurvey(json, "property-grid", this, callback);
  }
  protected getSurveyJSON(): any {
    var res = {};
    setSurveyJSONForPropertyGrid(res, true, false);
    return res;
  }
  private validateQuestionValue(obj: Base, question: Question, prop: JsonObjectProperty, val: any): string {
    if (question.isRequired && (Helpers.isValueEmpty(val) || question["valueChangingEmpty"]))
      return this.getErrorTextOnValidate(
        editorLocalization.getString("pe.propertyIsEmpty"), prop.name, obj, val);
    if (this.isPropNameInValid(obj, prop, val) || question["nameHasError"])
      return this.getErrorTextOnValidate(
        editorLocalization.getString("pe.propertyNameIsIncorrect"), prop.name, obj, val);
    const editorError = PropertyGridEditorCollection.validateValue(obj, question, prop, val);
    return this.getErrorTextOnValidate(editorError, prop.name, obj, val);
  }
  private getErrorTextOnValidate(defaultError: string, propName: string, obj: Base, val: any): string {
    const customError = this.options.onGetErrorTextOnValidationCallback(propName, obj, val);
    return !!customError ? customError : defaultError;
  }
  private onValidateQuestion(options: any) {
    var q = options.question;
    if (!q || !q.property) return;
    options.error = this.validateQuestionValue(this.obj, q, q.property, options.value);
  }
  private onValueChanging(options: any) {
    var q = options.question;
    if (!q || !q.property || Helpers.isTwoValueEquals(options.value, options.oldValue, false, false, false)) return;
    PropertyGridEditorCollection.onValueChanging(this.obj, q.property, q, options);
    var changingOptions = {
      obj: this.obj,
      propertyName: q.property.name,
      value: options.oldValue,
      newValue: options.value,
      doValidation: false
    };
    this.options.onValueChangingCallback(changingOptions);
    options.value = changingOptions.newValue;
    if (q.property.isRequired) {
      const isEmpty = Helpers.isValueEmpty(options.value);
      q["valueChangingEmpty"] = isEmpty;
    }
    const isPropertyNameInValid = this.isPropNameInValid(this.obj, q.property, options.value);
    q["nameHasError"] = isPropertyNameInValid;
  }
  private isPropNameInValid(obj: Base, prop: JsonObjectProperty, val: any): boolean {
    if (obj["isQuestion"] && prop.name === "name" && !!val) {
      val = (<string>val).toLowerCase();
      return ["item", "choice", "row", "panel"].indexOf(val) > -1;
    }
    return false;
  }
  private onValueChanged(options: any) {
    var q = options.question;
    if (!q || !q.property) return;
    q["valueChangingEmpty"] = false;
    q["nameHasError"] = false;
    this.changeDependedProperties(q, (name: string): Question => { return this.survey.getQuestionByName(name); },
      (name: string): any => { return this.survey.getValue(name); });
    PropertyGridEditorCollection.onValueChanged(this.obj, q.property, q);
    if (
      !!this.classNameProperty &&
      options.name === this.classNameProperty &&
      this.classNameValue !== options.value
    ) {
      this.setObj(this.obj);
      if (!!this.survey) {
        const question = this.survey.getQuestionByName(options.name);
        if (!!question) {
          question.focus();
        }
      }
    }
  }
  private changeDependedProperties(question: Question, dependedsQuetion: (name: string) => Question,
    dependedsValue: (name: string) => any) {
    const prop: JsonObjectProperty = (<any>question).property;
    if (!prop) return;
    const properties = prop.getDependedProperties();
    if (!properties) return;
    for (var i = 0; i < properties.length; i++) {
      var name = properties[i];
      var q = dependedsQuetion(name);
      if (!q) continue;
      this.updateDependedPropertiesEditor(q);
      const objValue = dependedsValue(name);
      if (!Helpers.isTwoValueEquals(q.value, objValue, false, false, false)) {
        q.value = objValue;
      }
      PropertyGridEditorCollection.onMasterValueChanged(
        (<any>question).obj,
        (<any>q).property,
        q
      );
    }
  }
  private updateDependedPropertiesEditor(editor: Question) {
    const obj: Base = (<any>editor).obj;
    if (!obj) return;
    const property: JsonObjectProperty = (<any>editor).property;
    if (!!property && property.onPropertyEditorUpdate) {
      property.onPropertyEditorUpdate(obj, editor);
    }
  }
  private updateDependedPropertiesEditors() {
    const questions = this.survey.getAllQuestions();
    for (var i = 0; i < questions.length; i++) {
      this.updateDependedPropertiesEditor(questions[i]);
    }
  }
  private onAfterRenderQuestion(options: any) {
    PropertyGridEditorCollection.onAfterRenderQuestion(
      this.obj,
      options.question.property,
      options
    );
  }
  private isCellCreating = false;
  private onMatrixCellCreated(options: any) {
    this.isCellCreating = true;
    PropertyGridEditorCollection.onMatrixCellCreated(
      this.obj,
      options.question.property,
      options
    );
    this.isCellCreating = false;
    var obj = options.row.editingObj;
    if (!obj) return;
    var prop = Serializer.findProperty(obj.getType(), options.columnName);
    if (!prop) return;
    const allowEditRow = this.getMatrixAllowEditRow(options.question, options.row);
    options.cellQuestion.readOnly = !allowEditRow || PropertyJSONGenerator.isPropertyReadOnly(
      prop,
      this.options,
      obj,
      this.obj,
      options.question.property
    );
  }
  private onMatrixCellValueChanging(options: any) {
    if (this.isCellCreating) return;
    var changingOptions = {
      obj: options.row.editingObj,
      propertyName: options.columnName,
      value: options.oldValue,
      newValue: options.value,
      doValidation: false
    };
    this.options.onValueChangingCallback(changingOptions);
    options.value = changingOptions.newValue;
  }
  private onMatrixCellValidate(options: any) {
    if (this.isCellCreating) return;
    const q = options.row.getQuestionByColumnName(options.columnName);
    if (!q || !q.property) return;
    options.error = this.validateQuestionValue(<any>options.row.editingObj, q, q.property, options.value);
  }
  private onGetMatrixRowAction(options: any) {
    PropertyGridEditorCollection.onGetMatrixRowAction(
      this.obj,
      options.question.property,
      options,
      (obj: Base): void => {
        this.setObjFromAction(obj, options.question.name);
      }
    );
  }
  private onUpdateQuestionCssClasses(options: any) {
    PropertyGridEditorCollection.onUpdateQuestionCssClasses(
      this.obj,
      options.question.property,
      options
    );

  }
  private onGetQuestionTitleActions(options: any, creator: ISurveyCreatorOptions) {
    PropertyGridEditorCollection.onGetQuestionTitleActions(
      this.obj,
      options.question.property,
      options,
      creator
    );
  }
  private onMatrixCellValueChanged(options: any) {
    if (this.isCellCreating) return;
    const cellQuestion = options.row.getQuestionByName(options.columnName);
    if (!!cellQuestion) {
      this.changeDependedProperties(cellQuestion, (name: string): Question => { return options.row.getQuestionByName(name); },
        (name: string): any => { return options.row.getValue(name); });
    }
    PropertyGridEditorCollection.onMatrixCellValueChanged(
      this.obj,
      options.question.property,
      options
    );
  }
  private getMatrixAllowRemoveRow(question: Question, row: MatrixDynamicRowModel): boolean {
    if ((<any>row).allowDeleteRow === undefined) {
      this.calculateMatrixAllowOperations(question, row);
    }
    return (<any>row).allowDeleteRow;
  }
  private getMatrixOnRowRemoving(question: Question, row: MatrixDynamicRowModel): boolean {
    return this.options.onCollectionItemDeletingCallback(<any>this.obj, (<any>question).property, question.value, row.editingObj);
  }
  private getMatrixAllowEditRow(question: Question, row: MatrixDynamicRowModel): boolean {
    if (question.readOnly)
      return false;
    if ((<any>row).allowEditRow === undefined) {
      this.calculateMatrixAllowOperations(question, row);
    }
    return (<any>row).allowEditRow;
  }
  private calculateMatrixAllowOperations(question: Question, row: MatrixDynamicRowModel) {
    const rowOptions: ICollectionItemAllowOperations = { allowDelete: this.onMatrixAllowRemoveRow(question, row), allowEdit: true, allowAdd: undefined };
    this.options.onCollectionItemAllowingCallback(<any>this.obj,
      (<any>question).property,
      question.value,
      row.editingObj,
      rowOptions
    );

    (<any>row).allowDeleteRow = rowOptions.allowDelete;
    (<any>row).allowEditRow = rowOptions.allowEdit;
  }
  private onMatrixAllowRemoveRow(question: Question, row: MatrixDynamicRowModel): boolean {
    var res = PropertyGridEditorCollection.onMatrixAllowRemoveRow(
      this.obj,
      (<any>question).property,
      row
    );
    return this.options.onCanDeleteItemCallback(
      <any>this.obj,
      row.editingObj,
      res
    );
  }
  private onMatrixRowAdded(options: any) {
    var item = options.row.editingObj;
    if (Serializer.isDescendantOf(item.getType(), "itemvalue")) {
      this.options.onItemValueAddedCallback(
        <any>this.obj,
        options.question.property.name,
        options.row.editingObj,
        options.question.value
      );
    }
    if (Serializer.isDescendantOf(item.getType(), "matrixdropdowncolumn")) {
      this.options.onMatrixDropdownColumnAddedCallback(
        <any>this.obj,
        options.row.editingObj,
        options.question.value
      );
    }
  }
}

export abstract class PropertyGridEditor implements IPropertyGridEditor {
  constructor() { }
  public abstract fit(prop: JsonObjectProperty): boolean;
  public abstract getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions,
    propGridDefinition?: ISurveyPropertyGridDefinition
  ): any;
  showModalPropertyEditor(
    editor: IPropertyGridEditor,
    property: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions,
    onClose?: (reason: "apply" | "cancel") => void
  ): IPropertyEditorSetup {
    const obj = (<any>question).obj;
    const surveyPropertyEditor = editor.createPropertyEditorSetup(
      obj,
      property,
      question,
      options
    );
    if (!surveyPropertyEditor) return null;
    if (property.type !== "condition") {
      surveyPropertyEditor.editSurvey.css = defaultV2Css;
    }
    if (question.isReadOnly) {
      surveyPropertyEditor.editSurvey.mode = "display";
    }
    if (!settings.showDialog) return surveyPropertyEditor;
    const prevCurrentLocale = surveyLocalization.currentLocale;
    const locale = editorLocalization.currentLocale;
    surveyLocalization.currentLocale = locale;
    const popupModel: PopupBaseViewModel = settings.showDialog(
      <IDialogOptions>{
        componentName: "survey",
        data: {
          survey: surveyPropertyEditor.editSurvey,
          model: surveyPropertyEditor.editSurvey
        },
        onApply: (): boolean => {
          this.onModalPropertyEditorClosed(editor, property, question, options, "apply");
          onClose && onClose("apply");
          return surveyPropertyEditor.apply();
        },
        onCancel: () => {
          this.onModalPropertyEditorClosed(editor, property, question, options, "cancel");
          onClose && onClose("cancel");
        },
        cssClass: "sv-property-editor",
        title: question.title,
        displayMode: options.isMobileView ? "overlay" : "popup"
      }, options.rootElement);
    if (question.isReadOnly) {
      const applyBtn = popupModel.footerToolbar.getActionById("apply");
      if (!!applyBtn) {
        applyBtn.visible = false;
      }
    }
    popupModel.locale = locale;
    surveyLocalization.currentLocale = prevCurrentLocale;
    this.onModalPropertyEditorShown(editor, property, question, options);
    options.onPropertyGridShowModalCallback(obj, property, question, surveyPropertyEditor, popupModel);
    return surveyPropertyEditor;
  }
  protected onModalPropertyEditorShown(editor: IPropertyGridEditor,
    property: JsonObjectProperty, question: Question,
    options: ISurveyCreatorOptions
  ): void {

  }
  protected onModalPropertyEditorClosed(editor: IPropertyGridEditor,
    property: JsonObjectProperty, question: Question,
    options: ISurveyCreatorOptions, reason: "apply" | "cancel"): void {

  }
  public isSupportGrouping(): boolean {
    return false;
  }
  private hasPreviousElementForGrouping(question: Question): boolean {
    if (!question || !question.parent) return false;
    const index = question.parent.elements.indexOf(question);
    if (index < 1) return;
    const prevElement = question.parent.elements[index - 1];
    const prevPrevElement = question.parent.elements[index - 2];
    if (prevElement.getType() === question.getType()) return true;
    //in case of overriding property
    if (index > 1 && !prevElement.startWithNewLine && prevPrevElement["property"] === prevElement["property"] && prevPrevElement.getType() === question.getType()) return true;
    return false;
  }
  onUpdateQuestionCssClasses(obj: Base, options: any) {
    if (!this.isSupportGrouping()) return;
    if (this.hasPreviousElementForGrouping(options.question)) {
      options.cssClasses.mainRoot += " spg-row-narrow__question";
    }
  }
}

export class PropertyGridEditorBoolean extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty, context?: string): boolean {
    return prop.type == "boolean" || prop.type == "switch";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    const res: any = {
      type: "boolean",
      default: false,
      renderAs: "checkbox",
      titleLocation: "hidden"
    };
    const choices = prop.getChoices(obj, (choices: any) => { });
    if (Array.isArray(choices) && choices.length >= 2) {
      const jsonChoices = [];
      for (let i = 0; i < 2; i++) {
        const val = choices[i].value || choices[i];
        jsonChoices.push({ value: val, text: editorLocalization.getPropertyValueInEditor(prop.name, val) });
      }
      const defaultValue = prop.getDefaultValue(obj) || jsonChoices[0].value;
      const indexTrue = defaultValue === choices[1].value ? 1 : 0;
      const indexFalse = indexTrue === 0 ? 1 : 0;
      res.valueTrue = jsonChoices[indexTrue].value;
      res.valueFalse = jsonChoices[indexFalse].value;
      res.labelTrue = jsonChoices[indexTrue].text;
      res.labelFalse = jsonChoices[indexFalse].text;
    }
    return res;
  }
  public isSupportGrouping(): boolean {
    return true;
  }
}
export abstract class PropertyGridEditorStringBase extends PropertyGridEditor {
  protected updateMaxLength(prop: JsonObjectProperty, json: any): any {
    if (prop.maxLength > 0) {
      json.maxLength = prop.maxLength;
    }
    return json;
  }
  protected updateType(prop: JsonObjectProperty, obj: Base, json: any) {
    if (!json.maxLength && obj.hasDefaultPropertyValue(prop.name)) {
      json.type = `${json.type}withreset`;
      json.renderAs = json.type;
    }
    return json;
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions) {
    if (question instanceof QuestionTextBase) {
      question.onKeyDownPreprocess = (event: KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && [89, 90].indexOf(event.keyCode) !== -1) {
          if (question.isInputTextUpdate) {
            (options as any).findSuitableShortcuts(event).forEach((shortcut: any) => {
              shortcut.execute((options as any).selectedElement);
            });
            event.preventDefault();
          } else if ((event.target as HTMLInputElement).value == question.value) {
            (options as any).findSuitableShortcuts(event).forEach((shortcut: any) => {
              shortcut.execute((options as any).selectedElement);
            });
          }
        }
      };
    }
    if (prop.name === "title") {
      question.allowSpaceAsAnswer = true;
    }
    if (question.getType() == "textwithreset" || question.getType() == "commentwithreset") {
      question.resetValueAdorner.resetValueCallback = () => {
        obj.resetPropertyValue(prop.name);
      };
      question.resetValueAdorner.caption = editorLocalization.getString("pe.resetToDefaultCaption");
      const isDefaultValue = () => !prop.isDefaultValue(prop.getValue(obj));
      question.resetValueAdorner.allowResetValue = isDefaultValue();
      obj.registerFunctionOnPropertyValueChanged(prop.name, () => {
        question.resetValueAdorner.allowResetValue = isDefaultValue();
      });
    }
  }
}
export class PropertyGridEditorString extends PropertyGridEditorStringBase {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "string";
  }
  public isDefault() {
    return true;
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    const json = this.updateType(prop, obj, this.updateMaxLength(prop, { type: "text" }));
    if (prop.isRequired) {
      json.textUpdateMode = "onBlur";
    }
    if (!!prop.dataList) {
      json.dataList = prop.dataList;
    }
    return json;
  }
}

export class PropertyGridEditorDateTime extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "datetime";
  }

  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const res: any = {
      type: "text",
      inputType: "date"
    };
    return res;
  }
}

export class PropertyGridLinkEditor extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "url" || prop.type === "file";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    const res: any = { type: "fileedit", storeDataAsText: false };
    return res;
  }

  public onCreated(obj: Base, question: QuestionFileEditorModel, prop: JsonObjectProperty, options: ISurveyCreatorOptions) {
    if (["image", "imageitemvalue"].indexOf(obj.getType()) > -1) {
      const questionObj = obj.getType() == "imageitemvalue" ? (<any>obj).locOwner : <Question>obj;
      if (questionObj) {
        questionObj.registerFunctionOnPropertyValueChanged("contentMode", (newValue: string) => {
          question.acceptedTypes = getAcceptedTypesByContentMode(newValue);
        });
        question.acceptedTypes = getAcceptedTypesByContentMode(questionObj.contentMode);
      }
    } else {
      question.acceptedTypes = getAcceptedTypesByContentMode("image");
    }
    question.onChooseFilesCallback = ((input, callback) => {
      options.chooseFiles(input, callback, { element: obj, elementType: obj.getType(), propertyName: question.name });
    });
  }

}

export class PropertyGridEditorColor extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "color";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    const res: any = { type: "color", allowEmptyValue: true };
    return res;
  }
}

export class PropertyGridEditorColorWithAlpha extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "coloralpha";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "coloralpha", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}

export class PropertyGridEditorNumber extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "number" || prop.type == "responsiveImageSize";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    var res: any = { type: "text", inputType: "number", textUpdateMode: "onBlur" };
    if (prop.minValue !== undefined) {
      res.min = prop.minValue;
    }
    if (prop.maxValue !== undefined) {
      res.max = prop.maxValue;
    }
    return res;
  }
  public onValueChanging(obj: Base, prop: JsonObjectProperty, question: Question, options: any): void {
    if (!options.value && options.value !== 0) {
      if (prop.defaultValue !== undefined) {
        options.value = prop.defaultValue;
      } else {
        if(!prop.isRequired && options.value === "") {
          options.value = undefined;
        }
        else {
          options.value = prop.minValue !== undefined && prop.minValue > 0 ? prop.minValue : 0;
        }
      }
    }
  }
}

export class PropertyGridEditorSpinEdit extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "spinedit";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const res: any = { type: "spinedit", descriptionLocation: "hidden" };
    return res;
  }
}

export class PropertyGridEditorImageSize extends PropertyGridEditorString {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "string" && (prop.name == "imageHeight" || prop.name == "imageWidth");
  }
  public isDefault(): boolean {
    return false;
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions) {
    super.onCreated(obj, question, prop, options);
    const isDefaultValue = (imageHeight: number, imageWidth: number) => {
      const imageHeightProperty = Serializer.findProperty(obj.getType(), "imageHeight");
      const imageWidthProperty = Serializer.findProperty(obj.getType(), "imageWidth");
      if (!imageHeightProperty && !imageWidthProperty) return false;
      return imageHeightProperty.isDefaultValue(imageHeight) && imageWidthProperty.isDefaultValue(imageWidth);
    };
    question.valueFromDataCallback = function (value: any): any {
      const isDefaultSize = isDefaultValue(obj["imageHeight"], obj["imageWidth"]);
      return isDefaultSize ? undefined : value;
    };
  }
}
export class PropertyGridEditorText extends PropertyGridEditorStringBase {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "text";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return this.updateType(prop, obj, this.updateMaxLength(prop, {
      type: "comment"
    }));
  }
}
export class PropertyGridEditorHtml extends PropertyGridEditorStringBase {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "html";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return this.updateMaxLength(prop, {
      type: "comment"
    });
  }
}
export class PropertyGridEditorStringArray extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "string[]";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return { type: "comment" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      if (!Array.isArray(val)) return "";
      return val.join("\n");
    };
    question.valueToDataCallback = function (val: any): any {
      if (!val) return [];
      if (Array.isArray(val) && !val["split"]) return val;
      return val.split("\n");
    };
  }
}

export class PropertyGridEditorDropdown extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type !== "boolean" && (this.isLocaleProp(prop) || prop.hasChoices);
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    var choices = this.getChoices(obj, prop);

    var json: any = {
      type: this.renderAsButtonGroup(prop, choices)
        ? "buttongroup"
        : "dropdown",
      choices: choices,
      showOptionsCaption: false
    };
    this.updateObjBasedOnEmptyValueItem(prop, choices, json);
    return json;
  }
  private getChoices(obj: Base, prop: JsonObjectProperty): Array<any> {
    return prop.getChoices(obj, (choices: any) => { });
  }
  private updateObjBasedOnEmptyValueItem(prop: JsonObjectProperty, choices: Array<any>, objOrJson: any): void {
    const emptyValueItem: ItemValue = this.getEmptyJsonItemValue(prop, choices);
    if (!!emptyValueItem) {
      objOrJson.showOptionsCaption = true;
      objOrJson.allowClear = true;
      if (emptyValueItem.text) {
        objOrJson.optionsCaption = emptyValueItem.text;
      }
    }
  }
  protected get canRenderAsButtonGroup(): boolean {
    return creatorSettings.propertyGrid.useButtonGroup;
  }
  protected renderAsButtonGroup(
    prop: JsonObjectProperty,
    choices: Array<any>
  ): boolean {
    if (prop.type === "dropdown") return false;
    if (prop.type === "buttongroup") return true;
    if (this.isLocaleProp(prop)) return false;
    if (
      !this.canRenderAsButtonGroup ||
      !choices ||
      choices.length == 0 ||
      choices.length > 4
    )
      return false;
    var charCount = 0;
    for (var i = 0; i < choices.length; i++) {
      var text = this.getLocalizedText(
        prop,
        !!choices[i].value ? choices[i].value : choices[i]
      );
      charCount += !!text ? text.length : 0;
    }
    return charCount < creatorSettings.propertyGrid.maxCharsInButtonGroup;
  }
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    this.setChoices(obj, question, prop);
    question.displayValueCallback = (text: string): string => {
      return !text ? (<QuestionDropdownModel>question).optionsCaption : text;
    };
  }
  onMasterValueChanged(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question
  ): void {
    this.setChoices(obj, question, prop);
    if (!question.isEmpty()) {
      if (!ItemValue.getItemByValue((<QuestionSelectBase>question).choices, question.value)) {
        question.clearValue();
      }
    }
  }
  private setChoicesCore(
    question: Question,
    prop: JsonObjectProperty,
    propChoices: Array<any>
  ) {
    if (!propChoices || !Array.isArray(propChoices) || propChoices.length == 0)
      return;
    this.updateObjBasedOnEmptyValueItem(prop, propChoices, question);
    (<QuestionSelectBase>question).choices = this.choicesFromPropChoices(prop, propChoices);
  }
  private isLocaleProp(prop: JsonObjectProperty): boolean {
    return prop.name === "locale";
  }
  private getLocalizedText(prop: JsonObjectProperty, value: string): string {
    if (this.isLocaleProp(prop)) {
      let text = editorLocalization.getLocaleName(value);
      if (text) return text;
    }
    if (prop.name === "cellType") {
      let text = editorLocalization.getString("qt." + value);
      if (text) return text;
    }
    if (value === null) return null;
    return editorLocalization.getPropertyValueInEditor(prop.name, value);
  }
  private choicesFromPropChoices(
    prop: JsonObjectProperty,
    propChoices: Array<any>
  ): Array<any> {
    var choices = [];
    for (var i = 0; i < propChoices.length; i++) {
      var jsonItem = this.getJsonItem(prop, propChoices[i]);
      if (!Helpers.isValueEmpty(jsonItem.value)) {
        choices.push(jsonItem);
      }
    }
    return choices;
  }
  private getJsonItem(prop: JsonObjectProperty, item: any): any {
    var jsonItem: any = { value: item.value !== undefined ? item.value : item };
    var text = !!item.text ? item.text : "";
    if (!text) {
      text = this.getLocalizedText(prop, jsonItem.value);
    }
    if (!!text && text != jsonItem.value) {
      jsonItem.text = text;
    }
    return jsonItem;
  }
  private setChoices(obj: Base, question: Question, prop: JsonObjectProperty) {
    var propChoices = prop.getChoices(obj, (choices: any) => {
      this.setChoicesCore(question, prop, choices);
    });
    this.setChoicesCore(question, prop, propChoices);

  }
  private getEmptyJsonItemValue(
    prop: JsonObjectProperty,
    choices: Array<any>
  ): any {
    if (!choices) return null;
    for (var i = 0; i < choices.length; i++) {
      var item = choices[i];
      var value = item.value !== undefined ? item.value : item;
      if (Helpers.isValueEmpty(value)) return this.getJsonItem(prop, item);
    }
    return null;
  }
}

export class PropertyGridEditorSet extends PropertyGridEditorDropdown {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "set" || prop.type == "multiplevalues";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    var json = super.getJSON(obj, prop, options);
    var hasTagbox = !!Serializer.findClass("tagbox");
    json.type = hasTagbox ? "tagbox" : "checkbox";
    json.hasSelectAll = !hasTagbox;
    return json;
  }
}
export class PropertyGridEditorPage extends PropertyGridEditorDropdown {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.hasChoices && prop.name == "page";
  }
  protected get canRenderAsButtonGroup(): boolean {
    return false;
  }
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    super.onCreated(obj, question, prop);
    question.valueFromDataCallback = (val: any): any => {
      return !!val ? val.name : "";
    };
    question.valueToDataCallback = (val: any): any => {
      if (!val || !obj || !obj.getSurvey()) return undefined;
      return (<SurveyModel>obj.getSurvey()).getPageByName(val);
    };
  }
}
export class PropertyGridEditorQuestion extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "question";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const result = {
      type: "dropdown",
      optionsCaption: editorLocalization.getString("pe.conditionSelectQuestion"),
      choices: this.getChoices(obj, prop, options)
    };
    if (prop.type == "question") {
      result["allowClear"] = false;
    }
    return result;
  }
  private getChoices(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): Array<any> {
    var survey = EditableObject.getSurvey(obj);
    if (!survey) return [];
    var questions = this.getQuestions(survey, obj);
    if (!questions) questions = [];
    var showTitles = !!options && options.showTitlesInExpressions;
    var qItems = questions.map((q) => {
      let text = showTitles ? (<any>q).locTitle.renderedHtml : q.name;
      if (!!options) text = options.getObjectDisplayName(q, "property-grid:property-editor", "property-editor", text);
      let value = this.getItemValue(<any>q);
      return { value: value, text: text };
    });
    if (creatorSettings.logic.questionSortOrder === "asc") {
      SurveyHelper.sortItems(qItems);
    }
    return qItems;
  }

  protected getQuestions(survey: SurveyModel, obj: Base): Array<Question> {
    return survey.getAllQuestions();
  }

  protected getItemValue(question: Question): any {
    return question.name;
  }
}

export class PropertyGridEditorQuestionSelectBase extends PropertyGridEditorQuestion {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "question_selectbase";
  }
  protected isQuestionFit(question: Question): boolean {
    return Serializer.isDescendantOf(question.getType(), "selectbase");
  }
  protected getQuestions(survey: SurveyModel, obj: Base): Array<Question> {
    let questions = super.getQuestions(survey, obj);
    let res = [];
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (q !== obj && this.isQuestionFit(q)) {
        res.push(q);
      }
    }
    return res;
  }
}
export class PropertyGridEditorQuestionCarryForward extends PropertyGridEditorQuestionSelectBase {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "question_carryforward";
  }
  protected isQuestionFit(question: Question): boolean {
    return question.isValueArray || super.isQuestionFit(question);
  }
}

export class PropertyGridEditorQuestionValue extends PropertyGridEditorQuestion {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "questionvalue";
  }
  protected getItemValue(question: Question): any {
    return question.getValueName();
  }
  protected getQuestions(survey: SurveyModel, obj: Base): Array<Question> {
    const questions = super.getQuestions(survey, obj);
    return questions.filter(q => { return !Serializer.isDescendantOf(q.getType(), "nonvalue"); });
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorBoolean());
PropertyGridEditorCollection.register(new PropertyGridEditorString());
PropertyGridEditorCollection.register(new PropertyGridEditorNumber());
PropertyGridEditorCollection.register(new PropertyGridEditorSpinEdit());
PropertyGridEditorCollection.register(new PropertyGridEditorText());
PropertyGridEditorCollection.register(new PropertyGridEditorHtml());
PropertyGridEditorCollection.register(new PropertyGridEditorDropdown());
PropertyGridEditorCollection.register(new PropertyGridEditorSet());
PropertyGridEditorCollection.register(new PropertyGridEditorPage());
PropertyGridEditorCollection.register(new PropertyGridEditorStringArray());
PropertyGridEditorCollection.register(new PropertyGridEditorQuestion());
PropertyGridEditorCollection.register(new PropertyGridEditorQuestionValue());
PropertyGridEditorCollection.register(new PropertyGridEditorQuestionSelectBase());
PropertyGridEditorCollection.register(new PropertyGridEditorQuestionCarryForward());
PropertyGridEditorCollection.register(new PropertyGridEditorImageSize());
PropertyGridEditorCollection.register(new PropertyGridEditorColor());
PropertyGridEditorCollection.register(new PropertyGridEditorColorWithAlpha());
PropertyGridEditorCollection.register(new PropertyGridEditorDateTime());

QuestionFactory.Instance.registerQuestion("buttongroup", (name) => {
  return new QuestionButtonGroupModel(name);
});
