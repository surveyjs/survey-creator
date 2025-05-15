import { QuestionRowModel } from "survey-core";
import { PageAdorner } from "survey-creator-core";

export class PagePresetAdorner extends PageAdorner {
  protected updateShowPlaceholder(visibleRows?: Array<QuestionRowModel>): void {
    const rows = visibleRows || this.page.visibleRows;
    let hasElements = rows.length > 0;
    if (rows.length === 1 && (<any>this.page).isPropertyGridCategory) {
      hasElements = false;
    }
    this.showPlaceholder = !this.isGhost && !hasElements;
  }
}