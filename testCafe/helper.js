import { ClientFunction } from "testcafe";
export const frameworks = ["knockout", "react"];
//export const themes = ["default", "modern", "bootstrap"];
export const url = "http://127.0.0.1:8080/examples_test/";

export const initCreator = ClientFunction((framework, theme, options = {}) => {
    if (framework === "knockout") {
        const creator = new SurveyCreatorKnockout.SurveyCreator(options);
        window.creator = creator;
        ko.applyBindings({ creator: creator });
    }
    else if (framework === "react") {
        const creator = SurveyCreatorReact.createReactSurveyCreator({}, options);
        // ReactDOM.render(
        //   <React.StrictMode>
        //     <SurveyCreatorReact.SurveyCreatorComponent creator={creator}/>
        //   </React.StrictMode>,
        //   document.getElementById("survey-creator")
        // );
    }
});