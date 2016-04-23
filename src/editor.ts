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

module SurveyEditor {
    export class SurveyEditor {
        public static updateTextTimeout: number = 1000;
        public static defaultNewSurveyText: string = "{ pages: [ { name: 'page1'}] }";
        private renderedElement: HTMLElement;
        private surveyjs: HTMLElement;
        private surveyjsExample: HTMLElement;

        private jsonEditor: AceAjax.Editor;
        private isProcessingImmediately: boolean;
        private selectedObjectEditor: SurveyObjectEditor;
        private pagesEditor: SurveyPagesEditor;
        private surveyEmbeding: SurveyEmbedingWindow
        private surveyObjects: SurveyObjects;
        private surveyVerbs: SurveyVerbs;
        private textWorker: SurveyTextWorker;
        private surveyValue: Survey.Survey;
        private saveSurveyFuncValue: any;
        private options: any;

        public surveyId: string = null;
        public surveyPostId: string = null;
        public questionTypes: string[];
        public koCopiedQuestions: any;
        
        koIsShowDesigner: any;
        koCanDeleteObject: any;
        koObjects: any; koSelectedObject: any;
        koShowSaveButton: any;
        selectDesignerClick: any; selectEditorClick: any;
        deleteObjectClick: any;
        runSurveyClick: any; embedingSurveyClick: any;
        saveButtonClick: any;
        draggingQuestion: any; clickQuestion: any;
        draggingCopiedQuestion: any; clickCopiedQuestion: any;

