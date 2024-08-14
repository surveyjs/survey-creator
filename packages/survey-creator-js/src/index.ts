import { preact } from "survey-js-ui";
// eslint-disable-next-line surveyjs/no-imports-from-entries
import { SurveyCreatorComponent, SurveyCreator } from "../../survey-creator-react/src/entries/index";

const jQuery = window["jQuery"] || window["$"];

export function renderSurveyCreator(creator: SurveyCreator, element: HTMLElement, props: any = {}) {
  const survey = preact.createElement(SurveyCreatorComponent, { creator, ...props });
  preact.render(survey, element);
}

if (!!jQuery) {
  jQuery["fn"].extend({
    SurveyCreator: function (props: any) {
      return this.each(function () {
        renderSurveyCreator(props.model, this, props);
      } as any);
    },
  });
}