import { SurveyCreatorModel } from "../creator-base";
import { Base, SurveyModel, property, ListModel, IAction, Action } from "survey-core";
import { SurveyHelper } from "../survey-helper";
import { listComponentCss } from "../components/list-theme";

export class ObjectSelectorItem extends Action {
  private textInLow: string;

  constructor(
    id: number,
    data: Base,
    title: string,
    public level: number
  ) {
    super({ id: "sv_item_selector_" + id.toString(), title: title });
    this.data = data;
  }
  public hasText(filteredTextInLow: string): boolean {
    if (!filteredTextInLow) return true;
    if (!this.textInLow) {
      this.textInLow = this.title.toLocaleLowerCase();
    }
    return this.textInLow.indexOf(filteredTextInLow) > -1;
  }
}

export class ObjectSelector {
  private surveyValue: SurveyModel;
  private deepestLevel: number;
  private filteredTextInLow: string;
  private itemsValue: Array<ObjectSelectorItem>;
  constructor(
    private creator: SurveyCreatorModel,
    survey: SurveyModel,
    private getObjectDisplayName: (
      obj: Base,
      area: string,
      reason: string,
      displayName: string
    ) => string = undefined
  ) {
    this.surveyValue = survey;
    this.rebuild();
  }
  public get survey() {
    return this.surveyValue;
  }
  public get items(): Array<ObjectSelectorItem> {
    return this.itemsValue;
  }
  public getItemByObj(obj: Base): IAction {
    var items = this.items;
    for (var i = 0; i < items.length; i++) {
      if (items[i].data === obj) return items[i];
    }
    return null;
  }
  public filterByText(filteredText: string): void {
    this.filteredTextInLow = !!filteredText ? filteredText.toLocaleLowerCase() : "";
    this.updateItemsVisibility();
  }
  private rebuild() {
    var objs = [];
    this.deepestLevel = 0;
    var root = this.createItem(this.survey, null);
    objs.push(root);
    for (var i = 0; i < this.survey.pages.length; i++) {
      var page = this.survey.pages[i];
      var itemsParent = root;
      if (!this.creator || this.creator.pageEditMode !== "single") {
        var pageItem = this.createItem(page, root);
        objs.push(pageItem);
        itemsParent = pageItem;
      }
      this.buildElements(objs, this.getElements(page), itemsParent);
    }
    this.itemsValue = objs;
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
      item.visible = this.hasVisibleChildren(i) || item.hasText(this.filteredTextInLow);
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
  private static uniqueId = 0;
  private createItem(obj: Base, parent: ObjectSelectorItem) {
    var item = new ObjectSelectorItem(
      ObjectSelector.uniqueId++,
      obj,
      this.getText(obj),
      parent != null ? parent.level + 1 : 0
    );
    if (item.level > this.deepestLevel) {
      this.deepestLevel = item.level;
    }
    return item;
  }
  private getText(obj: Base): string {
    var text = !!this.getObjectDisplayName
      ? this.getObjectDisplayName(obj, "property-grid-header:element-list", "property-grid", undefined)
      : SurveyHelper.getObjectName(obj, false);
    return text;
  }
}
export class ObjectSelectorModel extends Base {
  private selector: ObjectSelector;
  private listModelValue: ListModel;

  @property() isVisible: boolean;

  constructor(private creator: SurveyCreatorModel, private getObjectDisplayName: (obj: Base, area: string, reason: string, displayName: string) => string = undefined) {
    super();
  }
  public get list(): ListModel {
    return this.listModelValue;
  }
  public show(
    survey: SurveyModel,
    selectedObj: Base,
    onClose: (obj: Base) => void
  ) {
    this.selector = new ObjectSelector(this.creator, survey, this.getObjectDisplayName);
    const selectedItem = this.selector.getItemByObj(selectedObj);
    if (!this.listModelValue) {
      this.listModelValue = new ListModel<Action>({
        items: this.selector.items,
        onSelectionChanged: (item: IAction) => { onClose(item.data); },
        allowSelection: true,
        cssClasses: listComponentCss,
        selectedItem: selectedItem,
        listRole: "menu",
        listItemRole: "menuitemradio",
        locOwner: this.creator
      });
      this.listModelValue.setOnFilterStringChangedCallback((text: string) => {
        this.selector.filterByText(text);
      });
    } else {
      this.listModelValue.setItems(this.selector.items);
      this.listModelValue.selectedItem = selectedItem;
    }
    this.isVisible = true;
  }
  public refresh() {
    this.listModelValue.refresh();
  }
}
