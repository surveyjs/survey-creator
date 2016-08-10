/// <reference path="objectPropertyArrays.ts" />

module SurveyEditor {
    export class SurveyPropertyHtml extends SurveyPropertyArray {
        private koValue: any;
        private _value: string;

        constructor(public onValueChanged: SurveyPropertyValueChangedCallback) {
            super(onValueChanged);
            this.koValue = ko.observable();
        }
        public get value(): any { return this._value; }
        public set value(value: any) {
            this._value = value;
            this.koValue(value);
        }
        protected onBeforeApply() {
            this._value = this.koValue();
        }
    }
}