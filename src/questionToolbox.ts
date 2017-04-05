import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {editorLocalization} from "./editorLocalization";

export interface IQuestionToolboxItem {
    name: string;
    iconName: string;
    json: any;
    title: string;
    isCopied: boolean;
}

export class QuestionToolbox {
    public orderedQuestions = ["text", "checkbox", "radiogroup", "dropdown", "comment", "rating", "html"];
    public copiedItemMaxCount: number = 3;
    private itemsValue: Array<IQuestionToolboxItem> = [];

    koItems: any;
    
    constructor(supportedQuestions: Array<string> = null) {
        this.koItems = ko.observableArray();
        this.createDefaultItems(supportedQuestions);
    }
    public get jsonText() {
        return JSON.stringify(this.itemsValue);
    }
    public set jsonText(value: string) {
        this.itemsValue = (value) ? JSON.parse(value) : [];
        this.onItemsChanged();
    }
    public get copiedJsonText(): string {
        return JSON.stringify(this.copiedItems);
    }
    public set copiedJsonText(value: string) {
        var newItems = (value) ? JSON.parse(value) : [];
        this.clearCopiedItems();
        for (var i = 0; i < newItems.length; i++) {
            newItems[i].isCopied = true;
            this.addItem(newItems[i]);
        }
    }
    public get items(): Array<IQuestionToolboxItem> { return this.itemsValue; }
    public get copiedItems(): Array<IQuestionToolboxItem> {
        var result = [];
        for (var i = 0; i < this.itemsValue.length; i++) {
            if (this.itemsValue[i].isCopied) result.push(this.itemsValue[i]);
        }
        return result;
    }
    public addItems(items: Array<IQuestionToolboxItem>, clearAll: boolean = false) {
        if (clearAll) {
            this.clearItems();
        }
        this.onItemsChanged();
    }
    public addCopiedItem(question: Survey.QuestionBase) {
        var item = { name: question.name, title: question.name, isCopied: true, iconName: "icon-default", json: this.getQuestionJSON(question) };
        if (this.replaceItem(item)) return;
        var copied = this.copiedItems;
        if (this.copiedItemMaxCount > 0 && copied.length == this.copiedItemMaxCount) this.removeItem(copied[this.copiedItemMaxCount - 1].name);
        this.addItem(item);
    }
    public addItem(item: IQuestionToolboxItem) {
        this.itemsValue.push(item);
        this.onItemsChanged();
    }
    public replaceItem(item: IQuestionToolboxItem): boolean {
        var index = this.indexOf(item.name);
        if (index < 0) return;
        this.itemsValue[index] = item;
        this.onItemsChanged();
        return true;
    }
    public removeItem(name: string): boolean {
        var index = this.indexOf(name);
        if (index < 0) return false;
        this.itemsValue.splice(index, 1);
        this.onItemsChanged();
        return true;
    }
    public clearItems() {
        this.itemsValue = [];
        this.onItemsChanged();
    }
    public clearCopiedItems() {
        var removedItems = this.copiedItems;
        for (var i = 0; i < removedItems.length; i++) {
            this.removeItem(removedItems[i].name);
        }
    }
    protected onItemsChanged() {
        this.koItems(this.itemsValue);
    }
    private indexOf(name: string) {
        for (var i = 0; i < this.itemsValue.length; i++) {
            if (this.itemsValue[i].name == name) return i;
        }
        return -1;
    }
    private createDefaultItems(supportedQuestions: Array<string>) {
        var questions = this.getQuestionTypes(supportedQuestions);
        for (var i = 0; i < questions.length; i++) {
            var name = questions[i];
            var question = Survey.ElementFactory.Instance.createElement(name, "q1");
            if(!question) {
                question = Survey.JsonObject.metaData.createClass(name);
            }
            var json = this.getQuestionJSON(question);
            var item = { name: name, iconName: 'icon-' + name, title: editorLocalization.getString('qt.' + name), json: json, isCopied: false };
            this.itemsValue.push(item);
        }
        this.onItemsChanged();
    }
    private getQuestionJSON(question: any): any {
        var json = new Survey.JsonObject().toJsonObject(question);
        json.type = question.getType();
        return json;
    }
    private getQuestionTypes(supportedQuestions: Array<string>): string[] {
        var allTypes = Survey.ElementFactory.Instance.getAllTypes();
        if (!supportedQuestions || supportedQuestions.length == 0) supportedQuestions = allTypes;
        var questions = [];
        for (var i = 0; i < this.orderedQuestions.length; i++) {
            var name = this.orderedQuestions[i];
            if (supportedQuestions.indexOf(name) > -1 && allTypes.indexOf(name) > -1) questions.push(name);
        }
        for (var i = 0; i < supportedQuestions.length; i++) {
            var name = supportedQuestions[i];
            if (questions.indexOf(supportedQuestions[i]) < 0 && allTypes.indexOf(name) > -1) questions.push(name);
        }
        return questions;
    }
}
