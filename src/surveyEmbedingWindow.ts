module SurveyEditor {
    export class SurveyEmbedingWindow {
        private jsonValue: any;
        private surveyEmbedingHead: AceAjax.Editor;
        private surveyEmbedingJava: AceAjax.Editor;
        koShowAsWindow: any;
        koScriptUsing: any;
        constructor() {
            var self = this;
            this.koShowAsWindow = ko.observable("page");
            this.koScriptUsing = ko.observable("bootstrap");
            this.koShowAsWindow.subscribe(function (newValue) { self.surveyEmbedingJava.setValue(self.getJavaText()); });
            this.koScriptUsing.subscribe(function (newValue) { self.setHeadText(); });
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
            this.surveyEmbedingJava.setValue(this.getJavaText());
        }
        private setHeadText() {
            var knockoutStr = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js\" ></script>\n";
            if (this.koScriptUsing() == "bootstrap") {
                this.surveyEmbedingHead.setValue(knockoutStr + "<script src=\"js/survey.bootstrap.min.js\"></script>");
            } else {
                this.surveyEmbedingHead.setValue(knockoutStr + "<script src=\"js/survey.min.js\"></script>\n<link href=\"css/survey.css\" type=\"text/css\" rel=\"stylesheet\" />");
            }
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
            var text = isOnPage ? "var survey = new Survey.Survey(\n" : "var surveyWindow = new Survey.SurveyWindow(\n";
            text += this.getJsonText();
            text += ");\n";
            if (!isOnPage) {
                text += "surveyWindow.";
            }
            text += "survey.onComplete.add(function (s) {\n alert(\"The results are:\" + JSON.stringify(s.data)); \n });\n";
            if (isOnPage) {
                text += "survey.render(\"mySurveyJSName\");";
            } else {
                text += "//surveyWindow.title = \"My Survey Window Title.\"; //By default Survey.title is used.\n";
                text += "surveyWindow.show();";

            }
            return text;
        }
        private getJsonText(): string {
            return new SurveyJSON5().stringify(this.json);
        }
    }
}