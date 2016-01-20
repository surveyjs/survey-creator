module SurveyEditor {
    export class SurveyObjectProperty {
        private objectValue: any;
        public name: string;
        public koValue: any;
        public koIsDefault: any;
        constructor(public property: Survey.JsonObjectProperty) {
            this.name = this.property.name;
            this.koValue = ko.observable();
            var self = this;
            this.koIsDefault = ko.computed(function () { return self.property.isDefaultValue(self.koValue()); }); 
        }
        public get object(): any { return this.objectValue; }
        public set object(value: any) {
            this.objectValue = value;
            this.updateValue();
        }
        protected updateValue() {
            this.koValue(this.object[this.name]);
        }
    }
}