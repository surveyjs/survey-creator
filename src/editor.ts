import * as ko from "knockout";
import {editorLocalization} from "./editorLocalization";
import {SurveyObjectEditor} from "./objectEditor";
import {SurveyPagesEditor} from "./pagesEditor";
import {SurveyEmbedingWindow} from "./surveyEmbedingWindow";
import {SurveyObjects} from "./surveyObjects";
import {SurveyVerbs} from "./objectVerbs";
import {SurveyPropertyEditorShowWindow} from "./questionEditors/questionEditorBase";
import {SurveyJSONEditor} from "./surveyJSONEditor";
import {SurveyTextWorker} from "./textWorker"
import {SurveyUndoRedo, UndoRedoItem} from "./undoredo";
import {SurveyHelper, ObjType} from "./surveyHelper";
import {DragDropHelper} from "./dragdrophelper";
import {QuestionToolbox} from "./questionToolbox";
import {SurveyJSON5} from "./json5";
var templateEditorHtml = require("html-loader?interpolate!val-loader!./templates/entry.html");
var templatePageHtml = require("html-loader?interpolate!val-loader!./templates.survey/template_page.html");
var templateQuestionHtml = require("html-loader?interpolate!val-loader!./templates.survey/template_question.html");
import * as Survey from "survey-knockout";

export class SurveyEditor {
    public static defaultNewSurveyText: string = "{ pages: [ { name: 'page1'}] }";
    private renderedElement: HTMLElement;
    private surveyjs: HTMLElement;
    private surveyjsExample: HTMLElement;

    private jsonEditor: SurveyJSONEditor;
    private selectedObjectEditor: SurveyObjectEditor;
    private questionEditorWindow: SurveyPropertyEditorShowWindow;
    private pagesEditor: SurveyPagesEditor;
    private surveyEmbeding: SurveyEmbedingWindow;
    private surveyObjects: SurveyObjects;
    private toolboxValue: QuestionToolbox;
    private surveyVerbs: SurveyVerbs;
    private undoRedo: SurveyUndoRedo;
    private surveyValue: Survey.Survey;
    private saveSurveyFuncValue: (no: number, onSaveCallback: (no: number, isSuccess: boolean) => void) => void;
    private options: any;
    private stateValue: string = "";
    private dragDropHelper: DragDropHelper = null;
    private showJSONEditorTabValue: boolean;
    private showTestSurveyTabValue: boolean;
    private showEmbededSurveyTabValue: boolean;

    public surveyId: string = null;
    public surveyPostId: string = null;
    public generateValidJSONChangedCallback: (generateValidJSON: boolean) => void;
    public alwaySaveTextInPropertyEditors: boolean = false;
    public onCanShowProperty: Survey.Event<(sender: SurveyEditor, options: any) => any, any> = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
    public onQuestionAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any> = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();

    koIsShowDesigner: any;
    koViewType: any;
    koCanDeleteObject: any;
    koObjects: any; koSelectedObject: any;
    koShowSaveButton: any;
    koGenerateValidJSON: any; koShowOptions: any; koTestSurveyWidth: any;
    selectDesignerClick: any; selectEditorClick: any; selectTestClick: any; selectEmbedClick: any;
    generateValidJSONClick: any; generateReadableJSONClick: any;
    doUndoClick: any; doRedoClick: any;
    deleteObjectClick: any;
    koState: any;
    runSurveyClick: any; embedingSurveyClick: any;
    saveButtonClick: any;
    draggingToolboxItem: any; clickToolboxItem: any;
    dragEnd: any;

