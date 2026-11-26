import {
  Base, ComputedUpdater, Helpers, IAction, GetMatrixRowActionsEvent, ItemValue,
  JsonMetadataClass, JsonObjectProperty, MatrixDropdownColumn, MatrixDropdownRowModelBase,
  MatrixDynamicRowModel, PanelModel, Question, QuestionDropdownModel, QuestionMatrixDropdownModelBase,
  QuestionMatrixDropdownRenderedRow, QuestionMatrixDynamicModel, QuestionRatingModel, QuestionRecordsModel,
  renamedIcons, Serializer, surveyLocalization, SurveyElement
} from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { SurveyQuestionProperties } from "../question-editor/properties";
import { ISurveyCreatorOptions, settings } from "../creator-settings";
import { getNextColumnTitle, getNextItemText, getNextValue, getQuestionFromObj } from "../utils/creator-utils";
import { FastEntryEditor, FastEntryEditorBase } from "./fast-entry";
import {
  IPropertyEditorSetup,
  PropertyGridEditor,
  PropertyGridEditorCollection,
  PropertyJSONGenerator,
} from "./index";
import { updateMatixActionsAppearance, updateMatrixRemoveAction } from "../utils/actions";
import { QuestionRatingAdornerViewModel } from "../components/question-rating";
import { ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { SurveyHelper } from "../survey-helper";

// Not Serializer.addProperty: it makes a custom property, which defines an own accessor on every item.
// The @property of ItemValue already serves "icon" on the prototype.
const itemValueClass = Serializer.findClass("itemvalue");
itemValueClass.createProperty(
  {
    name: "icon", isSerializable: false, readOnly: true, visibleIndex: 0, visibleIf: (obj: ItemValue): boolean => {
      return obj &&
        obj.ownerPropertyName === "rateValues" &&
        obj.locOwner instanceof QuestionRatingModel &&
        obj.locOwner.rateType == "smileys";
    },
  });
itemValueClass.resetAllProperties();
export abstract class PropertyGridEditorMatrix extends PropertyGridEditor {
  static getNewColumnName(
    objs: Array<any>,
    keyPropName: string,
    baseName: string
  ): string | number {
    var arr = [];
    if (Array.isArray(objs)) {
      for (var i = 0; i < objs.length; i++) {
        arr.push(objs[i][keyPropName]);
      }
    }
    return getNextValue(baseName, arr);
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty,
    options?: ISurveyCreatorOptions, propGridDefinition?: ISurveyPropertyGridDefinition) {
    (<any>question).onGetValueForNewRowCallBack = (
      sender: QuestionMatrixDynamicModel
    ): any => {
      return this.createNewItem(sender, prop);
    };
    this.setupMatrixQuestion(obj, <QuestionMatrixDynamicModel>question, prop, propGridDefinition);
  }
  public onSetup(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions) {
    const matrix = <QuestionMatrixDynamicModel>question;
    if (matrix.allowRowReorder && matrix.dragDropMatrixRows) {
      matrix.dragDropMatrixRows.onDragStart.add(() => { options.startUndoRedoTransaction(); });
      matrix.dragDropMatrixRows.onDragClear.add(() => { options.stopUndoRedoTransaction(); });
    }
  }
  private initializePlaceholder(rowObj: any, cellQuestion: Question, propertyName: string) {
    const objType = typeof rowObj.getType === "function" && rowObj.getType();
    if (cellQuestion.getType() === "text" && !!objType) {
      if (propertyName === "text" && Serializer.isDescendantOf(objType, "itemvalue")) {
        (<any>cellQuestion).placeholder = new ComputedUpdater<string>(() => {
          return rowObj.locText.getPlaceholder();
        });
      }
      if (propertyName === "title" && (objType === "matrixdropdowncolumn" || objType === "multipletextitem")) {
        (<any>cellQuestion).placeholder = new ComputedUpdater<string>(() => {
          return rowObj.locTitle.getPlaceholder();
        });
      }
    }
  }
  public onMatrixCellCreated(obj: Base, options: any) {
    const rowObj = options.row.editingObj;
    if (!rowObj) return;
    const q = options.cellQuestion;
    q.obj = rowObj;
    this.initializePlaceholder(rowObj, q, options.columnName);
    q.property = Serializer.findProperty(rowObj.getType(), options.columnName);
    if (q.getType() === "boolean" && q.renderAs === "checkbox") {
      q.titleLocation = "default";
    }
  }
  public onGetMatrixRowAction(
    obj: Base,
    prop: JsonObjectProperty,
    evtOptions: GetMatrixRowActionsEvent,
    setObjFunc: (obj: Base) => void,
    options: ISurveyCreatorOptions
  ) {
    const question = <QuestionMatrixDynamicModel>evtOptions.question;
    const row = <MatrixDynamicRowModel>evtOptions.row;
    const actions: IAction[] = evtOptions.actions;
    if (this.getEditItemAsStandAlone()) {
      actions.push({
        id: "svd-grid-edit-column",
        iconName: "icon-edit",
        title: editorLocalization.getString("pe.edit"),
        visibleIndex: 0,
        showTitle: false,
        location: "end",
        action: () => {
          const column = <MatrixDropdownColumn>evtOptions.row.editingObj;
          setObjFunc(column);
        }
      });
    }
    const showDetailAction: IAction = actions.filter(
      (item: IAction) => item.id === "show-detail"
    )[0];
    updateMatrixRemoveAction(question, actions, row);
    if (!!showDetailAction) {
      showDetailAction.component = "sv-action-bar-item";
      showDetailAction.iconName = this.getShowDetailActionIconName(row);
      showDetailAction.iconSize = "auto";
      showDetailAction.showTitle = false;
      showDetailAction.location = "end";
      showDetailAction.ariaExpanded = row.isDetailPanelShowing;
      showDetailAction.action = () => {
        this.showHideDetailPanel(row, options);
        showDetailAction.iconName = row.isDetailPanelShowing ? "icon-editing-finish" : "icon-edit";
      };
      showDetailAction.visibleIndex = 0;
      showDetailAction.visible = this.hasPropertiesInDetail;
      row.onDetailPanelShowingChanged = () => {
        showDetailAction.iconName = this.getShowDetailActionIconName(row);
        showDetailAction.ariaExpanded = row.isDetailPanelShowing;
      };
    }
    updateMatixActionsAppearance(actions);
  }
  private showHideDetailPanel(row: MatrixDynamicRowModel, options: ISurveyCreatorOptions) {
    const hasDetail = !!row.detailPanel;
    row.showHideDetailPanelClick();
    if (!!row.detailPanel && !hasDetail) {
      row.detailPanel.questions.forEach(q => {
        PropertyGridEditorCollection.onAfterSetValue(q.obj, q, q.property, options);
      });
    }
  }
  private getShowDetailActionIconName(row: MatrixDynamicRowModel) {
    return row.isDetailPanelShowing ? "icon-editing-finish" : "icon-edit";
  }
  protected addItem(creator: ISurveyCreatorOptions, obj: Base, question: QuestionMatrixDynamicModel) {
    question.addRow();
  }
  protected getHasAddButton(): boolean { return true; }
  public onGetQuestionTitleActions(obj: Base, options: any, creator: ISurveyCreatorOptions): void {
    if (!this.getHasAddButton()) return;
    const question: QuestionMatrixDynamicModel = options.question;
    options.actions.push({
      id: "add-item",
      iconName: "icon-add",
      iconSize: "auto",
      title: question.addRowText,
      showTitle: false,
      action: () => this.addItem(creator, obj, question),
      enabled: <any>new ComputedUpdater<boolean>(() => (<QuestionMatrixDropdownModelBase>question).canAddRow)
    });
  }
  protected createNewItem(
    matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty
  ): Base {
    matrix.visibleRows.forEach(row => row.hideDetailPanel());
    var json: any = {};
    var baseValue = this.getBaseValue(prop);
    var keyPropName = this.getKeyValue();
    if (!baseValue) {
      baseValue = "item";
    }
    var keyValue = null;
    if (!!baseValue && !!keyPropName) {
      var newName = PropertyGridEditorMatrix.getNewColumnName(
        matrix.value,
        keyPropName,
        baseValue
      );
      keyValue = newName;
    }
    const obj: Base = matrix.obj;
    var item = Serializer.createClass(this.getDefaultClassName(obj, prop), json);
    if (!!keyValue) {
      item[keyPropName] = keyValue;
    }
    if (!!this.getObjTypeName()) {
      item[this.getObjTypeName()] = item.getType();
    }
    const arr = obj[prop.name];
    const safeArr = Array.isArray(arr) ? arr : (Array.isArray(matrix.value) ? matrix.value : []);
    if (Serializer.isDescendantOf(item.getType(), "itemvalue")) {
      const nextText = getNextItemText(safeArr);
      if (nextText || !Serializer.isDescendantOf(item.getType(), "imageitemvalue")) {
        item.text = nextText;
      }
    }
    if (Serializer.isDescendantOf(item.getType(), "matrixdropdowncolumn")) {
      item.title = getNextColumnTitle(safeArr);
    }
    safeArr.push(item);
    if (safeArr != matrix.value) {
      matrix.value = safeArr;
    }
    return item;
  }
  protected getDefaultClassName(obj: Base, prop: JsonObjectProperty): string {
    return prop.className;
  }
  protected getBaseValue(prop: JsonObjectProperty): string {
    return prop.getBaseValue();
  }
  protected getKeyValue(): string {
    return "";
  }
  protected getColumnNames(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions,
    propGridDefinition: ISurveyPropertyGridDefinition
  ): Array<string> {
    var names = this.getPropertiesNames(obj, prop, options, propGridDefinition);
    if (!!names && names.length > 0) {
      return names;
    }
    return this.getDefaultListProperties(prop);
  }
  protected getColumnClassName(obj: Base, prop: JsonObjectProperty): string {
    return prop.className;
  }
  protected getPropertiesNames(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions,
    propGridDefinition: ISurveyPropertyGridDefinition
  ): Array<string> {
    var res = [];
    var properties = this.getDefinedListProperties(obj, prop, options, propGridDefinition);
    for (var i = 0; i < properties.length; i++) {
      res.push(properties[i].name);
    }
    if (res.length == 0) {
      res = this.getDefaulColumnNames();
    }
    return res;
  }
  protected getDefinedListProperties(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions,
    propGridDefinition: ISurveyPropertyGridDefinition
  ): Array<any> {
    if (!prop.className) {
      return [];
    }
    var newObj = Serializer.createClass(prop.className);
    if (!newObj) {
      return [];
    }
    var props = new SurveyQuestionProperties(
      newObj, <any>options, this.getColumnClassName(obj, prop),
      "list", obj, <any>prop, propGridDefinition
    );
    if (props.getTabs().length == 0) {
      return [];
    }
    return props.getTabs()[0].properties;
  }
  protected getDefaultListProperties(prop: JsonObjectProperty): Array<string> {
    var res = [];
    if (!!prop && !!prop.className) {
      var properties = Serializer.getProperties(prop.className);
      for (var i = 0; i < properties.length; i++) {
        if (SurveyHelper.isPropertyVisible(undefined, properties[i], undefined, "list")) {
          res.push(properties[i].name);
        }
      }
    }
    return res.length > 0 ? res : this.getDefaulColumnNames();
  }
  protected getDefaulColumnNames(): Array<string> {
    return [];
  }
  protected getObjTypeName(): string {
    return "";
  }
  protected hasDetailPanel(): boolean {
    return !this.getEditItemAsStandAlone();
  }
  private hasPropertiesInDetail: boolean;
  protected setupMatrixQuestion(obj: Base, matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty, propGridDefinition: ISurveyPropertyGridDefinition
  ) {
    this.hasPropertiesInDetail =
      this.hasDetailPanel() && this.calcHasPropertiesInDetail(matrix, prop, propGridDefinition);
    matrix.onHasDetailPanelCallback = (
      row: MatrixDropdownRowModelBase
    ): boolean => {
      return (<any>row).allowEditRow !== false && this.hasPropertiesInDetail;
    };
    matrix.onCreateDetailPanelRenderedRowCallback = (
      renderedRow: QuestionMatrixDropdownRenderedRow
    ) => {
      // survey-core adds the empty leading cell only when rows have start actions (e.g. the drag handle),
      // so the panel cell's index varies: find it and let it span the whole row
      const panelCell = renderedRow.cells.filter(cell => cell.hasPanel)[0];
      if (!panelCell) return;
      panelCell.colSpans = renderedRow.cells.reduce((sum, cell) => sum + cell.colSpans, 0);
      renderedRow.cells = [panelCell];
    };
    const q: any = matrix;
    matrix.onCreateDetailPanelCallback = (
      row: MatrixDropdownRowModelBase,
      panel: PanelModel
    ) => {
      new PropertyJSONGenerator(row.editingObj, q.creatorOptions,
        q.obj, q.property, propGridDefinition
      ).setupObjPanel(panel, true);
    };
    matrix.allowRowReorder = this.getAllowRowDragDrop(prop) && !matrix.isReadOnly;
    if (!!q.creatorOptions) {
      this.setupUsingOptions(obj, matrix, q.creatorOptions, prop);
    }
    if (!!prop.uniquePropertyName) {
      const column = matrix.getColumnByName(prop.uniquePropertyName);
      if (!!column) {
        column.isUnique = true;
      }
    }
  }
  protected getAllowRowDragDrop(prop: JsonObjectProperty): boolean { return false; }
  private calcHasPropertiesInDetail(matrix: QuestionMatrixDynamicModel, prop: JsonObjectProperty,
    propGridDefinition: ISurveyPropertyGridDefinition
  ): boolean {
    if (!prop.className) return true;
    var newObj = Serializer.createClass(prop.className);
    if (!newObj) return true;
    var panel = new PanelModel("");
    new PropertyJSONGenerator(newObj, (<any>matrix).creatorOptions, (<any>matrix).obj,
      prop, propGridDefinition
    ).setupObjPanel(panel, true);
    return panel.elements.length > 0;
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions,
    propGridDefinition?: ISurveyPropertyGridDefinition
  ): any {
    return this.getMatrixJSON(obj, prop,
      this.getColumnNames(obj, prop, options, propGridDefinition),
      options, propGridDefinition
    );
  }
  protected getMatrixJSON(obj: Base, prop: JsonObjectProperty, propNames: Array<string>,
    options: ISurveyCreatorOptions, propGridDefinition: ISurveyPropertyGridDefinition
  ): any {
    var className = prop.className;
    if (!className) {
      className = prop.baseClassName;
    }
    const columns = this.getColumnsJSON(obj, prop, propNames, options, propGridDefinition);
    const res: any = {
      type: "matrixdynamic",
      detailPanelMode: "underRow",
      cellType: "text",
      rowCount: 0,
      keyName: this.getKeyName(prop),
      columns: columns,
      showHeader: columns.length > 1,
      hideColumnsIfEmpty: true,
      addRowText: this.getAddRowText(prop),
      keyDuplicationError: editorLocalization.getString(
        "pe.propertyIsNoUnique"
      ),
      noRowsText: this.getnoRowsText(prop)
    };
    if (this.getShowDetailPanelOnAdding()) {
      res.detailPanelShowOnAdding = true;
    }
    const minRowCount = this.getMinimumRowCount(obj, prop, options);
    const maxRowCount = this.getMaximumRowCount(obj, prop, options);
    if (minRowCount > 0) {
      res.minRowCount = minRowCount;
    }
    if (maxRowCount > 0) {
      res.maxRowCount = maxRowCount;
    }
    return res;
  }
  protected getnoRowsText(prop: JsonObjectProperty) {
    let locName = "pe.listIsEmpty";
    const propLocName = locName + "@" + prop.name;
    if (!!editorLocalization.hasString(propLocName)) {
      locName = propLocName;
    }
    return editorLocalization.getString(locName);
  }
  protected getMinimumRowCount(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): number {
    return -1;
  }
  protected getMaximumRowCount(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): number {
    return -1;
  }
  protected filterPropertyNames(propNames: Array<string>, options: ISurveyCreatorOptions): Array<string> {
    return propNames;
  }
  private getClassNameByProp(prop: JsonObjectProperty): string {
    return !!prop.className ? prop.className : prop.baseClassName;
  }
  private getKeyName(prop: JsonObjectProperty): string {
    const className = this.getClassNameByProp(prop);
    if (!className) return "";
    const props = Serializer.getProperties(className);
    for (let i = 0; i < props.length; i++) {
      if (props[i].isUnique) return props[i].name;
    }
    return "";
  }
  protected getColumnsJSON(obj: Base, prop: JsonObjectProperty, propNames: Array<string>,
    options: ISurveyCreatorOptions, propGridDefinition: ISurveyPropertyGridDefinition
  ) {
    var res = new PropertyJSONGenerator(obj, options, undefined, undefined, propGridDefinition).createColumnsJSON(
      this.getClassNameByProp(prop),
      this.filterPropertyNames(propNames, options)
    );
    for (var i = 0; i < res.length; i++) {
      if (res[i].cellType == "comment") {
        res[i].cellType = "text";
      }
    }
    return res;
  }
  protected getEditItemAsStandAlone(): boolean {
    return false;
  }
  protected getShowDetailPanelOnAdding(): boolean {
    return false;
  }
  protected getAddRowText(prop: JsonObjectProperty): string {
    var customLocStrName = "pe.addNew@" + prop.name;
    if (editorLocalization.hasString(customLocStrName)) {
      return editorLocalization.getString(customLocStrName);
    }
    return editorLocalization.getString("pe.addNew");
  }
  private setupUsingOptions(
    obj: Base,
    matrix: QuestionMatrixDynamicModel,
    options: ISurveyCreatorOptions,
    prop: JsonObjectProperty
  ) {
    var evtOptions = {
      allowAddRemoveItems: true,
      allowRemoveAllItems: true,
      showTextView: true,
      allowBatchEdit: true
      // options.itemsEntryType
    };
    options.onSetPropertyEditorOptionsCallback(prop.name, <any>obj, evtOptions);
    if (!evtOptions.allowAddRemoveItems) {
      matrix.allowAddRows = false;
      matrix.allowRemoveRows = false;
    }
    (<any>matrix).allowRemoveAllItems = evtOptions.allowRemoveAllItems;
    (<any>matrix).showTextView = evtOptions.showTextView;
    (<any>matrix).allowBatchEdit = evtOptions.allowBatchEdit;
  }
}

export class PropertyGridEditorMatrixItemValues extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return (
      prop.isArray && Serializer.isDescendantOf(prop.className, "itemvalue") && prop.name != "rateValues"
    );
  }
  protected excludeTextPropertyName(propNames: Array<string>, options: ISurveyCreatorOptions): Array<string> {
    const hideText = options?.inplaceEditChoiceValues;
    return !!hideText ? propNames.filter(p => p !== "text") : propNames;
  }
  protected filterPropertyNames(propNames: Array<string>, options: ISurveyCreatorOptions): Array<string> {
    return this.excludeTextPropertyName(propNames, options).filter(p => p != "icon");
  }
  public isPropertyEditorSetupEnabled(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): boolean {
    if ((<any>question).showTextView === false) return false;
    var matrix = <QuestionMatrixDynamicModel>question;
    var column = matrix.getColumnByName("value");
    var items = question.value;
    return (
      !!column &&
      column.isVisible &&
      !column.readOnly &&
      !this.hasMultipleLanguage(items) &&
      !this.isNonDefaultSurveyLocale(obj)
    );
  }
  private isNonDefaultSurveyLocale(obj: Base): boolean {
    const locale = obj?.getSurvey()?.getLocale();
    return !!locale && locale !== surveyLocalization.defaultLocale;
  }
  protected getAllowRowDragDrop(prop: JsonObjectProperty): boolean { return true; }
  public createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    const names = (<any>question).columns.filter(c => !c.readOnly).map(c => c.name);
    const addProperty = (name: string) => {
      const prop = Serializer.findProperty("itemvalue", name);
      if (prop && prop.visible) {
        names.push(name);
      }
    };
    addProperty("visibleIf");
    addProperty("enableIf");
    return new FastEntryEditor(obj[prop.name], options, prop.className, names);
  }
  public canClearPropertyValue(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): boolean {
    return (<any>question).allowRemoveAllItems !== false;
  }
  public clearPropertyValue(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): void {
    var arr = obj[prop.name];
    if (!Array.isArray(arr)) {
      return;
    }
    arr.splice(0, arr.length);
  }
  protected getColumnClassName(obj: Base, prop: JsonObjectProperty): string {
    return obj.getType() + "@" + prop.name;
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["value", "text"];
  }
  protected getKeyValue(): string {
    return "value";
  }
  protected getMatrixJSON(obj: Base, prop: JsonObjectProperty, propNames: Array<string>,
    options: ISurveyCreatorOptions, propGridDefinition: ISurveyPropertyGridDefinition
  ): any {
    let res = super.getMatrixJSON(obj, prop, propNames, options, propGridDefinition);
    if (prop.name === "rateValues" && res.columns[0].name == "icon") res.showHeader = res.columns > 3;
    return res;
  }
  protected getMinimumRowCount(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): number {
    if (prop.name === "choices") return options.minChoices;
    return super.getMinimumRowCount(obj, prop, options);
  }
  protected getMaximumRowCount(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): number {
    if (prop.name === "choices") return options.maxChoices;
    if (prop.name === "rows") return options.maxRows;
    if (prop.name === "columns") return options.maxColumns;
    if (prop.name === "rateValues") return options.maxRateValues;
    return super.getMaximumRowCount(obj, prop, options);
  }
  private hasMultipleLanguage(items: Array<ItemValue>): boolean {
    if (!items || !Array.isArray(items)) {
      return false;
    }
    for (var i = 0; i < items.length; i++) {
      if (items[i].locText.hasNonDefaultText()) {
        return true;
      }
    }
    return false;
  }
  public onMatrixCellCreated(obj: Base, options: any): void {
    super.onMatrixCellCreated(obj, options);
    function updateHtml(question, value) {
      const newValue = renamedIcons[value] || value;
      question.html = "<div class=\"spg-smiley-icon\"><svg><use xlink:href=\"#icon-" + newValue + "\"></use></svg></div>";
    }
    function changeValueCallback(sender, options) {
      if (options.name != "value") return;
      updateHtml(sender, options.newValue);
    }
    if (obj instanceof QuestionRatingModel && options.columnName == "icon") {
      updateHtml(options.cellQuestion, options.cellQuestion.value);
      options.cellQuestion.onPropertyChanged.add(changeValueCallback);
    }
  }
  public onMatrixCellValueChanged(obj: Base, options: any) {
    if (obj instanceof QuestionRatingModel && options.columnName == "icon") {
      //options.cellQuestion.html = "<svg style='fill: red'><use xlink:href=\"#" + options.cellQuestion.value + "\"></use></svg>";
      options.cellQuestion.html = options.cellQuestion.value;
    }
  }
}

