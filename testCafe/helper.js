import { ClientFunction } from "testcafe";
export const frameworks = ["knockout", "react"];
export const url = "http://127.0.0.1:8080/testCafe/";

export const initCreator = ClientFunction((framework, json = {}, options = {}) => {
    if (framework === "knockout") {
        Survey.StylesManager.applyTheme("modern");
        const creator = new SurveyCreatorKnockout.SurveyCreator(options);
        creator.JSON = json;
        window.creator = creator;
        ko.applyBindings({ creator: creator });
    }
    else if (framework === "react") {
        const creator = SurveyCreatorReact.createReactSurveyCreator(json, options);
        ReactDOM.render(React.createElement(
            SurveyCreatorReact.SurveyCreatorComponent, { creator: creator }, null),
            document.getElementById("survey-creator"));
    }
});