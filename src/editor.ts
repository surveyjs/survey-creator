/// <reference path="objectEditor.ts" />
/// <reference path="pagesEditor.ts" />
/// <reference path="textWorker.ts" />

module SurveyEditor {
    export class SurveyEditor {
        public static updateTextTimeout: number = 1000;
        public static defaultNewSurveyText: string = "{ pages: [ { name: 'page1', questions: [{ type: 'text', name: 'question1' }] }] }";
        private renderedElement: HTMLElement;
        private surveyjsSelectedObj: HTMLElement;
        private surveyjs: HTMLElement;
        private surveyjsExample: HTMLElement;
        private jsonEditor: AceAjax.Editor;
        private isProcessingImmediately: boolean;
        private isTextChangedFromDesigner: boolean;
        private surveyEditor: SurveyObjectEditor;
        private pageEditor: SurveyObjectEditor;
        private questionEditor: SurveyObjectEditor;
        private pagesEditor: SurveyPagesEditor;
        private textWorker: SurveyTextWorker;
        private surveyValue: Survey.Survey;

        public questionTypes: string[];
        koSelectedPage: any;
        koSelectedQuestion: any;
        koSelectedQuestionType: any;
        koShowLiveSurvey: any;
        koIsShowDesigner: any;
        selectDesignerClick: any; selectEditorClick: any;
        selectQuestionTypeClick: any; runSurveyClick: any;

