import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {editorLocalization} from "../editorLocalization";

export interface ISurveyObjectEditorOptions {
    alwaySaveTextInPropertyEditors: boolean;
    showApplyButtonInEditors: boolean;
    onItemValueAddedCallback(propertyName: string, itemValue: Survey.ItemValue);
    onMatrixDropdownColumnAddedCallback(column: Survey.MatrixDropdownColumn);
    onSetPropertyEditorOptionsCallback(propertyName: string, obj: Survey.Base, editorOptions: any);
}

export class SurveyPropertyEditorBase {
    private editingValue_: any = null;
    private isApplyinNewValue: boolean = false;
    private objectValue: any;
    private isValueUpdating: boolean;
    private optionsValue: ISurveyObjectEditorOptions = null; 
    private property_: Survey.JsonObjectProperty;
    private isRequriedValue: boolean = false;
    public koValue: any;
    public koText: any;
    public koIsDefault: any;
    public koErrorText: any;
    public onChanged: (newValue: any) => any;
    public onGetLocale: () => string;
    constructor(property: Survey.JsonObjectProperty) {
        this.property_ = property;
        var self = this;
        this.koValue = ko.observable();
        this.koValue.subscribe(function (newValue) { self.onkoValueChanged(newValue); });
        this.koText = ko.computed(() => { return self.getValueText(self.koValue()); });
        this.koIsDefault = ko.computed(function () { return self.property ? self.property.isDefaultValue(self.koValue()) : false; });
        this.koErrorText = ko.observable("");
        this.setIsRequired();
    }
    public get editorType(): string { throw "editorType is not defined"; }
    public get property(): Survey.JsonObjectProperty { return this.property_; }
    public get editablePropertyName(): string { return this.property ? this.property.name : "" };
    
    public get object(): any { return this.objectValue; }
    public set object(value: any) {
        this.objectValue = value;
        this.setIsRequired();
        this.setObject(this.object);
        this.updateValue();
    }
    
    public getValueText(value: any): string { return value; }
    public get editingValue(): any { return this.editingValue_; }
    public set editingValue(value: any) {
        value = this.getCorrectedValue(value);
        this.setValueCore(value);
        this.onValueChanged();
    }
    public hasError(): boolean { 
        if(this.isRequired) {
            var er = Survey.Base.isValueEmpty(this.koValue());
            this.koErrorText(er ? editorLocalization.getString("pe.propertyIsEmpty") : "");
            return er;
        }
        return false; 
    }
    public get isRequired() : boolean { return this.isRequriedValue; }
    //TODO remove this function, replace it with property.isRequired later
    protected setIsRequired() {
        this.isRequriedValue = false;
        if(!this.property || !this.object || !this.object.getType) return;
        var jsonClass = Survey.JsonObject.metaData.findClass(this.object.getType());
        while(jsonClass) {
            var reqProperties = jsonClass.requiredProperties;
            if(reqProperties) {
                this.isRequriedValue = reqProperties.indexOf(this.property.name) > -1;
                if(this.isRequriedValue) return;
            }
            if(!jsonClass.parentName) return;
            jsonClass = Survey.JsonObject.metaData.findClass(jsonClass.parentName);
        }
    }
    protected onBeforeApply() { }
    public apply() {
        if (this.hasError()) return;
        this.onBeforeApply();
        this.isApplyinNewValue = true;
        this.koValue(this.editingValue);
        this.isApplyinNewValue = false;
    }
    public get locale() : string { 
        if(this.onGetLocale) return this.onGetLocale();
        return "";
    }
    public get options(): ISurveyObjectEditorOptions { return this.optionsValue; }
    public set options(value: ISurveyObjectEditorOptions) { 
        this.optionsValue = value; 
        this.onOptionsChanged();
    }
    protected onOptionsChanged() {}
    protected setValueCore(value: any) {
        this.editingValue_ = value;
    }
    public setObject(value: any) { 
        if(this.options) {
            var editorOptions = this.createEditorOptions();
            this.options.onSetPropertyEditorOptionsCallback(this.editablePropertyName, value, editorOptions);
            this.onSetEditorOptions(editorOptions);
        }
    }
    protected createEditorOptions(): any { return {}; }
    protected onSetEditorOptions(editorOptions: any) {}
    protected onValueChanged() {
    }
    protected getCorrectedValue(value: any): any {  return value;  }
    protected updateValue() {
        this.isValueUpdating = true;
        this.koValue(this.getValue());
        this.editingValue = this.koValue()
        this.isValueUpdating = false;
    }
    protected getValue(): any {
        return this.property && this.object ? this.property.getPropertyValue(this.object) : null;
    }
    private onkoValueChanged(newValue: any) {
        if(this.isValueUpdating) return;
        if(!this.isApplyinNewValue) {
            this.editingValue = newValue;
        }
        if (this.property && this.object && this.getValue() == newValue) return;
        if (this.onChanged != null) this.onChanged(newValue);
    }
}
