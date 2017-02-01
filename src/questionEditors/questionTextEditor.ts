import {SurveyQuestionEditorBase, SurveyQuestionEditorTabGeneral, SurveyQuestionProperties} from "./questionEditorBase";
import * as Survey from "survey-knockout";

export class SurveyQuestionTextEditor extends SurveyQuestionEditorBase {
    constructor(public questionBase: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        super(questionBase, onCanShowPropertyCallback);
    }
    protected createGeneralTab(): SurveyQuestionEditorTabGeneral { return new SurveyQuestionEditorTextTabGeneral(this.questionBase, 0, this.properties); }
}

export class SurveyQuestionEditorTextTabGeneral extends SurveyQuestionEditorTabGeneral {
    private inputTypeProperty: Survey.JsonObjectProperty;
    public hasPlaceHolder: boolean;
    public hasInputType: boolean;

    koPlaceHolder: any; koInputType: any; koInputTypeChoices: any;
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number, properties: SurveyQuestionProperties) {
        super(questionBase, visibleIndex, properties);
    }
    protected setUpProperties() {
        super.setUpProperties();
        this.inputTypeProperty = this.properties.getProperty("inputType");
        this.hasInputType = this.inputTypeProperty != null;
        this.hasPlaceHolder = this.properties.getProperty("placeHolder") != null;
        this.koInputTypeChoices = ko.observableArray();
        if (this.inputTypeProperty) {
            this.koInputTypeChoices(this.inputTypeProperty.choices);
        }
        this.koInputType = ko.observable();
        this.koPlaceHolder = ko.observable();
    }
    public get hasAdditionalTemplate(): boolean { return true; }
    public get additionalTemplateHtml(): string { return "questioneditortab-text"; }
    public reset() {
        super.reset();
        if (this.hasInputType) this.koInputType(this.questionBase["inputType"]);
        if (this.hasPlaceHolder) this.koPlaceHolder(this.questionBase["placeHolder"]);
    }
    public apply() {
        super.apply();
        if (this.hasInputType) this.questionBase["inputType"] = this.koInputType();
        if (this.hasPlaceHolder) this.questionBase["placeHolder"] = this.koPlaceHolder();
    }
}

SurveyQuestionEditorBase.registerEditor("text", function (question: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean): SurveyQuestionEditorBase { return new SurveyQuestionTextEditor(question, onCanShowPropertyCallback); });