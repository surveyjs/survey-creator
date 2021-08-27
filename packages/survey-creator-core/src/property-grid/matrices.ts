import {
  Base,
  IAction,
  ItemValue,
  JsonObjectProperty,
  MatrixDropdownColumn,
  MatrixDropdownRowModelBase,
  MatrixDynamicRowModel,
  PanelModel,
  Question,
  QuestionMatrixDropdownRenderedRow,
  QuestionMatrixDynamicModel,
  Serializer
} from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { SurveyQuestionProperties } from "../question-editor/properties";
import { ISurveyCreatorOptions } from "../settings";
import { getNextValue } from "../utils/utils";
import { FastEntryEditor } from "./fast-entry";
import {
  IPropertyEditorSetup,
  PropertyGridEditor,
  PropertyGridEditorCollection,
  PropertyJSONGenerator,
} from "./index";
import {  updateMatrixRemoveAction} from "../utils/actions";

class SurveyHelper {
  public static getNewColumnName(
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
}

export abstract class PropertyGridEditorMatrix extends PropertyGridEditor {
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.onGetValueForNewRowCallBack = (
      sender: QuestionMatrixDynamicModel
    ): any => {
      return this.createNewItem(sender, prop);
    };
    this.setupMatrixQuestion(obj, <QuestionMatrixDynamicModel>question, prop);
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
        title: editorLocalization.getString("pe.edit"),
        component: "sv-action-bar-item",
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
      showDetailAction.showTitle = false;
      showDetailAction.location = "end";
      showDetailAction.action = () => {
        row.showHideDetailPanelClick();
        showDetailAction.iconName = row.isDetailPanelShowing
          ? "icon-editingfinish"
          : "icon-edit";
      };
      showDetailAction.visibleIndex = 0;
      row.onDetailPanelShowingChanged = () => {
        showDetailAction.iconName = this.getShowDetailActionIconName(row);
      };
    }
  }
  private getShowDetailActionIconName(row: MatrixDynamicRowModel) {
    return row.isDetailPanelShowing ? "icon-editingfinish" : "icon-edit";
  }
  public onGetQuestionTitleActions(obj: Base, options: any): void {
    const question: QuestionMatrixDynamicModel = options.question;
    options.titleActions.push({
      id: "add-item",
      iconName: "icon-add(small)",
      title: question.addRowText,
      showTitle: false,
      action: () => {
        question.addRow();
      },
      enabled: question.canAddRow
    });
  }
  public onValueChanged(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question
  ) {
    this.updateTitleActions(question);
  }
  protected updateTitleActions(question: Question) {
    const addAction: IAction = question.titleActions.filter(
      (item: IAction) => item.id === "add-item"
    )[0];
    if (!!addAction) {
      addAction.enabled = question.canAddRow;
    }
  }
  protected createNewItem(
    matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty
  ): Base {
    var json: any = {};
    var baseValue = this.getBaseValue(prop);
    var keyPropName = this.getKeyValue();
    if (!baseValue) {
      baseValue = "item";
    }
    var keyValue = null;
    if (!!baseValue && !!keyPropName) {
      var newName = SurveyHelper.getNewColumnName(
        matrix.value,
        keyPropName,
        baseValue
      );
      keyValue = newName;
    }
    var item = Serializer.createClass(this.getDefaultClassName(prop), json);
    if (!!keyValue) {
      item[keyPropName] = keyValue;
    }
    if (!!this.getObjTypeName()) {
      item[this.getObjTypeName()] = item.getType();
    }
    var arr = matrix.obj[prop.name];
    arr.push(item);
    if (arr != matrix.value) {
      matrix.value = arr;
    }
    return item;
  }
  protected getDefaultClassName(prop: JsonObjectProperty): string {
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
    options: ISurveyCreatorOptions
  ): Array<string> {
    var names = this.getPropertiesNames(obj, prop, options);
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
    options: ISurveyCreatorOptions
  ): Array<string> {
    var res = [];
    var properties = this.getDefinedListProperties(obj, prop, options);
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
    options: ISurveyCreatorOptions
  ): Array<any> {
    if (!prop.className) {
      return [];
    }
    var newObj = Serializer.createClass(prop.className);
    if (!newObj) {
      return [];
    }
    var props = new SurveyQuestionProperties(
      newObj,
      <any>options,
      this.getColumnClassName(obj, prop),
      "list",
      obj,
      <any>prop
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
        if (!this.isPropertyShownInList(properties[i])) {
          continue;
        }
        res.push(properties[i].name);
      }
    }
    return res.length > 0 ? res : this.getDefaulColumnNames();
  }
  protected getDefaulColumnNames(): Array<string> {
    return [];
  }
  private isPropertyShownInList(prop: JsonObjectProperty): boolean {
    return prop.visible && prop.showMode !== "form";
  }
  protected getObjTypeName(): string {
    return "";
  }
  protected hasDetailPanel(): boolean {
    return !this.getEditItemAsStandAlone();
  }
  private hasPropertiesInDetail: boolean;
  protected setupMatrixQuestion(
    obj: Base,
    matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty
  ) {
    this.hasPropertiesInDetail =
      this.hasDetailPanel() && this.calcHasPropertiesInDetail(matrix, prop);
    matrix.onHasDetailPanelCallback = (
      row: MatrixDropdownRowModelBase
    ): boolean => {
      return this.hasPropertiesInDetail;
    };
    matrix.onCreateDetailPanelRenderedRowCallback = (
      renderedRow: QuestionMatrixDropdownRenderedRow
    ) => {
      renderedRow.cells = [renderedRow.cells[1]];
      renderedRow.cells[0].colSpans += 2;
    };
    matrix.onCreateDetailPanelCallback = (
      row: MatrixDropdownRowModelBase,
      panel: PanelModel
    ) => {
      new PropertyJSONGenerator(
        row.editingObj,
        matrix.options,
        matrix.obj,
        matrix.property
      ).setupObjPanel(panel, true);
    };
    if (!!matrix.options) {
      this.setupUsingOptions(obj, matrix, matrix.options, prop);
    }
  }
  private calcHasPropertiesInDetail(
    matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty
  ): boolean {
    if (!prop.className) return true;
    var newObj = Serializer.createClass(prop.className);
    if (!newObj) return true;
    var panel = new PanelModel("");
    new PropertyJSONGenerator(
      newObj,
      matrix.options,
      matrix.obj,
      prop
    ).setupObjPanel(panel, true);
    return panel.elements.length > 0;
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return this.getMatrixJSON(
      obj,
      prop,
      this.getColumnNames(obj, prop, options),
      options
    );
  }
  protected getMatrixJSON(
    obj: Base,
    prop: JsonObjectProperty,
    propNames: Array<string>,
    options: ISurveyCreatorOptions
  ): any {
    var className = prop.className;
    if (!className) {
      className = prop.baseClassName;
    }
    var columns = this.getColumnsJSON(obj, prop, propNames, options);
    var res: any = {
      type: "matrixdynamic",
      detailPanelMode: "underRow",
      cellType: "text",
      rowCount: 0,
      columns: columns,
      addRowText: this.getAddRowText(prop),
      keyDuplicationError: editorLocalization.getString(
        "pe.propertyIsNoUnique"
      ),
      emptyRowsText: editorLocalization.getString("pe.listIsEmpty")
    };
    if (columns.length < 2) {
      res.showHeader = false;
    }
    if (this.getShowDetailPanelOnAdding()) {
      res.detailPanelShowOnAdding = true;
    }
    var maxRowCount = this.getMaximumRowCount(obj, prop, options);
    if (maxRowCount > 0) {
      res.maxRowCount = maxRowCount;
    }
    return res;
  }
  protected getMaximumRowCount(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): number {
    return -1;
  }
  protected getColumnsJSON(
    obj: Base,
    prop: JsonObjectProperty,
    propNames: Array<string>,
    options: ISurveyCreatorOptions
  ) {
    var className = prop.className;
    if (!className) {
      className = prop.baseClassName;
    }
    var res = new PropertyJSONGenerator(obj, options).createColumnsJSON(
      className,
      propNames
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
      showTextView: true
      // options.itemsEntryType
    };
    options.onSetPropertyEditorOptionsCallback(prop.name, <any>obj, evtOptions);
    if (!evtOptions.allowAddRemoveItems) {
      matrix.allowAddRows = false;
      matrix.allowRemoveRows = false;
    }
  }
}

