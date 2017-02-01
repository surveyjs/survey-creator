import {SurveyPropertyModalEditor} from "../propertyEditors/propertyModalEditor";
import {SurveyPropertyEditorBase} from "../propertyEditors/propertyEditorBase";
import {editorLocalization} from "../editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyPropertyEditorShowWindow {
    koVisible: any;
    koEditor: any;
    public onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean;
    constructor() {
        this.koVisible = ko.observable(false);
        this.koEditor = ko.observable(null);
    }
    public show(questionBase: Survey.QuestionBase, onChanged: (question: Survey.QuestionBase) => any) {
        var editor = SurveyQuestionEditorBase.createEditor(questionBase, onChanged, this.onCanShowPropertyCallback);
        this.koEditor(editor);
        this.koVisible(true);
        var jQuery = window["jQuery"];
        jQuery("#surveyquestioneditorwindow").modal("show");
    }
}

export class SurveyQuestionProperties {
    private properties: Array<Survey.JsonObjectProperty>;
    constructor(public questionBase: Survey.QuestionBase, public onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        this.properties = Survey.JsonObject.metaData.getProperties(this.questionBase.getType()); 
    }
    public getProperty(propertyName: string): Survey.JsonObjectProperty {
        var property = null;
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == propertyName) {
                property = this.properties[i];
                break;
            }
        }
        if (property && this.onCanShowPropertyCallback) {
            if (!this.onCanShowPropertyCallback(this.questionBase, property)) property = null;
        }
        return property;
    } 
}

export class SurveyQuestionEditorBase {
    public static defaultEditor: string = "questionbase";
    private static editorRegisteredList = {};
    public static registerEditor(name: string, creator: (questionBase: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) => SurveyQuestionEditorBase) {
        SurveyQuestionEditorBase.editorRegisteredList[name] = creator;
    }
    public static createEditor(questionBase: Survey.QuestionBase, onChanged: (question: Survey.QuestionBase) => any,
        onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean): SurveyQuestionEditorBase {
        var className = questionBase.getType();
        var creator = SurveyQuestionEditorBase.editorRegisteredList[className];
        while (!creator && className) {
            //TODO findClass function was made public.
            var metaClass = <Survey.JsonMetadataClass>Survey.JsonObject.metaData["findClass"](className);
            if (!metaClass) break;
            className = metaClass.parentName;
            if (className)  creator = SurveyQuestionEditorBase.editorRegisteredList[className];
        }
        if (!creator) creator = SurveyQuestionEditorBase.editorRegisteredList[SurveyQuestionEditorBase.defaultEditor];
        var editor = creator(questionBase, onCanShowPropertyCallback);
        editor.onChanged = onChanged;
        return editor;
    }
    protected properties: SurveyQuestionProperties;
    public onChanged: (question: Survey.QuestionBase) => any;
    public onApplyClick: any;
    public onResetClick: any;
    koTabs: any; koActiveTab: any; koTitle: any;
    onTabClick: any;
    constructor(public questionBase: Survey.QuestionBase, public onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        var self = this;
        this.properties = new SurveyQuestionProperties(questionBase, onCanShowPropertyCallback);
        self.onApplyClick = function () { self.apply(); };
        self.onResetClick = function () { self.reset(); };
        this.onTabClick = function (tab) { self.koActiveTab(tab.name); };
        var tabs = this.buildTabs();
        this.koActiveTab = ko.observable(tabs[0].name);
        this.koTabs = ko.observableArray(tabs);
        this.koTitle = ko.observable(editorLocalization.getString("pe.qEditorTitle")["format"](this.questionBase.name));
    }
    public hasError(): boolean {
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].hasError()) return true;
        }
        return false;
    }
    public reset() {
        //TODO do nothing for now.
    }
    public apply() {
        if (this.hasError()) return;
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].apply();
        }
        this.koTitle(editorLocalization.getString("pe.qEditorTitle")["format"](this.questionBase.name));
        if (this.onChanged) {
            this.onChanged(this.questionBase);
        }
    }
    private buildTabs(): Array<SurveyQuestionEditorTabBase> {
        var tabs = [];
        this.addTabs(tabs);
        this.addPropertiesTabs(tabs);
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].onCanShowPropertyCallback = this.onCanShowPropertyCallback;
        }
        tabs.sort(function (a, b) { return a.visibleIndex < b.visibleIndex ? -1 : (a.visibleIndex > b.visibleIndex ? 1 : 0); });
        return tabs;
    }
    protected addTabs(tabs: Array<SurveyQuestionEditorTabBase>) {
        tabs.push(this.createGeneralTab());
    }
    protected createGeneralTab(): SurveyQuestionEditorTabGeneral { return new SurveyQuestionEditorTabGeneral(this.questionBase, 0, this.properties); }
    private addPropertiesTabs(tabs: Array<SurveyQuestionEditorTabBase>) {
        var propTabs = [];
        this.getPropertiesTabs(propTabs);
        for (var i = 0; i < propTabs.length; i++) {
            var tabItem = propTabs[i];
            if (!this.properties.getProperty(tabItem.propertyName)) continue;
            var editorTab = new SurveyQuestionEditorTabProperty(this.questionBase, tabItem.propertyName, tabItem.visibleIndex, this.properties);
            if (tabItem.title) editorTab.title = tabItem.title;
            tabs.push(editorTab);
        }
    }
    protected getPropertiesTabs(propTabs: Array<any>) {
        propTabs.push({ propertyName: "visibleIf", visibleIndex: 100 });
    }
}

