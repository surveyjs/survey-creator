/// <reference path="objectEditor.ts" />
/// <reference path="pagesEditor.ts" />
/// <reference path="textWorker.ts" />
/// <reference path="surveyHelper.ts" />
/// <reference path="surveyEmbedingWindow.ts" />
/// <reference path="objectVerbs.ts" />
/// <reference path="dragdrophelper.ts" />
/// <reference path="templateEditor.ko.html.ts" />
/// <reference path="template_page.html.ts" />
/// <reference path="template_question.html.ts" />
var SurveyEditor;
(function (SurveyEditor_1) {
    var SurveyEditor = (function () {
        function SurveyEditor(renderedElement) {
            if (renderedElement === void 0) { renderedElement = null; }
            this.surveyId = null;
            this.surveyPostId = null;
            this.timeoutId = -1;
            this.questionTypes = Survey.QuestionFactory.Instance.getAllTypes();
            this.koCopiedQuestions = ko.observableArray();
            this.koCanDeleteObject = ko.observable(false);
            var self = this;
            this.koShowSaveButton = ko.observable(false);
            this.saveButtonClick = function () { if (self.saveSurveyFunc)
                self.saveSurveyFunc(); };
            this.koObjects = ko.observableArray();
            this.koSelectedObject = ko.observable();
            this.koSelectedObject.subscribe(function (newValue) { self.selectedObjectChanged(newValue != null ? newValue.value : null); });
            this.surveyObjects = new SurveyEditor_1.SurveyObjects(this.koObjects, this.koSelectedObject);
            this.surveyVerbs = new SurveyEditor_1.SurveyVerbs();
            this.selectedObjectEditor = new SurveyEditor_1.SurveyObjectEditor();
            this.selectedObjectEditor.onPropertyValueChanged.add(function (sender, options) {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.pagesEditor = new SurveyEditor_1.SurveyPagesEditor(function () { self.addPage(); }, function (page) { self.surveyObjects.selectObject(page); }, function (indexFrom, indexTo) { self.movePage(indexFrom, indexTo); });
            this.surveyEmbeding = new SurveyEditor_1.SurveyEmbedingWindow();
            this.koIsShowDesigner = ko.observable(true);
            this.selectDesignerClick = function () { self.showDesigner(); };
            this.selectEditorClick = function () { self.showJsonEditor(); };
            this.runSurveyClick = function () { self.showLiveSurvey(); };
            this.embedingSurveyClick = function () { self.showSurveyEmbeding(); };
            this.deleteObjectClick = function () { self.deleteCurrentObject(); };
            this.draggingQuestion = function (questionType, e) { self.doDraggingQuestion(questionType, e); };
            this.clickQuestion = function (questionType) { self.doClickQuestion(questionType); };
            this.draggingCopiedQuestion = function (item, e) { self.doDraggingCopiedQuestion(item.json, e); };
            this.clickCopiedQuestion = function (item) { self.doClickCopiedQuestion(item.json); };
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
        SurveyEditor.prototype.loadSurvey = function (surveyId) {
            var self = this;
            new Survey.dxSurveyService().loadSurvey(surveyId, function (success, result, response) {
                if (success && result) {
                    self.text = JSON.stringify(result);
                }
            });
        };
        Object.defineProperty(SurveyEditor.prototype, "text", {
            get: function () {
                if (this.koIsShowDesigner())
                    return this.getSurveyTextFromDesigner();
                return this.jsonEditor != null ? this.jsonEditor.getValue() : "";
            },
            set: function (value) {
                this.textWorker = new SurveyEditor_1.SurveyTextWorker(value);
                if (this.textWorker.isJsonCorrect) {
                    this.showDesigner();
                }
                else {
                    this.setTextValue(value);
                    this.koIsShowDesigner(false);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SurveyEditor.prototype, "saveSurveyFunc", {
            get: function () { return this.saveSurveyFuncValue; },
            set: function (value) {
                this.saveSurveyFuncValue = value;
                this.koShowSaveButton(value != null);
            },
            enumerable: true,
            configurable: true
        });
        SurveyEditor.prototype.setTextValue = function (value) {
            if (this.jsonEditor == null)
                return;
            this.isProcessingImmediately = true;
            this.jsonEditor.setValue(value);
            this.jsonEditor.renderer.updateFull(true);
            this.processJson(value);
            this.isProcessingImmediately = false;
        };
        SurveyEditor.prototype.addPage = function () {
            var name = SurveyEditor_1.SurveyHelper.getNewName(this.survey.pages, "page");
            var page = this.surveyValue.addNewPage(name);
            this.addPageToUI(page);
        };
        SurveyEditor.prototype.movePage = function (indexFrom, indexTo) {
            var page = this.survey.pages[indexFrom];
            this.deleteObject(page);
            this.survey.pages.splice(indexTo, 0, page);
            this.addPageToUI(page);
        };
        SurveyEditor.prototype.addPageToUI = function (page) {
            this.pagesEditor.survey = this.surveyValue;
            this.surveyObjects.addPage(page);
        };
        SurveyEditor.prototype.onQuestionAdded = function (question) {
            var page = this.survey.getPageByQuestion(question);
            this.surveyObjects.addQuestion(page, question);
            this.survey.render();
        };
        SurveyEditor.prototype.onQuestionRemoved = function (question) {
            this.surveyObjects.removeObject(question);
            this.survey.render();
        };
        SurveyEditor.prototype.onPropertyValueChanged = function (property, obj, newValue) {
            var isDefault = property.isDefaultValue(newValue);
            obj[property.name] = newValue;
            if (property.name == "name") {
                this.surveyObjects.nameChanged(obj);
                if (SurveyEditor_1.SurveyHelper.getObjectType(obj) == SurveyEditor_1.ObjType.Page) {
                    this.pagesEditor.changeName(obj);
                }
            }
            this.surveyValue.render();
        };
        SurveyEditor.prototype.showDesigner = function () {
            if (!this.textWorker.isJsonCorrect) {
                alert("Please correct JSON!");
                return;
            }
            this.initSurvey(new Survey.JsonObject().toJsonObject(this.textWorker.survey));
            this.koIsShowDesigner(true);
        };
        SurveyEditor.prototype.showJsonEditor = function () {
            this.jsonEditor.setValue(this.getSurveyTextFromDesigner());
            this.jsonEditor.focus();
            this.koIsShowDesigner(false);
        };
        SurveyEditor.prototype.getSurveyTextFromDesigner = function () {
            var json = new Survey.JsonObject().toJsonObject(this.survey);
            return new SurveyEditor_1.SurveyJSON5().stringify(json, null, 1);
        };
        SurveyEditor.prototype.selectedObjectChanged = function (obj) {
            var canDeleteObject = false;
            this.selectedObjectEditor.selectedObject = obj;
            this.surveyVerbs.obj = obj;
            var objType = SurveyEditor_1.SurveyHelper.getObjectType(obj);
            if (objType == SurveyEditor_1.ObjType.Page) {
                this.survey.currentPage = obj;
                canDeleteObject = this.survey.pages.length > 1;
            }
            if (objType == SurveyEditor_1.ObjType.Question) {
                this.survey["setselectedQuestion"](obj);
                canDeleteObject = true;
                this.survey.currentPage = this.survey.getPageByQuestion(this.survey["selectedQuestionValue"]);
            }
            else {
                this.survey["setselectedQuestion"](null);
            }
            this.koCanDeleteObject(canDeleteObject);
        };
        SurveyEditor.prototype.applyBinding = function () {
            if (this.renderedElement == null)
                return;
            ko.cleanNode(this.renderedElement);
            ko.applyBindings(this, this.renderedElement);
            this.surveyjs = document.getElementById("surveyjs");
            this.jsonEditor = ace.edit("surveyjsEditor");
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
            this.jsonEditor.getSession().setUseWorker(true);
        };
        SurveyEditor.prototype.initSurvey = function (json) {
            this.surveyValue = new Survey.Survey(json);
            this.survey.mode = "designer";
            this.survey.render(this.surveyjs);
            this.surveyObjects.survey = this.survey;
            this.pagesEditor.survey = this.survey;
            this.pagesEditor.setSelectedPage(this.survey.currentPage);
            this.surveyVerbs.survey = this.survey;
            var self = this;
            this.surveyValue["onSelectedQuestionChanged"].add(function (sender, options) { self.surveyObjects.selectObject(sender["selectedQuestionValue"]); });
            this.surveyValue["onCopyQuestion"].add(function (sender, options) { self.copyQuestion(self.koSelectedObject().value); });
            this.surveyValue.onCurrentPageChanged.add(function (sender, options) { self.pagesEditor.setSelectedPage(sender.currentPage); });
            this.surveyValue.onQuestionAdded.add(function (sender, options) { self.onQuestionAdded(options.question); });
            this.surveyValue.onQuestionRemoved.add(function (sender, options) { self.onQuestionRemoved(options.question); });
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
        SurveyEditor.prototype.processJson = function (text) {
            this.textWorker = new SurveyEditor_1.SurveyTextWorker(text);
            this.jsonEditor.getSession().setAnnotations(this.createAnnotations(text, this.textWorker.errors));
        };
        SurveyEditor.prototype.doDraggingQuestion = function (questionType, e) {
            var name = SurveyEditor_1.SurveyHelper.getNewName(this.survey.getAllQuestions(), "question");
            new SurveyEditor_1.DragDropHelper(this.survey).startDragNewQuestion(e, questionType, name);
        };
        SurveyEditor.prototype.doDraggingCopiedQuestion = function (json, e) {
            var name = SurveyEditor_1.SurveyHelper.getNewName(this.survey.getAllQuestions(), "question");
            new SurveyEditor_1.DragDropHelper(this.survey).startDragCopiedQuestion(e, name, json);
        };
        SurveyEditor.prototype.doClickQuestion = function (questionType) {
            var name = SurveyEditor_1.SurveyHelper.getNewName(this.survey.getAllQuestions(), "question");
            this.doClickQuestionCore(Survey.QuestionFactory.Instance.createQuestion(questionType, name));
        };
        SurveyEditor.prototype.doClickCopiedQuestion = function (json) {
            var name = SurveyEditor_1.SurveyHelper.getNewName(this.survey.getAllQuestions(), "question");
            var question = Survey.QuestionFactory.Instance.createQuestion(json["type"], name);
            new Survey.JsonObject().toObject(json, question);
            question.name = name;
            this.doClickQuestionCore(question);
        };
        SurveyEditor.prototype.doClickQuestionCore = function (question) {
            var page = this.survey.currentPage;
            var index = -1;
            if (this.survey["selectedQuestionValue"] != null) {
                index = page.questions.indexOf(this.survey["selectedQuestionValue"]) + 1;
            }
            page.addQuestion(question, index);
        };
        SurveyEditor.prototype.deleteCurrentObject = function () {
            this.deleteObject(this.koSelectedObject().value);
        };
        SurveyEditor.prototype.copyQuestion = function (question) {
            var objType = SurveyEditor_1.SurveyHelper.getObjectType(question);
            if (objType != SurveyEditor_1.ObjType.Question)
                return;
            var json = new Survey.JsonObject().toJsonObject(question);
            json.type = question.getType();
            var item = this.getCopiedQuestionByName(question.name);
            if (item) {
                item.json = json;
            }
            else {
                this.koCopiedQuestions.push({ name: question.name, json: json });
            }
            if (this.koCopiedQuestions().length > 3) {
                this.koCopiedQuestions.splice(0, 1);
            }
        };
        SurveyEditor.prototype.getCopiedQuestionByName = function (name) {
            var items = this.koCopiedQuestions();
            for (var i = 0; i < items.length; i++) {
                if (items[i].name == name)
                    return items[i];
            }
            return null;
        };
        SurveyEditor.prototype.deleteObject = function (obj) {
            this.surveyObjects.removeObject(obj);
            var objType = SurveyEditor_1.SurveyHelper.getObjectType(obj);
            if (objType == SurveyEditor_1.ObjType.Page) {
                this.survey.removePage(obj);
                this.pagesEditor.removePage(obj);
            }
            if (objType == SurveyEditor_1.ObjType.Question) {
                this.survey.currentPage.removeQuestion(obj);
                this.survey["setselectedQuestion"](null);
                this.surveyObjects.selectObject(this.survey.currentPage);
            }
            this.survey.render();
        };
        SurveyEditor.prototype.showLiveSurvey = function () {
            if (!this.surveyjsExample)
                return;
            var json = this.getSurveyJSON();
            if (json != null) {
                var survey = new Survey.Survey(json);
                var self = this;
                survey.onComplete.add(function (sender) { self.surveyjsExample.innerHTML = "Survey Result: " + new SurveyEditor_1.SurveyJSON5().stringify(survey.data); });
                survey.render(this.surveyjsExample);
            }
            else {
                this.surveyjsExample.innerHTML = "Please correct JSON!";
            }
        };
        SurveyEditor.prototype.showSurveyEmbeding = function () {
            var json = this.getSurveyJSON();
            this.surveyEmbeding.json = json;
            this.surveyEmbeding.surveyId = this.surveyId;
            this.surveyEmbeding.surveyPostId = this.surveyPostId;
            this.surveyEmbeding.show();
        };
        SurveyEditor.prototype.getSurveyJSON = function () {
            if (this.koIsShowDesigner())
                return new Survey.JsonObject().toJsonObject(this.survey);
            if (this.textWorker.isJsonCorrect)
                return new Survey.JsonObject().toJsonObject(this.textWorker.survey);
            return null;
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
        SurveyEditor.updateTextTimeout = 1000;
        SurveyEditor.defaultNewSurveyText = "{ pages: [ { name: 'page1'}] }";
        return SurveyEditor;
    })();
    SurveyEditor_1.SurveyEditor = SurveyEditor;
    new Survey.SurveyTemplateText().replaceText(template_page.html, "page");
    new Survey.SurveyTemplateText().replaceText(template_question.html, "question");
    Survey.Survey.prototype["onCreating"] = function () {
        this.selectedQuestionValue = null;
        this.onSelectedQuestionChanged = new Survey.Event();
        this.onCopyQuestion = new Survey.Event();
        var self = this;
        this.copyQuestionClick = function () { self.onCopyQuestion.fire(self); };
    };
    Survey.Survey.prototype["setselectedQuestion"] = function (value) {
        if (value == this.selectedQuestionValue)
            return;
        var oldValue = this.selectedQuestionValue;
        this.selectedQuestionValue = value;
        if (oldValue != null) {
            oldValue["onSelectedQuestionChanged"]();
        }
        if (this.selectedQuestionValue != null) {
            this.selectedQuestionValue["onSelectedQuestionChanged"]();
        }
        this.onSelectedQuestionChanged.fire(this, { 'oldSelectedQuestion': oldValue, 'newSelectedQuestion': value });
    };
    Survey.Page.prototype["onCreating"] = function () {
        var self = this;
        this.dragEnterCounter = 0;
        this.koDragging = ko.observable(-1);
        this.koDragging.subscribe(function (newValue) { if (newValue < 0)
            self.dragEnterCounter = 0; });
        this.dragEnter = function (e) { e.preventDefault(); self.dragEnterCounter++; self.doDragEnter(e); };
        this.dragLeave = function (e) { self.dragEnterCounter--; if (self.dragEnterCounter === 0)
            self.koDragging(-1); };
        this.dragDrop = function (e) { self.doDrop(e); };
    };
    Survey.Page.prototype["doDrop"] = function (e) {
        new SurveyEditor_1.DragDropHelper(this.data).doDrop(e);
    };
    Survey.Page.prototype["doDragEnter"] = function (e) {
        if (this.questions.length > 0 || this.koDragging() > 0)
            return;
        if (new SurveyEditor_1.DragDropHelper(this.data).isSurveyDragging(e)) {
            this.koDragging(this.questions.length);
        }
    };
    Survey.Question.prototype["onCreating"] = function () {
        var self = this;
        this.dragDropHelperValue = null;
        this.dragDropHelper = function () {
            if (this.dragDropHelperValue == null)
                this.dragDropHelperValue = new SurveyEditor_1.DragDropHelper(this.data);
            return this.dragDropHelperValue;
        };
        this.dragOver = function (e) { self.dragDropHelper().doDragDropOver(e, self); };
        this.dragDrop = function (e) { self.dragDropHelper().doDrop(e, self); };
        this.dragStart = function (e) { self.dragDropHelper().startDragQuestion(e, self.name); };
        this.koIsSelected = ko.observable(false);
        this.koOnClick = function () {
            if (self.data == null)
                return;
            self.data["setselectedQuestion"](this);
        };
    };
    Survey.Question.prototype["onSelectedQuestionChanged"] = function () {
        if (this.data == null)
            return;
        this.koIsSelected(this.data["selectedQuestionValue"] == this);
    };
})(SurveyEditor || (SurveyEditor = {}));