export class PropertyGridEditorMatrixRateValues extends PropertyGridEditorMatrixItemValues {
  public fit(prop: JsonObjectProperty): boolean {
    return (
      prop.isArray && Serializer.isDescendantOf(prop.className, "itemvalue") && prop.name == "rateValues"
    );
  }

  private updateAllowAddRemove(matrixQuestion: QuestionMatrixDynamicModel, obj: QuestionRatingModel) {
    matrixQuestion.allowRemoveRows = QuestionRatingAdornerViewModel.allowRemoveForElement(obj);
    matrixQuestion.allowAddRows = QuestionRatingAdornerViewModel.allowAddForElement(obj, matrixQuestion.maxRowCount);
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty,
    options?: ISurveyCreatorOptions, propGridDefinition?: ISurveyPropertyGridDefinition) {
    super.onCreated(obj, question, prop, options, propGridDefinition);
    const matrixQuestion = <QuestionMatrixDynamicModel>question;
    const ratingQuestion = <QuestionRatingModel>getQuestionFromObj(obj as SurveyElement);
    this.updateAllowAddRemove(matrixQuestion, ratingQuestion);
    obj.onPropertyChanged.add((sender, options) => {
      if (options.name == "rateCount" || options.name == "rateType") {
        this.updateAllowAddRemove(matrixQuestion, ratingQuestion);
      }
    });
  }

