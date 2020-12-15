import {
  Base,
  JsonObjectProperty,
  Serializer,
  Question,
  MatrixDropdownRowModelBase,
  QuestionMatrixDynamicModel,
  PanelModel,
  ExpressionValidator,
  SurveyTriggerRunExpression,
} from "survey-knockout";
import {
  PropertyGridEditorCollection,
  PropertyGridEditor,
  PropertyJSONGenerator,
} from "./index";
import { getNextValue } from "@survey/creator/utils/utils";
import { editorLocalization } from "@survey/creator/editorLocalization";
import { ISurveyCreatorOptions } from "@survey/creator/settings";

class SurveyHelper {
  public static getNewName(
    objs: Array<any>,
    keyPropName: string,
    baseName: string
  ): string | number {
    var arr = [];
    for (var i = 0; i < objs.length; i++) {
      arr.push([objs[i][keyPropName]]);
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
  protected createNewItem(
    matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty
  ): Base {
    var json: any = {};
    var baseValue = this.getBaseValue(prop);
    var keyPropName = this.getKeyValue();
    var keyValue = null;
    if (!!baseValue && !!keyPropName) {
      var newName = SurveyHelper.getNewName(
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
    matrix.value.push(item);
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
  protected getColumnNames(): Array<string> {
    return [];
  }
  protected getObjTypeName(): string {
    return "";
  }
  protected hasDetailPanel(): boolean {
    return true;
  }
  protected setupMatrixQuestion(
    obj: Base,
    matrix: QuestionMatrixDynamicModel,
    prop: JsonObjectProperty
  ) {
    matrix.onHasDetailPanelCallback = (
      row: MatrixDropdownRowModelBase
    ): boolean => {
      return this.hasDetailPanel();
    };
    matrix.onCreateDetailPanelCallback = (
      row: MatrixDropdownRowModelBase,
      panel: PanelModel
    ) => {
      new PropertyJSONGenerator(row.editingObj, null, matrix).setupObjPanel(
        panel,
        true
      );
    };
    if (!!matrix.options) {
      this.setupUsingOptions(obj, matrix, matrix.options, prop);
    }
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return this.getMatrixJSON(
      obj,
      prop,
      this.getColumnNames(),
      options,
      this.getObjTypeName()
    );
  }
  protected getMatrixJSON(
    obj: Base,
    prop: JsonObjectProperty,
    propNames: Array<string>,
    options: ISurveyCreatorOptions,
    keyName: string = undefined
  ): any {
    var className = prop.className;
    if (!className) className = prop.baseClassName;
    var columns = new PropertyJSONGenerator(obj, options).createColumnsJSON(
      className,
      propNames
    );

    var res = {
      type: "matrixdynamic",
      detailPanelMode: "underRow",
      cellType: "text",
      rowCount: 0,
      columns: columns,
    };
    if (!!keyName) {
      res.columns.unshift({
        cellType: "dropdown",
        name: keyName,
        showOptionsCaption: false,
      });
    }
    return res;
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
      //options.itemsEntryType
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
    return prop.type == "itemvalue[]";
  }
  protected getColumnNames(): Array<string> {
    return ["value", "text"];
  }
  protected getKeyValue(): string {
    return "value";
  }
}

export class PropertyGridEditorMatrixColumns extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "matrixdropdowncolumns";
  }
  protected getColumnNames(): Array<string> {
    return ["cellType", "name", "title"];
  }
  protected getKeyValue(): string {
    return "name";
  }
  protected getBaseValue(prop: JsonObjectProperty): string {
    return "column";
  }
}

export class PropertyGridEditorMatrixPages extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "surveypages";
  }
  protected getColumnNames(): Array<string> {
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
}

export class PropertyGridEditorMatrixCalculatedValues extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "calculatedvalues";
  }
  protected getColumnNames(): Array<string> {
    return ["name"];
  }
  protected getKeyValue(): string {
    return "name";
  }
  protected getBaseValue(prop: JsonObjectProperty): string {
    return "var";
  }
}
export class PropertyGridEditorMatrixHtmlConditions extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "htmlconditions";
  }
  protected getColumnNames(): Array<string> {
    return ["html"];
  }
}
export class PropertyGridEditorMatrixUrlConditions extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "urlconditions";
  }
  protected getColumnNames(): Array<string> {
    return ["url"];
  }
}
export class PropertyGridEditorMatrixMutlipleTextItems extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "textitems";
  }
  protected getColumnNames(): Array<string> {
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
  public onMatrixCellCreated(obj: Base, options: any) {
    if (options.columnName != this.getObjTypeName()) return;
    options.cellQuestion.choices = this.getChoices(obj);
    options.cellQuestion.value = options.row.editingObj.getType();
  }
  public onMatrixCellValueChanged(obj: Base, options: any) {
    if (options.columnName != this.getObjTypeName()) return;
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
    if (isDetailPanelShowing) {
      options.row.showDetailPanel();
    }
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
    var names = (<any>obj).getSupportedValidators();
    var res = [];
    for (var i = 0; i < names.length; i++) {
      var name = names[i] + "validator";
      res.push({
        value: name,
        text: editorLocalization.getValidatorName(name),
      });
    }
    return res;
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
      if (name == "visibletrigger") continue;
      res.push({
        value: name,
        text: editorLocalization.getTriggerName(name),
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
      columns: this.getColumns(obj, options),
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
      res.push({ value: props[i].name });
    }
    return res;
  }
  private getColumns(obj: Base, options: ISurveyCreatorOptions): Array<any> {
    var prop = new JsonObjectProperty(null, "value");
    prop.type = "questionvalue";
    var json = PropertyGridEditorCollection.getJSON(obj, prop, options);
    json["cellType"] = json["type"];
    delete json["type"];
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
