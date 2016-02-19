module SurveyEditor {

    export class SurveyPropertyValidators extends SurveyPropertyArray {
        private value_: Array<any>;
        private selectedObjectEditor: SurveyObjectEditor;
        public koItems: any;
        public koSelected: any;
        public availableValidators: Array<string> = [];
        public onDeleteClick: any;
        public onAddClick: any;
        public onApplyClick: any;
        private validatorsClasses: Array<Survey.JsonMetadataClass> = [];

        constructor(public onValueChanged: SurveyPropertyValueChangedCallback) {
            super(onValueChanged);
            var self = this;
            this.selectedObjectEditor = new SurveyObjectEditor();
            this.selectedObjectEditor.onPropertyValueChanged.add((sender, options) => {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.koItems = ko.observableArray();
            this.koSelected = ko.observable(null);
            this.koSelected.subscribe(function (newValue) { self.selectedObjectEditor.selectedObject = newValue != null ? newValue.validator : null; });
            this.validatorsClasses = Survey.JsonObject.metaData.getChildrenClasses("surveyvalidator", true);
            this.availableValidators = this.getAvailableValidators();
            this.value_ = [];
            this.onDeleteClick = function () { self.koItems.remove(self.koSelected()); }
            this.onAddClick = function (validatorType) { self.addItem(validatorType); }
            this.onApplyClick = function () { self.apply(); };
        }
        public get value(): any { return this.value_; }
        public set value(value: any) {
            if (value == null || !Array.isArray(value)) value = [];
            this.value_ = value;
            var array = [];
            var jsonObj = new Survey.JsonObject();
            for (var i = 0; i < value.length; i++) {
                var validator = Survey.JsonObject.metaData.createClass(value[i].getType());
                jsonObj.toObject(value[i], validator);
                array.push(new SurveyPropertyValidatorItem(validator));
            }
            this.koItems(array);
            this.koSelected(array.length > 0 ? array[0] : null);
        }
        private apply() {
            this.value_ = [];
            var array = this.koItems();
            for (var i = 0; i < array.length; i++) {
                this.value_.push(array[i].validator);
            }
            if (this.onValueChanged) {
                this.onValueChanged(this.value_);
            }
        }
        private addItem(validatorType: string) {
            var newValidator = new SurveyPropertyValidatorItem(Survey.JsonObject.metaData.createClass(validatorType));
            this.koItems.push(newValidator);
            this.koSelected(newValidator);
        }
        private getAvailableValidators(): Array<string> {
            var result = [];
            for (var i = 0; i < this.validatorsClasses.length; i++) {
                result.push(this.validatorsClasses[i].name);
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

}