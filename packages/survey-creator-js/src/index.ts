import { preact } from "survey-js-ui";
// eslint-disable-next-line surveyjs/no-imports-from-entries
import { SurveyCreatorComponent, SurveyCreator as SurveyCreatorReact } from "../../survey-creator-react/src/entries/index";

export function renderSurveyCreator(creator: SurveyCreator, element: HTMLElement | string, props: any = {}) {
  let node: HTMLElement = element as HTMLElement;
  if (typeof element === "string") {
    node = document.getElementById(element);
  }
  const survey = preact.createElement(SurveyCreatorComponent, { creator, ...props });
  preact.render(survey, node);
}
export class SurveyCreator extends SurveyCreatorReact {
  public render(target: string | HTMLElement) {
    renderSurveyCreator(this, target);
  }
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