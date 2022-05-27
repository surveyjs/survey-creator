import { SurveyElementBase } from "survey-react-ui";

export class CreatorModelElement<P, S> extends SurveyElementBase<P, S> {
  constructor(props: P) {
    super(props);
    this.createModel();
  }
  componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    if(this.needUpdateModel(prevProps)) {
      this.createModel();
    }
  }
  protected createModel(): void {}
  protected needUpdateModel(prevProps: any): boolean {
    const names = this.getUpdatedModelProps();
    if(!Array.isArray(names)) return true;
    for(var i = 0; i < names.length; i ++) {
      const key = names[i];
      if(this.props[key] !== prevProps[key]) return true;
    }
    return false;
  }
  protected getUpdatedModelProps(): string[] {
    return undefined;
  }
}