    constructor(renderedElement: any = null, options: any = null) {

        this.koShowOptions = ko.observable();
        this.koGenerateValidJSON = ko.observable();
        this.setOptions(options);
        this.koCanDeleteObject = ko.observable(false);

        var self = this;

        this.koState = ko.observable();
        this.koShowSaveButton = ko.observable(false);
        this.koTestSurveyWidth = ko.observable("100%");
        this.saveButtonClick = function () { self.doSave(); };
        this.koObjects = ko.observableArray();
        this.koSelectedObject = ko.observable();
        this.koSelectedObject.subscribe(function (newValue) { self.selectedObjectChanged(newValue != null ? newValue.value : null); });
        this.koGenerateValidJSON.subscribe(function (newValue) {
            if (!self.options) self.options = {};
            self.options.generateValidJSON = newValue;
            if (self.generateValidJSONChangedCallback) self.generateValidJSONChangedCallback(newValue);
        });
        this.surveyObjects = new SurveyObjects(this.koObjects, this.koSelectedObject);
        this.undoRedo = new SurveyUndoRedo();

        this.surveyVerbs = new SurveyVerbs(function () { self.setModified(); });

        this.selectedObjectEditor = new SurveyObjectEditor(this.options);
        this.selectedObjectEditor.onCanShowPropertyCallback = function (object: any, property: Survey.JsonObjectProperty) {
            return self.onCanShowObjectProperty(object, property);
        }
        this.selectedObjectEditor.onPropertyValueChanged.add((sender, options) => {
            self.onPropertyValueChanged(options.property, options.object, options.newValue);
        });
        this.questionEditorWindow = new SurveyPropertyEditorShowWindow();
        this.questionEditorWindow.onCanShowPropertyCallback = function (object: any, property: Survey.JsonObjectProperty) {
            return self.onCanShowObjectProperty(object, property);
        }
        this.pagesEditor = new SurveyPagesEditor(() => { self.addPage(); }, (page: Survey.Page) => { self.surveyObjects.selectObject(page); },
            (indexFrom: number, indexTo: number) => { self.movePage(indexFrom, indexTo); }, (page: Survey.Page) => { self.deleteCurrentObject(); });
        this.surveyEmbeding = new SurveyEmbedingWindow();
        this.toolboxValue = new QuestionToolbox(this.options && this.options.questionTypes ? this.options.questionTypes : null);

        this.koViewType = ko.observable("designer");
        this.koIsShowDesigner = ko.computed(function () { return self.koViewType() == "designer"; });
        this.selectDesignerClick = function () { self.showDesigner(); };
        this.selectEditorClick = function () { self.showJsonEditor(); };
        this.selectTestClick = function () { self.showTestSurvey(); };
        this.selectEmbedClick = function () { self.showEmbedEditor(); };
        this.generateValidJSONClick = function () { self.koGenerateValidJSON(true); };
        this.generateReadableJSONClick = function () { self.koGenerateValidJSON(false); };
        this.runSurveyClick = function () { self.showLiveSurvey(); };
        this.embedingSurveyClick = function () { self.showSurveyEmbeding(); };
        this.deleteObjectClick = function () { self.deleteCurrentObject(); };
        this.draggingToolboxItem = function (item, e) { self.doDraggingToolboxItem(item.json, e); };
        this.clickToolboxItem = function (item) { self.doClickToolboxItem(item.json); };
        this.dragEnd = function (item, e) { self.dragDropHelper.end(); };

        this.doUndoClick = function () { self.doUndoRedo(self.undoRedo.undo()); };
        this.doRedoClick = function () { self.doUndoRedo(self.undoRedo.redo()); };

        this.jsonEditor = new SurveyJSONEditor();
        
        this.text = "";

        if (renderedElement) {
            this.render(renderedElement);
        }
    }
    protected setOptions(options: any) {
        this.options = options;
        this.showJSONEditorTabValue = options && typeof (options.showJSONEditorTab) !== 'undefined' ? options.showJSONEditorTab : true;
        this.showTestSurveyTabValue = options && typeof (options.showTestSurveyTab) !== 'undefined' ? options.showTestSurveyTab : true;
        this.showEmbededSurveyTabValue = options && typeof (options.showEmbededSurveyTab) !== 'undefined' ? options.showEmbededSurveyTab : false;
        this.koShowOptions(options && typeof (options.showOptions) !== 'undefined' ? options.showOptions : false);
        this.koGenerateValidJSON(this.options && this.options.generateValidJSON);
        if (this.selectedObjectEditor) this.selectedObjectEditor.setOptions(options);
    }
    public get survey(): Survey.Survey {
        return this.surveyValue;
    }
    public render(element: any = null, options: any = null) {
        if (options) this.setOptions(options);
        var self = this;
        if (element && typeof element == "string") {
            element = document.getElementById(element);
        }
        if (element) {
            this.renderedElement = element;
        }
        element = this.renderedElement;
        if (!element) return;
        element.innerHTML = templateEditorHtml;
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
        return this.jsonEditor.text;
    }
    public set text(value: string) {
        var textWorker = new SurveyTextWorker(value);
        if (textWorker.isJsonCorrect) {
            this.initSurvey(new Survey.JsonObject().toJsonObject(textWorker.survey));
            this.showDesigner();
            this.setUndoRedoCurrentState(true);
        } else {
            this.setTextValue(value);
            this.koViewType("editor");
        }
    }
    public get toolbox(): QuestionToolbox { return this.toolboxValue; }
    public get customToolboxQuestionMaxCount(): number { return this.toolbox.copiedItemMaxCount; }
    public set customToolboxQuestionMaxCount(value: number) { this.toolbox.copiedItemMaxCount = value; }
    public get state(): string { return this.stateValue; }
    protected setState(value: string) {
        this.stateValue = value;
        this.koState(this.state);
    }
    saveNo: number = 0;
    protected doSave() {
        this.setState("saving");
        if (this.saveSurveyFunc) {
            this.saveNo++;
            var self = this;
            this.saveSurveyFunc(this.saveNo,
                function doSaveCallback(no: number, isSuccess: boolean) {
                    self.setState("saved");
                    if (self.saveNo == no) {
                        if (isSuccess) self.setState("saved");
                        //else TODO
                    }
                });
        }
    }
    protected setModified() {
        this.setState("modified");
        this.setUndoRedoCurrentState();
    }
    private setUndoRedoCurrentState(clearState: boolean = false) {
        if (clearState) {
            this.undoRedo.clear();
        }
        var selObj = this.koSelectedObject() ? this.koSelectedObject().value : null;
        this.undoRedo.setCurrent(this.surveyValue, selObj ? selObj.name : null);
    }
    public get saveSurveyFunc() { return this.saveSurveyFuncValue; }
    public set saveSurveyFunc(value: any) {
        this.saveSurveyFuncValue = value;
        this.koShowSaveButton(value != null);
    }
    public get showOptions() { return this.koShowOptions(); }
    public set showOptions(value: boolean) { this.koShowOptions(value); }
    public get showJSONEditorTab() { return this.showJSONEditorTabValue; }
    public set showJSONEditorTab(value: boolean) { this.showJSONEditorTabValue = value; }
    public get showTestSurveyTab() { return this.showTestSurveyTabValue; }
    public set showTestSurveyTab(value: boolean) { this.showTestSurveyTabValue = value; }
    public get showEmbededSurveyTab() { return this.showEmbededSurveyTabValue; }
    public set showEmbededSurveyTab(value: boolean) { this.showEmbededSurveyTabValue = value; }

