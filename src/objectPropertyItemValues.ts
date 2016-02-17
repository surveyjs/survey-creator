/// <reference path="objectPropertyArrays.ts" />

module SurveyEditor {

    export class SurveyPropertyItemValues extends SurveyPropertyArray{
        private value_: Array<any>;
        public koItems: any;
        public koNewValue: any;
        public koNewText: any;
        public onDeleteClick: any;
        public onAddClick: any;
        public onApplyClick: any;

        constructor(public onValueChanged: SurveyPropertyValueChangedCallback)  {
            super(onValueChanged);
            this.koItems = ko.observableArray();
            this.koNewValue = ko.observable();
            this.koNewText = ko.observable();
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
                array.push({ koValue: ko.observable(item.value), koText: ko.observable(item.text) });
            }
            this.koItems(array);
        }
        protected AddItem() {
            this.koItems.push({ koValue: ko.observable(this.koNewValue()), koText: ko.observable(this.koNewText()) });
            this.koNewValue(null);
            this.koNewText(null);
        }
        protected Apply() {
            this.value_ = [];
            for (var i = 0; i < this.koItems().length; i++) {
                var item = this.koItems()[i];
                this.value_.push({ value: item.koValue(), text: item.koText() });
            }
            if (this.onValueChanged) {
                this.onValueChanged(this.value_);
            }
        }
    }
}