import { QuestionRatingModel } from "survey-core";
import { QuestionRatingAdornerViewModel } from "../src/components/question-rating";

test("QuestionRatingAdornerViewModel add/remove items w/o ratingItems", () => {
    const ratingQuestion = new QuestionRatingModel("q1");
    const ratingEditor = new QuestionRatingAdornerViewModel(<any>{getContextActions: () => [], onCollectionItemDeletingCallback: () => true}, ratingQuestion, <any>{});

    expect(ratingQuestion.rateMin).toEqual(1);
    expect(ratingQuestion.rateMax).toEqual(5);

    ratingEditor.removeItem(ratingEditor);
    expect(ratingQuestion.rateMin).toEqual(1);
    expect(ratingQuestion.rateMax).toEqual(4);

    ratingEditor.addItem(ratingEditor);
    ratingEditor.addItem(ratingEditor);
    expect(ratingQuestion.rateMin).toEqual(1);
    expect(ratingQuestion.rateMax).toEqual(6);
});

test("QuestionRatingAdornerViewModel add/remove rateValues", () => {
    const ratingQuestion = new QuestionRatingModel("q1");
    ratingQuestion.rateValues =  [
        "item1",
        "item2",
        "item3"
       ];
    const ratingEditor = new QuestionRatingAdornerViewModel(<any>{getContextActions: () => [], onCollectionItemDeletingCallback: () => true}, ratingQuestion, <any>{});

    expect(ratingQuestion.rateValues).toHaveLength(3);

    ratingEditor.removeItem(ratingEditor);
    expect(ratingQuestion.rateValues).toHaveLength(2);

    ratingEditor.addItem(ratingEditor);
    ratingEditor.addItem(ratingEditor);
    expect(ratingQuestion.rateValues).toHaveLength(4);
    expect(ratingQuestion.rateValues[2].value).toEqual("item3");
    expect(ratingQuestion.rateValues[3].value).toEqual("item4");
});