  public onGetQuestionTitleActions(obj: Base, options: any, creator: ISurveyCreatorOptions): void {
    const clearAction = options.actions.filter((a) => a.id == "property-grid-clear")[0];
    if (clearAction) clearAction.visible = false;
    super.onGetQuestionTitleActions(obj, options, creator);
  }

  protected filterPropertyNames(propNames: Array<string>, options: ISurveyCreatorOptions): Array<string> {
    return this.excludeTextPropertyName(propNames, options);
  }
}
export class PropertyGridEditorMatrixCustomLabels extends PropertyGridEditorMatrixItemValues {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "sliderlabel[]";
  }
  public onMatrixCellValidate(obj: Base, options: any): string {
    const newVal = options.value;
    if (!Helpers.isNumber(newVal)) return;
    if (options.columnName == "value" && !options.error) {
      const val = Helpers.getNumber(newVal);
      const errorVal = this.getMinMaxError(obj, val);
      if (!!errorVal) {
        options.error = options.question.getLocalizationString(errorVal[0]).replace("{0}", errorVal[1]);
      }
    }
  }
  private getMinMaxError(obj: Base, val: number): [string, number] {
    const min = (<any>obj).min;
    const max = (<any>obj).max;
    if (val < min) return ["minError", min];
    if (val > max) return ["maxError", max];
    return null;
  }
}

