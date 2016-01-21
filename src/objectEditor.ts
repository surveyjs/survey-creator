/// <reference path="objectProperty.ts" />

module SurveyEditor {
    export class SurveyObjectEditor {
        private selectedObjectValue: any;
        public koProperties: any;
        public koActiveProperty: any;
        public onPropertyValueChanged: Survey.Event<(sender: SurveyObjectEditor, options: any) => any, any> = new Survey.Event<(sender: SurveyObjectEditor, options: any) => any, any>();

        constructor() {
            this.koProperties = ko.observableArray();
            this.koActiveProperty = ko.observable();
        }
        public get selectedObject(): any { return this.selectedObjectValue; }
        public set selectedObject(value: any) {
            if (this.selectedObjectValue == value) return;
            this.selectedObjectValue = value;
            this.updateProperties();
            this.updatePropertiesObject();
        }
        public getPropertyEditor(name: string) {
            var properties = this.koProperties();
            for (var i = 0; i < properties.length; i++) {
                if (properties[i].name == name) return properties[i];
            }
            return null;
        }
        public changeActiveProperty(property: SurveyObjectProperty) {
            this.koActiveProperty(property);
        }
        public ObjectChanged() {
            this.updatePropertiesObject();
        }
        protected updateProperties() {
            if (!this.selectedObject || !this.selectedObject.getType) {
                this.koProperties([]);
                this.koActiveProperty(null);
                return;
            }
            var properties = Survey.JsonObject.metaData.getProperties(this.selectedObject.getType());
            properties.sort((a, b) => {
                if (a.name == b.name) return 0;
                if (a.name > b.name) return 1;
                return -1;
            });
            var objectProperties = [];
            var self = this;
            for (var i = 0; i < properties.length; i++) {
                objectProperties.push(new SurveyObjectProperty(properties[i], (property: SurveyObjectProperty, newValue: any) => {
                    self.onPropertyValueChanged.fire(this, { property: property.property, object: property.object, newValue: newValue });
                }));
            }
            this.koProperties(objectProperties);
            this.koActiveProperty(this.getPropertyEditor("name"));
        }
        protected updatePropertiesObject() {
            var properties = this.koProperties();
            for (var i = 0; i < properties.length; i++) {
                properties[i].object = this.selectedObject;
            }
        }
    }
}