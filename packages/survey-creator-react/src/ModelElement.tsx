import { SurveyElementBase } from "survey-react-ui";

export class CreatorModelElement<P, S> extends SurveyElementBase<P, S> {
  constructor(props: P) {
    super(props);
    this.createModel();
  }
  componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    this.createModel();
  }
  protected createModel(): void {}
}