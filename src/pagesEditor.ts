
module SurveyEditor {
    declare type SurveyAddNewPageCallback = () => void;
    declare type SurveySelectPageCallback = (page: Survey.Page) => void;
    export class SurveyPagesEditor {
        surveyValue: Survey.Survey;
        koPages: any;
        koIsValid: any;
        selectPageClick: any;
        onAddNewPageCallback: SurveyAddNewPageCallback;
        onSelectPageCallback: SurveySelectPageCallback;

        constructor(onAddNewPageCallback: SurveyAddNewPageCallback = null, onSelectPageCallback: SurveySelectPageCallback = null) {
            this.koPages = ko.observableArray();
            this.koIsValid = ko.observable(false);
            this.onAddNewPageCallback = onAddNewPageCallback;
            this.onSelectPageCallback = onSelectPageCallback;
            var self = this;
            self.selectPageClick = function(pageItem) {
                if (self.onSelectPageCallback) {
                    self.onSelectPageCallback(pageItem.page);
                }
            } 
        }
        public get survey(): Survey.Survey { return this.surveyValue; }
        public set survey(value: Survey.Survey) {
            this.surveyValue = value;
            this.koIsValid(this.surveyValue != null);
            this.updatePages();
        }
        public setSelectedPage(page: Survey.Page) {
            var pages = this.koPages();
            for (var i = 0; i < pages.length; i++) {
                pages[i].koSelected(pages[i].page == page);
            }
        }
        public addNewPageClick() {
            if (this.onAddNewPageCallback) {
                this.onAddNewPageCallback();
            }
        }
        protected updatePages() {
            if (this.surveyValue == null) {
                this.koPages([]);
                return;
            }
            var pages = [];
            for (var i = 0; i < this.surveyValue.pages.length; i++) {
                pages.push({
                    title: 'Page ' + (i + 1), page: this.surveyValue.pages[i], koSelected: ko.observable(false)
                });
            }
            this.koPages(pages);
        }
    }
}