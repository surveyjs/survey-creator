module SurveyEditor {

    export class SurveyPropertyTriggers extends SurveyPropertyArray {
        private value_: Array<any>;
        public koItems: any;
        koQuestions: any; koPages: any;
        public koSelected: any;
        public onDeleteClick: any;
        public onAddClick: any;
        public onApplyClick: any;

        constructor(public onValueChanged: SurveyPropertyValueChangedCallback) {
            super(onValueChanged);
            var self = this;
            this.koItems = ko.observableArray();
            this.koSelected = ko.observable(null);
            this.koPages = ko.observableArray();
            this.koQuestions = ko.observableArray();
            this.value_ = [];
            this.onDeleteClick = function () { self.koItems.remove(self.koSelected()); }
            this.onAddClick = function () { self.addItem(); }
            this.onApplyClick = function () { };
        }
        public get value(): any { return this.value_; }
        public set value(value: any) {
            if (value == null || !Array.isArray(value)) value = [];
            this.value_ = value;
            var array = [];
            if (this.object) {
                this.koPages(this.getNames((<Survey.Survey>this.object).pages));
                this.koQuestions(this.getNames((<Survey.Survey>this.object).getAllQuestions()));
            }
            this.koItems(array);
            this.koSelected(array.length > 0 ? array[0] : null);
        }
        private getNames(items: Array<any>): Array<string> {
            var names = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item["name"]) {
                    names.push(item["name"]);
                }
            }
            return names;
        }
        private addItem() {
            var trigger = new SurveyPropertyTrigger(new Survey.SurveyTriggerVisible(), this.koPages, this.koQuestions);
            this.koItems.push(trigger);
        }
    }

    export class SurveyPropertyTrigger {
        koName: any; koOperator: any; koValue: any;
        koText: any; koIsValid: any;
        public pages: SurveyPropertyTriggerObjects;
        public questions: SurveyPropertyTriggerObjects;

        constructor(trigger: Survey.SurveyTriggerVisible, koPages: any, koQuestions: any) {
            this.koName = ko.observable(trigger.name);
            this.koOperator = ko.observable(trigger.operator);
            this.koValue = ko.observable(trigger.value);
            this.pages = new SurveyPropertyTriggerObjects("Pages:", koPages(), trigger.pages);
            this.questions = new SurveyPropertyTriggerObjects("Questions:", koQuestions(), trigger.questions);
            var self = this;
            this.koIsValid = ko.computed(() => { return self.koName() && self.koValue(); });
            this.koText = ko.computed(() => { return self.koIsValid() ? "Run if '" + self.koName() + "' " + self.koOperator() + " " + self.koValue() : "The trigger is not set"; });
        }
    }
    export class SurveyPropertyTriggerObjects {
        objects: any;
        choosen: any;
        selected: any;
        choosenSelected: any;
        public onDeleteClick: any;
        public onAddClick: any;
        constructor(public title: string, allObjects: Array<string>, choosenObjects: Array<string>) {
            this.choosen = ko.observableArray(choosenObjects);
            var array = [];
            for (var i = 0; i < allObjects.length; i++) {
                var item = allObjects[i];
                if (choosenObjects.indexOf(item) < 0) {
                    array.push(item);
                }
            }
            this.objects = ko.observableArray(array);
            this.selected = ko.observable();
            this.choosenSelected = ko.observable();
            var self = this;
            this.onDeleteClick = function () { self.deleteItem(); }
            this.onAddClick = function () { self.addItem(); }
        }
        private deleteItem() {
            this.changeItems(this.choosenSelected(), this.choosen, this.objects);
        }
        private addItem() {
            this.changeItems(this.selected(), this.objects, this.choosen);
        }
        private changeItems(item: string, removedFrom: any, addTo: any) {
            removedFrom.remove(item);
            addTo.push(item);
            removedFrom.sort();
            addTo.sort();
        }
    }
}