export class PropertyGridEditorMatrixColumns extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "matrixdropdowncolumns";
  }
  protected getEditItemAsStandAlone(): boolean {
    return true;
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["name", "title"];
  }
  protected getKeyValue(): string {
    return "name";
  }
  protected getBaseValue(prop: JsonObjectProperty): string {
    return "column";
  }
  protected getMaximumRowCount(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): number {
    return options.maxColumns;
  }
  protected getAllowRowDragDrop(prop: JsonObjectProperty): boolean { return true; }
}

export class PropertyGridEditorMatrixLayoutColumns extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "panellayoutcolumns";
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["width", "questionTitleWidth"];
  }
  public onMatrixCellCreated(obj: Base, options: any) {
    super.onMatrixCellCreated(obj, options);

    const q = options.cellQuestion;
    q.textUpdateMode = "onTyping";
  }
  protected getHasAddButton(): boolean { return false; }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options?: ISurveyCreatorOptions, propGridDefinition?: ISurveyPropertyGridDefinition) {
    super.onCreated(obj, question, prop, options, propGridDefinition);
    const matrixQuestion = <QuestionMatrixDynamicModel>question;
    matrixQuestion.allowRemoveRows = false;
    matrixQuestion.allowAddRows = false;
  }
}

export class PropertyGridEditorMatrixPages extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "surveypages";
  }
  protected addItem(creator: ISurveyCreatorOptions, obj: Base, question: QuestionMatrixDynamicModel) {
    if (creator.canAddPage()) {
      super.addItem(creator, obj, question);
    }
  }
  protected getColumnClassName(obj: Base, prop: JsonObjectProperty): string {
    return "page@" + obj.getType();
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["name", "title"];
  }
  protected hasDetailPanel(): boolean {
    return false;
  }
  protected getKeyValue(): string {
    return "name";
  }
  protected getBaseValue(prop: JsonObjectProperty): string {
    return editorLocalization.getString("ed.newPageName");
  }
  protected getAllowRowDragDrop(prop: JsonObjectProperty): boolean { return true; }
}

