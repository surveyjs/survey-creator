import { CreatorBase } from "./creator-base";
import { SurveyElementAdornerBase } from "./components/action-container-view-model";

export class ExpandCollapseManager {
  private lockQuestions: boolean = false;
  constructor(private creator: CreatorBase) {
    creator.onSurfaceToolbarActionExecuted.add((_, options) => {
      const isCollapseAction = options.action.id == "collapseAll";
      const isExpandAction = options.action.id == "expandAll";
      if (options.action.id == "lockQuestions") {
        options.action.active = !options.action.active;
        this.lockQuestions = options.action.active;
      }
      if (isCollapseAction || isExpandAction) {
        this.updateCollapsed(isCollapseAction);
      }
    });
  }
  private adorners: Array<SurveyElementAdornerBase> = [];
  public updateCollapsed(isCollapsed: boolean) {
    for (let i = this.adorners.length - 1; i >= 0; i--) {
      if (this.adorners[i].allowExpandCollapse) {
        const reason = isCollapsed ? "collapse-all" : "expand-all";
        const toCollapse = this.adorners[i].element.isQuestion && this.lockQuestions ? this.adorners[i].collapsed : isCollapsed;
        this.adorners[i].collapsed = this.creator.getElementExpandCollapseState(this.adorners[i].element as any, reason, toCollapse);
      }
    }
  }

  public add(adorner: SurveyElementAdornerBase) {
    this.adorners.push(adorner);
  }
  public remove(adorner: SurveyElementAdornerBase) {
    this.adorners.splice(this.adorners.indexOf(adorner), 1);
  }
  public clear() {
    this.adorners.length = 0;
  }
}
