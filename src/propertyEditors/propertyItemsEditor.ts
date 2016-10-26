import {SurveyPropertyModalEditor} from "./propertyModalEditor";
import {editorLocalization} from "../editorLocalization";

export class SurveyPropertyItemsEditor extends SurveyPropertyModalEditor {
    public koItems: any;
    public onDeleteClick: any;
    public onAddClick: any;
    public onClearClick: any;

    constructor() {
        super();
        this.koItems = ko.observableArray();
        this.value = [];
        var self = this;
        self.onDeleteClick = function (item) { self.koItems.remove(item); };
        self.onClearClick = function (item) { self.koItems.removeAll(); };
        self.onAddClick = function () { self.AddItem(); };

    }
    public getValueText(value: any): string {
        var len = value ? value.length : 0;
        return editorLocalization.getString("pe.items")["format"](len);
    }
    protected getCorrectedValue(value: any): any {
        if (value == null || !Array.isArray(value)) value = [];
        return value;
    }
    protected AddItem() {
        this.koItems.push(this.createNewEditorItem());
    }
    protected onValueChanged() {
        this.koItems(this.getItemsFromValue());
    }
    protected getItemsFromValue(): Array<any> {
        var items = [];
        var value = this.value;
        for (var i = 0; i < value.length; i++) {
            items.push(this.createEditorItem(value[i]));
        }
        return items;
    }
    protected onBeforeApply() {
        var items = [];
        var internalItems = this.koItems();
        for (var i = 0; i < internalItems.length; i++) {
            items.push(this.createItemFromEditorItem(internalItems[i]));
        }
        this.setValueCore(items);
    }
    protected createNewEditorItem(): any { throw "Override 'createNewEditorItem' method"; }
    protected createEditorItem(item: any) { return item; }
    protected createItemFromEditorItem(editorItem: any) {  return editorItem;  }
}