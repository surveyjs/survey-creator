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
            this.koIsShowDesigner = ko.observable(true);
            this.selectDesignerClick = function () { self.koIsShowDesigner(true); };
            this.selectEditorClick = function () { self.koIsShowDesigner(false); };
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
            this.isTextChangedFromDesigner = true;
            this.text = value;
            this.isTextChangedFromDesigner = false;
            this.jsonEditor.find(findText);
        };
        SurveyEditor.prototype.addPage = function () {
            var name = this.getNewName(this.survey.pages, "page");
            var page = this.surveyValue.addNewPage(name);
            this.surveyValue.currentPage = page;
            this.pagesEditor.survey = this.surveyValue;
            this.selectSurveyObjects(page, null);
            this.textWorker.addPage(name);
            this.setText(this.textWorker.text, name);
        };
        SurveyEditor.prototype.addQuestion = function () {
            var page = this.koSelectedPage();
            if (page == null)
                return;
            var name = this.getNewName(this.survey.getAllQuestions(), "question");
            var question = Survey.QuestionFactory.Instance.createQuestion(this.koSelectedQuestionType(), name);
            this.textWorker.addQuestion(this.fromWYSIWYGtoText(page), question);
            this.setText(this.textWorker.text, name);
            page.addQuestion(question);
            this.surveyValue.render();
            this.surveyValue.selectedQuestion = question;
        };
        SurveyEditor.prototype.onPropertyValueChanged = function (property, object, newValue) {
            var isDefault = property.isDefaultValue(newValue);
            if (isDefault) {
                delete object[property.name];
            }
            else {
                object[property.name] = newValue;
            }
            this.surveyValue.render();
            this.textWorker.changeProperty(this.fromWYSIWYGtoText(object), property.name, newValue, isDefault);
            this.setText(this.textWorker.text, object.name);
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
            this.surveyjs = document.getElementById("surveyjs");
            this.jsonEditor = ace.edit("surveyjsEditor");
            this.surveyjsSelectedObj = document.getElementById("surveyjsSelectedObj");
            this.surveyjsExample = document.getElementById("surveyjsExample");
            this.initSurvey(new SurveyEditor_1.SurveyJSON5().parse(SurveyEditor.defaultNewSurveyText));
            this.surveyValue.mode = "designer";
            this.surveyValue.render(this.surveyjs);
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
        SurveyEditor.prototype.initSurvey = function (json) {
            this.surveyValue = new Survey.Survey(json);
            this.surveyValue.mode = "designer";
            this.surveyValue.render(this.surveyjs);
            this.surveyEditor.selectedObject = this.surveyValue;
            this.pagesEditor.survey = this.surveyValue;
            var self = this;
            this.surveyValue.onSelectedQuestionChanged.add(function (sender, options) { self.selectSurveyObjects(sender.currentPage, sender.selectedQuestion); });
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
            if (this.koIsShowDesigner() || this.textWorker == null || !this.textWorker.isJsonCorrect)
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
            this.survey.currentPage = this.fromTexttoWYSIWYG(page);
            this.survey.selectedQuestion = this.fromTexttoWYSIWYG(question);
        };
        SurveyEditor.prototype.selectSurveyObjects = function (page, question) {
            this.koSelectedPage(page);
            this.koSelectedQuestion(question);
            this.pageEditor.selectedObject = page;
            this.pagesEditor.setSelectedPage(page);
            if (page) {
                this.pageEditor.title = "Page properties: page" + (this.survey.pages.indexOf(page) + 1);
            }
            this.questionEditor.selectedObject = question;
            if (question) {
                this.questionEditor.title = "Question properties: " + question.name;
            }
        };
        SurveyEditor.prototype.moveToObject = function (obj) {
            this.surveyValue.currentPage = obj;
            this.selectSurveyObjects(obj, null);
            var pos = obj["position"];
            if (!pos)
                return;
            this.jsonEditor.moveCursorTo(pos.start.row, pos.start.column);
            this.jsonEditor.selection.clearSelection();
        };
        SurveyEditor.prototype.processJson = function (text) {
            this.textWorker = new SurveyEditor_1.SurveyTextWorker(text);
            this.showLiveSurvey(this.koShowLiveSurvey());
            if (!this.isTextChangedFromDesigner) {
                if (this.textWorker.isJsonCorrect) {
                    this.initSurvey(new SurveyEditor_1.SurveyJSON5().parse(this.textWorker.text));
                }
                this.onJsonEditorCursorChanged();
            }
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
        SurveyEditor.prototype.fromWYSIWYGtoText = function (obj) {
            var finder = new SurveyEditor_1.SurveyObjectFinder(this.survey, this.textWorker.survey);
            return finder.findObject(obj);
        };
        SurveyEditor.prototype.fromTexttoWYSIWYG = function (obj) {
            var finder = new SurveyEditor_1.SurveyObjectFinder(this.textWorker.survey, this.survey);
            return finder.findObject(obj);
        };
        SurveyEditor.updateTextTimeout = 1000;
        SurveyEditor.defaultNewSurveyText = "{ pages: [ { name: 'page1', questions: [{ type: 'text', name: 'question1' }] }] }";
        return SurveyEditor;
    })();
    SurveyEditor_1.SurveyEditor = SurveyEditor;
})(SurveyEditor || (SurveyEditor = {}));
