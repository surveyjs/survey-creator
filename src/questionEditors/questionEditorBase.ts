import {SurveyPropertyModalEditor} from "../propertyEditors/propertyModalEditor";
import {SurveyPropertyEditorBase} from "../propertyEditors/propertyEditorBase";
import {editorLocalization} from "../editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyPropertyEditorShowWindow {
    koVisible: any;
    koEditor: any;
    constructor() {
        this.koVisible = ko.observable(false);
        this.koEditor = ko.observable(null);
    }
    public show(questionBase: Survey.QuestionBase, onChanged: (question: Survey.QuestionBase) => any) {
        this.koEditor(SurveyQuestionEditorBase.createEditor(questionBase, onChanged));
        this.koVisible(true);
        var jQuery = window["jQuery"];
        jQuery("#surveyquestioneditorwindow").modal("show");
    }
}


export class SurveyQuestionEditorBase {
    public static defaultEditor: string = "questionbase";
    private static editorRegisteredList = {};
    public static registerEditor(name: string, creator: (questionBase: Survey.QuestionBase) => SurveyQuestionEditorBase) {
        SurveyQuestionEditorBase.editorRegisteredList[name] = creator;
    }
    public static createEditor(questionBase: Survey.QuestionBase, onChanged: (question: Survey.QuestionBase) => any): SurveyQuestionEditorBase {
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
        var editor = creator(questionBase);
        editor.onChanged = onChanged;
        return editor;
    }

    public onChanged: (question: Survey.QuestionBase) => any;
    public onApplyClick: any;
    public onResetClick: any;
    koTabs: any; koActiveTab: any; koTitle: any;
    onTabClick: any;
    constructor(public questionBase: Survey.QuestionBase) {
        var self = this;
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
    private buildTabs(): Array<SurveyQuestionEditorTabBase> {
        var tabs = [];
        this.addTabs(tabs);
        this.addPropertiesTabs(tabs);
        tabs.sort(function (a, b) { return a.visibleIndex < b.visibleIndex ? -1 : (a.visibleIndex > b.visibleIndex ? 1 : 0); });
        return tabs;
    }
    protected addTabs(tabs: Array<SurveyQuestionEditorTabBase>) {
        tabs.push(new SurveyQuestionEditorTabGeneral(this.questionBase, 0));
    }
    private addPropertiesTabs(tabs: Array<SurveyQuestionEditorTabBase>) {
        var propTabs = [];
        this.getPropertiesTabs(propTabs);
        for (var i = 0; i < propTabs.length; i++) {
            var tabItem = propTabs[i];
            tabs.push(new SurveyQuestionEditorTabProperty(this.questionBase, tabItem.propertyName, tabItem.visibleIndex));
        }
    }
    protected getPropertiesTabs(propTabs: Array<any>) {
        propTabs.push({ propertyName: "visibleIf", visibleIndex: 100 });
    }
    public reset() {
        
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
}

export class SurveyQuestionEditorTabBase {
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number) {
    }
    public get name(): string { return "name"; }
    public get title() {
        var str = editorLocalization.getString("pe." + this.name);
        return str ? str : this.name;
    }
    public get htmlTemplate(): string { return "questioneditortab-" + this.name; }
    public get templateObject(): any { return this; }
    public hasError(): boolean { return false; }
    public reset() { }
    public apply() { }
    protected getValue(property: Survey.JsonObjectProperty): any {
        if (property.hasToUseGetValue) return property.getValue(this.questionBase);
        return this.questionBase[property.name];
    }
    protected getProperty(propertyName: string): Survey.JsonObjectProperty {
        var properties = Survey.JsonObject.metaData.getProperties(this.questionBase.getType());
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == propertyName) return properties[i];
        }
        return null;
    } 
}

export class SurveyQuestionEditorTabGeneral extends SurveyQuestionEditorTabBase {
    private titleProperty: Survey.JsonObjectProperty;
    koName: any; koTitle: any; koHasTitle: any;
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number) {
        super(questionBase, visibleIndex);
        this.titleProperty = this.getProperty("title");
        this.koHasTitle = ko.observable(this.titleProperty != null);
        this.koName = ko.observable(questionBase.name);
        if (this.titleProperty) {
            this.koTitle = ko.observable(this.getValue(this.titleProperty));
        }
    }
    public get name(): string { return "general"; }
    public hasError(): boolean { return !this.koName(); }
    public reset() {
        this.koName(this.questionBase.name);
        if (this.titleProperty) {
            this.koTitle(this.getValue(this.titleProperty));
        }
    }
    public apply() {
        this.questionBase.name = this.koName();
        if (this.titleProperty) {
            this.questionBase["title"] = this.koTitle();
        }
    }
}

export class SurveyQuestionEditorTabProperty extends SurveyQuestionEditorTabBase {
    private propertyValue: Survey.JsonObjectProperty;
    private propertyEditorValue: SurveyPropertyModalEditor;
    constructor(public questionBase: Survey.QuestionBase, public propertyName: string, public visibleIndex: number) {
        super(questionBase, visibleIndex);
        this.propertyValue = this.getProperty(propertyName);
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

SurveyQuestionEditorBase.registerEditor("questionbase", function (question: Survey.QuestionBase): SurveyQuestionEditorBase { return new SurveyQuestionEditorBase(question); });