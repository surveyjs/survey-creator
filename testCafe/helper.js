import { ClientFunction } from "testcafe";

export const url = "http://127.0.0.1:8080/testCafe/testcafe.html";

export const getPages = ClientFunction(() => {
    return creator.survey.pages;
});

export const getQuestions = ClientFunction(() => {
    return creator.survey.getAllQuestions();
});

export const setJSON = ClientFunction((json) => {
    return (creator.text = JSON.stringify(json));
});
