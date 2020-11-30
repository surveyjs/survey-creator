import * as ko from "knockout";
import {
  Base,
  JsonObjectProperty,
  Serializer,
  Question,
  MatrixDropdownRowModelBase,
  QuestionMatrixDynamicModel,
  PanelModel,
  SurveyModel,
  Survey,
} from "survey-knockout";
import {
  PropertyGridEditorCollection,
  PropertyGridModel,
} from "./propertygrid";
import { getNextValue } from "@survey/creator/utils/utils";

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
  return {
    type: "matrixdynamic",
    detailPanelMode: "underRow",
    cellType: "text",
    rowCount: 0,
    columns: getColumnsJSON(prop.className, propNames),
  };
}
function createNewItem(
  matrix: QuestionMatrixDynamicModel,
  prop: JsonObjectProperty,
  keyPropName: string
): Base {
  var newName = SurveyHelper.getNewName(
    matrix.value,
    keyPropName,
    prop.getBaseValue()
  );
  var json: any = {};
  json[keyPropName] = newName;
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
