import { ClientFunction } from "testcafe";

export const url = "http://127.0.0.1:8080/testCafe/testcafe.html";

export const getPagesLength = ClientFunction(() => {
    return creator.survey.pages.length;
});

export const getQuestionsLength = ClientFunction(() => {
    return creator.survey.getAllQuestions().length;
});

export const setJSON = ClientFunction((json) => {
    return (creator.text = JSON.stringify(json));
});

export const getQuestionNameByIndex = ClientFunction((index) => {
    return creator.survey.getAllQuestions()[index].name;
});
