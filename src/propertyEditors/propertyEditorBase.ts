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
    private value_: any = null;
    private optionsValue: ISurveyObjectEditorOptions = null; 
    private propertyValue: Survey.JsonObjectProperty;
    public onChanged: (newValue: any) => any;
    public onGetLocale: () => string;
    public editablePropertyName: string;
    constructor(property: Survey.JsonObjectProperty) {
        this.propertyValue = property;
    }
    public get editorType(): string { throw "editorType is not defined"; }
    public get property(): Survey.JsonObjectProperty { return this.propertyValue; }
    public getValueText(value: any): string { return value; }
    public get value(): any { return this.value_; }
    public set value(value: any) {
        value = this.getCorrectedValue(value);
        this.setValueCore(value);
        this.onValueChanged();
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
        this.value_ = value;
    }
    public setTitle(value: string) { }
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
}
