module SurveyEditor {
    export class SurveyEditor {
        public static updateErrorsTimeout: number = 1000;
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
        private timeoutId: number = -1;
        private onJsonEditorChanged(): any {
            if (this.timeoutId > -1) {
                clearTimeout(this.timeoutId);
            }   
            var self = this;         
            this.timeoutId = setTimeout(function () {
                self.timeoutId = -1;
                self.processJson(self.jsonEditor.getValue());
            }, SurveyEditor.updateErrorsTimeout);
        }
        private processJson(text: string): any {
            this.jsonValue = null;
            var errors = [];
            var annotations = [];
            var jsonObj = null;
            try {
                jsonObj = JSON5.parse(text);
            }
            catch (Error) {
                errors.push({ at: Error.at, text: Error.message });
                //annotations.push({ row: 0, column: 0, type: "error" });
            }
            if (jsonObj == null) {
                this.jsonEditor.getSession().setAnnotations(this.createAnnotations(text, errors));
            }
            var srv = new Survey.Survey(jsonObj);
            if (srv.jsonErrors != null) {
                for (var i = 0; i < srv.jsonErrors.length; i++) {
                    var error = srv.jsonErrors[i];
                    errors.push({ at: error.at, text: error.getFullDescription() });
                }
            }
            this.jsonEditor.getSession().setAnnotations(this.createAnnotations(text, errors));
        }
        private createAnnotations(text: string, errors: any[]): AceAjax.Annotation[] {
            var annotations = new Array<AceAjax.Annotation>();
            var maxLine: number = this.jsonEditor.getSession().getLength() - 1;
            var startIndex: number = 0;
            var startLine: number = 0;
            for (var i = 0; i < errors.length; i++) {
                var lineIndex: number = this.getRowByCharAt(text, startIndex, errors[i].at, startLine, maxLine);
                var annotation: AceAjax.Annotation = { row: lineIndex, column: 0, text: errors[i].text, type: "error" };
                annotations.push(annotation);
                startIndex = errors[i].at;
                startLine = lineIndex;
            }
            return annotations;
        }
        private getRowByCharAt(text: string, startIndex: number, index: number, startLine: number, maxLine: number): number {
            if (maxLine < 1) return 0;
            var result = startLine;
            if (index > text.length) index = text.length;
            var curChar = startIndex + 1;
            while (curChar < index) {
                if (text.charAt(curChar) == '\n') result++;
                curChar++;
            }
            if (result > maxLine) result = maxLine;
            return result;
        }
    }
}
