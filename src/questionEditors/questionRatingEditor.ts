import {SurveyQuestionEditorBase, SurveyQuestionEditorTabGeneral, SurveyQuestionProperties} from "./questionEditorBase";
import {editorLocalization} from "../editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyQuestionRatingEditor extends SurveyQuestionEditorBase {
    constructor(public questionBase: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        super(questionBase, onCanShowPropertyCallback);
    }
    protected getPropertiesTabs(propTabs: Array<any>) {
        super.getPropertiesTabs(propTabs);
        propTabs.push({ propertyName: "rateValues", visibleIndex: 10 });
    }

    protected createGeneralTab(): SurveyQuestionEditorTabGeneral { return new SurveyQuestionEditorRatingTabGeneral(this.questionBase, 0, this.properties); }
}

export class SurveyQuestionEditorRatingTabGeneral extends SurveyQuestionEditorTabGeneral {
    public hasMininumRateDescription: boolean;
    public hasMaximumRateDescription: boolean;

    koMininumRateDescription: any; koMaximumRateDescription: any;
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number, properties: SurveyQuestionProperties) {
        super(questionBase, visibleIndex, properties);
    }
    protected setUpProperties() {
        super.setUpProperties();
        this.hasMininumRateDescription = this.properties.getProperty("mininumRateDescription") != null;
        this.hasMaximumRateDescription = this.properties.getProperty("maximumRateDescription") != null;
        this.koMininumRateDescription = ko.observableArray();
        this.koMaximumRateDescription = ko.observable();
    }
    public get hasAdditionalTemplate(): boolean { return true; }
    public get additionalTemplateHtml(): string { return "questioneditortab-rating"; }
    public reset() {
        super.reset();
        if (this.hasMininumRateDescription) this.koMininumRateDescription(this.questionBase["mininumRateDescription"]);
        if (this.hasMaximumRateDescription) this.koMaximumRateDescription(this.questionBase["maximumRateDescription"]);
    }
    public apply() {
        super.apply();
        if (this.hasMininumRateDescription) this.questionBase["mininumRateDescription"] = this.koMininumRateDescription();
        if (this.hasMaximumRateDescription) this.questionBase["maximumRateDescription"] = this.koMaximumRateDescription();
    }
}

SurveyQuestionEditorBase.registerEditor("rating", function (question: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean): SurveyQuestionEditorBase { return new SurveyQuestionRatingEditor(question, onCanShowPropertyCallback); });