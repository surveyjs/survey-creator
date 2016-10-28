import {SurveyJSON5} from "./json5";

export class SurveyEmbedingWindow {
    private jsonValue: any;
    private surveyEmbedingHead: AceAjax.Editor;
    private surveyEmbedingJava: AceAjax.Editor;
    public surveyId: string = null;
    public surveyPostId: string = null;
    public generateValidJSON: boolean = false;
    koShowAsWindow: any;
    koScriptUsing: any;
    koHasIds: any;
    koLoadSurvey: any;
    koLibraryVersion: any;
    koVisibleHtml: any;
    constructor() {
        var self = this;
        this.koLibraryVersion = ko.observable("knockout");
        this.koShowAsWindow = ko.observable("page");
        this.koScriptUsing = ko.observable("bootstrap");
        this.koHasIds = ko.observable(false);
        this.koLoadSurvey = ko.observable(false);
        this.koVisibleHtml = ko.computed(function() { return self.koLibraryVersion() == "react" || self.koShowAsWindow() =="page"; });
        this.koLibraryVersion.subscribe(function (newValue) { self.setHeadText(); self.surveyEmbedingJava.setValue(self.getJavaText()); });
        this.koShowAsWindow.subscribe(function (newValue) { self.surveyEmbedingJava.setValue(self.getJavaText()); });
        this.koScriptUsing.subscribe(function (newValue) { self.setHeadText(); self.surveyEmbedingJava.setValue(self.getJavaText()); });
        this.koLoadSurvey.subscribe(function (newValue) { self.surveyEmbedingJava.setValue(self.getJavaText()); });
        this.surveyEmbedingHead = null;
    }
    public get json(): any { return this.jsonValue; }
    public set json(value: any) { this.jsonValue = value; }
    public show() {
        if (this.surveyEmbedingHead == null) {
            this.surveyEmbedingHead = this.createEditor("surveyEmbedingHead");
            this.setHeadText();
            var bodyEditor = this.createEditor("surveyEmbedingBody");
            bodyEditor.setValue("<div id= \"mySurveyJSName\" ></div>");
            this.surveyEmbedingJava = this.createEditor("surveyEmbedingJava");
        }
        this.koHasIds(this.surveyId && this.surveyPostId);
        this.surveyEmbedingJava.setValue(this.getJavaText());
    }
    private setHeadText() {
        var str = "";
        if (this.koLibraryVersion() == "knockout") {
            str = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js\"></script>\n<script src=\"js/survey.ko.min.js\"></script>";
        } else {
            str = "<script src=\"https://fb.me/react-0.14.8.js\"></script>\n<script src= \"https://fb.me/react-dom-0.14.8.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js\"></script>\n";
            str += "<script src=\"js/survey.react.min.js\"></script>";
        }
        if (this.koScriptUsing() != "bootstrap") {
            str += "\n<link href=\"css/survey.css\" type=\"text/css\" rel=\"stylesheet\" />";
        }
        this.surveyEmbedingHead.setValue(str);
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
        var str = this.koLibraryVersion() == "knockout" ? this.getKnockoutJavaText(isOnPage) : this.getReactJavaText(isOnPage);
        return this.getSetCss() + str;
    }
    private getSetCss(): string {
        if (this.koScriptUsing() != "bootstrap") return "";
        return "Survey.Survey.cssType = \"bootstrap\";\n";
    }
    private getKnockoutJavaText(isOnPage: boolean): string {
        var text = isOnPage ? "var survey = new Survey.Survey(\n" : "var surveyWindow = new Survey.SurveyWindow(\n";
        text += this.getJsonText();
        text += ");\n";
        if (!isOnPage) {
            text += "surveyWindow.";
        }
        var saveFunc = this.getSaveFuncCode();
        text += "survey.onComplete.add(function (s) {\n" + saveFunc + "\n });\n";
        if (isOnPage) {
            text += "survey.render(\"mySurveyJSName\");";
        } else {
            text += "//By default Survey.title is used.\n"
            text += "//surveyWindow.title = \"My Survey Window Title.\";\n";
            text += "surveyWindow.show();";

        }
        return text;
    }
    private getReactJavaText(isOnPage: boolean): string {
        var saveFunc = this.getSaveFuncCode();
        var sendResultText = "var surveySendResult = function (s) {\n" + saveFunc + "\n });\n";
        var name = isOnPage ? "ReactSurvey" : "ReactSurveyWindow";
        var jsonText = "var surveyJson = " + this.getJsonText() + "\n\n";
        var text = jsonText + sendResultText + "ReactDOM.render(\n<" + name + " json={surveyJson} onComplete={surveySendResult} />, \n document.getElementById(\"mySurveyJSName\"));";
        return text;
    }
    private getSaveFuncCode() {
        if (this.koHasIds()) return "survey.sendResult('" + this.surveyPostId + "');";
        return "alert(\"The results are:\" + JSON.stringify(s.data));";
    }
    private getJsonText(): string {
        if (this.koHasIds() && this.koLoadSurvey()) {
            return "{ surveyId: '" + this.surveyId + "'}";
        }
        if (this.generateValidJSON) return JSON.stringify(this.json);
        return new SurveyJSON5().stringify(this.json);
    }
}