    protected onCanShowObjectProperty(object: any, property: Survey.JsonObjectProperty): boolean {
        var options = { obj: object, property: property, canShow: true };
        this.onCanShowProperty.fire(this, options);
        return options.canShow;
    }

    private setTextValue(value: string) {
        this.jsonEditor.text = value;
    }
    public addPage() {
        var name = SurveyHelper.getNewPageName(this.survey.pages);
        var page = <Survey.Page>this.surveyValue.addNewPage(name);
        this.addPageToUI(page);
        this.setModified();
    }
    public getLocString(str: string) { return editorLocalization.getString(str); }
    private movePage(indexFrom: number, indexTo: number) {
        var page = <Survey.Page>this.survey.pages[indexFrom];
        this.survey.pages.splice(indexFrom, 1);
        this.survey.pages.splice(indexTo, 0, page);
        this.pagesEditor.survey = this.survey;
        this.surveyObjects.selectObject(page)
        this.setModified();
    }
    private addPageToUI(page: Survey.Page) {
        this.pagesEditor.survey = this.surveyValue;
        this.surveyObjects.addPage(page);
    }
    private doOnQuestionAdded(question: Survey.QuestionBase) {
        var page = <Survey.Page>this.survey.getPageByQuestion(question);
        this.surveyObjects.addQuestion(page, question);
        var options = { question: question, page: page };
        this.onQuestionAdded.fire(this, options);
        this.survey.render();
    }
    private doOnQuestionRemoved(question: Survey.QuestionBase) {
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
        this.setModified();
        this.survey.render();
    }
    private doUndoRedo(item: UndoRedoItem) {
        this.initSurvey(item.surveyJSON);
        if (item.selectedObjName) {
            var selObj = this.findObjByName(item.selectedObjName);
            if (selObj) {
                this.surveyObjects.selectObject(selObj);
            }
        }
        this.setState(this.undoRedo.koCanUndo() ? "modified" : "saved");
    }
    private findObjByName(name: string): Survey.Base {
        var page = this.survey.getPageByName(name);
        if (page) return page;
        var question = <Survey.QuestionBase>this.survey.getQuestionByName(name);
        if (question) return question;
        return null;
    }
    private canSwitchViewType(newType: string): boolean {
        if (newType && this.koViewType() == newType) return false;
        if (this.koViewType() == "designer") {
            this.jsonEditor.text = this.getSurveyTextFromDesigner();
        }
        if (this.koViewType() != "editor") return true;
        if (!this.jsonEditor.isJsonCorrect) {
            alert(this.getLocString("ed.correctJSON"));
            return false;
        }
        this.initSurvey(new Survey.JsonObject().toJsonObject(this.jsonEditor.survey));
        return true;
    }
    public showDesigner() {
        if (!this.canSwitchViewType("designer")) return;
        this.koViewType("designer");
    }
    public showJsonEditor() {
        if (this.koViewType() == "editor") return;
        this.jsonEditor.show(this.getSurveyTextFromDesigner());
        this.koViewType("editor");
    }
    public showTestSurvey() {
        if (!this.canSwitchViewType(null)) return;
        this.showLiveSurvey();
        this.koViewType("test");
    }
    public showEmbedEditor() {
        if (!this.canSwitchViewType("embed")) return;
        this.showSurveyEmbeding();
        this.koViewType("embed");
    }
    private getSurveyTextFromDesigner() {
        var json = new Survey.JsonObject().toJsonObject(this.survey);
        if (this.options && this.options.generateValidJSON) return JSON.stringify(json, null, 1);
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
        if (this.surveyjs) {
            var self = this;
            this.surveyjs.onkeydown = function (e) {
                if (!e) return;
                if (e.keyCode == 46) self.deleteQuestion();
                if (e.keyCode == 38 || e.keyCode == 40) {
                    self.selectQuestion(e.keyCode == 38);
                }
            };
        }
        this.surveyjsExample = document.getElementById("surveyjsExample");

        this.initSurvey(new SurveyJSON5().parse(SurveyEditor.defaultNewSurveyText));
        this.setUndoRedoCurrentState(true);

        this.jsonEditor.init();
    }
    private initSurvey(json: any) {
        var self = this;
        this.surveyValue = new Survey.Survey();
        this.dragDropHelper = new DragDropHelper(<Survey.ISurvey>this.survey, function () { self.setModified() });
        this.surveyValue["setJsonObject"](json); //TODO
        if (this.surveyValue.isEmpty) {
            this.surveyValue["setJsonObject"](new SurveyJSON5().parse(SurveyEditor.defaultNewSurveyText)); //TODO
        }
        this.surveyValue["dragDropHelper"] = this.dragDropHelper;
        //TODO remove the line above and call the method directly.
        if (this.survey["setDesignMode"]) this.survey["setDesignMode"](true);
        else this.survey.mode = "designer";
        this.survey.render(this.surveyjs);
        this.surveyObjects.survey = this.survey;
        this.pagesEditor.survey = this.survey;
        this.pagesEditor.setSelectedPage(<Survey.Page>this.survey.currentPage);
        this.surveyVerbs.survey = this.survey;
        this.surveyValue["onSelectedQuestionChanged"].add((sender: Survey.Survey, options) => { self.surveyObjects.selectObject(sender["selectedQuestionValue"]); });
        this.surveyValue["onEditQuestion"].add((sender: Survey.Survey, options) => { self.showQuestionEditor(self.koSelectedObject().value); });
        this.surveyValue["onCopyQuestion"].add((sender: Survey.Survey, options) => { self.addCustomToolboxQuestion(self.koSelectedObject().value); });
        this.surveyValue["onFastCopyQuestion"].add((sender: Survey.Survey, options) => { self.fastCopyQuestion(self.koSelectedObject().value); });
        this.surveyValue["onDeleteCurrentObject"].add((sender: Survey.Survey, options) => { self.deleteCurrentObject(); });
        this.surveyValue.onProcessHtml.add((sender: Survey.Survey, options) => { options.html = self.processHtml(options.html); });
        this.surveyValue.onCurrentPageChanged.add((sender: Survey.Survey, options) => { self.pagesEditor.setSelectedPage(<Survey.Page>sender.currentPage); });
        this.surveyValue.onQuestionAdded.add((sender: Survey.Survey, options) => { self.doOnQuestionAdded(options.question); });
        this.surveyValue.onQuestionRemoved.add((sender: Survey.Survey, options) => { self.doOnQuestionRemoved(options.question); });
    }
    private processHtml(html: string): string {
        if (!html) return html;
        var scriptRegEx = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        while (scriptRegEx.test(html)) {
            html = html.replace(scriptRegEx, "");
        }
        return html;
    }
    private doDraggingToolboxItem(json: any, e) {
        this.dragDropHelper.startDragToolboxItem(e, this.getNewQuestionName(), json);
    }
    private doClickToolboxItem(json: any) {
        var name = this.getNewQuestionName();
        var question = Survey.QuestionFactory.Instance.createQuestion(json["type"], name);
        new Survey.JsonObject().toObject(json, question);
        question.name = name;
        this.doClickQuestionCore(question);
    }
    private getNewQuestionName(): string {
        return SurveyHelper.getNewQuestionName(this.survey.getAllQuestions());
    }
    private doClickQuestionCore(question: Survey.QuestionBase) {
        var page = this.survey.currentPage;
        var index = -1;
        if (this.survey["selectedQuestionValue"] != null) {
            index = page.questions.indexOf(this.survey["selectedQuestionValue"]) + 1;
        }
        page.addQuestion(question, index);
        this.dragDropHelper.scrollToElement(document.getElementById(question.id));
        this.setModified();
    }
    private deleteQuestion() {
        var question = this.getSelectedObjAsQuestion();
        if (question) {
            this.deleteCurrentObject();
        }
    }
    private selectQuestion(isUp: boolean) {
        var question = this.getSelectedObjAsQuestion();
        if (question) {
            this.surveyObjects.selectNextQuestion(isUp)
        }
    }
    private getSelectedObjAsQuestion(): Survey.QuestionBase {
        var obj = this.koSelectedObject().value;
        if (!obj) return null;
        return SurveyHelper.getObjectType(obj) == ObjType.Question ? <Survey.QuestionBase>(obj): null;
    }
    private deleteCurrentObject() {
        this.deleteObject(this.koSelectedObject().value);
    }
    public showQuestionEditor(question: Survey.QuestionBase) {
        var self = this;
        this.questionEditorWindow.show(question, function (question) { self.onQuestionEditorChanged(question); });
    }
    private onQuestionEditorChanged(question: Survey.QuestionBase) {
        this.surveyObjects.nameChanged(question);
        this.selectedObjectEditor.ObjectChanged();
        this.setModified();
        this.survey.render();
    }
    public addCustomToolboxQuestion(question: Survey.QuestionBase) {
        this.toolbox.addCopiedItem(question);
    }

