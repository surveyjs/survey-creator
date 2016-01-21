module SurveyEditor {

    declare type SurveyOnPropertyChangedCallback = (property: SurveyObjectProperty, newValue: any) => void;

    export class SurveyObjectProperty {
        private objectValue: any;
        private isValueUpdating: boolean;
        public name: string;
        public koValue: any;
        public koIsDefault: any;

        constructor(public property: Survey.JsonObjectProperty, onPropertyChanged: SurveyOnPropertyChangedCallback = null) {
            this.name = this.property.name;
            this.koValue = ko.observable();
            var self = this;
            this.koValue.subscribe(function (newValue) {
                if (onPropertyChanged != null && !self.isValueUpdating) onPropertyChanged(self, newValue);
            });
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
            this.isValueUpdating = false;
        }
    }
}