export class PropertyGridEditorMatrixItemValues extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return (
      prop.isArray && Serializer.isDescendantOf(prop.className, "itemvalue")
    );
  }
  public isPropertyEditorSetupEnabled(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): boolean {
    var matrix = <QuestionMatrixDynamicModel>question;
    var column = matrix.getColumnByName("value");
    var items = question.value;
    return (
      !!column &&
      column.isVisible &&
      !column.readOnly &&
      !this.hasMultipleLanguage(items) &&
      !this.hasVisibleIfOrEnableIf(items)
    );
  }
  public setupMatrixQuestion(
    obj: Base,
    matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty
  ) {
    super.setupMatrixQuestion(obj, matrix, prop);
    matrix.showHeader = false;
    matrix.allowRowsDragAndDrop = true;
  }
  public createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    var names = [];
    question.columns.forEach((col) => {
      names.push(col.name);
    });
    return new FastEntryEditor(obj[prop.name], options, prop.className, names);
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
  protected getMaximumRowCount(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): number {
    if (prop.name === "choices") return options.maximumChoicesCount;
    if (prop.name === "rows") return options.maximumRowsCount;
    if (prop.name === "columns") return options.maximumColumnsCount;
    if (prop.name === "rateValues") return options.maximumRateValues;
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
  private hasVisibleIfOrEnableIf(items: Array<ItemValue>): boolean {
    if (!items || !Array.isArray(items)) {
      return false;
    }
    for (var i = 0; i < items.length; i++) {
      if (!!items[i].visibleIf || items[i].enableIf) {
        return true;
      }
    }
    return false;
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
    return options.maximumColumnsCount;
  }
  protected setupMatrixQuestion(
    obj: Base,
    matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty
  ) {
    super.setupMatrixQuestion(obj, matrix, prop);
    matrix.allowRowsDragAndDrop = true;
  }
}

