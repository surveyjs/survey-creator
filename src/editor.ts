/// <reference path="objectEditor.ts" />
/// <reference path="pagesEditor.ts" />
/// <reference path="textWorker.ts" />
/// <reference path="surveyHelper.ts" />
/// <reference path="objectVerbs.ts" />
/// <reference path="dragdrophelper.ts" />
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
        private isTextChangedFromDesigner: boolean;
        private selectedObjectEditor: SurveyObjectEditor;
        private pagesEditor: SurveyPagesEditor;
        private surveyEmbeding: SurveyEmbedingWindow
        private surveyObjects: SurveyObjects;
        private surveyVerbs: SurveyVerbs;
        private textWorker: SurveyTextWorker;
        private surveyValue: Survey.Survey;

        public questionTypes: string[];
        koIsShowDesigner: any;
        koCanDeleteObject: any;
        koObjects: any; koSelectedObject: any;
        selectDesignerClick: any; selectEditorClick: any;
        deleteObjectClick: any;
        runSurveyClick: any; embedingSurveyClick: any;
        draggingQuestion: any; clickQuestion: any;

        constructor(renderedElement: any = null) {
            this.questionTypes = Survey.QuestionFactory.Instance.getAllTypes();
            this.koCanDeleteObject = ko.observable(false);

            var self = this;

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
        public get text() {
            return this.jsonEditor != null ? this.jsonEditor.getValue() : "";
        }
        private getTextAndProcess(): string {
            var text = this.text;
            if (this.timeoutId > 0) {
                clearTimeout(this.timeoutId);
                this.timeoutId = -1;
                this.processJson(text);
            }
            return text;
        }
        public set text(value: string) {
            this.setTextValue(value, 1);
        }
        public setText(value: string, findText: string) {
            this.isTextChangedFromDesigner = true;
            this.text = value;
            this.isTextChangedFromDesigner = false;
            this.jsonEditor.find(findText);
        }
        public addPage() {
            var name = SurveyHelper.getNewName(this.survey.pages, "page");
            var page = this.surveyValue.addNewPage(name);
            this.addPageToUI(page);
        }
        private movePage(indexFrom: number, indexTo: number) {
            var page = this.survey.pages[indexFrom];
            this.deleteObject(page);
            this.survey.pages.splice(indexTo, 0, page);
            this.addPageToUI(page);
        }
        private addPageToUI(page: Survey.Page) {
            this.pagesEditor.survey = this.surveyValue;
            this.surveyObjects.addPage(page);
        }
        private onQuestionAdded(question: Survey.Question) {
            var page = this.survey.getPageByQuestion(question);
            this.surveyObjects.addQuestion(page, question);
            this.survey.render();
        }
        private onQuestionRemoved(question: Survey.Question) {
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
                alert("Please correct JSON!");
                return;
            }
            this.initSurvey(new Survey.JsonObject().toJsonObject(this.textWorker.survey));
            this.koIsShowDesigner(true); 
        }
        private showJsonEditor() {
            var json = new Survey.JsonObject().toJsonObject(this.survey);
            this.jsonEditor.setValue(new SurveyJSON5().stringify(json, null, 1));
            this.jsonEditor.focus();
            this.koIsShowDesigner(false); 
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
        private setTextValue(value: string, position: number) {
            if (this.jsonEditor == null) return;
            this.isProcessingImmediately = true;
            this.jsonEditor.setValue(value, position);
            this.jsonEditor.renderer.updateFull(true);
            this.processJson(value);
            this.isProcessingImmediately = false;
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
            this.survey.mode = "designer";
            this.survey.render(this.surveyjs);
            this.surveyObjects.survey = this.survey;
            this.pagesEditor.survey = this.survey;
            this.pagesEditor.setSelectedPage(this.survey.currentPage);
            this.surveyVerbs.survey = this.survey;
            var self = this;
            this.surveyValue["onSelectedQuestionChanged"].add((sender: Survey.Survey, options) => { self.surveyObjects.selectObject(sender["selectedQuestionValue"]); });
            this.surveyValue.onCurrentPageChanged.add((sender: Survey.Survey, options) => { self.pagesEditor.setSelectedPage(sender.currentPage); });
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
        private doDraggingQuestion(questionType: string, e) {
            var name = SurveyHelper.getNewName(this.survey.getAllQuestions(), "question");
            new DragDropHelper(<Survey.ISurvey>this.survey).startDragNewQuestion(e, questionType, name);
        }
        private doClickQuestion(questionType: string) {
            var name = SurveyHelper.getNewName(this.survey.getAllQuestions(), "question");
            var page = this.survey.currentPage;
            var index = -1;
            if (this.survey["selectedQuestionValue"] != null) {
                index = page.questions.indexOf(this.survey["selectedQuestionValue"]) + 1;
            }
            var question = Survey.QuestionFactory.Instance.createQuestion(questionType, name);
            page.addQuestion(question, index);
        }
        private deleteCurrentObject() {
            this.deleteObject(this.koSelectedObject().value);
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
                survey.onComplete.add((sender: Survey.Survey) => { self.surveyjsExample.innerHTML = "Survey Result: " + new SurveyJSON5().stringify(survey.data); });
                survey.render(this.surveyjsExample);
            } else {
                this.surveyjsExample.innerHTML = "Please correct JSON!";
            }
        }
        private showSurveyEmbeding() {
            var json = this.getSurveyJSON();
            this.surveyEmbeding.json = json;
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

    }
    Survey.Survey.prototype["setselectedQuestion"] = function(value: Survey.Question) {
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
        if (this.koDragging() > 0) return;
        if (new DragDropHelper(this.data).isSurveyDragging(e)) {
            this.koDragging(this.questions.length);
        }
    }

    Survey.Question.prototype["onCreating"] = function () {
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
    Survey.Question.prototype["onSelectedQuestionChanged"] = function() {
        if (this.data == null) return;
        this.koIsSelected(this.data["selectedQuestionValue"] == this);
    }
}
