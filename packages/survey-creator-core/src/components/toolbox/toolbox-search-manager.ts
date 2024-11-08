import { property } from "survey-core";
import { getLocString } from "../../editorLocalization";

import { QuestionToolbox } from "../../toolbox";
import { SearchManager } from "../search-manager";

export class SearchManagerToolbox extends SearchManager {
  @property() toolbox: QuestionToolbox;
  protected getFilterStringPlaceholder(): string { return getLocString("ed.toolboxFilteredTextPlaceholder"); }
  protected setFiterString(newValue: string, oldValue: string) {
    this.toolbox.showSeparators = !newValue;
    this.toolbox.items.forEach(item => item.visible = item.hasText(newValue));
    this.toolbox.showPlaceholder = !this.toolbox.items.filter(i => i.visible).length;
    this.toolbox.categories.forEach(category => {
      category.forceExpand = !!newValue;
      category.empty = category.items.filter(item => item.visible).length == 0;
    });
  }

  public clearFilterString(): void {
    this.filterString = "";
    this.toolbox.rootElement.querySelector("input").focus();
  }
}