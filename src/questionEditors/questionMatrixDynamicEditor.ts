import {SurveyQuestionEditorBase, SurveyQuestionEditorTabGeneral, SurveyQuestionProperties} from "./questionEditorBase";
import {SurveyQuestionEditorMatrixDropdownTabGeneral, SurveyQuestionMatrixDropdownEditor} from "./questionMatrixDropdownEditor";
import {editorLocalization} from "../editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyQuestionMatrixDynamicEditor extends SurveyQuestionMatrixDropdownEditor {
    constructor(public questionBase: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        super(questionBase, onCanShowPropertyCallback);
    }
    protected createGeneralTab(): SurveyQuestionEditorTabGeneral { return new SurveyQuestionEditorMatrixDynamicTabGeneral(this.questionBase, 0, this.properties); }
}

export class SurveyQuestionEditorMatrixDynamicTabGeneral extends SurveyQuestionEditorMatrixDropdownTabGeneral {
    public hasRowCount: boolean;
    public hasAddRowText: boolean;
    public hasRemoveRowText: boolean;

    koRowCount: any; koAddRowText: any; koRemoveRowText: any;
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number, properties: SurveyQuestionProperties) {
        super(questionBase, visibleIndex, properties);
    }
    protected setUpProperties() {
        super.setUpProperties();
        this.hasRowCount = this.properties.getProperty("rowCount") != null;
        this.hasAddRowText = this.properties.getProperty("addRowText") != null;
        this.hasRemoveRowText = this.properties.getProperty("removeRowText") != null;

        this.koRowCount = ko.observable();
        this.koAddRowText = ko.observable();
        this.koRemoveRowText = ko.observable();
    }
    public get additionalTemplateHtml(): string { return "questioneditortab-matrixdynamic"; }
    public reset() {
        super.reset();
        if (this.hasRowCount) this.koRowCount(this.questionBase["rowCount"]);
        if (this.hasAddRowText) this.koAddRowText(this.questionBase["addRowText"]);
        if (this.hasRemoveRowText) this.koRemoveRowText(this.questionBase["removeRowText"]);
    }
    public apply() {
        super.apply();
        if (this.hasRowCount) this.questionBase["rowCount"] = this.koRowCount();
        if (this.hasAddRowText) this.questionBase["addRowText"] = this.koAddRowText();
        if (this.hasRemoveRowText) this.questionBase["removeRowText"] = this.koRemoveRowText();
    }
}

SurveyQuestionEditorBase.registerEditor("matrixdynamic", function (question: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean): SurveyQuestionEditorBase { return new SurveyQuestionMatrixDynamicEditor(question, onCanShowPropertyCallback); });