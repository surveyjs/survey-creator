import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyContentComponent } from "survey-angular-ui";
import { SurveyCreatorModel } from "survey-creator-core";

@Component({
  selector: "survey-creator",
  templateUrl: "./creator.component.html"
})
export class CreatorComponent extends BaseAngular<SurveyCreatorModel> implements AfterViewInit {
  @Input() model!: SurveyCreatorModel;
  @ViewChild("container", { read: ElementRef }) container!: ElementRef<HTMLDivElement>

  constructor(changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
    changeDetectorRef.detach();
  }
  protected getModel(): SurveyCreatorModel {
    return this.model;
  }
  public get creator(): SurveyCreatorModel {
    return this.model;
  }
  protected override getShouldReattachChangeDetector(): boolean {
    return false;
  }
  protected override onModelChanged(): void {
    this.changeDetectorRef.detectChanges();
    if(this.previousModel) {
      this.previousModel.unsubscribeRootElement();
    }
    if(this.creator && this.container.nativeElement) {
      this.creator.setRootElement(this.container.nativeElement);
    }
  }
  public ngAfterViewInit(): void {
    this.creator.setRootElement(this.container.nativeElement);
    super.ngOnInit();
  }
  public override ngOnDestroy(): void {
    this.creator.unsubscribeRootElement();
    super.ngOnDestroy();
  }
}

AngularComponentFactory.Instance.registerComponent("survey-widget", SurveyContentComponent);
