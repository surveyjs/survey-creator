import {SurveyQuestionEditorBase, SurveyQuestionEditorTabGeneral, SurveyQuestionProperties} from "./questionEditorBase";
import {editorLocalization} from "../editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyQuestionMatrixDropdownEditor extends SurveyQuestionEditorBase {
    constructor(public questionBase: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        super(questionBase, onCanShowPropertyCallback);
    }
    protected getPropertiesTabs(propTabs: Array<any>) {
        super.getPropertiesTabs(propTabs);
        propTabs.push({ propertyName: "columns", visibleIndex: 10 });
        propTabs.push({ propertyName: "rows", visibleIndex: 11 });
        propTabs.push({ propertyName: "choices", visibleIndex: 12, title: editorLocalization.getString("pe.matrixChoices") });
    }

    protected createGeneralTab(): SurveyQuestionEditorTabGeneral { return new SurveyQuestionEditorMatrixDropdownTabGeneral(this.questionBase, 0, this.properties); }
}

export class SurveyQuestionEditorMatrixDropdownTabGeneral extends SurveyQuestionEditorTabGeneral {
    private cellTypeProperty: Survey.JsonObjectProperty;
    public hasCellType: boolean;

    koCellType: any; koCellTypeChoices: any;
    constructor(public questionBase: Survey.QuestionBase, public visibleIndex: number, properties: SurveyQuestionProperties) {
        super(questionBase, visibleIndex, properties);
    }
    protected setUpProperties() {
        super.setUpProperties();
        this.cellTypeProperty = this.properties.getProperty("cellType");
        this.hasCellType = this.cellTypeProperty != null;
        this.koCellTypeChoices = ko.observableArray();
        if (this.cellTypeProperty) {
            this.koCellTypeChoices(this.cellTypeProperty.choices);
        }
        this.koCellType = ko.observable();
    }
    public get hasAdditionalTemplate(): boolean { return true; }
    public get additionalTemplateHtml(): string { return "questioneditortab-matrixdropdown"; }
    public reset() {
        super.reset();
        if (this.hasCellType) this.koCellType(this.questionBase["cellType"]);
    }
    public apply() {
        super.apply();
        if (this.hasCellType) this.questionBase["cellType"] = this.koCellType();
    }
}

SurveyQuestionEditorBase.registerEditor("matrixdropdown", function (question: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean): SurveyQuestionEditorBase { return new SurveyQuestionMatrixDropdownEditor(question, onCanShowPropertyCallback); });