import * as ko from "knockout";
import {SurveyHelper, ObjType} from "./surveyHelper";
import {editorLocalization} from "./editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyLiveTester {
    private json: any;
    koIsRunning: any;
    selectTestClick: any;
    koResultText: any;
    survey: Survey.Survey;
    koSurvey: any;
    onSurveyCreatedCallback: (survey: Survey.Survey)=> any;
    constructor() {
        this.koIsRunning = ko.observable(true);
        this.koResultText = ko.observable("");
        var self = this;
        this.selectTestClick = function() {self.testAgain(); }
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
    }
    public show() {
        this.koSurvey(this.survey);
        this.koIsRunning(true);
    }
    public get testSurveyAgainText() { return  editorLocalization.getString("ed.testSurveyAgain"); }
    public get surveyResultsText() { return  editorLocalization.getString("ed.surveyResults"); }
    private testAgain() {
        this.setJSON(this.json);
        this.show();
    }
}    