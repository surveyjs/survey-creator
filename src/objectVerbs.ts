module SurveyEditor {
    export class SurveyVerbs {
        private surveyValue: Survey.Survey;
        private objValue: any;
        private choicesClasses: Array<string>;
        koVerbs: any;
        koHasVerbs: any;
        constructor() {
            this.koVerbs = ko.observableArray();
            this.koHasVerbs = ko.observable();
            var classes = Survey.JsonObject.metaData.getChildrenClasses("selectbase", true);
            this.choicesClasses = [];
            for (var i = 0; i < classes.length; i++) {
                this.choicesClasses.push(classes[i].name);
            }
        }
        public get survey(): Survey.Survey { return this.surveyValue; }
        public set survey(value: Survey.Survey) {
            if (this.survey == value) return;
            this.surveyValue = value;
        }
        public get obj(): any { return this.objValue }
        public set obj(value: any) {
            if (this.objValue == value) return;
            this.objValue = value;
            this.buildVerbs();
        }
        private buildVerbs() {
            var array = [];
            var objType = SurveyHelper.getObjectType(this.obj);
            if (objType == ObjType.Question) {
                var question = <Survey.Question>this.obj;
                if (this.survey.pages.length > 1) {
                    array.push(new SurveyVerbChangePageItem(this.survey, question));
                }
                if (this.choicesClasses.indexOf(question.getType()) > -1) {
                    array.push(new SurveyVerbChangeTypeItem(this.survey, question));
                }
            }
            this.koVerbs(array);
            this.koHasVerbs(array.length > 0);
        }
    }
    export class SurveyVerbItem {
        koItems: any;
        koSelectedItem: any;
        constructor(public survey: Survey.Survey, public question: Survey.Question) {
            this.koItems = ko.observableArray();
            this.koSelectedItem = ko.observable();
        }
        public get text(): string { return ""; }
    }
    export class SurveyVerbChangeTypeItem extends SurveyVerbItem {
        constructor(public survey: Survey.Survey, public question: Survey.Question) {
            super(survey, question);
            var classes = Survey.JsonObject.metaData.getChildrenClasses("selectbase", true);
            var array = [];
            for (var i = 0; i < classes.length; i++) {
                array.push({ value: classes[i].name, text: classes[i].name });
            }
            this.koItems(array);
            this.koSelectedItem(question.getType());
            var self = this;
            this.koSelectedItem.subscribe(function (newValue) { self.changeType(newValue); });
        }
        public get text(): string { return "Change type "; }
        private changeType(questionType: string) {
            if (questionType == this.question.getType()) return;
            var page = this.survey.getPageByQuestion(this.question);
            var index = page.questions.indexOf(this.question);
            var newQuestion = Survey.QuestionFactory.Instance.createQuestion(questionType, this.question.name);
            var jsonObj = new Survey.JsonObject();
            var json = jsonObj.toJsonObject(this.question);
            jsonObj.toObject(json, newQuestion);
            page.removeQuestion(this.question);
            page.addQuestion(newQuestion, index);
        }
    }
    export class SurveyVerbChangePageItem extends SurveyVerbItem {
        private prevPage: Survey.Page;
        constructor(public survey: Survey.Survey, public question: Survey.Question) {
            super(survey, question);
            var array = [];
            for (var i = 0; i < this.survey.pages.length; i++) {
                var page = this.survey.pages[i];
                array.push({ value: page, text: page.name });
            }
            this.koItems(array);
            this.prevPage = this.survey.getPageByQuestion(question);
            this.koSelectedItem(this.prevPage);
            var self = this;
            this.koSelectedItem.subscribe(function (newValue) { self.changePage(newValue); });
        }
        public get text(): string { return "Change page "; }
        private changePage(newPage: Survey.Page) {
            if (newPage == null || newPage == this.prevPage) return;
            this.prevPage.removeQuestion(this.question);
            newPage.addQuestion(this.question);
        }
    }
}