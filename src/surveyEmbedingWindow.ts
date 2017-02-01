import * as ko from "knockout";
import {SurveyJSON5} from "./json5";

export class SurveyEmbedingWindow {
    private jsonValue: any;
    private surveyEmbedingHead: AceAjax.Editor;
    private surveyEmbedingJava: AceAjax.Editor;
    private surveyEmbedingBody: AceAjax.Editor;
    koHeadText: any;
    koBodyText: any;
    koJavaText: any;
    public surveyId: string = null;
    public surveyPostId: string = null;
    public generateValidJSON: boolean = false;
    koShowAsWindow: any;
    koScriptUsing: any;
    koHasIds: any;
    koLoadSurvey: any;
    koLibraryVersion: any;
    koVisibleHtml: any;
    private platformHeaders = {
        "angular": "import { Component } from '@angular/core';\nimport * as Survey from 'survey-angular';",
        "jquery": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>\n<script src=\"js/survey.jquery.min.js\"></script>",
        "knockout": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js\"></script>\n<script src=\"js/survey.ko.min.js\"></script>",
        "react": "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport * as Survey from 'survey-react';"
    };
    private platformJSonPage = {
        "angular": "@Component({\n  selector: 'ng-app',\n        template: \n        <div id='surveyElement'></div>\",\n})\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n       Survey.SurveyNG.render(\"surveyElement\", { model: survey });\n    }\n}",
        "jquery": "var survey = new Survey.Model(surveyJSON);\n$(\"#surveyContainer\").Survey({\n    model: survey,\n    onComplete: sendDataToServer\n});",
        "knockout": "var survey = new Survey.Model(surveyJSON, \"surveyContainer\");\nsurvey.onComplete.add(sendDataToServer);",
        "react": "ReactDOM.render(\n    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById(\"surveyContainer\"));"
    };
    private platformJSonWindow = {
        "angular": "@Component({\n  selector: 'ng-app',\n        template: \n        <div id='surveyElement'></div>\",\n})\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n       Survey.SurveyWindowNG.render(\"surveyElement\", { model: survey });\n    }\n}",
        "jquery": "var survey = new Survey.Model(surveyJSON);\n$(\"#surveyContainer\").SurveyWindow({\n    model: survey,\n    onComplete: sendDataToServer\n});",
        "knockout": "var survey = new Survey.Model(surveyJSON);\nsurveyWindow.show();\nsurvey.onComplete.add(sendDataToServer);",
        "react": "ReactDOM.render(\n    <Survey.SurveyWindow json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById(\"surveyContainer\"));"
    };
    private platformHtmlonPage = {
        "angular": "<ng-app></ng-app>",
        "jquery": "<div id=\"surveyContainer\"></div>",
        "knockout": "<div id=\"surveyContainer\"></div>",
        "react": "<div id=\"surveyContainer\"></div>"
    };
    private platformHtmlonWindow = {
        "angular": "<ng-app></ng-app>",
        "jquery": "<div id=\"surveyContainer\"></div>",
        "knockout": "",
        "react": "<div id=\"surveyContainer\"></div>"
    };
    constructor() {
        var self = this;
        this.koLibraryVersion = ko.observable("jquery");
        this.koShowAsWindow = ko.observable("page");
        this.koScriptUsing = ko.observable("bootstrap");
        this.koHasIds = ko.observable(false);
        this.koLoadSurvey = ko.observable(false);

        this.koHeadText = ko.observable("");
        this.koJavaText = ko.observable("");
        this.koBodyText = ko.observable("");

        this.koVisibleHtml = ko.computed(function () { return self.koShowAsWindow() == "page" || self.platformHtmlonWindow[self.koLibraryVersion()] != ""; });
        this.koLibraryVersion.subscribe(function (newValue) { self.setHeadText(); self.setJavaTest(); self.setBodyText(); });
        this.koShowAsWindow.subscribe(function (newValue) { self.setJavaTest(); self.setBodyText(); });
        this.koScriptUsing.subscribe(function (newValue) { self.setHeadText(); self.setJavaTest(); });
        this.koLoadSurvey.subscribe(function (newValue) { self.setJavaTest(); });
        this.surveyEmbedingHead = null;
    }
    public get json(): any { return this.jsonValue; }
    public set json(value: any) { this.jsonValue = value; }
    public get hasAceEditor(): boolean { return typeof ace !== "undefined"; }
    public show() {
        if (this.hasAceEditor && this.surveyEmbedingHead == null) {
            this.surveyEmbedingHead = this.createEditor("surveyEmbedingHead");
            this.surveyEmbedingBody = this.createEditor("surveyEmbedingBody");
            this.surveyEmbedingJava = this.createEditor("surveyEmbedingJava");
        }
        this.koHasIds(this.surveyId && this.surveyPostId);
        this.setBodyText();
        this.setHeadText();
        this.setJavaTest();
    }
    private setBodyText() {
        this.setTextToEditor(this.surveyEmbedingBody, this.koBodyText, this.platformHtmlonPage[this.koLibraryVersion()]);
    }
    private setHeadText() {
        var str = this.platformHeaders[this.koLibraryVersion()];
        if (this.koScriptUsing() != "bootstrap") {
            str += "\n<link href=\"css/survey.css\" type=\"text/css\" rel=\"stylesheet\" />";
        }
        this.setTextToEditor(this.surveyEmbedingHead, this.koHeadText, str);
    }
    private setJavaTest() {
        this.setTextToEditor(this.surveyEmbedingJava, this.koJavaText, this.getJavaText());
    }
    private createEditor(elementName: string): AceAjax.Editor {
        var editor = ace.edit(elementName);
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/json");
        editor.setShowPrintMargin(false);
        editor.renderer.setShowGutter(false);
        editor.setReadOnly(true);
        return editor;
    }
    private getJavaText(): string {
        var isOnPage = this.koShowAsWindow() == "page";
        var str = this.getSaveFunc() + "\n\n";
        str += isOnPage ? this.platformJSonPage[this.koLibraryVersion()] : this.platformJSonWindow[this.koLibraryVersion()];
        var jsonText = "var surveyJSON = " + this.getJsonText() + "\n\n";
        return this.getSetCss() + "\n" + jsonText + str;
    }
    private getSetCss(): string {
        if (this.koScriptUsing() != "bootstrap") return "";
        return "Survey.Survey.cssType = \"bootstrap\";\n";
    }
    private getSaveFunc() {
        return "function sendDataToServer(survey) {\n" + this.getSaveFuncCode() + "\n}";
    }
    private getSaveFuncCode() {
        if (this.koHasIds()) return "    survey.sendResult('" + this.surveyPostId + "');";
        return "    //send Ajax request to your web server.\n    alert(\"The results are:\" + JSON.stringify(s.data));";
    }
    private getJsonText(): string {
        if (this.koHasIds() && this.koLoadSurvey()) {
            return "{ surveyId: '" + this.surveyId + "'}";
        }
        if (this.generateValidJSON) return JSON.stringify(this.json);
        return new SurveyJSON5().stringify(this.json);
    }
    private setTextToEditor(editor: AceAjax.Editor, koText: any, text: string) {
        if (editor) editor.setValue(text);
        if (koText) koText(text);
    }
}