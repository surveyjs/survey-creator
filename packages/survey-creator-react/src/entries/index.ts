export let Version: string;
Version = `${process.env.VERSION}`;

import "@survey/creator/survey-creator.css";
export * from "../SurveyCreatorComponent";
export * from "../components/tabs/designer";
export * from "../components/toolbox/toolbox";
