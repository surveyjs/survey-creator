import { DragDropSurveyElements, DragTypeOverMeEnum, IElement, PanelModelBase, QuestionRowModel, SurveyModel } from "survey-core";

export class DragDropSurveyElementsInCreator extends DragDropSurveyElements {
  protected duringDragOver(dropTargetNode?: HTMLElement, event?: PointerEvent): void {
    this.dropTarget.dragTypeOverMe = this.dragOverLocation;
    if (this.isDragOverInsideEmptyPanel()) {
      this.dropTarget.dragTypeOverMe = DragTypeOverMeEnum.InsideEmptyPanel;
      return;
    }

    this.parentElement = this.dropTarget.isPage
      ? this.dropTarget
      : ((<any>this.dropTarget).page || (<any>this.dropTarget).__page);

  }
  protected afterDragOver(dropTargetNode?: HTMLElement, event?: PointerEvent): void {

  }
  private dragDropGetElementIndex(target: IElement, row: QuestionRowModel): number {
    if (!row) return -1;
    var index = row.elements.indexOf(target);
    if (row.index == 0) return index;
    var prevRow = row.panel.rows[row.index - 1];
    var prevElement = prevRow.elements[prevRow.elements.length - 1];
    return index + row.panel.elements.indexOf(prevElement) + 1;
  }
  protected doDrop = () => {
    if (!this.dropTarget) return;
    const page = this.parentElement;
    var target = this.draggedElement;
    var src = this.draggedElement;
    var dest = this.dropTarget;
    var row = page.dragDropFindRow(dest);
    var targetIndex = this.dragDropGetElementIndex(dest, row);
    if(this.dragOverLocation === DragTypeOverMeEnum.Right || this.dragOverLocation === DragTypeOverMeEnum.Bottom) {
      targetIndex++;
    }
    var elementsToSetSWNL = [];
    var elementsToResetSWNL = [];
    if (!!row) {
      var isSamePanel = false;

      var srcRow = src && src.parent && (src.parent as PanelModelBase).dragDropFindRow(src);
      if (row.panel.elements[targetIndex] && row.panel.elements[targetIndex].startWithNewLine && row.elements.length > 1 && row.panel.elements[targetIndex] === dest) {
        elementsToSetSWNL.push(target);
        elementsToResetSWNL.push(row.panel.elements[targetIndex]);
      }
      if (target.startWithNewLine && row.elements.length > 1 && (!row.panel.elements[targetIndex] || !row.panel.elements[targetIndex].startWithNewLine)) {
        elementsToResetSWNL.push(target);
      }
      if (srcRow && srcRow.elements[0] === src && srcRow.elements[1]) {
        elementsToSetSWNL.push(srcRow.elements[1]);
      }
      if (row.elements.length <= 1) {
        elementsToSetSWNL.push(target);
      }
      if (target.startWithNewLine && row.elements.length > 1 && row.elements[0] !== dest) {
        elementsToResetSWNL.push(target);
      }

      if (!!src && !!src.parent) {
        (page.survey as SurveyModel).startMovingQuestion();
        isSamePanel = row.panel == src.parent;
        if (isSamePanel) {
          row.panel.dragDropMoveElement(src, target, targetIndex);
          targetIndex = -1;
        } else {
          src.parent.removeElement(src);
        }
      }
      if (targetIndex > -1) {
        row.panel.addElement(target, targetIndex);
      }
      (page.survey as SurveyModel).stopMovingQuestion();
    }
    elementsToSetSWNL.map((e) => { e.startWithNewLine = true; });
    elementsToResetSWNL.map((e) => { e.startWithNewLine = false; });

    return target;
  }
}
