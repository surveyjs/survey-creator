import { Action, ArrayChanges, Base, ComputedUpdater, Event, property, SurveyModel } from "survey-core";
import { CreatorBase, CreatorAction } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import { IUndoRedoChange, UndoRedoManager } from "./undo-redo-manager";

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
    this.undoRedoManager.changesFinishedCallback = (
      changes: IUndoRedoChange
    ) => {
      this.creator.notifySurveyPropertyChanged({
        name: changes.propertyName,
        target: changes.object,
        oldValue: changes.oldValue,
        newValue: changes.newValue
      });
    };
    this.undoRedoManager.canUndoRedoCallback = () => {
      this.updateUndeRedoActions();
    };
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
    this.onBeforeUndo.fire(self, options);
    this.creator.onBeforeUndo.fire(self, options);
    if (options.canUndo) {
      var item = this.undoRedoManager.undo();
      this.onAfterUndo.fire(self, { state: item });
      this.creator.onAfterUndo.fire(self, { state: item });
      this.selectElementAfterUndo();
    }
    this.undoRedoManager.resume();
  }
  public redo() {
    if (!this.undoRedoManager) return;
    const options = { canRedo: this.undoRedoManager.canRedo() };
    this.onBeforeRedo.fire(self, options);
    this.creator.onBeforeRedo.fire(self, options);
    if (options.canRedo) {
      const item = this.undoRedoManager.redo();
      this.onAfterRedo.fire(self, { state: item });
      this.creator.onAfterRedo.fire(self, { state: item });
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
    this.undoAction = new CreatorAction({
      id: "action-undo",
      iconName: "icon-undo",
      locTitleName: "ed.undo",
      showTitle: false,
      visible: <any>new ComputedUpdater(() => this.creator.activeTab === "designer"),
      action: () => this.undo()
    });
    this.redoAction = new CreatorAction({
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
    this.undoAction.active = this.undoRedoManager.canUndo();
    this.redoAction.active = this.undoRedoManager.canRedo();
  }

  /**
   * The event is called before undo happens.
   * options.canUndo a boolean value. It is true by default. Set it false to hide prevent undo operation.
   */
  public onBeforeUndo: Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Event<(sender: CreatorBase, options: any) => any, any>();
  /**
    * The event is called before redo happens.
    * options.canRedo a boolean value. It is true by default. Set it false to hide prevent redo operation.
    */
  public onBeforeRedo: Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Event<(sender: CreatorBase, options: any) => any, any>();
  /**
    * The event is called after undo happens.
    * options.state is an undo/redo item.
    */
  public onAfterUndo: Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Event<(sender: CreatorBase, options: any) => any, any>();
  /**
    * The event is called after redo happens.
    * options.state is an undo/redo item.
    */
  public onAfterRedo: Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Event<(sender: CreatorBase, options: any) => any, any>();
}
