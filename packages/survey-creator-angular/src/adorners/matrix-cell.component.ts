import { ChangeDetectorRef, Component, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { ItemValue, PageModel, PanelModel, Question, QuestionSelectBase, SurveyModel } from "survey-core";
import { SurveyCreatorModel, ItemValueWrapperViewModel, MatrixCellWrapperViewModel, QuestionAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "../creator-model.component";

@Component({
  selector: "svc-matrix-cell",
  templateUrl: "./matrix-cell.component.html",
  styles: [":host { display: none; }"]
})
export class MatrixCellComponent extends CreatorModelComponent<MatrixCellWrapperViewModel> {
  @Input() componentName!: string;
  @Input() componentData!: any;
  @Input() contentTempl!: TemplateRef<any>;
  public adorner!: MatrixCellWrapperViewModel;
  private get creator(): SurveyCreatorModel {
    return this.componentData.creator;
  }
  public get question(): QuestionSelectBase {
    return this.componentData.question;
  }
  public get isSupportCellEditor(): boolean {
    return this.adorner.isSupportCellEditor;
  }
  public get column() {
    return this.componentData.column;
  }
  public get element() {
    return this.componentData.element;
  }
  public selectContext(event: MouseEvent) {
    this.adorner.selectContext(this.adorner, event);
  }

  public get row() {
    return this.componentData.row;
  }
  protected createModel(): void {
    if (this.componentData) {
      this.adorner = new MatrixCellWrapperViewModel(this.creator, this.element, this.question, this.row, this.column || this.element.cell?.column);
    }
  }
  protected getPropertiesToTrack(): string[] {
    return ["creator", "row", "column", "question"];
  }
  protected getModel(): MatrixCellWrapperViewModel {
    return this.adorner;
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.adorner.dispose();
  }
}

AngularComponentFactory.Instance.registerComponent("svc-matrix-cell", MatrixCellComponent);
