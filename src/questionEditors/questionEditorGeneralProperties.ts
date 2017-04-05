import * as ko from "knockout";
import {editorLocalization} from "../editorLocalization";
import * as Survey from "survey-knockout";



export class SurveyQuestionEditorGeneralProperty {
    public name: string;
    public title: string;
    public editType: string;
    public disabled: boolean;
    public choices: Array<any> = [];
    koValue: any; koErrorText: any; koHasError: any;
    constructor(public obj: Survey.Base, public property: Survey.JsonObjectProperty, public isRequired: boolean = false) {
        this.name = property.name;
        this.disabled = property["readOnly"];
        this.editType = "text";
        if(property.type == "text") this.editType = "textarea";
        if(property.type == "boolean") this.editType = "check";
        if(property.choices) {
            this.choices = property.choices;
            this.editType = "dropdown";
        }
        this.koValue = ko.observable();
        this.koErrorText = ko.observable("");
        this.koHasError = ko.observable(false);
        this.title = editorLocalization.getString("pe." + this.name);
        if(!this.title) this.title = this.name;
        this.reset();
    }
    public hasError(): boolean {
        var isError = this.isRequired && (this.koValue() !== false) && !this.koValue();
        this.koErrorText(isError ? editorLocalization.getString("pe.propertyIsEmpty"): "");
        this.koHasError(isError);
        return isError;
    }
    public apply() {
        this.obj[this.name] = this.koValue();
    }
    public reset() {
        this.koValue(this.getValue());
    }
    private getValue(): any {
        if (this.property.hasToUseGetValue) return this.property.getValue(this.obj);
        return this.obj[this.name];
    }

}

export class SurveyQuestionEditorGeneralRow {
    public category: string;
    public properties: Array<SurveyQuestionEditorGeneralProperty> = [];
    constructor(public obj: Survey.Base, property: Survey.JsonObjectProperty, isPropertyRequired: boolean = false) {
        this.addProperty(property, isPropertyRequired);
    }
    public addProperty(property: any, isPropertyRequired: boolean = false) {
        this.properties.push(new SurveyQuestionEditorGeneralProperty(this.obj, property, isPropertyRequired));
    }
    public hasError() : boolean {
        var isError = false;
        for(var i = 0; i < this.properties.length; i ++) {
            isError = this.properties[i].hasError() || isError;
        }
        return isError;
    }
}

export class SurveyQuestionEditorGeneralProperties {
    private properties: Array<Survey.JsonObjectProperty>;
    private onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean;
    public rows: Array<SurveyQuestionEditorGeneralRow> = [];
    constructor(public obj: Survey.Base, properties: Array<any>, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean = null) {
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.properties = Survey.JsonObject.metaData.getProperties(this.obj.getType()); 
        this.buildRows(properties);
    }
    public apply() {
        this.applyOrReset(true);
    }
    public reset() {
        this.applyOrReset(false);
    }
    public hasError() : boolean {
        var isError = false;
        for(var i = 0; i < this.rows.length; i ++) {
            isError = this.rows[i].hasError() || isError;
        }
        return isError;
    }
    protected applyOrReset(isApply: boolean) {
        for(var i = 0; i < this.rows.length; i ++) {
            for(var j = 0; j < this.rows[i].properties.length; j ++) {
                if(isApply) this.rows[i].properties[j].apply();
                else this.rows[i].properties[j].reset();
            }
        }
    }
    protected buildRows(properties) {
        var requiredProperties: Array<string> = Survey.JsonObject.metaData.getRequiredProperties(this.obj.getType());
        if(!requiredProperties) requiredProperties = [];
        for(var i = 0 ; i < properties.length; i ++) {
            var name = this.getName(properties[i]);
            var jsonProperty = this.getProperty(name);
            if(!jsonProperty) continue;
            var isPropertyRequired: boolean = requiredProperties.indexOf(name) > -1;
            var row = this.getRowByCategory(properties[i].category);
            if(row) row.addProperty(jsonProperty, isPropertyRequired);
            else {
                row = new SurveyQuestionEditorGeneralRow(this.obj, jsonProperty, isPropertyRequired);
                if(properties[i].category) row.category = properties[i].category;
                this.rows.push(row);
            }
            if(properties[i].title) {
                row.properties[row.properties.length - 1].title = properties[i].title;
            }
        }
   }
   private getName(prop: any): string {
       if(!prop) return null;
        if(typeof prop === "string") return prop;
        if(prop.name) return prop.name;
        return null;
   }
   private getRowByCategory(category: string) {
       if(!category) return null;
       for(var i = 0; i < this.rows.length; i ++) {
           if(this.rows[i].category == category) return this.rows[i];
       }
       return null;
   }
   private getProperty(propertyName: string): Survey.JsonObjectProperty {
       if(!propertyName) return null;
        var property = null;
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == propertyName) {
                property = this.properties[i];
                break;
            }
        }
        //TODO code duplication. This code is in 3 places already, do refactoring.
        if(property && property["visible"] === false) property = null;
        if (property && this.onCanShowPropertyCallback) {
            if (!this.onCanShowPropertyCallback(this.obj, property)) property = null;
        }
        return property;
    } 
}
