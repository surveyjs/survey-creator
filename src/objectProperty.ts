import {SurveyPropertyEditorBase} from "./propertyEditors/propertyEditorBase";
import {editorLocalization} from "./editorLocalization";
import * as Survey from "survey-knockout";

export declare type SurveyOnPropertyChangedCallback = (property: SurveyObjectProperty, newValue: any) => void;

export class SurveyObjectProperty {
    private objectValue: any;
    private isValueUpdating: boolean;
    private onPropertyChanged: SurveyOnPropertyChangedCallback;
    public name: string;
    public displayName: string;
    public title: string;
    public koValue: any;
    public koText: any;
    public modalName: string;
    public modalNameTarget: string;
    public koIsDefault: any;
    public editor: SurveyPropertyEditorBase;
    public editorType: string;
    public baseEditorType: string;
    public choices: Array<any>;

    constructor(public property: Survey.JsonObjectProperty, onPropertyChanged: SurveyOnPropertyChangedCallback = null, propertyEditorOptions: any = null) {
        this.onPropertyChanged = onPropertyChanged;
        this.name = this.property.name;
        this.koValue = ko.observable();
        this.choices = property.choices;
        var self = this;
        this.editorType = property.type;
        //TODO
        if (this.choices != null) {
            this.editorType = "dropdown";
        }
        var onItemChanged = function (newValue: any) { self.onApplyEditorValue(newValue); };
        this.editor = SurveyPropertyEditorBase.createEditor(this.editorType, onItemChanged);
        this.editor.options = propertyEditorOptions;
        this.editorType = this.editor.editorType;
        this.modalName = "modelEditor" + this.editorType + this.name;
        this.modalNameTarget = "#" + this.modalName;
        this.koValue.subscribe(function (newValue) { self.onkoValueChanged(newValue); });
        this.koText = ko.computed(() => { return self.getValueText(self.koValue()); });
        this.koIsDefault = ko.computed(function () { return self.property.isDefaultValue(self.koValue()); });
    }
    public get object(): any { return this.objectValue; }
    public set object(value: any) {
        this.objectValue = value;
        this.updateValue();
    }
    protected updateValue() {
        this.isValueUpdating = true;
        this.koValue(this.getValue());
        this.editor.setObject(this.object);
        this.editor.setTitle(editorLocalization.getString("pe.editProperty")["format"](this.property.name));
        this.updateEditorData(this.koValue());
        this.isValueUpdating = false;
    }
    private isApplyingNewValue: boolean = false;
    private onApplyEditorValue(newValue: any) {
        this.isApplyingNewValue = true;
        this.koValue(newValue);
        this.isApplyingNewValue = false;
    }
    private onkoValueChanged(newValue: any) {
        if (!this.isApplyingNewValue) {
            this.updateEditorData(newValue);
        }
        if (this.object == null) return;
        if (this.getValue() == newValue) return;
        if (this.onPropertyChanged != null && !this.isValueUpdating) this.onPropertyChanged(this, newValue);
    }
    private updateEditorData(newValue: any) {
        this.editor.value = newValue;
    }
    protected getValue(): any {
        if (this.property.hasToUseGetValue) return this.property.getValue(this.object);
        return this.object[this.name];
    }
    protected getValueText(value: any): string { return this.editor.getValueText(value); }
}