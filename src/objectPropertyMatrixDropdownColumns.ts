/// <reference path="objectPropertyArrays.ts" />

module SurveyEditor {

    export class SurveyPropertyMatrixDropdownColumns extends SurveyPropertyArray {
        private value_: Array<any>;
        public koItems: any;
        public onDeleteClick: any;
        public onAddClick: any;
        public onClearClick: any;

        constructor(public onValueChanged: SurveyPropertyValueChangedCallback) {
            super(onValueChanged);
            this.koItems = ko.observableArray();
            this.value_ = [];
            var self = this;
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
        protected onBeforeApply() {
            this.value_ = [];
            for (var i = 0; i < this.koItems().length; i++) {
                var item = this.koItems()[i];
                item.apply();
                this.value_.push(item.column);
            }
        }
        public hasError(): boolean {
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
        koName: any; koTitle: any; koCellType: any; koShowChoices: any;
        koHasError: any; koColCount: any; koIsRequired: any; koHasOther: any;
        koHasChoices: any; koHasColCount: any;
        public onShowChoicesClick: any;
        public cellTypeChoices: Array<any>;
        public colCountChoices: Array<any>;
        constructor(public column: Survey.MatrixDropdownColumn) {
            this.cellTypeChoices = this.getPropertyChoices("cellType");
            this.colCountChoices = this.getPropertyChoices("colCount");
            this.koName = ko.observable(column.name);
            this.koCellType = ko.observable(column.cellType); 
            this.koColCount = ko.observable(column.colCount);
            this.koIsRequired = ko.observable(column["isRequired"] ? true : false);
            this.koHasOther = ko.observable(column["koHasOther"] ? true : false);
            this.koTitle = ko.observable(column.name === column.title ? "" : column.title);
            this.koShowChoices = ko.observable(false);
            this.koChoices = ko.observableArray(column.choices);
            this.koHasError = ko.observable(false);
            this.choicesEditor = new SurveyPropertyItemValues(null);
            this.choicesEditor.object = this.column;
            this.choicesEditor.value = this.koChoices();
            var self = this;
            this.onShowChoicesClick = function () { self.koShowChoices(!self.koShowChoices()); }
            this.koHasChoices = ko.computed(function () { return self.koCellType() == "dropdown" || self.koCellType() == "checkbox" || self.koCellType() == "radiogroup"; });
            this.koHasColCount = ko.computed(function () { return self.koCellType() == "checkbox" || self.koCellType() == "radiogroup"; });
        }
        public hasError(): boolean {
            this.koHasError(!this.koName());
            return this.koHasError() || this.choicesEditor.hasError();
        }
        public apply() {
            this.column.name = this.koName();
            this.column.title = this.koTitle();
            this.column.cellType = this.koCellType();
            this.column.colCount = this.koColCount();
            //TODO
            this.column["isRequired"] = this.koIsRequired();
            this.column["hasOther"] = this.koHasOther();

            this.choicesEditor.onApplyClick();
            this.column.choices = this.choicesEditor.value;
        }
        private getPropertyChoices(propetyName: string): Array<any> {
            var properties = Survey.JsonObject.metaData.getProperties("matrixdropdowncolumn");
            for (var i = 0; i < properties.length; i++) {
                if (properties[i].name == propetyName) return properties[i].choices;
            }
            return [];
        }
    }
}