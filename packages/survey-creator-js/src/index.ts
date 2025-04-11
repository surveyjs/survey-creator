import { preact } from "survey-js-ui";
// eslint-disable-next-line surveyjs/no-imports-from-entries
import { SurveyCreatorComponent, SurveyCreator } from "../../survey-creator-react/src/entries/index";

export function renderSurveyCreator(creator: SurveyCreator, element: HTMLElement, props: any = {}) {
  const survey = preact.createElement(SurveyCreatorComponent, { creator, ...props });
  preact.render(survey, element);
}

if (typeof window !== "undefined") {
  const jQuery = window["jQuery"] || window["$"];
  if (!!jQuery) {
    jQuery["fn"].extend({
      SurveyCreator: function (props: any) {
        return this.each(function () {
          renderSurveyCreator(props.model, this, props);
        } as any);
      },
    });
  }
}