export class PropertyGridEditorMatrixCalculatedValues extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "calculatedvalues";
  }
  protected getColumnClassName(obj: Base, prop: JsonObjectProperty): string {
    return "calculatedvalue@items";
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["name"];
  }
  protected getKeyValue(): string {
    return "name";
  }
  protected getBaseValue(prop: JsonObjectProperty): string {
    return "var";
  }
  protected getShowDetailPanelOnAdding(): boolean {
    return true;
  }
  protected setupMatrixQuestion(obj: Base, matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty, propGridDefinition: ISurveyPropertyGridDefinition): void {
    super.setupMatrixQuestion(obj, matrix, prop, propGridDefinition);
    matrix.useCaseSensitiveComparison = false;
  }
}
// The Filter Control's presets: name and title in the row (definition "filter@presets"), the rest in the
// detail panel ("filterpreset@presets"). The order of the rows is the order of the chips.
export class PropertyGridEditorMatrixFilterPresets extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "filterpreset[]";
  }
  protected getColumnClassName(obj: Base, prop: JsonObjectProperty): string {
    return obj.getType() + "@" + prop.name;
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["name", "title"];
  }
  protected getKeyValue(): string {
    return "name";
  }
  protected getBaseValue(prop: JsonObjectProperty): string {
    return "preset";
  }
  protected getAllowRowDragDrop(prop: JsonObjectProperty): boolean {
    return true;
  }
  // Not pe.addNew@items / pe.listIsEmpty@items: the items of a multiple text question use those.
  protected getAddRowText(prop: JsonObjectProperty): string {
    return editorLocalization.getString("pe.addNew@filterPresets");
  }
  protected getnoRowsText(prop: JsonObjectProperty): string {
    return editorLocalization.getString("pe.listIsEmpty@filterPresets");
  }
  // A preset renamed or retitled in its row: the Default preset list names it anew. The grid updates
  // the editors that depend on "presets" when the array changes, not when a row of it does.
  public onMatrixCellValueChanged(obj: Base, options: any): void {
    const grid = !!options.question ? options.question.survey : undefined;
    const editor: any = !!grid ? grid.getQuestionByName("defaultPreset") : undefined;
    if (!!editor && !!editor.property) {
      PropertyGridEditorCollection.onMasterValueChanged(obj, editor.property, editor);
    }
  }
}
// The Filter Control's fields: Field name and Field title in the row, Available operators and Show in quick
// filters in its details (filterfield@fields). The rows are the entries of fields, in their order; any row can be
// removed or moved. A control whose JSON leaves fields out filters by the visible fields of its target: the table
// shows them as rows whose entries are not in fields (getDesignFieldEntries), and the first change writes those rows
// into fields outside the undo history before it is made - its undo brings back that list (survey-library spec G).
// Field name is a dropdown of field names while a field of the target is free - every row's choices are the free
// fields and its own name - and a text box otherwise, in every row at once. The column changes its cell type after
// the matrix's own add or remove, never in the middle of one: the rows are rebuilt by the change.
const filterFieldsReleaseKey = "filterFieldsRelease";
const filterFieldsSignatureKey = "filterFieldsSignature";
const filterFieldsDesignEntriesKey = "filterFieldsDesignEntries";
const filterFieldsClearingKey = "filterFieldsClearing";
const filterFieldsTargetKey = "filterFieldsTarget";
const filterFieldsOptionsKey = "filterFieldsOptions";
const filterFieldsDefiningKey = "filterFieldsDefining";
const filterFieldsRowOperationKey = "filterFieldsRowOperation";
export class PropertyGridEditorMatrixFilterFields extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "filterfield[]";
  }
  protected getColumnClassName(obj: Base, prop: JsonObjectProperty): string {
    return obj.getType() + "@" + prop.name;
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["name", "title"];
  }
  protected getKeyValue(): string {
    return "name";
  }
  protected getBaseValue(prop: JsonObjectProperty): string {
    return "field";
  }
  protected getAddRowText(prop: JsonObjectProperty): string {
    return editorLocalization.getString("pe.addNew@filterFields");
  }
  protected getnoRowsText(prop: JsonObjectProperty): string {
    return editorLocalization.getString("pe.listIsEmpty@filterFields");
  }
  protected getAllowRowDragDrop(prop: JsonObjectProperty): boolean { return true; }
  protected getColumnsJSON(obj: Base, prop: JsonObjectProperty, propNames: Array<string>,
    options: ISurveyCreatorOptions, propGridDefinition: ISurveyPropertyGridDefinition
  ): Array<any> {
    const res = super.getColumnsJSON(obj, prop, propNames, options, propGridDefinition);
    const rows = typeof (<any>obj).getDesignFieldEntries === "function" ? (<any>obj).getDesignFieldEntries() : this.getFields(obj);
    res.forEach((column: any): void => {
      if (column.name === "name") {
        column.cellType = this.getNameCellType(obj, rows);
        if (column.cellType === "dropdown") {
          column.allowCustomChoices = true;
        }
      }
    });
    return res;
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty,
    options?: ISurveyCreatorOptions, propGridDefinition?: ISurveyPropertyGridDefinition): void {
    super.onCreated(obj, question, prop, options, propGridDefinition);
    const matrix = <QuestionMatrixDynamicModel>question;
    matrix[filterFieldsOptionsKey] = options;
    // While fields left out are written (defineFields) the rows stay as they are: the write comes in the middle of
    // the matrix's own change - a row added, a cell changed - and a refresh there would lose the row it is adding.
    matrix.valueFromDataCallback = (): Array<Base> => !!matrix[filterFieldsClearingKey] ? [] :
      (!!matrix[filterFieldsDefiningKey] ? matrix.value : this.getRows(obj, matrix));
    // The rows as the table has them now: a row removed or moved is a change of fields. Fields left out are
    // written first, as the rows were, outside the undo history. rows is the matrix's own value, which that
    // write refreshes in place: it is copied before.
    matrix.valueToDataCallback = (rows: Array<Base>): Array<Base> => {
      const list = (Array.isArray(rows) ? rows : []).filter((entry: Base): boolean => !!entry);
      // Fewer rows: the table's own remove, which ends in onMatrixRowRemoved (a move keeps the count).
      if (list.length < this.getRows(obj, matrix, false).length) {
        matrix[filterFieldsRowOperationKey] = true;
      }
      this.defineFields(obj, matrix);
      return list;
    };
    // A change of a cell or of a question in a row's details: the same, before the change is written.
    matrix.cellValueChangingCallback = (row: any, columnName: string, value: any, oldValue: any): any => {
      if (!Helpers.isTwoValueEquals(value, oldValue)) {
        this.defineFields(obj, matrix);
      }
      return value;
    };
    this.updateRows(obj, matrix, true);
    // A column added to the target, a new target or a change of fields from elsewhere changes the rows. The
    // Creator; the grid of a standalone PropertyGridModel has no onModified.
    const update = (): void => { this.updateRows(obj, matrix); };
    const onModified = !!options ? (<any>options).onModified : undefined;
    if (!!onModified && typeof onModified.add === "function") {
      onModified.add(update);
      matrix[filterFieldsReleaseKey] = (): void => { onModified.remove(update); };
    }
    // A row removed or added frees or takes a name: the other rows' Field name follow.
    obj.registerPropertyChangedHandlers(["fields"], (): void => { this.updateNameChoices(obj, matrix); }, this.getNamesKey(matrix));
  }
  public onDisposing(obj: Base, question: Question, prop: JsonObjectProperty): void {
    const release = question[filterFieldsReleaseKey];
    if (typeof release === "function") {
      release();
    }
    question[filterFieldsReleaseKey] = undefined;
    obj.unregisterPropertyChangedHandlers(["fields"], this.getNamesKey(question));
  }
  public onMatrixCellCreated(obj: Base, options: any): void {
    super.onMatrixCellCreated(obj, options);
    const entry = options.row.editingObj;
    if (!entry) return;
    const question = options.cellQuestion;
    if (options.columnName === "name" && question.getType() === "dropdown") {
      // An entry is named: a cleared Field name would leave an entry of no field.
      question.allowClear = false;
      this.setNameChoices(obj, question, entry, this.getRows(obj, options.question, false));
    }
    if (options.columnName === "title") {
      question.placeholder = new ComputedUpdater<string>(() => this.getTitlePlaceholder(obj, entry));
    }
  }
  // A new name: updateRows refreshes the rows and Field name with them (syncNameEditor).
  public onMatrixCellValueChanged(obj: Base, options: any): void {
    this.updateRows(obj, options.question);
  }
  // The end of the table's own add or remove: Field name may change its cell type now.
  public onMatrixRowAdded(obj: Base, options: any): void {
    this.endRowOperation(obj, options.question);
  }
  public onMatrixRowRemoved(obj: Base, options: any): void {
    this.endRowOperation(obj, options.question);
  }
  private endRowOperation(obj: Base, matrix: QuestionMatrixDynamicModel): void {
    matrix[filterFieldsRowOperationKey] = false;
    this.syncNameEditor(obj, matrix);
  }
  // The rows first: the matrix tells the added row by the rows it has built. A rendered table has built
  // them; the title's Add may come before.
  protected addItem(creator: ISurveyCreatorOptions, obj: Base, question: QuestionMatrixDynamicModel): void {
    question.visibleRows;
    super.addItem(creator, obj, question);
  }
  // Add field: the first field of the target no row has taken (as sortCriteria's Add does), else field1.
  protected createNewItem(matrix: QuestionMatrixDynamicModel, prop: JsonObjectProperty): Base {
    matrix.visibleRows.forEach(row => row.hideDetailPanel());
    const obj: Base = matrix.obj;
    matrix[filterFieldsRowOperationKey] = true;
    this.defineFields(obj, matrix);
    const item = Serializer.createClass(prop.className);
    item.name = this.getFreeFieldName(obj) ||
      PropertyGridEditorMatrix.getNewColumnName(this.getFields(obj), "name", this.getBaseValue(prop));
    this.getFields(obj).push(item);
    return item;
  }
  private getFields(obj: Base): Array<Base> {
    return (<any>obj).fields || [];
  }
  private getTargetFields(obj: Base): Array<any> {
    return typeof (<any>obj).getTargetFilterFields === "function" ? (<any>obj).getTargetFilterFields() : [];
  }
  private getFieldTitle(field: any): string {
    return !!field.locTitle && field.locTitle.textOrHtml || field.name;
  }
  private getNamesKey(matrix: Question): string {
    return "filterFieldsNames_" + matrix.id;
  }
  // Fields left out of the JSON: the rows the table shows become the entries, in their order, outside the undo
  // history - the change that follows is the undo step, and its undo brings back this list. A grid of its own
  // has no undo controller.
  private defineFields(obj: Base, matrix: QuestionMatrixDynamicModel): void {
    if ((<any>obj).isFieldsDefined !== false) return;
    const rows = this.getRows(obj, matrix, false);
    const options: any = matrix[filterFieldsOptionsKey];
    const ctrl = !!options ? options.undoRedoController : undefined;
    const ignore = !!ctrl && ctrl.ignoreChanges;
    if (!!ctrl) ctrl.ignoreChanges = true;
    matrix[filterFieldsDefiningKey] = true;
    try {
      (<any>obj).fields = rows;
    } finally {
      matrix[filterFieldsDefiningKey] = false;
      if (!!ctrl) ctrl.ignoreChanges = ignore;
    }
  }
  // The rows: the entries, or - fields left out - an entry per visible field of the target. The same entry for
  // the same field every time: the matrix follows its rows by their objects.
  private getRows(obj: Base, matrix: QuestionMatrixDynamicModel, prepare: boolean = true): Array<Base> {
    const entries: Array<any> = typeof (<any>obj).getDesignFieldEntries === "function"
      ? (<any>obj).getDesignFieldEntries() : [].concat(this.getFields(obj));
    const fields = this.getFields(obj);
    const cache: { [name: string]: Base } = matrix[filterFieldsDesignEntriesKey] || {};
    const res = entries.map((entry: any): Base => {
      if (fields.indexOf(entry) > -1) return entry;
      const cached: any = cache[entry.name];
      return !!cached && fields.indexOf(cached) < 0 && cached.designOwner === obj ? cached : entry;
    });
    if (prepare) {
      const newCache: { [name: string]: Base } = {};
      res.forEach((entry: any): void => {
        if (fields.indexOf(entry) < 0) newCache[entry.name] = entry;
      });
      matrix[filterFieldsDesignEntriesKey] = newCache;
      matrix[filterFieldsSignatureKey] = this.getSignature(obj, res);
    }
    return res;
  }
  // Field name: the names of the fields of the target - valueName, else name, a nested field's path - a hidden one
  // too, but those another row has taken: a second entry of a name is the table's duplicate error. A field of the
  // record the target has no column for is the dropdown's own custom choice, as a typed name is: the dropdown makes
  // one only while the survey loads its data.
  private setNameChoices(obj: Base, question: any, entry: any, rows: Array<any>): void {
    const taken = rows.filter((row: any): boolean => row !== entry).map((row: any): string => row.name);
    const choices = this.getTargetFields(obj).filter((field: any): boolean => taken.indexOf(field.valueName) < 0)
      .map((field: any): any => ({ value: field.valueName, text: field.valueName }));
    const current = question.choices.map((choice: ItemValue): any => ({ value: choice.value, text: choice.text }));
    if (!Helpers.isTwoValueEquals(current, choices)) {
      question.choices = choices;
    }
    const name = entry.name;
    question.customChoices = !!name && !choices.some((choice: any): boolean => choice.value === name) ? [new ItemValue(name)] : [];
  }
  private updateNameChoices(obj: Base, matrix: QuestionMatrixDynamicModel): void {
    if (!matrix || matrix.isDisposed) return;
    const built: Array<any> = (<any>matrix).generatedVisibleRows;
    if (!Array.isArray(built)) return;
    const rows = this.getRows(obj, matrix, false);
    built.forEach((row: any): void => {
      const cell = row.cells.filter((c: any): boolean => c.column.name === "name")[0];
      if (!!cell && !!row.editingObj && cell.question.getType() === "dropdown") {
        this.setNameChoices(obj, cell.question, row.editingObj, rows);
      }
    });
  }
  // A field of the target no row names: then every row has something to pick besides its own name.
  private hasFreeField(obj: Base, rows: Array<any>): boolean {
    const taken = rows.map((row: any): string => row.name);
    return this.getTargetFields(obj).some((field: any): boolean => taken.indexOf(field.valueName) < 0);
  }
  private getNameCellType(obj: Base, rows: Array<any>): string {
    return this.hasFreeField(obj, rows) ? "dropdown" : "text";
  }
  // Field name as the rows are now: the other cell type (the column rebuilds the rows), or the choices anew.
  // Not in the middle of the table's own add or remove (filterFieldsRowOperationKey): its end calls it.
  private syncNameEditor(obj: Base, matrix: QuestionMatrixDynamicModel): void {
    if (!matrix || matrix.isDisposed || !!matrix[filterFieldsRowOperationKey]) return;
    const column = matrix.getColumnByName("name");
    if (!column) return;
    const cellType = this.getNameCellType(obj, this.getRows(obj, matrix, false));
    if (column.cellType !== cellType) {
      column.cellType = cellType;
      if (cellType === "dropdown") {
        (<any>column).allowCustomChoices = true;
      }
    } else {
      this.updateNameChoices(obj, matrix);
    }
  }
  // Field title's placeholder: the title of the field of the target the entry names, or the entry's name.
  private getTitlePlaceholder(obj: Base, entry: any): string {
    const field = typeof (<any>obj).findTargetFilterField === "function" ? (<any>obj).findTargetFilterField(entry.name) : undefined;
    return !!field ? this.getFieldTitle(field) : (entry.name || "");
  }
  private getFreeFieldName(obj: Base): string {
    const taken = this.getFields(obj).map((entry: any): string => entry.name);
    const free = this.getTargetFields(obj).filter((field: any): boolean => taken.indexOf(field.valueName) < 0)[0];
    return !!free ? free.valueName : undefined;
  }
  // The rows anew when they are not what the table shows: fields, the target or its fields changed.
  // Not otherwise - the table would close the details that are open.
  private updateRows(obj: Base, matrix: QuestionMatrixDynamicModel, force: boolean = false): void {
    if (!matrix || matrix.isDisposed) return;
    const rows = this.getRows(obj, matrix, false);
    const target = (<any>obj).targetQuestion;
    const isNewTarget = matrix[filterFieldsTargetKey] !== target;
    matrix[filterFieldsTargetKey] = target;
    if (!force && !isNewTarget && this.getSignature(obj, rows) === matrix[filterFieldsSignatureKey]) {
      // The same rows, but the target may have a field more or less (a column added or removed).
      this.syncNameEditor(obj, matrix);
      return;
    }
    if (!force && (isNewTarget || !this.isOneRowChange(matrix, rows))) {
      this.rebuildRows(obj, matrix);
    } else {
      matrix.updateValueFromSurvey(this.getFields(obj));
    }
    if (!force) {
      this.syncNameEditor(obj, matrix);
    }
  }
  // The matrix follows a live array by its objects: it keeps its rows for an array of the same length
  // and takes a change of one more or one less object for an insert or a remove of that object. So does
  // the table for a row added or removed, or a row's entry that joined fields. Rows replaced otherwise - a
  // new target, its fields changed - would keep the old rows, their entries and the old target's names
  // in Field name ("Select...").
  private isOneRowChange(matrix: QuestionMatrixDynamicModel, rows: Array<Base>): boolean {
    const built: Array<any> = (<any>matrix).generatedVisibleRows;
    if (!Array.isArray(built)) return true;
    const old = built.map((row: any): Base => row.editingObj);
    if (old.length === rows.length) return old.every((entry: Base, index: number): boolean => entry === rows[index]);
    if (Math.abs(old.length - rows.length) !== 1) return false;
    const longer = old.length > rows.length ? old : rows;
    const shorter = old.length > rows.length ? rows : old;
    let i = 0;
    while(i < shorter.length && longer[i] === shorter[i]) i++;
    for (let j = i; j < shorter.length; j++) {
      if (longer[j + 1] !== shorter[j]) return false;
    }
    return true;
  }
  // New rows through the matrix's own way of taking an array of another length: an empty one first,
  // then the rows. Nothing is written into fields: the value comes from the survey, it does not go to it.
  private rebuildRows(obj: Base, matrix: QuestionMatrixDynamicModel): void {
    matrix[filterFieldsClearingKey] = true;
    try {
      matrix.updateValueFromSurvey(this.getFields(obj));
    } finally {
      matrix[filterFieldsClearingKey] = false;
    }
    matrix.updateValueFromSurvey(this.getFields(obj));
  }
  // What a row is: its name, and the entry's place in fields where it has one.
  private getSignature(obj: Base, rows: Array<Base>): string {
    const fields = this.getFields(obj);
    return JSON.stringify(rows.map((entry: any): any => [entry.name, fields.indexOf(entry)]));
  }
}
// A preset's Allow checkboxes (allowEdit, allowDelete, allowCopy). A preset without a permission of its
// own (undefined) follows the control's, so the checkbox shows the permission in effect - the
// control's until the preset has one - and a click writes the preset's own. Registered after
// PropertyGridEditorUndefinedBoolean, which would fit these properties too and show Inherit / Yes / No.
const filterPresetControlPermissions: { [name: string]: string } = {
  allowEdit: "allowEditPresets", allowDelete: "allowDeletePresets", allowCopy: "allowAddPresets"
};
export class PropertyGridEditorFilterPresetPermission extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "boolean" && !!prop.classInfo && prop.classInfo.name === "filterpreset" &&
      !!filterPresetControlPermissions[prop.name];
  }
  // No default: a boolean question's default would be written into a preset that has no permission.
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "boolean", renderAs: "checkbox", titleLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty): void {
    const controlPropName = filterPresetControlPermissions[prop.name];
    question.valueFromDataCallback = (val: any): boolean => {
      if (typeof val === "boolean") return val;
      const control: any = (<any>obj).presetOwner;
      return !!control && !!control[controlPropName];
    };
    question.updateValueFromSurvey((<any>obj)[prop.name]);
    const control: Base = (<any>obj).presetOwner;
    if (!control) return;
    // A question in a row's details is not disposed through onDisposing: the handler takes itself off.
    const key = "filterPresetPermission_" + question.id;
    control.registerFunctionOnPropertyValueChanged(controlPropName, (): void => {
      if (question.isDisposed || obj.isDisposed) {
        control.unRegisterFunctionOnPropertyValueChanged(controlPropName, key);
        return;
      }
      question.updateValueFromSurvey((<any>obj)[prop.name]);
    }, key);
  }
}
export class PropertyGridEditorMatrixHtmlConditions extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "htmlconditions";
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["html"];
  }
  protected getShowDetailPanelOnAdding(): boolean {
    return true;
  }
}
export class PropertyGridEditorMatrixUrlConditions extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "urlconditions";
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["url"];
  }
  protected getShowDetailPanelOnAdding(): boolean {
    return true;
  }
}
export class PropertyGridEditorMatrixMutlipleTextItems extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "textitem[]";
  }
  protected getEditItemAsStandAlone(): boolean {
    return true;
  }
  protected getColumnClassName(obj: Base, prop: JsonObjectProperty): string {
    return "multipletext@items";
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["name"];
  }
  protected getKeyValue(): string {
    return "name";
  }
  protected getBaseValue(prop: JsonObjectProperty): string {
    return "item";
  }
  protected getAllowRowDragDrop(): boolean {
    return true;
  }
  public createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    var names = [];
    (<any>question).columns.forEach((col) => {
      names.push(col.name);
    });
    return new FastEntryEditorBase(obj[prop.name], options, prop.className, names);
  }
  public onMatrixCellCreated(obj: Base, options: any): void {
    super.onMatrixCellCreated(obj, options);
    const q = options.cellQuestion;
    if (!options.row.editingObj) return;
    const editor = options.row.editingObj.editor;
    if (!!editor && !!q.property) {
      editor.registerFunctionOnPropertyValueChanged(q.property.name, () => {
        q.value = Serializer.getObjPropertyValue(editor, q.property.name);
      });
    }
  } 0;
}

