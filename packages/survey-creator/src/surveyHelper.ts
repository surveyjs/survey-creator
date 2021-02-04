import { editorLocalization } from "./editorLocalization";
import * as Survey from "survey-knockout";
import { ISurveyObjectEditorOptions } from "./propertyEditors/propertyEditorBase";
import { ISurveyCreatorOptions } from "./settings";

export enum ObjType {
  Unknown,
  Survey,
  Page,
  Panel,
  Question,
}
export class SurveyHelper {
  public static getNewPageName(objs: Array<any>) {
    return SurveyHelper.getNewName(
      objs,
      editorLocalization.getString("ed.newPageName")
    );
  }
  public static getNewQuestionName(objs: Array<any>) {
    return SurveyHelper.getNewName(
      objs,
      editorLocalization.getString("ed.newQuestionName")
    );
  }
  public static getNewPanelName(objs: Array<any>) {
    return SurveyHelper.getNewName(
      objs,
      editorLocalization.getString("ed.newPanelName")
    );
  }
  public static generateNewName(name: string): string {
    var pos = name.length;
    while (pos > 0 && name[pos - 1] >= "0" && name[pos - 1] <= "9") {
      pos--;
    }
    var base = name.substr(0, pos);
    var num = 0;
    if (pos < name.length) {
      num = parseInt(name.substr(pos));
    }
    num++;
    return base + num;
  }
  public static getNewName(objs: Array<any>, baseName: string): string {
    var hash = {};
    for (var i = 0; i < objs.length; i++) {
      hash[objs[i].name] = true;
    }
    var num = 1;
    while (true) {
      if (!hash[baseName + num.toString()]) break;
      num++;
    }
    return baseName + num.toString();
  }
  public static getObjectType(obj: any): ObjType {
    if (!obj || !obj["getType"]) return ObjType.Unknown;
    if (obj.getType() == "page") return ObjType.Page;
    if (obj.getType() == "panel") return ObjType.Panel;
    if (obj.getType() == "survey") return ObjType.Survey;
    if (obj["name"]) return ObjType.Question;
    return ObjType.Unknown;
  }
  public static getObjectTypeStr(obj: any): string {
    var objType = SurveyHelper.getObjectType(obj);
    if (objType === ObjType.Survey) return "survey";
    if (objType === ObjType.Page) return "page";
    if (objType === ObjType.Panel) return "panel";
    if (objType === ObjType.Question) return "question";
    return "unknown";
  }
  public static getObjectName(obj: any, showObjectTitle = false): string {
    if (showObjectTitle && obj["title"]) return obj["title"];
    if (showObjectTitle && obj["text"]) return obj["text"];
    if (obj["name"]) return obj["name"];
    var objType = SurveyHelper.getObjectType(obj);
    if (objType != ObjType.Page) return "";
    var data = <Survey.Survey>(<Survey.Page>obj)["data"];
    if (!data) data = <Survey.Survey>(<Survey.Page>obj)["survey"]; //TODO
    var index = data.pages.indexOf(<Survey.Page>obj);
    return "[Page " + (index + 1) + "]";
  }
  public static getElements(
    element: any,
    includeHidden: boolean = false
  ): Array<any> {
    if (!element) return [];
    if (element.getElementsInDesign)
      return element.getElementsInDesign(includeHidden);
    if (element.elements) return element.elements;
    return [];
  }
  public static isPropertyVisible(
    obj: any,
    property: Survey.JsonObjectProperty,
    options: ISurveyCreatorOptions = null,
    showMode: string = null,
    parentObj: any = null,
    parentProperty: Survey.JsonObjectProperty = null
  ): boolean {
    if (!property || !property.visible) return false;
    if (!!showMode && !!property.showMode && showMode !== property.showMode)
      return false;
    if (
      !!property.isVisible &&
      !!obj.getLayoutType &&
      !(<any>property["isVisible"])(obj.getLayoutType(), null)
    )
      return false;
    var canShow = !!options
      ? (object: any, property: Survey.JsonObjectProperty) => {
          return options.onCanShowPropertyCallback(
            object,
            property,
            showMode,
            parentObj,
            parentProperty
          );
        }
      : null;
    if (!!canShow && !canShow(obj, property)) return false;
    return true;
  }
  public static scrollIntoViewIfNeeded(el: HTMLElement) {
    if (!el || !el.scrollIntoView) return;
    var rect = el.getBoundingClientRect();
    var scrollableDiv = SurveyHelper.getScrollableDiv(el);
    if (!scrollableDiv) return;
    var height = scrollableDiv.clientHeight;
    if (rect.top < scrollableDiv.offsetTop) {
      el.scrollIntoView();
    } else {
      let offsetTop = height + scrollableDiv.offsetTop;
      if (rect.bottom > offsetTop && rect.height < height) {
        el.scrollIntoView(false);
      }
    }
  }
  public static getScrollableDiv(el: HTMLElement): HTMLElement {
    while (!!el) {
      if (!!el.id && el.id.indexOf("scrollableDiv") > -1) return el;
      if (!el.offsetParent) return null;
      el = <HTMLElement>el.offsetParent;
    }
    return null;
  }
  public static moveItemInArray(
    list: Array<any>,
    obj: any,
    newIndex: number
  ): boolean {
    if (!list || list.length < 2) return false;
    if (newIndex < 0 || newIndex >= list.length) return false;
    var oldIndex = list.indexOf(obj);
    if (oldIndex < 0 || oldIndex == newIndex) return false;
    for (var i = 0; i < list.length; i++) {
      SurveyHelper.disableSelectingObj(list[i]);
    }
    list.splice(oldIndex, 1);
    list.splice(newIndex, 0, obj);
    for (var i = 0; i < list.length; i++) {
      SurveyHelper.enableSelectingObj(list[i]);
    }
    return true;
  }
  public static applyItemValueArray(
    dest: Array<Survey.ItemValue>,
    src: Array<Survey.ItemValue>
  ) {
    if (!src || src.length == 0) {
      dest.splice(0, dest.length);
      return;
    }
    if (dest.length > src.length) {
      dest.splice(src.length, dest.length - src.length);
    }
    if (dest.length < src.length) {
      var insertedArray = [];
      for (var i = dest.length; i < src.length; i++) {
        insertedArray.push(src[i]);
      }
      dest.splice.apply(dest, [dest.length, 0].concat(insertedArray));
    }
    for (var i = 0; i < dest.length; i++) {
      if (dest[i].value != src[i].value) {
        dest[i].value = src[i].value;
      }
      dest[i].text = src[i].hasText ? src[i].text : "";
    }
  }
  public static disableSelectingObj(obj: Survey.Base) {
    obj["disableSelecting"] = true;
  }
  public static enableSelectingObj(obj: Survey.Base) {
    delete obj["disableSelecting"];
  }
  public static canSelectObj(obj: Survey.Base) {
    return !obj || obj["disableSelecting"] !== true;
  }
  private static deleteConditionProperties(json: any) {
    delete json["visible"];
    delete json["visibleIf"];
    delete json["enable"];
    delete json["enableIf"];
    delete json["valueName"];
    delete json["choicesVisibleIf"];
    delete json["choicesEnableIf"];
  }
  public static updateQuestionJson(questionJson: any) {
    questionJson.storeOthersAsComment = false;
    SurveyHelper.deleteConditionProperties(questionJson);
    if (!!questionJson.choices) {
      for (var i = 0; i < questionJson.choices.length; i++) {
        SurveyHelper.deleteConditionProperties(questionJson.choices[i]);
      }
    }
  }
  public static convertMatrixRowsToText(rows: any): string {
    var result = rows
      .filter((row) => !row.cells[0].hasError)
      .map((row) =>
        row.cells
          .map((cell) => cell.value || "")
          .join(Survey.ItemValue.Separator)
          .replace(/\|$/, "")
      )
      .join("\n");

    return result;
  }

  public static convertItemValuesToText(items: Survey.ItemValue[]): string {
    var text = "";

    items.forEach((item) => {
      if (text) text += "\n";
      text += item.value;
      if (item.pureText) text += "|" + item.pureText;
    });

    return text;
  }

  public static convertTextToItemValues(
    text: string,
    properties: Survey.JsonObjectProperty[],
    className: string
  ): Survey.ItemValue[] {
    var items = [];
    if (!text) return items;

    var texts = text.split("\n");
    for (var i = 0; i < texts.length; i++) {
      if (!texts[i]) continue;
      var elements = texts[i].split(Survey.ItemValue.Separator);
      var valueItem = Survey.Serializer.createClass(className);
      properties.forEach((p, i) => {
        valueItem[p.name] = elements[i];
      });
      items.push(valueItem);
    }

    return items;
  }
}
