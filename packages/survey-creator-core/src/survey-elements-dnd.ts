import { DragTypeOverMeEnum, IElement, IPanel, PageModel, PanelModelBase, QuestionRowModel, SurveyElement, SurveyModel } from "survey-core";
import { DragDropSurveyElements } from "./survey-elements";

export class DragDropSurveyElementsInCreator extends DragDropSurveyElements {
  protected duringDragOver(dropTargetNode?: HTMLElement, event?: PointerEvent): void {
    this.dropTarget.dragTypeOverMe = this.dragOverLocation;
    if (this.isDragOverInsideEmptyPanel()) {
      this.dropTarget.dragTypeOverMe = DragTypeOverMeEnum.InsideEmptyPanel;
    }
    this.parentElement = this.dropTarget.isPage
      ? this.dropTarget
      : ((<any>this.dropTarget).page || (<any>this.dropTarget).__page);

    const row = this.parentElement.dragDropFindRow(this.dropTarget);
    if(!!row && row.elements.length > 1 && (this.dropTarget.dragTypeOverMe === DragTypeOverMeEnum.Top || this.dropTarget.dragTypeOverMe === DragTypeOverMeEnum.Bottom)) {
      row.dragTypeOverMe = this.dropTarget.dragTypeOverMe;
      this.dropTarget.dragTypeOverMe = null;
    }
  }
  protected removeDragOverMarker(dropTarget: { dragTypeOverMe: boolean }): void {
    super.removeDragOverMarker(dropTarget);
    const row = this.parentElement?.dragDropFindRow(dropTarget);
    if(!!row) {
      row.dragTypeOverMe = null;
    }
  }

  protected afterDragOver(dropTargetNode?: HTMLElement, event?: PointerEvent): void {

  }
  private getElementIndexInPanel(target: IElement, row: QuestionRowModel): number {
    if (!row) return -1;
    var index = row.elements.indexOf(target);
    if (row.index == 0) return index;
    var prevRow = row.panel.rows[row.index - 1];
    var prevElement = prevRow.elements[prevRow.elements.length - 1];
    return index + row.panel.elements.indexOf(prevElement) + 1;
  }
  public moveElementInPanel(panel: IPanel, src: IElement, target: IElement, targetIndex: number) {
    var srcIndex = (<PanelModelBase>src.parent).elements.indexOf(src);
    if (targetIndex > srcIndex) {
      targetIndex--;
    }
    if(src === target && srcIndex === targetIndex) {
      return;
    }
    panel.removeElement(src);
    panel.addElement(target, targetIndex);
  }

  protected doDrop = () => {
    if (!this.dropTarget) return;
    const page = this.parentElement;
    const target = this.draggedElement;
    const src = this.draggedElement;
    const dest = this.dropTarget;

    const row = page.dragDropFindRow(dest);
    let targetIndex = this.getElementIndexInPanel(dest, row);
    if(this.dragOverLocation === DragTypeOverMeEnum.Right || this.dragOverLocation === DragTypeOverMeEnum.Bottom) {
      targetIndex++;
    }
    const elementsToSetSWNL = [];
    const elementsToResetSWNL = [];

    const srcRow = src && src.parent && (src.parent as PanelModelBase).dragDropFindRow(src);
    if (srcRow && srcRow.elements.length > 1) {
      elementsToSetSWNL.push(src);
      if(srcRow.elements[0] === src) {
        elementsToSetSWNL.push(srcRow.elements[1]);
      }
    }

    if(!!row) {
      if(this.dragOverLocation === DragTypeOverMeEnum.Left) {
        elementsToResetSWNL.push(dest);
        if(row.elements.indexOf(dest) === 0) {
          elementsToSetSWNL.push(target);
        }
      }
      else if(this.dragOverLocation === DragTypeOverMeEnum.Right) {
        elementsToResetSWNL.push(target);
      } else if(row.elements.length > 1) {
        elementsToSetSWNL.push(target);
        if(this.dragOverLocation === DragTypeOverMeEnum.Top) {
          targetIndex = this.getElementIndexInPanel(row.elements[0], row);
        }
        else if(this.dragOverLocation === DragTypeOverMeEnum.Bottom) {
          targetIndex = this.getElementIndexInPanel(row.elements[row.elements.length - 1], row) + 1;
        }
      } else {
        elementsToSetSWNL.push(target);
      }
    }

    if(!!src && !!src.parent) {
      (page.survey as SurveyModel).startMovingQuestion();
      let isSamePanel = !!row && row.panel == src.parent;
      if(isSamePanel) {
        this.moveElementInPanel(row.panel, src, target, targetIndex);
        targetIndex = -1;
      } else {
        src.parent.removeElement(src);
      }
    }
    if(!this.isEdge && !this.isSide && (dest.isPanel || dest.isPage)) {
      dest.addElement(target);
    } else if(!!row && targetIndex > -1) {
      row.panel.addElement(target, targetIndex);
      row.panel.updateRows();
    }
    (page.survey as SurveyModel).stopMovingQuestion();

    elementsToSetSWNL.map((e) => { e.startWithNewLine = true; });
    elementsToResetSWNL.map((e) => { e.startWithNewLine = false; });

    return target;
  }
}