const sortAllowAddByOptionsKey = "sortCriteriaAllowAddByOptions";
const sortReleaseKey = "sortCriteriaRelease";

// sortCriteria (dynamic matrix, dynamic panel): a row per sort level, top first, edited in place - a
// row's editingObj is survey-core's SortCriterion from the question's array. The fields a level can sort
// by come from the question (getDesignSortFields) and are not reactive: a column's cell type or a
// template question added to a dynamic panel changes them without a property change the grid could
// observe. So the field choices and the Add state are refreshed on every Creator modification (undo/redo
// included), on a change of the array and after a cell edit.
export class PropertyGridEditorMatrixSortCriteria extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type === "sortcriteria";
  }
  protected getDefaulColumnNames(): Array<string> {
    return ["field", "direction"];
  }
  protected hasDetailPanel(): boolean {
    return false;
  }
  protected getAllowRowDragDrop(prop: JsonObjectProperty): boolean {
    return true;
  }
  // A cell is not set up by the dropdown editor, so the direction column gets its texts here
  protected getColumnsJSON(obj: Base, prop: JsonObjectProperty, propNames: Array<string>,
    options: ISurveyCreatorOptions, propGridDefinition: ISurveyPropertyGridDefinition) {
    const res = super.getColumnsJSON(obj, prop, propNames, options, propGridDefinition);
    res.filter(column => column.name === "direction" && Array.isArray(column.choices)).forEach(column => {
      column.choices = column.choices.map(item => {
        const value = item.value !== undefined ? item.value : item;
        return { value: value, text: editorLocalization.getPropertyValueInEditor("direction", value) };
      });
    });
    return res;
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty,
    options?: ISurveyCreatorOptions, propGridDefinition?: ISurveyPropertyGridDefinition): void {
    super.onCreated(obj, question, prop, options, propGridDefinition);
    const matrix = <QuestionMatrixDynamicModel>question;
    // onSetPropertyEditorOptions may have turned Add off: an unused field never turns it back on
    matrix[sortAllowAddByOptionsKey] = matrix.allowAddRows;
    this.updateAllowAddRows(obj, matrix, prop);
    const update = (): void => { this.updateFields(obj, matrix, prop); };
    obj.registerFunctionOnPropertyValueChanged(prop.name, update, this.getHandlerKey(matrix));
    // The Creator; the grid of a standalone PropertyGridModel has no onModified
    const onModified = !!options ? (<any>options).onModified : undefined;
    if (!!onModified && typeof onModified.add === "function") {
      onModified.add(update);
      matrix[sortReleaseKey] = (): void => { onModified.remove(update); };
    }
  }
  public onDisposing(obj: Base, question: Question, prop: JsonObjectProperty): void {
    obj.unRegisterFunctionOnPropertyValueChanged(prop.name, this.getHandlerKey(question));
    const release = question[sortReleaseKey];
    if (typeof release === "function") {
      release();
    }
    question[sortReleaseKey] = undefined;
  }
  public onMatrixCellCreated(obj: Base, options: any): void {
    super.onMatrixCellCreated(obj, options);
    if (!options.row.editingObj) return;
    const q = options.cellQuestion;
    // A cleared direction would show an empty cell while it sorts ascending
    q.allowClear = false;
    if (options.columnName === "field") {
      this.updateFieldChoices(q, options.row.editingObj);
    }
  }
  public onMatrixCellValueChanged(obj: Base, options: any): void {
    this.updateFields(obj, options.question, options.question.property);
  }
  // Add takes the first field no level uses; Add is off while there is none (updateAllowAddRows), so
  // the array never gets an item without a field from here.
  protected createNewItem(matrix: QuestionMatrixDynamicModel, prop: JsonObjectProperty): Base {
    const obj: Base = matrix.obj;
    const field = this.getUnusedField(obj, prop);
    if (!field) return null;
    const item = Serializer.createClass(prop.className);
    // Before the push: the push is the only change, one undo step
    item.field = field;
    const arr: Array<Base> = obj[prop.name];
    arr.push(item);
    if (arr != matrix.value) {
      matrix.value = arr;
    }
    return arr[arr.length - 1];
  }
  private updateFields(obj: Base, matrix: QuestionMatrixDynamicModel, prop: JsonObjectProperty): void {
    if (matrix.isDisposed) return;
    this.updateAllowAddRows(obj, matrix, prop);
    matrix.visibleRows.forEach(row => {
      const q = row.getQuestionByName("field");
      if (!!q && !!row.editingObj) {
        this.updateFieldChoices(q, row.editingObj);
      }
    });
  }
  private updateAllowAddRows(obj: Base, matrix: QuestionMatrixDynamicModel, prop: JsonObjectProperty): void {
    matrix.allowAddRows = matrix[sortAllowAddByOptionsKey] !== false && !!this.getUnusedField(obj, prop);
  }
  // A stored field that is not among the choices (stale or hand-written) is kept and shown as it is: it is
  // a choice of its own row only. Without it the dropdown would treat the value as invalid and clear it.
  private updateFieldChoices(q: Question, item: Base): void {
    let choices: Array<{ value: string, text: string }> = Serializer.findProperty(item.getType(), "field").getChoices(item);
    const field = item["field"];
    if (!!field && !choices.some(choice => choice.value === field)) {
      choices = choices.concat([{ value: field, text: field }]);
    }
    const current = (<QuestionDropdownModel>q).choices.map(choice => ({ value: choice.value, text: choice.text }));
    if (!Helpers.isTwoValueEquals(current, choices)) {
      (<QuestionDropdownModel>q).choices = choices;
    }
  }
  private getUnusedField(obj: Base, prop: JsonObjectProperty): string {
    const used = (obj[prop.name] || []).map((item: any) => item.field);
    const fields = (<QuestionRecordsModel><any>obj).getDesignSortFields();
    const unused = fields.filter(item => used.indexOf(item.field) < 0)[0];
    return !!unused ? unused.field : undefined;
  }
  // Two grids may show the same object: each question keeps its own handler.
  private getHandlerKey(question: Question): string {
    return "sortCriteriaGrid_" + question.id;
  }
}