        constructor(renderedElement: any = null, options: any = null) {
            this.options = options;
            this.questionTypes = this.getQuestionTypes();
            this.koCopiedQuestions = ko.observableArray();
            this.koCanDeleteObject = ko.observable(false);

            var self = this;

            this.koShowSaveButton = ko.observable(false);
            this.saveButtonClick = function () { if (self.saveSurveyFunc) self.saveSurveyFunc(); };
            this.koObjects = ko.observableArray();
            this.koSelectedObject = ko.observable();
            this.koSelectedObject.subscribe(function (newValue) { self.selectedObjectChanged(newValue != null ? newValue.value : null); });
            this.surveyObjects = new SurveyObjects(this.koObjects, this.koSelectedObject);

            this.surveyVerbs = new SurveyVerbs();

            this.selectedObjectEditor = new SurveyObjectEditor();
            this.selectedObjectEditor.onPropertyValueChanged.add((sender, options) => {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.pagesEditor = new SurveyPagesEditor(() => { self.addPage(); }, (page: Survey.Page) => { self.surveyObjects.selectObject(page); },
                (indexFrom: number, indexTo: number) => { self.movePage(indexFrom, indexTo); });
            this.surveyEmbeding = new SurveyEmbedingWindow();

            this.koIsShowDesigner = ko.observable(true);
            this.selectDesignerClick = function () { self.showDesigner(); };
            this.selectEditorClick = function () { self.showJsonEditor(); };
            this.runSurveyClick = function () { self.showLiveSurvey(); };
            this.embedingSurveyClick = function () { self.showSurveyEmbeding(); };
            this.deleteObjectClick = function () { self.deleteCurrentObject(); };
            this.draggingQuestion = function (questionType, e) { self.doDraggingQuestion(questionType, e); }
            this.clickQuestion = function (questionType) { self.doClickQuestion(questionType); }
            this.draggingCopiedQuestion = function (item, e) { self.doDraggingCopiedQuestion(item.json, e); }
            this.clickCopiedQuestion = function (item) { self.doClickCopiedQuestion(item.json); }

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
        public loadSurvey(surveyId: string) {
            var self = this;
            new Survey.dxSurveyService().loadSurvey(surveyId, function (success: boolean, result: string, response: any) {
                if (success && result) {
                    self.text = JSON.stringify(result);
                }
            });
        }
        public get text() {
            if (this.koIsShowDesigner()) return this.getSurveyTextFromDesigner();
            return this.jsonEditor != null ? this.jsonEditor.getValue() : "";
        }
        public set text(value: string) {
            this.textWorker = new SurveyTextWorker(value);
            if (this.textWorker.isJsonCorrect) {
                this.showDesigner();
            } else {
                this.setTextValue(value);
                this.koIsShowDesigner(false); 
            }
        }
        public get saveSurveyFunc() { return this.saveSurveyFuncValue; }
        public set saveSurveyFunc(value: any) {
            this.saveSurveyFuncValue = value;
            this.koShowSaveButton(value != null);
        }
        private setTextValue(value: string) {
            if (this.jsonEditor == null) return;
            this.isProcessingImmediately = true;
            this.jsonEditor.setValue(value);
            this.jsonEditor.renderer.updateFull(true);
            this.processJson(value);
            this.isProcessingImmediately = false;
        }
        public addPage() {
            var name = SurveyHelper.getNewName(this.survey.pages, "page");
            var page = <Survey.Page>this.surveyValue.addNewPage(name);
            this.addPageToUI(page);
        }
        public getLocString(str: string) { return editorLocalization.getString(str); }
        protected getQuestionTypes(): string[] {
            var allTypes = Survey.QuestionFactory.Instance.getAllTypes();
            if (!this.options || !this.options.questionTypes || !this.options.questionTypes.length) return allTypes;
            var result = [];
            for (var i = 0; i < this.options.questionTypes.length; i++) {
                var questionType = this.options.questionTypes[i];
                if (allTypes.indexOf(questionType) > -1) {
                    result.push(questionType);
                }
            }
            return result;
        }
        private movePage(indexFrom: number, indexTo: number) {
            var page = <Survey.Page>this.survey.pages[indexFrom];
            this.deleteObject(page);
            this.survey.pages.splice(indexTo, 0, page);
            this.addPageToUI(page);
        }
        private addPageToUI(page: Survey.Page) {
            this.pagesEditor.survey = this.surveyValue;
            this.surveyObjects.addPage(page);
        }
        private onQuestionAdded(question: Survey.QuestionBase) {
            var page = <Survey.Page>this.survey.getPageByQuestion(question);
            this.surveyObjects.addQuestion(page, question);
            this.survey.render();
        }
        private onQuestionRemoved(question: Survey.QuestionBase) {
            this.surveyObjects.removeObject(question);
            this.survey.render();
        }
        private onPropertyValueChanged(property: Survey.JsonObjectProperty, obj: any, newValue: any) {
            var isDefault = property.isDefaultValue(newValue);
            obj[property.name] = newValue;
            if (property.name == "name") {
                this.surveyObjects.nameChanged(obj);
                if (SurveyHelper.getObjectType(obj) == ObjType.Page) {
                    this.pagesEditor.changeName(<Survey.Page>obj);
                }
            }
            this.surveyValue.render();
        }
        private showDesigner() {
            if (!this.textWorker.isJsonCorrect) {
                alert(this.getLocString("ed.correctJSON"));
                return;
            }
            this.initSurvey(new Survey.JsonObject().toJsonObject(this.textWorker.survey));
            this.koIsShowDesigner(true); 
        }
        private showJsonEditor() {
            this.jsonEditor.setValue(this.getSurveyTextFromDesigner());
            this.jsonEditor.focus();
            this.koIsShowDesigner(false); 
        }
        private getSurveyTextFromDesigner() {
            var json = new Survey.JsonObject().toJsonObject(this.survey);
            return new SurveyJSON5().stringify(json, null, 1);
        }
        private selectedObjectChanged(obj: Survey.Base) {
            var canDeleteObject = false;
            this.selectedObjectEditor.selectedObject = obj;
            this.surveyVerbs.obj = obj;
            var objType = SurveyHelper.getObjectType(obj);
            if (objType == ObjType.Page) {
                this.survey.currentPage = <Survey.Page>obj;
                canDeleteObject = this.survey.pages.length > 1;
            }
            if (objType == ObjType.Question) {
                this.survey["setselectedQuestion"](obj);
                canDeleteObject = true;
                this.survey.currentPage = this.survey.getPageByQuestion(this.survey["selectedQuestionValue"]);
            } else {
                this.survey["setselectedQuestion"](null);
            }
            this.koCanDeleteObject(canDeleteObject);
        }
        private applyBinding() {
            if (this.renderedElement == null) return;
            ko.cleanNode(this.renderedElement);
            ko.applyBindings(this, this.renderedElement);
            this.surveyjs = document.getElementById("surveyjs");
            this.jsonEditor = ace.edit("surveyjsEditor");
            this.surveyjsExample = document.getElementById("surveyjsExample");

            this.initSurvey(new SurveyJSON5().parse(SurveyEditor.defaultNewSurveyText));
            this.surveyValue.mode = "designer";
            this.surveyValue.render(this.surveyjs);

            this.initJsonEditor();
            SurveyTextWorker.newLineChar = this.jsonEditor.session.doc.getNewLineCharacter();
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
        }
        private initSurvey(json: any) {
            this.surveyValue = new Survey.Survey(json);
            if (this.surveyValue.isEmpty) {
                this.surveyValue = new Survey.Survey(new SurveyJSON5().parse(SurveyEditor.defaultNewSurveyText));
            }
            this.survey.mode = "designer";
            this.survey.render(this.surveyjs);
            this.surveyObjects.survey = this.survey;
            this.pagesEditor.survey = this.survey;
            this.pagesEditor.setSelectedPage(<Survey.Page>this.survey.currentPage);
            this.surveyVerbs.survey = this.survey;
            var self = this;
            this.surveyValue["onSelectedQuestionChanged"].add((sender: Survey.Survey, options) => { self.surveyObjects.selectObject(sender["selectedQuestionValue"]); });
            this.surveyValue["onCopyQuestion"].add((sender: Survey.Survey, options) => { self.copyQuestion(self.koSelectedObject().value); });
            this.surveyValue.onCurrentPageChanged.add((sender: Survey.Survey, options) => { self.pagesEditor.setSelectedPage(<Survey.Page>sender.currentPage); });
            this.surveyValue.onQuestionAdded.add((sender: Survey.Survey, options) => { self.onQuestionAdded(options.question); });
            this.surveyValue.onQuestionRemoved.add((sender: Survey.Survey, options) => { self.onQuestionRemoved(options.question); });
        }
        private timeoutId: number = -1;
        private onJsonEditorChanged(): any {
            if (this.timeoutId > -1) {
                clearTimeout(this.timeoutId);
            }   
            if (this.isProcessingImmediately) {
                this.timeoutId = -1;
            } else {
                var self = this;
                this.timeoutId = setTimeout(function () {
                    self.timeoutId = -1;
                    self.processJson(self.text);
                }, SurveyEditor.updateTextTimeout);
            }
        }
        private processJson(text: string): any {
            this.textWorker = new SurveyTextWorker(text);
            this.jsonEditor.getSession().setAnnotations(this.createAnnotations(text, this.textWorker.errors));
        }
        private doDraggingQuestion(questionType: any, e) {
            var name = SurveyHelper.getNewName(this.survey.getAllQuestions(), "question");
            new DragDropHelper(<Survey.ISurvey>this.survey).startDragNewQuestion(e, questionType, name);
        }
        private doDraggingCopiedQuestion(json: any, e) {
            var name = SurveyHelper.getNewName(this.survey.getAllQuestions(), "question");
            new DragDropHelper(<Survey.ISurvey>this.survey).startDragCopiedQuestion(e, name, json);
        }
        private doClickQuestion(questionType: any) {
            var name = SurveyHelper.getNewName(this.survey.getAllQuestions(), "question");
            this.doClickQuestionCore(Survey.QuestionFactory.Instance.createQuestion(questionType, name));
        }
        private doClickCopiedQuestion(json: any) {
            var name = SurveyHelper.getNewName(this.survey.getAllQuestions(), "question");
            var question = Survey.QuestionFactory.Instance.createQuestion(json["type"], name);
            new Survey.JsonObject().toObject(json, question);
            question.name = name;
            this.doClickQuestionCore(question);
        }
        private doClickQuestionCore(question: Survey.QuestionBase) {
            var page = this.survey.currentPage;
            var index = -1;
            if (this.survey["selectedQuestionValue"] != null) {
                index = page.questions.indexOf(this.survey["selectedQuestionValue"]) + 1;
            }
            page.addQuestion(question, index);
        }
        private deleteCurrentObject() {
            this.deleteObject(this.koSelectedObject().value);
        }
        public copyQuestion(question: Survey.QuestionBase) {
            var objType = SurveyHelper.getObjectType(question);
            if (objType != ObjType.Question) return;
            var json = new Survey.JsonObject().toJsonObject(question);
            json.type = question.getType();
            var item = this.getCopiedQuestionByName(question.name);
            if (item) {
                item.json = json;
            } else {
                this.koCopiedQuestions.push({ name: question.name, json: json });
            }
            if (this.koCopiedQuestions().length > 3) {
                this.koCopiedQuestions.splice(0, 1);
            }
        }
        private getCopiedQuestionByName(name: string) {
            var items = this.koCopiedQuestions();
            for (var i = 0; i < items.length; i++) {
                if (items[i].name == name) return items[i];
            }
            return null;
        }
        private deleteObject(obj: any) {
            this.surveyObjects.removeObject(obj);
            var objType = SurveyHelper.getObjectType(obj);
            if (objType == ObjType.Page) {
                this.survey.removePage(obj);
                this.pagesEditor.removePage(obj);
            }
            if (objType == ObjType.Question) {
                this.survey.currentPage.removeQuestion(obj);
                this.survey["setselectedQuestion"](null);
                this.surveyObjects.selectObject(this.survey.currentPage);
            }
            this.survey.render();
        }
        private showLiveSurvey() {
            if (!this.surveyjsExample) return;
            var json = this.getSurveyJSON();
            if (json != null) {
                var survey = new Survey.Survey(json);
                var self = this;
                survey.onComplete.add((sender: Survey.Survey) => { self.surveyjsExample.innerHTML = this.getLocString("ed.surveyResults") + new SurveyJSON5().stringify(survey.data); });
                survey.render(this.surveyjsExample);
            } else {
                this.surveyjsExample.innerHTML = this.getLocString("ed.correctJSON");
            }
        }
        private showSurveyEmbeding() {
            var json = this.getSurveyJSON();
            this.surveyEmbeding.json = json;
            this.surveyEmbeding.surveyId = this.surveyId;
            this.surveyEmbeding.surveyPostId = this.surveyPostId;
            this.surveyEmbeding.show();
        }
        private getSurveyJSON(): any {
            if (this.koIsShowDesigner())  return new Survey.JsonObject().toJsonObject(this.survey);
            if (this.textWorker.isJsonCorrect) return new Survey.JsonObject().toJsonObject(this.textWorker.survey);
            return null;
        }
        private createAnnotations(text: string, errors: any[]): AceAjax.Annotation[] {
            var annotations = new Array<AceAjax.Annotation>();
            for (var i = 0; i < errors.length; i++) {
                var error = errors[i];
                var annotation: AceAjax.Annotation = { row: error.position.start.row, column: error.position.start.column, text: error.text, type: "error" };
                annotations.push(annotation);
            }
            return annotations;
        }
    }

    new Survey.SurveyTemplateText().replaceText(template_page.html, "page");
    new Survey.SurveyTemplateText().replaceText(template_question.html, "question");

    Survey.Survey.prototype["onCreating"] = function () {
        this.selectedQuestionValue = null;
        this.onSelectedQuestionChanged = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
        this.onCopyQuestion = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
        var self = this;
        this.copyQuestionClick = function () { self.onCopyQuestion.fire(self); };
    }
    Survey.Survey.prototype["setselectedQuestion"] = function(value: Survey.QuestionBase) {
        if (value == this.selectedQuestionValue) return;
        var oldValue = this.selectedQuestionValue;
        this.selectedQuestionValue = value;
        if (oldValue != null) {
            oldValue["onSelectedQuestionChanged"]();
        }
        if (this.selectedQuestionValue != null) {
            this.selectedQuestionValue["onSelectedQuestionChanged"]();
        }
        this.onSelectedQuestionChanged.fire(this, { 'oldSelectedQuestion': oldValue, 'newSelectedQuestion': value });
    }
    Survey.Survey.prototype["getEditorLocString"] = function (value: string): string {
        return editorLocalization.getString(value);
    }
    Survey.Page.prototype["onCreating"] = function () {
        var self = this;
        this.dragEnterCounter = 0;
        this.koDragging = ko.observable(-1);
        this.koDragging.subscribe(function (newValue) { if (newValue < 0) self.dragEnterCounter = 0; });
        this.dragEnter = function (e) { e.preventDefault(); self.dragEnterCounter++; self.doDragEnter(e); };
        this.dragLeave = function (e) { self.dragEnterCounter--; if (self.dragEnterCounter === 0) self.koDragging(-1); };
        this.dragDrop = function (e) { self.doDrop(e); };
    }
    Survey.Page.prototype["doDrop"] = function (e) {
        new DragDropHelper(this.data).doDrop(e);
    }
    Survey.Page.prototype["doDragEnter"] = function(e) {
        if (this.questions.length > 0 || this.koDragging() > 0) return;
        if (new DragDropHelper(this.data).isSurveyDragging(e)) {
            this.koDragging(this.questions.length);
        }
    }

    Survey.QuestionBase.prototype["onCreating"] = function () {
        var self = this;
        this.dragDropHelperValue = null;
        this.dragDropHelper = function () {
            if (this.dragDropHelperValue == null) this.dragDropHelperValue = new DragDropHelper(this.data);
            return this.dragDropHelperValue;
        }
        this.dragOver = function (e) { self.dragDropHelper().doDragDropOver(e, self); }
        this.dragDrop = function (e) { self.dragDropHelper().doDrop(e, self); }
        this.dragStart = function (e) { self.dragDropHelper().startDragQuestion(e, self.name); }
        this.koIsSelected = ko.observable(false);
        this.koOnClick = function () {
            if (self.data == null) return;
            self.data["setselectedQuestion"](this);
        }
    }
    Survey.QuestionBase.prototype["onSelectedQuestionChanged"] = function() {
        if (this.data == null) return;
        this.koIsSelected(this.data["selectedQuestionValue"] == this);
    }
}
