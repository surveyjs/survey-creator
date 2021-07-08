import {
  Base,
  AdaptiveActionContainer,
  Action,
  SurveyModel,
  SurveyElement
} from "survey-core";
import { CreatorBase } from "../creator-base";

export class ActionContainerViewModel<T extends SurveyModel> extends Base {
  public actionContainer: AdaptiveActionContainer =
    new AdaptiveActionContainer();

  constructor(public creator: CreatorBase<T>, public surveyElement: SurveyElement) {
    super();
  }
  protected getContextActions(): Array<Action> {
    if (this.creator.readOnly) return [];

    let element = this.surveyElement;
    let opts: any = element["allowingOptions"];
    if (!opts) opts = {};
    const items: Array<Action> = [];

    if (opts.allowCopy === undefined || opts.allowCopy) {
      items.push(
        new Action({
          id: "duplicate",
          title: this.creator.getLocString("survey.duplicate"),
          visibleIndex: 10,
          action: () => {
            this.duplicate();
          }
        })
      );
    }

    if (opts.allowDelete === undefined || opts.allowDelete) {
      items.push(
        new Action({
          id: "delete",
          needSeparator: items.length > 0,
          title: this.creator.getLocString("pe.delete"),
          visibleIndex: 30,
          action: () => {
            this.creator.deleteElement(element);
          }
        })
      );
    }
    return items;
  }

  protected duplicate(){}
}
