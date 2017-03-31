import * as ko from "knockout";
import {SurveyHelper, ObjType} from "./surveyHelper";
import * as Survey from "survey-knockout";

export class SurveyObjectItem {
    public value: Survey.Base;
    public text: any;
    public level: number = 0;
}

export class SurveyObjects {
    public static intend: string = ".";
    surveyValue: Survey.Survey;

    constructor(public koObjects: any, public koSelected: any) {
    }
    public get survey(): Survey.Survey { return this.surveyValue; }
    public set survey(value: Survey.Survey) {
        if (this.survey == value) return;
        this.surveyValue = value;
        this.rebuild();
    }
    public addPage(page: Survey.PageModel) {
        this.addElement(page, null);
    }
    public addElement(element: any, parent: any) {
        var parentIndex = parent != null ? this.getItemIndex(parent) : 0;
        if (parentIndex < 0) return;
        var elements = parent != null ? parent.elements : this.survey.pages;
        var elementIndex = elements.indexOf(element);
        var newIndex = elementIndex + 1 + parentIndex;
        if(elementIndex > 0) {
            var prevElement = elements[elementIndex - 1];
            newIndex = this.getItemIndex(prevElement) + this.getAllElementCount(prevElement) + 1;
        }
        var item = this.createItem(element, this.koObjects()[parentIndex]);
        this.addItem(item, newIndex);
        if(element.elements) {
            var objs = [];
            this.buildElements(objs, element.elements, item);
            for(var i = 0; i < objs.length; i ++){
                this.koObjects.splice(newIndex + 1 + i, 0, objs[i]);   
            }
        }
        this.koSelected(item);
    }
    public selectObject(obj: Survey.Base) {
        var objs = this.koObjects();
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].value == obj) {
                this.koSelected(objs[i]);
                return;
            }
        }
    }
    public removeObject(obj: Survey.Base) {
        var index = this.getItemIndex(obj);
        if (index < 0) return;
        var countToRemove = 1 + this.getAllElementCount(obj);
        this.koObjects.splice(index, countToRemove);
    }
    public nameChanged(obj: Survey.Base) {
        var index = this.getItemIndex(obj);
        if (index < 0) return;
        this.koObjects()[index].text(this.getText(this.koObjects()[index]));
    }
    public selectNextQuestion(isUp: boolean) {
        var question = this.getSelectedQuestion();
        var itemIndex = this.getItemIndex(question);
        if (itemIndex < 0) return question;
        var objs = this.koObjects();
        var newItemIndex = itemIndex + (isUp ? -1 : 1);
        if (newItemIndex < objs.length && SurveyHelper.getObjectType(objs[newItemIndex].value) == ObjType.Question) {
            itemIndex = newItemIndex;
        } else {
            newItemIndex = itemIndex;
            while (newItemIndex < objs.length && SurveyHelper.getObjectType(objs[newItemIndex].value) == ObjType.Question) {
                itemIndex = newItemIndex;
                newItemIndex += (isUp ? 1 : -1);
            }
        }
        this.koSelected(objs[itemIndex]);
    }
    private getAllElementCount(element: any) {
        if(!element.elements) return 0;
        var res = 0;
        for(var i = 0; i < element.elements.length; i ++) {
            res += 1 + this.getAllElementCount(element.elements[i]);
        }
        return res;
    }
    private getSelectedQuestion(): Survey.QuestionBase {
        if (!this.koSelected()) return null;
        var obj = this.koSelected().value;
        if (!obj) return null;
        return SurveyHelper.getObjectType(obj) == ObjType.Question ? <Survey.QuestionBase>(obj) : null;

    }
    private addItem(item: SurveyObjectItem, index: number) {
        if (index > this.koObjects().length) {
            this.koObjects.push(item);
        } else {
            this.koObjects.splice(index, 0, item);
        }
    }
    private rebuild() {
        var objs = [];
        if (this.survey == null) {
            this.koObjects(objs);
            this.koSelected(null);
            return;
        }
        var root = this.createItem(this.survey, null);
        objs.push(root);
        for (var i = 0; i < this.survey.pages.length; i++) {
            var page = <Survey.Page>this.survey.pages[i];
            var pageItem = this.createItem(page, root);
            objs.push(pageItem);
            this.buildElements(objs, page.elements, pageItem);
        }
        this.koObjects(objs);
        this.koSelected(this.survey);
    }
    private buildElements(objs: Array<any>, elements: Array<Survey.IElement>, parentItem: SurveyObjectItem) {
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            if(el.isPanel) {
                var panelItem = this.createItem(<Survey.Panel>el, parentItem);
                objs.push(panelItem);
                this.buildElements(objs, (<Survey.Panel>el).elements, panelItem);
            }
            else {
                objs.push(this.createItem(<Survey.QuestionBase>el, parentItem));
            }
        }
    }
    private createItem(value: Survey.Base, parent: SurveyObjectItem) {
        var item = new SurveyObjectItem();
        item.value = value;
        item.level = parent != null ? parent.level + 1 : 0;
        item.text = ko.observable(this.getText(item));
        return item;
    }
    private getItemIndex(value: Survey.Base): number {
        var objs = this.koObjects();
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].value == value) return i;
        }
        return -1;
    }
    private getText(item: SurveyObjectItem): string {
        if(item.level == 0) return "Survey";
        var intend = SurveyObjects.intend;
        for(var i = 1; i < item.level; i ++) {
            intend += SurveyObjects.intend;
        }
        return intend + SurveyHelper.getObjectName(item.value);
    }
}