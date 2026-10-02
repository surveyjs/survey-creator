import type { ITesterHost, ITesterOptions } from "survey-creator-core/tester";

// A host, which is all the widget needs to exist: two documents and somewhere to put the edits. It is
// the whole of ITesterHost, so a test that drives SurveyTesterModel through this is driving it exactly
// the way a real host does - there is no test-only entry point anywhere in the widget.
//
// It is the same stub the model tests use one package up, copied rather than imported: those live in
// survey-creator-core's own test tree, which is not published and is not on this package's import path.
export class TesterHostStub implements ITesterHost {
  public surveyJson: any;
  public text: string;
  public options?: ITesterOptions;
  // Every setTestsText, in order. The "the document is the state" promise is asserted against this.
  public writes: Array<string> = [];

  constructor(surveyJson: any, text: string, options?: ITesterOptions) {
    this.surveyJson = surveyJson;
    this.text = text;
    this.options = options;
  }

  public getSurveyJson(): any { return this.surveyJson; }
  public getTestsText(): string { return this.text; }
  public setTestsText(text: string): void {
    this.text = text;
    this.writes.push(text);
  }
}

export function formatSuite(suite: any): string {
  return JSON.stringify(suite, null, 2) + "\n";
}

// Two fixtures, small enough to read whole. The first passes and is what the recorder tests record
// into; the second is deliberately wrong, because a host that never shows a failing check honestly is
// not usable and the smoke test of the runner is about exactly that line.
export const insuranceSurvey = {
  title: "Insurance",
  pages: [
    {
      name: "page1",
      title: "About your cover",
      elements: [
        {
          type: "radiogroup", name: "hasInsurance", title: "Do you have insurance?",
          choices: ["yes", "no"],
        },
        {
          type: "text", name: "insuranceProvider", title: "Who is your provider?",
          visibleIf: "{hasInsurance} = 'yes'", isRequired: true,
        },
      ],
    },
  ],
};

export const insuranceSuite = {
  name: "Insurance",
  options: { clearInvisibleValues: "onComplete" },
  tests: [
    {
      name: "Declining insurance hides the provider question",
      steps: [
        { set: { hasInsurance: "no" } },
        { expect: { insuranceProvider: { visible: false } } },
      ],
    },
    {
      name: "Accepting insurance shows it",
      steps: [
        { set: { hasInsurance: "yes" } },
        { expect: { insuranceProvider: { visible: true, required: true } } },
      ],
    },
  ],
};

export const failingSuite = {
  name: "Failures",
  tests: [
    {
      name: "A value that is simply wrong",
      steps: [
        { set: { hasInsurance: "no" } },
        { expect: { hasInsurance: { value: "yes" } } },
      ],
    },
  ],
};
