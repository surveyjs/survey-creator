/// <reference path="objectPropertyArrays.ts" />

module SurveyEditor {

    export class SurveyPropertyMatrixDropdownColumns extends SurveyPropertyArray {
        private value_: Array<any>;
        public koItems: any;
        public onDeleteClick: any;
        public onAddClick: any;
        public onClearClick: any;
        public onApplyClick: any;

        constructor(public onValueChanged: SurveyPropertyValueChangedCallback) {
            super(onValueChanged);
            this.koItems = ko.observableArray();
            this.value_ = [];
            var self = this;
            self.onApplyClick = function () { self.Apply(); };
            self.onDeleteClick = function (item) { self.koItems.remove(item); };
            self.onClearClick = function (item) { self.koItems.removeAll(); };
            self.onAddClick = function () { self.AddItem(); };
        }
        public get value(): any { return this.value_; }
        public set value(value: any) {
            if (value == null || !Array.isArray(value)) value = [];
            this.value_ = value;
            var array = [];
            for (var i = 0; i < value.length; i++) {
                array.push(new SurveyPropertyMatrixDropdownColumnsItem(value[i]));
            }
            this.koItems(array);
        }
        protected AddItem() {
            this.koItems.push(new SurveyPropertyMatrixDropdownColumnsItem(new Survey.MatrixDropdownColumn("")));
        }
        protected Apply() {
            if (this.hasError()) return;
            this.value_ = [];
            for (var i = 0; i < this.koItems().length; i++) {
                var item = this.koItems()[i];
                item.apply();
                this.value_.push(item.column);
            }
            if (this.onValueChanged) {
                this.onValueChanged(this.value_);
            }
        }
        protected hasError(): boolean {
            var result = false;
            for (var i = 0; i < this.koItems().length; i++) {
                result = result || this.koItems()[i].hasError();
            }
            return result;
        }
    }
    class SurveyPropertyMatrixDropdownColumnsItem {
        private koChoices: any;
        public choicesEditor: SurveyPropertyItemValues;
        koName: any; koTitle: any; koShowChoices: any; koHasError: any; koChoicesText: any;
        public onShowChoicesClick: any;
        constructor(public column: Survey.MatrixDropdownColumn) {
            this.koName = ko.observable(column.name);
            this.koTitle = ko.observable(column.name === column.title ? "" : column.title);
            this.koShowChoices = ko.observable(false);
            this.koChoices = ko.observableArray(column.choices);
            this.koHasError = ko.observable(false);
            this.koChoicesText = ko.observable(this.getChoicesText());
            this.choicesEditor = new SurveyPropertyItemValues(null);
            this.choicesEditor.object = this.column;
            this.choicesEditor.value = this.koChoices();
            var self = this;
            this.onShowChoicesClick = function () { self.koShowChoices(!self.koShowChoices()); }
        }
        public hasError(): boolean {
            this.koHasError(!this.koName());
            return this.koHasError() || this.choicesEditor.hasError();
        }
        public apply() {
            this.column.name = this.koName();
            this.column.title = this.koTitle();
            this.choicesEditor.onApplyClick();
            this.column.choices = this.choicesEditor.value;
            this.koChoicesText(this.getChoicesText());
        }
        private getChoicesText(): string {
            return editorLocalization.getString("pe.items")["format"](this.koChoices().length);
        }
    }
}