import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {SurveyPropertyModalEditor} from "./propertyModalEditor";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {editorLocalization} from "../editorLocalization";
import {SurveyPropertyEditorFactory} from "./propertyEditorFactory";

export class SurveyPropertyMultipleValuesEditor extends SurveyPropertyModalEditor {
    private items: Array<Survey.ItemValue> = [];
    koItems: any; koEditingValue: any;
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
        this.koEditingValue = ko.observableArray();
        this.koItems = ko.observableArray();
        this.setItems();
    }
    public getValueText(value: any): string {
        if (!value) return editorLocalization.getString("pe.empty");
        if(!Array.isArray(value)) value = [value];
        var str = "[";
        for(var i = 0; i < value.length; i ++) {
            if(i > 0) str += ", ";
            str += this.getTextByItemValue(value[i]);
        }
        str += "]";
        return str;
    }
    public setObject(value: any) { 
        super.setObject(value);
        this.setItems();
        this.setEditingValue();
    }
    protected updateValue() {
        super.updateValue();
        this.setEditingValue();
    }
    protected onBeforeApply() {
        this.koValue(this.koEditingValue());
    }
    public get editorType(): string { return "multiplevalues"; }
    private setItems() {
        Survey.ItemValue.setData(this.items, this.property.choices);
        this.koItems(this.items);
    }
    private getTextByItemValue(val: any) {
        for(var i = 0; i < this.items.length; i ++) {
            if(this.items[i].value == val) return this.items[i].text;
        }
        return val;
    }
    private setEditingValue() {
        var val = this.koValue();
        if(val == null || val == undefined) val = [];
        if(!Array.isArray(val)) val = [val]
        this.koEditingValue(val);
    }
}
SurveyPropertyEditorFactory.registerEditor("multiplevalues", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyPropertyMultipleValuesEditor(property); });