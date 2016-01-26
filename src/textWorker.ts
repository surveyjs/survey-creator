module SurveyEditor {
    class TextParserPropery {
        isFound: boolean;
        start: number;
        end: number;
        valueStart: number;
    }

    export class SurveyTextWorker {
        public static newLineChar: string;
        public errors: Array<any>;
        private surveyValue: Survey.Survey;
        private jsonValue: any;
        private surveyObjects: Array<any>;
        private isSurveyAsPage: boolean;

        constructor(public text: string) {
            this.errors = [];
            this.process();
        }
        public get survey(): Survey.Survey { return this.surveyValue; }
        public get isJsonCorrect(): boolean { return this.surveyValue && !this.surveyValue.isEmpty; }
        protected process() {
            try {
                this.jsonValue = new SurveyJSON5(1).parse(this.text);
            }
            catch (error) {
                this.errors.push({ pos: { start: error.at, end: -1 }, text: error.message });
            }
            if (this.jsonValue != null) {
                this.updateJsonPositions(this.jsonValue);
                this.surveyValue = new Survey.Survey(this.jsonValue);
                if (this.surveyValue.jsonErrors != null) {
                    for (var i = 0; i < this.surveyValue.jsonErrors.length; i++) {
                        var error = this.surveyValue.jsonErrors[i];
                        this.errors.push({ pos: { start: error.at, end: -1 }, text: error.getFullDescription() });
                    }
                }
            }
            this.surveyObjects = this.createSurveyObjects();
            this.setEditorPositionByChartAt(this.surveyObjects);
            this.setEditorPositionByChartAt(this.errors);
        }
        public addPage(newName: string) {
            if (this.surveyValue == null) return;
            var newText = "";
            var pageText = "{name: '" + newName + "', questions: []}";
            if (this.surveyValue.pages.length == 0) {
                newText = "{ pages: \n [" + pageText + "\n]}"; //todo
            } else {
                if (this.isSurveyAsPage) {
                    newText = "{ pages: \n [" + this.text + ",\n" + pageText + "]}";
                } else {
                    var pos = this.surveyValue.pages[this.surveyValue.pages.length - 1]["pos"].end;
                    newText = this.text.substr(0, pos) + ", \n" + pageText + this.text.substr(pos);
                }
            }
            this.text = newText;
        }
        public addQuestion(page: Survey.Page, newQuestion: Survey.Question) {
            if (page == null) return;
            var questionText = this.getQuestionText(newQuestion);
            var newText = "";
            var pos = 0;
            if (page.questions.length > 0) {
                pos = page.questions[page.questions.length - 1]["pos"].end;
                newText = this.text.substr(0, pos) + ", \n" + questionText + this.text.substr(pos);
            } else {
                var questions = page["pos"]["questions"];
                if (questions) {
                    pos = questions.end - 1;
                    newText = this.text.substr(0, pos) + questionText + this.text.substr(pos);
                } else {
                    var pagePos = page["pos"];
                    var textPage = this.text.substr(pagePos.start, pagePos.end - pagePos.start - 1);
                    var commaText = textPage.trim() != "" ? ", " : "";
                    pos = pagePos.end - 1;
                    newText = this.text.substr(0, pos) + commaText + "questions: [" + questionText + "]" + this.text.substr(pos);
                }
            }
            this.text = newText;
        }
        public changeProperty(obj: Object, name: string, newValue: any, isDefault: boolean) {
            var pos = obj["pos"];
            if (!pos) return;
            var propertyPosInfo = this.getPropertyInfo(pos.start, pos.end, name);
            var newText = this.text;
            if (isDefault) {
                if (propertyPosInfo.isFound) {
                    newText = this.text.substr(0, propertyPosInfo.start) + this.text.substr(propertyPosInfo.end + 1);
                }
            } else {
                newValue = this.getValueText(newValue);
                if (!propertyPosInfo.isFound) {
                    newText = this.text.substr(0, pos.end - 1) + ", " + name + ": " + newValue + this.text.substr(pos.end - 1);
                } else {
                    newText = this.text.substr(0, propertyPosInfo.valueStart) + " " + newValue + this.text.substr(propertyPosInfo.end + 1);
                }
            }
            this.text = newText;
        }
        public getCurrentSurveyObjects(row: number, column: number): any[] {
            var result = [];
            if (!this.surveyObjects) return result;
            for (var i = 0; i < this.surveyObjects.length; i++) {
                var objPosition = this.surveyObjects[i].position;
                if (!objPosition) continue;
                var start = objPosition.start;
                var end = objPosition.end;
                if ((start.row < row || (start.row == row && start.column <= column))
                    && (end.row >row || (end.row == row && end.column > column))) {
                    result.push(this.surveyObjects[i]);
                }
            }
            return result;
        }
        private getPropertyInfo(start: number, end: number, name: string): TextParserPropery {
            var result = new TextParserPropery();
            result.isFound = false;
            var obj = new SurveyJSON5(2).parse(this.text, null, start, end);
            if (!obj || !obj[SurveyJSON5.positionName] || !obj[SurveyJSON5.positionName][name]) return result;
            var pos = obj[SurveyJSON5.positionName][name];
            result.isFound = true;
            result.start = pos.start;
            result.end = pos.end;
            result.valueStart = pos.valueStart;
            return result;
        }

        private getQuestionText(question: Survey.Question): string {
            var jsonObj = new Survey.JsonObject().toJsonObject(question);
            jsonObj["type"] = question.getType();
            return this.stringify(jsonObj);
        }
        private updateJsonPositions(jsonObj: any) {
            jsonObj["pos"]["self"] = jsonObj;
            for (var key in jsonObj) {
                var obj = jsonObj[key];
                if (obj && obj["pos"]) {
                    jsonObj["pos"][key] = obj["pos"];
                    this.updateJsonPositions(obj);
                }
            }
        }
        private createSurveyObjects(): Array<any> {
            var result = [];
            if (this.surveyValue == null) return result;
            this.isSurveyAsPage = false;
            for (var i = 0; i < this.surveyValue.pages.length; i++) {
                var page = this.surveyValue.pages[i];
                if (i == 0 && !page["pos"]) {
                    page["pos"] = this.surveyValue["pos"];
                    this.isSurveyAsPage = true;
                }
                result.push(page);
                for (var j = 0; j < page.questions.length; j++) {
                    result.push(page.questions[j]);
                }
            }
            return result;
        }
        private setEditorPositionByChartAt(objects: any[]) {
            if (objects == null || objects.length == 0) return;
            var position = { row: 0, column: 0 };
            var atObjectsArray = this.getAtArray(objects);
            var startAt: number = 0;
            for (var i = 0; i < atObjectsArray.length; i++) {
                var at = atObjectsArray[i].at;
                position = this.getPostionByChartAt(position, startAt, at);
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
        private getPostionByChartAt(startPosition: AceAjax.Position, startAt: number, at: number): any {
            var result = { row: startPosition.row, column: startPosition.column };
            var curChar = startAt;
            while (curChar < at) {
                if (this.text.charAt(curChar) == SurveyTextWorker.newLineChar) {
                    result.row++;
                    result.column = 0;
                } else {
                    result.column++;
                }
                curChar++;
            }
            return result;
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
        private getValueText(newValue: any): string {
            return this.stringify(newValue);
        }
        private stringify(obj: any): string {
            return new SurveyJSON5().stringify(obj);
        }
    }
}