import { SurveyModel } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { UndoRedoController } from "./undo-redo-controller";
import { UndoRedoManager } from "./undo-redo-manager";

export class UndoRedoPlugin implements ICreatorPlugin {

  constructor(private creator: SurveyCreatorModel) {
    this.model = new UndoRedoController(creator);
    this.model.createActions().forEach(action => creator.toolbar.actions.push(action));
    creator.registerShortcut("undo", {
      affectedTab: "designer",
      hotKey: {
        ctrlKey: true,
        keyCode: 90,
      },
      macOsHotkey: {
        keyCode: 90,
      },
      execute: () => this.model.undo()
    });
    creator.registerShortcut("redo", {
      affectedTab: "designer",
      hotKey: {
        ctrlKey: true,
        keyCode: 89,
      },
      macOsHotkey: {
        keyCode: 89,
      },
      execute: () => this.model.redo()
    });
  }
  public model: any = undefined;
  public activate(): void {}
  public deactivate(): boolean { return true; }
  public update(): void {}
  public addFooterActions() {
    this.model.undoAction && (this.creator.footerToolbar.actions.splice(2, 0, this.model.undoAction));
    this.model.redoAction && (this.creator.footerToolbar.actions.splice(3, 0, this.model.redoAction));
  }
}

export function undoRedoTransaction(transactionName?: string, undoRedoManagerProperty: string = "undoRedoManager") {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const wrappedFunction = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const undoRedoManager: UndoRedoManager = this[undoRedoManagerProperty];
      try {
        undoRedoManager && undoRedoManager.startTransaction(transactionName || propertyKey);
        const result = wrappedFunction.apply(this, args);
        return result;
      } finally {
        undoRedoManager && undoRedoManager.stopTransaction();
      }
    };
    return descriptor;
  };
}

export function ignoreUndoRedo(undoRedoManagerProperty: string = "undoRedoManager") {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const wrappedFunction = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const undoRedoManager: UndoRedoManager = this[undoRedoManagerProperty];
      try {
        undoRedoManager && undoRedoManager.suspend();
        const result = wrappedFunction.apply(this, args);
        return result;
      } finally {
        undoRedoManager && undoRedoManager.resume();
      }
    };
    return descriptor;
  };
}