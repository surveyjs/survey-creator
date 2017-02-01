import * as ko from "knockout";
import {SurveyPropertyItemsEditor} from "./propertyItemsEditor";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import * as Survey from "survey-knockout";

export class SurveyPropertyItemValuesEditor extends SurveyPropertyItemsEditor {
    koActiveView: any;
    koItemsText: any;
    changeToTextViewClick: any;
    changeToFormViewClick: any;
    constructor() {
        super();
        var self = this;
        this.koActiveView = ko.observable("form");
        this.koItemsText = ko.observable("");
        this.koActiveView.subscribe(function (newValue) {
            if (newValue == "form") self.updateItems(self.koItemsText());
            else self.koItemsText(self.getItemsText());
        });
        this.changeToTextViewClick = function () { self.koActiveView("text"); };
        this.changeToFormViewClick = function () { self.koActiveView("form"); };
    }
    public get editorType(): string { return "itemvalues"; }
    public hasError(): boolean {
        var result = false;
        for (var i = 0; i < this.koItems().length; i++) {
            var item = this.koItems()[i];
            item.koHasError(this.isValueEmpty(item.koValue()));
            result = result || item.koHasError();
        }
        return result;
    }
    protected createNewEditorItem(): any { return { koValue: ko.observable(), koText: ko.observable(), koHasError: ko.observable(false) }; }
    protected createEditorItem(item: any) {
        var itemValue = item;
        var itemText = null;
        if (item.value) {
            itemValue = item.value;
            itemText = item.text;
        }
        return { koValue: ko.observable(itemValue), koText: ko.observable(itemText), koHasError: ko.observable(false) };
    }
    protected createItemFromEditorItem(editorItem: any) {
        var alwaySaveTextInPropertyEditors = this.options && this.options.alwaySaveTextInPropertyEditors;
        var text = editorItem.koText();
        if (!alwaySaveTextInPropertyEditors && editorItem.koText() == editorItem.koValue()) {
            text = null;
        }
        return { value: editorItem.koValue(), text: text };
    }
    protected onBeforeApply() {
        if (this.koActiveView() != "form") {
            this.updateItems(this.koItemsText());
        }
        super.onBeforeApply();
    }
    protected updateItems(text: string) {
        var items = [];
        if (text) {
            var texts = text.split("\n");
            for (var i = 0; i < texts.length; i++) {
                if (!texts[i]) continue;
                var valueItem = new Survey.ItemValue(texts[i]);
                var item = { value: valueItem.value, text: (valueItem.hasText ? valueItem.text : "") };
                items.push(item);
            }
        }
        this.koItems(this.getItemsFromValue(items));
    }
    protected getItemsText(): string {
        var text = [];
        var items = this.koItems();
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (this.isValueEmpty(item.koValue())) continue;
            var itemText = item.koValue();
            if (item.koText()) itemText += Survey.ItemValue.Separator + item.koText();
            text.push(itemText);
        }
        return text.join("\n");
    }
    protected isValueEmpty(val: any) {
        return !val;
    }
}

SurveyPropertyEditorBase.registerEditor("itemvalues", function (): SurveyPropertyEditorBase { return new SurveyPropertyItemValuesEditor(); });