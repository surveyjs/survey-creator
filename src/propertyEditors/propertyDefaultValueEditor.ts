import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {SurveyPropertyModalEditor} from "./propertyModalEditor";
import {SurveyPropertyEditorBase} from "./propertyEditorBase";
import {editorLocalization} from "../editorLocalization";
import {SurveyPropertyEditorFactory} from "./propertyEditorFactory";

export class SurveyPropertyDefaultValueEditor extends SurveyPropertyModalEditor {
    public survey: Survey.Survey;
    public question: Survey.Question;
    
    constructor(property: Survey.JsonObjectProperty) {
        super(property);
    }
    public getValueText(value: any): string {
        if (!value) return editorLocalization.getString("pe.empty");
        return JSON.stringify(value);
    }
    public setObject(value: any) { 
        super.setObject(value);
        this.createSurvey();
    }
    protected updateValue() {
        super.updateValue();
        if(this.survey) {
            this.survey.setValue(this.object.name, this.editingValue);    
        }
    }
    protected onBeforeApply() {
        if(!this.survey) return;
        this.setValueCore(this.survey.getValue(this.object.name));
    }
    public get editorType(): string { return "value"; }
    private createSurvey() {
        var qjson = new Survey.JsonObject().toJsonObject(this.object);
        qjson.type = this.object.getType();
        delete qjson["visible"];
        delete qjson["visibleIf"];
        delete qjson["enable"];
        delete qjson["enableIf"];
        var json = '{ "questions": [' + JSON.stringify(qjson) + ']}';
        this.survey = new Survey.Survey(json);
        this.survey.setValue(this.object.name, this.editingValue);
        this.survey.showNavigationButtons = false;
        this.survey.showQuestionNumbers = "off";
        this.survey.render("surveyjsDefaultValue");
    }
   
}
SurveyPropertyEditorFactory.registerEditor("value", function (property: Survey.JsonObjectProperty): SurveyPropertyEditorBase { return new SurveyPropertyDefaultValueEditor(property); });