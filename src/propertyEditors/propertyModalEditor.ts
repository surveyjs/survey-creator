import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {SurveyPropertyEditorFactory} from "./propertyEditorFactory";
import {editorLocalization} from "../editorLocalization";
import RModal from "rmodal";

export class SurveyPropertyModalEditorCustomWidget {
    private static customWidgetId = 1;
    private static customWidgetName = "modalEditorCustomWidget";
    constructor(public json: any) {

    }
    public afterRender(editor: SurveyPropertyModalEditor, el: HTMLElement) {
        if(this.json && this.json.afterRender) {
            if(!el.id) {
                el.id = SurveyPropertyModalEditorCustomWidget.customWidgetName + SurveyPropertyModalEditorCustomWidget.customWidgetId;
                SurveyPropertyModalEditorCustomWidget.customWidgetId ++;
            }
            this.json.afterRender(editor, el);
            if(this.json.destroy) {
                var self = this;
                ko.utils.domNodeDisposal.addDisposeCallback(el, function () {
                    self.destroy(editor, el);
                });
            }
        }
    }
    public destroy(editor: SurveyPropertyModalEditor, el: HTMLElement) {
        if(this.json && this.json.destroy) {
            this.json.destroy(editor, el);
        }
    }
}

export class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
    private static customWidgets;
    public static registerCustomWidget(editorType: string, json: any) {
        if(!SurveyPropertyModalEditor.customWidgets) SurveyPropertyModalEditor.customWidgets = {};
        SurveyPropertyModalEditor.customWidgets[editorType] = new SurveyPropertyModalEditorCustomWidget(json);
    }
    public static getCustomWidget(editorType: string): SurveyPropertyModalEditorCustomWidget {
        if(!SurveyPropertyModalEditor.customWidgets) return null;
        return SurveyPropertyModalEditor.customWidgets[editorType];
    }

    public editingObject: any;
    public onApplyClick: any;
    public onOkClick: any;
    public onResetClick: any;
    public onShowModal: any;
    public onHideModal: any;
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

        self.onHideModal = function () {};
        self.onApplyClick = function () { self.apply(); };
        self.onOkClick = function() { self.apply(); if(!self.koHasError()) self.onHideModal() };
        self.onResetClick = function () { self.reset(); self.onHideModal() };
        self.onShowModal = function () {
            var modal = new RModal(document.querySelector(self.modalNameTarget), {
                closeTimeout: 100,
                dialogOpenClass: 'animated fadeInDown',
                focus: false
            });
            modal.open();
    
            document.addEventListener('keydown', function(ev) {
                modal.keydown(ev);
            }, false);
    
            self.onHideModal = function() {modal.close()};
        };
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
        var customWidget = SurveyPropertyModalEditor.getCustomWidget(this.editorType); 
        if(!customWidget) return;
        var el = this.GetFirstNonTextElement(elements);
        var tEl = elements[0];
        if (tEl.nodeName == "#text") tEl.data = "";
        tEl = elements[elements.length - 1];
        if (tEl.nodeName == "#text") tEl.data = "";
        customWidget.afterRender(this, el);
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
export class SurveyPropertyConditionEditor extends SurveyPropertyTextEditor {
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
    }
    public get editorType(): string { return "condition"; }
}

SurveyPropertyEditorFactory.registerEditor("text", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyPropertyTextEditor(property); });
SurveyPropertyEditorFactory.registerEditor("html", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyPropertyHtmlEditor(property); });
SurveyPropertyEditorFactory.registerEditor("condition", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyPropertyConditionEditor(property); });
SurveyPropertyEditorFactory.registerEditor("expression", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyPropertyExpressionEditor(property); });
