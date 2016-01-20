/// <reference path="objectEditor.ts" />
var SurveyEditor;
(function (SurveyEditor_1) {
    var SurveyEditor = (function () {
        function SurveyEditor(renderedElement) {
            if (renderedElement === void 0) { renderedElement = null; }
            this.timeoutId = -1;
            this.koSelectedPage = ko.observable(null);
            this.koSelectedQuestion = ko.observable(null);
            this.questionTypes = Survey.QuestionFactory.Instance.getAllTypes();
            this.koSelectedQuestionType = ko.observable(this.questionTypes[0]);
            this.pageEditor = new SurveyEditor_1.SurveyObjectEditor();
            this.questionEditor = new SurveyEditor_1.SurveyObjectEditor();
            if (renderedElement) {
                this.render(renderedElement);
            }
        }
        Object.defineProperty(SurveyEditor.prototype, "survey", {
            get: function () {
                return this.surveyValue;
            },
            enumerable: true,
            configurable: true
        });
        SurveyEditor.prototype.render = function (element) {
            if (element === void 0) { element = null; }
            var self = this;
            if (element && typeof element == "string") {
                element = document.getElementById(element);
            }
            if (element) {
                this.renderedElement = element;
            }
            element = this.renderedElement;
            if (!element)
                return;
            element.innerHTML = templateEditor.ko.html;
            self.applyBinding();
        };
        Object.defineProperty(SurveyEditor.prototype, "text", {
            get: function () {
                return this.jsonEditor != null ? this.jsonEditor.getValue() : "";
            },
            set: function (value) {
                this.setTextValue(value, 1);
            },
            enumerable: true,
            configurable: true
        });
        SurveyEditor.prototype.getTextAndProcess = function () {
            var text = this.text;
            if (this.timeoutId > 0) {
                clearTimeout(this.timeoutId);
                this.timeoutId = -1;
                this.processJson(text);
            }
            return text;
        };
        SurveyEditor.prototype.setText = function (value, findText) {
            this.text = value;
            this.jsonEditor.find(findText);
        };
        SurveyEditor.prototype.addPage = function () {
            if (this.surveyValue == null)
                return;
            var text = this.getTextAndProcess();
            if (this.isSurveyAsPage) {
                this.text = "{ pages: \n [" + text + "\n]}";
                var text = this.getTextAndProcess();
            }
            var name = this.getNewName(this.surveyValue.pages, "page");
            var pageText = "{name: '" + name + "', questions: []}";
            if (this.surveyValue.pages.length == 0) {
                text = "{ pages: \n [" + pageText + "\n]}";
            }
            else {
                var pos = this.surveyValue.pages[this.surveyValue.pages.length - 1]["pos"].end;
                text = text.substr(0, pos) + ", \n" + pageText + text.substr(pos);
            }
            this.setText(text, name);
        };
        SurveyEditor.prototype.addQuestion = function () {
            var page = this.koSelectedPage();
            if (page == null)
                return;
            var name = this.getNewName(this.surveyValue.getAllQuestions(), "question");
            var questionText = this.createNewQuestion(this.koSelectedQuestionType(), name);
            var text = this.getTextAndProcess();
            var pos = 0;
            if (page.questions.length > 0) {
                pos = page.questions[page.questions.length - 1]["pos"].end;
                text = text.substr(0, pos) + ", \n" + questionText + text.substr(pos);
            }
            else {
                var questions = page["pos"]["questions"];
                if (questions) {
                    pos = questions.end - 1;
                    text = text.substr(0, pos) + questionText + text.substr(pos);
                }
                else {
                    var pagePos = page["pos"];
                    var textPage = text.substr(pagePos.start, pagePos.end - pagePos.start - 1);
                    var commaText = textPage.trim() != "" ? ", " : "";
                    pos = pagePos.end - 1;
                    text = text.substr(0, pos) + commaText + "questions: [" + questionText + "]" + text.substr(pos);
                }
            }
            this.setText(text, name);
        };
        SurveyEditor.prototype.createNewQuestion = function (type, name) {
            var newQuestion = Survey.QuestionFactory.Instance.createQuestion(type, name);
            var jsonObj = new Survey.JsonObject().toJsonObject(newQuestion);
            jsonObj["type"] = newQuestion.getType();
            return JSON5.stringify(jsonObj);
        };
        SurveyEditor.prototype.setTextValue = function (value, position) {
            if (this.jsonEditor == null)
                return;
            this.isProcessingImmediately = true;
            this.jsonEditor.setValue(value, position);
            this.processJson(value);
            this.isProcessingImmediately = false;
        };
        SurveyEditor.prototype.applyBinding = function () {
            if (this.renderedElement == null)
                return;
            ko.cleanNode(this.renderedElement);
            ko.applyBindings(this, this.renderedElement);
            this.jsonEditor = ace.edit("surveyjsEditor");
            this.surveyjsSelectedObj = document.getElementById("surveyjsSelectedObj");
            this.surveyjsExample = document.getElementById("surveyjsExample");
            this.initJsonEditor();
        };
        SurveyEditor.prototype.initJsonEditor = function () {
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
            this.text = "{ questions: [{ type: 'text', name: 'temp' }] }";
        };
        SurveyEditor.prototype.onJsonEditorChanged = function () {
            if (this.timeoutId > -1) {
                clearTimeout(this.timeoutId);
            }
            if (this.isProcessingImmediately) {
                this.timeoutId = -1;
            }
            else {
                var self = this;
                this.timeoutId = setTimeout(function () {
                    self.timeoutId = -1;
                    self.processJson(self.text);
                }, SurveyEditor.updateTextTimeout);
            }
        };
        SurveyEditor.prototype.onJsonEditorCursorChanged = function () {
            var position = this.jsonEditor.getCursorPosition();
            var objs = this.getCurrentSurveyObjects(position);
            var page = null;
            var question = null;
            for (var i = 0; i < objs.length; i++) {
                if (objs[i].getType() == "page")
                    page = objs[i];
                else
                    question = objs[i];
            }
            this.koSelectedPage(page);
            this.koSelectedQuestion(question);
            this.pageEditor.selectedObject = page;
            this.questionEditor.selectedObject = question;
        };
        SurveyEditor.prototype.processJson = function (text) {
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
                this.updateJsonPositions(jsonObj);
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
        };
        SurveyEditor.prototype.updateJsonPositions = function (jsonObj) {
            jsonObj["pos"]["self"] = jsonObj;
            for (var key in jsonObj) {
                var obj = jsonObj[key];
                if (obj && obj["pos"]) {
                    jsonObj["pos"][key] = obj["pos"];
                    this.updateJsonPositions(obj);
                }
            }
        };
        SurveyEditor.prototype.createSurveyObjects = function () {
            var result = [];
            if (this.surveyValue == null)
                return result;
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
        };
        SurveyEditor.prototype.getCurrentSurveyObjects = function (position) {
            var result = [];
            if (!this.surveyObjects)
                return result;
            for (var i = 0; i < this.surveyObjects.length; i++) {
                var objPosition = this.surveyObjects[i].position;
                if (!objPosition)
                    continue;
                var start = objPosition.start;
                var end = objPosition.end;
                if ((start.row < position.row || (start.row == position.row && start.column <= position.column))
                    && (end.row > position.row || (end.row == position.row && end.column > position.column))) {
                    result.push(this.surveyObjects[i]);
                }
            }
            return result;
        };
        SurveyEditor.prototype.createAnnotations = function (text, errors) {
            var annotations = new Array();
            this.setEditorPositionByChartAt(text, errors);
            for (var i = 0; i < errors.length; i++) {
                var error = errors[i];
                var annotation = { row: error.position.start.row, column: error.position.start.column, text: error.text, type: "error" };
                annotations.push(annotation);
            }
            return annotations;
        };
        SurveyEditor.prototype.setEditorPositionByChartAt = function (text, objects) {
            var position = { row: 0, column: 0 };
            var atObjectsArray = this.getAtArray(objects);
            var startAt = 0;
            var newLineChar = this.jsonEditor.session.doc.getNewLineCharacter();
            for (var i = 0; i < atObjectsArray.length; i++) {
                var at = atObjectsArray[i].at;
                position = this.getPostionByChartAt(text, newLineChar, position, startAt, at);
                var obj = atObjectsArray[i].obj;
                if (!obj.position)
                    obj.position = {};
                if (at == obj.pos.start) {
                    obj.position.start = position;
                }
                else {
                    if (at == obj.pos.end) {
                        obj.position.end = position;
                    }
                }
                startAt = at;
            }
        };
        SurveyEditor.prototype.getAtArray = function (objects) {
            var result = [];
            for (var i = 0; i < objects.length; i++) {
                var obj = objects[i];
                var pos = obj.pos;
                if (!pos)
                    continue;
                result.push({ at: pos.start, obj: obj });
                if (pos.end > 0) {
                    result.push({ at: pos.end, obj: obj });
                }
            }
            return result.sort(function (el1, el2) {
                if (el1.at > el2.at)
                    return 1;
                if (el1.at < el2.at)
                    return -1;
                return 0;
            });
        };
        SurveyEditor.prototype.getPostionByChartAt = function (text, newLineChar, startPosition, startAt, at) {
            var result = { row: startPosition.row, column: startPosition.column };
            var curChar = startAt;
            while (curChar < at) {
                if (text.charAt(curChar) == newLineChar) {
                    result.row++;
                    result.column = 0;
                }
                else {
                    result.column++;
                }
                curChar++;
            }
            return result;
        };
        SurveyEditor.prototype.getNewName = function (objs, baseName) {
            var hash = {};
            for (var i = 0; i < objs.length; i++) {
                hash[objs[i].name] = true;
            }
            var num = 1;
            while (true) {
                if (!hash[baseName + num.toString()])
                    break;
                num++;
            }
            return baseName + num.toString();
        };
        SurveyEditor.updateTextTimeout = 1000;
        return SurveyEditor;
    })();
    SurveyEditor_1.SurveyEditor = SurveyEditor;
})(SurveyEditor || (SurveyEditor = {}));
