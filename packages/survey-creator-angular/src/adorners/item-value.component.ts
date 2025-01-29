
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { ItemValue, PageModel, PanelModel, Question, QuestionSelectBase, SurveyModel } from "survey-core";
import { SurveyCreatorModel, ItemValueWrapperViewModel, QuestionAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "../creator-model.component";

@Component({
  selector: "svc-item-value",
  templateUrl: "./item-value.component.html",
  styles: [":host { display: none; }"]
})
export class ItemValueDesignerComponent extends CreatorModelComponent<ItemValueWrapperViewModel> implements AfterViewInit {
  @Input() componentName!: string;
  @Input() componentData!: any;
  @ViewChild("container", { read: ElementRef }) container!: ElementRef<HTMLDivElement>
  public adorner!: ItemValueWrapperViewModel;
  private prevItem!: ItemValue;
  private get creator(): SurveyCreatorModel {
    return this.componentData.data.creator;
  }
  public get question(): QuestionSelectBase {
    return this.componentData.question;
  }
  public get item(): ItemValue {
    return this.componentData.model;
  }
  public onBlur(event: any) {
    this.adorner.onFocusOut(event);
  }

  private setupContainer() {
    if (this.item && this.container?.nativeElement) {
      this.item.setRootElement(this.container.nativeElement);
    }
  }
  private cleanContainer(item: ItemValue) {
    if(!!item) {
      item.setRootElement(undefined as any);
    }
  }

  protected createModel(): void {
    if (this.componentData) {
      this.adorner = new ItemValueWrapperViewModel(this.creator, this.question, this.item);
      if(this.prevItem !== this.item) {
        this.setupContainer();
        this.cleanContainer(this.prevItem);
        this.prevItem = this.item;
      }
    }
  }
  protected getPropertiesToTrack(): string[] {
    return ["creator", "question", "item"];
  }
  protected getModel(): ItemValueWrapperViewModel {
    return this.adorner;
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.adorner.dispose();
    this.cleanContainer(this.item);
  }
  ngAfterViewInit() {
    this.setupContainer();
  }
}

AngularComponentFactory.Instance.registerComponent("svc-item-value", ItemValueDesignerComponent);
