module SurveyEditor {

    declare type SurveyOnPropertyChangedCallback = (property: SurveyObjectProperty, newValue: any) => void;

    export class SurveyObjectProperty {
        private objectValue: any;
        private isValueUpdating: boolean;
        public name: string;
        public koValue: any;
        public koText: any;
        public itemValues: SurveyPropertyItemValue;
        public koIsDefault: any;
        public choices: Array<string>;

        constructor(public property: Survey.JsonObjectProperty, public editorType: string, onPropertyChanged: SurveyOnPropertyChangedCallback = null) {
            this.name = this.property.name;
            this.koValue = ko.observable();
            var self = this;
            this.itemValues = null;
            if (editorType == "itemvalues") {
                this.itemValues = new SurveyPropertyItemValue((newValue: Array<any>) => {
                    self.koValue(newValue);
                });
            }
            this.koValue.subscribe(function (newValue) {
                if (self.object == null) return;
                if (self.object[self.name] == newValue) return;
                if (onPropertyChanged != null && !self.isValueUpdating) onPropertyChanged(self, newValue);
            });
            this.koText = ko.computed(() => { return self.getValueText(self.koValue()); });
            this.koIsDefault = ko.computed(function () { return self.property.isDefaultValue(self.koValue()); }); 
        }
        public get object(): any { return this.objectValue; }
        public set object(value: any) {
            this.objectValue = value;
            this.updateValue();
        }
        protected updateValue() {
            this.isValueUpdating = true;
            this.koValue(this.object[this.name]);
            if (this.itemValues) {
                this.itemValues.value = this.koValue();
            }
            this.isValueUpdating = false;
        }
        protected getValueText(value: any): string {
            if (value != null && Array.isArray(value)) {
                return "[ Items: "+ value.length + " ]";
            }
            return value;
        }
    }

    declare type SurveyPropertyItemValueChangedCallback = (newValue: Array<any>) => void;
    export class SurveyPropertyItemValue {
        private value_: Array<any>;
        public koItems: any;
        public koNewValue: any;
        public koNewText: any;
        public onDeleteClick: any;
        public onAddClick: any;
        public onApplyClick: any;

        constructor(public onValueChanged: SurveyPropertyItemValueChangedCallback) {
            this.koItems = ko.observableArray();
            this.koNewValue = ko.observable();
            this.koNewText = ko.observable();
            this.value_ = []; 
            var self = this;
            self.onApplyClick = function () { self.Apply(); }
            self.onDeleteClick = function (item) { self.koItems.remove(item); }
            self.onAddClick = function () { self.AddItem(); }
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