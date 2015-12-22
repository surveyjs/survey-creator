
module SurveyEditor {
    export class SurveyEditor {
        private surveyValue: Survey.Survey;
        private jsonEditor: AceAjax.Editor;
        private renderedElement: HTMLElement;
        private jsonValue: any;

        constructor(renderedElement: any = null) {
            if (renderedElement) {
                this.render(renderedElement);
            }
        }
        public get survey(): Survey.Survey {
            return this.surveyValue;
        }
        public render(element: any = null) {
            var self = this;
            if (element && typeof element == "string") {
                element = document.getElementById(element);
            }
            if (element) {
                this.renderedElement = element;
            }
            element = this.renderedElement;
            if (!element) return;
            element.innerHTML = templateEditor.ko.html;
            self.applyBinding();
        }
        private applyBinding() {
            if (this.renderedElement == null) return;
            ko.cleanNode(this.renderedElement);
            ko.applyBindings(this, this.renderedElement);
            this.jsonEditor = ace.edit("surveyjsEditor");
            this.initJsonEditor();
            this.surveyValue = new Survey.Survey({ questions: [{ type: 'text', name: 'temp' }] }, "surveyjsExample");
        }
        private initJsonEditor() {
            var self = this;
            this.jsonEditor.setTheme("ace/theme/monokai");
            this.jsonEditor.session.setMode("ace/mode/json");
            this.jsonEditor.setShowPrintMargin(false);
            this.jsonEditor.getSession().on("change", function () {
                self.onJsonEditorChanged();
            });
            this.jsonEditor.getSession().setUseWorker(true);
            this.jsonEditor.setValue("{ questions: [{ type: 'text', name: 'temp' }] }");
        }
        private onJsonEditorChanged(): any {
            this.processJson(this.jsonEditor.getValue());
        }
        private processJson(text: string): any {
            this.jsonValue = null;
            var oldOnError = window.onerror;
            var jsonObj = null;
            var annotations = [];
            window.onerror = function (message, fileURL, lineNumber) {
                annotations.push({ row: lineNumber, column: 0, text: message, type: "error" });
            }
            try {
                eval("jsonObj = " + text);
            } catch (Error) {
                annotations.push({ row: 0, column: 0, text: Error.message, type: "error" });
            }
            window.onerror = oldOnError;
            if (annotations.length > 0) {
                this.jsonEditor.getSession().setAnnotations(annotations);
                return;               
            }
            var srv = new Survey.Survey(jsonObj);
            if (srv.jsonErrors != null) {
                for (var i = 0; i < srv.jsonErrors.length; i++) {
                    var error = srv.jsonErrors[i];
                    annotations.push({ row: 0, column: 0, text: error.message + '\n' + error.description, type: "error" });
                }
            }
            this.jsonEditor.getSession().setAnnotations(annotations);
        }
    }
}
