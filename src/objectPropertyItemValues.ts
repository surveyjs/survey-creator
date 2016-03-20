/// <reference path="objectPropertyArrays.ts" />

module SurveyEditor {

    export class SurveyPropertyItemValues extends SurveyPropertyArray{
        private value_: Array<any>;
        public koItems: any;
        public onDeleteClick: any;
        public onAddClick: any;
        public onClearClick: any;
        public onApplyClick: any;

        constructor(public onValueChanged: SurveyPropertyValueChangedCallback)  {
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
                var item = value[i];
                array.push({ koValue: ko.observable(item.value), koText: ko.observable(item.text), koHasError: ko.observable(false) });
            }
            this.koItems(array);
        }
        protected AddItem() {
            this.koItems.push({ koValue: ko.observable(), koText: ko.observable(), koHasError: ko.observable(false) });
        }
        protected Apply() {
            if (this.hasError()) return;
            this.value_ = [];
            for (var i = 0; i < this.koItems().length; i++) {
                var item = this.koItems()[i];
                this.value_.push({ value: item.koValue(), text: item.koText() });
            }
            if (this.onValueChanged) {
                this.onValueChanged(this.value_);
            }
        }
        protected hasError(): boolean {
            var result = false;
            for (var i = 0; i < this.koItems().length; i++) {
                var item = this.koItems()[i];
                item.koHasError(!item.koValue());
                result = result || item.koHasError();
            }
            return result;
        }
    }
}