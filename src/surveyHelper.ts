import {editorLocalization} from "./editorLocalization";
import * as Survey from "survey-knockout";

export enum ObjType { Unknown, Survey, Page, Panel, Question }
export class SurveyHelper {
    public static getNewPageName(objs: Array<any>) {
        return SurveyHelper.getNewName(objs, editorLocalization.getString("ed.newPageName"));
    }
    public static getNewQuestionName(objs: Array<any>) {
        return SurveyHelper.getNewName(objs, editorLocalization.getString("ed.newQuestionName"));
    }
    public static getNewPanelName(objs: Array<any>) {
        return SurveyHelper.getNewName(objs, editorLocalization.getString("ed.newPanelName"));
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
    public static getObjectName(obj: any): string {
        if (obj["name"]) return obj["name"];
        var objType = SurveyHelper.getObjectType(obj);
        if (objType != ObjType.Page) return "";
        var data = <Survey.Survey>(<Survey.Page>obj)["data"];
        if(!data) data = <Survey.Survey>(<Survey.Page>obj)["survey"]; //TODO
        var index = data.pages.indexOf(<Survey.Page>obj);
        return "[Page " + (index + 1) + "]";
    }
    public static getElements(element: any, includeHidden: boolean = false): Array<any> {
        if(!element) return [];
        if(element.getElementsInDesign) return element.getElementsInDesign(includeHidden);
        if(element.elements) return element.elements;
        return [];
    }
    public static isPropertyVisible(obj: any, property: Survey.JsonObjectProperty, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean = null) : boolean {
        if(!property || !property.visible) return false;
        if (onCanShowPropertyCallback && !onCanShowPropertyCallback(obj, property)) return false;
        return true;
    }
    public static scrollIntoViewIfNeeded(el: HTMLElement, page: Survey.PageModel) {
        if(!el || !el.scrollIntoView || !page) return;
        var pEl = document.getElementById(page.id);
        if(!pEl) return;
        var rect = el.getBoundingClientRect();
        var height = pEl.offsetParent ? pEl.offsetParent.clientHeight :  pEl.clientHeight;
        if (rect.bottom > height) {
            el.scrollIntoView(false);
        } else {
            if (rect.top < pEl.offsetTop) {
                el.scrollIntoView();
            } 
        }
    }

}