/// <reference path="objectPropertyArrays.ts" />
/// <reference path="surveyHelper.ts" />
/// <reference path="objectPropertyValidators.ts" />

module SurveyEditor {

    export class SurveyPropertyTextItems extends SurveyPropertyArray {
        private value_: Array<any>;
        public koItems: any;
        public onDeleteClick: any;
        public onAddClick: any;
        public onApplyClick: any;

        constructor(public onValueChanged: SurveyPropertyValueChangedCallback) {
            super(onValueChanged);
            this.koItems = ko.observableArray();
            this.value_ = [];
            var self = this;
            self.onApplyClick = function () { self.Apply(); };
            self.onDeleteClick = function (item) { self.koItems.remove(item); };
            self.onAddClick = function () { self.AddItem(); };
        }
        public get value(): any { return this.value_; }
        public set value(value: any) {
            if (value == null || !Array.isArray(value)) value = [];
            this.value_ = value;
            var array = [];
            for (var i = 0; i < value.length; i++) {
                var item = value[i];
                var editItem = { koName: ko.observable(item.name), koTitle: ko.observable(item.title) };
                this.createValidatorsEditor(editItem, item.validators);
                array.push(editItem);
            }
            this.koItems(array);
        }
        protected AddItem() {
            var objs = [];
            var array = this.koItems();
            for (var i = 0; i < array.length; i++) {
                objs.push({ name: array[i].koName() });
            }
            var editItem = { koName: ko.observable(SurveyHelper.getNewName(objs, "text")), koTitle: ko.observable() };
            this.createValidatorsEditor(editItem, []);
            this.koItems.push(editItem);
        }
        protected Apply() {
            this.value_ = [];
            for (var i = 0; i < this.koItems().length; i++) {
                var item = this.koItems()[i];
                var itemText = new Survey.MultipleTextItem(item.koName(), item.koTitle());
                itemText.validators = item.validators;
                this.value_.push(itemText);
            }
            if (this.onValueChanged) {
                this.onValueChanged(this.value_);
            }
        }
        private createValidatorsEditor(item: any, validators: Array<any>) {
            item.validators = validators.slice();
            var self = this;
            var onItemChanged = function (newValue: any) { item.validators = newValue; item.koText(self.getText(newValue.length)); };
            item.arrayEditor = new SurveyPropertyValidators((newValue: any) => { onItemChanged(newValue); });
            item.arrayEditor.object = item;
            item.arrayEditor.title(editorLocalization.getString("pe.editProperty")["format"]("Validators"));
            item.arrayEditor.value = item.validators;
            item.koText = ko.observable(this.getText(validators.length));
        }
        private getText(length: number): string {
            return editorLocalization.getString("pe.items")["format"](length);
        }
    }
}