import { Base, SurveyModel, EventBase, property } from "survey-core";
import { ICreatorSelectionOwner } from "./selection-owner";

interface ISelectionHistoryItem {
  obj: Base;
  propertyName?: string;
}

export class SelectionHistory extends Base {
  private items: Array<ISelectionHistoryItem>;
  private isChangingInternally: boolean;
  constructor(public creator: ICreatorSelectionOwner) {
    super();
    this.items = [];
  }
  public get hasPrev(): boolean {
    return this.currentIndex > 0;
  }
  public get hasNext(): boolean {
    var index = this.currentIndex;
    return index > -1 && index < this.items.length - 1;
  }
  public hasInHistory(obj: Base) {
    return this.getIndex(obj) > -1;
  }
  public prev() {
    this.selectElement(this.currentIndex - 1);
  }
  public next() {
    this.selectElement(this.currentIndex + 1);
  }
  public reset() {
    this.items = [];
    if (!!this.creator.selectedElement) {
      this.onObjSelected(this.creator.selectedElement);
    }
  }
  public selectFromAction(obj: Base, propertyName: string) {
    var index = this.currentIndex;
    if (index > -1 && index < this.items.length) {
      this.items[index].propertyName = propertyName;
    }
    this.creator.selectElement(obj);
  }
  public onObjSelected(obj: Base) {
    if (this.isChangingInternally) return;
    var index = this.currentIndex;
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.items.push({
      obj: obj,
    });
  }
  private get currentIndex(): number {
    return this.getIndex(this.creator.selectedElement);
  }
  private getIndex(obj: Base) {
    if (!obj) return -1;
    this.updateItems();
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].obj == obj) return i;
    }
    return -1;
  }
  private selectElement(index: number) {
    if (index < 0 || index >= this.items.length) return;
    this.isChangingInternally = true;
    var item = this.items[index];
    this.creator.selectElement(item.obj, item.propertyName);
    this.isChangingInternally = false;
  }
  private updateItems() {
    for (var i = this.items.length - 1; i >= 0; i--) {
      var obj = this.items[i].obj;
      if (!!obj && (obj.isDisposed || !obj.inSurvey)) {
        this.items.splice(i, 1);
      }
    }
  }
}
