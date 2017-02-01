import {SurveyQuestionEditorBase, SurveyQuestionEditorTabGeneral, SurveyQuestionProperties} from "./questionEditorBase";
import {editorLocalization} from "../editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyQuestionMultipleTextEditor extends SurveyQuestionEditorBase {
    constructor(public questionBase: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        super(questionBase, onCanShowPropertyCallback);
    }
    protected getPropertiesTabs(propTabs: Array<any>) {
        super.getPropertiesTabs(propTabs);
        propTabs.push({ propertyName: "items", visibleIndex: 10, title: editorLocalization.getString("pe.multipleTextItems") });
    }
    protected createGeneralTab(): SurveyQuestionEditorTabGeneral { return new SurveyQuestionEditorMultipleTextTabGeneral(this.questionBase, 0, this.properties); }
}

export class SurveyQuestionEditorMultipleTextTabGeneral extends SurveyQuestionEditorTabGeneral {
    private colCountProperty: Survey.JsonObjectProperty;
    public hasColCount: boolean;

    koColCount: any; koColCountChoices: any;
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number, properties: SurveyQuestionProperties) {
        super(questionBase, visibleIndex, properties);
    }
    protected setUpProperties() {
        super.setUpProperties();
        this.colCountProperty = this.properties.getProperty("colCount");
        this.hasColCount = this.colCountProperty != null;
        this.koColCountChoices = ko.observableArray();
        if (this.hasColCount) {
            this.koColCountChoices(this.colCountProperty.choices);
        }
        this.koColCount = ko.observable();
    }
    public get hasAdditionalTemplate(): boolean { return true; }
    public get additionalTemplateHtml(): string { return "questioneditortab-multipletext"; }
    public reset() {
        super.reset();
        if (this.hasColCount) this.koColCount(this.questionBase["colCount"]);
    }
    public apply() {
        super.apply();
        if (this.hasColCount) this.questionBase["colCount"] = this.koColCount();
    }
}

SurveyQuestionEditorBase.registerEditor("multipletext", function (question: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean): SurveyQuestionEditorBase { return new SurveyQuestionMultipleTextEditor(question, onCanShowPropertyCallback); });