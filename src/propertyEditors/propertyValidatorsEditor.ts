/// <reference path="propertyEditorBase.ts" />
/// <reference path="propertyModalEditor.ts" />
/// <reference path="propertyItemsEditor.ts" />
module SurveyEditor {
    export class SurveyPropertyValidatorsEditor extends SurveyPropertyItemsEditor {
        private selectedObjectEditor: SurveyObjectEditor;
        public koSelected: any;
        public availableValidators: Array<string> = [];
        private validatorClasses: Array<Survey.JsonMetadataClass> = [];
        constructor() {
            super();
            var self = this;
            this.selectedObjectEditor = new SurveyObjectEditor();
            this.selectedObjectEditor.onPropertyValueChanged.add((sender, options) => {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.koSelected = ko.observable(null);
            this.koSelected.subscribe(function (newValue) { self.selectedObjectEditor.selectedObject = newValue != null ? newValue.validator : null; });
            this.validatorClasses = Survey.JsonObject.metaData.getChildrenClasses("surveyvalidator", true);
            this.availableValidators = this.getAvailableValidators();
            this.onDeleteClick = function () { self.koItems.remove(self.koSelected()); }
            this.onAddClick = function (validatorType) { self.addItem(validatorType); }
        }
        public get editorType(): string { return "validators"; }
        protected onValueChanged() {
            super.onValueChanged();
            if (this.koSelected) {
                this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
            }
        }
        protected createEditorItem(item: any) {
            var jsonObj = new Survey.JsonObject();
            var validator = Survey.JsonObject.metaData.createClass(item.getType());
            jsonObj.toObject(item, validator);
            return new SurveyPropertyValidatorItem(validator);
        }
        protected createItemFromEditorItem(editorItem: any) {
            var item = <SurveyPropertyValidatorItem>editorItem;
            return item.validator;
        }
        private addItem(validatorType: string) {
            var newValidator = new SurveyPropertyValidatorItem(Survey.JsonObject.metaData.createClass(validatorType));
            this.koItems.push(newValidator);
            this.koSelected(newValidator);
        }
        private getAvailableValidators(): Array<string> {
            var result = [];
            for (var i = 0; i < this.validatorClasses.length; i++) {
                result.push(this.validatorClasses[i].name);
            }
            return result;
        }
        private onPropertyValueChanged(property: Survey.JsonObjectProperty, obj: any, newValue: any) {
            if (this.koSelected() == null) return;
            this.koSelected().validator[property.name] = newValue;
        }
    }

    export class SurveyPropertyValidatorItem {
        public text: string;
        constructor(public validator: Survey.SurveyValidator) {
            this.text = validator.getType();
        }
    }


    SurveyPropertyEditorBase.registerEditor("validators", function (): SurveyPropertyEditorBase { return new SurveyPropertyValidatorsEditor(); });
}