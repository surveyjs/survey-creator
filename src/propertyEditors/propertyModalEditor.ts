import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {SurveyPropertyEditorFactory} from "./propertyEditorFactory";

export class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
    public object: any;
    public title: any;
    public onApplyClick: any;
    public onResetClick: any;
    koShowApplyButton: any;
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
        this.title = ko.observable();
        var self = this;
        this.koShowApplyButton = ko.observable(true);
        self.onApplyClick = function () { self.apply(); };
        self.onResetClick = function () { self.reset(); };
    }
    public setTitle(value: string) { this.title(value); }
    public hasError(): boolean { return false; }
    protected onOptionsChanged() {
        this.koShowApplyButton = ko.observable(!this.options || this.options.showApplyButtonInEditors);
    }
    protected onBeforeApply() { }
    private reset() {
        this.value = this.value;
    }
    public setObject(value: any) { 
        this.object = value; 
        super.setObject(value);
    }
    public get isEditable(): boolean { return false; }
    public apply() {
        if (this.hasError()) return;
        this.onBeforeApply();
        if (this.onChanged) {
            this.onChanged(this.value);
        }
    }
}

export class SurveyPropertyTextEditor extends SurveyPropertyModalEditor {
    public koValue: any;

    constructor(property: Survey.JsonObjectProperty) {
        super(property);
        this.koValue = ko.observable();
    }
    public get editorType(): string { return "text"; }
    public get isEditable(): boolean { return true; }
    public getValueText(value: any): string {
        if (!value) return null;
        var str = value;
        if (str.length > 20) {
            str = str.substr(0, 20) + "...";
        }
        return str;
    }
    protected onValueChanged() {
        this.koValue(this.value);
    }
    protected onBeforeApply() {
        this.setValueCore(this.koValue());
    }
}

export class SurveyPropertyHtmlEditor extends SurveyPropertyTextEditor {
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
    }
    public get editorType(): string { return "html"; }
}

export class SurveyPropertyExpressionEditor extends SurveyPropertyTextEditor {
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
    }
    public get editorType(): string { return "expression"; }
}

SurveyPropertyEditorFactory.registerEditor("text", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyPropertyTextEditor(property); });
SurveyPropertyEditorFactory.registerEditor("html", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyPropertyHtmlEditor(property); });
SurveyPropertyEditorFactory.registerEditor("expression", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyPropertyExpressionEditor(property); });