    public fastCopyQuestion(question: Survey.QuestionBase) {
        var json = new Survey.JsonObject().toJsonObject(question);
        json.type = question.getType();
        this.doClickToolboxItem( json );
    }

    private deleteObject(obj: any) {
        this.surveyObjects.removeObject(obj);
        var objType = SurveyHelper.getObjectType(obj);
        if (objType == ObjType.Page) {
            this.survey.removePage(obj);
            this.pagesEditor.removePage(obj);
            this.setModified();
        }
        if (objType == ObjType.Question) {
            this.survey.currentPage.removeQuestion(obj);
            this.survey["setselectedQuestion"](null);
            this.surveyObjects.selectObject(this.survey.currentPage);
            this.setModified();
        }
        this.survey.render();
    }
    private showLiveSurvey() {
        if (!this.surveyjsExample) return;
        var json = this.getSurveyJSON();
        if (json != null) {
            if (json.cookieName) {
                delete json.cookieName;
            }
            var survey = new Survey.Survey(json);
            var self = this;
            var surveyjsExampleResults = document.getElementById("surveyjsExampleResults");
            var surveyjsExamplereRun = document.getElementById("surveyjsExamplereRun");
            if (surveyjsExampleResults) surveyjsExampleResults.innerHTML = "";
            if (surveyjsExamplereRun) surveyjsExamplereRun.style.display = "none";
            survey.onComplete.add((sender: Survey.Survey) => { if (surveyjsExampleResults) surveyjsExampleResults.innerHTML = this.getLocString("ed.surveyResults") + JSON.stringify(survey.data); if (surveyjsExamplereRun) surveyjsExamplereRun.style.display = ""; });
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
        this.surveyEmbeding.generateValidJSON = this.options && this.options.generateValidJSON;
        this.surveyEmbeding.show();
    }
    private getSurveyJSON(): any {
        if (this.koIsShowDesigner()) return new Survey.JsonObject().toJsonObject(this.survey);
        if (this.jsonEditor.isJsonCorrect) return new Survey.JsonObject().toJsonObject(this.jsonEditor.survey);
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

Survey.Survey.cssType = "bootstrap";
new Survey.SurveyTemplateText().replaceText(templatePageHtml, "page");
new Survey.SurveyTemplateText().replaceText(templateQuestionHtml, "question");

Survey.Survey.prototype["onCreating"] = function () {
    this.selectedQuestionValue = null;
    this.onSelectedQuestionChanged = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    this.onEditQuestion = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    this.onCopyQuestion = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    this.onFastCopyQuestion = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    this.onDeleteCurrentObject = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    var self = this;
    this.editQuestionClick = function () { self.onEditQuestion.fire(self); };
    this.copyQuestionClick = function () { self.onCopyQuestion.fire(self); };
    this.fastCopyQuestionClick = function () { self.onFastCopyQuestion.fire(self); };
    this.deleteCurrentObjectClick = function () { self.onDeleteCurrentObject.fire(self); }
    this.koDraggingSource = ko.observable(null);
};
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
};
Survey.Survey.prototype["getEditorLocString"] = function (value: string): string {
    return editorLocalization.getString(value);
};

Survey.Page.prototype["onCreating"] = function () {
    var self = this;
    this.dragEnterCounter = 0;
    this.koDragging = ko.observable(-1);
    this.koDraggingQuestion = ko.observable(null);
    this.koDraggingBottom = ko.observable(false);
    this.koDragging.subscribe(function (newValue) {
        if (newValue < 0) {
            self.dragEnterCounter = 0;
            self.koDraggingQuestion(null);
            self.koDraggingBottom(false);
        }
        else {
            var question = newValue >= 0 && newValue < self.questions.length ? self.questions[newValue] : null;
            self.koDraggingQuestion(question);
            self.koDraggingBottom(newValue == self.questions.length);
        }
    });
    this.koDraggingQuestion.subscribe(function (newValue) { if (newValue) newValue.koIsDragging(true); });
    this.koDraggingQuestion.subscribe(function (oldValue) { if (oldValue) oldValue.koIsDragging(false); }, this, "beforeChange");
    this.dragEnter = function (e) { e.preventDefault(); self.dragEnterCounter++; self.doDragEnter(e); };
    this.dragLeave = function (e) { self.dragEnterCounter--; if (self.dragEnterCounter === 0) self.doDragLeave(e); };
    this.dragDrop = function (e) { self.doDrop(e); };
};
Survey.Page.prototype["doDrop"] = function (e) {
    var dragDropHelper = this.data["dragDropHelper"];
    if (dragDropHelper) {
        dragDropHelper.doDrop(e);
    }
};
Survey.Page.prototype["doDragEnter"] = function(e) {
    if (this.questions.length > 0 || this.koDragging() > 0) return;
    var dragDropHelper = this.data["dragDropHelper"];
    if (dragDropHelper && dragDropHelper.isSurveyDragging(e)) {
        this.koDragging(0);
    }
};
Survey.Page.prototype["doDragLeave"] = function (e) {
    var dragDropHelper = this.data["dragDropHelper"];
    if (dragDropHelper) {
        dragDropHelper.doLeavePage(e);
    }
};

Survey.QuestionBase.prototype["onCreating"] = function () {
    var self = this;
    this.dragDropHelperValue = null;
    this.koIsDragging = ko.observable(false);
    this.koIsDraggingSource = ko.observable(false);
    this.dragDropHelper = function () {
        if (self.dragDropHelperValue == null) {
            self.dragDropHelperValue = self.data["dragDropHelper"];
        }
        return self.dragDropHelperValue;
    };
    this.dragOver = function (e) { self.dragDropHelper().doDragDropOver(e, self); };
    this.dragDrop = function (e) { self.dragDropHelper().doDrop(e, self); };
    this.dragStart = function (e) { self.dragDropHelper().startDragQuestion(e, self.name); };
    this.dragEnd = function (e) { self.dragDropHelper().end(); };
    this.koIsSelected = ko.observable(false);
    this.koOnClick = function () {
        if (self.data == null) return;
        self.data["setselectedQuestion"](this);
    }
};

Survey.QuestionBase.prototype["onSelectedQuestionChanged"] = function() {
    if (this.data == null) return;
    this.koIsSelected(this.data["selectedQuestionValue"] == this);
};
