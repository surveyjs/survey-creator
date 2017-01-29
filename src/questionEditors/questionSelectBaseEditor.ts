import {SurveyQuestionEditorBase} from "./questionEditorBase";
import * as Survey from "survey-knockout";

export class SurveyQuestionSelectBaseEditor extends SurveyQuestionEditorBase {
    constructor(public questionBase: Survey.QuestionBase) {
        super(questionBase);
    }
    protected getPropertiesTabs(propTabs: Array<any>) {
        super.getPropertiesTabs(propTabs);
        propTabs.push({ propertyName: "choices", visibleIndex: 10 });
    }

}

SurveyQuestionEditorBase.registerEditor("selectbase", function (question: Survey.QuestionBase): SurveyQuestionEditorBase { return new SurveyQuestionSelectBaseEditor(question); });