import {SurveyQuestionEditorBase, SurveyQuestionEditorTabGeneral, SurveyQuestionProperties} from "./questionEditorBase";
import * as Survey from "survey-knockout";

export class SurveyQuestionCommentEditor extends SurveyQuestionEditorBase {
    constructor(public questionBase: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        super(questionBase, onCanShowPropertyCallback);
    }
    protected createGeneralTab(): SurveyQuestionEditorTabGeneral { return new SurveyQuestionCommentTextTabGeneral(this.questionBase, 0, this.properties); }
}

export class SurveyQuestionCommentTextTabGeneral extends SurveyQuestionEditorTabGeneral {
    public hasPlaceHolder: boolean;
    public hasRows: boolean;

    koPlaceHolder: any; koRows: any; 
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number, properties: SurveyQuestionProperties) {
        super(questionBase, visibleIndex, properties);
    }
    protected setUpProperties() {
        super.setUpProperties();
        this.hasRows = this.properties.getProperty("rows") != null;
        this.hasPlaceHolder = this.properties.getProperty("placeHolder") != null;
        //TODO
        this.koRows = ko.observable();
        this.koPlaceHolder = ko.observable();
    }
    public get hasAdditionalTemplate(): boolean { return true; }
    public get additionalTemplateHtml(): string { return "questioneditortab-comment"; }
    public reset() {
        super.reset();
        if (this.hasRows) this.koRows(this.questionBase["rows"]);
        if (this.hasPlaceHolder) this.koPlaceHolder(this.questionBase["placeHolder"]);
    }
    public apply() {
        super.apply();
        if (this.hasRows) {
            var rows = parseInt(this.koRows());
            if (rows < 1) rows = 1;
            if (rows > 100) rows = 100;
            this.koRows(rows);
            this.questionBase["rows"] = this.koRows();
        }
        if (this.hasPlaceHolder) this.questionBase["placeHolder"] = this.koPlaceHolder();
    }
}

SurveyQuestionEditorBase.registerEditor("comment", function (question: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean): SurveyQuestionEditorBase { return new SurveyQuestionCommentEditor(question, onCanShowPropertyCallback); });