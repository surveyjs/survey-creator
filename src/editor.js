/// <reference path="objectEditor.ts" />
/// <reference path="pagesEditor.ts" />
/// <reference path="textWorker.ts" />
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
            this.koShowLiveSurvey = ko.observable(false);
            var self = this;
            this.showLiveSurveyClick = function () { self.koShowLiveSurvey(!self.koShowLiveSurvey()); };
            this.koShowLiveSurvey.subscribe(function (newValue) { self.showLiveSurvey(newValue); });
            this.surveyEditor = new SurveyEditor_1.SurveyObjectEditor();
            this.surveyEditor.title = "Survey Properties";
            this.surveyEditor.koShowProperties(false);
            this.surveyEditor.onPropertyValueChanged.add(function (sender, options) {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.pageEditor = new SurveyEditor_1.SurveyObjectEditor();
            this.pageEditor.onPropertyValueChanged.add(function (sender, options) {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.questionEditor = new SurveyEditor_1.SurveyObjectEditor();
            this.questionEditor.onPropertyValueChanged.add(function (sender, options) {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.pagesEditor = new SurveyEditor_1.SurveyPagesEditor(function () { self.addPage(); }, function (page) { self.moveToObject(page); });
            if (renderedElement) {
                this.render(renderedElement);
            }
        }
        Object.defineProperty(SurveyEditor.prototype, "survey", {
            get: function () {
                return this.textWorker != null ? this.textWorker.survey : null;
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
            if (this.textWorker == null || !this.textWorker.isJsonCorrect)
                return;
            var name = this.getNewName(this.textWorker.survey.pages, "page");
            this.textWorker.addPage(name);
            this.setText(this.textWorker.text, name);
        };
        SurveyEditor.prototype.addQuestion = function () {
            var page = this.koSelectedPage();
            if (page == null)
                return;
            var name = this.getNewName(this.textWorker.survey.getAllQuestions(), "question");
            this.textWorker.addQuestion(page, Survey.QuestionFactory.Instance.createQuestion(this.koSelectedQuestionType(), name));
            this.setText(this.textWorker.text, name);
        };
        SurveyEditor.prototype.onPropertyValueChanged = function (property, object, newValue) {
            if (!object || !object["pos"])
                return;
            var isDefault = property.isDefaultValue(newValue);
            if (isDefault) {
                delete object[property.name];
            }
            else {
                object[property.name] = newValue;
            }
            this.textWorker.changeProperty(object, property.name, newValue, isDefault);
            this.setText(this.textWorker.text, object.name); //TODO
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
            SurveyEditor_1.SurveyTextWorker.newLineChar = this.jsonEditor.session.doc.getNewLineCharacter();
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
            this.setText(SurveyEditor.defaultNewSurveyText, "name: 'question1'");
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
            if (this.textWorker == null || !this.textWorker.isJsonCorrect)
                return;
            var position = this.jsonEditor.getCursorPosition();
            var objs = this.textWorker.getCurrentSurveyObjects(position.row, position.column);
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
            this.pagesEditor.setSelectedPage(page);
            if (page) {
                this.pageEditor.title = "Page properties: page" + (this.textWorker.survey.pages.indexOf(page) + 1);
            }
            this.questionEditor.selectedObject = question;
            if (question) {
                this.questionEditor.title = "Question properties: " + question.name;
            }
        };
        SurveyEditor.prototype.moveToObject = function (obj) {
            var pos = obj["position"];
            if (!pos)
                return;
            this.jsonEditor.moveCursorTo(pos.start.row, pos.start.column);
            this.jsonEditor.selection.clearSelection();
        };
        SurveyEditor.prototype.processJson = function (text) {
            this.textWorker = new SurveyEditor_1.SurveyTextWorker(text);
            this.showLiveSurvey(this.koShowLiveSurvey());
            this.surveyEditor.selectedObject = this.textWorker.survey;
            this.pagesEditor.survey = this.textWorker.survey;
            this.onJsonEditorCursorChanged();
            this.jsonEditor.getSession().setAnnotations(this.createAnnotations(text, this.textWorker.errors));
        };
        SurveyEditor.prototype.showLiveSurvey = function (showSurvey) {
            if (showSurvey && this.surveyjsExample) {
                if (this.textWorker.isJsonCorrect) {
                    this.textWorker.survey.render(this.surveyjsExample);
                }
                else {
                    this.surveyjsExample.innerText = "Please correct the survey JSON.";
                }
            }
        };
        SurveyEditor.prototype.createAnnotations = function (text, errors) {
            var annotations = new Array();
            for (var i = 0; i < errors.length; i++) {
                var error = errors[i];
                var annotation = { row: error.position.start.row, column: error.position.start.column, text: error.text, type: "error" };
                annotations.push(annotation);
            }
            return annotations;
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
        SurveyEditor.defaultNewSurveyText = "{ pages: [ { name: 'page1', questions: [{ type: 'text', name: 'question1' }] }] }";
        return SurveyEditor;
    })();
    SurveyEditor_1.SurveyEditor = SurveyEditor;
})(SurveyEditor || (SurveyEditor = {}));
