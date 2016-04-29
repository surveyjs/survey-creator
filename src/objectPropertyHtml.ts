/// <reference path="objectPropertyArrays.ts" />

module SurveyEditor {
    export class SurveyPropertyHtml extends SurveyPropertyArray {
        private koValue: any;
        public onApplyClick: any;

        constructor(public onValueChanged: SurveyPropertyValueChangedCallback) {
            super(onValueChanged);
            this.koValue = ko.observable();
            var self = this;
            self.onApplyClick = function () { self.Apply(); };
        }
        public get value(): any { return this.koValue(); }
        public set value(value: any) {
            this.koValue(value);
        }
        protected Apply() {
            if (this.onValueChanged) {
                this.onValueChanged(this.value);
            }
        }
    }
}