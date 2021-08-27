import { SurveyModel, QuestionFactory, QuestionNonValue, Question } from "survey-core";

export class QuestionEmbeddedSurveyModel extends QuestionNonValue {
    public embeddedSurvey: SurveyModel;
    constructor(name: string) {
        super(name);
    }
    public getType(): string {
        return "embeddedsurvey";
    }
}

QuestionFactory.Instance.registerQuestion("embeddedsurvey", (name: string): Question => {return new QuestionEmbeddedSurveyModel(name);})