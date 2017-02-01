import * as ko from "knockout";
import * as Survey from "survey-knockout";

export class SurveyUndoRedo {
    private items: Array<UndoRedoItem>;
    private index: number = -1;
    public koCanUndo: any; koCanRedo: any;
    public maximumCount: number = 10;
    constructor() {
        this.items = [];
        this.koCanUndo = ko.observable(false);
        this.koCanRedo = ko.observable(false);
    }
    public clear() {
        this.items = [];
        this.koCanUndo(false);
        this.koCanRedo(false);
    }
    public setCurrent(survey: Survey.Survey, selectedObjName: string) {
        var item = new UndoRedoItem();
        item.surveyJSON = new Survey.JsonObject().toJsonObject(survey);
        item.selectedObjName = selectedObjName;
        if (this.index < this.items.length - 1) {
            this.items.splice(this.index + 1);
        }
        this.items.push(item);
        this.removeOldData();
        this.index = this.items.length - 1;
        this.updateCanUndoRedo();
    }
    public undo(): UndoRedoItem {
        if (!this.canUndo) return null;
        return this.doUndoRedo(-1);
    }
    public redo(): UndoRedoItem  {
        if (!this.canRedo) return null;
        return this.doUndoRedo(1);
    }
    private updateCanUndoRedo() {
        this.koCanUndo(this.canUndo);
        this.koCanRedo(this.canRedo);
    }
    private doUndoRedo(dIndex: number): UndoRedoItem {
        this.index += dIndex;
        this.updateCanUndoRedo();
        return this.index >= 0 && this.index < this.items.length ? this.items[this.index] : null;
    }
    protected get canUndo(): boolean {
        return this.index >= 1 && this.index < this.items.length;
    }
    protected get canRedo(): boolean {
        return this.items.length > 1 && this.index < this.items.length - 1;
    }
    private removeOldData() {
        if (this.items.length - 1 < this.maximumCount) return;
        this.items.splice(0, this.items.length - this.maximumCount - 1);
    }
}

export class UndoRedoItem {
    surveyJSON: any;
    selectedObjName: string;
}