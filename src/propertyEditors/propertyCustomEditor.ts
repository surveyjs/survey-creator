import * as Survey from "survey-knockout";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";

export class SurveyPropertyCustomEditor extends SurveyPropertyEditorBase {
    private widgetJSONValue: any;
    public onValueChangedCallback: (newValue: any) => void;
    constructor(property: Survey.JsonObjectProperty, widgetJSON: any = null) {
        super(property);
        this.widgetJSONValue = widgetJSON;
        var self = this;
        this["koAfterRender"] = function (el, con) { self.doAfterRender(el, con); };
    }
    public get editorType(): string { return "custom"; }
    public get widgetJSON(): any { return this.widgetJSONValue; }
    private isValueChanging: boolean = false;
    protected onValueChanged() {
        if(this.isValueChanging) return;
        this.isValueChanging = true;
        super.onValueChanged();
        if(this.onValueChangedCallback) this.onValueChangedCallback(this.editingValue);
        this.isValueChanging = false;
    }
    protected get widgetRender(): any { return this.widgetJSON ? this.widgetJSON.render : null; }
    protected doAfterRender(elements, con) {
        var el = elements[0];
        if (el && this.widgetRender) this.widgetRender(this, el);
    }
}
