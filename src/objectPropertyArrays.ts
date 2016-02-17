module SurveyEditor {
    export declare type SurveyPropertyValueChangedCallback = (newValue: any) => void;
    export class SurveyPropertyArray {
        public object: any = null;
        constructor(public onValueChanged: SurveyPropertyValueChangedCallback) {
        }
        public set value(value: any) { }
    }
}
