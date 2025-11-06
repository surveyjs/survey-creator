import {
  Base,
  ItemValue,
  property,
  QuestionSelectBase,
  Serializer,
  JsonObjectProperty,
  DragOrClickHelper,
  Helpers,
  ITargets,
  PanelModelBase
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { DragDropChoices } from "survey-core";
import "./item-value.scss";
import { getLocString } from "../editorLocalization";
import { getNextItemText } from "../utils/creator-utils";
import { ICollectionItemAllowOperations } from "../creator-settings";
import { StringEditorConnector } from "./string-editor";
import { ExpandCollapseManager, IExpandCollapseChoice } from "../expand-collapse-manager";
import { SurveyHelper } from "../survey-helper";

const specificChoices = {
  "noneItem": "showNoneItem",
  "otherItem": "showOtherItem",
  "selectAllItem": "showSelectAllItem",
  "refuseItem": "showRefuseItem",
  "dontKnowItem": "showDontKnowItem"
};

export class ItemValueWrapperViewModel extends Base implements IExpandCollapseChoice {
  @property({ defaultValue: false }) isNew: boolean;
  @property({ defaultValue: false }) isDragging: boolean;
  @property({ defaultValue: false }) isDragDropGhost: boolean;
  @property({ defaultValue: false }) isDragDropMoveDown: boolean;
  @property({ defaultValue: false }) isDragDropMoveUp: boolean;
  @property({ defaultValue: null }) ghostPosition: string; // need fot image-item-value
  constructor(
    public creator: SurveyCreatorModel,
    public question: QuestionSelectBase,
    public item: ItemValue
  ) {
    super();
    this.item.onExpandPanelAtDesign.add(this.onExpandPanelAtDesign);
    this.updateIsNew(question, item);
    for (let key in specificChoices) {
      this.registerOnPropertyChanged(key, specificChoices[key]);
    }
    if (this.isNew) {
      question.renderedChoicesChangedCallback = () => {
        this.updateNewItemValue();
      };
      this.updateNewItemValue();
    }
    this.dragDropHelper.onGhostPositionChanged.add(
      this.handleDragDropGhostPositionChanged
    );
    this.dragOrClickHelper = new DragOrClickHelper(this.startDragItemValue);

    this.allowItemOperations = { allowDelete: undefined, allowEdit: undefined, allowAdd: undefined };
    this.collectionProperty = Serializer.findProperty(question.getType(), this.collectionPropertyName);
    this.creator.onCollectionItemAllowingCallback(question.ownerObj || question,
      this.collectionProperty,
      question.visibleChoices,
      this.item,
      this.allowItemOperations
    );
    if (this.allowItemOperations.allowDelete === undefined) {
      this.allowItemOperations.allowDelete = true;
    }
    if (this.allowItemOperations.allowAdd === undefined) {
      this.allowItemOperations.allowAdd = true;
    }
    if (!this.allowItemOperations.allowAdd) {
      this.updateIsNewVisibility();
    }
    if (!this.creator.isCanModifyProperty(question, "choices")) {
      this.canTouchItems = false;
    }
    this.setupShowPanel();
  }

  private dragOrClickHelper: DragOrClickHelper;
  private allowItemOperations: ICollectionItemAllowOperations;
  private canTouchItems: boolean = true;
  private focusCameFromDown: boolean = false;
  private collectionProperty: JsonObjectProperty;

  get canBeDragged(): boolean {
    return !this.isNew && this.question.choices.indexOf(this.item) > -1;
  }
  private isBanStartDrag(pointerDownEvent: PointerEvent): boolean {
    if (!this.isDraggable) return true;
    const isContentEditable = (<HTMLElement>pointerDownEvent.target).getAttribute("contenteditable") === "true";
    return isContentEditable || !this.canBeDragged;
  }
  private updateNewItemValue() {
    if (!this.creator || !this.question || !this.question.newItem) return;
    this.question.newItem.value = this.creator.getNextItemValue(this.question);
    this.question.newItem.text = getNextItemText(this.question.choices);
  }
  private registerOnPropertyChanged(itemName: string, propertyName: string): void {
    if (this.question[itemName] === this.item) {
      const question = this.question;
      const item = this.item;
      const updateFromProperty = () => {
        this.updateIsNew(question, item);
      };
      question.registerFunctionOnPropertyValueChanged(propertyName, updateFromProperty);
    }
  }
  private get collectionPropertyName(): string {
    return !!this.item.ownerPropertyName ? this.item.ownerPropertyName : "choices";
  }

  onPointerDown(pointerDownEvent: PointerEvent) {
    if (this.isBanStartDrag(pointerDownEvent)) return true;
    this.dragOrClickHelper.onPointerDown(pointerDownEvent);
    return false;
  }

  startDragItemValue = (pointerDownEvent: PointerEvent, targets: ITargets) => {
    this.dragDropHelper.startDrag(pointerDownEvent, this.item, this.question, targets.currentTarget);
  };

  private get dragDropHelper(): DragDropChoices {
    return this.creator.dragDropChoices;
  }
  private get expandCollapseManager(): ExpandCollapseManager {
    return this.creator.expandCollapseManager;
  }
  public dispose(): void {
    super.dispose();
    this.dragDropHelper.onGhostPositionChanged.remove(
      this.handleDragDropGhostPositionChanged
    );
    if (this.item) {
      this.item.onExpandPanelAtDesign.remove(this.onExpandPanelAtDesign);
    }
    if (this.canShowPanel()) {
      this.expandCollapseManager.disposeChoice(this.item, this);
    }
  }

  private getGhostPosition(item: any): string {
    if (this.dragDropHelper.dropTarget !== item) return null;
    return this.dragDropHelper.isBottom ? "bottom" : "top";
  }
  private handleDragDropGhostPositionChanged = () => {
    this.ghostPosition = this.getGhostPosition(this.item);
    this.isDragDropGhost = this.item === this.dragDropHelper.draggedElement;

    if (this.item === this.dragDropHelper.prevDropTarget) {
      this.isDragDropMoveDown = (<any>this.item).isDragDropMoveDown;
      this.isDragDropMoveUp = (<any>this.item).isDragDropMoveUp;
    } else {
      this.isDragDropMoveDown = false;
      this.isDragDropMoveUp = false;
    }
  };
  get isDraggable() {
    return this.isDraggableItem(this.item);
  }
  public isDraggableItem(item: ItemValue) {
    if (this.creator.readOnly || !this.canTouchItems) return false;
    return this.question.choices.indexOf(item) !== -1;
  }
  private getSpecificProp(model: ItemValueWrapperViewModel): string {
    for (let key in specificChoices) {
      if (model.question[key] === model.item) return specificChoices[key];
    }
    return undefined;
  }

  public add(model: ItemValueWrapperViewModel) {
    const propName = this.getSpecificProp(model);
    if (propName) {
      model.question[propName] = true;
      return;
    }
    this.addNewItem(model.item, model.question, model.creator);
    this.updateIsNew(model.question, model.item);
  }
  public addNewItem(item: ItemValue, question: QuestionSelectBase, creator: SurveyCreatorModel) {
    item.value = "newitem";
    const itemValue = creator.createNewItemValue(question);
    this.updateNewItemValue();
    StringEditorConnector.get(itemValue.locText).setAutoFocus();
  }

  public remove(model: ItemValueWrapperViewModel) {
    const propName = this.getSpecificProp(model);
    if (propName) {
      model.question[propName] = false;
      return;
    }
    const choices = model.question.choices;
    var index = choices.indexOf(model.item);
    if (!this.creator.onCollectionItemDeletingCallback(model.question, this.collectionProperty, choices, model.item)) return;
    var indexToFocus = this.findNextElementIndexToRemove(index);
    model.question.choices.splice(index, 1);
    this.focusNextElementToRemove(indexToFocus);
    this.updateIsNew(model.question, model.item);
  }

  public onFocusOut(event: any): void {
    this.question["_lastActiveItemValueIndex"] = this.question.choices.indexOf(this.item);
  }

  private findNextElementIndexToRemove(index) {
    let indexToFocus = 0;
    if (this.question.choices.length > 0) {
      if (index < this.question["_lastActiveItemValueIndex"]) {
        indexToFocus = index - 1;
      } else {
        indexToFocus = index;
      }
      if (indexToFocus < 0) indexToFocus = 0;
      if (indexToFocus >= this.question.choices.length - 2) indexToFocus = this.question.choices.length - 2;
    }
    return indexToFocus;
  }
  private focusNextElementToRemove(index) {
    setTimeout(() => {
      const el = document.getElementById(this.question.id);
      const buttons = el.querySelectorAll(".svc-item-value-controls__remove");
      (buttons[index] as HTMLElement)?.focus();
    }, 100
    );
  }
  private updateIsNew(question: QuestionSelectBase, item: ItemValue) {
    this.isNew = !question.isItemInList(item) && !this.isAutoGeneratedItem(item);
    this.updateIsNewVisibility();
  }
  private updateIsNewVisibility(): void {
    if (this.isNew) {
      this.item.setIsVisible(!(this.allowItemOperations?.allowAdd === false));
    }
  }

  get allowRemove() {
    const minChoices = this.creator.minChoices;
    if (minChoices > 0 && minChoices >= this.question.choices.length) return false;
    const isNew = !this.question.isItemInList(this.item);
    const isAutoGenerated = this.isAutoGeneratedItem(this.item);
    return !this.creator.readOnly && this.canTouchItems && (this.allowItemOperations.allowDelete) && !isNew && !isAutoGenerated;
  }
  get tooltip() {
    return getLocString(this.isNew ? "pe.addItem" : "pe.removeItem");
  }
  get dragTooltip() {
    return getLocString("pe.dragItem");
  }
  get allowAdd() {
    const isNew = !this.question.isItemInList(this.item);
    const isAutoGenerated = this.isAutoGeneratedItem(this.item);
    return !this.creator.readOnly && this.canTouchItems && (this.allowItemOperations.allowAdd) && isNew && !isAutoGenerated;
  }
  public select(model: ItemValueWrapperViewModel, event: Event|undefined) {
    if (model.question.inMatrixMode) return;
    model.creator.selectElement(model.question, "choices", false);
    event && event.stopPropagation();
  }
  private isAutoGeneratedItem(item: ItemValue): boolean {
    const val = item.value;
    if (!Helpers.isNumber(val)) return false;
    const min = this.question.choicesMin;
    const max = this.question.choicesMax;
    if (!Helpers.isNumber(min) || !Helpers.isNumber(max) || min === max && min === 0) return false;
    return val >= min && val <= max;
  }
  private canShowPanelValue: boolean = undefined;
  public canShowPanel(): boolean {
    if (this.canShowPanelValue === undefined) {
      this.canShowPanelValue = this.calcCanShowPanel();
    }
    return this.canShowPanelValue;
  }
  private calcCanShowPanel(): boolean {
    if (!this.item.supportElements) return false;
    const level = this.creator.maxChoiceContentNestingLevel;
    if (level <= 0) return false;
    if (this.question.isBuiltInChoice(this.item)) return false;
    let parent = this.question.parent;
    let index = 0;
    while(!!parent && index < level && SurveyHelper.isChoiceItemPanel(parent as PanelModelBase)) {
      index++;
      parent = parent.parent;
    }
    return !!parent && index < level;
  }
  public get showPanel(): boolean {
    return this.getPropertyValue("showPanel", false);
  }
  public set showPanel(val: boolean) {
    if (val && !this.canShowPanel()) return;
    if (val) {
      this.item.panel.onFirstRendering();
    }
    this.expandCollapseManager.setChoicesState(this.item, val, this);
    this.expandCollapse(val);
  }
  public expandCollapse(val: boolean): void {
    this.setPropertyValue("showPanel", val);
  }
  public togglePanel(): void {
    this.showPanel = !this.showPanel;
  }
  private onExpandPanelAtDesign = () => {
    this.showPanel = true;
  };
  private setupShowPanel() {
    const state = this.expandCollapseManager.isChoiceExpanded(this.item);
    if (state) {
      this.showPanel = true;
    }
  }
}
