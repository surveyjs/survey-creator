import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {SurveyPropertyEditorFactory} from "./propertyEditorFactory";

export class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
    public editingObject: any;
    public onApplyClick: any;
    public onResetClick: any;
    koShowApplyButton: any;
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
        var self = this;
        this.koShowApplyButton = ko.observable(true);
        self.onApplyClick = function () { self.apply(); };
        self.onResetClick = function () { self.reset(); };
    }
    protected onOptionsChanged() {
        this.koShowApplyButton = ko.observable(!this.options || this.options.showApplyButtonInEditors);
    }
    private reset() {
        this.editingValue = this.koValue();
    }
    public setObject(value: any) { 
        this.editingObject = value; 
        super.setObject(value);
    }
    public get isEditable(): boolean { return false; }
}

export class SurveyPropertyTextEditor extends SurveyPropertyModalEditor {
    public koTextValue: any;

    constructor(property: Survey.JsonObjectProperty) {
        super(property);
        this.koTextValue = ko.observable();
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
        this.koTextValue(this.editingValue);
    }
    protected onBeforeApply() {
        this.setValueCore(this.koTextValue());
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