export class SurveyQuestionEditorTabBase {
    private titleValue: string;
    protected properties: SurveyQuestionProperties;
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number, properties: SurveyQuestionProperties) {
        if (!properties) properties = new SurveyQuestionProperties(questionBase, null);
        this.properties = properties; 
    }
    public get name(): string { return "name"; }
    public get title() {
        if (this.titleValue) return this.titleValue;
        var str = editorLocalization.getString("pe." + this.name);
        return str ? str : this.name;
    }
    public set title(value: string) { this.titleValue = value; }
    public get htmlTemplate(): string { return "questioneditortab-" + this.name; }
    public get templateObject(): any { return this; }
    public hasError(): boolean { return false; }
    public reset() { }
    public apply() { }
    protected getValue(property: Survey.JsonObjectProperty): any {
        if (property.hasToUseGetValue) return property.getValue(this.questionBase);
        return this.questionBase[property.name];
    }
}

export class SurveyQuestionEditorTabGeneral extends SurveyQuestionEditorTabBase {
    private titleProperty: Survey.JsonObjectProperty;
    public hasTitle: boolean;
    public hasVisible: boolean;
    public hasIsRequired: boolean;
    public hasStartWithNewLine: boolean;

    koName: any; koTitle: any; koVisible: any; koIsRequired: any; koStartWithNewLine: any;
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number, properties: SurveyQuestionProperties) {
        super(questionBase, visibleIndex, properties);
        this.setUpProperties();
        this.reset();
    }
    protected setUpProperties() {
        this.titleProperty = this.properties.getProperty("title");
        this.hasTitle = this.titleProperty != null;
        this.hasVisible = this.properties.getProperty("visible") != null;
        this.hasIsRequired = this.properties.getProperty("isRequired") != null;
        this.hasStartWithNewLine = this.properties.getProperty("startWithNewLine") != null;
        this.koName = ko.observable();
        this.koTitle = ko.observable();
        this.koVisible = ko.observable();
        this.koIsRequired = ko.observable();
        this.koStartWithNewLine = ko.observable();
    }
    public get name(): string { return "general"; }
    public get hasAdditionalTemplate(): boolean { return false; }
    public get additionalTemplateHtml(): string { return ""; }
    public hasError(): boolean { return !this.koName(); }
    public reset() {
        this.koName(this.questionBase.name);
        if (this.hasTitle) this.koTitle(this.getValue(this.titleProperty));
        if (this.hasVisible) this.koVisible(this.questionBase.visible);
        if (this.hasIsRequired) this.koIsRequired((<Survey.Question>this.questionBase).isRequired);
        if (this.hasStartWithNewLine) this.koStartWithNewLine(this.questionBase.startWithNewLine);
    }
    public apply() {
        this.questionBase.name = this.koName();
        if (this.hasTitle) (<Survey.Question>this.questionBase).title = this.koTitle();
        if (this.hasVisible) this.questionBase.visible = this.koVisible();
        if (this.hasIsRequired) (<Survey.Question>this.questionBase).isRequired = this.koIsRequired();
        if (this.hasStartWithNewLine) this.questionBase.startWithNewLine = this.koVisible();
    }
}

export class SurveyQuestionEditorTabProperty extends SurveyQuestionEditorTabBase {
    private propertyValue: Survey.JsonObjectProperty;
    private propertyEditorValue: SurveyPropertyModalEditor;
    constructor(public questionBase: Survey.QuestionBase, public propertyName: string, public visibleIndex: number, properties: SurveyQuestionProperties) {
        super(questionBase, visibleIndex, properties);
        this.propertyValue = this.properties.getProperty(propertyName);
        this.propertyEditorValue = <SurveyPropertyModalEditor>SurveyPropertyEditorBase.createEditor(this.property.type, null);
        this.propertyEditorValue.value = this.getValue(this.property);
    }
    public get name(): string { return this.propertyName; }
    public hasError(): boolean { return this.propertyEditor.hasError(); }
    public get htmlTemplate(): string { return "propertyeditorcontent-" + this.property.type; }
    public get templateObject(): any { return this.propertyEditor; }
    public get property(): Survey.JsonObjectProperty { return this.propertyValue; }
    public get propertyEditor(): SurveyPropertyModalEditor { return this.propertyEditorValue; }
    public reset() {
        this.propertyEditorValue.value = this.getValue(this.property);
    }
    public apply() {
        this.propertyEditor.apply();
        this.questionBase[this.propertyName] = this.propertyEditorValue.value;
    }
}

SurveyQuestionEditorBase.registerEditor("questionbase", function (question: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean): SurveyQuestionEditorBase { return new SurveyQuestionEditorBase(question, onCanShowPropertyCallback); });