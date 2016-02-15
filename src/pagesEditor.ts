
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
        public removePage(page: Survey.Page) {
            var index = this.getIndexByPage(page);
            if (index > -1) {
                this.koPages.splice(index, 1);
            }
        }
        public changeName(page: Survey.Page) {
            var index = this.getIndexByPage(page);
            if (index > -1) {
                this.koPages()[index].title(page.name);
            }
        }
        protected getIndexByPage(page: Survey.Page): number {
            var pages = this.koPages();
            for (var i = 0; i < pages.length; i++) {
                if (pages[i].page == page) return i;
            }
            return -1;
        }
        protected updatePages() {
            if (this.surveyValue == null) {
                this.koPages([]);
                return;
            }
            var pages = [];
            for (var i = 0; i < this.surveyValue.pages.length; i++) {
                var page = this.surveyValue.pages[i];
                pages.push({
                    title: ko.observable(page.name), page: page, koSelected: ko.observable(false)
                });
            }
            this.koPages(pages);
        }
    }
}