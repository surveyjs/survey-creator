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
  PropertyGridModel,
} from "./propertygrid";
import { getNextValue } from "@survey/creator/utils/utils";
import { editorLocalization } from "@survey/creator/editorLocalization";

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

export abstract class PropertyGridEditorMatrixBase extends PropertyGridEditor {
  protected getColumnPropertyJSON(className: string, propName: string): any {
    var prop = Serializer.findProperty(className, propName);
    if (!prop) return null;
    var json = PropertyGridEditorCollection.getJSON(null, prop);
    if (!json) return null;
    json.name = prop.name;
    json.title = editorLocalization.getPropertyName(prop.name);
    if (!!json.type) {
      json.cellType = json.type;
      delete json.type;
    }
    return json;
  }
  protected getColumnsJSON(
    className: string,
    propNames: Array<string>
  ): Array<any> {
    var res: Array<any> = [];
    for (var i = 0; i < propNames.length; i++) {
      var columnJSON = this.getColumnPropertyJSON(className, propNames[i]);
      if (!!columnJSON) {
        res.push(columnJSON);
      }
    }
    return res;
  }
}

export abstract class PropertyGridEditorMatrix extends PropertyGridEditorMatrixBase {
  public onCreated(
    propertyGrid: PropertyGridModel,
    obj: Base,
    question: Question,
    prop: JsonObjectProperty
  ) {
    question.onGetValueForNewRowCallBack = (
      sender: QuestionMatrixDynamicModel
    ): any => {
      return this.createNewItem(sender, prop);
    };
    this.setupMatrixQuestion(
      propertyGrid,
      <QuestionMatrixDynamicModel>question
    );
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
  protected getObjTypeName(): string {
    return "";
  }
  protected setupMatrixQuestion(
    propertyGrid: PropertyGridModel,
    matrix: QuestionMatrixDynamicModel
  ) {
    matrix.onHasDetailPanelCallback = (
      row: MatrixDropdownRowModelBase
    ): boolean => {
      return true;
    };
    matrix.onCreateDetailPanelCallback = (
      row: MatrixDropdownRowModelBase,
      panel: PanelModel
    ) => {
      propertyGrid.setupObjPanel(panel, row.editingObj, true);
    };
  }
  protected getMatrixJSON(
    prop: JsonObjectProperty,
    propNames: Array<string>,
    keyName: string = undefined
  ): any {
    var className = prop.className;
    if (!className) className = prop.baseClassName;
    var res = {
      type: "matrixdynamic",
      detailPanelMode: "underRow",
      cellType: "text",
      rowCount: 0,
      columns: this.getColumnsJSON(className, propNames),
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
}

export class PropertyGridEditorMatrixItemValues extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "itemvalue[]";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty): any {
    return this.getMatrixJSON(prop, ["value", "text"]);
  }
  protected getKeyValue(): string {
    return "value";
  }
}

export class PropertyGridEditorMatrixColumns extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "matrixdropdowncolumns";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty): any {
    return this.getMatrixJSON(prop, ["cellType", "name", "title"]);
  }
  protected getKeyValue(): string {
    return "name";
  }
}

export class PropertyGridEditorMatrixCalculatedValues extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "calculatedvalues";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty): any {
    return this.getMatrixJSON(prop, ["name"]);
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
  public getJSON(obj: Base, prop: JsonObjectProperty): any {
    return this.getMatrixJSON(prop, ["html"]);
  }
}
export class PropertyGridEditorMatrixUrlConditions extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "urlconditions";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty): any {
    return this.getMatrixJSON(prop, ["url"]);
  }
}
export class PropertyGridEditorMatrixMutlipleTextItems extends PropertyGridEditorMatrix {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "textitems";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty): any {
    return this.getMatrixJSON(prop, ["name"]);
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
  public getJSON(obj: Base, prop: JsonObjectProperty): any {
    return this.getMatrixJSON(prop, [], this.getObjTypeName());
  }
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

export class PropertyGridEditorBindings extends PropertyGridEditorMatrixBase {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "bindings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty): any {
    var res = {
      type: "matrixdropdown",
      rows: this.getRows(obj),
      columns: this.getColumns(obj),
    };
    return res;
  }
  public onMatrixCellCreated(obj: Base, options: any) {
    var bindingValue = obj.bindings.getValueNameByPropertyName(
      options.row.rowName
    );
    if (!!bindingValue) {
      //TODO set after v1.8.19
      //options.cellQuestion.value = bindingValue;
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
  private getColumns(obj: Base): Array<any> {
    var prop = new JsonObjectProperty(null, "value");
    prop.type = "questionvalue";
    var json = PropertyGridEditorCollection.getJSON(obj, prop);
    json["cellType"] = json["type"];
    delete json["type"];
    var res = [json];
    return res;
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorMatrixItemValues());
PropertyGridEditorCollection.register(new PropertyGridEditorMatrixColumns());
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