        constructor(renderedElement: any = null) {
            this.koSelectedPage = ko.observable(null);
            this.koSelectedQuestion = ko.observable(null);
            this.questionTypes = Survey.QuestionFactory.Instance.getAllTypes();
            this.koSelectedQuestionType = ko.observable(this.questionTypes[0]);
            this.koShowLiveSurvey = ko.observable(false);
            var self = this;
            this.surveyEditor = new SurveyObjectEditor();
            this.surveyEditor.title = "Survey";
            this.surveyEditor.koShowProperties(false);
            this.surveyEditor.onPropertyValueChanged.add((sender, options) => {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.pageEditor = new SurveyObjectEditor();
            this.pageEditor.onPropertyValueChanged.add((sender, options) => {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.questionEditor = new SurveyObjectEditor();
            this.questionEditor.onPropertyValueChanged.add((sender, options) => {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.pagesEditor = new SurveyPagesEditor(() => { self.addPage(); }, (page: Survey.Page) => { self.moveToObject(page);});

            this.koIsShowDesigner = ko.observable(true);
            this.selectDesignerClick = function () { self.koIsShowDesigner(true); };
            this.selectEditorClick = function () { self.koIsShowDesigner(false); self.jsonEditor.focus(); };
            this.selectQuestionTypeClick = function (value: string) { self.koSelectedQuestionType(value); };
            this.runSurveyClick = function () { self.showLiveSurvey(); };

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
            var name = this.getNewName(this.survey.pages, "page");
            var page = this.surveyValue.addNewPage(name);
            this.surveyValue.currentPage = page;
            this.pagesEditor.survey = this.surveyValue;
            this.selectSurveyObjects(page, null);
            this.textWorker.addPage(name);
            this.setText(this.textWorker.text, name);
        }
        public addQuestion() {
            var page: Survey.Page = this.koSelectedPage();
            if (page == null) return;
            var name = this.getNewName(this.survey.getAllQuestions(), "question");
            var question = Survey.QuestionFactory.Instance.createQuestion(this.koSelectedQuestionType(), name);

            this.textWorker.addQuestion(this.fromWYSIWYGtoText(page), question);
            this.setText(this.textWorker.text, name);

            page.addQuestion(question);
            this.surveyValue.render();
            this.surveyValue.selectedQuestion = question;
        }
        private onPropertyValueChanged(property: Survey.JsonObjectProperty, object: any, newValue: any) {
            var isDefault = property.isDefaultValue(newValue);
            if (isDefault) {
                delete object[property.name];
            } else {
                object[property.name] = newValue;
            }
            this.surveyValue.render();
            this.textWorker.changeProperty(this.fromWYSIWYGtoText(object), property.name, newValue, isDefault);
            this.setText(this.textWorker.text, object.name); 
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
            this.surveyjsSelectedObj = document.getElementById("surveyjsSelectedObj");
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
            this.jsonEditor.selection.on("changeCursor", function () {
                self.onJsonEditorCursorChanged();
            });
            this.jsonEditor.getSession().setUseWorker(true);
            this.setText(SurveyEditor.defaultNewSurveyText, "name: 'question1'");
        }
        private initSurvey(json: any) {
            this.surveyValue = new Survey.Survey(json);
            this.surveyValue.mode = "designer";
            this.surveyValue.render(this.surveyjs);
            this.surveyEditor.selectedObject = this.surveyValue;
            this.pagesEditor.survey = this.surveyValue;
            var self = this;
            this.surveyValue.onSelectedQuestionChanged.add((sender: Survey.Survey, options) => { self.selectSurveyObjects(sender.currentPage, sender.selectedQuestion); });
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
        private onJsonEditorCursorChanged(): any {
            if (this.koIsShowDesigner() || this.textWorker == null || !this.textWorker.isJsonCorrect) return;
            var position = this.jsonEditor.getCursorPosition();
            var objs = this.textWorker.getCurrentSurveyObjects(position.row, position.column);
            var page = null;
            var question = null;
            for (var i = 0; i < objs.length; i++) {
                if (objs[i].getType() == "page") page = objs[i]
                else question = objs[i];
            }
            this.survey.currentPage = this.fromTexttoWYSIWYG(page);
            this.survey.selectedQuestion = this.fromTexttoWYSIWYG(question);
        }
        private selectSurveyObjects(page, question) {
            this.koSelectedPage(page);
            this.koSelectedQuestion(question);
            this.pageEditor.selectedObject = page;
            this.pagesEditor.setSelectedPage(page);
            if (page) {
                this.pageEditor.title = "page" + (this.survey.pages.indexOf(page) + 1);
            }
            this.questionEditor.selectedObject = question;
            if (question) {
                this.questionEditor.title = question.name;
            }
        }
        private moveToObject(obj: any) {
            this.surveyValue.currentPage = obj;
            this.selectSurveyObjects(obj, null);
            var pos = obj["position"];
            if (!pos) return;
            this.jsonEditor.moveCursorTo(pos.start.row, pos.start.column);
            this.jsonEditor.selection.clearSelection();
        }
        private processJson(text: string): any {
            this.textWorker = new SurveyTextWorker(text);
            if (!this.isTextChangedFromDesigner) {
                if (this.textWorker.isJsonCorrect) {
                    this.initSurvey(new SurveyJSON5().parse(this.textWorker.text));
                }
                this.onJsonEditorCursorChanged();
            }
            this.jsonEditor.getSession().setAnnotations(this.createAnnotations(text, this.textWorker.errors));
        }
        private showLiveSurvey() {
            if (this.surveyjsExample && this.textWorker.isJsonCorrect) {
                var survey = new Survey.Survey(new SurveyJSON5().parse(this.textWorker.text));
                var self = this;
                survey.onComplete.add((sender: Survey.Survey) => { self.surveyjsExample.innerHTML = "Survey Result: " + new SurveyJSON5().stringify(survey.data); });
                survey.render(this.surveyjsExample);
            }
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
        private getNewName(objs: Array<any>, baseName: string): string {
            var hash = {};
            for (var i = 0; i < objs.length; i++) {
                hash[objs[i].name] = true;
            }
            var num = 1;
            while (true) {
                if (!hash[baseName + num.toString()]) break;
                num++;
            }
            return baseName + num.toString();
        }
        private fromWYSIWYGtoText(obj: any): any {
            var finder = new SurveyObjectFinder(this.survey, this.textWorker.survey);
            return finder.findObject(obj);
        }
        private fromTexttoWYSIWYG(obj: any): any {
            var finder = new SurveyObjectFinder(this.textWorker.survey, this.survey);
            return finder.findObject(obj);
        }
    }
}
