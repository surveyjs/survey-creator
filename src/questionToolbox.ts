import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {editorLocalization} from "./editorLocalization";

/**
 * The Toolbox item description
 */
export interface IQuestionToolboxItem {
    /**
     * An unique name
     */
    name: string;
    /**
     * Icon name
     */
    iconName: string;
    /**
     * The JSON that used to create a new question/panel. The 'type' attribute is requried.
     */
    json: any;
    /**
     * Toolbox item title
     */
    title: string;
    /**
     * True, if an end user added this item into Toolbox from the survey
     */
    isCopied: boolean;
}

/**
 * The list of Toolbox items.
 */
export class QuestionToolbox {
    /**
     * Modify this array to change the toolbox items order.
     */
    public orderedQuestions = ["text", "checkbox", "radiogroup", "dropdown", "comment", "rating", "boolean", "html"];
    /**
     * The maximum number of copied toolbox items. If an user adding copiedItemMaxCount + 1 item, the first added item will be removed.
     */
    public copiedItemMaxCount: number = 3;
    private itemsValue: Array<IQuestionToolboxItem> = [];

    koItems: any;
    
    constructor(supportedQuestions: Array<string> = null) {
        this.koItems = ko.observableArray();
        this.createDefaultItems(supportedQuestions);
    }
    /**
     * The Array of Toolbox items as Text JSON.
     */
    public get jsonText() {
        return JSON.stringify(this.itemsValue);
    }
    public set jsonText(value: string) {
        this.itemsValue = (value) ? JSON.parse(value) : [];
        this.onItemsChanged();
    }
    /**
     * The Array of copied Toolbox items as Text JSON.
     */
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
    /**
     * The Array of Toolbox items
     */
    public get items(): Array<IQuestionToolboxItem> { return this.itemsValue; }
    /**
     * The Array of copied Toolbox items
     */
    public get copiedItems(): Array<IQuestionToolboxItem> {
        var result = [];
        for (var i = 0; i < this.itemsValue.length; i++) {
            if (this.itemsValue[i].isCopied) result.push(this.itemsValue[i]);
        }
        return result;
    }
    /**
     * Add toolbox items into the Toolbox
     * @param items the list of new items
     * @param clearAll set it to true to clear all previous items.
     */
    public addItems(items: Array<IQuestionToolboxItem>, clearAll: boolean = false) {
        if (clearAll) {
            this.clearItems();
        }
        for(var i = 0; i < items.length; i ++) {
            this.itemsValue.push(items[i]);
        }
        this.onItemsChanged();
    }
    /**
     * Add a copied Question into Toolbox
     * @param question a copied Survey.Question
     */
    public addCopiedItem(question: Survey.QuestionBase) {
        var item = { name: question.name, title: question.name, isCopied: true, iconName: "icon-default", json: this.getQuestionJSON(question) };
        if (this.replaceItem(item)) return;
        var copied = this.copiedItems;
        if (this.copiedItemMaxCount > 0 && copied.length == this.copiedItemMaxCount) this.removeItem(copied[this.copiedItemMaxCount - 1].name);
        this.addItem(item);
    }
    /**
     * Add a toolbox item
     * @param item the toolbox item description
     * @see IQuestionToolboxItem 
     */
    public addItem(item: IQuestionToolboxItem) {
        this.itemsValue.push(item);
        this.onItemsChanged();
    }
    /**
     * Add a new toolbox item, add delete the old item with the same name
     * @param item the toolbox item description
     * @see IQuestionToolboxItem 
     */
    public replaceItem(item: IQuestionToolboxItem): boolean {
        var index = this.indexOf(item.name);
        if (index < 0) return;
        this.itemsValue[index] = item;
        this.onItemsChanged();
        return true;
    }
    /**
     * Remove a toolbox item by it's name
     * @param name toolbox item name
     * @see IQuestionToolboxItem 
     */
    public removeItem(name: string): boolean {
        var index = this.indexOf(name);
        if (index < 0) return false;
        this.itemsValue.splice(index, 1);
        this.onItemsChanged();
        return true;
    }
    /**
     * Remove all toolbox items.
     */
    public clearItems() {
        this.itemsValue = [];
        this.onItemsChanged();
    }
    /**
     * Remove all copied toolbox items.
     */
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
        this.registerCustomWidgets();
        this.onItemsChanged();
    }
    private registerCustomWidgets() {
        var inst = Survey.CustomWidgetCollection.Instance;
        var getActivatedByFunc = inst.getActivatedBy;
        if(!getActivatedByFunc) return;
        var widgets = inst.widgets;
        for(var i = 0; i < widgets.length; i ++) {
            if(getActivatedByFunc(widgets[i].name) != "customtype") continue;
            var widgetJson = widgets[i].widgetJson;
            if(!widgetJson.widgetIsLoaded || !widgetJson.widgetIsLoaded()) continue;
            var iconName = widgetJson.iconName ? widgetJson.iconName : "icon-default";
            var title = editorLocalization.getString('qt.' + widgetJson.name);
            if(!title || title == widgetJson.name) title = widgetJson.title;
            if(!title) title = widgetJson.name;
            var json = widgetJson.defaultJSON ? widgetJson.defaultJSON : {};
            if(!json.type) {             
                json.type = widgetJson.name;
            }
            var item = { name: widgetJson.name, iconName: iconName, title: title, json: json, isCopied: false };
            this.itemsValue.push(item);
        }
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
