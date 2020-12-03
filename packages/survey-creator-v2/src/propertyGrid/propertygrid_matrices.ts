import {
  Base,
  JsonObjectProperty,
  Serializer,
  Question,
  MatrixDropdownRowModelBase,
  QuestionMatrixDynamicModel,
  PanelModel,
  ExpressionValidator,
} from "survey-knockout";
import {
  PropertyGridEditorCollection,
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

function getColumnPropertyJSON(className: string, propName: string): any {
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
function getColumnsJSON(
  className: string,
  propNames: Array<string>
): Array<any> {
  var res: Array<any> = [];
  for (var i = 0; i < propNames.length; i++) {
    var columnJSON = getColumnPropertyJSON(className, propNames[i]);
    if (!!columnJSON) {
      res.push(columnJSON);
    }
  }
  return res;
}
function getMatrixJSON(
  prop: JsonObjectProperty,
  propNames: Array<string>
): any {
  var className = prop.className;
  if (!className) className = prop.baseClassName;
  return {
    type: "matrixdynamic",
    detailPanelMode: "underRow",
    cellType: "text",
    rowCount: 0,
    columns: getColumnsJSON(className, propNames),
  };
}
function createNewItem(
  matrix: QuestionMatrixDynamicModel,
  prop: JsonObjectProperty,
  keyPropName: string = ""
): Base {
  var json: any = {};
  if (keyPropName) {
    var newName = SurveyHelper.getNewName(
      matrix.value,
      keyPropName,
      prop.getBaseValue()
    );
    json[keyPropName] = newName;
  }
  var item = Serializer.createClass(prop.className, json);
  matrix.value.push(item);
  return item;
}
function setupMatrixQuestion(
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
PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "itemvalue[]";
  },
  getJSON(obj: Base, prop: JsonObjectProperty): any {
    return getMatrixJSON(prop, ["value", "text"]);
  },
  onCreated(
    propertyGrid: PropertyGridModel,
    obj: Base,
    question: Question,
    prop: JsonObjectProperty
  ) {
    question.onGetValueForNewRowCallBack = (
      sender: QuestionMatrixDynamicModel
    ): any => {
      return createNewItem(sender, prop, "value");
    };
    setupMatrixQuestion(propertyGrid, <QuestionMatrixDynamicModel>question);
  },
});
PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "matrixdropdowncolumns";
  },
  getJSON(obj: Base, prop: JsonObjectProperty): any {
    return getMatrixJSON(prop, ["cellType", "name", "title"]);
  },
  onCreated(
    propertyGrid: PropertyGridModel,
    obj: Base,
    question: Question,
    prop: JsonObjectProperty
  ) {
    question.onGetValueForNewRowCallBack = (
      sender: QuestionMatrixDynamicModel
    ): any => {
      return createNewItem(sender, prop, "name");
    };
    setupMatrixQuestion(propertyGrid, <QuestionMatrixDynamicModel>question);
  },
});

function getValidatorChoices(obj: any): Array<any> {
  var names = obj.getSupportedValidators();
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

PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "validators";
  },
  getJSON(obj: Base, prop: JsonObjectProperty): any {
    var res = getMatrixJSON(prop, []);
    if (!res.columns) res.columns = [];
    res.columns.unshift({
      cellType: "dropdown",
      name: "validatorType",
      showOptionsCaption: false,
    });
    return res;
  },
  onCreated(
    propertyGrid: PropertyGridModel,
    obj: Base,
    question: Question,
    prop: JsonObjectProperty
  ) {
    question.onGetValueForNewRowCallBack = (
      sender: QuestionMatrixDynamicModel
    ): any => {
      var item = new ExpressionValidator();
      item["validatorType"] = item.getType();
      sender.value.push(item);
      return item;
    };
    setupMatrixQuestion(propertyGrid, <QuestionMatrixDynamicModel>question);
  },
  onMatrixCellCreated(obj: Base, options: any) {
    if (options.columnName != "validatorType") return;
    options.cellQuestion.choices = getValidatorChoices(obj);
    options.cellQuestion.value = options.row.editingObj.getType();
  },
  onMatrixCellValueChanged(obj: Base, options: any) {
    if (options.columnName != "validatorType") return;
    var index = options.question.visibleRows.indexOf(options.row);
    if (index < 0) return;
    var isDetailPanelShowing = options.row.isDetailPanelShowing;
    var objJSON = options.row.editingObj.toJSON();
    delete objJSON.type;
    var newItem = Serializer.createClass(options.value, objJSON);
    newItem.fromJSON(objJSON);
    newItem["validatorType"] = newItem.getType();
    options.row.hideDetailPanel(true);
    options.question.value.splice(index, 1, newItem);
    if (isDetailPanelShowing) {
      options.row.showDetailPanel();
    }
  },
});