export abstract class PropertyGridEditorMatrixMultipleTypes extends PropertyGridEditorMatrix {
  protected abstract getChoices(obj: Base): Array<any>;
  protected getColumnsJSON(obj: Base, prop: JsonObjectProperty, propNames: Array<string>,
    options: ISurveyCreatorOptions, propGridDefinition: ISurveyPropertyGridDefinition
  ) {
    var res = super.getColumnsJSON(obj, prop, propNames, options, propGridDefinition);
    if (!!this.getObjTypeName()) {
      res.unshift({
        name: this.getObjTypeName(),
        cellType: "dropdown"
      });
    }
    return res;
  }
  public onMatrixCellCreated(obj: Base, options: any) {
    super.onMatrixCellCreated(obj, options);
    if (!options.row.editingObj) return;
    const q = options.cellQuestion;
    if (options.columnName === this.getObjTypeName()) {
      q.allowClear = false;
      q.choices = this.getChoices(obj);
      q.value = options.row.editingObj.getType();
    }
  }
  public onMatrixCellValueChanged(obj: Base, options: any) {
    if (options.columnName !== this.getObjTypeName()) return;
    var index = options.question.visibleRows.indexOf(options.row);
    if (index < 0) return;
    var isDetailPanelShowing = options.row.isDetailPanelShowing;
    var objJSON = options.row.editingObj.toJSON();
    delete objJSON.type;
    var newItem = Serializer.createClass(options.value);
    newItem.fromJSON(objJSON);
    newItem[this.getObjTypeName()] = newItem.getType();
    options.row.hideDetailPanel(true);
    options.question.value.splice(index, 1, newItem);
    options.row.value = newItem;
    if (isDetailPanelShowing) {
      options.row.showDetailPanel();
    }
  }
  protected getShowDetailPanelOnAdding(): boolean {
    return true;
  }
}

