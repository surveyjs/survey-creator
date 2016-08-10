module SurveyEditor {
    export declare type SurveyPropertyValueChangedCallback = (newValue: any) => void;
    export class SurveyPropertyArray {
        public object: any = null;
        public title: any;
        public onApplyClick: any;
        public onResetClick: any;
        constructor(public onValueChanged: SurveyPropertyValueChangedCallback) {
            this.title = ko.observable();
            var self = this;
            self.onApplyClick = function () { self.apply(); };
            self.onResetClick = function () { self.reset(); };
        }
        public get value(): any { return null; }
        public set value(value: any) { }
        private reset() {
            this.value = this.value;
        }
        private apply() {
            if (this.hasError()) return
            this.onBeforeApply();
            if (this.onValueChanged) {
                this.onValueChanged(this.value);
            }
        }
        protected onBeforeApply() { }
        public hasError(): boolean { return false;}
    }
}
