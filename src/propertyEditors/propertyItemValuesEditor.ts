/// <reference path="propertyEditorBase.ts" />
/// <reference path="propertyModalEditor.ts" />
/// <reference path="propertyItemsEditor.ts" />
module SurveyEditor {
    export class SurveyPropertyItemValuesEditor extends SurveyPropertyItemsEditor {
        constructor() {
            super();
        }
        public get editorType(): string { return "itemvalues"; }
        public hasError(): boolean {
            var result = false;
            for (var i = 0; i < this.koItems().length; i++) {
                var item = this.koItems()[i];
                item.koHasError(!item.koValue());
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
            var text = editorItem.koText() && editorItem.koText() != editorItem.koValue() ? editorItem.koText() : null;
            return { value: editorItem.koValue(), text: text };
        }
    }

    SurveyPropertyEditorBase.registerEditor("itemvalues", function (): SurveyPropertyEditorBase { return new SurveyPropertyItemValuesEditor(); });
}