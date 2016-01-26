/// <reference path="objectProperty.ts" />

module SurveyEditor {
    export class SurveyObjectEditor {
        private selectedObjectValue: any;
        public koProperties: any;
        public koActiveProperty: any;
        public koTitle: any;
        public koHasObject: any;
        public koShowProperties: any;
        public onPropertyValueChanged: Survey.Event<(sender: SurveyObjectEditor, options: any) => any, any> = new Survey.Event<(sender: SurveyObjectEditor, options: any) => any, any>();

        constructor() {
            this.koProperties = ko.observableArray();
            this.koActiveProperty = ko.observable();
            this.koTitle = ko.observable("");
            this.koHasObject = ko.observable();
            this.koShowProperties = ko.observable();
            this.koShowProperties(true);
        }
        public get title(): string { return this.koTitle(); }
        public set title(value: string) { this.koTitle(value); }
        public get selectedObject(): any { return this.selectedObjectValue; }
        public set selectedObject(value: any) {
            if (this.selectedObjectValue == value) return;
            this.koHasObject(value != null);
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
        public showProperties() {
            this.koShowProperties(!this.koShowProperties()); 
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
            var propEvent = (property: SurveyObjectProperty, newValue: any) => {
                self.onPropertyValueChanged.fire(this, { property: property.property, object: property.object, newValue: newValue });
            };
            for (var i = 0; i < properties.length; i++) {
                if (!this.canShowProperty(properties[i])) continue;
                var editorType = this.getPropertyEditorType(properties[i]);
                var objectProperty = new SurveyObjectProperty(properties[i], editorType, propEvent);
                if (editorType == "dropdown") {
                    objectProperty.choices = this.getPropertyEditorChoices(properties[i]);
                }
                objectProperties.push(objectProperty);
            }
            this.koProperties(objectProperties);
            this.koActiveProperty(this.getPropertyEditor("name"));
        }
        protected getPropertyEditorType(property: Survey.JsonObjectProperty): string {
            var name = property.name;
            if (name == "showQuestionNumbers") return "dropdown";
            if (name == "choices" || name == "columns" || name == "rows" || name == "rateValues") return "itemvalues";
            if (name == "visible" || name.indexOf("is") == 0 || name.indexOf("has") == 0 || name.indexOf("show") == 0) return "boolean";
            return "text"
        }
        protected getPropertyEditorChoices(property: Survey.JsonObjectProperty): Array<string> {
            var name = property.name;
            if (name == "showQuestionNumbers") return ["on", "onPage", "off"];
            return [];
        }
        protected canShowProperty(property: Survey.JsonObjectProperty): boolean {
            var name = property.name;
            if (name == 'questions' || name == 'pages') return false;
            return true;
        }
        protected updatePropertiesObject() {
            var properties = this.koProperties();
            for (var i = 0; i < properties.length; i++) {
                properties[i].object = this.selectedObject;
            }
        }
    }
}