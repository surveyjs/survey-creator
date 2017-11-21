import * as ko from "knockout";
import {SurveyHelper, ObjType} from "./surveyHelper";
import {editorLocalization} from "./editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyLiveTester {
    private json: any;
    koIsRunning: any;
    selectTestClick: any;
    selectPageClick: any;
    koResultText: any;
    survey: Survey.Survey;
    koSurvey: any;
    koPages: any;

    onSurveyCreatedCallback: (survey: Survey.Survey)=> any;
    constructor() {
        this.koIsRunning = ko.observable(true);
        this.koResultText = ko.observable("");
        this.koPages = ko.observableArray([]);
        var self = this;
        this.selectTestClick = function() {self.testAgain(); }
        this.selectPageClick = function(pageItem) {
            if(self.survey) {
                self.survey.currentPage = pageItem.page;
            }
        };
        this.survey = new Survey.Survey();
        this.koSurvey = ko.observable(this.survey);
    }
    public setJSON(json: any) {
        this.json = json;
        if (json != null) {
            if (json.cookieName) {
                delete json.cookieName;
            }
        } 
        this.survey = json ? new Survey.Survey(json): new Survey.Survey();
        if(this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
        var self = this;
        this.survey.onComplete.add((sender: Survey.Survey) => { 
            self.koIsRunning(false);
            self.koResultText(self.surveyResultsText + JSON.stringify(self.survey.data));
        });
        this.survey.onCurrentPageChanged.add((sender: Survey.Survey, options) => {
            self.setActivePageItem(options.oldCurrentPage, false);
            self.setActivePageItem(options.newCurrentPage, true);
        });
        this.survey.onPageVisibleChanged.add((sender: Survey.Survey, options) => {
            var item = self.getPageItemByPage(options.page);
            if(item) {
                item.koVisible(options.visible);
            }
        });
    }
    public show() {
        var pages = [];
        for(var i = 0; i < this.survey.pages.length; i ++) {
            var page = this.survey.pages[i];
            pages.push({page: page, title: SurveyHelper.getObjectName(page), 
                koVisible: ko.observable(page.isVisible), koActive: ko.observable(page === this.survey.currentPage)});
        }
        this.koPages(pages);
        this.koSurvey(this.survey);
        this.koIsRunning(true);
    }
    public get testSurveyAgainText() { return  editorLocalization.getString("ed.testSurveyAgain"); }
    public get surveyResultsText() { return editorLocalization.getString("ed.surveyResults"); }
    public get selectPageText() { return  editorLocalization.getString("ts.selectPage"); }
    private testAgain() {
        this.setJSON(this.json);
        this.show();
    }
    private setActivePageItem(page: Survey.Page, val: boolean) {
        var item = this.getPageItemByPage(page);
        if(item) {
            item.koActive(val);
        }
    }
    private getPageItemByPage(page: Survey.Page) : any {
        var items = this.koPages();
        for(var i = 0; i < items.length; i ++) {
            if(items[i].page === page) return items[i];
        }
        return null;
    }
}    