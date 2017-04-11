import * as Survey from "survey-knockout";
import { SurveyEditor } from "./editor";

class ServiceAPI extends Survey.dxSurveyService {
    constructor(private baseUrl: string, private accessKey: string) {
        super();
    }

    public getActiveSurveys(onLoad: (success: boolean, result: string, response: any) => void) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + '/getActive?accessKey=' + this.accessKey);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = JSON.parse(xhr.response);
            onLoad(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    }
    public createSurvey(name: string, onCreate: (success: boolean, result: string, response: any) => void) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + '/create?accessKey=' + this.accessKey + "&name=" + name);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = JSON.parse(xhr.response);
            onCreate(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    }
    public saveSurvey(id: string, json: string, onSave?: (success: boolean, result: string, response: any) => void) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.baseUrl + '/changeJson?accessKey=' + this.accessKey);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            debugger;
            var result = JSON.parse(xhr.response);
            !!onSave && onSave(xhr.status == 200, result, xhr.response);
        };
        xhr.send(JSON.stringify({ Id: id, Json: json, Text: json }));
    }
}

export interface ISurveyInfo {
    name: KnockoutObservable<string>;
    id: string;
    postId: string;
}

export class SurveyDescription implements ISurveyInfo {
    constructor(public name = ko.observable(""), public createdAt = new Date(Date.now()).toDateString(), public id = "", public resultId = "", public postId = "") {
    }
}


export class SurveysManager {
    static StorageKey = "mySurveys";
    private api: ServiceAPI;

    getSurveys(): Array<SurveyDescription> {
        debugger;
        return JSON.parse(window.localStorage.getItem(SurveysManager.StorageKey) || "[]").map(item => {
            return new SurveyDescription(ko.observable<string>(item.name), item.createdAt, item.id, item.resultId, item.postId);
        });
    }

    setSurveys(surveys: Array<ISurveyInfo>) {
        debugger;
        window.localStorage.setItem(SurveysManager.StorageKey, ko.toJSON(surveys));
    }

    constructor(private baseUrl: string, private accessKey: string, private editor: SurveyEditor) {
        this.api = new ServiceAPI(baseUrl + "/api/MySurveys", accessKey);
        editor.onModified.add((s, o) => {
            debugger;
            if(!editor.surveyId) {
                this.api.createSurvey("NewSurvey", (success: boolean, result: any, response: any) => {
                    debugger;
                    this.surveys.push(new SurveyDescription(ko.observable(result.Name), result.CreatedAt, result.Id, result.ResultId, result.PostId));
                    this.setSurveys(this.surveys());
                    editor.surveyId = result.Id;
                    editor.surveyPostId = result.PostId;
                    this.api.saveSurvey(result.Id, editor.text);
                });
            }
        });
        editor.saveSurveyFunc = () => {
            debugger;
            if(!!editor.surveyId) {
                this.api.saveSurvey(editor.surveyId, editor.text);
            }
        };
        this.surveys(this.getSurveys());
        this.currentSurvey(this.surveys()[0]);
        ko.computed(() => {
            debugger;
            var survey = this.currentSurvey();
            editor.loadSurvey(survey.id);
            editor.surveyId = survey.id;
            editor.surveyPostId = survey.postId;
            window.location.hash = "#" + survey.id;
        });
    }

    surveys = ko.observableArray<ISurveyInfo>();
    currentSurvey = ko.observable<ISurveyInfo>();
}