import * as ko from "knockout";
import * as jQuery from "jquery";
import * as Survey from "survey-knockout";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {SurveyPropertyEditorFactory} from "./propertyEditorFactory";
import {editorLocalization} from "../editorLocalization";

export class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
    private static afterRenderFuncs;
    public static registerAfteRender(editorType: string, func: (editor: SurveyPropertyModalEditor, el: HTMLElement) => any) {
        if(!SurveyPropertyModalEditor.afterRenderFuncs) SurveyPropertyModalEditor.afterRenderFuncs = {};
        SurveyPropertyModalEditor.afterRenderFuncs[editorType] = func;
    }
    public static getAfterRender(editorType: string): (editor: SurveyPropertyModalEditor, el: HTMLElement) => any {
        if(!SurveyPropertyModalEditor.afterRenderFuncs) return null;
        return SurveyPropertyModalEditor.afterRenderFuncs[editorType];
    }

    public editingObject: any;
    public onApplyClick: any;
    public onOkClick: any;
    public onResetClick: any;
    public modalName: string;
    public modalNameTarget: string;
    koShowApplyButton: any;
    koTitleCaption: any;
    koAfterRender: any;
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
        this.koTitleCaption = ko.observable("");
        if(this.property) {
            this.koTitleCaption(editorLocalization.getString("pe.editProperty")["format"](this.property.name));
        }
        var name = property ? property.name : "";
        this.modalName = "modelEditor" + this.editorType + name;
        this.modalNameTarget = "#" + this.modalName;
        var self = this;
        this.koShowApplyButton = ko.observable(true);
        self.onApplyClick = function () { self.apply(); };
        self.onOkClick = function() {self.apply(); if(!self.koHasError()) jQuery(self.modalNameTarget).modal("hide");; };
        self.onResetClick = function () { self.reset(); };
        self.koAfterRender = function(el, con) { return self.afterRender(el, con); };
    }
    public get isModal(): boolean { return true; }
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
    protected afterRender(elements, con) {
        var afterRenderFunc = SurveyPropertyModalEditor.getAfterRender(this.editorType); 
        if(!afterRenderFunc) return;
        var el = this.GetFirstNonTextElement(elements);
        var tEl = elements[0];
        if (tEl.nodeName == "#text") tEl.data = "";
        tEl = elements[elements.length - 1];
        if (tEl.nodeName == "#text") tEl.data = "";
        afterRenderFunc(this, el);
    }
    private GetFirstNonTextElement(elements: any) {
        if (!elements || !elements.length) return;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].nodeName != "#text" && elements[i].nodeName != "#comment") return elements[i];
        }
        return null;
    }

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
