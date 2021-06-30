import { Base, SurveyModel, property } from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { SurveyHelper } from "../surveyHelper";

export class ObjectSelectorItem extends Base {
  public value: Base;
  public text: string;
  public level: number = 0;
  private textInLow: string;
  @property({ defaultValue: true }) visible: boolean;
  public hasText(filteredTextInLow: string): boolean {
    if (!filteredTextInLow) return true;
    if (!this.textInLow) {
      this.textInLow = this.text.toLocaleLowerCase();
    }
    return this.textInLow.indexOf(filteredTextInLow) > -1;
  }
}

export class ObjectSelector extends Base {
  private surveyValue: SurveyModel;
  private deepestLevel: number;
  @property() filteredText: string;
  private filteredTextInLow: string;

  constructor(
    survey: SurveyModel,
    private getObjectDisplayName: (
      obj: Base,
      reason: string
    ) => string = undefined
  ) {
    super();
    this.createNewArray("items");
    this.surveyValue = survey;
    this.rebuild();
  }
  public get survey() {
    return this.surveyValue;
  }
  public get items(): Array<ObjectSelectorItem> {
    return this.getPropertyValue("items");
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "filteredText") {
      this.filteredTextInLow = !!this.filteredText
        ? this.filteredText.toLocaleLowerCase()
        : "";
      this.updateItemsVisibility();
    }
  }
  private rebuild() {
    var objs = [];
    this.deepestLevel = 0;
    var root = this.createItem(this.survey, null);
    objs.push(root);
    for (var i = 0; i < this.survey.pages.length; i++) {
      var page = this.survey.pages[i];
      var pageItem = this.createItem(page, root);
      objs.push(pageItem);
      this.buildElements(objs, this.getElements(page), pageItem);
    }
    this.setPropertyValue("items", objs);
  }
  private updateItemsVisibility() {
    for (var i = this.deepestLevel; i >= 0; i--) {
      this.updateItemsLevelVisibility(i);
    }
  }
  private updateItemsLevelVisibility(level: number) {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      if (item.level !== level) continue;
      item.visible =
        this.hasVisibleChildren(i) || item.hasText(this.filteredTextInLow);
    }
  }
  private hasVisibleChildren(index: number): boolean {
    var level = this.items[index].level;
    for (var i = index + 1; i < this.items.length; i++) {
      if (this.items[i].level <= level) return false;
      if (this.items[i].visible) return true;
    }
    return false;
  }
  private getElements(element: any): Array<any> {
    return SurveyHelper.getElements(element);
  }
  private buildElements(
    objs: Array<any>,
    elements: Array<any>,
    parentItem: ObjectSelectorItem
  ) {
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var item = this.createItem(el, parentItem);
      objs.push(item);
      this.buildElements(objs, this.getElements(el), item);
    }
  }
  private createItem(value: Base, parent: ObjectSelectorItem) {
    var item = new ObjectSelectorItem();
    item.value = value;
    item.level = parent != null ? parent.level + 1 : 0;
    if (item.level > this.deepestLevel) {
      this.deepestLevel = item.level;
    }
    item.text = this.getText(item);
    return item;
  }
  private getText(item: ObjectSelectorItem): string {
    var text = !!this.getObjectDisplayName
      ? this.getObjectDisplayName(item.value, "property-grid")
      : SurveyHelper.getObjectName(item.value, false);
    return text;
  }
}
