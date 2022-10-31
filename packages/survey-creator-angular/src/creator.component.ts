import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyContentComponent } from "survey-angular-ui";
import { CreatorBase } from "survey-creator-core";

@Component({
  selector: "survey-creator",
  templateUrl: "./creator.component.html"
})
export class CreatorComponent extends BaseAngular<CreatorBase> implements AfterViewInit {
  @Input() model!: CreatorBase;
  @ViewChild("container", { read: ElementRef }) container!: ElementRef<HTMLDivElement>

  constructor(changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
    changeDetectorRef.detach();
  }
  protected getModel(): CreatorBase {
    return this.model;
  }
  public get creator(): CreatorBase {
    return this.model;
  }
  protected override onModelChanged(): void {
    this.changeDetectorRef.detectChanges();
  }
  public ngAfterViewInit(): void {
    this.creator.initKeyboardShortcuts(this.container.nativeElement);
    this.creator.initResponsivityManager(this.container.nativeElement);
    super.ngOnInit();
  }
  public override ngOnDestroy(): void {
    this.creator.removeKeyboardShortcuts(this.container.nativeElement);
    this.creator.resetResponsivityManager();
    super.ngOnDestroy();
  }
}

AngularComponentFactory.Instance.registerComponent("survey-widget", SurveyContentComponent);
