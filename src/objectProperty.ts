/// <reference path="propertyEditors/propertyEditorBase.ts" />

module SurveyEditor {

    export declare type SurveyOnPropertyChangedCallback = (property: SurveyObjectProperty, newValue: any) => void;

    export class SurveyObjectProperty {
        private objectValue: any;
        private isValueUpdating: boolean;
        public name: string;
        public displayName: string;
        public title: string;
        public koValue: any;
        public koText: any;
        public modalName: string; 
        public modalNameTarget: string;
        public koIsDefault: any;
        public editor: SurveyPropertyEditorBase;
        public editorType: string;
        public baseEditorType: string;
        public choices: Array<any>;

        constructor(public property: Survey.JsonObjectProperty, onPropertyChanged: SurveyOnPropertyChangedCallback = null) {
            this.name = this.property.name;
            this.koValue = ko.observable();
            this.choices = property.choices;
            var self = this;
            var onItemChanged = function (newValue: any) { self.koValue(newValue); };
            this.editorType = property.type;
            if (this.choices != null) {
                this.editorType = "dropdown";
            }
            this.editor = SurveyPropertyEditorBase.createEditor(this.editorType, onItemChanged);
            this.editorType = this.editor.editorType;
            this.modalName = "modelEditor" + this.editorType + this.name;
            this.modalNameTarget = "#" + this.modalName;
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
            this.koValue(this.getValue());
            this.editor.setObject(this.object);
            this.editor.setTitle(editorLocalization.getString("pe.editProperty")["format"](this.property.name));
            this.editor.value = this.koValue();
            this.isValueUpdating = false;
        }
        protected getValue(): any {
            if (this.property.hasToUseGetValue) return this.property.getValue(this.object);
            return this.object[this.name];
        }
        protected getValueText(value: any): string { return this.editor.getValueText(value); }
    }
}