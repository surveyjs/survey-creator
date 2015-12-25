module SurveyEditor {
    export class SurveyEditor {
        public static updateErrorsTimeout: number = 1000;
        private renderedElement: HTMLElement;
        private surveyjsSelectedObj: HTMLElement;
        private surveyjsExample: HTMLElement;
        private jsonEditor: AceAjax.Editor;
        private surveyValue: Survey.Survey;
        private jsonValue: any;
        private surveyObjects: Array<any>;

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
        public addPage() {

        }
        private applyBinding() {
            if (this.renderedElement == null) return;
            ko.cleanNode(this.renderedElement);
            ko.applyBindings(this, this.renderedElement);
            this.jsonEditor = ace.edit("surveyjsEditor");
            this.surveyjsSelectedObj = document.getElementById("surveyjsSelectedObj");
            this.surveyjsExample = document.getElementById("surveyjsExample");
            this.initJsonEditor();
        }
        private initJsonEditor() {
            var self = this;
            this.jsonEditor.setTheme("ace/theme/monokai");
            this.jsonEditor.session.setMode("ace/mode/json");
            this.jsonEditor.setShowPrintMargin(false);
            this.jsonEditor.getSession().on("change", function () {
                self.onJsonEditorChanged();
            });
            this.jsonEditor.selection.on("changeCursor", function () {
                self.onJsonEditorCursorChanged();
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
        private onJsonEditorCursorChanged(): any {
            var position = this.jsonEditor.getCursorPosition();
            var obj = this.getCurrentSurveyObject(position);
            if (this.surveyjsSelectedObj != null) {
                this.surveyjsSelectedObj.innerText = (obj) ? obj.getType() + "." + obj.title : "not selected";
            }
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
            }
            this.surveyValue = null;
            if (jsonObj != null) {
                this.surveyValue = new Survey.Survey(jsonObj);
                if (this.surveyValue.jsonErrors != null) {
                    for (var i = 0; i < this.surveyValue.jsonErrors.length; i++) {
                        var error = this.surveyValue.jsonErrors[i];
                        errors.push({ at: error.at, text: error.getFullDescription() });
                    }
                }
                if (this.surveyjsExample) {
                    this.surveyValue.render(this.surveyjsExample);
                }
            }
            if (!this.surveyValue || this.surveyValue.isEmpty) {
                this.surveyjsExample.innerText = "Please correct the survey JSON.";
            }
            this.surveyObjects = this.createSurveyObjects();
            this.setEditorPositionByChartAt(text, this.surveyObjects);
            this.jsonEditor.getSession().setAnnotations(this.createAnnotations(text, errors));
        }
        private createSurveyObjects(): Array<any> {
            var result = [];
            if (this.surveyValue == null) return result;
            for (var i = 0; i < this.surveyValue.pages.length; i++) {
                var page = this.surveyValue.pages[0];
                result.push(page);
                for (var j = 0; j < page.questions.length; j++) {
                    result.push(page.questions[j]);
                }
            }
            return result;
        }
        private getCurrentSurveyObject(position: AceAjax.Position): any {
            if (!this.surveyObjects) return null
            for (var i = 0; i < this.surveyObjects.length; i++) {
                var objPosition = this.surveyObjects[i]["position"];
                if (!objPosition) continue;
                if (objPosition.row > position.row ||
                    (objPosition.row == position.row && objPosition.column > position.column)) {
                    return this.surveyObjects[i > 0 ? i - 1: 0];
                }
            }

            return this.surveyObjects.length > 0 ? this.surveyObjects[this.surveyObjects.length - 1] : this.surveyValue;
        }
        private createAnnotations(text: string, errors: any[]): AceAjax.Annotation[] {
            var annotations = new Array<AceAjax.Annotation>();
            this.setEditorPositionByChartAt(text, errors);
            for (var i = 0; i < errors.length; i++) {
                var error = errors[i];
                var annotation: AceAjax.Annotation = { row: error["position"].row, column: error["position"].column, text: error.text, type: "error" };
                annotations.push(annotation);
            }
            return annotations;
        }
        private setEditorPositionByChartAt(text: string, objects: any[]) {
            var position: AceAjax.Position = { row: 0, column: 0 };
            var startAt: number = 0;
            for (var i = 0; i < objects.length; i++) {
                var at = objects[i].at;
                if (!at) at = 0;
                position = this.getPostionByChartAt(text, position, startAt, at);
                objects[i]["position"] = position;
                startAt = at;
            }
        }
        private getPostionByChartAt(text: string, startPosition: AceAjax.Position, startAt: number, at: number): AceAjax.Position {
            var result: AceAjax.Position = { row: startPosition.row, column: startPosition.column };
            var curChar = startAt + 1;
            while (curChar < at) {
                if (text.charAt(curChar) == '\n') {
                    result.row++;
                    result.column = 0;
                } else {
                    result.column ++;
                }
                curChar++;
            }
            return result;
        }
    }
}