export class PropertyGridEditorMatrixValidators extends PropertyGridEditorMatrixMultipleTypes {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "validators";
  }
  protected getObjTypeName(): string {
    return "validatorType";
  }
  protected getDefaultClassName(obj: Base, prop: JsonObjectProperty): string {
    let res = "expression";
    const question = <Question>obj;
    if (!!question.getSupportedValidators) {
      const validators = question.getSupportedValidators();
      if (validators.length > 0 && validators.indexOf(res) < 0) {
        res = validators[0];
      }
    }
    return res + "validator";
  }
  protected getChoices(obj: Base): Array<any> {
    var names = this.getSupportedValidators(obj);
    var res = [];
    for (var i = 0; i < names.length; i++) {
      var name = names[i] + "validator";
      res.push({
        value: name,
        text: editorLocalization.getValidatorName(name)
      });
    }
    return res;
  }
  private getSupportedValidators(obj: any): Array<string> {
    if (!obj) return [];
    if (obj.getSupportedValidators) return obj.getSupportedValidators();
    if (obj.getOriginalObj)
      return this.getSupportedValidators(obj.getOriginalObj());
    return [];
  }
}

export class PropertyGridEditorMatrixTriggers extends PropertyGridEditorMatrixMultipleTypes {
  private getAvailableTriggers(): Array<JsonMetadataClass> {
    return Serializer.getChildrenClasses("surveytrigger", true).filter(classObj => this.isTriggerVisible(classObj.name));
  }
  private isTriggerVisible(name: string): boolean {
    const postfix = "trigger";
    const pureName = name.substring(0, name.length - postfix.length);
    return name !== "visibletrigger" && settings.logic.invisibleTriggers.indexOf(pureName) < 0;
  }
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "triggers";
  }
  protected getObjTypeName(): string {
    return "triggerType";
  }
  protected getDefaultClassName(obj: Base, prop: JsonObjectProperty): string {
    const classes = this.getAvailableTriggers().map(tr => tr.name);
    if (!classes.length) return prop.name;

    if (classes.indexOf("runexpressiontrigger") !== -1) {
      return "runexpressiontrigger";
    } else {
      return classes[0];
    }
  }
  protected getAllowRowDragDrop(prop: JsonObjectProperty): boolean { return true; }
  protected getChoices(obj: Base): Array<any> {
    return this.getAvailableTriggers().map((tr) => { return { value: tr.name, text: editorLocalization.getTriggerName(tr.name) }; });
  }
  onUpdateQuestionCssClasses(obj: Base, options: any): void {
    super.onUpdateQuestionCssClasses(obj, options);
    options.cssClasses.root += " spg-table--triggers";
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorMatrixItemValues());
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixRateValues());
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixCustomLabels());
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixColumns());
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixPages());
PropertyGridEditorCollection.register(
  new PropertyGridEditorMatrixCalculatedValues()
);
PropertyGridEditorCollection.register(
  new PropertyGridEditorMatrixHtmlConditions()
);
PropertyGridEditorCollection.register(
  new PropertyGridEditorMatrixUrlConditions()
);
PropertyGridEditorCollection.register(
  new PropertyGridEditorMatrixMutlipleTextItems()
);
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixSortCriteria());
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixFilterPresets());
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixFilterFields());
PropertyGridEditorCollection.register(new PropertyGridEditorFilterPresetPermission());
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixValidators());
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixTriggers());

PropertyGridEditorCollection.register({
  fit: function (prop) {
    if (prop.name === "icon") {
      return prop.classInfo.name === "itemvalue";
    }
    return false;
  },
  getJSON: function (obj: Question) {
    return {
      "type": "html"
    };
  }
});
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixLayoutColumns());
