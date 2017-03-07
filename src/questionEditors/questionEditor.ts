import * as ko from "knockout";
import {SurveyPropertyModalEditor} from "../propertyEditors/propertyModalEditor";
import {SurveyPropertyEditorBase} from "../propertyEditors/propertyEditorBase";
import {editorLocalization} from "../editorLocalization";
import {SurveyQuestionEditorGeneralProperty, SurveyQuestionEditorGeneralRow, SurveyQuestionEditorGeneralProperties} from "./questionEditorGeneralProperties";
import {SurveyQuestionEditorDefinition} from "./questionEditorDefinition";
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
        var editor = new SurveyQuestionEditor(questionBase, this.onCanShowPropertyCallback);
        editor.onChanged = onChanged
        this.koEditor(editor);
        this.koVisible(true);
        var jQuery = window["jQuery"];
        jQuery("#surveyquestioneditorwindow").modal("show");
        editor.onHideWindow = function() {jQuery("#surveyquestioneditorwindow").modal("hide");};
    }
}

export class SurveyQuestionProperties {
    private properties: Array<Survey.JsonObjectProperty>;
    constructor(public obj: Survey.Base, public onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        this.properties = Survey.JsonObject.metaData.getProperties(this.obj.getType()); 
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
            if (!this.onCanShowPropertyCallback(this.obj, property)) property = null;
        }
        return property;
    } 
}

export class SurveyQuestionEditor {
    protected properties: SurveyQuestionProperties;
    public onChanged: (obj: Survey.Base) => any;
    public onHideWindow: ()=> any;
    public onOkClick: any;
    public onApplyClick: any;
    public onResetClick: any;
    koTabs: any; koActiveTab: any; koTitle: any;
    onTabClick: any;
    constructor(public obj: Survey.Base, public onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean, public className: string = null) {
        var self = this;
        if(!this.className) this.className = this.obj.getType();
        this.properties = new SurveyQuestionProperties(obj, onCanShowPropertyCallback);
        self.onApplyClick = function () { self.apply(); };
        self.onOkClick = function() {self.apply(); if(!self.hasError() && self.onHideWindow) self.onHideWindow(); };
        self.onResetClick = function () { self.reset(); };
        this.onTabClick = function (tab) { self.koActiveTab(tab.name); };
        var tabs = this.buildTabs();
        this.koActiveTab = ko.observable(tabs[0].name);
        this.koTabs = ko.observableArray(tabs);
        this.koTitle = ko.observable();
        if(this.obj.name) {
            this.koTitle(editorLocalization.getString("pe.qEditorTitle")["format"](this.obj.name));
        }
    }
    public hasError(): boolean {
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].hasError()) {
                this.koActiveTab(tabs[i].name);
                return true;
            }
        }
        return false;
    }
    public reset() {
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].reset();
        }
    }
    public apply() {
        if (this.hasError()) return;
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].apply();
        }
        if (this.onChanged) {
            this.onChanged(this.obj);
        }
    }
    private buildTabs(): Array<SurveyQuestionEditorTabBase> {
        var tabs = [];
        var properties = new SurveyQuestionEditorGeneralProperties(this.obj, SurveyQuestionEditorDefinition.getProperties(this.className), this.onCanShowPropertyCallback);
        tabs.push(new SurveyQuestionEditorTabGeneral(this.obj, properties));
        this.addPropertiesTabs(tabs);
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].onCanShowPropertyCallback = this.onCanShowPropertyCallback;
        }
        return tabs;
    }
    private addPropertiesTabs(tabs: Array<SurveyQuestionEditorTabBase>) {
        var tabNames = SurveyQuestionEditorDefinition.getTabs(this.className);
        for (var i = 0; i < tabNames.length; i++) {
            var tabItem = tabNames[i];
            var property = this.properties.getProperty(tabItem.name);
            if (!property) continue;
            var editorTab = new SurveyQuestionEditorTabProperty(this.obj, property);
            if (tabItem.title) editorTab.title = tabItem.title;
            tabs.push(editorTab);
        }
    }
}

export class SurveyQuestionEditorTabBase {
    private titleValue: string;
    constructor(public obj: Survey.Base) {
    }
    public get name(): string { return "name"; }
    public get title() {
        if (this.titleValue) return this.titleValue;
        var str = editorLocalization.getString("pe.tabs." + this.name);
        return str ? str : this.name;
    }
    public set title(value: string) { this.titleValue = value; }
    public get htmlTemplate(): string { return "questioneditortab-" + this.name; }
    public get templateObject(): any { return this; }
    public hasError(): boolean { return false; }
    public reset() { }
    public apply() { }
    protected getValue(property: Survey.JsonObjectProperty): any {
        if (property.hasToUseGetValue) return property.getValue(this.obj);
        return this.obj[property.name];
    }
}

export class SurveyQuestionEditorTabGeneral extends SurveyQuestionEditorTabBase {
    constructor(public obj: Survey.Base, public properties: SurveyQuestionEditorGeneralProperties = null) {
        super(obj);
        this.properties = properties ? properties : new SurveyQuestionEditorGeneralProperties(obj, SurveyQuestionEditorDefinition.getProperties(obj.getType()), null);
    }
    public get name(): string { return "general"; }
    public get htmlTemplate(): string { return "questioneditortab-general"; }
    public hasError(): boolean { return this.properties.hasError(); } 
    public reset() {
        this.properties.reset();
    }
    public apply() {
        this.properties.apply();
    }
}

export class SurveyQuestionEditorTabProperty extends SurveyQuestionEditorTabBase {
    private propertyEditorValue: SurveyPropertyModalEditor;
    constructor(public obj: Survey.QuestionBase, public property: Survey.JsonObjectProperty) {
        super(obj);
        this.propertyEditorValue = <SurveyPropertyModalEditor>SurveyPropertyEditorBase.createEditor(this.property.type, null);
        this.propertyEditorValue.value = this.getValue(this.property);
    }
    public get name(): string { return this.property.name; }
    public hasError(): boolean { return this.propertyEditor.hasError(); }
    public get htmlTemplate(): string { return "propertyeditorcontent-" + this.property.type; }
    public get templateObject(): any { return this.propertyEditor; }
    public get propertyEditor(): SurveyPropertyModalEditor { return this.propertyEditorValue; }
    public reset() {
        this.propertyEditorValue.value = this.getValue(this.property);
    }
    public apply() {
        this.propertyEditor.apply();
        this.obj[this.property.name] = this.propertyEditorValue.value;
    }
}