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
    public addPage(page: Survey.Page) {
        var pageItem = this.createItem(page, this.koObjects()[0]);
        var index = this.survey.pages.indexOf(page);
        if (index > 0) {
            var prevPage = this.survey.pages[index - 1];
            index = this.getItemIndex(prevPage) + 1;
            index += prevPage.questions.length;
        } else {
            index = 1; //0 - Survey
        }
        this.addItem(pageItem, index);
        index++;
        for (var i = 0; i < page.questions.length; i++) {
            var item = this.createItem(page.questions[i], pageItem);
            this.addItem(item, index + i);
        }
        this.koSelected(pageItem);
    }
    public addElement(element: any, parent: any) {
        var parentIndex = this.getItemIndex(parent);
        if (parentIndex < 0) return;
        if(parent.elements)
        var elementIndex = parent.elements.indexOf(element) + 1 + parentIndex;
        var item = this.createItem(element, this.koObjects()[parentIndex]);
        this.addItem(item, elementIndex);
        this.koSelected(item);
    }
    public addQuestion(page: Survey.Page, question: Survey.QuestionBase) {
        var index = this.getItemIndex(page);
        if (index < 0) return;
        var questionIndex = page.questions.indexOf(question) + 1;
        index += questionIndex;
        var item = this.createItem(question, this.koObjects()[index]);
        this.addItem(item, index);
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
        var countToRemove = 1;
        if (SurveyHelper.getObjectType(obj) == ObjType.Page) {
            var page: Survey.Page = <Survey.Page>obj;
            countToRemove += page.questions.length;
        }
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