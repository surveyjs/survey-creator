import {SurveyQuestionEditorBase} from "./questionEditorBase";
import * as Survey from "survey-knockout";

export class SurveyQuestionMatrixEditor extends SurveyQuestionEditorBase {
    constructor(public questionBase: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean) {
        super(questionBase, onCanShowPropertyCallback);
    }
    protected getPropertiesTabs(propTabs: Array<any>) {
        super.getPropertiesTabs(propTabs);
        propTabs.push({ propertyName: "columns", visibleIndex: 10 });
    }

}

SurveyQuestionEditorBase.registerEditor("matrix", function (question: Survey.QuestionBase, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean): SurveyQuestionEditorBase { return new SurveyQuestionMatrixEditor(question, onCanShowPropertyCallback); });