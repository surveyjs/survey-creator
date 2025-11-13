import { Base, ComputedUpdater, Helpers, IAction, ISurveyData, ItemValue, JsonMetadata, JsonMetadataClass, JsonObjectProperty, MatrixDropdownColumn, MatrixDropdownRowModelBase, MatrixDynamicRowModel, PanelModel, Question, QuestionHtmlModel, QuestionMatrixDropdownModelBase, QuestionMatrixDropdownRenderedRow, QuestionMatrixDynamicModel, QuestionRatingModel, renamedIcons, Serializer, SurveyElement, SurveyModel } from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { SurveyQuestionProperties } from "../question-editor/properties";
import { ISurveyCreatorOptions, settings } from "../creator-settings";
import { getNextItemText, getNextValue, getQuestionFromObj } from "../utils/creator-utils";
import { FastEntryEditor, FastEntryEditorBase } from "./fast-entry";
import {
  IPropertyEditorSetup,
  PropertyGridEditor,
  PropertyGridEditorCollection,
  PropertyJSONGenerator,
} from "./index";
import { updateMatixActionsClasses, updateMatrixRemoveAction } from "../utils/actions";
import { QuestionRatingAdornerViewModel } from "../components/question-rating";
import { ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { SurveyHelper } from "../survey-helper";

Serializer.addProperty("itemvalue",
  {
    name: "icon", isSerializable: false, readOnly: true, visibleIndex: 0, visibleIf: (obj: ItemValue): boolean => {
      return obj &&
        obj.ownerPropertyName === "rateValues" &&
        obj.locOwner instanceof QuestionRatingModel &&
        obj.locOwner.rateType == "smileys";
    },
  });
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
    options: any,
    setObjFunc: (obj: Base) => void
  ) {
    const question: QuestionMatrixDynamicModel = options.question;
    const row: MatrixDynamicRowModel = options.row;
    const actions: IAction[] = options.actions;
    if (this.getEditItemAsStandAlone()) {
      actions.push({
        id: "svd-grid-edit-column",
        iconName: "icon-edit",
        title: editorLocalization.getString("pe.edit"),
        visibleIndex: 0,
        showTitle: false,
        location: "end",
        action: () => {
          var column = <MatrixDropdownColumn>options.row.editingObj;
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
        row.showHideDetailPanelClick();
        showDetailAction.iconName = row.isDetailPanelShowing ? "icon-editing-finish" : "icon-edit";
      };
      showDetailAction.visibleIndex = 0;
      showDetailAction.visible = this.hasPropertiesInDetail;
      row.onDetailPanelShowingChanged = () => {
        showDetailAction.iconName = this.getShowDetailActionIconName(row);
        showDetailAction.ariaExpanded = row.isDetailPanelShowing;
      };
    }
    updateMatixActionsClasses(actions);
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
    if (Serializer.isDescendantOf(item.getType(), "itemvalue")) {
      item.text = getNextItemText(arr);
    }
    arr.push(item);
    if (arr != matrix.value) {
      matrix.value = arr;
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
      renderedRow.cells = [renderedRow.cells[1]];
      renderedRow.cells[0].colSpans += 2;
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
  private getAddRowText(prop: JsonObjectProperty): string {
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
      !this.hasMultipleLanguage(items)
    );
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
    return super.getMaximumRowCount(obj, prop, options);
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