export class PropertyGridEditorMatrixPages extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "surveypages";
  }
  public onMatrixAllowRemoveRow(obj: Base, options: any): boolean {
    var page = options.row.editingObj;
    if (!page || !page.survey) {
      return;
    }
    return page.survey.currentPage !== page;
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
    return "page";
  }
  protected setupMatrixQuestion(
    obj: Base,
    matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty
  ) {
    super.setupMatrixQuestion(obj, matrix, prop);
    matrix.allowRowsDragAndDrop = true;
  }
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
    return prop.type == "textitems";
  }
  /*
  protected getEditItemAsStandAlone(): boolean {
    return true;
  }*/
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
}

export abstract class PropertyGridEditorMatrixMultipleTypes extends PropertyGridEditorMatrix {
  protected abstract getChoices(obj: Base): Array<any>;
  protected getColumnsJSON(
    obj: Base,
    prop: JsonObjectProperty,
    propNames: Array<string>,
    options: ISurveyCreatorOptions
  ) {
    var res = super.getColumnsJSON(obj, prop, propNames, options);
    if (!!this.getObjTypeName()) {
      res.unshift({
        name: this.getObjTypeName(),
        cellType: "dropdown"
      });
    }
    return res;
  }
  public onMatrixCellCreated(obj: Base, options: any) {
    if (options.columnName != this.getObjTypeName()) {
      return;
    }
    options.cellQuestion.showOptionsCaption = false;
    options.cellQuestion.choices = this.getChoices(obj);
    options.cellQuestion.value = options.row.editingObj.getType();
  }
  public onMatrixCellValueChanged(obj: Base, options: any) {
    if (options.columnName != this.getObjTypeName()) {
      return;
    }
    var index = options.question.visibleRows.indexOf(options.row);
    if (index < 0) {
      return;
    }
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
  protected getDefaultClassName(prop: JsonObjectProperty): string {
    return "expressionvalidator";
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
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "triggers";
  }
  protected getObjTypeName(): string {
    return "triggerType";
  }
  protected getDefaultClassName(prop: JsonObjectProperty): string {
    return "runexpressiontrigger";
  }
  protected getChoices(obj: Base): Array<any> {
    var classes = Serializer.getChildrenClasses("surveytrigger", true);
    var res = [];
    for (var i = 0; i < classes.length; i++) {
      var name = classes[i].name;
      if (name == "visibletrigger") {
        continue;
      }
      res.push({
        value: name,
        text: editorLocalization.getTriggerName(name)
      });
    }
    return res;
  }
}

export class PropertyGridEditorBindings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "bindings";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    var res = {
      type: "matrixdropdown",
      rows: this.getRows(obj),
      columns: this.getColumns(obj, options)
    };
    return res;
  }
  public onMatrixCellCreated(obj: Base, options: any) {
    var bindingValue = obj.bindings.getValueNameByPropertyName(
      options.row.rowName
    );
    if (!!bindingValue) {
      options.cellQuestion.value = bindingValue;
    }
  }
  public onMatrixCellValueChanged(obj: Base, options: any) {
    obj.bindings.setBinding(options.row.rowName, options.value);
  }
  private getRows(obj: Base): Array<any> {
    var props = obj.bindings.getProperties();
    var res = [];
    for (var i = 0; i < props.length; i++) {
      var propName = props[i].name;
      res.push({
        value: propName,
        text: editorLocalization.getPropertyName(propName)
      });
    }
    return res;
  }
  private getColumns(obj: Base, options: ISurveyCreatorOptions): Array<any> {
    var prop = new JsonObjectProperty(null, "value");
    prop.type = "questionvalue";
    var json = PropertyGridEditorCollection.getJSON(obj, prop, options);
    json.cellType = json.type;
    delete json.type;
    json.name = "value";
    var res = [json];
    return res;
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorMatrixItemValues());
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

PropertyGridEditorCollection.register(new PropertyGridEditorBindings());
