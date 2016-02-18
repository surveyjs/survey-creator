module SurveyEditor {
    export declare type SurveyPropertyValueChangedCallback = (newValue: any) => void;
    export class SurveyPropertyArray {
        public object: any = null;
        public title: any;
        constructor(public onValueChanged: SurveyPropertyValueChangedCallback) {
            this.title = ko.observable();
        }
        public set value(value: any) { }
    }
}
