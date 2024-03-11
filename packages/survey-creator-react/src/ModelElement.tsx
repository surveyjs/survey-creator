import { SurveyElementBase } from "survey-react-ui";

export class CreatorModelElement<P, S> extends SurveyElementBase<P, S> {
  constructor(props: P) {
    super(props);
    this.createModel(props);
  }
  shouldComponentUpdate(nextProps: any, nextState: any): boolean {
    const result = super.shouldComponentUpdate(nextProps, nextState);
    if (result) {
      if (this.needUpdateModel(nextProps)) {
        this.createModel(nextProps);
      }
    }
    return result;
  }
  protected createModel(props: any): void { }
  protected needUpdateModel(nextProps: any): boolean {
    const names = this.getUpdatedModelProps();
    if (!Array.isArray(names)) return true;
    for (var i = 0; i < names.length; i++) {
      const key = names[i];
      if (this.props[key] !== nextProps[key]) return true;
    }
    return false;
  }
  protected getUpdatedModelProps(): string[] {
    return undefined;
  }
}