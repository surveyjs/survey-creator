import { Base } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";

export abstract class TabBaseComponent<P, S> extends SurveyElementBase<P, S> {
  private cachedState: Base;
  protected getStateElement(): Base {
    var res = this.getStateModel();
    if (!!res) this.cachedState = res;
    return !!res ? res : this.cachedState;
  }
  protected abstract getStateModel(): Base;
}
