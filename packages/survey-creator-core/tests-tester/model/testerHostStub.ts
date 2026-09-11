import type { ITesterHost, ITesterOptions } from "../../src/tester/model/testerHost";

// A host, which is all the widget needs to exist: two documents and somewhere to put the edits. It is
// the whole of ITesterHost, so a test that drives SurveyTesterModel through this is driving it exactly
// the way a real host does - there is no test-only entry point anywhere in the widget.
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
