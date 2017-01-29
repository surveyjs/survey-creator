import {SurveyPropertyEditorBase} from "./propertyEditorBase";

export class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
    public object: any;
    public title: any;
    public onApplyClick: any;
    public onResetClick: any;
    constructor() {
        super();
        this.title = ko.observable();
        var self = this;
        self.onApplyClick = function () { self.apply(); };
        self.onResetClick = function () { self.reset(); };
    }
    public setTitle(value: string) { this.title(value); }
    public hasError(): boolean { return false; }
    protected onBeforeApply() { }
    private reset() {
        this.value = this.value;
    }
    public setObject(value: any) { this.object = value; }
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

    constructor() {
        super();
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
    constructor() {
        super();
    }
    public get editorType(): string { return "html"; }
}

SurveyPropertyEditorBase.registerEditor("text", function (): SurveyPropertyEditorBase { return new SurveyPropertyTextEditor(); });
SurveyPropertyEditorBase.registerEditor("html", function (): SurveyPropertyEditorBase { return new SurveyPropertyHtmlEditor(); });
