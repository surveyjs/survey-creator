import { Action, ArrayChanges, Base, ComputedUpdater, property, SurveyModel } from "survey-core";
import { CreatorBase, CreatorEvent } from "../../creator-base";
import { IUndoRedoChange, UndoRedoAction, UndoRedoManager } from "./undo-redo-manager";

export class UndoRedoController extends Base {
  private undoAction: Action;
  private redoAction: Action;

  private onSurveyPropertyValueChangedCallback(
    name: string,
    oldValue: any,
    newValue: any,
    sender: Base,
    arrayChanges: ArrayChanges
  ) {
    if (!this.undoRedoManager || !this.undoRedoManager.isCorrectProperty(sender, name)) {
      return;
    }
    const canUndoRedoMerge = this.undoRedoManager.tryMergeTransaction(sender, name, newValue);
    if (!canUndoRedoMerge) {
      this.undoRedoManager.startTransaction(name + " changed");
      this.undoRedoManager.onPropertyValueChanged(
        name,
        oldValue,
        newValue,
        sender,
        arrayChanges
      );
      this.creator.updateElementsOnLocaleChanged(sender, name);
      this.creator.updateConditionsOnNameChanged(sender, name, oldValue);
      this.undoRedoManager.stopTransaction();
    } else {
      this.creator.notifySurveyPropertyChanged({
        name: name,
        target: sender,
        oldValue: oldValue,
        newValue: newValue
      });
    }
  }

  constructor(private creator: CreatorBase) {
    super();
    this.updateSurvey();
  }
  @property() public undoRedoManager: UndoRedoManager = undefined;
  public updateSurvey(): void {
    const surveyModel = this.creator.survey;
    if (!!surveyModel) {
      surveyModel.onPropertyValueChangedCallback = (
        name: string,
        oldValue: any,
        newValue: any,
        sender: Base,
        arrayChanges: ArrayChanges
      ) => {
        this.onSurveyPropertyValueChangedCallback(
          name,
          oldValue,
          newValue,
          sender,
          arrayChanges
        );
      };
    }
    this.undoRedoManager = new UndoRedoManager();
    this.undoRedoManager.changesFinishedCallback = (actions: UndoRedoAction[], isUndo: boolean) => {
      if(this.notifySurveyMoveItem(actions, isUndo)) return;
      for(let i = actions.length - 1; i >= 0; i--) {
        const action = actions[i];
        if(!!action) {
          const changes = action.getChanges(isUndo);
          this.creator.notifySurveyPropertyChanged({
            name: changes.propertyName,
            target: changes.object,
            oldValue: changes.oldValue,
            newValue: changes.newValue
          });
        }
      }
    };
    this.undoRedoManager.canUndoRedoCallback = () => {
      this.updateUndeRedoActions();
    };
  }
  private notifySurveyMoveItem(actions: UndoRedoAction[], isUndo: boolean): boolean {
    if(actions.length !== 2) false;
    const act1 = actions[0];
    const act2 = actions[1];
    if(!act1 || !act2) return false;
    const changes1 = act1.getChanges(isUndo);
    const changes2 = act2.getChanges(isUndo);
    if(changes1.object !== changes2.object || changes1.propertyName !== changes2.propertyName) return false;
    const act1Del = act1.getDeletedElement(isUndo);
    const act1Ins = act1.getInsertedElement(isUndo);
    const act2Del = act2.getDeletedElement(isUndo);
    const act2Ins = act2.getInsertedElement(isUndo);
    if(act1Del === act1Ins || (act1Del !== act2Ins && act1Ins !== act2Del)) return false;
    const indexFrom = act1Del ? act1.getIndex() : act2.getIndex();
    const indexTo = act1Ins ? act1.getIndex() : act2.getIndex();
    this.creator.notifySurveyItemMoved({
      arrayName: changes1.propertyName,
      parent: changes1.object,
      element: act1Del ? act1Del : act1Ins,
      indexFrom: !isUndo ? indexFrom : indexTo,
      indexTo: !isUndo ? indexTo : indexFrom
    });
    return true;
  }
  private selectElementAfterUndo() {
    this.selectElementAfterUndoCore(this.creator.selectedElement);
  }
  private selectElementAfterUndoCore(obj: Base) {
    if (
      !!obj &&
      !obj.isDisposed &&
      !!obj.getSurvey() &&
      (!this.creator.isObjQuestion(obj) || !!obj["parent"])
    ) {
      this.creator.selectElement(obj);
      return;
    }
    this.creator.selectElement(this.creator.survey);
  }
  public undo() {
    if (!this.undoRedoManager) return;
    this.undoRedoManager.suspend();
    var options = { canUndo: this.undoRedoManager.canUndo() };
    this.onBeforeUndo.fire(this.creator, options);
    this.creator.onBeforeUndo.fire(this.creator, options);
    if (options.canUndo) {
      var item = this.undoRedoManager.undo();
      this.onAfterUndo.fire(this.creator, { state: item });
      this.creator.onAfterUndo.fire(this.creator, { state: item });
      this.selectElementAfterUndo();
    }
    this.undoRedoManager.resume();
  }
  public redo() {
    if (!this.undoRedoManager) return;
    const options = { canRedo: this.undoRedoManager.canRedo() };
    this.onBeforeRedo.fire(this.creator, options);
    this.creator.onBeforeRedo.fire(this.creator, options);
    if (options.canRedo) {
      const item = this.undoRedoManager.redo();
      this.onAfterRedo.fire(this.creator, { state: item });
      this.creator.onAfterRedo.fire(this.creator, { state: item });
      this.selectElementAfterUndo();
    }
  }
  startTransaction(name: string = "") {
    this.undoRedoManager && this.undoRedoManager.startTransaction(name);
  }
  stopTransaction() {
    this.undoRedoManager && this.undoRedoManager.stopTransaction();
  }

  public createActions() {
    const items: Array<Action> = [];
    this.undoAction = new Action({
      id: "action-undo",
      iconName: "icon-undo",
      locTitleName: "ed.undo",
      showTitle: false,
      visible: <any>new ComputedUpdater(() => this.creator.activeTab === "designer"),
      action: () => this.undo()
    });
    this.redoAction = new Action({
      id: "action-redo",
      iconName: "icon-redo",
      locTitleName: "ed.redo",
      showTitle: false,
      visible: <any>new ComputedUpdater(() => this.creator.activeTab === "designer"),
      action: () => this.redo()
    });
    items.push(this.undoAction);
    items.push(this.redoAction);
    this.updateUndeRedoActions();
    return items;
  }
  private updateUndeRedoActions() {
    this.undoAction.enabled = this.undoRedoManager.canUndo();
    this.redoAction.enabled = this.undoRedoManager.canRedo();
  }

  /**
   * The event is called before undo happens.
   * options.canUndo a boolean value. It is true by default. Set it false to hide prevent undo operation.
   */
  public onBeforeUndo: CreatorEvent = new CreatorEvent();
  /**
    * The event is called before redo happens.
    * options.canRedo a boolean value. It is true by default. Set it false to hide prevent redo operation.
    */
  public onBeforeRedo: CreatorEvent = new CreatorEvent();
  /**
    * The event is called after undo happens.
    * options.state is an undo/redo item.
    */
  public onAfterUndo: CreatorEvent = new CreatorEvent();
  /**
    * The event is called after redo happens.
    * options.state is an undo/redo item.
    */
  public onAfterRedo: CreatorEvent = new CreatorEvent();
}
