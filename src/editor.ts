/// <reference path="objectEditor.ts" />
/// <reference path="pagesEditor.ts" />
/// <reference path="textWorker.ts" />

module SurveyEditor {
    export class SurveyEditor {
        public static updateTextTimeout: number = 1000;
        public static defaultNewSurveyText: string = "{ pages: [ { name: 'page1', questions: [{ type: 'text', name: 'question1' }] }] }";
        private renderedElement: HTMLElement;
        private surveyjs: HTMLElement;
        private surveyjsExample: HTMLElement;

        private jsonEditor: AceAjax.Editor;
        private isProcessingImmediately: boolean;
        private isTextChangedFromDesigner: boolean;
        private selectedObjectEditor: SurveyObjectEditor;
        private pagesEditor: SurveyPagesEditor;
        private surveyObjects: SurveyObjects;
        private textWorker: SurveyTextWorker;
        private surveyValue: Survey.Survey;

        public questionTypes: string[];
        koSelectedPage: any;
        koSelectedQuestion: any;
        koSelectedQuestionType: any;
        koIsShowDesigner: any;
        koObjects: any; koSelectedObject: any;
        selectDesignerClick: any; selectEditorClick: any;
        selectQuestionTypeClick: any; runSurveyClick: any;

        constructor(renderedElement: any = null) {
            this.koSelectedPage = ko.observable(null);
            this.koSelectedQuestion = ko.observable(null);
            this.questionTypes = Survey.QuestionFactory.Instance.getAllTypes();
            this.koSelectedQuestionType = ko.observable(this.questionTypes[0]);

            var self = this;

            this.koObjects = ko.observableArray();
            this.koSelectedObject = ko.observable();
            this.koSelectedObject.subscribe(function (newValue) { self.selectedObjectChanged(newValue != null ? newValue.value : null); });
            this.surveyObjects = new SurveyObjects(this.koObjects, this.koSelectedObject);

            this.selectedObjectEditor = new SurveyObjectEditor();
            this.selectedObjectEditor.title = "Survey";
            this.selectedObjectEditor.koShowProperties(true);
            this.selectedObjectEditor.onPropertyValueChanged.add((sender, options) => {
                self.onPropertyValueChanged(options.property, options.object, options.newValue);
            });
            this.pagesEditor = new SurveyPagesEditor(() => { self.addPage(); }, (page: Survey.Page) => { self.surveyObjects.selectObject(page); });

            this.koIsShowDesigner = ko.observable(true);
            this.selectDesignerClick = function () { self.koIsShowDesigner(true); };
            this.selectEditorClick = function () { self.koIsShowDesigner(false); self.showJsonEditor(); };
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
            this.pagesEditor.survey = this.surveyValue;
            this.surveyObjects.addPage(page);

            //this.textWorker.addPage(name);
            //this.setText(this.textWorker.text, name);
        }
        public addQuestion() {
            var page = this.survey.currentPage;
            if (page == null) return;
            var name = this.getNewName(this.survey.getAllQuestions(), "question");
            var question = Survey.QuestionFactory.Instance.createQuestion(this.koSelectedQuestionType(), name);

            //this.textWorker.addQuestion(this.fromWYSIWYGtoText(page), question);
            //this.setText(this.textWorker.text, name);

            page.addQuestion(question);
            this.surveyObjects.addQuestion(question);
            this.surveyValue.render();
        }
        private onPropertyValueChanged(property: Survey.JsonObjectProperty, object: any, newValue: any) {
            var isDefault = property.isDefaultValue(newValue);
            object[property.name] = newValue;
            this.surveyValue.render();
            //this.textWorker.changeProperty(this.fromWYSIWYGtoText(object), property.name, newValue, isDefault);
            //this.setText(this.textWorker.text, object.name); 
        }
        private showJsonEditor() {
            var json = new Survey.JsonObject().toJsonObject(this.survey);
            this.jsonEditor.setValue(new SurveyJSON5().stringify(json));
            this.jsonEditor.focus();
        }
        private selectedObjectChanged(obj: Survey.Base) {
            this.selectedObjectEditor.selectedObject = obj;
            if (obj != null && obj.getType() == "page") {
                this.survey.currentPage = <Survey.Page>obj;
            }
            this.survey.selectedQuestion = obj != null && obj["koValue"] ? <Survey.Question>obj : null;
            if (this.survey.selectedQuestion != null) {
                this.survey.currentPage = this.survey.getPageByQuestion(this.survey.selectedQuestion);
            }
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
            this.jsonEditor.selection.on("changeCursor", function () {
                self.onJsonEditorCursorChanged();
            });
            this.jsonEditor.getSession().setUseWorker(true);
            this.setText(SurveyEditor.defaultNewSurveyText, "name: 'question1'");
        }
        private initSurvey(json: any) {
            this.surveyValue = new Survey.Survey(json);
            this.survey.mode = "designer";
            this.survey.render(this.surveyjs);
            this.surveyObjects.survey = this.survey;
            this.pagesEditor.survey = this.survey;
            this.pagesEditor.setSelectedPage(this.survey.currentPage);
            var self = this;
            this.surveyValue.onSelectedQuestionChanged.add((sender: Survey.Survey, options) => { self.surveyObjects.selectObject(sender.selectedQuestion); });
            this.surveyValue.onCurrentPageChanged.add((sender: Survey.Survey, options) => { self.pagesEditor.setSelectedPage(sender.currentPage); });
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
            return;
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
            if (!this.surveyjsExample) return;
            var json = null;
            if (this.koIsShowDesigner()) {
                json = new Survey.JsonObject().toJsonObject(this.survey);
            }
            if (json != null) {
                var survey = new Survey.Survey(json);
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
