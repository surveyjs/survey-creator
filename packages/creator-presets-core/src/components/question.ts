import { Action } from "survey-core";
import { QuestionAdornerViewModel } from "survey-creator-core";

export class QuestionPresetAdornerViewModel extends QuestionAdornerViewModel {
  protected buildActions(items: Array<Action>): void {
    super.buildActions(items);
    if (this.element.isQuestion) {
      const title = "Property name: " + this.element.name + ", property type: " + this.element.getType();
      items.push(new Action({
        id: "svc_property_name",
        component: "sv-list-item-content",
        location: "start",
        visibleIndex: 0,
        title: title
      }));
    }
  }
}