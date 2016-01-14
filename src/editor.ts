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
            catch (error) {
                errors.push({ pos: { start: error.at, end: -1 }, text: error.message });
            }
            this.surveyValue = null;
            if (jsonObj != null) {
                this.surveyValue = new Survey.Survey(jsonObj);
                if (this.surveyValue.jsonErrors != null) {
                    for (var i = 0; i < this.surveyValue.jsonErrors.length; i++) {
                        var error = this.surveyValue.jsonErrors[i];
                        errors.push({ pos: { start: error.at, end: -1 }, text: error.getFullDescription() });
                    }
                }
                this.onJsonEditorCursorChanged();
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
                var page = this.surveyValue.pages[i];
                if (i == 0 && !page["pos"]) {
                    page["pos"] = this.surveyValue["pos"];
                }
                result.push(page);
                for (var j = 0; j < page.questions.length; j++) {
                    result.push(page.questions[j]);
                }
            }
            return result;
        }
        private getCurrentSurveyObject(position: AceAjax.Position): any {
            if (!this.surveyObjects) return this.surveyValue;
            var result = null;
            for (var i = 0; i < this.surveyObjects.length; i++) {
                var objPosition = this.surveyObjects[i].position;
                if (!objPosition) continue;
                var start = objPosition.start;
                var end = objPosition.end;
                if ((start.row < position.row ||(start.row == position.row && start.column <= position.column))
                    && (end.row > position.row || (end.row == position.row && end.column >= position.column))) {
                    result = this.surveyObjects[i];
                }
            }
            return result ? result : this.surveyValue;
        }
        private createAnnotations(text: string, errors: any[]): AceAjax.Annotation[] {
            var annotations = new Array<AceAjax.Annotation>();
            this.setEditorPositionByChartAt(text, errors);
            for (var i = 0; i < errors.length; i++) {
                var error = errors[i];
                var annotation: AceAjax.Annotation = { row: error.position.start.row, column: error.position.start.column, text: error.text, type: "error" };
                annotations.push(annotation);
            }
            return annotations;
        }
        private setEditorPositionByChartAt(text: string, objects: any[]) {
            var position: AceAjax.Position = { row: 0, column: 0 };
            var atObjectsArray = this.getAtArray(objects);
            var startAt: number = 0;
            for (var i = 0; i < atObjectsArray.length; i++) {
                var at = atObjectsArray[i].at;
                position = this.getPostionByChartAt(text, position, startAt, at);
                var obj = atObjectsArray[i].obj;
                if (!obj.position) obj.position = {};
                if (at == obj.pos.start) {
                    obj.position.start = position;
                } else {
                    if (at == obj.pos.end) {
                        obj.position.end = position;
                    }
                }
                startAt = at;
            }
        }
        private getAtArray(objects: any[]): any[] {
            var result = [];
            for (var i = 0; i < objects.length; i++) {
                var obj = objects[i];
                var pos = obj.pos;
                if (!pos) continue;
                result.push({ at: pos.start, obj: obj });
                if (pos.end > 0) {
                    result.push({ at: pos.end, obj: obj });
                }
            }
            return result.sort((el1, el2) => {
                if (el1.at > el2.at) return 1;
                if (el1.at < el2.at) return -1;
                return 0;
            });
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
